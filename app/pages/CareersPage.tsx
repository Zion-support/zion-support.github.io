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
      requirements: [
        "5+ years experience in AI/ML",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms",
        "Strong problem-solving skills"
      ]
    },
    {
      title: "Cloud Solutions Architect",
      location: "New York, NY",
      type: "Full-time",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise clients.",
      requirements: [
        "7+ years cloud architecture experience",
        "AWS/Azure/GCP certifications",
        "Experience with microservices",
        "Strong communication skills"
      ]
    },
    {
      title: "Cybersecurity Specialist",
      location: "Remote",
      type: "Full-time",
      description: "Protect our clients' digital assets with advanced security solutions and threat detection.",
      requirements: [
        "4+ years cybersecurity experience",
        "CISSP or similar certification",
        "Experience with SIEM tools",
        "Knowledge of compliance frameworks"
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Zap,
      title: "Flexible Work",
      description: "Remote work options and flexible schedules"
    },
    {
      icon: Target,
      title: "Career Growth",
      description: "Professional development and advancement opportunities"
    },
    {
      icon: Users,
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of the future of technology. Join our team of innovative AI and IT experts 
            who are shaping the digital landscape.
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                <div className="flex items-center text-gray-300 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  {position.location}
                </div>
                <div className="flex items-center text-gray-300 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {position.type}
                </div>
                <p className="text-gray-300 mb-4">{position.description}</p>
                <ul className="space-y-2 mb-6">
                  {position.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                      {req}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg hover:from-rose-700 hover:to-pink-700 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-rose-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-rose-600/20 to-pink-600/20 rounded-2xl p-12 border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't see a position that fits? We're always looking for talented individuals. 
            Send us your resume and let's talk about opportunities.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg hover:from-rose-700 hover:to-pink-700 transition-all duration-300 font-semibold">
            Send Your Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
