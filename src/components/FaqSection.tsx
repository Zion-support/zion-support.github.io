import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'How do I publish my AI product or service?',
    answer: "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."
  },
  {
    question: 'What types of AI jobs can I find or post?',
    answer: 'You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more.'
  },
  {
    question: 'What IT equipment is available to rent or buy?',
    answer: 'Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options.'
  },
  {
    question: 'How does Zion ensure 24x7x365 availability?',
    answer: 'We use distributed data centers with automated failover and a global support team working in rotating shifts.'
  },
  {
    question: "What is Zion's Green IT program?",
    answer: 'Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required.'
  },
  {
    question: 'Are there fees for listing my products or services?',
    answer: 'No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility.'
  },
  {
    question: 'How do I track my order status?',
    answer: 'Check the Orders page in your account or ask our chatbot with your order ID for a quick update.'
  },
  {
    question: 'How do I contact support?',
    answer: 'Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime.'
  }
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our AI and IT services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;