import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Shield, 
  Zap, 
  Brain, 
  Cloud, 
  Heart, 
  Leaf, 
  Rocket, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Building,
  Code,
  Database,
  Network,
  Lock,
  Cpu,
  Satellite,
  Atom
} from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", description: "Proven track record of delivery" },
    { icon: Award, value: "10+", label: "Years Experience", description: "Deep industry expertise" },
    { icon: Globe, value: "25+", label: "Countries Served", description: "Global reach and support" }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data and systems are protected with enterprise-grade security and compliance standards."
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that drive real business value."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We believe in building technology solutions that are environmentally responsible and sustainable."
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do, from code to customer service."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're building solutions that can scale globally and make a positive impact on society."
    }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "Founder & CEO",
      bio: "Visionary leader with over 15 years of experience in technology and business transformation. Passionate about AI and innovation.",
      expertise: ["AI & Machine Learning", "Business Strategy", "Digital Transformation"],
      avatar: "/images/team-kleber.jpg"
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      bio: "PhD in Computer Science with expertise in quantum computing and advanced AI algorithms. Leads our R&D initiatives.",
      expertise: ["Quantum Computing", "AI Research", "System Architecture"],
      avatar: "/images/team-sarah.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Engineering",
      bio: "Seasoned engineering leader with experience building scalable systems at major tech companies.",
      expertise: ["Cloud Architecture", "DevOps", "Team Leadership"],
      avatar: "/images/team-michael.jpg"
    },
    {
      name: "Emily Watson",
      role: "Head of AI Solutions",
      bio: "AI specialist with deep knowledge in healthcare analytics and predictive modeling.",
      expertise: ["Healthcare AI", "Predictive Analytics", "Machine Learning"],
      avatar: "/images/team-emily.jpg"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "AI Innovation Award",
      description: "Recognized for breakthrough AI solutions in healthcare and business intelligence."
    },
    {
      year: "2023",
      title: "Fastest Growing Tech Company",
      description: "Named one of the fastest-growing technology companies in the region."
    },
    {
      year: "2022",
      title: "Excellence in Cybersecurity",
      description: "Awarded for outstanding contributions to enterprise security solutions."
    },
    {
      year: "2021",
      title: "Digital Transformation Leader",
      description: "Recognized for helping businesses successfully navigate digital transformation."
    }
  ];

  const technologies = [
    { name: "Artificial Intelligence", icon: Brain, description: "Machine Learning, Deep Learning, NLP" },
    { name: "Cloud Computing", icon: Cloud, description: "AWS, Azure, GCP, Hybrid Solutions" },
    { name: "Cybersecurity", icon: Shield, description: "Zero Trust, Threat Detection, Compliance" },
    { name: "IoT & Edge Computing", icon: Cpu, description: "Real-time Processing, Device Management" },
    { name: "Quantum Computing", icon: Atom, description: "Quantum Algorithms, Optimization" },
    { name: "Blockchain", icon: Network, description: "Smart Contracts, DLT Solutions" }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              We're a forward-thinking technology company dedicated to transforming businesses 
              through innovative AI solutions, cutting-edge infrastructure, and strategic digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
                <div className="text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-slate-300 mb-6">
                To democratize advanced technology and make AI-powered solutions accessible to businesses of all sizes. 
                We believe that every organization deserves access to cutting-edge technology that can transform their operations 
                and drive growth.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                Through our innovative micro-SaaS approach, we're breaking down the barriers to enterprise-grade technology, 
                making it possible for startups and SMBs to compete with industry giants.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">Affordable AI solutions for all businesses</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">Transparent pricing and no hidden costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">24/7 support and continuous innovation</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-slate-300 mb-6">
                To be the leading force in democratizing enterprise technology, creating a world where advanced AI, 
                cybersecurity, and digital transformation are accessible to every business, regardless of size or budget.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                We envision a future where technology empowers businesses to achieve their full potential, 
                driving innovation, efficiency, and sustainable growth across all industries.
              </p>
              
              <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-6 border border-cyan-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">By 2030, we aim to:</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Serve 10,000+ businesses globally</li>
                  <li>• Launch 50+ innovative micro-SaaS solutions</li>
                  <li>• Achieve carbon-neutral operations</li>
                  <li>• Create 1,000+ jobs in tech</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Passionate experts dedicated to transforming your business through technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-cyan-400 font-medium mb-4">{member.role}</div>
                <p className="text-slate-300 mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-xs text-slate-400">{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technologies We Master</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Cutting-edge technologies that power our innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                </div>
                <p className="text-slate-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Recognition & Achievements</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Industry recognition for our innovative solutions and commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl font-bold text-cyan-400 mb-4">{achievement.year}</div>
                <h3 className="text-xl font-bold text-white mb-4">{achievement.title}</h3>
                <p className="text-slate-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-3xl p-12 text-center border border-cyan-500/30">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help transform your business with cutting-edge technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Schedule a Meeting
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300">
              <div className="flex items-center gap-3 justify-center">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
