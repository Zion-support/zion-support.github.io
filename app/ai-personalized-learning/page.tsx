import React from 'react';

const PagePage: React.FC = () => {
import SEOHead from '../components/SEOHead';

const AiPersonalizedLearningPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Adaptive Learning Paths",
      description: "AI creates personalized learning journeys based on individual strengths and weaknesses"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Multi-Modal Content",
      description: "Interactive videos, simulations, quizzes, and hands-on projects for comprehensive learning"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Learning",
      description: "Collaborative features with peer learning, group projects, and expert mentorship"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Progress Tracking",
      description: "Real-time analytics and insights to track learning progress and achievements"
    }
  ];

  const pricingPlans = [
    {
      name: "Individual",
      price: "$29",
      period: "/month",
      description: "Perfect for personal learning and skill development",
      features: [
        "Unlimited courses",
        "Basic AI personalization",
        "Mobile app access",
        "Progress tracking",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for professionals and small teams",
      features: [
        "All Individual features",
        "Advanced AI personalization",
        "Certification programs",
        "Priority support",
        "Team collaboration tools",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For organizations and educational institutions",
      features: [
        "All Professional features",
        "Custom learning paths",
        "White-label platform",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced analytics",
        "Admin dashboard"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Corporate Training",
      description: "Upskill employees with personalized training programs and skill assessments",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Educational Institutions",
      description: "Enhance student learning with adaptive curriculum and personalized instruction",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: "Professional Development",
      description: "Career advancement through targeted skill development and certification programs",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Language Learning",
      description: "Master new languages with AI-powered pronunciation and conversation practice",
      icon: <Brain className="w-8 h-8" />
    }
  ];

  const subjects = [
    "Programming & Development", "Data Science & AI", "Business & Management", "Design & Creative",
    "Marketing & Sales", "Finance & Accounting", "Healthcare & Medicine", "Engineering",
    "Languages", "Soft Skills", "Certification Prep", "Technical Skills"
  ];

  return (<>
      <Helmet>
        <title>AI Personalized Learning - Zion Tech Group | Adaptive Education Platform</title>
        <meta name="description" content="Revolutionary AI-powered personalized learning platform with adaptive curriculum, multi-modal content, and intelligent progress tracking for individuals and organizations." />
        <meta name="keywords" content="ai personalized learning, _adaptive education, _online learning, _corporate training, _skill development, educational technology" />
        <meta property="og:title" content="AI Personalized Learning - Zion Tech Group" />
        <meta property="og:description" content="AI-powered personalized learning for individuals and organizations" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-personalized-learning" />
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
                Transform education with AI-powered personalized learning experiences. 
                Adaptive curriculum, _intelligent content delivery, and real-time progress tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Learning
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Courses
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Intelligent Learning Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powered by advanced AI algorithms that adapt to each learner&apos;s unique needs and learning style
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subjects Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Subject Coverage</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Learn from thousands of courses across diverse subjects and industries
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {subjects.map((subject, index) => (
                <span key={index} className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Learning Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI personalized learning platform serves diverse educational needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-center">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Flexible Learning Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your learning journey. All plans include our AI personalization engine.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Start Learning
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Learning?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join millions of learners using our AI personalized learning platform. 
                Start your personalized learning journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
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
