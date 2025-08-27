import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  const featuredServices = [
    {
      icon: "🤖",
      title: "AI Development",
      description: "Custom AI solutions and machine learning models for your business needs.",
      link: "/services"
    },
    {
      icon: "☁️",
      title: "Cloud Architecture",
      description: "Scalable cloud solutions and infrastructure design for modern applications.",
      link: "/services"
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Comprehensive security solutions and compliance management for your business.",
      link: "/services"
    },
    {
      icon: "📱",
      title: "Web & Mobile Apps",
      description: "Modern, responsive applications built with cutting-edge technologies.",
      link: "/services"
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform your data into actionable insights with AI-powered analytics.",
      link: "/services"
    },
    {
      icon: "⛓️",
      title: "Blockchain & Web3",
      description: "Next-generation decentralized applications and smart contract solutions.",
      link: "/services"
    }
  ];

  const whyChooseUs = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions"
    },
    {
      icon: "💼",
      title: "Business Focused",
      description: "Every solution is designed to drive measurable business value and ROI"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security standards with SOC 2 compliance and enterprise reliability"
    },
    {
      icon: "🤝",
      title: "Partnership Approach",
      description: "We work as an extension of your team for long-term success"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider | AI, Cloud, Cybersecurity</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, cybersecurity, and emerging technologies, we help companies transform their digital presence." />
        <meta name="keywords" content="Zion Tech Group, AI development, cloud migration, cybersecurity, web development, mobile apps, blockchain, IoT, technology solutions" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-20">
          <h1 className="text-6xl font-bold mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            We are a leading technology solutions provider, specializing in AI development, 
            cloud architecture, cybersecurity, and emerging technologies. Our mission is to 
            transform businesses through innovative digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Started Today
            </a>
            <a href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Explore Services
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <a href={service.link} className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Emerging Technology Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🚀 Revolutionary Emerging Tech Services 2027</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the future of technology with our breakthrough services that are reshaping industries and creating new possibilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg p-6 text-center hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 border border-purple-400/30">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Internet Infrastructure</h3>
              <p className="text-gray-300 text-sm mb-4">Next-generation quantum internet enabling ultra-secure communications and quantum network protocols.</p>
              <div className="text-sm text-purple-400 mb-3">Starting at $25,000/month</div>
              <a href="/emerging-tech-services" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Explore Quantum Tech →
              </a>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg p-6 text-center hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 border border-blue-400/30">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Threat Intelligence</h3>
              <p className="text-gray-300 text-sm mb-4">Advanced AI-driven threat detection with behavioral analysis and predictive security insights.</p>
              <div className="text-sm text-blue-400 mb-3">Starting at $8,999/month</div>
              <a href="/advanced-cybersecurity" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Explore AI Security →
              </a>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-lg p-6 text-center hover:from-green-500/30 hover:to-teal-500/30 transition-all duration-300 border border-green-400/30">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-semibold text-white mb-3">Biocomputing Platform</h3>
              <p className="text-gray-300 text-sm mb-4">Revolutionary DNA and cellular computing for massive parallel processing and energy efficiency.</p>
              <div className="text-sm text-green-400 mb-3">Starting at $15,000/month</div>
              <a href="/emerging-tech-services" className="text-green-400 hover:text-green-300 text-sm font-medium">
                Explore Biocomputing →
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/emerging-tech-services" className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 inline-block">
              View All Emerging Tech Services
            </a>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">AI & Machine Learning</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div>• TensorFlow, PyTorch</div>
                <div>• OpenAI, Anthropic APIs</div>
                <div>• Custom Model Training</div>
                <div>• RAG & Vector Databases</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Cloud & DevOps</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div>• AWS, Azure, GCP</div>
                <div>• Kubernetes & Docker</div>
                <div>• CI/CD Pipelines</div>
                <div>• Infrastructure as Code</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Web & Mobile</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div>• React, Angular, Vue.js</div>
                <div>• Node.js, Python, Java</div>
                <div>• React Native, Flutter</div>
                <div>• Progressive Web Apps</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Emerging Tech</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div>• Blockchain & Smart Contracts</div>
                <div>• IoT & Edge Computing</div>
                <div>• AR/VR & Metaverse</div>
                <div>• Quantum Computing Prep</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">🏥 Healthcare</h3>
              <p className="text-gray-300 text-sm">HIPAA-compliant solutions, telemedicine platforms, and AI-powered diagnostics</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">🏦 Financial Services</h3>
              <p className="text-gray-300 text-sm">Fintech solutions, blockchain applications, and secure payment systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">🏭 Manufacturing</h3>
              <p className="text-gray-300 text-sm">IoT platforms, predictive maintenance, and smart factory solutions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">🛒 E-commerce</h3>
              <p className="text-gray-300 text-sm">Scalable platforms, AI-powered recommendations, and mobile commerce</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">🎓 Education</h3>
              <p className="text-gray-300 text-sm">Learning management systems, virtual classrooms, and educational AI</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-3">🚀 Startups</h3>
              <p className="text-gray-300 text-sm">MVP development, scaling solutions, and growth-focused technology</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Let's discuss how Zion Tech Group can help you leverage cutting-edge technology 
              to achieve your business goals. We offer free consultations and custom solution design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                📞 Call +1 (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                ✉️ Schedule Consultation
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="text-white font-semibold mb-2">📍 Location</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">🌐 Website</h3>
                <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                  https://ziontechgroup.com
                </a>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">⏰ Business Hours</h3>
                <p className="text-gray-300">Mon-Fri: 9AM-6PM EST<br />Sat: 10AM-2PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
