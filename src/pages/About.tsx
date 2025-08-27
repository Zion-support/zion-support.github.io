
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Globe, 
  Target, 
  CheckCircle,
  Lightbulb,
  Shield,
  Zap
} from "lucide-react";

export default function About() {
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "50+", label: "Expert Team Members" },
    { number: "100+", label: "Successful Projects" },
    { number: "15+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-zion-cyan" />,
      title: "Innovation First",
      description: "We stay at the forefront of technology, continuously exploring emerging trends and cutting-edge solutions."
    },
    {
      icon: <Shield className="h-8 w-8 text-zion-purple" />,
      title: "Quality & Security",
      description: "Enterprise-grade security and quality standards ensure your success and protect your digital assets."
    },
    {
      icon: <Users className="h-8 w-8 text-zion-cyan" />,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that drive real business value."
    },
    {
      icon: <Zap className="h-8 w-8 text-zion-purple" />,
      title: "Agile Delivery",
      description: "Fast, efficient delivery without compromising quality. We move at the speed of your business needs."
    }
  ];

  const team = [
    {
      name: "Kleber",
      role: "Founder & CEO",
      description: "Technology visionary with 15+ years of experience in AI, cybersecurity, and digital transformation."
    },
    {
      name: "Our Team",
      role: "Expert Professionals",
      description: "Dedicated specialists in AI, cloud computing, cybersecurity, and business technology solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Zion Tech Group
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Leading provider of AI-powered technology solutions, cybersecurity services, 
              and digital transformation consulting since 2020.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-zion-slate-light text-lg mb-6">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                enhance security, and accelerate digital transformation. We believe technology should 
                be an enabler, not a barrier to business success.
              </p>
              <p className="text-zion-slate-light text-lg">
                Our team combines deep technical expertise with business acumen to deliver solutions 
                that not only meet today's needs but position our clients for tomorrow's opportunities.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-zion-slate-light mb-6">
                To be the trusted technology partner for businesses worldwide, known for:
              </p>
              <ul className="space-y-3">
                {[
                  "Innovative AI solutions that transform operations",
                  "Uncompromising cybersecurity standards",
                  "Scalable cloud infrastructure solutions",
                  "Digital transformation expertise"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-zion-slate-light">
                    <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-8 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-zion-purple/20 rounded-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{value.title}</h3>
                </div>
                <p className="text-zion-slate-light text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Meet the experts behind our innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-lg p-8 text-center hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-zion-cyan" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-zion-cyan font-medium mb-4">{member.role}</p>
                <p className="text-zion-slate-light">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven Excellence</h3>
              <p className="text-zion-slate-light">
                15+ years of experience delivering complex technology solutions across industries
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Reach</h3>
              <p className="text-zion-slate-light">
                Serving clients worldwide with scalable, cloud-based solutions and global infrastructure
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Results-Driven</h3>
              <p className="text-zion-slate-light">
                Focused on delivering measurable business outcomes and ROI for our clients
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-purple-light">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white text-zion-purple px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
