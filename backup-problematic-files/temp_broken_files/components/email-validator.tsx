import React, { useState } from 'react',import Head from 'next/head',import Card from '../components/ui/Card',import Button from '../components/ui/Button',import { Mail, CheckCircle, XCircle, AlertTriangle, ArrowRight, Copy, RefreshCw, Shield, Zap, BarChart3 } from 'lucide-react',export default function EmailValidatorPage() {const [emails, setEmails] = useState(''),const [validationResults, setValidationResults] = useState<any[]>([]),const [isValidating, setIsValidating] = useState(false),const [bulkMode, setBulkMode] = useState(false),const validateEmails = async () => {if (!emails.trim()) return;
    setIsValidating(true)setValidationResults([])const emailList = emails.split('\n').filter(email => email.trim())const results = [];
    // Simulate email validation with realistic results;
    for (let i = 0, i < emailList.length, i++) {await new Promise(resolve => setTimeout(resolve, 200))const email = emailList[i].trim()const result = validateSingleEmail(email)results.push(result)}
    setValidationResults(results)setIsValidating(false)}
  const validateSingleEmail = (email: string) => {// Basic email regex;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check for common disposable email domains;
    const disposableDomains = [;
      'tempmail.orgguerrillamail.commailinator.com10minutemail.com';
      'throwaway.emailtemp-mail.orgsharklasers.comgetairmail.com';
    ];
    // Check for common typos;
    const commonTypos = {'gmail.com': ['gmial.comgamil.comgmai.com'];
      'yahoo.com': ['yaho.comyahooo.comyhaoo.com'];
      'hotmail.com': ['hotmai.comhotmial.comhotmeil.com'];
      'outlook.com': ['outlok.comoutloook.comoutlok.com'];
    }
    const domain = email.split('@')[1];
    const isDisposable = disposableDomains.includes(domain)const hasTypo = Object.entries(commonTypos).some(([correct, typos]) =>;
      typos.includes(domain))let status = 'valid';
    let score = 100;
    const issues = [];
    if (!emailRegex.test(email)) {status = 'invalid';
      score = 0;
      issues.push('Invalid email format')} else if (isDisposable) {status = 'disposable';
      score = 20;
      issues.push('Disposable email domain')} else if (hasTypo) {status = 'suspicious';
      score = 60;
      issues.push('Possible typo in domain')export default function EmailValidatorPage() {const [emails, setEmails] = useState(''),const [validationResults, setValidationResults] = useState<any[]>([]),const [isValidating, setIsValidating] = useState(false),const [bulkMode, setBulkMode] = useState(false),const validateEmails = async () => {if (!emails.trim()) return,setIsValidating(true),setValidationResults([]),const emailList = emails.split('\n').filter(email => email.trim()),const results = [],// Simulate email validation with realistic results,for (let i = 0, i < emailList.length, i++) {await new Promise(resolve => setTimeout(resolve, 200)),const email = emailList[i].trim(),const result = validateSingleEmail(email),results.push(result)}setValidationResults(results),setIsValidating(false)},const validateSingleEmail = (email: string) => {// Basic email regex,const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,// Check for common disposable email domains,const disposableDomains = [;
      'tempmail.orgguerrillamail.commailinator.com10minutemail.com','throwaway.emailtemp-mail.orgsharklasers.comgetairmail.com';
    ],// Check for common typos,const commonTypos = {'gmail.com': ['gmial.comgamil.comgmai.com'],'yahoo.com': ['yaho.comyahooo.comyhaoo.com'],'hotmail.com': ['hotmai.comhotmial.comhotmeil.com'],'outlook.com': ['outlok.comoutloook.comoutlok.com'];
    },const domain = email.split('@')[1],const isDisposable = disposableDomains.includes(domain),const hasTypo = Object.entries(commonTypos).some(([correct, typos]) =>       typos.includes(domain)),let status = 'valid',let score = 100,const issues = [],if (!emailRegex.test(email)) {status = 'invalid',score = 0,issues.push('Invalid email format')} else if (isDisposable) {status = 'disposable',score = 20,issues.push('Disposable email domain')} else if (hasTypo) {status = 'suspicious',score = 60,issues.push('Possible typo in domain')}// Additional checks,if (email.length > 254) {status = 'invalid',score = 0,issues.push('Email too long')}
    // Additional checks;
    if (email.length > 254) {status = 'invalid';
      score = 0;
      issues.push('Email too long')}
    if (email.split('@')[0].length > 64) {status = 'invalid';
      score = 0;
      issues.push('Local part too long')}
    }
  }
  const getScoreColor = (score: number) => {if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    if (score >= 40) return 'text-orange-400';
    return 'text-red-400';
  }
  const copyResults = () => {const resultsText = validationResults.map(result =>;
      `${result.email} - ${result.status.toUpperCase()} (Score: ${result.score})`;
    ).join('\n')navigator.clipboard.writeText(resultsText)}
  const clearResults = () => {setValidationResults([])setEmails('')}
  const getStats = () => {if (validationResults.length === 0) return null;
    const total = validationResults.length;
    const valid = validationResults.filter(r => r.status === 'valid').length;
    const invalid = validationResults.filter(r => r.status === 'invalid').length;
    const suspicious = validationResults.filter(r => r.status === 'suspicious').length;
    const disposable = validationResults.filter(r => r.status === 'disposable').length;
    const avgScore = validationResults.reduce((sum, r) => sum + r.score, 0) / total;
    return { total, valid, invalid, suspicious, disposable, avgScore }
}
  const stats = getStats()return (<>;
      <Head>;
        <title>Email Validator - Zion Tech Group</title>;
        <meta name=&quot;description&quot; content=&quot;Validate email addresses with our advanced email validation service. Check for typos, disposable domains, and ensure deliverability.&quot; />;
        <meta property=&quot;og:title&quot; content=&quot;Email Validator - Zion Tech Group&quot; />;
        <meta property=&quot;og:description&quot; content=&quot;Advanced email validation service to ensure deliverability and prevent typos.&quot; />;
      </Head>;
      {/* Hero Section */}
      <section className=&quot;pt-32 pb-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900&quot;>;
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>;
          <div className=&quot;mb-8&quot;>;
            <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6&quot;>;
              <Mail className=&quot;w-4 h-4 mr-2&quot; />;
              Email Validation & Verification;
            </div>;
          </div>;
          <h1 className=&quot;text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight&quot;>;
            Email Validator;
          </h1>;
          <p className=&quot;text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed&quot;>;
        </div>;
      </section>;
      {/* Email Validation Tool */}
      <section className=&quot;py-20 bg-gray-900&quot;>;
        <div className=&quot;max-w-6xl mx-auto px-4 sm:px-6 lg:px-8&quot;>;
          <div className=&quot;text-center mb-16&quot;>;
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>;
              Validate Your Emails;
            </h2>;
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>;
              Our advanced validation engine checks multiple factors to ensure email quality and deliverability.;
            </p>;
          </div>;
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>;
            {/* Input Form */}
            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>;
              <div className=&quot;flex items-center justify-between mb-6&quot;>;
                <h3 className=&quot;text-2xl font-bold text-white flex items-center&quot;>;
                  <Mail className=&quot;w-6 h-6 mr-3 text-blue-400&quot; />;
                  Email Input;
                </h3>;
                <div className=&quot;flex items-center space-x-2&quot;>;
                  <label className=&quot;text-sm text-gray-300&quot;>Bulk Mode</label>;
                  <input;
                    type=&quot;checkbox&quot;
                    checked={bulkMode}
                    onChange={(e) => setBulkMode(e.target.checked)}
                    className=&quot;w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2&quot;
                  />;
                </div>;
              </div>;
              <div className=&quot;space-y-6&quot;>;
                {bulkMode ? (<div>;
                    <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>;
                      Email Addresses (One per line)</label>;
                    )}
                  </Button>;
                  {validation_results.length > 0 && (<Button;
                      className=&quot;border-gray-600 text-gray-300 hover:bg-gray-700&quot;
                    >;
                      Clear;
                    </Button>;
                  )}
                </div>;
                <div className=&quot;text-sm text-gray-400&quot;>;
                  <p> Validates email format and syntax</p>;
                  <p> Checks for disposable email domains</p>;
                  <p> Detects common typos and mistakes</p>;
                  <p> Provides deliverability score</p>;
                </div>;
              </div>;
            </Card>;
            {/* Validation Results */}
            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>;
              <div className=&quot;flex items-center justify-between mb-6&quot;>;
                <h3 className=&quot;text-2xl font-bold text-white flex items-center&quot;>;
                  <BarChart3 className=&quot;w-6 h-6 mr-3 text-indigo-400&quot; />;
                  Validation Results;
                </h3>;
                {validationResults.length > 0 && (<Button;
                    onClick={copyResults}
                    variant=&quot;outline&quot;
                    size=&quot;sm&quot;
                    className=&quot;border-gray-600 text-gray-300 hover:bg-gray-700&quot;
                  >;
                    <Copy className=&quot;w-4 h-4 mr-2&quot; />;
                    Copy Results;
                  </Button>;
                )}
              </div>;
                      on_click={clear_results}
variant=&quot;outline & quot;
                      className=&quot;border - gray - 600 text - gray - 300 hover:bg - gray - 700 & quot;
                    >;
                      Clear;
                    </Button>)}
                </div>;
                <div className=&quot;text - sm text - gray - 400 & quot;>;
                  <p>• Validates email format and syntax</p>;
                  <p>• Checks for disposable email domains</p>;
                  <p>• Detects common typos and mistakes</p>;
                  <p>• Provides deliverability score</p>;
                </div>;
              </div>;
            </Card>;
            {/* Validation Results */}
            <Card className=&quot;p - 8 bg - gray - 800 border border - gray - 700 & quot;>;
              <div className=&quot;flex items - center justify - between mb - 6&quot;>;
                <h3 className=&quot;text - 2xl font - bold text - white flex items - center & quot;>;
                  <BarChart3 className=&quot;w - 6 h - 6 mr - 3 text - indigo - 400 & quot; />;
                  Validation Results;
                </h3>;
                {validation_results.length > 0 && (<Button;
                    on_click={copy_results}
                    variant=&quot;outline & quot;
                    size=&quot;sm & quot;
                    className=&quot;border - gray - 600 text - gray - 300 hover:bg - gray - 700 & quot;
                  >;
                    <Copy className=&quot;w - 4 h - 4 mr - 2&quot; />;
                    Copy Results;
                  </Button>)}
              </div>;
              {stats && (className={`p - 4 rounded - lg border ${result.status === 'valid' ? 'border - green - 500 / 30 bg - green - 500 / 10' :;
                        result.status === 'suspicious' ? 'border - yellow - 500 / 30 bg - yellow - 500 / 10' :;
                        result.status === 'disposable' ? 'border - orange - 500 / 30 bg - orange - 500 / 10' :;
                        'border - red - 500 / 30 bg - red - 500 / 10';}`}
>;
                      <div className=&quot;flex items - center justify - between mb - 2&quot;>;
                        <div className=&quot;flex items - center space - x-3 & quot;>;
                          {getStatusIcon (result.status)}
                          <span className={`font - medium ${getStatusColor (result.status)}`}>;
                            {result.email}
                          </span>;
                        </div>;
                  {validationResults.map((result, index) => (                    <div,key={index}
                      className={_`p-4 rounded-lg border ${result.status === 'valid' ? 'border-green-500/30 bg-green-500/10' :;
                        result.status === 'suspicious' ? 'border-yellow-500/30 bg-yellow-500/10' :;
                        result.status === 'disposable' ? 'border-orange-500/30 bg-orange-500/10' :;
                        'border-red-500/30 bg-red-500/10'}`}
                    >;
                      <div className=&quot;flex items-center justify-between mb-2&quot;>;
                        <div className=&quot;flex items-center space-x-3&quot;>;
                          {getStatusIcon(result.status)}
                          <span className={`font-medium ${getStatusColor(result.status)}`}>;
                            {result.email}                          </span>;
                        </div>;
                        <span className={_`text-sm font-medium ${getScoreColor(result.score)}`}>;
                          Score: {result.score}</span>;
                      </div>;
                      <div className=&quot;text - sm text - gray - 300 mb - 2&quot;>;
                        <span className=&quot;text - gray - 400 & quot;>Domain:</span>;
                        <span className=&quot;ml - 2&quot;>{result.domain}</span>;
                      </div>;{result.issues.length > 0 && (</div>;
                      )}
                      {result.hasTypo && (<div className=&quot;mt-2 p-2 bg-yellow-500/20 border border-yellow-500/30 rounded text-sm text-yellow-300&quot;>;
                          💡 Possible typo detected in domain;
                        </div>;
                      )}
                    </div>;
                  ))}
</div>;
              ) : (<div className=&quot;bg-gray-900 p-6 rounded-lg border border-gray-700 text-center&quot;>;
                  <div className=&quot;text-6xl mb-4&quot;></div>;
                  <p className=&quot;text-gray-400&quot;>;
                    Validation results will appear here. Enter an email address and click validate to get started.;
                  </p>;
                </div>;
              )}
                        </div>)}
{result.is_disposable && (<div className=&quot;mt - 2 p - 2 bg - orange - 500 / 20 border border - orange - 500 / 30 rounded text - sm text - orange - 300 & quot;>;
                          ⚠️ Disposable email domain detected;
                        </div>)}
                      {result.has_typo && (<div className=&quot;mt - 2 p - 2 bg - yellow - 500 / 20 border border - yellow - 500 / 30 rounded text - sm text - yellow - 300 & quot;>;
                          💡 Possible typo detected in domain;
                        </div>)}
                    </div>))}
</div>) : (<div className=&quot;bg - gray - 900 p - 6 rounded - lg border border - gray - 700 text - center & quot;>;
                  <div className=&quot;text - 6xl mb - 4&quot;>📧</div>;
                  <p className=&quot;text - gray - 400 & quot;>;
                    Validation results will appear here. Enter an email address and click validate to get started.;
                  </p>;
                </div>)}
            </Card>;
          </div>;
        </div>;
      </section>;
}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">;
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">;
      <section className=&quot;py-20 bg-gradient-to-r from-blue-600 to-indigo-600&quot;>;
        <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>;
          <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>;
            Ready to Improve Your Email Quality?;
          </h2>;
          <p className=&quot;text-xl text-blue-100 mb-8&quot;>;
            Join thousands of businesses who trust our email validation service to improve deliverability and user experience.;
          </p>;
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>;
            <Button,href=&quot;/contact&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-blue-600 hover:bg-gray-100&quot;
            >;
              Get Started Today;
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />;
            </Button>;
            <Button,href=&quot;/pricing&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-blue-600&quot;
            >;
              View Pricing;
            </Button>;
          </div>;
        </div>;
      </section>;
    </>;
  )}