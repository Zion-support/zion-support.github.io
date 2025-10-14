import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award } from "lucide-react";
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

export default function Careers() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: [
        "5+ years of experience in AI/ML",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms",
        "Strong problem-solving skills"
      ]
    },
    {
      title: "Blockchain Developer",
      department: "Blockchain & Web3",
      location: "Remote / New York",
      type: "Full-time",
      description: "Build decentralized applications and smart contracts for various blockchain platforms.",
      requirements: [
        "3+ years of blockchain development",
        "Solidity, Web3.js, React experience",
        "Understanding of DeFi protocols",
        "Security-first mindset"
      ]
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud Infrastructure",
      location: "Remote / Austin",
      type: "Full-time",
      description: "Design and implement scalable cloud solutions for enterprise clients.",
      requirements: [
        "7+ years of cloud architecture experience",
        "AWS, Azure, GCP certifications",
        "Strong communication skills",
        "Experience with DevOps practices"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Seattle",
      type: "Full-time",
      description: "Automate deployment pipelines and manage infrastructure at scale.",
      requirements: [
        "4+ years of DevOps experience",
        "Kubernetes, Docker, CI/CD expertise",
        "Infrastructure as Code",
        "Monitoring and logging experience"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: "Competitive Salary",
      description: "Above-market compensation with performance bonuses"
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
      icon: <Star className="w-6 h-6 text-orange-400" />,
      title: "Learning & Growth",
      description: "Professional development budget and conference attendance"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of experts in AI, blockchain, cloud computing, and technology innovation. Explore career opportunities at Zion Tech Group." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Be part of the future of technology. Join our team of innovators, creators, 
                and problem-solvers who are building tomorrow's solutions today.
              </p>
              <FuturisticButton href="#positions" className="bg-blue-600 hover:bg-blue-700">
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we offer a career with purpose and growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Open Positions Section */}
        <section id="positions" className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find your next career opportunity with us
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <FuturisticCard key={index}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="mr-4">{position.department}</span>
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="mr-4">{position.location}</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                      New
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <FuturisticButton href={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`} className="w-full">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center">
              <FuturisticCard className="bg-gradient-to-r from-blue-600 to-purple-600">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Don't See Your Role?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <FuturisticButton href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                  Send Resume
                  <Mail className="ml-2 w-4 h-4" />
                </FuturisticButton>
              </FuturisticCard>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
}