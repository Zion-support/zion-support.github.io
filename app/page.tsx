import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [matrixChars, setMatrixChars] = useState<string[]>([]);

  useEffect(() => {
    // Generate matrix rain characters
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const matrixArray = Array.from({ length: 100 }, () => 
      chars[Math.floor(Math.random() * chars.length)]
    );
    setMatrixChars(matrixArray);
  }, []);

  const services = [
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions',
      icon: '🤖',
      link: '/ai-services',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Micro SAAS',
      description: 'Innovative software-as-a-service solutions',
      icon: '⚡',
      link: '/micro-saas-solutions',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'IT Solutions',
      description: 'Comprehensive IT infrastructure services',
      icon: '💻',
      link: '/it-services',
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'AI Models Deployed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, artificial intelligence, cloud infrastructure, digital transformation" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions for modern businesses." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Matrix Rain Background */}
      <div className="matrix-bg">
        {matrixChars.map((char, index) => (
          <div
            key={index}
            className="matrix-rain"
            style={{
              left: `${(index % 10) * 10}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          >
            {char}
          </div>
        ))}
      </div>

      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                  <span className="gradient-text">Zion Tech Group</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Advanced AI and IT Solutions for the 
                  <span className="neon-text"> Future</span>
                </p>
              </div>

              {/* Subtitle */}
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence, 
                innovative micro SAAS solutions, and robust IT infrastructure. 
                We help companies thrive in the digital age.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <Link
                  to="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </Link>
                
                <Link
                  to="/services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </Link>
              </div>

              {/* Contact Info */}
              <div className="pt-8 space-y-2">
                <p className="text-gray-400">Ready to transform your business?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-cyan-400">
                  <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                    📞 +1 302 464 0950
                  </a>
                  <span className="hidden sm:block">•</span>
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                    ✉️ kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl floating"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl floating" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl floating" style={{ animationDelay: '2s' }}></div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive solutions designed to accelerate your digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group relative p-8 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that trust Zion Tech Group for their AI and IT needs. 
                Let's build the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                </Link>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;