import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock, Star, CheckCircle, Zap } from 'lucide-react';

export function TeamExpertiseSection() {
  const teamMembers = [
    {
      name: "Dr. Kleber Santos",
      role: "CEO & Chief Technology Officer",
      expertise: ["AI/ML", "Cybersecurity", "Cloud Architecture"],
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      certifications: ["AWS Solutions Architect", "CISSP", "PMP"]
    },
    {
      name: "Sarah Chen",
      role: "Head of AI & Machine Learning",
      expertise: ["Deep Learning", "NLP", "Computer Vision"],
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      certifications: ["TensorFlow Developer", "Google Cloud ML", "PhD Computer Science"]
    },
    {
      name: "Marcus Rodriguez",
      role: "Cybersecurity Director",
      expertise: ["Threat Intelligence", "Incident Response", "Compliance"],
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      certifications: ["CISSP", "CEH", "SANS GIAC"]
    },
    {
      name: "Dr. Emily Watson",
      role: "Cloud Solutions Architect",
      expertise: ["AWS", "Azure", "DevOps", "Kubernetes"],
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      certifications: ["AWS Solutions Architect Pro", "Azure Solutions Architect", "Kubernetes Administrator"]
    }
  ];

  const expertiseAreas = [
    {
      icon: Award,
      title: "Certified Professionals",
      description: "All team members hold industry-recognized certifications",
      count: "50+"
    },
    {
      icon: Clock,
      title: "Years of Experience",
      description: "Combined expertise across multiple technology domains",
      count: "200+"
    },
    {
      icon: Star,
      title: "Client Satisfaction",
      description: "Consistently high ratings from our clients",
      count: "98%"
    },
    {
      icon: CheckCircle,
      title: "Projects Delivered",
      description: "Successful implementations across various industries",
      count: "500+"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our team of certified professionals brings decades of combined experience 
            in cutting-edge technologies and industry best practices.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800/70">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-slate-600 group-hover:border-cyan-500 transition-colors duration-300"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {member.experience}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {member.name}
                </h3>
                
                <p className="text-cyan-400 text-sm font-medium mb-4">
                  {member.role}
                </p>
                
                <div className="space-y-2 mb-4">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="text-xs text-gray-400">
                  {member.certifications.map((cert, certIndex) => (
                    <div key={certIndex} className="flex items-center justify-center mb-1">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-xl mb-4">
                <area.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{area.count}</div>
              <div className="text-lg font-semibold mb-2 text-white">{area.title}</div>
              <div className="text-sm text-gray-400">{area.description}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work with Our Experts?
            </h3>
            <p className="text-gray-300 mb-6">
              Let our certified professionals help you achieve your technology goals with proven expertise and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Meet the Team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}