import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  CogIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  SparklesIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  StarIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  LightBulbIcon,
  MapPinIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in technology and business development.",
      image: "/images/team/kleber-santos.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Technology expert specializing in AI and cloud architecture.",
      image: "/images/team/sarah-johnson.jpg"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      description: "Full-stack developer with expertise in modern web technologies.",
      image: "/images/team/michael-chen.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      description: "Creative director focused on user experience and visual design.",
      image: "/images/team/emily-rodriguez.jpg"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with technology.",
      icon: LightBulbIcon
    },
    {
      title: "Excellence",
      description: "We deliver high-quality solutions that exceed client expectations.",
      icon: StarIcon
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients as partners in their success.",
      icon: UserGroupIcon
    },
    {
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency.",
      icon: ShieldCheckIcon
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "4+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, team, and commitment to innovation." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, technology company, team, mission, values" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Pioneering the future of technology solutions
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Founded in 2020, Zion Tech Group has been at the forefront of AI and IT innovation,
                helping businesses transform their operations through cutting-edge technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                To empower businesses with innovative AI and IT solutions that drive growth,
                efficiency, and competitive advantage in the digital age.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We believe that technology should be accessible, powerful, and transformative.
                Our mission is to bridge the gap between cutting-edge technology and practical
                business applications, ensuring that every client can leverage the full potential
                of modern technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the experts behind our success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 text-center hover:bg-slate-700 transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserGroupIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our
              innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
              <Link
                to="/careers"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
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

export default AboutPage;