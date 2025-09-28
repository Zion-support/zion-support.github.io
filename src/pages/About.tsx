import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Target, Award, Globe, Lightbulb, Shield, Zap, Heart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About(): React.JSX.Element {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Our solutions are built with security and reliability at their core, ensuring your business operations run smoothly.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique needs and delivering tailored solutions.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from initial consultation to final delivery.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '50+', label: 'Expert Team Members', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Heart },
    { number: '24/7', label: 'Support Available', icon: Zap }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize business through AI and IT solutions.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Secured our first Fortune 500 client and began building our reputation in enterprise solutions.'
    },
    {
      year: '2022',
      title: 'AI Innovation Lab',
      description: 'Opened our dedicated AI research and development lab to stay at the forefront of technology.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across North America, Europe, and Asia.'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Received multiple industry awards for innovation and excellence in AI and IT solutions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our mission is to transform businesses through innovative technology." />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Leading AI & IT solutions provider" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Zion Tech Group" />
        <meta name="twitter:description" content="Leading AI & IT solutions provider" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 border border-zion-cyan/30">
              <Globe className="w-4 h-4 mr-2" />
              Trusted Worldwide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <stat.icon className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-zion-slate-light text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                At Zion Tech Group, our mission is to empower businesses with cutting-edge AI and IT solutions that drive growth, efficiency, and innovation. We believe technology should be accessible, reliable, and transformative.
              </p>
              <p className="text-zion-slate-light leading-relaxed">
                Founded in 2020, we have been at the forefront of technological advancement, helping organizations across various industries leverage the power of artificial intelligence and modern IT infrastructure.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                We envision a future where technology seamlessly integrates with human potential, creating opportunities for unprecedented growth and innovation. Our goal is to be the catalyst for this transformation.
              </p>
              <p className="text-zion-slate-light leading-relaxed">
                Through our commitment to excellence, innovation, and client success, we strive to be the trusted partner for businesses seeking to embrace the digital future.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                These core values guide everything we do and shape our culture of excellence and innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-zion-blue-light to-zion-purple-light mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                From our founding to becoming a global leader in AI and IT solutions.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-zion-cyan to-zion-purple"></div>
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                      <div className="text-2xl font-bold text-zion-cyan mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-zion-slate-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
}