'use client';
import React from 'react';
import { Helmet , CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, Target, TrendingUp, Database, Users, Settings  } from "react-helmet-async";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const SpecializedServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      benefits: ['Smart automation', 'Predictive analytics', 'Intelligent insights', 'Process optimization']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      benefits: ['Real-time processing', 'High-speed analytics', 'Optimized performance', 'Scalable infrastructure']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance standards',
      benefits: ['End-to-end encryption', 'Compliance standards', 'Access controls', 'Audit trails']
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale your operations worldwide with our robust infrastructure',
      benefits: ['Global deployment', 'Edge computing', 'Load balancing', 'Geographic optimization']
    }
  ];
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce operational costs by 30%',
    'Improve decision-making with real-time insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with cutting-edge technology',
    'Ensure 99.9% uptime and reliability'
  ];
  return (
    <React.Fragment /><Helmet /><title>Specialized Services - Zion Tech Group</title>
        <meta name="description" content="Advanced specialized services for modern businesses including AI solutions, automation, and digital transformation." />
        <meta name="keywords" content="specialized services, AI solutions, automation, digital transformation, business optimization" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /><Navigation />
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" /><div className="max-w-7xl mx-auto text-center" /><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Specialized Services</h1>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advanced specialized services designed to transform your business with cutting-edge technology and expert solutions.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /><button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started</button>
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo</button>
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Services?</h2>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our specialized solutions deliver unmatched performance, security, and scalability.</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                </div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300" /><div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4" /><feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits</h2>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of our specialized solutions for your business.</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                </div><div key={index} className="flex items-start space-x-3" /><CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" /><div className="max-w-4xl mx-auto text-center" /><div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?</h2>
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Contact our experts to discuss your specialized service needs and get a customized solution.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" /><button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center" /><Phone className="mr-2 h-5 w-5" />
                  Call Now;
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center" /><Mail className="mr-2 h-5 w-5" />
                  Email Us;
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default SpecializedServicesPage;