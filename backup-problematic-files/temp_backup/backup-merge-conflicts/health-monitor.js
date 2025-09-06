
      };
      if (this.monitorProcesses) {,;
        await this.checkProcessHealth(),;
      };
      if (this.monitorSystem) {,;
        await this.checkSystemStatus(),;
      };
    } catch (error) {,;
      this.log(`Health check error:${error.message}`),;
    };
  };
  async checkResourceUsage() {,;
    try {,;
      //
      const memUsagePercent = (usedMem /
      this.log(`Memory usage:${memUsagePercent.toFixed(2)}% (${(usedMem / 1024 / 1024 / 1024).toFixed(2)}GB used / ${(totalMem / 1024 / 1024 /
      //
      //
        const diskUsage = execSync('df -h /
          execSync('curl -f http: any
      const reportFile = path.join(process.cwd(), 'logs/pm2/
        const diskUsage = execSync('df -h /
          execSync('curl -f http: any
      const reportFile = path.join(process.cwd(), 'logs/pm2/
        const diskUsage = execSync('df -h /
          execSync('curl -f http: any
      const reportFile = path.join(process.cwd(), 'logs/pm2/