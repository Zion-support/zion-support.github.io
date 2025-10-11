import React from 'react';
import { Star, Users, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, Target, Lightbulb } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
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
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models.',
      requirements: ['Python, TensorFlow, PyTorch', '5+ years ML experience', 'PhD in AI/ML preferred'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Stock options'],
      posted: '2 days ago',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work'],
      posted: '1 week ago',
      featured: false
    },
    {
      id: '3',
      title: 'Frontend Developer',
      department: 'Web Development',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build modern, responsive web applications using React and TypeScript.',
      requirements: ['React, TypeScript, CSS', '3+ years frontend experience', 'UI/UX knowledge'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget'],
      posted: '3 days ago',
      featured: true
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage CI/CD pipelines and infrastructure automation.',
      requirements: ['Docker, Kubernetes, Jenkins', '4+ years DevOps experience', 'Linux expertise'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work'],
      posted: '5 days ago',
      featured: false
    }
  ];

  const companyValues = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of technology and creativity.',
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.',
      icon: <Award className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary results.',
      icon: <Users className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Growth',
      description: 'We invest in our people and their development.',
      icon: <Target className="w-8 h-8 text-purple-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and be part of our innovative AI and IT solutions team. Explore career opportunities and grow with us." />
        <meta name="keywords" content="careers, jobs, AI engineer, IT jobs, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Join Our
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Be part of the future of AI and technology. Join Zion Tech Group and help us build innovative solutions that change the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                View Open Positions
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn About Us
              </button>
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do at Zion Tech Group.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Positions Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find your next opportunity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {jobPositions.map((job) => (
                <div key={job.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${job.featured ? 'ring-2 ring-purple-400' : ''}`}>
                  {job.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-semibold">Featured</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
                    <span className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {job.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Posted {job.posted}</span>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Don't See Your Role?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let's talk about opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Send Resume
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact HR
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CareersPage;