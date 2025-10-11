'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, DollarSign, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';
const FinancialITPage: React.FC = () => {
    const features = [
    {
      icon: DollarSign,
<<<<<<< HEAD
      title: 'SOX Compliance',
      description: 'Full SOX compliance solutions with automated controls, monitoring, and reporting capabilities.',
=======
      title: 'SOX Compliance',;
      description: 'Full SOX compliance solutions with automated controls, monitoring, and reporting capabilities.',;
>>>>>>> main
      benefits: ['Automated controls', 'Compliance reporting', 'Audit trails'],
  },
    {
    icon: Zap,
      title: 'Financial Data Security',
      description: 'Bank-level security for financial data with encryption, access controls, and monitoring.',
      benefits: ['Data encryption', 'Access controls', 'Security monitoring'],
  },
    {
    icon: Clock,
      title: 'Real-time Processing',
      description: 'High-frequency trading and real-time financial data processing capabilities.',
      benefits: ['Low latency', 'High throughput', 'Real-time analytics'],
  },
    {
    icon: Users,
      title: 'Regulatory Compliance',
      description: 'Comprehensive compliance with financial regulations including PCI DSS, GDPR, and more.',
      benefits: ['Multi-regulation support', 'Automated compliance', 'Risk management'],
  },
    {
    icon: Shield,
      title: 'Fraud Detection',
      description: 'Advanced AI-powered fraud detection and prevention systems for financial transactions.',
      benefits: ['Real-time detection', 'Machine learning', 'Risk scoring'],
  },
    {
    icon: BarChart,
      title: 'Financial Analytics',
      description: 'Comprehensive analytics and reporting for financial operations and compliance.',
<<<<<<< HEAD
      benefits: ['Real-time reporting', 'Predictive analytics', 'Risk assessment'],
  }
    ]
=======
      benefits: ['Real-time reporting', 'Predictive analytics', 'Risk assessment']
  },
  ];
>>>>>>> main
const services = [
    {
    icon: '🏦',
      title: 'Banking Solutions',
      description: 'Core banking systems and digital banking platforms'
  },
    {
    icon: '💳',
      title: 'Payment Processing',
      description: 'Secure payment gateways and transaction processing'
  },
    {
    icon: '📊',
      title: 'Risk Management',
      description: 'Advanced risk assessment and management tools'
  },
    {
    icon: '🔒',
      title: 'Security Services',
      description: 'Cybersecurity and data protection solutions'
<<<<<<< HEAD
  }
    }
  ];
  const benefits = [
=======
  };
    };
  ];
const benefits = [
>>>>>>> main
    'SOX Compliance Ready',
    'Bank-level Security',

    'Real-time Processing',

    'Regulatory Compliance',

<<<<<<< HEAD
    'Fraud Prevention',

    'Advanced Analytics'
  ]
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"></div>
      <Helmet>
        </Helmet><title>Financial IT Solutions | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation>
      {/* Hero Section */}
      </Navigation><section className="py-20 px-4">
          </section><div className="
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1>
            Financial Services;
            </h1><span>
=======
    'Fraud Prevention',;
;
    'Advanced Analytics';
  ];
return ()
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" / / /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} / / /></div>
        <div className="relative max-w-7xl mx-auto text-center" / /></div>
          <h1></h1>
            Financial Services;
            <span></span>
>>>>>>> main
              IT Solutions
            </span>
          </h1>
          <p></p>
            Specialized IT solutions for financial services with SOX compliance, security, and regulatory requirements.;
            Built for banks, credit unions, investment firms, and fintech companies.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center" / /></div>
            <button></button>
              Get Started Today
<<<<<<< HEAD
              </button><ArrowRight>
=======
              <ArrowRight></ArrowRight>
>>>>>>> main
            </button>
            <button></button>
              Schedule Demo,
            </button>
          </div>
        </div>
      </section>
      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4">
          </section><div className="
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="text-center mb-16" / /></div>
            <h2 className="text-4xl font-bold text-white mb-4">Financial IT Solutions</h2>
            <p></p>
              Comprehensive IT solutions designed specifically for financial services industry
            </p>
          </div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 group"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <feature />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul>
                  {
    feature.benefits.map((benefit, benefitIndex) => (
  }
                    </ul><li>
                      </li><CheckCircle>

                      {benefit}
                    </li>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" / /></div>
            {features.map((feature, index) => ()
    feature.benefits.map((benefit, benefitIndex) => ()
>>>>>>> main
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* Services Section */}
<<<<<<< HEAD
      <section className="py-20 px-4">
          </section><div className="
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="text-center mb-16" / /></div>
            <h2></h2>
              Financial Services
            </h2>
            <p></p>
              Comprehensive IT solutions for all aspects of financial services and banking operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" / /></div>
            {
    services.map((service, index) => ()
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20 px-4">
          </section><div className="
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="text-center mb-16" / /></div>
            <h2></h2>
              Why Choose Our Financial IT Solutions?
            </h2>
            <p></p>
              Experience the benefits of modern financial technology with our proven solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" / /></div>
            {benefits.map((benefit, index) => ()
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4">
          </section><div className="
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-4xl mx-auto text-center" / /></div>
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Financial IT Excellence?</h2>
          <p></p>
            Join leading financial institutions using our specialized IT solutions for compliance and security
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center" / /></div>
            <button></button>
              Start Free Trial
            </button>
            <button></button>
              Contact Sales
            </button>
          </div>
        </div>
      </section>
      <Footer /></Footer>
  ),
};

export default FinancialITPage;
