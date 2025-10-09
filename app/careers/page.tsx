import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Users, Award, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, MapPin, Clock, CheckCircle } from 'lucide-react';

const CareersPage: React.FC = () => {
  const positions = [
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
    {
      title: 'Senior AI Engineer',
      department: 'AI Research',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'PhD in Computer Science or related field',
        '5+ years experience in AI/ML',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ]
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud platforms and DevOps practices'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ]
    },
    {
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Analyze complex data sets and develop predictive models for business insights.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '4+ years experience in data science',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning frameworks',
        'Strong analytical and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Manage cloud infrastructure and implement CI/CD pipelines for scalable systems.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in DevOps',
        'Experience with AWS, Azure, or GCP',
        'Knowledge of Docker, Kubernetes, Terraform',
        'Experience with monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Careers</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our team of innovative thinkers and help shape the future of AI and technology.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <Users className="w-4 h-4 mr-2" />
                    {position.department}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    {position.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    {position.type} • {position.experience}
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{position.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {position.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
<<<<<<< HEAD
        </div>
      </section>
=======
        </section>
      </main>
      
      <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
    </div>
  );
};

<<<<<<< HEAD
export default CareersPage;
=======
export default CareersPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
