<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import Button from '../components/ui/Button';

import {

=======
=======
<<<<<<< HEAD
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
    }
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';
import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';
export default function PasswordCheckerPage() {;
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [strengthText, setStrengthText] = useState('');
  const [strengthColor, setStrengthColor] = useState('');
  const [checks, setChecks] = useState({;
    length: false,;
    uppercase: false,;
    lowercase: false,;
    numbers: false,;
    symbols: false,;
    noCommon: false,;
    noSequential: false,  });    noSequential: false;
  const [checks, setChecks] = useState({
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

export default function PasswordCheckerPage() {
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Lock,
  Shield,
  Eye,
  EyeOff,
  Copy,
  RefreshCw,
  CheckCircle,
  XCircle,
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
    }
<<<<<<< HEAD
    
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';

=======
}, [password]);
      length: pass.length >= 8,
      uppercase: /[A-Z]/.test(pass),
      lowercase: /[a-z]/.test(pass),
      numbers: /\d/.test(pass),
symbols: /[!@#$%^&*()_+\-=\[\]{},':"\\|,.<>\/?]/.test(pass);
      noCommon: !isCommonPassword(pass),
      noSequential: !hasSequentialChars(pass)
    };
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  AlertTriangle,;
  ArrowRight,;
} from 'lucide-react';import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';
<<<<<<< HEAD

=======
import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

export default function PasswordCheckerPage() {;



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export default function PasswordCheckerPage() {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [strengthText, setStrengthText] = useState('');
  const [strengthColor, setStrengthColor] = useState('');
<<<<<<< HEAD
=======
  const [checks, setChecks] = useState({
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7


<<<<<<< HEAD
=======
  });
  const [suggestions, setSuggestions] = useState<string[]>([]),
  const [generatedPassword, setGeneratedPassword] = useState('');
  useEffect(() => {
    if (password) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      analyzePassword(password);
    } else {
      resetAnalysis();    }      analyzePassword(password)
    } else {
      resetAnalysis()
    }
  }, [password]);

<<<<<<< HEAD

      length: pass.length >= 8,
      uppercase: /[A-Z]/.test(pass),
      lowercase: /[a-z]/.test(pass),
      numbers: /\d/.test(pass),
      symbols: /[!@#$%^&*()_+\-=\[\]{},':"\\|,.<>\/?]/.test(pass);
      noCommon: !isCommonPassword(pass),
      noSequential: !hasSequentialChars(pass)
    };


=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD


=======
      setStrengthColor('text-green-400')
    } else if (score >= 70) {
      setStrengthText('Strong');
=======
      setStrengthText('Very Strong');
      setStrengthColor('text-green-400');
    } else if (score >= 70) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

  };

=======
    // Generate suggestions
    generateSuggestions(newChecks, pass);  }
  const isCommonPassword = (pass: string) => {
    const commonPasswords = [    } else if (score >= 70) {
      setStrengthText('Strong');
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      setStrengthColor('text-green-400')
    } else if (score >= 50) {
      setStrengthText('Moderate');
      setStrengthColor('text-yellow-400')
    } else if (score >= 30) {
      setStrengthText('Weak');
      setStrengthColor('text-orange-400')
<<<<<<< HEAD
    no_common: false,
    no_sequential: false,  });    no_sequential: false;
  });
  const [suggestions, set_suggestions] = useState < string[]>([]);
  const [generated_password, setGeneratedPassword] = useState ('');
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      analyze_password (password);
    } else {
      reset_analysis ();    }      analyze_password (password);
    } else {
      reset_analysis ();
    }
  }, [password]);
;
  const analyze_password = (pass: string) =>: any {
    const new_checks = {
      length: pass.length >= 8,
      uppercase: /[A - Z]/.test (pass),
      lowercase: /[a - z]/.test (pass),
      numbers: /\d/.test (pass),
      symbols: /[!@#$%^&*()_+\-=\[\]{}':"\\|, .<>\/?]/.test (pass),
      no_common: !isCommonPassword (pass),
      no_sequential: !hasSequentialChars (pass),    }      symbols: /[!@#$%^&*()_+\-=\[\]{}, ':"\\|, .<>\/?]/.test (pass);
      no_common: !isCommonPassword (pass),
      no_sequential: !hasSequentialChars (pass);
    }
;
    set_checks (new_checks);
;
    // Calculate strength score;
    let score = 0;
    score += new_checks.length ? 15 : 0;
    score += new_checks.uppercase ? 15 : 0;
    score += new_checks.lowercase ? 15 : 0;
    score += new_checks.numbers ? 15 : 0;
    score += new_checks.symbols ? 20 : 0;
    score += new_checks.no_common ? 10 : 0;
    score += new_checks.no_sequential ? 10 : 0;
;
    // Bonus for length;
    // Check condition
if (score += 10) {
  $2
}
    // Check condition
if (score += 5) {
  $2
}
    set_strength (score);
;
    // Set strength text and color;
    // Check condition
if ( {) {
  $2
}
      setStrengthText ('Very Strong');
      setStrengthColor ('text - green - 400');
    } else // Check condition
if ( {) {
  $2
}
      setStrengthText ('Strong');
      setStrengthColor ('text - green - 400');
    } else // Check condition
if ( {) {
  $2
}
      setStrengthText ('Moderate');
      setStrengthColor ('text - yellow - 400');
    } else // Check condition
if ( {) {
  $2
}
      setStrengthText ('Weak');
      setStrengthColor ('text - orange - 400');
    } else {
      setStrengthText ('Very Weak');
      setStrengthColor ('text - red - 400');
    }
    // Generate suggestions;
    generate_suggestions (new_checks, pass);  }
;
  const isCommonPassword = (pass: string) =>: any {
    const common_passwords = [    } else // Check condition
if ( {) {
  $2
}
      setStrengthText ('Strong');
      setStrengthColor ('text - green - 400');
    } else // Check condition
if ( {) {
  $2
}
      setStrengthText ('Moderate');
      setStrengthColor ('text - yellow - 400');
    } else // Check condition
if ( {) {
  $2
}
      setStrengthText ('Weak');
      setStrengthColor ('text - orange - 400');
    } else {
      setStrengthText ('Very Weak');
      setStrengthColor ('text - red - 400');
    }
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const isCommonPassword = (pass: string) => {
    const commonPasswords = [
      'password123456123456789qwertyabc123password123adminletmein', 'welcomemonkeydragonmasterhello'
    ];
    return commonPasswords.includes(pass.toLowerCase())
  };
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (!checks.length) suggestions.push('Make your password at least 8 characters long');
    if (!checks.uppercase) suggestions.push('Add at least one uppercase letter (A-Z)');
    if (!checks.lowercase) suggestions.push('Add at least one lowercase letter (a-z)');
    if (!checks.numbers) suggestions.push('Add at least one number (0-9)');
    if (!checks.symbols) suggestions.push('Add at least one special character (!@#$%^&*)');
<<<<<<< HEAD

=======
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (!checks.noCommon) suggestions.push('Avoid common passwords like "password" or "123456"');
    if (!checks.noSequential) suggestions.push('Avoid sequential characters like "123" or "abc"');
    if (pass.length < 12) suggestions.push('Consider making your password 12+ characters for better security');
    if (pass.length < 16) suggestions.push('For maximum security, use 16+ characters');
    setSuggestions(suggestions)
<<<<<<< HEAD

  };


=======
<<<<<<< HEAD
  };
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const resetAnalysis = () => {
    setStrength(0);
    setStrengthText('');
    setStrengthColor('');
    setChecks({
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      length: false,
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,
<<<<<<< HEAD


=======
=======
setSuggestions([]);
  };
  const generateStrongPassword = () => {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      no_common: false,
      no_sequential: false,
=======
      length: false
      uppercase: false
      lowercase: false
      numbers: false
      symbols: false
      noCommon: false
      noSequential: false
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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

    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let result = '';
    

=======
<<<<<<< HEAD
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let result = '';
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Ensure at least one of each required character type
    result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)], // Uppercase
    result += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)], // Lowercase
    result += '0123456789'[Math.floor(Math.random() * 10)], // Number
    result += '!@#$%^&*'[Math.floor(Math.random() * 8)], // Symbol
<<<<<<< HEAD

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    // Fill the rest randomly
    for (let i = 4, i < length, i++) {
      result += charset[Math.floor(Math.random() * charset.length)]
    }
<<<<<<< HEAD
// Shuffle the password
=======
    // Shuffle the password
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    result = result.split('').sort(() => Math.random() - 0.5).join('');
    setGeneratedPassword(result);
    setPassword(result)
  }
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
  }
  const getStrengthBarColor = () => {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    if (strength >= 90) return 'bg-green-500';
    if (strength >= 70) return 'bg-green-400';
    if (strength >= 50) return 'bg-yellow-400';
    if (strength >= 30) return 'bg-orange-400';
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <>
      <Head>
        <title>Password Strength Checker - Zion Tech Group</title>
<<<<<<< HEAD
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


  };
=======
<<<<<<< HEAD
        <meta name="description" content="Check your password strength with our advanced security analyzer. Get detailed feedback and suggestions to create stronger, more secure passwords." />
        <meta property="og: title" content="Password Strength Checker - Zion Tech Group" />
        <meta property="og:description" content="Advanced password strength analyzer with security recommendations." />
      </Head>
      {/* Hero Section */}

  const _getCheckIcon = (_passed: boolean) => {_return passed ? (
      <CheckCircle className="w-5 h-5 text-green-400" />
    ) : (
      <XCircle className="w-5 h-5 text-red-400" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (_<>
      <Head>
        <title>Password Strength Checker - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Check your password strength with our advanced security analyzer. Get detailed feedback and suggestions to create stronger, more secure passwords.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Password Strength Checker - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Advanced password strength analyzer with security recommendations." />
      </Head>

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      {_/* Hero Section */}

=======
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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
            Analyze your password security with our advanced strength checker. Get detailed feedback

=======
<<<<<<< HEAD
Analyze your password security with our advanced strength checker. Get detailed feedback
=======
            Analyze your password security with our advanced strength checker. Get detailed feedback

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            suggestions, and generate strong passwords to protect your accounts and data.
          </p>
        </div>
      </section>
      {/* Password Checker Tool */}
<<<<<<< HEAD

        />;
      </Head>;

=======
<<<<<<< HEAD
        />;
      </Head>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;
            {/* Input Form */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>;
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>;
                <Lock className='w-6 h-6 mr-3 text-indigo-400' />;
                Password Analysis;
              </h3>;
<<<<<<< HEAD

              <div className='space-y-6'>;

=======
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Check Your Password Strength

=======
                      className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white'
                    >
                      {showPassword ? (
                        <EyeOff className='w-5 h-5' />
                      ) : (
                        <Eye className='w-5 h-5' />
                      )}                    </button>              Check Your Password Strength
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our advanced security analyzer evaluates multiple factors to determine password strength and security.
            </p>
          </div>
<<<<<<< HEAD
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {/* Input Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-indigo-400" />
                Password Analysis
              </h3>
<<<<<<< HEAD
              <div className="space-y-6">
=======
=======
<<<<<<< HEAD
<div className="space-y-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
              <div className="space-y-6">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {/* Password Input */}
                <div>;
                  <labelclassName="block text-sm font-medium text-gray-300 mb-2" htmlFor="input-
                    Enter Password
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                    </button>
                  </div>
                </div>
                    </button>;
                  </div>;
                </div>;
=======
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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {/* Generate Password */}
                <div>;
                  <Button
                    onClick={generateStrongPassword}
<<<<<<< HEAD
<<<<<<< HEAD
                    className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold'
                  >
                    <RefreshCw className='w-5 h-5 mr-2' />                    Generate Strong Password                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
=======
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
=======
                    className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold'
                  >
                    <RefreshCw className='w-5 h-5 mr-2' />                    Generate Strong Password                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Generate Strong Password
                  </Button>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                {/* Generated Password Display */}

=======
<<<<<<< HEAD
className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold'>;
                    <RefreshCw className='w-5 h-5 mr-2' />                    Generate Strong Password                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold";
                  >;
                    <RefreshCw className="w-5 h-5 mr-2" />;
                    Generate Strong Password;
                  </Button>;
                </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {/* Generated Password Display */}
                {generatedPassword && (
                  <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Generated Password:</span>
                      <Button
                        onClick={() => copyToClipboard(generatedPassword)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                        variant='outline'
                        size='sm'
                        className='border-gray-600 text-gray-300 hover:bg-gray-600'
                      >
                        <Copy className='w-4 h-4 mr-2' />
                        Copy
                      </Button>
                    </div>
                    <div className='mt-2 p-2 bg-gray-800 rounded text-sm font-mono text-white break-all'>                      {generatedPassword}                      <Button
                        onClick={() => copyToClipboard(generatedPassword)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                      {generatedPassword}
                    </div>;
                  </div>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        variant='outline'
                        size='sm'
                        className='border-gray-600 text-gray-300 hover:bg-gray-600'
                      >
                        <Copy className='w-4 h-4 mr-2' />
                        Copy
                      </Button>
                    </div>
<<<<<<< HEAD

=======

                    <div className='mt-2 p-2 bg-gray-800 rounded text-sm font-mono text-white break-all'>                      {generatedPassword}

                      {generatedPassword}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    </div>
                  </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                )}


                <div className="text-sm text-gray-400">

=======
<<<<<<< HEAD
{generatedPassword}
                    </div>;
                  </div>;
                )}
                <div className="text-sm text-gray-400">
=======
                      {generatedPassword}
                    <div className='mt-2 p-2 bg-gray-800 rounded text-sm font-mono text-white break-all'>                      {generatedPassword}

                      {generatedPassword}

                    </div>
                  </div>
                )}
                <div className='text-sm text-gray-400'>                  <p>• Real-time strength analysis</p>                <div className="text-sm text-gray-400">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <p>• Real-time strength analysis</p>
                  <p>• Multiple security criteria</p>
                  <p>• Detailed feedback and suggestions</p>
                  <p>• Strong password generator</p>
                </div>
              </div>
            </Card>
<<<<<<< HEAD
            {/* Strength Analysis */}

            <Card className="p-8 bg-gray-800 border border-gray-700">

=======
<<<<<<< HEAD
{/* Strength Analysis */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
=======
            {/* Strength Analysis */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>
                <Shield className='w-6 h-6 mr-3 text-purple-400' />                Security Analysis
              </h3>
              {password ? (            <Card className="p-8 bg-gray-800 border border-gray-700">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-purple-400" />
                Security Analysis
              </h3>
<<<<<<< HEAD
              {password ? (


=======
<<<<<<< HEAD
{password ? (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <div className="space-y-6">
=======
              {password ? (
                <div className='space-y-6'>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <span className={`text-lg font-bold ${strengthColor}`}>
                        {strengthText} ({strength}/100)
                      </span>
                    </div>
<<<<<<< HEAD
                    <div className="w-full bg-gray-700 rounded-full h-3">
=======
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
                      <div 

=======


=======

                      <div 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
className={`h-3 rounded-full transition-all duration-300 ${getStrengthBarColor()}`}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                        className={`h-3 rounded-full transition-all duration-300 ${getStrengthBarColor()}`}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        style={{ width: `${strength}%` }}
                      />
                    </div>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                  {/* Security Checks */}
                  <div>
                    <h4 className='text-lg font-semibold text-white mb-3'>
                      Security Criteria
                    </h4>
                    <div className='space-y-3'>
                      {Object.entries(checks).map(([key, passed]) => (
                        <div key={key} className='flex items-center space-x-3'>
                          {getCheckIcon(passed)}
                          <span
                            className={`text-sm ${passed ? 'text-green-400' : 'text-red-400'}`}

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  {/* Security Checks */}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
                            className={`text-sm ${passed ? 'text-green-400' : 'text-red-400'}`}

                          >                            {key === 'length' && 'At least 8 characters'}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  {/* Security Checks */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Security Criteria</h4>
                    <div className="space-y-3">
                      {Object.entries(checks).map(([key, passed]) => (
<<<<<<< HEAD
                        <div key={key} className="flex items-center space-x-3">
                          {getCheckIcon(passed)}
                          <span className={`text-sm ${passed ? 'text-green-400' : 'text-red-400'}`}>
                    <input;
                      type={show_password ? 'text' : 'password'}
                      value={password}
                      on_change={(e) => set_password (e.target.value)}
                      placeholder="Type your password here...";
                      className="w - full px - 4 py - 3 pr - 12 bg - gray - 700 border border - gray - 600 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - indigo - 500 focus:border - transparent";
                    />;
                    <button;
                      type="button";
                      on_click={() => setShowPassword (!show_password)}
                      className="absolute inset - y-0 right - 0 pr - 3 flex items - center text - gray - 400 hover:text - white";
                    >;
                      {show_password ? <EyeOff className="w - 5 h - 5" /> : <Eye className="w - 5 h - 5" />}
                    </button>;
                  </div>;
                </div>;
                {/* Generate Password */}
                <div>;
                  <Button;
                    on_click={generateStrongPassword}
                    className='w - full bg - gradient - to - r from - indigo - 600 to - purple - 600 hover:from - indigo - 700 hover:to - purple - 700 text - white py - 3 text - lg font - semibold';
                  >;
                    <RefreshCw className='w - 5 h - 5 mr - 2' />                    Generate Strong Password                    className="w - full bg - gradient - to - r from - indigo - 600 to - purple - 600 hover:from - indigo - 700 hover:to - purple - 700 text - white py - 3 text - lg font - semibold";
                  >;
                    <RefreshCw className="w - 5 h - 5 mr - 2" />;
                    Generate Strong Password;
                  </Button>;
                </div>;
                {/* Generated Password Display */}
                {generated_password && (
                  <div className='p - 4 bg - gray - 700 rounded - lg border border - gray - 600'>;
                    <div className='flex items - center justify - between'>;
                      <span className='text - sm text - gray - 300'>;
                        Generated Password:;
                      </span>;
                      <Button;
                        on_click={() => copyToClipboard (generated_password)}
                        variant='outline';
                        size='sm';
                        className='border - gray - 600 text - gray - 300 hover:bg - gray - 600';
                      >;
                        <Copy className='w - 4 h - 4 mr - 2' />;
                        Copy;
                      </Button>;
                    </div>;
                    <div className='mt - 2 p - 2 bg - gray - 800 rounded text - sm font - mono text - white break - all'>                      {generated_password}                      <Button;
                        on_click={() => copyToClipboard (generated_password)}
                        variant="outline";
                        size="sm";
                        className="border - gray - 600 text - gray - 300 hover:bg - gray - 600";
                      >;
                        <Copy className="w - 4 h - 4 mr - 2" />;
                        Copy;
                      </Button>;
                    </div>;
                    <div className="mt - 2 p - 2 bg - gray - 800 rounded text - sm font - mono text - white break - all">;
                      {generated_password}
                    </div>;
                  </div>)}
                <div className='text - sm text - gray - 400'>                  <p>• Real - time strength analysis</p>                <div className="text - sm text - gray - 400">;
                  <p>• Real - time strength analysis</p>;
                  <p>• Multiple security criteria</p>;
                  <p>• Detailed feedback and suggestions</p>;
                  <p>• Strong password generator</p>;
                </div>;
              </div>;
            </Card>;
            {/* Strength Analysis */}
            <Card className='p - 8 bg - gray - 800 border border - gray - 700'>;
              <h3 className='text - 2xl font - bold text - white mb - 6 flex items - center'>;
                <Shield className='w - 6 h - 6 mr - 3 text - purple - 400' />                Security Analysis;
              </h3>;
              {password ? (            <Card className="p - 8 bg - gray - 800 border border - gray - 700">;
              <h3 className="text - 2xl font - bold text - white mb - 6 flex items - center">;
                <Shield className="w - 6 h - 6 mr - 3 text - purple - 400" />;
                Security Analysis;
              </h3>;
              {password ? (
                <div className='space - y-6'>;
                  {/* Strength Score */}
                  <div>;
                    <div className='flex items - center justify - between mb - 2'>;
                      <span className='text - sm text - gray - 300'>;
                        Password Strength:;
                      </span>                      <span className={`text - lg font - bold ${strength_color}`}>;
                        {strength_text} ({strength}/100);
                      </span>;
                    </div>;
                    <div className='w - full bg - gray - 700 rounded - full h - 3'>;
                      <div                        className={`h - 3 rounded - full transition - all duration - 300 ${getStrengthBarColor ()}`}                <div className="space - y-6">;
                  {/* Strength Score */}
                  <div>;
                    <div className="flex items - center justify - between mb - 2">;
                      <span className="text - sm text - gray - 300">Password Strength:</span>;
                        {strength_text} ({strength}/100);
                      </span>;
                    </div>;
                    <div className='w - full bg - gray - 700 rounded - full h - 3'>;
                      <div                    <div className="w - full bg - gray - 700 rounded - full h - 3">;
                      <div;
                        className={`h - 3 rounded - full transition - all duration - 300 ${getStrengthBarColor ()}`}
                        style={{ width: `${strength}%` }}
                      />;
                    </div>;
                  </div>;
                  {/* Security Checks */}
                  <div>;
                    <h4 className='text - lg font - semibold text - white mb - 3'>;
                      Security Criteria;
                    </h4>;
                    <div className='space - y-3'>;
                      {Object.entries (checks).map (([key, passed]) => (
                        <div key={key} className='flex items - center space - x-3'>;
                          {getCheckIcon (passed)}
                          <span;
                            className={`text - sm ${passed ? 'text - green - 400' : 'text - red - 400'}`}
                          >                            {key === 'length' && 'At least 8 characters'}                      {Object.entries (checks).map (([key, passed]) => (
                        <div key={key} className="flex items - center space - x-3">;
                          {getCheckIcon (passed)}
                          <span className={`text - sm ${passed ? 'text - green - 400' : 'text - red - 400'}`}>;
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                            {key === 'length' && 'At least 8 characters'}
                            {key === 'uppercase' && 'Contains uppercase letter'}
                            {key === 'lowercase' && 'Contains lowercase letter'}
                            {key === 'numbers' && 'Contains number'}
                            {key === 'symbols' && 'Contains special character'}
<<<<<<< HEAD


                      ))}
<<<<<<< HEAD
                    </div>
                  </div>

                  {/* Suggestions */}
                  {suggestions.length > 0 && (
                    <div>
=======
<<<<<<< HEAD
                            {key === 'noSequential' && 'No sequential characters'}
                          </span>
                        </div>
                      ))}
                    </div>;
                  </div>;
                  {/* Suggestions */}
                  {suggestions.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Suggestions</h4>
=======
                            {key === 'noCommon' && 'Not a common password'}
                            {key === 'noSequential' &&
                              'No sequential characters'}                          </span>                            {key === 'noSequential' && 'No sequential characters'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suggestions */}
                  {suggestions.length > 0 && (
                    <div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <h4 className='text-lg font-semibold text-white mb-3'>
                        Suggestions
                      </h4>
                      <div className='space-y-2'>
<<<<<<< HEAD
                        {suggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            className='flex items-start space-x-3'
                          >
                            <AlertTriangle className='w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0' />
                            <span className='text-sm text-yellow-300'>
                              {suggestion}

=======
                        {suggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            className='flex items-start space-x-3'
                          >
                            <AlertTriangle className='w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0' />
                            <span className='text-sm text-yellow-300'>
                              {suggestion}
                            </span>                          </div>                      <h4 className="text-lg font-semibold text-white mb-3">Suggestions</h4>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      <div className="space-y-2">
                        {suggestions.map((suggestion, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-yellow-300">{suggestion}</span>
<<<<<<< HEAD
<<<<<<< HEAD
                          </div>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                            </span>                          </div>

                          </div>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
<<<<<<< HEAD
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

=======

                    </div>;
                  </div>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  {/* Suggestions */}


=======

                            </span>                          </div>

                          </div>


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                        ))}
                      </div>;
                    </div>;
                  )}


              )}





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {/* Features */}

=======
<<<<<<< HEAD
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                  <div className="text-6xl mb-4">🔒</div>
                  <p className="text-gray-400">
                    Enter a password above to see the security analysis and get personalized suggestions.
                  </p>
                </div>
              )}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Privacy First</h3>
              <p className="text-gray-400">
                Your passwords are never stored or transmitted - analysis happens locally in your browser.
<<<<<<< HEAD

              </p>

=======
<<<<<<< HEAD
              </p>
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Card>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Security Tips */}

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

=======
<<<<<<< HEAD
{/* Security Tips */}
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
=======
      {/* Security Tips */}
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Update passwords regularly
                </li>
              </ul>
            </Card>
<<<<<<< HEAD


=======
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-2xl font-bold text-white mb-4">Don'ts</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                  Don't use personal information (names, birthdays)
<<<<<<< HEAD
=======
=======
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <div className='text-4xl mb-4'>❌</div>
              <h3 className='text-2xl font-bold text-white mb-4'>Don'ts</h3>
              <ul className='space-y-3 text-gray-300'>
                <li className='flex items-start'>
                  <XCircle className='w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0' />
                  Don't use personal information (names, birthdays)
                </li>                  Don't use personal information (names, birthdays)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />

=======
<<<<<<< HEAD
                <li className="flex items-start">
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Avoid writing passwords down
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
<<<<<<< HEAD

            </Card>;
          </div>;
        </div>;
      </section>;

=======
<<<<<<< HEAD
</Card>;
          </div>;
        </div>;
      </section>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Follow these guidelines to create and maintain strong, secure;
              passwords for all your accounts.;
            </p>;
          </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Update passwords regularly;
                </li>;
              </ul>;
            </Card>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Avoid writing passwords down;
                </li>;
              </ul>;
            </Card>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-indigo-600 to-purple-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


            Ready to Secure Your Passwords?


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

            Ready to Secure Your Passwords?
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

            Ready to Secure Your Passwords?
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </h2>
          <p className='text-xl text-indigo-100 mb-8'>
            Join thousands of users who trust our password strength checker to
            improve their account security.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-indigo-600 hover:bg-gray-100'>;
              Get Started Today;
              <ArrowRight className='w-5 h-5 ml-2' />;
            </Button>;
=======
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-indigo-600 hover:bg-gray-100'
            >
              Get Started Today
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Button
              href='/pricing'
              variant='outline'
              size='lg'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className='border-white text-white hover:bg-white hover:text-indigo-600'            >              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
<<<<<<< HEAD
<<<<<<< HEAD

}

}

  );
}

=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
className='border-white text-white hover:bg-white hover:text-indigo-600'>              href="/pricing";
              variant="outline";
              size="lg";
              className="border-white text-white hover:bg-white hover:text-indigo-600";
      {/* CTA Section */}
      <section className='py - 20 bg - gradient - to - r from - indigo - 600 to - purple - 600'>;
        <div className='max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
          <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
          </h2>;
          <p className='text - xl text - indigo - 100 mb - 8'>;
            Join thousands of users who trust our password strength checker to;
            improve their account security.;
          </p>;
          <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
            <Button;
              href='/contact';
              size='lg';
              className='bg - white text - indigo - 600 hover:bg - gray - 100';
            >;
              Get Started Today;
              <ArrowRight className='w - 5 h - 5 ml - 2' />;
            </Button>;
            <Button;
              href='/pricing';
              variant='outline';
              size='lg';
              className='border - white text - white hover:bg - white hover:text - indigo - 600'            >              href="/pricing";
              variant="outline";
              size="lg";
              className="border - white text - white hover:bg - white hover:text - indigo - 600";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              View Pricing;
            </Button>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD


=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  );
}
    </>);
}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
);
  );
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
