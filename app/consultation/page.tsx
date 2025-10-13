import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle,
  Brain,
  Shield,
  Cloud,
  Zap,
  Globe,
  Mail,
  Phone,
  MapPin,
  Star,
  Award
} from 'lucide-react';

export default function Consultation() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');

  const consultationTypes = [
    {
      title: "AI Strategy Consultation",
      description: "Develop a comprehensive AI strategy for your business",
      duration: "2-4 hours",
      price: "$500/hour",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI readiness assessment",
        "Technology roadmap development",
        "ROI analysis and projections",
        "Implementation timeline",
        "Risk assessment and mitigation"
      ]
    },
    {
      title: "Cybersecurity Audit",
      description: "Comprehensive security assessment and recommendations",
      duration: "1-2 days",
      price: "$800/day",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-orange-500",
      features: [
        "Security vulnerability assessment",
        "Compliance review",
        "Penetration testing",
        "Security policy development",
        "Incident response planning"
      ]
    },
    {
      title: "Cloud Migration Planning",
      description: "Strategic planning for cloud infrastructure migration",
      duration: "1-3 days",
      price: "$700/day",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Current infrastructure analysis",
        "Cloud platform selection",
        "Migration strategy development",
        "Cost optimization planning",
        "Security and compliance review"
      ]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategy",
      duration: "3-5 days",
      price: "$1,000/day",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Business process analysis",
        "Technology stack evaluation",
        "Change management planning",
        "Implementation roadmap",
        "Success metrics definition"
      ]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Discovery",
      description: "We start with a comprehensive discovery session to understand your business needs, challenges, and goals.",
      duration: "1-2 hours",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: "2",
      title: "Analysis & Assessment",
      description: "Our experts analyze your current systems, processes, and technology stack to identify opportunities.",
      duration: "2-4 hours",
      icon: <Brain className="w-6 h-6" />
    },
    {
      step: "3",
      title: "Strategy Development",
      description: "We develop a tailored strategy with actionable recommendations and implementation roadmap.",
      duration: "2-6 hours",
      icon: <Globe className="w-6 h-6" />
    },
    {
      step: "4",
      title: "Presentation & Discussion",
      description: "Present findings and recommendations, answer questions, and refine the strategy together.",
      duration: "1-2 hours",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Expert Guidance",
      description: "Access to industry-leading experts with years of experience",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Tailored Solutions",
      description: "Customized strategies designed specifically for your business",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Cost Savings",
      description: "Avoid costly mistakes with expert guidance and planning",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Fast Implementation",
      description: "Accelerate your digital transformation with clear roadmaps",
      icon: <Clock className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "The AI strategy consultation was incredibly valuable. We saved months of trial and error and now have a clear path forward.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The cloud migration planning helped us avoid major pitfalls and saved us thousands in implementation costs.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "The cybersecurity audit identified critical vulnerabilities we didn't know existed. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Consultation Services - Expert Technology Guidance | Zion Tech Group</title>
        <meta name="description" content="Get expert technology consultation from Zion Tech Group. AI strategy, cybersecurity audits, cloud migration, and digital transformation guidance." />
        <meta name="keywords" content="technology consultation, AI strategy, cybersecurity audit, cloud migration, digital transformation, expert guidance" />
        <link rel="canonical" href="https://ziontechgroup.com/consultation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Users className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Expert Consultation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Expert Consultation
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Get expert guidance from our technology specialists. We help you make informed 
            decisions and accelerate your digital transformation with strategic consultation services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="#consultation-types"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              View Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Consultation
              <Calendar className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section id="consultation-types" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Consultation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of consultation services designed to address 
              your specific technology challenges and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultationTypes.map((consultation, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${consultation.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    {consultation.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {consultation.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {consultation.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-cyan-400">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {consultation.duration}
                      </span>
                      <span className="font-semibold">{consultation.price}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {consultation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1"
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Consultation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to ensure you get maximum value from our consultation services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {step.description}
                </p>
                <div className="flex items-center justify-center text-cyan-400 text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Consultation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our consultation services provide you with expert guidance and strategic insights 
              to accelerate your technology initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from businesses that have transformed their operations with our consultation services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Expert Guidance?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Schedule a consultation with our technology experts and take the first step 
            toward transforming your business with strategic technology guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Get Free Quote
              <Mail className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}