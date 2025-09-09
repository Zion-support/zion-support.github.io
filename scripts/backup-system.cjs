

  async createBackup() {
    console.log('💾 Creating system backup...');
    
    try {
      // Create backup directory
      if (!fs.existsSync(this.backupDir)) {
        fs.mkdirSync(this.backupDir { recursive: true })}
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupName = `backup-${timestamp}`;
      const backupPath = path.join(this.backupDir, backupName);
      
      // Create backup
      execSync(`tar -czf ${backupPath}.tar.gz --exclude=node_modules --exclude=.git --exclude=backups .` {
        cwd: this.projectRoot
      });
      
      // Clean old backups
      this.cleanOldBackups();
      
      console.log(`✅ Backup created: ${backupName}.tar.gz`);
      return backupPath} catch (error) {
      console.error('❌ Backup failed:', error.message);
      throw error}
  }

  cleanOldBackups() {
    const backups = fs.readdirSync(this.backupDir)
      .filter(file => file.endsWith('.tar.gz'))
      .map(file => ({
        name: file,
        path: path.join(this.backupDir, file),
        stats: fs.statSync(path.join(this.backupDir, file))
      }))
      .sort((a, b) => b.stats.mtime - a.stats.mtime);
    
    if (backups.length > this.maxBackups) {
      const toDelete = backups.slice(this.maxBackups);
      toDelete.forEach(backup => {
        fs.unlinkSync(backup.path);
        console.log(`🗑️  Deleted old backup: ${backup.name}`)})}
  }

  async restoreBackup(backupName) {
    console.log(`🔄 Restoring backup: ${backupName}`);
    
    try {
      const backupPath = path.join(this.backupDir, backupName);
      
      if (!fs.existsSync(backupPath)) {
        throw new Error(`Backup not found: ${backupName}`)}
      
      // Extract backup
      execSync(`tar -xzf ${backupPath} -C ${this.projectRoot}`);
      
      console.log('✅ Backup restored successfully')} catch (error) {
      console.error('❌ Restore failed:', error.message);
      throw error}
  }

  listBackups() {
    if (!fs.existsSync(this.backupDir)) {
      console.log('No backups found');
      return []}
    
    const backups = fs.readdirSync(this.backupDir)
      .filter(file => file.endsWith('.tar.gz'))
      .map(file => {
        const stats = fs.statSync(path.join(this.backupDir, file));
        return {
          name: file,
          size: Math.round(stats.size / 1024 / 1024 * 100) / 100, // MB
          created: stats.mtime
        }})
      .sort((a, b) => b.created - a.created);
    
    console.log('\n📋 Available Backups:');
    console.log('='.repeat(50));
    backups.forEach(backup => {
      console.log(`${backup.name} (${backup.size}MB) - ${backup.created.toLocaleString()}`)});
    console.log('='.repeat(50));
    
    return backups}
}

// CLI interface
const backupSystem = new BackupSystem();
const command = process.argv[2];
const arg = process.argv[3];

switch (command) {
  case 'create':
    backupSystem.createBackup();
    break;
  case 'restore':
    if (!arg) {
      console.error('Please specify backup name to restore');
      process.exit(1)}
    backupSystem.restoreBackup(arg);
    break;
  case 'list':
    backupSystem.listBackups();
    break;
  default:
    console.log('Usage: node backup-system.cjs [create|restore|list] [backup-name]')}
