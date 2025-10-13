'use client';
import React from 'react';
import { Helmet , CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, Target, TrendingUp, Database, Users, Settings  } from "react-helmet-async";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const ITTrainingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Scale your solutions globally with intelligent distribution.',
      benefits: ['Global deployment', 'Edge computing', 'Load balancing', 'Geographic optimization']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Enterprise-grade security to protect your data and operations.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support']
    }
  ];
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  return (
    <React.Fragment /><Helmet /><title>IT Training - Zion Tech Group</title>
        <meta name="description" content="Advanced IT training solutions powered by artificial intelligence" />
        <meta name="keywords" content="IT training, artificial intelligence, business solutions, professional development" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /><Navigation />
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT Training</h1>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our advanced IT training solutions. Powered by cutting-edge AI technology and industry expertise.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" /><a href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2" /><span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#features" className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2" /><span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section id="features" className="py-20 px-4" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our IT Training?</h2>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our IT training solutions deliver unmatched performance, security, and scalability.</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300" /><div className="flex items-center mb-4" /><feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      </ul><li key={idx} className="flex items-center text-sm text-gray-400" /><CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-4xl font-bold text-white mb-6">
                Key Benefits</h2>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience the power of our IT training solutions for your business.</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                </div><div key={index} className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-lg p-6 border border-cyan-500/20" /><CheckCircle className="w-6 h-6 text-cyan-400 mb-3" />
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4" /><div className="max-w-4xl mx-auto text-center" /><h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?</h2>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your IT training needs and get a customized solution.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /><a href="tel:+1234567890" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2" /><Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a href="mailto:info@ziontechgroup.com" className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2" /><Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default ITTrainingPage;