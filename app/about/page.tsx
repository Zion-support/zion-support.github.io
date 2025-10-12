import { Users, Target, Award, Globe, Zap, Shield, Database, Brain, Cpu, Cloud } from 'lucide-react'      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'Results-Driven',
      description: 'We measure our success by the tangible results and ROI we deliver to our clients.'    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      description: 'Expert in cloud architecture and scalable system design.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Research',
      description: 'Leading researcher in machine learning and neural networks.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'David Kim',
      role: 'Head of Security',
      description: 'Cybersecurity expert with extensive experience in enterprise security.',
      image: '/api/placeholder/150/150'    { number: '1,200+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6 text-cyan-400" /> },
    { number: '99.8%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '150+', label: 'Expert Team Members', icon: <Users className="w-6 h-6 text-purple-400" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6 text-orange-400" /> },
    { number: '300%', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6 text-pink-400" /> }
  ]

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize business through AI and technology.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and delivered a comprehensive AI solution that increased their efficiency by 300%.'
    },
    {
      year: '2022',
      title: 'Cloud Infrastructure Launch',
      description: 'Launched our cloud migration services, helping 50+ companies transition to modern cloud architectures.'
    },
    {
      year: '2023',
      title: 'AI Platform Expansion',
      description: 'Expanded our AI services portfolio with advanced machine learning and automation solutions.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Opened offices in 5 countries and served clients across 50+ nations worldwide.'
    }  ]
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/analyze-improve-and-deploy-application-9d9d

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're leading the future of AI and IT solutions." />
        <meta name="keywords" content="about us, team, mission, values, AI company, IT services" />        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Zap className="w-4 h-4" />
              <span>About Zion Tech Group</span>            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Pioneering the
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Future of Technology
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions." />
        <meta name="keywords" content="about, company, AI solutions, IT services, team" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Zion Tech Group
>>>>>>> cursor/analyze-improve-and-deploy-application-9d9d
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of AI and IT solutions with innovation, expertise, and unwavering commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6">
                At Zion Tech Group, we are dedicated to transforming businesses through cutting-edge AI and IT solutions. 
                Our mission is to empower organizations with innovative technology that drives growth, efficiency, and competitive advantage.
              </p>
              <p className="text-gray-300 text-lg">
                We believe in the power of artificial intelligence and advanced technology to solve complex business challenges 
                and create opportunities for sustainable growth in the digital age.        {/* Our Story Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                From a vision to transform businesses through technology to becoming a global leader in AI and IT solutions.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-gray-300">Pioneering new technologies and approaches to solve complex business challenges.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-gray-300">Delivering high-quality solutions that exceed expectations and drive results.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Partnership</h3>
              <p className="text-gray-300">Building long-term relationships based on trust, collaboration, and mutual success.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Get Started Today
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;