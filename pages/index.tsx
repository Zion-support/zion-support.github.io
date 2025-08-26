import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$100B+', label: 'Combined Market Value', color: 'text-yellow-400' },
    { value: '1200%+', label: 'Average ROI', color: 'text-purple-400' },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const featuredServices = [
    {
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence systems for business automation and decision-making',
      link: '/services/ai-solutions',
      icon: '🤖'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud-native platforms and infrastructure solutions',
      link: '/services/cloud-infrastructure',
      icon: '☁️'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for modern digital threats',
      link: '/services/cybersecurity',
      icon: '🔒'
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing and optimization services',
      link: '/services/quantum-computing',
      icon: '⚛️'
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group — AI, Cloud, and Cybersecurity Solutions</title>
        <meta name="description" content="We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group — AI, Cloud, and Cybersecurity Solutions" />
        <meta property="og:description" content="We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business." />
        <meta property="og:url" content="https://ziontechgroup.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group — AI, Cloud, and Cybersecurity Solutions" />
        <meta name="twitter:description" content="We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business." />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Zion Tech Group',
              url: 'https://ziontechgroup.com/',
              logo: 'https://ziontechgroup.com/favicon.svg',
              sameAs: ['https://www.linkedin.com/company/zion-technologies/'],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: contactInfo.mobile,
                email: contactInfo.email,
                contactType: 'customer service'
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: contactInfo.address
              }
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Services
              </Link>
              <Link 
                href="/contact" 
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              Our Core Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredServices.map((service, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link 
                    href={service.link}
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join the future of technology with Zion Tech Group's cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/pricing" 
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-blue-400 font-semibold mb-2">Phone</div>
                <div className="text-gray-300">{contactInfo.mobile}</div>
              </div>
              <div>
                <div className="text-blue-400 font-semibold mb-2">Email</div>
                <div className="text-gray-300">{contactInfo.email}</div>
              </div>
              <div>
                <div className="text-blue-400 font-semibold mb-2">Address</div>
                <div className="text-gray-300">{contactInfo.address}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
