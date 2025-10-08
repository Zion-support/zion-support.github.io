import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, ExternalLink } from 'lucide-react';

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
      popular: true
    },
    {
      title: 'AI Document Intelligence',
      description: 'Advanced document processing with OCR, data extraction, and intelligent classification.',
      icon: '📄',
      price: '$149/month',
      features: ['OCR text extraction', 'Document classification', 'Data validation', 'Workflow automation', 'Multi-format support'],
      benefits: ['Process documents 10x faster', 'Eliminate manual data entry', '99.5% accuracy rate'],
      marketPrice: '$200-500/month',
      category: 'Document Processing',
      technologies: ['Tesseract', 'AWS Textract', 'Azure Form Recognizer', 'Custom ML Models'],
      link: 'https://ziontechgroup.com/ai-document-intelligence'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated insights.',
      icon: '📊',
      price: '$99/month',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports', 'API integration', 'Mobile responsive'],
      benefits: ['Increase decision speed by 40%', 'Reduce manual reporting by 80%', 'Identify trends before competitors'],
      marketPrice: '$150-300/month',
      category: 'Analytics',
      technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/ai-analytics-dashboard',
      popular: true
    },
    {
      title: 'Smart API Testing Suite',
      description: 'Automated API testing with intelligent test generation and performance monitoring.',
      icon: '🔌',
      price: '$79/month',
      features: ['Automated test generation', 'Performance testing', 'Load testing', 'API documentation', 'Integration testing'],
      benefits: ['Catch bugs 90% faster', 'Improve API reliability', 'Reduce testing time by 80%'],
      marketPrice: '$120-250/month',
      category: 'Developer Tools',
      technologies: ['Postman', 'Newman', 'Jest', 'Artillery', 'Custom AI Models'],
      link: 'https://ziontechgroup.com/smart-api-testing'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot with natural language processing and context-aware responses.',
      icon: '🤖',
      price: '$199/month',
      features: ['Natural language processing', 'Context-aware responses', 'Multi-language support', 'CRM integration', 'Analytics dashboard'],
      benefits: ['Reduce support costs by 60%', 'Provide 24/7 support', 'Improve response time'],
      marketPrice: '$300-600/month',
      category: 'Customer Service',
      technologies: ['Dialogflow', 'Rasa', 'OpenAI GPT', 'Node.js', 'MongoDB'],
      link: 'https://ziontechgroup.com/ai-customer-support-bot'
    },
    {
      title: 'Smart Email Marketing Platform',
      description: 'AI-driven email campaigns with personalization, A/B testing, and optimal send times.',
      icon: '📧',
      price: '$149/month',
      features: ['Smart segmentation', 'A/B testing automation', 'Send time optimization', 'Content personalization', 'Performance analytics'],
      benefits: ['Increase open rates by 35%', 'Boost conversion by 50%', 'Save 15 hours/week'],
      marketPrice: '$200-400/month',
      category: 'Marketing',
      technologies: ['SendGrid', 'Mailchimp API', 'Machine Learning', 'React', 'Node.js'],
      link: 'https://ziontechgroup.com/smart-email-marketing',
      popular: true
    },
    {
      title: 'AI Inventory Optimizer',
      description: 'Predictive inventory management with demand forecasting and automated reordering.',
      icon: '📦',
      price: '$299/month',
      features: ['Demand forecasting', 'Automated reordering', 'Stock optimization', 'Supplier management', 'Cost analysis'],
      benefits: ['Reduce stockouts by 60%', 'Lower inventory costs by 25%', 'Improve cash flow'],
      marketPrice: '$400-800/month',
      category: 'Supply Chain',
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'Custom ML Models'],
      link: 'https://ziontechgroup.com/ai-inventory-optimizer'
    },
    {
      title: 'Smart HR Recruitment Tool',
      description: 'AI-powered resume screening, candidate matching, and interview scheduling automation.',
      icon: '👥',
      price: '$179/month',
      features: ['Resume parsing', 'Candidate scoring', 'Interview scheduling', 'Onboarding automation', 'Performance tracking'],
      benefits: ['Reduce hiring time by 50%', 'Improve candidate quality', 'Streamline HR processes'],
      marketPrice: '$250-500/month',
      category: 'Human Resources',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/smart-hr-recruitment'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automated social media content creation, scheduling, and engagement optimization.',
      icon: '📱',
      price: '$129/month',
      features: ['Content generation', 'Optimal posting times', 'Hashtag optimization', 'Engagement tracking', 'Multi-platform support'],
      benefits: ['Increase engagement by 45%', 'Save 20 hours/week', 'Grow followers organically'],
      marketPrice: '$200-400/month',
      category: 'Social Media',
      technologies: ['OpenAI GPT', 'Social Media APIs', 'React', 'Node.js', 'MongoDB'],
      link: 'https://ziontechgroup.com/ai-social-media-manager'
    },
    {
      title: 'Smart Project Management',
      description: 'AI-powered project tracking with automated task assignment and deadline prediction.',
      icon: '📋',
      price: '$199/month',
      features: ['Task automation', 'Deadline prediction', 'Resource optimization', 'Risk assessment', 'Progress tracking'],
      benefits: ['Complete projects 30% faster', 'Reduce project overruns', 'Improve team productivity'],
      marketPrice: '$300-600/month',
      category: 'Project Management',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Custom AI Models'],
      link: 'https://ziontechgroup.com/smart-project-management'
    },
    {
      title: 'AI Financial Analyzer',
      description: 'Automated financial analysis, expense tracking, and investment recommendations.',
      icon: '💰',
      price: '$249/month',
      features: ['Expense categorization', 'Investment analysis', 'Budget forecasting', 'Tax optimization', 'Financial reporting'],
      benefits: ['Save 15 hours/month on bookkeeping', 'Optimize tax savings', 'Improve financial decisions'],
      marketPrice: '$400-800/month',
      category: 'Finance',
      technologies: ['Python', 'TensorFlow', 'Financial APIs', 'React', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/ai-financial-analyzer'
    },
    {
      title: 'Smart Content Generator',
      description: 'AI-powered content creation for blogs, social media, and marketing materials.',
      icon: '✍️',
      price: '$99/month',
      features: ['Blog post generation', 'Social media content', 'Email templates', 'SEO optimization', 'Multi-language support'],
      benefits: ['Create content 10x faster', 'Improve SEO rankings', 'Maintain consistent brand voice'],
      marketPrice: '$150-300/month',
      category: 'Content Creation',
      technologies: ['OpenAI GPT', 'NLP', 'React', 'Node.js', 'MongoDB'],
      link: 'https://ziontechgroup.com/smart-content-generator',
      popular: true
    },
    {
      title: 'AI Website Optimizer',
      description: 'Automated website performance optimization and SEO enhancement.',
      icon: '⚡',
      price: '$149/month',
      features: ['Performance optimization', 'SEO analysis', 'Mobile optimization', 'Core Web Vitals', 'A/B testing'],
      benefits: ['Improve page speed by 50%', 'Boost SEO rankings', 'Increase conversion rates'],
      marketPrice: '$200-500/month',
      category: 'Web Optimization',
      technologies: ['Lighthouse API', 'Google PageSpeed', 'React', 'Node.js', 'Custom AI Models'],
      link: 'https://ziontechgroup.com/ai-website-optimizer'
    },
    {
      title: 'Smart Data Backup',
      description: 'Automated, intelligent data backup with version control and disaster recovery.',
      icon: '💾',
      price: '$79/month',
      features: ['Automated backups', 'Version control', 'Disaster recovery', 'Cross-platform sync', 'Encryption'],
      benefits: ['Never lose data again', 'Instant recovery', 'Comply with regulations'],
      marketPrice: '$100-300/month',
      category: 'Data Management',
      technologies: ['AWS S3', 'Azure Blob', 'Encryption', 'React', 'Node.js'],
      link: 'https://ziontechgroup.com/smart-data-backup'
    },
    {
      title: 'AI Lead Scoring System',
      description: 'Intelligent lead qualification and scoring for sales teams.',
      icon: '🎯',
      price: '$199/month',
      features: ['Lead scoring', 'Behavioral analysis', 'CRM integration', 'Sales forecasting', 'Pipeline optimization'],
      benefits: ['Increase conversion by 40%', 'Focus on high-value leads', 'Improve sales efficiency'],
      marketPrice: '$300-600/month',
      category: 'Sales',
      technologies: ['Machine Learning', 'CRM APIs', 'React', 'Node.js', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/ai-lead-scoring'
    },
    {
      title: 'Smart Time Tracking',
      description: 'AI-powered time tracking with automatic project categorization and productivity insights.',
      icon: '⏰',
      price: '$59/month',
      features: ['Automatic time tracking', 'Project categorization', 'Productivity insights', 'Team analytics', 'Integration support'],
      benefits: ['Track time automatically', 'Improve productivity', 'Accurate billing'],
      marketPrice: '$80-200/month',
      category: 'Productivity',
      technologies: ['Machine Learning', 'React', 'Node.js', 'MongoDB', 'Custom AI Models'],
      link: 'https://ziontechgroup.com/smart-time-tracking'
    },
    {
      title: 'AI Security Monitor',
      description: 'Real-time security monitoring with threat detection and automated response.',
      icon: '🛡️',
      price: '$299/month',
      features: ['Threat detection', 'Automated response', 'Compliance monitoring', 'Security reporting', 'Incident management'],
      benefits: ['Prevent security breaches', 'Comply with regulations', 'Reduce security costs'],
      marketPrice: '$500-1000/month',
      category: 'Security',
      technologies: ['Machine Learning', 'Security APIs', 'React', 'Node.js', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/ai-security-monitor'
    },
    {
      title: 'Smart Meeting Scheduler',
      description: 'AI-powered meeting scheduling with calendar optimization and conflict resolution.',
      icon: '📅',
      price: '$89/month',
      features: ['Smart scheduling', 'Conflict resolution', 'Calendar optimization', 'Meeting analytics', 'Integration support'],
      benefits: ['Schedule meetings 5x faster', 'Eliminate scheduling conflicts', 'Optimize meeting times'],
      marketPrice: '$120-300/month',
      category: 'Productivity',
      technologies: ['Calendar APIs', 'Machine Learning', 'React', 'Node.js', 'MongoDB'],
      link: 'https://ziontechgroup.com/smart-meeting-scheduler'
    },
    {
      title: 'AI Expense Manager',
      description: 'Automated expense tracking, categorization, and reimbursement processing.',
      icon: '🧾',
      price: '$129/month',
      features: ['Receipt scanning', 'Expense categorization', 'Reimbursement processing', 'Budget tracking', 'Tax preparation'],
      benefits: ['Process expenses 10x faster', 'Reduce errors', 'Simplify tax preparation'],
      marketPrice: '$200-400/month',
      category: 'Finance',
      technologies: ['OCR', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/ai-expense-manager'
    },
    {
      title: 'Smart Customer Analytics',
      description: 'AI-powered customer behavior analysis and personalized recommendations.',
      icon: '👤',
      price: '$249/month',
      features: ['Behavior analysis', 'Personalization', 'Churn prediction', 'Customer segmentation', 'Recommendation engine'],
      benefits: ['Increase customer retention', 'Boost sales', 'Improve customer experience'],
      marketPrice: '$400-800/month',
      category: 'Analytics',
      technologies: ['Machine Learning', 'Python', 'React', 'Node.js', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/smart-customer-analytics',
      popular: true
    }
  ];

  const categories = [
    'All Services',
    'Developer Tools',
    'Document Processing',
    'Analytics',
    'Customer Service',
    'Marketing',
    'Supply Chain',
    'Human Resources',
    'Social Media',
    'Project Management',
    'Finance',
    'Content Creation',
    'Web Optimization',
    'Data Management',
    'Sales',
    'Productivity',
    'Security'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Services');

  const filteredServices = selectedCategory === 'All Services' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Affordable, powerful AI-driven micro SAAS tools for modern businesses. Starting from $59/month with 20+ innovative solutions." />
        <meta name="keywords" content="micro saas, ai tools, business automation, affordable software, productivity tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Affordable, powerful AI-driven tools for modern businesses. Transform your operations with our innovative micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                ✉️ Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedCategory} Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Choose from our comprehensive range of micro SAAS tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20 relative ${
                  service.popular ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  <span className="text-sm text-gray-400 ml-2 line-through">{service.marketPrice}</span>
                </div>
                
                <div className="mb-4">
                  <span className="text-xs text-blue-300 bg-blue-900/30 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-green-300">
                        ✓ {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col gap-2">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300">
              Built for modern businesses with cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Instant Setup</h3>
              <p className="text-gray-300">Get started in minutes with our plug-and-play solutions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance for all your data</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support from our expert team</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven ROI</h3>
              <p className="text-gray-300">Average 300% ROI within the first 6 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Competitive Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Save up to 70% compared to enterprise solutions
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Our Pricing</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">$59 - $299</div>
                <div className="text-gray-300">per month per tool</div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Market Average</h3>
                <div className="text-4xl font-bold text-red-400 mb-2">$200 - $800</div>
                <div className="text-gray-300">per month per tool</div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Your Savings</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-2">70%</div>
                <div className="text-gray-300">average savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and custom solution recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 24/7 Support Available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;