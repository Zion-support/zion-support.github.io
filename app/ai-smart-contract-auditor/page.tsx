'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, AlertTriangle, Code, DollarSign, Clock, Users, Zap, Brain, ArrowRight, Star, TrendingUp, Lock, FileText, BarChart, Target, Award, Rocket, Globe, Database, Cpu, Eye, MessageSquare, Settings, Calendar, CheckSquare, Phone, Mail, MapPin } from 'lucide-react';

const AISmartContractAuditor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => 
    setIsVisible(true);
  }, []);

  const features = const features = const features = [
    {
      icon: Shield,
    },
    {
      icon: Code,
      title: 'Code Quality Assessment',
      description: 'Comprehensive code review with best practices compliance and optimization suggestions',
      benefits: [''Gas optimization recommendations', 'Code complexity analysis', 'Best practices compliance'']
    },
    {
      icon: BarChart,
      title: 'Risk Scoring System',
      description: 'Intelligent risk assessment with detailed scoring and mitigation strategies',
      benefits: [''Real-time risk scoring', 'Priority-based recommendations', 'Historical trend analysis'']
    },
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Advanced ML models trained on thousands of audited contracts for pattern recognition',
      benefits: [''Continuous learning', 'Pattern recognition', 'Predictive analysis'']
    },
  ];
  const pricingPlans = const pricingPlans = const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small projects and individual developers',
      features: [
        'Up to 5 smart contracts per month',
        'Basic security analysis',
        'Code quality assessment',
        'Email support',
        'PDF audit reports',
        'Basic risk scoring'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing DeFi projects and development teams',
      features: [
        'Up to 25 smart contracts per month',
        'Advanced security analysis',
        'Gas optimization recommendations',
        'Priority support',
        'Detailed audit reports',
        'Advanced risk scoring',
        'API access',
        'Custom compliance checks'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large-scale projects and enterprise clients',
      features: [
        'Unlimited smart contracts',
        'Comprehensive security analysis',
        'Custom ML model training',
        '24/7 dedicated support',
        'Executive summary reports',
        'Real-time monitoring',
        'Custom integrations',
        'White-label solutions',
        'On-site consultation'
      ],
      popular: false;
  ];

  const useCases = const useCases = const useCases = [
    {
      title: 'DeFi Protocol Audits',
      description: 'Comprehensive security analysis for decentralized finance protocols',
      icon: DollarSign,
      results: 'Reduced security incidents by 95%'
    },
    {
      title: 'NFT Marketplace Security',
      description: 'Smart contract auditing for NFT platforms and marketplaces',
      icon: Image,
      results: 'Zero critical vulnerabilities found'
    },
    {
      title: 'Token Launch Security',
      description: 'Pre-launch security audits for new token contracts',
      icon: Rocket,
      results: '100% successful token launches'
    },
    {
      title: 'Cross-Chain Bridge Audits',
      description: 'Security analysis for cross-chain bridge implementations',
      icon: Globe,
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" /></p>
                Advanced AI-powered smart contract auditing with automated security analysis, 
                vulnerability detection, and comprehensive risk assessment for blockchain projects.
              </p></p></p>
              
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
                and static analysis to provide comprehensive security assessments.
              </p></p></p>
            </div>
            
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
                various blockchain ecosystems and use cases.
              </p></p></p>
            </div>
            
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
                Choose the perfect plan for your smart contract auditing needs. 
                All plans include our advanced AI security analysis.
              </p></p></p>
            </div>
            
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISmartContractAuditor;
