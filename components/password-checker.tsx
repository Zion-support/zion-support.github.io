<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

import {
  Lock
  Shield
  Eye
  EyeOff
  Copy
  RefreshCw
  CheckCircle
  XCircle
  AlertTriangle
  ArrowRight;
} from 'lucide-react';import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export default function PasswordCheckerPage() {
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Lock,
  Shield,
  Eye,
  EyeOff,
  Copy,
  RefreshCw,
  CheckCircle,
  XCircle,
<<<<<<< HEAD
<<<<<<< HEAD
}, [password]);
      length: pass.length >= 8,
      uppercase: /[A-Z]/.test(pass),
      lowercase: /[a-z]/.test(pass),
      numbers: /\d/.test(pass),
symbols: /[!@#$%^&*()_+\-=\[\]{},':"\\|,.<>\/?]/.test(pass);
      noCommon: !isCommonPassword(pass),
      noSequential: !hasSequentialChars(pass)
    };
  AlertTriangle,;
  ArrowRight,;
} from 'lucide-react';import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';
=======
<<<<<<< HEAD
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';
export default /**
 * PasswordCheckerPage - Function description
 */
function PasswordCheckerPage() {
  const [password, set_password] = useState ('');
  const [show_password, setShowPassword] = useState (false);
  const [strength, set_strength] = useState (0);
  const [strength_text, setStrengthText] = useState ('');
  const [strength_color, setStrengthColor] = useState ('');
  const [checks, set_checks] = useState ({
    length: false,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,

  useEffect(() => {
    if (password) {
      analyzePassword(password)
    } else {
      resetAnalysis()
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';

  AlertTriangle,;
  ArrowRight,;
} from 'lucide-react';import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';


export default function PasswordCheckerPage() {;



<<<<<<< HEAD
<<<<<<< HEAD
export default function PasswordCheckerPage() {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [strengthText, setStrengthText] = useState('');
  const [strengthColor, setStrengthColor] = useState('');
<<<<<<< HEAD
<<<<<<< HEAD
  const [checks, setChecks] = useState({


  });
  const [suggestions, setSuggestions] = useState<string[]>([]),
  const [generatedPassword, setGeneratedPassword] = useState('');
  useEffect(() => {
    if (password) {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      analyzePassword(password);
    } else {
      resetAnalysis();    }      analyzePassword(password)
    } else {
      resetAnalysis()
    }
  }, [password]);

<<<<<<< HEAD
<<<<<<< HEAD
  const analyzePassword = (pass: string) => {
    const newChecks = {
      length: pass.length >= 8
      uppercase: /[A-Z]/.test(pass)
      lowercase: /[a-z]/.test(pass)
      numbers: /\d/.test(pass)
      symbols: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass)
      noCommon: !isCommonPassword(pass)
      noSequential: !hasSequentialChars(pass),    };      symbols: /[!@#$%^&*()_+\-=\[\]{},':"\\|,.<>\/?]/.test(pass);
      noCommon: !isCommonPassword(pass)
      noSequential: !hasSequentialChars(pass)
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      length: pass.length >= 8,
      uppercase: /[A-Z]/.test(pass),
      lowercase: /[a-z]/.test(pass),
      numbers: /\d/.test(pass),
      symbols: /[!@#$%^&*()_+\-=\[\]{},':"\\|,.<>\/?]/.test(pass);
      noCommon: !isCommonPassword(pass),
      noSequential: !hasSequentialChars(pass)
    };


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setChecks(newChecks);
    // Calculate strength score
    let score = 0;
    score += newChecks.length ? 15 : 0;
    score += newChecks.uppercase ? 15 : 0;
    score += newChecks.lowercase ? 15 : 0;
    score += newChecks.numbers ? 15 : 0;
    score += newChecks.symbols ? 20 : 0;
    score += newChecks.noCommon ? 10 : 0;
    score += newChecks.noSequential ? 10 : 0;
    // Bonus for length
    if (pass.length >= 12) score += 10;
    if (pass.length >= 16) score += 5;
    setStrength(score);
    // Set strength text and color
    if (score >= 90) {
<<<<<<< HEAD
<<<<<<< HEAD
      setStrengthColor('text-green-400')
    } else if (score >= 70) {
      setStrengthText('Strong');
      setStrengthText('Very Strong');
      setStrengthColor('text-green-400');
    } else if (score >= 70) {
=======
<<<<<<< HEAD
  const analyzePassword = (pass: string) => {;
    const newChecks = {;
      length: pass && pass.length >= 8,;
      uppercase: /[A-Z]/.test(pass),;
      lowercase: /[a-z]/.test(pass),;
      numbers: /\d/.test(pass),;
      symbols: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass),;
      noCommon: !isCommonPassword(pass),;
      noSequential: !hasSequentialChars(pass),    };      symbols: /[!@#$%^&*()_+\-=\[\]{},':"\\|,.<>\/?]/.test(pass);
      noCommon: !isCommonPassword(pass),;
      noSequential: !hasSequentialChars(pass);
    };
    setChecks(newChecks);
    // Calculate strength score;
    let score = 0;
    score += newChecks && newChecks.length ? 15 : 0;
    score += newChecks && newChecks.uppercase ? 15 : 0;
    score += newChecks && newChecks.lowercase ? 15 : 0;
    score += newChecks && newChecks.numbers ? 15 : 0;
    score += newChecks && newChecks.symbols ? 20 : 0;
    score += newChecks && newChecks.noCommon ? 10 : 0;
    score += newChecks && newChecks.noSequential ? 10 : 0;
    // Bonus for length;
    if (pass && pass.length >= 12) score += 10;
    if (pass && pass.length >= 16) score += 5;
    setStrength(score);
    // Set strength text and color;
    if (score >= 90) {;
      setStrengthText('Very Strong');


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setStrengthText('Strong');
      setStrengthColor('text-green-400');
    } else if (score >= 50) {
      setStrengthText('Moderate');
      setStrengthColor('text-yellow-400');
    } else if (score >= 30) {
      setStrengthText('Weak');
      setStrengthColor('text-orange-400');
    } else {
      setStrengthText('Very Weak');
      setStrengthColor('text-red-400');
    }
<<<<<<< HEAD
    // Generate suggestions
    generateSuggestions(newChecks, pass);  }
  const isCommonPassword = (pass: string) => {
    const commonPasswords = [    } else if (score >= 70) {
      setStrengthText('Strong');
      setStrengthColor('text-green-400')
    } else if (score >= 50) {
      setStrengthText('Moderate');
      setStrengthColor('text-yellow-400')
    } else if (score >= 30) {
      setStrengthText('Weak');
      setStrengthColor('text-orange-400')
=======

  };

  const isCommonPassword = (pass: string) => {
    const commonPasswords = [
      'password123456123456789qwertyabc123password123adminletmein', 'welcomemonkeydragonmasterhello'
    ];
    return commonPasswords.includes(pass.toLowerCase())
  };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const hasSequentialChars = (pass: string) => {
    const sequences = ['123abcqweasdzxc789456'];
    return sequences.some(seq => pass.toLowerCase().includes(seq))
  };
<<<<<<< HEAD
  const generateSuggestions = (checks: any, pass: string) => {
    const suggestions: string[] = [];
=======

  const generateSuggestions = (checks: any, pass: string) => {
    const suggestions: string[] = [];
    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (!checks.length) suggestions.push('Make your password at least 8 characters long');
    if (!checks.uppercase) suggestions.push('Add at least one uppercase letter (A-Z)');
    if (!checks.lowercase) suggestions.push('Add at least one lowercase letter (a-z)');
    if (!checks.numbers) suggestions.push('Add at least one number (0-9)');
    if (!checks.symbols) suggestions.push('Add at least one special character (!@#$%^&*)');
<<<<<<< HEAD
    } else {
      setStrengthText('Very Weak');
      setStrengthColor('text-red-400')
    }
    // Generate suggestions
    generateSuggestions(newChecks, pass)
  }
  const isCommonPassword = (pass: string) => {
    const commonPasswords = [
      'password'
      '123456'
      '123456789'
      'qwerty'
      'abc123'
      'password123'
      'admin'
      'letmein'
      'welcome'
      'monkey'
      'dragon'
      'master'
      'hello'
    ];
    return commonPasswords.includes(pass.toLowerCase());
  }
  const hasSequentialChars = (pass: string) => {
    const sequences = ['123', 'abc', 'qwe', 'asd', 'zxc', '789', '456'];
    return sequences.some(seq => pass.toLowerCase().includes(seq));  }
  const generateSuggestions = (checks: any, pass: string) => {
    const suggestions: string[] = [];
    if (!checks.length)
      suggestions.push('Make your password at least 8 characters long');
    if (!checks.uppercase)
      suggestions.push('Add at least one uppercase letter (A-Z)');
    if (!checks.lowercase)
      suggestions.push('Add at least one lowercase letter (a-z)');
    if (!checks.numbers) suggestions.push('Add at least one number (0-9)');
    if (!checks.symbols)
      suggestions.push('Add at least one special character (!@#$%^&*)');
    if (!checks.noCommon)
      suggestions.push('Avoid common passwords like "password" or "123456"');
    if (!checks.noSequential)
      suggestions.push('Avoid sequential characters like "123" or "abc"');
    if (pass.length < 12)
      suggestions.push(
        'Consider making your password 12+ characters for better security'
      );
    if (pass.length < 16)
      suggestions.push('For maximum security, use 16+ characters');
    setSuggestions(suggestions);  };    if (!checks.symbols) suggestions.push('Add at least one special character (!@#$%^&*)');
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (!checks.noCommon) suggestions.push('Avoid common passwords like "password" or "123456"');
    if (!checks.noSequential) suggestions.push('Avoid sequential characters like "123" or "abc"');
    if (pass.length < 12) suggestions.push('Consider making your password 12+ characters for better security');
    if (pass.length < 16) suggestions.push('For maximum security, use 16+ characters');
    setSuggestions(suggestions)
<<<<<<< HEAD
=======

  };


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const resetAnalysis = () => {
    setStrength(0);
    setStrengthText('');
    setStrengthColor('');
    setChecks({
<<<<<<< HEAD
      noCommon: !isCommonPassword(pass),
      noSequential: !hasSequentialChars(pass)
    },

    setChecks(newChecks),

    // Calculate strength score
    let score = 0
    score += newChecks.length ? 15 : 0,
    score += newChecks.uppercase ? 15 : 0,
    score += newChecks.lowercase ? 15 : 0,
    score += newChecks.numbers ? 15 : 0,
    score += newChecks.symbols ? 20 : 0,
    score += newChecks.noCommon ? 10 : 0,
    score += newChecks.noSequential ? 10 : 0,

    // Bonus for length
    if (pass.length >= 12) score += 10,
    if (pass.length >= 16) score += 5,

    setStrength(score),

    // Set strength text and color
    if (score >= 90) {
      setStrengthText('Very Strong'),
      setStrengthColor('text-green-400')
    } else if (score >= 70) {
      setStrengthText('Strong'),
      setStrengthColor('text-green-400')
    } else if (score >= 50) {
      setStrengthText('Moderate'),
      setStrengthColor('text-yellow-400')
    } else if (score >= 30) {
      setStrengthText('Weak'),
      setStrengthColor('text-orange-400')
    } else {
      setStrengthText('Very Weak'),
      setStrengthColor('text-red-400')
    }

    // Generate suggestions
    generateSuggestions(newChecks, pass)
  },

  const isCommonPassword = (pass: string) => {
    const commonPasswords = [
      'password123456123456789qwertyabc123password123adminletmein', 'welcomemonkeydragonmasterhello'
    ],
    return commonPasswords.includes(pass.toLowerCase())
  },

  const hasSequentialChars = (pass: string) => {
    const sequences = ['123abcqweasdzxc789456']
    return sequences.some(seq => pass.toLowerCase().includes(seq))
  },

  const generateSuggestions = (checks: any, pass: string) => {
    const suggestions: string[] = []
    if (!checks.length) suggestions.push('Make your password at least 8 characters long'),
    if (!checks.uppercase) suggestions.push('Add at least one uppercase letter (A-Z)'),
    if (!checks.lowercase) suggestions.push('Add at least one lowercase letter (a-z)'),
    if (!checks.numbers) suggestions.push('Add at least one number (0-9)'),
    if (!checks.symbols) suggestions.push('Add at least one special character (!@#$%^&*)'),
    if (!checks.noCommon) suggestions.push('Avoid common passwords like "password" or "123456"'),
    if (!checks.noSequential) suggestions.push('Avoid sequential characters like "123" or "abc"'),
    if (pass.length < 12) suggestions.push('Consider making your password 12+ characters for better security'),
    if (pass.length < 16) suggestions.push('For maximum security, use 16+ characters'),
    
    setSuggestions(suggestions)
  },

  const resetAnalysis = () => {
    setStrength(0),
    setStrengthText(''),
    setStrengthColor(''),
    setChecks({
=======


    // Generate suggestions;
    generateSuggestions(newChecks, pass);
    // Generate suggestions;
    generate_suggestions (new_checks, pass);
  }
;
  const isCommonPassword = (pass: string) =>: any {
    const common_passwords = [;
      'password',
      '123456',
      '123456789',
      'qwerty',
      'abc123',
      'password123',
      'admin',
      'letmein',
      'welcome',
      'monkey',
      'dragon',
      'master',
      'hello',
    ];
    return common_passwords.includes (pass.toLowerCase ());
  }
;
  const hasSequentialChars = (pass: string) =>: any {
    const sequences = ['123', 'abc', 'qwe', 'asd', 'zxc', '789', '456'];
    return sequences.some (seq => pass.toLowerCase ().includes (seq));  }
;
  const generate_suggestions = (checks: any, pass: string) =>: any {
    const suggestions: string[] = [];
;
    if (
      suggestions.push ('Make your password at least 8 characters long')) {
  $2
}
    if (
      suggestions.push ('Add at least one uppercase letter (A - Z)')) {
  $2
}
    if (
      suggestions.push ('Add at least one lowercase letter (a - z)')) {
  $2
}
    if (suggestions.push ('Add at least one number (0 - 9)')) {
  $2
}
    if (
      suggestions.push ('Add at least one special character (!@#$%^&*)')) {
  $2
}
    if (
      suggestions.push ('Avoid common passwords like "password" or "123456"')) {
  $2
}
    if (
      suggestions.push ('Avoid sequential characters like "123" or "abc"')) {
  $2
}
    // Check condition
if (
      suggestions.push () {
  $2
}
        'Consider making your password 12+ characters for better security');
    if (
      suggestions.push ('For maximum security, use 16+ characters')) {
  $2
}
    set_suggestions (suggestions);  }    if (suggestions.push ('Add at least one special character (!@#$%^&*)')) {
  $2
}
    if (suggestions.push ('Avoid common passwords like "password" or "123456"')) {
  $2
}
    if (suggestions.push ('Avoid sequential characters like "123" or "abc"')) {
  $2
}
    if (suggestions.push ('Consider making your password 12+ characters for better security')) {
  $2
}
    if (suggestions.push ('For maximum security, use 16+ characters')) {
  $2
}
    set_suggestions (suggestions);
  const reset_analysis = () =>: any {
    set_strength (0);
    setStrengthText ('');
    setStrengthColor ('');
    set_checks ({
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      length: false,
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,
<<<<<<< HEAD
setSuggestions([]);
  };
  const generateStrongPassword = () => {;
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      no_common: false,
      no_sequential: false,
=======
      no_common: false,
      no_sequential: false,
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      length: false
      uppercase: false
      lowercase: false
      numbers: false
      symbols: false
      noCommon: false
      noSequential: false
    });
    set_suggestions ([]);  }
;
  const generateStrongPassword = () =>: any {
    const length = 16;
    const charset =;
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';      no_sequential: false;
    });
    set_suggestions ([]);
  }
;
  const generateStrongPassword = () =>: any {
    const length = 16;
    const charset =;
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let result = '';
<<<<<<< HEAD
<<<<<<< HEAD
    // Ensure at least one of each required character type
    result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)]; // Uppercase
    result += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)]; // Lowercase
    result += '0123456789'[Math.floor(Math.random() * 10)]; // Number
    result += '!@#$%^&*'[Math.floor(Math.random() * 8)]; // Symbol
    // Fill the rest randomly
    for (let i = 4; i < length; i++) {
      result += charset[Math.floor(Math.random() * charset.length)];
    }
    // Shuffle the password
    result = result
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');
    setGeneratedPassword(result);
    setPassword(result);
  }
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);  };    let result = '';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let result = '';
    

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Ensure at least one of each required character type
    result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)], // Uppercase
    result += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)], // Lowercase
    result += '0123456789'[Math.floor(Math.random() * 10)], // Number
    result += '!@#$%^&*'[Math.floor(Math.random() * 8)], // Symbol
    // Fill the rest randomly
    for (let i = 4, i < length, i++) {
      result += charset[Math.floor(Math.random() * charset.length)]
    }
    // Shuffle the password
    result = result.split('').sort(() => Math.random() - 0.5).join('');
    setGeneratedPassword(result);
    setPassword(result)
  }
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    // Ensure at least one of each required character type;
    result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math && Math.floor(Math && Math.random() * 26)]; // Uppercase;
    result += 'abcdefghijklmnopqrstuvwxyz'[Math && Math.floor(Math && Math.random() * 26)]; // Lowercase;
    result += '0123456789'[Math && Math.floor(Math && Math.random() * 10)]; // Number;
    result += '!@#$%^&*'[Math && Math.floor(Math && Math.random() * 8)]; // Symbol;
    // Fill the rest randomly;
    for (let i = 4; i < length; i++) {;
      result += charset[Math && Math.floor(Math && Math.random() * charset && charset.length)];
    }
    // Shuffle the password;
    result = result;
      .split('');
      .sort(() => Math && Math.random() - 0 && 0.5);
      .join('');
    setGeneratedPassword(result);
    setPassword(result);
=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };
  const copyToClipboard = (text: string) => {;
    navigator && navigator.clipboard.writeText(text);  };    let result = '';
    // Ensure at least one of each required character type;
    result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math && Math.floor(Math && Math.random() * 26)], // Uppercase;
    result += 'abcdefghijklmnopqrstuvwxyz'[Math && Math.floor(Math && Math.random() * 26)], // Lowercase;
    result += '0123456789'[Math && Math.floor(Math && Math.random() * 10)], // Number;
    result += '!@#$%^&*'[Math && Math.floor(Math && Math.random() * 8)], // Symbol;
    // Fill the rest randomly;
    for (let i = 4, i < length, i++) {;
      result += charset[Math && Math.floor(Math && Math.random() * charset && charset.length)];
    }
    // Shuffle the password;
    result = result && result.split('').sort(() => Math && Math.random() - 0 && 0.5).join('');
    setGeneratedPassword(result);
    setPassword(result);
  };
  const copyToClipboard = (text: string) => {;
    navigator && navigator.clipboard.writeText(text);
  };
  const getStrengthBarColor = () => {;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const getStrengthBarColor = () => {
    if (strength >= 90) return 'bg-green-500';
    if (strength >= 70) return 'bg-green-400';
    if (strength >= 50) return 'bg-yellow-400';
    if (strength >= 30) return 'bg-orange-400';
<<<<<<< HEAD
<<<<<<< HEAD
    return 'bg-red-400';  };
  const getCheckIcon = (passed: boolean) => {;
    return passed ? (;
      <CheckCircle className='w-5 h-5 text-green-400' />;
    ) : (;
      <XCircle className='w-5 h-5 text-red-400' />;
    );  };    return 'bg-red-400';
    return 'bg-red-400'
  };
  const getCheckIcon = (passed: boolean) => {
    return passed ? (
      <CheckCircle className="w-5 h-5 text-green-400" />
    ) : (
      <XCircle className="w-5 h-5 text-red-400" />
    )
  };
  const getCheckIcon = (passed: boolean) => {;
    return passed ? (;
      <CheckCircle className='w-5 h-5 text-green-400' />;
    ) : (;
      <XCircle className='w-5 h-5 text-red-400' />;
    );      <CheckCircle className="w-5 h-5 text-green-400" />;
    ) : (;
      <XCircle className="w-5 h-5 text-red-400" />;
    );
    return 'bg-red-400';  }
  const getCheckIcon = (passed: boolean) => {
    return passed ? (
      <CheckCircle className='w-5 h-5 text-green-400' />
    ) : (
      <XCircle className='w-5 h-5 text-red-400' />
    );  };    return 'bg-red-400'
  }
  const getCheckIcon = (passed: boolean) => {
    return passed ? (
      <CheckCircle className='w-5 h-5 text-green-400' />
    ) : (
      <XCircle className='w-5 h-5 text-red-400' />
    );      <CheckCircle className="w-5 h-5 text-green-400" />
    ) : (
      <XCircle className="w-5 h-5 text-red-400" />
    )
  return (
    <>
      <Head>
        <title>Password Strength Checker - Zion Tech Group</title>


  };
      {_/* Hero Section */}

        <meta
          name='description'
          content='Check your password strength with our advanced security analyzer. Get detailed feedback and suggestions to create stronger, more secure passwords.'
        />
        <meta
          property='og:title'
          content='Password Strength Checker - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Advanced password strength analyzer with security recommendations.'
        />
      </Head>

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  };

  return (_<>
      <Head>
        <title>Password Strength Checker - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Check your password strength with our advanced security analyzer. Get detailed feedback and suggestions to create stronger, more secure passwords.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Password Strength Checker - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Advanced password strength analyzer with security recommendations." />
      </Head>

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
<<<<<<< HEAD
=======
    <>
      <Head>
        <title>Password Strength Checker - Zion Tech Group</title>
        <meta
          name='description'
          content='Check your password strength with our advanced security analyzer. Get detailed feedback and suggestions to create stronger, more secure passwords.'
        />
        <meta
          property='og:title'
          content='Password Strength Checker - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Advanced password strength analyzer with security recommendations.'
        />
      </Head>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Hero Section */}
      <section className='pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='mb-8'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-6'>
              <Lock className='w-4 h-4 mr-2' />
              Password Security & Analysis
            </div>
          </div>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>
            Password Strength Checker
          </h1>
          <p className='text-xl text-indigo-200 max-w-4xl mx-auto leading-relaxed'>
            Analyze your password security with our advanced strength checker.
            Get detailed feedback, suggestions, and generate strong passwords to
            protect your accounts and data.          </p>      </Head>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-6">
              <Lock className="w-4 h-4 mr-2" />
              Password Security & Analysis
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Password Strength Checker
          </h1>
          <p className="text-xl text-indigo-200 max-w-4xl mx-auto leading-relaxed">
            Analyze your password security with our advanced strength checker. Get detailed feedback

            suggestions, and generate strong passwords to protect your accounts and data.
          </p>
        </div>
      </section>
      {/* Password Checker Tool */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;
      </Head>;

      {/* Hero Section */}
      <section className='pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
          <div className='mb-8'>;
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-6'>;
              <Lock className='w-4 h-4 mr-2' />;
              Password Security & Analysis;
            </div>;
          </div>;
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>;
            Password Strength Checker;
          </h1>;
          <p className='text-xl text-indigo-200 max-w-4xl mx-auto leading-relaxed'>;
            Analyze your password security with our advanced strength checker.;
            Get detailed feedback, suggestions, and generate strong passwords to;
            protect your accounts and data.          </p>      </Head>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <div className="mb-8">;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-6">;
              <Lock className="w-4 h-4 mr-2" />;
              Password Security & Analysis;
            </div>;
          </div>;
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">;
            Password Strength Checker;
          </h1>;
          <p className="text-xl text-indigo-200 max-w-4xl mx-auto leading-relaxed">;
            Analyze your password security with our advanced strength checker. Get detailed feedback,;
            suggestions, and generate strong passwords to protect your accounts and data.;
          </p>;
        </div>;
      </section>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Password Checker Tool */}
      <section className='py-20 bg-gray-900'>;
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
              Check Your Password Strength;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
              Our advanced security analyzer evaluates multiple factors to;
              determine password strength and security.;
            </p>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;
            {/* Input Form */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>;
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>;
                <Lock className='w-6 h-6 mr-3 text-indigo-400' />;
                Password Analysis;
              </h3>;
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='space-y-6'>;
                {/* Password Input */}
                <div>;
                  <label className='block text-sm font-medium text-gray-300 mb-2'>;
                    Enter Password;
                  </label>;
                  <div className='relative'>;
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={e => setPassword(e && e.target.value)}
                      placeholder='Type your password here...';
                      className='w-full px-4 py-3 pr-12 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent';
                    />;
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Check Your Password Strength
      <section className='py-20 bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
              Check Your Password Strength
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Our advanced security analyzer evaluates multiple factors to
              determine password strength and security.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Input Form */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>
                <Lock className='w-6 h-6 mr-3 text-indigo-400' />
                Password Analysis
              </h3>
              <div className='space-y-6'>
=======

              <div className='space-y-6'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              <div className='space-y-6'>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Password Input */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    Enter Password
                  </label>
                  <div className='relative'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder='Type your password here...'
                      className='w-full px-4 py-3 pr-12 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
<<<<<<< HEAD
<<<<<<< HEAD
                      className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white'
                    >
                      {showPassword ? (
                        <EyeOff className='w-5 h-5' />
                      ) : (
                        <Eye className='w-5 h-5' />
                      )}                    </button>              Check Your Password Strength
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Check Your Password Strength

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our advanced security analyzer evaluates multiple factors to determine password strength and security.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-indigo-400" />
                Password Analysis
              </h3>
              <div className="space-y-6">
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
                      className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white';
                    >;
                      {showPassword ? (;
                        <EyeOff className='w-5 h-5' />;
                      ) : (;
                        <Eye className='w-5 h-5' />;
                      )}                    </button>              Check Your Password Strength;
            </h2>;
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              Our advanced security analyzer evaluates multiple factors to determine password strength and security.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {/* Input Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">;
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">;
                <Lock className="w-6 h-6 mr-3 text-indigo-400" />;
                Password Analysis;
              </h3>;
              <div className="space-y-6">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Password Input */}
                <div>;
                  <labelclassName="block text-sm font-medium text-gray-300 mb-2" htmlFor="input-
                    Enter Password
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
;
    // Ensure at least one of each required character type;
    result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor (Math.random () * 26)]; // Uppercase;
    result += 'abcdefghijklmnopqrstuvwxyz'[Math.floor (Math.random () * 26)]; // Lowercase;
    result += '0123456789'[Math.floor (Math.random () * 10)]; // Number;
    result += '!@#$%^&*'[Math.floor (Math.random () * 8)]; // Symbol;
    // Fill the rest randomly;
    for (let index = 4; i < length; i++) {
      result += charset[Math.floor (Math.random () * charset.length)];
    }
    // Shuffle the password;
    result = result;
      .split ('');
      .sort (() => Math.random () - 0.5);
      .join ('');
    setGeneratedPassword (result);
    set_password (result);
  }
;
  const copyToClipboard = (text: string) =>: any {
    navigator.clipboard.write_text (text);  }    let result = '';
;
    // Ensure at least one of each required character type;
    result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor (Math.random () * 26)], // Uppercase;
    result += 'abcdefghijklmnopqrstuvwxyz'[Math.floor (Math.random () * 26)], // Lowercase;
    result += '0123456789'[Math.floor (Math.random () * 10)], // Number;
    result += '!@#$%^&*'[Math.floor (Math.random () * 8)], // Symbol;
    // Fill the rest randomly;
    for (let index = 4, i < length, i++) {
      result += charset[Math.floor (Math.random () * charset.length)];
    }
    // Shuffle the password;
    result = result.split ('').sort (() => Math.random () - 0.5).join ('');
    setGeneratedPassword (result);
    set_password (result);
  }
;
  const copyToClipboard = (text: string) =>: any {
    navigator.clipboard.write_text (text);
  }
;
  const getStrengthBarColor = () =>: any {
    // Check condition
if (return 'bg - green - 500') {
  $2
}
    // Check condition
if (return 'bg - green - 400') {
  $2
}
    // Check condition
if (return 'bg - yellow - 400') {
  $2
}
    // Check condition
if (return 'bg - orange - 400') {
  $2
}
    return 'bg - red - 400';  }
;
  const getCheckIcon = (passed: boolean) =>: any {
    return passed ? (
      <CheckCircle className='w - 5 h - 5 text - green - 400' />) : (
      <XCircle className='w - 5 h - 5 text - red - 400' />);  }    return 'bg - red - 400';
  }
;
  const getCheckIcon = (passed: boolean) =>: any {
    return passed ? (
      <CheckCircle className='w - 5 h - 5 text - green - 400' />) : (
      <XCircle className='w - 5 h - 5 text - red - 400' />);      <CheckCircle className="w - 5 h - 5 text - green - 400" />) : (
      <XCircle className="w - 5 h - 5 text - red - 400" />);
  return (
    <>;
      <Head>;
        <title > Password Strength Checker - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Check your password strength with our advanced security analyzer. Get detailed feedback and suggestions to create stronger, more secure passwords.';
        />;
        <meta;
          property='og:title';
          content='Password Strength Checker - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Advanced password strength analyzer with security recommendations.';
        />;
      </Head>;
      {/* Hero Section */}
      <section className='pt - 32 pb - 20 bg - gradient - to - br from - indigo - 900 via - purple - 900 to - pink - 900'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
          <div className='mb - 8'>;
            <div className='inline - flex items - center px - 4 py - 2 rounded - full bg - indigo - 500 / 20 border border - indigo - 400 / 30 text - indigo - 300 text - sm font - medium mb - 6'>;
              <Lock className='w - 4 h - 4 mr - 2' />;
              Password Security & Analysis;
            </div>;
          </div>;
          <h1 className='text - 4xl sm:text - 5xl lg:text - 6xl font - bold text - white mb - 8 leading - tight'>;
            Password Strength Checker;
          </h1>;
          <p className='text - xl text - indigo - 200 max - w-4xl mx - auto leading - relaxed'>;
            Analyze your password security with our advanced strength checker.;
            Get detailed feedback, suggestions, and generate strong passwords to;
            protect your accounts and data.          </p>      </Head>;
      {/* Hero Section */}
      <section className="pt - 32 pb - 20 bg - gradient - to - br from - indigo - 900 via - purple - 900 to - pink - 900">;
        <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 text - center">;
          <div className="mb - 8">;
            <div className="inline - flex items - center px - 4 py - 2 rounded - full bg - indigo - 500 / 20 border border - indigo - 400 / 30 text - indigo - 300 text - sm font - medium mb - 6">;
              <Lock className="w - 4 h - 4 mr - 2" />;
              Password Security & Analysis;
            </div>;
          </div>;
          <h1 className="text - 4xl sm:text - 5xl lg:text - 6xl font - bold text - white mb - 8 leading - tight">;
            Password Strength Checker;
          </h1>;
          <p className="text - xl text - indigo - 200 max - w-4xl mx - auto leading - relaxed">;
            Analyze your password security with our advanced strength checker. Get detailed feedback,
            suggestions, and generate strong passwords to protect your accounts and data.;
          </p>;
        </div>;
      </section>;
      {/* Password Checker Tool */}
      <section className='py - 20 bg - gray - 900'>;
        <div className='max - w-6xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 16'>;
            <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
              Check Your Password Strength;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
              Our advanced security analyzer evaluates multiple factors to;
              determine password strength and security.;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>;
            {/* Input Form */}
            <Card className='p - 8 bg - gray - 800 border border - gray - 700'>;
              <h3 className='text - 2xl font - bold text - white mb - 6 flex items - center'>;
                <Lock className='w - 6 h - 6 mr - 3 text - indigo - 400' />;
                Password Analysis;
              </h3>;
              <div className='space - y-6'>;
                {/* Password Input */}
                <div>;
                  <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                    Enter Password;
                  </label>;
                  <div className='relative'>;
                    <input;
                      type={show_password ? 'text' : 'password'}
                      value={password}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      on_change={e => set_password (e.target.value)}
                      placeholder='Type your password here...';
                      className='w - full px - 4 py - 3 pr - 12 bg - gray - 700 border border - gray - 600 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - indigo - 500 focus:border - transparent';
                    />;
                    <button;
                      type='button';
                      on_click={() => setShowPassword (!show_password)}
                      className='absolute inset - y-0 right - 0 pr - 3 flex items - center text - gray - 400 hover:text - white';
                    >;
                      {show_password ? (
                        <EyeOff className='w - 5 h - 5' />) : (
                        <Eye className='w - 5 h - 5' />)}                    </button>              Check Your Password Strength;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
              Our advanced security analyzer evaluates multiple factors to determine password strength and security.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 8">;
            {/* Input Form */}
            <Card className="p - 8 bg - gray - 800 border border - gray - 700">;
              <h3 className="text - 2xl font - bold text - white mb - 6 flex items - center">;
                <Lock className="w - 6 h - 6 mr - 3 text - indigo - 400" />;
                Password Analysis;
              </h3>;
              <div className="space - y-6">;
                {/* Password Input */}
                <div>;
                  <label className="block text - sm font - medium text - gray - 300 mb - 2" html_for="input-;
                    Enter Password;
                  ">;
                    Enter Password;
                  </label>;
                  <div className="relative">;


<<<<<<< HEAD
<<<<<<< HEAD

                    </button>
                  </div>
                </div>
                    </button>;
                  </div>;
                </div>;
                  ">
                    Enter Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Type your password here..."
                      className="w-full px-4 py-3 pr-12 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Generate Password */}
                <div>;
                  <Button
                    onClick={generateStrongPassword}
<<<<<<< HEAD
<<<<<<< HEAD
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold'
                  >
                    <RefreshCw className='w-5 h-5 mr-2' />                    Generate Strong Password                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Generate Strong Password
                  </Button>
                </div>
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36





                {/* Generated Password Display */}

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {/* Generated Password Display */}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                {/* Generated Password Display */}
                {generatedPassword && (
                  <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Generated Password:</span>
                      <Button
                        onClick={() => copyToClipboard(generatedPassword)}
                        variant='outline'
                        size='sm'
                        className='border-gray-600 text-gray-300 hover:bg-gray-600'
                      >
                        <Copy className='w-4 h-4 mr-2' />
                        Copy
                      </Button>
                    </div>
<<<<<<< HEAD
                    <div className='mt-2 p-2 bg-gray-800 rounded text-sm font-mono text-white break-all'>                      {generatedPassword}                      <Button
                        onClick={() => copyToClipboard(generatedPassword)}
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:bg-gray-600"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                    <div className="mt-2 p-2 bg-gray-800 rounded text-sm font-mono text-white break-all">
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                      {generatedPassword}
                    </div>;
                  </div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        variant='outline'
                        size='sm'
                        className='border-gray-600 text-gray-300 hover:bg-gray-600'
                      >
                        <Copy className='w-4 h-4 mr-2' />
                        Copy
                      </Button>
                    </div>

                    <div className='mt-2 p-2 bg-gray-800 rounded text-sm font-mono text-white break-all'>                      {generatedPassword}

                      {generatedPassword}


                    </div>
                  </div>
=======

                    </div>
                  </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                )}


                <div className="text-sm text-gray-400">

<<<<<<< HEAD
<<<<<<< HEAD
                      {generatedPassword}
                    <div className='mt-2 p-2 bg-gray-800 rounded text-sm font-mono text-white break-all'>                      {generatedPassword}

                      {generatedPassword}

                    </div>
                  </div>
                )}
                <div className='text-sm text-gray-400'>                  <p>• Real-time strength analysis</p>                <div className="text-sm text-gray-400">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <p>• Real-time strength analysis</p>
                  <p>• Multiple security criteria</p>
                  <p>• Detailed feedback and suggestions</p>
                  <p>• Strong password generator</p>
                </div>
              </div>
            </Card>
            {/* Strength Analysis */}
<<<<<<< HEAD
<<<<<<< HEAD
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>
                <Shield className='w-6 h-6 mr-3 text-purple-400' />                Security Analysis
              </h3>
              {password ? (            <Card className="p-8 bg-gray-800 border border-gray-700">
=======

            <Card className="p-8 bg-gray-800 border border-gray-700">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            <Card className="p-8 bg-gray-800 border border-gray-700">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-purple-400" />
                Security Analysis
              </h3>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {password ? (


                <div className='text-sm text-gray-400'>                  <p>• Real-time strength analysis</p>                <div className="text-sm text-gray-400">;
                  <p>• Real-time strength analysis</p>;
                  <p>• Multiple security criteria</p>;
                  <p>• Detailed feedback and suggestions</p>;
                  <p>• Strong password generator</p>;
                </div>;
              </div>;
            </Card>;
            {/* Strength Analysis */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>;
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>;
                <Shield className='w-6 h-6 mr-3 text-purple-400' />                Security Analysis;
              </h3>;
              {password ? (            <Card className="p-8 bg-gray-800 border border-gray-700">;
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">;
                <Shield className="w-6 h-6 mr-3 text-purple-400" />;
                Security Analysis;
              </h3>;
              {password ? (;
                <div className='space-y-6'>;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="space-y-6">
=======
                <div className="space-y-6">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {password ? (
                <div className='space-y-6'>
                  {/* Strength Score */}
                  <div>;
                    <div className='flex items-center justify-between mb-2'>;
                      <span className='text-sm text-gray-300'>;
                        Password Strength:;
                      </span>                      <span className={`text-lg font-bold ${strengthColor}`}>;
                        {strengthText} ({strength}/100);
                      </span>;
                    </div>;
                    <div className='w-full bg-gray-700 rounded-full h-3'>;
                      <div                        className={`h-3 rounded-full transition-all duration-300 ${getStrengthBarColor()}`}                <div className="space-y-6">;
                  {/* Strength Score */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <span className={`text-lg font-bold ${strengthColor}`}>
                        {strengthText} ({strength}/100)
                      </span>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                    <div className="w-full bg-gray-700 rounded-full h-3">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    <div className="w-full bg-gray-700 rounded-full h-3">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className='space-y-6'>
                  {/* Strength Score */}
                  <div>
                    <div className='flex items-center justify-between mb-2'>
                      <span className='text-sm text-gray-300'>
                        Password Strength:
                      </span>                      <span className={`text-lg font-bold ${strengthColor}`}>
                        {strengthText} ({strength}/100)
                      </span>
                    </div>

<<<<<<< HEAD


<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <div 
                    <div className='w-full bg-gray-700 rounded-full h-3'>
                      <div                        className={`h-3 rounded-full transition-all duration-300 ${getStrengthBarColor()}`}                <div className="space-y-6">
                  {/* Strength Score */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">Password Strength:</span>
                        {strengthText} ({strength}/100)
                      </span>
                    </div>
                    <div className='w-full bg-gray-700 rounded-full h-3'>
                      <div                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div

                      <div 

=======
=======



=======

                      <div 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        className={`h-3 rounded-full transition-all duration-300 ${getStrengthBarColor()}`}
                        style={{ width: `${strength}%` }}
                      />
                    </div>
                  </div>

                  <div>;
                    <div className="flex items-center justify-between mb-2">;
                      <span className="text-sm text-gray-300">Password Strength:</span>;
                        {strengthText} ({strength}/100);
                      </span>;
                    </div>;
                    <div className='w-full bg-gray-700 rounded-full h-3'>;
                      <div                    <div className="w-full bg-gray-700 rounded-full h-3">;
                      <div
                        className={`h-3 rounded-full transition-all duration-300 ${getStrengthBarColor()}`}
                        style={{ width: `${strength}%` }}
                      />;
                    </div>;
                  </div>;


<<<<<<< HEAD
<<<<<<< HEAD

                  {/* Security Checks */}


=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  {/* Security Checks */}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                            className={`text-sm ${passed ? 'text-green-400' : 'text-red-400'}`}

                          >                            {key === 'length' && 'At least 8 characters'}


<<<<<<< HEAD


                  {/* Security Checks */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Security Criteria</h4>
                    <div className="space-y-3">
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  {/* Security Checks */}
                  <div>
                    <h4 className='text-lg font-semibold text-white mb-3'>
                      Security Criteria
                    </h4>
                    <div className='space-y-3'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {Object.entries(checks).map(([key, passed]) => (
                        <div key={key} className='flex items-center space-x-3'>
                          {getCheckIcon(passed)}
                          <span
                            className={`text-sm ${passed ? 'text-green-400' : 'text-red-400'}`}
                          >                            {key === 'length' && 'At least 8 characters'}                      {Object.entries(checks).map(([key, passed]) => (
                        <div key={key} className="flex items-center space-x-3">
                          {getCheckIcon(passed)}
                          <span className={`text-sm ${passed ? 'text-green-400' : 'text-red-400'}`}>
                          >                            {key === 'length' && 'At least 8 characters'}

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            {key === 'length' && 'At least 8 characters'}
                            {key === 'uppercase' && 'Contains uppercase letter'}
                            {key === 'lowercase' && 'Contains lowercase letter'}
                            {key === 'numbers' && 'Contains number'}
                            {key === 'symbols' && 'Contains special character'}
<<<<<<< HEAD
<<<<<<< HEAD
                            {key === 'noCommon' && 'Not a common password'}
                            {key === 'noSequential' &&
                              'No sequential characters'}                          </span>                            {key === 'noSequential' && 'No sequential characters'}
                          </span>
                        </div>
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      ))}
                    </div>
                  </div>

<<<<<<< HEAD
=======
                    </div>;
                  </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {/* Suggestions */}
                  {suggestions.length > 0 && (
                    <div>
                      <h4 className='text-lg font-semibold text-white mb-3'>
                        Suggestions
                      </h4>
                      <div className='space-y-2'>
                        {suggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            className='flex items-start space-x-3'
                          >
                            <AlertTriangle className='w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0' />
                            <span className='text-sm text-yellow-300'>
                              {suggestion}
                            </span>                          </div>                      <h4 className="text-lg font-semibold text-white mb-3">Suggestions</h4>
                      <div className="space-y-2">
                        {suggestions.map((suggestion, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-yellow-300">{suggestion}</span>
                            </span>                          </div>

                          </div>

<<<<<<< HEAD
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
=======


                      ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                    </div>;
                  </div>;





                  {/* Suggestions */}



                            </span>                          </div>

                          </div>


<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        ))}
                      </div>;
                    </div>;
                  )}


              )}





<<<<<<< HEAD
<<<<<<< HEAD
      {/* Features */}

                <div className='bg-gray-900 p-6 rounded-lg border border-gray-700 text-center'>
                  <div className='text-6xl mb-4'>🔒</div>
                  <p className='text-gray-400'>
                    Enter a password above to see the security analysis and get
                    personalized suggestions.                  </p>                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                  <div className="text-6xl mb-4">🔒</div>
                  <p className="text-gray-400">
                    Enter a password above to see the security analysis and get personalized suggestions.
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className='py-20 bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Comprehensive password analysis with real-time feedback and
              security recommendations.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🔍</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Real-time Analysis
              </h3>
              <p className='text-gray-400'>
                Get instant feedback on password strength as you type with our
                advanced security algorithms.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>📊</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Comprehensive Scoring
              </h3>
              <p className='text-gray-400'>
                Multi-factor analysis including length, complexity, and common
                password detection.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>💡</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Smart Suggestions
              </h3>
              <p className='text-gray-400'>
                Personalized recommendations to improve your password security
                and strength.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🔐</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Password Generator
              </h3>
              <p className='text-gray-400'>
                Generate cryptographically secure passwords that meet all
                security requirements.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🛡️</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Security Standards
              </h3>
              <p className='text-gray-400'>
                Based on industry best practices and security standards for
                maximum protection.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🔒</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Privacy First
              </h3>
              <p className='text-gray-400'>
                Your passwords are never stored or transmitted - analysis
                happens locally in your browser.              </p>            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Features */}

      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Advanced Password Security Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive password analysis with real-time feedback and security recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-4">Real-time Analysis</h3>
              <p className="text-gray-400">
                Get instant feedback on password strength as you type with our advanced security algorithms.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Comprehensive Scoring</h3>
              <p className="text-gray-400">
                Multi-factor analysis including length, complexity, and common password detection.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Suggestions</h3>
              <p className="text-gray-400">
                Personalized recommendations to improve your password security and strength.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-white mb-4">Password Generator</h3>
              <p className="text-gray-400">
                Generate cryptographically secure passwords that meet all security requirements.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-4">Security Standards</h3>
              <p className="text-gray-400">
                Based on industry best practices and security standards for maximum protection.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Privacy First</h3>
              <p className="text-gray-400">
                Your passwords are never stored or transmitted - analysis happens locally in your browser.
<<<<<<< HEAD
<<<<<<< HEAD
=======

              </p>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              </p>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Card>
          </div>
        </div>
      </section>
      {/* Security Tips */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
              Password Security Best Practices
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Follow these guidelines to create and maintain strong, secure
              passwords for all your accounts.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <div className='text-4xl mb-4'>✅</div>
              <h3 className='text-2xl font-bold text-white mb-4'>Do's</h3>
              <ul className='space-y-3 text-gray-300'>
                <li className='flex items-start'>
                  <CheckCircle className='w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0' />                  Use at least 12 characters for important accounts
                </li>
                <li className='flex items-start'>
                  <CheckCircle className='w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0' />
                  Include uppercase, lowercase, numbers, and symbols
                </li>
                <li className='flex items-start'>
                  <CheckCircle className='w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0' />
                  Use unique passwords for each account
                </li>
                <li className='flex items-start'>
                  <CheckCircle className='w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0' />
                  Consider using a password manager
                </li>
                <li className='flex items-start'>
                  <CheckCircle className='w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0' />                  Update passwords regularly                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Password Security Best Practices
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Follow these guidelines to create and maintain strong, secure passwords for all your accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-4">Do's</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Use at least 12 characters for important accounts
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Include uppercase, lowercase, numbers, and symbols
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Use unique passwords for each account
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  Consider using a password manager
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Update passwords regularly
                </li>
              </ul>
            </Card>
<<<<<<< HEAD
<<<<<<< HEAD
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <div className='text-4xl mb-4'>❌</div>
              <h3 className='text-2xl font-bold text-white mb-4'>Don'ts</h3>
              <ul className='space-y-3 text-gray-300'>
                <li className='flex items-start'>
                  <XCircle className='w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0' />
                  Don't use personal information (names, birthdays)
                </li>                  Don't use personal information (names, birthdays)
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-2xl font-bold text-white mb-4">Don'ts</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                  Don't use personal information (names, birthdays)
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                  Avoid common words or patterns
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                  Never share passwords with others
                </li>
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                  Don't reuse passwords across accounts
                </li>
<<<<<<< HEAD
<<<<<<< HEAD
                <li className='flex items-start'>
                  <XCircle className='w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0' />
                  Avoid common words or patterns
                </li>
                <li className='flex items-start'>
                  <XCircle className='w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0' />
                  Never share passwords with others
                </li>
                <li className='flex items-start'>
                  <XCircle className='w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0' />
                  Don't reuse passwords across accounts
                </li>
                <li className='flex items-start'>
                  <XCircle className='w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0' />                  Avoid writing passwords down                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
=======
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Avoid writing passwords down
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            </Card>;
          </div>;
        </div>;
      </section>;

      {/* Features */}
      <section className='py-20 bg-gray-800'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
              Comprehensive password analysis with real-time feedback and;
              security recommendations.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>🔍</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Real-time Analysis;
              </h3>;
              <p className='text-gray-400'>;
                Get instant feedback on password strength as you type with our;
                advanced security algorithms.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>📊</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Comprehensive Scoring;
              </h3>;
              <p className='text-gray-400'>;
                Multi-factor analysis including length, complexity, and common;
                password detection.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>💡</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Smart Suggestions;
              </h3>;
              <p className='text-gray-400'>;
                Personalized recommendations to improve your password security;
                and strength.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>🔐</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Password Generator;
              </h3>;
              <p className='text-gray-400'>;
                Generate cryptographically secure passwords that meet all;
                security requirements.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>🛡️</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Security Standards;
              </h3>;
              <p className='text-gray-400'>;
                Based on industry best practices and security standards for;
                maximum protection.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>🔒</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Privacy First;
              </h3>;
              <p className='text-gray-400'>;
                Your passwords are never stored or transmitted - analysis;
                happens locally in your browser.              </p>            <Card className="text-center p-8 bg-gray-700 border border-gray-600">;
              <div className="text-4xl mb-4">🔒</div>;
              <h3 className="text-xl font-bold text-white mb-4">Privacy First</h3>;
              <p className="text-gray-400">;
                Your passwords are never stored or transmitted - analysis happens locally in your browser.;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Security Tips */}
      <section className='py-20 bg-gray-900'>;
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
              Password Security Best Practices;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
                            {key === 'no_common' && 'Not a common password'}
                            {key === 'no_sequential' &&;
                              'No sequential characters'}                          </span>                            {key === 'no_sequential' && 'No sequential characters'}
                          </span>;
                        </div>))}
                    </div>;
                  </div>;
                  {/* Suggestions */}
                  {suggestions.length > 0 && (
                    <div>;
                      <h4 className='text - lg font - semibold text - white mb - 3'>;
                        Suggestions;
                      </h4>;
                      <div className='space - y-2'>;
                        {suggestions.map ((suggestion, index) => (
                          <div;
                            key={index}
                            className='flex items - start space - x-3';
                          >;
                            <AlertTriangle className='w - 4 h - 4 text - yellow - 400 mt - 0.5 flex - shrink - 0' />;
                            <span className='text - sm text - yellow - 300'>;
                              {suggestion}
                            </span>                          </div>                      <h4 className="text - lg font - semibold text - white mb - 3">Suggestions</h4>;
                      <div className="space - y-2">;
                        {suggestions.map ((suggestion, index) => (
                          <div key={index} className="flex items - start space - x-3">;
                            <AlertTriangle className="w - 4 h - 4 text - yellow - 400 mt - 0.5 flex - shrink - 0" />;
                            <span className="text - sm text - yellow - 300">{suggestion}</span>))}
                      </div>;
                    </div>)}
                </div>) : (
                <div className='bg - gray - 900 p - 6 rounded - lg border border - gray - 700 text - center'>;
                  <div className='text - 6xl mb - 4'>🔒</div>;
                  <p className='text - gray - 400'>;
                    Enter a password above to see the security analysis and get;
                    personalized suggestions.                  </p>                <div className="bg - gray - 900 p - 6 rounded - lg border border - gray - 700 text - center">;
                  <div className="text - 6xl mb - 4">🔒</div>;
                  <p className="text - gray - 400">;
                    Enter a password above to see the security analysis and get personalized suggestions.;
                </div>)}
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Features */}
      <section className='py - 20 bg - gray - 800'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 16'>;
            <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
              Comprehensive password analysis with real - time feedback and;
              security recommendations.;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>🔍</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                Real - time Analysis;
              </h3>;
              <p className='text - gray - 400'>;
                Get instant feedback on password strength as you type with our;
                advanced security algorithms.;
              </p>;
            </Card>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>📊</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                Comprehensive Scoring;
              </h3>;
              <p className='text - gray - 400'>;
                Multi - factor analysis including length, complexity, and common;
                password detection.;
              </p>;
            </Card>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>💡</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                Smart Suggestions;
              </h3>;
              <p className='text - gray - 400'>;
                Personalized recommendations to improve your password security;
                and strength.;
              </p>;
            </Card>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>🔐</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                Password Generator;
              </h3>;
              <p className='text - gray - 400'>;
                Generate cryptographically secure passwords that meet all;
                security requirements.;
              </p>;
            </Card>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>🛡️</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                Security Standards;
              </h3>;
              <p className='text - gray - 400'>;
                Based on industry best practices and security standards for;
                maximum protection.;
              </p>;
            </Card>;
            <Card className='text - center p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>🔒</div>;
              <h3 className='text - xl font - bold text - white mb - 4'>;
                Privacy First;
              </h3>;
              <p className='text - gray - 400'>;
                Your passwords are never stored or transmitted - analysis;
                happens locally in your browser.              </p>            <Card className="text - center p - 8 bg - gray - 700 border border - gray - 600">;
              <div className="text - 4xl mb - 4">🔒</div>;
              <h3 className="text - xl font - bold text - white mb - 4">Privacy First</h3>;
              <p className="text - gray - 400">;
                Your passwords are never stored or transmitted - analysis happens locally in your browser.;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Security Tips */}
      <section className='py - 20 bg - gray - 900'>;
        <div className='max - w-6xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 16'>;
            <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
              Password Security Best Practices;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Follow these guidelines to create and maintain strong, secure;
              passwords for all your accounts.;
            </p>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>;
            <Card className='p - 8 bg - gray - 800 border border - gray - 700'>;
              <div className='text - 4xl mb - 4'>✅</div>;
              <h3 className='text - 2xl font - bold text - white mb - 4'>Do's</h3>;
              <ul className='space - y-3 text - gray - 300'>;
                <li className='flex items - start'>;
                  <CheckCircle className='w - 5 h - 5 text - green - 400 mr - 3 mt - 0.5 flex - shrink - 0' />                  Use at least 12 characters for important accounts;
                </li>;
                <li className='flex items - start'>;
                  <CheckCircle className='w - 5 h - 5 text - green - 400 mr - 3 mt - 0.5 flex - shrink - 0' />;
                  Include uppercase, lowercase, numbers, and symbols;
                </li>;
                <li className='flex items - start'>;
                  <CheckCircle className='w - 5 h - 5 text - green - 400 mr - 3 mt - 0.5 flex - shrink - 0' />;
                  Use unique passwords for each account;
                </li>;
                <li className='flex items - start'>;
                  <CheckCircle className='w - 5 h - 5 text - green - 400 mr - 3 mt - 0.5 flex - shrink - 0' />;
                  Consider using a password manager;
                </li>;
                <li className='flex items - start'>;
                  <CheckCircle className='w - 5 h - 5 text - green - 400 mr - 3 mt - 0.5 flex - shrink - 0' />                  Update passwords regularly                <li className="flex items - start">;
                  <CheckCircle className="w - 5 h - 5 text - green - 400 mr - 3 mt - 0.5 flex - shrink - 0" />;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Update passwords regularly;
                </li>;
              </ul>;
            </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Card className='p - 8 bg - gray - 800 border border - gray - 700'>;
              <div className='text - 4xl mb - 4'>❌</div>;
              <h3 className='text - 2xl font - bold text - white mb - 4'>Don'ts</h3>;
              <ul className='space - y-3 text - gray - 300'>;
                <li className='flex items - start'>;
                  <XCircle className='w - 5 h - 5 text - red - 400 mr - 3 mt - 0.5 flex - shrink - 0' />;
                  Don't use personal information (names, birthdays);
                </li>                  Don't use personal information (names, birthdays);
                </li>;
                <li className="flex items - start">;
                  <XCircle className="w - 5 h - 5 text - red - 400 mr - 3 mt - 0.5 flex - shrink - 0" />;
                  Avoid common words or patterns;
                </li>;
                <li className="flex items - start">;
                  <XCircle className="w - 5 h - 5 text - red - 400 mr - 3 mt - 0.5 flex - shrink - 0" />;
                  Never share passwords with others;
                </li>;
                <li className="flex items - start">;
                  <XCircle className="w - 5 h - 5 text - red - 400 mr - 3 mt - 0.5 flex - shrink - 0" />;
                  Don't reuse passwords across accounts;
                </li>;
                <li className='flex items - start'>;
                  <XCircle className='w - 5 h - 5 text - red - 400 mr - 3 mt - 0.5 flex - shrink - 0' />;
                  Avoid common words or patterns;
                </li>;
                <li className='flex items - start'>;
                  <XCircle className='w - 5 h - 5 text - red - 400 mr - 3 mt - 0.5 flex - shrink - 0' />;
                  Never share passwords with others;
                </li>;
                <li className='flex items - start'>;
                  <XCircle className='w - 5 h - 5 text - red - 400 mr - 3 mt - 0.5 flex - shrink - 0' />;
                  Don't reuse passwords across accounts;
                </li>;
                <li className='flex items - start'>;
                  <XCircle className='w - 5 h - 5 text - red - 400 mr - 3 mt - 0.5 flex - shrink - 0' />                  Avoid writing passwords down                <li className="flex items - start">;
                  <XCircle className="w - 5 h - 5 text - red - 400 mr - 3 mt - 0.5 flex - shrink - 0" />;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Avoid writing passwords down;
                </li>;
              </ul>;
            </Card>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Passwords?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of users who trust our password strength checker to improve their account security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
href="/contact"
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-indigo-600 to-purple-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>

<<<<<<< HEAD

            Ready to Secure Your Passwords?


<<<<<<< HEAD

            Ready to Secure Your Passwords?

            Ready to Secure Your Passwords?
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            Ready to Secure Your Passwords?


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </h2>
          <p className='text-xl text-indigo-100 mb-8'>
            Join thousands of users who trust our password strength checker to
            improve their account security.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
<<<<<<< HEAD
<<<<<<< HEAD
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-indigo-600 hover:bg-gray-100'
            >
              Get Started Today
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-indigo-600 hover:bg-gray-100'>;
              Get Started Today;
              <ArrowRight className='w-5 h-5 ml-2' />;
            </Button>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              href='/pricing'
              variant='outline'
              size='lg'
<<<<<<< HEAD
<<<<<<< HEAD
              className='border-white text-white hover:bg-white hover:text-indigo-600'            >              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>


  );
}
    </>);
}
  );
}
    </>);
}
);
  );
}
}
  );
}
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              View Pricing;
            </Button>;
          </div>;
        </div>;
      </section>;


=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
