import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  UserGroupIcon, 
  TrophyIcon, 
  LightBulbIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions for businesses worldwide." />
        <meta name="keywords" content="about us, company, team, mission, AI solutions, IT services" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                    enhance security, and accelerate digital transformation.
                  </p>
                  <p className="text-lg text-gray-300">
                    We believe technology should be accessible, secure, and transformative. Our team of 
                    experts works tirelessly to deliver solutions that not only meet today's challenges 
                    but anticipate tomorrow's opportunities.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-cyan-600 p-8 rounded-lg">
                  <LightBulbIcon className="w-16 h-16 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
                  <p className="text-white">
                    We stay at the forefront of technology, constantly exploring new ways to solve 
                    complex business challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-800 p-8 rounded-lg">
                  <ShieldCheckIcon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Security First</h3>
                  <p className="text-gray-300">
                    We prioritize security in every solution we deliver, ensuring your data and systems 
                    are protected against evolving threats.
                  </p>
                </div>
                <div className="bg-slate-800 p-8 rounded-lg">
                  <CloudIcon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Scalability</h3>
                  <p className="text-gray-300">
                    Our solutions are designed to grow with your business, providing flexibility and 
                    performance at any scale.
                  </p>
                </div>
                <div className="bg-slate-800 p-8 rounded-lg">
                  <CpuChipIcon className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
                  <p className="text-gray-300">
                    We embrace cutting-edge technologies and methodologies to deliver solutions that 
                    give you a competitive edge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-900 p-8 rounded-lg text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <UserGroupIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Expert Engineers</h3>
                  <p className="text-gray-300">
                    Our team consists of highly skilled engineers with expertise in AI, cybersecurity, 
                    cloud computing, and software development.
                  </p>
                </div>
                <div className="bg-slate-900 p-8 rounded-lg text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <TrophyIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Proven Track Record</h3>
                  <p className="text-gray-300">
                    With years of experience and numerous successful projects, we have a proven track 
                    record of delivering exceptional results.
                  </p>
                </div>
                <div className="bg-slate-900 p-8 rounded-lg text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <LightBulbIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Continuous Learning</h3>
                  <p className="text-gray-300">
                    We stay updated with the latest technologies and industry trends to provide you 
                    with the most current solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white mb-8">
                Let's discuss how our AI and IT solutions can help your business grow and succeed.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
