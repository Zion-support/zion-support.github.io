import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, TrendingUp, Shield, Lightbulb, Globe, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3

export default function Leadership() {
  const executiveTeam = [
    {
      name: 'Kleber Santos',
      role: 'Chief Executive Officer & Founder',
      bio: 'Kleber founded Zion Tech Group with the vision of democratizing access to advanced AI and quantum technologies. With over 15 years of experience in technology leadership and business innovation, he has led multiple successful ventures and transformational initiatives.',
      achievements: [
        'Founded 3 successful technology companies',
        'Led digital transformation for Fortune 500 companies',
        'Expert in AI strategy and quantum computing applications',
        'Recognized thought leader in emerging technologies'
      ],
      vision: 'To create a future where advanced AI and quantum technologies are accessible to every business, enabling unprecedented innovation and growth.',
      image: '/images/leadership/kleber-santos.jpg'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      bio: 'Dr. Chen leads our technical vision and research initiatives. With a PhD in Computer Science from MIT and over 20 published papers in AI and machine learning, she brings deep technical expertise to our innovation efforts.',
      achievements: [
        'PhD in Computer Science from MIT',
        '20+ published research papers in AI/ML',
        'Former Lead AI Researcher at major tech companies',
        'Expert in neural networks and autonomous systems'
      ],
      vision: 'To advance the state of AI technology while ensuring ethical, responsible, and beneficial applications for society.',
      image: '/images/leadership/sarah-chen.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Operating Officer',
      bio: 'Marcus oversees our global operations and ensures scalable delivery of our services. His expertise in cloud infrastructure and DevOps has been instrumental in building our robust technology platform.',
      achievements: [
        'AWS, Azure, and GCP certified architect',
        'Led infrastructure scaling for 100M+ user platforms',
        '15+ years in cloud and DevOps leadership',
        'Expert in scalable system architecture'
      ],
      vision: 'To build the most reliable and scalable technology infrastructure that enables our clients to focus on innovation.',
      image: '/images/leadership/marcus-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief Security Officer',
      bio: 'Dr. Watson brings extensive cybersecurity expertise from her background in government and enterprise security. She leads our commitment to maintaining the highest security standards across all our solutions.',
      achievements: [
        'Former government cybersecurity specialist',
        'Expert in zero-trust security architecture',
        'Led security for critical infrastructure projects',
        'Certified in multiple security frameworks'
      ],
      vision: 'To establish security as a foundational element that enables innovation rather than constraining it.',
      image: '/images/leadership/emily-watson.jpg'
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
    }
  ];

  const leadershipPrinciples = [
    {
      icon: Target,
      title: 'Strategic Vision',
      description: 'We chart the course for the future of technology, anticipating trends and preparing our clients for tomorrow\'s opportunities.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'People First',
      description: 'Our success is built on the talent, dedication, and well-being of our team members and the success of our clients.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Culture',
      description: 'We foster an environment where breakthrough ideas flourish and where calculated risks lead to revolutionary solutions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Ethical Leadership',
      description: 'We lead with integrity, transparency, and a commitment to using technology for the betterment of society.',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const companyStats = [
    { number: '500+', label: 'Projects Delivered', description: 'Successful implementations' },
    { number: '50+', label: 'Team Members', description: 'Expert professionals' },
    { number: '25+', label: 'Countries', description: 'Global presence' },
    { number: '99%', label: 'Client Satisfaction', description: 'Proven track record' }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to democratize AI technology'
    },
    {
      year: '2020',
      title: 'First AI Products',
      description: 'Launched our flagship AI compliance and automation solutions'
    },
    {
      year: '2022',
      title: 'Quantum Initiative',
      description: 'Began research and development in quantum computing applications'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 25+ countries'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Recognized as a leading AI and quantum technology provider'
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
    }
  ];

  return (
                {/* Profile Image */}
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-cyan-400 text-2xl font-bold">{member.name.charAt(0)}</div>
                </div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index)              => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              We're always looking for exceptional leaders who share our vision and passion for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                View Open Positions
              </button>
              <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Contact Our Team
              </button>
            </div>
          </motion.div>
ursor/website-audit-content-update-and-deployment-8db3
