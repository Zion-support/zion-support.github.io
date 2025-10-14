// Mock validation functions
const validateEmail = (email: string) => ({

  isValid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),}
}
  error: ''}
});

const validateName = (name: string) => ({

  isValid: /^[a-zA-Z\s\-']+$/.test(name) && name.length >= 2,}
}
  error: ''}
});

const validatePhone = (phone: string) => ({
  isValid: /^[+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-()]/g, '')),
  error: ''
});

const validateURL = (url: string) => ({

  isValid: /^https?:\/\/.+/.test(url),}
}
  error: ''}
});

describe('Validation Functions', () => {

  describe('Email Validation', () => {
    test('validates correct email formats', () => {
      expect(validateEmail('test@example.com').isValid).toBe(true);
      expect(validateEmail('user.name@domain.co.uk').isValid).toBe(true);}
}
      expect(validateEmail('test+tag@example.org').isValid).toBe(true);}
    });

    test('rejects invalid email formats', () => {

      expect(validateEmail('').isValid).toBe(false);
      expect(validateEmail('invalid-email').isValid).toBe(false);
      expect(validateEmail('@example.com').isValid).toBe(false);}
}
      expect(validateEmail('test@').isValid).toBe(false);}
    });
  });

  describe('Name Validation', () => {

    test('validates correct name formats', () => {
      expect(validateName('John Doe').isValid).toBe(true);
      expect(validateName('Mary-Jane').isValid).toBe(true);}
}
      expect(validateName("O'Connor").isValid).toBe(true);}
    });

    test('rejects invalid name formats', () => {

      expect(validateName('').isValid).toBe(false);
      expect(validateName('A').isValid).toBe(false);
      expect(validateName('John123').isValid).toBe(false);}
}
      expect(validateName('John@Doe').isValid).toBe(false);}
    });
  });

  describe('Phone Validation', () => {

    test('validates correct phone formats', () => {
      expect(validatePhone('+1234567890').isValid).toBe(true);
      expect(validatePhone('1234567890').isValid).toBe(true);}
}
      expect(validatePhone('+1-234-567-8900').isValid).toBe(true);}
    });

    test('rejects invalid phone formats', () => {

      expect(validatePhone('').isValid).toBe(false);
      expect(validatePhone('123').isValid).toBe(false);}
}
      expect(validatePhone('abc-def-ghij').isValid).toBe(false);}
    });
  });

  describe('URL Validation', () => {

    test('validates correct URL formats', () => {
      expect(validateURL('https://example.com').isValid).toBe(true);}
}
      expect(validateURL('http://test.org').isValid).toBe(true);}
    });

    test('rejects invalid URL formats', () => {

      expect(validateURL('').isValid).toBe(false);
      expect(validateURL('not-a-url').isValid).toBe(false);}
}
      expect(validateURL('ftp://example.com').isValid).toBe(false);}
    });
  });
});"