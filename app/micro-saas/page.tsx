import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      title: 'AI Code Review Assistant Pro',
      description: 'Automated code review with AI-powered suggestions, security scanning, and performance optimization recommendations.',
      icon: '🔍',
      price: '$29/month',
      features: [
        'Automated Code Analysis',
        'Security Vulnerability Detection',
        'Performance Optimization Tips',
        'Code Quality Metrics',
        'Integration with Git',
        'Team Collaboration Tools'
      ],
      benefits: [
        'Reduce code review time by 70%',
        'Catch bugs before deployment',
        'Improve code quality consistently',
        'Save 10+ hours per week'
      ],
      category: 'Development Tools',
      technologies: ['AI/ML', 'Git Integration', 'Security Scanning', 'Code Analysis']
    },
    {
      title: 'Smart Project Management',
      description: 'AI-powered project management with automated task assignment, progress tracking, and deadline predictions.',
      icon: '📊',
      price: '$49/month',
      features: [
        'AI Task Assignment',
        'Progress Tracking',
        'Deadline Predictions',
        'Team Performance Analytics',
        'Resource Optimization',
        'Automated Reporting'
      ],
      benefits: [
        'Increase team productivity by 40%',
        'Reduce project delays by 60%',
        'Improve resource allocation',
        'Better project visibility'
      ],
      category: 'Project Management',
      technologies: ['AI/ML', 'Analytics', 'Automation', 'Reporting']
    },
    {
      title: 'Customer Support AI',
      description: 'Intelligent customer support with automated responses, sentiment analysis, and ticket routing.',
      icon: '🎧',
      price: '$39/month',
      features: [
        'Automated Response System',
        'Sentiment Analysis',
        'Smart Ticket Routing',
        'Knowledge Base Integration',
        'Multi-language Support',
        'Performance Analytics'
      ],
      benefits: [
        'Handle 80% of queries automatically',
        'Improve customer satisfaction',
        'Reduce response time to seconds',
        '24/7 availability'
      ],
      category: 'Customer Support',
      technologies: ['NLP', 'AI/ML', 'Automation', 'Analytics']
    },
    {
      title: 'Marketing Automation Suite',
      description: 'Complete marketing automation with email campaigns, social media management, and lead scoring.',
      icon: '📈',
      price: '$59/month',
      features: [
        'Email Campaign Automation',
        'Social Media Management',
        'Lead Scoring & Nurturing',
        'A/B Testing Tools',
        'Analytics & Reporting',
        'CRM Integration'
      ],
      benefits: [
        'Increase lead conversion by 50%',
        'Automate repetitive tasks',
        'Improve campaign performance',
        'Better ROI tracking'
      ],
      category: 'Marketing',
      technologies: ['Automation', 'AI/ML', 'Analytics', 'CRM Integration']
    },
    {
      title: 'Financial Analytics Dashboard',
      description: 'Real-time financial analytics with expense tracking, budget forecasting, and investment insights.',
      icon: '💰',
      price: '$79/month',
      features: [
        'Real-time Expense Tracking',
        'Budget Forecasting',
        'Investment Analysis',
        'Financial Reporting',
        'Tax Preparation Tools',
        'Risk Assessment'
      ],
      benefits: [
        'Improve financial visibility',
        'Make data-driven decisions',
        'Reduce financial risks',
        'Save time on reporting'
      ],
      category: 'Finance',
      technologies: ['Analytics', 'AI/ML', 'Data Visualization', 'Reporting']
    },
    {
      title: 'HR Management System',
      description: 'Complete HR solution with employee management, performance tracking, and recruitment automation.',
      icon: '👥',
      price: '$69/month',
      features: [
        'Employee Database',
        'Performance Tracking',
        'Recruitment Automation',
        'Payroll Management',
        'Benefits Administration',
        'Compliance Monitoring'
      ],
      benefits: [
        'Streamline HR processes',
        'Improve employee engagement',
        'Reduce administrative overhead',
        'Ensure compliance'
      ],
      category: 'Human Resources',
      technologies: ['Database', 'Automation', 'Analytics', 'Compliance']
    }
  ];

  const categories = [...new Set(microSAASServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Powerful AI-driven micro SAAS tools for modern businesses. 16+ ready-to-use applications starting at $29/month." />
        <meta name="keywords" content="micro saas, saas tools, business automation, ai tools, productivity software" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful AI-driven tools for modern businesses. 16+ ready-to-use applications designed to streamline your operations and boost productivity.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">16+</div>
              <div className="text-gray-300">SAAS Tools</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$29</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Micro SAAS Tool
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      {service.category}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    Contact: kleber@ziontechgroup.com | +1 302 464 0950
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our micro SAAS solutions today and see immediate results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;