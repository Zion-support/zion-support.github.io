import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, Phone, Mail } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    // AI-Powered Services
    {
      title: 'AI Code Review Assistant',
      description: 'Automated code analysis, bug detection, and security vulnerability scanning for developers.',
      icon: '🔍',
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization suggestions', 'Code quality metrics', 'Git integration'],
      benefits: ['Reduce bugs by 70%', 'Improve code quality', 'Save 10+ hours/week on reviews'],
      marketPrice: '$150-300/month',
      category: 'Developer Tools',
      technologies: ['GitHub Actions', 'SonarQube', 'ESLint', 'Prettier', 'Custom AI Models'],
      link: 'https://ziontechgroup.com/ai-code-review',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI-Powered SEO Optimizer',
      description: 'Advanced SEO analysis and optimization with AI-driven content suggestions and keyword research.',
      icon: '🎯',
      price: '$199/month',
      features: ['AI content optimization', 'Keyword research automation', 'Competitor analysis', 'Technical SEO audit', 'Rank tracking'],
      benefits: ['Increase organic traffic by 150%', 'Improve search rankings', 'Save 20+ hours/week on SEO'],
      marketPrice: '$300-600/month',
      category: 'Marketing',
      technologies: ['Google Search Console API', 'Ahrefs API', 'OpenAI GPT', 'React', 'Node.js'],
      link: 'https://ziontechgroup.com/ai-seo-optimizer',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Smart Invoice Generator',
      description: 'AI-powered invoice creation with automated billing, payment tracking, and financial analytics.',
      icon: '💰',
      price: '$79/month',
      features: ['Automated invoice generation', 'Payment tracking', 'Financial analytics', 'Client portal', 'Tax calculations'],
      benefits: ['Reduce billing time by 80%', 'Improve cash flow', 'Eliminate manual errors'],
      marketPrice: '$120-250/month',
      category: 'Finance',
      technologies: ['Stripe API', 'QuickBooks API', 'React', 'Node.js', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/smart-invoice-generator',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Video Content Creator',
      description: 'Automated video creation with AI-generated scripts, voiceovers, and editing for social media.',
      icon: '🎬',
      price: '$299/month',
      features: ['AI script generation', 'Automated voiceovers', 'Video editing', 'Social media optimization', 'Analytics dashboard'],
      benefits: ['Create videos 10x faster', 'Reduce production costs by 70%', 'Increase engagement'],
      marketPrice: '$500-1000/month',
      category: 'Content Creation',
      technologies: ['OpenAI GPT', 'ElevenLabs', 'FFmpeg', 'React', 'AWS'],
      link: 'https://ziontechgroup.com/ai-video-creator',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Smart Project Management',
      description: 'AI-driven project management with automated task assignment, progress tracking, and resource optimization.',
      icon: '📋',
      price: '$149/month',
      features: ['AI task assignment', 'Progress prediction', 'Resource optimization', 'Risk assessment', 'Team collaboration'],
      benefits: ['Improve project success rate by 40%', 'Reduce project delays', 'Optimize team productivity'],
      marketPrice: '$200-400/month',
      category: 'Productivity',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
      link: 'https://ziontechgroup.com/smart-project-management',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Legal Document Analyzer',
      description: 'Intelligent legal document review with contract analysis, risk assessment, and compliance checking.',
      icon: '⚖️',
      price: '$399/month',
      features: ['Contract analysis', 'Risk assessment', 'Compliance checking', 'Document comparison', 'Legal research'],
      benefits: ['Reduce legal review time by 60%', 'Improve accuracy', 'Lower legal costs'],
      marketPrice: '$600-1200/month',
      category: 'Legal',
      technologies: ['NLP', 'Machine Learning', 'React', 'Python', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/ai-legal-analyzer',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Smart Real Estate Analyzer',
      description: 'AI-powered property analysis with market trends, investment potential, and automated valuations.',
      icon: '🏠',
      price: '$199/month',
      features: ['Property valuation', 'Market analysis', 'Investment scoring', 'Rental yield prediction', 'Location insights'],
      benefits: ['Make better investment decisions', 'Save 15+ hours on research', 'Increase ROI by 25%'],
      marketPrice: '$300-600/month',
      category: 'Real Estate',
      technologies: ['Machine Learning', 'Zillow API', 'React', 'Python', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/smart-real-estate-analyzer',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness plans with AI-generated workouts, nutrition tracking, and progress monitoring.',
      icon: '💪',
      price: '$49/month',
      features: ['Personalized workouts', 'Nutrition tracking', 'Progress monitoring', 'Goal setting', 'Community features'],
      benefits: ['Achieve fitness goals faster', 'Personalized guidance', 'Track progress effectively'],
      marketPrice: '$80-150/month',
      category: 'Health & Fitness',
      technologies: ['Machine Learning', 'React Native', 'Node.js', 'MongoDB', 'Wearable APIs'],
      link: 'https://ziontechgroup.com/ai-fitness-coach',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Smart Home Automation',
      description: 'AI-powered home automation with intelligent scheduling, energy optimization, and security monitoring.',
      icon: '🏡',
      price: '$99/month',
      features: ['Smart device control', 'Energy optimization', 'Security monitoring', 'Voice commands', 'Mobile app'],
      benefits: ['Reduce energy costs by 30%', 'Enhance security', 'Improve convenience'],
      marketPrice: '$150-300/month',
      category: 'IoT & Smart Home',
      technologies: ['IoT', 'Machine Learning', 'React Native', 'Node.js', 'MQTT'],
      link: 'https://ziontechgroup.com/smart-home-automation',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support with natural language processing and automated ticket resolution.',
      icon: '🤖',
      price: '$199/month',
      features: ['Natural language processing', 'Automated ticket resolution', 'Multi-language support', 'Integration with CRM', 'Analytics dashboard'],
      benefits: ['Reduce support costs by 50%', 'Improve response time', '24/7 availability'],
      marketPrice: '$300-600/month',
      category: 'Customer Service',
      technologies: ['NLP', 'OpenAI GPT', 'React', 'Node.js', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/ai-customer-support',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Smart Inventory Management',
      description: 'AI-powered inventory tracking with demand forecasting, automated reordering, and waste reduction.',
      icon: '📦',
      price: '$149/month',
      features: ['Demand forecasting', 'Automated reordering', 'Waste reduction', 'Real-time tracking', 'Analytics dashboard'],
      benefits: ['Reduce inventory costs by 25%', 'Minimize waste', 'Improve efficiency'],
      marketPrice: '$200-400/month',
      category: 'Supply Chain',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'IoT'],
      link: 'https://ziontechgroup.com/smart-inventory-management',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Email Marketing Optimizer',
      description: 'Intelligent email marketing with AI-generated content, send time optimization, and performance analytics.',
      icon: '📧',
      price: '$129/month',
      features: ['AI content generation', 'Send time optimization', 'A/B testing', 'Performance analytics', 'Segmentation'],
      benefits: ['Increase open rates by 40%', 'Improve click-through rates', 'Save 15+ hours/week'],
      marketPrice: '$200-400/month',
      category: 'Marketing',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Email APIs'],
      link: 'https://ziontechgroup.com/ai-email-marketing',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Smart Expense Tracker',
      description: 'AI-powered expense tracking with receipt scanning, categorization, and financial insights.',
      icon: '💳',
      price: '$39/month',
      features: ['Receipt scanning', 'Automatic categorization', 'Financial insights', 'Budget tracking', 'Tax preparation'],
      benefits: ['Save 5+ hours/week on bookkeeping', 'Improve financial visibility', 'Simplify tax preparation'],
      marketPrice: '$60-120/month',
      category: 'Finance',
      technologies: ['OCR', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/smart-expense-tracker',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automated social media management with content creation, scheduling, and engagement optimization.',
      icon: '📱',
      price: '$179/month',
      features: ['Content creation', 'Post scheduling', 'Engagement optimization', 'Analytics dashboard', 'Multi-platform support'],
      benefits: ['Increase engagement by 60%', 'Save 20+ hours/week', 'Improve brand presence'],
      marketPrice: '$300-600/month',
      category: 'Social Media',
      technologies: ['OpenAI GPT', 'Social Media APIs', 'React', 'Node.js', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/ai-social-media-manager',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Smart Meeting Scheduler',
      description: 'AI-powered meeting scheduling with calendar optimization, conflict resolution, and time zone handling.',
      icon: '📅',
      price: '$79/month',
      features: ['Calendar optimization', 'Conflict resolution', 'Time zone handling', 'Meeting analytics', 'Integration with calendars'],
      benefits: ['Reduce scheduling conflicts by 80%', 'Save 5+ hours/week', 'Improve meeting efficiency'],
      marketPrice: '$120-250/month',
      category: 'Productivity',
      technologies: ['Calendar APIs', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/smart-meeting-scheduler',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI Document Processor',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflow management.',
      icon: '📄',
      price: '$199/month',
      features: ['OCR processing', 'Data extraction', 'Workflow automation', 'Document classification', 'API integration'],
      benefits: ['Process documents 10x faster', 'Reduce manual errors', 'Improve workflow efficiency'],
      marketPrice: '$300-600/month',
      category: 'Document Management',
      technologies: ['OCR', 'NLP', 'Machine Learning', 'React', 'Node.js'],
      link: 'https://ziontechgroup.com/ai-document-processor',
      contact: 'kleber@ziontechgroup.com'
    }
  ];

  const categories = [...new Set(microSAASServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of micro SAAS solutions designed to streamline your business operations with AI-powered tools and automation." />
        <meta name="keywords" content="micro saas, saas solutions, business automation, AI tools, productivity software" />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
          Micro SAAS Solutions
        </h1>
        <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
          Powerful, affordable tools to transform your business
        </p>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Choose from our comprehensive collection of micro SAAS solutions designed to streamline operations, 
          boost productivity, and drive growth. Each tool is built with cutting-edge AI technology and 
          designed for immediate deployment.
        </p>
        
        {/* Contact CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="tel:+13024640950"
            className="cyber-button flex items-center"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call: (302) 464-0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="cyber-button flex items-center"
            style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
          >
            <Mail className="w-5 h-5 mr-2" />
            Email: kleber@ziontechgroup.com
          </a>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          <button className="cyber-button">All Categories</button>
          {categories.map((category, index) => (
            <button key={index} className="cyber-button">
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSAASServices.map((service, index) => (
            <div key={index} className="cyber-card hologram-card group hover:scale-105 transition-all duration-300">
              {/* Service Header */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <span className="inline-block bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {service.category}
                </span>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                <div className="text-sm text-gray-400">
                  Market Price: <span className="line-through">{service.marketPrice}</span>
                </div>
                <div className="text-green-400 text-sm font-medium">
                  Save up to 50% with Zion Tech Group
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={service.link}
                  className="w-full cyber-button text-center block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </a>
                <a
                  href={`mailto:${service.contact}?subject=Interest in ${service.title}`}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-center block transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-slate-800 to-purple-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Why Choose Zion Tech Group?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Fast Deployment</h3>
              <p className="text-gray-300">
                Get your micro SAAS solution up and running in 24-48 hours with our rapid deployment process.
              </p>
            </div>
            
            <div className="cyber-card text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security and compliance for all your data and business operations.
              </p>
            </div>
            
            <div className="cyber-card text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored micro SAAS solutions designed specifically for your business needs and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="cyber-card hologram-card text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your micro SAAS needs and get a custom quote for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free consultation and demo</p>
            <p>✓ Custom pricing for enterprise clients</p>
            <p>✓ 24/7 support and maintenance</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;