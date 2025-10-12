import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Award, Target, Lightbulb, Shield, Globe, Zap, Brain, Cpu, Rocket, CheckCircle, Star, Clock, TrendingUp, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package, DollarSign } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-cyan-400" />,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value.'
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security measures and compliance standards.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Client-Centric',
      description: 'We put our clients at the center of everything we do, ensuring their success is our primary focus.'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'Results-Driven',
      description: 'We measure our success by the tangible results and ROI we deliver to our clients.'
    }
  ]

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'Founder & CEO',
      description: 'AI and Technology Visionary with 15+ years of experience in enterprise solutions.',
      image: '/team/kleber-santos.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Cloud Architecture Expert specializing in scalable infrastructure and DevOps.',
      image: '/team/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      description: 'Machine Learning Specialist with expertise in NLP and computer vision.',
      image: '/team/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Cybersecurity',
      description: 'Cybersecurity Expert with certifications in ethical hacking and compliance.',
      image: '/team/emily-rodriguez.jpg'
    }
  ]

  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6 text-cyan-400" /> },
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
    }
  ]

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Zion Tech Group - Leading AI and IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI solutions, IT services, and digital transformation. Founded in 2020, we've helped 1,200+ companies achieve 300% average ROI." />
        <meta name="keywords" content="about zion tech group, AI company, IT services company, technology solutions, digital transformation, company history, team, leadership" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Zion Tech Group - Leading AI and IT Solutions Company" />
        <meta property="og:description" content="Learn about Zion Tech Group, a leading provider of AI solutions, IT services, and digital transformation. Founded in 2020, we've helped 1,200+ companies achieve 300% average ROI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <meta property="og:image" content="https://ziontechgroup.com/about-og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Zion Tech Group - Leading AI and IT Solutions Company" />
        <meta name="twitter:description" content="Learn about Zion Tech Group, a leading provider of AI solutions, IT services, and digital transformation. Founded in 2020, we've helped 1,200+ companies achieve 300% average ROI." />
        <meta name="twitter:image" content="https://ziontechgroup.com/about-twitter-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Zion Tech Group",
            "description": "Learn about Zion Tech Group, a leading provider of AI solutions, IT services, and digital transformation.",
            "url": "https://ziontechgroup.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "foundingDate": "2020",
              "founder": {
                "@type": "Person",
                "name": "Dr. Kleber Santos"
              },
              "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Zap className="w-4 h-4" />
              <span>About Zion Tech Group</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Pioneering the
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Future of Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of AI and IT solutions with innovation, expertise, and unwavering commitment to excellence.
            </p>
          </div>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Impact</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Numbers that speak to our commitment to excellence and client success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span className="text-gray-300">Innovation and continuous learning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span className="text-gray-300">Client success and satisfaction</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span className="text-gray-300">Ethical AI and responsible technology</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span className="text-gray-300">Collaboration and transparency</span>
                </li>
              </ul>
            </div>
          </div>

        {/* Our Story Section */}
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

        {/* Values Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                The principles that guide everything we do and shape our culture of excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                The brilliant minds behind our innovative solutions and exceptional client experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto">
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
}
