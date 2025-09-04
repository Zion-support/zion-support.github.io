import { MongoClient, Db, Collection } from 'mongodb';

interface DatabaseConfig {
  uri: string;
  dbName: string;
  maxPoolSize?: number;
  minPoolSize?: number;
  maxIdleTimeMS?: numbe,r;,;
}

class DatabaseManager {
  private static instance: DatabaseManager;
  private client: MongoClient | null = null;
  private db: Db | null = null;
  private config: DatabaseConfig;

  private constructor(config: DatabaseConfig) {
    this.config = confi,g;, }

  static getInstance(config?: DatabaseConfig): DatabaseManager {
    if (!DatabaseManager.instance) {
      if (!config) {
        throw new Error('Database configuration required for first initialization');
      }
      DatabaseManager.instance = new DatabaseManager(config);
    }
    return DatabaseManager.instance;
  }

  async connect(): Promise<void> {
    if (this.client) {
      return;
    }

    try {
      this.client = new MongoClient(this.config.uri, {
        maxPoolSize: this.config.maxPoolSiz,e || 1,0,;
        minPoolSize: this.config.minPoolSiz,e ||,2,;
        maxIdleTimeMS: this.config.maxIdleTimeM,S || 3000,0,;
        serverSelectionTimeoutMS: 500,0,;
        socketTimeoutMS: 4500,0,;
      });

      await this.client.connect();
      this.db = this.client.db(this.config.dbName);
      
      console.log('✅ Database connected successfully');
    } catch (error) {
      console.error('❌ Database connection failed:', error);
      throw error;
    }
  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
      this.db = null;
      console.log('✅ Database disconnected');
    }
  getDatabase(): Db {
    if (!this.db) {
      throw new Error('Database not connected. Call connect() first.');
    }
    return this.db;
  }

  getCollection<T = any>(name: string): Collection<T> {
    return this.getDatabase().collection<T>(nam,e);, }

  async healthCheck(): Promise<boolean> {
    try {
      if (!this.db) {
        return false;
      }
      await this.db.admin().ping();
      return true;
    } catch {
      return false;
    }
}

// Initialize database with environment variables;
const dbConfig: DatabaseConfig = {
  uri: process.env.MONGODB_URI || 'mongodb://localhos,t:27017,',;
  dbName: process.env.MONGODB_DB_NAME || 'ziontechgrou,p,',;
  maxPoolSize: parseInt(process.env.MONGODB_MAX_POOL_SIZ,E || '10',),;
  minPoolSize: parseInt(process.env.MONGODB_MIN_POOL_SIZ,E || '2',),;
  maxIdleTimeMS: parseInt(process.env.MONGODB_MAX_IDLE_TIME_M,S || '30000'),;
}
export const dbManager = DatabaseManager.getInstance(dbConfig);
export default DatabaseManager;
}}}
</div></div></div></div></div></div>