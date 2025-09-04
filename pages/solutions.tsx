import Link from 'next/link';
import Head from 'next/head';

export default function Solutions() {
  const solutions = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      icon: "🧠",
      features: ["Predictive Analytics", "Real-time Dashboards", "Automated Reporting", "Machine Learning Models"]
    },
    {
      title: "Quantum Computing Solutions",
      description: "Leverage quantum computing for complex optimization and cryptography challenges.",
      icon: "⚛️",
      features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Research & Development"]
    },
    {
      title: "Micro SaaS Platform",
      description: "Scalable, focused software solutions that address specific business needs.",
      icon: "🔧",
      features: ["Rapid Deployment", "Scalable Architecture", "API Integration", "Custom Development"]
    },
    {
      title: "Cybersecurity Suite",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
      icon: "🛡️",
      features: ["Threat Detection", "Vulnerability Assessment", "Incident Response", "Compliance Management"]
    },
    {
      title: "Cloud DevOps Platform",
      description: "Streamline development and operations with our cloud-native DevOps solutions.",
      icon: "☁️",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Auto-scaling"]
    },
    {
      title: "IoT & Edge Computing",
      description: "Connect and process data from IoT devices with edge computing capabilities.",
      icon: "🌐",
      features: ["Device Management", "Real-time Processing", "Edge Analytics", "Data Synchronization"]
    }
  ];

  return (
    <>
      <Head>
        <title>Solutions - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive technology solutions including AI, quantum computing, micro SaaS, cybersecurity, cloud DevOps, and IoT solutions." />
        <meta name="keywords" content="solutions, AI solutions, quantum computing, micro SaaS, cybersecurity, cloud DevOps, IoT, edge computing, technology solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Solutions - Zion Tech Group | Comprehensive Technology Solutions" />
        <meta property="og:description" content="Explore our comprehensive technology solutions for modern businesses." />
        <meta property="og:url" content="https://ziontechgroup.com/solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solutions - Zion Tech Group | Comprehensive Technology Solutions" />
        <meta name="twitter:description" content="Explore our comprehensive technology solutions for modern businesses." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.svg" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  Zion Tech Group
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
                <Link href="/solutions" className="text-blue-600 font-medium">Solutions</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover our innovative solutions designed to transform your business and drive digital success.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Technology Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Cutting-edge solutions tailored to meet your business needs and drive innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="text-blue-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our experts help you choose the right solutions for your specific needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
                <p className="text-gray-400">
                  Leading provider of innovative technology solutions and services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/services" className="hover:text-white">All Services</Link></li>
                  <li><Link href="/ai-services" className="hover:text-white">AI Services</Link></li>
                  <li><Link href="/micro-saas" className="hover:text-white">Micro SaaS</Link></li>
                  <li><Link href="/it-services" className="hover:text-white">IT Services</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                  <li><Link href="/team" className="hover:text-white">Team</Link></li>
                  <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                  <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                  <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                  <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}