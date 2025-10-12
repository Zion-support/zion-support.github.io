'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Award, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Clock,
  TrendingUp,
  Database,
  Code,
  Wifi,
  BarChart3
} from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Reliability',
      description: 'Our solutions are built with enterprise-grade security and reliability to ensure your business operations never stop.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique needs and delivering tailored solutions.'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.'
    }
  ]

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in technology and business strategy.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technology expert specializing in AI and cloud architecture.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      description: 'Full-stack developer with expertise in modern web technologies.',
      image: '/api/placeholder/300/300'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-6 h-6 text-green-400" /> },
    { number: '100+', label: 'Happy Clients', icon: <Users className="w-6 h-6 text-blue-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-cyan-400" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="About Zion Tech Group - Leading AI and IT Solutions Provider"
        description="Learn about Zion Tech Group's mission to deliver cutting-edge AI solutions, micro SaaS services, and digital transformation. Contact us at +1 302 464 0950"
        keywords="about us, AI solutions, IT services, technology company, digital transformation, team"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
              🚀 About Zion Tech Group
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Leading the Future of
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We are a cutting-edge technology company specializing in AI solutions, micro SaaS services, 
            and comprehensive digital transformation. Our mission is to empower businesses with innovative technology.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{stat.number}</div>
                <div className="text-gray-300 group-hover:text-white transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                To revolutionize how businesses operate by providing cutting-edge AI solutions, 
                innovative micro SaaS services, and comprehensive digital transformation strategies 
                that drive growth and efficiency.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">AI-powered business solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Scalable micro SaaS applications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Enterprise-grade security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">24/7 support and maintenance</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Brain className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI Solutions</h3>
                  <p className="text-gray-300 text-sm">Advanced artificial intelligence for business automation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Code className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Micro SaaS</h3>
                  <p className="text-gray-300 text-sm">Ready-to-use applications for business needs</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Cloud className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cloud Services</h3>
                  <p className="text-gray-300 text-sm">Scalable cloud infrastructure and solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Shield className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
                  <p className="text-gray-300 text-sm">Enterprise-grade security and compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-gray-900/50 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:scale-105">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The talented individuals behind our innovative solutions and exceptional service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/40 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10 transform hover:scale-105">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl p-12 border border-cyan-500/30 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our technology solutions can help transform your business. 
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Now
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Explore Services
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-cyan-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
