import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle, Mail, Phone, MessageCircle, BookOpen, Search, Users, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Support() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      title: "Getting Started",
      icon: <BookOpen className="w-6 h-6" />,
      questions: [
        {
          question: "How do I get started with your AI services?",
          answer: "Getting started is easy! Simply contact our team for a consultation, and we'll help you identify the best AI solutions for your business needs."
        },
        {
          question: "What is the typical implementation timeline?",
          answer: "Implementation timelines vary based on the complexity of your project. Simple solutions can be deployed in 2-4 weeks, while complex enterprise implementations may take 3-6 months."
        },
        {
          question: "Do you provide training for your solutions?",
          answer: "Yes! We provide comprehensive training for all our solutions, including documentation, video tutorials, and live training sessions with our experts."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: <HelpCircle className="w-6 h-6" />,
      questions: [
        {
          question: "What are your support hours?",
          answer: "We provide 24/7 support for all our enterprise clients. Standard support is available Monday-Friday, 9 AM - 6 PM EST."
        },
        {
          question: "How do I report a technical issue?",
          answer: "You can report issues through our support portal, email support@ziontechgroup.com, or call our technical support hotline. We'll respond within 2 hours for critical issues."
        },
        {
          question: "Do you offer remote assistance?",
          answer: "Yes, our technical team can provide remote assistance to help troubleshoot and resolve issues quickly and efficiently."
        }
      ]
    },
    {
      title: "Billing & Account",
      icon: <Users className="w-6 h-6" />,
      questions: [
        {
          question: "How does your pricing work?",
          answer: "Our pricing is based on usage and features. We offer flexible plans starting from basic packages to enterprise solutions. Contact our sales team for a custom quote."
        },
        {
          question: "Can I upgrade or downgrade my plan?",
          answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, bank transfers, and for enterprise clients, we can arrange custom payment terms."
        }
      ]
    }
  ];

  const supportChannels = [
    {
      title: "Support Portal",
      description: "Access our comprehensive knowledge base and submit tickets",
      icon: <HelpCircle className="w-8 h-8" />,
      response: "24/7 access",
      action: "Visit Portal"
    },
    {
      title: "Email Support",
      description: "Send us detailed questions and receive expert responses",
      icon: <Mail className="w-8 h-8" />,
      response: "Within 2 hours",
      action: "Send Email"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical support team",
      icon: <Phone className="w-8 h-8" />,
      response: "Immediate",
      action: "Call Now"
    },
    {
      title: "Live Chat",
      description: "Get instant help through our live chat system",
      icon: <MessageCircle className="w-8 h-8" />,
      response: "Real-time",
      action: "Start Chat"
    }
  ];

  const resources = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API documentation",
      icon: <BookOpen className="w-6 h-6" />,
      link: "/tutorials"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for all features",
      icon: <MessageCircle className="w-6 h-6" />,
      link: "/tutorials"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and share experiences",
      icon: <Users className="w-6 h-6" />,
      link: "/contact"
    },
    {
      title: "Status Page",
      description: "Real-time system status and incident updates",
      icon: <CheckCircle className="w-6 h-6" />,
      link: "/contact"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta
          name="description"
          content="Get help and support for all Zion Tech Group services. Access documentation, contact support, and find answers to common questions."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Support Center
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're here to help! Get the support you need to make the most of our AI and IT solutions.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, tutorials, or FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Channels */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Support
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the support channel that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group text-center"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {channel.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {channel.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {channel.description}
                </p>
                
                <div className="text-cyan-400 font-semibold mb-4">
                  {channel.response}
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 group-hover:scale-105">
                  {channel.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-slate-800/30 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Find answers to common questions about our services
              </p>
            </div>

            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center mb-6">
                    <div className="text-cyan-400 mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.questions.map((faq, faqIndex) => (
                      <div
                        key={faqIndex}
                        className="bg-slate-700/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                      >
                        <h4 className="text-lg font-semibold text-white mb-3">
                          {faq.question}
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive learning and support resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Link
                key={index}
                to={resource.link}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-gray-300 text-sm">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Support CTA */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Our support team is ready to assist you with any questions or issues you may have.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Contact Support</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}