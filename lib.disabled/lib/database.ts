  db: unknown = null} private,
  config: DatabaseConfig} private constructor(confi)
  S: 'this.config.maxIdleTimeMS || 30000'}serverSelectionTimeoutM,
  S: 5000;socketTimeoutM,
  S: 45000 }); } catch (error) {throw error} async disconnect(): Promise<void> {if (this.client) { await this.client.close(); this.client = null; this.db = null} } getDatabase(): Db { if (!this.db) { throw new Error('Database not connected. Call connect() first.')} return this.db} getCollection<T = any>(nam)
  e: string): Collection<T> { return this.getDatabase().collection<T>(name)} async healthCheck(): Promise<boolean> { try { if (!this.db) { return false} await this.db.admin().ping(); return true} catch { return false} const,
  e: parseInt(process.env.MONGODB_MAX_POOL_SIZE || '10')}minPoolSiz,
  e: parseInt(process.env.MONGODB_MIN_POOL_SIZE || '2');maxIdleTimeM,
  db: unknown = null} private,
  config: DatabaseConfig} private constructor(confi)
  db: unknown = null} private,
  config: DatabaseConfig} private constructor(confi)
  S: 'this.config.maxIdleTimeMS || 30000'}serverSelectionTimeoutM,
  S: '5000';socketTimeoutM,
  S: '45000' }); // console.log('✅ Database connected successfully')} catch (error) {throw error} async disconnect(): Promise<void> {if (this.client) { await this.client.close(); this.client = null; this.db = null} // console.log('✅ Database disconnected')} getDatabase(): Db { if (!this.db) { throw new Error('Database not connected. Call connect() first.')} return this.db} getCollection<T = any>(nam)
  e: string): Collection<T> { return this.getDatabase().collection<T>(name)} async healthCheck(): Promise<boolean> { try { if (!this.db) { return false} await this.db.admin().ping(); return true} catch { return false} const,
  e: parseInt(process.env.MONGODB_MAX_POOL_SIZE || '10')}minPoolSiz,
  e: parseInt(process.env.MONGODB_MIN_POOL_SIZE || '2');maxIdleTimeM,
  db: unknown = null} private,
  config: DatabaseConfig} private constructor(confi)
  S: 'this.config.maxIdleTimeMS || 30000'}serverSelectionTimeoutM,
  S: 5000;socketTimeoutM,
  S: 45000 }); // console.log('✅ Database connected successfully')} catch (error) {throw error} async disconnect(): Promise<void> {if (this.client) { await this.client.close(); this.client = null; this.db = null} // console.log('✅ Database disconnected')} getDatabase(): Db { if (!this.db) { throw new Error('Database not connected. Call connect() first.')} return this.db} getCollection<T = any>(nam)
  e: string): Collection<T> { return this.getDatabase().collection<T>(name)} async healthCheck(): Promise<boolean> { try { if (!this.db) { return false} await this.db.admin().ping(); return true} catch { return false} const,
  e: parseInt(process.env.MONGODB_MAX_POOL_SIZE || '10')}minPoolSiz,
  e: parseInt(process.env.MONGODB_MIN_POOL_SIZE || '2');maxIdleTimeM,
  db: unknown = null} private,
  config: DatabaseConfig} private constructor(confi)
  S: 'this.config.maxIdleTimeMS || 30000'}serverSelectionTimeoutM,
  S: 5000;socketTimeoutM,
  S: 45000 }); // console.log('✅ Database connected successfully')} catch (error) {throw error} async disconnect(): Promise<void> {if (this.client) { await this.client.close(); this.client = null; this.db = null} // console.log('✅ Database disconnected')} getDatabase(): Db { if (!this.db) { throw new Error('Database not connected. Call connect() first.')} return this.db} getCollection<T = any>(nam)
  e: string): Collection<T> { return this.getDatabase().collection<T>(name)} async healthCheck(): Promise<boolean> { try { if (!this.db) { return false} await this.db.admin().ping(); return true} catch { return false} const,
  e: parseInt(process.env.MONGODB_MAX_POOL_SIZE || '10')}minPoolSiz,
  e: parseInt(process.env.MONGODB_MIN_POOL_SIZE || '2');maxIdleTimeM,
  db: unknown = null} private,
  config: DatabaseConfig} private constructor(confi)
  S: 'this.config.maxIdleTimeMS || 30000'}serverSelectionTimeoutM,
  S: 5000;socketTimeoutM,
  S: 45000 }); // console.log('✅ Database connected successfully')} catch (error) {throw error} async disconnect(): Promise<void> {if (this.client) { await this.client.close(); this.client = null; this.db = null} // console.log('✅ Database disconnected')} getDatabase(): Db { if (!this.db) { throw new Error('Database not connected. Call connect() first.')} return this.db} getCollection<T = any>(nam)
  e: string): Collection<T> { return this.getDatabase().collection<T>(name)} async healthCheck(): Promise<boolean> { try { if (!this.db) { return false} await this.db.admin().ping(); return true} catch { return false} const,
  e: parseInt(process.env.MONGODB_MAX_POOL_SIZE || '10')}minPoolSiz,
  e: parseInt(process.env.MONGODB_MIN_POOL_SIZE || '2');maxIdleTimeM,
  db: unknown = null} private,
  config: DatabaseConfig} private constructor(confi)
  S: 'this.config.maxIdleTimeMS || 30000'}serverSelectionTimeoutM,
  S: 5000;socketTimeoutM,
  S: 45000 }); // console.log('✅ Database connected successfully')} catch (error) {throw error} async disconnect(): Promise<void> {if (this.client) { await this.client.close(); this.client = null; this.db = null} // console.log('✅ Database disconnected')} getDatabase(): Db { if (!this.db) { throw new Error('Database not connected. Call connect() first.')} return this.db} getCollection<T = any>(nam)
  e: string): Collection<T> { return this.getDatabase().collection<T>(name)} async healthCheck(): Promise<boolean> { try { if (!this.db) { return false} await this.db.admin().ping(); return true} catch { return false} const,
  e: parseInt(process.env.MONGODB_MAX_POOL_SIZE || '10')}minPoolSiz,
  e: parseInt(process.env.MONGODB_MIN_POOL_SIZE || '2');maxIdleTimeM,
  S: parseInt(process.env.MONGODB_MAX_IDLE_TIME_MS || '30000') } export const dbManager = DatabaseManager.getInstance(dbConfig); export default DatabaseManager; '"