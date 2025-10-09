import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Settings, Database, Network, Cloud, Server, Monitor, BookOpen, Award } from 'lucide-react';

const ITTrainingPage: React.FC = () => {
  const courses = [
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Comprehensive cloud training covering AWS, Azure, and GCP platforms.',
      duration: '40 hours',
      level: 'Beginner to Advanced',
      price: '$1,299'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security fundamentals, threat detection, and incident response training.',
      duration: '32 hours',
      level: 'Intermediate',
      price: '$1,199'
    },
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Database design, optimization, and management across multiple platforms.',
      duration: '24 hours',
      level: 'Intermediate',
      price: '$999'
    },
    {
      icon: Network,
      title: 'Network Administration',
      description: 'Network design, security, and troubleshooting for enterprise environments.',
      duration: '28 hours',
      level: 'Intermediate',
      price: '$899'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Introduction to AI concepts, machine learning algorithms, and implementation.',
      duration: '36 hours',
      level: 'Advanced',
      price: '$1,499'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'DevOps practices, automation, and continuous integration/deployment.',
      duration: '30 hours',
      level: 'Intermediate',
      price: '$1,099'
    }
  ];

  const trainingFormats = [
    {
      icon: Users,
      title: 'In-Person Training',
      description: 'Hands-on training in our state-of-the-art facilities',
      features: ['Interactive sessions', 'Lab exercises', 'Direct instructor access', 'Networking opportunities']
    },
    {
      icon: Monitor,
      title: 'Online Training',
      description: 'Flexible online learning with live instructor support',
      features: ['Live virtual sessions', 'Recorded content', 'Online labs', 'Flexible scheduling']
    },
    {
      icon: BookOpen,
      title: 'Self-Paced Learning',
      description: 'Learn at your own pace with comprehensive course materials',
      features: ['Video tutorials', 'Practice exercises', 'Progress tracking', 'Certification prep']
    }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', provider: 'Amazon Web Services' },
    { name: 'Microsoft Azure Administrator', provider: 'Microsoft' },
    { name: 'CompTIA Security+', provider: 'CompTIA' },
    { name: 'Cisco CCNA', provider: 'Cisco' },
    { name: 'Google Cloud Professional', provider: 'Google Cloud' },
    { name: 'ITIL Foundation', provider: 'AXELOS' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Training - Zion Tech Group</title>
        <meta name="description" content="Professional IT training courses covering cloud computing, cybersecurity, database administration, and more. Expert instructors and certification preparation." />
        <meta name="keywords" content="it training, cloud training, cybersecurity training, database training, network training, ai training, devops training" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            IT Training
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional IT training courses designed to advance your career and enhance your technical skills.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Students Trained</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Pass Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
              <div className="text-gray-300">Courses Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">Expert</div>
              <div className="text-gray-300">Instructors</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=IT Training Inquiry"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get Course Information
            </a>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our Training Courses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <course.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{course.title}</h3>
                <p className="text-gray-300 mb-6">{course.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>Duration:</span>
                    <span className="text-cyan-400">{course.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>Level:</span>
                    <span className="text-cyan-400">{course.level}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>Price:</span>
                    <span className="text-cyan-400 font-bold">{course.price}</span>
                  </div>
                </div>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=${course.title} Training`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Training Formats
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingFormats.map((format, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <format.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{format.title}</h3>
                <p className="text-gray-300 mb-6">{format.description}</p>
                <ul className="space-y-2">
                  {format.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Industry Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <Award className="w-8 h-8 text-cyan-400" />
                  <div>
                    <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                    <p className="text-gray-300 text-sm">{cert.provider}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join our IT training programs and gain the skills you need to succeed in today's technology landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITTrainingPage;