import React from 'react'
import { Brain, BarChart, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata = {
  title: 'AI Powered DevOps | Zion Tech Group',
  description: 'Professional AI powered DevOps services by Zion Tech Group.',
  keywords: 'AI, powered, devops, automation, CI/CD',
  openGraph: {
    title: 'AI Powered DevOps | Zion Tech Group',
    description: 'Professional AI powered DevOps services by Zion Tech Group.',
    type: 'website',
  },
};

const AiPoweredDevopsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation for your entire DevOps pipeline with machine learning algorithms.'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive monitoring and analytics to optimize your development processes.'
    },
    {
      icon: Target,
      title: 'Precision Deployment',
      description: 'Automated testing and deployment with zero-downtime strategies.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuous optimization of your infrastructure and application performance.'
    }
  ];

  const benefits = [
    'Reduced deployment time by 80%',
    '99.9% uptime guarantee',
    'Automated security scanning',
    'Real-time performance monitoring',
    'Cost optimization recommendations',
    '24/7 intelligent support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered DevOps
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your development workflow with intelligent automation, 
              advanced analytics, and AI-driven optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-16">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-16">
              Why Choose Our AI DevOps?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of companies already using our AI-powered DevOps solutions.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiPoweredDevopsPage;