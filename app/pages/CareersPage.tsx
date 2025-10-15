import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  ClockIcon, 
  UserGroupIcon, 
  HeartIcon, 
  BoltIcon, 
  TargetIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const CareersPage: React.FC = () => {
  const benefits = [
    {
      icon: HeartIcon,
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options to help you maintain a healthy work-life balance."
    },
    {
      icon: BoltIcon,
      title: "Innovation",
      description: "Work on cutting-edge AI and IT projects that shape the future of technology."
    },
    {
      icon: UserGroupIcon,
      title: "Collaborative Team",
      description: "Join a diverse team of experts who support and learn from each other."
    },
    {
      icon: TargetIcon,
      title: "Growth Opportunities",
      description: "Continuous learning opportunities and career advancement paths."
    }
  ];

  const openPositions = [
    {
      title: "Senior AI Engineer",
      type: "Full-time",
      location: "Remote",
      department: "AI Solutions",
      description: "Lead the development of machine learning models and AI solutions for our clients."
    },
    {
      title: "Cloud Solutions Architect",
      type: "Full-time",
      location: "Remote",
      department: "IT Solutions",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise clients."
    },
    {
      title: "Cybersecurity Specialist",
      type: "Full-time",
      location: "Remote",
      department: "Security",
      description: "Protect our clients' digital assets with advanced cybersecurity solutions."
    },
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote",
      department: "Development",
      description: "Build beautiful and responsive user interfaces for our web applications."
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote",
      department: "Infrastructure",
      description: "Automate deployment processes and maintain our cloud infrastructure."
    },
    {
      title: "Product Manager",
      type: "Full-time",
      location: "Remote",
      department: "Product",
      description: "Drive product strategy and work with cross-functional teams to deliver great products."
    }
  ];

  const perks = [
    "Competitive salary and equity",
    "Health, dental, and vision insurance",
    "401(k) with company matching",
    "Flexible PTO policy",
    "Remote work options",
    "Professional development budget",
    "Latest technology and tools",
    "Team building events",
    "Mentorship programs",
    "Career advancement opportunities"
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group. Explore career opportunities in AI and IT solutions, cloud infrastructure, and cybersecurity." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI and IT solutions. 
              Work on cutting-edge projects and make a real impact in the technology industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Open Positions
              </Link>
              <Link 
                to="/about" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Work With Us?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Open Positions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {position.type}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-3">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">{position.location}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{position.department}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <Link 
                    to="/contact" 
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center block"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks and Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Perks & Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Send Resume
              </Link>
              <Link 
                to="/about" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-blue-100">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;