import React from "react";
import { Helmet } from "react-helmet-async";
import {MapPin, Heart, Target} from "lucide-react";

const CareersPage: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options to support your personal life."
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "Work with the latest AI and cloud technologies in exciting projects."
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Join a diverse team of passionate professionals who love what they do."
    },
    {
      icon: Target,
      title: "Growth Opportunities",
      description: "Continuous learning and career development opportunities for all team members."
    }
  ];

  const openPositions = [
    {
      title: "Senior AI Engineer",
      type: "Full-time",
      location: "Remote",
      description: "Lead the development of machine learning models and AI solutions.",
      requirements: ["5+ years ML experience", "Python, TensorFlow", "PhD preferred"]
    },
    {
      title: "Cloud Solutions Architect",
      type: "Full-time",
      location: "New York, NY",
      description: "Design and implement scalable cloud infrastructure solutions.",
      requirements: ["AWS/Azure certified", "Kubernetes expertise", "3+ years experience"]
    },
    {
      title: "Cybersecurity Specialist",
      type: "Full-time",
      location: "Remote",
      description: "Protect our clients' digital assets with advanced security measures.",
      requirements: ["CISSP certification", "Penetration testing", "2+ years experience"]
    },
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "San Francisco, CA",
      description: "Build beautiful and responsive user interfaces for our AI platforms.",
      requirements: ["React, TypeScript", "UI/UX design", "2+ years experience"]
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
          <h1 className="text-5xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of AI and IT solutions.
            Work on cutting-edge projects and make a real impact.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="p-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg w-fit mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                  <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                <div className="flex items-center text-gray-400 mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{position.location}</span>
                </div>
                <p className="text-gray-300 mb-4">{position.description}</p>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Don't See Your Perfect Role?</h2>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300">
              Send Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;