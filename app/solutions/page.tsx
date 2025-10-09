import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with advanced AI analytics and machine learning.",
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Automated reporting",
        "Custom dashboards"
      ],
      icon: "📊",
      price: "Starting at $1,500/month"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Leverage quantum computing power for complex optimization and problem-solving.",
      features: [
        "Quantum algorithm development",
        "Optimization problems",
        "Cryptography solutions",
        "Research partnerships"
      ],
      icon: "⚛️",
      price: "Custom pricing"
    },
    {
      title: "Autonomous Enterprise Systems",
      description: "Self-managing systems that optimize operations and reduce manual intervention.",
      features: [
        "Process automation",
        "Self-healing infrastructure",
        "Intelligent monitoring",
        "Adaptive optimization"
      ],
      icon: "🤖",
      price: "Starting at $2,500/month"
    },
    {
      title: "AI Cybersecurity Platform",
      description: "Advanced threat detection and response powered by artificial intelligence.",
      features: [
        "Real-time threat detection",
        "Automated incident response",
        "Behavioral analysis",
        "Compliance monitoring"
      ],
      icon: "🛡️",
      price: "Starting at $1,999/month"
    },
    {
      title: "Cloud Infrastructure Optimization",
      description: "Maximize cloud performance and minimize costs with intelligent optimization.",
      features: [
        "Cost optimization",
        "Performance monitoring",
        "Auto-scaling",
        "Disaster recovery"
      ],
      icon: "☁️",
      price: "Starting at $999/month"
    },
    {
      title: "Digital Transformation Suite",
      description: "Comprehensive digital transformation services for modern enterprises.",
      features: [
        "Legacy system modernization",
        "Process digitization",
        "Change management",
        "Training and support"
      ],
      icon: "🔄",
      price: "Starting at $3,000/month"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "AI-powered medical imaging, drug discovery, and patient care optimization",
      icon: "🏥"
    },
    {
      name: "Financial Services",
      description: "Fraud detection, algorithmic trading, and risk management solutions",
      icon: "💰"
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: "🏭"
    },
    {
      name: "Retail & E-commerce",
      description: "Personalized recommendations, inventory management, and customer analytics",
      icon: "🛒"
    },
    {
      name: "Energy & Utilities",
      description: "Smart grid optimization, predictive maintenance, and energy efficiency",
      icon: "⚡"
    },
    {
      name: "Transportation",
      description: "Autonomous vehicles, route optimization, and fleet management",
      icon: "🚗"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Enterprise Solutions
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and technology solutions designed to transform your business operations and drive growth.
            </p>
          </div>

          {/* Solutions Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="cyber-card hologram-card">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{solution.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{solution.price}</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="w-full cyber-button text-center block"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="cyber-card">
                  <div className="text-center">
                    <div className="text-5xl mb-4">{industry.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                    <p className="text-gray-300">{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Implementation Process */}
          <section className="mb-16">
            <div className="cyber-card hologram-card">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Implementation Process</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">1</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Discovery</h3>
                  <p className="text-gray-300 text-sm">We analyze your current systems and identify opportunities for improvement.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">2</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
                  <p className="text-gray-300 text-sm">We create a customized solution architecture tailored to your needs.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">3</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Deploy</h3>
                  <p className="text-gray-300 text-sm">We implement the solution with minimal disruption to your operations.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">4</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Optimize</h3>
                  <p className="text-gray-300 text-sm">We continuously monitor and optimize performance for maximum value.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Success Metrics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Proven Results</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cyber-card text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$2.5B+</div>
                <div className="text-gray-300">Cost Savings Delivered</div>
              </div>
              <div className="cyber-card text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300">Enterprise Clients</div>
              </div>
              <div className="cyber-card text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="cyber-card text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">300%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center cyber-card">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can help you achieve your business goals. 
              Get a free consultation and customized proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button"
              >
                Get Free Consultation
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

export default SolutionsPage;