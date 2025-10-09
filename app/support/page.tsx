import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, MessageCircle, Phone, Mail, Clock, BookOpen, FileText, Users } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      title: '24/7 Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-50',
      action: 'Start Chat',
      href: '/contact'
    },
    {
      title: 'Phone Support',
      description: 'Call us directly for urgent issues',
      icon: Phone,
      color: 'text-blue-400',
      bgColor: 'bg-blue-50',
      action: 'Call Now',
      href: 'tel:+13024640950'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      color: 'text-purple-400',
      bgColor: 'bg-purple-50',
      action: 'Send Email',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      title: 'Documentation',
      description: 'Browse our comprehensive guides',
      icon: BookOpen,
      color: 'text-orange-400',
      bgColor: 'bg-orange-50',
      action: 'View Docs',
      href: '/docs'
    }
  ];

  const faqItems = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation, and we\'ll help you identify the best AI solutions for your business needs.'
    },
    {
      question: 'What is your typical response time for support?',
      answer: 'We provide 24/7 support with an average response time of under 2 hours for critical issues and within 24 hours for general inquiries.'
    },
    {
      question: 'Do you offer custom AI model development?',
      answer: 'Yes! We specialize in custom AI model development tailored to your specific business requirements and data.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including SOC 2 compliance, end-to-end encryption, and regular security audits.'
    },
    {
      question: 'Can I integrate your services with my existing systems?',
      answer: 'Absolutely! Our APIs and integration tools are designed to work seamlessly with your current infrastructure.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Support Center
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're here to help you succeed with our AI and IT solutions. Get support 24/7 through multiple channels.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportOptions.map((option, index) => (
            <div key={index} className="cyber-card hologram-card p-6 text-center">
              <div className={`w-16 h-16 ${option.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <option.icon className={`w-8 h-8 ${option.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
              <p className="text-gray-300 mb-6">{option.description}</p>
              <Link
                to={option.href}
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                {option.action}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="cyber-card hologram-card p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <HelpCircle className="w-8 h-8 text-cyan-400 mr-3" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                <p className="text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cyber-card hologram-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Clock className="w-6 h-6 text-cyan-400 mr-3" />
              Business Hours
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM EST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM EST</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Emergency Support Only</span>
              </div>
              <div className="flex justify-between font-semibold text-cyan-400">
                <span>24/7 Support:</span>
                <span>Available for Enterprise</span>
              </div>
            </div>
          </div>

          <div className="cyber-card hologram-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Users className="w-6 h-6 text-cyan-400 mr-3" />
              Contact Information
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <FileText className="w-5 h-5 text-cyan-400 mr-3" />
                <span>Enterprise Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
