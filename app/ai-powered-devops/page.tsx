
import React from "react";
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { Brain, ArrowRight, CheckCircle } from "lucide-react";

export 
const AiPoweredDevopsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Automated CI/CD Pipelines',
      description: 'Streamlined development and deployment processes',
      benefits: ['Faster deployments', 'Reduced errors', 'Automated testing']
    },
    {
      icon: Brain,
      title: 'Intelligent Monitoring',
      description: 'AI-powered monitoring and alerting systems',
      benefits: ['Proactive alerts', 'Performance insights', 'Anomaly detection']
    },
    {
      icon: Brain,
      title: 'Predictive Scaling',
      description: 'Automated scaling based on predictive analytics',
      benefits: ['Cost optimization', 'Performance maintenance', 'Resource efficiency']
    },
    {
      icon: Brain,
      title: 'Security Automation',
      description: 'Automated security scanning and compliance checks',
      benefits: ['Vulnerability detection', 'Compliance monitoring', 'Security updates']
    },
    {
      icon: Brain,
      title: 'Performance Optimization',
      description: 'Continuous performance monitoring and optimization',
      benefits: ['Speed improvements', 'Resource optimization', 'User experience']
    },
    {
      icon: Brain,
      title: 'Cost Management',
      description: 'Intelligent cost tracking and optimization',
      benefits: ['Budget control', 'Cost analysis', 'Resource optimization']
    }
  ];
    
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered DevOps
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI-powered DevOps services powered by advanced AI and technology.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Transform your operations with our cutting-edge AI-powered DevOps solutions. 
              We provide comprehensive services to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our AI-Powered DevOps?
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-lg text-gray-300">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-4 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AiPoweredDevopsPage;
