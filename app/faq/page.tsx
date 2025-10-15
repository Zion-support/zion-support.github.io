import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "AI Solutions",
      questions: [
        {
          question: "What AI services does Zion Tech Group offer?",
          answer: "We offer comprehensive AI solutions including machine learning models, natural language processing, computer vision, predictive analytics, AI automation platforms, and custom AI development for various industries."
        },
        {
          question: "How can AI benefit my business?",
          answer: "AI can help automate processes, improve decision-making, enhance customer experiences, reduce costs, increase efficiency, and provide valuable insights from your data. Our solutions are tailored to your specific business needs."
        },
        {
          question: "Do you provide AI consulting services?",
          answer: "Yes, we offer AI strategy consulting, implementation planning, technology assessment, and ongoing support to help you successfully integrate AI into your business operations."
        }
      ]
    },
    {
      category: "Cybersecurity",
      questions: [
        {
          question: "What cybersecurity services do you provide?",
          answer: "Our cybersecurity services include threat detection and response, vulnerability assessments, penetration testing, security monitoring, compliance management, incident response, and security training for your team."
        },
        {
          question: "How do you ensure data security?",
          answer: "We implement multi-layered security measures including encryption, access controls, regular security audits, compliance with industry standards, and continuous monitoring to protect your sensitive data."
        },
        {
          question: "Do you offer 24/7 security monitoring?",
          answer: "Yes, we provide round-the-clock security monitoring and incident response services to ensure your systems are protected at all times."
        }
      ]
    },
    {
      category: "Cloud Services",
      questions: [
        {
          question: "What cloud platforms do you work with?",
          answer: "We work with all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and provide multi-cloud solutions for optimal performance and cost efficiency."
        },
        {
          question: "Can you help migrate our existing systems to the cloud?",
          answer: "Absolutely! We provide comprehensive cloud migration services including assessment, planning, migration execution, and post-migration support to ensure a smooth transition."
        },
        {
          question: "Do you offer cloud cost optimization?",
          answer: "Yes, we help optimize your cloud costs through right-sizing, resource optimization, reserved instances, and ongoing monitoring to ensure you get the best value for your investment."
        }
      ]
    },
    {
      category: "5G Solutions",
      questions: [
        {
          question: "What 5G services do you provide?",
          answer: "We offer 5G network design, implementation, optimization, IoT connectivity solutions, edge computing, and custom 5G applications for various industries."
        },
        {
          question: "How can 5G benefit my business?",
          answer: "5G provides ultra-fast speeds, low latency, massive connectivity, and enables new applications like IoT, AR/VR, autonomous vehicles, and real-time data processing that can transform your business operations."
        },
        {
          question: "Do you provide 5G testing and validation?",
          answer: "Yes, we offer comprehensive 5G testing services including network performance testing, coverage analysis, speed testing, and validation of 5G applications."
        }
      ]
    },
    {
      category: "General",
      questions: [
        {
          question: "How do I get started with your services?",
          answer: "Contact us through our website, email, or phone to schedule a free consultation. We'll assess your needs and provide a customized solution proposal."
        },
        {
          question: "What is your typical project timeline?",
          answer: "Project timelines vary based on complexity and scope. Simple implementations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the consultation phase."
        },
        {
          question: "Do you provide ongoing support and maintenance?",
          answer: "Yes, we offer comprehensive support and maintenance packages including 24/7 monitoring, regular updates, performance optimization, and technical support to ensure your solutions continue to perform optimally."
        },
        {
          question: "What industries do you serve?",
          answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, government, and more. Our solutions are adaptable to various business requirements."
        }
      ]
    }
  ];

const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);
const Component = () => {
  return (
    <>
      <SEOHead 
        title="Frequently Asked Questions - Zion Tech Group"
        description="Find answers to common questions about our AI solutions, cybersecurity services, cloud services, and 5G solutions."
        keywords="FAQ, frequently asked questions, AI solutions, cybersecurity, cloud services, 5G solutions, support"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
              Frequently Asked
              <span className="block text-4xl md:text-5xl text-purple-400 mt-2">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services, solutions, and how we can help transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 10 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
const Component = () => {
  return (
                      <div key={itemIndex} className="bg-slate-700 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-600 transition-colors"
                        >
                          <span className="text-lg font-semibold text-white pr-4">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help with personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
}
}

export default FaqPage;