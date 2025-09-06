export interface PasswordStrengthResult {
  password: string;
  score: number, // 0-100
  strength: 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong';
  feedback: string[];
  suggestions: string[];
  details: {
    length: number;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumbers: boolean;
    hasSymbols: boolean;
    hasCommonWords: boolean;
    hasSequentialChars: boolean;
    hasRepeatingChars: boolean;
    entropy: number;
    crackTime: string
  },
  warnings: string[]
}

export interface CommonPasswordData {
  commonPasswords: Set<string>;
  commonWords: Set<string>;
  patterns: RegExp[]
}

class PasswordStrengthService {
  private commonPasswords: Set<string>;
  private commonWords: Set<string>;
  private patterns: RegExp[];
  constructor() {
    // Common weak passwords
    this.commonPasswords;