import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import {
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Star,
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  Award,
  Globe,
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Giant Transforms Operations with AI Workflow Automation',
      company: 'RetailMax Corporation',
      industry: 'E-commerce',
      challenge: 'Manual order processing was taking 24 hours and causing customer complaints',
      solution: 'Implemented AI workflow automation for order processing and inventory management',
      results: [
        'Reduced processing time from 24 hours to 2 minutes',
        'Increased accuracy by 95%',
        'Saved $2.3M annually in operational costs',
        'Improved customer satisfaction by 60%',
      ],
      metrics: {
        timeReduction: '99%',
        costSaving: '$2.3M',
        accuracyImprovement: '95%',
        satisfactionIncrease: '60%',
      },
      featured: true,
    },
    {
      id: 2,
      title: 'Bank Revolutionizes Customer Service with AI Virtual Assistant',
      company: 'First National Bank',
      industry: 'Banking',
      challenge: 'Customer service wait times were averaging 45 minutes during peak hours',
      solution: 'Deployed AI virtual assistant to handle common inquiries and loan applications',
      results: [
        'Reduced wait times from 45 minutes to 2 minutes',
        'Handled 80% of inquiries without human intervention',
        'Increased customer satisfaction by 75%',
        'Reduced customer service costs by 40%',
      ],
      metrics: {
        timeReduction: '95%',
        costSaving: '$1.8M',
        automationRate: '80%',
        satisfactionIncrease: '75%',
      },
      featured: true,
    },
    {
      id: 3,
      title: 'Manufacturing Company Optimizes Production with AI Data Analytics',
      company: 'Precision Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies were causing 15% waste and delayed deliveries',
      solution: 'Implemented AI data analytics for predictive maintenance and production optimization',
      results: [
        'Reduced production waste by 70%',
        'Improved delivery times by 50%',
        'Increased overall equipment effectiveness by 35%',
        'Saved $3.1M annually in operational costs',
      ],
      metrics: {
        wasteReduction: '70%',
        costSaving: '$3.1M',
        deliveryImprovement: '50%',
        oeeIncrease: '35%',
      },
      featured: false,
    },
    {
      id: 4,
      title: 'Healthcare Provider Enhances Patient Care with AI Solutions',
      company: 'Metro Health Systems',
      industry: 'Healthcare',
      challenge: 'Patient intake was taking 30 minutes and causing long wait times',
      solution: 'Deployed AI virtual assistant for patient intake and AI analytics for resource optimization',
      results: [
        'Reduced patient intake time from 30 to 5 minutes',
        'Improved patient satisfaction by 85%',
        'Optimized staff scheduling reducing overtime by 40%',
        'Increased patient throughput by 60%',
      ],
      metrics: {
        timeReduction: '83%',
        satisfactionIncrease: '85%',
        overtimeReduction: '40%',
        throughputIncrease: '60%',
      },
      featured: false,
    },
    {
      id: 5,
      title: 'Tech Startup Scales Customer Support with AI Automation',
      company: 'InnovateTech Solutions',
      industry: 'Technology',
      challenge: 'Growing customer base required scaling support team by 300%',
      solution: 'Implemented AI workflow automation and virtual assistant for customer support',
      results: [
        'Handled 300% more customers with same team size',
        'Reduced response time from 4 hours to 2 minutes',
        'Increased customer retention by 45%',
        'Saved $500K annually in hiring costs',
      ],
      metrics: {
        scalabilityIncrease: '300%',
        costSaving: '$500K',
        responseTimeReduction: '97%',
        retentionIncrease: '45%',
      },
      featured: false,
    },
    {
      id: 6,
      title: 'Financial Services Firm Automates Compliance with AI',
      company: 'SecureFinance Group',
      industry: 'Financial Services',
      challenge: 'Manual compliance processes were taking 40 hours per week and prone to errors',
      solution: 'Deployed AI workflow automation for compliance monitoring and reporting',
      results: [
        'Reduced compliance processing time by 90%',
        'Eliminated compliance errors completely',
        'Saved $800K annually in manual labor costs',
        'Improved audit readiness to 100%',
      ],
      metrics: {
        timeReduction: '90%',
        costSaving: '$800K',
        errorElimination: '100%',
        auditReadiness: '100%',
      },
      featured: false,
    },
  ];

  const featuredCaseStudies = caseStudies.filter(study => study.featured);
  const otherCaseStudies = caseStudies.filter(study => !study.featured);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group Success Stories</title>
        <meta
          name="description"
          content="Discover how Zion Tech Group has helped companies across industries transform their operations with AI solutions. Real results, real impact."
        />
        <meta
          name="keywords"
          content="case studies, success stories, AI automation, business transformation, ROI, customer testimonials"
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Proven Success Stories
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Real results from real companies. Discover how Zion Tech Group has helped businesses 
              across industries transform their operations with AI-powered solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">500+</div>
                <div className="text-sm text-zion-slate-light">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">$50M+</div>
                <div className="text-sm text-zion-slate-light">Client Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">99.9%</div>
                <div className="text-sm text-zion-slate-light">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-sm text-zion-slate-light">Support</div>
              </div>
            </div>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mx-auto w-fit"
            >
              <Target className="w-5 h-5" />
              Start Your Success Story
            </Link>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              These companies achieved remarkable results with our AI solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredCaseStudies.map((study) => (
              <div key={study.id} className="card hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center border border-green-500/30">
                      <TrendingUp className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{study.company}</h3>
                      <p className="text-sm text-zion-slate-light">{study.industry}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-4">{study.title}</h4>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-zion-slate-light mb-2">Challenge:</h5>
                  <p className="text-zion-slate-light">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-zion-slate-light mb-2">Solution:</h5>
                  <p className="text-zion-slate-light">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-zion-slate-light mb-2">Results:</h5>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-500/10 rounded-lg p-4 text-center border border-green-500/20">
                    <div className="text-2xl font-bold text-green-400">{study.metrics.timeReduction}</div>
                    <div className="text-xs text-zion-slate-light">Time Reduction</div>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-4 text-center border border-blue-500/20">
                    <div className="text-2xl font-bold text-blue-400">{study.metrics.costSaving}</div>
                    <div className="text-xs text-zion-slate-light">Annual Savings</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Case Studies */}
        <section className="bg-zion-slate-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                More Success Stories
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Every industry, every challenge, every success story.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherCaseStudies.map((study) => (
                <div key={study.id} className="card hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center border border-blue-500/30">
                        <Zap className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{study.company}</h4>
                        <p className="text-xs text-zion-slate-light">{study.industry}</p>
                      </div>
                    </div>
                  </div>

                  <h5 className="text-lg font-bold text-white mb-3 line-clamp-2">{study.title}</h5>
                  
                  <div className="mb-4">
                    <p className="text-sm text-zion-slate-light line-clamp-2">{study.challenge}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-green-500/10 rounded-lg p-3 text-center border border-green-500/20">
                      <div className="text-lg font-bold text-green-400">{study.metrics.timeReduction}</div>
                      <div className="text-xs text-zion-slate-light">Time Saved</div>
                    </div>
                    <div className="bg-blue-500/10 rounded-lg p-3 text-center border border-blue-500/20">
                      <div className="text-lg font-bold text-blue-400">{study.metrics.costSaving}</div>
                      <div className="text-xs text-zion-slate-light">Saved</div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Transform
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From healthcare to finance, we've helped companies across all sectors achieve remarkable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Healthcare', icon: <Users className="w-8 h-8 text-blue-400" />, projects: '85+' },
              { name: 'Finance', icon: <DollarSign className="w-8 h-8 text-green-400" />, projects: '120+' },
              { name: 'Manufacturing', icon: <Target className="w-8 h-8 text-purple-400" />, projects: '95+' },
              { name: 'E-commerce', icon: <Globe className="w-8 h-8 text-orange-400" />, projects: '110+' },
              { name: 'Technology', icon: <Zap className="w-8 h-8 text-cyan-400" />, projects: '140+' },
              { name: 'Retail', icon: <TrendingUp className="w-8 h-8 text-pink-400" />, projects: '75+' },
              { name: 'Education', icon: <Award className="w-8 h-8 text-yellow-400" />, projects: '60+' },
              { name: 'Real Estate', icon: <CheckCircle className="w-8 h-8 text-indigo-400" />, projects: '45+' },
            ].map((industry, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex justify-center mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-zion-slate-light">{industry.projects} Projects Completed</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-500 to-blue-500 py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already transforming their operations with Zion Tech Group's AI solutions. 
              Let's create your success story together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Target className="w-5 h-5" />
                Start Your Transformation
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;