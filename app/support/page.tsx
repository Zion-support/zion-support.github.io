import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { HelpCircle, Mail, Phone, MessageCircle, Clock, CheckCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const SupportPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const supportChannels = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      contact: "+1-302-464-0950",
      availability: "24/7 Available"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Send us an email and we'll respond quickly",
      contact: "support@ziontechgroup.com",
      availability: "Response within 2 hours"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available on website",
      availability: "Mon-Fri 9AM-6PM EST"
    }
  ];

  const faqs: FAQ[] = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive AI solutions, 5G technology implementation, cybersecurity services, cloud solutions, data analytics, mobile development, and IT consulting services."
    },
    {
      question: "How quickly can you start a project?",
      answer: "We can typically begin new projects within 1-2 weeks after initial consultation and project scoping. Rush projects may be accommodated based on availability."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-project support including maintenance, updates, monitoring, and 24/7 technical assistance for all our solutions."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing varies based on project scope, complexity, and requirements. We offer both fixed-price and hourly rate options. Contact us for a detailed quote."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise-level organizations. We tailor our solutions to meet your specific needs and budget."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in AI/ML, 5G networks, cloud platforms (AWS, Azure, GCP), cybersecurity tools, data analytics platforms, mobile development (iOS/Android), and modern web technologies."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Technical Support & Help</title>
        <meta name="description" content="Get technical support and help for Zion Tech Group's AI solutions, 5G technology, and IT services. 24/7 support available." />
        <meta name="keywords" content="technical support, help desk, AI support, 5G support, IT support, customer service" />
        <meta property="og:title" content="Support - Zion Tech Group" />
        <meta property="og:description" content="Get the help you need with our comprehensive support services." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Center</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're here to help you succeed. Get the support you need for all our AI solutions, 5G technology, and IT services.
              </p>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the best way to reach our support team for immediate assistance.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {supportChannels.map((channel, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    {channel.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className="text-cyan-400 font-semibold mb-2">{channel.contact}</p>
                  <p className="text-sm text-gray-400">{channel.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-300">
                  Find answers to common questions about our services and support.
                </p>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-600/50 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                    >
                      <span className="text-lg font-semibold text-white">{faq.question}</span>
                      <HelpCircle className={`w-5 h-5 text-cyan-400 transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`} />
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Support
                </a>
                <a
                  href="tel:+1-302-464-0950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
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