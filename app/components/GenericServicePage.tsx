import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Clock, Shield, Zap } from 'lucide-react';
import Layout from '../layout';

interface GenericServicePageProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color?: string;
  features?: string[];
  benefits?: string[];
  pricing?: {
    starter: { price: string; features: string[] };
    professional: { price: string; features: string[] };
    enterprise: { price: string; features: string[] };
  };
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({
  title,
  description,
  icon: Icon,
  color = 'from-cyan-500 to-purple-600',
  features = [],
  benefits = [],
  pricing
}) => {
  const defaultFeatures = [
    'Advanced AI Technology',
    '24/7 Support',
    'Scalable Solutions',
    'Custom Integration',
    'Performance Monitoring',
    'Security & Compliance'
  ];

  const defaultBenefits = [
    'Increased Efficiency',
    'Cost Reduction',
    'Better User Experience',
    'Competitive Advantage',
    'Data-Driven Insights',
    'Future-Proof Technology'
  ];

  const serviceFeatures = features.length > 0 ? features : defaultFeatures;
  const serviceBenefits = benefits.length > 0 ? benefits : defaultBenefits;

  return (
    <Layout
      title={`${title} - Zion Tech Group`}
      description={description}
      keywords={`${title.toLowerCase()}, AI solutions, IT services, technology, innovation`}
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Icon className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our {title}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our {title} can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GenericServicePage;