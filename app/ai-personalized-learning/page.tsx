import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BookOpen, 
  Brain, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  Users,
  Award,
  Zap,
  TrendingUp,
  BarChart3
} from 'lucide-react';

const AiPersonalizedLearningPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Adaptive Learning Paths",
      description: "AI creates personalized learning journeys based on individual strengths and weaknesses"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Content Delivery",
      description: "Dynamic content selection and pacing optimized for each learner's comprehension level"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Progress Analytics",
      description: "Real-time insights into learning progress, engagement, and knowledge retention"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Multi-Modal Learning",
      description: "Support for text, video, audio, interactive exercises, and gamified content"
    }
  ];

  const solutions = [
    {
      title: "Corporate Training",
      description: "Personalized employee development programs with AI-driven skill assessment and training",
      price: "From $29/month per user",
      features: ["Skill gap analysis", "Custom learning paths", "Progress tracking", "Certification management"],
      benefits: ["40% faster skill acquisition", "Higher engagement", "Reduced training costs", "Better retention"]
    },
    {
      title: "K-12 Education",
      description: "Adaptive learning platform for students with personalized curriculum and real-time feedback",
      price: "From $19/month per student",
      features: ["Curriculum adaptation", "Parent dashboards", "Teacher insights", "Assessment tools"],
      benefits: ["Improved test scores", "Individual attention", "Reduced dropout rates", "Teacher efficiency"]
    },
    {
      title: "Higher Education",
      description: "AI-powered learning management system for universities and colleges",
      price: "From $39/month per student",
      features: ["Course personalization", "Academic analytics", "Peer collaboration", "Research tools"],
      benefits: ["Higher graduation rates", "Better job placement", "Reduced costs", "Enhanced learning"]
    },
    {
      title: "Professional Development",
      description: "Continuous learning platform for professionals seeking career advancement",
      price: "From $49/month per user",
      features: ["Industry-specific content", "Career path guidance", "Skill certification", "Networking tools"],
      benefits: ["Career advancement", "Skill validation", "Industry recognition", "Networking opportunities"]
    },
    {
      title: "Language Learning",
      description: "AI-powered language acquisition with natural conversation practice and cultural immersion",
      price: "From $24/month per user",
      features: ["Conversation practice", "Pronunciation coaching", "Cultural context", "Progress tracking"],
      benefits: ["Faster fluency", "Natural pronunciation", "Cultural understanding", "Confidence building"]
    },
    {
      title: "Technical Skills",
      description: "Specialized training for programming, data science, and technical certifications",
      price: "From $59/month per user",
      features: ["Hands-on projects", "Code review", "Industry mentors", "Job placement"],
      benefits: ["Job-ready skills", "Portfolio building", "Industry connections", "Career transition"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Improved Learning Outcomes",
      description: "Students learn 40% faster with personalized content and adaptive pacing"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Higher Engagement",
      description: "Gamification and personalized content increase learner engagement by 60%"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Better Retention",
      description: "AI-optimized review schedules improve knowledge retention by 50%"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Efficiency",
      description: "Learners spend 30% less time on content they already know"
    }
  ];

  const learningTypes = [
    "Visual Learning", "Auditory Learning", "Kinesthetic Learning", "Reading/Writing",
    "Social Learning", "Solitary Learning", "Sequential Learning", "Global Learning",
    "Active Learning", "Reflective Learning", "Sensing Learning", "Intuitive Learning"
  ];

  return (
    <>
      <Helmet>
        <title>AI Personalized Learning - Zion Tech Group | Adaptive Education Solutions</title>
        <meta name="description" content="Revolutionary AI-powered personalized learning platform for corporate training, K-12, higher education, and professional development. Learn 40% faster with adaptive content." />
        <meta name="keywords" content="personalized learning, adaptive learning, ai education, corporate training, k-12, higher education, language learning, professional development" />
        <meta property="og:title" content="AI Personalized Learning - Zion Tech Group" />
        <meta property="og:description" content="Adaptive learning solutions powered by AI" />
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
                Transform education with AI-powered personalized learning that adapts to each learner's 
                unique needs, pace, and learning style for maximum effectiveness.
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
                Our platform uses cutting-edge AI to create truly personalized learning experiences
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

        {/* Solutions Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Learning Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored learning platforms for every educational need
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Proven Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{solution.price}</span>
                    </div>
                    <p className="text-sm text-gray-400">Per user • Volume discounts available</p>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose AI Personalized Learning?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the transformative benefits of adaptive learning
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Styles Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Supports All Learning Styles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI adapts to every type of learner
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {learningTypes.map((style, index) => (
                <span key={index} className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                  {style}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Proven Learning Results</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our clients see measurable improvements in learning outcomes
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-cyan-400 mb-4">40%</div>
                <div className="text-xl text-white mb-2">Faster Learning</div>
                <div className="text-gray-300">Students learn 40% faster with personalized content</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-cyan-400 mb-4">60%</div>
                <div className="text-xl text-white mb-2">Higher Engagement</div>
                <div className="text-gray-300">Increased learner engagement and participation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-cyan-400 mb-4">50%</div>
                <div className="text-xl text-white mb-2">Better Retention</div>
                <div className="text-gray-300">Improved knowledge retention and recall</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your learning needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Individual</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Personal learning path
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic AI features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Progress tracking
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Mobile access
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/40 ring-2 ring-cyan-500/20 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Team</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$19<span className="text-lg text-gray-400">/user/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 50 users
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced AI features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Team analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom content
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited users
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Full AI capabilities
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    SLA guarantee
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Contact Sales
                </button>
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
                Join thousands of learners and organizations using our AI-powered personalized learning 
                platform to achieve better outcomes faster. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Schedule Demo
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