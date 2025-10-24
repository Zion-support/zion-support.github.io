import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ChevronDown, ChevronUp } from 'lucide-react'
const FAQPage: React.FC = () => {
const [openItems, setOpenItems] = useState<number[]>([])
const toggleItem = (index: number) => {
setOpenItems(prev =>
prev.includes(index)
? prev.filter(item => item !== index)
: [...prev, index]
)
}
const faqs = [
{
question: "What AI services do you offer?",
answer: "We offer comprehensive AI services including marketing automation, customer support, data analytics, content generation, healthcare solutions, financial services, e-commerce solutions, cybersecurity, mobile apps, sales automation, workflow automation, and data visualization."
},
{
question: "How can AI benefit my business?",
answer: "AI can automate repetitive tasks, provide data-driven insights, improve customer experience, enhance security, optimize operations, and drive innovation. Our solutions typically deliver 300% ROI within the first year."
},
{
question: "Do you provide IT infrastructure services?",
answer: "Yes, we offer complete IT infrastructure services including cloud migration, DevOps, database management, cybersecurity, managed IT services, and IT consulting to modernize your technology stack."
},
{
question: "What is your pricing model?",
answer: "We offer flexible pricing models including subscription-based plans starting at $99/month for small businesses, custom enterprise solutions, and project-based pricing. Contact us for a personalized quote."
},
{
question: "Do you offer 24/7 support?",
answer: "Yes, we provide 24/7 technical support for all our services. Our support team is available via phone, email, and live chat to ensure your systems run smoothly around the clock."
},
{
question: "How long does implementation take?",
answer: "Implementation timelines vary based on project complexity. Simple AI solutions can be deployed in 2-4 weeks, while comprehensive digital transformation projects may take 3-6 months. We provide detailed timelines during consultation."
},
{
question: "Do you work with small businesses?",
answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise organizations. Our micro SAAS solutions are specifically designed for small businesses looking to leverage AI technology."
},
{
question: "What industries do you serve?",
answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, real estate, legal, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards."
}
];
"use client";
import React from "react";

const Faq = () => {
  const features = [
    {
      icon: "🚀",
      title: "Professional",
      description: "Professional faq solutions"
    },
    {
      icon: "⚡",
      title: "Fast & Reliable",
      description: "Quick and efficient service delivery"
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Comprehensive analytics and insights"
    },
    {
      icon: "🔧",
      title: "Customizable",
      description: "Tailored solutions for your business needs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Faq
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional faq solutions tailored to your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-300">
              Everything you need for success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let us help you implement this solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your Project
            </a>
            <a
              href="/about"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;

export default PagePage;