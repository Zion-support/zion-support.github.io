import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Services: NextPage = () => {
  const services = [
    {
      title: "AI Development & Machine Learning",
      description: "Custom AI solutions, machine learning models, and intelligent automation systems tailored to your business needs.",
      features: ["Custom AI Models", "Machine Learning Pipelines", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      icon: "🤖",
      href: "/services/ai-development"
    },
    {
      title: "Cloud Architecture & Migration",
      description: "Scalable cloud solutions, infrastructure design, and seamless migration services for modern applications.",
      features: ["AWS/Azure/GCP Solutions", "Microservices Architecture", "Container Orchestration", "Serverless Computing", "Cloud Security"],
      icon: "☁️",
      href: "/services/cloud-services"
    },
    {
      title: "Web Application Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      features: ["React/Next.js Applications", "Progressive Web Apps", "API Development", "Database Design", "Performance Optimization"],
      icon: "🌐",
      href: "/services/web-application-development"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with exceptional user experience.",
      features: ["iOS & Android Apps", "React Native", "Flutter Development", "App Store Optimization", "Push Notifications"],
      icon: "📱",
      href: "/services/mobile-app-development"
    },
    {
      title: "Blockchain Solutions",
      description: "Decentralized applications, smart contracts, and blockchain integration services for various industries.",
      features: ["Smart Contracts", "DeFi Applications", "NFT Marketplaces", "Blockchain Integration", "Cryptocurrency Wallets"],
      icon: "⛓️",
      href: "/services/blockchain-solutions"
    },
    {
      title: "Data Analytics & Business Intelligence",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      features: ["Data Visualization", "Real-time Dashboards", "Predictive Modeling", "ETL Pipelines", "Business Intelligence"],
      icon: "📊",
      href: "/services/data-analytics"
    },
    {
      title: "Cybersecurity & Network Security",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Penetration Testing", "Network Security", "Compliance Management", "Incident Response"],
      icon: "🔒",
      href: "/services/network-security"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that create engaging and intuitive digital experiences for your customers.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"],
      icon: "🎨",
      href: "/services/ui-ux-design"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Our Services - Zion Tech Solutions</title>
        <meta name="description" content="Comprehensive technology services including AI development, cloud architecture, web development, mobile apps, blockchain solutions, and more." />
        <meta name="keywords" content="AI development, cloud services, web development, mobile apps, blockchain, cybersecurity, data analytics, UI/UX design" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our Technology Services
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            We provide comprehensive technology solutions to help businesses transform their digital presence. 
            From AI development to cloud architecture, our expert team delivers cutting-edge solutions tailored to your needs.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/portfolio" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Our Work
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-200 mb-4 text-sm">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href={service.href}
                className="inline-flex items-center text-blue-300 hover:text-blue-200 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Zion Tech Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">We deliver high-quality solutions on time, every time, with agile development methodologies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Our experienced developers and designers bring years of expertise to every project.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support and maintenance to ensure your systems run smoothly.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives your business forward.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Your Project
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Learn About Us
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;