import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, HelpCircle, ChevronUp, ChevronDown } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

const [searchTerm, setSearchTerm] = useState('');

const toggleItem = () => {
  return;
};

const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is a leading technology solutions provider specializing in AI-powered solutions, IT services, micro SAAS, and 5G technology. We help businesses transform their operations with cutting-edge technology and innovative solutions."
        },
        {
          question: "What services do you offer?",
          answer: "We offer comprehensive technology services including AI solutions (analytics, content generation, customer, support), IT services (cloud migration, cybersecurity, web, development), micro SAAS solutions, and 5G technology implementations."
        },
        {
          question: "How can I get started?",
          answer: "Getting started is easy! You can contact us through our contact form, schedule a free consultation, or explore our demo to see our solutions in action. Our team will work with you to identify the best solutions for your specific needs."
        }]
    },
    {
      category: "AI Services",
      questions: [
        {
          question: "What AI services do you provide?",
          answer: "Our AI services include predictive analytics, content generation, customer support automation, cybersecurity with AI, data analytics, marketing automation, and workflow automation. Each service is tailored to your specific business requirements."
        },
        {
          question: "How long does it take to implement AI solutions?",
          answer: "Implementation time varies depending on the complexity of the solution. Simple AI tools can be deployed in 2-4 weeks, while comprehensive AI systems may take 3-6 months. We provide detailed timelines during our consultation process."
        },
        {
          question: "Do you provide training for AI solutions?",
          answer: "Yes! We provide comprehensive training for all our AI solutions, including user training, administrator training, and ongoing support. We also offer documentation and video tutorials to help your team get the most out of our solutions."
        }]
    },
    {
      category: "IT Services",
      questions: [
        {
          question: "What IT services are available?",
          answer: "Our IT services include cloud migration, cybersecurity, web development, software development, system integration, DevOps services, IT consulting, and managed services. We provide end-to-end IT solutions for businesses of all sizes."
        },
        {
          question: "Do you offer 24/7 support?",
          answer: "Yes, we offer 24/7 support for all our managed services and critical systems. Our support team is available around the clock to ensure your systems run smoothly and any issues are resolved quickly."
        },
        {
          question: "What is your uptime guarantee?",
          answer: "We provide a 99.9% uptime SLA for all our managed services and cloud solutions. This means your systems will be available 99.9% of the time, with minimal planned maintenance windows."
        }]
    },
    {
      category: "Micro SAAS",
      questions: [
        {
          question: "What are micro SAAS solutions?",
          answer: "Micro SAAS solutions are ready-to-use software applications that address specific business needs. They're designed for quick deployment and immediate value, covering areas like analytics, security, productivity, and automation."
        },
        {
          question: "Can micro SAAS solutions be customized?",
          answer: "Yes, our micro SAAS solutions can be customized to fit your specific requirements. We offer configuration options, white-labeling, and custom integrations to ensure the solution works perfectly for your business."
        },
        {
          question: "What is the pricing for micro SAAS solutions?",
          answer: "Pricing varies by solution and features. Most micro SAAS solutions start at $99/month for basic plans, with enterprise plans available. We offer flexible pricing options including monthly, annual, and custom enterprise agreements."
        }]
    },
    {
      category: "5G Solutions",
      questions: [
        {
          question: "What 5G services do you offer?",
          answer: "Our 5G services include network infrastructure design, edge computing solutions, IoT implementations, smart city solutions, private networks, mobile applications, and data analytics. We help businesses leverage 5G technology for competitive advantage."
        },
        {
          question: "How does 5G benefit my business?",
          answer: "5G offers faster speeds, lower latency, and greater connectivity. Benefits include improved productivity, real-time data processing, enhanced IoT capabilities, better remote work support, and new opportunities for innovation."
        },
        {
          question: "Do you provide 5G consulting?",
          answer: "Yes, we offer comprehensive 5G consulting services including strategy development, technology assessment, implementation planning, and ongoing optimization. Our experts help you understand how 5G can transform your business."
        }]
    },
    {
      category: "Support & Billing",
      questions: [
        {
          question: "How do I contact support?",
          answer: "You can contact our support team through multiple channels: email (support@ziontechgroup.com), phone (+1 302 464, 0950), our support portal, or by submitting a ticket through our website. We also offer live chat during business hours."
        },
        {
          question: "What are your payment terms?",
          answer: "We accept various payment methods including credit cards, bank transfers, and ACH payments. Payment terms vary by service type, with most services billed monthly or annually. Enterprise clients can arrange custom payment terms."
        },
        {
          question: "Do you offer refunds?",
          answer: "We offer a 30-day money-back guarantee for most of our services. If you're not satisfied with our solution within the first 30 days, we'll provide a full refund. Some custom development projects may have different terms."
        }]
    }
  ];

const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);
  return (
    <>
      <Helmet>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about Zion Tech Group's AI services, IT solutions, micro SAAS, and 5G technology. Get help and support information." />
        <meta name="keywords" content="FAQ, frequently asked questions, support, help, AI services, IT solutions, micro SAAS, 5G technology" />
        <meta property="og:title" content="FAQ - Zion Tech Group" />
        <meta property="og:description" content="Frequently asked questions about our technology solutions" />
        <meta property="og:type" content="website" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Questions</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Find answers to common questions about our services, solutions, and support.
              </p>
              {/* Search Bar */}
              
        <div className="relative max-w-2xl mx-auto mb-12">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
    type="text"
                  placeholder="Search FAQ..."
                  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Content */}
        <section className="pb-20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-4xl mx-auto">
              {filteredData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <HelpCircle className="w-8 h-8 text-cyan-400 mr-3" />
                    {category.category}
                  </h2>
                  
        <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => {
                      const globalIndex = categoryIndex * 100 + questionIndex;

const isOpen = openItems.includes(globalIndex);
  return (
                        <div
                          key={questionIndex} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden hover:bg-white/15 transition-all duration-300"
                        >
                          <button
                            onClick={() => toggleItem(globalIndex)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                          >
                            <span className="text-lg font-semibold text-white pr-4">
                              {item.question}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                            )}
                          </button>
                          {isOpen && (
                            
        <div className="px-6 pb-4">
                              
        <div className="border-t border-white/20 pt-4">
                                
          <p className="text-gray-300 leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
              {filteredData.length === 0 && (
                
        <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                  
          <p className="text-gray-300">Try adjusting your search terms or browse our categories above.</p>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Still Have Questions?</h2>
              
          <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
    href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </a>
                <a
    href="mailto:support@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default FAQPage;