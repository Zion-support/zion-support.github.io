import React, { useState } from 'react';

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer three main categories of services: AI Services (content creation, email automation, business intelligence), IT Services (cloud migration, cybersecurity, digital transformation), and Micro SaaS Solutions (e-commerce tools, customer support platforms, project management tools)."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing is highly competitive, typically 40-70% lower than market rates. AI services start at $199/month, IT services range from $799/month to $5,999/project, and Micro SaaS solutions start at $149/month. Contact us for a customized quote."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide round-the-clock technical support for all our services. Our team is available 24/7 to ensure your systems run smoothly and address any issues promptly."
    },
    {
      question: "How quickly can you implement a solution?",
      answer: "Implementation time varies by service complexity. Simple Micro SaaS solutions can be deployed within days, while complex AI or IT transformations may take 2-6 months. We provide detailed timelines during the consultation phase."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! Our services are designed to be accessible to businesses of all sizes. We offer scalable solutions that grow with your business, from startups to enterprise-level organizations."
    },
    {
      question: "What makes your AI services different?",
      answer: "Our AI services are built with cutting-edge technology and customized for your specific business needs. We focus on practical applications that deliver immediate ROI, with features like brand voice consistency, automated workflows, and real-time analytics."
    },
    {
      question: "Do you provide training for your solutions?",
      answer: "Yes, we include comprehensive training as part of all our implementations. This includes user training, documentation, and ongoing support to ensure your team can effectively use the solutions."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, our solutions are designed to integrate seamlessly with existing systems. We support most major platforms and can create custom integrations as needed."
    },
    {
      question: "What is your uptime guarantee?",
      answer: "We guarantee 99.9% uptime for all our services. Our infrastructure is designed with redundancy and failover capabilities to ensure maximum reliability."
    },
    {
      question: "How do I get started?",
      answer: "Simply contact us through our website, call us at +1 302 464 0950, or email kleber@ziontechgroup.com. We'll schedule a free consultation to discuss your needs and provide a customized solution."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Find answers to common questions about our services and solutions
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <span className={`text-cyan-400 transform transition-transform ${openItem === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openItem === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us directly for personalized assistance
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-gray-300 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Phone</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Address</h3>
              <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}