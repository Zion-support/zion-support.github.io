import React from 'react';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
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
  postedDate: string;
}

const CareersPage: React.FC = () => {
  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'We are looking for a talented Senior Full Stack Developer to join our engineering team.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development opportunities'
      ],
      postedDate: '2024-01-15'
    },
    {
      id: '2',
      title: 'AI/ML Engineer',
      department: 'AI Research',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Join our AI research team to develop cutting-edge machine learning solutions.',
      requirements: [
        'Master\'s degree in AI/ML or related field',
        'Experience with TensorFlow, PyTorch, or similar frameworks',
        'Strong background in deep learning and neural networks',
        'Experience with data preprocessing and model deployment'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development opportunities'
      ],
      postedDate: '2024-01-10'
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Help us build and maintain our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Experience with Docker, Kubernetes, and CI/CD pipelines',
        'Knowledge of cloud platforms (AWS, Azure, or GCP)',
        'Experience with infrastructure as code (Terraform, CloudFormation)',
        'Strong scripting skills (Bash, Python, or similar)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development opportunities'
      ],
      postedDate: '2024-01-05'
    }
  ];

  const companyBenefits = [
    {
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries and equity packages',
      icon: <Star className="w-8 h-8 text-yellow-500" />
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance',
      icon: <CheckCircle className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible schedules',
      icon: <Clock className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Growth Opportunities',
      description: 'Professional development and career advancement',
      icon: <Users className="w-8 h-8 text-purple-500" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and help shape the future of technology." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for talented individuals to join our mission of transforming businesses through technology.
            </p>
          </div>

          {/* Company Benefits */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Work With Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Job Openings */}
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Open Positions
            </h2>
            <div className="space-y-8">
              {jobPositions.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {job.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Don't See a Role That Fits?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Send Resume
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CareersPage;