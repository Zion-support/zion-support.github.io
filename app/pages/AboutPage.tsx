import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology and creative solutions.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures and best practices.'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring solutions that truly meet their needs.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering high-quality solutions on time and within budget.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with over 10 years of experience in AI and technology solutions.'
    },
    {
      name: 'AI Engineering Team',
      role: 'Machine Learning Specialists',
      description: 'Expert team of AI engineers and data scientists developing cutting-edge solutions.'
    },
    {
      name: 'Cloud Infrastructure Team',
      role: 'DevOps Engineers',
      description: 'Specialists in cloud architecture, automation, and scalable infrastructure solutions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of AI and IT experts." />
        <meta name="keywords" content="about us, team, mission, values, AI experts, IT professionals" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a team of passionate AI and IT experts dedicated to transforming businesses 
              through innovative technology solutions. Our mission is to make cutting-edge 
              technology accessible and practical for organizations of all sizes.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                To empower businesses with AI-driven solutions that drive growth, efficiency, 
                and innovation. We believe technology should solve real problems and create 
                meaningful impact for our clients and their customers.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our culture
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the experts behind our innovative solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-600 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <UserGroupIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="/careers"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;