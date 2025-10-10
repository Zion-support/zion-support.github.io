import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Briefcase, ArrowRight, CheckCircle, Star, Heart, Zap, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
const CareersPage: React.FC = () => {
  const openPositions = [
    {
=======
;
const CareersPage: React.FC = () => {
};
const openPositions = [
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science, AI, or related field',
        '5+ years experience in machine learning and deep learning',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours', 'Professional development budget']
    },
        {
      id: 'full-stack-developer',
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs that power our AI and IT solutions.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with React, Node.js, and TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud services and DevOps practices',
        'Strong attention to detail and code quality'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Remote work options', 'Learning budget']
    },
        {
      id: 'data-scientist',
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Remote / Boston, MA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Analyze complex datasets and develop predictive models to drive business insights and AI solutions.',
      requirements: [
        'PhD or Master\'s degree in Data Science, Statistics, or related field',
        '4+ years experience in data analysis and machine learning',
        'Proficiency in Python, R, SQL, and statistical modeling',
        'Experience with big data tools (Spark, Hadoop)',
        'Strong analytical and communication skills'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible schedule', 'Research opportunities']
    },
        {
      id: 'cybersecurity-specialist',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Washington, DC',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' systems and data with advanced security solutions and threat detection.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity, Computer Science, or related field',
        '4+ years experience in cybersecurity and threat analysis',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with SIEM, EDR, and security frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Security training budget', 'Certification support', 'Flexible work']
    },
        {
      id: 'product-manager',
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and development for our AI and IT solution platforms.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '5+ years experience in product management',
        'Experience with AI/ML products and enterprise software',
        'Strong analytical and strategic thinking skills',
        'Excellent communication and leadership abilities'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Product conference budget', 'Leadership development']
    },
        {
      id: 'sales-engineer',
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Remote / Chicago, IL',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Support sales efforts by demonstrating technical solutions and building client relationships.',
      requirements: [
        'Bachelor\'s degree in Engineering, Computer Science, or related field',
        '3+ years experience in technical sales or sales engineering',
        'Strong technical background in AI/ML or IT solutions',
        'Excellent presentation and communication skills',
        'Ability to travel to client sites (25% travel)'
      ],
      benefits: ['Competitive salary + commission', 'Health insurance', 'Travel budget', 'Sales training', 'Performance bonuses']
    };
  ];
<<<<<<< HEAD
  const benefits = [
    {
=======
;
const benefits = [
[
        {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and mental health support'
    },
        {
      icon: Zap,
      title: 'Learning & Growth',
      description: 'Professional development budget, conference attendance, and skill development programs'
    },
        {
      icon: Shield,
      title: 'Work-Life Balance',
      description: 'Flexible work hours, remote work options, and unlimited PTO'
    },
        {
      icon: Star,
      title: 'Recognition',
      description: 'Performance bonuses, stock options, and recognition programs'
    };
  ];
<<<<<<< HEAD
  const culture = [
=======
;
const culture = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    'Innovation-driven environment where creativity is encouraged',
    'Collaborative team culture with diverse perspectives',
    'Opportunities to work on cutting-edge AI and technology projects',
    'Mentorship programs and career development support',
    'Regular team events and company retreats',
    'Open communication and transparent leadership'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
<<<<<<< HEAD
      {/* Hero Section */}
=======
      {/* Hero Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
            Join Our <span className="text-cyan-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the future of AI and IT solutions. We're looking for passionate individuals who want to make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
            <Link
              to="#open-positions"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Open Positions
  </
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us,
  </
          </div>
        </div>
      </section>
      {/* Why Work With Us */}
=======
            <Link to="#open-positions"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Open Positions
            </Link>
            <Link to="/contact"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      {/* Why Work With Us */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600">
              We offer more than just a job - we offer a career and a community,
  </
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit .icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))};
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Company Culture */}
=======
      {/* Company Culture */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Culture,
  </
              <p className="text-lg text-gray-600 mb-8">
                At Zion Tech Group, we believe that great technology comes from great people. 
                We foster an environment where innovation thrives, collaboration is encouraged, 
                and everyone has the opportunity to grow and succeed.
              </p>
              <ul className="space-y-4">
                {culture.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))};
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Open Positions */}
=======
      {/* Open Positions */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section id="open-positions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
  </
            <p className="text-xl text-gray-600">
              Find your next career opportunity with us,
  </
          </div>
          <div className="space-y-8">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {position.department};
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location};
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type};
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {position.experience};
                        </span>
                      </div>
                    </div>
<<<<<<< HEAD
                    <Link
                      to="/contact"
=======
                    <Link to="/contact"
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                      className="mt-4 md:mt-0 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center">
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  <p className="text-gray-600 mb-6">{position.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {req};
                          </li>
                        ))};
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit};
                          </li>
                        ))};
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))};
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* CTA Section */}
=======
      {/* CTA Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Send Us Your Resume
  </
            <Link
              to="/team"
=======
            <Link to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Send Us Your Resume
            </Link>
            <Link to="/team"
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300">
              Meet Our Team
  </
          </div>
        </div>
      </section>
      <Footer />
    </div>
<<<<<<< HEAD
  ),
}
export default CareersPage;
  </Link>
  </Link>
  </p>
  </h2>
  </h2>
  </p>
  </Link>
  </Link>
=======
  )};
export default CareersPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
