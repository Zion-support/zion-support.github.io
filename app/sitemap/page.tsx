import React from 'react'
const SitemapPage: React.FC = () => {
  const pages = [
    { path: '/', title: 'Home', description: 'Zion Tech Group - Advanced AI and IT Solutions' },
    { path: '/about', title: 'About Us', description: 'Learn about our mission and expertise' },
    { path: '/services', title: 'All Services', description: 'Comprehensive AI, IT, and micro SAAS solutions' },
    { path: '/micro-saas', title: 'Micro SAAS Solutions', description: 'Affordable, powerful AI-driven tools for modern businesses' },
    { path: '/ai-services', title: 'AI Services', description: 'Advanced artificial intelligence solutions' },
    { path: '/ai-marketing', title: 'AI Marketing', description: 'Revolutionary AI-powered marketing automation' },
    { path: '/ai-automation', title: 'AI Automation', description: 'Intelligent automation of business processes' },
    { path: '/ai-healthcare', title: 'AI Healthcare', description: 'Cutting-edge AI solutions for medical applications' },
    { path: '/ai-fintech', title: 'AI Fintech', description: 'Revolutionary AI-powered financial services' },
    { path: '/it-services', title: 'IT Services', description: 'Comprehensive IT solutions and infrastructure' },
    { path: '/quantum-computing', title: 'Quantum Computing', description: 'Next-generation quantum computing capabilities' },
    { path: '/autonomous-systems', title: 'Autonomous Systems', description: 'Self-managing and self-optimizing systems' },
    { path: '/business-intelligence', title: 'Business Intelligence', description: 'Data-driven insights and analytics' },
    { path: '/blockchain-web3', title: 'Blockchain & Web3', description: 'Decentralized applications and smart contracts' },
    { path: '/iot-edge-computing', title: 'IoT & Edge Computing', description: 'Connected devices and edge analytics' },
    { path: '/cybersecurity', title: 'Cybersecurity', description: 'Advanced security services and threat detection' },
    { path: '/services-advertising', title: 'AI Advertising', description: 'AI-powered advertising and marketing solutions' },
    { path: '/case-studies', title: 'Case Studies', description: 'Success stories and client implementations' },
    { path: '/enterprise', title: 'Enterprise Solutions', description: 'Advanced AI and IT solutions for large organizations' },
    { path: '/team', title: 'Our Team', description: 'Meet the experts behind our innovative solutions' },
    { path: '/contact', title: 'Contact Us', description: 'Get in touch with our team of experts' },
    { path: '/blog', title: 'Blog & Insights', description: 'Latest insights and trends in AI and technology' },
    { path: '/guides', title: 'Technical Guides', description: 'Comprehensive guides and documentation' },
    { path: '/privacy', title: 'Privacy Policy', description: 'Our privacy policy and data protection practices' },
    { path: '/terms', title: 'Terms of Service', description: 'Terms and conditions for our services' },
  ];
import React from "react";

const Sitemap: React.FC = () => {
  const features = [
    {
      icon: "🚀",
      title: "Professional",
      description: "Professional sitemap solutions"
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
            Sitemap
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional sitemap solutions tailored to your business needs
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




export default Sitemap;
}