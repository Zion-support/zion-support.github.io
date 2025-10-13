import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, MapPin, Clock, Briefcase, Star, CheckCircle } from 'lucide-react';
import { Link } from "react-router-dom";
export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI Solutions",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models for our clients.",
      requirements: [
        "Master's degree in Computer Science, AI, or related field",
        "5+ years experience in machine learning and AI development",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Build scalable web applications and microservices using modern technologies.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience with React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud services and DevOps practices",
        "Strong collaboration and code review skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ],
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect our clients' systems and data with advanced security solutions and monitoring.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "4+ years experience in cybersecurity",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC 2, ISO 27001)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ],
      featured: false
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Design and maintain our cloud infrastructure and CI/CD pipelines.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience with AWS, Azure, or GCP",
        "Experience with Docker, Kubernetes, Terraform",
        "Knowledge of monitoring and logging tools",
        "Strong automation and scripting skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ],
      featured: false
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "AI Solutions",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Extract insights from complex data sets and build predictive models for our clients.",
      requirements: [
        "Master's degree in Data Science, Statistics, or related field",
        "3+ years experience in data analysis and machine learning",
        "Proficiency in Python, R, SQL",
        "Experience with data visualization tools",
        "Strong statistical and analytical skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ],
      featured: false
    },
    {
      id: 6,
      title: "Technical Sales Engineer",
      department: "Sales",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "2+ years",
      description: "Help clients understand our technology solutions and drive business growth.",
      requirements: [
        "Bachelor's degree in Engineering or related field",
        "2+ years experience in technical sales or consulting",
        "Strong technical and communication skills",
        "Experience with CRM systems",
        "Ability to travel as needed"
      ],
      benefits: [
        "Competitive salary and commission",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401(k) with company matching"
      ],
      featured: false
    }
  ];

  const companyValues = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication to achieve great results."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies to solve complex problems."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in everything we do and build trust with our clients."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Impact",
      description: "We're committed to making a positive difference in the world through technology."
    }
  ];

  const perks = [
    "Competitive salary and equity packages",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote options",
    "Professional development and learning budget",
    "401(k) with company matching",
    "Unlimited PTO and paid holidays",
    "Modern office space with latest technology",
    "Team building events and company retreats",
    "Mentorship and career growth opportunities",
    "Stock options and performance bonuses"
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta
          name="description"
          content="Join the Zion Tech Group team and help build the future of AI and technology. Explore open positions, benefits, and our company culture."
        />
        <meta
          name="keywords"
          content="careers, jobs, AI engineer, software developer, cybersecurity, data scientist, remote work, technology careers"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Join Our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Team
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Help us build the future of AI and technology. Join a team of passionate innovators 
              who are transforming businesses and creating meaningful impact through cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#open-positions"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                View Open Positions
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
