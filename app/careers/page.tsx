
import { Helmet } from "react-helmet-async";
import React from 'react';


const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving skills'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Protect our clients\' digital assets with advanced security solutions.',
      requirements: [
        '3+ years in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with SIEM tools',
        'Knowledge of threat intelligence'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: [
        '4+ years cloud architecture experience',
        'AWS/Azure/GCP certifications preferred',
        'Experience with DevOps practices',
        'Strong communication skills'
      ]
    },
    {
      title: 'Frontend Developer',
      department: 'Development',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Create beautiful and responsive user interfaces for our applications.',
      requirements: [
        '3+ years React/TypeScript experience',
        'Proficiency in modern CSS frameworks',
        'Experience with responsive design',
        'Portfolio of previous work'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Collaborative Environment',
      description: 'Work with talented professionals in a supportive team environment.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest technologies and tools in AI and IT.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Remote Work',
      description: 'Flexible remote work options and work-life balance.'
    },
    {
      icon: <Award className="w-8 h-8 text-red-500" />,
      title: 'Career Growth',
      description: 'Opportunities for professional development and advancement.'
    },
    {
      icon: <Star className="w-8 h-8 text-indigo-500" />,
      title: 'Competitive Benefits',
      description: 'Competitive salary, bonuses, and comprehensive benefits package.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Professional careers services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Careers</h1>
          <p className="text-lg text-gray-300 mb-8">Professional careers services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Go Home
                </a>
                <a "
                  href="/contact" "
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>

          </div>
>>>>>>> origin/main
        </div>
      </div>
    </div>
"
