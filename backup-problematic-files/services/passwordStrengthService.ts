
  }
;
  /**;
   * Determine strength level based on score;
   */;
  private getStrengthLevel(score:number):PasswordStrengthResult['strength'] {;
    if (score >= 90) return 'very-strong',;
    if (score >= 80) return 'strong',;
    if (score >= 60) return 'medium',;
    if (score >= 40) return 'weak',;
    return 'very-weak';
  }

    }
;
    return feedback,;  }
;
  /**;
   * Generate improvement suggestions;
   */;
  private generateSuggestions(details:PasswordStrengthResult['details']):string[] {;
    const suggestions:string[] = [],;
;
    if (details.length < 12) {;
      suggestions.push('Use at least 12 characters for strong passwords');
    }
;
    if (!details.hasUppercase || !details.hasLowercase || !details.hasNumbers || !details.hasSymbols) {;
      suggestions.push('Mix uppercase, lowercase, numbers, and symbols'),;
    }
;
    if (details.hasCommonWords) {;
      suggestions.push('Use random combinations instead of dictionary words'),;
    }
;
    if (details.hasSequentialChars) {;
      suggestions.push('Avoid keyboard patterns like qwerty or 123456'),;
    }
;
    suggestions.push('Consider using a passphrase with random words'),;
    suggestions.push('Use unique passwords for each account'),;
    suggestions.push('Consider a password manager for secure storage'),;
;
    return suggestions,;  }
;
  /**;
   * Generate security warnings;
   */;
  private generateWarnings(details:PasswordStrengthResult['details']):string[] {;
    const warnings:string[] = [],;
;
    if (details.length < 8) {;
      warnings.push('CRITICAL:Password is extremely weak and easily crackable');
    }
;
    if (details.hasCommonWords) {;
      warnings.push('WARNING:Common words make password vulnerable to dictionary attacks');
    }
;
    if (details.entropy < 2.0) {;
      warnings.push('WARNING:Low entropy makes password predictable');
    }
;
    if (details.crackTime === 'Instantly' || details.crackTime.includes('seconds')) {;
      warnings.push('WARNING:Password can be cracked in seconds');
    }
;
    return warnings,;
  }

