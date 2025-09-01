import React from 'react';
import { Link } from 'react-router-dom';
import {}
  Users,
  Target,
  Award,
  Rocket,
  Heart,
  Star,
  Globe,
  Building,
  TrendingUp,
  Zap,
  Brain,
  Shield,
  Cloud,
  Workflow,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Cpu,
  Wifi,
  Bot,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  BarChart3,
  Users2,
  Settings,
  Palette,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram
} from 'lucide-react';

export function AboutPage(function AboutPage() {): any {}
  const companyStats: any = []
    { label: 'Years of Experience', value: '5+', icon: Award },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Projects Completed', value: '200+', icon: Rocket },
    { label: 'Countries Served', value: '25+', icon: Globe }
  ];

  return ("""
    <div className="min-h-screen py-8">"      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
        {/* Page Header */}"""
        <div className="text-center mb-16">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}""
          >"""
            <h1 className="text-5xl font-bold text-white mb-6">
              About Zion Tech Group""
            </h1>"""
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">'
              We are a forward-thinking technology company dedicated to solving''
              the world's most complex challenges through innovation, expertise,
              and unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
""
        {/* Mission & Vision */}"""
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div;
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}""
            transition={{ duration: 0.6 }}"""
            className="bg-gray-800 rounded-xl p-8 border border-gray-700"""
          >"""
            <div className="flex items-center space-x-4 mb-6">"""
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">"""
                <Target className="w-8 h-8 text-white"  />""
              </div>"              <h2 className="text-3xl font-bold text-white">Our Mission</h2>""
            </div>"""
            <p className="text-gray-300 text-lg leading-relaxed">
              To democratize advanced technology and empower businesses of all;
              sizes to harness the transformative power of AI, quantum;
              computing, and cutting-edge innovations.
            </p>
          </motion.div>

          <motion.div;
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}""
            transition={{ duration: 0.6, delay: 0.2 }}"""
            className="bg-gray-800 rounded-xl p-8 border border-gray-700"""
          >"""
            <div className="flex items-center space-x-4 mb-6">"""
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">"""
                <Rocket className="w-8 h-8 text-white"  />""
              </div>"              <h2 className="text-3xl font-bold text-white">Our Vision</h2>""
            </div>"""
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the global leader in next-generation technology solutions,
              driving innovation that shapes the future of business and society.
            </p>
          </motion.div>
        </div>
""
        {/* Stats Section */}"""
        <div className="grid grid-cols-2 md: anygrid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div;
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}""
              transition={{ duration: 0.5, delay: index * 0.1 }}"""
              className="text-center"""
            >"""
              <div className="flex justify-center mb-4">"""
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">"""
                  <stat.icon className="w-8 h-8 text-white" />
                </div>""
              </div>"""
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}""
              </div>"""
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
""
        {/* Values Section */}"""
        <div className="mb-20">"""
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Values""
          </h2>"""
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div;
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}""
                transition={{ duration: 0.5, delay: index * 0.1 }}"""
                className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 text-center"""
              >"""
                <div className="flex justify-center mb-6">
                  <div;
                    className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center`}""
                  >"""
                    <value.icon className="w-8 h-8 text-white" />
                  </div>""
                </div>"""
                <h3 className="text-xl font-bold text-white mb-4">
                  {value.title}""
                </h3>"""
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
""
        {/* Team Section */}"""
        <div className="mb-20">"""
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Leadership Team""
          </h2>"""
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div;
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}""
                transition={{ duration: 0.5, delay: index * 0.1 }}"""
                className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300"""
              >"""
                <div className="text-center mb-6">"""
                  <div className="text-6xl mb-4">{member.avatar}</div>"""
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}""
                  </h3>"""
                  <p className="text-cyan-400 font-medium">{member.role}</p>
                </div>""
"""
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {member.bio}
                </p>""
"""
                <div className="space-y-2">"""
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">
                    Expertise: any;
                  </h4>
                  {member.expertise.map((skill, skillIndex) => (
                    <div""
                      key={skillIndex}"""
                      className="flex items-center space-x-2 text-sm text-gray-300"""
                    >"""
                      <CheckCircle className="w-4 h-4 text-cyan-400"  />                      <span>{skill}</span>
                    </div>) ) }
                </div>
              </motion.div>) ) }
          </div>
        </div>
""
        {/* Timeline Section */}"""
        <div className="mb-20">"""
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Journey""
          </h2>"""
          <div className="relative">""
            {/* Timeline line */}"""
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-cyan-500 to-blue-600"></div>""
"""
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div;
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}`
                  transition={{ duration: 0.5, delay: index * 0.1 }}``
                  className={`relative flex items-center ${}
'`
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'``
                  }`}
                >""
                  {/* Timeline dot */}"""
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900"></div>

                  {/* Content */}'`
                  <div'`'`
                    className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}""
                  >"""
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">"""
                      <div className="text-2xl font-bold text-cyan-400 mb-2">
                        {milestone.year}""
                      </div>"""
                      <h3 className="text-xl font-bold text-white mb-2">
                        {milestone.title}""
                      </h3>"""
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>) ) }
            </div>
          </div>
        </div>
""
        {/* CTA Section */}"""
        <div className="text-center">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}""
            transition={{ duration: 0.6 }}"""
            className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12"""
          >"""
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Us in Shaping the Future""
            </h2>"""
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">'
              Whether you're looking to partner with us, join our team, or learn''
              more about our solutions, we'd love to hear from you.
            </p>""
"""
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">""
              <Link"""
                to="/contact"""
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105""
              >""
                <span>Get in Touch</span>"""
                <ArrowRight className="w-5 h-5"  />              </Link>""
              <Link"""
                to="/careers"""
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white""
              >
                <span > Join Our Team</span>
              </Link>
            </div>
""
            {/* Contact Info */}"""
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-cyan-100">"""
              <div className="flex items-center justify-center space-x-3">"""
                <Phone className="w-5 h-5"  />
                <span>+1 302 464 0950</span>""
              </div>"""
              <div className="flex items-center justify-center space-x-3">"""
                <Mail className="w-5 h-5"  />
                <span>kleber@ziontechgroup.com</span>""
              </div>"""
              <div className="flex items-center justify-center space-x-3">"""
                <MapPin className="w-5 h-5"  />                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
""
            {/* Social Links */}"""
            <div className="flex justify-center space-x-6 mt-8">
              {[]
                {}
                  icon: anyLinkedin,'
                  href: 'https://linkedin.com/company/ziontechgroup','
                  label: 'LinkedIn'},
                {}
                  icon: Twitter,'
                  href: 'https://twitter.com/ziontechgroup','
                  label: 'Twitter'},
                {}
                  icon: Github,'
                  href: 'https://github.com/ziontechgroup','
                  label: 'GitHub'},
                {}
                  icon: Facebook,'
                  href: 'https://facebook.com/ziontechgroup','
                  label: 'Facebook'},
                {}
                  icon: Instagram,'
                  href: 'https://instagram.com/ziontechgroup','
                  label: 'Instagram'}
              ].map(social => (
                <a;
                  key={social.label}""
                  href={social.href}"""
                  target="_blank"""
                  rel="noopener noreferrer"""
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors group"""
                >"""
                  <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Expertise */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Expertise</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technologies that power our innovative solutions;
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <div;
                key={tech.name}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1""
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the visionary leaders driving innovation and growth at Zion Tech Group;
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div;
                key={member.name}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center""
              >
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a;
                    href={member.linkedin}
                    className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-200""
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a;
                    href={member.twitter}
                    className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-sky-500 hover:text-white transition-all duration-200""
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative technology solutions can transform your business;
            and drive unprecedented growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link;
              to="/contact""
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl""
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get in Touch;
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link;
              to="/services""
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold rounded-lg transition-all duration-200""
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Services;
            </Link>
          </div>
        </div>
      </div>
    </div>
  )}'"`
'"`'"`
