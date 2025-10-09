import React from 'react';
import { CheckCircle, Shield, Users, Zap, Globe, Award } from 'lucide-react';

const EnterprisePage: React.FC = () => {
  const enterpriseFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance, encryption, and advanced threat protection',
      benefits: ['SOC 2 Type II certified', 'End-to-end encryption', 'Advanced threat detection', 'Compliance support']
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 dedicated support team with enterprise account managers and technical specialists',
      benefits: ['Dedicated account manager', '24/7 technical support', 'Priority response times', 'Custom training']
    },
    {
      icon: Zap,
      title: 'Custom Solutions',
      description: 'Tailored AI and IT solutions designed specifically for your enterprise requirements',
      benefits: ['Custom development', 'API integration', 'White-label options', 'Scalable architecture']
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Worldwide deployment capabilities with local data centers and compliance support',
      benefits: ['Multi-region deployment', 'Data residency options', 'Local compliance', 'Global support']
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      description: 'AI-powered fraud detection, risk management, and automated trading systems',
      clients: '50+ banks and financial institutions'
    },
    {
      name: 'Healthcare',
      description: 'Medical AI, patient data analysis, and diagnostic assistance solutions',
      clients: '100+ healthcare providers'
    },
    {
      name: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization',
      clients: '200+ manufacturing companies'
    },
    {
      name: 'Retail & E-commerce',
      description: 'Personalization engines, inventory optimization, and customer analytics',
      clients: '500+ retail businesses'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your enterprise with our comprehensive AI and IT solutions. Built for scale, 
            security, and performance to meet the demands of large organizations.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">SOC 2</div>
              <div className="text-gray-300">Certified</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Enterprise-Grade Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="text-sm text-cyan-600 font-medium">{industry.clients}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Enterprise Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Strategy & Consulting</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive AI strategy development, implementation planning, and digital transformation consulting.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• AI readiness assessment</li>
                <li>• Implementation roadmap</li>
                <li>• Change management</li>
                <li>• ROI analysis</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom AI Development</h3>
              <p className="text-gray-300 mb-4">
                Bespoke AI solutions tailored to your specific business requirements and industry needs.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Custom ML models</li>
                <li>• API development</li>
                <li>• Integration services</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Managed AI Services</h3>
              <p className="text-gray-300 mb-4">
                Fully managed AI services with 24/7 monitoring, maintenance, and continuous optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 24/7 monitoring</li>
                <li>• Automated maintenance</li>
                <li>• Performance optimization</li>
                <li>• Security updates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-purple-100 mb-6">
            Contact our enterprise team to discuss your specific requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Enterprise Sales
            </a>
            <a
              href="/demo"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Enterprise Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterprisePage;