import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  ArrowRight,
  CheckCircle,
  MapPin,
  Clock,
  DollarSign,
  Award,
  BookOpen,
  Coffee,
  Home,
  Building,
  Brain,
  Shield,
  Cloud,
  Cpu
} from 'lucide-react';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Building, count: 24 },
    { id: 'engineering', name: 'Engineering', icon: Cpu, count: 12 },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: 6 },
    { id: 'security', name: 'Security', icon: Shield, count: 4 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 2 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "ai",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120k - $180k",
      description: "Join our AI team to develop cutting-edge machine learning models and autonomous systems...",
      requirements: [
        "Advanced degree in Computer Science, AI, or related field",
        "Experience with PyTorch, TensorFlow, and modern ML frameworks",
        "Strong background in deep learning and neural networks",
        "Experience with cloud platforms (AWS, Azure, GCP)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work options",
        "Health, dental, and vision insurance",
        "Professional development budget"
      ],
      urgent: true
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      department: "security",
      location: "Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90k - $130k",
      description: "Help protect our clients' digital assets with advanced security solutions...",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC2, ISO 27001)",
        "Strong analytical and problem-solving skills"
      ],
      benefits: [
        "Competitive salary",
        "Health and wellness benefits",
        "Training and certification support",
        "Career growth opportunities"
      ],
      urgent: false
    },
    {
      id: 3,
      title: "Cloud Infrastructure Engineer",
      department: "cloud",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$100k - $150k",
      description: "Design and implement scalable cloud solutions for enterprise clients...",
      requirements: [
        "Experience with AWS, Azure, or Google Cloud",
        "Knowledge of Kubernetes and containerization",
        "Infrastructure as Code experience (Terraform, CloudFormation)",
        "Strong understanding of networking and security"
      ],
      benefits: [
        "Remote work flexibility",
        "Competitive compensation",
        "Health benefits",
        "Professional development"
      ],
      urgent: false
    },
    {
      id: 4,
      title: "Full Stack Developer",
      department: "engineering",
      location: "Hybrid (Middletown, DE)",
      type: "Full-time",
      experience: "3+ years",
      salary: "$80k - $120k",
      description: "Build modern web applications and contribute to our product development...",
      requirements: [
        "Proficiency in React, Node.js, and modern JavaScript",
        "Experience with TypeScript and modern frameworks",
        "Knowledge of databases and API design",
        "Understanding of DevOps practices"
      ],
      benefits: [
        "Competitive salary",
        "Hybrid work model",
        "Health benefits",
        "Learning and development"
      ],
      urgent: false
    }
  ];

  const companyValues = [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies",
      icon: Zap
    },
    {
      title: "People Matter",
      description: "Our team is our greatest asset and we invest in their growth",
      icon: Heart
    },
    {
      title: "Global Impact",
      description: "We solve problems that affect businesses worldwide",
      icon: Globe
    },
    {
      title: "Continuous Learning",
      description: "We foster a culture of curiosity and skill development",
      icon: BookOpen
    }
  ];

  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage",
      icon: Heart
    },
    {
      title: "Flexible Work",
      description: "Remote work options and flexible scheduling",
      icon: Home
    },
    {
      title: "Professional Growth",
      description: "Training budgets and career development programs",
      icon: Award
    },
    {
      title: "Team Building",
      description: "Regular team events and social activities",
      icon: Users
    }
  ];

  const filteredJobs = jobOpenings.filter(job => 
    selectedDepartment === 'all' || job.department === selectedDepartment
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build the future of technology with us. We're looking for passionate, 
            innovative minds to help transform businesses through AI and cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="#openings"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>View Openings</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200">
              <span>General Application</span>
            </button>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              These core principles guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We believe in taking care of our team so they can do their best work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find the perfect role for your skills and career goals.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                  selectedDepartment === dept.id
                    ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                    : 'border-gray-700 text-gray-300 hover:border-purple-500/50 hover:text-purple-400'
                }`}
              >
                <dept.icon className="w-4 h-4" />
                <span>{dept.name}</span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                  {dept.count}
                </span>
              </button>
            ))}
          </div>
          
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold">{job.title}</h3>
                      {job.urgent && (
                        <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30">
                          Urgent
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Building className="w-4 h-4" />
                        <span>{departments.find(d => d.id === job.department)?.name}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/careers/${job.id}`}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <p className="text-gray-300 mb-6">{job.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-400">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-400">Benefits</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <Briefcase className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No positions found</h3>
              <p className="text-gray-500">Try selecting a different department or check back later for new openings.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See the Right Fit?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume 
            and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Send General Application</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}