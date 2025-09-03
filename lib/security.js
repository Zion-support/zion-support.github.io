// Security utility functions;

export class SecurityUtils {
  static sanitizeInput() {

  if (typeof input !== "string") return input;
    return input;
      .replace(/[<>]/g, "") // Remove potential HTML tags;
      .replace(/javascript:/gi, "") // Remove javascript: protocol;
      .replace(/on\w+=/gi, "") // Remove event handlers;
      .trim();
}
  static validateEmail() {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
  static generateCSRFToken() {

  return crypto.randomBytes(32).toString("hex");
}
  static hashPassword() {

  return crypto.createHash("sha256").update(password).digest("hex");
}
  static validatePassword() {

  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
  static escapeHtml() {

  const map = {
  "&": "&amp;"
      "<": "&lt;">;
      ">": "&gt;"
      """: "&quot;"
      """: "&#039;";
}
    return text.replace(/[&<>""]/g, (m) => map[m]);
}
}