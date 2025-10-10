'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, GraduationCap, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  posted: string;
}

const CareersPage: React.FC = () => {
  const jobPositions: JobPosition[] = [
    {
      id: 'ai-engineer',
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Join our AI team to develop cutting-edge machine learning models and AI solutions that transform businesses.',
      requirements: [
        'Master\'s degree in Computer Science, AI, or related field',
        '3+ years experience with Python, TensorFlow, PyTorch',
        'Experience with NLP, computer vision, or deep learning',
        'Strong understanding of ML algorithms and data structures',
        'Experience with cloud platforms (AWS, Azure, GCP)'
      ],
      benefits: [
        'Competitive salary ($120k-$180k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget',
        'Stock options'
      ],
      posted: '2024-01-15'
    },
    {
      id: 'cloud-architect',
      title: 'Cloud Solutions Architect',
      department: 'Infrastructure',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5-7 years',
      description: 'Design and implement scalable cloud solutions for our enterprise clients using modern cloud technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '5+ years experience with cloud platforms (AWS, Azure, GCP)',
        'Experience with Infrastructure as Code (Terraform, CloudFormation)',
        'Strong knowledge of containerization (Docker, Kubernetes)',
        'Experience with CI/CD pipelines and DevOps practices'
      ],
      benefits: [
        'Competitive salary ($130k-$200k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget',
        'Stock options'
      ],
      posted: '2024-01-12'
    },
    {
      id: 'frontend-developer',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Build beautiful, responsive user interfaces for our web applications using modern frontend technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '2+ years experience with React, TypeScript, and modern CSS',
        'Experience with state management (Redux, Zustand)',
        'Knowledge of testing frameworks (Jest, React Testing Library)',
        'Experience with build tools (Vite, Webpack)'
      ],
      benefits: [
        'Competitive salary ($80k-$120k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget',
        'Stock options'
      ],
      posted: '2024-01-10'
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      department: 'Data & Analytics',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Extract insights from complex datasets and build predictive models to drive business decisions.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '3+ years experience with Python, R, and SQL',
        'Experience with machine learning libraries (scikit-learn, pandas)',
        'Strong statistical analysis and data visualization skills',
        'Experience with big data tools (Spark, Hadoop)'
      ],
      benefits: [
        'Competitive salary ($100k-$150k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget',
        'Stock options'
      ],
      posted: '2024-01-08'
    }
  ];

  const companyValues = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to customer service.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication across all departments.'
    },
    {
      icon: Heart,
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies to solve complex problems.'
    },
    {
      icon: Award,
      title: 'Growth',
      description: 'We invest in our team\'s professional development and career advancement opportunities.'
    }
  ];

  const perks = [
    'Competitive salary and equity',
    'Comprehensive health benefits',
    'Flexible work arrangements',
    'Professional development budget',
    'Modern tech stack and tools',
    'Collaborative team environment',
    'Opportunity to work on cutting-edge projects',
    'Regular team events and outings'
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented professionals building the future of AI and IT solutions. Explore career opportunities at Zion Tech Group." />
      </Helmet>   <//Helmet>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">{/* Header */}</div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Be part of a team that's shaping the future of technology. We're looking for passionate individuals who want to make a difference.</p className="text-xl text-gray-300 max-w-3xl mx-auto">
              </p>
            </div>{/* Company Values */}<//div>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{companyValues.map((value, index) => (</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm">{value.description}</p>
                  </div>))} {/* Perks & Benefits */}<//div>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Perks & Benefits</h2>
              <div className="bg-slate-800/50 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{perks.map((perk, index) => (</div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{perk}</span>
                    </div>))}<//div>
                </div>{/* Open Positions */}<//div>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Open Positions</h2>
              <div className="space-y-6">{jobPositions.map((job) => (</div className="space-y-6">
                  <div key={job.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                        <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-400 mb-3">
                          <span className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />{job.department}</Briefcase className="w-4 h-4 mr-1" />
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />{job.location}</MapPin className="w-4 h-4 mr-1" />
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />{job.type}</Clock className="w-4 h-4 mr-1" />
                          </span>
                          <span className="flex items-center">
                            <GraduationCap className="w-4 h-4 mr-1" />{job.experience}</GraduationCap className="w-4 h-4 mr-1" />
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4">{job.description}</p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <span className="text-xs text-gray-400">Posted: {new Date(job.posted).toLocaleDateString()}</span>
                        <Link
                          to={`/careers/${job.id}`}
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center"
                        >Apply Now</Link
                          to={`/careers/${job.id}`}
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center"
                        >
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div> <//div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                        <ul className="space-y-2">{job.requirements.slice(0, 3).map((req, index) => (</ul className="space-y-2">
                            <li key={index} className="flex items-start space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{req} ))}</span>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                        <ul className="space-y-2">{job.benefits.slice(0, 3).map((benefit, index) => (</ul className="space-y-2">
                            <li key={index} className="flex items-start space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{benefit} ))}</span>
                        </ul>
                      </div>))} {/* CTA Section */}<//div>
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Don't See Your Role?</h2 className="text-2xl font-bold text-white mb-4">
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.</p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >Send Your Resume</Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                  </Link>
                  <a
                    href="mailto:careers@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >Email Us</a
                    href="mailto:careers@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                  </a>
                </div>
        </div>
      </main> <//main>
      <Footer />
    </>);<//>
}<//>
export default CareersPage<//>