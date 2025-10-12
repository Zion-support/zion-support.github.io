import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content automatically using advanced AI technology.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization'],
      pricing: 'Starting at $29/month',
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'Task Management Pro',
      description: 'AI-powered task management with intelligent prioritization and automation.',
      features: ['Smart scheduling', 'Team collaboration', 'Progress tracking'],
      pricing: 'Starting at $19/month',
      link: '/micro-saas/task-manager-pro',
      popular: false
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-500" />,
      title: 'Expense Tracker',
      description: 'Automated expense tracking with AI categorization and insights.',
      features: ['Receipt scanning', 'Budget alerts', 'Tax preparation'],
      pricing: 'Starting at $15/month',
      link: '/micro-saas/expense-tracker',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Encrypted storage', 'Password generation', 'Security monitoring'],
      pricing: 'Starting at $12/month',
      link: '/micro-saas/password-manager',
      popular: false
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'Invoice Generator',
      description: 'AI-powered invoice creation with automated follow-ups and payments.',
      features: ['Template library', 'Payment tracking', 'Client management'],
      pricing: 'Starting at $25/month',
      link: '/micro-saas/invoice-generator',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'Health Tracker',
      description: 'Personal health monitoring with AI insights and recommendations.',
      features: ['Vital tracking', 'Health trends', 'Doctor integration'],
      pricing: 'Starting at $18/month',
      link: '/micro-saas/health-tracker',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      title: 'Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling optimization.',
      features: ['Auto-scheduling', 'Meeting optimization', 'Time blocking'],
      pricing: 'Starting at $16/month',
      link: '/micro-saas/smart-calendar',
      popular: false
    },
    {
      icon: <Settings className="w-8 h-8 text-pink-500" />,
      title: 'Climate Solutions',
      description: 'AI-powered environmental monitoring and sustainability tracking.',
      features: ['Carbon footprint', 'Sustainability goals', 'Impact reporting'],
      pricing: 'Starting at $22/month',
      link: '/ai-climate-solutions-pro',
      popular: false
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'AI-Powered',
      description: 'Every micro SAAS is enhanced with artificial intelligence for optimal performance.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Scalable',
      description: 'Start small and scale up as your business grows.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock support for all your micro SAAS needs.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'StartupXYZ',
      content: 'The AI Content Generator has revolutionized our content creation process. We save 10+ hours per week!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'TechFlow',
      content: 'Task Management Pro keeps our team organized and productive. The AI features are incredible.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'GreenTech',
      content: 'Climate Solutions helped us track and reduce our carbon footprint by 40%. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS applications designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro SAAS, AI applications, business tools, productivity, automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our collection of AI-powered micro SAAS applications designed to streamline your business operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/ai-services"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our Micro SAAS</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Powerful, focused applications that solve specific business challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Micro SAAS Collection</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose from our growing library of AI-powered business applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {microSAAS.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Users Say</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Don't just take our word for it - hear from our satisfied users
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 px-4">
              Start using our micro SAAS applications today and experience the power of AI-driven business tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/ai-services"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;
