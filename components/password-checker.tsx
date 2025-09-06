
import Button from '../components/ui/Button';

import {

=======
export default function PasswordCheckerPage() {
  Lock,
  Shield,
  Eye,
  EyeOff,
  Copy,
  RefreshCw,
  CheckCircle,
  XCircle,

    }
    
    return this.props.children;
  }
}
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

export default function PasswordCheckerPage() {
  Lock,
  Shield,
  Eye,
  EyeOff,
  Copy,
  RefreshCw,
  CheckCircle,
  XCircle,
  AlertTriangle,;
  ArrowRight,;
} from 'lucide-react';import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';

=======
=======
import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

export default function PasswordCheckerPage() {;
=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [strengthText, setStrengthText] = useState('');
  const [strengthColor, setStrengthColor] = useState('');


      analyzePassword(password);
    } else {
      resetAnalysis();    }      analyzePassword(password)
    } else {
      resetAnalysis()
    }
  }, [password]);


      length: pass.length >= 8,
      uppercase: /[A-Z]/.test(pass),
      lowercase: /[a-z]/.test(pass),
      numbers: /\d/.test(pass),
      symbols: /[!@#$%^&*()_+\-=\[\]{},':"\\|,.<>\/?]/.test(pass);
      noCommon: !isCommonPassword(pass),
      noSequential: !hasSequentialChars(pass)
    }

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

      setStrengthColor('text-green-400')
    } else if (score >= 50) {
      setStrengthText('Moderate');
      setStrengthColor('text-yellow-400')
    } else if (score >= 30) {
      setStrengthText('Weak');
      setStrengthColor('text-orange-400')

    if (!checks.noCommon) suggestions.push('Avoid common passwords like "password" or "123456"');
    if (!checks.noSequential) suggestions.push('Avoid sequential characters like "123" or "abc"');
    if (pass.length < 12) suggestions.push('Consider making your password 12+ characters for better security');
    if (pass.length < 16) suggestions.push('For maximum security, use 16+ characters');
    setSuggestions(suggestions)

  const resetAnalysis = () => {
    setStrength(0);
    setStrengthText('');
    setStrengthColor('');
    setChecks({

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

    // Ensure at least one of each required character type
    result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)], // Uppercase
    result += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)], // Lowercase
    result += '0123456789'[Math.floor(Math.random() * 10)], // Number
    result += '!@#$%^&*'[Math.floor(Math.random() * 8)], // Symbol

    // Fill the rest randomly
    for (let i = 4, i < length, i++) {
      result += charset[Math.floor(Math.random() * charset.length)]
    }

    result = result.split('').sort(() => Math.random() - 0.5).join('');
    setGeneratedPassword(result);
    setPassword(result)
  }
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)

    if (strength >= 90) return 'bg-green-500';
    if (strength >= 70) return 'bg-green-400';
    if (strength >= 50) return 'bg-yellow-400';
    if (strength >= 30) return 'bg-orange-400';

  return (
    <>

  };

  return (_<>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      <Head>
        <title>Password Strength Checker - Zion Tech Group</title>

  return (
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

=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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


            suggestions, and generate strong passwords to protect your accounts and data.
          </p>
        </div>
      </section>
      {/* Password Checker Tool */}

            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our advanced security analyzer evaluates multiple factors to determine password strength and security.
            </p>
          </div>

            {/* Input Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-indigo-400" />
                Password Analysis
              </h3>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                {/* Password Input */}
                <div>;
                  <labelclassName="block text-sm font-medium text-gray-300 mb-2" htmlFor="input-
                    Enter Password

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                {/* Generate Password */}
                <div>;
                  <Button
                    onClick={generateStrongPassword}
                    className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold'
                  >
                    <RefreshCw className='w-5 h-5 mr-2' />                    Generate Strong Password                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Generate Strong Password
                  </Button>
                </div>

                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Generate Strong Password
                  </Button>
                </div>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                {/* Generated Password Display */}


                {/* Generated Password Display */}
                {generatedPassword && (
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

                      {generatedPassword}
                    </div>;
                  </div>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                    </div>
                  </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                )}
                <div className='text-sm text-gray-400'>                  <p>• Real-time strength analysis</p>                <div className="text-sm text-gray-400">

                  <p>• Real-time strength analysis</p>
                  <p>• Multiple security criteria</p>
                  <p>• Detailed feedback and suggestions</p>
                  <p>• Strong password generator</p>
                </div>
              </div>
            </Card>
=======
            {/* Strength Analysis */}

            <Card className="p-8 bg-gray-800 border border-gray-700">
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-purple-400" />
                Security Analysis
              </h3>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

                      <span className={`text-lg font-bold ${strengthColor}`}>
                        {strengthText} ({strength}/100)
                      </span>
                    </div>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



=======

                      <div 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                        className={`h-3 rounded-full transition-all duration-300 ${getStrengthBarColor()}`}

                        style={{ width: `${strength}%` }}
                      />
                    </div>
                  </div>

                  {/* Security Checks */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Security Criteria</h4>
                    <div className="space-y-3">
                      {Object.entries(checks).map(([key, passed]) => (

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  {/* Security Checks */}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                            {key === 'length' && 'At least 8 characters'}
                            {key === 'uppercase' && 'Contains uppercase letter'}
                            {key === 'lowercase' && 'Contains lowercase letter'}
                            {key === 'numbers' && 'Contains number'}
                            {key === 'symbols' && 'Contains special character'}

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

=======
                      ))}
                    </div>
                  </div>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                        ))}
                      </div>;
                    </div>;
                  )}
                </div>
              ) : (

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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Privacy First</h3>
              <p className="text-gray-400">
                Your passwords are never stored or transmitted - analysis happens locally in your browser.

            </Card>
          </div>
        </div>
      </section>

                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />

                  Update passwords regularly
                </li>
              </ul>
            </Card>

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

                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />

                  Avoid writing passwords down
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

=======
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

              Follow these guidelines to create and maintain strong, secure;
              passwords for all your accounts.;
            </p>;
          </div>;

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

                  Update passwords regularly;
                </li>;
              </ul>;
            </Card>;

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

                  Avoid writing passwords down;
                </li>;
              </ul>;
            </Card>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-indigo-600 to-purple-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>

            Ready to Secure Your Passwords?
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          </h2>
          <p className='text-xl text-indigo-100 mb-8'>
            Join thousands of users who trust our password strength checker to
            improve their account security.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-indigo-600 hover:bg-gray-100'>;
              Get Started Today;
              <ArrowRight className='w-5 h-5 ml-2' />;
            </Button>;
            <Button
              href='/pricing'
              variant='outline'
              size='lg'
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

}
              View Pricing;
            </Button>;
          </div>;
        </div>;
      </section>;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
