>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a

>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
export const validators = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  phone: (phone: string): boolean => {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },
  url: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },
  required: (value: any): boolean => {
    return value !== null && value !== undefined && value !== '';
  },
  minLength: (value: string, min: number): boolean => {
    return value.length >= min;
  },
  maxLength: (value: string, max: number): boolean => {
    return value.length <= max;
  },
  pattern: (value: string, regex: RegExp): boolean => {
    return regex.test(value);
  }
};

export const formatValidationError = (field: string, rule: string, value?: any): string => {
  const messages: Record<string, string> = {
    email: 'Please enter a valid email address',
    phone: 'Please enter a valid phone number',
    url: 'Please enter a valid URL',
    required: 'This field is required',
    minLength: `This field must be at least ${value} characters long`,
    maxLength: `This field must be no more than ${value} characters long`,
    pattern: 'This field format is invalid'
  };
  return messages[rule] || `${field} is invalid`;
};

export default {
  validators,
  formatValidationError
};
export const validators = {
  "email": (email: string): boolean => {
    const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
    return emailRegex.test(email)},
  "phone": (phone: string): boolean => {
    const phoneRegex = /^[+]?[1-9][d]{0,15}$/;
    return phoneRegex.test(phone.replace(/s/g, ''))},
  "url": (url: string): boolean => {
    try {
      new URL(url);
      return true} catch {
      return false}
  },
  "required": (value: unknown): boolean => {
    return value !== null && value !== undefined && value !== '';
  },
  "minLength": (value: string, "min": number): boolean => {
    return value.length >= min;
  },
  "maxLength": (value: string, "max": number): boolean => {
    return value.length <= max;
  },
  "pattern": (value: string, "regex": RegExp): boolean => {
    return regex.test(value);
  }
};
export const formatValidationError = ("field": string, "rule": string, value?: unknown): string => {
  const "messages": Record<string, string> = {
    "email": 'Please enter a valid email address',
    "phone": 'Please enter a valid phone number',
    "url": 'Please enter a valid URL',
    "required": 'This field is required',
    "minLength": `This field must be at least ${value} characters long`,
    "maxLength": `This field must be no more than ${value} characters long`,
    "pattern": 'This field format is invalid'
  };
  return messages[rule] || `${field} is invalid`};
export default { validators, formatValidationError };
export const validators = { email: (email: string): boolean => { const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/; return emailRegex.test(email)},phone: (phone: string): boolean => { const phoneRegex = /^[+]?[1-9][d]{0,15}$/; return phoneRegex.test(phone.replace(/s/g,''))},url: (url: string): boolean => { try { new URL(url); return true} catch { return false} },required: (value: any): boolean => { return value !== null && value !== undefined && value !== ''},minLength: (value: string,min: number): boolean => { return value.length >= min},maxLength: (value: string,max: number): boolean => { return value.length <= max},pattern: (value: string,regex: RegExp): boolean => { return regex.test(value)} }; export const formatValidationError = (field: 'string',rule: 'string',value?: any): string => { const messages: 'Record<string',string> = { email: 'Please enter a valid email address',phone: 'Please enter a valid phone number',url: 'Please enter a valid URL',required: 'This field is required',minLength: `This field must be at least ${value} characters long`,maxLength: `This field must be no more than ${value} characters long`,pattern: 'This field format is invalid' }; return messages[rule] || `${field} is invalid`}; export default { validators,formatValidationError };
export const validators = { email: (email: string): boolean => { const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/; return emailRegex.test(email)},phone: (phone: string): boolean => { const phoneRegex = /^[+]?[1-9][d]{0,15}$/; return phoneRegex.test(phone.replace(/s/g,''))},url: (url: string): boolean => { try { new URL(url); return true} catch { return false} },required: (value: unknown): boolean => { return value !== null && value !== undefined && value !== ''},minLength: (value: string,min: number): boolean => { return value.length >= min},maxLength: (value: string,max: number): boolean => { return value.length <= max},pattern: (value: string,regex: RegExp): boolean => { return regex.test(value)} }; export const formatValidationError = (field: string,rule: string,value?: unknown): string => { const messages: Record<string,string> = { email: 'Please enter a valid email address',phone: 'Please enter a valid phone number',url: 'Please enter a valid URL',required: 'This field is required',minLength: `This field must be at least ${value} characters long`,maxLength: `This field must be no more than ${value} characters long`,pattern: 'This field format is invalid' }; return messages[rule] || `${field} is invalid`}; export default { validators,formatValidationError };
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
export const validators = { email: (email: string): boolean => { const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/; return emailRegex.test(email)},phone: (phone: string): boolean => { const phoneRegex = /^[+]?[1-9][d]{0,15}$/; return phoneRegex.test(phone.replace(/s/g,''))},url: (url: string): boolean => { try { new URL(url); return true} catch { return false} },required: (value: unknown): boolean => { return value !== null && value !== undefined && value !== ''},minLength: (value: string,min: number): boolean => { return value.length >= min},maxLength: (value: string,max: number): boolean => { return value.length <= max},pattern: (value: string,regex: RegExp): boolean => { return regex.test(value)} }; export const formatValidationError = (field: string,rule: string,value?: unknown): string => { const messages: Record<string,string> = { email: 'Please enter a valid email address',phone: 'Please enter a valid phone number',url: 'Please enter a valid URL',required: 'This field is required',minLength: `This field must be at least ${value} characters long`,maxLength: `This field must be no more than ${value} characters long`,pattern: 'This field format is invalid' }; return messages[rule] || `${field} is invalid`}; export default { validators,formatValidationError };
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
export const validators = { email: (email: string): boolean => { const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/; return emailRegex.test(email)},phone: (phone: string): boolean => { const phoneRegex = /^[+]?[1-9][d]{0,15}$/; return phoneRegex.test(phone.replace(/s/g,''))},url: (url: string): boolean => { try { new URL(url); return true} catch { return false} },required: (value: unknown): boolean => { return value !== null && value !== undefined && value !== ''},minLength: (value: string,min: number): boolean => { return value.length >= min},maxLength: (value: string,max: number): boolean => { return value.length <= max},pattern: (value: string,regex: RegExp): boolean => { return regex.test(value)} }; export const formatValidationError = (field: string,rule: string,value?: unknown): string => { const messages: Record<string,string> = { email: 'Please enter a valid email address',phone: 'Please enter a valid phone number',url: 'Please enter a valid URL',required: 'This field is required',minLength: `This field must be at least ${value} characters long`,maxLength: `This field must be no more than ${value} characters long`,pattern: 'This field format is invalid' }; return messages[rule] || `${field} is invalid`}; export default { validators,formatValidationError };
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
