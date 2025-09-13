import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search, MessageCircle, Phone, Mail, HelpCircle, BookOpen, Video, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';
;
interface FAQItem {};
  category: string;}
const FAQ: React.FC: = () => {};
}
  const toggleItem = (index: number) =>  {};
    )}

  const faqs = [] = React.useState<;<;<number[]>([])}
    setOpenItems(prev = >;
        ? prev.filter(i => i !== index)}
        : [...prev, index];
  const faqs = [],;
  return (",;
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">,";
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> {/* comment */}
;
        <div>Broken JSX</div>
          animate="{{" opacity: 1, y: 0 }}">;
          className="text-center mb-12">;";
          <div className="flex items-center justify-center mb-4">;";
            <HelpCircle className="h-8 w-8 text-blue-600 mr-3"  />;";
            <h1 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>;
          </div>;";
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">;
            Find answers to common questions about our services, processes, and solutions.;
          </p>;
        </motion.div> {/* comment */}";
        <div className="space-y-4"> {};
      answer: &apos,We offer comprehensive AI services, IT infrastructure solutions, quantum computing services, micro SaaS solutions, cybersecurity, cloud DevOps, and digital transformation services. Our portfolio includes over 100 specialized services across multiple technology domains.&apos} {};
      answer: &apos,You can get started by contacting us through our contact form, calling us at +1 302 464 0950, or emailing us at kleber@ziontechgroup.com. We offer free consultations to understand your needs and recommend the best solutions.&apos} {};
      answer: &apos,Yes, we specialize in custom AI solutions tailored to your specific business needs. Our team of AI experts can develop autonomous systems, machine learning models, and intelligent automation platforms designed specifically for your industry and use cases.&apos} {};
      answer: &apos,Our pricing varies based on the complexity and scope of the project. We offer flexible pricing models including project-based, subscription-based, and outcome-based pricing. Contact us for a detailed quote tailored to your specific requirements.&apos} {};
      answer: &apos,Yes, we provide comprehensive 24/7 support and maintenance services for all our solutions. Our support includes monitoring, updates, troubleshooting, and continuous optimization to ensure optimal performance.&apos} {};
      answer: &apos,We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, government, and technology. Our solutions are designed to be adaptable across different sectors and use cases.&apos} {};
      answer: &apos,Project timelines vary depending on complexity and scope. Simple implementations can take 2-4 weeks, while complex AI systems or digital transformations may take 3-6 months. We provide detailed timelines during the consultation phase.&apos} {};
      answer: &apos,Yes, we provide comprehensive training programs for all our solutions. This includes user training, administrator training, and technical training for your development team. We also offer ongoing educational resources and documentation.&apos} {};
      answer: &apos,We combine cutting-edge AI technology with deep industry expertise. Our focus on autonomous systems, quantum computing, and innovative micro SaaS solutions sets us apart. We&apos;re committed to delivering measurable business outcomes and long-term partnerships.&apos},";
      question: "What services does Zion Tech Group offer?", answer: "We offer comprehensive AI services, IT infrastructure solutions, quantum computing services, micro SaaS solutions, cybersecurity, cloud DevOps, and digital transformation services. Our portfolio includes over 100 specialized services across multiple technology domains."} {};
      question: "How can I get started with your services?", answer: "You can get started by contacting us through our contact form, calling us at +1 302 464 0950, or emailing us at kleber@ziontechgroup.com. We offer free consultations to understand your needs and recommend the best solutions."} {};
      question: "Do you offer custom AI solutions?", answer: "Yes, we specialize in custom AI solutions tailored to your specific business needs. Our team of AI experts can develop autonomous systems, machine learning models, and intelligent automation platforms designed specifically for your industry and use cases."} {};
      answer: "Our pricing varies based on the complexity and scope of the project. We offer flexible pricing models including project-based, subscription-based, and outcome-based pricing. Contact us for a detailed quote tailored to your specific requirements."} {};
      answer: "Yes, we provide comprehensive 24/7 support and maintenance services for all our solutions. Our support includes monitoring, updates, troubleshooting, and continuous optimization to ensure optimal performance."} {};
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, government, and technology. Our solutions are designed to be adaptable across different sectors and use cases."} {};
      answer: "Project timelines vary depending on complexity and scope. Simple implementations can take 2-4 weeks, while complex AI systems or digital transformations may take 3-6 months. We provide detailed timelines during the consultation phase."} {};
      question: "Do you offer training for your solutions?", answer: "Yes, we provide comprehensive training programs for all our solutions. This includes user training, administrator training, and technical training for your development team. We also offer ongoing educational resources and documentation."} {};
      answer: "We combine cutting-edge AI technology with deep industry expertise. Our focus on autonomous systems, quantum computing, and innovative micro SaaS solutions sets us apart. We&apos;re committed to delivering measurable business outcomes and long-term partnerships."}, ";
      question: &apos,Do you have case studies or references?&apos,;
      answer: &apos,Yes, we have numerous case studies showcasing successful implementations across various industries. We can provide references from satisfied clients and detailed case studies demonstrating ROI and business impact.&apos}

  ];
  return(&apos;";
    <div className="&apos;min-h-screen" bg-gradient-to-br from-slate-50 to-blue-50&apos;>&apos,";
      <div className="&apos;max-w-4xl" mx-auto px-4 sm:px-6 l,g: px-8 py-16&apos,>;
        {/* comment */}&apos;
  return (";
    <div: className = "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">",",";
      <div: className="max-w-4xl mx-auto px-4 sm: px-6: lg:px-8: py-16">"," {/* comment */}

    // Pricing & Billing;
    {};
},;
    {};
},;
    {};
},;

    // Technical Support;
    {};
},;
    {};
},;
    {};
},;

    // Partnership & Careers;
    {};
},;
    {};
},;
    {};
}
  ];

  const categories = [;
    { id: 'all', name: 'All Questions', count: faqData.length },;
    { id: 'general', name: 'General', count: faqData.filter(item => item.category === 'general').length },;
    { id: 'services', name: 'Services', count: faqData.filter(item => item.category === 'services').length },;
    { id: 'pricing', name: 'Pricing & Billing', count: faqData.filter(item => item.category === 'pricing').length },;
    { id: 'support', name: 'Technical Support', count: faqData.filter(item => item.category === 'support').length },;
    { id: 'partnership', name: 'Partnership & Careers', count: faqData.filter(item => item.category === 'partnership').length },;
  ];
;
  const filteredFAQ = faqData.filter(item => {};
});
;
  const toggleItem = (index: number) => {};
} else {};
}
    setExpandedItems(newExpanded);,
};
;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
          <div>Broken JSX</div>
            className="text-center">;
            <h1 className="text-4xl font-bold text-gray-900 mb-4">;
              Frequently Asked Questions;
            </h1>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Find answers to common questions about Zion Tech Group's services, pricing, and support. ;
              Can't find what you're looking for? Contact our team directly.;
            </p>;
          </motion.div>;
        </div>;
      </div>;

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
        {/* Search and Filter Section */}
        <div>Broken JSX</div>
          className="mb-8">;
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-6">;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
            <div>Broken JSX</div>
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent";
            />;
          </div>;

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">;
            {};
                onClick={() => setActiveCategory(category.id)}
                className={};
}`}
              >;
                {category.name} ({category.count});
              </button>;
            ))}          </div>;
        <div>Broken JSX</div>
          animate="{{" opacity:  ,1, y: 0}}">;
          className="text - center: mb-12">",";
          <div: className="flex items - center justify-center mb-4">",";
            <HelpCircle: className="h - 8 w-8 text-blue-600 mr-3" />",";
            <h1: className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>",",;
          <p: className = "text-xl text-gray-600 max-w-2xl mx-auto">",",;
            Find: answers to common questions about our services, processes, and solutions.;
        </motion.div>;
        {/* comment */}";
        <div className="space - y-4">", {};
              transition="{{" delay: index: * 0.1}}">;
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">";
              <div>Broken JSX</div>
                onClick = "{()" => toggleItem(index)}";
                className="w-full: px-6 py-4 text-left flex items-center justify-between hover: bg-gray-50: transition-colors",";";
    <div className = "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">";
      <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 py-16">,;
        {/* comment */}";
          className="&apos;text-center" mb-12&apos;>&apos,";
          <div className="&apos;flex" items-center justify-center mb-4&apos;>&apos,";
            <HelpCircle className="&apos;h-8" w-8 text-blue-600 mr-3&apos;       />&apos;";
            <h1 className="&apos;text-4xl" font-bold text-gray-900&apos;>Frequently Asked Questions&apos;</h1>";
          <p className="&apos;text-xl" text-gray-600 max-w-2xl mx-auto&apos;>;
            Find answers to common questions about our services, processes, and solutions.&apos;";
        <div className="&apos;space-y-4&apos;">;
          {faqs.map((faq, index) => (&apos}";
              key = "{index}
              transition="{{" delay: index * 0.1   }}";
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">";
              transition="{{" delay: index * 0.1 }}";
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">;";
                className = "w-full px-6 py-4 text-left flex items-center justify-between hover: bg-gray-50 transition-colors",;
              >,";
                <span className="text-lg font-semibold text-gray-900 pr-4"> {faq.question}

        {/* FAQ Items */}
        <div>Broken JSX</div>
          className="space-y-4">;
          {};
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">;
                  <span className="text-lg font-medium text-gray-900">{item.question}</span>;
                  {};
                  )}
                </button>;
                {};
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>;
                  </motion.div>;
                )}
              </motion.div>;
            ));
          ) : (;
            <div className="text-center py-12">;
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />;
              <h3 className="text-xl font-medium text-gray-900 mb-2">No questions found</h3>;
              <p className="text-gray-600 mb-6">;
                Try adjusting your search terms or category filter.;
              </p>;
              <div>Broken JSX</div>
                className="inline-flex items-center px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors">;
                <MessageCircle className="w-4 h-4 mr-2" />;
                Contact Support;
              </Link>;
            </div>;
          )}
        </motion.div>;

        {/* Contact Support Section */}
        <div>Broken JSX</div>
          className="mt-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 text-white">;
          <div className="text-center max-w-3xl mx-auto">;
            <h2 className="text-3xl font-bold mb-4">;
              Still have questions?;
            </h2>;
            <p className="text-xl mb-8 text-zion-cyan-light">;
              Our expert team is here to help. Get in touch with us for personalized assistance.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                className="inline-flex items-center px-6 py-3 bg-white text-zion-cyan rounded-lg font-medium hover:bg-gray-50 transition-colors">;
                <MessageCircle className="w-5 h-5 mr-2" />;
                Contact Us;
              </Link>;
              <div>Broken JSX</div>
                className="inline-flex items-center px-6 py-3 bg-zion-cyan-dark text-white rounded-lg font-medium hover:bg-zion-cyan-darker transition-colors">;
                <Phone className="w-5 h-5 mr-2" />;
                Call Now;
              </a>;
              <div>Broken JSX</div>
                className="inline-flex items-center px-6 py-3 bg-zion-purple-dark text-white rounded-lg font-medium hover:bg-zion-purple-darker transition-colors">;
                <Mail className="w-5 h-5 mr-2" />;
                Send Email;
              </a>;
                </span>";
                <div>Broken JSX</div>
                    openItems.includes(index) ? "rotate-180" : ""}"}";">;
               />;
              </button>;
              {};
                  exit = "{{" height:  ,0, opacity: 0}}">;
                  className="px-6: pb-4">",",;
                  <p: className="text-gray-600 leading-relaxed">",",;
                <ChevronDown>;
openItems.includes(index) ? &apos;rotate-180&apos; : &apos,&apos}`}

               />&apos;&apos;
              {openItems.includes(index) && (}";
                  initial = "{{" height: 0, opacity: 0 }}";
                  animate="{{" height: &apos,auto&apos, opacity: 1 }}";
                  exit="{{" height: 0, opacity: 0 }}";
                  className="px-6 pb-4">;";
                  <p className = "text-gray-600 leading-relaxed"> {faq.answer}

      {/* Additional Resources */}
      <section className="py-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div>Broken JSX</div>
            className="text-center max-w-4xl mx-auto">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Additional <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Resources</span>;
            </h2>;
            <p className="text-xl text-zion-slate-light mb-12">;
              Explore our knowledge base, documentation, and community resources;
            </p>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
              {};
                { icon: BookOpen, title: 'Documentation', description: 'Comprehensive guides and API references', link: '/docs' },;
                { icon: Globe, title: 'Knowledge Base', description: 'Articles, tutorials, and best practices', link: '/knowledge' },;
                { icon: Users, title: 'Community', description: 'Connect with other users and developers', link: '/community' },;
                { icon: Shield, title: 'Support Portal', description: 'Submit tickets and track requests', link: '/support' }
              ].map((resource, index) => (;
                <div>Broken JSX</div>
                  className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">;
                  <resource.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />;
                  <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>;
                  <p className="text-zion-slate-light text-sm mb-4">{resource.description}</p>;
                  <div>Broken JSX</div>
                    className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors text-sm font-medium">;
                    Learn More;
                    <ChevronDown className="ml-1 w-4 h-4 rotate-[-90deg]" />;
                  </Link>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </motion.div>;

        {/* Additional Resources */}
        <div>Broken JSX</div>
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">;
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">;
            <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center mb-4">;
              <BookOpen className="w-6 h-6 text-zion-cyan" />;
            </div>;
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>;
            <p className="text-gray-600 mb-4">;
              Access our comprehensive technical documentation and guides.;
            </p>;
            <div>Broken JSX</div>
              className="text-zion-cyan hover:text-zion-cyan-dark font-medium">;
              View Documentation →;
            </Link>;
          </div>;

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">;
            <div className="w-12 h-12 bg-zion-purple/10 rounded-lg flex items-center justify-center mb-4">;
              <Video className="w-6 h-6 text-zion-purple" />;
            </div>;
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Tutorials</h3>;
            <p className="text-gray-600 mb-4">;
              Learn through our video tutorials and webinars.;
            </p>;
            <div>Broken JSX</div>
              className="text-zion-purple hover:text-zion-purple-dark font-medium">;
              Watch Videos →;
            </Link>;
          </div>;

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">;
            <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center mb-4">;
              <Users2 className="w-6 h-6 text-zion-cyan" />;
            </div>;
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>;
            <p className="text-gray-600 mb-4">;
              Join our community forum for discussions and support.;
            </p>;
            <div>Broken JSX</div>
              className="text-zion-cyan hover:text-zion-cyan-dark font-medium">;
              Join Community →;
            </Link>;
          </div>;
        </motion.div>;
      </div>;
    </div>;
  )}
export default FAQ;
))))))))))))