'use client';
import React from 'react';
'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Code, AlertTriangle, CheckCircle, XCircle, Eye, Lock, Unlock, FileText, Search, Filter, Download, Upload, Settings, Zap, Star, Users, Clock, Globe, Phone, Mail, MapPin, ArrowRight, Brain, BarChart3, DollarSign, Calendar, MessageSquare, Activity, TrendingUp, Target, Award, Sparkles } from 'lucide-react';

const AICodeSecurityAuditorPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

    }
  ];

  const benefits = [
    'Reduce security vulnerabilities by 90%',
    'Improve code security by 85%',
    'Lower security risks by 80%',
    'Increase compliance by 95%',
    'Enable automated security testing',
    'Accelerate security audits',
    'Scale security across teams',
    'Enhance security awareness'
  ];

  const useCases = [
    {
      title: 'Application Security',
      description: 'Secure web and mobile applications with comprehensive security auditing',
      icon: '🔒'
    },
    {
      title: 'Code Review',
      description: 'Automate security code reviews and identify potential vulnerabilities',
      icon: '🔍'
    },
    {
      title: 'Compliance Auditing',
      description: 'Ensure compliance with security standards and regulations',
      icon: '📋'
    },
    {
      title: 'Penetration Testing',
      description: 'Identify security weaknesses through automated penetration testing',
      icon: '🎯'
    },
    {
      title: 'Security Training',
      description: 'Educate developers on secure coding practices and common vulnerabilities',
      icon: '📚'
    },
    {
      title: 'Risk Management',
      description: 'Assess and manage security risks across the development lifecycle',
      icon: '⚠️'
    }
  ];

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"></main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-8"></div>
              <Shield className="w-10 h-10 text-white" />
            </div>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Secure your code with our AI Code Security Auditor. Automated vulnerability detection, 
              security analysis, and compliance checking for better code security.
            </p>
            </div>
          </div>
        </section>

                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

                </div>
              ))}
            </div>
          </div>
        </section>

                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Ready to Secure Your Code?
              </h2>
              <p className="text-xl text-red-100 mb-8"></p>
                Join thousands of developers who are already using our AI Code Security Auditor;
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
                  Get Started Now;
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AICodeSecurityAuditorPage;
