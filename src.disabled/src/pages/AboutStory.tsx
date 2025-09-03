import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Users, 
  Globe, 
  Award, 
  Target, 
  Lightbulb, 
  Heart, 
  Shield,
  Zap,
  Star,
  ArrowRight,
  Calendar,
  TrendingUp,
  Building,
  Eye
} from 'lucide-react';

const AboutStory = () => {
  const timeline = [
    {
      year: '2009',
      title: 'The Beginning',
      description: 'Founded in a small garage by three Stanford PhD students with a vision to democratize AI technology.',
      milestone: 'Company Founded',
      icon: Rocket,
      achievements: ['3 Co-founders', 'First AI prototype', 'Initial funding secured']
    },
    {
      year: '2012',
      title: 'First Breakthrough',
      description: 'Developed our first commercial AI solution for natural language processing, serving 10 enterprise clients.',
      milestone: 'First Product Launch',
      icon: Target,
      achievements: ['10 Enterprise Clients', 'NLP breakthrough', 'Series A funding']
    },
    {
      year: '2015',
      title: 'Global Expansion',
      description: 'Expanded operations to Europe and Asia, establishing regional headquarters and local teams.',
      milestone: 'International Growth',
      icon: Globe,
      achievements: ['25 Countries', '500+ Team Members', 'Series B funding']
    },
    {
      year: '2018',
      title: 'AI Revolution',
      description: 'Launched our flagship AI platform, revolutionizing how businesses integrate artificial intelligence.',
      milestone: 'AI Platform Launch',
      icon: Lightbulb,
      achievements: ['1000+ Clients', 'AI Platform', 'Unicorn Status']
    },
    {
      year: '2021',
      title: 'Industry Leadership',
      description: 'Recognized as a leader in AI technology, serving Fortune 500 companies across all major industries.',
      milestone: 'Market Leadership',
      icon: Award,
      achievements: ['Fortune 500 Clients', 'Industry Awards', '5000+ Team Members']
    },
    {
      year: '2024',
      title: 'Future Forward',
      description: 'Pioneering next-generation AI solutions and expanding into emerging markets and technologies.',
      milestone: 'Innovation Leader',
      icon: Star,
      achievements: ['Next-gen AI', 'Emerging Markets', '10,000+ Projects']
    }
  ];

  const missionValues = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize artificial intelligence and make cutting-edge technology accessible to businesses of all sizes, enabling them to solve complex problems and drive innovation.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'A world where AI is seamlessly integrated into every business process, creating unprecedented opportunities for growth, efficiency, and human advancement.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Our Purpose',
      description: 'To empower organizations with intelligent solutions that enhance human capabilities, foster innovation, and create sustainable value for society.',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const keyAchievements = [
    {
      number: '15+',
      label: 'Years of Innovation',
      description: 'Pioneering AI solutions since 2009',
      icon: Calendar
    },
    {
      number: '10,000+',
      label: 'Projects Delivered',
      description: 'Successfully completed across industries',
      icon: Building
    },
    {
      number: '500+',
      label: 'Enterprise Clients',
      description: 'Including Fortune 500 companies',
      icon: Users
    },
    {
      number: '50+',
      label: 'Countries Served',
      description: 'Global presence and impact',
      icon: Globe
    },
    {
      number: '99.9%',
      label: 'Client Satisfaction',
      description: 'Consistently exceeding expectations',
      icon: Star
    },
    {
      number: '5000+',
      label: 'Team Members',
      description: 'Global talent and expertise',
      icon: Users
    }
  ];

  const companyCulture = [
    {
      title: 'Innovation at Core',
      description: 'We encourage creative thinking and experimentation, constantly pushing the boundaries of what\'s possible with AI technology.',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Customer Success First',
      description: 'Every decision we make is guided by how it will benefit our clients and help them achieve their goals.',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Continuous Learning',
      description: 'We foster a culture of lifelong learning, encouraging our team to stay ahead of emerging technologies and industry trends.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Collaboration & Diversity',
      description: 'We believe the best solutions come from diverse perspectives working together in an inclusive, collaborative environment.',
      icon: Users,
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Story
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              From a garage startup to a global AI leader, discover the journey that shaped 
              Zion Tech Group and our mission to transform the future of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400">
                <span className="font-semibold">2009</span> Founded
              </div>
              <div className="px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400">
                <span className="font-semibold">15+</span> Years
              </div>
              <div className="px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400">
                <span className="font-semibold">10,000+</span> Projects
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The driving force behind everything we do and the principles that guide our journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {missionValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A timeline of key milestones that shaped our company and the AI industry.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full border-4 border-slate-900 z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-cyan-400">{item.year}</div>
                          <div className="text-sm text-gray-400">{item.milestone}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      
                      <div className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <Star className="w-3 h-3 text-yellow-400" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Key Achievements</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Numbers that tell the story of our growth and impact in the AI industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-xl font-semibold text-cyan-400 mb-2">{achievement.label}</div>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Culture</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The values and principles that shape our workplace and drive our success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyCulture.map((culture, index) => (
              <motion.div
                key={culture.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${culture.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <culture.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{culture.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{culture.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Looking to the Future</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our vision for the next decade and beyond in AI technology and business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Technology Innovation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  Next-generation AI models and algorithms
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  Advanced cybersecurity and privacy solutions
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  Global AI infrastructure and edge computing
                </li>
                <li className="flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-cyan-400" />
                  Quantum computing integration
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Business Impact</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  Democratizing AI for small businesses
                </li>
                <li className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-purple-400" />
                  Industry-specific AI solutions
                </li>
                <li className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  Sustainable technology practices
                </li>
                <li className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-purple-400" />
                  Social impact and responsibility
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600/50"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're a client, partner, or team member, join us in shaping 
              the future of AI technology and business transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/careers"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Join Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutStory;