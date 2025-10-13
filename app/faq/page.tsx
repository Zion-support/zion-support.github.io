<<<<<<< HEAD
<<<<<<< HEAD
'use client;
=======
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';
const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const toggleItem = (index: number) => {,
    setOpenItems(prev =>)
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );}const faqs = [
    {question: "What AI services do you offer?",
      answer: "We offer comprehensive AI services including marketing automation, customer support, data analytics, content generation, healthcare solutions, financial services, e-commerce solutions, cybersecurity, mobile apps, sales automation, workflow automation, and data visualization."},
    {question: "How can AI benefit my business?",
      answer: "AI can automate repetitive tasks, provide data-driven insights, improve customer experience, enhance security, optimize operations, and drive innovation. Our solutions typically deliver 300% ROI within the first year."},
    {question: "Do you provide IT infrastructure services?",
      answer: "Yes, we offer complete IT infrastructure services including cloud migration, DevOps, database management, cybersecurity, managed IT services, and IT consulting to modernize your technology stack."},
    {question: "What is your pricing model?",
      answer: "We offer flexible pricing models including subscription-based plans starting at $99/month for small businesses, custom enterprise solutions, and project-based pricing. Contact us for a personalized quote."},
    {question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 technical support for all our services. Our support team is available via phone, email, and live chat to ensure your systems run smoothly around the clock."},
    {question: "How long does implementation take?",
      answer: "Implementation timelines vary based on project complexity. Simple AI solutions can be deployed in 2-4 weeks, while comprehensive digital transformation projects may take 3-6 months. We provide detailed timelines during consultation."},
    {question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise organizations. Our micro SAAS solutions are specifically designed for small businesses looking to leverage AI technology."},
    {question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, real estate, legal, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards."}]
  return(<React.Fragment>)</React.Fragment>
      <Helmet />
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about our AI and IT services, pricing, implementation, and support." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI services, IT services, support, pricing" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
              Frequently Asked <span className="text-cyan-400">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Find answers to common questions about our AI and IT services, pricing, and implementation.</p>
            </p>
          </div>
        </section>
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">{faqs.map((faq, index) => (</div>
                <div key={index}className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-cyan-500/20">
                  <button;
                    onClick={() =>toggleItem(index)</button>}className="w-full px-6 py-4 text-left flex items-center justify-between hover: bg-slate-700/30 transition-colors">,
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    )} </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer</p>}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

import React, { useState } from 'react;
=======
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

import { Helmet } from 'react-helmet-async;

import { ChevronDown, ChevronUp } from lucide-react;

;

const FAQPage: React.FC = () => {

const toggleItem = (index: number) => {;;


const faqs = [;;;

    {
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
export default FAQPage;
