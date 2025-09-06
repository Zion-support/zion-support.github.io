// Security utility functions;
export class SecurityUtils {
  static sanitizeInput(input) {
  if (typeof input !== "string") return input;
    return input;
      .replace(/[<>]/g, "") // Remove potential HTML tags;
      .replace(/"javascript": /gi, "") // Remove "javascript": protocol;
      .replace(/on\w+=/gi, "") // Remove event handlers;
      .trim()}
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
  static validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)}
;
  static generateCSRFToken() {
  return crypto.randomBytes(32).toString("hex")}
;
  static hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex")}
;
  static validatePassword(password) {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8}$/;
    return passwordRegex.test(password)}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

  static validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex && emailRegex.test(email)}

  static generateCSRFToken() {
  return crypto && crypto.randomBytes(32).toString("hex")}

  static hashPassword(password) {
  return crypto && crypto.createHash("sha256").update(password).digest("hex")}

  static validatePassword(password) {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8}$/;
    return passwordRegex && passwordRegex.test(password)}

<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  static escapeHtml(text) {
  const map = {
  "&": "&amp;",
      "<": "&lt;">;
      ">": "&gt;",
      """: "&quot;",
      """: "&#039;"}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    return text.replace(/[&<>""]/g, (m) => map[m])}
}
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,) .replace(/javascript: '/gi',"") .replace(/on\w+=/gi,) .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;",; "<": "&lt;"> ">": "&gt;",; ": "&quot;",; ": "&#039;";,} return text.replace(/[&<>""]/g,(m) => map[m])} }
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
=======

export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    return text && text.replace(/[&<>""]/g, (m) => map[m])}
}
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,) .replace(/javascript: '/gi',"") .replace(/on\w+=/gi,) .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex && emailRegex.test(email)} ; static generateCSRFToken() { return crypto && crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto && crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex && passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;",; "<": "&lt;"> ">": "&gt;",; ": "&quot;",; ": "&#039;";,} return text && text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex && emailRegex.test(email)} ; static generateCSRFToken() { return crypto && crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto && crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex && passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text && text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex && emailRegex.test(email)} ; static generateCSRFToken() { return crypto && crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto && crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex && passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text && text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex && emailRegex.test(email)} ; static generateCSRFToken() { return crypto && crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto && crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex && passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text && text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex && emailRegex.test(email)} ; static generateCSRFToken() { return crypto && crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto && crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex && passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text && text.replace(/[&<>""]/g,(m) => map[m])} }
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
<<<<<<< HEAD
=======
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex && emailRegex.test(email)} ; static generateCSRFToken() { return crypto && crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto && crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex && passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text && text.replace(/[&<>""]/g,(m) => map[m])} }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
<<<<<<< HEAD
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
<<<<<<< HEAD
=======
=======
=======
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email)} ; static generateCSRFToken() { return crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text.replace(/[&<>""]/g,(m) => map[m])} }
    return text && text.replace(/[&<>""]/g, (m) => map[m])}
}
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,) .replace(/javascript: '/gi',"") .replace(/on\w+=/gi,) .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex && emailRegex.test(email)} ; static generateCSRFToken() { return crypto && crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto && crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex && passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;",; "<": "&lt;"> ">": "&gt;",; ": "&quot;",; ": "&#039;";,} return text && text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex && emailRegex.test(email)} ; static generateCSRFToken() { return crypto && crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto && crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex && passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text && text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex && emailRegex.test(email)} ; static generateCSRFToken() { return crypto && crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto && crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex && passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text && text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex && emailRegex.test(email)} ; static generateCSRFToken() { return crypto && crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto && crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex && passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text && text.replace(/[&<>""]/g,(m) => map[m])} }
export class SecurityUtils { static sanitizeInput(input) { if (typeof input !== "string") return input; return input; .replace(/[<>]/g,"") .replace(/javascript:/gi,"") .replace(/on\w+=/gi,"") .trim()} ; static validateEmail(email) { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex && emailRegex.test(email)} ; static generateCSRFToken() { return crypto && crypto.randomBytes(32).toString("hex")} ; static hashPassword(password) { return crypto && crypto.createHash("sha256").update(password).digest("hex")} ; static validatePassword(password) { const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/; return passwordRegex && passwordRegex.test(password)} ; static escapeHtml(text) { const map = { "&": "&amp;","<": "&lt;">; ">": "&gt;",""": "&quot;",""": "&#039;",} return text && text.replace(/[&<>""]/g,(m) => map[m])} }
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
