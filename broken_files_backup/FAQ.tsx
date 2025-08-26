          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our AI solutions, services, and technology offerings.
            Can't find what you're looking for? Our team is here to help.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-200"
              >
                <div className="flex items-start">
                  <HelpCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-white">{item.question}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {expandedItems.has(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {expandedItems.has(index) && (
                <div className="px-6 pb-4 border-t border-gray-700">
                  <p className="text-gray-300 leading-relaxed mt-4">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">No questions found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion key={index} className="bg-white/10 backdrop-blur-md border-white/20 rounded-lg">
                <AccordionItem className="">
                  <AccordionTrigger className="text-left px-6 py-4 text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Still Have Questions?</h2>
            <p className="text-xl text-gray-300 mb-8">Can't find the answer you're looking for? Our team is here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">Contact Us</a>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">Call Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { ChevronDown, ChevronUp } from 'lucide-react';
const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const faqItems = [
    {
      id: 1,
      question: "What services does Zion Tech Group offer?",
      answer: "Zion Tech Group offers a comprehensive range of technology services including AI & Machine Learning, Cloud & DevOps, Cybersecurity, Digital Transformation, Micro SAAS Services, and Enterprise Solutions. We also provide talent matching and equipment solutions."
    },
    {
      id: 2,
      question: "How do I get started with Zion Tech Group?",
      answer: "Getting started is easy! You can contact us through our contact form, request a free quote, or schedule a consultation. Our team will assess your needs and recommend the best solutions for your business."
    },
    {
      id: 3,
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and technology. Our solutions are adaptable to any industry that can benefit from digital transformation and AI integration."
    },
    {
      id: 4,
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we provide 24/7 support and maintenance for all our solutions. We offer different support tiers to meet your specific needs, from basic maintenance to comprehensive managed services."
    },
    {
      id: 5,
      question: "What is your pricing structure?",
      answer: "Our pricing varies based on the scope and complexity of your project. We offer flexible pricing models including project-based, subscription-based, and custom enterprise solutions. Contact us for a personalized quote."
    },
    {
      id: 6,
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity. Simple implementations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      id: 7,
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. Our Micro SAAS Services are specifically designed for small to medium businesses looking to scale efficiently."
    },
    {
      id: 8,
      question: "What makes Zion Tech Group different from other providers?",
      answer: "We combine cutting-edge AI technology with deep industry expertise, offer personalized solutions rather than one-size-fits-all approaches, provide comprehensive end-to-end services, and maintain a strong focus on innovation and customer success."
    }
  ];
  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <SEO
        title="FAQ - Zion Tech Group"
        description="Frequently asked questions about Zion's AI marketplace, IT services, and equipment solutions."
        keywords="FAQ, frequently asked questions, Zion, AI marketplace, IT services, support"
        canonical="https://ziontechgroup.com/faq"
      />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and how we can help transform your business
          </p>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg border border-white/10 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-white hover:bg-slate-700/50 transition-colors duration-300"
                >
                  <span className="text-lg font-medium">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find the answer you're looking for? Our team is here to help.
            Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@ziontechgroup.com"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default FAQ;
import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import { SEO } from '@/components/SEO';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function FAQ() {
  const faqs = [
    {
}
const faqData: FAQItem[] = [
  {
    question: "What is Zion Tech Group?",
    answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented AI specialists, innovative companies, and cutting-edge technological solutions in one seamless ecosystem.",
    category: "General"
  },
  {
    question: "How does the marketplace work?",
    answer: "Our marketplace allows businesses to find AI talent, services, and equipment, while professionals can showcase their skills and find opportunities. Users can browse categories, post requirements, and connect directly with providers.",
    category: "Marketplace"
  },
  {
    question: "Is it really free to use?",
    answer: "Yes! Zion is completely free to use for both talent and clients. We believe in democratizing access to AI and technology solutions by removing financial barriers.",
    category: "Pricing"
  },
  {
    question: "What types of services are available?",
    answer: "We offer a wide range of services including AI development, machine learning consulting, software development, IT support, data analysis, and specialized equipment rentals. Our categories cover everything from basic IT support to advanced AI solutions.",
    category: "Services"
  },
  {
    question: "How do I find the right talent for my project?",
    answer: "You can browse our talent directory, use our AI matcher tool, or post a job listing. Our platform includes detailed profiles, reviews, and portfolio showcases to help you make informed decisions.",
    category: "Talent"
  },
  {
    question: "What qualifications do your talent have?",
    answer: "All talent on our platform undergoes verification processes. We showcase verified professionals with proven track records, portfolios, and client testimonials to ensure quality.",
    category: "Talent"
  },
  {
    question: "How do payments work?",
    answer: "We offer secure payment processing through our platform. Clients can pay for services using various methods, and we ensure secure transactions with escrow protection for larger projects.",
    category: "Payments"
  },
  {
    question: "What if I'm not satisfied with a service?",
    answer: "We have a comprehensive dispute resolution system. If you're not satisfied, you can contact our support team, and we'll work to resolve the issue fairly for all parties involved.",
    category: "Support"
  },
  {
    question: "Do you offer enterprise solutions?",
    answer: "Yes! We provide enterprise-grade solutions for larger organizations, including dedicated support, custom integrations, and specialized service packages tailored to enterprise needs.",
    category: "Enterprise"
  },
  {
    question: "How do I get started as a talent provider?",
    answer: "Simply sign up for an account, complete your profile with your skills and experience, upload your portfolio, and start receiving project requests. Our onboarding process is designed to be quick and easy.",
    category: "Talent"
  },
  {
    question: "What security measures do you have?",
    answer: "We implement enterprise-grade security including SSL encryption, secure authentication, and regular security audits. Your data and transactions are protected with industry-standard security protocols.",
    category: "Security"
  },
  {
    question: "Can I hire for long-term projects?",
    answer: "Absolutely! We support both short-term and long-term engagements. Many of our clients hire talent for ongoing projects, and we provide tools to manage long-term relationships effectively.",
    category: "Projects"
  },
  {
    question: "Do you offer mobile access?",
    answer: "Yes! We have a mobile app available for both iOS and Android, allowing you to manage projects, communicate with talent, and access the marketplace on the go.",
    category: "Mobile"
  },
  {
    question: "What makes Zion different from other platforms?",
    answer: "Zion is unique because we're completely free, focus specifically on AI and high-tech, offer comprehensive verification, and provide an integrated ecosystem for talent, services, and equipment all in one place.",
    category: "General"
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team through our contact page, email support, or live chat. We typically respond within 24 hours and offer priority support for enterprise clients.",
    category: "Support"
  }
];
const categories = ["General", "Marketplace", "Services", "Talent", "Pricing", "Payments", "Projects", "Enterprise", "Security", "Support", "Mobile"];
export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };
  const filteredFAQs = selectedCategory === "All"
    ? faqData
    : faqData.filter(faq => faq.category === selectedCategory);
      category: "General",
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect businesses with skilled AI professionals, tech services, and cutting-edge equipment."
        },
        {
          question: "Is Zion really free to use?",
          answer: "Yes! Zion is completely free to use. We don't charge any subscription fees or hidden costs. Our platform is designed to democratize access to AI and tech talent."
        },
        {
          question: "How do I get started on Zion?",
          answer: "Getting started is easy! Simply create an account, choose whether you're looking for services or offering them, and start exploring our marketplace. You can browse talent, post jobs, or list your services immediately."
import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MessageCircle, Users, Shield, CreditCard, Zap } from "lucide-react";
export default function FAQ() {
  const faqData = [
    {
      category: "General",
      icon: Search,
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect businesses with top AI and tech talent, services, and equipment in one comprehensive platform."
        },
        {
          question: "How does Zion work?",
          answer: "Zion operates as a two-sided marketplace where businesses can find and hire AI/tech professionals, purchase services, and acquire equipment. Talented individuals can showcase their skills, offer services, and find opportunities."
        },
        {
          question: "Is Zion really free to use?",
          answer: "Yes! Zion is completely free for both businesses and talent. We believe in democratizing access to AI and tech resources, so there are no subscription fees or hidden costs."
        }
      ]
    },
    {
      category: "For Businesses",
      icon: Users,
      questions: [
        {
          question: "How do I find the right talent for my project?",
          answer: "You can browse our talent directory, use our AI-powered matching system, or post a job listing. Our platform includes detailed profiles, portfolios, and reviews to help you make informed decisions."
        },
        {
          question: "What types of services can I find on Zion?",
          answer: "Zion offers a wide range of services including AI development, software engineering, data science, IT consulting, equipment sales, and specialized tech solutions across various industries."
        },
        {
          question: "How do I ensure quality when hiring through Zion?",
          answer: "All talent on Zion undergoes verification processes. You can review portfolios, check ratings and reviews, conduct interviews, and use our milestone-based payment system for added security."
        }
      ]
    },
    {
      category: "For Talent",
      icon: Zap,
      questions: [
        {
          question: "How do I create a profile on Zion?",
          answer: "Sign up for free and complete your profile with your skills, experience, portfolio, and rates. You can also add certifications, previous work samples, and professional references."
        },
        {
          question: "What are the payment terms?",
          answer: "Zion uses milestone-based payments to ensure both parties are protected. Payments are released upon project completion or milestone approval, with secure escrow services available."
        },
        {
          question: "Can I work with international clients?",
          answer: "Yes! Zion is a global platform. You can work with clients from anywhere in the world, and our platform handles currency conversion and international payment processing."
        }
      ]
    },
    {
      category: "Security & Trust",
      icon: Shield,
      questions: [
        {
          question: "How does Zion protect my data?",
          answer: "We use enterprise-grade security measures including end-to-end encryption, secure payment processing, and strict data protection policies. Your information is never shared without consent."
        },
        {
          question: "What happens if there's a dispute?",
          answer: "Zion has a comprehensive dispute resolution system. Our support team mediates conflicts, and we offer arbitration services for complex cases to ensure fair outcomes for all parties."
        },
        {
          question: "Is my payment information secure?",
          answer: "Absolutely. We use industry-standard SSL encryption and PCI DSS compliance for all payment processing. We never store your full payment details on our servers."
        }
      ]
    },
    {
      category: "Billing & Payments",
      icon: CreditCard,
      questions: [
        {
          question: "What payment methods does Zion accept?",
          answer: "We accept major credit cards, bank transfers, and digital wallets. For enterprise clients, we also offer invoicing and payment terms."
        },
        {
          question: "Are there any transaction fees?",
          answer: "Zion charges a small percentage fee on completed transactions to maintain our platform. This fee is transparent and clearly displayed before any transaction."
        },
        {
          question: "How quickly do I receive payments?",
          answer: "Payments are typically processed within 1-3 business days after project completion or milestone approval, depending on your chosen payment method."
        }
      ]
    },
    {
      category: "Support",
      icon: MessageCircle,
      questions: [
        {
          question: "How can I get help if I need support?",
          answer: "Our support team is available 24/7 through live chat, email at support@ziontechgroup.com, and phone support. We also have an extensive help center with tutorials and guides."
        },
        {
          question: "Does Zion offer training or onboarding?",
          answer: "Yes! We provide comprehensive onboarding for new users, including video tutorials, best practices guides, and one-on-one sessions with our success team."
        },
        {
          question: "Can I schedule a demo of Zion's features?",
          answer: "Absolutely! We offer personalized demos for businesses and talent. Contact our sales team to schedule a walkthrough of our platform's capabilities."
        }
      ]
    }
  ];
      question: "How does the AI matching work?",
      answer: "Our AI matching algorithm analyzes your requirements and preferences to match you with the most compatible talent or services. The process takes into account skills, experience, availability, and past performance to ensure optimal results."
    },
    {
      question: "How do I hire someone on Zion?",
      answer: "To hire talent on Zion, post a job or project, review matches or applications, interview candidates through our platform, and extend an offer. Our secure payment system protects both parties throughout the engagement."
    },
    {
      question: "What are the payment terms?",
      answer: "Zion offers flexible payment options including milestone-based payments, hourly rates, or fixed project fees. Funds are held in escrow until deliverables are approved, ensuring security for both clients and talent."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach our support team through the chat widget at the bottom right of any page, by emailing support@ziontechgroup.com, or by scheduling a call with our team through our contact page."
    },
    {
      question: "Is Zion really free to use?",
      answer: "Yes! Zion is completely free for both talent and clients. We believe in democratizing access to AI and technology solutions, so there are no platform fees or hidden costs."
    },
    {
      question: "How do I create a talent profile?",
      answer: "Sign up for an account, choose 'Talent' during registration, and complete your profile with your skills, experience, portfolio, and availability. Our AI will help optimize your profile for better matches."
    },
    {
      question: "What types of services can I find on Zion?",
      answer: "Zion offers a wide range of AI and technology services including software development, AI consulting, data science, cloud infrastructure, cybersecurity, and specialized equipment. We cover the full spectrum of tech needs."
    },
    {
      question: "How does the dispute resolution work?",
      answer: "If there's a disagreement between parties, our dedicated support team will mediate the situation. We review all communications and deliverables to ensure fair resolution for both parties."
    },
    {
      question: "Can I work with international clients/talent?",
      answer: "Absolutely! Zion is a global platform. You can work with clients and talent from anywhere in the world, expanding your opportunities and access to diverse skill sets."
    },
    {
      question: "How do I get paid as a talent?",
      answer: "Once your work is approved by the client, funds are released from escrow to your Zion wallet. You can then withdraw to your bank account or use the funds for other services on the platform."
    }
  ];
  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about Zion Tech Group's AI and technology marketplace. Learn how our platform works, pricing, and how to get started."
        keywords="FAQ, frequently asked questions, Zion Tech Group, AI marketplace, tech services, support"
        canonical="https://ziontechgroup.com/faq"
      />
      <Header />
        description="Find answers to common questions about Zion's AI and technology marketplace platform."
        keywords="FAQ, frequently asked questions, Zion marketplace, AI platform, tech services"
        canonical="https://ziontechgroup.com/faq"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to the most common questions about Zion Tech Group and our marketplace
            </p>
          </div>
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === "All"
                    ? "bg-zion-purple text-white"
                    : "bg-zion-blue-dark text-zion-slate-light hover:bg-zion-purple/20 hover:text-zion-cyan"
        description="Find answers to common questions about Zion Tech Group, the world's first free AI and tech marketplace. Learn how to use our platform, find talent, and get started."
        keywords="FAQ, help, support, Zion Tech Group, AI marketplace, tech services, questions, answers"
        canonical="https://ziontechgroup.com/faq"
      />
      <div className="min-h-screen bg-zion-blue-dark">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Find answers to the most common questions about Zion Tech Group and our AI marketplace platform.
            </p>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
              />
            </div>
          </div>
        </section>
        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-zion-purple text-white'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
                }`}
              >
                All Categories
              </button>
      question: "What is Zion Tech Group?",
      answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented professionals with businesses and individuals seeking AI and tech services, equipment, and expertise."
    },
    {
      question: "How do I get started on Zion?",
      answer: "Getting started is easy! Simply create an account, choose whether you're a talent (service provider) or client (service seeker), complete your profile, and start exploring opportunities or posting projects."
    },
    {
      question: "What services can I find on Zion?",
      answer: "Zion offers a wide range of services including AI development, software engineering, data science, IT consulting, equipment rental, and specialized tech services. Our platform covers everything from basic IT support to cutting-edge AI solutions."
    },
    {
      question: "How does the talent matching work?",
      answer: "Our AI-powered matching system analyzes your project requirements and matches you with the most suitable talent based on skills, experience, availability, and past performance. You can also browse talent profiles directly."
    },
    {
      question: "Is Zion really free to use?",
      answer: "Yes! Zion is completely free for both talent and clients. We believe in democratizing access to tech talent and services. There are no hidden fees or subscription costs."
    },
    {
      question: "How do I ensure quality of work?",
      answer: "Zion features a comprehensive review and rating system, portfolio showcases, and verified profiles. You can review past work, check references, and communicate directly with talent before hiring."
    },
    {
      question: "What payment methods are accepted?",
      answer: "Zion supports multiple payment methods including credit cards, bank transfers, and digital wallets. All payments are processed securely through our platform with escrow protection for your peace of mind."
    },
    {
      question: "Can I hire talent for long-term projects?",
      answer: "Absolutely! Zion supports both short-term and long-term engagements. You can hire talent for one-time projects, ongoing work, or full-time positions depending on your needs."
    },
    {
      question: "How do I protect my intellectual property?",
      answer: "Zion includes built-in IP protection through our terms of service and contract templates. All agreements clearly define ownership rights, confidentiality requirements, and data protection measures."
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "Zion has a dispute resolution system in place. If you're not satisfied with the work, our team will help mediate the situation and ensure fair resolution for all parties involved."
    },
    {
      question: "Do you offer enterprise solutions?",
      answer: "Yes! Zion provides enterprise-grade solutions for larger organizations, including dedicated account management, custom integrations, bulk hiring capabilities, and specialized support services."
    },
    {
      question: "How can I stay updated with Zion news?",
      answer: "Subscribe to our newsletter, follow us on social media, or check our blog regularly for updates on new features, success stories, and industry insights."
    }
  ];
  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <SEO
        title="FAQ - Zion Tech Group"
        description="Find answers to frequently asked questions about Zion Tech Group, the world's first free AI and tech marketplace."
        keywords="FAQ, Zion Tech Group, AI marketplace, tech services, help, support"
        canonical="https://ziontechgroup.com/faq"
      />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-zion-slate-light">
              Everything you need to know about Zion Tech Group
            </p>
          </div>
          <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-zion-blue-light">
                  <AccordionTrigger className="text-left text-white hover:text-zion-cyan transition-colors">
              Find answers to the most common questions about Zion's AI and technology marketplace
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-16">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-zion-blue-light">
                  <AccordionTrigger className="text-left text-white hover:text-zion-cyan">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zion-slate-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
  return (
    <>
      <SEO
        title="Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about Zion Tech Group, the world's first free AI and tech marketplace."
        keywords="FAQ, help, support, Zion Tech Group, AI marketplace, tech services"
        canonical="https://ziontechgroup.com/faq"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Everything you need to know about Zion Tech Group, the world's premier AI and tech marketplace
            </p>
          </div>
          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqData.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-zion-blue-dark border-zion-blue-light">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-zion-cyan">
                    <category.icon className="h-6 w-6" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, itemIndex) => (
                      <AccordionItem key={itemIndex} value={`item-${categoryIndex}-${itemIndex}`}>
                        <AccordionTrigger className="text-left text-white hover:text-zion-cyan">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-zion-slate-light">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Contact Support */}
          <div className="mt-16 text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
              <p className="text-zion-slate-light mb-6">
                Our support team is here to help you get the most out of Zion Tech Group
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple hover:bg-zion-purple-light text-white font-medium rounded-lg transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Email Support
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-purple hover:bg-zion-purple/10 font-medium rounded-lg transition-colors"
                >
          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zion-blue-light/20 transition-colors"
                >
                  <span className="text-white font-medium text-lg">{faq.question}</span>
                  {openItems.has(index) ? (
                    <ChevronUp className="h-5 w-5 text-zion-cyan" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-zion-cyan" />
                  )}
                </button>
                {openItems.has(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-zion-slate-light leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
              <p className="text-zion-slate-light mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors"
              >
                Contact Support
              </a>
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Still have questions?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you get the answers you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white" asChild>
                <Link to="/help">Help Center</Link>
              </Button>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
import React from 'react';
import { SEO } from "@/components/SEO";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Frequently Asked Questions - Zion Tech Group"
        description="Find answers to common questions about Zion Tech Group's AI and tech marketplace services."
        keywords="FAQ, help, support, Zion Tech Group, AI marketplace, tech services"
        canonical="https://ziontechgroup.com/faq"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Find answers to the most common questions about Zion Tech Group's marketplace, services, and platform.
          </p>
        </div>
        <FaqSection />
      </div>
      <Footer />
    </div>
  );
}
              {faqs.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    activeCategory === category.category
                      ? 'bg-zion-purple text-white'
                      : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
            {/* FAQ Accordion */}
            <div className="max-w-4xl mx-auto">
              {filteredFaqs.map((category) => (
                <div key={category.category} className="mb-12">
                  <h2 className="text-2xl font-bold text-zion-cyan mb-6 text-center">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${category.category}-${index}`}
                        className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left text-white hover:text-zion-cyan py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-zion-slate-light pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
            {/* Still Have Questions */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-zion-slate-light mb-6">
                Can't find what you're looking for? Our support team is here to help.
          <div className="mt-12 text-center">
            <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-zion-slate-light mb-6">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="/blog"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-purple font-medium rounded-lg hover:bg-zion-purple/10 transition-colors"
                >
                  Visit Our Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
    </>
  );
}
    </>
  );
}
