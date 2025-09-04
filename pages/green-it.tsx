import Head from 'next/head';
import Link from 'next/link';

export default function GreenIT() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const greenInitiatives = [
    {
      title: "Carbon-Neutral Data Centers",
      description: "Achieving net-zero carbon emissions through renewable energy and energy-efficient infrastructure",
      icon: "🌱",
      benefits: [
        "100% renewable energy usage",
        "Advanced cooling systems",
        "Energy-efficient hardware",
        "Carbon offset programs"
      ],
      impact: "Reduced carbon footprint by 85%"
    },
    {
      title: "Green Cloud Computing",
      description: "Optimizing cloud infrastructure for maximum energy efficiency and minimal environmental impact",
      icon: "☁️",
      benefits: [
        "Dynamic resource allocation",
        "Energy-aware scheduling",
        "Green data center selection",
        "Automated power management"
      ],
      impact: "40% reduction in energy consumption"
    },
    {
      title: "Sustainable Software Development",
      description: "Building energy-efficient applications with minimal resource consumption",
      icon: "💻",
      benefits: [
        "Optimized algorithms",
        "Efficient data structures",
        "Minimal resource usage",
        "Green coding practices"
      ],
      impact: "30% improvement in energy efficiency"
    },
    {
      title: "E-Waste Management",
      description: "Responsible disposal and recycling of electronic equipment",
      icon: "♻️",
      benefits: [
        "Certified e-waste recycling",
        "Equipment refurbishment",
        "Component reuse programs",
        "Secure data destruction"
      ],
      impact: "95% waste diversion rate"
    },
    {
      title: "Remote Work Solutions",
      description: "Enabling remote work to reduce commuting and office energy consumption",
      icon: "🏠",
      benefits: [
        "Cloud-based collaboration tools",
        "Virtual meeting platforms",
        "Remote monitoring systems",
        "Digital workspace solutions"
      ],
      impact: "60% reduction in commuting emissions"
    },
    {
      title: "Green AI & Machine Learning",
      description: "Developing energy-efficient AI models and algorithms",
      icon: "🤖",
      benefits: [
        "Model optimization techniques",
        "Efficient training algorithms",
        "Edge AI deployment",
        "Green neural networks"
      ],
      impact: "50% reduction in AI energy consumption"
    }
  ];

  const certifications = [
    {
      name: "ISO 14001",
      description: "Environmental Management System",
      status: "Certified",
      year: "2024"
    },
    {
      name: "LEED Gold",
      description: "Leadership in Energy and Environmental Design",
      status: "Certified",
      year: "2024"
    },
    {
      name: "Energy Star",
      description: "Energy Efficient Products and Buildings",
      status: "Certified",
      year: "2024"
    },
    {
      name: "Carbon Trust",
      description: "Carbon Footprint Verification",
      status: "Certified",
      year: "2024"
    }
  ];

  const sustainabilityMetrics = [
    {
      metric: "85%",
      description: "Reduction in carbon emissions",
      icon: "🌍"
    },
    {
      metric: "100%",
      description: "Renewable energy usage",
      icon: "⚡"
    },
    {
      metric: "95%",
      description: "Waste diversion rate",
      icon: "♻️"
    },
    {
      metric: "40%",
      description: "Energy consumption reduction",
      icon: "🔋"
    }
  ];

  const greenTechnologies = [
    {
      name: "Solar-Powered Data Centers",
      description: "Harnessing solar energy to power our infrastructure",
      benefits: ["Clean energy", "Cost savings", "Energy independence"]
    },
    {
      name: "Liquid Cooling Systems",
      description: "Advanced cooling technology for energy efficiency",
      benefits: ["Reduced energy use", "Better performance", "Lower costs"]
    },
    {
      name: "AI-Powered Energy Management",
      description: "Smart systems that optimize energy consumption",
      benefits: ["Automated optimization", "Real-time monitoring", "Predictive analytics"]
    },
    {
      name: "Green Software Architecture",
      description: "Designing applications for minimal environmental impact",
      benefits: ["Efficient resource use", "Reduced energy consumption", "Better performance"]
    }
  ];

  return (
    <>
      <Head>
        <title>Green IT - Zion Tech Group | Sustainable Technology Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's commitment to sustainable technology. Learn about our green IT initiatives, carbon-neutral operations, and environmental responsibility." />
        <meta name="keywords" content="green IT, sustainable technology, carbon neutral, renewable energy, environmental responsibility, green computing, eco-friendly technology" />
        <link rel="canonical" href={`${contact.site}/green-it`} />
        <meta property="og:title" content="Green IT - Zion Tech Group | Sustainable Technology Solutions" />
        <meta property="og:description" content="Discover Zion Tech Group's commitment to sustainable technology. Learn about our green IT initiatives, carbon-neutral operations, and environmental responsibility." />
        <meta property="og:url" content={`${contact.site}/green-it`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Green IT - Zion Tech Group | Sustainable Technology Solutions" />
        <meta name="twitter:description" content="Discover Zion Tech Group's commitment to sustainable technology. Learn about our green IT initiatives, carbon-neutral operations, and environmental responsibility." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Green <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Technology</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Committed to sustainable technology solutions that protect our planet while delivering exceptional performance. 
              Join us in building a greener future through innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Sustainability Metrics */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Environmental Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {sustainabilityMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{metric.icon}</div>
                  <div className="text-4xl font-bold text-green-400 mb-2">{metric.metric}</div>
                  <p className="text-slate-300">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Green Initiatives */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Green IT Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {greenInitiatives.map((initiative, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl mb-4">{initiative.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{initiative.title}</h3>
                  <p className="text-slate-300 mb-4">{initiative.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {initiative.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-sm text-slate-300">
                          <span className="text-green-400">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-green-600/20 rounded-lg p-3">
                    <p className="text-green-400 font-semibold text-sm">
                      Impact: {initiative.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Green Technologies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Green Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {greenTechnologies.map((tech, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                  <p className="text-slate-300 mb-4">{tech.description}</p>
                  <div className="space-y-2">
                    {tech.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-slate-300">
                        <span className="text-green-400">•</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Environmental Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-slate-300 text-sm mb-3">{cert.description}</p>
                  <div className="space-y-1">
                    <div className="text-green-400 font-semibold text-sm">{cert.status}</div>
                    <div className="text-slate-400 text-xs">{cert.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Environmental Commitment */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Environmental Commitment</h2>
                <p className="text-slate-300 mb-6">
                  At Zion Tech Group, we believe that technology should serve both people and the planet. 
                  Our commitment to environmental sustainability drives every decision we make, from the 
                  technologies we develop to the way we operate our business.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <p className="text-slate-300">Carbon-neutral operations by 2025</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <p className="text-slate-300">100% renewable energy usage</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <p className="text-slate-300">Zero waste to landfill</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <p className="text-slate-300">Sustainable supply chain practices</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Join Our Green Mission</h3>
                <p className="text-slate-300 mb-6">
                  Partner with us to implement sustainable technology solutions that reduce your 
                  environmental impact while improving your business performance.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="block w-full px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-center transition-colors">
                    Start Your Green Journey
                  </Link>
                  <Link href="/solutions" className="block w-full px-6 py-3 border border-white/20 text-white hover:bg-white/10 rounded-lg font-semibold text-center transition-colors">
                    Explore Green Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Green Benefits */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Benefits of Green IT</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cost Savings</h3>
                <p className="text-slate-300">Reduce energy costs and operational expenses through efficient technology solutions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Environmental Impact</h3>
                <p className="text-slate-300">Minimize your carbon footprint and contribute to a sustainable future.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Business Value</h3>
                <p className="text-slate-300">Enhance your brand reputation and meet sustainability goals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Make Your Technology Green</h2>
            <p className="text-slate-300 mb-8">
              Transform your business with sustainable technology solutions that protect the environment 
              while driving innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-lg font-semibold transition-all">
                Start Your Green Journey
              </Link>
              <Link href="/solutions" className="px-8 py-3 border border-white/20 text-white hover:bg-white/10 rounded-lg font-semibold transition-colors">
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}