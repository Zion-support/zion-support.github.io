import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Shield, Cloud, Users, Zap, CheckCircle, Star } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaas = () => {
  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced analytics dashboard with real-time insights and customizable reports.',
      icon: BarChart3,
      path: '/zion-analytics-pro',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization'],
      price: '$29/month',
      category: 'Analytics'
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive security monitoring and threat detection for your business.',
      icon: Shield,
      path: '/zion-security-shield',
      features: ['Threat detection', 'Security monitoring', 'Incident response'],
      price: '$49/month',
      category: 'Security'
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage and file management with advanced encryption.',
      icon: Cloud,
      path: '/zion-cloud-vault',
      features: ['Secure storage', 'File sharing', 'Version control'],
      price: '$19/month',
      category: 'Storage'
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform.',
      icon: Users,
      path: '/zion-content-studio',
      features: ['Content creation', 'AI assistance', 'Team collaboration'],
      price: '$39/month',
      category: 'Content'
    },
    {
      title: 'Zion AI Video Generator',
      description: 'Create professional videos with AI-powered tools and templates.',
      icon: Zap,
      path: '/zion-ai-video-generator',
      features: ['AI video creation', 'Templates', 'Auto-editing'],
      price: '$59/month',
      category: 'AI Tools'
    },
    {
      title: 'Zion AI Invoice Generator',
      description: 'Automated invoice generation and management system.',
      icon: BarChart3,
      path: '/zion-ai-invoice-generator',
      features: ['Auto-generation', 'Payment tracking', 'Tax calculations'],
      price: '$24/month',
      category: 'Finance'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      content: "Zion Analytics Pro has transformed how we track our business metrics. The insights are incredible!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Digital Agency",
      role: "CTO",
      content: "The security features in Zion Security Shield give us peace of mind. Highly recommended!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio",
      role: "Project Manager",
      content: "Zion Content Studio has streamlined our content creation process. We're 50% more productive now.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS - Zion Tech Group"
        description="Discover our comprehensive suite of micro SAAS solutions designed to streamline your business operations. From analytics to security, we have the tools you need."
        keywords="micro SAAS, business software, analytics, security, cloud storage, content creation, AI tools, productivity"
      />
      
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Micro SAAS
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Powerful, focused software solutions designed to solve specific business challenges. 
            Choose from our suite of micro SAAS products to enhance your productivity and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Micro SAAS Products
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our comprehensive suite of specialized business tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSaasProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>
                
                <div className="mb-4">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{product.price}</div>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={product.path}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust our micro SAAS solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-400 font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-white/10 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start using our micro SAAS solutions today and transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/demo"
              className="border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaas;