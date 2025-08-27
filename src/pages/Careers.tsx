import React, { useState } from 'react';
import { Users, MapPin, Clock, Briefcase, GraduationCap, Heart, Zap, Globe, Mail, Phone, MapPinIcon } from 'lucide-react';

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

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name} ({dept.count})
                  </option>
                ))}
              </select>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.location} ({loc.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-zion-slate-light mb-3">
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
                        <Users className="w-4 h-4" />
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-zion-slate-light mb-4">
                      {job.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-medium text-zion-slate-dark mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-sm text-zion-slate-light space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:ml-6 lg:text-right">
                    <button className="bg-zion-cyan text-white px-6 py-2 rounded-lg font-medium hover:bg-zion-cyan/90 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Don't see a position that fits? We're always looking for talented individuals to join our team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{contact.label}</h3>
                <a
                  href={contact.href}
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
