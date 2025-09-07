// Security utility functions;
export class SecurityUtils {
  static sanitizeInput(input) {
  if (typeof input !== "string") return input;
    return input;
      .replace(/[<>]/g, "") // Remove potential HTML tags;
      .replace(/"javascript": /gi, "") // Remove "javascript": protocol;
      .replace(/on\w+=/gi, "") // Remove event handlers;
      .trim()}
  static validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex && emailRegex.test(email)}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  static generateCSRFToken() {
  return crypto && crypto.randomBytes(32).toString("hex")}
  static hashPassword(password) {
  return crypto && crypto.createHash("sha256").update(password).digest("hex")}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  static validatePassword(password) {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8}$/;
    return passwordRegex && passwordRegex.test(password)}
  static escapeHtml(text) {
  const map = {
  "&": "&amp;",
      "<": "&lt;">;
      ">": "&gt;",
      """: "&quot;",
<<<<<<< HEAD
      """: "&#039;"}
=======
<<<<<<< HEAD
      """: "&#039;"}
=======
      """: "&#039;"}
<<<<<<< HEAD
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
    return text.replace(/[&<>""]/g, (m) => map[m])}
}
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,) .replace(/javascript: '/gi',"") .replace(/on\w+=/gi,) .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;",; "<": "&lt;"> ">": "&gt;",; ": "&quot;",; ": "&#039;";,} return text.replace(/[&<>""]/g,(m) => map[m])} }
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
