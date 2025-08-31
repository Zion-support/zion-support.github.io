import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Products: NextPage = () => {
  const products = [
    {
      title: "ZionAI Platform",
      description: "Enterprise-grade AI platform for building, deploying, and managing machine learning models at scale.",
      icon: "🤖",
      category: "AI & Machine Learning",
      features: ["Model Training & Deployment", "AutoML Capabilities", "Real-time Inference", "Model Monitoring"],
      link: "/products/zion-ai-platform"
    },
    {
      title: "CloudSync Pro",
      description: "Advanced cloud synchronization and backup solution for enterprise data management.",
      icon: "☁️",
      category: "Cloud Solutions",
      features: ["Multi-cloud Support", "Automated Backups", "Data Encryption", "Compliance Ready"],
      link: "/products/cloudsync-pro"
    },
    {
      title: "SecureNet Gateway",
      description: "Next-generation cybersecurity gateway with advanced threat detection and prevention.",
      icon: "🔒",
      category: "Cybersecurity",
      features: ["Threat Intelligence", "Zero-day Protection", "Network Monitoring", "Incident Response"],
      link: "/products/securenet-gateway"
    },
    {
      title: "DataViz Studio",
      description: "Comprehensive data visualization and business intelligence platform for actionable insights.",
      icon: "📊",
      category: "Data Analytics",
      features: ["Interactive Dashboards", "Real-time Analytics", "Custom Reports", "Data Integration"],
      link: "/products/dataviz-studio"
    },
    {
      title: "IoT Connect Hub",
      description: "Centralized IoT device management and data collection platform for smart environments.",
      icon: "📡",
      category: "IoT Solutions",
      features: ["Device Management", "Data Collection", "Real-time Monitoring", "Predictive Analytics"],
      link: "/products/iot-connect-hub"
    },
    {
      title: "BlockChain Suite",
      description: "Complete blockchain development and deployment platform for decentralized applications.",
      icon: "⛓️",
      category: "Blockchain",
      features: ["Smart Contract Development", "DeFi Tools", "NFT Marketplace", "Supply Chain Tracking"],
      link: "/products/blockchain-suite"
    },
    {
      title: "DevOps Pipeline",
      description: "Automated CI/CD pipeline solution for streamlined software development and deployment.",
      icon: "⚙️",
      category: "DevOps",
      features: ["Automated Testing", "Continuous Deployment", "Infrastructure as Code", "Performance Monitoring"],
      link: "/products/devops-pipeline"
    },
    {
      title: "Mobile App Builder",
      description: "Low-code mobile application development platform for rapid app creation and deployment.",
      icon: "📱",
      category: "Mobile Development",
      features: ["Drag & Drop Interface", "Cross-platform Support", "Native Performance", "App Store Integration"],
      link: "/products/mobile-app-builder"
    }
  ];

  const categories = ["All", "AI & Machine Learning", "Cloud Solutions", "Cybersecurity", "Data Analytics", "IoT Solutions", "Blockchain", "DevOps", "Mobile Development"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Products - Zion Tech Group</title>
        <meta name="description" content="Innovative technology products and platforms including AI solutions, cloud services, cybersecurity tools, and more. Transform your business with our cutting-edge products." />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Innovative technology products and platforms designed to solve complex business challenges 
            and drive digital transformation.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Request Demo
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge products built with the latest technologies to address modern business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{product.icon}</div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 mb-1 flex items-center">
                      <span className="text-blue-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Link href={product.link} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center">
                    Learn More
                  </Link>
                  <Link href="/contact" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors">
                    Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our products are built with enterprise-grade quality and designed for scalability and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🚀
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Performance</h3>
              <p className="text-gray-600">Built for speed and efficiency to handle your most demanding workloads.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🔒
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-grade security with encryption, compliance, and threat protection.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                📈
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Architecture</h3>
              <p className="text-gray-600">Designed to grow with your business from startup to enterprise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Products?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how our products can transform your business operations.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;