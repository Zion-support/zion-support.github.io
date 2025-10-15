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
      requirements: ["AWS/Azure/GCP certification", "Kubernetes expertise", "3+ years cloud architecture"]
    },
    {
      title: "Cybersecurity Specialist",
      location: "Remote",
      type: "Full-time",
      description: "Protect our clients' digital assets with advanced security solutions and threat detection.",
      requirements: ["CISSP certification", "Penetration testing experience", "Security incident response"]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Flexible Work",
      description: "Remote work options and flexible schedules"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Career Growth",
      description: "Professional development and advancement opportunities"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Great Team",
      description: "Work with talented and passionate professionals"
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
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the future of technology. Join our team of innovative AI and IT experts 
            who are shaping the digital landscape.
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Open Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {position.title}
                </h3>
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="mr-4">{position.location}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{position.type}</span>
                </div>
                <p className="text-gray-300 mb-4">
                  {position.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                  <ul className="text-gray-300 space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Don't See Your Dream Job?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and 
            let us know how you can contribute to our team.
          </p>
          <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300">
            Send Your Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;