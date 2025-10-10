'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'General Questions',
      items: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer comprehensive AI and IT solutions including AI development, cloud infrastructure, cybersecurity, digital transformation, micro SAAS tools, and emerging technologies like quantum computing and 5G implementation.'
        },
        {
          question: 'How long has Zion Tech Group been in business?',
          answer: 'Zion Tech Group has been providing cutting-edge technology solutions for over 10 years, serving Fortune 500 companies, startups, and enterprises worldwide.'
        },
        {
          question: 'What makes Zion Tech Group different from competitors?',
          answer: 'Our unique combination of AI expertise, proven results (300% ROI average), 24/7 support, and comprehensive micro SAAS solutions sets us apart. We deliver $50M+ annual savings for enterprise clients.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes! We provide free consultations to assess your needs and recommend the best solutions. Contact us at (302) 464-0950 or kleber@ziontechgroup.com to schedule yours.'
        }
      ]
    },
    {
      title: 'AI Services',
      items: [
        {
          question: 'What AI services do you provide?',
          answer: 'We offer AI analytics, automation, chatbots, CRM systems, computer vision, natural language processing, predictive analytics, and custom AI model development for various industries.'
        },
        {
          question: 'How quickly can you implement AI solutions?',
          answer: 'Implementation timelines vary by project complexity. Simple AI tools can be deployed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during consultation.'
        },
        {
          question: 'Do you provide AI training for our team?',
          answer: 'Yes, we offer comprehensive training programs including AI fundamentals, tool usage, best practices, and ongoing support to ensure your team can effectively use our solutions.'
        },
        {
          question: 'Can you integrate AI with our existing systems?',
          answer: 'Absolutely! We specialize in seamless integration with existing systems including CRM, ERP, databases, and cloud platforms. Our solutions work with 500+ popular business tools.'
        }
      ]
    },
    {
      title: 'IT Services',
      items: [
        {
          question: 'What IT infrastructure services do you offer?',
          answer: 'We provide cloud migration, cybersecurity, network infrastructure, database management, API development, DevOps, mobile development, and custom software solutions.'
        },
        {
          question: 'Do you offer 24/7 IT support?',
          answer: 'Yes, we provide 24/7 emergency IT support for all our clients. Our support team is available around the clock to resolve any technical issues quickly.'
        },
        {
          question: 'Can you help with cloud migration?',
          answer: 'We specialize in zero-downtime cloud migrations to AWS, Azure, and Google Cloud. Our team ensures seamless transition with minimal business disruption.'
        },
        {
          question: 'What cybersecurity measures do you implement?',
          answer: 'We provide comprehensive security including threat detection, vulnerability assessment, compliance management, incident response, and advanced security monitoring.'
        }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      items: [
        {
          question: 'What are your micro SAAS solutions?',
          answer: 'We offer 50+ ready-to-use AI tools including analytics dashboards, chatbot builders, email marketing automation, project management, SEO optimization, and more. All tools are designed for immediate deployment.'
        },
        {
          question: 'How much do micro SAAS solutions cost?',
          answer: 'Pricing starts from $79/month for basic tools to $999/month for enterprise solutions. We offer flexible pricing plans based on your needs and usage requirements.'
        },
        {
          question: 'Can I customize micro SAAS tools?',
          answer: 'Yes, all our micro SAAS tools are highly customizable. We can modify features, branding, integrations, and functionality to match your specific business requirements.'
        },
        {
          question: 'Do you provide training for micro SAAS tools?',
          answer: 'We provide comprehensive training, documentation, and ongoing support for all micro SAAS tools. Our team ensures you can maximize the value of each solution.'
        }
      ]
    },
    {
      title: 'Pricing & Billing',
      items: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing including monthly subscriptions, annual contracts, project-based pricing, and custom enterprise solutions. Contact us for detailed pricing information.'
        },
        {
          question: 'Do you offer discounts for long-term contracts?',
          answer: 'Yes, we provide significant discounts for annual contracts and multi-year agreements. Enterprise clients also receive volume discounts and custom pricing.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and enterprise billing options. We also offer flexible payment terms for large projects.'
        },
        {
          question: 'Is there a free trial available?',
          answer: 'Yes, we offer free trials for most of our micro SAAS solutions. Contact us to discuss trial options for enterprise solutions.'
        }
      ]
    },
    {
      title: 'Support & Contact',
      items: [
        {
          question: 'How can I contact Zion Tech Group?',
          answer: 'You can reach us at (302) 464-0950, email kleber@ziontechgroup.com, or visit our office at 364 E Main St STE 1008, Middletown, DE 19709.'
        },
        {
          question: 'What are your business hours?',
          answer: 'Our regular business hours are Monday-Friday 9AM-6PM EST. We also provide 24/7 emergency support for critical issues.'
        },
        {
          question: 'Do you offer remote support?',
          answer: 'Yes, we provide comprehensive remote support including screen sharing, remote access, and virtual consultations for all our services.'
        },
        {
          question: 'How quickly do you respond to support requests?',
          answer: 'We respond to support requests within 1 hour during business hours and 4 hours for emergency requests outside business hours.'
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to common questions about Zion Tech Group's AI and IT services, pricing, support, and more." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI services, IT support, pricing, contact" />
        <meta property="og:title" content="FAQ - Zion Tech Group" />
        <meta property="og:description" content="Get answers to your questions about our AI and IT solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-enhanced">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Find answers to common questions about our AI and IT services, pricing, support, and more. 
                Can't find what you're looking for? Contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button-enhanced px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  📧 Email Us
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Categories */}
          <section className="mb-16">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-8 neon-text-enhanced">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div
                        key={itemIndex}
                        className="cyber-card-enhanced holographic-card-enhanced border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-cyan-500/5 transition-colors duration-300"
                        >
                          <h3 className="text-lg font-semibold text-white pr-4">
                            {item.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-300 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <div className="cyber-card-enhanced holographic-card-enhanced p-8 border border-cyan-400/30">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text-enhanced">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team is here to help! Contact us directly for personalized assistance and detailed answers to your questions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="cyber-card-enhanced p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300 mb-4">Speak directly with our experts</p>
                  <a
                    href="tel:+13024640950"
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    (302) 464-0950
                  </a>
                </div>
                <div className="cyber-card-enhanced p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-4">Get detailed responses via email</p>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="cyber-card-enhanced p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <MessageCircle className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                  <p className="text-gray-300 mb-4">Chat with us in real-time</p>
                  <a
                    href="/contact"
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Start Chat
                  </a>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  📍 364 E Main St STE 1008, Middletown, DE 19709 | 
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default FAQPage;