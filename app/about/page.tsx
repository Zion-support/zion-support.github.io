import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Users, 
  Award, 
  Target, 
  Zap, 
  Globe, 
  CheckCircle,
  TrendingUp,
  Cpu,
  Database,
  Lock,
  MessageSquare,
  BarChart3,
  Settings
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      expertise: "AI Strategy & Business Development",
      bio: "15+ years in AI and machine learning, former Google AI researcher with expertise in enterprise solutions.",
      image: "/images/team/kleber-santos.jpg"
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      expertise: "Cloud Architecture & Security",
      bio: "Expert in cloud infrastructure and cybersecurity with 12+ years experience in enterprise systems.",
      image: "/images/team/sarah-chen.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of AI Research",
      expertise: "Machine Learning & Data Science",
      bio: "PhD in Computer Science, specializing in deep learning and NLP with 10+ years in AI research.",
      image: "/images/team/michael-rodriguez.jpg"
    },
    {
      name: "Emily Johnson",
      role: "Head of Engineering",
      expertise: "5G Technology & IoT",
      bio: "Telecommunications expert with extensive experience in 5G implementation and IoT solutions.",
      image: "/images/team/emily-johnson.jpg"
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions that drive real business value."
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "We prioritize the security and privacy of our clients' data with enterprise-grade protection measures and compliance standards."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Our success is measured by our clients' success. We're committed to delivering exceptional results that exceed expectations."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do, from code to customer service and project delivery."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "150+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: MessageSquare }
  ];

  const technologies = [
    { name: "Artificial Intelligence", icon: Brain, description: "Machine Learning, Deep Learning, NLP" },
    { name: "5G Technology", icon: Globe, description: "Network Optimization, Edge Computing, IoT" },
    { name: "Cloud Computing", icon: Database, description: "Multi-cloud, Hybrid Solutions, Scalability" },
    { name: "Cybersecurity", icon: Lock, description: "Threat Detection, Zero Trust, Compliance" },
    { name: "Data Analytics", icon: BarChart3, description: "Real-time Analytics, Predictive Modeling" },
    { name: "DevOps", icon: Settings, description: "CI/CD, Automation, Infrastructure as Code" }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - Leading provider of AI, 5G, and IT solutions. Our team of experts delivers cutting-edge technology solutions." />
        <meta name="keywords" content="about us, AI company, 5G solutions, IT services, technology team, company values" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-8">
                <span className="text-blue-300 text-sm font-medium">🚀 About Zion Tech Group</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Pioneering the Future
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                We are Zion Tech Group, a leading technology company specializing in AI, 5G, and IT solutions. 
                Our mission is to transform businesses through innovative technology and exceptional service.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Our Mission & Vision
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Mission</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      To empower businesses with cutting-edge AI, 5G, and IT solutions that drive innovation, 
                      efficiency, and growth. We believe technology should be accessible, secure, and transformative.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">Vision</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      To be the world's leading provider of intelligent technology solutions, 
                      creating a future where every business can leverage the power of AI and 5G to achieve extraordinary results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 border border-blue-400/30">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Commitment</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We are committed to delivering exceptional value through innovative solutions, 
                      world-class support, and continuous improvement in everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These values guide everything we do and shape our culture, decisions, and relationships.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="group text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, 5G, and IT solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="group text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-400 mb-4">{member.expertise}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-24 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technologies We Master
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the latest technologies to deliver cutting-edge solutions for our clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div key={index} className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                    </div>
                    <p className="text-gray-300">{tech.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;