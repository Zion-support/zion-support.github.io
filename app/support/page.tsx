import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  QuestionMarkCircleIcon, 
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our support team',
      icon: ChatBubbleLeftRightIcon,
      availability: '24/7 Available',
      responseTime: 'Instant',
      color: 'from-green-500 to-emerald-500',
      href: '/contact?type=chat'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: PhoneIcon,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'from-blue-500 to-cyan-500',
      href: 'tel:+13024640950'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      icon: EnvelopeIcon,
      availability: '24/7 Available',
      responseTime: 'Within 4 hours',
      color: 'from-purple-500 to-pink-500',
      href: 'mailto:support@ziontechgroup.com'
    },
    {
      title: 'Ticket System',
      description: 'Track your support requests and get detailed responses',
      icon: QuestionMarkCircleIcon,
      availability: '24/7 Available',
      responseTime: 'Within 2 hours',
      color: 'from-orange-500 to-red-500',
      href: '/contact?type=ticket'
    }
  ];

  const faqCategories = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer comprehensive AI solutions, IT services, cloud infrastructure, cybersecurity, data analytics, and digital transformation services. Our portfolio includes AI chatbots, machine learning models, cloud migration, security audits, and custom software development.'
        },
        {
          question: 'How do I get started with your services?',
          answer: 'Getting started is easy! You can contact us through our website, call us directly, or schedule a consultation. We\'ll assess your needs and recommend the best solutions for your business.'
        },
        {
          question: 'Do you offer custom solutions?',
          answer: 'Yes, we specialize in custom solutions tailored to your specific business needs. Our team works closely with you to develop bespoke AI applications, software solutions, and infrastructure setups.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'How do I integrate your AI services?',
          answer: 'We provide comprehensive API documentation, SDKs, and integration guides. Our technical team can also assist with the integration process and provide hands-on support.'
        },
        {
          question: 'What programming languages do you support?',
          answer: 'We support all major programming languages including Python, JavaScript, Java, C#, Go, and more. Our APIs are language-agnostic and work with any technology stack.'
        },
        {
          question: 'Do you provide training for your solutions?',
          answer: 'Yes, we offer comprehensive training programs including documentation, tutorials, webinars, and hands-on workshops to help your team effectively use our solutions.'
        }
      ]
    },
    {
      category: 'Billing & Pricing',
      questions: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including subscription-based plans, pay-per-use, and custom enterprise pricing. Contact us for a detailed quote based on your specific requirements.'
        },
        {
          question: 'Do you offer free trials?',
          answer: 'Yes, we provide free trials for most of our services. This allows you to test our solutions before making a commitment. Contact us to learn about trial availability for specific services.'
        },
        {
          question: 'Can I change my plan later?',
          answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Our flexible pricing structure allows you to scale up or down based on your changing needs.'
        }
      ]
    }
  ];

  const statusTypes = [
    {
      type: 'Operational',
      description: 'All systems are running normally',
      icon: CheckCircleIcon,
      color: 'text-green-400',
      bgColor: 'bg-green-100'
    },
    {
      type: 'Maintenance',
      description: 'Scheduled maintenance in progress',
      icon: ExclamationTriangleIcon,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-100'
    },
    {
      type: 'Incident',
      description: 'We are investigating an issue',
      icon: ExclamationTriangleIcon,
      color: 'text-red-400',
      bgColor: 'bg-red-100'
    }
  ];

  return (
    <>
      <SEOHead
        title="Support Center - Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. 24/7 support, documentation, and expert assistance."
        keywords="support, help, customer service, technical support, documentation, FAQ"
        canonicalUrl="https://ziontechgroup.com/support"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Support Center
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We're here to help you succeed. Get expert support, find answers to common questions, and access our comprehensive resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact-options" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Get Support Now
                </a>
                <a href="#faq" className="border-2 border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Browse FAQ
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* System Status */}
        <section className="py-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-green-400 mr-2" />
                <span className="text-white font-medium">All Systems Operational</span>
              </div>
              <div className="text-gray-400">|</div>
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-300">Last updated: {new Date().toLocaleString()}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section id="contact-options" className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How Can We <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Help You?</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the support option that works best for you. Our team is ready to assist with any questions or issues.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.href}
                  className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {option.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm group-hover:text-gray-300 transition-colors">
                    {option.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-300">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <span>{option.availability}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <CheckCircleIcon className="w-4 h-4 mr-2" />
                      <span>Response: {option.responseTime}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Find quick answers to common questions about our services and support.
              </p>
            </div>

            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                  <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
                  
                  <div className="space-y-6">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-b border-slate-700 pb-6 last:border-b-0">
                        <h4 className="text-lg font-semibold text-white mb-3 hover:text-purple-300 transition-colors">
                          {faq.question}
                        </h4>
                        <p className="text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Additional <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Resources</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive resources to get the most out of our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Documentation', description: 'Complete technical documentation', href: '/docs', icon: '📚' },
                { title: 'Tutorials', description: 'Step-by-step learning guides', href: '/tutorials', icon: '🎓' },
                { title: 'API Reference', description: 'Detailed API documentation', href: '/api-docs', icon: '🔧' },
                { title: 'Blog', description: 'Latest news and insights', href: '/blog', icon: '📝' },
                { title: 'Case Studies', description: 'Real-world success stories', href: '/case-studies', icon: '📊' },
                { title: 'Community', description: 'Connect with other users', href: '/community', icon: '👥' }
              ].map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="group bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl mb-4">{resource.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {resource.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Still Need Help?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our expert support team is standing by to help you succeed. Contact us today for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Contact Support
              </a>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Call Now: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;