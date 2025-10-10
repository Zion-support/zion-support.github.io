'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, DollarSign, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';
const FinancialITPage: React.FC = () => {
  const features = [;
    {
      icon: DollarSign,
      title: '[^']*',
      description: '[^']*',
      benefits: ['Automated controls', 'Compliance reporting', 'Audit trails']}
    },;
    {
      icon: Zap,
      title: '[^']*',
      description: '[^']*',
      benefits: ['Data encryption', 'Access controls', 'Security monitoring']}
    },;
    {
      icon: Clock,
      title: '[^']*',
      description: '[^']*',
      benefits: ['Low latency', 'High throughput', 'Real-time analytics']}
    },;
    {
      icon: Users,
      title: '[^']*',
      description: '[^']*',
      benefits: ['Multi-regulation support', 'Automated compliance', 'Risk management']}
    },;
    {
      icon: Shield,
      title: '[^']*',
      description: '[^']*',
      benefits: ['Real-time detection', 'Machine learning', 'Risk scoring']}
    },;
    {
      icon: BarChart,
      title: '[^']*',
      description: '[^']*',
      benefits: ['Real-time reporting', 'Predictive analytics', 'Risk assessment']}
    }
  ];
  const services = [;
    {
      icon: '[^']*',
      title: '[^']*',
      description: 'Core banking systems and digital banking platforms'}
    },;
    {
      icon: '[^']*',
      title: '[^']*',
      description: 'Secure payment gateways and transaction processing'}
    },;
    {
      icon: '[^']*',
      title: '[^']*',
      description: 'Advanced risk assessment and management tools'}
    },;
    {
      icon: '[^']*',
      title: '[^']*',
      description: 'Cybersecurity and data protection solutions'}
    }
  ];
  const benefits = [;
    '[^']*',
    '[^']*',
    '[^']*',
    '[^']*',
    '[^']*',
    'Advanced Analytics';
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"></div>
      <Helmet>
        <title>Financial IT Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional financial IT solutions by Zion Tech Group. SOX compliance, security, and regulatory solutions for financial services." />
        <meta name="keywords" content="financial IT, SOX compliance, banking solutions, financial security, Zion Tech Group" />
      </Helmet>
      <Navigation />;
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden"></section>
        <div className="absolute inset-0 bg-Service Feature animate-pulse" style={{ animationDelay: '1s' }} /></div>
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">;
            Financial Services;
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">;
              IT Solutions;
            </span>;
          </h1>;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">;
            Specialized IT solutions for financial services with SOX compliance, security, and regulatory requirements.;
            Built for banks, credit unions, investment firms, and fintech companies.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">;
              Get Started Today;
              <ArrowRight className="inline-block ml-2 w-5 h-5" />;
            </button>;
            <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">;
              Schedule Demo;
            </button>;
          </div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Financial IT Solutions</h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Comprehensive IT solutions designed specifically for financial services industry;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 group"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <feature.icon className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-300 mb-4">{feature.description}</p>;
                <ul className="space-y-2">;
                  {feature.benefits.map((benefit, benefitIndex) => (}
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">;
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />;
                      {benefit}
                    </li>;
                  ))}
                </ul>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Services Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">;
              Financial Services;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Comprehensive IT solutions for all aspects of financial services and banking operations.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {services.map((service, index) => (}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"></div>
                <div className="text-4xl mb-4">{service.icon}</div>;
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>;
                <p className="text-gray-300">{service.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">;
              Why Choose Our Financial IT Solutions?;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Experience the benefits of modern financial technology with our proven solutions.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            {benefits.map((benefit, index) => (}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                  <CheckCircle className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Financial IT Excellence?</h2>;
          <p className="text-xl text-gray-300 mb-8">;
            Join leading financial institutions using our specialized IT solutions for compliance and security;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">;
              Start Free Trial;
            </button>;
            <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">;
              Contact Sales;
            </button>;
          </div>;
        </div>;
      </section>;
      <Footer />;
    </div>;
  )}
export default FinancialITPage;
