import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ProductsIndex: NextPage = () => {
  const microSaasProducts = [
    {
      id: 'workflow-automation',
      title: 'Workflow Automation Suite',
      description: 'Streamline your business processes with intelligent workflow automation tools that reduce manual work and increase efficiency.',
      features: [
        'Drag-and-drop workflow builder',
        'Multi-step automation sequences',
        'Integration with 100+ popular apps',
        'Real-time progress tracking',
        'Custom triggers and conditions',
        'Team collaboration features'
      ],
      pricing: '$99/month',
      icon: '⚡',
      category: 'Automation',
      link: '/products/workflow-automation'
    },
    {
      id: 'data-analytics-dashboard',
      title: 'Smart Analytics Dashboard',
      description: 'Transform your data into actionable insights with our comprehensive analytics platform designed for business intelligence.',
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Predictive analytics',
        'Multi-source data integration',
        'Automated alerts and notifications',
        'Mobile-responsive design'
      ],
      pricing: '$149/month',
      icon: '📊',
      category: 'Analytics',
      link: '/products/analytics-dashboard'
    },
    {
      id: 'customer-relationship-manager',
      title: 'AI-Powered CRM',
      description: 'Manage customer relationships effectively with our intelligent CRM that learns from your interactions and suggests optimal actions.',
      features: [
        'AI-powered lead scoring',
        'Automated follow-up sequences',
        'Customer behavior analytics',
        'Integration with email and social media',
        'Pipeline management',
        'Performance tracking'
      ],
      pricing: '$199/month',
      icon: '👥',
      category: 'CRM',
      link: '/products/ai-crm'
    },
    {
      id: 'inventory-management',
      title: 'Smart Inventory Manager',
      description: 'Optimize your inventory with intelligent tracking, automated reordering, and demand forecasting capabilities.',
      features: [
        'Real-time inventory tracking',
        'Automated reorder points',
        'Demand forecasting',
        'Multi-location support',
        'Barcode scanning integration',
        'Supplier management'
      ],
      pricing: '$129/month',
      icon: '📦',
      category: 'Inventory',
      link: '/products/inventory-manager'
    },
    {
      id: 'project-management',
      title: 'Agile Project Manager',
      description: 'Manage projects efficiently with our comprehensive project management platform that adapts to your team\'s workflow.',
      features: [
        'Kanban and Gantt views',
        'Time tracking and reporting',
        'Team collaboration tools',
        'Resource allocation',
        'Milestone tracking',
        'Integration with development tools'
      ],
      pricing: '$89/month',
      icon: '📋',
      category: 'Project Management',
      link: '/products/project-manager'
    },
    {
      id: 'email-marketing',
      title: 'Advanced Email Marketing',
      description: 'Create, send, and track email campaigns with our powerful email marketing platform that maximizes engagement and conversions.',
      features: [
        'Drag-and-drop email builder',
        'Advanced segmentation',
        'A/B testing capabilities',
        'Automated drip campaigns',
        'Detailed analytics and reporting',
        'Integration with e-commerce platforms'
      ],
      pricing: '$79/month',
      icon: '📧',
      category: 'Marketing',
      link: '/products/email-marketing'
    },
    {
      id: 'social-media-scheduler',
      title: 'Social Media Scheduler',
      description: 'Manage all your social media accounts from one platform with intelligent scheduling and content optimization.',
      features: [
        'Multi-platform posting',
        'Optimal timing suggestions',
        'Content calendar',
        'Hashtag optimization',
        'Performance analytics',
        'Team collaboration'
      ],
      pricing: '$59/month',
      icon: '📱',
      category: 'Social Media',
      link: '/products/social-scheduler'
    },
    {
      id: 'financial-tracker',
      title: 'Business Financial Tracker',
      description: 'Keep track of your business finances with our comprehensive financial management and reporting platform.',
      features: [
        'Income and expense tracking',
        'Automated categorization',
        'Financial reporting',
        'Tax preparation tools',
        'Multi-currency support',
        'Bank account integration'
      ],
      pricing: '$119/month',
      icon: '💰',
      category: 'Finance',
      link: '/products/financial-tracker'
    }
  ];

  const aiTools = [
    {
      id: 'content-generator',
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI technology.',
      pricing: '$49/month',
      icon: '✍️'
    },
    {
      id: 'image-optimizer',
      title: 'AI Image Optimizer',
      description: 'Automatically optimize and enhance images for web performance and visual appeal.',
      pricing: '$39/month',
      icon: '🖼️'
    },
    {
      id: 'chatbot-builder',
      title: 'No-Code Chatbot Builder',
      description: 'Create intelligent chatbots for your website without any coding knowledge.',
      pricing: '$89/month',
      icon: '🤖'
    },
    {
      id: 'voice-assistant',
      title: 'Voice Assistant Platform',
      description: 'Build custom voice assistants and voice-activated applications for your business.',
      pricing: '$199/month',
      icon: '🎤'
    }
  ];

  return (
    <>
      <Head>
        <title>Our Products - Zion Tech Group | Micro SAAS & AI Tools</title>
        <meta name="description" content="Discover our innovative micro SAAS solutions and AI tools designed to streamline business operations and drive growth. Workflow automation, analytics, CRM, and more." />
        <meta name="keywords" content="micro SAAS solutions, AI tools, workflow automation, business software, CRM, analytics dashboard, project management" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Innovative Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Discover our comprehensive suite of micro SAAS platforms and AI tools designed to 
              streamline your business operations and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Trial
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Micro SAAS Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful, focused tools that solve specific business challenges without the complexity 
              of enterprise software. Start small, scale as you grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{product.icon}</div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-purple-600">{product.pricing}</span>
                  <span className="text-gray-500 text-sm ml-2">per month</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={product.link} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center">
                    Try Free
                  </Link>
                  <Link href="/contact" className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center">
                    Get Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the power of artificial intelligence with our specialized tools designed 
              to automate tasks and enhance productivity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiTools.map((tool) => (
              <div key={tool.id} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">{tool.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{tool.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                <div className="text-2xl font-bold text-blue-600 mb-4">{tool.pricing}</div>
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm w-full text-center block">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Micro SAAS Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our micro SAAS platforms are designed with modern businesses in mind, offering 
              powerful features without the complexity of enterprise software.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Setup</h3>
              <p className="text-gray-600">Get up and running in minutes, not months. No complex installations or lengthy onboarding processes.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">Start small and scale as you grow. No long-term contracts or hidden fees.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p className="text-gray-600">Seamlessly integrate with your existing tools and workflows through our robust API.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile-First</h3>
              <p className="text-gray-600">Access your tools anywhere, anytime with our responsive mobile-optimized interfaces.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security with encryption, compliance, and regular security updates.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support from our expert team to help you succeed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your free trial today and discover how our micro SAAS solutions can streamline 
            your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Start Free Trial
            </Link>
            <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsIndex;