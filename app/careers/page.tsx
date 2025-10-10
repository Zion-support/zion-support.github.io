'use client';
import React from 'react';
import { Users, CheckCircle, Star, Shield, Award, Target, Globe, Brain, Cloud, Code, BarChart, TrendingUp, Phone, Mail, MapPin, Clock, ArrowRight, Zap, Cpu, Database, Lock, Smartphone, Settings, Calendar, FileText, MessageSquare, Star as StarIcon, Award as AwardIcon, Shield as ShieldIcon, Users as UsersIcon, Briefcase, Heart, Home, Building, GraduationCap, Rocket, Sparkles, DollarSign, Coffee, Laptop, Wifi, Gamepad2, Music, Camera, Palette, BookOpen, Calculator, Compass, Navigation as NavIcon, PieChart, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, ChefHat, Sprout, Scale } from 'lucide-react';

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in machine learning and AI',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours', 'Learning budget'],
      icon: Brain
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and microservices for our AI platform.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud technologies'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours', 'Learning budget'],
      icon: Code
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our AI-powered solutions.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '4+ years experience in product management',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Experience with agile development'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours', 'Learning budget'],
      icon: Target
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Seattle, WA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage and scale our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years experience in DevOps/Infrastructure',
        'Experience with Kubernetes, Docker, Terraform',
        'Knowledge of cloud platforms (AWS, GCP, Azure)',
        'Experience with CI/CD pipelines'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours', 'Learning budget'],
      icon: Cloud
    },
    {
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote / Los Angeles, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Design intuitive and engaging user experiences for our AI products.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '3+ years experience in UX/UI design',
        'Proficiency in Figma, Sketch, Adobe Creative Suite',
        'Experience with user research and testing',
        'Portfolio demonstrating AI/ML product design'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours', 'Learning budget'],
      icon: Palette
    },
    {
      title: 'Data Scientist',
      department: 'Research',
      location: 'Remote / Boston, MA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Analyze data and develop insights to improve our AI models and products.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '3+ years experience in data science',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning libraries',
        'Strong statistical and analytical skills'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours', 'Learning budget'],
      icon: BarChart
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with performance bonuses and stock options'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: Home,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO'
    },
    {
      icon: BookOpen,
      title: 'Learning & Development',
      description: 'Annual learning budget and access to conferences and courses'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Unlimited PTO, mental health days, and sabbatical opportunities'
    },
    {
      icon: Rocket,
      title: 'Career Growth',
      description: 'Clear promotion paths and opportunities to work on cutting-edge projects'
    }
  ];

  const culture = [
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with brilliant minds from diverse backgrounds and experiences'
    },
    {
      icon: Brain,
      title: 'Innovation Focus',
      description: 'Push the boundaries of AI and technology with groundbreaking projects'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Make a difference in the world through transformative AI solutions'
    },
    {
      icon: Shield,
      title: 'Inclusive Culture',
      description: 'Diverse, inclusive, and supportive workplace where everyone belongs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Join Our Team
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Build the future of AI with us. We're looking for passionate, innovative minds to join our mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Remote-First</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Competitive Benefits</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Rocket className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Growth Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore exciting career opportunities and find your perfect role
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <position.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                        {position.department}
                      </span>
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">
                        {position.location}
                      </span>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{position.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={`/contact?position=${encodeURIComponent(position.title)}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive benefits and a culture that values innovation, growth, and work-life balance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Culture
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join a team that values collaboration, innovation, and making a positive impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Don't see the perfect role? We're always looking for talented individuals. Send us your resume!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Us
            </a>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
