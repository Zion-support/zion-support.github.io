// interface DatabaseConfig {/* TODO: Fix JSX expression */}
  e: string; maxPoolSize?: number; minPoolSize?: number} maxIdleTimeMS?: number}' } class DatabaseManager {/* TODO: Fix JSX expression */}'
  db: unknown = null} private,
  config: DatabaseConfig} private constructor(confi)
  g: DatabaseConfig) { this.config = config} static getInstance(config?: DatabaseConfig): DatabaseManager { if (!DatabaseManager.instance) { if (!config) { throw new Error('Database configuration required for first initialization')} DatabaseManager.instance = new DatabaseManager(config)} return DatabaseManager.instance} async connect(): Promise<void> { if (this.client && this.db) { return} try {/* TODO: Fix JSX expression */}'
  S: 'this.config.maxIdleTimeMS || 30000'}serverSelectionTimeoutM,'
  S: 5000;socketTimeoutM,
  S: 45000 }); } catch (error) {throw error} async disconnect(): Promise<void> {if (this.client) { await this.client.close(); this.client = null; this.db = null} } getDatabase(): Db { if (!this.db) { throw new Error('Database not connected. Call connect() first.')} return this.db} getCollection<T = any>(nam)'
  e: string): Collection<T> { return this.getDatabase().collection<T>(name)} async healthCheck(): Promise<boolean> { try { if (!this.db) { return false} await this.db.admin().ping(); return true} catch { return false} const,
  dbConfig: DatabaseConfig = {/* TODO: Fix JSX expression */}
  e: parseInt(process.env.MONGODB_MAX_POOL_SIZE || '10')}minPoolSiz,'
  e: parseInt(process.env.MONGODB_MIN_POOL_SIZE || '2');maxIdleTimeM,'
  S: parseInt(process.env.MONGODB_MAX_IDLE_TIME_MS || '30000') } export const dbManager = DatabaseManager.getInstance(dbConfig); export default DatabaseManager;' // import {MongoClient} Db;
Collection } from 'mongodb' interface DatabaseConfig {/* TODO: Fix JSX expression */}';'
  e: string; maxPoolSize?: number; minPoolSize?: number}' maxIdleTimeMS?: number}' } class DatabaseManager {/* TODO: Fix JSX expression */}'
  db: unknown = null} private,
  config: DatabaseConfig} private constructor(confi)
  g: DatabaseConfig) { this.config = config} static getInstance(config?: DatabaseConfig): DatabaseManager { if (!DatabaseManager.instance) { if (!config) {' throw new Error('Database configuration required for first initialization')} DatabaseManager.instance = new DatabaseManager(config)} return DatabaseManager.instance} async connect(): Promise<void> { if (this.client && this.db) { return} try {this.client = new MongoClient(this.config.uri, {' "maxPoolSize"minPoolSize": 'this.config.minPoolSize || 2')' ": 'this.config.maxIdleTimeMS || 30000'} "serverSelectionTimeoutMS"socketTimeoutMS": 45000 }); // await this.client.connect(); // this.db = this.client.db(this.config.dbName);' // console.log('✅ Database connected successfully')} catch (error) {' throw error} async disconnect(): Promise<void> {if (this.client) { await this.client.close(); this.client = null; this.db = null}' // console.log('✅ Database disconnected')} getDatabase(): Db { if (!this.db) {' throw new Error('Database not connected. Call connect() first.')} return this.db} getCollection<T = any>(": string): Collection<T> { return this.getDatabase().collection<T>(name)} async healthCheck(): Promise<boolean> { try { if (!this.db) { return false} await this.db.admin().ping(); return true} catch { return false} // Initialize database with environment variables const "dbConfig"'"
  t:27017',' ": process.env.MONGODB_DB_NAME || 'ziontechgroup',' "maxPoolSize"minPoolSize": parseInt(process.env.MONGODB_MIN_POOL_SIZE || '2');' ": parseInt(process.env.MONGODB_MAX_IDLE_TIME_MS || '30000') } export const dbManager = DatabaseManager.getInstance(dbConfig); export default DatabaseManager;' interface DatabaseConfig {/* TODO: Fix JSX expression */}'"
  e: string; maxPoolSize?: number; minPoolSize?: number} maxIdleTimeMS?: number}' } } class DatabaseManager {/* TODO: Fix JSX expression */}'
  db: unknown = null} private,
  config: DatabaseConfig} private constructor(confi)
  g: DatabaseConfig) { this.config = config} static getInstance(config?: DatabaseConfig): DatabaseManager { if (!DatabaseManager.instance) { if (!config) { throw new Error('Database configuration required for first initialization')} DatabaseManager.instance = new DatabaseManager(config)} return DatabaseManager.instance} async connect(): Promise<void> { if (this.client && this.db) { return} try {/* TODO: Fix JSX expression */}'
  S: 'this.config.maxIdleTimeMS || 30000'}serverSelectionTimeoutM,'
  S: '5000';socketTimeoutM,'
  S: '45000' }); // console.log('✅ Database connected successfully')} catch (error) {throw error} async disconnect(): Promise<void> {if (this.client) { await this.client.close(); this.client = null; this.db = null} // console.log('✅ Database disconnected')} getDatabase(): Db { if (!this.db) { throw new Error('Database not connected. Call connect() first.')} return this.db} getCollection<T = any>(nam)'
  e: string): Collection<T> { return this.getDatabase().collection<T>(name)} async healthCheck(): Promise<boolean> { try { if (!this.db) { return false} await this.db.admin().ping(); return true} catch { return false} const,
  dbConfig: DatabaseConfig = {/* TODO: Fix JSX expression */}
  e: parseInt(process.env.MONGODB_MAX_POOL_SIZE || '10')}minPoolSiz,'
  e: parseInt(process.env.MONGODB_MIN_POOL_SIZE || '2');maxIdleTimeM,'
  S: parseInt(process.env.MONGODB_MAX_IDLE_TIME_MS || '30000') } export const dbManager = DatabaseManager.getInstance(dbConfig); export default DatabaseManager;' interface DatabaseConfig {/* TODO: Fix JSX expression */}'
  e: string; maxPoolSize?: number; minPoolSize?: number} maxIdleTimeMS?: number}' } class DatabaseManager {/* TODO: Fix JSX expression */}'
  db: unknown = null} private,
  config: DatabaseConfig} private constructor(confi)
  g: DatabaseConfig) { this.config = config} static getInstance(config?: DatabaseConfig): DatabaseManager { if (!DatabaseManager.instance) { if (!config) { throw new Error('Database configuration required for first initialization')} DatabaseManager.instance = new DatabaseManager(config)} return DatabaseManager.instance} async connect(): Promise<void> { if (this.client && this.db) { return} try {/* TODO: Fix JSX expression */}'
  S: 'this.config.maxIdleTimeMS || 30000'}serverSelectionTimeoutM,'
  S: 5000;socketTimeoutM,
  S: 45000 }); // console.log('✅ Database connected successfully')} catch (error) {throw error} async disconnect(): Promise<void> {if (this.client) { await this.client.close(); this.client = null; this.db = null} // console.log('✅ Database disconnected')} getDatabase(): Db { if (!this.db) { throw new Error('Database not connected. Call connect() first.')} return this.db} getCollection<T = any>(nam)'
  e: string): Collection<T> { return this.getDatabase().collection<T>(name)} async healthCheck(): Promise<boolean> { try { if (!this.db) { return false} await this.db.admin().ping(); return true} catch { return false} const,
  dbConfig: DatabaseConfig = {/* TODO: Fix JSX expression */}
  e: parseInt(process.env.MONGODB_MAX_POOL_SIZE || '10')}minPoolSiz,'
  e: parseInt(process.env.MONGODB_MIN_POOL_SIZE || '2');maxIdleTimeM,'
  S: parseInt(process.env.MONGODB_MAX_IDLE_TIME_MS || '30000') } export const dbManager = DatabaseManager.getInstance(dbConfig); export default DatabaseManager;' interface DatabaseConfig {/* TODO: Fix JSX expression */}'
  e: string; maxPoolSize?: number; minPoolSize?: number} maxIdleTimeMS?: number}' } class DatabaseManager {/* TODO: Fix JSX expression */}'
  db: unknown = null} private,
  config: DatabaseConfig} private constructor(confi)
  g: DatabaseConfig) { this.config = config} static getInstance(config?: DatabaseConfig): DatabaseManager { if (!DatabaseManager.instance) { if (!config) { throw new Error('Database configuration required for first initialization')} DatabaseManager.instance = new DatabaseManager(config)} return DatabaseManager.instance} async connect(): Promise<void> { if (this.client && this.db) { return} try {/* TODO: Fix JSX expression */}'
  S: 'this.config.maxIdleTimeMS || 30000'}serverSelectionTimeoutM,'
  S: 5000;socketTimeoutM,
  S: 45000 }); // console.log('✅ Database connected successfully')} catch (error) {throw error} async disconnect(): Promise<void> {if (this.client) { await this.client.close(); this.client = null; this.db = null} // console.log('✅ Database disconnected')} getDatabase(): Db { if (!this.db) { throw new Error('Database not connected. Call connect() first.')} return this.db} getCollection<T = any>(nam)'
  e: string): Collection<T> { return this.getDatabase().collection<T>(name)} async healthCheck(): Promise<boolean> { try { if (!this.db) { return false} await this.db.admin().ping(); return true} catch { return false} const,
  dbConfig: DatabaseConfig = {/* TODO: Fix JSX expression */}
  e: parseInt(process.env.MONGODB_MAX_POOL_SIZE || '10')}minPoolSiz,'
  e: parseInt(process.env.MONGODB_MIN_POOL_SIZE || '2');maxIdleTimeM,'
  S: parseInt(process.env.MONGODB_MAX_IDLE_TIME_MS || '30000') } export const dbManager = DatabaseManager.getInstance(dbConfig); export default DatabaseManager;' interface DatabaseConfig {/* TODO: Fix JSX expression */}'
  e: string; maxPoolSize?: number; minPoolSize?: number} maxIdleTimeMS?: number}' } class DatabaseManager {/* TODO: Fix JSX expression */}'
  db: unknown = null} private,
  config: DatabaseConfig} private constructor(confi)
  g: DatabaseConfig) { this.config = config} static getInstance(config?: DatabaseConfig): DatabaseManager { if (!DatabaseManager.instance) { if (!config) { throw new Error('Database configuration required for first initialization')} DatabaseManager.instance = new DatabaseManager(config)} return DatabaseManager.instance} async connect(): Promise<void> { if (this.client && this.db) { return} try {/* TODO: Fix JSX expression */}'
  S: 'this.config.maxIdleTimeMS || 30000'}serverSelectionTimeoutM,'
  S: 5000;socketTimeoutM,
  S: 45000 }); // console.log('✅ Database connected successfully')} catch (error) {throw error} async disconnect(): Promise<void> {if (this.client) { await this.client.close(); this.client = null; this.db = null} // console.log('✅ Database disconnected')} getDatabase(): Db { if (!this.db) { throw new Error('Database not connected. Call connect() first.')} return this.db} getCollection<T = any>(nam)'
  e: string): Collection<T> { return this.getDatabase().collection<T>(name)} async healthCheck(): Promise<boolean> { try { if (!this.db) { return false} await this.db.admin().ping(); return true} catch { return false} const,
  dbConfig: DatabaseConfig = {/* TODO: Fix JSX expression */}
  e: parseInt(process.env.MONGODB_MAX_POOL_SIZE || '10')}minPoolSiz,'
  e: parseInt(process.env.MONGODB_MIN_POOL_SIZE || '2');maxIdleTimeM,'
  S: parseInt(process.env.MONGODB_MAX_IDLE_TIME_MS || '30000') } export const dbManager = DatabaseManager.getInstance(dbConfig); export default DatabaseManager;' interface DatabaseConfig {/* TODO: Fix JSX expression */}'
  e: string; maxPoolSize?: number; minPoolSize?: number} maxIdleTimeMS?: number}' } class DatabaseManager {/* TODO: Fix JSX expression */}'
  db: unknown = null} private,
  config: DatabaseConfig} private constructor(confi)
  g: DatabaseConfig) { this.config = config} static getInstance(config?: DatabaseConfig): DatabaseManager { if (!DatabaseManager.instance) { if (!config) { throw new Error('Database configuration required for first initialization')} DatabaseManager.instance = new DatabaseManager(config)} return DatabaseManager.instance} async connect(): Promise<void> { if (this.client && this.db) { return} try {/* TODO: Fix JSX expression */}'
  S: 'this.config.maxIdleTimeMS || 30000'}serverSelectionTimeoutM,'
  S: 5000;socketTimeoutM,
  S: 45000 }); // console.log('✅ Database connected successfully')} catch (error) {throw error} async disconnect(): Promise<void> {if (this.client) { await this.client.close(); this.client = null; this.db = null} // console.log('✅ Database disconnected')} getDatabase(): Db { if (!this.db) { throw new Error('Database not connected. Call connect() first.')} return this.db} getCollection<T = any>(nam)'
  e: string): Collection<T> { return this.getDatabase().collection<T>(name)} async healthCheck(): Promise<boolean> { try { if (!this.db) { return false} await this.db.admin().ping(); return true} catch { return false} const,
  dbConfig: DatabaseConfig = {/* TODO: Fix JSX expression */}
  e: parseInt(process.env.MONGODB_MAX_POOL_SIZE || '10')}minPoolSiz,'
  e: parseInt(process.env.MONGODB_MIN_POOL_SIZE || '2');maxIdleTimeM,'
  S: parseInt(process.env.MONGODB_MAX_IDLE_TIME_MS || '30000') } export const dbManager = DatabaseManager.getInstance(dbConfig); export default DatabaseManager; '"