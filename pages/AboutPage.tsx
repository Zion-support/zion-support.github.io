import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Users,
  CheckCircle,
  Globe,
  Lightbulb,
  Rocket,
  Target
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new ways to solve complex business challenges.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: 'Security & Trust',
      description: 'Your data security is our top priority. We implement enterprise-grade security measures to protect your information.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Client-Centric Approach',
      description: 'We work closely with our clients to understand their unique needs and deliver solutions that exceed expectations.'
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      title: 'Rapid Delivery',
      description: 'We understand the importance of time-to-market and deliver high-quality solutions quickly and efficiently.'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Global Reach',
      description: 'With a worldwide presence, we serve clients across different industries and geographical locations.'
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that drive business growth and operational efficiency.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI and IT solutions, 
              dedicated to transforming businesses through innovative technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
              efficiency, and growth. We believe technology should be accessible, reliable, 
              and transformative for organizations of all sizes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;