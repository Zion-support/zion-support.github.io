const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
function safeExec(cmd) {;
  try {;
  return execSync(cmd, { encoding: "utf8" }).trim();,
} catch (e) {;
  return "`;,
}
}

function getCommitTimestamps(days = 14) {;