import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ProductsIndex: NextPage = () => {
  const products = [
    {
      id: 1,
      name: "AI-Powered Business Intelligence Platform",
      description: "Transform your data into actionable insights with our advanced AI-driven analytics platform.",
      features: [
        "Real-time data processing and analysis",
        "Predictive analytics and forecasting",
        "Customizable dashboards and reports",
        "Machine learning model integration",
        "Multi-cloud deployment support"
      ],
      pricing: "Starting at $2,999/month",
      category: "AI & Analytics",
      image: "ai-analytics"
    },
    {
      id: 2,
      name: "Blockchain Supply Chain Solution",
      description: "Ensure transparency and traceability across your entire supply chain with blockchain technology.",
      features: [
        "End-to-end product tracking",
        "Smart contract automation",
        "Fraud detection and prevention",
        "Real-time compliance monitoring",
        "Integration with existing ERP systems"
      ],
      pricing: "Custom pricing available",
      category: "Blockchain",
      image: "blockchain"
    },
    {
      id: 3,
      name: "Cloud-Native Application Platform",
      description: "Build, deploy, and scale applications with our comprehensive cloud-native platform.",
      features: [
        "Container orchestration with Kubernetes",
        "Auto-scaling and load balancing",
        "CI/CD pipeline automation",
        "Multi-cloud and hybrid deployment",
        "24/7 monitoring and support"
      ],
      pricing: "Starting at $1,499/month",
      category: "Cloud Computing",
      image: "cloud-platform"
    },
    {
      id: 4,
      name: "IoT Device Management Suite",
      description: "Connect, monitor, and manage your IoT devices with our comprehensive management platform.",
      features: [
        "Device provisioning and onboarding",
        "Real-time monitoring and alerts",
        "Firmware over-the-air updates",
        "Data analytics and visualization",
        "Security and compliance management"
      ],
      pricing: "Starting at $999/month",
      category: "IoT",
      image: "iot-management"
    },
    {
      id: 5,
      name: "Cybersecurity Defense Platform",
      description: "Protect your digital assets with our comprehensive cybersecurity solution.",
      features: [
        "Threat detection and response",
        "Vulnerability assessment and management",
        "Security awareness training",
        "Compliance monitoring and reporting",
        "24/7 security operations center"
      ],
      pricing: "Starting at $2,499/month",
      category: "Cybersecurity",
      image: "cybersecurity"
    },
    {
      id: 6,
      name: "Digital Transformation Consulting",
      description: "Accelerate your digital transformation journey with our expert consulting services.",
      features: [
        "Digital strategy development",
        "Technology assessment and planning",
        "Change management and training",
        "Implementation support",
        "Ongoing optimization and support"
      ],
      pricing: "Project-based pricing",
      category: "Consulting",
      image: "consulting"
    }
  ];

  const categories = ["All", "AI & Analytics", "Blockchain", "Cloud Computing", "IoT", "Cybersecurity", "Consulting"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Products & Solutions | Zion Tech Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of technology products and solutions designed to transform your business. From AI and blockchain to cloud computing and cybersecurity." />
        <meta name="keywords" content="technology products, AI solutions, blockchain platform, cloud computing, IoT management, cybersecurity, digital transformation" />
      </Head>
      
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Technology Products & Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your business with our comprehensive suite of cutting-edge technology solutions. 
            From AI-powered analytics to blockchain platforms, we provide the tools you need to succeed in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Custom Quote
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View Our Services
            </Link>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-48 bg-gradient-to-br ${
                product.image === 'ai-analytics' ? 'from-blue-500 to-purple-600' :
                product.image === 'blockchain' ? 'from-green-500 to-teal-600' :
                product.image === 'cloud-platform' ? 'from-orange-500 to-red-600' :
                product.image === 'iot-management' ? 'from-purple-500 to-pink-600' :
                product.image === 'cybersecurity' ? 'from-red-500 to-orange-600' :
                'from-gray-500 to-gray-700'
              } flex items-center justify-center`}>
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">{product.category}</h3>
                  <p className="text-sm opacity-90">Technology Solution</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                    {product.features.length > 3 && (
                      <li className="text-blue-600">+{product.features.length - 3} more features</li>
                    )}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-gray-900">{product.pricing}</p>
                  </div>
                  <Link 
                    href="/contact"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you choose the right solutions for your specific needs. 
            Get a personalized consultation and see how our products can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn About Us
            </Link>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Zion Tech Solutions transformed our data analytics capabilities. The AI platform has given us insights we never had before."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-500">CTO, TechCorp</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Their blockchain solution revolutionized our supply chain transparency. We can now track every product from source to customer."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Michael Chen</p>
                <p className="text-sm text-gray-500">VP Operations, GlobalSupply</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The cloud platform they built for us is incredibly scalable and reliable. It's been a game-changer for our business."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                <p className="text-sm text-gray-500">CEO, StartupXYZ</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsIndex;
