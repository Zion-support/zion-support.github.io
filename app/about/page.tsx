import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, CheckCircle, Star, Shield, Award, Target, Globe, Brain, Zap, TrendingUp, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Kleber Santos",
      role: "CEO & Founder",
      expertise: "AI Research & Strategy",
      image: "👨‍💼",
      description: "15+ years in AI research and enterprise solutions"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      expertise: "Technology Architecture",
      image: "👩‍💻",
      description: "Expert in scalable AI systems and cloud infrastructure"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of AI Engineering",
      expertise: "Machine Learning",
      image: "👨‍🔬",
      description: "PhD in Computer Science, specializing in deep learning"
    },
    {
      name: "Emily Johnson",
      role: "Head of Business Development",
      expertise: "Client Relations",
      image: "👩‍💼",
      description: "10+ years in enterprise sales and client success"
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and technology, constantly exploring new frontiers."
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Enterprise-grade security and compliance are at the core of everything we build and deliver."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable results and value."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We believe technology should make the world better, more efficient, and more connected."
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Delivered", description: "Successfully completed implementations" },
    { number: "50+", label: "Enterprise Clients", description: "Fortune 500 and growing companies" },
    { number: "300%", label: "Average ROI", description: "Return on investment for our clients" },
    { number: "99.9%", label: "Uptime", description: "System reliability and availability" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are pioneers in artificial intelligence and IT solutions, dedicated to transforming businesses 
            through cutting-edge technology and innovative thinking.
          </p>
        </div>

        {/* Company Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2018 by Dr. Kleber Santos, Zion Tech Group emerged from a vision to democratize 
                  artificial intelligence and make it accessible to businesses of all sizes. What started as a 
                  small team of AI researchers has grown into a global leader in enterprise AI solutions.
                </p>
                <p>
                  Our journey began with a simple belief: AI should enhance human capabilities, not replace them. 
                  This philosophy continues to guide our approach to every project, ensuring that our solutions 
                  are not just technologically advanced, but also practical and human-centered.
                </p>
                <p>
                  Today, we serve clients across 25+ countries, from startups to Fortune 500 companies, 
                  helping them harness the power of AI to drive innovation, efficiency, and growth.
                </p>
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                To accelerate the adoption of artificial intelligence across industries by providing 
                accessible, reliable, and innovative solutions that drive real business value.
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300">
                A world where every business, regardless of size, can leverage the power of AI to 
                solve complex problems and create unprecedented opportunities for growth.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-slate-800/70 transition-all duration-300">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm mb-3">{member.expertise}</p>
                <p className="text-gray-300 text-xs">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2 neon-text">{achievement.number}</div>
                <div className="text-lg font-semibold text-cyan-400 mb-2">{achievement.label}</div>
                <div className="text-sm text-gray-300">{achievement.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Technology</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">AI & Machine Learning</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">TensorFlow & PyTorch</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">OpenAI GPT Models</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Computer Vision</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Natural Language Processing</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Cloud & Infrastructure</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">AWS, Azure, Google Cloud</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Kubernetes & Docker</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Microservices Architecture</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">DevOps & CI/CD</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Data & Analytics</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Apache Spark & Hadoop</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Real-time Analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Data Visualization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Predictive Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust Zion Tech Group to deliver innovative AI solutions 
            that drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
            <Link
              to="/case-studies"
              className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors inline-flex items-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              View Case Studies
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;