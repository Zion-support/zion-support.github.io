import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Support() {
import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Link } from 'react-router-dom;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react;

interface FAQ {}
  question: string;

  answer: string;

  category: string});)
}

import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search } from 'lucide-react;

import Navigation from ../components
import Footer from ../components

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(');

  const [selectedCategory, setSelectedCategory] = useState('all);

import React from 'react';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Page</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('').
  const [selectedCategory, setSelectedCategory] = useState('all').

  const categories = [
    { id: 'all', name: 'All Topics' },'
    { id: 'general', name: 'General' },'
    { id: 'technical', name: 'Technical' },'
    { id: 'billing', name: 'Billing' },'
    { id: 'implementation', name: 'Implementation' }'
  ];

  const categories = [.
    { id: 'all', name: 'All Topics },'
    { id: 'general', name: 'General },'
    { id: 'technical', name: 'Technical },'
    { id: 'billing', name: 'Billing },'
    { id: 'implementation', name: 'Implementation }'

  ];

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI solutions?,'
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.,'
      category: 'general;'
    },
      category: 'general});)},'
    {
      question: 'What support do you provide after implementation?,
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly. Our support includes monitoring, troubleshooting, and performance optimization.,
      category: 'support
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.',
      question: 'How long does implementation typically take?,
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months. We provide detailed timelines during the planning phase.,
      category: 'implementation});)
},
      question: 'What security measures do you have in place?,
      answer: 'We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.,
      category: 'security});)
},
    {
      question: 'Can you integrate with our existing systems?,
      answer: 'Absolutely. We specialize in seamless integration with existing systems and can work with most platforms, databases, and APIs to ensure smooth data flow and functionality.,
      category: 'integration});)
},
    {
      question: 'What happens if we need to scale up?,
      answer: 'Our solutions are designed to scale with your business. We can easily add more capacity, features, or users as your needs grow, with minimal disruption to your operations.,
      category: 'scaling});)
},
    {
      question: 'Do you provide custom development?,
      answer: 'Yes, we offer custom development services to create tailored solutions that meet your specific business requirements and integrate perfectly with your existing workflows.,
      category: 'development
    }  ];

  const supportChannels = [;;

    {
      name: 'Phone Support,
      description: 'Speak directly with our technical experts,
      category: 'implementation'});;)
},
    {}
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions. Training includes hands-on workshops, documentation, and ongoing support.',
      category: 'training'});;)
},
    {}
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.',
      category: 'security'});;)
},
    {}
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely. We specialize in seamless integration with existing systems and can work with most platforms, databases, and APIs to ensure smooth data flow and functionality.',
      category: 'integration'});;)
},
    {}
      question: 'What happens if we need to scale up?',
      answer: 'Our solutions are designed to scale with your business. We can easily add more capacity, features, or users as your needs grow, with minimal disruption to your operations.',
      category: 'scaling'});;)
},
    {}
      question: 'Do you provide custom development?',
      answer: 'Yes, we offer custom development services to create tailored solutions that meet your specific business requirements and integrate perfectly with your existing workflows.',
      category: 'development'
      contact: '+1 (555) 123-4567,
      availability: '24/7 Available,
      color: 'text-blue-400
      color: 'text-blue-400});)},
    {
      name: 'Email Support,
      description: 'Get detailed responses to your questions,
      color: 'text-green-400});)},
    {
      name: 'Live Chat,
      description: 'Instant help when you need it most,
    {
      name: 'Emergency Support,
      description: 'Critical issues resolved quickly,
  const filteredFAQs = faqs.filter(faq => {;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());;

  const toggleFAQ = (index: number) => {;
    return matchesSearch && matchesCategory});;)
});;

  const toggleFAQ = (index: number) => {}
    setExpandedFAQ(expandedFAQ === index ? null : index);
      category: 'general'
    },
    {
      id: 2,
      question: 'What is the typical implementation timeline?',
      answer: 'Implementation timelines vary based on the complexity of your project. Simple AI solutions can be deployed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed project timelines during consultation.',
      category: 'implementation'
    },
      category: 'support});)},'
    {
      question: 'How long does implementation typically take?,'
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months. We provide detailed timelines during the planning phase.,'
      category: 'implementation});)'
},
    {
      question: 'Do you offer training for our team?,'
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions. Training includes hands-on workshops, documentation, and ongoing support.,'
      category: 'training});)'
},
    {
      question: 'What security measures do you have in place?,'
      answer: 'We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.,'
      category: 'security});)'
},
    {
      question: 'Can you integrate with our existing systems?,'
      answer: 'Absolutely. We specialize in seamless integration with existing systems and can work with most platforms, databases, and APIs to ensure smooth data flow and functionality.,'
      category: 'integration});)'
},
    {
      question: 'What happens if we need to scale up?,'
      answer: 'Our solutions are designed to scale with your business. We can easily add more capacity, features, or users as your needs grow, with minimal disruption to your operations.,'
      category: 'scaling});)'
},
    {
      question: 'Do you provide custom development?,'
      answer: 'Yes, we offer custom development services to create tailored solutions that meet your specific business requirements and integrate perfectly with your existing workflows.,'
      category: 'development;'
    }  ];

  const supportChannels = [;.

    {
      name: 'Phone Support,'
      description: 'Speak directly with our technical experts,'
    }
  ];

  const supportChannels = [
    {}
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      contact: '+1 (555) 123-4567,'
      availability: '24/7 Available,'
      color: 'text-blue-400;'
    },
      color: 'text-blue-400});)},'
    {
      name: 'Email Support,'
      description: 'Get detailed responses to your questions,'
      icon: Mail,
      contact: 'support@ziontech.com,'
      availability: 'Response within 2 hours,'
      color: 'text-green-400;'
    },
      color: 'text-green-400});)},'
    {
      name: 'Live Chat,'
      description: 'Instant help when you need it most,'
      icon: MessageCircle,
      contact: 'Available on website,'
      availability: 'Mon-Fri 9AM-6PM EST,'
      color: 'text-purple-400});)'
},
    {
      name: 'Emergency Support,'
      description: 'Critical issues resolved quickly,'
      icon: Zap,
      contact: '+1 (555) 911-TECH,'
      availability: '24/7 Critical Support,'
      color: 'text-red-400});)'
}

      question: 'Do you offer training for my team?',
      answer: 'Absolutely! We provide comprehensive training programs to ensure your team can effectively use and maintain the solutions.',
      category: 'Training'
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      hours: '24/7 Available'
  ];

  const filteredFAQs = faqs.filter(faq => {.
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());.

  const toggleFAQ = (index: number) => {.
    setExpandedFAQ(expandedFAQ === index ? null : index).

  };

const PagePage: React.FC = () => {}
      description: 'Get instant help through our chat system',
      icon: MessageCircle,
      contact: 'Available on website',
    }
  ]

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-400">Support</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get help and support for our AI and IT solutions.
          </p>
        </div>
      </div>
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      hours: 'Response within 4 hours'
      hours: '24/7'
      description: 'Chat with our support team',
      contact: 'Available on website',
      hours: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Customer support by Zion Tech Group" />
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT solutions. Contact our expert team via phone, email, or live chat. />
        <meta name="keywords" content="technical support, IT support, AI support, customer service, help desk />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Center
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            How Can We
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Help You?
            </span>

  const Component = () => {
  
    return (
    <div>
  )
    </div>
  )
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Technical Support & Help</title>
        <meta name="description" content="Get technical support and help for your AI and IT solutions. 24/7 support, documentation, and expert assistance from Zion Tech Group." />"
        <meta name="keywords" content="technical support, AI support, IT help, customer service, documentation, troubleshooting" />
      </Helmet>
      
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get help and support for all your needs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation</h3>
              <p className="text-gray-600">
                Comprehensive documentation and guides for all our services.
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Support</h3>
              <p className="text-gray-600">
                Reach out to our support team for personalized assistance.
              </p>
          </div>

}
  );  ));)
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Contact Support
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Call
              </button>
    </div>

export default SupportPage;
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button.
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id</div>
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          <div className="max-w-7xl mx-auto">"
            <div className="text-center mb-12">"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch.
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Choose your preferred way to contact our support team.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">"
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Support</h3>"
              <p className="text-gray-600">
                Reach out to our support team for personalized assistance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">"
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>"
              <p className="text-gray-600">
                Join our community forum for discussions and tips.
              </p>
            </div>
          </div>
import React from 'react'.

const SupportPage: React.FC = () => {
  const Component = () => {
  
    return (
    <div className="min-h-screen bg-gray-900 text-white py-20">"
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">"
        <h1 className="text-4xl font-bold mb-8">Support</h1>"
        <div className="prose prose-invert max-w-none">"
          <p className="text-lg text-gray-300 mb-6">
            Get help and support for our services.
          </p>
        </div>
      </div>
    </div>
  ).
  ).
  ).
}
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="cyber-card hologram-card p-6">"
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>"
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <BookOpen className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                <p className="text-gray-300 mb-4">Comprehensive guides and API documentation</p>
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  View Docs <ArrowRight className="inline h-4 w-4 ml-1" />
                </button>
              </div>
              
              <div className="text-center">
                <Video className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
                <p className="text-gray-300 mb-4">Step-by-step video guides and tutorials</p>
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  Watch Videos <ArrowRight className="inline h-4 w-4 ml-1" />
                </button>
              </div>
              
              <div className="text-center">
                <FileText className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Knowledge Base</h3>
                <p className="text-gray-300 mb-4">Searchable database of articles and solutions</p>
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  Browse Articles <ArrowRight className="inline h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Support Hours */}
        <section className="py-16 px-4">"
          <div className="max-w-4xl mx-auto">"
            <div className="cyber-card hologram-card p-8">"
              <div className="text-center mb-8">"
                <h2 className="text-3xl font-bold text-white mb-4">Support Hours</h2>"
                <p className="text-xl text-gray-300">We're here when you need us</p>'
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">"
                <div className="text-center">"
                  <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />"
                  <h3 className="text-lg font-semibold text-white mb-2">Emergency Support</h3>"
                  <p className="text-gray-300 mb-2">24/7 for critical issues</p>"
                  <p className="text-gray-300">Emergency support included</p>
                </div>
                <div className="text-center">"
                  <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />"
                  <h3 className="text-lg font-semibold text-white mb-2">General Inquiries</h3>"
                  <p className="text-gray-300 mb-2">Monday - Friday: 9:00 AM - 6:00 PM EST</p>"
                  <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">"
          <div className="max-w-7xl mx-auto">"
            <div className="cyber-card hologram-card p-12 text-center">"
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
                Can't find what you're looking for? Our expert support team is ready to help you with any questions or issues.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button text-center"
                >
                  Call (302) 464-0950
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </a>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                >
                  Email Support.
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  ).
};
export default SupportPage.
  ).
}
export default SupportPage.
export default SupportPage.
