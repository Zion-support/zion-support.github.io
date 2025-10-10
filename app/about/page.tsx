import { Users, CheckCircle, Shield, Award, Target, Globe, Brain, Cloud, TrendingUp, Calendar, MessageSquare, Award, Shield, Users } from 'lucide-react';

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
      description: 'Awarded "AI Innovation Leader" by TechCrunch and "Best AI Solutions Provider" by Gartner.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
      <section className="relative py-20 lg:py-32 overflow-hidden"></sectio>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div><div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4 xl mx-auto text-center"></div>
            <h1 className="text-4 xl lg:text-6 xl font-bold text-white mb-6 cyber-text neon-pulse"></h1></<<<h1>About</h1></<<h1>Zion</h1> Tech Group<p className="text-xl lg:text-2 xl text-gray-300 mb-8 leading-relaxed">Leading the future of AI-powered enterprise solutions with cutting-edge technology,
              innovative thinking, and unwavering commitment to client success.</p>
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
                <Award className="w-5 h-5 text-cyan-400" /></Awar>
                <span className="text-white font-medium">ISO 27001 Certified</spa>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
                <Shield className="w-5 h-5 text-purple-400" /></Shiel>
                <span className="text-white font-medium">Enterprise Security</spa>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
                <Globe className="w-5 h-5 text-green-400" /></Glob>
                <span className="text-white font-medium">Global Reach</spa>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20"></sectio>
        <div className="container mx-auto px-4"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
            <div></div>
              <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-6"></h2></<<<h2>Our</h2></<<h2>Mission</h2><p className="text-lg text-gray-300 mb-6 leading-relaxed">To democratize artificial intelligence and cutting-edge technology for enterprises worldwide,</p></<<<p>enabling</p></<<p>them</p> to achieve unprecedented levels of efficiency, innovation, and growth.</p>
              </p>
              <div className="space-y-4"></div>
                <div className="flex items-start space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" /></CheckCircl>
                  <p className="text-gray-300">Transform businesses through AI-powered solutions</p>
                </div>
                <div className="flex items-start space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" /></CheckCircl>
                  <p className="text-gray-300">Accelerate digital transformation initiatives</p>
                </div>
                <div className="flex items-start space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" /></CheckCircl>
                  <p className="text-gray-300">Drive sustainable innovation and growth</p>
                </div>
              </div>
            </div>
            <div></div>
              <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-6"></h2></<<<h2>Our</h2></<<h2>Vision</h2><p className="text-lg text-gray-300 mb-6 leading-relaxed">To be the world's leading provider of AI and quantum computing solutions,</p></<<p>creating</p> a future where technology seamlessly integrates with human potential</<<<p>to</p></<<p>solve</p> the world's most complex challenges.</p>
              </p>
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-6 rounded-lg"></div>
                <h3 className="text-xl font-bold text-white mb-3">Core Values</h>
                <div className="space-y-3"></div>
                  <div className="flex items-center space-x-3"></div>
                    <Brain className="w-5 h-5 text-cyan-400" /></Brai>
                    <span className="text-gray-300">Innovation & Excellence</spa>
                  </div>
                  <div className="flex items-center space-x-3"></div>
                    <Shield className="w-5 h-5 text-purple-400" /></Shiel>
                    <span className="text-gray-300">Integrity & Trust</spa>
                  </div>
                  <div className="flex items-center space-x-3"></div>
                    <Users className="w-5 h-5 text-green-400" /></User>
                    <span className="text-gray-300">Collaboration & Respect</spa>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-800/50"></sectio>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-4"></h2></<<<h2>Our</h2></<<h2>Values</h2><p className="text-lg text-gray-300 max-w-3 xl mx-auto"></p></<<<p>The</p></<<p>principles</p> that guide everything we do and shape our culture<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{values.map((value, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <value.icon className="w-8 h-8 text-white" /></valu>
                <h3 className="text-xl font-bold text-white mb-3"></h>{value.title}<p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20"></sectio>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-4"></h2></<<<h2>Meet</h2></<<h2>Our</h2> Team<p className="text-lg text-gray-300 max-w-3 xl mx-auto"></p></<<<p>World</p>-class experts in AI, quantum computing, and enterprise technology<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{teamMembers.map((member, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover:bg-slate-700/50 transition-all duration-300"></div>
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-2 xl font-bold text-white"></spa>{member.name.split(' ').map(n => n[0]).join('')}<h3 className="text-xl font-bold text-white mb-2">{member.name}</h>
                <p className="text-cyan-400 font-medium mb-3"></p>{member.role}<p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2"></div>{member.expertise.map((skill, skillIndex) => (<span key={skillIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">{skill}</spa>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-slate-800/50"></sectio>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-4"></h2></<<<h2>Our</h2></<<h2>Achievements</h2><p className="text-lg text-gray-300 max-w-3 xl mx-auto"></p></<<<p>Numbers</p></<<p>that</p> speak to our impact and success<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">{achievements.map((achievement, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <achievement.icon className="w-10 h-10 text-white" /></achievemen>
                <div className="text-3 xl lg:text-4 xl font-bold text-white mb-2"></div>{achievement.number}<div className="text-gray-300 font-medium">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20"></sectio>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-4"></h2></<<<h2>Our</h2></<<h2>Journey</h2><p className="text-lg text-gray-300 max-w-3 xl mx-auto">Key milestones in our company's growth and innovation</p>
            </p>
          </div>
          <div className="max-w-4 xl mx-auto"></div>
            <div className="relative"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600">{timeline.map((item, index) => (</div>
                </div><div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}></div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}></div>
                    <div className="bg-slate-800/50 p-6 rounded-lg"></div>
                      <div className="text-cyan-400 font-bold text-lg mb-2"></div>{item.year}<h3 className="text-xl font-bold text-white mb-2"></h>{item.title}<p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div><div className="w-1/2">))}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700"></sectio>
        <div className="container mx-auto px-4 text-center"></div>
          <h2 className="text-3 xl lg:text-4 xl font-bold text-white mb-6"></h2></<<<h2>Ready</h2></<<h2>to</h2> Transform Your Business?<p className="text-xl text-gray-200 mb-8 max-w-3 xl mx-auto">Join hundreds of enterprises that have already transformed their operations with our AI solutions.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            ></a>
              <MessageSquare className="w-5 h-5 mr-2" >Get Started Today</MessageSquar>
            </MessageSquare>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            ></a>
              <Calendar className="w-5 h-5 mr-2" >Free Consultation</Calenda>
            </Calendar>
          </div>
        </div>
      </section>
    </div>
  );
}