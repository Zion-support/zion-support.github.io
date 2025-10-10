'use client;

import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Link } from 'react-router-dom;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react;

interface FAQ {
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

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [;
    { id: 'all', name: 'All Topics },
    { id: 'general', name: 'General },
    { id: 'technical', name: 'Technical },
    { id: 'billing', name: 'Billing },
    { id: 'implementation', name: 'Implementation }

  ];

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI solutions?,
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.,
      category: 'general
    },
      category: 'general});)},
    {
      question: 'What support do you provide after implementation?,
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly. Our support includes monitoring, troubleshooting, and performance optimization.,
      category: 'support
    },
      category: 'support});)},
    {
      question: 'How long does implementation typically take?,
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months. We provide detailed timelines during the planning phase.,
      category: 'implementation});)
},
    {
      question: 'Do you offer training for our team?,
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions. Training includes hands-on workshops, documentation, and ongoing support.,
      category: 'training});)
},
    {
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
      icon: Phone,
      contact: '+1 (555) 123-4567,
      availability: '24/7 Available,
      color: 'text-blue-400
    },
      color: 'text-blue-400});)},
    {
      name: 'Email Support,
      description: 'Get detailed responses to your questions,
      icon: Mail,
      contact: 'support@ziontech.com,
      availability: 'Response within 2 hours,
      color: 'text-green-400
    },
      color: 'text-green-400});)},
    {
      name: 'Live Chat,
      description: 'Instant help when you need it most,
      icon: MessageCircle,
      contact: 'Available on website,
      availability: 'Mon-Fri 9AM-6PM EST,
      color: 'text-purple-400});)
},
    {
      name: 'Emergency Support,
      description: 'Critical issues resolved quickly,
      icon: Zap,
      contact: '+1 (555) 911-TECH,
      availability: '24/7 Critical Support,
      color: 'text-red-400});)
}

  ];

  const filteredFAQs = faqs.filter(faq => {;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());;

  const toggleFAQ = (index: number) => {;
    setExpandedFAQ(expandedFAQ === index ? null : index);

  };

const PagePage: React.FC = () => {
  return (

    <>
      <Helmet>
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT solutions. Contact our expert team via phone, email, or live chat. />
        <meta name="keywords" content="technical support, IT support, AI support, customer service, help desk />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */}

        <section className="py-20 px-4>
          <div className="max-w-7xl mx-auto text-center>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent>
                Page
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto>
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center>
              <Link
                to="/contact
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300
              >
                Get Started
                <ArrowRight className="w-5 h-5 />
              </Link>
              <Link
                to="/services
                className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300
              >
                Learn More
                <ArrowRight className="w-5 h-5 />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <h2 className="text-3xl font-bold text-white mb-12 text-center>Why Choose Our Page Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center>
                  <CheckCircle className="w-8 h-8 text-white />
                </div>
                <h3 className="text-xl font-bold text-white mb-3>Expert Solutions</h3>
                <p className="text-gray-300>Professional Page services with proven results</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center>
                  <CheckCircle className="w-8 h-8 text-white />
                </div>
                <h3 className="text-xl font-bold text-white mb-3>24/7 Support</h3>
                <p className="text-gray-300>Round-the-clock assistance for your business needs</p>
              <h2 className="text-3xl font-bold text-white mb-6>Get Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Choose the support channel that works best for you. All channels are monitored by our expert team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>
              {supportChannels.map((channel, index) => (

                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 text-center>
                  <div className={`w-16 h-16 ${channel.color} bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center}>
                    <channel.icon className="w-8 h-8 />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3>{channel.name}</h3>
                  <p className="text-gray-300 mb-4>{channel.description}</p>
                  <p className={`${channel.color} font-medium mb-2}>{channel.contact}</p>
                  <p className="text-sm text-gray-400>{channel.availability}</p>
                </div>
              ))}            <
          <
        <

        {/* FAQ Section *
        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl font-bold text-white mb-6>Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 mb-8>Find answers to common questions</p>
              {/* Category Filter */}

              <div></div>
                {categories.map((category) => (

                  <button></button> setSelectedCategory(category);

                    className={px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? bg-gradient-to-r from-purple-500 to-blue-500 text-white
                        : 'bg-white/10 text-gray-300 hover:bg-white/20});)
}}

                  >
                    {category === 'all' ? All Questions : category.charAt(0).toUpperCase() + category.slice(1);

                  </button>
                ));

              </div>
            </div>

            <div className="space-y-4>
              {filteredFAQs.map((faq, index) => (

                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden>
                  <button
                    onClick={() => toggleFAQ(index)}

                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors
                  >
                    <h3 className="text-lg font-semibold text-white pr-4>{faq.question}</h3>
                    <div className={`transform transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}}>
                      <HelpCircle className="w-6 h-6 text-purple-400 />
                    </div>
                  </button>
                  {expandedFAQ === index && (

                    <div className="px-6 pb-6>
                      <p className="text-gray-300 leading-relaxed>{faq.answer}</p>
                    </div>
                  )}

                </div>
                <h3 className="text-xl font-bold text-white mb-3>Custom Solutions</h3>
                <p className="text-gray-300>Tailored Page solutions for your specific requirements</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto text-center>
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12>
              <h2 className="text-3xl font-bold text-white mb-4>
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8>
                Contact our experts to discuss your Page needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <a
                  href="tel:+13024640950
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300
                >
                  <Phone className="w-5 h-5 />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300
                >
                  <Mail className="w-5 h-5 />
                  Email Support
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );

  );  ));)
};

export default PagePage;
