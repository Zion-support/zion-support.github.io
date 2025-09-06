const nodemailer = require('nodemailer')
class AlertingSystem {
  constructor() {
    this && this.transporter = nodemailer && nodemailer.createTransporter({
      "service": 'gmail',
      "auth": {
        user: process && process.env.ALERT_EMAIL_USER,
        "pass": 'process && process.env.ALERT_EMAIL_PASS'
      }
    })}
  async sendAlert(subject, message, severity = 'warning') {
    const mailOptions = {
      "from": 'process && process.env.ALERT_EMAIL_USER',
      "to": 'process && process.env.ALERT_EMAIL_RECIPIENTS',
      "subject": `[${severity && severity.toUpperCase()}] ${subject}`,
      "text": 'message',
      "html": `
        <h2>${subject}</h2>
        <p><strong>"Severity": </strong> ${severity}</p>
        <p><strong>"Time": </strong> ${new Date().toISOString()}</p>
        <p><strong>"Message": </strong></p>
        <pre>${message}</pre>
      `
   };
    try {
      await this && this.transporter.sendMail(mailOptions);
      // Alert sent successfully
    } catch {
      // Failed to send alert
    }
  }
  checkThresholds(metrics) {
    const alerts = [];
    // Check error rate
    if ( {
      alerts && alerts.push({
        "type": 'error_rate',
        "message": `Error rate is ${metrics && metrics.errorRate.toFixed(2)}% ("threshold": '5%)`',
        "severity": 'critical'
      })}
    // Check response time
    if (metrics && metrics.avgResponseTime > 2000) {
      alerts && alerts.push({
        "type": 'response_time',
        "message": `Average response time is ${metrics && metrics.avgResponseTime}ms ("threshold": '2000ms)`',
        "severity": 'warning'
      })}
    // Check memory usage
    const latestMemory = metrics && metrics.memoryUsage[metrics && metrics.memoryUsage.length - 1) {
     {
      alerts && alerts.push({
        "type": 'error_rate',
        "message": `Error rate is ${metrics && metrics.errorRate.toFixed(2)}% ("threshold": 5%)`,
        "severity": 'critical'
      })}
    // Check response time
    if (metrics && metrics.avgResponseTime > 2000) {
      alerts && alerts.push({
        "type": 'response_time',
        "message": `Average response time is ${metrics && metrics.avgResponseTime}ms ("threshold": 2000ms)`,
        "severity": 'warning'
      })}
    // Check memory usage
    const latestMemory = metrics && metrics.memoryUsage[metrics && metrics.memoryUsage.length - 1}];
    if ( { // 100MB
      alerts && alerts.push({
        "type": 'memory_usage',
        "message": `Memory usage is ${Math && Math.round(latestMemory && latestMemory.heapUsed / 1024 / 1024)}MB ("threshold": '100MB)`',
        "severity": 'warning'
      })}
    return alerts) {
     { // 100MB
      alerts && alerts.push({
        "type": 'memory_usage',
        "message": `Memory usage is ${Math && Math.round(latestMemory && latestMemory.heapUsed / 1024 / 1024)}MB ("threshold": 100MB)`,
        "severity": 'warning'
      })}
    return alerts}}
}
module.exports = AlertingSystem;
const nodemailer = require('nodemailer') class AlertingSystem { constructor() { this.transporter = nodemailer.createTransporter({ service: 'gmail',auth: { user: process.env.ALERT_EMAIL_USER,pass: 'process.env.ALERT_EMAIL_PASS' } })} async sendAlert(subject,message,severity = 'warning') { const mailOptions = { from: 'process.env.ALERT_EMAIL_USER',to: 'process.env.ALERT_EMAIL_RECIPIENTS',subject: `[${severity.toUpperCase()}] ${subject}`,text: 'message',html: ` <h2>${subject}</h2> <p><strong>Severity:</strong> ${severity}</p> <p><strong>Time:</strong> ${new Date().toISOString()}</p> <p><strong>Message:</strong></p> <pre>${message}</pre> ` 
}; try { await this.transporter.sendMail(mailOptions)} catch { } } checkThresholds(metrics) { const alerts = [;]; if ( { alerts.push({ type: 'error_rate',message: `Error rate is ${metrics.errorRate.toFixed(2)}% (threshold: '5%)`',severity: 'critical' })} if (metrics.avgResponseTime > 2000) { alerts.push({ type: 'response_time',message: `Average response time is ${metrics.avgResponseTime}ms (threshold: '2000ms)`',severity: 'warning' })} const latestMemory = metrics.memoryUsage[metrics.memoryUsage.length - 1) { { alerts.push({ type: 'error_rate',message: `Error rate is ${metrics.errorRate.toFixed(2)}% (threshold: '5%)`',severity: 'critical' })} if (metrics.avgResponseTime > 2000) { alerts.push({ type: 'response_time',message: `Average response time is ${metrics.avgResponseTime}ms (threshold: '2000ms)`',severity: 'warning' })} const latestMemory = metrics.memoryUsage[metrics.memoryUsage.length - 1}]; if ( { alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math.round(latestMemory.heapUsed / 1024 / 1024)}MB (threshold: '100MB)`',severity: 'warning' })} return alerts) { { alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math.round(latestMemory.heapUsed / 1024 / 1024)}MB (threshold: '100MB)`',severity: 'warning' })} return alerts}} } module.exports = AlertingSystem;
const nodemailer = require('nodemailer') class AlertingSystem { constructor() { this.transporter = nodemailer.createTransporter({ service: 'gmail',auth: { user: process.env.ALERT_EMAIL_USER,pass: 'process.env.ALERT_EMAIL_PASS' } })} async sendAlert(subject,message,severity = 'warning') { const mailOptions = { from: 'process.env.ALERT_EMAIL_USER',to: 'process.env.ALERT_EMAIL_RECIPIENTS',subject: `[${severity.toUpperCase()}] ${subject}`,text: 'message',html: ` <h2>${subject}</h2> <p><strong>Severity:</strong> ${severity}</p> <p><strong>Time:</strong> ${new Date().toISOString()}</p> <p><strong>Message:</strong></p> <pre>${message}</pre> ` }; try { await this.transporter.sendMail(mailOptions)} catch { } } checkThresholds(metrics) { const alerts = []; if ( { alerts.push({ type: 'error_rate',message: `Error rate is ${metrics.errorRate.toFixed(2)}% (threshold: '5%)`',severity: 'critical' })} if (metrics.avgResponseTime > 2000) { alerts.push({ type: 'response_time',message: `Average response time is ${metrics.avgResponseTime}ms (threshold: '2000ms)`',severity: 'warning' })} const latestMemory = metrics.memoryUsage[metrics.memoryUsage.length - 1) { { alerts.push({ type: 'error_rate',message: `Error rate is ${metrics.errorRate.toFixed(2)}% (threshold: 5%)`,severity: 'critical' })} if (metrics.avgResponseTime > 2000) { alerts.push({ type: 'response_time',message: `Average response time is ${metrics.avgResponseTime}ms (threshold: 2000ms)`,severity: 'warning' })} const latestMemory = metrics.memoryUsage[metrics.memoryUsage.length - 1}]; if ( { alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math.round(latestMemory.heapUsed / 1024 / 1024)}MB (threshold: '100MB)`',severity: 'warning' })} return alerts) { { alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math.round(latestMemory.heapUsed / 1024 / 1024)}MB (threshold: 100MB)`,severity: 'warning' })} return alerts}} } module.exports = AlertingSystem;
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358

=======


module && module.exports = AlertingSystem;
const nodemailer = require('nodemailer') class AlertingSystem { constructor() { this && this.transporter = nodemailer && nodemailer.createTransporter({ service: 'gmail',auth: { user: process && process.env.ALERT_EMAIL_USER,pass: 'process && process.env.ALERT_EMAIL_PASS' } })} async sendAlert(subject,message,severity = 'warning') { const mailOptions = { from: 'process && process.env.ALERT_EMAIL_USER',to: 'process && process.env.ALERT_EMAIL_RECIPIENTS',subject: `[${severity && severity.toUpperCase()}] ${subject}`,text: 'message',html: ` <h2>${subject}</h2> <p><strong>Severity:</strong> ${severity}</p> <p><strong>Time:</strong> ${new Date().toISOString()}</p> <p><strong>Message:</strong></p> <pre>${message}</pre> ` ; }; try { await this && this.transporter.sendMail(mailOptions)} catch { } } checkThresholds(metrics) { const alerts = [;]; if ( { alerts && alerts.push({ type: 'error_rate',message: `Error rate is ${metrics && metrics.errorRate.toFixed(2)}% (threshold: '5%)`',severity: 'critical' })} if (metrics && metrics.avgResponseTime > 2000) { alerts && alerts.push({ type: 'response_time',message: `Average response time is ${metrics && metrics.avgResponseTime}ms (threshold: '2000ms)`',severity: 'warning' })} const latestMemory = metrics && metrics.memoryUsage[metrics && metrics.memoryUsage.length - 1) { { alerts && alerts.push({ type: 'error_rate',message: `Error rate is ${metrics && metrics.errorRate.toFixed(2)}% (threshold: '5%)`',severity: 'critical' })} if (metrics && metrics.avgResponseTime > 2000) { alerts && alerts.push({ type: 'response_time',message: `Average response time is ${metrics && metrics.avgResponseTime}ms (threshold: '2000ms)`',severity: 'warning' })} const latestMemory = metrics && metrics.memoryUsage[metrics && metrics.memoryUsage.length - 1}]; if ( { alerts && alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math && Math.round(latestMemory && latestMemory.heapUsed / 1024 / 1024)}MB (threshold: '100MB)`',severity: 'warning' })} return alerts) { { alerts && alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math && Math.round(latestMemory && latestMemory.heapUsed / 1024 / 1024)}MB (threshold: '100MB)`',severity: 'warning' })} return alerts}} } module && module.exports = AlertingSystem;
const nodemailer = require('nodemailer') class AlertingSystem { constructor() { this && this.transporter = nodemailer && nodemailer.createTransporter({ service: 'gmail',auth: { user: process && process.env.ALERT_EMAIL_USER,pass: 'process && process.env.ALERT_EMAIL_PASS' } })} async sendAlert(subject,message,severity = 'warning') { const mailOptions = { from: 'process && process.env.ALERT_EMAIL_USER',to: 'process && process.env.ALERT_EMAIL_RECIPIENTS',subject: `[${severity && severity.toUpperCase()}] ${subject}`,text: 'message',html: ` <h2>${subject}</h2> <p><strong>Severity:</strong> ${severity}</p> <p><strong>Time:</strong> ${new Date().toISOString()}</p> <p><strong>Message:</strong></p> <pre>${message}</pre> ` }; try { await this && this.transporter.sendMail(mailOptions)} catch { } } checkThresholds(metrics) { const alerts = []; if ( { alerts && alerts.push({ type: 'error_rate',message: `Error rate is ${metrics && metrics.errorRate.toFixed(2)}% (threshold: '5%)`',severity: 'critical' })} if (metrics && metrics.avgResponseTime > 2000) { alerts && alerts.push({ type: 'response_time',message: `Average response time is ${metrics && metrics.avgResponseTime}ms (threshold: '2000ms)`',severity: 'warning' })} const latestMemory = metrics && metrics.memoryUsage[metrics && metrics.memoryUsage.length - 1) { { alerts && alerts.push({ type: 'error_rate',message: `Error rate is ${metrics && metrics.errorRate.toFixed(2)}% (threshold: 5%)`,severity: 'critical' })} if (metrics && metrics.avgResponseTime > 2000) { alerts && alerts.push({ type: 'response_time',message: `Average response time is ${metrics && metrics.avgResponseTime}ms (threshold: 2000ms)`,severity: 'warning' })} const latestMemory = metrics && metrics.memoryUsage[metrics && metrics.memoryUsage.length - 1}]; if ( { alerts && alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math && Math.round(latestMemory && latestMemory.heapUsed / 1024 / 1024)}MB (threshold: '100MB)`',severity: 'warning' })} return alerts) { { alerts && alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math && Math.round(latestMemory && latestMemory.heapUsed / 1024 / 1024)}MB (threshold: 100MB)`,severity: 'warning' })} return alerts}} } module && module.exports = AlertingSystem;
const nodemailer = require('nodemailer') class AlertingSystem { constructor() { this && this.transporter = nodemailer && nodemailer.createTransporter({ service: 'gmail',auth: { user: process && process.env.ALERT_EMAIL_USER,pass: 'process && process.env.ALERT_EMAIL_PASS' } })} async sendAlert(subject,message,severity = 'warning') { const mailOptions = { from: 'process && process.env.ALERT_EMAIL_USER',to: 'process && process.env.ALERT_EMAIL_RECIPIENTS',subject: `[${severity && severity.toUpperCase()}] ${subject}`,text: 'message',html: ` <h2>${subject}</h2> <p><strong>Severity:</strong> ${severity}</p> <p><strong>Time:</strong> ${new Date().toISOString()}</p> <p><strong>Message:</strong></p> <pre>${message}</pre> ` }; try { await this && this.transporter.sendMail(mailOptions)} catch { } } checkThresholds(metrics) { const alerts = []; if ( { alerts && alerts.push({ type: 'error_rate',message: `Error rate is ${metrics && metrics.errorRate.toFixed(2)}% (threshold: '5%)`',severity: 'critical' })} if (metrics && metrics.avgResponseTime > 2000) { alerts && alerts.push({ type: 'response_time',message: `Average response time is ${metrics && metrics.avgResponseTime}ms (threshold: '2000ms)`',severity: 'warning' })} const latestMemory = metrics && metrics.memoryUsage[metrics && metrics.memoryUsage.length - 1) { { alerts && alerts.push({ type: 'error_rate',message: `Error rate is ${metrics && metrics.errorRate.toFixed(2)}% (threshold: 5%)`,severity: 'critical' })} if (metrics && metrics.avgResponseTime > 2000) { alerts && alerts.push({ type: 'response_time',message: `Average response time is ${metrics && metrics.avgResponseTime}ms (threshold: 2000ms)`,severity: 'warning' })} const latestMemory = metrics && metrics.memoryUsage[metrics && metrics.memoryUsage.length - 1}]; if ( { alerts && alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math && Math.round(latestMemory && latestMemory.heapUsed / 1024 / 1024)}MB (threshold: '100MB)`',severity: 'warning' })} return alerts) { { alerts && alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math && Math.round(latestMemory && latestMemory.heapUsed / 1024 / 1024)}MB (threshold: 100MB)`,severity: 'warning' })} return alerts}} } module && module.exports = AlertingSystem;


const nodemailer = require('nodemailer') class AlertingSystem { constructor() { this.transporter = nodemailer.createTransporter({ service: 'gmail',auth: { user: process.env.ALERT_EMAIL_USER,pass: 'process.env.ALERT_EMAIL_PASS' } })} async sendAlert(subject,message,severity = 'warning') { const mailOptions = { from: 'process.env.ALERT_EMAIL_USER',to: 'process.env.ALERT_EMAIL_RECIPIENTS',subject: `[${severity.toUpperCase()}] ${subject}`,text: 'message',html: ` <h2>${subject}</h2> <p><strong>Severity:</strong> ${severity}</p> <p><strong>Time:</strong> ${new Date().toISOString()}</p> <p><strong>Message:</strong></p> <pre>${message}</pre> ` }; try { await this.transporter.sendMail(mailOptions)} catch { } } checkThresholds(metrics) { const alerts = []; if ( { alerts.push({ type: 'error_rate',message: `Error rate is ${metrics.errorRate.toFixed(2)}% (threshold: '5%)`',severity: 'critical' })} if (metrics.avgResponseTime > 2000) { alerts.push({ type: 'response_time',message: `Average response time is ${metrics.avgResponseTime}ms (threshold: '2000ms)`',severity: 'warning' })} const latestMemory = metrics.memoryUsage[metrics.memoryUsage.length - 1) { { alerts.push({ type: 'error_rate',message: `Error rate is ${metrics.errorRate.toFixed(2)}% (threshold: 5%)`,severity: 'critical' })} if (metrics.avgResponseTime > 2000) { alerts.push({ type: 'response_time',message: `Average response time is ${metrics.avgResponseTime}ms (threshold: 2000ms)`,severity: 'warning' })} const latestMemory = metrics.memoryUsage[metrics.memoryUsage.length - 1}]; if ( { alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math.round(latestMemory.heapUsed / 1024 / 1024)}MB (threshold: '100MB)`',severity: 'warning' })} return alerts) { { alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math.round(latestMemory.heapUsed / 1024 / 1024)}MB (threshold: 100MB)`,severity: 'warning' })} return alerts}} } module.exports = AlertingSystem;
const nodemailer = require('nodemailer') class AlertingSystem { constructor() { this.transporter = nodemailer.createTransporter({ service: 'gmail',auth: { user: process.env.ALERT_EMAIL_USER,pass: 'process.env.ALERT_EMAIL_PASS' } })} async sendAlert(subject,message,severity = 'warning') { const mailOptions = { from: 'process.env.ALERT_EMAIL_USER',to: 'process.env.ALERT_EMAIL_RECIPIENTS',subject: `[${severity.toUpperCase()}] ${subject}`,text: 'message',html: ` <h2>${subject}</h2> <p><strong>Severity:</strong> ${severity}</p> <p><strong>Time:</strong> ${new Date().toISOString()}</p> <p><strong>Message:</strong></p> <pre>${message}</pre> ` }; try { await this.transporter.sendMail(mailOptions)} catch { } } checkThresholds(metrics) { const alerts = []; if ( { alerts.push({ type: 'error_rate',message: `Error rate is ${metrics.errorRate.toFixed(2)}% (threshold: '5%)`',severity: 'critical' })} if (metrics.avgResponseTime > 2000) { alerts.push({ type: 'response_time',message: `Average response time is ${metrics.avgResponseTime}ms (threshold: '2000ms)`',severity: 'warning' })} const latestMemory = metrics.memoryUsage[metrics.memoryUsage.length - 1) { { alerts.push({ type: 'error_rate',message: `Error rate is ${metrics.errorRate.toFixed(2)}% (threshold: 5%)`,severity: 'critical' })} if (metrics.avgResponseTime > 2000) { alerts.push({ type: 'response_time',message: `Average response time is ${metrics.avgResponseTime}ms (threshold: 2000ms)`,severity: 'warning' })} const latestMemory = metrics.memoryUsage[metrics.memoryUsage.length - 1}]; if ( { alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math.round(latestMemory.heapUsed / 1024 / 1024)}MB (threshold: '100MB)`',severity: 'warning' })} return alerts) { { alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math.round(latestMemory.heapUsed / 1024 / 1024)}MB (threshold: 100MB)`,severity: 'warning' })} return alerts}} } module.exports = AlertingSystem;
const nodemailer = require('nodemailer') class AlertingSystem { constructor() { this.transporter = nodemailer.createTransporter({ service: 'gmail',auth: { user: process.env.ALERT_EMAIL_USER,pass: 'process.env.ALERT_EMAIL_PASS' } })} async sendAlert(subject,message,severity = 'warning') { const mailOptions = { from: 'process.env.ALERT_EMAIL_USER',to: 'process.env.ALERT_EMAIL_RECIPIENTS',subject: `[${severity.toUpperCase()}] ${subject}`,text: 'message',html: ` <h2>${subject}</h2> <p><strong>Severity:</strong> ${severity}</p> <p><strong>Time:</strong> ${new Date().toISOString()}</p> <p><strong>Message:</strong></p> <pre>${message}</pre> ` }; try { await this.transporter.sendMail(mailOptions)} catch { } } checkThresholds(metrics) { const alerts = []; if ( { alerts.push({ type: 'error_rate',message: `Error rate is ${metrics.errorRate.toFixed(2)}% (threshold: '5%)`',severity: 'critical' })} if (metrics.avgResponseTime > 2000) { alerts.push({ type: 'response_time',message: `Average response time is ${metrics.avgResponseTime}ms (threshold: '2000ms)`',severity: 'warning' })} const latestMemory = metrics.memoryUsage[metrics.memoryUsage.length - 1) { { alerts.push({ type: 'error_rate',message: `Error rate is ${metrics.errorRate.toFixed(2)}% (threshold: 5%)`,severity: 'critical' })} if (metrics.avgResponseTime > 2000) { alerts.push({ type: 'response_time',message: `Average response time is ${metrics.avgResponseTime}ms (threshold: 2000ms)`,severity: 'warning' })} const latestMemory = metrics.memoryUsage[metrics.memoryUsage.length - 1}]; if ( { alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math.round(latestMemory.heapUsed / 1024 / 1024)}MB (threshold: '100MB)`',severity: 'warning' })} return alerts) { { alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math.round(latestMemory.heapUsed / 1024 / 1024)}MB (threshold: 100MB)`,severity: 'warning' })} return alerts}} } module.exports = AlertingSystem;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
const nodemailer = require('nodemailer') class AlertingSystem { constructor() { this.transporter = nodemailer.createTransporter({ service: 'gmail',auth: { user: process.env.ALERT_EMAIL_USER,pass: 'process.env.ALERT_EMAIL_PASS' } })} async sendAlert(subject,message,severity = 'warning') { const mailOptions = { from: 'process.env.ALERT_EMAIL_USER',to: 'process.env.ALERT_EMAIL_RECIPIENTS',subject: `[${severity.toUpperCase()}] ${subject}`,text: 'message',html: ` <h2>${subject}</h2> <p><strong>Severity:</strong> ${severity}</p> <p><strong>Time:</strong> ${new Date().toISOString()}</p> <p><strong>Message:</strong></p> <pre>${message}</pre> ` }; try { await this.transporter.sendMail(mailOptions)} catch { } } checkThresholds(metrics) { const alerts = []; if ( { alerts.push({ type: 'error_rate',message: `Error rate is ${metrics.errorRate.toFixed(2)}% (threshold: '5%)`',severity: 'critical' })} if (metrics.avgResponseTime > 2000) { alerts.push({ type: 'response_time',message: `Average response time is ${metrics.avgResponseTime}ms (threshold: '2000ms)`',severity: 'warning' })} const latestMemory = metrics.memoryUsage[metrics.memoryUsage.length - 1) { { alerts.push({ type: 'error_rate',message: `Error rate is ${metrics.errorRate.toFixed(2)}% (threshold: 5%)`,severity: 'critical' })} if (metrics.avgResponseTime > 2000) { alerts.push({ type: 'response_time',message: `Average response time is ${metrics.avgResponseTime}ms (threshold: 2000ms)`,severity: 'warning' })} const latestMemory = metrics.memoryUsage[metrics.memoryUsage.length - 1}]; if ( { alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math.round(latestMemory.heapUsed / 1024 / 1024)}MB (threshold: '100MB)`',severity: 'warning' })} return alerts) { { alerts.push({ type: 'memory_usage',message: `Memory usage is ${Math.round(latestMemory.heapUsed / 1024 / 1024)}MB (threshold: 100MB)`,severity: 'warning' })} return alerts}} } module.exports = AlertingSystem;
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
