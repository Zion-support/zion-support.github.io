import React, { useState } from 'react';
import { Users, MapPin, Clock, Briefcase, GraduationCap, Heart, Zap, Globe } from 'lucide-react';
export default function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const departments = [
    { id: 'all', name: 'All Departments', count: 25 },
    { id: 'engineering', name: 'Engineering', count: 12 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 6 },
    { id: 'sales', name: 'Sales & Business Development', count: 4 },
    { id: 'marketing', name: 'Marketing', count: 3 },
    { id: 'operations', name: 'Operations', count: 2 }
  ];
  const locations = [
    { id: 'all', name: 'All Locations', count: 25 },
    { id: 'remote', name: 'Remote', count: 15 },
    { id: 'middletown-de', name: 'Middletown, DE', count: 5 },
    { id: 'new-york', name: 'New York, NY', count: 3 },
    { id: 'london', name: 'London, UK', count: 2 }
  ];
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with large language models and NLP',
        'Strong background in machine learning algorithms'
      ]
    },
    {
      id: 2,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Protect our systems and clients with advanced security solutions.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        'Certifications: CISSP, CEH, or similar',
        'Experience with penetration testing and vulnerability assessment',
        'Knowledge of compliance frameworks (SOC2, ISO27001)'
      ]
    },
    {
      id: 3,
      title: 'Cloud Solutions Architect',
      department: 'Infrastructure',
      location: 'Remote / London, UK',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'AWS, Azure, or GCP certifications',
        'Experience with Kubernetes and Docker',
        'Strong understanding of microservices architecture'
      ]
    },
    {
      id: 4,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Toronto, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Drive product strategy and development for our technology solutions.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        'Experience in B2B SaaS product management',
        'Strong analytical and communication skills',
        'Background in technology or consulting preferred'
      ]
    }
  ];
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and mental health support'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Learning & Growth',
      description: 'Professional development budget, conferences, and certification programs'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation Time',
      description: '20% time for personal projects and innovation initiatives'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Team',
      description: 'Work with talented professionals from around the world'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Events',
      description: 'Regular team building, hackathons, and social events'
    }
  ];
  const values = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technology to solve complex problems.'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client service.'
    },
    {
      title: 'Collaboration',
      description: 'We believe the best solutions come from diverse teams working together.'
    },
    {
      title: 'Impact',
      description: 'We focus on creating meaningful solutions that make a real difference.'
    }
  ];
  const contactInfo = [
    { icon: Mail, label: "Email", value: "careers@ziontechgroup.com", href: "mailto:careers@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPinIcon, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" }
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Build the future of technology with a team that values innovation, excellence, and impact
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#open-positions"
              className="bg-zion-cyan text-white px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors"
            >
              View Open Positions
            </a>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Recruiting
            </a>
          </div>
        </div>
      </section>
      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Why Work at Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We're building the future of technology, and we need brilliant minds to join us on this journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-zion-cyan">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-zion-slate-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate-light">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Values */}
      <section className="py-20 bg-zion-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Our Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              These core principles guide everything we do and shape our company culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-zion-slate-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Open Positions */}
      <section id="open-positions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Ready to make an impact? Explore our current opportunities and find your perfect role
            </p>
          </div>
          <div className="space-y-6">
            {jobOpenings.map((position) => (
              <div key={position.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-zion-slate-light">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {position.experience}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <a
                      href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}
                      className="inline-flex items-center px-6 py-2 bg-zion-cyan text-white rounded-lg font-medium hover:bg-zion-cyan/90 transition-colors"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-4">
                  {position.description}
                </p>
                <div>
                  <h4 className="font-medium text-zion-slate-dark mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-zion-slate-light space-y-1">
                    {position.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-zion-slate-light mb-4">
              Don't see a position that fits? We're always looking for talented individuals
            </p>
            <a
              href="mailto:careers@ziontechgroup.com?subject=General Application"
              className="inline-flex items-center px-8 py-3 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors"
            >
              Send General Application
            </a>
          </div>
        </div>
      </section>
      {/* Application Process */}
      <section className="py-20 bg-zion-slate-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Our Application Process
            </h2>
            <p className="text-xl text-zion-slate-light">
              Simple, transparent, and designed to find the best fit for both you and our team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-zion-cyan text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-zion-slate-dark mb-2">
                Application Review
              </h3>
              <p className="text-zion-slate-light">
                Our team reviews your application and portfolio within 48 hours
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-zion-cyan text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-zion-slate-dark mb-2">
                Initial Interview
              </h3>
              <p className="text-zion-slate-light">
                A 30-minute conversation to discuss your background and our opportunities
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-zion-cyan text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-zion-slate-dark mb-2">
                Technical Assessment
              </h3>
              <p className="text-zion-slate-light">
                Skills-based evaluation relevant to the role you're applying for
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-zion-cyan text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-zion-slate-dark mb-2">
                Final Interview
              </h3>
              <p className="text-zion-slate-light">
                Meet the team and discuss how you can contribute to our mission
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's build the future of technology together. Start your journey with Zion Tech Group today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#open-positions"
              className="inline-flex items-center px-8 py-4 bg-white text-zion-purple rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              View Positions
            </a>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
            >
              <Users className="w-5 h-5 mr-2" />
              Contact Recruiting
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
