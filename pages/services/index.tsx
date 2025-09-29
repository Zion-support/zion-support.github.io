import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Services: NextPage = () => {
  const services = [
    {
      title: "AI Development",
      description: "Custom AI solutions and machine learning models that drive innovation and efficiency in your business operations.",
      icon: "🤖",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      href: "/services/ai-development"
    },
    {
      title: "Cloud Architecture",
      description: "Scalable cloud solutions and infrastructure design for modern applications that grow with your business.",
      icon: "☁️",
      features: ["AWS/Azure/GCP Migration", "Microservices Architecture", "Container Orchestration", "Auto-scaling Solutions"],
      href: "/services/cloud-services"
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      icon: "🌐",
      features: ["React/Next.js Applications", "E-commerce Solutions", "Progressive Web Apps", "API Development"],
      href: "/services/web-application-development"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: "📱",
      features: ["iOS & Android Apps", "React Native Development", "Flutter Applications", "App Store Optimization"],
      href: "/services/mobile-app-development"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      icon: "📊",
      features: ["Data Visualization", "Business Intelligence", "Real-time Analytics", "Data Pipeline Engineering"],
      href: "/services/data-analytics"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      icon: "🔒",
      features: ["Security Auditing", "Penetration Testing", "Compliance Management", "Incident Response"],
      href: "/services/security-auditing"
    },
    {
      title: "Blockchain Solutions",
      description: "Decentralized applications and smart contracts built on cutting-edge blockchain technology.",
      icon: "⛓️",
      features: ["Smart Contracts", "DeFi Applications", "NFT Marketplaces", "Blockchain Integration"],
      href: "/services/blockchain"
    },
    {
      title: "DevOps & Automation",
      description: "Streamline your development and deployment processes with modern DevOps practices.",
      icon: "⚙️",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Performance Optimization"],
      href: "/services/devops"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Our Services - Zion Tech Solutions</title>
        <meta name="description" content="Comprehensive technology services including AI development, cloud architecture, web development, mobile apps, data analytics, cybersecurity, and more." />
      </Head>
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Technology Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Comprehensive technology solutions designed to transform your business and drive digital innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              Get Free Consultation
            </Link>
            <Link href="/portfolio" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all transform hover:scale-105 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={service.href} 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-2 transition-all"
                >
                  Learn More 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Development Process</h2>
            <p className="text-xl max-w-3xl mx-auto">We follow a proven methodology to deliver exceptional results</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Discovery</h3>
              <p className="text-gray-300">We analyze your requirements and define project scope</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Design</h3>
              <p className="text-gray-300">We create detailed technical specifications and architecture</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3 text-green-300">Development</h3>
              <p className="text-gray-300">We build your solution using agile methodologies</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">Deployment</h3>
              <p className="text-gray-300">We deploy and provide ongoing support and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology services can help achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                Start Your Project
              </Link>
              <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg transition-all">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;