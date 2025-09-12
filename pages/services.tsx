import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Transform your business with intelligent automation and data-driven insights",
      services: [
        "AI-Powered Business Intelligence",
        "Machine Learning Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants"
      ],
      icon: "🤖",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum Computing",
      description: "Harness the power of quantum mechanics for unprecedented computational capabilities",
      services: [
        "Quantum Algorithm Development",
        "Quantum Machine Learning",
        "Quantum Cryptography",
        "Quantum Simulation",
        "Quantum Optimization",
        "Quantum Cloud Services"
      ],
      icon: "⚛️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security solutions",
      services: [
        "Zero Trust Architecture",
        "Threat Detection & Response",
        "Security Compliance",
        "Penetration Testing",
        "Incident Response",
        "Security Training"
      ],
      icon: "🔒",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud Infrastructure",
      description: "Build scalable, resilient cloud solutions for modern businesses",
      services: [
        "Cloud Migration",
        "DevOps Automation",
        "Container Orchestration",
        "Serverless Architecture",
        "Multi-Cloud Strategy",
        "Cloud Security"
      ],
      icon: "☁️",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive technology services including AI, quantum computing, cybersecurity, and cloud infrastructure." />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">Zion Tech Group</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/services" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link href="/about" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/contact" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-16">
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that drive innovation, 
              enhance security, and accelerate your digital transformation.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {serviceCategories.map((category, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-lg bg-gradient-to-br ${category.color} hover:scale-105 transition-transform duration-300`}
                >
                  <div className="text-6xl mb-6">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-white/90 mb-6">{category.description}</p>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-white/80 flex items-center">
                        <span className="mr-2">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our services can transform your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
              <p className="mt-4 text-gray-300">
                Leading the way in technological innovation and digital transformation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/services" className="hover:text-white">AI Solutions</Link></li>
                <li><Link href="/services" className="hover:text-white">Quantum Computing</Link></li>
                <li><Link href="/services" className="hover:text-white">Cybersecurity</Link></li>
                <li><Link href="/services" className="hover:text-white">Cloud Infrastructure</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-center text-gray-400">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
