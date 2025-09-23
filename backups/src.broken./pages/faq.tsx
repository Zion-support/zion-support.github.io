import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0]));

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is a leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services. We help businesses leverage cutting-edge technology to achieve their goals."
        },
        {
          question: "Where is Zion Tech Group located?",
          answer: "Our headquarters is located at 364 E Main St STE 1008, Middletown, DE 19709. We serve clients globally with remote and on-site support capabilities."
        },
        {
          question: "How can I contact Zion Tech Group?",
          answer: "You can reach us at +1 302 464 0950 or email us at kleber@ziontechgroup.com. You can also use our contact form on the website for specific inquiries."
        }
      ]
    },
    {
      category: "Services",
      questions: [
        {
          question: "What services does Zion Tech Group offer?",
          answer: "We offer comprehensive technology services including AI solutions, cybersecurity, cloud migration, digital transformation, IT infrastructure, micro SAAS development, and emerging technology consulting."
        },
        {
          question: "Do you provide 24/7 support?",
          answer: "Yes, we offer 24/7 support for critical systems and infrastructure. Our support levels vary based on your service agreement and requirements."
        },
        {
          question: "Can you help with cloud migration?",
          answer: "Absolutely! We specialize in cloud migration services, helping businesses transition to AWS, Azure, Google Cloud, and other platforms with minimal downtime and maximum efficiency."
        }
      ]
    },
    {
      category: "AI & Technology",
      questions: [
        {
          question: "What AI services do you provide?",
          answer: "Our AI services include autonomous trading platforms, consciousness simulators, business operations automation, healthcare diagnosis systems, content creation tools, and supply chain optimization."
        },
        {
          question: "Do you work with quantum computing?",
          answer: "Yes, we have expertise in quantum computing solutions and are developing quantum-secure infrastructure and quantum neural network platforms for advanced applications."
        },
        {
          question: "What emerging technologies do you support?",
          answer: "We support blockchain, IoT, edge computing, 5G solutions, green technology, and space technology applications for forward-thinking businesses."
        }
      ]
    },
    {
      category: "Pricing & Billing",
      questions: [
        {
          question: "How do you price your services?",
          answer: "Our pricing is based on project scope, complexity, and duration. We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Contact us for a customized quote."
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we provide free initial consultations to understand your needs and provide recommendations. This helps us create accurate proposals and timelines for your projects."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including bank transfers, credit cards, and digital payments. Payment terms are typically net 30 days for established clients."
        }
      ]
    },
    {
      category: "Security & Compliance",
      questions: [
        {
          question: "How do you ensure data security?",
          answer: "We implement comprehensive security measures including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA."
        },
        {
          question: "Are you SOC 2 compliant?",
          answer: "Yes, we maintain SOC 2 compliance and can help your organization achieve and maintain compliance with various regulatory requirements."
        },
        {
          question: "Do you sign NDAs?",
          answer: "Absolutely. We understand the importance of confidentiality and are happy to sign non-disclosure agreements to protect your sensitive information and intellectual property."
        }
      ]
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  let questionIndex = 0;

  return (
    <>
      <SEO 
        title="Frequently Asked Questions - Zion Tech Group"
        description="Find answers to common questions about Zion Tech Group's services, pricing, support, and technology solutions."
        keywords="FAQ, questions, support, Zion Tech Group, technology services, AI, cybersecurity"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <div className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Find answers to common questions about our services, technology solutions, and how we can help your business succeed.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-12">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto px-4 pb-20">
          {filteredData.map((category, categoryIndex) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-zion-cyan to-zion-purple rounded-full mr-4"></span>
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item, itemIndex) => {
                  const globalIndex = questionIndex++;
                  const isExpanded = expandedItems.has(globalIndex);
                  
                  return (
                    <div
                      key={itemIndex}
                      className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleExpanded(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zion-slate-dark/70 transition-colors duration-200"
                      >
                        <span className="text-white font-medium pr-4">{item.question}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-zion-slate-light flex-shrink-0" />
                        )}
                      </button>
                      
                      {isExpanded && (
                        <div className="px-6 pb-4">
                          <div className="pt-2 border-t border-zion-slate-light/10">
                            <p className="text-zion-slate-light leading-relaxed">{item.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          {filteredData.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-zion-slate-dark/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-zion-slate-light" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-zion-slate-light">Try searching with different keywords or browse our categories above.</p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="bg-zion-slate-dark/50 border-t border-zion-cyan/20 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-zion-slate-light mb-8">
              Our team is here to help. Contact us for personalized assistance with your technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 inline-flex items-center justify-center"
              >
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 inline-flex items-center justify-center"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;