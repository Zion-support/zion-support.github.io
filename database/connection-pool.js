// Database connection pooling
export class ConnectionPool {
  constructor(options = {}) {
    this.maxConnections = options.maxConnections || 10;
    this.minConnections = options.minConnections || 2;
    this.connections = [];
    this.availableConnections = [];
    this.usedConnections = new Set();
  }

  async getConnection() {
    if (this.availableConnections.length > 0) {
      const connection = this.availableConnections.pop();
      this.usedConnections.add(connection);
      return connection;
    }
    
    if (this.connections.length < this.maxConnections) {
      const connection = await this.createConnection();
      this.connections.push(connection);
      this.usedConnections.add(connection);
      return connection;
    }
    
    // Wait for a connection to become available
    return new Promise((resolve) => {
      const checkForConnection = () => {
        if (this.availableConnections.length > 0) {
          const connection = this.availableConnections.pop();
          this.usedConnections.add(connection);
          resolve(connection);
        } else {
          setTimeout(checkForConnection, 100);
        }
      };
      checkForConnection();
    }
});
  }

  releaseConnection(connection) {
    this.usedConnections.delete(connection);
    this.availableConnections.push(connection);
  }

  async createConnection() {
    // This would create an actual database connection
    return {
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
      isHealthy: true
    };
  }

  getPoolStatus() {
    return {
      total: this.connections.length,
      available: this.availableConnections.length,
      used: this.usedConnections.size,
      max: this.maxConnections
    };
  }
}

export const connectionPool = new ConnectionPool();