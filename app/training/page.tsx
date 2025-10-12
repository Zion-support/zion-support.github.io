import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Users, BookOpen, Award, Clock, DollarSign, Star, Target, Globe, Brain, Zap, Shield, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TrainingPage: React.FC = () => {
  const trainingPrograms = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI & Machine Learning',
      description: 'Comprehensive training in artificial intelligence and machine learning technologies.',
      price: '$2,500/course',
      features: ['Hands-on projects', 'Industry experts', 'Certification', 'Job placement support']
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'Cloud Computing',
      description: 'Master cloud platforms and technologies for modern applications.',
      price: '$1,800/course',
      features: ['AWS/Azure/GCP', 'DevOps practices', 'Containerization', 'Microservices']
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Cybersecurity',
      description: 'Advanced cybersecurity training and certification programs.',
      price: '$2,200/course',
      features: ['Ethical hacking', 'Security analysis', 'Compliance', 'Incident response']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Data science and analytics training for business intelligence.',
      price: '$1,900/course',
      features: ['Python/R programming', 'Statistical analysis', 'Visualization', 'Big data tools']
    }
  ];

  const stats = [
    { number: '500+', label: 'Students Trained', icon: <Users className="w-6 h-6 text-blue-400" /> },
    { number: '95%', label: 'Job Placement Rate', icon: <Award className="w-6 h-6 text-green-400" /> },
    { number: '50+', label: 'Industry Experts', icon: <BookOpen className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Learning Support', icon: <Clock className="w-6 h-6 text-orange-400" /> }
  ];

  const learningFormats = [
    { name: 'Online Learning', items: ['Self-paced courses', 'Live sessions', 'Recorded lectures', 'Interactive labs'] },
    { name: 'In-Person Training', items: ['Classroom sessions', 'Hands-on workshops', 'Group projects', 'Networking events'] },
    { name: 'Corporate Training', items: ['Customized programs', 'On-site training', 'Team building', 'Skill assessment'] },
    { name: 'Certification', items: ['Industry certifications', 'Exam preparation', 'Practice tests', 'Career guidance'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Training Programs - Zion Tech Group</title>
        <meta name="description" content="Professional training programs in AI, cloud computing, cybersecurity, and data analytics. Advance your career with expert-led courses and industry certifications." />
        <meta name="keywords" content="training programs, AI training, cloud computing training, cybersecurity training, data analytics training, professional development" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Training
              </span>
              <br />
              <span className="text-white">Programs</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Advance your career with our comprehensive training programs in cutting-edge technologies. 
              Expert-led courses, hands-on projects, and industry certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Training Programs</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive training programs designed by industry experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="mr-4 group-hover:scale-110 transition-transform duration-300">{program.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{program.title}</h3>
                      <p className="text-gray-300 text-sm">{program.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{program.price}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="w-full block text-center py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Formats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Learning Formats</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Flexible learning options to fit your schedule and preferences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningFormats.map((format, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">{format.name}</h3>
                <div className="space-y-2">
                  {format.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-gray-300 text-sm flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Advance Your Career?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join our training programs and gain the skills needed for the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingPage;