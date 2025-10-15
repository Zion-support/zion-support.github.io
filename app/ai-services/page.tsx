import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import NeonButton from '../components/NeonButton';

const AIServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, and custom AI solutions." />
        <meta name="keywords" content="AI services, machine learning, natural language processing, computer vision, AI consulting" />
      </Helmet>
      
      <FuturisticBackground className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge <span className="text-cyan-400 font-semibold">artificial intelligence solutions</span> 
              designed for the modern digital world
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <NeonButton to="/contact" variant="primary" size="lg">
                Get Started
              </NeonButton>
              <NeonButton to="/pricing" variant="secondary" size="lg">
                View Pricing
              </NeonButton>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.aiServices.map((service) => (
                <FuturisticCard key={service.id} glowColor="cyan" className="group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        ${service.pricing.basic}
                      </span>
                      <span className="text-gray-400 text-sm ml-1">/month</span>
                    </div>
                    <a 
                      href={service.contactInfo.website} 
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors"
                    >
                      Learn More →
                    </a>
                  </div>

                  <NeonButton to="/contact" variant="primary" className="w-full">
                    Get Started
                  </NeonButton>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
                AI Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI can transform your industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Customer Service", description: "AI-powered chatbots and support automation", icon: "🤖", color: "cyan" },
                { title: "Sales Optimization", description: "Predictive analytics and lead scoring", icon: "📈", color: "purple" },
                { title: "Content Creation", description: "Automated content generation and optimization", icon: "✍️", color: "green" },
                { title: "Process Automation", description: "Intelligent workflow automation", icon: "⚡", color: "pink" }
              ].map((useCase, index) => (
                <FuturisticCard key={index} glowColor={useCase.color as any} className="text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FuturisticCard glowColor="blue" className="p-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI solutions can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton to="/contact" variant="primary" size="lg">
                  Start Your AI Journey
                </NeonButton>
                <NeonButton to="/contact" variant="accent" size="lg">
                  Schedule Consultation
                </NeonButton>
              </div>
              <div className="mt-8 text-sm text-gray-400 space-y-2">
                <p>📞 <strong className="text-cyan-300">Phone:</strong> +1 302 464 0950</p>
                <p>✉️ <strong className="text-cyan-300">Email:</strong> kleber@ziontechgroup.com</p>
                <p>📍 <strong className="text-cyan-300">Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </FuturisticCard>
          </div>
        </section>
      </FuturisticBackground>
    </>
  );
};

export default AIServicesPage;
