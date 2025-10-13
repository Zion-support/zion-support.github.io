import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users, Award, Lightbulb, Heart, Zap } from "lucide-react";

export default function Careers() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "AI Research",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: [
        "5+ years experience in AI/ML",
        "PhD in Computer Science or related field",
        "Experience with TensorFlow, PyTorch",
        "Strong Python programming skills"
      ]
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud Infrastructure",
      location: "Remote",
      type: "Full-time",
      description: "Design and implement scalable cloud architectures for enterprise clients.",
      requirements: [
        "7+ years cloud experience",
        "AWS/Azure/GCP certifications",
        "Experience with Kubernetes",
        "Strong communication skills"
      ]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "New York, NY",
      type: "Full-time",
      description: "Protect our clients' digital assets with advanced security solutions.",
      requirements: [
        "3+ years security experience",
        "CISSP or CISM certification",
        "Experience with SIEM tools",
        "Knowledge of compliance frameworks"
      ]
    },
    {
      title: "5G Network Engineer",
      department: "5G Solutions",
      location: "Austin, TX",
      type: "Full-time",
      description: "Implement and optimize 5G networks for smart cities and IoT applications.",
      requirements: [
        "4+ years telecom experience",
        "5G network knowledge",
        "Experience with edge computing",
        "Strong problem-solving skills"
      ]
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build beautiful, responsive user interfaces for our AI-powered applications.",
      requirements: [
        "3+ years React experience",
        "TypeScript proficiency",
        "UI/UX design skills",
        "Experience with modern frameworks"
      ]
    },
    {
      title: "Data Scientist",
      department: "Data Analytics",
      location: "Seattle, WA",
      type: "Full-time",
      description: "Extract insights from complex datasets to drive business decisions.",
      requirements: [
        "4+ years data science experience",
        "Python/R programming",
        "Machine learning expertise",
        "Statistical analysis skills"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Competitive Compensation",
      description: "Top-tier salary packages with equity options and performance bonuses."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and professional development opportunities."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and unlimited PTO policy."
    }
  ];

  const cultureValues = [
    {
      title: "Innovation First",
      description: "We encourage experimentation and reward creative problem-solving."
    },
    {
      title: "Collaborative Spirit",
      description: "We believe great ideas come from diverse teams working together."
    },
    {
      title: "Continuous Growth",
      description: "We invest in our people's development and career advancement."
    },
    {
      title: "Impact Driven",
      description: "We're passionate about using technology to solve real-world problems."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team of Innovators</title>
        <meta
          name="description"
          content="Join Zion Tech Group and build the future of AI, cloud, and cybersecurity. Explore open positions, benefits, and our innovative culture."
        />
        <meta
          name="keywords"
          content="careers zion tech group, AI jobs, cloud engineer jobs, cybersecurity careers, tech jobs, software engineering positions"
        />
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
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Be part of a team that's shaping the future of technology. We're looking for passionate 
              individuals who want to make a real impact in AI, cloud computing, and cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/team"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover exciting opportunities to grow your career with us.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {position.title}
                    </h3>
                    <span className="text-cyan-400 text-sm font-medium">
                      {position.type}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-300">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {position.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {position.department}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {position.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-gray-300 text-sm flex items-center">
                          <ArrowRight className="w-3 h-3 mr-2 text-cyan-400 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    Apply for this position
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive benefits and a supportive environment for your growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Culture
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We foster an environment where innovation thrives and everyone can make an impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cultureValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't see a position that matches your skills? We're always looking for talented individuals. 
                Send us your resume and let's start a conversation.
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
                  to="/team"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn About Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
