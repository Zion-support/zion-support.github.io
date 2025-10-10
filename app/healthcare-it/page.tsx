'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Heart, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';
      icon: Heart,
      title: '[^']*',
      description: '[^']*',
      benefits: ['Automated compliance', 'Audit trails', 'Risk management']},;
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
      benefits: ['Always-on monitoring', 'Instant alerts', 'System health']}
    },;
    {
      icon: Users,
      title: '[^']*',
      description: '[^']*',
      benefits: ['EHR integration', 'Device connectivity', 'Data exchange']}
    },;
    {
      icon: Shield,
      title: '[^']*',
      description: '[^']*',
      benefits: ['Threat detection', 'Incident response', 'Security training']}
    },;
    {
      icon: BarChart,
      title: '[^']*',
      description: '[^']*',
      benefits: ['Patient insights', 'Operational metrics', 'Outcome tracking']}
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"></div>;
      <SEOOptimizer;
        title="Healthcare IT Solutions - Zion Tech Group";
        description="Comprehensive healthcare IT solutions including HIPAA compliance, patient data security, and system integration for healthcare organizations.";
        keywords="healthcare IT, HIPAA compliance, patient data security, EHR integration, healthcare analytics, medical technology";
      />;
      <Navigation />;
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden"></section>;
        <div className="absolute inset-0 bg-Service Feature animate-pulse" style={{ animationDelay: '1s' }} /></div>;
        <div className="relative max-w-7xl mx-auto text-center"></div>;
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">;
            Healthcare;
            <span className="block bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">;
              IT Solutions;
            </span>;
          </h1>;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">;
            Secure, compliant, and innovative IT solutions designed specifically for healthcare organizations.;
            Protect patient data while improving operational efficiency.;
          </p>;
              <ArrowRight className="inline-block ml-2 w-5 h-5" />;
            </button>;
            <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">;
              Learn More;
            </button>;
</div>;
        </div>;
      </section>;
{/* Features Section */}
      <section className="py-20 px-4"></section>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Comprehensive IT solutions for all aspects of healthcare delivery and management.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>;
            {services.map((service, index) => (}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"></div>;
                <div className="text-4xl mb-4">{service.icon}</div>;
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>;
                <p className="text-gray-300">{service.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20 px-4"></section>;
        <div className="max-w-7xl mx-auto"></div>;
          <div className="text-center mb-16"></div>;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Why Choose Our Healthcare IT Solutions?;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Experience the benefits of modern healthcare technology with our proven solutions.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>;
            {benefits.map((benefit, index) => (}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"></div>;
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>;
                  <CheckCircle className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
<section className="py-20 px-4"></section>;
            </button>;
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-colors">;
              View Case Studies;
            </button>;
          </div>;
        </div>;
      </section>;
      <Footer />;
</div>;
  )}
