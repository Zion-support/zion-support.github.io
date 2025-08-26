import React from 'react';
import { Link } from 'react-router-dom';

const AdvancedServices2025: React.FC = () => {
  const advancedServices = [
    {
      category: "Enterprise AI & Machine Learning",
      description: "Advanced artificial intelligence solutions for enterprise-scale operations",
      services: [
        {
          title: "AI-Powered Enterprise Analytics",
          description: "Comprehensive enterprise analytics platform with real-time insights and predictive capabilities",
          icon: "📊",
          features: ["Real-time data processing", "Predictive modeling", "Custom dashboards", "API integrations", "Advanced reporting"],
          pricing: "$5,000 - $35,000/month",
          benefits: ["50% faster decision making", "Improved operational efficiency", "Cost reduction through automation", "Enhanced customer insights"],
          link: "https://ziontechgroup.com/ai-analytics"
        },
        {
          title: "Quantum-Enhanced Cybersecurity",
          description: "Next-generation cybersecurity powered by quantum computing algorithms",
          icon: "🔐",
          features: ["Quantum-resistant encryption", "Advanced threat detection", "Zero-trust architecture", "AI-powered monitoring", "Compliance automation"],
          pricing: "$8,000 - $50,000/month",
          benefits: ["99.99% threat detection rate", "Future-proof security", "Reduced breach risk", "Automated compliance"],
          link: "https://ziontechgroup.com/quantum-security"
        },
        {
          title: "Autonomous Business Intelligence",
          description: "Self-learning BI platform that automatically discovers insights and generates reports",
          icon: "🧠",
          features: ["Automated insight discovery", "Natural language queries", "Predictive analytics", "Automated reporting", "Data visualization"],
          pricing: "$3,500 - $25,000/month",
          benefits: ["90% reduction in manual analysis", "Instant insights", "Improved accuracy", "Time savings"],
          link: "https://ziontechgroup.com/autonomous-bi"
        }
      ]
    },
    {
      category: "Emerging Technology Solutions",
      description: "Cutting-edge technology solutions for forward-thinking businesses",
      services: [
        {
          title: "Metaverse Business Platform",
          description: "Complete metaverse solution for virtual offices, events, and customer engagement",
          icon: "🌐",
          features: ["Virtual office spaces", "3D product showcases", "Virtual events platform", "Avatar management", "Cross-platform compatibility"],
          pricing: "$2,500 - $20,000/month",
          benefits: ["Global reach without travel", "Enhanced customer engagement", "Cost-effective events", "Innovative branding"],
          link: "https://ziontechgroup.com/metaverse"
        },
        {
          title: "Web3 & Blockchain Infrastructure",
          description: "Complete Web3 infrastructure for decentralized applications and services",
          icon: "⛓️",
          features: ["Smart contract development", "DeFi platform integration", "NFT marketplace", "Blockchain consulting", "Security auditing"],
          pricing: "$4,000 - $40,000/month",
          benefits: ["Future-proof architecture", "Enhanced transparency", "Reduced intermediaries", "Innovative revenue streams"],
          link: "https://ziontechgroup.com/web3"
        },
        {
          title: "Edge Computing Solutions",
          description: "Distributed computing infrastructure for low-latency, high-performance applications",
          icon: "⚡",
          features: ["Edge AI deployment", "IoT device management", "Content delivery optimization", "Real-time processing", "Scalable architecture"],
          pricing: "$3,000 - $30,000/month",
          benefits: ["10x faster response times", "Reduced bandwidth costs", "Improved reliability", "Global scalability"],
          link: "https://ziontechgroup.com/edge-computing"
        }
      ]
    },
    {
      category: "Advanced Automation & Integration",
      description: "Intelligent automation solutions that streamline complex business processes",
      services: [
        {
          title: "Hyperautomation Platform",
          description: "End-to-end automation platform combining RPA, AI, and process mining",
          icon: "🤖",
          features: ["Process mining", "RPA automation", "AI decision making", "Workflow optimization", "Performance analytics"],
          pricing: "$6,000 - $45,000/month",
          benefits: ["80% process automation", "60% cost reduction", "Improved accuracy", "24/7 operation"],
          link: "https://ziontechgroup.com/hyperautomation"
        },
        {
          title: "Intelligent Data Pipeline",
          description: "Self-managing data pipeline with automated quality control and transformation",
          icon: "🔄",
          features: ["Automated data ingestion", "Quality monitoring", "Real-time transformation", "Error handling", "Scalable architecture"],
          pricing: "$2,500 - $18,000/month",
          benefits: ["99.9% data accuracy", "Reduced manual intervention", "Faster time to insights", "Cost optimization"],
          link: "https://ziontechgroup.com/data-pipeline"
        },
        {
          title: "API-First Integration Hub",
          description: "Centralized API management platform for seamless system integration",
          icon: "🔌",
          features: ["API gateway", "Rate limiting", "Security management", "Monitoring", "Developer portal"],
          pricing: "$1,500 - $12,000/month",
          benefits: ["Faster integration", "Improved security", "Better performance", "Developer productivity"],
          link: "https://ziontechgroup.com/api-hub"
        }
      ]
    },
    {
      category: "Specialized Industry Solutions",
      description: "Tailored solutions for specific industry challenges and requirements",
      services: [
        {
          title: "FinTech Innovation Platform",
          description: "Complete financial technology platform for modern banking and payment solutions",
          icon: "💰",
          features: ["Digital banking APIs", "Payment processing", "Compliance automation", "Risk management", "Customer analytics"],
          pricing: "$10,000 - $75,000/month",
          benefits: ["Faster time to market", "Reduced compliance costs", "Enhanced security", "Improved customer experience"],
          link: "https://ziontechgroup.com/fintech"
        },
        {
          title: "Healthcare AI Platform",
          description: "AI-powered healthcare solutions for diagnosis, treatment, and patient care",
          icon: "🏥",
          features: ["Medical image analysis", "Predictive diagnostics", "Patient monitoring", "Drug discovery", "Compliance management"],
          pricing: "$15,000 - $100,000/month",
          benefits: ["Improved diagnosis accuracy", "Reduced healthcare costs", "Better patient outcomes", "Compliance automation"],
          link: "https://ziontechgroup.com/healthcare-ai"
        },
        {
          title: "Supply Chain Intelligence",
          description: "End-to-end supply chain visibility and optimization platform",
          icon: "🚚",
          features: ["Real-time tracking", "Demand forecasting", "Inventory optimization", "Supplier management", "Risk assessment"],
          pricing: "$5,000 - $35,000/month",
          benefits: ["20% cost reduction", "Improved efficiency", "Better visibility", "Risk mitigation"],
          link: "https://ziontechgroup.com/supply-chain"
        }
      ]
    },
    {
      category: "Next-Generation Infrastructure",
      description: "Modern infrastructure solutions for scalable, reliable, and secure operations",
      services: [
        {
          title: "Multi-Cloud Management Platform",
          description: "Unified management platform for multi-cloud environments",
          icon: "☁️",
          features: ["Cloud orchestration", "Cost optimization", "Security management", "Performance monitoring", "Automated scaling"],
          pricing: "$3,500 - $25,000/month",
          benefits: ["30% cost savings", "Improved performance", "Enhanced security", "Simplified management"],
          link: "https://ziontechgroup.com/multi-cloud"
        },
        {
          title: "Zero-Trust Security Architecture",
          description: "Comprehensive zero-trust security framework for modern enterprises",
          icon: "🛡️",
          features: ["Identity verification", "Network segmentation", "Threat detection", "Access control", "Compliance monitoring"],
          pricing: "$7,000 - $50,000/month",
          benefits: ["Enhanced security posture", "Reduced breach risk", "Compliance automation", "Simplified access management"],
          link: "https://ziontechgroup.com/zero-trust"
        },
        {
          title: "Green Tech Infrastructure",
          description: "Sustainable technology infrastructure with reduced carbon footprint",
          icon: "🌱",
          features: ["Energy-efficient computing", "Carbon tracking", "Sustainable practices", "Green certifications", "Cost optimization"],
          pricing: "$2,000 - $15,000/month",
          benefits: ["Reduced carbon footprint", "Cost savings", "Environmental compliance", "Brand enhancement"],
          link: "https://ziontechgroup.com/green-tech"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Advanced
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Services 2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Cutting-edge micro SaaS, IT, and AI solutions designed to transform your business 
            and position you ahead of the competition in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {advancedServices.map((category, categoryIndex) => (
            <div key={category.category} className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {category.category}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={service.title}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-4xl mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <svg className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4 mb-4">
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">Pricing</h4>
                        <p className="text-white font-bold text-xl">{service.pricing}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-green-300">
                            <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <a
                        href={service.link}
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                      >
                        Learn More →
                      </a>
                      <a
                        href="tel:+13024640950"
                        className="w-full inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Let's discuss how our advanced technology solutions can drive your success 
            and position you ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedServices2025;