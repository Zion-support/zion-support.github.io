import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: '🚀' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: '⚡' },
    { number: '24/7', label: 'Support Available', icon: '🛡️' },
    { number: '50+', label: 'AI Services', icon: '🤖' },
    { number: '100+', label: 'Happy Clients', icon: '😊' },
    { number: '5+', label: 'Years Experience', icon: '⭐' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive advantage.',
      icon: '💡'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional results.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique needs and co-creating solutions that drive success.',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices, building trust through every interaction.',
      icon: '🔒'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to provide innovative AI and IT solutions for businesses worldwide." />
        <meta name="keywords" content="about, company, AI services, IT solutions, technology, innovation" />
      </Helmet>
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="animated-grid"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`fade-in ${visibleElements.has('hero') ? 'visible' : ''}`} id="hero">
              <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
                <span className="holographic">About Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto">
                We are pioneers in AI and IT innovation, dedicated to transforming businesses through cutting-edge technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className={`slide-in-left ${visibleElements.has('mission') ? 'visible' : ''}`} id="mission">
                <div className="neon-card h-full">
                  <div className="text-4xl mb-6">🎯</div>
                  <h2 className="text-3xl font-bold neon-text mb-6">Our Mission</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    To empower businesses with cutting-edge AI and IT solutions that transform their operations, 
                    drive sustainable growth, and create lasting competitive advantages in the digital age.
                  </p>
                  <p className="text-gray-400">
                    We believe technology should be accessible, powerful, and transformative for businesses of all sizes.
                  </p>
                </div>
              </div>

              <div className={`slide-in-right ${visibleElements.has('vision') ? 'visible' : ''}`} id="vision">
                <div className="neon-card h-full">
                  <div className="text-4xl mb-6">🔮</div>
                  <h2 className="text-3xl font-bold neon-text-purple mb-6">Our Vision</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    To be the global leader in AI and IT innovation, helping organizations achieve their digital 
                    transformation goals while building a more connected, intelligent, and efficient world.
                  </p>
                  <p className="text-gray-400">
                    We envision a future where every business can leverage the power of AI to reach its full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`fade-in ${visibleElements.has('stats') ? 'visible' : ''}`} id="stats">
              <h2 className="text-4xl font-bold text-center mb-4">
                <span className="holographic">Our Impact</span>
              </h2>
              <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
                Numbers that speak to our commitment to excellence and client success.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`fade-in ${visibleElements.has(`stat-${index}`) ? 'visible' : ''}`} 
                  id={`stat-${index}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="neon-card text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className="text-3xl font-bold neon-text mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`fade-in ${visibleElements.has('values-title') ? 'visible' : ''}`} id="values-title">
              <h2 className="text-4xl font-bold text-center mb-4">
                <span className="holographic">Our Values</span>
              </h2>
              <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className={`fade-in ${visibleElements.has(`value-${index}`) ? 'visible' : ''}`} 
                  id={`value-${index}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="neon-card h-full group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`slide-in-left ${visibleElements.has('story') ? 'visible' : ''}`} id="story">
                <h2 className="text-4xl font-bold neon-text mb-6">Our Story</h2>
                <div className="space-y-6 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Founded in 2019, Zion Tech Group began as a small team of passionate technologists 
                    who believed in the transformative power of artificial intelligence and modern IT solutions.
                  </p>
                  <p className="text-lg leading-relaxed">
                    What started as a vision to democratize AI technology has grown into a comprehensive 
                    platform serving businesses worldwide with innovative solutions that drive real results.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Today, we're proud to be at the forefront of technological innovation, helping companies 
                    of all sizes harness the power of AI and modern IT infrastructure to achieve their goals.
                  </p>
                </div>
              </div>

              <div className={`slide-in-right ${visibleElements.has('timeline') ? 'visible' : ''}`} id="timeline">
                <div className="neon-card">
                  <h3 className="text-2xl font-bold neon-text-purple mb-6">Our Journey</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 mr-4"></div>
                      <div>
                        <h4 className="font-semibold text-white">2019 - Foundation</h4>
                        <p className="text-gray-400 text-sm">Company founded with a vision to democratize AI</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 mr-4"></div>
                      <div>
                        <h4 className="font-semibold text-white">2020 - First AI Solutions</h4>
                        <p className="text-gray-400 text-sm">Launched our first AI-powered micro SAAS products</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-pink-400 rounded-full mt-2 mr-4"></div>
                      <div>
                        <h4 className="font-semibold text-white">2021 - Enterprise Growth</h4>
                        <p className="text-gray-400 text-sm">Expanded to serve enterprise clients globally</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4"></div>
                      <div>
                        <h4 className="font-semibold text-white">2024 - Innovation Leader</h4>
                        <p className="text-gray-400 text-sm">Recognized as a leader in AI and IT innovation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`fade-in ${visibleElements.has('team-title') ? 'visible' : ''}`} id="team-title">
              <h2 className="text-4xl font-bold text-center mb-4">
                <span className="holographic">Meet Our Team</span>
              </h2>
              <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
                Talented professionals dedicated to delivering exceptional results for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="neon-card text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Leadership Team</h3>
                <p className="text-gray-400 mb-4">Experienced executives with decades of combined experience in technology and business leadership.</p>
                <Link to="/team" className="neon-button text-sm">
                  Meet Leadership
                </Link>
              </div>

              <div className="neon-card text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">👨‍💻</span>
                </div>
                <h3 className="text-xl font-bold mb-2">AI Engineers</h3>
                <p className="text-gray-400 mb-4">World-class AI researchers and engineers pushing the boundaries of machine learning and artificial intelligence.</p>
                <Link to="/team" className="neon-button neon-button-purple text-sm">
                  Meet Engineers
                </Link>
              </div>

              <div className="neon-card text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">👩‍💼</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Support Team</h3>
                <p className="text-gray-400 mb-4">Dedicated support professionals ensuring our clients receive exceptional service and assistance.</p>
                <Link to="/team" className="neon-button text-sm">
                  Meet Support
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className={`fade-in ${visibleElements.has('cta') ? 'visible' : ''}`} id="cta">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of satisfied clients who have transformed their businesses with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="neon-button text-lg px-8 py-4">
                  Get Started Today
                </Link>
                <Link to="/services" className="neon-button neon-button-purple text-lg px-8 py-4">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;