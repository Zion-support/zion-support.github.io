import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI solutions, ML model development, and intelligent automation",
      icon: "🤖"
    },
    {
      title: "Enterprise IT Solutions",
      description: "Cloud infrastructure, DevOps, security, and system integration",
      icon: "⚡"
    },
    {
      title: "Micro SaaS Development",
      description: "Rapid prototyping, MVP development, and scalable SaaS platforms",
      icon: "🚀"
    }
  ];

  const features = [
    "1000% ROI Target with Measurable KPIs",
    "Enterprise-Grade Security & Compliance",
    "24/7 Support with SLAs",
    "Fast Onboarding with Templates",
    "Transparent Pricing",
    "Proven Architectures"
  ];

  return (
    <div>
      <Head>
        <title>Zion Tech Group - AI, IT & Micro SaaS Services</title>
        <meta name="description" content="Leading provider of AI solutions, enterprise IT services, and micro SaaS development. 1000% ROI target with proven architectures and 24/7 support." />
        <meta name="keywords" content="AI services, IT solutions, micro SaaS, machine learning, cloud infrastructure, DevOps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-b border-white/10 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-white font-semibold">Home</Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </div>
              <a href="tel:+13024640950" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Call Now
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transforming businesses with cutting-edge AI solutions, enterprise IT services, and rapid micro SaaS development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services-advertising" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Explore Services
              </Link>
              <a href="tel:+13024640950" className="border-2 border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Zion Tech Group?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="text-gray-200">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center mt-16">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/30">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-300 mb-6">Get in touch with our experts for a free consultation</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:kleber@ziontechgroup.com" className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Email Us
                </a>
                <a href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Visit Our Office
                </a>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}