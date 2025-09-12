#!/usr/bin/env node
const fs = require("fs").promises;
  async log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    try {
      await fs.appendFile(this.logFile, logEntry);
      console.log(logEntry.trim())} catch (error) {
      console.error("Failed to write to log file: ", error)}