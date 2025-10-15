import React from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Clock, Users, Heart, Zap, Target } from "lucide-react";

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: "Senior AI Engineer",
      location: "Remote",
      type: "Full-time",
      department: "AI Solutions",
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
      department: "Cloud Infrastructure",
      description: "Design and implement scalable cloud solutions for enterprise clients.",
      requirements: [
        "7+ years cloud architecture experience",
        "AWS, Azure, or GCP certifications",
        "Experience with DevOps practices",
        "Strong communication skills"
      ]
    },
    {
      title: "Cybersecurity Specialist",
      location: "Remote",
      type: "Full-time",
      department: "Security",
      description: "Protect our clients' digital assets with advanced security solutions.",
      requirements: [
        "4+ years cybersecurity experience",
        "Security certifications (CISSP, CISM)",
        "Experience with security tools",
        "Knowledge of compliance frameworks"
      ]
    },
    {
      title: "Frontend Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      department: "Engineering",
      description: "Build beautiful and responsive user interfaces for our applications.",
      requirements: [
        "3+ years React/TypeScript experience",
        "Experience with modern CSS frameworks",
        "Knowledge of web performance optimization",
        "Strong design sense"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Learning & Development",
      description: "Continuous learning opportunities, conference attendance, and skill development programs."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive and inclusive environment."
    },
    {
      icon: <Target className="w-8 h-8" />,
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
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the future of technology. Join our team of innovative professionals 
            who are shaping the world with AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">
              View Open Positions
            </button>
            <button className="px-8 py-3 border border-rose-600 text-rose-400 rounded-lg hover:bg-rose-600 hover:text-white transition-colors">
              Learn About Our Culture
            </button>
          </div>
        </div>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Open Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {position.title}
                  </h3>
                  <span className="text-rose-400 text-sm font-medium">
                    {position.type}
                  </span>
                </div>
                <div className="flex items-center text-gray-300 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  {position.location}
                </div>
                <div className="text-gray-400 text-sm mb-4">
                  {position.department}
                </div>
                <p className="text-gray-300 mb-4">
                  {position.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-rose-400 mb-4 flex justify-center">
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
        </section>

        {/* Culture Section */}
        <section className="bg-white/5 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Our Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Collaborative
              </h3>
              <p className="text-gray-300">
                We believe in the power of teamwork and collaboration to achieve great things.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Innovative
              </h3>
              <p className="text-gray-300">
                We encourage creativity and innovation in everything we do.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Results-Driven
              </h3>
              <p className="text-gray-300">
                We focus on delivering exceptional results for our clients and team.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't see a position that matches your skills? We're always looking for talented individuals.
          </p>
          <button className="px-8 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">
            Send Us Your Resume
          </button>
        </section>
      </div>
    </div>
  );
};

export default CareersPage;