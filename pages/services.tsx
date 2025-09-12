import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const Services: NextPage = () => {
  const services = [
    {
      title: "AI Development",
      description: "Custom AI solutions and machine learning models tailored to your business needs",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      icon: "🤖",
      href: "/services/ai-development"
    },
    {
      title: "Cloud Architecture",
      description: "Scalable cloud solutions and infrastructure design for modern applications",
      features: ["AWS/Azure/GCP Migration", "Microservices Architecture", "Container Orchestration", "Auto-scaling Solutions"],
      icon: "☁️",
      href: "/services/cloud-services"
    },
    {
      title: "Web Application Development",
      description: "Modern, responsive web applications built with cutting-edge technologies",
      features: ["React/Next.js Development", "Progressive Web Apps", "API Integration", "Performance Optimization"],
      icon: "🌐",
      href: "/services/web-application-development"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter Development", "Native iOS/Android", "App Store Optimization"],
      icon: "📱",
      href: "/services/mobile-app-development"
    },
    {
      title: "Blockchain Solutions",
      description: "Decentralized applications and smart contract development",
      features: ["Smart Contracts", "DeFi Applications", "NFT Marketplaces", "Web3 Integration"],
      icon: "⛓️",
      href: "/services/blockchain"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics",
      features: ["Business Intelligence", "Data Visualization", "Predictive Modeling", "Real-time Dashboards"],
      icon: "📊",
      href: "/services/data-analytics"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
      icon: "🔒",
      href: "/services/network-security"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      icon: "🎨",
      href: "/services/ui-ux-design"
    }
  ];

  return (
    <Layout 
      title="Our Services - Zion Tech Solutions"
      description="Comprehensive technology services including AI development, cloud architecture, web development, mobile apps, blockchain solutions, and more."
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our Technology Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age. 
            From AI development to cloud architecture, we have the expertise to bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-200 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href={service.href}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Let's discuss how our technology services can help transform your business. 
            Contact us today for a free consultation.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/blog" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
        </main>
      </div>
    </Layout>
  );
};

export default Services;