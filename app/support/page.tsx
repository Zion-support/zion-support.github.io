'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
=======
<<<<<<< HEAD
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string});;)
}
=======
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search } from 'lucide-react';
import Navigation from '../components
import Footer from '../components
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number></number>(null);

  const faqs: FAQ[] = [
    {
<<<<<<< HEAD
      question: 'How do I get started with your AI solutions?',
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.',
<<<<<<< HEAD
=======
      questio,
    n: 'How do I get started with your AI solutions?',
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.',
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3
      category: 'general'
    },
=======
      category: 'general'});;)
},
>>>>>>> main
    {
      question: 'What support do you provide after implementation?',
<<<<<<< HEAD
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly. Our support includes monitoring, troubleshooting, and performance optimization.',
<<<<<<< HEAD
      category: 'support'
=======
      answer: 'We provide 24
      categor,
    y: 'support'
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3
    },
=======
      category: 'support'});;)
},
>>>>>>> main
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months. We provide detailed timelines during the planning phase.',
      category: 'implementation'});;)
},
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions. Training includes hands-on workshops, documentation, and ongoing support.',
      category: 'training'});;)
},
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.',
      category: 'security'});;)
},
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely. We specialize in seamless integration with existing systems and can work with most platforms, databases, and APIs to ensure smooth data flow and functionality.',
      category: 'integration'});;)
},
    {
      question: 'What happens if we need to scale up?',
      answer: 'Our solutions are designed to scale with your business. We can easily add more capacity, features, or users as your needs grow, with minimal disruption to your operations.',
      category: 'scaling'});;)
},
    {
      question: 'Do you provide custom development?',
      answer: 'Yes, we offer custom development services to create tailored solutions that meet your specific business requirements and integrate perfectly with your existing workflows.',
      category: 'development'});;)
}
  ];

  const supportChannels = [
    {
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
<<<<<<< HEAD
      contact: '+1 (555) 123-4567',
      availability: '24/7 Available',
<<<<<<< HEAD
      color: 'text-blue-400'
=======
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1-302-464-0950',
      availability: '24
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3
    },
=======
      color: 'text-blue-400'});;)
},
>>>>>>> main
    {
      name: 'Email Support',
      description: 'Get detailed responses to your questions',
<<<<<<< HEAD
      icon: Mail,
      contact: 'support@ziontech.com',
      availability: 'Response within 2 hours',
<<<<<<< HEAD
      color: 'text-green-400'
=======
      contact: 'support@ziontechgroup.com',
      hours: '24
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3
    },
=======
      color: 'text-green-400'});;)
},
>>>>>>> main
    {
      name: 'Live Chat',
      description: 'Instant help when you need it most',
      icon: MessageCircle,
      contact: 'Available on website',
<<<<<<< HEAD
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'text-purple-400'});;)
},
    {
      name: 'Emergency Support',
      description: 'Critical issues resolved quickly',
      icon: Zap,
      contact: '+1 (555) 911-TECH',
      availability: '24/7 Critical Support',
      color: 'text-red-400'});;)
}
  ];

  const categories = ['all', 'general', 'support', 'implementation', 'training', 'security', 'integration', 'scaling', 'development'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory});;)
});;

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index););)
};
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b

const PagePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Page
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Page Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
<<<<<<< HEAD
                <h3 className="text-xl font-bold text-white mb-3">Expert Solutions</h3>
                <p className="text-gray-300">Professional Page services with proven results</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock assistance for your business needs</p>
=======
<<<<<<< HEAD
=======
      availability: '24
    }
  ];

  return (<div>
        <title>Support - Zion Tech Group | Technical Support & Help<
        <meta name="description" content="Get technical support and help for your AI and IT solutions. 24/7 support, documentation, and expert assistance from Zion Tech Group." 
        <meta name="keywords" content="technical support, AI support, IT help, customer service, documentation, troubleshooting" 
      <

        {/* Hero Section *
        <section className="relative py-20 px-4 overflow-hidden">)
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" 
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} 
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">

              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">

              <
            <
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get expert help and support for your AI and IT solutions. 
              Our team is here to ensure your success.
            <
          <
        <

        {/* Search Section *
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">How can we help you?<
              <p className="text-xl text-gray-300">Search our knowledge base or contact our support team<
            <
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" 
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value = { searchQuery };
                  onChange = { (e) => setSearchQuery(e.target.value) };
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent"
                
              <
            <
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (<button
                  key = { category.id };)
                  onClick = { () => setSelectedCategory(category.id) };
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white
                  }`}
                >
                  {category.name}
                <
              ))}
            <
          <
        <

          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
                Get in Touch
              <
              <p className="text-gray-300 max-w-3xl mx-auto">
                Choose your preferred way to contact our support team
              <
            <
            <div className="grid grid-cols-1 m,
    d:grid-cols-3 gap-8">
              {supportChannels.map((channel), index) => (<div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-white" 
                  <
                  <h3 className="text-xl font-semibold text-white mb-2">{channel.title}<
                  <p className="text-gray-300 mb-4">{channel.description}<
                  <p className="text-cyan-400 font-medium">{channel.contact}<
                  <p className="text-sm text-gray-400 mt-2">{channel.availability}<
                <)
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3
              ))}
            <
          <
        <

        {/* FAQ Section *
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
<<<<<<< HEAD
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
=======
              ));
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section></section>
          <div></div>
            <h></h>Support Resources</h2>
            <div></div>
              {resources.map((resource, index) => (
                <div></div>
                  <div></div>
                    <resource.icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <h></h>{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <a></a>
                    Access Resource →
                  </a>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Frequently Asked Questions</h2>
>>>>>>> main
              <p className="text-xl text-gray-300 mb-8">Find answers to common questions</p>

              {/* Category Filter */}
              <div></div>
                {categories.map((category) => (
                  <button></button> setSelectedCategory(category);
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'});;)
}`}
                  >
                    {category === 'all' ? 'All Questions' : category.charAt(0).toUpperCase() + category.slice(1);
                  </button>
                ));
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
                <p className="text-gray-300">Tailored Page solutions for your specific requirements</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your Page needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
  );
=======
<<<<<<< HEAD
=======
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions<
              <p className="text-xl text-gray-300">Find answers to common questions<
            <
            <div className="space-y-6">
              {faqs.map((faq, index) => (<div key={index} className="bg-white/5 backdrop-blur-sm border border-white
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}<
                  <p className="text-gray-300">{faq.answer}<
                <)
              ))}
            <
          <
        <

        {/* Support Hours *
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Support Hours<
                <p className="text-xl text-gray-300">We're here when you need us<
              <
              <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Emergency Support<
                  <p className="text-gray-300">24/7 for critical issues<
                  <p className="text-gray-300">Emergency support included<
                <
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">General Inquiries<
                  <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM<
                  <p className="text-gray-300">Saturday: 10:00 AM - ,
    4:00 PM<
                <
              <
            <
          <
        <
      <
      
      <Footer 
    <
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3
  );
=======
  ));)
>>>>>>> main
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
};

export default PagePage;
