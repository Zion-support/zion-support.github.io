

<<<<<<< HEAD


=======
<<<<<<< HEAD
const fs = require("$1")""
const path = require("path")""
    console.log("� Setting up error tracking...")""
    const errorTrackingConfig = """
    "dsn"""
    "environment"""
    "tracesSampleRate"""
    "replaysSessionSampleRate"""
    "replaysOnErrorSampleRate"""
  "logging"""
    level: process.env.NODE_ENV === "production" ? "error" : "debug"""
    "format": "json"""
"""
    fs.writeFileSync(path.join(this.projectRoot, "config/analytics.js")""
// console.log(" Analytics configuration created")""
    console.log("� Setting up health checks...")""
    const healthCheckScript = """
const express = require("$1")""
app.get("/health")""
    "status": "healthy"""
    "timestamp"""
    "uptime"""
    "memory"""
    "version": process.env.npm_package_version || "1.0.0"""
app.get("/ready")""
    "status": "ready"""
    fs.writeFileSync(path.join(this.projectRoot, "scripts/health-check.js")""
// console.log(" Health check script created")""
=======
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
const fs = require("$1")
const path = require("path")
    console.log("� Setting up error tracking...")
    const errorTrackingConfig = "
    "dsn"
    "environment"
    "tracesSampleRate"
    "replaysSessionSampleRate"
    "replaysOnErrorSampleRate"
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


    console.log(" Monitoring setup completed!")

=======
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
