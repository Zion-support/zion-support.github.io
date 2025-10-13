'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  StarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      bio: "Visionary leader with over 4 years of experience in AI and IT solutions. Passionate about transforming businesses through technology.",
      image: "/api/placeholder/300/300",
      expertise: ["AI Strategy", "Business Development", "Technology Leadership"],
      icon: CpuChipIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      bio: "Technical visionary with expertise in cloud architecture, AI systems, and scalable software solutions.",
      image: "/api/placeholder/300/300",
      expertise: ["Cloud Architecture", "AI Systems", "Software Engineering"],
      icon: CloudIcon,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Michael Chen",
      role: "Head of Cybersecurity",
      bio: "Cybersecurity expert with extensive experience in threat detection, incident response, and security architecture.",
      image: "/api/placeholder/300/300",
      expertise: ["Cybersecurity", "Threat Detection", "Security Architecture"],
      icon: ShieldCheckIcon,
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of AI Solutions",
      bio: "AI specialist focused on machine learning, natural language processing, and intelligent automation solutions.",
      image: "/api/placeholder/300/300",
      expertise: ["Machine Learning", "NLP", "AI Automation"],
      icon: CpuChipIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "David Thompson",
      role: "Head of Cloud Solutions",
      bio: "Cloud infrastructure expert specializing in migration strategies, optimization, and multi-cloud architectures.",
      image: "/api/placeholder/300/300",
      expertise: ["Cloud Migration", "Infrastructure", "Multi-Cloud"],
      icon: CloudIcon,
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Lisa Wang",
      role: "Head of Data Analytics",
      bio: "Data science leader with expertise in big data analytics, business intelligence, and predictive modeling.",
      image: "/api/placeholder/300/300",
      expertise: ["Data Analytics", "Business Intelligence", "Predictive Modeling"],
      icon: ChartBarIcon,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value.",
      icon: LightBulbIcon,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service and project delivery.",
      icon: StarIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and work closely with our clients to understand their unique challenges and goals.",
      icon: UserGroupIcon,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices, building trust through our actions.",
      icon: ShieldCheckIcon,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the expert team behind Zion Tech Group. Our skilled professionals bring years of experience in AI, IT solutions, cybersecurity, and cloud technologies." />
        <meta name="keywords" content="team, experts, AI specialists, IT professionals, cybersecurity experts, cloud architects, data scientists" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Meet the expert professionals behind Zion Tech Group
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our diverse team of skilled professionals brings together decades of combined experience 
              in AI, IT solutions, cybersecurity, and cloud technologies to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence in technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <div 
                  key={member.name}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <UserGroupIcon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${member.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              We're always looking for talented individuals who share our passion for technology and innovation
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold text-white mb-4">Why Work With Us?</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>Competitive salary and benefits</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>Flexible work arrangements</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>Professional development opportunities</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>Cutting-edge technology projects</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>Collaborative and inclusive culture</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold text-white mb-4">Open Positions</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center text-gray-300">
                    <ArrowRightIcon className="w-5 h-5 text-purple-400 mr-3" />
                    <span>Senior AI Engineer</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRightIcon className="w-5 h-5 text-purple-400 mr-3" />
                    <span>Cloud Solutions Architect</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRightIcon className="w-5 h-5 text-purple-400 mr-3" />
                    <span>Cybersecurity Specialist</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRightIcon className="w-5 h-5 text-purple-400 mr-3" />
                    <span>Full Stack Developer</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <ArrowRightIcon className="w-5 h-5 text-purple-400 mr-3" />
                    <span>Data Scientist</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/careers" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View All Positions
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Ready to work with our expert team? Let's discuss your project
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}