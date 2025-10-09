import React from 'react';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      title: 'AI Code Review Assistant Pro',
      description: 'Advanced automated code analysis with AI-powered bug detection, security vulnerability scanning, and performance optimization suggestions.',
      icon: '🔍',
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Code quality metrics', 'Git integration', 'Custom rule sets'],
      benefits: ['Reduce bugs by 70%', 'Improve code quality', 'Save 15+ hours/week', 'Prevent security vulnerabilities'],
      marketPrice: '$150-300/month',
      category: 'Developer Tools',
      technologies: ['GitHub Actions', 'SonarQube', 'ESLint', 'Custom AI Models', 'OpenAI Codex'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-code-review',
      popular: true
    },
    {
      title: 'AI Test Generation Suite',
      description: 'Intelligent automated test generation with coverage analysis, performance testing, and regression testing automation.',
      icon: '🧪',
      price: '$149/month',
      features: ['Auto test generation', 'Coverage analysis', 'Performance testing', 'Regression testing', 'CI/CD integration', 'Custom test frameworks'],
      benefits: ['Increase test coverage by 80%', 'Reduce testing time by 70%', 'Catch bugs earlier', 'Improve code reliability'],
      marketPrice: '$250-500/month',
      category: 'Developer Tools',
      technologies: ['Jest', 'Cypress', 'Selenium', 'Custom AI Models', 'GitHub Actions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-test-generation',
      popular: true
    },
    {
      title: 'AI Content Studio Pro',
      description: 'Complete content creation suite with AI-powered writing, editing, SEO optimization, and multi-platform publishing.',
      icon: '✍️',
      price: '$199/month',
      features: ['AI writing assistant', 'SEO optimization', 'Content planning', 'Multi-platform publishing', 'Brand voice training', 'Analytics dashboard'],
      benefits: ['Increase content output by 300%', 'Improve SEO rankings', 'Maintain brand consistency', 'Save 20+ hours/week'],
      marketPrice: '$400-800/month',
      category: 'Content Creation',
      technologies: ['GPT-4', 'Claude', 'Custom AI Models', 'SEO Tools', 'CMS Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-content-studio',
      popular: true
    }
  ];

  const categories = [
    { name: 'Developer Tools', count: microSAASServices.filter(s => s.category === 'Developer Tools').length },
    { name: 'Content Creation', count: microSAASServices.filter(s => s.category === 'Content Creation').length },
    { name: 'Business Automation', count: microSAASServices.filter(s => s.category === 'Business Automation').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            50+ AI-powered tools and applications designed to automate and optimize your business processes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {microSAASServices.map((service, index) => (
            <div key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 text-center">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-cyan-900/50 text-cyan-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">{service.price}</div>
                <div className="text-sm text-gray-400 mb-4">Market price: {service.marketPrice}</div>
                <a 
                  href="/contact" 
                  className="cyber-button inline-flex items-center px-6 py-3 text-sm font-medium"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to learn more about our Micro SAAS solutions and how they can transform your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button-secondary px-8 py-4 text-lg font-semibold flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASPage;