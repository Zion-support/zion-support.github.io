import React from 'react';
import { Helmet } from 'react-helmet-async';
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
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience with Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of ML algorithms and deep learning',
        'Experience with MLOps and model deployment'
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
      title: 'Quantum Computing Researcher',
      department: 'Research',
      location: 'San Francisco',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum algorithms and applications for real-world business problems.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        '3+ years experience with quantum computing',
        'Experience with Qiskit, Cirq, or similar frameworks',
        'Strong mathematical background',
        'Published research in quantum computing'
      ],
      benefits: [
        'Research publication support',
        'Conference attendance budget',
        'Cutting-edge lab equipment',
        'Collaboration with top universities',
        'Competitive research salary'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Washington DC',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets with advanced cybersecurity solutions and threat detection.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications: CISSP, CISM, or similar',
        'Experience with SIEM tools and threat hunting',
        'Knowledge of compliance frameworks (SOC2, ISO27001)'
      ],
      benefits: [
        'Security training and certifications',
        'Threat intelligence access',
        'Red team exercises',
        'Competitive salary',
        'Remote work options'
      ],
      posted: '2024-01-08',
      featured: false
    }
  ];

  const companyValues = [
    {
      icon: Star,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with technology'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of diverse teams working together'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'We create solutions that make a real difference in the world'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI and technology. Explore open positions and become part of our innovative team." />
        <meta name="keywords" content="AI jobs, tech careers, software engineering jobs, quantum computing careers, cybersecurity jobs" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us shape the future of AI and technology. Join a team of innovators, researchers, and engineers 
              who are building the next generation of intelligent solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
          <div className="space-y-8">
            {openPositions.map((position) => (
              <div key={position.id} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 ${
                position.featured ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {position.featured && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-semibold">Featured Position</span>
                  </div>
                )}
                
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center space-x-4 text-gray-300">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="w-4 h-4 mr-1" />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="text-gray-400 text-sm">Posted {position.posted}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Zap className="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Join Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a team that's building the future of technology and making a real impact on businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
              <div className="text-white text-lg">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-white text-lg">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
              <div className="text-white text-lg">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;