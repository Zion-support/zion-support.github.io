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
  useEffect(() => {
    if (password) {
      analyzePassword(password)
    } else {
      resetAnalysis()
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
      return <div>Something went wrong.</div>;    }
    
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';

  AlertTriangle,;
  ArrowRight,;
} from 'lucide-react';import { Lock, Shield, Eye, EyeOff, Copy, RefreshCw, CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';


export default function PasswordCheckerPage() {;



  });
  const [suggestions, setSuggestions] = useState<string[]>([]),
  const [generatedPassword, setGeneratedPassword] = useState('');
  useEffect(() => {
    if (password) {


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
    if (!checks.symbols) suggestions.push('Add at least one special character (!@#$%^&*)');    if (!checks.noCommon) suggestions.push('Avoid common passwords like "password" or "123456"');
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
      length: false,
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,

      no_sequential: false,
      no_common: false,
      no_sequential: false,
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
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let result = '';
    

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

  return (



            suggestions, and generate strong passwords to protect your accounts and data.
          </p>
        </div>
      </section>
      {/* Password Checker Tool */}
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
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;
            {/* Input Form */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>;
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center'>;
                <Lock className='w-6 h-6 mr-3 text-indigo-400' />;
                Password Analysis;
              </h3>;
              <div className='space-y-6'>;

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
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Check Your Password Strength

                      {generatedPassword}
                    </div>;
                  </div>;
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

                    </div>
                  </div>
                )}


                <div className="text-sm text-gray-400">

                      {generatedPassword}

                    </div>
                  </div>
                )}
                <div className='text-sm text-gray-400'>                  <p>• Real-time strength analysis</p>                <div className="text-sm text-gray-400">
                  <p>• Real-time strength analysis</p>
                  <p>• Multiple security criteria</p>
                  <p>• Detailed feedback and suggestions</p>
                  <p>• Strong password generator</p>
                </div>
              </div>
            </Card>
            {/* Strength Analysis */}
            <Card className="p-8 bg-gray-800 border border-gray-700">

            <Card className="p-8 bg-gray-800 border border-gray-700">

              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-purple-400" />
                Security Analysis
              </h3>

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


                            className={`text-sm ${passed ? 'text-green-400' : 'text-red-400'}`}

                          >                            {key === 'length' && 'At least 8 characters'}


                  {/* Security Checks */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Security Criteria</h4>
                    <div className="space-y-3">
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
                          >                            {key === 'length' && 'At least 8 characters'}                      {Object.entries(checks).map(([key, passed]) => (
                        <div key={key} className="flex items-center space-x-3">
                          {getCheckIcon(passed)}
                          <span className={`text-sm ${passed ? 'text-green-400' : 'text-red-400'}`}>
                          >                            {key === 'length' && 'At least 8 characters'}

                            {key === 'uppercase' && 'Contains uppercase letter'}
                            {key === 'lowercase' && 'Contains lowercase letter'}
                            {key === 'numbers' && 'Contains number'}
                            {key === 'symbols' && 'Contains special character'}
                      ))}
                    </div>
                  </div>




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
                    </div>;
                  </div>;





                  {/* Suggestions */}



                            </span>                          </div>

                          </div>


                      </div>;
                    </div>;
                  )}


              )}





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

              </p>

              </p>

            </Card>
          </div>
        </div>
      </section>
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

            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-2xl font-bold text-white mb-4">Don'ts</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                  Don't use personal information (names, birthdays)
              View Pricing;
            </Button>;
          </div>;
        </div>;
      </section>;


  );
}
    </>);
}
