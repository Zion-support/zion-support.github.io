import React from 'react';
import { Helmet } from "react-helmet-async";
import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award } from "lucide-react";
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years experience in AI/ML development",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, GCP, Azure)",
        "Strong problem-solving and communication skills"
      ]
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      description: "Build scalable web applications using modern technologies and best practices.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience in full-stack development",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud deployment and DevOps practices"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "4+ years",
      description: "Design and maintain robust cloud infrastructure and CI/CD pipelines.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years experience in DevOps/Infrastructure",
        "Proficiency in AWS, Docker, Kubernetes",
        "Experience with Terraform, Ansible",
        "Strong knowledge of monitoring and logging tools"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: "Remote Work",
      description: "Flexible remote work options and modern office spaces"
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      title: "Career Growth",
      description: "Professional development opportunities and mentorship programs"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative professionals. Explore career opportunities at Zion Tech Group and help shape the future of technology." />
        <meta name="keywords" content="careers, jobs, employment, tech jobs, AI engineer, developer, remote work" />
      </Helmet>

      <ResponsiveContainer>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Join Our Team
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Be part of a team that's shaping the future of technology. 
                  We're looking for passionate individuals who want to make a difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButton variant="primary" size="lg">
                    View Open Positions
                  </FuturisticButton>
                  <FuturisticButton variant="secondary" size="lg">
                    Learn About Us
                  </FuturisticButton>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Work With Us?
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  We offer competitive benefits and a supportive work environment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <FuturisticCard key={index} className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300">
                      {benefit.description}
                    </p>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Job Openings Section */}
          <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Open Positions
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Explore our current job openings and find your next opportunity.
                </p>
              </div>

              <div className="space-y-8">
                {jobOpenings.map((job, index) => (
                  <FuturisticCard key={index} className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {job.experience}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4">
                          {job.description}
                        </p>
                      </div>
                      <div className="lg:ml-8">
                        <FuturisticButton variant="primary" size="lg" className="group">
                          Apply Now
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </FuturisticButton>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Requirements:
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't See Your Role?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton variant="primary" size="lg" className="group">
                  Send Resume
                  <Mail className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </FuturisticButton>
                <FuturisticButton variant="secondary" size="lg">
                  Contact HR
                </FuturisticButton>
              </div>
            </div>
          </section>
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default CareersPage;
