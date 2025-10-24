<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';
import React from "react";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export default function TeamZionTechGroup() {

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Team - Zion Tech Group</title>
        <meta name="description" content="Team solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Team</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive team solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Mail, Linkedin, Github } from 'lucide-react'
=======
        linkedin: 'https://linkedin.com/in/klebersantos',
        twitter: 'https://twitter.com/klebersantos',
        email: 'kleber@ziontechgroup.com'},
      specialties: ['Strategic Planning', 'AI Implementation', 'Team Leadership'],
      certifications: ['AWS Solutions Architect', 'Google Cloud Professional', 'Microsoft Azure Expert']
    },
    {
      id: 2;
      name: 'Dr. Sarah Chen'
      role: 'CTO'
      title: 'Chief Technology Officer',
      image: '/images/team/sarah-chen.webp',
      bio: 'AI research pioneer with expertise in machine learning and quantum computing. Published 50+ papers in top-tier journals and holds 15 patents in AI technology.',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development', 'Algorithm Design'],
      experience: '12+ years',
      education: 'PhD Computer Science, Stanford',
      achievements: ['IEEE Fellow', 'Nature AI Research Award', 'Turing Award Nominee'],
      social: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        twitter: 'https://twitter.com/sarahchen',
        github: 'https://github.com/sarahchen'},
      specialties: ['Deep Learning', 'Quantum Algorithms', 'Research Strategy'],
      certifications: ['Deep Learning Specialization', 'Quantum Computing Certificate', 'AI Ethics Certification']
    },
    {
      id: 3;
      name: 'Michael Rodriguez'
      role: 'Head of Engineering',
      title: 'VP of Engineering',
      image: '/images/team/michael-rodriguez.webp',
      bio: 'Full-stack architect specializing in scalable AI systems. Led engineering teams at Google and Microsoft, building systems that serve millions of users.',
      expertise: ['System Architecture', 'Cloud Infrastructure', 'DevOps', 'Microservices'],
      experience: '10+ years',
      education: 'BS Computer Engineering, UC Berkeley',
      achievements: ['Google Engineering Excellence Award', 'Microsoft MVP', 'Open Source Contributor'],
      social: {
        linkedin: 'https://linkedin.com/in/michaelrodriguez',
        twitter: 'https://twitter.com/michaelrod',
        github: 'https://github.com/michaelrod'},
      specialties: ['Scalable Systems', 'Cloud Architecture', 'Team Management'],
      certifications: ['AWS Solutions Architect', 'Kubernetes Administrator', 'Docker Certified']
    },
    {
      id: 4;
      name: 'Dr. Emily Watson'
      role: 'Head of AI Research'
      title: 'VP of AI Research',
      image: '/images/team/emily-watson.webp',
      bio: 'Leading researcher in natural language processing and computer vision. Former research scientist at OpenAI and Google DeepMind.',
      expertise: ['NLP', 'Computer Vision', 'Deep Learning', 'Neural Networks'],
      experience: '8+ years',
      education: 'PhD Machine Learning, Carnegie Mellon',
      achievements: ['ACL Outstanding Paper Award', 'CVPR Best Paper', 'NeurIPS Spotlight'],
      social: {
        linkedin: 'https://linkedin.com/in/emilywatson',
        twitter: 'https://twitter.com/emilywatson',
        github: 'https://github.com/emilywatson'},
      specialties: ['Language Models', 'Computer Vision', 'Research Innovation'],
      certifications: ['NLP Specialization', 'Computer Vision Certificate', 'Deep Learning Nanodegree']
    },
    {
      id: 5;
      name: 'David Kim'
      role: 'Head of Product'
      title: 'VP of Product',
      image: '/images/team/david-kim.webp',
      bio: 'Product strategist with 12+ years experience building AI-powered products. Former product manager at Salesforce and Adobe.',
      expertise: ['Product Strategy', 'User Experience', 'AI Product Design', 'Market Analysis'],
      experience: '12+ years',
      education: 'MBA, Wharton School',
      achievements: ['Product of the Year Award', 'UX Excellence Award', 'Forbes Product Leader'],
      social: {
        linkedin: 'https://linkedin.com/in/davidkim',
        twitter: 'https://twitter.com/davidkim',
        email: 'david@ziontechgroup.com'},
      specialties: ['AI Product Strategy', 'User Research', 'Go-to-Market'],
      certifications: ['Product Management Certificate', 'UX Design Certificate', 'Agile Certified']
    },
    {
      id: 6;
      name: 'Lisa Wang'
      role: 'Head of Data Science'
      title: 'VP of Data Science',
      image: '/images/team/lisa-wang.webp',
      bio: 'Data science leader with expertise in big data analytics and machine learning. Former data scientist at Netflix and Spotify.',
      expertise: ['Data Science', 'Big Data', 'Machine Learning', 'Statistics'],
      experience: '9+ years',
      education: 'PhD Statistics, Harvard',
      achievements: ['Data Science Excellence Award', 'Kaggle Grandmaster', 'TEDx Speaker'],
      social: {
        linkedin: 'https://linkedin.com/in/lisawang',
        twitter: 'https://twitter.com/lisawang',
        github: 'https://github.com/lisawang'},
      specialties: ['Predictive Analytics', 'Data Engineering', 'MLOps'],
      certifications: ['Data Science Professional', 'Big Data Certificate', 'Machine Learning Engineer']
    }
  ];

  const departments = [
    {
      name: 'Engineering'
      icon: Code;
      description: 'Building the future with cutting-edge technology',
      members: 45;
      specialties: ['Full-Stack Development', 'AI/ML Engineering', 'DevOps', 'Cloud Architecture']
    },
    {
      name: 'AI Research'
      icon: Brain;
      description: 'Pioneering the next generation of AI technology',
      members: 25;
      specialties: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
    },
    {
      name: 'Data Science'
      icon: BarChart;
      description: 'Transforming data into actionable insights',
      members: 20;
      specialties: ['Data Analytics', 'Predictive Modeling', 'Big Data', 'Statistics']
    },
    {
      name: 'Product'
      icon: Target;
      description: 'Creating products that users love',
      members: 15;
      specialties: ['Product Strategy', 'UX Design', 'User Research', 'Product Management']
    },
    {
      name: 'Operations'
      icon: Settings;
      description: 'Ensuring smooth operations and growth',
      members: 12;
      specialties: ['Project Management', 'Quality Assurance', 'Customer Success', 'Operations']
    },
    {
      name: 'Security'
      icon: Shield;
      description: 'Protecting our clients and their data',
      members: 8;
      specialties: ['Cybersecurity', 'Compliance', 'Risk Management', 'Security Architecture']
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology',
      icon: Sparkles;
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by your business outcomes',
      icon: Target;
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex problems',
      icon: Users;
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to client relationships',
      icon: Award;
    }
  ];

  const stats = [
    { number: '100+', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Patents Filed', icon: Brain },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden"></section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse"></h1>
              Meet Our Team;
            </h1>,
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">,
              World-class experts in AI, quantum computing, and enterprise technology;
              working together to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">100+ Experts</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">50+ Patents</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
                <Star className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">99% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */})
      <section className="py-20">)
        <div className="container mx-auto px-4">)
          <div className="grid grid-cols-2 lg: grid-cols-4 gap-8">),
            {stats.map((stat, index) => (
              <div key={index} className="text-center group"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover: scale-110 transition-transform duration-300">,
                  <stat.icon className="w-10 h-10 text-white" />,
                </div>,
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div><div className="text-gray-300 font-medium">{stat.label}</div>
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Linkedin, Mail, MapPin, Calendar, GraduationCap, Briefcase, Star, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/images/team/sarah.jpg',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      github: 'https://github.com/sarahjohnson'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Technical architect specializing in scalable AI solutions and cloud infrastructure.',
      image: '/images/team/michael.jpg',
      linkedin: 'https://linkedin.com/in/michaelchen',
      github: 'https://github.com/michaelchen'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Research',
      bio: 'AI researcher with expertise in machine learning and natural language processing.',
      image: '/images/team/emily.jpg',
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      github: 'https://github.com/emilyrodriguez'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      bio: 'Full-stack developer passionate about creating innovative web applications.',
      image: '/images/team/david.jpg',
      linkedin: 'https://linkedin.com/in/davidkim',
      github: 'https://github.com/davidkim'
    },
    {
      name: 'Lisa Wang',
      role: 'UX/UI Designer',
      bio: 'Creative designer focused on user experience and interface design.',
      image: '/images/team/lisa.jpg',
      linkedin: 'https://linkedin.com/in/lisawang',
      github: 'https://github.com/lisawang'
    },
    {
      name: 'James Wilson',
      role: 'DevOps Engineer',
      bio: 'Infrastructure specialist ensuring reliable and scalable deployments.',
      image: '/images/team/james.jpg',
      linkedin: 'https://linkedin.com/in/jameswilson',
      github: 'https://github.com/jameswilson'
    }
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.',
      icon: Brain
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.',
      icon: Star
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication.',
      icon: Users
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our work.',
      icon: Shield
    }
  ]

  const stats = [
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Years Experience', value: '10+', icon: Clock },
    { label: 'Projects Delivered', value: '500+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99%', icon: Star }
  ]

=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const OurTeamPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
  return (
<<<<<<< HEAD
    <React.Fragment>
      <Helmet>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        <title>Our Team - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, development, and design are dedicated to delivering exceptional solutions." />
        <meta name="keywords" content="team, AI experts, developers, designers, Zion Tech Group, leadership" />
      </Helmet>
      
      <Navigation />
      
<<<<<<< HEAD
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Our Team
=======
import React from 'react';

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function Team() {return (
    <title>Team - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">Team</h1>
            <p className="text-lg text-gray-300 mb-8">Professional team services coming soon.</p>

              Contact Us

      <  />
  );}

    <><  />
      <Helmet></Helmet>
        <title>Team - Zion Tech Group</title>
        <meta name="description" content="Team services by Zion Tech Group. Professional AI and IT solutions."   /></meta>
        <meta name="keywords" content="team, AI solutions, IT services"   /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              <span className="w-5h-5ml-2"   />Team;
              </span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Meet the talented individuals who make Zion Tech Group a leader in AI and IT solutions. 
              Our diverse team brings together expertise, passion, and innovation.
=======
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Expert Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
            Our diverse team of AI researchers, IT specialists, and business experts work together to deliver cutting-edge solutions that transform businesses worldwide.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center"></div>
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2"></div>
                  {achievement.number}
                </div>
                <div className="text-xl font-semibold text-white mb-2"></div>
                  {achievement.label}
                </div>
                <div className="text-gray-400 text-sm"></div>
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
<<<<<<< HEAD
        </div>
      </section>

            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4"></h2>
              Leadership Team;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              Meet the visionary leaders driving innovation and growth at Zion Tech Group;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive team solutions.
              Contact us to learn more about our services.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
<<<<<<< HEAD
              ))}
            </div>
=======
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Leadership Team</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Meet the visionary leaders driving innovation and growth at Zion Tech Group</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{teamMembers.map((member) => (</div>
              <div key={member.id} className="bg-slate-800/50 rounded-lg p-8 text-center group hover:bg-slate-700/50 transition-all duration-300"></div>
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-4xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span><h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{member.role}</p><p className="text-gray-300 text-sm mb-4">{member.bio}</p>

                <div className="space-y-2 mb-6"></div>
                  <div className="text-sm text-gray-400"></div>
                    <strong>Experience:</strong> {member.experience}
                  </div>
                  <div className="text-sm text-gray-400"></div>
                    <strong>Education:</strong> {member.education}
                  </div>
                </div>

                <div className="mb-6"></div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Expertise:<div className="flex flex-wrap justify-center gap-2">{member.expertise.slice(0, 3).map((skill, index) => (</div><span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">{skill}</span>
                      </span>
                    ))}
                  <div className="flex justify-center space-x-4">{member.social.linkedin && (</div>
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-cyan-400 transition-colors"></a>
                      <Linkedin className="w-5 h-5" /></Linkedi>
                    </a>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Expertise: </h4>,
                  <div className="flex flex-wrap justify-center gap-2">,
                    {member.expertise.slice(0, 3).map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded"></span>
      {/* Team Members */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
              Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our leadership team combines decades of experience in AI, technology, and business to drive innovation and deliver exceptional results.
            </p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
<<<<<<< HEAD
        </section>

<<<<<<< HEAD
        {/* Team Members */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"></div>
                <div className="text-center mb-6"></div>
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold"></div>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                </div>

                <div className="mb-6"></div>
                  <h4 className="text-white font-semibold mb-3 flex items-center"></h4>
                    <Star className="w-4 h-4 mr-2 text-yellow-400" />
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2"></div>
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-xs rounded-full"></span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-400 hover: text-cyan-400 transition-colors">,
                      <Twitter className="w-5 h-5" />,
                    </a>)}
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-400 hover: text-cyan-400 transition-colors">,
                      <Github className="w-5 h-5" />,
                    </a>)}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover: text-cyan-400 transition-colors">,
                      <Mail className="w-5 h-5" />,
                    </a>)}
                <div className="flex space-x-4"></div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors text-center flex items-center justify-center"
                  ></a>
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all text-center flex items-center justify-center"
                  ></a>
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Departments</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Organized teams working together to deliver exceptional results</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{departments.map((dept, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover:bg-slate-700/50 transition-all duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <dept.icon className="w-8 h-8 text-white" />
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4"></h2>
              Our Departments;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              Organized teams working together to deliver exceptional results;
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {departments.map((dept, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover: bg-slate-700/50 transition-all duration-300">,
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">,
                  <dept.icon className="w-8 h-8 text-white" />,
                </div>,
                <h3 className="text-xl font-bold text-white mb-2">{dept.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{dept.description}</p><div className="text-cyan-400 font-medium mb-4">{dept.members} Members</div>
                <div className="space-y-1">{dept.specialties.map((specialty, specIndex) => (</div><div key={specIndex} className="text-xs text-gray-400">{specialty}</div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors group"
                    >
                      <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </a>
                    <a
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@ziontechgroup.com`}
                      className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors group"
                    >
                      <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing team. 
              If you're passionate about AI and technology, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </section>
      </main>
      
=======
      {/* Values */}
      <section className="py-20 bg-slate-800/50"></section>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4"></h2>
              Our Values;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              The principles that guide everything we do and shape our culture;
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {values.map((value, index) => (
              <div key={index} className="text-center group"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover: scale-110 transition-transform duration-300">,
                  <value.icon className="w-8 h-8 text-white" />,
                </div>,
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Values</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">The principles that guide everything we do and shape our culture</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{values.map((value, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <value.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3><p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
=======
import React  from 'react';
const TeamPage: React.FC = () => {
  return (
      <Helmet>
        <title>Team - Zion Tech Group</title>
        <meta name="description" content="Team services by Zion Tech Group. Professional AI and IT solutions." / / />
        <meta name="keywords" content="team, AI solutions, IT services" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional team services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive team solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600transition-allduration-300">Contact Us
            </button>
          </div>
      </div>
        </div>
      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700"></section>
        <div className="container mx-auto px-4 text-center"></section>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Join Our Team</h2><p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">We're always looking for talented individuals who share our passion for AI and technology.</p>
            Join us in building the future.</p>
          <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6"></h2>
            Join Our Team;
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"></p>
            We're always looking for talented individuals who share our passion for AI and technology.
            Join us in building the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              to="/careers"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            ></Link>
              <Briefcase className="w-5 h-5 mr-2" />
              View Open Positions;
            </Link>
            <Link;
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            ></Link>
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Us;
            </Link>
          </div>
        </div>
      </section>,
    </div>);
}
      {/* Join Our Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p>
            We're always looking for talented individuals who share our passion for innovation and excellence. 
            Join us in shaping the future of AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="/careers"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            ></a>
              View Open Positions
            </a>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            ></a>
              Send Resume
            </a>
          </div>
        </div>
<<<<<<< HEAD
      </section>

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      <Footer />
    </>
  )
}

export default TeamPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
        <meta name="description" content="Meet the talented team behind Zion Tech Group." />
        <meta name="keywords" content="team, about us, employees, company" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Meet the talented team behind Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
      <Footer />
    </>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
      </div>
      </div>

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  );
};

<<<<<<< HEAD
export default OurTeamPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
export default TeamPage;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
      </div>
    <  />
  );
};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Team - Zion Tech Group</title>
        <meta name="description" content="Professional team services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Team</h1>
          <p className="text-lg text-gray-300 mb-8">Professional team services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
