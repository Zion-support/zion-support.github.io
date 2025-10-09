'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Scale, FileText, Clock, Shield, Brain, Zap, Target, BarChart, Users, Globe, Star, ArrowRight } from 'lucide-react';

const AILegalAssistantPage: React.FC = () => {
  const legalServices = [
    {
      title: 'AI Legal Document Analyzer Pro',
      description: 'Advanced AI-powered legal document analysis with contract review, risk assessment, and compliance checking.',
      icon: '⚖️',
      price: '$299/month',
      features: [
        'Contract Analysis & Review',
        'Risk Assessment & Scoring',
        'Compliance Checking',
        'Legal Research Automation',
        'Document Comparison',
        'Clause Extraction & Analysis',
        'Deadline Tracking',
        'Legal Citation Verification'
      ],
      benefits: [
        'Reduce document review time by 80%',
        'Identify risks 90% faster',
        'Improve accuracy by 95%',
        'Save 30+ hours per week',
        'Reduce legal costs by 60%'
      ],
      marketPrice: '$500-1,200/month',
      category: 'Legal Technology',
      technologies: ['OpenAI GPT-4', 'Claude AI', 'Custom Legal AI Models', 'NLP', 'Document Processing', 'Blockchain'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-legal-assistant',
      popular: true,
      stats: {
        clients: '500+',
        documentsProcessed: '50,000+',
        accuracy: '98.5%',
        timeSaved: '30+ hours/week'
      }
    },
    {
      title: 'Smart Contract Generator',
      description: 'AI-powered contract generation with customizable templates, legal compliance, and automated negotiation.',
      icon: '📝',
      price: '$199/month',
      features: [
        'Contract Template Library',
        'AI-Powered Generation',
        'Legal Compliance Check',
        'Custom Clause Creation',
        'Multi-Language Support',
        'Version Control',
        'Electronic Signatures',
        'Negotiation Assistance'
      ],
      benefits: [
        'Generate contracts 10x faster',
        'Reduce legal errors by 95%',
        'Ensure compliance automatically',
        'Streamline negotiations'
      ],
      marketPrice: '$300-800/month',
      category: 'Legal Technology',
      technologies: ['AI/ML', 'Natural Language Processing', 'Blockchain', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/smart-contract-generator'
    },
    {
      title: 'Legal Research AI Assistant',
      description: 'Intelligent legal research with case law analysis, precedent finding, and citation verification.',
      icon: '🔍',
      price: '$149/month',
      features: [
        'Case Law Research',
        'Precedent Analysis',
        'Citation Verification',
        'Legal Database Search',
        'Statute Analysis',
        'Regulation Updates',
        'Court Filing Assistance',
        'Research Reports'
      ],
      benefits: [
        'Research 5x faster',
        'Find relevant cases instantly',
        'Stay updated on law changes',
        'Improve research accuracy'
      ],
      marketPrice: '$200-600/month',
      category: 'Legal Technology',
      technologies: ['AI Search', 'Legal Databases', 'Machine Learning', 'Python', 'React'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/legal-research-ai'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Legal Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered legal solutions including document analysis, contract generation, and legal research automation. Transform your legal practice with cutting-edge technology." />
        <meta name="keywords" content="AI legal assistant, legal document analysis, contract generation, legal research, compliance checking, legal technology" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-legal-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Legal Assistant
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Revolutionize Your Legal Practice with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Advanced AI-powered legal solutions that automate document analysis, contract generation, 
              and legal research. Save time, reduce costs, and improve accuracy in your legal practice.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400">500+</div>
                <div className="text-gray-300">Law Firms</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400">50K+</div>
                <div className="text-gray-300">Documents Processed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400">98.5%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-400">80%</div>
                <div className="text-gray-300">Time Saved</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our AI Legal Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {legalServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-6xl mb-6 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-cyan-400 text-center mb-2">
                      {service.price}
                    </div>
                    <div className="text-gray-400 text-center text-sm">
                      Market Price: {service.marketPrice}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <TrendingUp className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <a
                      href={service.link}
                      className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today for a free consultation and see how AI can revolutionize your legal workflow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center text-white">
                <Phone className="w-6 h-6 mr-2 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-white">
                <Mail className="w-6 h-6 mr-2 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="w-6 h-6 mr-2 text-cyan-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILegalAssistantPage;