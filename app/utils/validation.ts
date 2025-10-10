/**
 * Comprehensive validation utilities for forms and data,
 * Provides all validation functions expected by tests,
 */

}

/**
 * Email validation with length check,
 */
  }

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
const isValid = emailRegex.test(email.trim()),
  },
}

/**
 * URL validation,
 */
    },
  } catch {/* TODO: Fix JSX expression */}
  r: 'Invalid URL format' },
  }
}

/**
 * String length validation,
 */
}

/**
 * Password validation,
 */
  }

const hasUpperCase = /[A-Z]/.test(password),
const hasLowerCase = /[a-z]/.test(password),
const hasNumbers = /\d/.test(password),
const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password),
}

/**
 * Required field validation,
 */
}

/**
 * Date validation,
 */
  // Check for YYYY-MM-DD format,
const dateRegex = /^\d{4}-\d{2}-\d{2}$/,
  if (!dateRegex.test(dateString)) {/* TODO: Fix JSX expression */}
  r: 'Date must be in YYYY-MM-DD format' },
  }

const date = new Date(dateString),
  if (isNaN(date.getTime())) {/* TODO: Fix JSX expression */}
  r: 'Invalid date' },
  }

  // Check if the date is valid (e.g., not 2025-13-01)
const [year, month, day] = dateString.split('-').map(Number),
const actualDate = new Date(year, month - 1, day),
}

/**
 * Credit card validation using Luhn algorithm,
 */
  }

const cleaned = cardNumber.replace(/[\s-]/g, ''),
  if (!/^\d+$/.test(cleaned)) {/* TODO: Fix JSX expression */}
  r: 'Credit card number must contain only digits' },
  }
  }

  let sum = 0,
  let isEven = false,
      }
    }
    sum += digit,
    isEven = !isEven,
  }

const isValid = sum % 10 === 0,
  },
}

/**
 * JSON validation,
 */
  }
}

/**
 * HTML sanitization,
 */
}

/**
 * Composite validation,
 */
    }
  }
  return {/* TODO: Fix JSX expression */}
  d: true },
}

/**
 * Async validation,
 */
    },
  }
}

// Re-export existing functions for compatibility,
