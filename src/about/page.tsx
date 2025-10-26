import { CheckCircle, Shield } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Brain, Shield } from 'lucide-react';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const team = [
  const _team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.'},
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/images/team/sarah.jpg',
      bio: 'Technical expert specializing in machine learning and cloud architecture.'},
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      image: '/images/team/michael.jpg',
      bio: 'AI researcher and developer with expertise in deep learning and NLP.'}];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.'},
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.'},
    {
      icon: Target,
      title: 'Results',
      description: 'We focus on delivering measurable business outcomes and ROI.'},
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work closely with our clients as strategic technology partners.'}];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      <div className="container mx-auto px-4 py-16"></div>"
        <div className="text-center mb-16"></div>"
          <h1 className="text-5xl font-bold text-white mb-6">About Zion Tech Group</h1>"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>"
            We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation.
          </p>
import { Users, CheckCircle, Star, Shield, Award, Target, Globe, Brain, Cloud, Code, BarChart, TrendingUp, Phone, Mail, MapPin, Clock, ArrowRight, Zap, Cpu, Database, Lock, Smartphone, Settings, Calendar, FileText, MessageSquare, Star as StarIcon, Award as AwardIcon, Shield as ShieldIcon, Users as UsersIcon } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber-santos.jpg',
      bio: 'Visionary leader with 15+ years in AI and enterprise solutions',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: '/images/team/sarah-chen.jpg',
      bio: 'AI research pioneer with expertise in machine learning and quantum computing',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      image: '/images/team/michael-rodriguez.jpg',
      bio: 'Full-stack architect specializing in scalable AI systems',
      expertise: ['System Architecture', 'Cloud Infrastructure', 'DevOps']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      image: '/images/team/emily-watson.jpg',
      bio: 'Leading researcher in natural language processing and computer vision',
      expertise: ['NLP', 'Computer Vision', 'Deep Learning']
    }
  ];

  const values = [
    {
      icon: Brain,
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
  ];

  const achievements = [
    { number: '500+', label: 'Successful Projects', icon: Target },
    { number: '100+', label: 'Enterprise Clients', icon: Users },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI for enterprises.'
    },
    {
      year: '2019',
      title: 'First AI Platform',
      description: 'Launched our flagship AI automation platform, serving 50+ clients.'
    },
    {
      year: '2020',
      title: 'Quantum Computing Division',
      description: 'Established quantum computing research and development capabilities.'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across North America, Europe, and Asia.'
    },
    {
      year: '2022',
      title: 'AI Ethics Initiative',
      description: 'Launched comprehensive AI ethics framework and responsible AI practices.'
    },
    {
      year: '2023',
      title: 'Breakthrough Technologies',
      description: 'Introduced cutting-edge solutions in autonomous systems and edge computing.'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Awarded "AI Innovation Leader" by TechCrunch and "Best AI Solutions Provider" by Gartner.'"
    }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8'></div>
      <div className='max-w-7xl mx-auto'></div>
        <div className='text-center mb-12'></div>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            About Zion Tech Group
          </h1>
          <p className='text-xl text-gray-600'>
            Leading the future of AI and IT solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div>"
          <div className="text-center"></div>"
            <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />"
            <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>"
            <p className="text-gray-300">50+ skilled professionals</p>"
          </div>
          <div className="text-center"></div>"
            <Target className="h-12 w-12 text-cyan-400 mx-auto mb-4" />"
            <h3 className="text-xl font-semibold text-white mb-2">Focused Solutions</h3>"
            <p className="text-gray-300">Tailored to your needs</p>"
          </div>
          <div className="text-center"></div>"
            <Brain className="h-12 w-12 text-cyan-400 mx-auto mb-4" />"
            <h3 className="text-xl font-semibold text-white mb-2">AI Innovation</h3>"
            <p className="text-gray-300">Cutting-edge technology</p>"
          </div>
          <div className="text-center"></div>"
            <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />"
            <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>"
            <p className="text-gray-300">Enterprise-grade security</p>"
          </div>
        </div>

      {/* Stats Section */}
        <section className="py-16 bg-white">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>"
              {stats.map((stat, index) => (
                <div key={index} className="text-center"></div>"
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2"></div>"

        {/* Stats Section */}
        <section className="py-16 bg-white rounded-xl mb-16"></section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>"
              {stats.map((stat, index) => (
                <div key={index} className="text-center"></div>"
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2"></div>"
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium"></div>"
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-50 rounded-xl mb-16"></section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>"
              <div></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"></h2>"
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6"></p>"
                  To democratize access to advanced AI technology and empower businesses of all sizes,
to achieve their full potential through innovative digital solutions.
                </p>
                <p className="text-lg text-gray-600 mb-8"></p>"
                  We believe that every business deserves access to cutting-edge technology that can,
transform their operations, improve efficiency, and drive growth.
                </p>
                <Link,
to="/contact""
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors""
                ></Link>
                  Get in Touch
                </Link>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8"></div>"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>"
                <p className="text-gray-600"></p>"
                  To be the world's leading provider of AI-powered business solutions, 
                  helping organizations across all industries achieve digital transformation,
and sustainable growth in the age of artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white rounded-xl mb-16"></section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
            <div className="text-center mb-16"></div>"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>"
                Our Values
              </h2>
              <p className="text-xl text-gray-600"></p>"
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
              {values.map((value, index) => (
                <div key={index} className="text-center"></div>"
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>"
                    <value.icon className="w-8 h-8 text-white" />"
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3"></h3>"
                    {value.title}
                  </h3>
                  <p className="text-gray-600"></p>"
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50 rounded-xl mb-16"></section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
            <div className="text-center mb-16"></div>"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>"
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600"></p>"
                The experts behind our innovative solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>"
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden"></div>"
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center"></div>"
                    <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center"></div>"
                      <Users className="w-16 h-16 text-gray-600" />"
                    </div>
                  </div>
                  <div className="p-6"></div>"
                    <h3 className="text-xl font-bold text-gray-900 mb-2"></h3>"
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3"></p>"
                      {member.role}
                    </p>
                    <p className="text-gray-600"></p>"
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"></section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>"
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"></p>"
              Let's discuss how we can help transform your business with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
              <Link,
to="/contact""
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300""
              ></Link>
                Start a Project
              </Link>
              <Link,
to="/careers""
                className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300""
              ></Link>
                Join Our Team
              </Link>
            </div>
          </div>
        </section>

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"></div>"
      <div className="text-center"></div>"
        <h1 className="text-4xl font-bold text-white mb-4">About</h1>"
        <p className="text-gray-300 mb-8">Coming Soon - Advanced about solutions</p>"
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">"
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
      {/* Stats Section */}
      <section className="py-16 bg-white"></section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>"
            {stats.map((stat, index) => (
              <div key={index} className="text-center"></div>"
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2"></div>"
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium"></div>"
                  {stat.label}
                </div>
      <section className="relative py-20 lg:py-32 overflow-hidden"></section>"
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>"
        <div className="container mx-auto px-4 relative z-10"></div>"
          <div className="max-w-4xl mx-auto text-center"></div>"
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse"></h1>"
              About Zion Tech Group
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed"></p>"
              Leading the future of AI-powered enterprise solutions with cutting-edge technology, 
              innovative thinking, and unwavering commitment to client success.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>"
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>"
                <Award className="w-5 h-5 text-cyan-400" />"
                <span className="text-white font-medium">ISO 27001 Certified</span>"
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>"
                <Shield className="w-5 h-5 text-purple-400" />"
                <span className="text-white font-medium">Enterprise Security</span>"
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>"
                <Globe className="w-5 h-5 text-green-400" />"
                <span className="text-white font-medium">Global Reach</span>"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>"
            <div></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6"></h2>"
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed"></p>"
                To democratize artificial intelligence and cutting-edge technology for enterprises worldwide, 
                enabling them to achieve unprecedented levels of efficiency, innovation, and growth.
              </p>
              <div className="space-y-4"></div>"
                <div className="flex items-start space-x-3"></div>"
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />"
                  <p className="text-gray-300">Transform businesses through AI-powered solutions</p>"
                </div>
                <div className="flex items-start space-x-3"></div>"
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />"
                  <p className="text-gray-300">Accelerate digital transformation initiatives</p>"
                </div>
                <div className="flex items-start space-x-3"></div>"
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />"
                  <p className="text-gray-300">Drive sustainable innovation and growth</p>"
                </div>
              </div>
            </div>
            <div></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6"></h2>"
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed"></p>"
                To be the world's leading provider of AI and quantum computing solutions, 
                creating a future where technology seamlessly integrates with human potential,
to solve the world's most complex challenges.
              </p>
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-6 rounded-lg"></div>"
                <h3 className="text-xl font-bold text-white mb-3">Core Values</h3>"
                <div className="space-y-3"></div>"
                  <div className="flex items-center space-x-3"></div>"
                    <Brain className="w-5 h-5 text-cyan-400" />"
                    <span className="text-gray-300">Innovation & Excellence</span>"
                  </div>
                  <div className="flex items-center space-x-3"></div>"
                    <Shield className="w-5 h-5 text-purple-400" />"
                    <span className="text-gray-300">Integrity & Trust</span>"
                  </div>
                  <div className="flex items-center space-x-3"></div>"
                    <Users className="w-5 h-5 text-green-400" />"
                    <span className="text-gray-300">Collaboration & Respect</span>"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-800/50"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="text-center mb-16"></div>"
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4"></h2>"
              Our Values
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>"
              The principles that guide everything we do and shape our culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
            {values.map((value, index) => (
              <div key={index} className="text-center group"></div>"
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>"
                  <value.icon className="w-8 h-8 text-white" />"
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>"
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>"
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="text-center mb-16"></div>"
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4"></h2>"
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>"
              World-class experts in AI, quantum computing, and enterprise technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover:bg-slate-700/50 transition-all duration-300"></div>"
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>"
                  <span className="text-2xl font-bold text-white"></span>"
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>"
                <p className="text-cyan-400 font-medium mb-3">{member.role}</p>"
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>"
                <div className="flex flex-wrap justify-center gap-2"></div>"
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded"></span>"
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-slate-800/50"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="text-center mb-16"></div>"
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4"></h2>"
              Our Achievements
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>"
              Numbers that speak to our impact and success
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8"></div>"
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center"></div>"
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>"
                  <achievement.icon className="w-10 h-10 text-white" />"
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2"></div>"
                  {achievement.number}
                </div>
                <div className="text-gray-300 font-medium"></div>"
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="text-center mb-16"></div>"
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4"></h2>"
              Our Journey
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>"
              Key milestones in our company's growth and innovation
            </p>
          </div>
          <div className="max-w-4xl mx-auto"></div>"
            <div className="relative"></div>"
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>"
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}></div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}></div>
                    <div className="bg-slate-800/50 p-6 rounded-lg"></div>"
                      <div className="text-cyan-400 font-bold text-lg mb-2">{item.year}</div>"
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>"
                      <p className="text-gray-300">{item.description}</p>"
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>"
                  <div className="w-1/2"></div>"
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700"></section>"
        <div className="container mx-auto px-4 text-center"></div>"
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6"></h2>"
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"></p>"
            Join hundreds of enterprises that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <a,
href="/contact""
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center""
            ></a>
              <MessageSquare className="w-5 h-5 mr-2" />"
              Get Started Today
            </a>
            <a,
href="/consultation""
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center""
            ></a>
              <Calendar className="w-5 h-5 mr-2" />"
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
