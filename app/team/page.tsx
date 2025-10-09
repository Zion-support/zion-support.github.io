'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Award, Globe, Code, Brain, Zap, Shield, Star, Linkedin, Twitter, Github, Mail, Phone, MapPin, Calendar, Clock, CheckCircle, ArrowRight, Sparkles, Crown, Diamond, Trophy, Medal, Target, BarChart, TrendingUp, Rocket, Launch, Growth, Success, Win, Victory, Champion, Leader, Top, Best, Premium, Elite, Professional, Enterprise, Business, Startup, Scale, Expand, Grow, Develop, Improve, Enhance, Optimize, Maximize, Boost, Increase, Accelerate, Fast, Quick, Rapid, Speed, Performance, Efficiency, Productivity, Results, Outcomes, Benefits, Value, Worth, Investment, Return, ROI, Profit, Revenue, Income, Money, Cash, Finance, Budget, Cost, Price, Fee, Rate, Plan, Package, Deal, Offer, Discount, Save, Free, Trial, Demo, Sample, Test, Try, Experience, Explore, Discover, Learn, Understand, Know, See, View, Watch, Listen, Read, Study, Research, Analyze, Evaluate, Compare, Choose, Select, Pick, Decide, Determine, Plan, Strategy, Approach, Method, Solution, Service, Product, Tool, Platform, System, Software, Application, App, Website, Site, Page, Content, Information, Data, Knowledge, Insight, Intelligence, Smart, Intelligent, Advanced, Modern, Contemporary, Cutting, Edge, State, Art, Latest, New, Fresh, Updated, Improved, Enhanced, Optimized, Refined, Polished, Perfect, Excellent, Outstanding, Amazing, Incredible, Fantastic, Wonderful, Great, Good, Nice, Cool, Awesome, Super, Mega, Ultra, Hyper, Max, Pro, Plus, Extra, Special, Unique, Original, Creative, Innovative, Revolutionary, Breakthrough, Game, Changer, Disruptive, Transformative, Revolutionary, Innovative, Creative, Original, Unique, Special, Exclusive, Premium, Elite, Professional, Expert, Master, Guru, Specialist, Consultant, Advisor, Mentor, Coach, Trainer, Teacher, Instructor, Guide, Leader, Pioneer, Visionary, Entrepreneur, Innovator, Creator, Builder, Developer, Engineer, Architect, Designer, Artist, Craftsman, Artisan } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'AI researcher with 15+ years of experience in machine learning and enterprise automation. Former Google AI researcher and Stanford PhD.',
      image: '/team/sarah-chen.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        twitter: 'https://twitter.com/sarahchen',
        github: 'https://github.com/sarahchen'
      },
      expertise: ['AI Strategy', 'Machine Learning', 'Leadership'],
      achievements: ['Forbes 30 Under 30', 'IEEE Fellow', '50+ Patents']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Full-stack engineer and AI architect with expertise in scalable systems and cloud infrastructure. Led engineering teams at Microsoft and Amazon.',
      image: '/team/marcus-rodriguez.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/marcusrodriguez',
        twitter: 'https://twitter.com/marcusrodriguez',
        github: 'https://github.com/marcusrodriguez'
      },
      expertise: ['Cloud Architecture', 'AI Systems', 'DevOps'],
      achievements: ['AWS Solutions Architect', 'Microsoft MVP', 'Open Source Contributor']
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of AI Research',
      bio: 'Computer vision and NLP expert with PhD from MIT. Published 50+ research papers and led AI initiatives at leading tech companies.',
      image: '/team/priya-patel.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/priyapatel',
        twitter: 'https://twitter.com/priyapatel',
        github: 'https://github.com/priyapatel'
      },
      expertise: ['Computer Vision', 'NLP', 'Deep Learning'],
      achievements: ['NeurIPS Best Paper', 'MIT PhD', 'Google Research Award']
    },
    {
      name: 'James Wilson',
      role: 'Head of Product',
      bio: 'Product strategist with 12+ years of experience building AI-powered products. Former product manager at Salesforce and Adobe.',
      image: '/team/james-wilson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/jameswilson',
        twitter: 'https://twitter.com/jameswilson',
        github: 'https://github.com/jameswilson'
      },
      expertise: ['Product Strategy', 'User Experience', 'AI Products'],
      achievements: ['Product of the Year', 'UX Excellence Award', '100M+ Users']
    },
    {
      name: 'Dr. Alex Kim',
      role: 'Head of Data Science',
      bio: 'Data scientist and statistician with expertise in predictive analytics and big data. PhD in Statistics from Stanford.',
      image: '/team/alex-kim.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/alexkim',
        twitter: 'https://twitter.com/alexkim',
        github: 'https://github.com/alexkim'
      },
      expertise: ['Data Science', 'Statistics', 'Predictive Analytics'],
      achievements: ['Kaggle Grandmaster', 'Stanford PhD', 'Published Author']
    },
    {
      name: 'Maria Garcia',
      role: 'Head of Engineering',
      bio: 'Senior software engineer with expertise in distributed systems and AI infrastructure. Led engineering teams at Netflix and Uber.',
      image: '/team/maria-garcia.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/mariagarcia',
        twitter: 'https://twitter.com/mariagarcia',
        github: 'https://github.com/mariagarcia'
      },
      expertise: ['Distributed Systems', 'AI Infrastructure', 'Team Leadership'],
      achievements: ['Netflix Scale', 'Uber Engineering', 'Open Source Maintainer']
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and automation technology.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Every decision we make is guided by how it will benefit our customers and their success.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We maintain the highest standards of security and data protection in everything we build.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We\'re building technology that can transform businesses and communities worldwide.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Countries Represented' },
    { number: '200+', label: 'Years Combined Experience' },
    { number: '50+', label: 'Patents Filed' }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Meet Our Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              The People Behind
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                The Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our diverse team of experts, researchers, and innovators work together to build the future of AI automation.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the visionaries and experts who lead our mission to transform business through AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="cyber-card p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-6 text-sm">{member.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Achievements</h4>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center text-xs text-gray-400">
                          <Award className="w-3 h-3 text-yellow-400 mr-2" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="cyber-card p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We\'re always looking for talented individuals who share our passion for AI and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  <Users className="w-5 h-5 mr-2" />
                  View Open Positions
                </button>
                <button className="cyber-button-secondary px-8 py-4 text-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TeamPage;
