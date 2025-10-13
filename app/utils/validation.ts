// Validation utility
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export class Validator {
  private static instance: Validator;

  static getInstance(): Validator {
    if (!Validator.instance) {
      Validator.instance = new Validator();
    }
    return Validator.instance;
  }

  validateEmail(email: string): ValidationResult {
    const errors: string[] = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.push('Email is required');
    } else if (!emailRegex.test(email)) {
      errors.push('Invalid email format');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  validatePassword(password: string): ValidationResult {
    const errors: string[] = [];

    if (!password) {
      errors.push('Password is required');
    } else {
      if (password.length < 8) {
        errors.push('Password must be at least 8 characters long');
      }
      if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
      }
      if (!/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter');
      }
      if (!/\d/.test(password)) {
        errors.push('Password must contain at least one number');
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  validatePhone(phone: string): ValidationResult {
    const errors: string[] = [];
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;

    if (!phone) {
      errors.push('Phone number is required');
    } else if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      errors.push('Invalid phone number format');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  validateUrl(url: string): ValidationResult {
    const errors: string[] = [];

    if (!url) {
      errors.push('URL is required');
    } else {
      try {
        new URL(url);
      } catch {
        errors.push('Invalid URL format');
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  validateField(value: any, rules: ValidationRule): ValidationResult {
    const errors: string[] = [];

    if (rules.required && (!value || value.toString().trim() === '')) {
      errors.push('This field is required');
    }

    if (value && rules.minLength && value.toString().length < rules.minLength) {
      errors.push(`Minimum length is ${rules.minLength} characters`);
    }

    if (value && rules.maxLength && value.toString().length > rules.maxLength) {
      errors.push(`Maximum length is ${rules.maxLength} characters`);
    }

    if (value && rules.pattern && !rules.pattern.test(value.toString())) {
      errors.push('Invalid format');
    }

    if (value && rules.custom) {
      const customResult = rules.custom(value);
      if (customResult !== true) {
        errors.push(typeof customResult === 'string' ? customResult : 'Invalid value');
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  validateForm(data: Record<string, any>, rules: Record<string, ValidationRule>): ValidationResult {
    const errors: string[] = [];

    Object.keys(rules).forEach(field => {
      const fieldResult = this.validateField(data[field], rules[field]);
      if (!fieldResult.isValid) {
        errors.push(...fieldResult.errors.map(error => `${field}: ${error}`));
      }
    });

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

export default Validator;