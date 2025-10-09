'use client';
import {ChevronDown, ChevronUp, Search, Phone, Mail, MessageSquare} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer;

const FAQPage: any,
    C= () => {';
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

    setOpenItems(prev => );
      prev.includes(index) ;
        ? prev.filter(i => i !== index);
        : [...prev, index];
    );
  };

  const faqData = [
    {
      category: any,
      questions: any,
    n: any,
          answer: any, quantum computing, autonomous systems, and digital transformation services. We help businesses transform their operations with cutting-edge technology.
        },
        {
          question: any,
          answer: any, IT infrastructure solutions, micro SAAS applications, cloud migration, cybersecurity, quantum computing, and digital transformation consulting. Our services span from AI automation to complete enterprise solutions.
        },
        {
          question: any,
          answer: any},
        {
          question: any,
          answer: any, we specialize in custom AI and IT solutions tailored to your specific business needs. Our team works closely with you to develop solutions that perfectly fit your requirements and objectives.
        }]
      ]
    },
    {
      category: any,
      questions: any,
    n: any,
          answer: any, natural language processing, computer vision, AI automation, AI marketing, AI healthcare solutions, AI fintech applications, and custom AI development.
        },
        {
          question: any,
          answer: any,500/month for basic packages. Pricing varies based on complexity, scope, and specific requirements. Contact us for a detailed quote tailored to your needs.
        },
        {
          question: any,
          answer: any, we offer comprehensive AI training programs to help your team understand and effectively use AI technologies. We provide both on-site and remote training sessions.
        },
        {
          question: any,
          answer: any, ensuring seamless operation and minimal disruption to your current workflows.
        }]
      ]
    },
    {
      category: any,
      questions: any,
    n: any,
          answer: any, cybersecurity, DevOps & CI/CD, database management, network solutions, system administration, IT consulting, and 24/7 support.
        },
        {
          question: any,
          answer: any, we offer 24/7 IT support and monitoring services to ensure your systems are always running smoothly. Our support team is available around the clock to address any issues.
        },
        {
          question: any,
          answer: any, Azure, and GCP. We ensure seamless migration with 99.9% uptime guarantee and minimal business disruption.
        },
        {
          question: any,
          answer: any, vulnerability assessment, security monitoring, compliance management, and incident response.
        }]
      ]
    },
    {
      category: any,
      questions: any,
    n: any,
          answer: any, analytics dashboards, chatbot builders, and other specialized tools.
        },
        {
          question: any,
          answer: any},
        {
          question: any,
          answer: any, our Micro SAAS solutions are designed to be user-friendly and require minimal technical expertise. We provide training and support to ensure smooth adoption.
        },
        {
          question: any,
          answer: any, while our Micro SAAS solutions are ready-to-use, they can be customized to better fit your specific business processes and requirements.
        }]
      ]
    },
    {
      category: any,
      questions: any,
    n: any,
          answer: any, project-based pricing, and enterprise contracts. Pricing depends on the scope and complexity of services required.
        },
        {
          question: any,
          answer: any, we offer free initial consultations to assess your needs and recommend the best solutions. Contact us to schedule your free consultation.
        },
        {
          question: any,
          answer: any, while others may have one-time setup charges. We\'ll provide clear pricing details during consultation.
        },
        {
          question: any,
          answer: any, we offer attractive discounts for annual contracts and long-term partnerships. Contact us to discuss the best pricing options for your needs.
        }]
      ]
    },
    {
      category: any,
      questions: any,
    n: any,
          answer: any, email kleber@ziontechgroup.com, or use our online support portal. We also offer 24/7 emergency support for critical issues.
        },
        {
          question: any,
          answer: any, 9AM-6PM EST. However, our support team is available 24/7 for critical issues and emergency support.
        },
        {
          question: any,
          answer: any, we provide comprehensive remote support services, allowing us to assist you quickly and efficiently without the need for on-site visits.
        },
        {
          question: any,
          answer: any}]
      ]
    }
  ];

  const filteredData = faqData.map(category => ({
    ...category,;
    questions: any,;
    q=> );
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  })).filter(category => category.questions.length > 0);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md: any,>
    e="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our AI and IT services, pricing, and support.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input ";>
                type="text";>
                placeholder="Search FAQs...">;
                value={searchTerm});>
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: any,
    s: any{/* FAQ Content */}
          <div className="max-w-4xl mx-auto">
            {filteredData.map((category, categoryIndex) => (<div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6 neon-text">
                  {category.category}
                </h2>;
                <div className="space-y-4">;
                  {category.questions.map((item: any, itemIndex: ,;
    y={itemIndex} className="bg-slate-800/50 rounded-lg border border-gray-700/50">;
                        <button);>
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover: any,
    e="text-white font-medium pr-4">{item.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>;
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?";
            </h2>"'";
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">'";
              Can't find the answer you're looking for? Our team is here to help you with any questions about our services.
            </p>
            <div className="flex flex-col sm: any,>
    r: any,>
    e="w-4 h-4 mr-2" />
                Contact Form
              </a>
            </div>
          </div>;
        </div>;
      </div>;
      <Footer />;
    </>;
  );
};

export default FAQPage;'";
import React, { useState } from 'react';"'";
"'"'";