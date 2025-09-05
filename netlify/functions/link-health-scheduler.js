// netlify/functions/link-health-scheduler.js
const path = require("path");
const { spawnSync } = require("child_process");

exports.config = {
  schedule: "*/20 * * * *", // every 20 minutes
};

exports.handler = async () => {
  try {
    const result = spawnSync("node", ["automation/link-health-scheduler.cjs"], {
      cwd: process.cwd(),
      stdio: "inherit",
    });
    
    if (result.status !== 0) {
      console.error("Link health scheduler failed:", result.error);
    }
  } catch (error) {
    console.error("Error running link health scheduler:", error);
  }
};