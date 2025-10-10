
export default function AboutPage() {
const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber-santos.webp',
      bio: 'Visionary leader with 15+ years in AI and enterprise solutions',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: '/images/team/sarah-chen.webp',
      bio: 'AI research pioneer with expertise in machine learning and quantum computing',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      image: '/images/team/michael-rodriguez.webp',
      bio: 'Full-stack architect specializing in scalable AI systems',
      expertise: ['System Architecture', 'Cloud Infrastructure', 'DevOps']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      image: '/images/team/emily-watson.webp',
      bio: 'Leading researcher in natural language processing and computer vision',
      expertise: ['NLP', 'Computer Vision', 'Deep Learning']
    }
>>>>>>> origin/main
  ],

const values = [
    {
      icon: Brain,
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Enterprise-grade security and compliance are at the core of everything we build.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by your business outcomes.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better, more efficient, and more connected.'
    }
  ],

const achievements = [
    { number: '500+', label: 'Successful Projects', icon: Target },
    { number: '100+', label: 'Enterprise Clients', icon: Users },
    { number: '50+', label: 'AI Models Deployed', icon: Brain },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }
>>>>>>> origin/main
  ],

            </p>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">About Zion Tech Group</h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">Leading the future of AI-powered enterprise solutions with cutting-edge technology,
              innovative thinking, and unwavering commitment to client success.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-33bd
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
                <Globe className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Global Reach</span>
              </div>
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            About
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We are a leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. 
            Our mission is to help businesses harness the power of artificial intelligence to drive innovation and growth.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To democratize artificial intelligence and make advanced technology accessible to businesses of all sizes. 
                We believe that every organization should have the tools and expertise to leverage AI for competitive advantage.
              </p>
              <p className="text-lg text-gray-300">
                Through our innovative solutions, expert consulting, and cutting-edge research, we're building a future 
                where AI enhances human potential and drives unprecedented business value.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6">
                To be the world's most trusted partner for AI transformation, recognized for our technical excellence, 
                ethical approach, and commitment to client success.
              </p>
              <p className="text-lg text-gray-300">
                We envision a world where AI and human intelligence work in perfect harmony, creating solutions 
                that are not only powerful but also responsible and beneficial to society.
              </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
            </div>
          </div>
        </div>
      </section>

              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">To democratize artificial intelligence and cutting-edge technology for enterprises worldwide,
                enabling them to achieve unprecedented levels of efficiency, innovation, and growth.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-33bd
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
        <div className="container mx-auto px-4"></section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
            <div></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">To democratize artificial intelligence and cutting-edge technology for enterprises worldwide,
                enabling them to achieve unprecedented levels of efficiency, innovation, and growth.</p>
              <div className="space-y-4"></div>
                <div className="flex items-start space-x-3"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Transform businesses through AI-powered solutions</p>
                </div>
                <div className="flex items-start space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Accelerate digital transformation initiatives</p>
                </div>
                <div className="flex items-start space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Drive sustainable innovation and growth</p>
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, Target, Globe, Brain, Cloud, Shield, Zap, CheckCircle, ArrowRight, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin } from 'lucide-react',

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions for enterprise clients worldwide." />
        <meta name="keywords" content="about zion tech group, AI company, IT solutions company, enterprise technology, team, mission, values" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Pioneering the future of AI and IT solutions with cutting-edge technology, 
                innovative thinking, and unwavering commitment to client success.
              </p>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="cyber-card hologram-card p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-12 h-12 text-cyan-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To democratize advanced AI and IT technologies, making them accessible and beneficial 
                  for businesses of all sizes while maintaining the highest standards of security, 
                  reliability, and innovation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Transform businesses through AI innovation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Deliver enterprise-grade security and reliability
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Foster sustainable technological growth
                  </li>
                </ul>
              </div>

              <div className="cyber-card hologram-card p-8">
                <div className="flex items-center mb-6">
                  <Globe className="w-12 h-12 text-purple-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To be the global leader in AI and IT solutions, recognized for our innovative 
                  approach, exceptional client outcomes, and commitment to advancing technology 
                  for the betterment of society.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Global leadership in AI innovation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Exceptional client success rates
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Technology for social good
                  </li>
                </ul>
              </div>
            </div>
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">To be the world's leading provider of AI and quantum computing solutions,
                creating a future where technology seamlessly integrates with human potential
                to solve the world's most complex challenges.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-33bd
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-6 rounded-lg">
            <div></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">To be the world's leading provider of AI and quantum computing solutions,
                creating a future where technology seamlessly integrates with human potential
                to solve the world's most complex challenges.</p>
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-6 rounded-lg"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                <h3 className="text-xl font-bold text-white mb-3">Core Values</h3>
                <div className="space-y-3"></div>
                  <div className="flex items-center space-x-3"></div>
                    <Brain className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Innovation & Excellence</span>
                  </div>
                  <div className="flex items-center space-x-3"></div>
                    <Shield className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Integrity & Trust</span>
                  </div>
                  <div className="flex items-center space-x-3"></div>
                    <Users className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Collaboration & Respect</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      </section>,
,
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Values</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">The principles that guide everything we do and shape our culture</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{values.map((value, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <value.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3><p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">The principles that guide everything we do and shape our culture</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-33bd
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our culture of excellence and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <value.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <achievement.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-gray-300">{achievement.label}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                      {skill}
                    </span>
                    <span key={skillIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">{skill}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-33bd
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Achievements</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Numbers that speak to our impact and success</p><div className="grid grid-cols-2 lg:grid-cols-4 gap-8">{achievements.map((achievement, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <achievement.icon className="w-10 h-10 text-white" />
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{achievement.number}</div><div className="text-gray-300 font-medium">{achievement.label}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Numbers that speak to our impact and success</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-10 h-10 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-33bd
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-gray-300 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
            </p>
          </div>
          <div className="max-w-4xl mx-auto"></div>
            <div className="relative"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600">{timeline.map((item, index) => (</div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <div className="text-cyan-400 font-bold text-lg mb-2">{item.year}<h3 className="text-xl font-bold text-white mb-2">{item.title}<p className="text-gray-300">{item.description}</p>
                </div><div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}></div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}></div>
                    <div className="bg-slate-800/50 p-6 rounded-lg"></div>
                      <div className="text-cyan-400 font-bold text-lg mb-2">{item.year}</div><h3 className="text-xl font-bold text-white mb-2">{item.title}</h3><p className="text-gray-300">{item.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div><div className="w-1/2">))}</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Key milestones in our company's growth and innovation</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <div className="text-cyan-400 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                </div>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-33bd
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies that trust Zion Tech Group for their AI transformation journey.
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Join hundreds of enterprises that have already transformed their operations with our AI solutions.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-33bd
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-33bd
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-14e4
          </div>
        </div>
      </section>
    </div>
  ),
}
>>>>>>> origin/main
          </section>

          {/* Company Stats */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
              <p className="text-xl text-gray-300">Numbers that speak to our success</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center cyber-card p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-white font-semibold mb-2">Successful Projects</div>
                <div className="text-gray-400 text-sm">Delivered on time and budget</div>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-white font-semibold mb-2">Happy Clients</div>
                <div className="text-gray-400 text-sm">Across various industries</div>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="text-4xl font-bold text-green-400 mb-2">300%</div>
                <div className="text-white font-semibold mb-2">Average ROI</div>
                <div className="text-gray-400 text-sm">For our AI implementations</div>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-white font-semibold mb-2">Uptime Guarantee</div>
                <div className="text-gray-400 text-sm">Enterprise-grade reliability</div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">Continuously pushing the boundaries of what's possible with AI and technology.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Security</h3>
                <p className="text-gray-300">Enterprise-grade security and compliance in every solution we deliver.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Users className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">Working closely with clients to understand and exceed their expectations.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">Delivering exceptional quality in every project and interaction.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Zap className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Agility</h3>
                <p className="text-gray-300">Adapting quickly to changing technology landscapes and client needs.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Globe className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Global Impact</h3>
                <p className="text-gray-300">Making a positive difference in the world through technology.</p>
              </div>
            </div>
          </section>

          {/* Leadership Team */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-300">Meet the experts driving our innovation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">JD</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">John Doe</h3>
                <p className="text-cyan-400 mb-3">CEO & Founder</p>
                <p className="text-gray-300 text-sm">20+ years in AI and enterprise technology leadership.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">JS</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Jane Smith</h3>
                <p className="text-cyan-400 mb-3">CTO</p>
                <p className="text-gray-300 text-sm">Expert in machine learning and quantum computing.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">MJ</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mike Johnson</h3>
                <p className="text-cyan-400 mb-3">VP of Engineering</p>
                <p className="text-gray-300 text-sm">Specialist in scalable AI infrastructure and DevOps.</p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how Zion Tech Group can help transform your business with 
                cutting-edge AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  ),
},

export default AboutPage,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
