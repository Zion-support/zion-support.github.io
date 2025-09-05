import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_CheckCircle, _ArrowRight, _Star, _TrendingUp, _Phone, _Zap, _DollarSign, _Shield, _Mail, _MapPin, _Rocket, _Brain, _Sparkles, _Atom, _Dna, _Users, _Globe, _Cpu, _Target, _Microscope, _Lock, _Cloud, _BarChart3, _Settings, _Eye, _Award, _Clock, _Heart, _Lightbulb, _Target as TargetIcon, _Zap as ZapIcon, _Shield as ShieldIcon, _Globe as GlobeIcon, _Search, _Code, _TestTube, _Server, _Database, _Network, _Shield as SecurityIcon, _Wifi, _Building, _Cpu as CpuIcon, _TrendingUp as ChartIcon, _Megaphone, _HeadphonesIcon, _Users as TeamIcon} from 'lucide-react';
import Layout from '../components/layout/Layout';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _heroStats = [
  {_label: 'Business Solutions', _value: '100+', _icon: <Target className="w-5 h-5" />},
  {_label: 'Happy Businesses', _value: '250+', _icon: <Users className="w-5 h-5" />},
  {_label: 'Success Rate', _value: '99.5%', _icon: <Award className="w-5 h-5" />},
  {_label: 'ROI Average', _value: '400%', _icon: <TrendingUp className="w-5 h-5" />}
];

const _serviceCategories = [
  {_title: 'Business Intelligence & Analytics', _description: 'AI-powered business intelligence and data analytics solutions', _services: innovativeBusinessSolutions2025.filter(s => s.category === 'Business Intelligence & Analytics'), _icon: ChartIcon, _color: 'from-blue-500 to-cyan-600', _features: ['Data Analysis', _'Predictive Analytics', _'Real-time Insights']},
  {_title: 'Marketing Automation', _description: 'Intelligent marketing automation with AI-driven optimization', _services: innovativeBusinessSolutions2025.filter(s => s.category === 'Marketing Automation'), _icon: Megaphone, _color: 'from-purple-500 to-pink-600', _features: ['Campaign Optimization', _'Content Personalization', _'ROI Tracking']},
  {_title: 'Sales Intelligence', _description: 'AI-powered sales automation and intelligence solutions', _services: innovativeBusinessSolutions2025.filter(s => s.category === 'Sales Intelligence'), _icon: TrendingUp, _color: 'from-green-500 to-emerald-600', _features: ['Lead Scoring', _'Sales Forecasting', _'Pipeline Optimization']},
  {_title: 'Customer Service', _description: 'Intelligent customer service with AI automation', _services: innovativeBusinessSolutions2025.filter(s => s.category === 'Customer Service'), _icon: HeadphonesIcon, _color: 'from-orange-500 to-red-600', _features: ['AI Chatbots', _'Ticket Automation', _'Sentiment Analysis']},
  {_title: 'HR Management', _description: 'AI-powered HR automation and management solutions', _services: innovativeBusinessSolutions2025.filter(s => s.category === 'HR Management'), _icon: TeamIcon, _color: 'from-teal-500 to-cyan-600', _features: ['Recruitment Automation', _'Performance Analytics', _'Employee Engagement']}
];

const _heroFeatures = [
  {_title: 'AI-Powered Intelligence', _description: 'Advanced AI algorithms that provide intelligent insights and automation for business operations.', _icon: Brain, _gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600'},
  {_title: 'Automated Workflows', _description: 'Intelligent automation that reduces manual tasks and improves operational efficiency.', _icon: Settings, _gradient: 'bg-gradient-to-r from-purple-500 to-pink-600'},
  {_title: 'Real-time Analytics', _description: 'Live data insights and analytics that enable data-driven decision making.', _icon: BarChart3, _gradient: 'bg-gradient-to-r from-green-500 to-emerald-600'},
  {_title: 'Predictive Capabilities', _description: 'AI-powered predictions that help businesses anticipate trends and optimize performance.', _icon: Sparkles, _gradient: 'bg-gradient-to-r from-orange-500 to-red-600'}
];

const _testimonials = [
  {_name: 'Michael Rodriguez', _role: 'CEO, _GrowthTech Solutions', _company: 'GrowthTech Solutions', _content: 'Zion Tech Group\'s business intelligence platform has transformed our decision-making process. We now have real-time insights that have increased our revenue by 300%.', _rating: 5, _avatar: '👨‍💼'},
  {_name: 'Sarah Johnson', _role: 'Marketing Director, _DigitalFlow Agency', _company: 'DigitalFlow Agency', _content: 'The AI marketing automation platform has revolutionized our campaigns. We\'ve seen conversion rates increase by 150% while reducing costs by 40%.', _rating: 5, _avatar: '👩‍💼'},
  {_name: 'David Chen', _role: 'Sales Manager, _TechSales Pro', _company: 'TechSales Pro', _content: 'Their sales intelligence platform has increased our sales productivity by 200%. The AI-powered lead scoring and forecasting are game-changers.', _rating: 5, _avatar: '👨‍💻'}
];

export default function InnovativeBusinessSolutions() {_return (_<Layout>
      <Head>
        <title>Innovative Business Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered business solutions including business intelligence, _marketing automation, _sales intelligence, _customer service, _and HR management. Transform your business operations with intelligent automation." />
        <meta name="keywords" content="business solutions, _AI automation, _business intelligence, _marketing automation, _sales intelligence, _customer service, _HR management" />
        <meta property="og:title" content="Innovative Business Solutions - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered business solutions including business intelligence, _marketing automation, _sales intelligence, _customer service, _and HR management." />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-business-solutions" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-business-solutions" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-green-900/20 to-emerald-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">
              Innovative Business Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business operations with AI-powered intelligence, _automation, _and analytics that drive growth and efficiency
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {_heroStats.map((stat, _index) => (
                <motion.div
                  key={index}
                  initial={_{ opacity: 0, _scale: 0.8}}
                  animate={_{ opacity: 1, _scale: 1}}
                  transition={_{ duration: 0.5, _delay: index * 0.1}}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-teal-500/30"
                >
                  {_stat.icon}
                  <span className="text-teal-400 font-semibold">{_stat.value}</span>
                  <span className="text-gray-300 text-sm">{_stat.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-green-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-green-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href={_`tel:${contactInfo.mobile}`} className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-teal-500/30 hover:bg-white/20 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Business Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our business solutions combine cutting-edge AI technology with proven business processes to deliver unprecedented results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {_heroFeatures.map(_(feature, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="relative group"
              >
                <div className={_`${feature.gradient} p-1 rounded-xl`}>
                  <div className="bg-gray-900 rounded-xl p-6 h-full">
                    <div className="text-center">
                      <div className={_`${feature.gradient} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{_feature.title}</h3>
                      <p className="text-gray-300">{_feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Business Solution Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive business solutions covering every aspect of modern business operations
            </p>
          </motion.div>

          <div className="space-y-16">
            {_serviceCategories.map(_(category, _categoryIndex) => (_<motion.div
                key={categoryIndex}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: categoryIndex * 0.2}}
                viewport={_{ once: true}}
                className="relative"
              >
                <div className="text-center mb-12">
                  <div className={_`inline-flex items-center justify-center w-20 h-20 ${category.color} rounded-2xl mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{_category.title}</h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{_category.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {_category.services.map((service, _serviceIndex) => (
                    <motion.div
                      key={service.id}
                      initial={_{ opacity: 0, _scale: 0.9}}
                      whileInView={_{ opacity: 1, _scale: 1}}
                      transition={_{ duration: 0.5, _delay: serviceIndex * 0.1}}
                      viewport={_{ once: true}}
                      className="relative group"
                    >
                      <div className={_`${service.color} p-1 rounded-xl`}>
                        <div className="bg-gray-900 rounded-xl p-6 h-full">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl">{_service.icon}</span>
                            {_service.popular && (
                              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <h4 className="text-xl font-semibold text-white mb-2">{_service.name}</h4>
                          <p className="text-gray-300 text-sm mb-4">{_service.tagline}</p>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-white">{_service.price}</span>
                            <span className="text-gray-400">{_service.period}</span>
                          </div>
                          <p className="text-gray-300 text-sm mb-4">{_service.description}</p>
                          <div className="space-y-2 mb-6">
                            {_service.features.slice(0, _3).map(_(feature, _featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                {_feature}
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <Link
                              href={_service.link}
                              className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300"
                            >
                              Learn More
                              <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                            <Link
                              href={_`tel:${contactInfo.mobile}`}
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-green-600 text-white text-sm font-semibold rounded-lg hover:from-teal-600 hover:to-green-700 transition-all duration-300"
                            >
                              Get Started
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from businesses that have transformed their operations with our innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_testimonials.map(_(testimonial, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-teal-500/20"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{_testimonial.avatar}</span>
                  <div>
                    <h4 className="text-white font-semibold">{_testimonial.name}</h4>
                    <p className="text-teal-400 text-sm">{_testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{_testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{_testimonial.content}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {_[...Array(testimonial.rating)].map(_(_, _i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900/20 via-green-900/20 to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have already revolutionized their operations with our innovative AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={_`tel:${contactInfo.mobile}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-green-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-green-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: {_contactInfo.mobile}
              </Link>
              <Link
                href={_`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-teal-500/30 hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-2">📍 {_contactInfo.address}</p>
              <p className="text-gray-300">🌐 {_contactInfo.website}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}