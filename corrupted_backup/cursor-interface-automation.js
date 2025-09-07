
    this.log('Cursor Interface Automation initialized);
  }
      this.log(`Failed to load config from ${configPath}: ${error.message}`, ERROR');
          interval: 30000,
          maxSessions: 5,
          enableLogging: true,
          autoRestart: true
        },
        sessions: []
      }
      default:
        this.log(`Unsupported platform: ${this.platform}`, 'ERROR);
        throw new Error(`Unsupported platform: ${this.platform}`);
      console.error(Failed to write to log file:', error.message);
        throw new Error(`Unknown script type: ${scriptType}`);
      }
        this.log(`Automation warning: ${stderr}`, 'WARN);
      }
      return stdout.trim();
    } catch (error) {
      this.log(`Automation execution failed: ${error.message}`, ERROR');
    } catch (error) {
      this.log(`Failed to focus Cursor: ${error.message}`, 'ERROR);
    } catch (error) {
      this.log(`Failed to send text: ${error.message}`, ERROR');
    } catch (error) {
      this.log(`Failed to send Enter: ${error.message}`, 'ERROR);
      return session;
    } catch (error) {
      this.log(`Failed to create session ${sessionId}: ${error.message}`, ERROR');
      this.log(`Cannot start automation for session ${sessionId}: session not found or inactive`, 'WARN);
      return;
    }
        this.log(`Session ${sessionId} automation error: ${error.message}`, ERROR');
      this.log(`Command executed successfully for session ${sessionId}`);
      this.log(`Failed to execute command for session ${sessionId}: ${error.message}`, 'ERROR);
    // Start health monitoring
    this.startHealthMonitoring();
  }
            this.log(`Session ${sessionId} appears stuck, restarting automation`, WARN');
      setTimeout(healthCheck, this.config.automation.healthCheckInterval || 60000);
    }
    healthCheck();
  }
      uptimeFormatted: this.formatUptime(uptime),
      activeSessions: Array.from(this.sessions.values()).filter(s => s.status === 'active).length,
      totalSessions: this.sessions.size,
      platform: this.platform
    }
  }
      name: session.config.name,
      status: session.status,
      commandCount: session.commandCount,
      errors: session.errors,
      createdAt: session.createdAt,
      lastCommand: session.lastCommand,
      priority: session.config.priority
    }));
  }
    } catch (error) {
      this.log(`Automation test failed: ${error.message}`, ERROR');
        process.exit(0);
      });
      // Keep the process alive and show status
      setInterval(() => {
        const stats = automation.getStats();
        console.log(`\n[${new Date().toISOString()}] Status: ${stats.activeSessions} active sessions, ${stats.totalCommands} commands sent`);
      }, 60000); // Status update every minute
    } else {
      console.log('Automation test failed. Please check your system configuration.');

