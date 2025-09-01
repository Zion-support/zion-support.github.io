import React from 'react';
import ModernLayout from '../components/layout/ModernLayout';
import { Users, Zap, Brain, Cloud, Shield, ArrowRight, MapPin, Clock, DollarSign } from 'lucide-react';

export default function CareersPage() {
  const openPositions = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      description: 'Lead the development of cutting-edge AI solutions for enterprise clients.',
      requirements: [
        '5+ years experience in machine learning and AI development',
        'Expertise in Python, TensorFlow, and PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong background in NLP and computer vision'
      ],
      responsibilities: [
        'Design and implement AI/ML solutions',
        'Lead technical architecture decisions',
        'Mentor junior engineers',
        'Collaborate with cross-functional teams'
      ],
      icon: Brain
    },
    {
      id: 'cloud-architect',
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$130,000 - $180,000',
      description: 'Design and implement scalable cloud architectures for enterprise clients.',
      requirements: [
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, and GCP',
        'Experience with Kubernetes and containerization',
        'Strong understanding of security and compliance'
      ],
      responsibilities: [
        'Design cloud-native solutions',
        'Lead migration projects',
        'Optimize cloud costs and performance',
        'Ensure security and compliance'
      ],
      icon: Cloud
    },
    {
      id: 'security-engineer',
      title: 'Cybersecurity Engineer',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$110,000 - $150,000',
      description: 'Implement and maintain enterprise-grade security solutions.',
      requirements: [
        '5+ years experience in cybersecurity',
        'Expertise in Zero Trust architecture',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC2, ISO27001)'
      ],
      responsibilities: [
        'Implement security controls',
        'Conduct security assessments',
        'Respond to security incidents',
        'Develop security policies'
      ],
      icon: Shield
    },
    {
      id: 'full-stack-developer',
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      salary: '$90,000 - $130,000',
      description: 'Build and maintain web applications and microservices.',
      requirements: [
        '3+ years experience in full-stack development',
        'Expertise in React, Node.js, and TypeScript',
        'Experience with cloud platforms and databases',
        'Strong problem-solving skills'
      ],
      responsibilities: [
        'Develop web applications',
        'Write clean, maintainable code',
        'Collaborate with design and product teams',
        'Participate in code reviews'
      ],
      icon: Zap
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and location independence.'
    },
    {
      icon: Zap,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career development programs.'
    },
    {
      icon: Brain,
      title: 'Innovation Focus',
      description: 'Work on cutting-edge technologies and solve complex challenges.'
    },
    {
      icon: Shield,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs.'
    }
  ];

  const values = [
    'Innovation First',
    'Client Success',
    'Continuous Learning',
    'Collaboration',
    'Integrity',
    'Excellence'
  ];

  return (
    <ModernLayout
      title="Careers | Zion Tech Group"
      description="Join our team of technology innovators and help shape the future of digital transformation."
      canonical="https://ziontechgroup.com/careers"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Help us build the future of technology. We're looking for passionate innovators who want to make a real impact.
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Work at Zion Tech Group?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're building a company where innovation meets impact. Our team works on cutting-edge technologies that solve real business problems and transform industries.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe in fostering a culture of continuous learning, collaboration, and excellence. Every team member has the opportunity to grow, contribute, and make a difference.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <div key={value} className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team. Check out our current openings below.
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <position.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                        <p className="text-blue-600 font-medium">{position.department}</p>
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-5 w-5" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="h-5 w-5" />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <DollarSign className="h-5 w-5" />
                      <span>{position.salary}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{position.description}</p>

                  {/* Requirements & Responsibilities */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                            <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                            <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Application</h3>
              <p className="text-gray-600">Send us your resume and cover letter for the position you're interested in.</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Interview</h3>
              <p className="text-gray-600">Showcase your skills through technical discussions and coding challenges.</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Fit</h3>
              <p className="text-gray-600">Meet the team and discuss how you can contribute to our mission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:careers@ziontechgroup.com" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200"
            >
              Send Your Resume
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </ModernLayout>
  );
}