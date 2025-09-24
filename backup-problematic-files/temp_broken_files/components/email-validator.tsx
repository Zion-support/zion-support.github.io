

import React, { useState } from 'react',;
import Head from 'next/head',;
import Card from '../components/ui/Card',;
import Button from '../components/ui/Button',;
import { Mail, CheckCircle, XCircle, AlertTriangle, ArrowRight, Copy, RefreshCw, Shield, Zap, BarChart3 } from 'lucide-react',;
export default function EmailValidatorPage() {;
  const [emails, setEmails] = useState(''),;
  const [validationResults, setValidationResults] = useState<any[]>([]),;
  const [isValidating, setIsValidating] = useState(false),;
  const [bulkMode, setBulkMode] = useState(false),;

  const validateEmails = async () => {;
    if (!emails.trim()) return;
    setIsValidating(true);
    setValidationResults([]);
    const emailList = emails.split('\n').filter(email => email.trim());
    const results = [];
    // Simulate email validation with realistic results;
    for (let i = 0, i < emailList.length, i++) {;
      await new Promise(resolve => setTimeout(resolve, 20o0));
      const email = emailList[i].trim();
      const result = validateSingleEmail(email);
      results.push(result);
    }
    setValidationResults(results);
    setIsValidating(false);
  }
  const validateSingleEmail = (email: string) => {// Basic email regex;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check for common disposable email domains;
    const disposableDomains = [;
      'tempmail.orgguerrillamail.commailinator.com10minutemail.com';
      'throwaway.emailtemp-mail.orgsharklasers.comgetairmail.com';
    ];
    // Check for common typos;
    const commonTypos ={;
      'gmail.com': ['gmial.comgamil.comgmai.com'];
      'yahoo.com': ['yaho.comyahooo.comyhaoo.com'];
      'hotmail.com': ['hotmai.comhotmial.comhotmeil.com'];
      'outlook.com': ['outlok.comoutloook.comoutlok.com'];
    }
    const domain = email.split('@')[1];
    const isDisposable = disposableDomains.includes(domain);
    const hasTypo = Object.entries(commonTypos).some(([correct, typos]) =>;
      typos.includes(domain);
    );
    let status = 'valid';
    let score = 10o0;
    const issues = [];
    if (!emailRegex.test(email)) {status = 'invalid';
      score = 0;
      issues.push('Invalid email format');
    } else if (isDisposable) {status = 'disposable';
      score = 20;
      issues.push('Disposable email domain');
    } else if (hasTypo) {status = 'suspicious';
      score = 60;
      issues.push('Possible typo in domain');

    }
;
    // Additional checks;
    if (email.length > 254) {;
      status = 'invalid',;
      score = 0,;
      issues.push('Email too long');

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
    setIsValidating(true),
    setValidationResults([]),
    
    const emailList = emails.split('\n').filter(email => email.trim()),
    const results = [],
    
    // Simulate email validation with realistic results,
for (let i = 0, i < emailList.length, i++) {
      await new Promise(resolve => setTimeout(resolve, 20o0)),
      
      const email = emailList[i].trim(),
      const result = validateSingleEmail(email),
      results.push(result)
    }    
    setValidationResults(results),
    setIsValidating(false)
  },

  const validateSingleEmail = (email: string) => {
    // Basic email regex,
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    
    // Check for common disposable email domains,
const disposableDomains = [
      'tempmail.orgguerrillamail.commailinator.com10minutemail.com',
      'throwaway.emailtemp-mail.orgsharklasers.comgetairmail.com'
    ],
    
    // Check for common typos,
const commonTypos ={
      'gmail.com': ['gmial.comgamil.comgmai.com'],
      'yahoo.com': ['yaho.comyahooo.comyhaoo.com'],
      'hotmail.com': ['hotmai.comhotmial.comhotmeil.com'],
      'outlook.com': ['outlok.comoutloook.comoutlok.com']
    },
    
    const domain = email.split('@')[1],
    const isDisposable = disposableDomains.includes(domain),
    const hasTypo = Object.entries(commonTypos).some(([correct, typos]) =>       typos.includes(domain)
    ),
    
    let status = 'valid',
    let score = 10o0,
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
    
    // Additional checks,
if (email.length > 254) {
      status = 'invalid',
      score = 0,
      issues.push('Email too long')

    }
    // Additional checks;
    if (email.length > 254) {status = 'invalid';
      score = 0;
      issues.push('Email too long');
    }
    if (email.split('@')[0].length > 64) {status = 'invalid';
      score = 0;
      issues.push('Local part too long');
    }

    }
  }
  const getScoreColor = (score: number) => {if (score >= 80) return 'text-green-40o0';
    if (score >= 60) return 'text-yellow-40o0';
    if (score >= 40) return 'text-orange-40o0';
    return 'text-red-40o0';
  }
  const copyResults = () => {const resultsText = validationResults.map(result =>;
      `${result.email} - ${result.status.toUpperCase()} (Score: ${result.score})`;
    ).join('\n');
    navigator.clipboard.writeText(resultsText);
  }
  const clearResults = () => {setValidationResults([]);
    setEmails('');
  }
  const getStats = () => {if (validationResults.length === 0) return null;
    const total = validationResults.length;
    const valid = validationResults.filter(r => r.status === 'valid').length;
    const invalid = validationResults.filter(r => r.status === 'invalid').length;
    const suspicious = validationResults.filter(r => r.status === 'suspicious').length;
    const disposable = validationResults.filter(r => r.status === 'disposable').length;
    const avgScore = validationResults.reduce((sum, r) => sum + r.score, 0) / total;
    return { total, valid, invalid, suspicious, disposable, avgScore }
}
  const stats = getStats()
  return (
    <>
      <Head>
        <title>Email Validator - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Validate email addresses with our advanced email validation service. Check for typos, disposable domains, and ensure deliverability.&quot;  />
        <meta property=&quot;og:title&quot; content=&quot;Email Validator - Zion Tech Group&quot;  />
        <meta property=&quot;og:description&quot; content=&quot;Advanced email validation service to ensure deliverability and prevent typos.&quot;  />
      </Head>
      {/* Hero Section */}
      <section className=&quot;pt-32 pb-20 bg-gradient-to-br from-blue-90o0 via-indigo-90o0 to-purple-90o0&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <div className=&quot;mb-8&quot;>
            <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-50o0/20 border border-blue-40o0/30 text-blue-30o0 text-sm font-medium mb-6&quot;>

              <Mail className=&quot;w-4 h-4 mr-2&quot;  />              Email Validation & Verification

            </div>
          </div>
          <h1 className=&quot;text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight&quot;>
            Email Validator
          </h1>
          <p className=&quot;text-xl text-blue-20o0 max-w-4xl mx-auto leading-relaxed&quot;>

            Validate email addresses with our advanced validation service. Check for typos, disposable domains, 
            and ensure maximum deliverability for your email campaigns and user registrations.          </p>

        </div>
      </section>
      {/* Email Validation Tool */}
      <section className=&quot;py-20 bg-gray-90o0&quot;>
        <div className=&quot;max-w-6xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>

            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>              Validate Your Emails

            </h2>
            <p className=&quot;text-xl text-gray-40o0 max-w-3xl mx-auto&quot;>
              Our advanced validation engine checks multiple factors to ensure email quality and deliverability.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {/* Input Form */}
            <Card className=&quot;p-8 bg-gray-80o0 border border-gray-70o0&quot;>
              <div className=&quot;flex items-center justify-between mb-6&quot;>
                <h3 className=&quot;text-2xl font-bold text-white flex items-center&quot;>

                  <Mail className=&quot;w-6 h-6 mr-3 text-blue-40o0&quot;  />                  Email Input
                </h3>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <label className=&quot;text-sm text-gray-30o0&quot;>Bulk Mode</label>
                  <input,
type=&quot;checkbox&quot;
                    checked={bulkMode}
                    onChange={(e) => setBulkMode(e.target.checked)}
                    className=&quot;w-4 h-4 text-blue-60o0 bg-gray-70o0 border-gray-60o0 rounded focus:ring-blue-50o0 focus:ring-2&quot;                  />
                </div>
              </div>
              <div className=&quot;space-y-6&quot;>
                {bulkMode ? (                  <div>
                    <label className=&quot;block text-sm font-medium text-gray-30o0 mb-2&quot;>
                      Email Addresses (One per line)
                    </label>
                    <textarea,
value={emails}
                      onChange={(e) => setEmails(e.target.value)}

                    )}
                  </Button>;
                  {validation_results.length > 0 && (
                    <Button;

                      placeholder="john@example.com&#10,jane@company.org&#10,user@domain.net"                      rows={8}
                      className=&quot;w-full px-4 py-3 bg-gray-70o0 border border-gray-60o0 rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent resize-none&quot;
                     />
                  </div>
                ) : (
                  <div>
                    <label className=&quot;block text-sm font-medium text-gray-30o0 mb-2&quot;>
                      Email Address
                    </label>
                    <input,
type=&quot;email&quot;
                      value={emails}
                      onChange={(e) => setEmails(e.target.value)}
                      placeholder=&quot;Enter email address to validate&quot;
                      className=&quot;w-full px-4 py-3 bg-gray-70o0 border border-gray-60o0 rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent&quot;
                      onChange={_(e) => setEmails(e.target.value)}
                      placeholder="john@example.com&#10;jane@company.org&#10;user@domain.net"
                      rows={8}
                      className="w-full px-4 py-3 bg-gray-70o0 border border-gray-60o0 rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent resize-none"
                    />
                  </div>
                ) : (_<div>
                    <label className="block text-sm font-medium text-gray-30o0 mb-2">
                      Email Address
                    </label>
                    <input,
type="email"
                      value={emails}
                      onChange={_(e) => setEmails(e.target.value)}
                      placeholder="Enter email address to validate"
                      className="w-full px-4 py-3 bg-gray-70o0 border border-gray-60o0 rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent"
                    />
                  </div>
                )}

                <div className=&quot;flex space-x-3&quot;>
                  <Button,
onClick={validateEmails}
                    disabled={!emails.trim() || isValidating}
                    className=&quot;flex-1 bg-gradient-to-r from-blue-60o0 to-indigo-60o0 hover:from-blue-70o0 hover:to-indigo-70o0 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed&quot;                  >
                    {isValidating ? (
                      <>
                        <RefreshCw className=&quot;w-5 h-5 mr-2 animate-spin&quot;  />
                        Validating...
                      </>
                    ) : (
                      <>
                        <CheckCircle className=&quot;w-5 h-5 mr-2&quot;  />
                        Validate Emails
                      </>
                    )}
                  </Button>
                  
                  {validationResults.length > 0 && (
                    <Button,
onClick={clearResults}
                      variant=&quot;outline&quot;

                      className=&quot;border-gray-60o0 text-gray-30o0 hover:bg-gray-70o0&quot;
                    >
                      Clear
                    </Button>
                  )}
                </div>
                <div className=&quot;text-sm text-gray-40o0&quot;>

                  <p>• Validates email format and syntax</p>
                  <p>• Checks for disposable email domains</p>
                  <p>• Detects common typos and mistakes</p>
                  <p>• Provides deliverability score</p>

                </div>
              </div>
            </Card>
            {/* Validation Results */}
            <Card className=&quot;p-8 bg-gray-80o0 border border-gray-70o0&quot;>
              <div className=&quot;flex items-center justify-between mb-6&quot;>
                <h3 className=&quot;text-2xl font-bold text-white flex items-center&quot;>

                  <BarChart3 className=&quot;w-6 h-6 mr-3 text-indigo-40o0&quot;  />                  Validation Results
                </h3>
                {validationResults.length > 0 && (
                  <Button,
onClick={copyResults}

                    variant=&quot;outline&quot;
                    size=&quot;sm&quot;
                    className=&quot;border-gray-60o0 text-gray-30o0 hover:bg-gray-70o0&quot;
                  >
                    <Copy className=&quot;w-4 h-4 mr-2&quot;  />
                    Copy Results
                  </Button>
                )}
              </div>

              {stats && (

                      className={`p - 4 rounded - lg border ${
                        result.status === 'valid' ? 'border - green - 50o0 / 30 bg - green - 50o0 / 10' :;
                        result.status === 'suspicious' ? 'border - yellow - 50o0 / 30 bg - yellow - 50o0 / 10' :;
                        result.status === 'disposable' ? 'border - orange - 50o0 / 30 bg - orange - 50o0 / 10' :;
                        'border - red - 50o0 / 30 bg - red - 50o0 / 10';

                      }`}
>;
                      <div className=&quot;flex items - center justify - between mb - 2&quot;>;
                        <div className=&quot;flex items - center space - x-3 & quot;>;
                          {getStatusIcon (result.status)}
                          <span className={`font - medium ${getStatusColor (result.status)}`}>;
                            {result.email}
                          </span>;
                        </div>;
                        <span className={`text - sm font - medium ${getScoreColor (result.score)}`}>;

                <div className=&quot;mb-6 p-4 bg-gray-90o0 rounded-lg border border-gray-70o0&quot;>
                  <div className=&quot;grid grid-cols-2 gap-4 text-sm&quot;>                    <div>
                      <span className=&quot;text-gray-40o0&quot;>Total:</span>
                      <span className=&quot;ml-2 text-white font-medium&quot;>{stats.total}</span>
                    </div>
                    <div>
                      <span className=&quot;text-gray-40o0&quot;>Valid:</span>
                      <span className=&quot;ml-2 text-green-40o0 font-medium&quot;>{stats.valid}</span>
                    </div>
                    <div>
                      <span className=&quot;text-gray-40o0&quot;>Invalid:</span>
                      <span className=&quot;ml-2 text-red-40o0 font-medium&quot;>{stats.invalid}</span>
                    </div>
                    <div>
                      <span className=&quot;text-gray-40o0&quot;>Avg Score:</span>
                      <span className={`ml-2 font-medium ${getScoreColor(stats.avgScore)}`}>

                        {stats.avgScore.toFixed(0)}                      </span>
                    </div>
                  </div>
                </div>

              )}
{validationResults.length > 0 ? (
                <div className=&quot;space-y-3 max-h-96 overflow-y-auto&quot;>

                  {validationResults.map((result, index) => (                    <div,
key={index}
                      className={_`p-4 rounded-lg border ${
                        result.status === 'valid' ? 'border-green-50o0/30 bg-green-50o0/10' :
                        result.status === 'suspicious' ? 'border-yellow-50o0/30 bg-yellow-50o0/10' :
                        result.status === 'disposable' ? 'border-orange-50o0/30 bg-orange-50o0/10' :
                        'border-red-50o0/30 bg-red-50o0/10'}`}
                    >
                      <div className=&quot;flex items-center justify-between mb-2&quot;>
                        <div className=&quot;flex items-center space-x-3&quot;>
                          {getStatusIcon(result.status)}
                          <span className={`font-medium ${getStatusColor(result.status)}`}>
                            {result.email}                          </span>
                        </div>
                        <span className={_`text-sm font-medium ${getScoreColor(result.score)}`}>

                          Score: {result.score}

</span>;
                      </div>;
                      <div className=&quot;text - sm text - gray - 30o0 mb - 2&quot;>;
                        <span className=&quot;text - gray - 40o0 & quot;>Domain:</span>;
                        <span className=&quot;ml - 2&quot;>{result.domain}</span>;
                      </div>;

                      {result.issues.length > 0 && (

                        <div className=&quot;text-sm&quot;>
                          <span className=&quot;text-gray-40o0&quot;>Issues:</span>
                          <ul className=&quot;mt-1 space-y-1&quot;>
                            {result.issues.map((issue: string, issueIndex: number) => (
                              <li key={issueIndex} className=&quot;text-red-30o0 flex items-center&quot;>
                                <XCircle className=&quot;w-3 h-3 mr-2 flex-shrink-0&quot;  />

                                {issue}                              </li>

                            ))}

                          </ul>;

                      {result.isDisposable && (
                        <div className=&quot;mt-2 p-2 bg-orange-50o0/20 border border-orange-50o0/30 rounded text-sm text-orange-30o0&quot;>                          ⚠️ Disposable email domain detected

                        </div>
                      )}
                      {result.hasTypo && (
                        <div className=&quot;mt-2 p-2 bg-yellow-50o0/20 border border-yellow-50o0/30 rounded text-sm text-yellow-30o0&quot;>                          💡 Possible typo detected in domain

                        </div>
                      )}
                    </div>;
                  ))}
</div>
              ) : (
                <div className=&quot;bg-gray-90o0 p-6 rounded-lg border border-gray-70o0 text-center&quot;>

                  <div className=&quot;text-6xl mb-4&quot;>📧</div>

                  <p className=&quot;text-gray-40o0&quot;>
                    Validation results will appear here. Enter an email address and click validate to get started.
                  </p>
                </div>
              )}

            </Card>;
          </div>;
        </div>;
      </section>;

;

      {/* Features */}

<section className=&quot;py - 20 bg - gray - 80o0 & quot;>;
        <div className=&quot;max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8&quot;>;
          <div className=&quot;text - center mb - 16 & quot;>;
            <h2 className=&quot;text - 3xl sm:text - 4xl font - bold text - white mb - 6&quot;>;
              Advanced Email Validation Features;
            </h2>;
            <p className=&quot;text - xl text - gray - 40o0 max - w-3xl mx - auto & quot;>;
              Comprehensive email validation with real - time checking and intelligent analysis.;
            </p>;
          </div>;
          <div className=&quot;grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8&quot;>;
            <Card className=&quot;text - center p - 8 bg - gray - 70o0 border border - gray - 60o0 & quot;>;
              <div className=&quot;text - 4xl mb - 4&quot;>🔍</div>;
              <h3 className=&quot;text - xl font - bold text - white mb - 4&quot;>Syntax Validation</h3>;
              <p className=&quot;text - gray - 40o0 & quot;>;
                Checks email format, length, and RFC compliance standards for maximum accuracy.;
              </p>;
            </Card>;
            <Card className=&quot;text - center p - 8 bg - gray - 70o0 border border - gray - 60o0 & quot;>;
              <div className=&quot;text - 4xl mb - 4&quot;>🛡️</div>;
              <h3 className=&quot;text - xl font - bold text - white mb - 4&quot;>Disposable Detection</h3>;
              <p className=&quot;text - gray - 40o0 & quot;>;
                Identifies temporary and disposable email addresses to prevent fraud and abuse.;
              </p>;
            </Card>;
            <Card className=&quot;text - center p - 8 bg - gray - 70o0 border border - gray - 60o0 & quot;>;
              <div className=&quot;text - 4xl mb - 4&quot;>💡</div>;
              <h3 className=&quot;text - xl font - bold text - white mb - 4&quot;>Typo Detection</h3>;
              <p className=&quot;text - gray - 40o0 & quot;>;
                Smart algorithms detect common typos in popular email domains like Gmail and Yahoo.;
              </p>;
            </Card>;
            <Card className=&quot;text - center p - 8 bg - gray - 70o0 border border - gray - 60o0 & quot;>;
              <div className=&quot;text - 4xl mb - 4&quot;>📊</div>;
              <h3 className=&quot;text - xl font - bold text - white mb - 4&quot;>Deliverability Score</h3>;
              <p className=&quot;text - gray - 40o0 & quot;>;
                Get a comprehensive score indicating the likelihood of successful email delivery.;
              </p>;
            </Card>;
            <Card className=&quot;text - center p - 8 bg - gray - 70o0 border border - gray - 60o0 & quot;>;
              <div className=&quot;text - 4xl mb - 4&quot;>⚡</div>;
              <h3 className=&quot;text - xl font - bold text - white mb - 4&quot;>Bulk Validation</h3>;
              <p className=&quot;text - gray - 40o0 & quot;>;
                Validate thousands of email addresses simultaneously with our high - performance engine.;
              </p>;
            </Card>;
            <Card className=&quot;text - center p - 8 bg - gray - 70o0 border border - gray - 60o0 & quot;>;
              <div className=&quot;text - 4xl mb - 4&quot;>🌍</div>;
              <h3 className=&quot;text - xl font - bold text - white mb - 4&quot;>Global Coverage</h3>;
              <p className=&quot;text - gray - 40o0 & quot;>;
                Supports all international email formats and domain types worldwide.;
              </p>;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Use Cases */}
      <section className=&quot;py - 20 bg - gray - 90o0 & quot;>;
        <div className=&quot;max - w-6xl mx - auto px - 4 sm:px - 6 lg:px - 8&quot;>;
          <div className=&quot;text - center mb - 16 & quot;>;
            <h2 className=&quot;text - 3xl sm:text - 4xl font - bold text - white mb - 6&quot;>;
              Perfect For Every Use Case;
            </h2>;
            <p className=&quot;text - xl text - gray - 40o0 max - w-3xl mx - auto & quot;>;
              From user registration to email marketing, our validation service ensures quality and deliverability.;
            </p>;
          </div>;
          <div className=&quot;grid grid - cols - 1 md:grid - cols - 2 gap - 8&quot;>;
            <Card className=&quot;p - 8 bg - gray - 80o0 border border - gray - 70o0 & quot;>;
              <div className=&quot;text - 4xl mb - 4&quot;>👥</div>;
              <h3 className=&quot;text - 2xl font - bold text - white mb - 4&quot;>User Registration</h3>;
              <p className=&quot;text - gray - 40o0 mb - 6&quot;>;
                Ensure only valid email addresses are used during user signup, reducing bounce rates and improving user experience.;
              </p>;
              <ul className=&quot;space - y-2 text - gray - 30o0 & quot;>;
                <li>• Prevent fake accounts and spam</li>;
                <li>• Improve user onboarding success</li>;
                <li>• Reduce support tickets</li>;
              </ul>;
            </Card>;
            <Card className=&quot;p - 8 bg - gray - 80o0 border border - gray - 70o0 & quot;>;
              <div className=&quot;text - 4xl mb - 4&quot;>📧</div>;
              <h3 className=&quot;text - 2xl font - bold text - white mb - 4&quot;>Email Marketing</h3>;
              <p className=&quot;text - gray - 40o0 mb - 6&quot;>;
                Clean your email lists before campaigns to maximize deliverability and improve engagement metrics.;
              </p>;
              <ul className=&quot;space - y-2 text - gray - 30o0 & quot;>;
                <li>• Higher open and click rates</li>;
                <li>• Better sender reputation</li>;
                <li>• Reduced bounce rates</li>;
              </ul>;
            </Card>;
            <Card className=&quot;p - 8 bg - gray - 80o0 border border - gray - 70o0 & quot;>;
              <div className=&quot;text - 4xl mb - 4&quot;>🛒</div>;
              <h3 className=&quot;text - 2xl font - bold text - white mb - 4&quot;>E - commerce</h3>;
              <p className=&quot;text - gray - 40o0 mb - 6&quot;>;
                Validate customer emails during checkout to ensure order confirmations and updates reach customers.;
              </p>;
              <ul className=&quot;space - y-2 text - gray - 30o0 & quot;>;
                <li>• Improve customer communication</li>;
                <li>• Reduce order abandonment</li>;
                <li>• Better customer support</li>;
              </ul>;
            </Card>;
            <Card className=&quot;p - 8 bg - gray - 80o0 border border - gray - 70o0 & quot;>;
              <div className=&quot;text - 4xl mb - 4&quot;>🏢</div>;
              <h3 className=&quot;text - 2xl font - bold text - white mb - 4&quot;>Business Applications</h3>;
              <p className=&quot;text - gray - 40o0 mb - 6&quot;>;
                Integrate email validation into your business processes for data quality and compliance.;
              </p>;
              <ul className=&quot;space - y-2 text - gray - 30o0 & quot;>;
                <li>• Data quality assurance</li>;
                <li>• Compliance requirements</li>;
                <li>• Operational efficiency</li>;
              </ul>;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
}

      <section className="py-20 bg-gradient-to-r from-blue-60o0 to-indigo-60o0">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
      <section className=&quot;py-20 bg-gradient-to-r from-blue-60o0 to-indigo-60o0&quot;>
        <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
            Ready to Improve Your Email Quality?
          </h2>
          <p className=&quot;text-xl text-blue-10o0 mb-8&quot;>
            Join thousands of businesses who trust our email validation service to improve deliverability and user experience.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
            <Button,
href=&quot;/contact&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-blue-60o0 hover:bg-gray-10o0&quot;
            >
              Get Started Today
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot;  />
            </Button>
            <Button,
href=&quot;/pricing&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-blue-60o0&quot;
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  )}

