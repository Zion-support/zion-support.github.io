import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  UsersIcon,
  ZapIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckIcon,
  StarIcon,
  BriefcaseIcon,
  CpuChipIcon,
  ChartBarIcon,
  CogIcon,
  CodeBracketIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const CareersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobCategories = [
    { id: 'all', label: 'All Positions', icon: BriefcaseIcon },
    { id: 'engineering', label: 'Engineering', icon: CodeBracketIcon },
    { id: 'ai', label: 'AI & ML', icon: CpuChipIcon },
    { id: 'security', label: 'Cybersecurity', icon: ShieldCheckIcon },
    { id: 'cloud', label: 'Cloud & DevOps', icon: CloudIcon },
    { id: 'product', label: 'Product', icon: CpuChipIcon },
    { id: 'data', label: 'Data & Analytics', icon: ChartBarIcon }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI & ML",
      category: "ai",
      location: "Remote / New York",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $180,000",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: [
        "PhD in Computer Science or related field",
        "5+ years experience in AI/ML",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, GCP, Azure)"
      ]
    },
    {
      id: 2,
      title: "Cloud Infrastructure Engineer",
      department: "Cloud & DevOps",
      category: "cloud",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100,000 - $150,000",
      description: "Design and implement scalable cloud infrastructure solutions.",
      requirements: [
        "Bachelor's degree in Computer Science",
        "3+ years experience with cloud platforms",
        "Expertise in Kubernetes, Docker, Terraform",
        "Experience with CI/CD pipelines"
      ]
    },
    {
      id: 3,
      title: "Cybersecurity Specialist",
      department: "Security",
      category: "security",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110,000 - $160,000",
      description: "Protect our systems and data from cyber threats and vulnerabilities.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "4+ years experience in cybersecurity",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with security tools and frameworks"
      ]
    },
    {
      id: 4,
      title: "Data Scientist",
      department: "Data & Analytics",
      category: "data",
      location: "Boston, MA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$95,000 - $140,000",
      description: "Analyze complex data to drive business insights and decision-making.",
      requirements: [
        "Master's degree in Data Science or related field",
        "3+ years experience in data analysis",
        "Expertise in Python, R, SQL",
        "Experience with machine learning algorithms"
      ]
    }
  ];

  const benefits = [
    'Competitive Salary',
    'Health Insurance',
    'Remote Work Options',
    'Professional Development',
    'Flexible Hours',
    'Stock Options',
    'Paid Time Off',
    'Team Building Events'
  ];

  const filteredJobs = selectedCategory === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group. Explore career opportunities in AI, cloud infrastructure, cybersecurity, and digital transformation." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud engineer, cybersecurity, data scientist, remote work" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Build the Future of Technology
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Join a team of passionate innovators working on cutting-edge AI solutions, 
              cloud infrastructure, and digital transformation technologies that shape the future.
            </p>
            <Link
              to="#openings"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              View Open Positions
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Role
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore opportunities across different departments and specializations
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {jobCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover exciting career opportunities that match your skills and interests
            </p>
          </div>
          
          <div className="grid gap-8">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-300">
                      <span className="flex items-center gap-1">
                        <BriefcaseIcon className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPinIcon className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="text-green-400 font-semibold">{job.salary}</span>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6">{job.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive work environment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <StarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
                <p className="text-gray-300">
                  Comprehensive benefits package designed to support your career and well-being.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume and let's discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Send Resume
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const page = React.lazy(() => import('./page'));
export default page;