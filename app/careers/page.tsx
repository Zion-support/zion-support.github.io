import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Award, Briefcase } from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const jobOpenings: JobOpening[] = [
    {
      id: "1",
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years experience in AI/ML development",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ],
      postedDate: "2024-01-15",
      featured: true
    },
    {
      id: "2",
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Protect our clients' digital assets and infrastructure through advanced security measures and threat analysis.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "3+ years experience in cybersecurity",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC 2, ISO 27001)"
      ],
      benefits: [
        "Competitive salary",
        "Health and dental insurance",
        "Paid time off and holidays",
        "Certification reimbursement",
        "Career advancement opportunities"
      ],
      postedDate: "2024-01-12",
      featured: true
    },
    {
      id: "3",
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement scalable cloud solutions for enterprise clients across multiple cloud platforms.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "7+ years experience in cloud architecture",
        "Expertise in AWS, Azure, and Google Cloud",
        "Experience with containerization (Docker, Kubernetes)",
        "Strong leadership and client-facing skills"
      ],
      benefits: [
        "Competitive salary and bonuses",
        "Comprehensive benefits package",
        "Remote work flexibility",
        "Learning and development opportunities",
        "Stock options"
      ],
      postedDate: "2024-01-10",
      featured: false
    },
    {
      id: "4",
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Create beautiful and responsive user interfaces for our web applications and client projects.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "2+ years experience in frontend development",
        "Proficiency in React, TypeScript, and CSS",
        "Experience with modern build tools",
        "Strong attention to detail and design"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Flexible work schedule",
        "Professional development budget",
        "Team building events"
      ],
      postedDate: "2024-01-08",
      featured: false
    },
    {
      id: "5",
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Streamline our development and deployment processes through automation and infrastructure management.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years experience in DevOps",
        "Experience with CI/CD pipelines",
        "Knowledge of infrastructure as code",
        "Experience with monitoring and logging tools"
      ],
      benefits: [
        "Competitive salary",
        "Comprehensive benefits",
        "Paid time off",
        "Professional development",
        "401(k) matching"
      ],
      postedDate: "2024-01-05",
      featured: false
    },
    {
      id: "6",
      title: "Sales Engineer",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Bridge the gap between technical solutions and business needs by supporting our sales team with technical expertise.",
      requirements: [
        "Bachelor's degree in Engineering or related field",
        "3+ years experience in technical sales",
        "Strong technical background",
        "Excellent communication skills",
        "Experience with enterprise software"
      ],
      benefits: [
        "Competitive salary and commission",
        "Health insurance",
        "Flexible work arrangements",
        "Sales training and development",
        "Performance bonuses"
      ],
      postedDate: "2024-01-03",
      featured: false
    }
  ];

  const departments = ["all", "Engineering", "Security", "Sales", "Marketing", "Operations"];
  const locations = ["all", "Remote", "Middletown, DE", "New York, NY", "San Francisco, CA"];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === "all" || job.location === selectedLocation;
    return matchesDepartment && matchesLocation;
  });

  const featuredJobs = filteredJobs.filter(job => job.featured);
  const regularJobs = filteredJobs.filter(job => !job.featured);

  const companyBenefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Competitive Compensation",
      description: "Market-leading salaries and performance-based bonuses"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Flexible Work",
      description: "Remote work options and flexible schedules"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Professional Growth",
      description: "Learning opportunities and career development programs"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Generous PTO and work-life balance initiatives"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Team Culture",
      description: "Collaborative environment with regular team events"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Join Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology. We're looking for passionate individuals who want to make a difference.
            </p>
          </div>
        </div>
      </div>

      {/* Company Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer competitive benefits and a supportive environment where you can grow and thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyBenefits.map((benefit, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-2">Department</label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept} className="bg-slate-800">
                    {dept === "all" ? "All Departments" : dept}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location} className="bg-slate-800">
                    {location === "all" ? "All Locations" : location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Jobs */}
      {featuredJobs.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Positions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredJobs.map(job => (
              <div key={job.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-300">{job.department}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-sm text-yellow-400 font-medium">Featured</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {job.experience}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {job.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    Posted {new Date(job.postedDate).toLocaleDateString()}
                  </span>
                  <Link
                    to={`/careers/${job.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:gap-2 transition-all"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Jobs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">All Open Positions</h2>
        <div className="space-y-4">
          {regularJobs.map(job => (
            <div key={job.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                    <span>{job.department}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.experience}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {job.description}
                  </p>
                </div>
                <div className="ml-6">
                  <Link
                    to={`/careers/${job.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:gap-2 transition-all"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 text-center border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
          >
            <Users className="w-5 h-5 mr-2" />
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;