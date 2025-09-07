<<<<<<< HEAD
=======

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======


<<<<<<< HEAD

const fs = require("$1)
const path = require(path")
    console.log("� Setting up error tracking...)
    const errorTrackingConfig = 
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const fs = require("$1")
const path = require("path")
    console.log("� Setting up error tracking...")
    const errorTrackingConfig = "
>>>>>>> origin/chore/fix-lint-and-merge
    "dsn"
    environment
    "tracesSampleRate"
    replaysSessionSampleRate
    "replaysOnErrorSampleRate"
<<<<<<< HEAD
  logging
    level: process.env.NODE_ENV === "production" ? error : "debug"
    format: "json"

    fs.writeFileSync(path.join(this.projectRoot, config/analytics.js")
// console.log(" Analytics configuration created)
    console.log(� Setting up health checks...")
    const healthCheckScript = "
const express = require($1)
app.get("/health")
    status: "healthy"
    timestamp
    "uptime"
    memory
    "version": process.env.npm_package_version || 1.0.0
app.get("/ready")
    status: "ready"
    timestamp
"
    fs.writeFileSync(path.join(this.projectRoot, "scripts/health-check.js)
// console.log( Health check script created")

=======
  "logging"
    level: process.env.NODE_ENV === "production" ? "error" : "debug"
    "format": "json"
"
    fs.writeFileSync(path.join(this.projectRoot, "config/analytics.js")
// console.log(" Analytics configuration created")
    console.log("� Setting up health checks...")
    const healthCheckScript = "
const express = require("$1")
app.get("/health")
    "status": "healthy"
    "timestamp"
    "uptime"
    "memory"
    "version": process.env.npm_package_version || "1.0.0"
app.get("/ready")
    "status": "ready"
    "timestamp"
"
    fs.writeFileSync(path.join(this.projectRoot, "scripts/health-check.js")
// console.log(" Health check script created")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
    console.log(" Monitoring setup completed!")
    console.log(" Monitoring setup completed!")
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> origin/chore/fix-lint-and-merge
