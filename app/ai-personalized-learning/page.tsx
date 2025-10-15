import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Brain, Target, BarChart3, CheckCircle, ArrowRight, Star } from 'lucide-react';

const AiPersonalizedLearningPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Adaptive Learning Paths",
      description: "AI-powered personalized learning journeys that adapt to each learner's pace, style, and goals"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Content Curation",
      description: "Intelligent content selection and sequencing based on learning objectives and performance data"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Learning Analytics",
      description: "Comprehensive insights into learning progress, engagement, and knowledge retention"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Multi-Modal Learning",
      description: "Support for videos, interactive content, quizzes, and hands-on exercises tailored to learning preferences"
    }
  ];

  const learningTypes = [
    "Corporate Training",
    "Academic Education",
    "Professional Development",
    "Skill Certification",
    "Language Learning",
    "Technical Training",
    "Soft Skills Development",
    "Compliance Training",
    "Onboarding Programs",
    "Leadership Development",
    "Sales Training",
    "Customer Service"
  ];

  const pricingPlans = [
    {
      name: "Individual",
      price: "$29",
      period: "/month",
      description: "Perfect for personal learning",
      features: [
        "Unlimited courses",
        "Basic AI personalization",
        "Progress tracking",
        "Mobile app access",
        "Email support",
        "Certificate generation"
      ],
      popular: false
    },
    {
      name: "Team",
      price: "$99",
      period: "/month", 
      description: "Ideal for small teams",
      features: [
        "Up to 25 learners",
        "Advanced AI personalization",
        "Team analytics dashboard",
        "Priority support",
        "Custom learning paths",
        "Integration APIs",
        "White-label options",
        "Admin controls"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited learners",
        "Premium AI features",
        "Complete analytics suite",
        "24/7 dedicated support",
        "Custom content creation",
        "Full API access",
        "SSO integration",
        "Advanced reporting",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Increase learning retention by 40%",
    "Reduce training time by 50%",
    "Improve engagement by 60%",
    "Personalize learning experiences",
    "Track progress in real-time",
    "Adapt to different learning styles",
    "Generate detailed analytics",
    "Support multiple languages"
  ];

  const aiCapabilities = [
    "Learning Style Detection", "Knowledge Gap Analysis", "Difficulty Adjustment",
    "Content Recommendation", "Progress Prediction", "Engagement Optimization",
    "Skill Assessment", "Learning Path Optimization", "Performance Analytics"
  ];

  return (
    <>
      <Helmet>
        <title>AI Personalized Learning - Zion Tech Group | Smart Education Platform</title>
        <meta name="description" content="Revolutionary AI-powered personalized learning platform that adapts to each learner's needs, optimizes content delivery, and maximizes learning outcomes." />
        <meta name="keywords" content="ai learning, personalized education, adaptive learning, learning analytics, corporate training, online education" />
        <meta property="og:title" content="AI Personalized Learning - Zion Tech Group" />
        <meta property="og:description" content="Intelligent personalized learning solutions" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Personalized Learning</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform education with AI-powered personalized learning that adapts to each learner's unique needs, 
                learning style, and pace for maximum engagement and knowledge retention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced AI Learning Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary AI technology that personalizes every aspect of the learning experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Types Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Learning Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for all types of learning and training programs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {learningTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 group">
                  <div className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    {type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">AI Learning Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI algorithms that power intelligent learning experiences
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {aiCapabilities.map((capability, index) => (
                <span key={index} className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Learning Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Achieve better learning outcomes with AI-powered personalization
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center hover:bg-cyan-500/20 transition-all duration-300 group">
                  <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Learning Platform Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your learning and training needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300 text-lg">Better Retention</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">50%</div>
                <div className="text-gray-300 text-lg">Faster Learning</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
                <div className="text-gray-300 text-lg">Higher Engagement</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300 text-lg">User Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Learning?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Experience the future of personalized learning with AI-powered education. 
                Start your free trial today and see the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Learning Experts
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiPersonalizedLearningPage;