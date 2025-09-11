import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentService, setCurrentService] = useState(0);

  const services = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence for business transformation",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum technology solutions",
      icon: "⚛️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and threat protection",
      icon: "🔒",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses",
      icon: "☁️",
      color: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions including AI, quantum computing, cybersecurity, and cloud infrastructure." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Zion Tech Group</h1>
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
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">Transform Your Business</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      With Next-Gen Tech
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Zion Tech Group delivers cutting-edge technology solutions that drive innovation, 
                    enhance security, and accelerate your digital transformation journey.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link href="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 md:py-4 md:text-lg md:px-10">
                        Get Started
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link href="/services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-300 bg-blue-900/20 hover:bg-blue-900/30 md:py-4 md:text-lg md:px-10">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>

        {/* Services Showcase */}
        <div className="py-12 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Our Core Services
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Delivering innovative solutions across the technology spectrum
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-lg bg-gradient-to-br ${service.color} hover:scale-105 transition-transform duration-300 cursor-pointer`}
                  onClick={() => setCurrentService(index)}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Service */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  {services[currentService].title}
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  {services[currentService].description}
                </p>
                <div className="mt-8">
                  <Link href="/services" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Explore Services
                  </Link>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="text-8xl text-center">{services[currentService].icon}</div>
              </div>
            </div>
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
