import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  HeartIcon,
  BoltIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years of experience in AI/ML",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills"
      ]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Protect our clients' digital assets with advanced cybersecurity solutions.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "3+ years of experience in cybersecurity",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC 2, GDPR)"
      ]
    },
    {
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Design and implement scalable cloud infrastructure solutions.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years of cloud architecture experience",
        "Certifications: AWS Solutions Architect, Azure Architect",
        "Experience with DevOps practices and tools",
        "Strong understanding of microservices architecture"
      ]
    },
    {
      title: "Product Manager - AI Solutions",
      department: "Product",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive product strategy and development for our AI solution portfolio.",
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "3+ years of product management experience",
        "Experience with AI/ML products preferred",
        "Strong analytical and strategic thinking skills",
        "Excellent communication and leadership abilities"
      ]
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "2+ years",
      description: "Build beautiful and responsive user interfaces for our web applications.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "2+ years of frontend development experience",
        "Proficiency in React, TypeScript, and modern CSS",
        "Experience with responsive design and accessibility",
        "Knowledge of testing frameworks and tools"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Automate and optimize our development and deployment processes.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of DevOps experience",
        "Experience with CI/CD pipelines and containerization",
        "Knowledge of infrastructure as code (Terraform, CloudFormation)",
        "Strong scripting skills (Bash, Python, PowerShell)"
      ]
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "We offer competitive salaries and performance-based bonuses",
      icon: CursorArrowRaysIcon
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance coverage",
      icon: HeartIcon
    },
    {
      title: "Flexible Work",
      description: "Remote work options and flexible working hours",
      icon: ClockIcon
    },
    {
      title: "Learning & Development",
      description: "Professional development opportunities and training programs",
      icon: BoltIcon
    },
    {
      title: "Team Environment",
      description: "Collaborative and inclusive work environment",
      icon: UserGroupIcon
    },
    {
      title: "Location Flexibility",
      description: "Work from anywhere or our office in Middletown, DE",
      icon: MapPinIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group. Explore career opportunities in AI, cybersecurity, cloud computing, and more." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, cybersecurity, cloud architect, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI and IT solutions. 
              We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </Link>
              <Link 
                to="/about" 
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:bg-slate-700 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center">
                          <MapPinIcon className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <UserGroupIcon className="w-4 h-4 mr-1" />
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <Link 
                      to="/contact"
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 inline-flex items-center"
                    >
                      Apply Now <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
            </p>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Send Your Resume <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
