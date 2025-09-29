import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Award, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap,
  Target,
  Globe,
  Clock,
  DollarSign,
  CheckCircle,
  Star
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "retailmax-ai-automation",
      title: "RetailMax Corporation",
      industry: "E-commerce",
      challenge: "Manual order processing taking 24+ hours, leading to customer complaints and lost sales",
      solution: "AI Workflow Automation Platform",
      results: {
        timeReduction: "99%",
        costSavings: "$2.3M annually",
        customerSatisfaction: "94%",
        processingTime: "2 minutes"
      },
      testimonial: {
        quote: "Zion Tech Group's AI automation transformed our entire operation. What used to take 24 hours now happens in 2 minutes. Our customers are happier, and we've saved millions.",
        author: "Sarah Johnson",
        position: "CEO, RetailMax Corporation",
        rating: 5
      },
      technologies: ["AI Workflow Automation", "Machine Learning", "Process Optimization"],
      timeline: "3 months",
      investment: "$150,000",
      roi: "1,533%"
    },
    {
      id: "first-national-ai-assistant",
      title: "First National Bank",
      industry: "Banking",
      challenge: "Long customer wait times (45+ minutes) for support, leading to poor customer experience",
      solution: "AI Virtual Assistant Platform",
      results: {
        timeReduction: "95%",
        costSavings: "$1.8M annually",
        customerSatisfaction: "97%",
        responseTime: "2 minutes"
      },
      testimonial: {
        quote: "The AI virtual assistant revolutionized our customer service. Wait times dropped from 45 minutes to 2 minutes, and our customer satisfaction scores are the highest they've ever been.",
        author: "Michael Chen",
        position: "CTO, First National Bank",
        rating: 5
      },
      technologies: ["AI Virtual Assistant", "Natural Language Processing", "Customer Service Automation"],
      timeline: "4 months",
      investment: "$200,000",
      roi: "900%"
    },
    {
      id: "precision-manufacturing-analytics",
      title: "Precision Manufacturing",
      industry: "Manufacturing",
      challenge: "High production waste (35%) and unpredictable equipment failures causing costly downtime",
      solution: "AI Data Analytics & Predictive Maintenance",
      results: {
        wasteReduction: "70%",
        costSavings: "$3.2M annually",
        uptime: "99.2%",
        efficiency: "45% improvement"
      },
      testimonial: {
        quote: "Zion's AI analytics platform gave us insights we never had before. We reduced waste by 70% and our equipment runs like clockwork. The ROI was incredible.",
        author: "Emily Rodriguez",
        position: "Operations Director, Precision Manufacturing",
        rating: 5
      },
      technologies: ["AI Data Analytics", "Predictive Maintenance", "IoT Integration"],
      timeline: "5 months",
      investment: "$300,000",
      roi: "1,067%"
    },
    {
      id: "healthtech-patient-management",
      title: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Patient data scattered across systems, leading to delayed diagnoses and treatment errors",
      solution: "AI-Powered Patient Data Analytics Platform",
      results: {
        diagnosisSpeed: "60% faster",
        accuracy: "98.5%",
        costSavings: "$1.5M annually",
        patientOutcomes: "40% improvement"
      },
      testimonial: {
        quote: "The AI platform helped us provide faster, more accurate diagnoses. Our patient outcomes improved dramatically, and we've reduced costs significantly.",
        author: "Dr. James Wilson",
        position: "Chief Medical Officer, MedTech Solutions",
        rating: 5
      },
      technologies: ["AI Data Analytics", "Machine Learning", "Healthcare Integration"],
      timeline: "6 months",
      investment: "$250,000",
      roi: "600%"
    },
    {
      id: "logistics-optimization",
      title: "Global Logistics Inc.",
      industry: "Logistics",
      challenge: "Inefficient route planning and inventory management causing 30% delivery delays",
      solution: "AI-Powered Logistics Optimization System",
      results: {
        deliveryTime: "50% reduction",
        costSavings: "$4.1M annually",
        customerSatisfaction: "96%",
        efficiency: "65% improvement"
      },
      testimonial: {
        quote: "Zion's logistics optimization system transformed our operations. We deliver faster, cheaper, and our customers love the reliability.",
        author: "Robert Kim",
        position: "VP Operations, Global Logistics Inc.",
        rating: 5
      },
      technologies: ["AI Optimization", "Route Planning", "Inventory Management"],
      timeline: "4 months",
      investment: "$180,000",
      roi: "2,278%"
    },
    {
      id: "fintech-fraud-detection",
      title: "SecurePay Financial",
      industry: "FinTech",
      challenge: "Sophisticated fraud schemes causing $2M+ in annual losses",
      solution: "AI-Powered Fraud Detection System",
      results: {
        fraudReduction: "95%",
        costSavings: "$1.9M annually",
        accuracy: "99.7%",
        falsePositives: "80% reduction"
      },
      testimonial: {
        quote: "The AI fraud detection system is incredibly accurate. We've reduced fraud by 95% while minimizing false positives. Our customers feel much safer.",
        author: "Lisa Thompson",
        position: "Chief Security Officer, SecurePay Financial",
        rating: 5
      },
      technologies: ["AI Fraud Detection", "Machine Learning", "Real-time Analytics"],
      timeline: "3 months",
      investment: "$120,000",
      roi: "1,583%"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Success Stories - Zion Tech Group | Real Results from Real Clients</title>
        <meta
          name="description"
          content="Discover how Zion Tech Group has helped companies achieve extraordinary results with AI and IT solutions. Real case studies with measurable ROI and success metrics."
        />
        <meta
          name="keywords"
          content="case studies, success stories, AI results, ROI, business transformation, client testimonials, Zion Tech Group"
        />
        <meta property="og:title" content="Success Stories - Zion Tech Group" />
        <meta property="og:description" content="Real results from real clients. See how we've helped companies achieve extraordinary success." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Proven Results • Real Clients • Measurable ROI
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Success Stories That
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-blue-light bg-clip-text text-transparent">
                  Speak Volumes
                </span>
              </h1>
              
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                Don't just take our word for it. See how we've helped companies across industries 
                achieve extraordinary results with our AI and IT solutions. Real projects, real numbers, real success.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan">500+</div>
                  <div className="text-sm text-zion-slate-light">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan">$50M+</div>
                  <div className="text-sm text-zion-slate-light">Client Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan">99.9%</div>
                  <div className="text-sm text-zion-slate-light">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan">5★</div>
                  <div className="text-sm text-zion-slate-light">Average Rating</div>
                </div>
              </div>

              <Link
                to="/contact"
                className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2"
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each case study represents real client success with measurable business impact. 
                These aren't just numbers—they're transformations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-zion-blue to-zion-purple p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">{study.title}</h3>
                        <p className="text-zion-slate-light">{study.industry}</p>
                      </div>
                      <div className="flex">
                        {[...Array(study.testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Challenge */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-red-500" />
                        Challenge
                      </h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-blue-500" />
                        Solution
                      </h4>
                      <p className="text-gray-600 mb-3">{study.solution}</p>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                        Results
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(study.results).map(([key, value]) => (
                          <div key={key} className="bg-green-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <Clock className="w-6 h-6 text-blue-500 mx-auto mb-1" />
                        <div className="text-sm font-semibold text-gray-900">{study.timeline}</div>
                        <div className="text-xs text-gray-600">Timeline</div>
                      </div>
                      <div className="text-center">
                        <DollarSign className="w-6 h-6 text-green-500 mx-auto mb-1" />
                        <div className="text-sm font-semibold text-gray-900">${study.investment}</div>
                        <div className="text-xs text-gray-600">Investment</div>
                      </div>
                      <div className="text-center">
                        <Award className="w-6 h-6 text-purple-500 mx-auto mb-1" />
                        <div className="text-sm font-semibold text-gray-900">{study.roi}</div>
                        <div className="text-xs text-gray-600">ROI</div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                      <p className="text-gray-700 italic mb-3">"{study.testimonial.quote}"</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center text-white font-bold mr-3">
                          {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                          <div className="text-sm text-gray-600">{study.testimonial.position}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join the companies that have transformed their operations with our AI and IT solutions. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <Target className="w-5 h-5" />
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;