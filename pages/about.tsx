import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
  Brain,
  Shield,
  Users,
  Zap,
  Target,
=======
  Brain, 
  Shield, 
  Users, 
  Zap, 
  Target, 
  Heart,
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  Award,
  Globe,
  Code,
  Database,
  Cloud,
  Smartphone
} from 'lucide-react';
<<<<<<< HEAD
=======

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible through cutting-edge technology and creative problem-solving.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building secure, reliable solutions that our clients can depend on for their most critical operations.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that drive real business value.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Agile Delivery",
      description: "Fast, efficient, and responsive. We deliver results quickly without compromising on quality.",
      color: "from-yellow-500 to-orange-500"
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  ];

  const team = [
    {
<<<<<<< HEAD
      name: "John Smith",
      role: "CEO & Founder",
      image: "/team/john.jpg",
      bio: "Visionary leader with 15+ years in tech"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "/team/sarah.jpg", 
      bio: "Technical expert specializing in cloud architecture"
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      image: "/team/mike.jpg",
      bio: "Full-stack developer passionate about innovation"
    }
  ];

=======
      name: "Kleber Santos",
      role: "Founder & CEO",
      description: "Visionary leader with 15+ years in technology and business innovation.",
      image: "/team/kleber.jpg"
    },
    {
      name: "AI Development Team",
      role: "AI & Machine Learning",
      description: "Expert developers specializing in cutting-edge AI solutions and automation.",
      image: "/team/ai-team.jpg"
    },
    {
      name: "Cloud Infrastructure Team",
      role: "Cloud & DevOps",
      description: "Infrastructure specialists ensuring scalable, secure, and reliable cloud solutions.",
      image: "/team/cloud-team.jpg"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of experts delivering cutting-edge technology solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                About Zion Tech Group
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
              >
                We're a team of passionate technologists dedicated to transforming businesses through innovative software solutions and cutting-edge technology.
              </motion.p>
            </div>
=======
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're dedicated to transforming businesses through innovative technology solutions." />
        <meta name="keywords" content="about, team, mission, values, Zion Tech Group, technology company" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              About Zion Tech Group
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-8"
            >
              Transforming businesses through innovative technology solutions
            </motion.p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </div>
        </section>

        {/* Mission Section */}
<<<<<<< HEAD
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses with technology solutions that drive growth, efficiency, and innovation. 
                We believe in the transformative power of technology and are committed to delivering solutions 
                that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center mb-4`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
=======
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-slate-300 mb-6">
                  To empower businesses with cutting-edge technology solutions that drive growth, 
                  efficiency, and innovation. We believe technology should be accessible, reliable, 
                  and transformative.
                </p>
                <p className="text-lg text-slate-300">
                  From AI-powered automation to cloud infrastructure, we provide comprehensive 
                  solutions that help our clients stay ahead in an ever-evolving digital landscape.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700/50"
                  >
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-slate-300">{stat.label}</div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-16 bg-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                By the Numbers
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-blue-200">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
=======
        {/* Values Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mb-4`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-slate-300">{value.description}</p>
                </motion.div>
              ))}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </div>
          </div>
        </section>

        {/* Team Section */}
<<<<<<< HEAD
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-600">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.bio}
                    </p>
                  </motion.div>
                ))}
              </div>
=======
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-3">{member.role}</p>
                  <p className="text-slate-300">{member.description}</p>
                </motion.div>
              ))}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how we can help transform your business with technology.
              </p>
              <motion.a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
=======
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Get Started
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                View Services
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </motion.a>
            </div>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
  );};
=======
  );
};
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default AboutPage;