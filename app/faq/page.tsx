import React from 'react';
import Navigation from '../components/Navigation';
import { Helmet } from 'react-helmet-async';

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive AI-powered solutions including enterprise AI, quantum computing, autonomous systems, digital transformation, cloud services, cybersecurity, and custom micro SaaS applications."
    },
    {
      question: "How can AI solutions benefit my business?",
      answer: "Our AI solutions can increase efficiency by up to 90%, reduce costs by 70%, and deliver ROI of 300% or more. We provide automation, data analytics, customer service enhancement, and process optimization."
    },
    {
      question: "Do you offer custom development?",
      answer: "Yes, we specialize in custom AI and IT solutions tailored to your specific business needs. Our team works closely with you to understand requirements and deliver bespoke solutions."
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile development methodology with regular check-ins, iterative development, and continuous testing to ensure quality and meet your expectations."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple solutions can be delivered in 2-4 weeks, while complex enterprise systems may take 3-6 months. We provide detailed timelines during consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support and maintenance services including 24/7 monitoring, regular updates, security patches, and technical assistance."
    },
    {
      question: "What technologies do you use?",
      answer: "We use cutting-edge technologies including React, TypeScript, Python, TensorFlow, PyTorch, AWS, Azure, Docker, Kubernetes, and various AI/ML frameworks."
    },
    {
      question: "How do I get started?",
      answer: "Contact us through our consultation form or call +1-302-464-0950. We'll schedule a free consultation to discuss your needs and provide a customized proposal."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Zion Tech Group</title>
        <meta name="description" content="Find answers to common questions about our AI and IT solutions, services, development process, and how we can help transform your business." />
      </Helmet>
      


      <Navigation />
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        </div><div className="container mx-auto px-4">
          </div><div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our AI and IT solutions, 
              services, and how we can help transform your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            </div><div className="space-y-6">
              {faqs.map((faq, index) => (
                </div><div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Still have questions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team is here to help. Contact us for personalized assistance.
              </p>
              </div><div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/consultation"
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );,
};

export default FAQPage;