
/**
 * Input Sanitization Utilities
 * Comprehensive input validation and sanitization
 */

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  sanitizedValue?: string;
}

export class InputSanitizer {
  private static readonly MAX_STRING_LENGTH = 1000;
  private static readonly ALLOWED_HTML_TAGS = ['b', 'i', 'em', 'strong', 'p', 'br'];
  private static readonly DANGEROUS_PATTERNS = [
    /<script[^>]*>.*?</script>/gi,
    /<iframe[^>]*>.*?</iframe>/gi,
    /javascript:/gi,
    /onw+s*=/gi,
    /<link[^>]*>.*?</link>/gi,
    /<meta[^>]*>.*?</meta>/gi,
    /<style[^>]*>.*?</style>/gi
  ];

  /**
   * Sanitize HTML content
   */
  static sanitizeHtml(input: string): string {
    if (!input || typeof input !== 'string') {
      return '';
    }

    // Remove dangerous patterns
    let sanitized = input;
    this.DANGEROUS_PATTERNS.forEach(pattern => {
      sanitized = sanitized.replace(pattern, '');
    });

    // Remove all HTML tags except allowed ones
    const allowedTagsRegex = new RegExp(
      `<(?!/?(?:${this.ALLOWED_HTML_TAGS.join('|')})(?:\s|>)).*?>`,
      'gi'
    );
    sanitized = sanitized.replace(allowedTagsRegex, '');

    // Decode HTML entities
    sanitized = sanitized
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/&#x2F;/g, '/');

    return sanitized.trim();
  }

  /**
   * Sanitize plain text input
   */
  static sanitizeText(input: string): string {
    if (!input || typeof input !== 'string') {
      return '';
    }

    return input
      .replace(/[<>]/g, '') // Remove angle brackets
      .replace(/[&"']/g, '') // Remove potentially dangerous characters
      .trim()
      .substring(0, this.MAX_STRING_LENGTH);
  }

  /**
   * Validate email address
   */
  static validateEmail(email: string): ValidationResult {
    const errors: string[] = [];
    
    if (!email || typeof email !== 'string') {
      errors.push('Email is required');
      return { isValid: false, errors };
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      errors.push('Invalid email format');
    }

    if (email.length > 254) {
      errors.push('Email is too long');
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedValue: this.sanitizeText(email)
    };
  }

  /**
   * Validate phone number
   */
  static validatePhone(phone: string): ValidationResult {
    const errors: string[] = [];
    
    if (!phone || typeof phone !== 'string') {
      errors.push('Phone number is required');
      return { isValid: false, errors };
    }

    // Remove all non-digit characters
    const digitsOnly = phone.replace(/\D/g, '');
    
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      errors.push('Phone number must be between 10 and 15 digits');
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedValue: digitsOnly
    };
  }

  /**
   * Validate URL
   */
  static validateUrl(url: string): ValidationResult {
    const errors: string[] = [];
    
    if (!url || typeof url !== 'string') {
      errors.push('URL is required');
      return { isValid: false, errors };
    }

    try {
      const urlObj = new URL(url);
      
      // Only allow http and https protocols
      if (!['http:', 'https:'].includes(urlObj.protocol)) {
        errors.push('Only HTTP and HTTPS URLs are allowed');
      }

      // Check for suspicious patterns
      if (urlObj.hostname.includes('..') || urlObj.hostname.includes('//')) {
        errors.push('Invalid URL format');
      }

    } catch (error) {
      errors.push('Invalid URL format');
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedValue: url
    };
  }

  /**
   * Validate and sanitize form data
   */
  static validateFormData(data: Record<string, any>): {
    isValid: boolean;
    errors: Record<string, string[]>;
    sanitizedData: Record<string, any>;
  } {
    const errors: Record<string, string[]> = {};
    const sanitizedData: Record<string, any> = {};

    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === 'string') {
        const sanitized = this.sanitizeText(value);
        sanitizedData[key] = sanitized;
        
        if (sanitized !== value) {
          errors[key] = errors[key] || [];
          errors[key].push('Input contains potentially dangerous characters');
        }
      } else {
        sanitizedData[key] = value;
      }
    });

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
      sanitizedData
    };
  }

  /**
   * Check for SQL injection patterns
   */
  static detectSqlInjection(input: string): boolean {
    const sqlPatterns = [
      /('|(\-\-)|(;)|(\|\|)|(union)|(select)|(insert)|(update)|(delete)|(drop)|(create)|(alter)|(exec)|(execute))/gi
    ];

    return sqlPatterns.some(pattern => pattern.test(input));
  }

  /**
   * Check for XSS patterns
   */
  static detectXss(input: string): boolean {
    const xssPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<link[^>]*>.*?<\/link>/gi,
      /<meta[^>]*>.*?<\/meta>/gi,
      /<style[^>]*>.*?<\/style>/gi
    ];

    return xssPatterns.some(pattern => pattern.test(input));
  }
}

export default InputSanitizer;
