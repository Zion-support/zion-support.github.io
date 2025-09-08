

export default function PasswordCheckerPage() {
  useEffect(() => {
    if (password) {
      analyzePassword(password)
    } else {
      resetAnalysis()
    }
    
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';

  AlertTriangle,;
  ArrowRight,;
} from 'lucide-react';import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';

} from 'lucide-react';import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';

import {
import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';


export default function PasswordCheckerPage() {;



  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [strengthText, setStrengthText] = useState('');
  const [strengthColor, setStrengthColor] = useState('');


    }
  AlertTriangle,;
  ArrowRight,;
} from 'lucide-react';import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';


import {
import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';

export default function PasswordCheckerPage() {;
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [strengthText, setStrengthText] = useState('');
  const [strengthColor, setStrengthColor] = useState('');


      analyzePassword(password);
      analyzePassword(password)
    } else {
      resetAnalysis()
    }
  }, [password]);



    setChecks(newChecks);
    // Calculate strength score,
let score = 0;
    score += newChecks.length ? 15 : 0;
    score += newChecks.uppercase ? 15 : 0;
    score += newChecks.lowercase ? 15 : 0;
    score += newChecks.numbers ? 15 : 0;
    score += newChecks.symbols ? 20 : 0;
    score += newChecks.noCommon ? 10 : 0;
    score += newChecks.noSequential ? 10 : 0;
    // Bonus for length;
    if (pass.length >= 12) score += 10;
    if (pass.length >= 16) score += 5;

    setStrength(score);
    // Set strength text and color,
if (score >= 90) {

      }

      setStrengthText('Very Strong');'
setStrengthColor('text-green-400');'
    } else if (score >= 70) {
      }
      setStrengthText('Strong');'
      setStrengthColor('text-green-400');'
    } else if (score >= 50) {;
      }
      setStrengthText('Moderate');'
      setStrengthColor('text-yellow-400');'
    } else if (score >= 30) {;
      }
      setStrengthText('Weak');'
      setStrengthColor('text-orange-400');'
    } else {;
      }
      setStrengthText('Very Weak');'
      setStrengthColor('text-red-400');'
    }
  }, [password]),

  const analyzePassword = (pass: string) => {
    const newChecks = {
      length: pass.length >= 8,
      uppercase: /[A-Z]/.test(pass),
      lowercase: /[a-z]/.test(pass),
      numbers: /\d/.test(pass),
      symbols: /[!@#$%^&*()_+\-=\[\]{},':'\\|,.<>\/?]/.test(pass);
      noCommon: !isCommonPassword(pass),
      noSequential: !hasSequentialChars(pass)
    };

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


      setStrengthColor('text-green-400')
    } else if (score >= 70) {
      setStrengthText('Strong');
      setStrengthText('Very Strong');
      setStrengthColor('text-green-400');
    } else if (score >= 70) {
      setStrengthText('Strong');
      setStrengthColor('text-green-400');
    } else if (score >= 50) {;
      setStrengthText('Moderate');
      setStrengthColor('text-yellow-400');
    } else if (score >= 30) {;
      setStrengthText('Weak');
      setStrengthColor('text-orange-400');
    } else {;
      setStrengthText('Very Weak');
      setStrengthColor('text-red-400');
    }

  };

  const isCommonPassword = (pass: string) => {
    const commonPasswords = [
      'password123456123456789qwertyabc123password123adminletmein', 'welcomemonkeydragonmasterhello'
    ];
    return commonPasswords.includes(pass.toLowerCase())
  };

  const hasSequentialChars = (pass: string) => {
    const sequences = ['123abcqweasdzxc789456'];
    return sequences.some(seq => pass.toLowerCase().includes(seq))
  };

  const generateSuggestions = (checks: any, pass: string) => {
    const suggestions: string[] = [];
    
    if (!checks.length) suggestions.push('Make your password at least 8 characters long');
    if (!checks.uppercase) suggestions.push('Add at least one uppercase letter (A-Z)');
    if (!checks.lowercase) suggestions.push('Add at least one lowercase letter (a-z)');
    if (!checks.numbers) suggestions.push('Add at least one number (0-9)');
    if (!checks.symbols) suggestions.push('Add at least one special character (!@#$%^&*)');

    if (!checks.noCommon) suggestions.push('Avoid common passwords like "password" or "123456"');
    if (!checks.noSequential) suggestions.push('Avoid sequential characters like "123" or "abc"');
    if (pass.length < 12) suggestions.push('Consider making your password 12+ characters for better security');
    if (pass.length < 16) suggestions.push('For maximum security, use 16+ characters');
    setSuggestions(suggestions)

  };


  const resetAnalysis = () => {
    setStrength(0);
    setStrengthText('');
    setStrengthColor('');
    setChecks({


    // Generate suggestions;
    generateSuggestions(newChecks, pass);

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
  }
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)


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
  }
  const getStrengthBarColor = () => {
    if (strength >= 90) return 'bg-green-500';
    if (strength >= 70) return 'bg-green-400';
    if (strength >= 50) return 'bg-yellow-400';
    if (strength >= 30) return 'bg-orange-400';


  };

  return (_<>
      <Head>
        <title>Password Strength Checker - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Check your password strength with our advanced security analyzer. Get detailed feedback and suggestions to create stronger, more secure passwords.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Password Strength Checker - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Advanced password strength analyzer with security recommendations." />
      </Head>

  return (





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

  return (
    <>
      <Head>
        <title>Password Strength Checker - Zion Tech Group</title>
<meta,
name='description''
          content='Check your password strength with our advanced security analyzer. Get detailed feedback and suggestions to create stronger, more secure passwords.'' />
        <meta,
property=''og': title''
          content='Password Strength Checker - Zion Tech Group'' />
        <meta,
property=''og':description''
          content='Advanced password strength analyzer with security recommendations.'' />
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
          <p className='text-xl text-indigo-200 max-w-4xl mx-auto leading-relaxed'>
            Analyze your password security with our advanced strength checker.
            Get detailed feedback, suggestions, and generate strong passwords to
            protect your accounts and data.          </p>      </Head>
    <>
      <Head>
        <title>Password Strength Checker - Zion Tech Group</title>
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
        <div className='max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 text-center'>'
          <div className='mb-8'>'
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-6'>'
              <Lock className='w-4 h-4 mr-2' />'
              Password Security & Analysis

              determine password strength and security.;
            </p>;
          </div>;

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;
            {/* Input Form */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>;
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>;
                <Lock className='w-6 h-6 mr-3 text-indigo-400' />;
                Password Analysis;
              </h3>;

              <div className='space-y-6'>;

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

<section className='py-20 bg-gray-900'>'
        <div className='max-w-6xl mx-auto px-4 "sm": px-6 "lg":px-8'>'
          <div className='text-center mb-16'>'
            <h2 className='text-3xl "sm":text-4xl font-bold text-white mb-6'>'
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


                          </div>


                <div className='bg-gray-900 p-6 rounded-lg border border-gray-700 text-center'>
                  <div className='text-6xl mb-4'>🔒</div>
                  <p className='text-gray-400'>
                    Enter a password above to see the security analysis and get personalized suggestions.
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

                  {/* Suggestions */}
                  {suggestions && suggestions.length > 0 && (;
                    <div>;
                      <h4 className='text-lg font-semibold text-white mb-3'>;
                        Suggestions;
                      </h4>;
                      <div className='space-y-2'>;
                        {suggestions && suggestions.map((suggestion, index) => (;
                          <div
                            key={index}
                            className='flex items-start space-x-3'>;
                            <AlertTriangle className='w-4 h-4 text-yellow-400 mt-0 && 0.5 flex-shrink-0' />;
                            <span className='text-sm text-yellow-300'>;
                              {suggestion}
                            </span>                          </div>                      <h4 className="text-lg font-semibold text-white mb-3">Suggestions</h4>;
                      <div className="space-y-2">;
                        {suggestions && suggestions.map((suggestion, index) => (;
                          <div key={index} className="flex items-start space-x-3">;
                            <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0 && 0.5 flex-shrink-0" />;
                            <span className="text-sm text-yellow-300">{suggestion}</span>;
                        ))}
                      </div>;
                    </div>;
                  )}
            </Card>
          </div>
        </div>
      </section>
                  Update passwords regularly
                </li>
              </ul>
            </Card>


            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-2xl font-bold text-white mb-4">Don'ts</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
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
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />

                  Avoid writing passwords down

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
