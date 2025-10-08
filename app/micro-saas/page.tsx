import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, Phone, Mail } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    // AI-Powered Business Tools
    {
      title: 'AI Email Marketing Automation',
      description: 'Intelligent email campaigns with AI-generated content, optimal send times, and advanced segmentation.',
      icon: '📧',
      price: '$79/month',
      originalPrice: '$150/month',
      features: ['AI content generation', 'Smart segmentation', 'Send time optimization', 'A/B testing', 'Analytics dashboard'],
      benefits: ['Increase open rates by 40%', 'Save 15+ hours/week', 'Boost conversion rates by 60%'],
      marketPrice: '$150-300/month',
      category: 'Marketing',
      technologies: ['OpenAI GPT', 'SendGrid API', 'React', 'Node.js', 'PostgreSQL'],
      popular: true
    },
    {
      title: 'Smart Invoice & Billing System',
      description: 'AI-powered invoicing with automated payment reminders, expense tracking, and financial insights.',
      icon: '💰',
      price: '$59/month',
      originalPrice: '$120/month',
      features: ['Automated invoicing', 'Payment tracking', 'Expense management', 'Tax calculations', 'Client portal'],
      benefits: ['Reduce billing time by 80%', 'Improve cash flow', 'Eliminate manual errors'],
      marketPrice: '$120-250/month',
      category: 'Finance',
      technologies: ['Stripe API', 'QuickBooks API', 'React', 'Node.js', 'PostgreSQL'],
      popular: true
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automated social media posting with AI-generated content, optimal timing, and engagement analytics.',
      icon: '📱',
      price: '$99/month',
      originalPrice: '$200/month',
      features: ['AI content creation', 'Multi-platform posting', 'Engagement analytics', 'Hashtag optimization', 'Competitor tracking'],
      benefits: ['Increase followers by 200%', 'Save 20+ hours/week', 'Boost engagement by 150%'],
      marketPrice: '$200-400/month',
      category: 'Social Media',
      technologies: ['OpenAI GPT', 'Social Media APIs', 'React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Smart Project Management',
      description: 'AI-driven project management with automated task assignment, progress tracking, and resource optimization.',
      icon: '📋',
      price: '$89/month',
      originalPrice: '$180/month',
      features: ['AI task assignment', 'Progress prediction', 'Resource optimization', 'Risk assessment', 'Team collaboration'],
      benefits: ['Improve project success rate by 40%', 'Reduce project delays', 'Optimize team productivity'],
      marketPrice: '$180-350/month',
      category: 'Productivity',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Redis']
    },
    {
      title: 'AI Customer Support Chatbot',
      description: 'Intelligent chatbot with natural language processing, ticket routing, and 24/7 customer support.',
      icon: '🤖',
      price: '$149/month',
      originalPrice: '$300/month',
      features: ['Natural language processing', 'Ticket routing', 'Knowledge base integration', 'Multi-language support', 'Analytics'],
      benefits: ['Reduce support tickets by 60%', 'Improve response time', 'Lower support costs'],
      marketPrice: '$300-600/month',
      category: 'Customer Support',
      technologies: ['OpenAI GPT', 'React', 'Node.js', 'WebSocket', 'PostgreSQL']
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'AI-powered business analytics with predictive insights, automated reporting, and data visualization.',
      icon: '📊',
      price: '$119/month',
      originalPrice: '$250/month',
      features: ['Predictive analytics', 'Automated reporting', 'Data visualization', 'Custom dashboards', 'Real-time monitoring'],
      benefits: ['Make data-driven decisions', 'Save 10+ hours on reporting', 'Identify trends early'],
      marketPrice: '$250-500/month',
      category: 'Analytics',
      technologies: ['Machine Learning', 'D3.js', 'React', 'Python', 'PostgreSQL']
    },
    {
      title: 'AI Content Writer',
      description: 'Advanced AI content creation for blogs, websites, and marketing materials with SEO optimization.',
      icon: '✍️',
      price: '$69/month',
      originalPrice: '$140/month',
      features: ['AI content generation', 'SEO optimization', 'Multiple content types', 'Brand voice training', 'Plagiarism check'],
      benefits: ['Create content 10x faster', 'Improve SEO rankings', 'Maintain consistent quality'],
      marketPrice: '$140-280/month',
      category: 'Content Creation',
      technologies: ['OpenAI GPT', 'React', 'Node.js', 'MongoDB', 'SEO APIs']
    },
    {
      title: 'Smart Inventory Management',
      description: 'AI-powered inventory tracking with demand forecasting, automated reordering, and waste reduction.',
      icon: '📦',
      price: '$129/month',
      originalPrice: '$260/month',
      features: ['Demand forecasting', 'Automated reordering', 'Waste tracking', 'Supplier management', 'Analytics'],
      benefits: ['Reduce inventory costs by 30%', 'Prevent stockouts', 'Minimize waste'],
      marketPrice: '$260-500/month',
      category: 'Inventory',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'IoT APIs']
    },
    {
      title: 'AI Lead Generation',
      description: 'Automated lead finding with AI-powered prospecting, contact enrichment, and qualification scoring.',
      icon: '🎯',
      price: '$199/month',
      originalPrice: '$400/month',
      features: ['AI prospecting', 'Contact enrichment', 'Lead scoring', 'Email sequences', 'CRM integration'],
      benefits: ['Generate 3x more leads', 'Improve lead quality', 'Save 25+ hours/week'],
      marketPrice: '$400-800/month',
      category: 'Sales',
      technologies: ['Machine Learning', 'LinkedIn API', 'React', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'Smart HR Management',
      description: 'AI-powered HR tools with resume screening, employee analytics, and performance tracking.',
      icon: '👥',
      price: '$159/month',
      originalPrice: '$320/month',
      features: ['Resume screening', 'Employee analytics', 'Performance tracking', 'Attendance management', 'Payroll integration'],
      benefits: ['Reduce hiring time by 50%', 'Improve employee retention', 'Streamline HR processes'],
      marketPrice: '$320-600/month',
      category: 'Human Resources',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'HR APIs']
    },
    {
      title: 'AI Website Optimizer',
      description: 'Automated website optimization with AI-driven A/B testing, performance monitoring, and conversion tracking.',
      icon: '🌐',
      price: '$89/month',
      originalPrice: '$180/month',
      features: ['AI A/B testing', 'Performance monitoring', 'Conversion tracking', 'Heatmap analysis', 'Speed optimization'],
      benefits: ['Increase conversions by 35%', 'Improve page speed', 'Optimize user experience'],
      marketPrice: '$180-350/month',
      category: 'Web Optimization',
      technologies: ['Machine Learning', 'React', 'Node.js', 'Google Analytics API', 'PostgreSQL']
    },
    {
      title: 'Smart Document Management',
      description: 'AI-powered document organization with automated categorization, search, and collaboration features.',
      icon: '📄',
      price: '$79/month',
      originalPrice: '$160/month',
      features: ['AI categorization', 'Advanced search', 'Version control', 'Collaboration tools', 'Security features'],
      benefits: ['Find documents instantly', 'Improve team collaboration', 'Enhance security'],
      marketPrice: '$160-320/month',
      category: 'Document Management',
      technologies: ['Machine Learning', 'React', 'Node.js', 'Elasticsearch', 'AWS S3']
    },
    {
      title: 'AI Video Content Creator',
      description: 'Automated video creation with AI-generated scripts, voiceovers, and editing for social media and marketing.',
      icon: '🎬',
      price: '$199/month',
      originalPrice: '$400/month',
      features: ['AI script generation', 'Automated voiceovers', 'Video editing', 'Social media optimization', 'Analytics'],
      benefits: ['Create videos 10x faster', 'Reduce production costs by 70%', 'Increase engagement'],
      marketPrice: '$400-800/month',
      category: 'Video Production',
      technologies: ['OpenAI GPT', 'ElevenLabs', 'FFmpeg', 'React', 'AWS']
    },
    {
      title: 'Smart Appointment Scheduler',
      description: 'AI-powered scheduling with automated booking, reminders, and calendar optimization.',
      icon: '📅',
      price: '$49/month',
      originalPrice: '$100/month',
      features: ['Automated booking', 'Smart reminders', 'Calendar sync', 'Payment processing', 'Analytics'],
      benefits: ['Reduce no-shows by 40%', 'Save 10+ hours/week', 'Improve customer experience'],
      marketPrice: '$100-200/month',
      category: 'Scheduling',
      technologies: ['Machine Learning', 'React', 'Node.js', 'Calendar APIs', 'PostgreSQL']
    },
    {
      title: 'AI Legal Document Analyzer',
      description: 'Intelligent legal document review with contract analysis, risk assessment, and compliance checking.',
      icon: '⚖️',
      price: '$299/month',
      originalPrice: '$600/month',
      features: ['Contract analysis', 'Risk assessment', 'Compliance checking', 'Document comparison', 'Legal research'],
      benefits: ['Reduce legal review time by 60%', 'Improve accuracy', 'Lower legal costs'],
      marketPrice: '$600-1200/month',
      category: 'Legal',
      technologies: ['NLP', 'Machine Learning', 'React', 'Python', 'PostgreSQL']
    },
    {
      title: 'Smart Real Estate Analyzer',
      description: 'AI-powered property analysis with market trends, investment potential, and automated valuations.',
      icon: '🏠',
      price: '$149/month',
      originalPrice: '$300/month',
      features: ['Property valuation', 'Market analysis', 'Investment scoring', 'Rental yield prediction', 'Location insights'],
      benefits: ['Make better investment decisions', 'Save 15+ hours on research', 'Increase ROI by 25%'],
      marketPrice: '$300-600/month',
      category: 'Real Estate',
      technologies: ['Machine Learning', 'Zillow API', 'React', 'Python', 'PostgreSQL']
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness plans with AI-generated workouts, nutrition tracking, and progress monitoring.',
      icon: '💪',
      price: '$39/month',
      originalPrice: '$80/month',
      features: ['Personalized workouts', 'Nutrition tracking', 'Progress monitoring', 'Goal setting', 'Community features'],
      benefits: ['Achieve fitness goals faster', 'Personalized guidance', 'Track progress effectively'],
      marketPrice: '$80-150/month',
      category: 'Health & Fitness',
      technologies: ['Machine Learning', 'React Native', 'Node.js', 'MongoDB', 'Wearable APIs']
    },
    {
      title: 'Smart Home Automation',
      description: 'AI-powered home automation with intelligent scheduling, energy optimization, and security monitoring.',
      icon: '🏡',
      price: '$79/month',
      originalPrice: '$160/month',
      features: ['Smart scheduling', 'Energy optimization', 'Security monitoring', 'Voice control', 'Mobile app'],
      benefits: ['Reduce energy costs by 25%', 'Enhance security', 'Improve convenience'],
      marketPrice: '$160-320/month',
      category: 'Home Automation',
      technologies: ['IoT', 'Machine Learning', 'React Native', 'Node.js', 'MQTT']
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Automated code analysis, bug detection, and security vulnerability scanning for developers.',
      icon: '🔍',
      price: '$99/month',
      originalPrice: '$200/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Code quality metrics', 'Git integration'],
      benefits: ['Reduce bugs by 70%', 'Improve code quality', 'Save 10+ hours/week on reviews'],
      marketPrice: '$200-400/month',
      category: 'Developer Tools',
      technologies: ['GitHub Actions', 'SonarQube', 'ESLint', 'Prettier', 'Custom AI Models']
    },
    {
      title: 'Smart Email Signature Manager',
      description: 'AI-powered email signature management with dynamic content, branding, and analytics.',
      icon: '✉️',
      price: '$29/month',
      originalPrice: '$60/month',
      features: ['Dynamic signatures', 'Brand consistency', 'Analytics tracking', 'Team management', 'Template library'],
      benefits: ['Maintain brand consistency', 'Track email performance', 'Save time on updates'],
      marketPrice: '$60-120/month',
      category: 'Email Management',
      technologies: ['React', 'Node.js', 'Email APIs', 'PostgreSQL', 'Analytics']
    },
    {
      title: 'AI SEO Optimizer',
      description: 'Advanced SEO analysis and optimization with AI-driven content suggestions and keyword research.',
      icon: '🎯',
      price: '$119/month',
      originalPrice: '$240/month',
      features: ['AI content optimization', 'Keyword research automation', 'Competitor analysis', 'Technical SEO audit', 'Rank tracking'],
      benefits: ['Increase organic traffic by 150%', 'Improve search rankings', 'Save 20+ hours/week on SEO'],
      marketPrice: '$240-480/month',
      category: 'SEO',
      technologies: ['Google Search Console API', 'Ahrefs API', 'OpenAI GPT', 'React', 'Node.js']
    }
  ];

  const categories = [
    { name: 'All Services', count: microSAASServices.length },
    { name: 'Marketing', count: microSAASServices.filter(s => s.category === 'Marketing').length },
    { name: 'Finance', count: microSAASServices.filter(s => s.category === 'Finance').length },
    { name: 'Productivity', count: microSAASServices.filter(s => s.category === 'Productivity').length },
    { name: 'Analytics', count: microSAASServices.filter(s => s.category === 'Analytics').length },
    { name: 'Content Creation', count: microSAASServices.filter(s => s.category === 'Content Creation').length },
    { name: 'Customer Support', count: microSAASServices.filter(s => s.category === 'Customer Support').length },
    { name: 'Sales', count: microSAASServices.filter(s => s.category === 'Sales').length },
    { name: 'Human Resources', count: microSAASServices.filter(s => s.category === 'Human Resources').length },
    { name: 'Developer Tools', count: microSAASServices.filter(s => s.category === 'Developer Tools').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Affordable, powerful AI-driven micro SAAS tools for modern businesses. Starting from $29/month with 24/7 support and instant setup." />
        <meta name="keywords" content="micro saas, ai tools, business automation, affordable software, productivity tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Powerful AI-driven tools for modern businesses. Start from $29/month with instant setup and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-blue-100">AI-Powered Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$29</div>
                <div className="text-blue-100">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-blue-100">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">5min</div>
                <div className="text-blue-100">Setup Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your AI-Powered Tools
            </h2>
            <p className="text-xl text-gray-600">
              All tools include 24/7 support, instant setup, and 30-day money-back guarantee
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                  </div>
                  <div className="text-sm text-gray-500">Market price: {service.marketPrice}</div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-green-600 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600">
              We deliver enterprise-grade AI solutions at micro SAAS prices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Setup</h3>
              <p className="text-gray-600">Get started in under 5 minutes with our automated setup process</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security and compliance for all your business data</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support from our expert technical team</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">AI and technology experts with 10+ years of experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compare Our Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Save up to 60% compared to enterprise solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Solutions</h3>
              <div className="text-4xl font-bold text-gray-600 mb-4">$500-2000/month</div>
              <ul className="space-y-2 text-gray-600">
                <li>• Complex setup process</li>
                <li>• Limited customization</li>
                <li>• Long-term contracts</li>
                <li>• Expensive maintenance</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Our Solution
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Zion Micro SAAS</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$29-299/month</div>
              <ul className="space-y-2 text-gray-600">
                <li>• 5-minute setup</li>
                <li>• Full customization</li>
                <li>• Month-to-month</li>
                <li>• No maintenance fees</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">DIY Solutions</h3>
              <div className="text-4xl font-bold text-gray-600 mb-4">$0-100/month</div>
              <ul className="space-y-2 text-gray-600">
                <li>• Time-consuming setup</li>
                <li>• Limited functionality</li>
                <li>• No support</li>
                <li>• Security risks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start with any tool today and see the difference AI can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 Available 24/7 for your convenience</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;