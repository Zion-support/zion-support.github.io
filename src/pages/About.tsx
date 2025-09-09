import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  CheckCircle,
  ArrowRight,
  Globe,
  Zap,
  Heart
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Global Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Globe, value: '25+', label: 'Countries Served' },
    { icon: Zap, value: '99.9%', label: 'Uptime SLA' }
  ];

  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "We push boundaries and embrace cutting-edge technology to solve complex challenges"
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Your success is our success. We're committed to delivering exceptional results"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We work with clients worldwide to create positive change through technology"
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our success. We're committed to understanding your unique challenges and delivering solutions that drive real results.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do"
    }
  ];

  const stats = [
    { value: "500+", label: "Global Clients" },
    { value: "25+", label: "Countries" },
    { value: "1000+", label: "Projects Delivered" },
    { value: "99.9%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Our Services
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                efficiency, and growth in an increasingly digital world.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                We believe that technology should be accessible, scalable, and transformative. 
                Our team of experts works tirelessly to deliver solutions that not only meet 
                today's challenges but anticipate tomorrow's opportunities.
              </p>
              <Link 
                to="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Explore Our Services <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  "Expert team with decades of experience",
                  "Cutting-edge AI and machine learning",
                  "Global reach and local expertise",
                  "Proven track record of success",
                  "Innovative problem-solving approach"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our impact and reach across the globe
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div id="team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Meet Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="bg-slate-700/30 rounded-xl h-24 w-24 flex items-center justify-center flex-shrink-0">
                  <div className="text-center text-slate-400">
                    <Users className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-xs">Photo</p>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{member.position}</p>
                  <p className="text-slate-300 text-sm mb-3">{member.expertise}</p>
                  <p className="text-slate-400 text-sm mb-4">{member.experience}</p>
                  <p className="text-slate-400 text-sm mb-4">{member.education}</p>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center text-slate-300 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Certifications & Partnerships
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                <Award className="h-6 w-6 text-cyan-400" />
              </div>
              <p className="text-slate-300 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with innovative technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
