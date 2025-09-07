import React, { useState } from 'react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer a comprehensive range of technology services including web development, mobile app development, cloud solutions, AI/ML implementation, cybersecurity, and digital transformation consulting."
    },
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex enterprise applications can take 3-6 months. We provide detailed timelines during our initial consultation."
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive maintenance and support packages. Our support includes bug fixes, updates, security patches, and technical assistance to ensure your solution continues to perform optimally."
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern technologies including React, Next.js, Node.js, Python, AWS, Azure, Docker, Kubernetes, and various AI/ML frameworks. We stay current with the latest industry trends and best practices."
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures including encryption, secure coding practices, regular security audits, and compliance with industry standards like GDPR and SOC 2. All team members are security-trained and we follow strict data protection protocols."
      question: "Can you work with our existing team?",
      answer: "Absolutely! We excel at collaborating with in-house teams. We can augment your existing capabilities, provide training, or work alongside your developers to ensure seamless integration and knowledge transfer."
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including fixed-price projects, time and materials, and retainer agreements. Pricing depends on project scope, complexity, and timeline. We provide transparent quotes with no hidden costs."
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 support for critical systems and enterprise clients. Our support team is available around the clock to address urgent issues and ensure minimal downtime for your business operations."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Find answers to common questions about our services and processes
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className={`text-2xl transition-transform duration-200 ${
                  openIndex === index ? 'rotate-45' : `;
                }`}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
          ))}
    </section>
  );

export default FaqSection;`;