import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GreenITPage: React.FC = () => {
  const services = [
    {
      title: "Energy-Efficient Cloud Infrastructure",
      description: "Optimize your cloud resources to reduce energy consumption and carbon footprint.",
      features: [
        "Renewable energy-powered data centers",
        "Smart resource allocation",
        "Carbon footprint monitoring",
        "Energy usage analytics"
      ],
      icon: "☁️"
    },
    {
      title: "Sustainable AI Solutions",
      description: "AI-powered systems designed for minimal environmental impact and maximum efficiency.",
      features: [
        "Green AI algorithms",
        "Efficient model training",
        "Edge computing optimization",
        "Sustainable data processing"
      ],
      icon: "🤖"
    },
    {
      title: "Green Data Centers",
      description: "Eco-friendly data center design and management for sustainable operations.",
      features: [
        "LEED-certified facilities",
        "Waste heat recovery",
        "Water conservation",
        "Renewable energy integration"
      ],
      icon: "🏢"
    },
    {
      title: "Carbon Footprint Analytics",
      description: "Comprehensive monitoring and reporting of your IT carbon footprint.",
      features: [
        "Real-time carbon tracking",
        "Sustainability reporting",
        "Emission reduction strategies",
        "Compliance monitoring"
      ],
      icon: "📊"
    },
    {
      title: "E-Waste Management",
      description: "Responsible disposal and recycling of electronic equipment and components.",
      features: [
        "Secure data destruction",
        "Component recycling",
        "Asset recovery",
        "Environmental compliance"
      ],
      icon: "♻️"
    },
    {
      title: "Green Software Development",
      description: "Sustainable software practices that minimize environmental impact.",
      features: [
        "Energy-efficient coding",
        "Optimized algorithms",
        "Minimal resource usage",
        "Sustainable architecture"
      ],
      icon: "💻"
    }
  ];

  const benefits = [
    {
      title: "Reduced Carbon Footprint",
      description: "Significantly reduce your organization's environmental impact",
      metric: "Up to 60% reduction"
    },
    {
      title: "Cost Savings",
      description: "Lower energy costs through efficient resource utilization",
      metric: "30-50% energy savings"
    },
    {
      title: "Compliance",
      description: "Meet environmental regulations and sustainability standards",
      metric: "100% compliance"
    },
    {
      title: "Brand Value",
      description: "Enhance your brand reputation as a sustainable organization",
      metric: "Improved ESG scores"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Green IT Solutions
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Sustainable technology solutions that reduce environmental impact while improving efficiency and performance.
            </p>
          </div>

          {/* Hero Section */}
          <section className="mb-16">
            <div className="cyber-card hologram-card text-center">
              <div className="text-6xl mb-6">🌱</div>
              <h2 className="text-3xl font-bold text-white mb-4">Sustainable Technology for a Better Future</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
                At Zion Tech Group, we're committed to environmental responsibility. Our Green IT solutions help organizations 
                reduce their carbon footprint while maintaining high performance and reliability.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
                  <div className="text-gray-300">Carbon Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50%</div>
                  <div className="text-gray-300">Energy Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-gray-300">Renewable Energy</div>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Green IT Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card hologram-card">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Environmental Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center text-2xl">
                        🌿
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 mb-3">{benefit.description}</p>
                      <div className="text-2xl font-bold text-green-400">{benefit.metric}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Case Study */}
          <section className="mb-16">
            <div className="cyber-card hologram-card">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Success Story</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Fortune 500 Manufacturing Company</h3>
                  <p className="text-gray-300 mb-6">
                    We helped a major manufacturing company reduce their IT carbon footprint by 65% while improving 
                    system performance by 40%. Through our Green IT solutions, they achieved significant cost savings 
                    and enhanced their sustainability credentials.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Carbon Footprint Reduction:</span>
                      <span className="text-green-400 font-semibold">65%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Energy Cost Savings:</span>
                      <span className="text-green-400 font-semibold">$2.3M annually</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Performance Improvement:</span>
                      <span className="text-green-400 font-semibold">40%</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">🏭</div>
                  <div className="text-4xl font-bold text-green-400 mb-2">65%</div>
                  <div className="text-gray-300">Carbon Reduction</div>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Environmental Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cyber-card text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold text-white mb-2">ISO 14001</h3>
                <p className="text-gray-300 text-sm">Environmental Management</p>
              </div>
              <div className="cyber-card text-center">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-lg font-semibold text-white mb-2">LEED Certified</h3>
                <p className="text-gray-300 text-sm">Green Building Standards</p>
              </div>
              <div className="cyber-card text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">RE100</h3>
                <p className="text-gray-300 text-sm">100% Renewable Energy</p>
              </div>
              <div className="cyber-card text-center">
                <div className="text-4xl mb-4">♻️</div>
                <h3 className="text-lg font-semibold text-white mb-2">EPEAT</h3>
                <p className="text-gray-300 text-sm">Electronic Product Assessment</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center cyber-card">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Go Green?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the sustainable technology revolution. Let us help you reduce your environmental impact 
              while improving your IT performance and reducing costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?subject=Green IT Solutions"
                className="cyber-button"
              >
                Get Green IT Assessment
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📞 Call (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GreenITPage;