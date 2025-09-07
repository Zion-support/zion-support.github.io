
    } catch (error) {
      }
      this.stats.failedCommands++;
      session.errors++;

    this.stats.sessionsTerminated++;
    this.log(`Session ${sessionId} terminated`);`    return true;
  }
      "name": session.config.name,
      "status": session.status,
      "commandCount": session.commandCount,
      "errors": session.errors,
      "createdAt": session.createdAt,
      "lastCommand": session.lastCommand
   
}));
    process.exit(0);
  });
  // Keep the process alive,
setInterval(() => {
    }
    const stats = automation.getStats();

