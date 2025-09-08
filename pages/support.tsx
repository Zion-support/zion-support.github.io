import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { HelpCircle, MessageCircle, Phone, Mail, Clock, Search, BookOpen, Users, ArrowRight, CheckCircle, Star, Globe } from 'lucide-react';

export default function Support() {
  const supportOptions = [

    }
  ];

  const faqCategories = [

        {
          question: 'How do I create an account?',
          answer: 'You can create an account by visiting our sign-up page and providing your email address and basic information. We\'ll send you a verification email to complete the process.'
        }, {
          question: 'What services do you offer?',
          answer: 'We offer AI services, cloud solutions, cybersecurity, and micro SaaS development. Visit our services page for detailed information about each offering.'
        }, {
          question: 'How do I get my API key?', answer: 'Once you\'ve created an account, you can find your API key in the dashboard under the "API Keys" section. You can generate new keys or revoke existing ones as needed.'
        }
      ]
    }, {
      title: 'Billing & Pricing',
      questions: [
        {
          question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also arrange for invoicing and payment terms.'
        }, {
          question: 'Can I change my plan anytime?', answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
        }, {
          question: 'Do you offer refunds?', answer: 'We offer a 30-day money-back guarantee for all our services. If you\'re not satisfied, contact our support team for a full refund.'
        }
      ]
    }, {
      title: 'Technical Support',
      questions: [
        {
          question: 'How do I integrate your API?', answer: 'We provide comprehensive documentation and SDKs for popular programming languages. Check our API documentation for detailed integration guides.'
        }, {
          question: 'What are your API rate limits?', answer: 'Rate limits vary by plan. Free plans have 1,000 requests per month, Professional plans have 100,000 requests per month, and Enterprise plans have unlimited requests.'
        }, {
          question: 'How do I report a bug?', answer: 'You can report bugs through our support portal, email support@ziontechgroup.com, or use the feedback form in your dashboard.'
        }
      ]
    }
  ];

  const supportTiers = [

    }
  ];

  const contactMethods = [

      title: 'Technical Support',
      email: 'support@ziontechgroup.com', phone: '+1 302 464 0951',
      hours: '24/7 for Premium customers'
    }, {
      title: 'Sales & Partnerships',
      email: 'sales@ziontechgroup.com', phone: '+1 302 464 0952',
      hours: 'Monday - Friday, 9 AM - 6 PM EST'
    }
  ];

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"><h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Get the support you need for our AI consciousness, quantum computing
              and autonomous systems. Our expert team is here to help 24/7.
            </p>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <HelpCircle className="w-6 h-6" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Users className="w-6 h-6" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-6 h-6" />
                <span>Quick Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Quick Actions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"><h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get Help Fast
            </h2>
            <p className="text-xl text-gray-400">Choose your preferred support method</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"><div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {action.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{action.title}</h3>
                  <p className="text-gray-300 mb-4 text-center leading-relaxed">{action.description}</p>
                  <button className={`w-full py-3 px-4 bg-gradient-to-r ${action.color} text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`}>
                    {action.action}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Support Categories */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"><h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Browse Help Categories
            </h2>
            <p className="text-xl text-gray-400">Find solutions organized by topic and service area</p>
          </motion.div>
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                All Categories
              </button>
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}>{category.name}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"><div className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">{category.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <span className="text-sm text-gray-400">{category.articles} articles</span>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Browse</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Support Channels */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"><h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-300">
                Multiple support channels to meet your needs
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"><div className="flex justify-center mb-4">
                    {channel.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-cyan-400">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-green-400">{channel.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Priority:</span>
                      <span className="text-purple-400">{channel.priority}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Search and Filter */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help topics, questions, or solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {supportCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/50'
                    }`}>{category.icon}
                    {category.name}
                    <span className="text-sm text-gray-400">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is AI Consciousness Evolution?"
                answer: "AI Consciousness Evolution is our revolutionary platform that creates truly conscious, self-aware, and emotionally intelligent AI systems that transcend traditional artificial intelligence."
              }
              {
                question: "How does Quantum Neural Ecosystem work?"
                answer: "Our Quantum Neural Ecosystem combines quantum computing with neural networks to solve previously impossible problems, leveraging quantum superposition and entanglement for exponential computational power."
              }
              {
                question: "What makes Space Resource Intelligence unique?"
                answer: "Our space technology uses AI-powered autonomous exploration to discover and extract extraterrestrial resources, enabling sustainable space colonization and resource utilization."
              }
              {
                question: "How secure is your Quantum Cybersecurity platform?"
                answer: "Our quantum cybersecurity provides unbreakable encryption using quantum key distribution and quantum-resistant algorithms that future-proof your security beyond current technological limitations."
              }
              {
                question: "Can I integrate your AI with my existing systems?"
                answer: "Yes! We provide comprehensive integration support, APIs, and custom development services to seamlessly integrate our revolutionary AI solutions with your existing infrastructure."
              }
              {
                question: "What support do you offer for enterprise deployments?"
                answer: "We provide dedicated enterprise support including 24/7 technical assistance, custom training programs, and dedicated account managers for large-scale deployments."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
      {/* FAQs */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Popular Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        <section id="knowledge-base" className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"><h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Quick answers to common questions and solutions
              </p>
            </motion.div>
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-20">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">No results found</h3>
                <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"><h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 mb-4">{faq.answer}</p>
                    <div className="flex flex-wrap gap-2">
                      {faq.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">{tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
        {/* Support Resources */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"><h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Support Resources
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive documentation and learning materials
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"><div className="flex justify-center mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                      {resource.category}
                    </span>
                    <a
                      href={resource.link}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      Access
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            className="text-center mb-16"><h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Popular Help Articles
            </h2>
            <p className="text-xl text-gray-400">Most viewed and helpful support content</p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-4">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"><div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {article.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {article.helpful} helpful
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Read</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Support Hours & Contact */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}><h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Support Hours & Availability
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our expert support team is available to help you succeed with our
                revolutionary technology solutions.
              </p>
              <div className="space-y-4">
                {supportHours.map((schedule, index) => (
                  <div key={schedule.day} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                    <div>
                      <h3 className="font-semibold text-white">{schedule.day}</h3>
                      <p className="text-gray-400">{schedule.hours}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      schedule.status === 'Available'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {schedule.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"><div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4 text-white">Need Immediate Help?</h3>
                <p className="text-gray-300 mb-6">
                  For urgent technical issues or critical support needs
                  our team is available around the clock.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-white">support@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Live Chat Available</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-cyan-500/20">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
                  >
                    Contact Support
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}><h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is dedicated to ensuring your success with our
              revolutionary technology solutions. Don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Get Support
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/resources"
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Browse Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default Support
          </div>
        </section>
        {/* Contact Support */}
        <section id="contact-support" className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}><h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our expert support team is ready to assist you with any questions or technical issues
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30">
                <h3 className="text-xl font-bold text-white mb-4">Emergency Support</h3>
                <p className="text-gray-300 mb-4">
                  For critical issues affecting production systems, contact our emergency support line: </p>
                <div className="text-2xl font-bold text-cyan-400">+1 (302) 464-0950</div>
                <p className="text-sm text-gray-400 mt-2">Available 24/7 for enterprise clients</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
</>
  )}