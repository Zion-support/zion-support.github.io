import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Building2, Globe, Users, Award, TrendingUp, 
  Lightbulb, Rocket, Shield, Star, Zap, Target, MapPin
} from 'lucide-react';

export default function CompanyPage() {
  const companyInfo = {
    founded: '2010',
    employees: '100+',
    locations: '5',
    countries: '50+',
    clients: '500+',
    patents: '25+'
  };

  const locations = [
    {
      city: 'Middletown',
      state: 'Delaware',
      country: 'United States',
      type: 'Headquarters',
      address: '364 E Main St STE 1008',
      zip: '19709',
      icon: Building2
    },
    {
      city: 'San Francisco',
      state: 'California',
      country: 'United States',
      type: 'R&D Center',
      address: '123 Innovation Drive',
      zip: '94105',
      icon: Lightbulb
    },
    {
      city: 'London',
      state: '',
      country: 'United Kingdom',
      type: 'European Hub',
      address: '456 Tech Square',
      zip: 'EC1A 1BB',
      icon: Globe
    },
    {
      city: 'Singapore',
      state: '',
      country: 'Singapore',
      type: 'Asia-Pacific Hub',
      address: '789 Digital Boulevard',
      zip: '018956',
      icon: Rocket
    },
    {
      city: 'Toronto',
      state: 'Ontario',
      country: 'Canada',
      type: 'North American Hub',
      address: '321 Innovation Lane',
      zip: 'M5V 3A8',
      icon: Users
    }
  ];

  const achievements = [
    {
      year: '2015',
      title: 'AI Innovation Award',
      description: 'Recognized for breakthrough AI algorithms in autonomous systems.',
      icon: Award
    },
    {
      year: '2018',
      title: 'Fastest Growing Tech Company',
      description: 'Named by Deloitte as one of the fastest growing technology companies.',
      icon: TrendingUp
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Successfully expanded operations to 50+ countries worldwide.',
      icon: Globe
    },
    {
      year: '2023',
      title: 'Quantum Computing Pioneer',
      description: 'First company to deploy quantum computing solutions in production.',
      icon: Zap
    },
    {
      year: '2025',
      title: 'Autonomous Business Leader',
      description: 'Leading the industry in autonomous business operations technology.',
      icon: Rocket
    }
  ];

  const culture = [
    {
      title: 'Innovation-Driven',
      description: 'We encourage creative thinking and experimentation at every level.',
      icon: Lightbulb,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Client-Centric',
      description: 'Every decision we make is focused on delivering value to our clients.',
      icon: Target,
      color: 'from-green-400 to-blue-500'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do.',
      icon: Star,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.',
      icon: Users,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Security First',
      description: 'Security and privacy are fundamental to our technology solutions.',
      icon: Shield,
      color: 'from-red-400 to-pink-500'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and development.',
      icon: TrendingUp,
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <>
      <Head>
        <title>Company - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's company structure, global presence, and commitment to innovation and excellence." />
        <meta property="og:title" content="Company - Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group's company structure, global presence, and commitment to innovation and excellence." />
        <link rel="canonical" href="https://ziontechgroup.com/company" />
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
              About Our Company
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-4xl mx-auto mb-8"
            >
              Zion Tech Group is a global technology company dedicated to revolutionizing 
              business operations through cutting-edge AI, quantum computing, and intelligent automation.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                Get in Touch
              </a>
              <a href="/careers" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                Join Our Team
              </a>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
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
                Company Overview
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Key facts and figures about Zion Tech Group.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {Object.entries(companyInfo).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <div className="text-2xl font-bold text-white">{value}</div>
                  </div>
                  <div className="text-sm text-white/70 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence */}
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
                Global Presence
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Serving clients worldwide from strategic locations across the globe.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <location.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{location.city}</h3>
                      <p className="text-cyan-400 text-sm">{location.type}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-white/70">
                    <p>{location.address}</p>
                    <p>
                      {location.city}{location.state && `, ${location.state}`}
                      {location.zip && ` ${location.zip}`}
                    </p>
                    <p className="text-cyan-400 font-medium">{location.country}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Achievements */}
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
                Company Achievements
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Milestones and recognition that mark our journey of innovation and growth.
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500" />
              <div className="space-y-12">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="w-1/2 px-8">
                      <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{achievement.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                        <p className="text-white/70">{achievement.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-gray-900" />
                    <div className="w-1/2 px-8" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Culture */}
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
                Company Culture
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                The values and principles that shape our workplace and drive our success.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {culture.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Join hundreds of companies already leveraging our cutting-edge technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  Start a Conversation
                </a>
                <a href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}