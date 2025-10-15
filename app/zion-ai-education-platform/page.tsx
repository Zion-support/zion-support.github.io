import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Brain, 
  Zap,
  BarChart3,
  Settings,
  Globe,
  Smartphone,
  Database,
  FileText,
  Mail,
  Phone,
  MapPin,
  Eye,
  AlertTriangle,
  Lock,
  Activity,
  Video,
  Headphones
} from 'lucide-react';

const ZionAIEducationPlatformPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Learning Paths',
      description: 'Personalized learning experiences with AI that adapts to each student\'s pace, learning style, and knowledge gaps for optimal educational outcomes.',
      icon: <Brain className="w-8 h-8" />,
      benefits: ['Personalized curriculum', 'Adaptive learning', 'Progress tracking', 'Skill assessment']
    },
    {
      title: 'Virtual Classroom Management',
      description: 'Comprehensive virtual classroom tools with video conferencing, interactive whiteboards, breakout rooms, and real-time collaboration features.',
      icon: <Video className="w-8 h-8" />,
      benefits: ['Video conferencing', 'Interactive whiteboards', 'Breakout rooms', 'Real-time collaboration']
    },
    {
      title: 'Automated Assessment & Grading',
      description: 'AI-powered assessment tools that automatically grade assignments, provide feedback, and generate detailed performance analytics for educators.',
      icon: <Award className="w-8 h-8" />,
      benefits: ['Auto grading', 'Instant feedback', 'Performance analytics', 'Plagiarism detection']
    },
    {
      title: 'Content Creation & Curation',
      description: 'AI-assisted content creation tools that generate educational materials, quizzes, and interactive content tailored to specific learning objectives.',
      icon: <BookOpen className="w-8 h-8" />,
      benefits: ['Content generation', 'Quiz creation', 'Interactive materials', 'Multi-format support']
    }
  ];

  const subjects = [
    { name: 'Mathematics', icon: <BarChart3 className="w-6 h-6" />, color: 'text-blue-400' },
    { name: 'Science', icon: <Activity className="w-6 h-6" />, color: 'text-green-400' },
    { name: 'Language Arts', icon: <BookOpen className="w-6 h-6" />, color: 'text-purple-400' },
    { name: 'History', icon: <Globe className="w-6 h-6" />, color: 'text-yellow-400' },
    { name: 'Computer Science', icon: <Settings className="w-6 h-6" />, color: 'text-cyan-400' },
    { name: 'Art & Design', icon: <Eye className="w-6 h-6" />, color: 'text-pink-400' },
    { name: 'Music', icon: <Headphones className="w-6 h-6" />, color: 'text-orange-400' },
    { name: 'Physical Education', icon: <Activity className="w-6 h-6" />, color: 'text-red-400' }
  ];

  const pricingPlans = [
    {
      name: 'Educator',
      price: '$49/month',
      description: 'Perfect for individual teachers',
      features: [
        'Basic AI learning paths',
        'Virtual classroom tools',
        'Auto assessment',
        'Content creation',
        'Email support',
        'Up to 50 students'
      ],
      popular: false,
      marketPrice: '$149/month',
      savings: '67%'
    },
    {
      name: 'School',
      price: '$199/month',
      description: 'Ideal for schools and districts',
      features: [
        'Advanced AI features',
        'Multi-classroom management',
        'Advanced analytics',
        'Custom content creation',
        'Priority support',
        'Up to 500 students',
        'API integration'
      ],
      popular: true,
      marketPrice: '$599/month',
      savings: '67%'
    },
    {
      name: 'Enterprise',
      price: '$499/month',
      description: 'For universities and large institutions',
      features: [
        'Full AI suite',
        'Custom integrations',
        'White-label options',
        'Advanced reporting',
        'Dedicated support',
        'Unlimited students',
        'Custom features'
      ],
      popular: false,
      marketPrice: '$1499/month',
      savings: '67%'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      company: 'Metro University',
      role: 'Professor of Computer Science',
      content: 'Zion AI Education Platform has revolutionized our online learning experience. The AI-powered personalization has significantly improved student engagement and outcomes.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Lincoln High School',
      role: 'Mathematics Teacher',
      content: 'The automated grading and assessment features have saved me hours of work. The AI feedback is incredibly detailed and helpful for students.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Elementary School District',
      role: 'Curriculum Director',
      content: 'The content creation tools are amazing. We can generate high-quality educational materials in minutes instead of hours.',
      rating: 5
    }
  ];

  const stats = [
    { number: '95%', label: 'Student Engagement', icon: <Users className="w-6 h-6" /> },
    { number: '40%', label: 'Learning Improvement', icon: <Award className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Students', icon: <GraduationCap className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Support', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Education Platform - Advanced Learning Technology | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered education platform with personalized learning, virtual classrooms, and automated assessment. Transform education with cutting-edge AI technology." />
        <meta name="keywords" content="AI education, online learning, virtual classroom, educational technology, personalized learning, automated assessment, e-learning platform" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-education-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-grid-enhanced quantum-dots">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 neon-border">
              <GraduationCap className="w-5 h-5 text-blue-400 mr-2 animate-pulse" />
              <span className="text-blue-400 text-sm font-medium">#1 AI Education Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight holographic-text">
              Zion AI Education Platform
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered education platform that transforms learning with 
              <span className="text-blue-400 font-semibold"> personalized paths, virtual classrooms, and automated assessment for 95% better student engagement.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300 group hover:scale-105"
              >
                View Education Demo
                <GraduationCap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group data-stream">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subject Areas */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Subject Areas Supported
              </h2>
              <p className="text-xl text-gray-300">
                AI-powered learning across all major academic subjects
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 text-center"
                >
                  <div className={`${subject.color} mb-2 group-hover:scale-110 transition-transform flex justify-center`}>
                    {subject.icon}
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors">
                    {subject.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Education Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive AI-powered tools for personalized learning, virtual classrooms, and educational management
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Education Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options for educators, schools, and institutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 ${
                    plan.popular 
                      ? 'border-blue-500/50 ring-2 ring-blue-500/20' 
                      : 'border-white/20 hover:border-blue-500/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="text-center mb-6">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center justify-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-400 line-through">{plan.marketPrice}</span>
                    </div>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      Save {plan.savings}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'border border-blue-500 text-blue-400 hover:bg-blue-500/10'
                    }`}
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Educators Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what teachers and administrators say about our AI education platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Education with AI
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of educators using AI to create personalized, engaging, and effective learning experiences.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-blue-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-blue-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-blue-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300 group hover:scale-105"
              >
                View Education Demo
                <GraduationCap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIEducationPlatformPage;