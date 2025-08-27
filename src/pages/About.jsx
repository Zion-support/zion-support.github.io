import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  Rocket, 
  Globe, 
  Users,
  TrendingUp,
  Shield,
  Award,
  Target,
  Brain,
  Cloud,
  Code,
  Zap,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible, embracing emerging technologies and creative solutions to solve complex challenges.",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional results for our clients.",
      color: "from-zion-green to-zion-cyan"
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of collaboration and fostering an inclusive ecosystem where everyone can thrive and contribute to innovation.",
      color: "from-zion-purple to-zion-pink"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We prioritize the security and privacy of our users, building trust through transparent practices and robust protection measures.",
      color: "from-zion-orange to-zion-red"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're committed to making technology accessible worldwide, breaking down barriers and connecting talent across borders.",
      color: "from-zion-indigo to-zion-blue"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes and tangible value to our clients, ensuring every project drives real business impact.",
      color: "from-zion-teal to-zion-green"
    }
  ];

  const stats = [
    { value: "500+", label: "Global Clients", description: "Serving businesses worldwide", icon: Users },
    { value: "25+", label: "Countries", description: "Global presence and reach", icon: Globe },
    { value: "1000+", label: "Projects", description: "Successfully delivered", icon: CheckCircle },
    { value: "99.9%", label: "Uptime", description: "Reliable service guarantee", icon: Shield }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in AI and enterprise technology",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      expertise: ["AI Strategy", "Enterprise Technology", "Business Development"]
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      description: "Former Google engineer specializing in machine learning and cloud architecture",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      expertise: ["Machine Learning", "Cloud Architecture", "System Design"]
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of AI",
      description: "PhD in Computer Science with expertise in neural networks and NLP",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      expertise: ["Neural Networks", "Natural Language Processing", "Research"]
    }
  ];

  const technologies = [
    { name: "Artificial Intelligence", icon: Brain, description: "Machine learning, neural networks, and AI-powered solutions" },
    { name: "Cloud Computing", icon: Cloud, description: "Scalable cloud infrastructure and DevOps automation" },
    { name: "Cybersecurity", icon: Shield, description: "Advanced threat detection and security frameworks" },
    { name: "Blockchain", icon: Code, description: "Distributed ledger technology and smart contracts" },
    { name: "IoT & Edge", icon: Zap, description: "Internet of Things and edge computing solutions" },
    { name: "Quantum Computing", icon: Rocket, description: "Next-generation quantum algorithms and research" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              About
            </span>
            <br />
            <span className="text-white">Zion Tech Group</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              We are a forward-thinking technology company dedicated to transforming businesses through innovative AI solutions, 
              cutting-edge cybersecurity, and scalable cloud infrastructure.
            </p>
            <p className="text-lg text-zion-slate-light leading-relaxed">
              Our mission is to empower organizations with the tools and expertise they need to thrive in the digital age.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes to leverage 
                the power of AI, cybersecurity, and emerging technologies for sustainable growth and competitive advantage.
              </p>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                We believe that technology should be accessible, secure, and transformative for every organization.
              </p>
            </div>
            <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 border border-zion-cyan/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-zion-slate-light leading-relaxed">
                To be the leading force in democratizing advanced technology solutions, creating a future where 
                innovation is accessible to all, and where technology serves as a catalyst for human progress and 
                sustainable development.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Expertise */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Technology Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{tech.name}</h3>
                <p className="text-zion-slate-light leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <div className="text-zion-slate-light text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={member.name} className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-zion-cyan/20 group-hover:border-zion-cyan/40 transition-colors duration-300"
                  />
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-zion-cyan font-semibold">{member.role}</p>
                </div>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{member.description}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center text-zion-slate-light text-sm">
                      <Star className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 border border-zion-cyan/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise and innovative solutions can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
