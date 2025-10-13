import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  TrendingUp, 
  Database, 
  Cpu, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe,
  Video,
  FileText,
  Mail,
  Package,
  Mic,
  Code,
  Share2
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      title: 'Zion AI Video Generator',
      description: 'Create professional videos from text prompts using advanced AI technology. Perfect for marketing, training, and social media content.',
      icon: <Video className="w-8 h-8" />,
      path: '/zion-ai-video-generator',
      features: ['AI video generation', '50+ video styles', 'Multi-language support', '4K quality', 'Custom branding'],
      price: '$29/month',
      featured: true
    },
    {
      title: 'Zion AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered calculations, custom branding, and payment tracking for businesses of all sizes.',
      icon: <FileText className="w-8 h-8" />,
      path: '/zion-ai-invoice-generator',
      features: ['AI invoice generation', 'Smart calculations', 'Custom branding', 'Automated sending', 'Payment tracking'],
      price: '$19/month',
      featured: true
    },
    {
      title: 'Zion AI Customer Insights',
      description: 'Unlock deep customer insights with AI-powered analytics. Predict behavior, reduce churn, and maximize customer lifetime value.',
      icon: <Users className="w-8 h-8" />,
      path: '/zion-ai-customer-insights',
      features: ['AI customer analysis', 'Predictive modeling', 'Sentiment analysis', 'Customer segmentation', 'Growth insights'],
      price: '$39/month',
      featured: true
    },
    {
      title: 'Zion AI Email Analyzer',
      description: 'Analyze email performance with AI-powered insights. Track engagement, optimize campaigns, and improve deliverability.',
      icon: <Mail className="w-8 h-8" />,
      path: '/zion-ai-email-analyzer',
      features: ['AI email analysis', 'Performance analytics', 'Audience insights', 'Sentiment analysis', 'Optimization recommendations'],
      price: '$29/month',
      featured: true
    },
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced analytics dashboard with real-time insights and customizable reports for data-driven decision making.',
      icon: <BarChart3 className="w-8 h-8" />,
      path: '/zion-analytics-pro',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'API integration', 'Mobile app'],
      price: '$99/month',
      featured: false
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive security monitoring and threat detection for your applications with AI-powered protection.',
      icon: <Shield className="w-8 h-8" />,
      path: '/zion-security-shield',
      features: ['Threat detection', 'Security monitoring', 'Incident response', 'Compliance reporting', '24/7 monitoring'],
      price: '$149/month',
      featured: false
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with advanced encryption, automated backups, and unlimited scalability.',
      icon: <Cloud className="w-8 h-8" />,
      path: '/zion-cloud-vault',
      features: ['End-to-end encryption', 'Automated backups', 'File sharing', 'Version control', 'Team collaboration'],
      price: '$49/month',
      featured: false
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for marketing teams with SEO optimization and brand voice training.',
      icon: <Sparkles className="w-8 h-8" />,
      path: '/zion-content-studio',
      features: ['AI content generation', 'Content calendar', 'Team collaboration', 'SEO optimization', 'Brand voice training'],
      price: '$79/month',
      featured: false
    },
    {
      title: 'Zion Smart Inventory Optimizer',
      description: 'AI-powered inventory management with demand forecasting, automated reordering, and cost optimization for retail and e-commerce.',
      icon: <Package className="w-8 h-8" />,
      path: '/zion-smart-inventory-optimizer',
      features: ['Demand forecasting', 'Automated reordering', 'Cost optimization', 'Stock alerts', 'Analytics dashboard'],
      price: '$89/month',
      featured: false
    },
    {
      title: 'Zion AI Voice Assistant Pro',
      description: 'Advanced AI voice assistant for businesses with natural language processing, task automation, and multi-language support.',
      icon: <Mic className="w-8 h-8" />,
      path: '/zion-ai-voice-assistant-pro',
      features: ['Natural language processing', 'Task automation', 'Multi-language support', 'Voice commands', 'Integration APIs'],
      price: '$59/month',
      featured: false
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Automated code review and quality analysis with AI-powered suggestions, security scanning, and performance optimization.',
      icon: <Code className="w-8 h-8" />,
      path: '/zion-ai-code-reviewer',
      features: ['Automated code review', 'Security scanning', 'Performance optimization', 'Best practices', 'Team collaboration'],
      price: '$69/month',
      featured: false
    },
    {
      title: 'Zion AI Social Media Manager',
      description: 'AI-powered social media management with content scheduling, engagement analysis, and automated posting across platforms.',
      icon: <Share2 className="w-8 h-8" />,
      path: '/zion-ai-social-media-manager',
      features: ['Content scheduling', 'Engagement analysis', 'Automated posting', 'Multi-platform support', 'Analytics dashboard'],
      price: '$49/month',
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our powerful micro SAAS solutions designed to streamline your business operations. Analytics, security, cloud storage, and more." />
        <meta name="keywords" content="micro saas, business software, analytics, security, cloud storage, productivity tools" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {' '}That Scale
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused software solutions designed to solve specific business challenges 
              and boost productivity across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Specialized tools designed to address specific business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300 group ${
                    product.featured ? 'border-cyan-500/30' : 'border-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {product.icon}
                    </div>
                    {product.featured && (
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-cyan-400">
                      {product.price}
                    </div>
                    <Link
                      to={product.path}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built with modern technology and designed for scalability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast</h3>
                <p className="text-gray-300">
                  Optimized for speed and performance, delivering instant results and seamless user experience.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Secure & Reliable</h3>
                <p className="text-gray-300">
                  Enterprise-grade security with 99.9% uptime guarantee and comprehensive data protection.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Scalable</h3>
                <p className="text-gray-300">
                  Grows with your business, from startup to enterprise, with flexible pricing and features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your journey with our micro SAAS solutions today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Get Started Now
                </Link>
                <Link
                  to="/pricing"
                  className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
