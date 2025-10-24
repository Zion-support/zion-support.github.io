<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export default function FaqZionTechGroup() {

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gray-900 text-white">
=======

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
      answer: "Contact us through our consultation form or call +1-302-464-0950. We'll schedule a free consultation to discuss your needs and provide a customized proposal.",
    }
  ];

  return (
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>Faq - Zion Tech Group</title>
        <meta name="description" content="Faq solutions by Zion Tech Group" />
      </Helmet>
      
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Faq</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive faq solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our AI and IT solutions, 
              services, and how we can help transform your business.
            </p>
          </div></div></div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div></div></div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Still have questions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team is here to help. Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              </div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
}
=======
import React from 'react';

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function Faq() {return (
    <title>Faq - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">Faq</h1>
            <p className="text-lg text-gray-300 mb-8">Professional faq services coming soon.</p>

              Contact Us

      <  />
  );}

    <><  />
      <Helmet></Helmet>
        <title>Faq - Zion Tech Group</title>
        <meta name="description" content="Faq services by Zion Tech Group. Professional AI and IT solutions."   /></meta>
        <meta name="keywords" content="faq, AI solutions, IT services"   /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              <span className="w-5h-5ml-2"   />Faq;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Professional faq services by Zion Tech Group.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive faq solutions.
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5ml-2">Contact Us;
            </button>
          </div>
      </div>
    <  />
  );
};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Faq - Zion Tech Group</title>
        <meta name="description" content="Professional faq services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Faq</h1>
          <p className="text-lg text-gray-300 mb-8">Professional faq services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
