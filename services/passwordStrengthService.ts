<<<<<<< HEAD
export interface PasswordStrengthResult {
  password: string,
  score: number, // 0-100
  strength: 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong',
  feedback: string[],
  suggestions: string[],
  details: {
    length: number,
    hasUppercase: boolean,
    hasLowercase: boolean,
    hasNumbers: boolean,
    hasSymbols: boolean,
    hasCommonWords: boolean,
    hasSequentialChars: boolean,
    hasRepeatingChars: boolean,
    entropy: number,
    crackTime: string
  },
  warnings: string[]
}

export interface CommonPasswordData {
  commonPasswords: Set<string>,
  commonWords: Set<string>,
  patterns: RegExp[]
}

class PasswordStrengthService {
  private commonPasswords: Set<string>,
  private commonWords: Set<string>,
  private patterns: RegExp[],
=======
export interface PasswordStrengthResult {_password: string;
  score: number; // 0-100
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
    crackTime: string;};
  warnings: string[];
}

export interface CommonPasswordData {_commonPasswords: Set<string>;
  commonWords: Set<string>;
  patterns: RegExp[];}

class PasswordStrengthService {_private commonPasswords: Set<string>;
  private commonWords: Set<string>;
  private patterns: RegExp[];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  constructor() {
    // Common weak passwords
    this.commonPasswords = new Set([
<<<<<<< HEAD
      'password123456123456789qwertyabc123password123adminletmein', 'welcomemonkeydragonmasterhellofreedomwhateverqazwsx', 'trustno1jordanharleyrangeriwantujenniferhunterbuster', 'thomastiggerrobertsoccerbatmantestpasskiller', 'hockeygeorgecharlieandrewmichellelovesunshinejessica',
      'asshole6969amandaaccessyankees987654321dallasaustin', 'thundertaylorbaileyshadowwolverinesteelers'
    ]),

    // Common words that make passwords weak
    this.commonWords = new Set([
      'passwordadminuserloginwelcomehellotestguest', 'demosampleexampledefaultrootsystemcomputerinternet', 'websiteemailphonemobile'
    ]),

    // Common patterns that make passwords predictable
    this.patterns = [
      /123/, /abc/, /qwe/, /asd/, /zxc/, /qaz/, /wsx/, /edc/, /rfv/, /tgb/,
      /qwerty/, /asdfgh/, /zxcvbn/, /password/, /admin/, /user/, /test/,
      /1234/, /abcd/, /qwer/, /asdf/, /zxcv/, /qaz/, /wsx/, /edc/, /rfv/
    ]
  }
=======
      'password', _'123456', _'123456789', _'qwerty', _'abc123', _'password123', _'admin', _'letmein', _'welcome', _'monkey', _'dragon', _'master', _'hello', _'freedom', _'whatever', _'qazwsx', _'trustno1', _'jordan', _'harley', _'ranger', _'iwantu', _'jennifer', _'hunter', _'buster', _'thomas', _'tigger', _'robert', _'soccer', _'batman', _'test', _'pass', _'killer', _'hockey', _'george', _'charlie', _'andrew', _'michelle', _'love', _'sunshine', _'jessica', _'asshole', _'6969', _'amanda', _'access', _'yankees', _'987654321', _'dallas', _'austin', _'thunder', _'taylor', _'bailey', _'shadow', _'wolverine', _'steelers'
    ]);

    // Common words that make passwords weak
    this.commonWords = new Set([
      'password', _'admin', _'user', _'login', _'welcome', _'hello', _'test', _'guest', _'demo', _'sample', _'example', _'default', _'root', _'system', _'computer', _'internet', _'website', _'email', _'phone', _'mobile'
    ]);

    // Common patterns that make passwords predictable
    this.patterns = [
      /123/, _/abc/, _/qwe/, _/asd/, _/zxc/, _/qaz/, _/wsx/, _/edc/, _/rfv/, _/tgb/, _/qwerty/, _/asdfgh/, _/zxcvbn/, _/password/, _/admin/, _/user/, _/test/, _/1234/, _/abcd/, _/qwer/, _/asdf/, _/zxcv/, _/qaz/, _/wsx/, _/edc/, _/rfv/
    ];}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  /**
   * Analyze password strength comprehensively
   */
<<<<<<< HEAD
  analyzePassword(password: string): PasswordStrengthResult {
    const result: PasswordStrengthResult = {
      password,
      score: 0,
      strength: 'very-weak',
      feedback: [],
      suggestions: [],
      details: {
        length: password.length,
        hasUppercase: /[A-Z]/.test(password),
        hasLowercase: /[a-z]/.test(password),
        hasNumbers: /\d/.test(password),
        hasSymbols: /[!@#$%^&*()_+\-=\[\]{},':"\\|,.<>\/?]/.test(password),
=======
  analyzePassword(password: string): PasswordStrengthResult {_const result: PasswordStrengthResult = {
      password, _score: 0, _strength: 'very-weak', _feedback: [], _suggestions: [], _details: {
        length: password.length, _hasUppercase: /[A-Z]/.test(password), _hasLowercase: /[a-z]/.test(password), _hasNumbers: /\d/.test(password), _hasSymbols: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        hasCommonWords: this.hasCommonWords(password),
        hasSequentialChars: this.hasSequentialChars(password),
        hasRepeatingChars: this.hasRepeatingChars(password),
        entropy: this.calculateEntropy(password),
        crackTime: this.estimateCrackTime(password)
      },
      warnings: []
    },

    // Calculate score
    result.score = this.calculateScore(result.details),
    result.strength = this.getStrengthLevel(result.score),

    // Generate feedback
    result.feedback = this.generateFeedback(result.details),
    result.suggestions = this.generateSuggestions(result.details),
    result.warnings = this.generateWarnings(result.details),

    return result
  }

  /**
   * Calculate password strength score
   */
<<<<<<< HEAD
  private calculateScore(details: PasswordStrengthResult['details']): number {
    let score = 0,
=======
  private calculateScore(details: PasswordStrengthResult['details']): number {_let _score = 0;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // Length scoring (0-25 points)
    if (details.length >= 12) score += 25,
    else if (details.length >= 10) score += 20,
    else if (details.length >= 8) score += 15,
    else if (details.length >= 6) score += 10,
    else if (details.length >= 4) score += 5,

    // Character variety scoring (0-25 points)
    if (details.hasUppercase) score += 5,
    if (details.hasLowercase) score += 5,
    if (details.hasNumbers) score += 5,
    if (details.hasSymbols) score += 10,

    // Complexity scoring (0-25 points)
    if (details.entropy >= 4.0) score += 25,
    else if (details.entropy >= 3.0) score += 20,
    else if (details.entropy >= 2.0) score += 15,
    else if (details.entropy >= 1.0) score += 10,

    // Penalties (0-25 points deducted)
    if (details.hasCommonWords) score -= 15,
    if (details.hasSequentialChars) score -= 10,
    if (details.hasRepeatingChars) score -= 10,

<<<<<<< HEAD
    return Math.max(0, Math.min(100, score))
  }
=======
    return Math.max(0, _Math.min(100, _score));}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  /**
   * Determine strength level based on score
   */
<<<<<<< HEAD
  private getStrengthLevel(score: number): PasswordStrengthResult['strength'] {
    if (score >= 90) return 'very-strong',
    if (score >= 80) return 'strong',
    if (score >= 60) return 'medium',
    if (score >= 40) return 'weak',
    return 'very-weak'
  }
=======
  private getStrengthLevel(score: number): PasswordStrengthResult['strength'] {_if (score >= 90) return 'very-strong';
    if (score >= 80) return 'strong';
    if (score >= 60) return 'medium';
    if (score >= 40) return 'weak';
    return 'very-weak';}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  /**
   * Check if password contains common words
   */
<<<<<<< HEAD
  private hasCommonWords(password: string): boolean {
    const lowerPassword = password.toLowerCase(),
    for (const word of this.commonWords) {
      if (lowerPassword.includes(word)) {
        return true
      }
=======
  private hasCommonWords(password: string): boolean {_const _lowerPassword = password.toLowerCase();
    for (const word of this.commonWords) {
      if (lowerPassword.includes(word)) {
        return true;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    return false
  }

  /**
   * Check for sequential characters
   */
  private hasSequentialChars(password: string): boolean {_for (const pattern of this.patterns) {
      if (pattern.test(password.toLowerCase())) {
<<<<<<< HEAD
        return true
      }
=======
        return true;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    return false
  }

  /**
   * Check for repeating characters
   */
<<<<<<< HEAD
  private hasRepeatingChars(password: string): boolean {
    for (let i = 0, i < password.length - 2, i++) {
      if (password[i] === password[i + 1] && password[i] === password[i + 2]) {
        return true
      }
=======
  private hasRepeatingChars(password: string): boolean {_for (let i = 0; i < password.length - 2; i++) {
      if (password[i] === password[i + 1] && password[i] === password[i + 2]) {
        return true;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    return false
  }

  /**
   * Calculate password entropy (measure of randomness)
   */
<<<<<<< HEAD
  private calculateEntropy(password: string): number {
    const charset = new Set(password.split('')).size,
    return Math.log2(Math.pow(charset, password.length))
  }
=======
  private calculateEntropy(password: string): number {_const _charset = new Set(password.split('')).size;
    return Math.log2(Math.pow(charset, _password.length));}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  /**
   * Estimate time to crack password
   */
<<<<<<< HEAD
  private estimateCrackTime(password: string): string {
    const entropy = this.calculateEntropy(password),
    const attemptsPerSecond = 1000000000, // 1 billion attempts per second
    const totalAttempts = Math.pow(2, entropy),
    const seconds = totalAttempts / attemptsPerSecond,

    if (seconds < 1) return 'Instantly',
    if (seconds < 60) return `${Math.ceil(seconds)} seconds`,
    if (seconds < 3600) return `${Math.ceil(seconds / 60)} minutes`,
    if (seconds < 86400) return `${Math.ceil(seconds / 3600)} hours`,
    if (seconds < 31536000) return `${Math.ceil(seconds / 86400)} days`,
    return `${Math.ceil(seconds / 31536000)} years`
=======
  private estimateCrackTime(password: string): string {_const _entropy = this.calculateEntropy(password);
    const _attemptsPerSecond = 1000000000; // 1 billion attempts per second
    const _totalAttempts = Math.pow(2, _entropy);
    const _seconds = totalAttempts / attemptsPerSecond;

    if (seconds < 1) return 'Instantly';
    if (seconds < 60) return `${Math.ceil(seconds)} seconds`;
    if (seconds < 3600) return `${_Math.ceil(seconds / 60)} minutes`;
    if (seconds < 86400) return `${_Math.ceil(seconds / 3600)} hours`;
    if (seconds < 31536000) return `${_Math.ceil(seconds / 86400)} days`;
    return `${_Math.ceil(seconds / 31536000)} years`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  /**
   * Generate feedback based on password analysis
   */
<<<<<<< HEAD
  private generateFeedback(details: PasswordStrengthResult['details']): string[] {
    const feedback: string[] = [],

    if (details.length < 8) {
      feedback.push('Password is too short - minimum 8 characters recommended')
    } else if (details.length < 12) {
      feedback.push('Consider using a longer password for better security')
    }

    if (!details.hasUppercase) {
      feedback.push('Add uppercase letters to increase complexity')
    }

    if (!details.hasLowercase) {
      feedback.push('Add lowercase letters to increase complexity')
    }

    if (!details.hasNumbers) {
      feedback.push('Include numbers to make password harder to guess')
    }

    if (!details.hasSymbols) {
      feedback.push('Add special characters for maximum security')
    }

    if (details.hasCommonWords) {
      feedback.push('Avoid common words that are easily guessed')
    }

    if (details.hasSequentialChars) {
      feedback.push('Avoid sequential character patterns')
    }

    if (details.hasRepeatingChars) {
      feedback.push('Avoid repeating character patterns')
    }
=======
  private generateFeedback(details: PasswordStrengthResult['details']): string[] {_const feedback: string[] = [];

    if (details.length < 8) {
      feedback.push('Password is too short - minimum 8 characters recommended');} else if (details.length < 12) {_feedback.push('Consider using a longer password for better security');}

    if (!details.hasUppercase) {_feedback.push('Add uppercase letters to increase complexity');}

    if (!details.hasLowercase) {_feedback.push('Add lowercase letters to increase complexity');}

    if (!details.hasNumbers) {_feedback.push('Include numbers to make password harder to guess');}

    if (!details.hasSymbols) {_feedback.push('Add special characters for maximum security');}

    if (details.hasCommonWords) {_feedback.push('Avoid common words that are easily guessed');}

    if (details.hasSequentialChars) {_feedback.push('Avoid sequential character patterns');}

    if (details.hasRepeatingChars) {_feedback.push('Avoid repeating character patterns');}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return feedback
  }

  /**
   * Generate improvement suggestions
   */
<<<<<<< HEAD
  private generateSuggestions(details: PasswordStrengthResult['details']): string[] {
    const suggestions: string[] = [],

    if (details.length < 12) {
      suggestions.push('Use at least 12 characters for strong passwords')
    }

    if (!details.hasUppercase || !details.hasLowercase || !details.hasNumbers || !details.hasSymbols) {
      suggestions.push('Mix uppercase, lowercase, numbers, and symbols')
    }

    if (details.hasCommonWords) {
      suggestions.push('Use random combinations instead of dictionary words')
    }

    if (details.hasSequentialChars) {
      suggestions.push('Avoid keyboard patterns like qwerty or 123456')
    }
=======
  private generateSuggestions(details: PasswordStrengthResult['details']): string[] {_const suggestions: string[] = [];

    if (details.length < 12) {
      suggestions.push('Use at least 12 characters for strong passwords');}

    if (!details.hasUppercase || !details.hasLowercase || !details.hasNumbers || !details.hasSymbols) {_suggestions.push('Mix uppercase, _lowercase, _numbers, _and symbols');}

    if (details.hasCommonWords) {_suggestions.push('Use random combinations instead of dictionary words');}

    if (details.hasSequentialChars) {_suggestions.push('Avoid keyboard patterns like qwerty or 123456');}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    suggestions.push('Consider using a passphrase with random words'),
    suggestions.push('Use unique passwords for each account'),
    suggestions.push('Consider a password manager for secure storage'),

    return suggestions
  }

  /**
   * Generate security warnings
   */
<<<<<<< HEAD
  private generateWarnings(details: PasswordStrengthResult['details']): string[] {
    const warnings: string[] = [],

    if (details.length < 8) {
      warnings.push('CRITICAL: Password is extremely weak and easily crackable')
    }

    if (details.hasCommonWords) {
      warnings.push('WARNING: Common words make password vulnerable to dictionary attacks')
    }

    if (details.entropy < 2.0) {
      warnings.push('WARNING: Low entropy makes password predictable')
    }

    if (details.crackTime === 'Instantly' || details.crackTime.includes('seconds')) {
      warnings.push('WARNING: Password can be cracked in seconds')
    }
=======
  private generateWarnings(details: PasswordStrengthResult['details']): string[] {_const warnings: string[] = [];

    if (details.length < 8) {
      warnings.push('CRITICAL: Password is extremely weak and easily crackable');}

    if (details.hasCommonWords) {_warnings.push('WARNING: Common words make password vulnerable to dictionary attacks');}

    if (details.entropy < 2.0) {_warnings.push('WARNING: Low entropy makes password predictable');}

    if (details.crackTime === 'Instantly' || details.crackTime.includes('seconds')) {_warnings.push('WARNING: Password can be cracked in seconds');}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return warnings
  }

  /**
   * Generate a strong password
   */
<<<<<<< HEAD
  generateStrongPassword(length: number = 16): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|,:,.<>?',
    let password = '',
=======
  generateStrongPassword(length: number = 16): string {_const _charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let _password = '';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Ensure at least one character from each category
    password += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)],
    password += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)],
    password += '0123456789'[Math.floor(Math.random() * 10)],
    password += '!@#$%^&*()_+-=[]{}|,:,.<>?'[Math.floor(Math.random() * 32)],
    
    // Fill the rest randomly
<<<<<<< HEAD
    for (let i = 4, i < length, i++) {
      password += charset[Math.floor(Math.random() * charset.length)]
    }
    
    // Shuffle the password
    return password.split('').sort(() => Math.random() - 0.5).join('')
=======
    for (let i = 4; i < length; i++) {_password += charset[Math.floor(Math.random() * charset.length)];}
    
    // Shuffle the password
    return password.split('').sort__(() => Math.random() - 0.5).join('');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  /**
   * Generate a memorable passphrase
   */
<<<<<<< HEAD
  generatePassphrase(wordCount: number = 4): string {
    const words = [
      'applebananacherrydragoneagleforestgardenharbor', 'islandjungleknightlighthousemountainoceanpenguinqueen', 'riversunsettigerumbrellavolcanowaterfallxylophoneyellow', 'zebra'
    ],
    
    let passphrase = '',
    for (let i = 0, i < wordCount, i++) {
      const word = words[Math.floor(Math.random() * words.length)],
      passphrase += (i === 0 ? '' : '-') + word
    }
=======
  generatePassphrase(wordCount: number = 4): string {_const _words = [
      'apple', _'banana', _'cherry', _'dragon', _'eagle', _'forest', _'garden', _'harbor', _'island', _'jungle', _'knight', _'lighthouse', _'mountain', _'ocean', _'penguin', _'queen', _'river', _'sunset', _'tiger', _'umbrella', _'volcano', _'waterfall', _'xylophone', _'yellow', _'zebra'
    ];
    
    let _passphrase = '';
    for (let i = 0; i < wordCount; i++) {
      const _word = words[Math.floor(Math.random() * words.length)];
      passphrase += (i === 0 ? '' : '-') + word;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    return passphrase
  }

  /**
   * Add custom common password
   */
<<<<<<< HEAD
  addCommonPassword(password: string): void {
    this.commonPasswords.add(password.toLowerCase())
  }
=======
  addCommonPassword(password: string): void {_this.commonPasswords.add(password.toLowerCase());}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  /**
   * Remove password from common list
   */
<<<<<<< HEAD
  removeCommonPassword(password: string): void {
    this.commonPasswords.delete(password.toLowerCase())
  }
=======
  removeCommonPassword(password: string): void {_this.commonPasswords.delete(password.toLowerCase());}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  /**
   * Get service statistics
   */
<<<<<<< HEAD
  getStats(): { totalCommonPasswords: number, totalCommonWords: number, totalPatterns: number } {
    return {
      totalCommonPasswords: this.commonPasswords.size,
      totalCommonWords: this.commonWords.size,
      totalPatterns: this.patterns.length
    }
=======
  getStats(): {_totalCommonPasswords: number; totalCommonWords: number; totalPatterns: number} {_return {
      totalCommonPasswords: this.commonPasswords.size, _totalCommonWords: this.commonWords.size, _totalPatterns: this.patterns.length};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

// Export singleton instance
<<<<<<< HEAD
export const passwordStrengthService = new PasswordStrengthService(),

// Export the class for custom instances
export { PasswordStrengthService },
=======
export const _passwordStrengthService = new PasswordStrengthService();

// Export the class for custom instances
export {_PasswordStrengthService};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
