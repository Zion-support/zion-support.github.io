import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, Award, Linkedin, Twitter, Github, 
  Mail, MapPin, Globe, Star, Zap, Brain, Rocket
} from 'lucide-react';

export default function TeamPage() {
  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer',
      image: '/team/sarah-chen.jpg',
      bio: 'Former AI Research Lead at Google, PhD in Computer Science from MIT. Pioneered breakthrough AI algorithms that power our autonomous systems.',
      expertise: ['AI & Machine Learning', 'Strategic Leadership', 'Research & Development'],
      social: {
        linkedin: 'https://linkedin.com/in/sarah-chen-zion',
        twitter: 'https://twitter.com/sarahchen_zion',
        github: 'https://github.com/sarahchen-zion'
      },
      achievements: ['25+ AI Patents', 'MIT Technology Review Innovator', 'Forbes 30 Under 30']
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Chief Technology Officer',
      image: '/team/marcus-rodriguez.jpg',
      bio: 'Ex-Engineering Director at Microsoft, specializing in cloud architecture and quantum computing. Leads our technical innovation strategy.',
      expertise: ['Cloud Architecture', 'Quantum Computing', 'System Design'],
      social: {
        linkedin: 'https://linkedin.com/in/marcus-rodriguez-zion',
        twitter: 'https://twitter.com/marcusrod_zion',
        github: 'https://github.com/marcusrod-zion'
      },
      achievements: ['Microsoft MVP Award', 'Quantum Computing Pioneer', 'Cloud Architecture Expert']
    },
    {
      name: 'Emily Watson',
      title: 'Chief Operations Officer',
      image: '/team/emily-watson.jpg',
      bio: 'Former VP of Operations at Amazon, expert in scaling technology operations and building high-performing teams.',
      expertise: ['Operations Management', 'Team Leadership', 'Process Optimization'],
      social: {
        linkedin: 'https://linkedin.com/in/emily-watson-zion',
        twitter: 'https://twitter.com/emilywat_zion'
      },
      achievements: ['Amazon Leadership Award', 'Operations Excellence', 'Team Building Expert']
    }
  ];

  const departments = [
    {
      name: 'AI Research & Development',
      description: 'Pioneering the future of artificial intelligence and autonomous systems.',
      members: 25,
      icon: Brain,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Quantum Computing',
      description: 'Breaking barriers in quantum technology and computational power.',
      members: 18,
      icon: Zap,
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Cloud & Infrastructure',
      description: 'Building scalable, secure, and high-performance cloud solutions.',
      members: 32,
      icon: Globe,
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'Product & Engineering',
      description: 'Creating innovative products that transform business operations.',
      members: 45,
      icon: Rocket,
      color: 'from-orange-400 to-red-500'
    },
    {
      name: 'Client Success',
      description: 'Ensuring exceptional client experiences and successful implementations.',
      members: 28,
      icon: Star,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Business Development',
      description: 'Expanding our global reach and strategic partnerships.',
      members: 22,
      icon: Users,
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push boundaries and explore new technologies.',
      icon: Brain
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do.',
      icon: Star
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.',
      icon: Users
    },
    {
      title: 'Client Focus',
      description: 'Your success is our success - we work as an extension of your team.',
      icon: Award
    }
  ];

  return (
    <>
      <Head>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the exceptional team behind Zion Tech Group's revolutionary technology solutions and innovations." />
        <meta property="og:title" content="Our Team - Zion Tech Group" />
        <meta property="og:description" content="Meet the exceptional team behind Zion Tech Group's revolutionary technology solutions and innovations." />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent"
            >
              Meet Our Team
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-4xl mx-auto mb-8"
            >
              The brilliant minds behind Zion Tech Group's revolutionary technology solutions. 
              Our team combines decades of experience from the world's leading tech companies.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="/careers" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                Join Our Team
              </a>
              <a href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Leadership Team
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Visionary leaders driving innovation and growth at Zion Tech Group.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-cyan-400 font-semibold">{leader.title}</p>
                  </div>
                  
                  <p className="text-white/80 mb-4 text-center">{leader.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Achievements:</h4>
                    <ul className="space-y-1">
                      {leader.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-white/70 flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    {leader.social.linkedin && (
                      <a href={leader.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {leader.social.twitter && (
                      <a href={leader.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {leader.social.github && (
                      <a href={leader.social.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Departments
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Specialized teams working together to deliver exceptional technology solutions.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${dept.color} rounded-xl flex items-center justify-center`}>
                    <dept.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{dept.name}</h3>
                  <p className="text-white/70 text-center mb-4">{dept.description}</p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{dept.members}</div>
                    <div className="text-sm text-white/70">Team Members</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Team Values
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                The principles that guide our team culture and drive our success.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Join Our Team
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Ready to work with the brightest minds in technology? We're always looking for 
                passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/careers" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  View Open Positions
                </a>
                <a href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}