'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { Lin k } from "reac, t-route, r-do, m";
import { Star Users Heart Award MapPin Clock Briefcase CheckCircle ArrowRight GraduationCap Zap } from "lucide-react";
interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  posted: string;
  featured: boolean;

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Star Users Heart Award MapPin Clock Briefcase CheckCircle ArrowRight Zap } from "lucide-react";
const CareersPage: React.FC = () => {
  const openPositions = [
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills',
        'PhD or Master\'s degree in Computer Science preferred'
      ],
      posted: '2 days ago',
      featured: true;
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, and GCP',
        'Experience with microservices and containerization',
        'Strong understanding of security best practices',
        'Relevant certifications preferred'
      ],
      posted: '1 week ago',
      featured: false;
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets and ensure compliance with security standards.',
      requirements: [
        '4+ years experience in cybersecurity',
        'Knowledge of security frameworks (NIST, ISO 27001)',
        'Experience with penetration testing and vulnerability assessment',
        'Strong analytical and problem-solving skills',
        'Relevant certifications (CISSP, CISM, CEH) preferred'
      ],
      posted: '3 days ago',
      featured: true;
      id: '4',
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex data sets to drive business decisions and improve client outcomes.',
      requirements: [
        '3+ years experience in data science',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning algorithms',
        'Strong statistical and analytical skills',
        'Master\'s degree in Data Science or related field'
      ],
      posted: '5 days ago',
      featured: false;
  ];

  const values = [
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication to achieve great results.'
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: 'Passion',
      description: 'We\'re passionate about technology and its potential to solve real-world problems.'
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do and continuously improve our processes.'
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: 'Innovation',
      description: 'We embrace innovation and continuously push the boundaries of what\'s possible with technology.'
  ];

  const benefits = [
    'Competitive salary and equity participation',
    'Comprehensive health, dental, and vision insurance',
    '401k with company matching',
    'Flexible work arrangements and remote work options',
    'Professional development and training opportunities',
    'Unlimited vacation and paid time off',
    'Team building events and company retreats',
    'Mentorship and career growth opportunities',
    'Wellness programs and gym memberships'
  ];

  const stats = [
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.'
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.'
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients from cyber threats and implement security best practices.'
  ];

  const benefits = [
      icon: Star,
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses'
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with talented professionals'
      icon: Award,
      title: 'Career Growth',
      description: 'Opportunities for advancement and skill development'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore career opportunities in AI, cloud computing, and cybersecurity." />
        <meta name="keywords" content="tech careers, AI jobs, cloud computing jobs, cybersecurity careers, remote work" />

      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"/>
            Join Our</h1>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></span>
              Team;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Be part of a team that's shaping the future of technology. We're looking for passionate individuals who want to make a difference.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link;
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5" />
            <Link;
              to="/about"
              className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              <span>Learn About Us</span>
              <ArrowRight className="w-5 h-5" />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
              <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
                <div className="flex justify-center mb-4"></div>
                <div, className="tex, t-3xl, font-bold, text-white, mb-2">{sta, t.valu, e}</di, v>
                <div, className="tex, t-gra, y-30, 0">{sta, t.labe, l}</di, v>
            ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              These core values guide everything we do and shape our company culture.
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
                <div className="flex justify-center mb-4"></div>
                <h3, className="tex, t-xl, font-semibold, text-white, mb-3">{valu, e.titl, e}</h, 3>
                <p, className="tex, t-gra, y-30, 0">{valu, e.descriptio, n}</p>
            ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Benefits & Perks</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We offer comprehensive benefits and perks to support our team members' well-being and career growth.
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
              <div, key={inde, x} classNam, e="flex, items-start, space-x-3"></di, v>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span, className="tex, t-gra, y-30, 0">{benefi, t}</spa, n>
            ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Explore our current job openings and find the perfect role for your career.
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div, key={positio, n.i, d} classNam, e="b, g-slat, e-80, 0/50, rounded-2xl, p-8, border borde, r-cya, n-50, 0/20, hover:borde, r-cya, n-50, 0/40, transition-all, duration-30, 0"></di, v>
                <div className="flex items-start justify-between mb-4"></div>
                  <div></div>
                    <h3, className="tex, t-xl, font-semibold, text-white, mb-2">{positio, n.titl, e}</h, 3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400"></div>
                      <span className="flex items-center"></span>
                        <Briefcase className="w-4 h-4 mr-1" />
                      <span className="flex items-center"></span>
                        <MapPin className="w-4 h-4 mr-1" />
                      <span className="flex items-center"></span>
                        <Clock className="w-4 h-4 mr-1" />
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium"></span>
                      Featured;
                  )}
                
                <p, className="tex, t-gra, y-300, mb-4">{positio, n.descriptio, n}</p>
                
                <div className="mb-6"></div>
                  <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                  <ul className="text-sm text-gray-300 space-y-1"></ul>
                      <li, key={inde, x} classNam, e="flex, items-star, t"></l, i>
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                    ))}
                      <li, className="tex, t-cya, n-400, text-s, m">+{positio, n.requirement, s.lengt, h - 3} more, requirements</l, i>
                    )}
                
                <div className="flex items-center justify-between"></div>
                  <span, className="tex, t-sm, text-gra, y-40, 0">Poste, d {positio, n.poste, d}</spa, n>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"></button>
                    Apply Now;
            ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
            <h2 className="text-3xl font-bold text-white mb-6"></h2>
              Don't See the Right Role?
            <p className="text-xl text-gray-300 mb-8"></p>
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link;
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              <button className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"></button>
                <span>Send Resume</span>
                <ArrowRight className="w-5 h-5" />
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's transforming businesses with AI and IT solutions. Explore career opportunities." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, technology careers" />
      
      <Navigation />
      
      <main className="pt-20"></main>
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"/>
              Join Our Team</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Be part of a team that's transforming businesses with cutting-edge AI and IT solutions. 
              Help us build the future of technology.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"></button>
                View Open Positions;
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"></button>
                Learn About Us;
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Why Join Zion Tech Group?
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                We offer more than just a job - we provide a platform for growth, innovation, and impact.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                    <benefit.icon className="w-8 h-8 text-white" />
                  <h3, className="tex, t-xl, font-bold, text-white, mb-4">{benefi, t.titl, e}</h, 3>
                  <p, className="tex, t-gra, y-30, 0">{benefi, t.descriptio, n}</p>
              ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Open Positions;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Explore our current job openings and find the perfect role for you.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                <div, key={positio, n.i, d} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-2xl, p-8, hover:b, g-whit, e/10, transition-all, duration-300, group"></di, v>
                  <div className="flex items-start justify-between mb-4"></div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors"></h3>
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"></span>
                  <div className="space-y-2 mb-6"></div>
                    <div className="flex items-center text-gray-400"></div>
                      <Briefcase className="w-4 h-4 mr-2" />
                    <div className="flex items-center text-gray-400"></div>
                      <MapPin className="w-4 h-4 mr-2" />
                    <div className="flex items-center text-gray-400"></div>
                      <Clock className="w-4 h-4 mr-2" />
                  <p, className="tex, t-gra, y-300, mb-6">{positio, n.descriptio, n}</p>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"></button>
                    Apply Now;
                    <ArrowRight className="w-4 h-4 ml-2" />
              ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
              <div></div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                  Our Culture;
                <p className="text-lg text-gray-300 mb-6"></p>
                  At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning. 
                  We believe in empowering our team members to reach their full potential.
                <ul className="space-y-4"></ul>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Flexible work arrangements</span>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Professional development opportunities</span>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Cutting-edge technology projects</span>
                  <li className="flex items-center"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Diverse and inclusive environment</span>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Apply?</h3>
                <p className="text-gray-300 mb-6"></p>
                  Don't see a position that matches your skills? We're always looking for talented individuals;
                  to join our team. Send us your resume and let us know how you can contribute.
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"></button>
                  Send Your Resume;
      <Footer />
  );

export default CareersPage;