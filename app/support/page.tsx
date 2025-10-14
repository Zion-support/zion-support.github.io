import React from 'react';-helmet-async;
import { Link } from 'react-router-dom;
import { Right, Circle } from 'lucide-react;
const SupportPage: React.FC = () => {
  const supportOptions = [{
      icon: 'Chat',';
      title: 'Live Chat',';
      description: 'Get instant help from our support team',';
      action: 'Start Chat',';
      color: 'from-blue-500 to-cyan-500'';
    },
    {
      icon: 'Phone',';
      title: 'Phone Support',';
      description: 'Call us for immediate assistance',';
      action: 'Call Now',';
      color: 'from-green-500 to-emerald-500'';
    },
    {
      icon: 'Email',';
      title: 'Email Support',';
      description: 'Send us a detailed message',';
      action: 'Send Email',';
      color: 'from-purple-500 to-pink-500'';
    },
    {
      icon: 'Book',';
      title: 'Documentation',';
      description: 'Browse our comprehensive guides',';
      action: 'View Docs',';
      color: 'from-orange-500 to-red-500'';    }
  ]

  const faqs = [{
      question: 'How do I get started with your AI services?','
      answer: 'Getting started is easy! Contact our team for a consultation, and we\'ll help you identify the best AI solutions for your business needs.''},
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we assess your needs and create a customized implementation plan. We\'ll guide you through every step of the process.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity, but most AI implementations take 4-12 weeks from start to finish. We provide detailed project plans with milestones and regular updates throughout the process.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer comprehensive ongoing support including monitoring, maintenance, updates, and 24/7 technical assistance. Our support plans are tailored to your specific needs and requirements.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of technologies including Python, JavaScript, React, Node.js, AWS, Azure, Google Cloud, TensorFlow, PyTorch, and many more. We stay current with the latest technologies and best practices.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We implement industry-standard security measures including encryption, secure data transmission, access controls, and compliance with GDPR, HIPAA, and other relevant regulations. Your data security is our top priority.'
    },
    {
      question: 'Can you work with our existing systems?',
      answer: 'Absolutely! We specialize in integrating with existing systems and can work with your current infrastructure. We\'ll assess your systems and create a seamless integration plan that works with your existing setup.'
    }
  ]

  const handleFaqToggle = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT solutions. Phone, email, and live chat support available." />
        <meta name="keywords" content="technical support, customer service, help desk, AI support, IT support, 24/7 support" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Support
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Center
              </span>2608
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help! Get support for our AI and IT solutions through multiple channels.'
            </p>2782
          </div>
        </section>
        {/* Support Options */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              How Can We Help You?
            </h2>3130
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, _index) => {
                const Icon = option.icon
                return (
                  <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center group">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${option.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                    <p className="text-gray-300 mb-4">{option.description}</p>
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                      {option.action}
                      <Right className="w-4 h-4 ml-2 inline" />
                    </button>
                  </div>
  )
              })}
            </div>4469
          </div>
        </section>
        {/* FAQ Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Frequently Asked Questions
            </h2>4697
            <div className="space-y-6">
              {faqs.map((faq, _index) => (
                <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Info */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Contact Information
            </h2>5408

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
                <Circle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2"></h3>
                <p className="text-cyan-400 font-medium">+1 (555) 123-4567</p>
<p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
                <Circle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400 font-medium">support@ziontechgroup.com</p>
<p className="text-gray-400 text-sm">24/7 Support</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
                <Circle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-cyan-400 font-medium">123 Tech Street</p>
<p className="text-gray-400 text-sm">San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Tell us about your issue or question..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SupportPage;

