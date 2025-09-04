import { MongoClient, Db, Collection } from 'mongodb';

interface DatabaseConfig {
  uri: string;
  dbName: string;
  maxPoolSize?: number;
  minPoolSize?: number;
  maxIdleTimeMS?: number;
}

class DatabaseManager {
  private static instance: DatabaseManager;
  private client: MongoClient | null = null;
  private db: Db | null = null;
  private config: DatabaseConfig;

  private constructor(config: DatabaseConfig) {
    this.config = config;
  }

  static getInstance(config?: DatabaseConfig): DatabaseManager {
    if (!DatabaseManager.instance) {
      if (!config) {
        throw new Error('Database configuration is required for first initialization');
      }
      DatabaseManager.instance = new DatabaseManager(config);
    }
    return DatabaseManager.instance;
  }

  async connect(): Promise<void> {
    try {
      this.client = new MongoClient(this.config.uri, {
        maxPoolSize: this.config.maxPoolSize || 10,
        minPoolSize: this.config.minPoolSize || 2,
        maxIdleTimeMS: this.config.maxIdleTimeMS || 30000,
      });

      await this.client.connect();
      this.db = this.client.db(this.config.dbName);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
      this.db = null;
      console.log('Disconnected from MongoDB');
    }
  }

  getDatabase(): Db {
    if (!this.db) {
      throw new Error('Database not connected. Call connect() first.');
    }
    return this.db;
  }

  getCollection<T = any>(name: string): Collection<T> {
    return this.getDatabase().collection<T>(name);
  }

  isConnected(): boolean {
    return this.client !== null && this.db !== null;
  }
}

// Export singleton instance
export const dbManager = DatabaseManager.getInstance({
  uri: process.env.MONGODB_URI || 'mongodb://localhost:27017',
  dbName: process.env.MONGODB_DB_NAME || 'ziontechgroup'
});

export default DatabaseManager;
