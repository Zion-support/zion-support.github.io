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
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, cybersecurity, and innovative development services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
              Explore Our Services
            </Link>
            <Link href="/products" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Products
            </Link>
            <a href="tel:+13024640950" className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
              📞 Call Now
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
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
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Link href={service.link} className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-300 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-20">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Technologies We Master</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">AI & Machine Learning</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div>• TensorFlow & PyTorch</div>
                <div>• Natural Language Processing</div>
                <div>• Computer Vision</div>
                <div>• Predictive Analytics</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Cloud & DevOps</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div>• AWS, Azure, Google Cloud</div>
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