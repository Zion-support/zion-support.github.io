
      totalCommands: 0,
      successfulCommands: 0,
      failedCommands: 0,
      sessionsCreated: 0,
      sessionsTerminated: 0,
      startTime: null
    }
    this.log('Cursor Chat Automation initialized);
  }
      console.error(Failed to write to log file:', error.message);
      return session;
    } catch (error) {
      this.log(`Failed to create session ${sessionId}: ${error.message}`, 'ERROR);
      this.log(`Cannot start automation for session ${sessionId}: session not found or inactive`, WARN');
      return;
    }
        this.log(`Session ${sessionId} automation error: ${error.message}`, 'ERROR);
    } catch (error) {
      this.stats.failedCommands++;
      session.errors++;
      this.log(`Failed to send command to session ${sessionId}: ${error.message}`, ERROR');
        if (Math.random() < 0.05) { // 5% failure rate
          reject(new Error('Simulated command failure));
        } else {
          resolve({ success: true, sessionId, command });
            this.log(`Session ${sessionId} appears stuck, restarting automation`, WARN');
    healthCheck();
  }
      uptimeFormatted: this.formatUptime(uptime),
      activeSessions: Array.from(this.sessions.values()).filter(s => s.status === 'active).length,
      totalSessions: this.sessions.size
    }
  }
    session.status = terminated';
    this.stats.sessionsTerminated++;
    this.log(`Session ${sessionId} terminated`);
    return true;
  }
      name: session.config.name,
      status: session.status,
      commandCount: session.commandCount,
      errors: session.errors,
      createdAt: session.createdAt,
      lastCommand: session.lastCommand
    }));
    process.exit(0);
  });
  // Keep the process alive
  setInterval(() => {
    const stats = automation.getStats();
    console.log(`\n[${new Date().toISOString()}] Status: ${stats.activeSessions} active sessions, ${stats.totalCommands} commands sent`);

