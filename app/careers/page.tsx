import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, MapPin, Clock, Users, Award, Zap, CheckCircle } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Research',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML',
        'PhD in Computer Science or related field',
        'Experience with TensorFlow, PyTorch',
        'Strong Python programming skills'
      ],
      salary: '$120,000 - $180,000'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Middletown, DE',
      type: 'Full-time',
      description: 'Build and maintain scalable cloud infrastructure and CI/CD pipelines.',
      requirements: [
        '3+ years DevOps experience',
        'AWS/Azure/GCP certification',
        'Docker and Kubernetes expertise',
        'Infrastructure as Code (Terraform)'
      ],
      salary: '$90,000 - $140,000'
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create modern, responsive user interfaces for our AI-powered applications.',
      requirements: [
        '3+ years React/Next.js experience',
        'TypeScript proficiency',
        'UI/UX design skills',
        'Experience with Tailwind CSS'
      ],
      salary: '$80,000 - $120,000'
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      description: 'Analyze complex datasets and build predictive models for business insights.',
      requirements: [
        '4+ years data science experience',
        'Advanced statistics knowledge',
        'Python/R programming',
        'Machine learning expertise'
      ],
      salary: '$100,000 - $150,000'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for AI-powered solutions.',
      requirements: [
        '5+ years product management',
        'AI/ML product experience',
        'Strong analytical skills',
        'Cross-functional leadership'
      ],
      salary: '$110,000 - $160,000'
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      description: 'Protect our systems and data with advanced security measures.',
      requirements: [
        '4+ years cybersecurity experience',
        'CISSP or similar certification',
        'Cloud security expertise',
        'Incident response experience'
      ],
      salary: '$95,000 - $145,000'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Remote Work',
      description: 'Work from anywhere with flexible hours'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Professional Development',
      description: 'Learning budget and conference attendance'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Work-Life Balance',
      description: 'Unlimited PTO and flexible scheduling'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI technology.'
    },
    {
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary results.'
    },
    {
      title: 'Growth',
      description: 'We invest in our people and their professional development.'
    },
    {
      title: 'Impact',
      description: 'We create solutions that make a real difference in the world.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of AI with us. We're looking for passionate individuals 
              who want to make a real impact in the world of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#positions"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                View Open Positions
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Work With Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white/10 rounded-xl">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-8 hover:bg-white/15 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {position.title}
                    </h3>
                    <span className="text-cyan-400 font-semibold">
                      {position.salary}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      {position.type}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 mr-2" />
                      {position.department}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {position.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't See Your Dream Job?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for exceptional talent. Send us your resume 
              and let us know how you can contribute to our mission.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all inline-block"
            >
              Send Your Resume
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareersPage;