import React from 'react';
import { Link } from 'react-router-dom';
import SEO from "@/components/SEO";
import {
  Users,
  Award,
  Target,
  Rocket,
  Brain,
  Shield,
  Atom,
  Activity,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Building2,
  Globe,
  Heart,
  Zap,
  Cpu,
  Database
} from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Kleber",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in technology innovation",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      expertise: ["AI Strategy", "Quantum Computing", "Business Development"]
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Technology expert specializing in AI and cybersecurity",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      expertise: ["AI Architecture", "Cybersecurity", "Cloud Infrastructure"]
    },
    {
      name: "Michael Chen",
      role: "VP Engineering",
      description: "Engineering leader with deep expertise in quantum computing",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      expertise: ["Quantum Computing", "Machine Learning", "System Architecture"]
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology"
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Your data and systems are protected with enterprise-grade security"
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our success - we're committed to delivering results"
    },
    {
      icon: Rocket,
      title: "Excellence",
      description: "We strive for excellence in everything we do"
    }
  ];

  const achievements = [
    { number: "1000+", label: "Companies Served", icon: Building2 },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Users },
    { number: "ISO 27001", label: "Security Certified", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="About Zion Tech Group - Leading Technology Innovation"
        description="Learn about Zion Tech Group's mission to revolutionize business through AI, quantum computing, and cutting-edge technology solutions."
        keywords="about Zion Tech Group, technology innovation, AI solutions, quantum computing, cybersecurity"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Pioneering the future of business technology with revolutionary AI, quantum computing, and autonomous solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              To revolutionize how businesses operate by providing cutting-edge AI-powered solutions that drive unprecedented growth, efficiency, and innovation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We believe that every organization deserves access to the most advanced technology solutions. Our team of experts works tirelessly to develop and deliver innovative products that transform industries and create lasting value for our clients.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              To be the global leader in AI-powered business transformation, setting the standard for innovation, security, and customer success in the technology industry.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We envision a future where AI and quantum computing work seamlessly together to solve humanity's greatest challenges, making businesses more efficient, secure, and sustainable.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-800/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-300">Milestones that define our success</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{achievement.number}</h3>
              <p className="text-gray-300">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="bg-gray-800/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-300">Meet the visionaries driving innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
                <div className="text-center mb-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-blue-400 font-medium">{member.role}</p>
                </div>
                <p className="text-gray-300 text-center mb-4">{member.description}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our innovative solutions can transform your business and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Started
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}