import Link from 'next/link';
import Head from 'next/head';

export default function Marketplace() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com' 
  };

  const marketplaceCategories = [
    {
      title: "Products",
      description: "Discover innovative technology products and solutions",
      icon: "🛍️",
      items: [
        { name: "AI-Powered Analytics Platform", price: "Starting at $299/month", category: "AI & Analytics" },
        { name: "Cloud Infrastructure Suite", price: "Starting at $199/month", category: "Cloud Computing" },
        { name: "Cybersecurity Monitoring Tool", price: "Starting at $149/month", category: "Security" },
        { name: "Quantum Computing Simulator", price: "Starting at $499/month", category: "Quantum Computing" }
      ]
    },
    {
      title: "Talent",
      description: "Connect with skilled technology professionals",
      icon: "👥",
      items: [
        { name: "Senior AI/ML Engineers", price: "$120-180/hour", category: "AI & Machine Learning" },
        { name: "Cloud DevOps Specialists", price: "$100-150/hour", category: "Cloud & DevOps" },
        { name: "Cybersecurity Experts", price: "$110-170/hour", category: "Cybersecurity" },
        { name: "Quantum Computing Researchers", price: "$150-250/hour", category: "Quantum Computing" }
      ]
    },
    {
      title: "Equipment",
      description: "Access cutting-edge technology equipment and hardware",
      icon: "🔧",
      items: [
        { name: "High-Performance Servers", price: "Starting at $2,999", category: "Hardware" },
        { name: "Quantum Computing Hardware", price: "Starting at $50,000", category: "Quantum Hardware" },
        { name: "Network Security Appliances", price: "Starting at $1,999", category: "Security Hardware" },
        { name: "Edge Computing Devices", price: "Starting at $499", category: "IoT & Edge" }
      ]
    },
    {
      title: "Services",
      description: "Professional technology services and consulting",
      icon: "⚙️",
      items: [
        { name: "Digital Transformation Consulting", price: "$200-300/hour", category: "Consulting" },
        { name: "Cloud Migration Services", price: "$150-250/hour", category: "Cloud Services" },
        { name: "Security Assessment & Auditing", price: "$180-280/hour", category: "Security Services" },
        { name: "Custom Software Development", price: "$120-200/hour", category: "Development" }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Marketplace - Zion Tech Group | Technology Products & Services</title>
        <meta name="description" content="Explore our comprehensive marketplace of technology products, services, talent, and equipment. Find everything you need for your digital transformation journey." />
        <meta name="keywords" content="technology marketplace, AI products, cloud services, cybersecurity tools, quantum computing, tech talent, equipment rental" />
        <link rel="canonical" href={`${contact.site}/marketplace`} />
        <meta property="og:title" content="Marketplace - Zion Tech Group | Technology Products & Services" />
        <meta property="og:description" content="Explore our comprehensive marketplace of technology products, services, talent, and equipment." />
        <meta property="og:url" content={`${contact.site}/marketplace`} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Technology Marketplace
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover innovative products, connect with top talent, access cutting-edge equipment, and find professional services all in one place.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {marketplaceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-blue-600 font-medium mb-1">{item.price}</p>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Link 
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View All {category.title} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Featured This Month
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Analytics Platform</h3>
                <p className="text-gray-600 mb-4">Advanced machine learning algorithms for business intelligence and predictive analytics.</p>
                <div className="text-blue-600 font-medium">Starting at $299/month</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Migration Services</h3>
                <p className="text-gray-600 mb-4">Expert assistance with seamless cloud migration and optimization strategies.</p>
                <div className="text-blue-600 font-medium">$150-250/hour</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity Assessment</h3>
                <p className="text-gray-600 mb-4">Comprehensive security evaluation and hardening for your infrastructure.</p>
                <div className="text-blue-600 font-medium">$180-280/hour</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Explore Our Marketplace?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Browse our comprehensive selection of technology products, services, and talent to find exactly what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <a 
                href={`tel:${contact.phone}`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}