<<<<<<< HEAD
"use client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  CheckCircle,
  Search,
  HelpCircle,
} from "lucide-react";
=======
import React from "react";
import SEOHead from "../components/SEOHead";
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const supportChannels = [
    {
<<<<<<< HEAD
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      contact: "+1 (555) 123-4567",
      hours: "24/7 Available",
      responseTime: "Immediate",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed assistance via email",
      contact: "support@ziontechgroup.com",
      hours: "24/7 Available",
      responseTime: "Within 2 hours",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available on website",
      hours: "Mon-Fri 9AM-6PM EST",
      responseTime: "Within 5 minutes",
    },
=======
      title: "Technical Support",
      description: "Get help with technical issues and integration problems",
      icon: "🔧",
      responseTime: "2-4 hours",
      availability: "24/7",
    },
    {
      title: "Account Support",
      description:
        "Assistance with billing, account management, and subscriptions",
      icon: "👤",
      responseTime: "1-2 hours",
      availability: "Business Hours",
    },
    {
      title: "Sales Support",
      description: "Help choosing the right plan and custom solutions",
      icon: "💼",
      responseTime: "1 hour",
      availability: "Business Hours",
    },
    {
      title: "Emergency Support",
      description: "Critical issues affecting your production environment",
      icon: "🚨",
      responseTime: "15 minutes",
      availability: "24/7",
    },
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
  ];

  const faqs = [
    {
      question: "How do I get started with your AI services?",
      answer:
<<<<<<< HEAD
        "Getting started is easy! Contact our team for a free consultation where we assess your needs and create a customized implementation plan.",
      category: "getting-started",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity, but most AI implementations take 4-12 weeks from start to completion.",
      category: "project-management",
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer:
        "Yes, we offer comprehensive support packages including monitoring, maintenance, and updates to ensure optimal performance.",
      category: "support",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Absolutely! We specialize in seamless integration with existing infrastructure and can work with most platforms and technologies.",
      category: "integration",
    },
    {
      question: "What security measures do you have in place?",
      answer:
        "We implement enterprise-grade security including encryption, access controls, and compliance with industry standards like SOC 2 and GDPR.",
      category: "security",
    },
    {
      question: "Do you offer training for our team?",
      answer:
        "Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the implemented solutions.",
      category: "training",
=======
        "Simply sign up for an account, choose your plan, and follow our quick start guide. Our team is available to help with integration.",
    },
    {
      question: "What is your uptime guarantee?",
      answer:
        "We guarantee 99.9% uptime for all our services. If we fall below this, you're eligible for service credits.",
    },
    {
      question: "Can I change my plan anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.",
    },
    {
      question: "Do you offer custom solutions?",
      answer:
        "Absolutely! We work with enterprise clients to create custom AI and IT solutions tailored to their specific needs.",
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
    },
  ];

  const categories = [
    { id: "all", name: "All Topics" },
    { id: "getting-started", name: "Getting Started" },
    { id: "project-management", name: "Project Management" },
    { id: "support", name: "Support" },
    { id: "integration", name: "Integration" },
    { id: "security", name: "Security" },
    { id: "training", name: "Training" },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta
          name="description"
          content="Get help and support for our AI and IT solutions. Find answers to common questions, contact our support team, and access resources."
        />
        <meta
          name="keywords"
          content="support, help, FAQ, contact support, technical support, customer service"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Can We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Help?
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get help and support for our AI and IT solutions. Find answers to
              common questions, contact our support team, and access resources.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 px-4">
          {" "}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {channel.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{channel.description}</p>
                  <div className="space-y-3">
                    <div>
                      <span className="text-purple-400 font-semibold">
                        Contact:
                      </span>
                      <span className="text-gray-300 ml-2">
                        {channel.contact}
                      </span>
                    </div>
                    <div>
                      <span className="text-purple-400 font-semibold">
                        Hours:
                      </span>
                      <span className="text-gray-300 ml-2">
                        {channel.hours}
                      </span>
                    </div>
                    <div>
                      <span className="text-purple-400 font-semibold">
                        Response:
                      </span>
                      <span className="text-gray-300 ml-2">
                        {channel.responseTime}
                      </span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                    Contact Now
                  </button>{" "}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our services and
                solutions.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6"
                >
                  {" "}
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  No results found
                </h3>
                <p className="text-gray-300">
                  Try adjusting your search terms or category filter.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to
              help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Call
              </button>
=======
      <SEOHead
        title="Support Center - Zion Tech Group"
        description="Get help and support for all our AI and IT solutions. 24/7 customer support available."
        keywords="support, help, customer service, technical support, contact support"
        canonicalUrl="https://ziontechgroup.com/support"
      />

      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help you succeed with our AI and IT solutions. Get
              the support you need, when you need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {option.title}
                </h3>
                <p className="text-gray-400 mb-4">{option.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium text-purple-400">
                      {option.responseTime}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Availability:</span>
                    <span className="font-medium text-cyan-400">
                      {option.availability}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Contact Support
              </h2>
              <div className="space-y-6">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    📞 Phone Support
                  </h3>
                  <p className="text-gray-400 mb-2">
                    Call us for immediate assistance
                  </p>
                  <a
                    href="tel:+13024640950"
                    className="text-purple-400 hover:text-purple-300 font-medium"
                  >
                    +1 (302) 464-0950
                  </a>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    ✉️ Email Support
                  </h3>
                  <p className="text-gray-400 mb-2">
                    Send us a detailed message
                  </p>
                  <a
                    href="mailto:support@ziontechgroup.com"
                    className="text-purple-400 hover:text-purple-300 font-medium"
                  >
                    support@ziontechgroup.com
                  </a>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    💬 Live Chat
                  </h3>
                  <p className="text-gray-400 mb-2">
                    Chat with our support team in real-time
                  </p>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Start Chat
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {faq.question}
                    </h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our emergency support team is available 24/7 for critical issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Emergency Line
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Submit Ticket
              </a>
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;
