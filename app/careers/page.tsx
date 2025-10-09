import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Users, Award, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Research',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science, AI, or related field',
        '5+ years experience in machine learning and AI development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Delaware, USA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain our cloud infrastructure and CI/CD pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with cloud platforms',
        'Proficiency in Docker, Kubernetes, Terraform',
        'Experience with CI/CD tools (Jenkins, GitLab CI)',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create beautiful, responsive user interfaces for our AI applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with React, TypeScript',
        'Proficiency in modern CSS frameworks',
        'Experience with state management libraries',
        'Strong UI/UX design sense'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    },
    {
      title: 'Data Scientist',
      department: 'AI Research',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Analyze complex datasets and build predictive models for our clients.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '4+ years experience in data analysis and modeling',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning libraries',
        'Strong statistical and analytical skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    }
  ];

  const companyValues = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.'
    },
    {
      icon: '📈',
      title: 'Growth',
      description: 'We invest in our people\'s professional and personal development.'
    },
    {
      icon: '⚡',
      title: 'Impact',
      description: 'We create solutions that make a real difference in the world.'
    }
  ];

  const whyWorkWithUs = [
    {
      icon: '💼',
      title: 'Meaningful Work',
      description: 'Work on projects that solve real-world problems and make a difference.'
    },
    {
      icon: '🌍',
      title: 'Global Impact',
      description: 'Your work will reach clients and users around the world.'
    },
    {
      icon: '🎓',
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities and career advancement.'
    },
    {
      icon: '⚖️',
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options.'
    },
    {
      icon: '💰',
      title: 'Competitive Benefits',
      description: 'Comprehensive benefits package and equity participation.'
    },
    {
      icon: '🏆',
      title: 'Recognition',
      description: 'Your contributions are valued and recognized.'
    }
  ];

  const cultureValues = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.'
    },
    {
      icon: '🔬',
      title: 'Curiosity',
      description: 'We encourage exploration and continuous learning.'
    },
    {
      icon: '🤝',
      title: 'Respect',
      description: 'We value diverse perspectives and inclusive collaboration.'
    },
    {
      icon: '💡',
      title: 'Creativity',
      description: 'We embrace innovative thinking and creative solutions.'
    }
  ];

  const applicationSteps = [
    {
      title: 'Apply',
      description: 'Submit your application with resume and cover letter.'
    },
    {
      title: 'Review',
      description: 'Our team reviews your application and qualifications.'
    },
    {
      title: 'Interview',
      description: 'Meet with our team for technical and cultural fit interviews.'
    },
    {
      title: 'Decision',
      description: 'We make our decision and extend an offer to successful candidates.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Be part of the future of AI and technology. We're looking for passionate individuals who want to make a real impact.
          </p>
        </section>

        {/* Why Work With Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyWorkWithUs.map((item, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="cyber-card p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{position.title}</h3>
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{position.location}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{position.type}</span>
                </div>
                <p className="text-gray-300 mb-4">{position.description}</p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {position.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}
                  className="cyber-button w-full text-center block"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Company Culture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't see a position that fits? We're always looking for talented individuals. Send us your resume!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@ziontechgroup.com"
              className="cyber-button"
            >
              Send Resume
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;