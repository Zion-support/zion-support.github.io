import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckIcon,
  ArrowRightIcon,
  UsersIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that drive business growth.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Reliability',
      description: 'Our solutions are built with enterprise-grade security and reliability to ensure your business runs smoothly.'
    },
    {
      icon: UsersIcon,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique needs and challenges.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized expertise and 24/7 support across all time zones.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI solutions, cloud infrastructure, and digital transformation services." />
        <meta name="keywords" content="about us, AI company, cloud solutions, digital transformation, technology company" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI solutions, 
                cloud infrastructure, and digital transformation services.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Founded with a vision to democratize advanced technology, Zion Tech Group 
                  has been at the forefront of AI innovation and digital transformation. 
                  We believe that every business, regardless of size, should have access 
                  to cutting-edge technology solutions.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our team of expert engineers, data scientists, and technology consultants 
                  work tirelessly to deliver solutions that not only meet today's challenges 
                  but anticipate tomorrow's opportunities.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
                <p className="text-gray-300 mb-6">
                  To empower businesses with innovative AI and technology solutions that 
                  drive growth, efficiency, and competitive advantage in the digital age.
                </p>
                
                <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                <p className="text-gray-300">
                  To be the global leader in AI-powered business solutions, making 
                  advanced technology accessible and beneficial for organizations worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Start a Project
              </Link>
              <Link
                to="/careers"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const page = React.lazy(() => import('./page'));
export default page;