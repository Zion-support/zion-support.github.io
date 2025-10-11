'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Eye, Target, BarChart, Lock, Clock, Users, ArrowRight, Star, TrendingUp, FileText, DollarSign, CheckCircle, Phone, Mail, MapPin, Database, Settings, Calendar, Award, MessageSquare, CheckSquare, Cpu, Brain, Globe, AlertTriangle, Activity } from 'lucide-react';

const AICyberDefenseMatrix: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'AI Threat Detection',;
      description: 'Advanced AI algorithms for real-time threat detection and automated response',;
      benefits: ['99.9% threat detection rate', 'Real-time monitoring', 'Automated response'];
    },
    {
      icon: Zap,
      title: 'Zero-Trust Architecture',
      description: 'Comprehensive zero-trust security framework with continuous verification',
      benefits: ['Continuous verification', 'Identity-based access', 'Micro-segmentation']
    },
    {
      icon: Eye,
      title: 'Behavioral Analytics',
      description: 'AI-powered behavioral analysis to detect anomalous activities and insider threats',
      benefits: ['Anomaly detection', 'Insider threat prevention', 'User behavior analysis']
    },
    {
      icon: Target,
      title: 'Automated Incident Response',
      description: 'Intelligent incident response with automated containment and remediation',
      benefits: ['Automated containment', 'Rapid response', 'Minimal downtime']
    },
  ];
  const pricingPlans = [
    {
      name: 'Essential',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic threat detection',
        'Email security',
        'Firewall management',
        'Email support',
        'Basic reporting',
        'Standard monitoring'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for mid-size companies and enterprises',
      features: [
        'Advanced threat detection',
        'Zero-trust architecture',
        'Behavioral analytics',
        'Priority support',
        'Advanced reporting',
        'Real-time monitoring',
        'Incident response',
        'API integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$3,999',
      period: '/month',
      description: 'For large organizations and critical infrastructure',
      features: [
        'Full cyber defense suite',
        'Custom security policies',
        '24/7 dedicated support',
        'White-label solutions',
        'On-premise deployment',
        'Custom integrations',
        'Advanced analytics',
        'Compliance management',
        'Training programs'
      ],
      popular: false;
    };
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Advanced cyber defense for banks and financial institutions',
      icon: DollarSign,
      results: '99.9% security uptime'
    },
    {
      title: 'Healthcare Protection',
      description: 'HIPAA-compliant cyber defense for healthcare organizations',
      icon: Shield,
      results: 'Zero data breaches'
    },
    {
      title: 'Government Security',
      description: 'National-level cyber defense for government agencies',
      icon: Globe,
      results: 'Enhanced national security'
    },
    {
      title: 'Critical Infrastructure',
      description: 'Industrial cyber defense for power grids and utilities',
      icon: Zap,
      results: '100% infrastructure protection';
    };
  ];
  return null
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent" / /></div>
          <div className="max-w-7xl mx-auto relative z-10" /></div>
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} /></div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full px-6 py-3 mb-8 border border-red-500/30" /></div>
                <Shield className="w-5 h-5 text-red-400" / /></Shield>
                <span className="text-red-400 font-semibold">Cyber Defense</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent" /></h1>
                AI Cyber Defense Matrix
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" /></p>
                Revolutionary AI-powered cyber defense platform with 99.9% threat detection, 
                zero-trust architecture, and automated incident response for enterprise security.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" /></div>
                <div className="flex items-center space-x-2 text-red-400" /></div>
                  <Shield className="w-5 h-5" / /></Shield>
                  <span className="font-semibold">99.9% Detection</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-400" /></div>
                  <Zap className="w-5 h-5" / /></Zap>
                  <span className="font-semibold">Zero-Trust</span>
                </div>
                <div className="flex items-center space-x-2 text-yellow-400" /></div>
                  <Target className="w-5 h-5" / /></Target>
                  <span className="font-semibold">Auto Response</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
                <a href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105" /></a>
                  <Phone className="w-5 h-5 mr-2" / /></Phone>
                  Call (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-yellow-700 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105" /></a>
                  <Mail className="w-5 h-5 mr-2" / /></Mail>
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent" /></h2>
                Advanced Cyber Defense Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
                Our AI-powered cyber defense matrix provides comprehensive security solutions 
                with advanced threat detection and automated response capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" /></div>
              {features.map((feature, index) => ()
                    {feature.benefits.map((benefit, idx) => ()
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" /></h2>
                Enterprise Security Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
                Our AI cyber defense matrix is trusted by leading organizations 
                across various industries for mission-critical security protection.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" /></div>
              {useCases.map((useCase, index) => ()
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent" /></h2>
                Security-First Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
                Choose the perfect cyber defense plan for your organization. 
                All plans include our advanced AI threat detection and response capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" /></div>
              {pricingPlans.map((plan, index) => ()
                  )}
                  
                  <div className="text-center mb-8" /></div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center" /></div>
                      <span className="text-5xl font-bold text-red-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8" /></ul>
                    {plan.features.map((feature, idx) => ()
                    ))}
                  </ul>
                  
                  <a href="tel:+13024640950"
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                        : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500'
                    }`} /></a>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10" /></section>
          <div className="max-w-4xl mx-auto text-center" /></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent" /></h2>
              Secure Your Digital Future
            </h2>
            <p className="text-xl text-gray-300 mb-8" /></p>
              Join leading organizations using our AI-powered cyber defense matrix 
              to protect against evolving cyber threats and ensure business continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <a href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105" /></a>
                <Phone className="w-5 h-5 mr-2" / /></Phone>
                Call (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-yellow-700 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105" /></a>
                <Mail className="w-5 h-5 mr-2" / /></Mail>
                Get Free Quote
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICyberDefenseMatrix;
