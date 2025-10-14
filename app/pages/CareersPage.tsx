import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  HeartIcon,
  SparklesIcon,
  ChartBarIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  CogIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  StarIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  LightBulbIcon,
  NetworkIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "AI Solutions",
      location: "Remote",
      type: "Full-time",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: ["5+ years AI/ML experience", "Python, TensorFlow, PyTorch", "Cloud platforms", "Team leadership"],
      icon: CpuChipIcon,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud Infrastructure",
      location: "New York, NY",
      type: "Full-time",
      description: "Design and implement scalable cloud architectures for enterprise clients.",
      requirements: ["AWS/Azure/GCP certification", "3+ years cloud experience", "Architecture design", "Client communication"],
      icon: CloudIcon,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote",
      type: "Full-time",
      description: "Protect our clients' digital assets with advanced security solutions.",
      requirements: ["CISSP/CISM certification", "4+ years security experience", "Threat analysis", "Incident response"],
      icon: ShieldCheckIcon,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Full Stack Developer",
      department: "Development",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build modern web applications using React, Node.js, and cloud technologies.",
      requirements: ["3+ years full-stack experience", "React, Node.js, TypeScript", "Database design", "API development"],
      icon: CogIcon,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description: "Automate deployment pipelines and manage cloud infrastructure.",
      requirements: ["Docker, Kubernetes", "CI/CD pipelines", "Infrastructure as Code", "Monitoring tools"],
      icon: WrenchScrewdriverIcon,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create intuitive and beautiful user experiences for our products.",
      requirements: ["Figma, Sketch", "User research", "Prototyping", "Design systems"],
      icon: EyeIcon,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Above-market compensation with performance bonuses",
      icon: CurrencyDollarIcon
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance",
      icon: HeartIcon
    },
    {
      title: "Flexible Work",
      description: "Remote work options and flexible hours",
      icon: ClockIcon
    },
    {
      title: "Learning & Development",
      description: "Professional development budget and training opportunities",
      icon: AcademicCapIcon
    },
    {
      title: "Team Building",
      description: "Regular team events and company retreats",
      icon: UserGroupIcon
    },
    {
      title: "Career Growth",
      description: "Clear career paths and advancement opportunities",
      icon: ChartBarIcon
    }
  ];

  const values = [
    "Innovation and creativity",
    "Collaboration and teamwork",
    "Continuous learning",
    "Work-life balance",
    "Diversity and inclusion",
    "Customer focus"
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group. Explore career opportunities in AI, cloud computing, cybersecurity, and more. Build the future with us." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, cloud architect, cybersecurity, full stack developer, remote work" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build the future of technology with us
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                We're looking for passionate individuals who want to make a difference
                in the world of AI and technology. Join us in creating innovative solutions
                that transform businesses and improve lives.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find your perfect role
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-purple-500">
                  <div className={`w-16 h-16 bg-gradient-to-r ${position.color} rounded-lg flex items-center justify-center mb-6`}>
                    <position.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    <span className="mr-4">{position.location}</span>
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span>{position.type}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer competitive benefits and a great work environment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
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
                The principles that guide our culture and work
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't see a position that fits? We're always looking for talented individuals
              to join our growing team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Us Your Resume
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;