import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ;
  Search,;
  MessageCircle, ;
  BookOpen, ;
  Settings, ;
  Shield, ;
  Cloud, ;
  Zap, ;
  Users,;
  ChevronRight,;
  ChevronDown,;
  ExternalLink;
} from "lucide-react"
import { SEO } from "../components/SEO"
const helpCategories = [;
  { id: 'getting-started', title: 'Getting Started' };
  { id: 'account', title: 'Account & Billing' };
  { id: 'services', title: 'Services & Features' };
  { id: 'technical', title: 'Technical Support' };
  { id: 'security', title: 'Security & Privacy' };
];
const helpSections = [;
  {;
    id: 'getting-started',title: 'Getting Started',description: 'Learn the basics and get up and running quickly',icon: BookOpen,articles: [;
      {;
        title: 'Welcome to Zion Tech Group',description: 'Your complete guide to getting started with our services',url: '/help/getting-started/welcome'
      };
      {;
        title: 'First Steps Setup',description: 'Quick setup guide for new users',url: '/help/getting-started/first-steps'
      };
      {;
        title: 'Account Configuration',description: 'Configure your account settings and preferences',url: '/help/getting-started/account-config'
      };
    ];
  };
  {;
    id: 'services',title: 'Services & Features',description: 'Explore our comprehensive range of services',icon: Cloud,articles: [;
      {;
        title: 'AI Services Overview',description: 'Understanding our AI-powered solutions',url: '/help/services/ai-overview'
      };
      {;
        title: 'Cloud Infrastructure',description: 'Cloud deployment and management guides',url: '/help/services/cloud-infrastructure'
      };
      {;
        title: 'Cybersecurity Solutions',description: 'Security features and best practices',url: '/help/services/cybersecurity'
      };
    ];
  };
  {;
    id: 'technical',title: 'Technical Support',description: 'Technical documentation and troubleshooting',icon: Settings,articles: [;
      {;
        title: 'API Documentation',description: 'Complete API reference and examples',url: '/help/technical/api-docs'
      };
      {;
        title: 'Integration Guides',description: 'Step-by-step integration tutorials',url: '/help/technical/integrations'
      };
      {;
        title: 'Troubleshooting',description: 'Common issues and solutions',url: '/help/technical/troubleshooting'
      };
    ];
  };
  {;
    id: 'security',title: 'Security & Privacy',description: 'Security features and privacy information',icon: Shield,articles: [;
      {;
        title: 'Security Best Practices',description: 'How to keep your account secure',url: '/help/security/best-practices'
      };
      {;
        title: 'Privacy Policy',description: 'Understanding your data privacy',url: '/help/security/privacy-policy'
      };
      {;
        title: 'Compliance Information',description: 'Security certifications and compliance',url: '/help/security/compliance'
      };
    ];
  };
];
const popularQuestions = [;
  {;
    question: 'How do I get started with Zion Tech Group services?',answer: 'Getting started is easy! Simply create an account, choose your service plan, and follow our step-by-step setup guide. Our team is also available for personalized onboarding assistance.',;
    category: 'getting-started'
  };
  {;
    question: 'What payment methods do you accept?',answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise clients. All payments are processed securely through our payment partners.',;
    category: 'account'
  };
  {;
    question: 'How secure are my data and applications?',answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, multi-factor authentication, and regular security audits to protect your data.',;
    category: 'security'
  };
  {;
    question: 'Do you provide 24/7 support?',answer: 'Yes! Our technical support team is available 24/7 to help you with any questions or issues. We offer multiple support channels including live chat, email, and phone support.',;
    category: 'technical'
  };
];
export default function HelpCenter() {;
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedSections, setExpandedSections] = useState(new Set(['getting-started']));
  const toggleSection = (sectionId: string) => {;
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {;
      newExpanded.delete(sectionId)
    } else {;
      newExpanded.add(sectionId),;
    };
    setExpandedSections(newExpanded),;
  },;

  const filteredQuestions = popularQuestions.filter(q => ;
    selectedCategory === 'all' || q.category === selectedCategory
  ),;

  const filteredSections = helpSections.filter(section =>;
    selectedCategory === 'all' || section.id === selectedCategory
  ),;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <SEO;
        title="Help Center - Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. Find answers to frequently asked questions, tutorials, and technical documentation."
        keywords="help center, support, FAQ, documentation, tutorials, technical support"
        canonical="https://ziontechgroup.com/help"
      />;
      ;
      {/* Hero Section */};
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <[^>]*/>
        <[^>]*/>
        ;
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-zion-cyan to-blue-400 bg-clip-text text-transparent">;
                Help Center;
              </[^>]*>
            </[^>]*>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">;
              Find answers to your questions, explore tutorials, and get the support you need to succeed with our services.;
            </[^>]*>
            ;
            {/* Search Bar */};
            <div className="max-w-2xl mx-auto">;
              <div className="relative">;
                <[^>]*/>
                <input;
                  type="text"
                  placeholder="Search for help articles, tutorials, or FAQs..."
                  value={searchQuery};
                  onChange={(e) => setSearchQuery(e.target.value)};
                  className="[^"]*"
                />;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Quick Help Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.2 }};
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              Quick Help & Support;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Get immediate assistance with common questions and find the resources you need quickly.;
            </[^>]*>
          </[^>]*>

          {/* Support Options Grid */};
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">;
            {[;
              {;
                icon: MessageCircle,title: 'Live Chat',description: 'Get instant help from our support team',color: 'from-blue-500 to-cyan-500'
              };
              {;
                icon: BookOpen,title: 'Documentation',description: 'Comprehensive guides and tutorials',color: 'from-purple-500 to-pink-500'
              };
              {;
                icon: Users,title: 'Community',description: 'Connect with other users and experts',color: 'from-green-500 to-emerald-500'
              };
              {;
                icon: Zap,title: 'Quick Start',description: 'Fast setup guides for new users',color: 'from-orange-500 to-red-500'
              };
            ].map((option, index) => (;
              <motion.div
                key={option.title};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: 0.1 * index }};
                className="[^"]*"
              >;
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-2">{option.title}</[^>]*>
                <p className="text-gray-300 text-sm">{option.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>

          {/* FAQ Section */};
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6, delay: 0.6 }};
          >;
            <div className="max-w-4xl mx-auto">;
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</[^>]*>

              {/* Category Filter */};
              <div className="flex flex-wrap justify-center gap-3 mb-8">;
                <button;
                  onClick={() => setSelectedCategory('all')};
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${;
                    selectedCategory === 'all'
                      ? 'bg-zion-cyan text-white'
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                  }`};
                >;
                  All Categories;
                </[^>]*>
                {helpCategories.map(category => (;
                  <button;
                    key={category.id};
                    onClick={() => setSelectedCategory(category.id)};
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${;
                      selectedCategory === category.id
                        ? 'bg-zion-cyan text-white'
                        : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                    }`};
                  >;
                    {category.title};
                  </[^>]*>
                ))};
              </[^>]*>

              {/* FAQ Items */};
              <div className="space-y-4">;
                {filteredQuestions.map((item, index) => (;
                  <motion.div
                    key={index};
                    initial={{ opacity: 0, y: 20 }};
                    animate={{ opacity: 1, y: 0 }};
                    transition={{ duration: 0.6, delay: 0.1 * index }};
                    className="[^"]*"
                  >;
                    <h3 className="text-lg font-semibold text-white mb-3">{item.question}</[^>]*>
                    <p className="text-gray-300">{item.answer}</[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Main Content */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid lg:grid-cols-3 gap-8">;
            {/* Help Sections */};
            <div className="lg:col-span-2">;
              <motion.div
                initial={{ opacity: 0, x: -20 }};
                animate={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.6, delay: 0.3 }};
              >;
                <h2 className="text-2xl font-bold text-white mb-6">Help Articles & Tutorials</[^>]*>
                ;
                <div className="space-y-6">;
                  {filteredSections.map((section, index) => (;
                    <motion.div
                      key={section.id};
                      initial={{ opacity: 0, y: 20 }};
                      animate={{ opacity: 1, y: 0 }};
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }};
                      className="[^"]*"
                    >;
                      <button;
                        onClick={() => toggleSection(section.id)};
                        className="[^"]*"
                      >;
                        <div className="flex items-center justify-between">;
                          <div className="flex items-center space-x-4">;
                            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">;
                              <[^>]*/>
                            </[^>]*>
                            <div>;
                              <h3 className="text-xl font-semibold text-white">{section.title}</[^>]*>
                              <p className="text-cyan-300">{section.description}</[^>]*>
                            </[^>]*>
                          </[^>]*>
                          {expandedSections.has(section.id) ? (;
                            <[^>]*/>
                          ) : (;
                            <[^>]*/>
                          )};
                        </[^>]*>
                      </[^>]*>

                      <AnimatePresence>;
                        {expandedSections.has(section.id) && (;&& (; (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }};
                            animate={{ opacity: 1, height: 'auto' }};
                            exit={{ opacity: 0, height: 0 }};
                            transition={{ duration: 0.3 }};
                            className="[^"]*"
                          >;
                            <div className="p-6 space-y-4">;
                              {section.articles.map((article, articleIndex) => (;
                                <motion.div
                                  key={article.title};
                                  initial={{ opacity: 0, x: -20 }};
                                  animate={{ opacity: 1, x: 0 }};
                                  transition={{ duration: 0.3, delay: articleIndex * 0.1 }};
                                  className="[^"]*"
                                >;
                                  <a;
                                    href={article.url};
                                    className="[^"]*"
                                  >;
                                    <div>;
                                      <h4 className="text-lg font-medium text-white group-hover:text-cyan-300 transition-colors">;
                                        {article.title};
                                      </[^>]*>
                                      <p className="text-gray-300 text-sm">{article.description}</[^>]*>
                                    </[^>]*>
                                    <[^>]*/>
                                  </[^>]*>
                                </[^>]*>
                              ))};
                            </[^>]*>
                          </[^>]*>
                        )};
                      </[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Sidebar */};
            <div className="lg:col-span-1">;
              <motion.div
                initial={{ opacity: 0, x: 20 }};
                animate={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.6, delay: 0.4 }};
                className="[^"]*"
              >;
                {/* Contact Support */};
                <div className="bg-gradient-to-r from-zion-cyan to-blue-500 rounded-2xl p-6 text-white">;
                  <h3 className="text-xl font-bold mb-4">Need More Help?</[^>]*>
                  <p className="text-blue-100 mb-6">;
                    Can't find what you're looking for? Our support team is here to help.;
                  </[^>]*>
                  <button className="w-full py-3 bg-white text-zion-cyan font-semibold rounded-lg hover:bg-gray-100 transition-colors">;
                    Contact Support;
                  </[^>]*>
                </[^>]*>

                {/* Quick Links */};
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">;
                  <h3 className="text-xl font-bold text-white mb-4">Quick Links</[^>]*>
                  <div className="space-y-3">;
                    {[;
                      { title: 'API Documentation', url: '/docs/api' };
                      { title: 'Status Page', url: '/status' };
                      { title: 'Release Notes', url: '/releases' };
                      { title: 'Security', url: '/security' };
                    ].map((link, index) => (;
                      <a;
                        key={index};
                        href={link.url};
                        className="[^"]*"
                      >;
                        {link.title};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
