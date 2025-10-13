// securityManager - Security utilities

export function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, '');
}

export function validateInput(input: string): boolean {
  return input.length > 0 && input.length < 1000;
}

export function generateToken(): string {
  return Math.random().toString(36).substring(2);
}
