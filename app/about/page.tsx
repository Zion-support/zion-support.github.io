import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Users, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  CheckCircle,
  Award,
  Clock,
  TrendingUp,
  Globe,
  Code,
  Cloud,
  Wifi,
  Database,
  Settings,
  BarChart3,
  Smartphone,
  Lock,
  Cpu,
  Layers,
  Target,
  Rocket,
  Lightbulb,
  PieChart,
  FileText,
  MessageSquare,
  Bot,
  Workflow,
  Eye,
  Search,
  Filter,
  Zap
} from 'lucide-react';

const teamMembers = [
  {
    name: "Kleber Santos",
    role: "CEO & Founder",
    expertise: "AI Strategy & Business Development",
    image: "/images/team/kleber-santos.jpg",
    bio: "15+ years in AI and machine learning, former tech executive with expertise in scaling AI solutions."
  },
  {
    name: "Sarah Chen",
    role: "CTO & Co-Founder",
    expertise: "Cloud Architecture & Security",
    image: "/images/team/sarah-chen.jpg",
    bio: "Expert in cloud infrastructure and cybersecurity with 12+ years experience in enterprise solutions."
  },
  {
    name: "Michael Rodriguez",
    role: "Head of AI Research",
    expertise: "Machine Learning & Data Science",
    image: "/images/team/michael-rodriguez.jpg",
    bio: "PhD in Computer Science, specializing in deep learning, NLP, and advanced AI algorithms."
  },
  {
    name: "Emily Johnson",
    role: "Head of Engineering",
    expertise: "5G Technology & IoT",
    image: "/images/team/emily-johnson.jpg",
    bio: "Telecommunications expert with extensive experience in 5G implementation and IoT solutions."
  }
];

const values = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security & Trust",
    description: "We prioritize the security and privacy of our clients' data with enterprise-grade protection measures."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Client Success",
    description: "Our success is measured by our clients' success. We're committed to delivering exceptional results."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Excellence",
    description: "We maintain the highest standards of quality in everything we do, from code to customer service."
  }
];

const stats = [
  { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
  { number: "150+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
  { number: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="w-6 h-6" /> },
  { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
];

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Advanced AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI, IT, and 5G solutions. Discover our mission, team, and commitment to transforming businesses through innovative technology." />
        <meta name="keywords" content="about us, AI company, IT solutions, 5G technology, team, mission, values, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  Leading Technology Solutions Provider
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    About Zion Tech Group
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  We are a leading provider of advanced AI, IT, and 5G solutions, 
                  dedicated to transforming businesses through innovative technology and intelligent automation.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-cyan-400">{stat.icon}</div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20 bg-slate-800/30 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Mission</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  To empower businesses with cutting-edge AI, IT, and 5G solutions that drive innovation, 
                  efficiency, and growth. We believe technology should be accessible, intelligent, and transformative.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                    <p className="text-gray-300 leading-relaxed">
                      To be the world's leading provider of AI-powered technology solutions, 
                      enabling every business to harness the power of artificial intelligence and next-generation connectivity.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Innovation, integrity, and excellence guide everything we do. We're committed to 
                      delivering solutions that not only meet but exceed our clients' expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Values</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  The principles that guide our work and define our culture
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{value.icon}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
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
          <section className="py-20 bg-slate-800/30 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  The experts behind our innovative solutions
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 text-center"
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-4">{member.expertise}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Work With Us?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Let's discuss how we can help transform your business with our innovative solutions.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutPage;