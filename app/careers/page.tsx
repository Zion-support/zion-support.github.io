'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const PagePage: React.FC = () => {
=======
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

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
  featured: boolean});
}

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
    {
<<<<<<< HEAD
      id: '1',
      title: 'Senior AI Engineer',
=======
      titl,
    e: 'Senior AI Engineer',
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of deep learning algorithms',
        'Previous experience in production AI systems'
      ],
      benefits: [
        'Competitive salary: $120,000 - $180,000',
        'Equity participation',
        'Flexible remote work',
        'Professional development budget'
      ],
      posted: '2 days ago',
      featured: true});
},
    {
      id: '2',
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']});;)
}
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Top-tier equipment and tools',
    'Team building events',
    'Career growth opportunities',
    '401k matching program',
    'Unlimited PTO',
    'Mental health support'
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with technology',
      color: 'text-yellow-400'});;)
},
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary results',
      color: 'text-blue-400'});;)
},
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do',
      color: 'text-green-400'});;)
},
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparency and honesty',
      color: 'text-red-400'});;)
}
  ];

  const culture = [
    {
      stat: '98%',
      label: 'Employee Satisfaction',
      description: 'Our team loves working here'});;)
},
    {
      stat: '50+',
      label: 'Team Members',
      description: 'Growing team of experts'});;)
},
    {
      stat: '15+',
      label: 'Countries',
      description: 'Global remote team'});;)
},
    {
      stat: '4.9/5',
      label: 'Glassdoor Rating',
      description: 'Highly rated workplace'});;)
}
  ];

<<<<<<< HEAD
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Page
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
=======
  return (<div>
        <title>Careers - Zion Tech Group | Join Our Team<
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI and IT solutions. Explore open positions, benefits, and our company culture." 
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, data scientist, DevOps, remote work, tech jobs" 
      <

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">)
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" 
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} 
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
              Join Our Team
            <
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Work on cutting-edge AI and IT solutions that transform businesses worldwide.
            <
          <
        <
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Page Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
=======
        {/* Company Values */}
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
=======
        <section></section>
          <div></div>
            <div></div>
              <h></h>Our Values</h2>
              <p></p>
>>>>>>> main
                These core values guide everything we do and shape our company culture.
              </p>
            </div>

            <div></div>
              {values.map((value, index) => (
                <div></div>
                  <div></div>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h></h>{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Solutions</h3>
                <p className="text-gray-300">Professional Page services with proven results</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock assistance for your business needs</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
                <p className="text-gray-300">Tailored Page solutions for your specific requirements</p>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
        {/* Open Positions */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Open Positions</h2>
              <p></p>
                Explore our current job openings and find the perfect role for you.
              </p>
            </div>

            <div></div>
              {openPositions.map((position) => (
<<<<<<< HEAD
                <div
                  key={position.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    position.featured ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
=======
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions<
            <div className="grid grid-cols-1 m,
    d:grid-cols-2 gap-6 mb-16">
              {openPositions.map((position), index) => (<div
                  key = { index };
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover: border-cyan-400
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3
                >
=======
                <div></div>
>>>>>>> main
                  {position.featured && (
                    <div></div>
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <spa></spa>Featured Position</span>
                    </div>
                  );

<<<<<<< HEAD
                  <div className="flex items-start justify-between mb-4">
                    <div>
<<<<<<< HEAD
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
=======
                  <div></div>
                    <div></div>
                      <h3></h3>
>>>>>>> main
                        {position.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">{position.department}</p>
                    </div>
<<<<<<< HEAD
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
=======
                      <h3 className="text-xl font-bold text-white mb-2 group-hove,
    r:text-cyan-400 transition-colors">
                        {position.title}
                      <
                      <p className="text-gray-300">{position.department}<
                    <
                    <span className="px-3 py-1 bg-cyan-500
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3
=======
                    <span></span>
>>>>>>> main
                      {position.type}
                    <
                  <

<<<<<<< HEAD
                  <p className="text-gray-300 mb-6">{position.description}</p>
=======
                  <p className="text-gray-300 mb-4">{position.description}<
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3

<<<<<<< HEAD
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" 
                      <span>{position.location}<
                    <
                    <div className="flex items-center gap-1">
<<<<<<< HEAD
=======
                  <div></div>
                    <div></div>
                      <MapPin className="w-4 h-4" />
                      <spa></spa>{position.location}</span>
                    </div>
                    <div></div>
>>>>>>> main
                      <Clock className="w-4 h-4" />
                      <spa></spa>{position.experience}</span>
                    </div>
                    <div></div>
                      <Users className="w-4 h-4" />
                      <spa></spa>Posted {position.posted}</span>
                    </div>
                  </div>
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
=======
                      <Clock className="w-4 h-4" 
                      <span>{position.experience}<
                    <
                  <

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Requirements: <
                    <ul className="space-y-1">)
                      {position.requirements.map((req), reqIndex) => (<li key={reqIndex} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" 
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3
                          {req}
                        <)
                      ))}
<<<<<<< HEAD
                      {position.requirements.length > 3 && (
                        <li className="text-sm text-gray-400">
                          +{position.requirements.length - 3} more requirements
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {position.benefits.length} benefits included
                    </div>
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
=======
                </div>
              ))}
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
          </div>
        </section>

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your Page needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
  );
=======
<<<<<<< HEAD
=======
                    <
                  <

                <
              ))}
            <

            <
          <
        <
      <
    <
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3
  );
=======
  ));)
>>>>>>> main
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
};

export default PagePage;
