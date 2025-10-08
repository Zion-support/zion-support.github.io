import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Brain, Target, BarChart, Clock, Users, TrendingUp, Globe, MessageSquare, Eye, Sparkles } from 'lucide-react';

const AILegalPage: React.FC = () => {
  const legalServices = [
    {
      title: 'AI Legal Document Analyzer Pro',
      description: 'Advanced legal document analysis with contract review, risk assessment, and compliance checking using AI.',
      icon: '⚖️',
      price: '$399/month',
      features: [
        'Contract analysis and review',
        'Risk assessment algorithms',
        'Compliance checking',
        'Document comparison',
        'Legal research automation',
        'Clause extraction and analysis'
      ],
      benefits: [
        'Reduce legal review time by 60%',
        'Improve accuracy by 95%',
        'Lower legal costs by 40%',
        'Ensure compliance automatically'
      ],
      marketPrice: '$800-1500/month',
      technologies: ['NLP', 'Machine Learning', 'Python', 'React', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Compliance Monitoring Suite',
      description: 'Automated compliance monitoring with regulatory updates, risk assessment, and audit preparation.',
      icon: '📜',
      price: '$299/month',
      features: [
        'Regulatory monitoring',
        'Risk assessment algorithms',
        'Audit preparation automation',
        'Policy management',
        'Training modules',
        'Automated reporting'
      ],
      benefits: [
        'Ensure 100% compliance',
        'Reduce audit time by 70%',
        'Minimize compliance risks',
        'Stay updated on regulations'
      ],
      marketPrice: '$600-1200/month',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Legal Research Assistant',
      description: 'Intelligent legal research with case law analysis, precedent identification, and citation verification.',
      icon: '🔍',
      price: '$199/month',
      features: [
        'Case law analysis',
        'Precedent identification',
        'Citation verification',
        'Legal database search',
        'Research automation',
        'Citation formatting'
      ],
      benefits: [
        'Reduce research time by 80%',
        'Improve research accuracy',
        'Find relevant cases faster',
        'Ensure proper citations'
      ],
      marketPrice: '$400-800/month',
      technologies: ['NLP', 'Legal APIs', 'Machine Learning', 'React', 'MongoDB'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Contract Management System',
      description: 'Intelligent contract lifecycle management with automated review, renewal tracking, and risk monitoring.',
      icon: '📋',
      price: '$249/month',
      features: [
        'Contract review automation',
        'Renewal tracking',
        'Risk monitoring',
        'Workflow automation',
        'Analytics dashboard',
        'Integration capabilities'
      ],
      benefits: [
        'Reduce contract risks by 50%',
        'Improve compliance by 70%',
        'Streamline processes by 60%',
        'Better visibility and control'
      ],
      marketPrice: '$500-1000/month',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Intellectual Property Manager',
      description: 'Comprehensive IP management with patent analysis, trademark monitoring, and infringement detection.',
      icon: '💡',
      price: '$349/month',
      features: [
        'Patent analysis and search',
        'Trademark monitoring',
        'Infringement detection',
        'IP portfolio management',
        'Renewal tracking',
        'Competitive analysis'
      ],
      benefits: [
        'Protect intellectual property',
        'Reduce IP risks by 60%',
        'Optimize IP portfolio',
        'Stay ahead of competitors'
      ],
      marketPrice: '$700-1400/month',
      technologies: ['NLP', 'Patent APIs', 'Machine Learning', 'React', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Legal Billing Optimizer',
      description: 'Intelligent legal billing with time tracking, cost analysis, and invoice optimization.',
      icon: '💰',
      price: '$149/month',
      features: [
        'Automated time tracking',
        'Cost analysis and optimization',
        'Invoice generation',
        'Billing accuracy checking',
        'Client reporting',
        'Profitability analysis'
      ],
      benefits: [
        'Improve billing accuracy by 90%',
        'Reduce billing time by 70%',
        'Increase profitability by 25%',
        'Enhance client satisfaction'
      ],
      marketPrice: '$300-600/month',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Legal Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered legal solutions for document analysis, compliance monitoring, legal research, and contract management. Transform your legal operations." />
        <meta name="keywords" content="AI legal, legal technology, document analysis, compliance monitoring, legal research, contract management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-slate-700 to-slate-900 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Legal Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-100 max-w-3xl mx-auto">
                Revolutionary AI-powered legal solutions for document analysis, compliance monitoring, and legal research. Transform your legal operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-700 transition-colors"
                >
                  ✉️ Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Legal Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Advanced AI technology combined with deep legal expertise to streamline your legal operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-slate-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Analysis</h3>
                <p className="text-gray-600">Advanced AI for accurate legal document analysis</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Time Savings</h3>
                <p className="text-gray-600">Reduce legal work time by up to 80%</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Accuracy</h3>
                <p className="text-gray-600">95% accuracy in legal document analysis</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Reduction</h3>
                <p className="text-gray-600">Reduce legal costs by up to 40%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Legal Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI-powered legal tools for every practice area
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {legalServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-slate-700">{service.price}</span>
                      <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Save up to 50% vs market rates
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-slate-100 text-slate-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium">{service.contactInfo}</p>
                  </div>

                  <div className="flex gap-2">
                    <a 
                      href="tel:+13024640950"
                      className="flex-1 bg-slate-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors text-center"
                    >
                      Call Now
                    </a>
                    <a 
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 border border-slate-700 text-slate-700 py-2 px-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors text-center"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Legal Operations?
            </h2>
            <p className="text-xl mb-8 text-slate-100">
              Contact our AI legal experts for a free consultation and custom legal technology strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+13024640950"
                className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-700 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-sm text-slate-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILegalPage;