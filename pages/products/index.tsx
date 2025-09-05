import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ProductsIndex: NextPage = () => {
  const softwareProducts = [
    {
      name: "ZionAI Analytics Suite",
      description: "Comprehensive business intelligence platform with AI-powered insights",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reporting", "API integration"],
      pricing: "Starting at $299/month",
      category: "AI Platform",
      link: "/products/zion-ai-analytics"
    },
    {
      name: "CloudSecure Pro",
      description: "Enterprise-grade cloud security and compliance management platform",
      features: ["Multi-cloud support", "Compliance monitoring", "Threat detection", "Automated remediation"],
      pricing: "Starting at $499/month",
      category: "Security",
      link: "/products/cloudsecure-pro"
    },
    {
      name: "DataFlow Engine",
      description: "Advanced data pipeline automation and ETL processing platform",
      features: ["Visual workflow builder", "Real-time processing", "Data quality checks", "Scalable architecture"],
      pricing: "Starting at $399/month",
      category: "Data Platform",
      link: "/products/dataflow-engine"
    },
    {
      name: "MobileFirst CMS",
      description: "Headless CMS optimized for mobile-first content delivery",
      features: ["Mobile optimization", "Multi-channel publishing", "Content versioning", "CDN integration"],
      pricing: "Starting at $199/month",
      category: "Content Management",
      link: "/products/mobilefirst-cms"
    },
    {
      name: "API Gateway Pro",
      description: "Enterprise API management and microservices orchestration platform",
      features: ["API versioning", "Rate limiting", "Authentication", "Analytics dashboard"],
      pricing: "Starting at $349/month",
      category: "API Management",
      link: "/products/api-gateway-pro"
    },
    {
      name: "IoT Connect Hub",
      description: "Comprehensive IoT device management and data processing platform",
      features: ["Device management", "Real-time monitoring", "Data visualization", "Alert system"],
      pricing: "Starting at $449/month",
      category: "IoT Platform",
      link: "/products/iot-connect-hub"
    }
  ];

  const consultingServices = [
    {
      name: "Digital Transformation Consulting",
      description: "End-to-end digital transformation strategy and implementation",
      duration: "3-12 months",
      pricing: "Starting at $15,000/month",
      link: "/products/digital-transformation"
    },
    {
      name: "AI Strategy & Implementation",
      description: "Custom AI strategy development and implementation roadmap",
      duration: "2-6 months",
      pricing: "Starting at $12,000/month",
      link: "/products/ai-strategy"
    },
    {
      name: "Cloud Architecture Review",
      description: "Comprehensive cloud infrastructure assessment and optimization",
      duration: "1-3 months",
      pricing: "Starting at $8,000/month",
      link: "/products/cloud-architecture-review"
    },
    {
      name: "Security Audit & Compliance",
      description: "Complete security assessment and compliance certification support",
      duration: "1-4 months",
      pricing: "Starting at $10,000/month",
      link: "/products/security-audit"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Products - Zion Tech Group | Software Solutions & Consulting Services</title>
        <meta name="description" content="Innovative software products and consulting services. From AI platforms to cloud solutions, we deliver cutting-edge technology products." />
        <meta name="keywords" content="software products, AI platform, cloud security, data analytics, consulting services, technology solutions" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Products & Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative software products and consulting services designed to solve complex business challenges 
            and accelerate digital transformation.
          </p>
        </div>

        {/* Software Products */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
            Software Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="text-sm text-gray-500 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="mb-1">• {feature}</li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-600">{product.pricing}</span>
                  <Link href={product.link} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Consulting Services */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
            Consulting Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Duration: {service.duration}</span>
                  <span className="text-lg font-semibold text-green-600">{service.pricing}</span>
                </div>
                <Link href={service.link} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors w-full text-center block">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Frontend</h3>
              <p className="text-sm text-gray-600">React, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Backend</h3>
              <p className="text-sm text-gray-600">Node.js, Python, Go, Microservices</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Cloud</h3>
              <p className="text-sm text-gray-600">AWS, Azure, Google Cloud, Kubernetes</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">AI/ML</h3>
              <p className="text-sm text-gray-600">TensorFlow, PyTorch, OpenAI, Custom Models</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8">Let's discuss your project and find the perfect solution for your needs</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              View Our Services
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductsIndex;