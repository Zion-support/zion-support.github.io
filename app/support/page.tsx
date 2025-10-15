import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { HelpCircle, Mail, Phone, BookOpen, Users, Zap, MessageSquare, Clock, CheckCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const resources = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API references",
      icon: BookOpen,
      link: "/docs",
    },
    {
      title: "Community Forum",
      description: "Connect with other users and experts",
      icon: Users,
      link: "/community",
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      icon: Zap,
      link: "/tutorials",
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "How do I get started with your AI solutions?",
      answer: "Contact our team for a free consultation where we'll assess your needs and recommend the best AI solutions for your business. We'll guide you through the entire process from planning to implementation.",
      category: "general",
    },
    {
      question: "What support do you provide after implementation?",
      answer: "We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly. Our support includes monitoring, troubleshooting, and performance optimization.",
      category: "support",
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months. We provide detailed timelines during the planning phase.",
      category: "implementation",
    },
    {
      question: "Do you offer training for our team?",
      answer: "Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions. Training includes hands-on workshops, documentation, and ongoing support.",
      category: "training",
    },
    {
      question: "What security measures do you have in place?",
      answer: "We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.",
      category: "security",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. We specialize in seamless integration with existing systems and can work with most platforms, databases, and APIs to ensure smooth data flow and functionality.",
      category: "integration",
    },
    {
      question: "What happens if we need to scale up?",
      answer: "Our solutions are designed to scale with your business. We can easily add more capacity, features, or users as your needs grow, with minimal disruption to your operations.",
      category: "scaling",
    },
    {
      question: "Do you provide custom development?",
      answer: "Yes, we offer custom development services to create tailored solutions that meet your specific business requirements and integrate perfectly with your existing workflows.",
      category: "development",
    },
  ];

  const supportChannels = [
    {
      name: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: Phone,
      contact: "+1 302 464 0950",
      availability: "24/7",
    },
    {
      name: "Email Support",
      description: "Get detailed responses to your questions",
      icon: Mail,
      contact: "kleber@ziontechgroup.com",
      availability: "24/7",
    },
    {
      name: "Live Chat",
      description: "Instant help with our online chat system",
      icon: MessageSquare,
      contact: "Available on website",
      availability: "Business Hours",
    },
  ];

  const categories = ["all", "general", "support", "implementation", "training", "security", "integration", "scaling", "development"];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Get Help & Support</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI solutions, IT services, and 5G technology. Find answers, documentation, and contact our support team." />
        <meta name="keywords" content="support, help, documentation, FAQ, technical support, customer service" />
        <meta property="og:title" content="Support - Zion Tech Group" />
        <meta property="og:description" content="Get help and support for our technology solutions." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="responsive-section">
          <div className="responsive-container">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="responsive-hero-title mb-6">
                Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Center</span>
              </h1>
              <p className="responsive-hero-subtitle mb-8">
                Get help and support for our AI solutions, IT services, and 5G technology. 
                Find answers, documentation, and connect with our expert team.
              </p>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="responsive-section">
          <div className="responsive-container">
            <div className="text-center responsive-margin-bottom">
              <h2 className="responsive-section-title">Get in Touch</h2>
              <p className="responsive-section-subtitle">
                Choose the support channel that works best for you
              </p>
            </div>
            <div className="responsive-features-grid">
              {supportChannels.map((channel, index) => (
                <div key={index} className="responsive-card text-center">
                  <div className="responsive-icon-large bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    <channel.icon className="responsive-icon" />
                  </div>
                  <h3 className="responsive-subheading font-semibold text-white mb-2">{channel.name}</h3>
                  <p className="responsive-text text-gray-300 mb-4">{channel.description}</p>
                  <p className="text-cyan-400 font-medium mb-2">{channel.contact}</p>
                  <p className="responsive-text text-gray-400">{channel.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="responsive-section bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="responsive-container">
            <div className="text-center responsive-margin-bottom">
              <h2 className="responsive-section-title">Resources</h2>
              <p className="responsive-section-subtitle">
                Access documentation, tutorials, and community resources
              </p>
            </div>
            <div className="responsive-features-grid">
              {resources.map((resource, index) => (
                <div key={index} className="responsive-card group cursor-pointer">
                  <div className="responsive-icon-large bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="responsive-icon" />
                  </div>
                  <h3 className="responsive-subheading font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="responsive-text text-gray-300">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="responsive-section">
          <div className="responsive-container">
            <div className="text-center responsive-margin-bottom">
              <h2 className="responsive-section-title">Frequently Asked Questions</h2>
              <p className="responsive-section-subtitle">
                Find answers to common questions about our services
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="responsive-flex gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="responsive-form-input"
                  />
                </div>
                <div className="w-48">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="responsive-form-input"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* FAQ List */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div key={index} className="responsive-card">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left responsive-flex items-center justify-between"
                    >
                      <h3 className="responsive-subheading font-semibold text-white pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                          {faq.category}
                        </span>
                        <HelpCircle className={`responsive-icon text-gray-400 transition-transform ${
                          expandedFAQ === index ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </button>
                    {expandedFAQ === index && (
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="responsive-text text-gray-300 leading-relaxed">
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

        {/* CTA Section */}
        <section className="responsive-section bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="responsive-container text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="responsive-hero-title mb-6">
                Still Need Help?
              </h2>
              <p className="responsive-hero-subtitle mb-8">
                Can't find what you're looking for? Our support team is here to help. 
                Contact us directly and we'll get back to you within 24 hours.
              </p>
              
              <div className="responsive-flex gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="responsive-button responsive-button-primary group"
                >
                  <Phone className="responsive-icon mr-2" />
                  Call Support
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="responsive-button responsive-button-secondary group"
                >
                  <Mail className="responsive-icon mr-2" />
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;