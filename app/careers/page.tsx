import { ArrowRight, Users, Briefcase, Award, MapPin, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

const CareersPage = () => {
  const positions = [
    {
      title: "Senior AI Engineer",
      department: "AI Solutions",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead development of cutting-edge AI solutions and machine learning models for enterprise clients.",
      requirements: [
        "Master's degree in Computer Science, AI, or related field",
        "5+ years experience with Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong background in NLP and computer vision"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Flexible work hours"]
    },
    {
      title: "Full Stack Developer",
      department: "Web Development",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Build scalable web applications using modern technologies and frameworks.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience with React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud deployment and DevOps practices"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Professional development budget"]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect our clients' digital assets and infrastructure from cyber threats.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "4+ years experience in cybersecurity",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with security tools and frameworks"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Security training budget"]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Manage and optimize our cloud infrastructure and deployment pipelines.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience with AWS, Docker, Kubernetes",
        "Experience with CI/CD pipelines",
        "Knowledge of infrastructure as code (Terraform, CloudFormation)"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Cloud certification support"]
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive and innovative environment."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Growth",
      description: "Opportunities for professional development and career advancement."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognition",
      description: "Your contributions are valued and recognized with competitive compensation."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Flexible Location",
      description: "Work remotely or from our modern office in Middletown, Delaware."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Careers at Zion Tech Group - Join Our Team | AI & IT Solutions"
        description="Join Zion Tech Group and be part of a cutting-edge team building the future of AI and IT solutions. Explore career opportunities in technology, engineering, and innovation."
        keywords="careers, jobs, AI engineer, software developer, cybersecurity, DevOps, technology careers, remote work, Zion Tech Group"
        canonical="https://ziontechgroup.com/careers"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Innovative Team
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Be part of the future of technology. We're building cutting-edge AI and IT solutions 
            that transform businesses and create meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer more than just a job - we provide a platform for growth, innovation, and impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400">
                  {benefit.icon}
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our current openings and find the perfect role for your skills and ambitions.
            </p>
          </div>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-4 lg:mt-0 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <p className="text-gray-300 mb-6">{position.description}</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals to join our team. 
            Send us your resume and let us know how you can contribute to our mission.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
          >
            Send Your Resume
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;