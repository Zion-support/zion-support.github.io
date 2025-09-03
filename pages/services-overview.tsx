import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { services, getServicesByCategory } from '../data/services';
import { ArrowRight, CheckCircle, Clock, Users, Shield, Zap, TrendingUp, Award } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServicesOverviewPage: NextPage = () => {
  const microSaasServices = getServicesByCategory('micro-saas');
  const itServices = getServicesByCategory('it-services');
  const aiServices = getServicesByCategory('ai-services');

  const stats = [
    { number: '100+', label: 'Services Available', icon: Globe },
    { number: '500+', label: 'Projects Completed', icon: TrendingUp },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '30-60%', label: 'Cost Savings', icon: Shield },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Cutting-Edge Technology',
      description: 'We use the latest technologies and frameworks to deliver innovative solutions that give you a competitive edge.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance, regular security audits, and advanced threat protection.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Our team consists of certified professionals with deep expertise in AI, cloud architecture, and modern development practices.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fast Implementation',
      description: 'Quick setup and deployment to get you up and running in days, not months, with our proven methodologies.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Proven Results',
      description: 'Track record of successful implementations with measurable ROI improvements and client satisfaction.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Comprehensive testing, code reviews, and quality assurance processes ensure reliable and maintainable solutions.'
    }
  ];

  const pricingComparison = [
    {
      category: 'Micro SaaS',
      ourPrice: '$12 - $1,299/month',
      marketPrice: '$25 - $2,500/month',
      savings: '30-50%',
      features: ['AI-powered automation', 'Real-time analytics', '24/7 support', 'Custom integrations']
    },
    {
      category: 'IT Services',
      ourPrice: '$2,000 - $120,000',
      marketPrice: '$5,000 - $200,000',
      savings: '25-40%',
      features: ['Cloud migration', 'Security implementation', 'DevOps automation', 'Infrastructure optimization']
    },
    {
      category: 'AI Services',
      ourPrice: '$5,000 - $400,000',
      marketPrice: '$15,000 - $800,000',
      savings: '40-60%',
      features: ['Custom AI models', 'Machine learning', 'Computer vision', 'Natural language processing']
    }
  ];

  return (
    <MainLayout
      title="Complete Services Overview - Zion Tech Group"
      description="Comprehensive overview of all our technology services including micro SaaS, IT services, and AI solutions. Competitive pricing and proven results."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Complete Technology Solutions Portfolio
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From innovative micro SaaS applications to enterprise-grade AI platforms, 
              we provide comprehensive technology solutions that drive business growth and digital transformation.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View All Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer three main categories of technology services, each designed to address specific business needs and challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Micro SaaS */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Micro SaaS Services</h3>
              <p className="text-gray-600 mb-6">
                Innovative, AI-powered software solutions that automate business processes and boost productivity.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">{microSaasServices.length} Services Available</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Starting from $12/month</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">30-50% cost savings</span>
                </div>
              </div>
              <Link href="/services/micro-saas" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                View All Micro SaaS Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            {/* IT Services */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">IT Services</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive IT infrastructure, cloud migration, and enterprise-grade security solutions.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">{itServices.length} Services Available</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Starting from $2,000</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">25-40% cost reduction</span>
                </div>
              </div>
              <Link href="/services/it-services" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                View All IT Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            {/* AI Services */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-purple-600 mb-4">AI Services</h3>
              <p className="text-gray-600 mb-6">
                Advanced artificial intelligence solutions including machine learning, computer vision, and predictive analytics.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">{aiServices.length} Services Available</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Starting from $5,000</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">40-60% savings</span>
                </div>
              </div>
              <Link href="/services/ai-services" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center">
                View All AI Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Competitive Pricing Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our pricing is significantly more competitive than market rates, providing exceptional value for cutting-edge technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingComparison.map((category, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-lg border-2 border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Our Pricing:</span>
                    <span className="font-bold text-green-600">{category.ourPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Market Average:</span>
                    <span className="font-semibold text-gray-500 line-through">{category.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">You Save:</span>
                    <span className="font-bold text-blue-600">{category.savings}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional value through cutting-edge technology, expert implementation, and proven results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular and innovative services that are transforming businesses worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Micro SaaS */}
            {microSaasServices.slice(0, 3).map((service, index) => (
              <motion.div 
                key={service.id}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-lg border border-blue-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">${service.pricing.starter}</span>
                  <span className="text-sm text-gray-500">/month starting</span>
                </div>
                <Link 
                  href={service.link}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center text-sm"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}

            {/* Featured IT Services */}
            {itServices.slice(0, 3).map((service, index) => (
              <motion.div 
                key={service.id}
                className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow-lg border border-green-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index + 3) * 0.1 }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-green-600">${service.pricing.starter.toLocaleString()}</span>
                  <span className="text-sm text-gray-500">starting</span>
                </div>
                <Link 
                  href={service.link}
                  className="text-green-600 hover:text-green-700 font-semibold flex items-center text-sm"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}

            {/* Featured AI Services */}
            {aiServices.slice(0, 3).map((service, index) => (
              <motion.div 
                key={service.id}
                className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg shadow-lg border border-purple-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index + 6) * 0.1 }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">${service.pricing.starter.toLocaleString()}</span>
                  <span className="text-sm text-gray-500">starting</span>
                </div>
                <Link 
                  href={service.link}
                  className="text-purple-600 hover:text-purple-700 font-semibold flex items-center text-sm"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicesOverviewPage;