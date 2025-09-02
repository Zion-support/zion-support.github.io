import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Users, 
  Award, 
  Star, 
  Globe, 
  Brain, 
  Shield, 
  Zap,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';

export default function Team() {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years of experience in technology and business transformation. Passionate about leveraging AI and emerging technologies to solve complex business challenges.',
      image: '/team/kleber.jpg',
      expertise: ['Strategic Leadership', 'AI Strategy', 'Business Transformation', 'Technology Innovation'],
      social: {
        linkedin: 'https://linkedin.com/in/kleber-santos',
        email: 'kleber@ziontechgroup.com'
      }
    },
    {
      name: 'AI Engineering Team',
      role: 'AI Specialists',
      bio: 'Expert team of AI engineers, data scientists, and machine learning specialists driving innovation in artificial intelligence solutions.',
      image: '/team/ai-team.jpg',
      expertise: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision'],
      social: {
        github: 'https://github.com/ziontechgroup'
      }
    },
    {
      name: 'DevOps Engineers',
      role: 'Infrastructure Specialists',
      bio: 'Cloud and infrastructure experts ensuring scalable, secure, and reliable solutions for our clients.',
      image: '/team/devops-team.jpg',
      expertise: ['Cloud Architecture', 'Containerization', 'CI/CD', 'Infrastructure as Code'],
      social: {
        github: 'https://github.com/ziontechgroup'
      }
    },
    {
      name: 'Security Team',
      role: 'Cybersecurity Experts',
      bio: 'Security professionals dedicated to protecting your digital assets and ensuring compliance with industry standards.',
      image: '/team/security-team.jpg',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Assessment', 'Security Architecture'],
      social: {
        linkedin: 'https://linkedin.com/company/ziontechgroup'
      }
    },
    {
      name: 'Product Team',
      role: 'Product Specialists',
      bio: 'Product managers and designers focused on creating user-centric solutions that deliver exceptional value.',
      image: '/team/product-team.jpg',
      expertise: ['Product Strategy', 'User Experience', 'Design Thinking', 'Agile Development'],
      social: {
        linkedin: 'https://linkedin.com/company/ziontechgroup'
      }
    },
    {
      name: 'Support Team',
      role: 'Customer Success',
      bio: 'Dedicated support professionals ensuring our clients receive exceptional service and achieve their goals.',
      image: '/team/support-team.jpg',
      expertise: ['Customer Success', 'Technical Support', 'Training', 'Account Management'],
      social: {
        linkedin: 'https://linkedin.com/company/ziontechgroup'
      }
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with our clients and each other.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest standards of ethics and transparency in everything we do.'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We strive for excellence in every project, from initial concept to final delivery.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', description: 'Diverse group of talented professionals' },
    { number: '15+', label: 'Years Experience', description: 'Combined industry experience' },
    { number: '25+', label: 'Certifications', description: 'Professional certifications held' },
    { number: '10+', label: 'Countries', description: 'Global team representation' }
  ];

  return (
    <MainLayout 
      title="Our Team - Zion Tech Group"
      description="Meet the talented professionals behind Zion Tech Group's innovative technology solutions. Our diverse team brings together expertise in AI, cybersecurity, cloud computing, and more."
      url="https://ziontechgroup.com/team"
    >
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-base font-semibold leading-7 text-blue-600">Our Team</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet the Experts Behind Our Success
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our diverse team of talented professionals brings together decades of experience in AI, cybersecurity, cloud computing, and digital transformation to deliver exceptional results for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Team Members
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Talented professionals dedicated to your success
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <div className="text-blue-600 font-medium mb-3">{member.role}</div>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-blue-600" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <Github className="w-5 h-5 text-gray-600" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors"
                      >
                        <Mail className="w-5 h-5 text-green-600" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Team Values
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                The principles that guide our team's work
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Team Statistics
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our team by the numbers
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 lg:p-12 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Join Our Growing Team
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for technology and innovation. Join us in building the future of AI and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}