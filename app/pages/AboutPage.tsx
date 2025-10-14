import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircleIcon, 
  UserGroupIcon, 
  TrophyIcon, 
  LightBulbIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.',
      icon: LightBulbIcon
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, ensuring the highest quality standards.',
      icon: TrophyIcon
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their digital transformation journey.',
      icon: UserGroupIcon
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in technology and business strategy.',
      image: '/images/team/kleber.jpg'
    },
    {
      name: 'AI Solutions Team',
      role: 'Machine Learning Engineers',
      description: 'Expert team specializing in AI, ML, and data science solutions.',
      image: '/images/team/ai-team.jpg'
    },
    {
      name: 'Cybersecurity Team',
      role: 'Security Specialists',
      description: 'Dedicated professionals ensuring your digital assets are protected.',
      image: '/images/team/security-team.jpg'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Zion Tech Group was established with a vision to revolutionize technology services.' },
    { year: '2021', title: 'First AI Project', description: 'Successfully delivered our first AI-powered solution to a Fortune 500 company.' },
    { year: '2022', title: 'Cloud Expansion', description: 'Expanded our cloud infrastructure services across multiple regions.' },
    { year: '2023', title: 'Security Certification', description: 'Achieved ISO 27001 certification for information security management.' },
    { year: '2024', title: 'Global Reach', description: 'Serving clients across 20+ countries with cutting-edge technology solutions.' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're dedicated to delivering advanced AI and IT solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a leading technology company dedicated to empowering businesses with advanced AI and IT solutions that drive innovation and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    To empower businesses worldwide with cutting-edge artificial intelligence, cybersecurity, 
                    and cloud infrastructure solutions that drive digital transformation and sustainable growth.
                  </p>
                  <p className="text-lg text-gray-300 mb-8">
                    We believe technology should be accessible, secure, and transformative. Our mission is to 
                    bridge the gap between complex technology and business success, making advanced solutions 
                    work for companies of all sizes.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center text-purple-400">
                      <CheckCircleIcon className="w-5 h-5 mr-2" />
                      <span>500+ Projects Completed</span>
                    </div>
                    <div className="flex items-center text-purple-400">
                      <CheckCircleIcon className="w-5 h-5 mr-2" />
                      <span>50+ Happy Clients</span>
                    </div>
                    <div className="flex items-center text-purple-400">
                      <CheckCircleIcon className="w-5 h-5 mr-2" />
                      <span>99.9% Uptime</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" />
                      <span className="text-white">Expert team with deep industry knowledge</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" />
                      <span className="text-white">Cutting-edge technology and methodologies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" />
                      <span className="text-white">Proven track record of successful projects</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" />
                      <span className="text-white">24/7 support and maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  These core values guide everything we do and shape our company culture
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our diverse team of experts brings together decades of experience in technology and business
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">ZT</span>
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-2">{member.name}</h3>
                    <p className="text-purple-400 text-center mb-4">{member.role}</p>
                    <p className="text-gray-300 text-center text-sm">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
                <p className="text-xl text-gray-300">
                  Key milestones in our company's growth and evolution
                </p>
              </div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mr-6">
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our expertise can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
              >
                Get In Touch
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center gap-2"
              >
                View Our Services
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;