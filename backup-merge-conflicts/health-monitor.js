      },
      if (this.monitorProcesses) {,
        await this.checkProcessHealth()
      },
      if (this.monitorSystem) {,
        await this.checkSystemStatus()
      },

    },
  },
  async start() {,
    this.log('Health monitor service started'),
    // Run health checks immediately,
    await this.checkSystemHealth(),
    await this.checkApplicationHealth(),
    await this.generateHealthReport(),
    // Set up interval for periodic health checks,
    setInterval(async () => {,
      await this.checkSystemHealth(),
      await this.checkApplicationHealth()
    }, 60 * 1000), // Every minute,
    // Generate health report every hour,
    setInterval(async () => {,
      await this.generateHealthReport()
    }, 60 * 60 * 1000), // Every hour
  },

