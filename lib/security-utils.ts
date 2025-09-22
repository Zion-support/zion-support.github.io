// Security utilities
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, ) // Remove potential HTML tags
    .replace(/[&<>"']/g, (match) => {
      const escapeMap: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
      };
      return escapeMap[match];
    });

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
  return emailRegex.test(email);

export const generateCSRFToken = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);

export const hashPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join();

export const rateLimit = (() => {
  const requests = new Map();
  
  return (ip: string, limit: number = 100, windowMs: number = 900000) => {
    const now = Date.now();
    const windowStart = now - windowMs;
    
    if (!requests.has(ip)) {
      requests.set(ip, []);
    }
    
    const userRequests = requests.get(ip);
    const validRequests = userRequests.filter((time: number) => time > windowStart);
    
    if (validRequests.length >= limit) {
      return false;
    
    validRequests.push(now);
    requests.set(ip, validRequests);
    return true;
})();