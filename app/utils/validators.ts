'use client';
/**
 * Validation Utilities;
 * Provides common validation functions for forms and data;
 */

export interface ValidationResult {}
  isValid: boolean;

  errors: string[];

  error?: string;

}

/**
 * Email validation regex pattern;
 */
<<<<<<< HEAD
const EMAIL_REGEX = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/;"
/**
 * Phone number validation regex (US format)
 */
const PHONE_REGEX = "/^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/;"
/**
 * Name validation regex (letters, spaces, hyphens, apostrophes)
 */
const NAME_REGEX = "/^[a-zA-Z\s\-'\.]+$/;"
=======
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;;

/**
 * Phone number validation regex (US format)
 */
const PHONE_REGEX = /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/;;

/**
 * Name validation regex (letters, spaces, hyphens, apostrophes)
 */
const NAME_REGEX = /^[a-zA-Z\s\-\.]+$/;;

>>>>>>> origin/main
/**
 * URL validation regex;
 */
<<<<<<< HEAD
const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
=======
const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;;

>>>>>>> origin/main
/**
 * Validate email address;
 */
export function validateEmail(email: string): ValidationResult {}
  const errors: string[] = [];
<<<<<<< HEAD
  if (!email) {}
    errors.push('Email is required');
  } else if (email.length > 254) {}
    errors.push('Email is too long');
  } else if (!EMAIL_REGEX.test(email)) {}
    errors.push('Invalid email format');
  }
  
  return {}
=======

  if (!email) {
    errors.push('Email is required);

  } else if (email.length > 254) {
    errors.push('Email is too long);

  } else if (!EMAIL_REGEX.test(email)) {
    errors.push('Invalid email format);

  }

  return {
>>>>>>> origin/main
    isValid: errors.length === 0,
    errors;
  };

}

/**
 * Validate phone number;
 */
export function validatePhone(phone: string): ValidationResult {}
  const errors: string[] = [];
<<<<<<< HEAD
  if (!phone) {}
    errors.push('Phone number is required');
  } else if (!PHONE_REGEX.test(phone)) {}
    errors.push('Invalid phone number format');
  }
  
  return {}
=======

  if (!phone) {
    errors.push('Phone number is required);

  } else if (!PHONE_REGEX.test(phone)) {
    errors.push('Invalid phone number format);

  }

  return {
>>>>>>> origin/main
    isValid: errors.length === 0,
    errors;
  };

}

/**
 * Validate name;
 */
export function validateName(name: string): ValidationResult {}
  const errors: string[] = [];
<<<<<<< HEAD
  if (!name) {}
    errors.push('Name is required');
  } else if (name.length > 100) {}
    errors.push('Name is too long');
  } else if (!NAME_REGEX.test(name)) {}
    errors.push('Name contains invalid characters');
  }
  
  return {}
=======

  if (!name) {
    errors.push('Name is required);

  } else if (name.length > 100) {
    errors.push('Name is too long);

  } else if (!NAME_REGEX.test(name)) {
    errors.push('Name contains invalid characters);

  }

  return {
>>>>>>> origin/main
    isValid: errors.length === 0,
    errors;
  };

}

/**
 * Validate URL;
 */
export function validateUrl(url: string): ValidationResult {}
  const errors: string[] = [];
<<<<<<< HEAD
  if (!url) {}
    errors.push('URL is required');
  } else if (!URL_REGEX.test(url)) {}
    errors.push('Invalid URL format');
  }
  
  return {}
=======

  if (!url) {
    errors.push('URL is required);

  } else if (!URL_REGEX.test(url)) {
    errors.push('Invalid URL format);

  }

  return {
>>>>>>> origin/main
    isValid: errors.length === 0,
    errors;
  };

}

/**
 * Validate message;
 */
export function validateMessage(message: string): ValidationResult {}
  const errors: string[] = [];
<<<<<<< HEAD
  if (!message) {}
    errors.push('Message is required');
  } else if (message.length > 1000) {}
    errors.push('Message is too long');
  }
  
  return {}
=======

  if (!message) {
    errors.push('Message is required);

  } else if (message.length > 1000) {
    errors.push('Message is too long);

  }

  return {
>>>>>>> origin/main
    isValid: errors.length === 0,
    errors;
  };

}

/**
 * Validate form data;
 */
export function validateFormData(data: Record<string, any>): ValidationResult {}
  const errors: string[] = [];
<<<<<<< HEAD
  if (data.email) {}
    const emailResult="validateEmail(data.email);"
    if (!emailResult.isValid) {}
=======

  if (data.email) {
    const emailResult = validateEmail(data.email);;

    if (!emailResult.isValid) {
>>>>>>> origin/main
      errors.push(...emailResult.errors);

    }

  }
<<<<<<< HEAD
  
  if (data.phone) {}
    const phoneResult="validatePhone(data.phone);"
    if (!phoneResult.isValid) {}
=======

  if (data.phone) {
    const phoneResult = validatePhone(data.phone);;

    if (!phoneResult.isValid) {
>>>>>>> origin/main
      errors.push(...phoneResult.errors);

    }

  }
<<<<<<< HEAD
  
  if (data.name) {}
    const nameResult="validateName(data.name);"
    if (!nameResult.isValid) {}
=======

  if (data.name) {
    const nameResult = validateName(data.name);;

    if (!nameResult.isValid) {
>>>>>>> origin/main
      errors.push(...nameResult.errors);

    }

  }
<<<<<<< HEAD
  
  if (data.message) {}
    const messageResult="validateMessage(data.message);"
    if (!messageResult.isValid) {}
=======

  if (data.message) {
    const messageResult = validateMessage(data.message);;

    if (!messageResult.isValid) {
>>>>>>> origin/main
      errors.push(...messageResult.errors);

    }

  }
<<<<<<< HEAD
  
  return {}
=======

  return {
>>>>>>> origin/main
    isValid: errors.length === 0,
    errors;
  };

}
<<<<<<< HEAD
  error?: string;);
=======
>>>>>>> origin/main
