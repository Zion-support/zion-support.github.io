import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Zap, Shield, Cpu, Target, BarChart, Settings, Cog, Brain, Users, Globe } from 'lucide-react';

const BusinessAppsPage: React.FC = () => {
  const businessApps = [
    {
      title: 'AI-Powered CRM System',
      description: 'Intelligent customer relationship management with predictive analytics and automated workflows.',
      icon: '👥',
      price: 'Starting at $299/month',
      features: ['Predictive analytics', 'Automated workflows', 'Lead scoring', 'Customer insights', 'Integration APIs'],
      benefits: ['Increase sales by 35%', 'Improve customer retention', 'Reduce manual work by 60%'],
      marketPrice: '$500-1,200/month',
      category: 'CRM',
      technologies: ['AI/ML', 'React', 'Node.js', 'PostgreSQL', 'REST APIs']
    },
    {
      title: 'Smart Inventory Management',
      description: 'AI-driven inventory optimization with demand forecasting and automated reordering.',
      icon: '📦',
      price: 'Starting at $199/month',
      features: ['Demand forecasting', 'Automated reordering', 'Real-time tracking', 'Analytics dashboard', 'Mobile app'],
      benefits: ['Reduce stockouts by 80%', 'Lower inventory costs by 25%', 'Improve accuracy by 95%'],
      marketPrice: '$400-900/month',
      category: 'Inventory',
      technologies: ['Machine Learning', 'React Native', 'Python', 'MongoDB', 'Cloud APIs']
    },
    {
      title: 'Intelligent Project Management',
      description: 'AI-enhanced project management with resource optimization and risk prediction.',
      icon: '📊',
      price: 'Starting at $149/month',
      features: ['Resource optimization', 'Risk prediction', 'Task automation', 'Team collaboration', 'Progress tracking'],
      benefits: ['Complete projects 30% faster', 'Reduce project risks by 50%', 'Improve team productivity'],
      marketPrice: '$300-700/month',
      category: 'Project Management',
      technologies: ['AI Analytics', 'Vue.js', 'Express.js', 'MySQL', 'WebSocket']
    },
    {
      title: 'Automated Accounting System',
      description: 'Smart accounting with automated bookkeeping, expense tracking, and financial reporting.',
      icon: '💰',
      price: 'Starting at $179/month',
      features: ['Automated bookkeeping', 'Expense tracking', 'Financial reporting', 'Tax preparation', 'Audit trails'],
      benefits: ['Save 20 hours/week', 'Reduce errors by 90%', 'Improve compliance'],
      marketPrice: '$350-800/month',
      category: 'Accounting',
      technologies: ['OCR', 'Machine Learning', 'Angular', 'Django', 'PostgreSQL']
    },
    {
      title: 'AI Marketing Automation',
      description: 'Comprehensive marketing automation with AI-powered campaign optimization and personalization.',
      icon: '📈',
      price: 'Starting at $249/month',
      features: ['Campaign optimization', 'Personalization', 'Email automation', 'Social media management', 'Analytics'],
      benefits: ['Increase conversions by 45%', 'Reduce marketing costs by 30%', 'Improve engagement'],
      marketPrice: '$500-1,500/month',
      category: 'Marketing',
      technologies: ['AI/ML', 'React', 'Node.js', 'Redis', 'Third-party APIs']
    },
    {
      title: 'Smart HR Management',
      description: 'AI-powered human resources management with recruitment automation and employee analytics.',
      icon: '👨‍💼',
      price: 'Starting at $199/month',
      features: ['Recruitment automation', 'Employee analytics', 'Performance tracking', 'Benefits management', 'Compliance'],
      benefits: ['Reduce hiring time by 50%', 'Improve employee satisfaction', 'Ensure compliance'],
      marketPrice: '$400-1,000/month',
      category: 'HR',
      technologies: ['NLP', 'Machine Learning', 'React', 'Laravel', 'MySQL']
    },
    {
      title: 'Intelligent Document Management',
      description: 'AI-powered document processing with automated classification, search, and workflow management.',
      icon: '📄',
      price: 'Starting at $129/month',
      features: ['Document classification', 'Automated search', 'Workflow management', 'Version control', 'Security'],
      benefits: ['Reduce document processing time by 70%', 'Improve search accuracy', 'Enhance security'],
      marketPrice: '$250-600/month',
      category: 'Document Management',
      technologies: ['OCR', 'NLP', 'Vue.js', 'Python', 'Elasticsearch']
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights and predictive analytics.',
      icon: '📊',
      price: 'Starting at $199/month',
      features: ['Predictive analytics', 'Real-time dashboards', 'Custom reports', 'Data visualization', 'Alerts'],
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Improve business performance'],
      marketPrice: '$400-1,200/month',
      category: 'Analytics',
      technologies: ['Machine Learning', 'D3.js', 'Python', 'Apache Spark', 'Kafka']
    },
    {
      title: 'AI Customer Support',
      description: 'Intelligent customer support system with chatbots, ticket routing, and sentiment analysis.',
      icon: '🎧',
      price: 'Starting at $149/month',
      features: ['AI chatbots', 'Ticket routing', 'Sentiment analysis', 'Knowledge base', 'Multi-channel support'],
      benefits: ['Reduce support costs by 40%', 'Improve response time', 'Increase customer satisfaction'],
      marketPrice: '$300-800/month',
      category: 'Customer Support',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Smart E-commerce Platform',
      description: 'AI-powered e-commerce solution with personalized recommendations and automated operations.',
      icon: '🛒',
      price: 'Starting at $299/month',
      features: ['Personalized recommendations', 'Inventory management', 'Order automation', 'Customer analytics', 'Mobile app'],
      benefits: ['Increase sales by 40%', 'Reduce cart abandonment', 'Improve customer experience'],
      marketPrice: '$600-2,000/month',
      category: 'E-commerce',
      technologies: ['AI/ML', 'React', 'Node.js', 'PostgreSQL', 'Payment APIs']
    },
    {
      title: 'Intelligent Workflow Automation',
      description: 'AI-driven workflow automation with process optimization and intelligent routing.',
      icon: '⚙️',
      price: 'Starting at $179/month',
      features: ['Process automation', 'Intelligent routing', 'Workflow optimization', 'Task management', 'Integration'],
      benefits: ['Automate 80% of processes', 'Reduce errors by 95%', 'Improve efficiency'],
      marketPrice: '$350-900/month',
      category: 'Workflow Automation',
      technologies: ['RPA', 'Machine Learning', 'Angular', 'Python', 'Workflow Engines']
    },
    {
      title: 'Smart Communication Hub',
      description: 'Unified communication platform with AI-powered features and team collaboration tools.',
      icon: '💬',
      price: 'Starting at $99/month',
      features: ['Unified messaging', 'Video conferencing', 'File sharing', 'AI transcription', 'Team collaboration'],
      benefits: ['Improve team communication', 'Reduce meeting time', 'Enhance collaboration'],
      marketPrice: '$200-500/month',
      category: 'Communication',
      technologies: ['WebRTC', 'AI/ML', 'React', 'Socket.io', 'MongoDB']
    }
  ];

  const categories = [...new Set(businessApps.map(app => app.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Business Applications
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              AI-powered business applications designed to streamline operations and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Custom App
              </Link>
              <Link 
                to="/micro-saas"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Micro SAAS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Business Apps?
            </h2>
            <p className="text-xl text-gray-600">
              Custom-built applications that integrate seamlessly with your existing systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-gray-600">Intelligent features that learn and adapt to your business needs</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
              <p className="text-gray-600">Quick implementation with minimal disruption to your operations</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-grade security with compliance and data protection</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored applications designed specifically for your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apps by Category */}
      {categories.map(category => (
        <section key={category} className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category} Applications
              </h2>
              <p className="text-xl text-gray-600">
                Specialized {category.toLowerCase()} solutions for modern businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessApps
                .filter(app => app.category === category)
                .map((app, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{app.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{app.title}</h3>
                    <p className="text-gray-600 mb-4">{app.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-blue-600">{app.price}</span>
                        <span className="text-sm text-gray-500">Market: {app.marketPrice}</span>
                      </div>
                      <div className="text-sm text-green-600 font-semibold">
                        Save up to 50% vs market rates
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {app.features.map((feature, featureIndex) => (
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
                        {app.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                      <ul className="space-y-1">
                        {app.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      to="/contact"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                    >
                      Get Custom Quote
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Business Application?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We can build any business application tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </Link>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessAppsPage;
