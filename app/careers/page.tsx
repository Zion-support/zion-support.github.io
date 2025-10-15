import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MapPin, Clock, Users, CheckCircle, Heart, DollarSign, Home, GraduationCap, Zap, Shield } from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: "Senior AI Engineer",
      location: "Remote",
      type: "Full-time",
      department: "Engineering",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: ["5+ years AI/ML experience", "Python, TensorFlow, PyTorch", "PhD in Computer Science preferred"],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Learning budget"]
    },
    {
      title: "DevOps Engineer",
      location: "San Francisco, CA",
      type: "Full-time",
      department: "Engineering",
      description: "Build and maintain scalable cloud infrastructure and deployment pipelines.",
      requirements: ["3+ years DevOps experience", "AWS/Azure/GCP", "Docker, Kubernetes", "CI/CD pipelines"],
      benefits: ["Competitive salary", "Health insurance", "Flexible hours", "Stock options"]
    },
    {
      title: "Product Manager",
      location: "New York, NY",
      type: "Full-time",
      department: "Product",
      description: "Drive product strategy and roadmap for our AI-powered solutions.",
      requirements: ["5+ years product management", "AI/ML product experience", "Strong analytical skills", "MBA preferred"],
      benefits: ["Competitive salary", "Health insurance", "Unlimited PTO", "Professional development"]
    }
  ];

  const benefits = [
    { icon: <DollarSign className="w-6 h-6" />, title: "Competitive Salary", description: "Above-market compensation packages" },
    { icon: <Heart className="w-6 h-6" />, title: "Health & Wellness", description: "Comprehensive health insurance and wellness programs" },
    { icon: <Home className="w-6 h-6" />, title: "Remote Work", description: "Flexible remote work options" },
    { icon: <GraduationCap className="w-6 h-6" />, title: "Learning Budget", description: "Annual budget for courses and conferences" },
    { icon: <Zap className="w-6 h-6" />, title: "Cutting-edge Tech", description: "Work with the latest AI and cloud technologies" },
    { icon: <Shield className="w-6 h-6" />, title: "Job Security", description: "Stable company with growth opportunities" }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Join our team of innovative engineers and technologists building the future of AI and cloud solutions."
        />
        <meta 
          name="keywords" 
          content="careers, jobs, AI engineer, DevOps, product manager, tech jobs, remote work"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
                <div className="text-blue-400 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Open Positions</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200">
                      Apply Now
                      <ArrowRight className="w-4 h-4 inline ml-2" />
                    </button>
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
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

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Send Resume
              <ArrowRight className="w-4 h-4 inline ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;
