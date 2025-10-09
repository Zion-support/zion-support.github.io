import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - Zion Tech Group | Join Our Team',
  description: 'Join Zion Tech Group and work on cutting-edge AI and quantum computing solutions. Explore career opportunities in engineering, research, and more.',
  keywords: 'careers, jobs, AI engineer, quantum computing, tech jobs, remote work, Zion Tech Group',
};
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp, 
  Heart,
  Lightbulb,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science, AI, or related field',
        '5+ years experience with Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong background in machine learning and deep learning',
        'Experience with MLOps and model deployment'
      ],
      benefits: [
        'Competitive salary ($120k - $180k)',
        'Stock options',
        'Health, dental, vision insurance',
        '401k with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    },
    {
      title: 'Quantum Computing Specialist',
      department: 'Research & Development',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum computing algorithms and applications for business optimization.',
      requirements: [
        'PhD in Physics, Quantum Computing, or related field',
        '3+ years experience with quantum programming (Qiskit, Cirq)',
        'Strong mathematical background',
        'Experience with quantum algorithms',
        'Publications in quantum computing journals'
      ],
      benefits: [
        'Competitive salary ($100k - $150k)',
        'Research budget',
        'Conference attendance',
        'Health, dental, vision insurance',
        '401k with company matching'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain scalable cloud infrastructure for AI and quantum computing applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with AWS, Azure, or GCP',
        'Experience with Kubernetes, Docker, Terraform',
        'Knowledge of CI/CD pipelines',
        'Experience with monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary ($90k - $140k)',
        'Stock options',
        'Health, dental, vision insurance',
        '401k with company matching',
        'Remote work flexibility'
      ]
    },
    {
      title: 'AI Solutions Architect',
      department: 'Solutions',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement AI solutions for enterprise clients, working closely with sales and engineering teams.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in AI/ML solution design',
        'Experience with enterprise software architecture',
        'Strong communication and presentation skills',
        'Experience with cloud platforms and AI services'
      ],
      benefits: [
        'Competitive salary ($130k - $200k)',
        'Commission structure',
        'Stock options',
        'Health, dental, vision insurance',
        '401k with company matching',
        'Travel opportunities'
      ]
    }
  ];

  const companyValues = [
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI and quantum computing.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our work and relationships.'
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service.'
    },
    {
      icon: <Globe className="h-8 w-8 text-green-500" />,
      title: 'Impact',
      description: 'We create solutions that make a real difference in the world.'
    }
  ];

  return (

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Build the Future of AI and Quantum Computing
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
              At Zion Tech Group, we're not just building technology – we're shaping the future. 
              Join us in creating innovative AI and quantum computing solutions that transform industries.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">50+ Team Members</h3>
                <p className="text-gray-300">Growing team of world-class engineers and researchers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <MapPin className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Remote First</h3>
                <p className="text-gray-300">Work from anywhere with flexible arrangements</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <TrendingUp className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Growth</h3>
                <p className="text-gray-300">Fast-growing company with exciting opportunities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Open Positions
            </h2>
            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{job.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-gray-300 flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-gray-300 flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
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

        {/* Why Work With Us */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Heart className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Great Culture</h3>
                <p className="text-gray-300">
                  Collaborative, inclusive environment where everyone's voice is heard and valued.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Lightbulb className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cutting-Edge Projects</h3>
                <p className="text-gray-300">
                  Work on the latest AI and quantum computing technologies that shape the future.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <TrendingUp className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Career Growth</h3>
                <p className="text-gray-300">
                  Opportunities for professional development, mentorship, and career advancement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Don't see a position that fits? We're always looking for talented individuals. 
              Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:careers@ziontechgroup.com"
                className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Send Resume
              </a>
              <a 
                href="/contact"
                className="border-2 border-cyan-500 text-cyan-500 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
  );
};

export default CareersPage;