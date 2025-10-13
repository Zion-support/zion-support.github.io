import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Shield,
  Cloud,
  Zap,
  BarChart3,
  Code
} from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Executive Officer",
      expertise: "AI Strategy & Business Development",
      experience: "15+ years in AI and technology leadership",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      expertise: "Cloud Architecture & AI Systems",
      experience: "12+ years in enterprise technology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Cybersecurity",
      expertise: "Cybersecurity & Risk Management",
      experience: "10+ years in security consulting",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Lead AI Engineer",
      expertise: "Machine Learning & Data Science",
      experience: "8+ years in AI research and development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with AI and technology, always seeking innovative solutions to complex problems."
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "We prioritize security and data protection in everything we do, building trust through transparency and reliability."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Our success is measured by our clients' success. We're committed to delivering solutions that drive real business value."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We believe technology should make the world better. Our solutions are designed to create positive global impact."
    }
  ];

  const achievements = [
    { number: "500+", label: "Successful Projects", description: "Delivered across various industries" },
    { number: "99.9%", label: "Client Satisfaction", description: "Based on post-project surveys" },
    { number: "50+", label: "Countries Served", description: "Global presence and expertise" },
    { number: "15+", label: "Years Experience", description: "Combined team experience" }
  ];

  const timeline = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to democratize AI and IT solutions for businesses worldwide."
    },
    {
      year: "2012",
      title: "First AI Platform",
      description: "Launched our first AI-powered analytics platform, helping 50+ companies optimize their operations."
    },
    {
      year: "2016",
      title: "Cloud Expansion",
      description: "Expanded into cloud infrastructure services, becoming a certified partner with major cloud providers."
    },
    {
      year: "2020",
      title: "Cybersecurity Division",
      description: "Launched comprehensive cybersecurity services to address growing digital threats."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Opened offices in 10 countries, serving clients across 50+ nations with localized support."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and expertise in AI and IT solutions. Discover our story and commitment to client success." />
        <meta name="keywords" content="about zion tech group, AI company, IT services company, technology team, company history" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              We are a leading provider of AI and IT solutions, dedicated to transforming businesses 
              through innovative technology and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-8">
                To democratize advanced AI and IT solutions, making cutting-edge technology accessible 
                to businesses of all sizes. We believe every organization deserves access to the tools 
                that can transform their operations and drive growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Empowering businesses with AI-driven insights</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Delivering scalable, secure, and reliable solutions</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Fostering innovation and digital transformation</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-xl text-gray-300 mb-8">
                To be the world's most trusted partner for AI and IT solutions, recognized for our 
                innovation, reliability, and commitment to client success. We envision a future where 
                every business can leverage technology to achieve extraordinary results.
              </p>
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Our Commitment</h3>
                <p className="text-cyan-100">
                  "We are committed to delivering solutions that not only meet today's needs but 
                  anticipate tomorrow's challenges, ensuring our clients stay ahead of the curve."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Achievements</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-slate-800 rounded-xl p-8">
                <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">{achievement.number}</div>
                <div className="text-xl font-semibold text-white mb-2">{achievement.label}</div>
                <div className="text-gray-300">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-cyan-400">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, IT, and business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-cyan-400 font-semibold mb-2">{member.role}</div>
                <div className="text-gray-300 text-sm mb-2">{member.expertise}</div>
                <div className="text-gray-400 text-xs">{member.experience}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A timeline of key milestones in our company's growth and evolution.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-24">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 px-4 rounded-lg font-bold">
                      {event.year}
                    </div>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Technology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and tools to deliver exceptional solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning</h3>
              <p className="text-gray-300">TensorFlow, PyTorch, OpenAI, Custom ML Models</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <Cloud className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Platforms</h3>
              <p className="text-gray-300">AWS, Azure, Google Cloud, Kubernetes, Docker</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Security</h3>
              <p className="text-gray-300">Zero Trust Architecture, SIEM, Threat Detection</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Development</h3>
              <p className="text-gray-300">React, Node.js, Python, TypeScript, Microservices</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <BarChart3 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Analytics</h3>
              <p className="text-gray-300">BigQuery, Snowflake, Tableau, Power BI</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Automation</h3>
              <p className="text-gray-300">RPA, Workflow Automation, API Integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful businesses that trust Zion Tech Group for their AI and IT needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get In Touch
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}