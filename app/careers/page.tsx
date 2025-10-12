import React from 'react';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Users, Briefcase, MapPin, Clock, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Research',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'PhD in Computer Science or related field',
        '5+ years experience in AI/ML',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours', 'Learning budget']
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud architectures for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '7+ years cloud architecture experience',
        'AWS/Azure/GCP certifications preferred',
        'Experience with Kubernetes, Docker',
        'Strong client-facing skills'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours', 'Learning budget']
=======
import { CheckCircle, ArrowRight, Users, MapPin, Clock, Briefcase } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science preferred'],
      link: '/careers/senior-ai-engineer'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain scalable cloud infrastructure and CI/CD pipelines.',
      requirements: ['3+ years DevOps experience', 'AWS/Azure/GCP', 'Docker, Kubernetes'],
      link: '/careers/devops-engineer'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for our AI-powered solutions.',
      requirements: ['5+ years product management', 'AI/ML product experience', 'Strong technical background'],
      link: '/careers/product-manager'
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Help clients understand and implement our AI solutions.',
      requirements: ['3+ years sales engineering', 'Technical background', 'AI/ML knowledge'],
      link: '/careers/sales-engineer'
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
    }
  ];

  const benefits = [
    {
<<<<<<< HEAD
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with performance bonuses and stock options.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Great Team Culture',
      description: 'Work with talented, passionate professionals in a collaborative environment.'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-500" />,
      title: 'Career Growth',
      description: 'Clear career paths with opportunities for advancement and skill development.'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and generous time off policies.'
=======
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: 'Collaborative Culture',
      description: 'Work with talented, passionate people in a supportive environment'
    },
    {
      icon: <Briefcase className="w-6 h-6 text-green-500" />,
      title: 'Career Growth',
      description: 'Opportunities for professional development and advancement'
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-500" />,
      title: 'Flexible Location',
      description: 'Remote work options and flexible schedules'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: 'Work-Life Balance',
      description: 'Generous PTO and wellness programs'
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI and technology. Explore career opportunities and join our innovative team." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, DevOps, product manager, technology careers" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Help us build the future of AI and technology. Join a team of passionate innovators working on cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group and help shape the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, DevOps, product manager, sales engineer, technology careers" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us build the future of AI and technology. Join a team of passionate innovators working on cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
              >
                Learn About Us
              </Link>
            </div>
          </div>
<<<<<<< HEAD

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Don't See Your Role?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Send Your Resume
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn About Our Culture
=======
        </section>

        {/* Job Openings */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">{job.type}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  
                  <p className="text-gray-300 mb-6">{job.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={job.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer competitive benefits and a great work environment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Send Your Resume
                </Link>
                <Link
                  to="/about"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Learn More
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
                </Link>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </main>
=======
        </section>
      </main>
      
      <Footer />
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
    </div>
  );
};

<<<<<<< HEAD
export default CareersPage;
=======
export default CareersPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
