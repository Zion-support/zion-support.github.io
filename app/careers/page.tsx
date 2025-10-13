import { ArrowRight, MapPin, Clock, Users, Award, Heart, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years of experience in AI/ML development",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)"
      ]
    },
    {
      id: 2,
      title: "5G Network Engineer",
      department: "5G Technology",
      location: "Austin, TX",
      type: "Full-time",
      experience: "3+ years",
      description: "Design and implement 5G network infrastructure and edge computing solutions.",
      requirements: [
        "Bachelor's degree in Telecommunications or related field",
        "3+ years of 5G/telecommunications experience",
        "Knowledge of 5G protocols and standards",
        "Experience with network virtualization"
      ]
    },
    {
      id: 3,
      title: "Cybersecurity Specialist",
      department: "Cybersecurity",
      location: "Remote / New York, NY",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect our clients' digital assets with advanced security solutions.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "4+ years of cybersecurity experience",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with security frameworks and compliance"
      ]
    },
    {
      id: 4,
      title: "Cloud Solutions Architect",
      department: "Cloud Computing",
      location: "Seattle, WA",
      type: "Full-time",
      experience: "6+ years",
      description: "Design and implement scalable cloud architectures for enterprise clients.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "6+ years of cloud architecture experience",
        "Expertise in AWS, Azure, or GCP",
        "Experience with DevOps and containerization"
      ]
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Data Analytics",
      location: "Remote / Boston, MA",
      type: "Full-time",
      experience: "3+ years",
      description: "Extract insights from complex data sets to drive business decisions.",
      requirements: [
        "Master's degree in Data Science or related field",
        "3+ years of data science experience",
        "Proficiency in Python, R, SQL",
        "Experience with machine learning and statistical analysis"
      ]
    },
    {
      id: 6,
      title: "Frontend Developer",
      department: "Web Development",
      location: "Remote / Los Angeles, CA",
      type: "Full-time",
      experience: "2+ years",
      description: "Create beautiful and responsive user interfaces for our web applications.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "2+ years of frontend development experience",
        "Expertise in React, TypeScript, CSS",
        "Experience with modern web development tools"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and mental health support"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and professional certifications"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and work-life balance initiatives"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Career Growth",
      description: "Clear career paths, mentorship programs, and leadership opportunities"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group. Explore exciting career opportunities in AI, 5G, cybersecurity, and technology." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future with us. Join a team of passionate innovators working on cutting-edge AI, 5G, and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#openings"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact HR
              </Link>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Join Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Open Positions
            </h2>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Clock className="w-4 h-4 mr-2" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Users className="w-4 h-4 mr-2" />
                          {job.experience}
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300">
                          {job.department}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-cyan-300 mb-2">Key Requirements:</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-cyan-400 mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="lg:ml-6 mt-4 lg:mt-0">
                      <Link
                        to={`/careers/${job.id}`}
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Our Culture
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
                  <p className="text-gray-300">
                    We encourage creative thinking and embrace new technologies to solve complex problems.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">Collaborative Spirit</h3>
                  <p className="text-gray-300">
                    We believe in the power of teamwork and support each other to achieve common goals.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
                  <p className="text-gray-300">
                    We invest in our team's growth and provide opportunities for professional development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
