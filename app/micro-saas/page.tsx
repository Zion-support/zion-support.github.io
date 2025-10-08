import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      id: 1,
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights, predictive analytics, and automated reporting.',
      price: '$299/month',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Automated report generation',
        'Custom dashboard creation',
        'Multi-source data integration',
        'Mobile-responsive design'
      ],
      icon: '📊',
      color: 'emerald'
    },
    {
      id: 2,
      name: 'AI Marketing Automation',
      description: 'Revolutionary AI-powered marketing automation, ad optimization, and content generation.',
      price: '$199/month',
      features: [
        'Automated email campaigns',
        'AI content generation',
        'Social media scheduling',
        'Ad performance optimization',
        'Customer segmentation',
        'ROI tracking and analytics'
      ],
      icon: '📢',
      color: 'pink'
    },
    {
      id: 3,
      name: 'AI Workflow Automation',
      description: 'Intelligent workflow automation with decision trees, exception handling, and process optimization.',
      price: '$349/month',
      features: [
        'Process automation',
        'Decision tree logic',
        'Exception handling',
        'Integration with 100+ apps',
        'Custom workflow builder',
        'Performance monitoring'
      ],
      icon: '🔄',
      color: 'orange'
    },
    {
      id: 4,
      name: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection, automated security monitoring, and AI-powered incident response.',
      price: '$499/month',
      features: [
        'Real-time threat detection',
        'Automated incident response',
        'Vulnerability scanning',
        'Security compliance monitoring',
        '24/7 security monitoring',
        'Custom security policies'
      ],
      icon: '🛡️',
      color: 'red'
    },
    {
      id: 5,
      name: 'AI E-commerce Solutions',
      description: 'Smart product recommendations, dynamic pricing, and automated customer service for online stores.',
      price: '$399/month',
      features: [
        'AI product recommendations',
        'Dynamic pricing optimization',
        'Automated customer support',
        'Inventory management',
        'Sales forecasting',
        'Customer behavior analysis'
      ],
      icon: '🛒',
      color: 'yellow'
    },
    {
      id: 6,
      name: 'AI Mobile App Development',
      description: 'Intelligent mobile applications with AI features, voice recognition, and smart notifications.',
      price: '$799/month',
      features: [
        'Cross-platform development',
        'AI-powered features',
        'Voice recognition integration',
        'Push notification optimization',
        'App store optimization',
        'Performance monitoring'
      ],
      icon: '📱',
      color: 'purple'
    },
    {
      id: 7,
      name: 'AI Cloud Infrastructure',
      description: 'Smart cloud management, auto-scaling, and AI-optimized resource allocation for maximum efficiency.',
      price: '$599/month',
      features: [
        'Auto-scaling infrastructure',
        'Cost optimization',
        'Performance monitoring',
        'Disaster recovery',
        'Security compliance',
        '24/7 technical support'
      ],
      icon: '☁️',
      color: 'sky'
    },
    {
      id: 8,
      name: 'AI Healthcare Solutions',
      description: 'Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.',
      price: '$1,999/month',
      features: [
        'Medical image analysis',
        'Drug discovery algorithms',
        'Patient data analysis',
        'Treatment recommendations',
        'HIPAA compliance',
        'Integration with EHR systems'
      ],
      icon: '🏥',
      color: 'green'
    },
    {
      id: 9,
      name: 'AI Fintech Platform',
      description: 'Revolutionary AI-powered financial services including trading, fraud detection, and risk management.',
      price: '$1,499/month',
      features: [
        'Algorithmic trading',
        'Fraud detection systems',
        'Risk assessment models',
        'Regulatory compliance',
        'Real-time market analysis',
        'Portfolio optimization'
      ],
      icon: '💰',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      emerald: 'text-emerald-400 border-emerald-400 hover:bg-emerald-500/10',
      pink: 'text-pink-400 border-pink-400 hover:bg-pink-500/10',
      orange: 'text-orange-400 border-orange-400 hover:bg-orange-500/10',
      red: 'text-red-400 border-red-400 hover:bg-red-500/10',
      yellow: 'text-yellow-400 border-yellow-400 hover:bg-yellow-500/10',
      purple: 'text-purple-400 border-purple-400 hover:bg-purple-500/10',
      sky: 'text-sky-400 border-sky-400 hover:bg-sky-500/10',
      green: 'text-green-400 border-green-400 hover:bg-green-500/10',
      indigo: 'text-indigo-400 border-indigo-400 hover:bg-indigo-500/10'
    };
    return colorMap[color] || 'text-cyan-400 border-cyan-400 hover:bg-cyan-500/10';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Powerful, affordable AI-powered micro SAAS solutions designed to transform your business operations
            with cutting-edge technology and intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service) => (
              <div key={service.id} className="cyber-card hologram-card group">
                <div className="text-5xl mb-6 text-center group-hover:animate-cyber-rotation">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-400 flex items-center">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className={`text-3xl font-bold mb-4 ${getColorClasses(service.color).split(' ')[0]}`}>
                    {service.price}
                  </div>
                  <a
                    href="/contact"
                    className={`inline-block px-6 py-3 rounded-lg border-2 transition-all duration-300 ${getColorClasses(service.color)}`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="cyber-card hologram-card">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Lightning Fast Setup</h3>
                <p className="text-gray-300">
                  Get up and running in minutes with our intuitive setup process and comprehensive documentation.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">
                  Bank-level security with end-to-end encryption, compliance certifications, and regular security audits.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-white mb-3">Scalable Growth</h3>
                <p className="text-gray-300">
                  Scale from startup to enterprise with our flexible pricing and infrastructure that grows with your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Compare Our Solutions
          </h2>
          <div className="cyber-card hologram-card">
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-4 px-6">Service</th>
                    <th className="text-left py-4 px-6">Price</th>
                    <th className="text-left py-4 px-6">Features</th>
                    <th className="text-left py-4 px-6">Support</th>
                  </tr>
                </thead>
                <tbody>
                  {microSAASServices.slice(0, 5).map((service) => (
                    <tr key={service.id} className="border-b border-gray-700">
                      <td className="py-4 px-6 font-semibold">{service.name}</td>
                      <td className="py-4 px-6 text-cyan-400 font-bold">{service.price}</td>
                      <td className="py-4 px-6">{service.features.length} features</td>
                      <td className="py-4 px-6">24/7 Support</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card hologram-card">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our AI-powered micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button"
                aria-label="Call us at (302) 464-0950"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MicroSAASPage;
