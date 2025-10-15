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
      requirements: ["5+ years AI/ML experience", "Python, TensorFlow, PyTorch", "PhD in Computer Science or related field"]
    },
    {
      title: "Cloud Solutions Architect",
      location: "New York, NY",
      type: "Full-time",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise clients.",
      requirements: ["AWS/Azure/GCP certification", "Kubernetes expertise", "3+ years cloud architecture experience"]
    },
    {
      title: "Cybersecurity Specialist",
      location: "Remote",
      type: "Full-time",
      description: "Protect our clients' digital assets with advanced security solutions and threat analysis.",
      requirements: ["CISSP or equivalent certification", "Penetration testing experience", "2+ years security experience"]
    },
    {
      title: "Frontend Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Create beautiful, responsive user interfaces for our AI and IT solutions.",
      requirements: ["React, TypeScript expertise", "UI/UX design skills", "2+ years frontend experience"]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Learning & Development",
      description: "Continuous learning opportunities, conference attendance, and skill development programs."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and work-life balance initiatives."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Career Growth",
      description: "Clear career paths, mentorship programs, and opportunities for advancement."
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of the future of technology. Join our team of innovators, creators, and problem-solvers.
          </p>
        </div>

        {/* Open Positions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                  <div className="flex items-center text-sm text-gray-300">
                    <MapPin className="w-4 h-4 mr-1" />
                    {position.location}
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Clock className="w-4 h-4 mr-2 text-gray-300" />
                  <span className="text-gray-300">{position.type}</span>
                </div>
                <p className="text-gray-300 mb-4">{position.description}</p>
                <div>
                  <h4 className="text-white font-medium mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-rose-400 rounded-full mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="flex justify-center mb-4 text-rose-400">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See Your Dream Job?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume and let's talk!
          </p>
          <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Send Resume
          </button>
        </section>
      </div>
    </div>
  );
};

export default CareersPage;