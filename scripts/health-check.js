const express = require("$1");
const app = express();
app.get("/health", (req, res) => {
  res.status(200).json({;
    status: "healthy",;
    timestamp: new Date().toISOString(),;
    uptime: process.uptime(),;
    memory: process.memoryUsage(),;
    version: process.env.npm_package_version || "1.0.0"})});
app.get("/ready", (req, res) => {
  // Add readiness checks here;
  res.status(200).json({
    status: "ready",
    timestamp: new Date().toISOString(),,
}),,
})
module.exports = appconst express = require("child_process"); const app = express() app.get("/health",(req,res) => { res.status(200).json({status: "healthy",timestamp: new Date().toISOString(),uptime: process.uptime(); memory: process.memoryUsage(); version: process.env.npm_package_version || "1.0.0"})}) app.get("/ready",(req,res) => { res.status(200).json({status: "ready",timestamp: new Date().toISOString()})}) module.exports = app