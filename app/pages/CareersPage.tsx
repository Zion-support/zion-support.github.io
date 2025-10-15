import React from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Clock, Users, Heart, Zap, Target } from "lucide-react";

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: "Senior AI Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: ["5+ years AI/ML experience", "Python, TensorFlow, PyTorch", "PhD in Computer Science preferred"]
    },
    {
      title: "Cloud Solutions Architect",
      location: "New York, NY",
      type: "Full-time",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise clients.",
      requirements: ["AWS/Azure certification", "Kubernetes expertise", "3+ years cloud architecture"]
    },
    {
      title: "Cybersecurity Specialist",
      location: "Remote",
      type: "Full-time",
      description: "Protect our clients' digital assets with advanced security solutions and threat detection.",
      requirements: ["CISSP certification", "Penetration testing experience", "2+ years cybersecurity"]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Learning & Development",
      description: "Continuous learning opportunities and conference attendance"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Flexible Work",
      description: "Remote work options and flexible schedules"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Career Growth",
      description: "Clear career paths and advancement opportunities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the future of technology. Join our team of innovators and help shape the next generation of AI and IT solutions.
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Open Positions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{position.title}</h3>
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="mr-4">{position.location}</span>
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{position.type}</span>
                </div>
                <p className="text-gray-300 mb-6">{position.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-gray-400 text-sm flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't see a position that fits? We're always looking for talented individuals to join our team.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Send Us Your Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;