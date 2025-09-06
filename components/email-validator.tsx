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
    if (!emails.trim()) return,;
    setIsValidating(true),;
    setValidationResults([]),;
    const emailList = emails.split('\n').filter(email => email.trim()),;
    const results = [],;
    // Simulate email validation with realistic results;
    for (let i = 0, i < emailList.length, i++) {;
      await new Promise(resolve => setTimeout(resolve, 200)),;
      const email = emailList[i].trim(),;
      const result = validateSingleEmail(email),;
      results.push(result);
    }
;
    setValidationResults(results),;
    setIsValidating(false);
  },;
  const validateSingleEmail = (email: string) => {;
    // Basic email regex;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,;
    // Check for common disposable email domains;
    const disposableDomains = [;
      'tempmail.orgguerrillamail.commailinator.com10minutemail.com',;
      'throwaway.emailtemp-mail.orgsharklasers.comgetairmail.com';
    ],;
    // Check for common typos;
    const commonTypos = {;
      'gmail.com': ['gmial.comgamil.comgmai.com'],;
      'yahoo.com': ['yaho.comyahooo.comyhaoo.com'],;
      'hotmail.com': ['hotmai.comhotmial.comhotmeil.com'],;
      'outlook.com': ['outlok.comoutloook.comoutlok.com'];
    },;
    const domain = email.split('@')[1],;
    const isDisposable = disposableDomains.includes(domain),;
    const hasTypo = Object.entries(commonTypos).some(([correct, typos]) =>;
      typos.includes(domain);
    ),;
    let status = 'valid',;
    let score = 100,;
    const issues = [],;
    if (!emailRegex.test(email)) {;
      status = 'invalid',;
      score = 0,;
      issues.push('Invalid email format');
    } else if (isDisposable) {;
      status = 'disposable',;
      score = 20,;
      issues.push('Disposable email domain');
    } else if (hasTypo) {;
      status = 'suspicious',;
      score = 60,;
      issues.push('Possible typo in domain');
    }
;
    // Additional checks;
    if (email.length > 254) {;
      status = 'invalid',;
      score = 0,;
      issues.push('Email too long');
    }
;
    if (email.split('@')[0].length > 64) {;
      status = 'invalid',;
      score = 0,;
      issues.push('Local part too long');
    }
;
    return {;
      email,;
      status,;
      score,;
      issues,;
      domain,;
      isDisposable,;
      hasTypo,;
      timestamp: new Date().toLocaleTimeString();
    }

        return <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />;
      case 'suspicious':
        return <AlertTriangle className=&quot;w-5 h-5 text-yellow-400&quot; />;
      case 'disposable':
        return <XCircle className=&quot;w-5 h-5 text-orange-400&quot; />;
      case 'invalid':
        return <XCircle className=&quot;w-5 h-5 text-red-400&quot; />;
      default:
        return <AlertTriangle className=&quot;w-5 h-5 text-gray-400&quot; />;


    }
  },;
  const getStatusColor = (status: string) => {;
    switch (status) {;
      case 'valid':;
        return 'text-green-400',;
      case 'suspicious':;
        return 'text-yellow-400',;
      case 'disposable':;
        return 'text-orange-400',;
      case 'invalid':;
        return 'text-red-400',;
      default:;
        return 'text-gray-400';
    }
  },;
  const getScoreColor = (score: number) => {;
    if (score >= 80) return 'text-green-400',;
    if (score >= 60) return 'text-yellow-400',;
    if (score >= 40) return 'text-orange-400',;
    return 'text-red-400';
  },;
  const copyResults = () => {;
    const resultsText = validationResults.map(result =>;
      `${result.email} - ${result.status.toUpperCase()} (Score: ${result.score})`;
    ).join('\n'),;
    navigator.clipboard.writeText(resultsText);
  },;
  const clearResults = () => {;
    setValidationResults([]),;
    setEmails('');
  },;
  const getStats = () => {;
    if (validationResults.length === 0) return null,;
    const total = validationResults.length,;
    const valid = validationResults.filter(r => r.status === 'valid').length,;
    const invalid = validationResults.filter(r => r.status === 'invalid').length,;
    const suspicious = validationResults.filter(r => r.status === 'suspicious').length,;
    const disposable = validationResults.filter(r => r.status === 'disposable').length,;
    const avgScore = validationResults.reduce((sum, r) => sum + r.score, 0) / total,;
    return { total, valid, invalid, suspicious, disposable, avgScore }

                      placeholder=&quot;john@example.com&#10;jane@company.org&#10;user@domain.net&quot;

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
                    />
                  </div>
                )}

                <div className=&quot;flex space-x-3&quot;>
                  <Button
                    onClick={validateEmails}
                    disabled={!emails.trim() || isValidating}
                    className=&quot;flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed&quot;
                  >
                    {isValidating ? (
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
                  </Button>;
                  {validationResults.length > 0 && (;
                    <Button;
                      onClick={clearResults}

                      variant="outline";
                      className="border-gray-600 text-gray-300 hover:bg-gray-700";
                    >;
                      Clear;
                    </Button>;
                  )}
                </div>;
                <div className="text-sm text-gray-400">;
                  <p>• Validates email format and syntax</p>;
                  <p>• Checks for disposable email domains</p>;
                  <p>• Detects common typos and mistakes</p>;
                  <p>• Provides deliverability score</p>;
                </div>;
              </div>;
            </Card>;
            {/* Validation Results */}
            <Card className="p-8 bg-gray-800 border border-gray-700">;
              <div className="flex items-center justify-between mb-6">;
                <h3 className="text-2xl font-bold text-white flex items-center">;
                  <BarChart3 className="w-6 h-6 mr-3 text-indigo-400" />;
                  Validation Results;
                </h3>;
                {validationResults.length > 0 && (;
                  <Button;
                    onClick={copyResults}
                    variant="outline";
                    size="sm";
                    className="border-gray-600 text-gray-300 hover:bg-gray-700";
                  >;
                    <Copy className="w-4 h-4 mr-2" />;
                    Copy Results;
                  </Button>;
                )}
              </div>;
              {stats && (;
                <div className="mb-6 p-4 bg-gray-900 rounded-lg border border-gray-700">;
                  <div className="grid grid-cols-2 gap-4 text-sm">;
                    <div>;
                      <span className="text-gray-400">Total:</span>;
                      <span className="ml-2 text-white font-medium">{stats.total}</span>;
                    </div>;
                    <div>;
                      <span className="text-gray-400">Valid:</span>;
                      <span className="ml-2 text-green-400 font-medium">{stats.valid}</span>;
                    </div>;
                    <div>;
                      <span className="text-gray-400">Invalid:</span>;
                      <span className="ml-2 text-red-400 font-medium">{stats.invalid}</span>;
                    </div>;
                    <div>;
                      <span className="text-gray-400">Avg Score:</span>;
                      <span className={`ml-2 font-medium ${getScoreColor(stats.avgScore)}`}>;

                        {stats.avgScore.toFixed(0)}
                      </span>;
                    </div>;
                  </div>;
                </div>;
              )}

;
              {validationResults.length > 0 ? (;
                <div className="space-y-3 max-h-96 overflow-y-auto">;
                  {validationResults.map((result, index) => (;
                    <div;

                      key={index}
                      className={`p-4 rounded-lg border ${;
                        result.status === 'valid' ? 'border-green-500/30 bg-green-500/10' :;
                        result.status === 'suspicious' ? 'border-yellow-500/30 bg-yellow-500/10' :;
                        result.status === 'disposable' ? 'border-orange-500/30 bg-orange-500/10' :;
                        'border-red-500/30 bg-red-500/10';
                      }`}

                    >;
                      <div className="flex items-center justify-between mb-2">;
                        <div className="flex items-center space-x-3">;

                          {getStatusIcon(result.status)}
                          <span className={`font-medium ${getStatusColor(result.status)}`}>;
                            {result.email}
                          </span>;
                        </div>;
                        <span className={`text-sm font-medium ${getScoreColor(result.score)}`}>;
                          Score: {result.score}

                        </span>;
                      </div>;
                      <div className="text-sm text-gray-300 mb-2">;
                        <span className="text-gray-400">Domain:</span>;
                        <span className="ml-2">{result.domain}</span>;
                      </div>;
                      {result.issues.length > 0 && (;
                        <div className="text-sm">;
                          <span className="text-gray-400">Issues:</span>;
                          <ul className="mt-1 space-y-1">;
                            {result.issues.map((issue: string, issueIndex: number) => (;
                              <li key={issueIndex} className="text-red-300 flex items-center">;
                                <XCircle className="w-3 h-3 mr-2 flex-shrink-0" />;

                                {issue}
                              </li>;
                            ))}
                          </ul>;
                        </div>;
                      )}

;
                      {result.isDisposable && (;
                        <div className="mt-2 p-2 bg-orange-500/20 border border-orange-500/30 rounded text-sm text-orange-300">;
                          ⚠️ Disposable email domain detected;
                        </div>;
                      )}
;
                      {result.hasTypo && (;
                        <div className="mt-2 p-2 bg-yellow-500/20 border border-yellow-500/30 rounded text-sm text-yellow-300">;
                          💡 Possible typo detected in domain;
                        </div>;

                      )}
                    </div>;
                  ))}

                </div>;
              ) : (;
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">;
                  <div className="text-6xl mb-4">📧</div>;
                  <p className="text-gray-400">;
                    Validation results will appear here. Enter an email address and click validate to get started.;
                  </p>;
                </div>;

              )}
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Features */}

      <section className=&quot;py-20 bg-gradient-to-r from-blue-600 to-indigo-600&quot;>
        <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>

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