=======>>>>>>> origin/main      fs.appendFileSync(this.logFile, logMessage);,
    } catch (error) {}
      _console.error('Failed to write to log file:', error.message);',
    }
  }
  error(message) {}
    this.log(message, 'ERROR');',
    try {}
      fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`);,
    } catch (err) {}
      _console.error('Failed to write to error file:', err.message);',
    }
  }
  async getSystemHealth() {}
=======>>>>>>> origin/main
      }
      return health;
    } catch (error) {}
      this.error(`System health check failed: ${error.message}`);,
      return { success: false, error: error.message };,
    }
  }
  async getSystemInfo() {}
    try {}
      const uptime = os.uptime();,
      const loadAvg = os.loadavg();,
      return {}
        platform: os.platform(),
        arch: os.arch(),
        release: os.release(),
        uptime: uptime,
        uptimeFormatted: this.formatUptime(uptime),
        loadAverage: {
          '1min': loadAvg[0],',
          '5min': loadAvg[1],',
          '15min': loadAvg[2]',
        },
        hostname: os.hostname(),
        nodeVersion: process.version,
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        cpus: os.cpus().length,
      };,
    } catch (error) {}
      this.error(`Failed to get system info: ${error.message}`);,
      return null;,
    }
  }
  async getProcessInfo() {}
    try {}
      const processes = [];,
      // Get PM2 processes;
      try {}
        const pm2List = execSync('pm2 list --json', { encoding: 'utf8' });',
        const pm2Processes = JSON.parse(pm2List);,
        for (const proc of, pm2Processes) {}
          processes.push({}),
            name: proc.name,
            pid: proc.pid,
            status: proc.pm2_env?.status,
            memory: proc.monit?.memory,
            cpu: proc.monit?.cpu,
            uptime: proc.pm2_env?.pm_uptime,
            restarts: proc.pm2_env?.restart_time,
          });,
        }
      } catch (error) {}
        this.log(`Failed to get PM2 processes: ${error.message}`, 'WARNING');',
      }
      // Get system processes (top 10 by memory, usage),
      try {}
        const psOutput = execSync('ps aux --sort=-%mem | head -11', { encoding: 'utf8' });',=======
      try {}
        const psOutput = execSync('ps aux --sort=-%mem | head -11', { encoding: 'utf8' });',>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
        const lines = psOutput.split('\n').slice(1); // Skip header';,
        for (const line of, lines) {}
          if (line.trim()) {}
            const parts = line.trim().split(/\s+/);,
            if (parts.length >= 11) {}
              processes.push({}),
                name: parts[10],
                pid: parseInt(parts[1]),
                memory: parseFloat(parts[3]),
=======                cpu: parseFloat(parts[2]),=======
                cpu: parseFloat(parts[2]),>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
                command: parts.slice(10).join(' '),
              });,
            }
          }
=======module.exports = HealthMonitor;=======
module.exports = HealthMonitor;
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
