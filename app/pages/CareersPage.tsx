import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import { MapPin, Clock, Users, Heart, Zap, Target, ArrowRightIcon } from 'lucide-react';

const CareersPage: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Zap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, conferences, and professional development budget.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in an inclusive and innovative environment.'
    },
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Clear career paths, mentorship programs, and opportunities for advancement.'
    }
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote / Delaware',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.'
    },
    {
      title: 'Full Stack Developer',
      location: 'Remote / Delaware',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Build scalable web applications and microservices using modern technologies.'
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote / Delaware',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Manage cloud infrastructure and implement CI/CD pipelines for our products.'
    },
    {
      title: 'Product Manager',
      location: 'Remote / Delaware',
      type: 'Full-time',
      department: 'Product',
      description: 'Drive product strategy and roadmap for our AI and IT solutions.'
    },
    {
      title: 'UX/UI Designer',
      location: 'Remote / Delaware',
      type: 'Full-time',
      department: 'Design',
      description: 'Create intuitive and engaging user experiences for our digital products.'
    },
    {
      title: 'Sales Engineer',
      location: 'Remote / Delaware',
      type: 'Full-time',
      department: 'Sales',
      description: 'Help clients understand and implement our technology solutions.'
    }
  ];

  return (
    <>
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team of passionate technologists and help shape the future of AI and IT solutions. Explore career opportunities at Zion Tech Group."
        keywords="careers, jobs, AI engineer, software developer, remote work, technology careers"
        url="/careers"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Build the Future of AI and IT Solutions
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              We're looking for passionate, innovative individuals who want to make a real impact 
              in the world of technology. Join us in creating solutions that transform businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#open-positions" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
              >
                View Open Positions
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/contact" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Get In Touch
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career with purpose and growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our current job openings and find your next career opportunity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                  <div className="flex items-center gap-4 text-gray-300 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <div className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm inline-block">
                    {position.department}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <a 
                  href="/contact" 
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Culture
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              At Zion Tech Group, we believe in fostering a culture of innovation, collaboration, 
              and continuous learning. We value diversity, creativity, and the pursuit of excellence 
              in everything we do.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-300">Remote Work</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">Flexible</div>
                <div className="text-gray-300">Work Hours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">Unlimited</div>
                <div className="text-gray-300">Learning Budget</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Join Our Team
              </a>
              <a 
                href="/about" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;