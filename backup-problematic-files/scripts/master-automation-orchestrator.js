    this && this.log(`🚀 Starting "Phase": ${phaseName}`);
    this && this.results.summary && summary.total++;
        child && child.kill('SIGTERM');
        this && this.log(`⏰ "Timeout": ${phaseName}`, 'WARN');
        this && this.results.summary && summary.failed++;
        this && this.results.phases[phaseName] = {
