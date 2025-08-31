import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,

  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users,
  Award,
  Globe,
  Zap as ZapIcon,
  TrendingUp,
  Heart,
  Shield as ShieldIcon,
  Target as TargetIcon
} from 'lucide-react';

const About: NextPage = () => {
  const companyValues = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible, embracing emerging technologies and creative solutions.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: ShieldIcon,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from code to customer service.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through honest communication, ethical practices, and transparent relationships.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: TargetIcon,
      title: 'Results',
      description: 'We focus on delivering measurable outcomes that drive real business value and transformation.',
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 20+ years in technology and business transformation.',
      expertise: ['Strategic Planning', 'Business Development', 'Technology Innovation'],
      avatar: '/images/team/sarah-johnson.jpg',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Technology expert specializing in AI, cloud architecture, and digital transformation.',
      expertise: ['AI/ML', 'Cloud Architecture', 'System Design'],
      avatar: '/images/team/michael-chen.jpg',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Chief Security Officer',
      bio: 'Cybersecurity specialist with deep expertise in threat detection and compliance.',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management'],
      avatar: '/images/team/emily-rodriguez.jpg',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'David Kim',
      role: 'Head of Data Science',
      bio: 'Data scientist focused on business intelligence and predictive analytics.',
      expertise: ['Data Analytics', 'Machine Learning', 'Business Intelligence'],
      avatar: '/images/team/david-kim.jpg',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const milestones = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to transform businesses through technology.'
    },
    {
      year: '2012',
      title: 'First Major Client',
      description: 'Successfully delivered enterprise solution for Fortune 500 company.'
    },
    {
      year: '2015',
      title: 'AI Division Launch',
      description: 'Expanded into artificial intelligence and machine learning services.'
    },
    {
      year: '2018',
      title: 'Global Expansion',
      description: 'Opened offices in Europe and Asia to serve international clients.'
    },
    {
      year: '2021',
      title: 'Cloud Native Focus',
      description: 'Shifted focus to cloud-native architecture and modern development practices.'
    },
    {
      year: '2024',
      title: 'Future Ready',
      description: 'Leading the way in emerging technologies and digital transformation.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - a leading technology solutions provider with over 15 years of experience in digital transformation." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              About Zion Tech Group
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Story
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              For over 15 years, we've been at the forefront of technology innovation, 
              helping businesses transform and thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Who We Are
              </h2>
              
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Zion Tech Group is a leading technology solutions provider that specializes in 
                digital transformation, artificial intelligence, cloud architecture, and cybersecurity. 
                We partner with businesses of all sizes to deliver innovative solutions that drive 
                growth and competitive advantage.
              </p>
              
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Our team of experts combines deep technical knowledge with business acumen to 
                understand your unique challenges and deliver tailored solutions that exceed expectations.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '500+', label: 'Projects Completed' },
                  { number: '50+', label: 'Team Members' },
                  { number: '15+', label: 'Years Experience' },
                  { number: '98%', label: 'Client Satisfaction' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Brain, label: 'AI & ML', color: 'from-purple-500 to-pink-600' },
                    { icon: Cloud, label: 'Cloud', color: 'from-blue-500 to-cyan-600' },
                    { icon: Shield, label: 'Security', color: 'from-green-500 to-emerald-600' },
                    { icon: BarChart3, label: 'Analytics', color: 'from-orange-500 to-red-600' }
                  ].map((service, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white font-semibold">{service.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet the experts who drive our vision and deliver exceptional results
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8"
              >
                <div className="flex items-start mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0`}>
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold">{member.role}</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed">{member.bio}</p>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Key milestones that shaped our company and our commitment to innovation
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-cyan-500 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-6">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-slate-300">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that trust Zion Tech Group to transform their business 
                and drive innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Started Today
                </a>
                
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Explore Services
                </a>
              </div>
              
              <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Proven Track Record</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Innovation Focus</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;