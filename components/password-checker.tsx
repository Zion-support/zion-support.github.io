import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Lock,
  Shield,
  Eye,
  EyeOff,
  Copy,
  RefreshCw,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowRight,;
} from 'lucide-react';
<<<<<<< HEAD
=======
=======
import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function PasswordCheckerPage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [strengthText, setStrengthText] = useState('');
  const [strengthColor, setStrengthColor] = useState('');
  const [checks, setChecks] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
    noCommon: false,
<<<<<<< HEAD
    noSequential: false,  });
=======
<<<<<<< HEAD
<<<<<<< HEAD
    noSequential: false,
=======
    noSequential: false
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    noSequential: false
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [generatedPassword, setGeneratedPassword] = useState('');

  useEffect(() => {
    if (password) {
<<<<<<< HEAD
      analyzePassword(password);
    } else {
      resetAnalysis();    }
=======
<<<<<<< HEAD
<<<<<<< HEAD
      analyzePassword(password);
    } else {
      resetAnalysis();
=======
      analyzePassword(password)
    } else {
      resetAnalysis()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      analyzePassword(password)
    } else {
      resetAnalysis()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }, [password]);

  const analyzePassword = (pass: string) => {
    const newChecks = {
      length: pass.length >= 8,
      uppercase: /[A-Z]/.test(pass),
      lowercase: /[a-z]/.test(pass),
      numbers: /\d/.test(pass),
<<<<<<< HEAD
      symbols: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass),
      noCommon: !isCommonPassword(pass),
      noSequential: !hasSequentialChars(pass),    };
=======
<<<<<<< HEAD
<<<<<<< HEAD
      symbols: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass),
      noCommon: !isCommonPassword(pass),
      noSequential: !hasSequentialChars(pass),
=======
      symbols: /[!@#$%^&*()_+\-=\[\]{},':"\\|,.<>\/?]/.test(pass);
      noCommon: !isCommonPassword(pass),
      noSequential: !hasSequentialChars(pass)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      symbols: /[!@#$%^&*()_+\-=\[\]{},':"\\|,.<>\/?]/.test(pass);
      noCommon: !isCommonPassword(pass),
      noSequential: !hasSequentialChars(pass)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
      setStrengthText('Very Strong');
<<<<<<< HEAD
      setStrengthColor('text-green-400');
=======
<<<<<<< HEAD
<<<<<<< HEAD
      setStrengthColor('text-green-400');
=======
      setStrengthColor('text-green-400')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    } else if (score >= 70) {
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

    // Generate suggestions
<<<<<<< HEAD
    generateSuggestions(newChecks, pass);  };

  const isCommonPassword = (pass: string) => {
    const commonPasswords = [
=======
<<<<<<< HEAD
    generateSuggestions(newChecks, pass);
=======
      setStrengthColor('text-green-400')
    } else if (score >= 70) {
      setStrengthText('Strong');
      setStrengthColor('text-green-400')
    } else if (score >= 50) {
      setStrengthText('Moderate');
      setStrengthColor('text-yellow-400')
    } else if (score >= 30) {
      setStrengthText('Weak');
      setStrengthColor('text-orange-400')
    } else {
      setStrengthText('Very Weak');
      setStrengthColor('text-red-400')
    }

    // Generate suggestions
    generateSuggestions(newChecks, pass)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    generateSuggestions(newChecks, pass)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const isCommonPassword = (pass: string) => {
    const commonPasswords = [
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
=======
      'password123456123456789qwertyabc123password123adminletmein', 'welcomemonkeydragonmasterhello'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    ];
    return commonPasswords.includes(pass.toLowerCase());
  };

  const hasSequentialChars = (pass: string) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const sequences = ['123', 'abc', 'qwe', 'asd', 'zxc', '789', '456'];
    return sequences.some(seq => pass.toLowerCase().includes(seq));  };

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

<<<<<<< HEAD
    setSuggestions(suggestions);  };
=======
    setSuggestions(suggestions);
=======
    
    if (!checks.length) suggestions.push('Make your password at least 8 characters long');
    if (!checks.uppercase) suggestions.push('Add at least one uppercase letter (A-Z)');
    if (!checks.lowercase) suggestions.push('Add at least one lowercase letter (a-z)');
    if (!checks.numbers) suggestions.push('Add at least one number (0-9)');
=======
    const sequences = ['123abcqweasdzxc789456'];
    return sequences.some(seq => pass.toLowerCase().includes(seq))
  };

  const generateSuggestions = (checks: any, pass: string) => {
    const suggestions: string[] = [],
    
    if (!checks.length) suggestions.push('Make your password at least 8 characters long');
    if (!checks.uppercase) suggestions.push('Add at least one uppercase letter (A-Z)');
    if (!checks.lowercase) suggestions.push('Add at least one lowercase letter (a-z)');
    if (!checks.numbers) suggestions.push('Add at least one number (0-9)');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    if (!checks.symbols) suggestions.push('Add at least one special character (!@#$%^&*)');
    if (!checks.noCommon) suggestions.push('Avoid common passwords like "password" or "123456"');
    if (!checks.noSequential) suggestions.push('Avoid sequential characters like "123" or "abc"');
    
    if (pass.length < 12) suggestions.push('Consider making your password 12+ characters for better security');
    if (pass.length < 16) suggestions.push('For maximum security, use 16+ characters');
    
    setSuggestions(suggestions)
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const resetAnalysis = () => {
    setStrength(0);
    setStrengthText('');
    setStrengthColor('');
    setChecks({
      length: false,
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,
      noCommon: false,
<<<<<<< HEAD
      noSequential: false,
    });
    setSuggestions([]);  };

  const generateStrongPassword = () => {
    const length = 16;
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
=======
<<<<<<< HEAD
<<<<<<< HEAD
      noSequential: false,
    });
    setSuggestions([]);
=======
      noSequential: false
    });
    setSuggestions([])
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      noSequential: false
    });
    setSuggestions([])
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const generateStrongPassword = () => {
    const length = 16;
<<<<<<< HEAD
<<<<<<< HEAD
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
=======
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    let result = '';

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
  };

  const copyToClipboard = (text: string) => {
<<<<<<< HEAD
    navigator.clipboard.writeText(text);  };
=======
<<<<<<< HEAD
    navigator.clipboard.writeText(text);
=======
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let result = '';
    
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
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    navigator.clipboard.writeText(text)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const getStrengthBarColor = () => {
    if (strength >= 90) return 'bg-green-500';
    if (strength >= 70) return 'bg-green-400';
    if (strength >= 50) return 'bg-yellow-400';
    if (strength >= 30) return 'bg-orange-400';
<<<<<<< HEAD
    return 'bg-red-400';  };

  const getCheckIcon = (passed: boolean) => {
    return passed ? (
      <CheckCircle className='w-5 h-5 text-green-400' />
    ) : (
      <XCircle className='w-5 h-5 text-red-400' />
    );  };
=======
<<<<<<< HEAD
<<<<<<< HEAD
    return 'bg-red-400';
=======
    return 'bg-red-400'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return 'bg-red-400'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const getCheckIcon = (passed: boolean) => {
    return passed ? (
<<<<<<< HEAD
<<<<<<< HEAD
      <CheckCircle className='w-5 h-5 text-green-400' />
    ) : (
      <XCircle className='w-5 h-5 text-red-400' />
    );
=======
      <CheckCircle className="w-5 h-5 text-green-400" />
    ) : (
      <XCircle className="w-5 h-5 text-red-400" />
    )
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <CheckCircle className="w-5 h-5 text-green-400" />
    ) : (
      <XCircle className="w-5 h-5 text-red-400" />
    )
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  return (
    <>
      <Head>
        <title>Password Strength Checker - Zion Tech Group</title>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
=======
        <meta name="description" content="Check your password strength with our advanced security analyzer. Get detailed feedback and suggestions to create stronger, more secure passwords." />
        <meta property="og: title" content="Password Strength Checker - Zion Tech Group" />
        <meta property="og:description" content="Advanced password strength analyzer with security recommendations." />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      </Head>

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
<<<<<<< HEAD
          <p className='text-xl text-indigo-200 max-w-4xl mx-auto leading-relaxed'>
            Analyze your password security with our advanced strength checker.
            Get detailed feedback, suggestions, and generate strong passwords to
            protect your accounts and data.          </p>
=======
<<<<<<< HEAD
          <p className='text-xl text-indigo-200 max-w-4xl mx-auto leading-relaxed'>
            Analyze your password security with our advanced strength checker.
            Get detailed feedback, suggestions, and generate strong passwords to
            protect your accounts and data.
=======
        <meta name="description" content="Check your password strength with our advanced security analyzer. Get detailed feedback and suggestions to create stronger, more secure passwords." />
        <meta property="og: title" content="Password Strength Checker - Zion Tech Group" />
        <meta property="og:description" content="Advanced password strength analyzer with security recommendations." />
      </Head>

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
            Analyze your password security with our advanced strength checker. Get detailed feedback,
            suggestions, and generate strong passwords to protect your accounts and data.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <p className="text-xl text-indigo-200 max-w-4xl mx-auto leading-relaxed">
            Analyze your password security with our advanced strength checker. Get detailed feedback,
            suggestions, and generate strong passwords to protect your accounts and data.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </div>
      </section>

      {/* Password Checker Tool */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <section className='py-20 bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
<<<<<<< HEAD
=======
=======
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                      className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white'
                    >
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      {showPassword ? (
                        <EyeOff className='w-5 h-5' />
                      ) : (
                        <Eye className='w-5 h-5' />
<<<<<<< HEAD
                      )}                    </button>
=======
                      )}
=======
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Check Your Password Strength
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
                {/* Password Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="input-
                    Enter Password
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                </div>

                {/* Generate Password */}
                <div>
                  <Button
                    onClick={generateStrongPassword}
<<<<<<< HEAD
                    className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold'
                  >
                    <RefreshCw className='w-5 h-5 mr-2' />                    Generate Strong Password
=======
<<<<<<< HEAD
<<<<<<< HEAD
                    className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold'
                  >
                    <RefreshCw className='w-5 h-5 mr-2' />
=======
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    Generate Strong Password
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </Button>
                </div>

                {/* Generated Password Display */}
                {generatedPassword && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <div className='p-4 bg-gray-700 rounded-lg border border-gray-600'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm text-gray-300'>
                        Generated Password:
                      </span>
<<<<<<< HEAD
=======
=======
                  <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Generated Password:</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                    <div className='mt-2 p-2 bg-gray-800 rounded text-sm font-mono text-white break-all'>                      {generatedPassword}
=======
<<<<<<< HEAD
                    <div className='mt-2 p-2 bg-gray-800 rounded text-sm font-mono text-white break-all'>
=======
                  <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Generated Password:</span>
                      <Button
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="mt-2 p-2 bg-gray-800 rounded text-sm font-mono text-white break-all">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      {generatedPassword}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </div>
                  </div>
                )}

<<<<<<< HEAD
                <div className='text-sm text-gray-400'>                  <p>• Real-time strength analysis</p>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='text-sm text-gray-400'>
=======
                <div className="text-sm text-gray-400">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="text-sm text-gray-400">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <p>• Real-time strength analysis</p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <p>• Multiple security criteria</p>
                  <p>• Detailed feedback and suggestions</p>
                  <p>• Strong password generator</p>
                </div>
              </div>
            </Card>

            {/* Strength Analysis */}
<<<<<<< HEAD
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>
                <Shield className='w-6 h-6 mr-3 text-purple-400' />                Security Analysis
              </h3>

              {password ? (
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>
                <Shield className='w-6 h-6 mr-3 text-purple-400' />
=======
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-purple-400" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-purple-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Security Analysis
              </h3>

              {password ? (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div className='space-y-6'>
                  {/* Strength Score */}
                  <div>
                    <div className='flex items-center justify-between mb-2'>
                      <span className='text-sm text-gray-300'>
                        Password Strength:
<<<<<<< HEAD
                      </span>                      <span className={`text-lg font-bold ${strengthColor}`}>
                        {strengthText} ({strength}/100)
                      </span>
                    </div>
                    <div className='w-full bg-gray-700 rounded-full h-3'>
                      <div                        className={`h-3 rounded-full transition-all duration-300 ${getStrengthBarColor()}`}
=======
                      </span>
=======
                <div className="space-y-6">
                  {/* Strength Score */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">Password Strength:</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="space-y-6">
                  {/* Strength Score */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">Password Strength:</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <span className={`text-lg font-bold ${strengthColor}`}>
                        {strengthText} ({strength}/100)
                      </span>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className='w-full bg-gray-700 rounded-full h-3'>
                      <div
=======
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        className={`h-3 rounded-full transition-all duration-300 ${getStrengthBarColor()}`}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        style={{ width: `${strength}%` }}
                      />
                    </div>
                  </div>

                  {/* Security Checks */}
                  <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <h4 className='text-lg font-semibold text-white mb-3'>
                      Security Criteria
                    </h4>
                    <div className='space-y-3'>
<<<<<<< HEAD
=======
=======
                    <h4 className="text-lg font-semibold text-white mb-3">Security Criteria</h4>
                    <div className="space-y-3">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      {Object.entries(checks).map(([key, passed]) => (
                        <div key={key} className='flex items-center space-x-3'>
                          {getCheckIcon(passed)}
<<<<<<< HEAD
                          <span
                            className={`text-sm ${passed ? 'text-green-400' : 'text-red-400'}`}
                          >                            {key === 'length' && 'At least 8 characters'}
=======
<<<<<<< HEAD
                          <span
                            className={`text-sm ${passed ? 'text-green-400' : 'text-red-400'}`}
                          >
=======
                    <h4 className="text-lg font-semibold text-white mb-3">Security Criteria</h4>
                    <div className="space-y-3">
                      {Object.entries(checks).map(([key, passed]) => (
                        <div key={key} className="flex items-center space-x-3">
                          {getCheckIcon(passed)}
                          <span className={`text-sm ${passed ? 'text-green-400' : 'text-red-400'}`}>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                          <span className={`text-sm ${passed ? 'text-green-400' : 'text-red-400'}`}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                            {key === 'length' && 'At least 8 characters'}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                            {key === 'uppercase' && 'Contains uppercase letter'}
                            {key === 'lowercase' && 'Contains lowercase letter'}
                            {key === 'numbers' && 'Contains number'}
                            {key === 'symbols' && 'Contains special character'}
                            {key === 'noCommon' && 'Not a common password'}
<<<<<<< HEAD
                            {key === 'noSequential' &&
                              'No sequential characters'}                          </span>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                            {key === 'noSequential' &&
                              'No sequential characters'}
=======
                            {key === 'noSequential' && 'No sequential characters'}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                            {key === 'noSequential' && 'No sequential characters'}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                          </span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suggestions */}
                  {suggestions.length > 0 && (
                    <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
                            </span>                          </div>
=======
                            </span>
=======
                      <h4 className="text-lg font-semibold text-white mb-3">Suggestions</h4>
                      <div className="space-y-2">
                        {suggestions.map((suggestion, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-yellow-300">{suggestion}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <h4 className="text-lg font-semibold text-white mb-3">Suggestions</h4>
                      <div className="space-y-2">
                        {suggestions.map((suggestion, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-yellow-300">{suggestion}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                          </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div className='bg-gray-900 p-6 rounded-lg border border-gray-700 text-center'>
                  <div className='text-6xl mb-4'>🔒</div>
                  <p className='text-gray-400'>
                    Enter a password above to see the security analysis and get
<<<<<<< HEAD
                    personalized suggestions.                  </p>
=======
                    personalized suggestions.
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                  <div className="text-6xl mb-4">🔒</div>
                  <p className="text-gray-400">
                    Enter a password above to see the security analysis and get personalized suggestions.
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <section className='py-20 bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
<<<<<<< HEAD
=======
=======
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              Advanced Password Security Features
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🔒</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Privacy First
              </h3>
              <p className='text-gray-400'>
                Your passwords are never stored or transmitted - analysis
<<<<<<< HEAD
                happens locally in your browser.              </p>
=======
                happens locally in your browser.
=======
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

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Privacy First</h3>
              <p className="text-gray-400">
                Your passwords are never stored or transmitted - analysis happens locally in your browser.
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </Card>
          </div>
        </div>
      </section>

      {/* Security Tips */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <section className='py-20 bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
<<<<<<< HEAD
=======
=======
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              Password Security Best Practices
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Follow these guidelines to create and maintain strong, secure
              passwords for all your accounts.
            </p>
          </div>

<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <div className='text-4xl mb-4'>✅</div>
              <h3 className='text-2xl font-bold text-white mb-4'>Do's</h3>
              <ul className='space-y-3 text-gray-300'>
=======
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
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <li className='flex items-start'>
                  <CheckCircle className='w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0' />
                  Use at least 12 characters for important accounts
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
<<<<<<< HEAD
                <li className='flex items-start'>
                  <CheckCircle className='w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0' />                  Update passwords regularly
=======
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Update passwords regularly
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </li>
              </ul>
            </Card>

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <div className='text-4xl mb-4'>❌</div>
              <h3 className='text-2xl font-bold text-white mb-4'>Don'ts</h3>
              <ul className='space-y-3 text-gray-300'>
                <li className='flex items-start'>
                  <XCircle className='w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0' />
<<<<<<< HEAD
                  Don't use personal information (names, birthdays)
                </li>
=======
=======
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-2xl font-bold text-white mb-4">Don'ts</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Don't use personal information (names, birthdays)
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
                <li className='flex items-start'>
                  <XCircle className='w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0' />                  Avoid writing passwords down
=======
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Avoid writing passwords down
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className='py-20 bg-gradient-to-r from-indigo-600 to-purple-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-gradient-to-r from-indigo-600 to-purple-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
=======
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            Ready to Secure Your Passwords?
          </h2>
          <p className='text-xl text-indigo-100 mb-8'>
            Join thousands of users who trust our password strength checker to
            improve their account security.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-indigo-600 hover:bg-gray-100'
            >
              Get Started Today
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
            <Button
<<<<<<< HEAD
              href='/pricing'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-indigo-600'            >
=======
<<<<<<< HEAD
              href='/pricing'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-indigo-600'
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
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
