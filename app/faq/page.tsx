'use client';
<<<<<<< HEAD

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const PagePage: React.FC = () => {
=======
import React, {useState}from 'react';
import { Helmet } from 'react-helmet-async';
import {ChevronDown, ChevronUp} from 'lucide-react';
const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const toggleItem = (index: number) => {,
    setOpenItems(prev =>)
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )}const faqs = [
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
  return (<React.Fragment>
      <Helmet />
  }
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
  ]
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5
  return (
    <>

      <Navigation />
      
<<<<<<< HEAD
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive Page solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 1</h3>
                  <p className="text-gray-300">Description of service 1</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 2</h3>
                  <p className="text-gray-300">Description of service 2</p>
                </div>
=======
      <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900 py-20">
        <div className="containermx-autopx-4">
          <div className="text-center mb-16">
            <h1 className="text-5xlfont-boldtext-whitemb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">
              Find answers to common questions about our AI and IT solutions, 
              services, and how we can help transform your business.
            </p>
          </div>

          <div className="max-w-4xlmx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/10backdrop-blur-lgrounded-lgp-6 border border-white/20"
                >
                  <h3 className="text-xlfont-semiboldtext-whitemb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
    </number><React.Fragment>
      </React><Helmet>
        </Helmet><title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about our AI and IT services, pricing, implementation, and support." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI services, IT services, support, pricing" />
      <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
        <section className="py-20px-4">
          <div className="max-w-7xl mx-autotext-center">
            <h1 className="text-4xlmd:text-6xlfont-bold text-white mb-6">,</h1>
              Frequently Asked <span className="text-cyan-400">Questions</span>
            </h1>
            <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">Find answers to common questions about our AI and IT services, pricing, and implementation.</p>
          </div>
        </section>
        <section className="py-16px-4">
          <div className="max-w-4xlmx-auto">
            <div className="space-y-4">{faqs.map((faq, index) => (</div>
                <div key={index}className="bg-slate-800/50backdrop-blur-smrounded-lgborder border-cyan-500/20">
                  <button;
                    onClick={() =>toggleItem(index)</button>}className="w-fullpx-6py-4text-left flex items-center justify-between hover: bg-slate-700/30 transition-colors">,
                    <h3 className="text-lgfont-semiboldtext-whitepr-4">{faq.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5h-5text-cyan-400flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5h-5text-cyan-400flex-shrink-0" />
                    )} </button>
                  {openItems.includes(index) && (
                    <div className="px-6pb-4">
                      <p className="text-gray-300leading-relaxed">{faq.answer</p>}</p>
                    </div>
                      <p className="text-gray-300leading-relaxed">{faq.answer}
                  )}
              ))}
            </div>

            <div className="mt-16text-center">
              <h2 className="text-3xlfont-boldtext-whitemb-6">
                Still have questions?
              </h2>
              <p className="text-xltext-gray-300mb-8">
                Our team is here to help. Contact us for personalized assistance.
              </p>
              <div className="flexflex-colsm:flex-rowgap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-cyan-600text-whitepx-8py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/consultation"
                  className="bg-purple-600text-whitepx-8py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Free Consultation
                </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5
              </div>
            </div>
          </div>
        </div>
      </main>

<<<<<<< HEAD
      <Footer />
    </>
  );
};
=======
  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5

export default PagePage;
