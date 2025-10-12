import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-099c

const MicroSaasServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      pricing: '$12/month',
      popular: true,
      link: '/ai-password-manager',
      category: 'Security'
    },
    {
      users: '1,100+',
      rating: '4.8'
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Affordable Pricing',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Quick Setup',
    }
  ];

  const categories = ['All', 'Productivity', 'Finance', 'Security', 'Business', 'Health'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '24/7', label: 'Support' }
      description: 'Powerful tools at micro-SaaS prices, perfect for small businesses and individuals.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup process and guided onboarding.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence to automate tasks and gain valuable insights.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Regular Updates',
      description: 'Continuous improvements and new features based on user feedback and needs.'
    }
  ];

  const stats = [
    { number: '4,000+', label: 'Active Users' },
    { number: '15+', label: 'Micro SAAS Apps' },
    { number: '4.7', label: 'Average Rating' },
    { number: '99.9%', label: 'Uptime' }
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
  ];

      description: 'Get up and running in minutes, not weeks',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'AI-Powered',
      description: 'Leverage artificial intelligence for better results',
      icon: <Star className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Growing Community',
      description: 'Join thousands of satisfied users worldwide',
      icon: <Users className="w-6 h-6 text-orange-500" />
    }
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-9603
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Affordable micro SaaS solutions powered by AI. Task management, expense tracking, password management, and more." />
        <meta name="keywords" content="micro SaaS, AI tools, task management, expense tracking, productivity, affordable software" />
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
      </Helmet>

      {/* Hero Section */}
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Powerful AI-driven micro software solutions designed to streamline your business operations and boost productivity. 
              Affordable tools for modern businesses.
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Micro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}SaaS Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Affordable, AI-powered micro SaaS solutions designed to solve specific business problems with minimal complexity.
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
              </Link>
            </div>
          </div>

          {/* Stats Section */}
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

                      Popular
                    </div>
                  </div>
                )}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                </div>
                <div className="text-sm text-gray-400 mb-6">Setup: {service.duration}</div>
                <Link 
                  <ArrowRight className="w-4 h-4 ml-2" />

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {service.pricing}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-1" />
                      <span className="text-gray-600 font-semibold">{service.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{service.users} users</p>
                </div>

                <Link
                  to={service.link}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Try Now
                  <ArrowRight className="ml-2 w-4 h-4" />
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Experience the benefits of our AI-powered micro applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Micro SaaS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Micro SaaS solutions offer focused functionality with minimal complexity and maximum value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
          </div>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start using our AI-powered micro SAAS tools today and transform how you work.
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/it-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore IT Services
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
                </Link>
              </div>
            </div>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Try Our Micro SaaS Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start with a free trial and experience the power of focused, AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All Plans
            </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSAASServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
export default MicroSAASServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-9603
