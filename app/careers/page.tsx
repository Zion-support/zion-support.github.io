import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Star, Users, Award, MapPin, Clock, Briefcase, Target, Lightbulb } from 'lucide-react';

=======
import { Star, Users, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, Target, Lightbulb } from 'lucide-react';

=======
=======
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
import { Star, Users, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, Target, Lightbulb } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

<<<<<<< HEAD
=======
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
  featured: boolean;
}

<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
const CareersPage: React.FC = () => {
  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
<<<<<<< HEAD
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
<<<<<<< HEAD
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: ['Python, TensorFlow, PyTorch', '5+ years ML experience', 'PhD in Computer Science'],
      benefits: ['Competitive salary', 'Health insurance', 'Stock options', 'Remote work'],
=======
      description: 'Lead development of cutting-edge AI solutions and machine learning models.',
      requirements: ['Python, TensorFlow, PyTorch', '5+ years ML experience', 'PhD in AI/ML preferred'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Stock options'],
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
      posted: '2 days ago',
=======
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible remote work',
        'Professional development budget'
      ],
      posted: '2024-01-15',
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
      featured: true
    },
    {
      id: '2',
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Cloud Architect',
=======
      title: 'Cloud Solutions Architect',
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
<<<<<<< HEAD
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work'],
=======
      requirements: ['AWS/Azure/GCP certified', 'Kubernetes expertise', '7+ years cloud experience'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Stock options'],
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
      posted: '1 week ago',
=======
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud services and DevOps practices'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible remote work',
        'Professional development budget'
      ],
      posted: '2024-01-10',
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
      featured: false
    },
    {
      id: '3',
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Frontend Developer',
      department: 'Web Development',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build modern, responsive web applications using React and TypeScript.',
      requirements: ['React, TypeScript, CSS', '3+ years frontend experience', 'UI/UX knowledge'],
      benefits: ['Flexible hours', 'Learning budget', 'Health insurance'],
=======
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients from cyber threats and implement security best practices.',
      requirements: ['CISSP/CISM certified', '4+ years security experience', 'Penetration testing skills'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Stock options'],
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
      posted: '3 days ago',
      featured: true
    }
  ];

<<<<<<< HEAD
  const companyValues = [
    {
      title: 'Innovation',
      description: 'We foster a culture of continuous innovation and creative problem-solving.',
      icon: Lightbulb
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and cross-functional collaboration.',
      icon: Users
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service.',
      icon: Award
    },
    {
      title: 'Growth',
      description: 'We invest in our team members\' professional and personal growth.',
      icon: Target

=======
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of DevOps experience',
        'Proficiency in AWS, Docker, Kubernetes',
        'Experience with CI/CD pipelines',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible remote work',
        'Professional development budget'
      ],
      posted: '2024-01-08',
      featured: false
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible remote work options',
    'Professional development budget',
    'Unlimited vacation policy',
    'Latest technology and tools',
    'Team building events',
    'Mentorship programs',
    'Career growth opportunities',
    'Work-life balance support'
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies.',
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication.',
      icon: <Users className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.',
      icon: <Award className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Growth',
      description: 'We invest in our people and their professional development.',
      icon: <Target className="w-8 h-8 text-green-400" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
    }
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
<title>Careers | Zion Tech Group</title>
=======
<title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and be part of our innovative AI and IT solutions team. Explore career opportunities and grow with us." />
        <meta name="keywords" content="careers, jobs, AI engineer, IT jobs, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Join Our
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Be part of the future of AI and technology. Join Zion Tech Group and help us build innovative solutions that change the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                View Open Positions
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
=======
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and build the future of AI and IT solutions. Explore career opportunities with us." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, frontend developer, Zion Tech Group" />
=======
  return (
    <>
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of experts in AI, cloud computing, and cybersecurity. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, tech jobs" />
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and build the future of AI and IT solutions. Explore career opportunities and join our innovative team." />
        <meta name="keywords" content="careers, jobs, AI engineer, software developer, Zion Tech Group" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Join Our
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
<<<<<<< HEAD
              Build the future of technology with us. Join our team of experts in AI, cloud computing, and cybersecurity.
=======
              Build the future of AI and IT solutions with Zion Tech Group. Join our innovative team and make a difference.
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                View Open Positions
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
                Learn About Us
              </button>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
        </section>
=======
</section>

<<<<<<< HEAD

        {/* Why Work With Us Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
<<<<<<< HEAD
<h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                What drives us and makes Zion Tech Group a great place to work.
=======
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer a dynamic work environment with opportunities for growth and innovation.
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our work and define our culture.
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
<<<<<<< HEAD
<<<<<<< HEAD
              {companyValues.map((value, index) => (
<div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                  <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
=======
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">
                    {value.icon}
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
=======
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">Work on cutting-edge projects that shape the future of technology.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Team</h3>
                <p className="text-gray-300">Collaborate with talented professionals from diverse backgrounds.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Flexibility</h3>
                <p className="text-gray-300">Enjoy flexible work arrangements and work-life balance.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Growth</h3>
                <p className="text-gray-300">Continuous learning opportunities and career development.</p>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Job Openings Section */}
=======
        {/* Benefits Section */}
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
<<<<<<< HEAD
                Open Positions
=======
                Benefits & Perks
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive benefits to support our team members.
              </p>
            </div>
            
<<<<<<< HEAD
            <div className="space-y-8">
              {jobPositions.map((job) => (
<<<<<<< HEAD
                <div key={job.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${job.featured ? 'ring-2 ring-blue-400' : ''}`}>
                  {job.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-semibold">Featured</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
                    <span className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {job.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Posted {job.posted}</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                      Apply Now
                    </button>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
=======
        {/* Job Openings Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find your next opportunity.
              </p>
            </div>
            
            <div className="space-y-8">
              {jobPositions.map((job) => (
                <div key={job.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${job.featured ? 'ring-2 ring-blue-400' : ''}`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        {job.featured && (
                          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <Star className="w-4 h-4 mr-2" />
                          {job.experience}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                        Apply Now
                      </button>
                      <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
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

>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
        {/* CTA Section */}
=======
{/* CTA Section */}

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
<<<<<<< HEAD
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
<h2 className="text-4xl font-bold text-white mb-4">Ready to Join Our Team?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
=======
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Us?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't see a position that fits? We're always looking for talented individuals to join our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
                  Send Your Resume
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
=======
                <div key={job.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-semibold text-white">{job.title}</h3>
                        {job.featured && (
                          <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-gray-400 mb-4">
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
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{job.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-sm text-gray-400">
                    Posted {job.posted}
                  </div>
                </div>
              ))}
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
          </div>
        </section>
<<<<<<< HEAD

=======
        
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
        <Footer />
      </div>
=======
const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and build the future of technology." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Careers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team and build the future of technology.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">Career opportunities coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CareersPage;
