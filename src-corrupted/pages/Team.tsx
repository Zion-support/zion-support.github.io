import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, Twitter, Globe, Mail, Phone, MapPin, 
  Award, Users, Rocket, Brain, Shield, Cloud, Code,
  Building, Target, TrendingUp, Star, Zap, Heart
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Team = (props: any) => {
  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer',
      bio: 'Former AI Research Director at Google, PhD in Computer Science from Stanford. Leading Zion Tech Group\'s mission to democratize AI technology.',
      image: '/images/team/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      twitter: 'https://twitter.com/sarahchen',
      expertise: ['AI Strategy', 'Business Development', 'Technology Vision']
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Chief Technology Officer',
      bio: 'Ex-Microsoft Azure architect with 15+ years in cloud infrastructure. Expert in scalable systems and emerging technologies.',
      image: '/images/team/marcus-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      twitter: 'https://twitter.com/marcusrodriguez',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design']
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Chief AI Officer',
      bio: 'Leading AI researcher with 50+ published papers. Former professor at MIT specializing in machine learning and neural networks.',
      image: '/images/team/emily-watson.jpg',
      linkedin: 'https://linkedin.com/in/emily-watson',
      twitter: 'https://twitter.com/emilywatson',
      expertise: ['Machine Learning', 'AI Ethics', 'Research & Development']
    },
    {
      name: 'David Kim',
      title: 'Chief Financial Officer',
      bio: 'Former investment banker with Goldman Sachs. Expert in fintech, fundraising, and strategic financial planning.',
      image: '/images/team/david-kim.jpg',
      linkedin: 'https://linkedin.com/in/david-kim',
      twitter: 'https://twitter.com/davidkim',
      expertise: ['Financial Strategy', 'Investor Relations', 'Risk Management']
    }
  ];

  const departmentHeads = [
    {
      name: 'Alex Thompson',
      title: 'VP of Engineering',
      department: 'Engineering',
      bio: 'Leading our engineering teams with 12+ years of experience in software development and team leadership.',
      image: '/images/team/alex-thompson.jpg',
      linkedin: 'https://linkedin.com/in/alex-thompson',
      expertise: ['Software Engineering', 'Team Leadership', 'Agile Development']
    },
    {
      name: 'Lisa Park',
      title: 'VP of Product',
      department: 'Product',
      bio: 'Product strategist with experience at Amazon and Netflix. Expert in user experience and product-market fit.',
      image: '/images/team/lisa-park.jpg',
      linkedin: 'https://linkedin.com/in/lisa-park',
      twitter: 'https://twitter.com/lisapark',
      expertise: ['Product Strategy', 'UX Design', 'Market Research']
    },
    {
      name: 'James Wilson',
      title: 'VP of Sales',
      department: 'Sales',
      bio: 'Sales leader with proven track record in B2B technology sales. Expert in enterprise sales and customer success.',
      image: '/images/team/james-wilson.jpg',
      linkedin: 'https://linkedin.com/in/james-wilson',
      expertise: ['Enterprise Sales', 'Customer Success', 'Business Development']
    },
    {
      name: 'Dr. Rachel Green',
      title: 'VP of Research',
      department: 'Research',
      bio: 'Leading our R&D efforts with focus on quantum computing and emerging technologies.',
      image: '/images/team/rachel-green.jpg',
      linkedin: 'https://linkedin.com/in/rachel-green',
      expertise: ['Quantum Computing', 'Emerging Tech', 'Academic Research']
    }
  ];

  const teamStats = [
    { number: '150+', label: 'Team Members', icon: Users, color: 'text-blue-400' },
    { number: '25+', label: 'Countries', icon: Globe, color: 'text-green-400' },
    { number: '15+', label: 'Years Experience', icon: Award, color: 'text-yellow-400' },
    { number: '50+', label: 'AI Models Deployed', icon: Brain, color: 'text-purple-400' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and emerging technologies.'
    },
    {
      icon: Heart,
      title: 'Human-Centered',
      description: 'Technology should serve humanity, not replace it. We build with people in mind.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Security and privacy are fundamental to everything we build and deploy.'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We strive for excellence in every project, product, and interaction.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Our Team - Zion Tech Group"
        description="Meet the exceptional team behind Zion Tech Group. Our leadership and experts are driving innovation in AI, cloud computing, and emerging technologies."
        keywords="team, leadership, executives, AI experts, technology leaders, Zion Tech Group team"
        canonicalUrl="https://ziontechgroup.com/team"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Meet Our
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Exceptional Team
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Our team of world-class engineers, researchers, and business leaders are united by a common mission: 
            to democratize AI technology and drive innovation across industries.
          </motion.p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the visionary leaders driving Zion Tech Group's mission and strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-blue-400 font-semibold mb-3">{leader.title}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{leader.bio}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {leader.linkedin && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {leader.twitter && (
                    <a
                      href={leader.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Department Leadership
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our department heads bring deep expertise and leadership to drive excellence across all areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departmentHeads.map((head, index) => (
              <motion.div
                key={head.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">
                      {head.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{head.name}</h3>
                    <p className="text-green-400 font-semibold mb-1">{head.title}</p>
                    <p className="text-blue-400 text-sm mb-2">{head.department}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{head.bio}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {head.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {head.linkedin && (
                    <a
                      href={head.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {head.twitter && (
                    <a
                      href={head.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide our decisions, shape our culture, and drive our success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent to join our mission. 
              If you're passionate about AI, technology, and making a difference, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;

</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</SEO>
</div>
</div>
</div>
</div>