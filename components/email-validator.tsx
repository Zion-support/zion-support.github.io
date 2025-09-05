<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import { Mail, CheckCircle, XCircle, AlertTriangle, ArrowRight, Copy, RefreshCw, Shield, Zap, BarChart3 } from 'lucide-react',

export default function EmailValidatorPage() {
  const [emails, setEmails] = useState(''),
  const [validationResults, setValidationResults] = useState<any[]>([]),
  const [isValidating, setIsValidating] = useState(false),
  const [bulkMode, setBulkMode] = useState(false),

  const validateEmails = async () => {
    if (!emails.trim()) return,
=======
import React, {_useState} from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function EmailValidatorPage() {_const [emails, _setEmails] = useState('');
  const [validationResults, _setValidationResults] = useState<any[]>([]);
  const [isValidating, _setIsValidating] = useState(false);
  const [bulkMode, _setBulkMode] = useState(false);

  const _validateEmails = async () => {
    if (!emails.trim()) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsValidating(true),
    setValidationResults([]),
    
<<<<<<< HEAD
    const emailList = emails.split('\n').filter(email => email.trim()),
    const results = [],
    
    // Simulate email validation with realistic results
    for (let i = 0, i < emailList.length, i++) {
      await new Promise(resolve => setTimeout(resolve, 200)),
      
      const email = emailList[i].trim(),
      const result = validateSingleEmail(email),
      results.push(result)
    }
=======
    const _emailList = emails.split('\n').filter(email => email.trim());
    const _results = [];
    
    // Simulate email validation with realistic results
    for (let i = 0; i < emailList.length; i++) {
      await new Promise(resolve => setTimeout(resolve, _200));
      
      const _email = emailList[i].trim();
      const _result = validateSingleEmail(email);
      results.push(result);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setValidationResults(results),
    setIsValidating(false)
  },

<<<<<<< HEAD
  const validateSingleEmail = (email: string) => {
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    
    // Check for common disposable email domains
    const disposableDomains = [
      'tempmail.orgguerrillamail.commailinator.com10minutemail.com',
      'throwaway.emailtemp-mail.orgsharklasers.comgetairmail.com'
    ],
    
    // Check for common typos
    const commonTypos = {
      'gmail.com': ['gmial.comgamil.comgmai.com'],
      'yahoo.com': ['yaho.comyahooo.comyhaoo.com'],
      'hotmail.com': ['hotmai.comhotmial.comhotmeil.com'],
      'outlook.com': ['outlok.comoutloook.comoutlok.com']
    },
    
    const domain = email.split('@')[1],
    const isDisposable = disposableDomains.includes(domain),
    const hasTypo = Object.entries(commonTypos).some(([correct, typos]) => 
=======
  const _validateSingleEmail = (_email: string) => {_// Basic email regex
    const _emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check for common disposable email domains
    const _disposableDomains = [
      'tempmail.org', _'guerrillamail.com', _'mailinator.com', _'10minutemail.com', _'throwaway.email', _'temp-mail.org', _'sharklasers.com', _'getairmail.com'
    ];
    
    // Check for common typos
    const _commonTypos = {
      'gmail.com': ['gmial.com', _'gamil.com', _'gmai.com'], _'yahoo.com': ['yaho.com', _'yahooo.com', _'yhaoo.com'], _'hotmail.com': ['hotmai.com', _'hotmial.com', _'hotmeil.com'], _'outlook.com': ['outlok.com', _'outloook.com', _'outlok.com']};
    
    const _domain = email.split('@')[1];
    const _isDisposable = disposableDomains.includes(domain);
    const _hasTypo = Object.entries(commonTypos).some(_([correct, _typos]) => 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      typos.includes(domain)
    ),
    
<<<<<<< HEAD
    let status = 'valid',
    let score = 100,
    const issues = [],
    
    if (!emailRegex.test(email)) {
      status = 'invalid',
      score = 0,
      issues.push('Invalid email format')
    } else if (isDisposable) {
      status = 'disposable',
      score = 20,
      issues.push('Disposable email domain')
    } else if (hasTypo) {
      status = 'suspicious',
      score = 60,
      issues.push('Possible typo in domain')
    }
    
    // Additional checks
    if (email.length > 254) {
      status = 'invalid',
      score = 0,
      issues.push('Email too long')
    }
    
    if (email.split('@')[0].length > 64) {
      status = 'invalid',
      score = 0,
      issues.push('Local part too long')
    }
    
    return {
      email,
      status,
      score,
      issues,
      domain,
      isDisposable,
      hasTypo,
      timestamp: new Date().toLocaleTimeString()
    }
  },
=======
    let _status = 'valid';
    let _score = 100;
    let _issues = [];
    
    if (!emailRegex.test(email)) {_status = 'invalid';
      score = 0;
      issues.push('Invalid email format');} else if (isDisposable) {_status = 'disposable';
      score = 20;
      issues.push('Disposable email domain');} else if (hasTypo) {_status = 'suspicious';
      score = 60;
      issues.push('Possible typo in domain');}
    
    // Additional checks
    if (email.length > 254) {_status = 'invalid';
      score = 0;
      issues.push('Email too long');}
    
    if (email.split('@')[0].length > 64) {_status = 'invalid';
      score = 0;
      issues.push('Local part too long');}
    
    return {_email, _status, _score, _issues, _domain, _isDisposable, _hasTypo, _timestamp: new Date().toLocaleTimeString()};
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _getStatusIcon = (_status: string) => {_switch (status) {
      case 'valid':
<<<<<<< HEAD
        return <CheckCircle className="w-5 h-5 text-green-400" />,
      case 'suspicious':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />,
      case 'disposable':
        return <XCircle className="w-5 h-5 text-orange-400" />,
      case 'invalid':
        return <XCircle className="w-5 h-5 text-red-400" />,
      default:
<<<<<<< HEAD
        return <AlertTriangle className="w-5 h-5 text-gray-400" />
=======
        return <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />;
      case 'suspicious':
        return <AlertTriangle className=&quot;w-5 h-5 text-yellow-400&quot; />;
      case 'disposable':
        return <XCircle className=&quot;w-5 h-5 text-orange-400&quot; />;
      case 'invalid':
        return <XCircle className=&quot;w-5 h-5 text-red-400&quot; />;
      default:
        return <AlertTriangle className=&quot;w-5 h-5 text-gray-400&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
=======
        return <AlertTriangle className="w-5 h-5 text-gray-400" />;}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _getStatusColor = (_status: string) => {_switch (status) {
      case 'valid':
        return 'text-green-400',
      case 'suspicious':
        return 'text-yellow-400',
      case 'disposable':
        return 'text-orange-400',
      case 'invalid':
        return 'text-red-400',
      default:
<<<<<<< HEAD
        return 'text-gray-400'
    }
  },

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400',
    if (score >= 60) return 'text-yellow-400',
    if (score >= 40) return 'text-orange-400',
    return 'text-red-400'
  },

  const copyResults = () => {
    const resultsText = validationResults.map(result => 
      `${result.email} - ${result.status.toUpperCase()} (Score: ${result.score})`
    ).join('\n'),
    navigator.clipboard.writeText(resultsText)
  },

  const clearResults = () => {
    setValidationResults([]),
    setEmails('')
  },

  const getStats = () => {
    if (validationResults.length === 0) return null,
    
    const total = validationResults.length,
    const valid = validationResults.filter(r => r.status === 'valid').length,
    const invalid = validationResults.filter(r => r.status === 'invalid').length,
    const suspicious = validationResults.filter(r => r.status === 'suspicious').length,
    const disposable = validationResults.filter(r => r.status === 'disposable').length,
    const avgScore = validationResults.reduce((sum, r) => sum + r.score, 0) / total,
    
    return { total, valid, invalid, suspicious, disposable, avgScore }
  },

  const stats = getStats(),

  return (
    <>
      <Head>
        <title>Email Validator - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Validate email addresses with our advanced email validation service. Check for typos, disposable domains, and ensure deliverability.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Email Validator - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Advanced email validation service to ensure deliverability and prevent typos.&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;pt-32 pb-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <div className=&quot;mb-8&quot;>
            <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6&quot;>
              <Mail className=&quot;w-4 h-4 mr-2&quot; />
=======
        return 'text-gray-400';}
  };

  const _getScoreColor = (_score: number) => {_if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    if (score >= 40) return 'text-orange-400';
    return 'text-red-400';};

  const _copyResults = () => {_const _resultsText = validationResults.map(result => 
      `${result.email} - ${_result.status.toUpperCase()} (Score: ${_result.score})`
    ).join('\n');
    navigator.clipboard.writeText(resultsText);
  };

  const _clearResults = () => {_setValidationResults([]);
    setEmails('');};

  const _getStats = () => {_if (validationResults.length === 0) return null;
    
    const _total = validationResults.length;
    const _valid = validationResults.filter(r => r.status === 'valid').length;
    const _invalid = validationResults.filter(r => r.status === 'invalid').length;
    const _suspicious = validationResults.filter(r => r.status === 'suspicious').length;
    const _disposable = validationResults.filter(r => r.status === 'disposable').length;
    const _avgScore = validationResults.reduce(_(sum, _r) => sum + r.score, _0) / total;
    
    return { total, _valid, _invalid, _suspicious, _disposable, _avgScore};
  };

  const _stats = getStats();

  return (_<>
      <Head>
        <title>Email Validator - Zion Tech Group</title>
        <meta name="description" content="Validate email addresses with our advanced email validation service. Check for typos, _disposable domains, _and ensure deliverability." />
        <meta property="og:title" content="Email Validator - Zion Tech Group" />
        <meta property="og:description" content="Advanced email validation service to ensure deliverability and prevent typos." />
      </Head>

      {_/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6">
              <Mail className="w-4 h-4 mr-2" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Email Validation & Verification
            </div>
          </div>
          <h1 className=&quot;text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight&quot;>
            Email Validator
          </h1>
<<<<<<< HEAD
          <p className=&quot;text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed&quot;>
            Validate email addresses with our advanced validation service. Check for typos, disposable domains, 
            and ensure maximum deliverability for your email campaigns and user registrations.
=======
          <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Validate email addresses with our advanced validation service. Check for typos, _disposable domains, _and ensure maximum deliverability for your email campaigns and user registrations.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </p>
        </div>
      </section>

<<<<<<< HEAD
      {/* Email Validation Tool */}
      <section className=&quot;py-20 bg-gray-900&quot;>
        <div className=&quot;max-w-6xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
=======
      {_/* Email Validation Tool */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Validate Your Emails
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Our advanced validation engine checks multiple factors to ensure email quality and deliverability.
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {/* Input Form */}
            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>
              <div className=&quot;flex items-center justify-between mb-6&quot;>
                <h3 className=&quot;text-2xl font-bold text-white flex items-center&quot;>
                  <Mail className=&quot;w-6 h-6 mr-3 text-blue-400&quot; />
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_/* Input Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-blue-400" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  Email Input
                </h3>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <label className=&quot;text-sm text-gray-300&quot;>Bulk Mode</label>
                  <input
<<<<<<< HEAD
                    type=&quot;checkbox&quot;
                    checked={bulkMode}
                    onChange={(e) => setBulkMode(e.target.checked)}
                    className=&quot;w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2&quot;
=======
                    type="checkbox"
                    checked={_bulkMode}
                    onChange={_(e) => setBulkMode(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </div>
              </div>

<<<<<<< HEAD
              <div className=&quot;space-y-6&quot;>
                {bulkMode ? (
=======
              <div className="space-y-6">
                {_bulkMode ? (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <div>
                    <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                      Email Addresses (One per line)
                    </label>
                    <textarea
                      value={emails}
<<<<<<< HEAD
                      onChange={(e) => setEmails(e.target.value)}
<<<<<<< HEAD
                      placeholder="john@example.com&#10,jane@company.org&#10,user@domain.net"
=======
                      placeholder=&quot;john@example.com&#10;jane@company.org&#10;user@domain.net&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                      rows={8}
                      className=&quot;w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none&quot;
                    />
                  </div>
                ) : (
                  <div>
                    <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                      Email Address
                    </label>
                    <input
                      type=&quot;email&quot;
                      value={emails}
                      onChange={(e) => setEmails(e.target.value)}
                      placeholder=&quot;Enter email address to validate&quot;
                      className=&quot;w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
=======
                      onChange={_(_e) => setEmails(e.target.value)}
                      placeholder="john@example.com&#10;jane@company.org&#10;user@domain.net"
                      rows={_8}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                ) : (_<div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={_emails}
                      onChange={_(e) => setEmails(e.target.value)}
                      placeholder="Enter email address to validate"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  </div>
                )}

                <div className=&quot;flex space-x-3&quot;>
                  <Button
<<<<<<< HEAD
                    onClick={validateEmails}
                    disabled={!emails.trim() || isValidating}
                    className=&quot;flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed&quot;
=======
                    onClick={_validateEmails}
                    disabled={_!emails.trim() || isValidating}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    {_isValidating ? (
                      <>
                        <RefreshCw className=&quot;w-5 h-5 mr-2 animate-spin&quot; />
                        Validating...
                      </>
                    ) : (
                      <>
                        <CheckCircle className=&quot;w-5 h-5 mr-2&quot; />
                        Validate Emails
                      </>
                    )}
                  </Button>
                  
                  {_validationResults.length > 0 && (
                    <Button
                      onClick={clearResults}
                      variant=&quot;outline&quot;
                      className=&quot;border-gray-600 text-gray-300 hover:bg-gray-700&quot;
                    >
                      Clear
                    </Button>
                  )}
                </div>

                <div className=&quot;text-sm text-gray-400&quot;>
                  <p>• Validates email format and syntax</p>
                  <p>• Checks for disposable email domains</p>
                  <p>• Detects common typos and mistakes</p>
                  <p>• Provides deliverability score</p>
                </div>
              </div>
            </Card>

<<<<<<< HEAD
            {/* Validation Results */}
            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>
              <div className=&quot;flex items-center justify-between mb-6&quot;>
                <h3 className=&quot;text-2xl font-bold text-white flex items-center&quot;>
                  <BarChart3 className=&quot;w-6 h-6 mr-3 text-indigo-400&quot; />
=======
            {_/* Validation Results */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-indigo-400" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  Validation Results
                </h3>
                {_validationResults.length > 0 && (
                  <Button
                    onClick={copyResults}
                    variant=&quot;outline&quot;
                    size=&quot;sm&quot;
                    className=&quot;border-gray-600 text-gray-300 hover:bg-gray-700&quot;
                  >
                    <Copy className=&quot;w-4 h-4 mr-2&quot; />
                    Copy Results
                  </Button>
                )}
              </div>

<<<<<<< HEAD
              {stats && (
                <div className=&quot;mb-6 p-4 bg-gray-900 rounded-lg border border-gray-700&quot;>
                  <div className=&quot;grid grid-cols-2 gap-4 text-sm&quot;>
=======
              {_stats && (
                <div className="mb-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="grid grid-cols-2 gap-4 text-sm">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <div>
                      <span className=&quot;text-gray-400&quot;>Total:</span>
                      <span className=&quot;ml-2 text-white font-medium&quot;>{stats.total}</span>
                    </div>
                    <div>
<<<<<<< HEAD
                      <span className=&quot;text-gray-400&quot;>Valid:</span>
                      <span className=&quot;ml-2 text-green-400 font-medium&quot;>{stats.valid}</span>
                    </div>
                    <div>
                      <span className=&quot;text-gray-400&quot;>Invalid:</span>
                      <span className=&quot;ml-2 text-red-400 font-medium&quot;>{stats.invalid}</span>
                    </div>
                    <div>
                      <span className=&quot;text-gray-400&quot;>Avg Score:</span>
                      <span className={`ml-2 font-medium ${getScoreColor(stats.avgScore)}`}>
                        {stats.avgScore.toFixed(0)}
=======
                      <span className="text-gray-400">Valid:</span>
                      <span className="ml-2 text-green-400 font-medium">{_stats.valid}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Invalid:</span>
                      <span className="ml-2 text-red-400 font-medium">{_stats.invalid}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Avg Score:</span>
                      <span className={_`ml-2 font-medium ${getScoreColor(stats.avgScore)}`}>
                        {_stats.avgScore.toFixed(0)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </span>
                    </div>
                  </div>
                </div>
              )}

<<<<<<< HEAD
              {validationResults.length > 0 ? (
                <div className=&quot;space-y-3 max-h-96 overflow-y-auto&quot;>
                  {validationResults.map((result, index) => (
=======
              {_validationResults.length > 0 ? (_<div className="space-y-3 max-h-96 overflow-y-auto">
                  {validationResults.map((result, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <div
                      key={index}
                      className={_`p-4 rounded-lg border ${
                        result.status === 'valid' ? 'border-green-500/30 bg-green-500/10' :
                        result.status === 'suspicious' ? 'border-yellow-500/30 bg-yellow-500/10' :
                        result.status === 'disposable' ? 'border-orange-500/30 bg-orange-500/10' :
                        'border-red-500/30 bg-red-500/10'}`}
                    >
<<<<<<< HEAD
                      <div className=&quot;flex items-center justify-between mb-2&quot;>
                        <div className=&quot;flex items-center space-x-3&quot;>
                          {getStatusIcon(result.status)}
                          <span className={`font-medium ${getStatusColor(result.status)}`}>
                            {result.email}
=======
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          {_getStatusIcon(result.status)}
                          <span className={_`font-medium ${getStatusColor(result.status)}`}>
                            {_result.email}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </span>
                        </div>
                        <span className={_`text-sm font-medium ${getScoreColor(result.score)}`}>
                          Score: {_result.score}
                        </span>
                      </div>
                      
<<<<<<< HEAD
                      <div className=&quot;text-sm text-gray-300 mb-2&quot;>
                        <span className=&quot;text-gray-400&quot;>Domain:</span>
                        <span className=&quot;ml-2&quot;>{result.domain}</span>
                      </div>

                      {result.issues.length > 0 && (
                        <div className=&quot;text-sm&quot;>
                          <span className=&quot;text-gray-400&quot;>Issues:</span>
                          <ul className=&quot;mt-1 space-y-1&quot;>
                            {result.issues.map((issue: string, issueIndex: number) => (
                              <li key={issueIndex} className=&quot;text-red-300 flex items-center&quot;>
                                <XCircle className=&quot;w-3 h-3 mr-2 flex-shrink-0&quot; />
                                {issue}
=======
                      <div className="text-sm text-gray-300 mb-2">
                        <span className="text-gray-400">Domain:</span>
                        <span className="ml-2">{_result.domain}</span>
                      </div>

                      {_result.issues.length > 0 && (_<div className="text-sm">
                          <span className="text-gray-400">Issues:</span>
                          <ul className="mt-1 space-y-1">
                            {result.issues.map((issue: string, _issueIndex: number) => (
                              <li key={issueIndex} className="text-red-300 flex items-center">
                                <XCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                                {_issue}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

<<<<<<< HEAD
                      {result.isDisposable && (
                        <div className=&quot;mt-2 p-2 bg-orange-500/20 border border-orange-500/30 rounded text-sm text-orange-300&quot;>
=======
                      {_result.isDisposable && (
                        <div className="mt-2 p-2 bg-orange-500/20 border border-orange-500/30 rounded text-sm text-orange-300">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          ⚠️ Disposable email domain detected
                        </div>
                      )}

<<<<<<< HEAD
                      {result.hasTypo && (
                        <div className=&quot;mt-2 p-2 bg-yellow-500/20 border border-yellow-500/30 rounded text-sm text-yellow-300&quot;>
=======
                      {_result.hasTypo && (
                        <div className="mt-2 p-2 bg-yellow-500/20 border border-yellow-500/30 rounded text-sm text-yellow-300">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          💡 Possible typo detected in domain
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className=&quot;bg-gray-900 p-6 rounded-lg border border-gray-700 text-center&quot;>
                  <div className=&quot;text-6xl mb-4&quot;>📧</div>
                  <p className=&quot;text-gray-400&quot;>
                    Validation results will appear here. Enter an email address and click validate to get started.
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features */}
      <section className=&quot;py-20 bg-gray-800&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
=======
      {_/* Features */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Advanced Email Validation Features
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Comprehensive email validation with real-time checking and intelligent analysis.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🔍</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Syntax Validation</h3>
              <p className=&quot;text-gray-400&quot;>
                Checks email format, length, and RFC compliance standards for maximum accuracy.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🛡️</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Disposable Detection</h3>
              <p className=&quot;text-gray-400&quot;>
                Identifies temporary and disposable email addresses to prevent fraud and abuse.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>💡</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Typo Detection</h3>
              <p className=&quot;text-gray-400&quot;>
                Smart algorithms detect common typos in popular email domains like Gmail and Yahoo.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>📊</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Deliverability Score</h3>
              <p className=&quot;text-gray-400&quot;>
                Get a comprehensive score indicating the likelihood of successful email delivery.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>⚡</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Bulk Validation</h3>
              <p className=&quot;text-gray-400&quot;>
                Validate thousands of email addresses simultaneously with our high-performance engine.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🌍</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Global Coverage</h3>
              <p className=&quot;text-gray-400&quot;>
                Supports all international email formats and domain types worldwide.
              </p>
            </Card>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Use Cases */}
      <section className=&quot;py-20 bg-gray-900&quot;>
        <div className=&quot;max-w-6xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
=======
      {_/* Use Cases */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Perfect For Every Use Case
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              From user registration to email marketing, our validation service ensures quality and deliverability.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>
              <div className=&quot;text-4xl mb-4&quot;>👥</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>User Registration</h3>
              <p className=&quot;text-gray-400 mb-6&quot;>
                Ensure only valid email addresses are used during user signup, reducing bounce rates and improving user experience.
              </p>
              <ul className=&quot;space-y-2 text-gray-300&quot;>
                <li>• Prevent fake accounts and spam</li>
                <li>• Improve user onboarding success</li>
                <li>• Reduce support tickets</li>
              </ul>
            </Card>

            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>
              <div className=&quot;text-4xl mb-4&quot;>📧</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Email Marketing</h3>
              <p className=&quot;text-gray-400 mb-6&quot;>
                Clean your email lists before campaigns to maximize deliverability and improve engagement metrics.
              </p>
              <ul className=&quot;space-y-2 text-gray-300&quot;>
                <li>• Higher open and click rates</li>
                <li>• Better sender reputation</li>
                <li>• Reduced bounce rates</li>
              </ul>
            </Card>

            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🛒</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>E-commerce</h3>
              <p className=&quot;text-gray-400 mb-6&quot;>
                Validate customer emails during checkout to ensure order confirmations and updates reach customers.
              </p>
              <ul className=&quot;space-y-2 text-gray-300&quot;>
                <li>• Improve customer communication</li>
                <li>• Reduce order abandonment</li>
                <li>• Better customer support</li>
              </ul>
            </Card>

            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🏢</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Business Applications</h3>
              <p className=&quot;text-gray-400 mb-6&quot;>
                Integrate email validation into your business processes for data quality and compliance.
              </p>
              <ul className=&quot;space-y-2 text-gray-300&quot;>
                <li>• Data quality assurance</li>
                <li>• Compliance requirements</li>
                <li>• Operational efficiency</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
<<<<<<< HEAD
=======
      {_/* CTA Section */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
=======
      <section className=&quot;py-20 bg-gradient-to-r from-blue-600 to-indigo-600&quot;>
        <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            Ready to Improve Your Email Quality?
          </h2>
          <p className=&quot;text-xl text-blue-100 mb-8&quot;>
            Join thousands of businesses who trust our email validation service to improve deliverability and user experience.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
            <Button
              href=&quot;/contact&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-blue-600 hover:bg-gray-100&quot;
            >
              Get Started Today
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;/pricing&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-blue-600&quot;
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}