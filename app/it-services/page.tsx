import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import NeonButton from '../components/NeonButton';

const ITServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, and digital transformation solutions." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, data analytics, mobile development, web development" />
      </Helmet>
      
      <FuturisticBackground className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive <span className="text-pink-400 font-semibold">IT solutions</span> to power your 
              digital transformation and business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <NeonButton to="/services" variant="primary" size="lg">
                Explore Services
              </NeonButton>
              <NeonButton to="/contact" variant="secondary" size="lg">
                Get Consultation
              </NeonButton>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Our IT Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT services designed to modernize and secure your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.itSolutions.map((service) => (
                <FuturisticCard key={service.id} glowColor="pink" className="group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                        ${service.pricing.basic}
                      </span>
                      <span className="text-gray-400 text-sm ml-1">/month</span>
                    </div>
                    <a 
                      href={service.contactInfo.website} 
                      className="text-pink-400 hover:text-pink-300 text-sm font-semibold transition-colors"
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

        {/* Technology Stack */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Our Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use cutting-edge technologies to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "AWS", icon: "☁️", color: "cyan" },
                { name: "Azure", icon: "🔷", color: "blue" },
                { name: "Google Cloud", icon: "🌐", color: "green" },
                { name: "Docker", icon: "🐳", color: "purple" },
                { name: "Kubernetes", icon: "⚙️", color: "pink" },
                { name: "React", icon: "⚛️", color: "cyan" },
                { name: "Node.js", icon: "🟢", color: "green" },
                { name: "Python", icon: "🐍", color: "yellow" },
                { name: "TypeScript", icon: "📘", color: "blue" },
                { name: "MongoDB", icon: "🍃", color: "green" },
                { name: "PostgreSQL", icon: "🐘", color: "purple" },
                { name: "Redis", icon: "🔴", color: "red" }
              ].map((tech, index) => (
                <FuturisticCard key={index} glowColor={tech.color as any} className="p-6 text-center">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-white font-semibold">{tech.name}</h3>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  step: "01", 
                  title: "Discovery & Planning", 
                  description: "We analyze your requirements and create a detailed project roadmap",
                  icon: "🔍",
                  color: "cyan"
                },
                { 
                  step: "02", 
                  title: "Design & Architecture", 
                  description: "Our team designs the solution architecture and user experience",
                  icon: "🎨",
                  color: "purple"
                },
                { 
                  step: "03", 
                  title: "Development & Testing", 
                  description: "We build and thoroughly test your solution using agile methodologies",
                  icon: "⚡",
                  color: "green"
                },
                { 
                  step: "04", 
                  title: "Deployment & Support", 
                  description: "We deploy your solution and provide ongoing maintenance and support",
                  icon: "🚀",
                  color: "pink"
                }
              ].map((process, index) => (
                <FuturisticCard key={index} glowColor={process.color as any} className="p-8 text-center">
                  <div className="text-6xl mb-4">{process.icon}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">{process.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{process.title}</h3>
                  <p className="text-gray-300">{process.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FuturisticCard glowColor="blue" className="p-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our IT solutions can modernize your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton to="/contact" variant="primary" size="lg">
                  Start Your Project
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

export default ITServicesPage;
