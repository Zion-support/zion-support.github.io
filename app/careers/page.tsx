import React from 'react';
import { CheckCircle, ArrowRight, Star, Users, Award, MapPin, Clock, Briefcase, Target, Lightbulb } from 'lucide-react';
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
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      posted: '2024-01-15',
      featured: true
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud deployment and DevOps'
      ],
      benefits: [
        'Competitive salary',
        'Health and dental insurance',
        'Remote work flexibility',
        'Learning and development opportunities',
        'Stock options'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of DevOps experience',
        'Proficiency in AWS, Docker, Kubernetes',
        'Experience with CI/CD pipelines',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary and bonuses',
        'Comprehensive health coverage',
        'Flexible PTO policy',
        'Professional development budget',
        '401k with company matching'
      ],
      posted: '2024-01-08',
      featured: true
    }
  ];

  const companyValues = [
    {
      title: 'Innovation',
      description: 'We foster a culture of continuous innovation and creative problem-solving.',
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and cross-functional collaboration.',
      icon: <Users className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service.',
      icon: <Award className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Growth',
      description: 'We provide opportunities for personal and professional growth.',
      icon: <Target className="w-8 h-8 text-green-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group. Explore exciting career opportunities in AI and technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, software developer, tech jobs" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build the future of AI and technology with us. Explore exciting career opportunities 
              and be part of our innovative team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View Open Positions
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
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
                The principles that guide our work and shape our culture.
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
                Discover exciting career opportunities and join our growing team.
              </p>
            </div>
            
            <div className="space-y-8">
              {jobPositions.map((job) => (
                <div key={job.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${job.featured ? 'ring-2 ring-purple-400' : ''}`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        {job.featured && (
                          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-4 text-gray-300">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
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
                          <Star className="w-4 h-4" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{job.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
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
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Don't See the Right Role?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Submit Resume
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