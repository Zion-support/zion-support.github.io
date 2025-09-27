import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import SEO from "../src/components/SEO";
// import { ErrorBoundary } from "../src/components/ErrorBoundary";
import { usePageView, useAnalytics } from "../src/hooks/useAnalytics";

export default function FAQ(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Analytics tracking
  usePageView("faq");
  const { trackClick } = useAnalytics();

  const faqData = [
    {
      category: "General",
      questions: [
        {
          id: 1,
          question: "What is Zion App?",
          answer: "Zion App is a leading technology solutions provider specializing in AI, Cloud Infrastructure, and Digital Transformation. We help businesses innovate, optimize, and grow through cutting-edge technology."
        },
        {
          id: 2,
          question: "How long has Zion App been in business?",
          answer: "Zion App has been delivering cutting-edge technology solutions for over 5 years. Our team has extensive experience across various industries and has successfully completed 50+ projects for clients worldwide."
        },
        {
          id: 3,
          question: "What makes Zion App different from competitors?",
          answer: "Our unique blend of deep technical expertise, a client-centric approach, and a commitment to continuous innovation sets us apart. We focus on delivering measurable business outcomes and building long-term partnerships."
        }
      ]
    },
    {
      category: "Services",
      questions: [
        {
          id: 4,
          question: "What AI services do you offer?",
          answer: "We offer a wide range of AI services including Natural Language Processing (NLP), Computer Vision, Predictive Analytics, AI-powered automation, and custom AI model development."
        },
        {
          id: 5,
          question: "Can you help with cloud migration?",
          answer: "Absolutely. We provide end-to-end cloud migration services, including strategy, planning, execution, and post-migration support for major cloud providers like AWS, Azure, and Google Cloud."
        },
        {
          id: 6,
          question: "What is Digital Transformation?",
          answer: "Digital Transformation involves integrating digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. Our services cover process automation, legacy system modernization, and digital strategy."
        }
      ]
    },
    {
      category: "Support",
      questions: [
        {
          id: 7,
          question: "What kind of support do you offer?",
          answer: "We offer 24/7 technical support, dedicated account management, and ongoing maintenance services to ensure your systems run smoothly and efficiently."
        },
        {
          id: 8,
          question: "How can I contact support?",
          answer: "You can reach our support team via email at support@zionapp.com, through our website's contact form, or by calling our dedicated support line during business hours."
        }
      ]
    }
  ];

  const filteredFaq = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleItem = (id: number) => {
    setOpenItems(prevOpenItems => {
      const newOpenItems = new Set(prevOpenItems);
      if (newOpenItems.has(id)) {
        newOpenItems.delete(id);
      } else {
        newOpenItems.add(id);
      }
      return newOpenItems;
    });
    trackClick(`faq-toggle-${id}`, "engagement");
  };

  return (
    <>
      <SEO />
      <Head>
        <title>FAQ - Zion App</title>
        <meta name="description" content="Frequently Asked Questions about Zion App's services and solutions." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, technology, and support.
            </p>
            <div className="mt-8 max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            {filteredFaq.length > 0 ? (
              filteredFaq.map((category, catIndex) => (
                <div key={catIndex} className="mb-8 last:mb-0">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">
                    {category.category}
                  </h2>
                  {category.questions.map((item, index) => (
                    <div key={item.id} className="border-b border-gray-200 last:border-b-0 py-4">
                      <button
                        className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 hover:text-blue-600 transition-colors"
                        onClick={() => toggleItem(item.id)}
                      >
                        {item.question}
                        <span className="text-blue-600 text-xl">
                          {openItems.has(item.id) ? '−' : '+'}
                        </span>
                      </button>
                      {openItems.has(item.id) && (
                        <p className="mt-3 text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 text-lg">No FAQs found matching your search.</p>
            )}
          </section>

          {/* CTA Section */}
          <section className="text-center bg-blue-600 rounded-lg p-8 text-white mt-12">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-6">Our team is here to help. Reach out to us for personalized assistance.</p>
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}