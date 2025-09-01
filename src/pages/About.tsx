
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Rocket, 
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Lightbulb,
  Cpu,
  Brain,
  Cloud,
  Lock,
  Database

} from 'lucide-react';

export default function About() {
  
  
  
  
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
            We are a forward-thinking technology company dedicated to transforming businesses through cutting-edge AI, 
            quantum computing, and innovative digital solutions. Our mission is to democratize advanced technology 
            and make it accessible to organizations of all sizes.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-cyan-400 font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-300 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white"  />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To democratize advanced technology and empower organizations with AI-powered solutions that drive 
              innovation, efficiency, and competitive advantage in the digital age.
            </p>

          </div>


          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-white"  />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the global leader in AI-powered technology solutions, shaping the future of business 
              through innovation, sustainability, and human-centric design.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>

              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Technology Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Meet Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-white"  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-xs text-gray-400 bg-white/5 rounded px-2 py-1">
                      {skill}
                    </div>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Company Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 flex justify-center">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 max-w-sm">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-slate-900"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that have already transformed their operations with our AI-powered solutions.

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"

                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"

              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )}
