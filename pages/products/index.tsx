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
      icon: '⚡'
    },
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator',
      description: 'Create high-quality content at scale with our AI-powered content generation platform. Perfect for blogs, social media, and marketing materials.',
      features: [
        'Multiple content types (blogs, social, ads)',
        'Brand voice customization',
        'SEO optimization',
        'Plagiarism detection',
        'Multi-language support',
        'Content scheduling'
      ],
      pricing: '$149/month',
      icon: '🤖'
    },
    {
      id: 'customer-analytics',
      title: 'Customer Analytics Dashboard',
      description: 'Gain deep insights into customer behavior with our comprehensive analytics platform designed for SaaS businesses.',
      features: [
        'Real-time customer tracking',
        'Funnel analysis',
        'Cohort analysis',
        'Churn prediction',
        'Custom metrics',
        'Automated reporting'
      ],
      pricing: '$199/month',
      icon: '📊'
    },
    {
      id: 'api-gateway',
      title: 'API Gateway & Management',
      description: 'Secure, scale, and manage your APIs with our enterprise-grade API gateway solution.',
      features: [
        'Rate limiting and throttling',
        'Authentication & authorization',
        'API versioning',
        'Monitoring & analytics',
        'Developer portal',
        'Webhook management'
      ],
      pricing: '$79/month',
      icon: '🔗'
    },
    {
      id: 'email-automation',
      title: 'Email Marketing Automation',
      description: 'Build and send targeted email campaigns with our powerful automation platform.',
      features: [
        'Visual email builder',
        'Advanced segmentation',
        'A/B testing',
        'Behavioral triggers',
        'Deliverability optimization',
        'Analytics & reporting'
      ],
      pricing: '$59/month',
      icon: '📧'
    },
    {
      id: 'voice-assistant',
      title: 'Voice Assistant Platform',
      description: 'Build custom voice assistants and voice-activated applications for your business.',
      features: [
        'Natural language processing',
        'Multi-platform support',
        'Custom wake words',
        'Integration APIs',
        'Analytics dashboard',
        'White-label options'
      ],
      pricing: '$199/month',
      icon: '🎤'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Products - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive suite of Micro SaaS products designed to streamline your business operations." />
        <meta name="keywords" content="micro saas, software products, business automation, AI tools" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive suite of Micro SaaS products designed to streamline your business operations and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Micro SaaS Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful, scalable solutions built for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{product.pricing}</span>
                  <Link
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our Micro SaaS products today and see the difference they can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/micro-saas"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsIndex;