import React from 'react';
import SEOHead from '../components/SEOHead';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: CheckCircleIcon,
      title: 'Mission-Driven',
      description: 'We are committed to delivering innovative solutions that drive real business value and transformation.'
    },
    {
      icon: UserGroupIcon,
      title: 'Expert Team',
      description: 'Our team consists of industry experts with deep knowledge in AI, cybersecurity, and cloud technologies.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology trends to provide cutting-edge solutions to our clients.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Trusted Partner',
      description: 'We build long-term relationships with our clients based on trust, reliability, and exceptional service.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

export default function Page() {
  return (<>
      import { Helmet } from "react-helmet-async";

<Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering innovative technology solutions." />
        <meta name="keywords" content="about us, _Zion Tech Group, _company, _mission, _values, _team, technology solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        </div><section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div></section></section>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                We are a leading technology company specializing in AI solutions, _cybersecurity, and digital transformation. 
                Our mission is to empower businesses with cutting-edge technology that drives innovation and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div></section></section>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our approach to delivering exceptional technology solutions.
              </p>
            </div></section></section>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                To empower businesses with innovative technology solutions that drive digital transformation, 
                enhance security, and accelerate growth. We believe in the power of technology to solve complex 
                challenges and create opportunities for our clients to thrive in the digital age.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Get in Touch
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div></section></section>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;