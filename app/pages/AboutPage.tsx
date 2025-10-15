import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  StarIcon,
  TrophyIcon,
  GlobeAltIcon,
  CpuChipIcon,
  CloudIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions",
      icon: LightBulbIcon
    },
    {
      title: "Excellence",
      description: "We strive for perfection in every project and deliver exceptional results",
      icon: StarIcon
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our business practices",
      icon: ShieldCheckIcon
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs and challenges",
      icon: UserGroupIcon
    }
  ];

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      description: "20+ years in technology leadership",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Expert in AI and machine learning",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Mike Chen",
      role: "Head of Engineering",
      description: "Full-stack development specialist",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Lisa Davis",
      role: "Head of Design",
      description: "UX/UI design expert",
      image: "/api/placeholder/300/300"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
    { number: "10+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI solutions, IT services, and technology consulting with a team of experienced professionals." />
        <meta name="keywords" content="about us, company, team, technology, AI, IT services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              We are a leading technology company dedicated to transforming businesses through innovative AI solutions and comprehensive IT services
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2014, Zion Tech Group has been at the forefront of technological innovation, 
                helping businesses across various industries leverage the power of artificial intelligence 
                and modern IT infrastructure to achieve their goals.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of experienced professionals combines deep technical expertise with a passion 
                for solving complex business challenges. We believe in the transformative power of 
                technology and are committed to delivering solutions that drive real business value.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <RocketLaunchIcon className="w-5 h-5 mr-2" />
                Learn more about our mission
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-4">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To be the leading technology partner for businesses worldwide, recognized for 
                our innovation, excellence, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals who make our success possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-square bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help transform your business with technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Get In Touch
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/careers"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;