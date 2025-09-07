
  }
      "name": session.config.name,
      "status": session.status,
      "commandCount": session.commandCount,
      "errors": session.errors,
      "createdAt": session.createdAt,
      "lastCommand": session.lastCommand,
      "priority": session.config.priority
   
}));
  }
    } catch (error) {

        process.exit(0);
      });
      // Keep the process alive and show status,
setInterval(() => {
        }
        const stats = automation.getStats();
        console.log(`\n[${new Date().toISOString()}] "Status": ${stats.activeSession,`} active sessions, ${stats.totalCommands} commands sent`);`      }, 60000); // Status update every minute
    } else {

