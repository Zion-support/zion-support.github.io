'use client';';
import React from 'react';';';
import { Users, CheckCircle, Star, Shield, Award, Target, Globe, Brain, Cloud, Code, BarChart, TrendingUp, Phone, Mail, MapPin, Clock, ArrowRight, Zap, Cpu, Database, Lock, Smartphone, Settings, Calendar, FileText, MessageSquare, Star as StarIcon, Award as AwardIcon, Shield as ShieldIcon, Users as UsersIcon } from 'lucide-react';';'
;
const AboutPage: React.FC = () => {;
const teamMembers = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Kleber Santos','
      role: 'CEO & Founder','
      image: '/images/team/kleber-santos.jpg','
      bio: 'Visionary leader with 15+ years in AI and enterprise solutions','
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation']'
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Dr. Sarah Chen','
      role: 'Chief Technology Officer','
      image: '/images/team/sarah-chen.jpg','
      bio: 'AI research pioneer with expertise in machine learning and quantum computing','
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development']'
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Michael Rodriguez','
      role: 'Head of Engineering','
      image: '/images/team/michael-rodriguez.jpg','
      bio: 'Full-stack architect specializing in scalable AI systems','
      expertise: ['System Architecture', 'Cloud Infrastructure', 'DevOps']'
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Dr. Emily Watson','
      role: 'Head of AI Research','
      image: '/images/team/emily-watson.jpg','
      bio: 'Leading researcher in natural language processing and computer vision','
      expertise: ['NLP', 'Computer Vision', 'Deep Learning']'
    }
  ];
const values = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Brain,
      title: 'Innovation First','
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Shield,
      title: 'Security & Trust','
      description: 'Enterprise-grade security and compliance are at the core of everything we build.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Users,
      title: 'Client Success','
      description: 'Your success is our success. We measure our achievements by your business outcomes.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Globe,
      title: 'Global Impact','
      description: 'We believe technology should make the world better, more efficient, and more connected.''
    }
  ];
const achievements = [
  // TODO: Add items
]
  // TODO: Add items
]
    { number: '500+', label: 'Successful Projects', icon: Target },'
    { number: '100+', label: 'Enterprise Clients', icon: Users },'
    { number: '300%', label: 'Average ROI', icon: TrendingUp },'
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }'
  ];
const timeline = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      year: '2018','
      title: 'Company Founded','
      description: 'Zion Tech Group was established with a vision to democratize AI for enterprises.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      year: '2019','
      title: 'First AI Platform','
      description: 'Launched our flagship AI automation platform, serving 50+ clients.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      year: '2020','
      title: 'Quantum Computing Division','
      description: 'Established quantum computing research and development capabilities.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      year: '2021','
      title: 'Global Expansion','
      description: 'Expanded operations to serve clients across North America, Europe, and Asia.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      year: '2022','
      title: 'AI Ethics Initiative','
      description: 'Launched comprehensive AI ethics framework and responsible AI practices.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      year: '2023','
      title: 'Breakthrough Technologies','
      description: 'Introduced cutting-edge solutions in autonomous systems and edge computing.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      year: '2024','
      title: 'Industry Recognition','
      description: 'Awarded "AI Innovation Leader"Best AI Solutions Provider" by Gartner.''"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      {/* Hero Section */}
      <section className="
<div className="max-w-7 xl mx-auto text-center"text-5 xl md:text-6 xl font-bold text-white mb-6"
            About <span className="
          <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
<div className="
<Users className="h-12 w-12 text-cyan-400 mx-auto mb-4"text-xl font-semibold text-white mb-2"
            <p className="
          <div className="text-center"h-12 w-12 text-cyan-400 mx-auto mb-4"
<h3 className="
            <p className="text-gray-300"text-center"
<Brain className="
<h3 className="text-xl font-semibold text-white mb-2"text-gray-300"
          <div className="
<Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4"text-xl font-semibold text-white mb-2"
            <p className="
        {/* Stats Section */}
        <section className="py-16 bg-white rounded-xl mb-16"max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"
<div className="
              {stats.map((stat, index) => (
  // TODO: Add parameters
)
                <div key={index} className="text-center"text-3 xl md:text-4 xl font-bold text-blue-600 mb-2"
                    {stat.number}
                  <div className="
                    {stat.label}
              ))}
        {/* Mission Section */}
        <section className="py-20 bg-gray-50 rounded-xl mb-16"max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8"
<div className="
<div>
<h2 className="text-3 xl md:text-4 xl font-bold text-gray-900 mb-6"text-lg text-gray-600 mb-6"
                  To democratize access to advanced AI technology and empower businesses of all sizes
                  to achieve their full potential through innovative digital solutions.
                <p className="
                  We believe that every business deserves access to cutting-edge technology that can
                  transform their operations, improve efficiency, and drive growth.
                <$2 />
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors"bg-white rounded-xl shadow-lg p-8"
<h3 className="
                <p className="text-gray-600"py-20 bg-white rounded-xl mb-16"
<div className="
<div className="text-center mb-16"text-3 xl md:text-4 xl font-bold text-gray-900 mb-4"
                Our Values

              <p className="
                The principles that guide everything we do,

            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"text-center"
<div className="
<value.icon className="w-8 h-8 text-white"text-xl font-bold text-gray-900 mb-3"
                    {value.title}
                  <p className="
                    {value.description}
              ))}
        {/* Team Section */}
        <section className="py-20 bg-gray-50 rounded-xl mb-16"max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8"
<div className="
<h2 className="text-3 xl md:text-4 xl font-bold text-gray-900 mb-4"text-xl text-gray-600"
                The experts behind our innovative solutions,

            </div>
<div className="
              {team.map((member, index) => (
  // TODO: Add parameters
)
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden"h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center"
<div className="
<Users className="w-16 h-16 text-gray-600"p-6"
<h3 className="
                      {member.name}
                    <p className="text-blue-600 font-semibold mb-3"text-gray-600"
                      {member.bio}
              ))}
        {/* CTA Section */}
        <section className="
<div className="max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8 text-center"text-3 xl md:text-4 xl font-bold text-white mb-4"
              Ready to Work With Us?
            <p className="
              Let's discuss how we can help transform your business with our AI-powered solutions.'
            <div className="flex flex-col sm:flex-row gap-4 justify-center"/contact""bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                Start a Project

              <$2 />
                to=""
                className="
                Join Our Team,

            </div></div>
</div></section>
      {/* Stats Section */}
      <section className="py-16 bg-white"max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"
<div className="
            {stats.map((stat, index) => (
  // TODO: Add parameters
)
              <div key={index} className="text-center"text-3 xl md:text-4 xl font-bold text-blue-600 mb-2"
                  {stat.number}
                <div className="
                  {stat.label}
                </div>
<section className="relative py-20 lg: py-32 overflow-hidden"absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"
<div className="
<div className="max-w-4 xl mx-auto text-center"text-4 xl lg:text-6 xl font-bold text-white mb-6 cyber-text neon-pulse"
              About Zion Tech Group,

            <p className="
              Leading the future of AI-powered enterprise solutions with cutting-edge technology,
              innovative thinking, and unwavering commitment to client success.
            <div className="flex flex-wrap justify-center gap-4"flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"
<Award className="
<span className="text-white font-medium"flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"
<Shield className="
<span className="text-white font-medium"flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"
<Globe className="
<span className="text-white font-medium"py-20"
<div className="
<div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center"text-3 xl lg:text-4 xl font-bold text-white mb-6"
                Our Mission,

              <p className="
                To democratize artificial intelligence and cutting-edge technology for enterprises worldwide,
                enabling them to achieve unprecedented levels of efficiency, innovation, and growth.
              <div className="space-y-4"flex items-start space-x-3"
<CheckCircle className="
<p className="text-gray-300"flex items-start space-x-3"
<CheckCircle className="
<p className="text-gray-300"flex items-start space-x-3"
<CheckCircle className="
<p className="text-gray-300"text-3 xl lg: text-4 xl font-bold text-white mb-6"
                Our Vision,

              <p className="
                To be the world's leading provider of AI and quantum computing solutions, '
                creating a future where technology seamlessly integrates with human potential
                to solve the world's most complex challenges.'
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-6 rounded-lg"text-xl font-bold text-white mb-3"
                <div className="
<div className="flex items-center space-x-3"w-5 h-5 text-cyan-400"
<span className="
                  <div className="flex items-center space-x-3"w-5 h-5 text-purple-400"
<span className="
                  <div className="flex items-center space-x-3"w-5 h-5 text-green-400"
<span className="
      {/* Values */}
      <section className="py-20 bg-slate-800/50"container mx-auto px-4"
<div className="
<h2 className="text-3 xl lg: text-4 xl font-bold text-white mb-4"text-lg text-gray-300 max-w-3 xl mx-auto"
              The principles that guide everything we do and shape our culture,

          </div>
<div className="
            {values.map((value, index) => (
  // TODO: Add parameters
)
              <div key={index} className="text-center group"w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
<value.icon className="
<h3 className="text-xl font-bold text-white mb-3"text-gray-300 text-sm leading-relaxed"
            ))}
      {/* Team */}
      <section className="
<div className="container mx-auto px-4"text-center mb-16"
<h2 className="
              Meet Our Team,

            <p className="text-lg text-gray-300 max-w-3 xl mx-auto"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            {teamMembers.map((member, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"text-2 xl font-bold text-white"
                    {member.name.split(' ').map(n => n[0]).join(')}''
                <h3 className="
                <p className="text-cyan-400 font-medium mb-3"text-gray-300 text-sm mb-4"
                <div className="
                  {member.expertise.map((skill, skillIndex) => (
  // TODO: Add parameters
)
                    <span key={skillIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded"py-20 bg-slate-800/50"
<div className="
<div className="text-center mb-16"text-3 xl lg: text-4 xl font-bold text-white mb-4"
              Our Achievements

            <p className="
              Numbers that speak to our impact and success,

          </div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8"text-center"
<div className="
<achievement.icon className="w-10 h-10 text-white"text-3 xl lg:text-4 xl font-bold text-white mb-2"
                  {achievement.number}
                <div className="
                  {achievement.label}
            ))}
      {/* Timeline */}
      <section className="py-20"container mx-auto px-4"
<div className="
<h2 className="text-3 xl lg: text-4 xl font-bold text-white mb-4"text-lg text-gray-300 max-w-3 xl mx-auto"
              Key milestones in our company's growth and innovation,'

          </div>
<div className="
<div className="relative"absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"
              {timeline.map((item, index) => (
  // TODO: Add parameters
)
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>'
<div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>'
<div className="
<div className="text-cyan-400 font-bold text-lg mb-2"text-xl font-bold text-white mb-2"
                      <p className="
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"w-1/2"
              ))}
      {/* CTA Section */}
      <section className="
<div className="container mx-auto px-4 text-center"text-3 xl lg: text-4 xl font-bold text-white mb-6"
            Ready to Transform Your Business?
          <p className="
            Join hundreds of enterprises that have already transformed their operations with our AI solutions.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"/contact""bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
<MessageSquare className="
              Get Started Today

            <$2 />
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"w-5 h-5 mr-2"
              Free Consultation

          </div></div>
</section></div>
  );
};
;
export default AboutPage;

}))