'use client';
import React from 'react';
import { 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Award, 
  Coffee, 
  Home, 
  DollarSign, 
  BookOpen, 
  Shield,
  Lightbulb,
  Target,
  Users2,
  CheckCircle
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CareersPage: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Home,
      title: 'Remote Work',
      description: 'Flexible remote work options and home office stipend.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Market-competitive compensation with performance bonuses.'
    },
    {
      icon: BookOpen,
      title: 'Learning & Development',
      description: 'Access to courses, conferences, and professional development opportunities.'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Regular recognition programs and career advancement opportunities.'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible hours, unlimited PTO, and family-friendly policies.'
    }
  ];

  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: ['Python', 'TensorFlow', 'PyTorch', '5+ years experience']
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Infrastructure',
      type: 'Full-time',
      description: 'Design and implement scalable cloud architectures for enterprise clients.',
      requirements: ['AWS', 'Azure', 'Kubernetes', 'Terraform']
    },
    {
      title: 'Frontend Developer',
      department: 'Product Development',
      type: 'Full-time',
      description: 'Build beautiful, responsive user interfaces for our web applications.',
      requirements: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      type: 'Full-time',
      description: 'Automate deployment pipelines and maintain our cloud infrastructure.',
      requirements: ['Docker', 'CI/CD', 'Monitoring', 'Linux']
    }
  ];

  const cultureValues = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We encourage creative thinking and experimentation.'
    },
    {
      icon: Users2,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our work.'
    }
  ];

  const processSteps = [
    {
      title: 'Apply',
      description: 'Submit your application and resume through our portal.'
    },
    {
      title: 'Initial Review',
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
      <SEOOptimizer
        title="Careers - Zion Tech Group"
        description="Join our team of AI experts, engineers, and innovators. Explore open positions and discover opportunities to grow your career with us."
        keywords="careers, jobs, AI engineer, software developer, tech jobs, remote work, benefits"
      />
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Innovation Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of the future of technology. Work with cutting-edge AI, cloud solutions, and help shape the digital transformation of businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
                Learn About Our Culture
              </button>
            </div>
          </div>

          {/* Why Work With Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-purple-600/20 rounded-lg">
                      <benefit.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {positions.map((position, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                      <p className="text-gray-400">{position.department}</p>
                    </div>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${position.type === 'Full-time' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                      {position.type}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {position.requirements.map((req, reqIndex) => (
                      <span key={reqIndex} className="px-2 py-1 bg-white/10 text-gray-300 text-sm rounded">
                        {req}
                      </span>
                    ))}
                  </div>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Company Culture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cultureValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Team?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't see a position that matches your skills? We're always looking for talented individuals who share our passion for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105">
                Send Us Your Resume
              </button>
              <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;