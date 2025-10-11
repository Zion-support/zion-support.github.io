'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Users, Shield, Globe, Brain, Cloud, Code, BarChart, Zap, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const EnterprisePage: React.FC = () => {
<<<<<<< HEAD
  },
=======
  const features = [
    {
      icon: Building,
      title: 'Enterprise Architecture',
      description: 'Scalable, secure, and robust solutions designed for large organizations.'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with compliance and data protection standards.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge AI technologies to drive innovation and efficiency.'
    },
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with 99.9% uptime and global availability.'
    },
    {
<<<<<<< HEAD
      icon: Brain,
      title: 'AI Integration',
      description: 'Enterprise-grade AI solutions for automation and intelligent decision making.',
      benefits: [''Machine learning', 'Predictive analytics', 'Process automation', 'Intelligent insights'']
  },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Advanced data management and analytics for enterprise-scale operations.',
      benefits: [''Big data processing', 'Real-time analytics', 'Data governance', 'Business intelligence'']
  },
    {
      icon: Users,
      title: 'User Management',
      description: 'Comprehensive user and access management for large organizations.',
      benefits: [''Single sign-on', 'Role-based access', 'User provisioning', 'Audit trails'']
  },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration with existing enterprise systems and workflows.',
      benefits: [''API integration', 'Legacy system support', 'Workflow automation', 'Data synchronization'']
  },
  ];
const solutions = const solutions = const solutions = [
    {
  },
    {
      title: 'Customer Relationship Management',
      description: 'Advanced CRM systems for managing customer relationships and sales processes.',
      icon: Users,
      benefits: [''Lead management', 'Sales automation', 'Customer analytics', 'Marketing automation'']
  },
    {
      title: 'Business Intelligence',
      description: 'Powerful BI solutions for data-driven decision making and strategic planning.',
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive business intelligence and data analytics platforms.'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 dedicated support team with enterprise SLA guarantees.'
    }
  ];

  const solutions = [
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation solutions for modern enterprises.',
      benefits: ['Process automation', 'Legacy system modernization', 'Cloud migration']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions to enhance business operations and decision-making.',
      benefits: ['Predictive analytics', 'Natural language processing', 'Computer vision']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect enterprise data and systems.',
      benefits: ['Threat detection', 'Identity management', 'Compliance monitoring']
    },
    {
      title: 'Data Management',
      description: 'Enterprise data management and analytics solutions.',
      benefits: ['Data integration', 'Real-time processing', 'Business intelligence']
    }
  ];

  const benefits = [
    'Reduced operational costs by up to 40%',
    'Improved efficiency and productivity',
    'Enhanced security and compliance',
    'Scalable solutions that grow with your business',
    '24/7 dedicated support and monitoring',
    'Custom solutions tailored to your needs'
  ];
<<<<<<< HEAD
          </h1>
          <p></p>
            Comprehensive enterprise-grade solutions designed for large-scale business operations.;
            Transform your organization with cutting-edge technology and expert implementation.
            </button>
            <button></button>
              View Case Studies,
            </button></button></button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
            ))}

          </div>
        </div>
      </section>
      {/* Features Section */}
              Built for scale, security, and performance to meet the demands of large organizations.
            </p></p></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div></div>
                  <feature>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3></h3></h3>
=======

  return (
    <>
      <Helmet>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise solutions including digital transformation, AI, cybersecurity, and cloud infrastructure for large organizations." />
        <meta name="keywords" content="enterprise solutions, digital transformation, AI enterprise, cybersecurity, cloud infrastructure, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                  Enterprise Solutions
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Transform your enterprise with our comprehensive suite of AI and IT solutions 
                  designed for large organizations and Fortune 500 companies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Consultation
                  </a>
                  <a
                    href="/demo"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Request Demo
                  </a>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Solutions Section */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Enterprise Solutions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {solutions.map((solution, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                      <p className="text-gray-300 mb-6">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
                </div>
              </div>

<<<<<<< HEAD
                      {benefit})
                    </li>)
=======
              {/* Benefits Section */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Why Choose Our Enterprise Solutions?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Our enterprise solutions are designed to deliver measurable results 
                    and drive business transformation at scale.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
                  ))}
                </div>
              </div>

<<<<<<< HEAD
          </div>
        </div>
      </section>
              End-to-end enterprise solutions that address every aspect of your business operations.
            </p></p></p>
          </div>
                    </li>

                  ))}
                </ul>
=======
              {/* Case Studies */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                  Success Stories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Fortune 500 Retailer</h3>
                    <p className="text-gray-300 mb-4">
                      Implemented AI-powered inventory management system resulting in 30% 
                      reduction in stockouts and 25% improvement in efficiency.
                    </p>
                    <div className="text-2xl font-bold text-green-400">30% Reduction</div>
                    <div className="text-sm text-gray-400">in stockouts</div>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Global Bank</h3>
                    <p className="text-gray-300 mb-4">
                      Deployed comprehensive cybersecurity solution preventing 99.9% 
                      of potential threats and ensuring regulatory compliance.
                    </p>
                    <div className="text-2xl font-bold text-blue-400">99.9%</div>
                    <div className="text-sm text-gray-400">threat prevention</div>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Manufacturing Giant</h3>
                    <p className="text-gray-300 mb-4">
                      Migrated entire infrastructure to cloud resulting in 40% cost 
                      reduction and 50% improvement in system performance.
                    </p>
                    <div className="text-2xl font-bold text-purple-400">40% Savings</div>
                    <div className="text-sm text-gray-400">in operational costs</div>
                  </div>
                </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
              </div>

<<<<<<< HEAD
          </div>
        </div>
      </section>
      {/* Benefits Section */}
            </div>
          </div>
        </section>
                </button>
=======
              {/* CTA Section */}
              <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Enterprise?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let our enterprise experts help you design and implement solutions 
                  that drive real business value and competitive advantage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Enterprise Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Call (302) 464-0950
                  </a>
                </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>
      {/* CTA Section */}
          </div>
        </div>
      </section>
      <Footer / /></Footer>
  ),
=======
      </main>
      
      <Footer />
    </>
  );
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
};

export default EnterprisePage;