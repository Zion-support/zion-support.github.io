<<<<<<< HEAD
=======
<<<<<<< HEAD
'use client;

import React, { useState } from 'react;

import { Helmet } from 'react-helmet-async;

import { ChevronDown, ChevronUp } from lucide-react;

;
<<<<<<< HEAD

const FAQPage: React.FC = () => {
=======
const FAQPage: React.FC = () => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
return (;

const [openItems, setOpenItems] = useState<number[]>
);

}([]);

;
<<<<<<< HEAD

const toggleItem = (index: number) => {;;

=======
const toggleItem = (index: number) => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]);

;
<<<<<<< HEAD

const faqs = [;;;

    {
=======
const faqs = [
    {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      questio,
    n: "What services does Zion Tech Group offer?,
      answer: "We offer comprehensive AI-powered solutions including enterprise AI, quantum computing, autonomous systems, digital transformation, cloud services, cybersecurity, and custom micro SaaS applications.
    },    {
      question: "How can AI benefit my business?,
      answer: "AI can automate repetitive tasks, provide data-driven insights, improve customer experience, enhance security, optimize operations, and drive innovation. Our solutions typically deliver 300% ROI within the first year.
    },
<<<<<<< HEAD
    {
      question: "Do you provide IT infrastructure services?,
      answer: "Yes, we offer complete IT infrastructure services including cloud migration, DevOps, database management, cybersecurity, managed IT services, and IT consulting to modernize your technology stack.
    },
    {
      question: "What is your pricing model?,
      answer: "We offer flexible pricing models including subscription-based plans starting at $99/month for small businesses, custom enterprise solutions, and project-based pricing. Contact us for a personalized quote.
    },
    {
      question: "Do you offer 24/7 support?,
      answer: "Yes, we provide 24/7 technical support for all our services. Our support team is available via phone, email, and live chat to ensure your systems run smoothly around the clock.
    },
    {
      question: "Do you provide ongoing support?,
      answer: Yes, we offer comprehensive support and maintenance services including 24
    },
    {
      question: "What technologies do you use?,
      answer: We use cutting-edge technologies including React, TypeScript, Python, TensorFlow, PyTorch, AWS, Azure, Docker, Kubernetes, and various AI
    },    {
      question: "What industries do you serve?,
      answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, real estate, legal, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards.
=======
    {}
      question: "How can AI benefit my business?",
      answer: "AI can automate repetitive tasks, provide data-driven insights, improve customer experience, enhance security, optimize operations, and drive innovation. Our solutions typically deliver 300% ROI within the first year."
    },
    {}
      question: "Do you provide IT infrastructure services?",
      answer: "Yes, we offer complete IT infrastructure services including cloud migration, DevOps, database management, cybersecurity, managed IT services, and IT consulting to modernize your technology stack."
    },
    {}
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including subscription-based plans starting at $99/month for small businesses, custom enterprise solutions, and project-based pricing. Contact us for a personalized quote."
    },
    {}
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 technical support for all our services. Our support team is available via phone, email, and live chat to ensure your systems run smoothly around the clock."
    },
    {}
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support and maintenance services including 24
    },
    {}
      question: "What technologies do you use?",
      answer: "We use cutting-edge technologies including React, TypeScript, Python, TensorFlow, PyTorch, AWS, Azure, Docker, Kubernetes, and various AI
    },
    {}
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, real estate, legal, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards."
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    }

  ];

  return (<div>
        <title>Frequently Asked Questions - Zion Tech Group<
        <meta name="description" content="Find answers to common questions about our AI and IT solutions, services, development process, and how we can help transform your business. 
      <
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20>
        <div className="container mx-auto px-4>
          <div className="text-center mb-16>
            <h1 className="text-5xl font-bold text-white mb-6>
              Frequently Asked Questions
            <
            <p className="text-xl text-gray-300 max-w-3xl mx-auto>
              Find answers to common questions about our AI and IT solutions, 
              services, and how we can help transform your business.
            <
          <
<<<<<<< HEAD
=======

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">)
              {faqs.map((faq, index) => (<div}
                  key = { index };
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {faq.question}
                  <
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  <
                <)
              ))}
            <

            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Still have questions?
              <
              <p className="text-xl text-gray-300 mb-8">
                Our team is here to help. Contact us for personalized assistance.
              <
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a
                  href="
                  className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                >
                  Contact Us
                <
                <a
                  href="
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hove,
    r:bg-purple-700 transition-colors"
                >
                  Free Consultation
                <
              <
            <
          <
        <
      <
    <
    </React.Fragment>)
=======
'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

const FaqPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Faq - Zion Tech Group</title>
        <meta name="description" content="Faq services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Faq</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
};

<<<<<<< HEAD
export default FAQPage;
=======
export default FaqPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> origin/cursor/ad-creation-and-management-f267
