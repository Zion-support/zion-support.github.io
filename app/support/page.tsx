import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { HelpCircle, MessageCircle, Phone, Mail, Clock, Search, Book, FileText, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const SupportPage: React.FC = () => {
  const faqItems = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we assess your needs and create a customized AI solution plan. We provide comprehensive onboarding and training to ensure smooth implementation.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. Simple AI implementations can take 2-4 weeks, while comprehensive enterprise solutions may require 3-6 months. We provide detailed timelines during the consultation phase.'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes! We provide 24/7 support for all our enterprise clients. Our support team is available around the clock to address any issues or questions you may have.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We maintain SOC 2 Type II compliance and follow industry best practices for data security. All data is encrypted in transit and at rest, and we conduct regular security audits and penetration testing.'
    },
    {
      question: 'Can I integrate your solutions with existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with existing enterprise systems. We provide APIs, SDKs, and custom integration services to ensure smooth connectivity.'
    },
    {
      question: 'What happens if I need to scale my solution?',
      answer: 'Our solutions are built to scale with your business. We offer flexible scaling options and can adjust resources, features, and capacity as your needs grow.'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: '24/7 for Enterprise',
      color: 'text-green-400'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours',
      color: 'text-blue-400'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant support through our website',
      contact: 'Available on website',
      availability: 'Business hours',
      color: 'text-purple-400'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personal support manager for enterprise clients',
      contact: 'Contact sales',
      availability: '24/7 for Enterprise',
      color: 'text-cyan-400'
    }
  ];

  const resources = [
    {
      icon: Book,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/docs'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable articles and troubleshooting guides',
      link: '/knowledge-base'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and share experiences',
      link: '/community'
    },
    {
      icon: Zap,
      title: 'Status Page',
      description: 'Real-time system status and incident updates',
      link: '/status'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're here to help you succeed. Get the support you need with our comprehensive 
            help resources and expert technical assistance.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and solutions..."
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Get Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <channel.icon className={`w-12 h-12 mx-auto mb-4 ${channel.color}`} />
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2">
                  <p className="text-cyan-400 font-medium">{channel.contact}</p>
                  <p className="text-sm text-gray-400">{channel.availability}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <resource.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300">{resource.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-start">
                  <HelpCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                  {item.question}
                </h3>
                <p className="text-gray-300 ml-8">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Support */}
        <section className="text-center">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Still Need Help?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our support team is ready to assist you. Contact us directly for personalized 
              assistance with your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </a>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SupportPage;
