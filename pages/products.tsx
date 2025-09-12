import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const Products: NextPage = () => {
  const products = [
    {
      id: 1,
      name: "AI-Powered Analytics Platform",
      category: "AI & Machine Learning",
      description: "Transform your data into actionable insights with our advanced AI analytics platform that provides real-time predictions and automated reporting.",
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Automated reporting",
        "Custom dashboards",
        "Machine learning models",
        "API integration"
      ],
      pricing: "Starting at $2,999/month",
      image: "📊",
      popular: true,
      benefits: [
        "Increase decision-making speed by 80%",
        "Reduce manual reporting by 90%",
        "Improve forecast accuracy by 65%",
        "Real-time business insights"
      ],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"]
    },
    {
      id: 2,
      name: "Cloud Migration Suite",
      category: "Cloud Computing",
      description: "Seamlessly migrate your applications to the cloud with our comprehensive migration tools and expert guidance.",
      features: [
        "Automated migration tools",
        "Zero-downtime migration",
        "Cost optimization analysis",
        "Security compliance",
        "Performance monitoring",
        "24/7 support"
      ],
      pricing: "Starting at $5,999/project",
      image: "☁️",
      popular: false,
      benefits: [
        "Reduce migration time by 70%",
        "Cut cloud costs by 40%",
        "Ensure 99.9% uptime",
        "Complete security compliance"
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"]
    },
    {
      id: 3,
      name: "Smart IoT Platform",
      category: "IoT Solutions",
      description: "Connect and manage your IoT devices with our intelligent platform that provides real-time monitoring and predictive maintenance.",
      features: [
        "Device management",
        "Real-time monitoring",
        "Predictive maintenance",
        "Data visualization",
        "Alert system",
        "Mobile app"
      ],
      pricing: "Starting at $1,999/month",
      image: "🌐",
      popular: true,
      benefits: [
        "Reduce maintenance costs by 50%",
        "Prevent 90% of equipment failures",
        "Improve operational efficiency by 60%",
        "Real-time device insights"
      ],
      technologies: ["Node.js", "MQTT", "React Native", "MongoDB", "AWS IoT"]
    },
    {
      id: 4,
      name: "Blockchain Payment Gateway",
      category: "Blockchain",
      description: "Secure, fast, and cost-effective payment processing using blockchain technology with support for multiple cryptocurrencies.",
      features: [
        "Multi-crypto support",
        "Instant transactions",
        "Low transaction fees",
        "Smart contracts",
        "API integration",
        "Fraud protection"
      ],
      pricing: "2.5% per transaction",
      image: "⛓️",
      popular: false,
      benefits: [
        "Reduce transaction fees by 80%",
        "Enable instant global payments",
        "Ensure transaction security",
        "Support multiple currencies"
      ],
      technologies: ["Ethereum", "Solidity", "Web3.js", "Node.js", "PostgreSQL"]
    },
    {
      id: 5,
      name: "Cybersecurity Shield",
      category: "Cybersecurity",
      description: "Comprehensive security solution that protects your digital assets with advanced threat detection and automated response.",
      features: [
        "Threat detection",
        "Automated response",
        "Security monitoring",
        "Compliance reporting",
        "Penetration testing",
        "Security training"
      ],
      pricing: "Starting at $3,999/month",
      image: "🔒",
      popular: true,
      benefits: [
        "Prevent 99.9% of cyber attacks",
        "Reduce security incidents by 95%",
        "Ensure compliance with regulations",
        "24/7 security monitoring"
      ],
      technologies: ["Python", "Machine Learning", "SIEM", "Docker", "AWS"]
    },
    {
      id: 6,
      name: "Mobile App Development Kit",
      category: "Mobile Development",
      description: "Complete toolkit for building cross-platform mobile applications with native performance and modern UI/UX.",
      features: [
        "Cross-platform development",
        "Native performance",
        "Modern UI components",
        "Push notifications",
        "Offline support",
        "App store deployment"
      ],
      pricing: "Starting at $4,999/app",
      image: "📱",
      popular: false,
      benefits: [
        "Reduce development time by 60%",
        "Single codebase for all platforms",
        "Native app performance",
        "Faster time to market"
      ],
      technologies: ["React Native", "Flutter", "TypeScript", "Firebase", "AWS"]
    }
  ];

  const categories = ["All", "AI & Machine Learning", "Cloud Computing", "IoT Solutions", "Blockchain", "Cybersecurity", "Mobile Development"];

  return (
    <Layout 
      title="Our Products - Zion Tech Solutions"
      description="Discover our innovative technology products and solutions. From AI analytics to cloud migration, we offer cutting-edge tools to transform your business."
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <main className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Our Technology Products
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our innovative technology products designed to solve real business challenges. 
              From AI-powered analytics to blockchain solutions, we provide cutting-edge tools that drive results.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  category === "All" 
                    ? "bg-blue-600 text-white" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Products */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Products</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {products.filter(product => product.popular).map((product) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 relative">
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    POPULAR
                  </div>
                  
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-6xl">{product.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">{product.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                      <p className="text-gray-200 mb-4">{product.description}</p>
                      <div className="text-2xl font-bold text-green-400">{product.pricing}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {product.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {product.benefits.slice(0, 4).map((benefit, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.technologies.map((tech, index) => (
                        <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex-1">
                      Get Started
                    </button>
                    <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* All Products Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{product.image}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-600 px-2 py-1 rounded-full text-xs">{product.category}</span>
                        {product.popular && (
                          <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
                    </div>
                  </div>

                  <p className="text-gray-200 text-sm mb-4 line-clamp-3">{product.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-xs text-gray-300 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Benefits</h4>
                    <ul className="space-y-1">
                      {product.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="text-xs text-gray-300 flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="text-lg font-bold text-green-400 mb-2">{product.pricing}</div>
                    <div className="flex flex-wrap gap-1">
                      {product.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-white/20 px-2 py-1 rounded text-xs text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm flex-1">
                      Get Started
                    </button>
                    <button className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-900 px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Product Comparison */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Product Comparison</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/20">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold">Product</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Category</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Pricing</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Key Features</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={product.id} className={`${index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'} hover:bg-white/20 transition-colors`}>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{product.image}</span>
                            <div>
                              <div className="font-semibold text-white">{product.name}</div>
                              {product.popular && (
                                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                                  POPULAR
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-blue-600 px-3 py-1 rounded-full text-sm text-white">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-green-400 font-semibold">{product.pricing}</td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-300">
                            {product.features.slice(0, 3).join(', ')}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-300">
                            {product.benefits[0]}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Custom Solutions */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold mb-6 text-white">Need a Custom Solution?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
                Don't see exactly what you need? Our team can create custom technology solutions 
                tailored to your specific business requirements and challenges.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Custom Development</h3>
                  <p className="text-sm text-gray-300">Bespoke software solutions built from scratch</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Integration Services</h3>
                  <p className="text-sm text-gray-300">Connect existing systems with new technologies</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Rapid Prototyping</h3>
                  <p className="text-sm text-gray-300">Quick proof-of-concept development</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                >
                  Discuss Custom Solution
                </Link>
                <Link 
                  href="/services" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Choose from our proven products or let us create a custom solution that perfectly fits your needs. 
              Start your digital transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/contact" 
                className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/case-studies" 
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Products;