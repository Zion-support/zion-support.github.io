import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Zap, CheckCircle, ArrowRight, Star, Shield, BarChart3, Smartphone, Mail, Globe, Users, Brain, Award } from "lucide-react";

export default function ZionAIEducation() {
  const features = [
    {
      title: "AI-Powered Learning Paths",
      description: "Personalized learning experiences that adapt to each student's pace, style, and learning objectives",
      icon: <BookOpen className="w-6 h-6" />,
      benefit: "40% faster learning"
    },
    {
      title: "Intelligent Tutoring",
      description: "AI tutors that provide 24/7 support, answer questions, and guide students through complex topics",
      icon: <GraduationCap className="w-6 h-6" />,
      benefit: "Personalized guidance"
    },
    {
      title: "Automated Assessment",
      description: "Smart grading and assessment tools that provide instant feedback and detailed progress reports",
      icon: <Award className="w-6 h-6" />,
      benefit: "Instant feedback"
    },
    {
      title: "Content Generation",
      description: "AI-generated educational content, quizzes, and interactive materials tailored to curriculum needs",
      icon: <Brain className="w-6 h-6" />,
      benefit: "Unlimited content"
    },
    {
      title: "Progress Analytics",
      description: "Comprehensive analytics dashboard showing learning progress, strengths, and areas for improvement",
      icon: <BarChart3 className="w-6 h-6" />,
      benefit: "Data-driven insights"
    },
    {
      title: "Collaborative Learning",
      description: "AI-facilitated group projects, peer learning, and virtual study groups with smart matching",
      icon: <Users className="w-6 h-6" />,
      benefit: "Enhanced collaboration"
    }
  ];

  const pricingPlans = [
    {
      name: "Student",
      price: "$19",
      period: "/month",
      description: "Perfect for individual learners",
      features: [
        "Personalized learning paths",
        "AI tutoring support",
        "Progress tracking",
        "Mobile app access",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Educator",
      price: "$49",
      period: "/month",
      description: "Ideal for teachers and instructors",
      features: [
        "Class management tools",
        "Automated assessment",
        "Content generation",
        "Student analytics",
        "Priority support",
        "API access",
        "Custom curriculum",
        "Grade management"
      ],
      popular: true
    },
    {
      name: "Institution",
      price: "$199",
      period: "/month",
      description: "For schools and universities",
      features: [
        "Everything in Educator",
        "Multi-campus support",
        "Custom AI training",
        "Dedicated support",
        "24/7 phone support",
        "Advanced security",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const educationMetrics = [
    {
      metric: "40%",
      description: "Faster learning",
      icon: <Zap className="w-8 h-8" />
    },
    {
      metric: "95%",
      description: "Student satisfaction",
      icon: <Award className="w-8 h-8" />
    },
    {
      metric: "24/7",
      description: "AI tutoring",
      icon: <Brain className="w-8 h-8" />
    },
    {
      metric: "10,000+",
      description: "Happy students",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Maria Santos",
      role: "Professor",
      company: "University of Technology",
      content: "Zion AI Education has transformed our teaching methods. Students are more engaged and learning outcomes have improved significantly.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "James Wilson",
      role: "Student",
      company: "Online Learning",
      content: "The AI tutor is incredible. It explains complex concepts in ways I can understand and adapts to my learning style perfectly.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Sarah Thompson",
      role: "High School Teacher",
      company: "Education District",
      content: "The automated assessment saves me hours of grading time and provides detailed insights into each student's progress.",
      rating: 5,
      avatar: "ST"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Education - Intelligent Learning Management Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced AI-powered education platform with personalized learning paths, intelligent tutoring, and automated assessment. Transform education with intelligent automation."
        />
        <meta
          name="keywords"
          content="AI education, learning management, intelligent tutoring, personalized learning, educational AI, online learning, education automation, learning analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-education" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <BookOpen className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">AI-Powered Education Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Zion
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}AI Education
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionize education with AI-powered personalized learning, intelligent tutoring, and automated assessment. 
                Create engaging, adaptive learning experiences that improve student outcomes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="cyber-button px-8 py-4 rounded-lg font-semibold flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Watch Demo
                  <BookOpen className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>

              {/* Education Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {educationMetrics.map((metric, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {metric.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{metric.metric}</div>
                    <div className="text-gray-300 text-sm">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Intelligent Learning
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {" "}Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our AI-powered platform personalizes education for every learner, providing adaptive content, 
                intelligent tutoring, and comprehensive analytics to maximize learning outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-cyan-400 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {" "}Pricing Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your educational needs. All plans include core AI learning features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20 bg-gradient-to-b from-cyan-500/10 to-purple-500/10' 
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {" "}Educators Worldwide
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what educators and students say about Zion AI Education
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
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Education Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of educators already using Zion AI Education to improve learning outcomes. 
              Start your free trial and experience intelligent education automation.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button px-8 py-4 rounded-lg font-semibold flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <BookOpen className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}