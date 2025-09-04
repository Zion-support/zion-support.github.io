import Link from 'next/link';
import Head from 'next/head';

export default function Partners() {
  const partners = [
    {
      name: "Microsoft",
      logo: "/api/placeholder/200/100",
      description: "Strategic partnership for Azure cloud services and enterprise solutions.",
      category: "Cloud & Infrastructure"
    },
    {
      name: "Amazon Web Services",
      logo: "/api/placeholder/200/100",
      description: "Premier AWS partner providing scalable cloud solutions and AI services.",
      category: "Cloud & Infrastructure"
    },
    {
      name: "Google Cloud",
      logo: "/api/placeholder/200/100",
      description: "Google Cloud partner specializing in AI/ML and data analytics solutions.",
      category: "AI & Analytics"
    },
    {
      name: "IBM",
      logo: "/api/placeholder/200/100",
      description: "IBM partner for quantum computing and enterprise AI solutions.",
      category: "Quantum Computing"
    },
    {
      name: "NVIDIA",
      logo: "/api/placeholder/200/100",
      description: "NVIDIA partner for GPU-accelerated AI and machine learning solutions.",
      category: "AI & Analytics"
    },
    {
      name: "Cisco",
      logo: "/api/placeholder/200/100",
      description: "Cisco partner for networking, security, and infrastructure solutions.",
      category: "Networking & Security"
    }
  ];

  const benefits = [
    {
      title: "Technology Access",
      description: "Get early access to cutting-edge technologies and platforms from our partners.",
      icon: "🔧"
    },
    {
      title: "Expert Support",
      description: "Leverage our partners' expertise and support for your technology initiatives.",
      icon: "👥"
    },
    {
      title: "Cost Savings",
      description: "Benefit from partner pricing and volume discounts on technology solutions.",
      icon: "💰"
    },
    {
      title: "Innovation",
      description: "Access to the latest innovations and beta programs from leading technology companies.",
      icon: "🚀"
    }
  ];

  return (
    <>
      <Head>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies including Microsoft, AWS, Google Cloud, IBM, NVIDIA, and Cisco for comprehensive solutions." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, IBM, NVIDIA, Cisco, technology partnerships, strategic alliances" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Partners - Zion Tech Group | Strategic Technology Partnerships" />
        <meta property="og:description" content="Explore our strategic partnerships with leading technology companies for comprehensive solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Partners - Zion Tech Group | Strategic Technology Partnerships" />
        <meta name="twitter:description" content="Explore our strategic partnerships with leading technology companies." />
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
                <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                <Link href="/partners" className="text-blue-600 font-medium">Partners</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic Technology Partnerships
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We partner with industry leaders to deliver comprehensive technology solutions and drive innovation for our clients.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Technology Partners
              </h2>
              <p className="text-xl text-gray-600">
                Strategic alliances with leading technology companies to provide comprehensive solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="h-24 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-gray-500 font-semibold">{partner.name}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">{partner.category}</p>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Partnership Benefits
              </h2>
              <p className="text-xl text-gray-600">
                How our strategic partnerships benefit your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Interested in partnering with Zion Tech Group? We're always looking for innovative companies to collaborate with.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Partner With Us
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors">
                Learn More
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