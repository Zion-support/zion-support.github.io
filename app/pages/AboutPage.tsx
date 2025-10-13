import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';import { 
=======
import { Helmet } from 'react-helmet-async';
import { 
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

<<<<<<< HEAD
export default function AboutPage()    {
return (    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission and team" />
      </Helmet>
=======
const AboutPage: React.FC = () => {
  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Reliability',
      description: 'Our solutions are built with security and reliability as core principles.'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and challenges.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from design to implementation.'
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '4+', label: 'Years Experience' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission and team" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h1>
<<<<<<< HEAD
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
Empowering businesses through innovative technology solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Founded in 2020, we've been at the forefront of digital transformation, 
              helping companies leverage the power of artificial intelligence, cybersecurity, 
              and cloud technologies to achieve unprecedented growth.            </p>
=======
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI and IT solutions, 
              dedicated to transforming businesses through innovative technology.
            </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Zion Tech Group</h1>
          <p className="text-lg text-gray-300">
            We are a leading technology company specializing in AI solutions, cybersecurity, and digital transformation.
          </p>
        </div>
      </div>
    </>
  );
}
export default AboutPage;
=======
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              To empower businesses with cutting-edge AI and IT solutions that drive growth, 
              efficiency, and innovation. We believe technology should be accessible, 
              reliable, and transformative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get in Touch
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
