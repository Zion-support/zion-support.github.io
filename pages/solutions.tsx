import Head from 'next/head';
import Link from 'next/link';

export default function Solutions() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  const solutionCategories = [
    {
      title: "Digital Transformation",
      description: "Comprehensive digital transformation solutions to modernize your business operations and drive innovation.",
      icon: "🔄",
      solutions: [
        {
          name: "Legacy System Modernization",
          description: "Transform outdated systems into modern, scalable solutions",
          benefits: ["Improved performance", "Enhanced security", "Reduced maintenance costs"]
        },
        {
          name: "Cloud Migration",
          description: "Seamless migration to cloud platforms with minimal downtime",
          benefits: ["Scalability", "Cost optimization", "Enhanced collaboration"]
        },
        {
          name: "Process Automation",
          description: "Automate repetitive tasks to improve efficiency and accuracy",
          benefits: ["Increased productivity", "Reduced errors", "Cost savings"]
        }
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Leverage artificial intelligence and machine learning to gain competitive advantages and drive growth.",
      icon: "🤖",
      solutions: [
        {
          name: "Predictive Analytics",
          description: "Forecast trends and make data-driven decisions",
          benefits: ["Better forecasting", "Risk mitigation", "Optimized operations"]
        },
        {
          name: "Natural Language Processing",
          description: "Extract insights from unstructured text data",
          benefits: ["Improved customer service", "Automated content analysis", "Enhanced search"]
        },
        {
          name: "Computer Vision",
          description: "Analyze and interpret visual information",
          benefits: ["Quality control", "Security monitoring", "Process optimization"]
        }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Protect your business with comprehensive cybersecurity solutions and ensure regulatory compliance.",
      icon: "🔒",
      solutions: [
        {
          name: "Security Assessment",
          description: "Comprehensive evaluation of your security posture",
          benefits: ["Risk identification", "Compliance validation", "Security roadmap"]
        },
        {
          name: "Threat Detection",
          description: "Advanced monitoring and threat response systems",
          benefits: ["Real-time protection", "Incident response", "Threat intelligence"]
        },
        {
          name: "Compliance Management",
          description: "Ensure adherence to industry regulations and standards",
          benefits: ["Regulatory compliance", "Audit readiness", "Risk mitigation"]
        }
      ]
    },
    {
      title: "Cloud & DevOps",
      description: "Optimize your cloud infrastructure and streamline development processes for maximum efficiency.",
      icon: "☁️",
      solutions: [
        {
          name: "Cloud Architecture",
          description: "Design and implement scalable cloud solutions",
          benefits: ["High availability", "Cost optimization", "Global reach"]
        },
        {
          name: "DevOps Automation",
          description: "Automate development and deployment processes",
          benefits: ["Faster delivery", "Reduced errors", "Improved collaboration"]
        },
        {
          name: "Container Orchestration",
          description: "Manage containerized applications at scale",
          benefits: ["Scalability", "Resource efficiency", "Deployment flexibility"]
        }
      ]
    },
    {
      title: "Data & Analytics",
      description: "Transform your data into actionable insights that drive business growth and innovation.",
      icon: "📊",
      solutions: [
        {
          name: "Data Integration",
          description: "Connect and unify data from multiple sources",
          benefits: ["Unified view", "Data consistency", "Improved decision making"]
        },
        {
          name: "Business Intelligence",
          description: "Create interactive dashboards and reports",
          benefits: ["Real-time insights", "Self-service analytics", "Better reporting"]
        },
        {
          name: "Data Warehousing",
          description: "Store and manage large volumes of structured data",
          benefits: ["Historical analysis", "Performance optimization", "Data governance"]
        }
      ]
    },
    {
      title: "IoT & Edge Computing",
      description: "Connect and manage devices at the edge for real-time processing and decision making.",
      icon: "🌐",
      solutions: [
        {
          name: "IoT Platform",
          description: "Connect, monitor, and manage IoT devices",
          benefits: ["Device management", "Data collection", "Remote monitoring"]
        },
        {
          name: "Edge Analytics",
          description: "Process data locally for faster response times",
          benefits: ["Low latency", "Reduced bandwidth", "Offline capability"]
        },
        {
          name: "Smart Infrastructure",
          description: "Implement intelligent systems for buildings and facilities",
          benefits: ["Energy efficiency", "Predictive maintenance", "Automated control"]
        }
      ]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant solutions for patient care and medical research",
      icon: "🏥"
    },
    {
      name: "Financial Services",
      description: "Secure, compliant solutions for banking and financial institutions",
      icon: "🏦"
    },
    {
      name: "Manufacturing",
      description: "Smart manufacturing solutions for Industry 4.0 transformation",
      icon: "🏭"
    },
    {
      name: "Retail & E-commerce",
      description: "Omnichannel solutions for enhanced customer experiences",
      icon: "🛒"
    },
    {
      name: "Education",
      description: "Digital learning platforms and educational technology solutions",
      icon: "🎓"
    },
    {
      name: "Government",
      description: "Secure, scalable solutions for public sector organizations",
      icon: "🏛️"
    }
  ];

  return (
    <>
      <Head>
        <title>Solutions - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive technology solutions including digital transformation, AI/ML, cybersecurity, cloud computing, and more." />
        <meta name="keywords" content="solutions, digital transformation, AI, machine learning, cybersecurity, cloud computing, DevOps, data analytics, IoT, edge computing" />
        <link rel="canonical" href={`${contact.site}/solutions`} />
        <meta property="og:title" content="Solutions - Zion Tech Group | Comprehensive Technology Solutions" />
        <meta property="og:description" content="Explore Zion Tech Group's comprehensive technology solutions including digital transformation, AI/ML, cybersecurity, cloud computing, and more." />
        <meta property="og:url" content={`${contact.site}/solutions`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solutions - Zion Tech Group | Comprehensive Technology Solutions" />
        <meta name="twitter:description" content="Explore Zion Tech Group's comprehensive technology solutions including digital transformation, AI/ML, cybersecurity, cloud computing, and more." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive technology solutions. From digital transformation to AI-powered automation, 
              we deliver results that drive growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Solution Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Solutions</h2>
            <div className="space-y-16">
              {solutionCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{category.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-slate-300">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <h4 className="text-lg font-bold text-white mb-3">{solution.name}</h4>
                        <p className="text-slate-300 mb-4">{solution.description}</p>
                        <div className="space-y-2">
                          {solution.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center gap-2 text-sm text-slate-400">
                              <span className="text-green-400">✓</span>
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                  <p className="text-slate-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Process */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Solution Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Discovery</h3>
                <p className="text-slate-300">We analyze your business needs and current technology landscape to understand your challenges and opportunities.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Strategy</h3>
                <p className="text-slate-300">We develop a comprehensive strategy tailored to your specific requirements and business objectives.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
                <p className="text-slate-300">Our expert team implements the solution with minimal disruption to your business operations.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Optimization</h3>
                <p className="text-slate-300">We continuously monitor and optimize the solution to ensure maximum performance and ROI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
                <h3 className="text-xl font-bold text-white mb-3">Performance Improvement</h3>
                <p className="text-slate-300">A healthcare client achieved 300% improvement in data processing speed through our cloud migration solution.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-purple-400 mb-2">$2M</div>
                <h3 className="text-xl font-bold text-white mb-3">Cost Savings</h3>
                <p className="text-slate-300">A manufacturing company saved $2M annually through our process automation and optimization solutions.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <h3 className="text-xl font-bold text-white mb-3">Uptime Achievement</h3>
                <p className="text-slate-300">A financial services client achieved 99.9% uptime with our comprehensive cybersecurity and infrastructure solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-slate-300 mb-8">
              Let our experts help you implement the right solutions for your business needs. 
              Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all">
                Get Started
              </Link>
              <Link href="/services" className="px-8 py-3 border border-white/20 text-white hover:bg-white/10 rounded-lg font-semibold transition-colors">
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}