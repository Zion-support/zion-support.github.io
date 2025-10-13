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
  Receipt,
  Mail,
  Package
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      title: 'Zion AI Video Generator',
      description: 'Create professional videos in minutes with AI-powered video generation technology.',
      icon: <Video className="w-8 h-8" />,
      path: '/zion-ai-video-generator',
      features: ['AI video creation', 'Multiple formats', 'Voice synthesis', 'Smart editing'],
      price: '$29/month',
      featured: true,
      category: 'AI Content'
    },
    {
      title: 'Zion AI Invoice Generator',
      description: 'Automate your billing process with intelligent invoice generation and payment tracking.',
      icon: <Receipt className="w-8 h-8" />,
      path: '/zion-ai-invoice-generator',
      features: ['Automated billing', 'Payment integration', 'Multi-currency', 'Expense tracking'],
      price: '$19/month',
      featured: true,
      category: 'Business Tools'
    },
    {
      title: 'Zion AI Customer Insights',
      description: 'Unlock deep customer insights with advanced AI analytics and predictive scoring.',
      icon: <Users className="w-8 h-8" />,
      path: '/zion-ai-customer-insights',
      features: ['Customer analytics', 'Journey mapping', 'Predictive scoring', 'Sentiment analysis'],
      price: '$79/month',
      featured: true,
      category: 'AI Analytics'
    },
    {
      title: 'Zion AI Email Analyzer',
      description: 'Optimize your email marketing with AI-powered analysis and subject line optimization.',
      icon: <Mail className="w-8 h-8" />,
      path: '/zion-ai-email-analyzer',
      features: ['Email analysis', 'Subject optimization', 'Spam detection', 'Performance analytics'],
      price: '$39/month',
      featured: true,
      category: 'Marketing'
    },
    {
      title: 'Zion Smart Inventory Optimizer',
      description: 'Optimize your inventory with AI-powered demand forecasting and automated reordering.',
      icon: <Package className="w-8 h-8" />,
      path: '/zion-smart-inventory-optimizer',
      features: ['Demand forecasting', 'Automated reordering', 'Cost optimization', 'Multi-location'],
      price: '$59/month',
      featured: true,
      category: 'Operations'
    },
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced analytics dashboard with real-time insights and customizable reports.',
      icon: <BarChart3 className="w-8 h-8" />,
      path: '/zion-analytics-pro',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization'],
      price: '$299/month',
      featured: false,
      category: 'Analytics'
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive security monitoring and threat detection for your applications.',
      icon: <Shield className="w-8 h-8" />,
      path: '/zion-security-shield',
      features: ['Threat detection', 'Security monitoring', 'Incident response'],
      price: '$499/month',
      featured: false,
      category: 'Security'
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with advanced encryption and backup features.',
      icon: <Cloud className="w-8 h-8" />,
      path: '/zion-cloud-vault',
      features: ['End-to-end encryption', 'Automated backups', 'File sharing'],
      price: '$99/month',
      featured: false,
      category: 'Storage'
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for marketing teams.',
      icon: <Sparkles className="w-8 h-8" />,
      path: '/zion-content-studio',
      features: ['AI content generation', 'Content calendar', 'Team collaboration'],
      price: '$149/month',
      featured: false,
      category: 'Content'
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
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    product.featured ? 'border-cyan-500/30' : 'border-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {product.icon}
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      {product.featured && (
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </span>
                      )}
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 3 && (
                      <li className="text-xs text-cyan-400 text-center">
                        +{product.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-cyan-400">
                      {product.price}
                    </div>
                    <Link
                      to={product.path}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium group-hover:translate-x-1"
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
