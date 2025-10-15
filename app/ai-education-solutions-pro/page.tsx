import { ArrowRight, BookOpen, Brain, CheckCircle, Mail, Phone, Play, Star, Users } from 'lucide-react';;

const AIEducationSolutionsProPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Learning",
      description: "Personalized learning experiences powered by advanced AI algorithms.",
      benefits: ["Adaptive curriculum", "Real-time feedback", "Performance analytics"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Interactive Content",
      description: "Engaging multimedia content that adapts to learning styles.",
      benefits: ["Video lessons", "Interactive quizzes", "Gamified learning"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Learning",
      description: "Connect with peers and instructors in virtual classrooms.",
      benefits: ["Group projects", "Peer reviews", "Live discussions"]
    }
  ];

const subjects = [
    { name: "Mathematics", level: "Advanced", icon: <Brain className="w-6 h-6" />, description: "Advanced mathematical concepts and problem-solving" },
    { name: "Science", level: "Intermediate", icon: <Brain className="w-6 h-6" />, description: "Scientific principles and experimentation" },
    { name: "Programming", level: "Beginner", icon: <Brain className="w-6 h-6" />, description: "Introduction to coding and software development" }
  ];

const useCases = [
    { title: "K-12 Education", description: "Comprehensive learning platform for students", icon: <Brain className="w-6 h-6" />, benefits: ["Age-appropriate content", "Parent monitoring", "Progress tracking"] },
    { title: "Higher Education", description: "Advanced tools for university students", icon: <Brain className="w-6 h-6" />, benefits: ["Research assistance", "Thesis support", "Academic writing"] },
    { title: "Professional Development", description: "Skills training for working professionals", icon: <Brain className="w-6 h-6" />, benefits: ["Industry-specific training", "Certification prep", "Career advancement"] }
  ];

const pricingPlans = [
    { name: "Basic", price: "$29", features: ["Basic AI tutoring", "Limited subjects"], description: "Perfect for individual learners", period: "per month", popular: false },
    { name: "Pro", price: "$59", features: ["Advanced AI", "All subjects", "Analytics"], description: "Ideal for serious students", period: "per month", popular: true },
    { name: "Enterprise", price: "Custom", features: ["Custom solutions", "Dedicated support"], description: "Tailored for organizations", period: "contact us", popular: false }
  ];

const testimonials = [
    { name: "Sarah Johnson", role: "Teacher", content: "Revolutionary learning platform!", rating: 5, company: "Lincoln High School" },
    { name: "Mike Chen", role: "Student", content: "AI tutoring changed my grades!", rating: 5, company: "Stanford University" }
  ];
  return (
    <>
      <Helmet>
        <title>AI Education Solutions Pro - Zion Tech Group | Advanced Educational Technology</title>
        <meta name="description" content="Revolutionary AI-powered education solutions. Transform learning with intelligent tutoring, personalized curricula, and advanced analytics." />
        <meta name="keywords" content="AI education, educational technology, intelligent tutoring, personalized learning, education analytics" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        { /* Animated Background */ }
        
        <div className="absolute inset-0">
          
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        { /* Grid Pattern */ }
        
        <div className="absolute inset-0 opacity-20">
          
        <div className="h-full w-full"></div>
        </div>
        <main className="relative z-10">
          { /* Hero Section */ }
          <section className="relative py-20 overflow-hidden">
            
        <div className="container mx-auto px-4">
              <div className={ `text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>
                
        <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI Education Platform
                </div>
                
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Education Solutions Pro
                  </span>
                </h1>
                
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Revolutionize education with AI-powered learning, virtual classrooms, and personalized content. 
                  Increase student engagement by 50% and improve test scores by 35%.
                </p>
                
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
          { /* Features Section */ }
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Intelligent Education Features
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to create engaging, personalized learning experiences with AI-powered automation and insights.
                </p>
              </div>
              
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                { features.map((feature, index) => (
                  <div 
                    key={index } 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-card">
                    
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      
        <div className="text-white">{ feature.icon }</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      { feature.title }
                    </h3>
                    
          <p className="text-gray-300 mb-6 leading-relaxed">
                      { feature.description }
                    </p>
                    
        <div className="space-y-2">
                      { feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex } className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          { benefit }
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Subjects Section */ }
          <section className="py-20 bg-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    All Subjects Covered
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI education platform supports all major subjects with specialized content and interactive learning tools.
                </p>
              </div>
              
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                { subjects.map((subject, index) => (
                  <div 
                    key={index } 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    
        <div className="text-4xl mb-3">{ subject.icon }</div>
                    
        <div className="text-white font-semibold mb-1 text-sm">{ subject.name }</div>
                    
        <div className="text-cyan-400 text-xs">{ subject.description }</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Use Cases Section */ }
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Educational Solutions
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI education platform is designed for various educational settings and learning environments.
                </p>
              </div>
              
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                { useCases.map((useCase, index) => (
                  <div 
                    key={index } 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                      
        <div className="text-white">{ useCase.icon }</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{ useCase.title }</h3>
                    
          <p className="text-gray-300 mb-6">{ useCase.description }</p>
                    
        <div className="space-y-2">
                      { useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex } className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          { benefit }
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Pricing Section */ }
          <section className="py-20 bg-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Flexible Pricing
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your educational institution's needs and budget.
                </p>
              </div>
              
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                { pricingPlans.map((plan, index) => (
                  <div 
                    key={index } 
                    className={ `relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40' }`}
                  >
                    { plan.popular && (
                      
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    ) }
                    
        <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{ plan.name }</h3>
                      
          <p className="text-gray-300 mb-4">{ plan.description }</p>
                      
        <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{ plan.price }</span>
                        <span className="text-gray-400 ml-2">/{ plan.period }</span>
                      </div>
                    </div>
                    
        <div className="space-y-4 mb-8">
                      { plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex } className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          { feature }
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={ `w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900' }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Testimonials Section */ }
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Education Success Stories
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how educational institutions are improving learning outcomes with AI Education Solutions Pro.
                </p>
              </div>
              
        <div className="grid md:grid-cols-3 gap-8">
                { testimonials.map((testimonial, index) => (
                  <div 
                    key={index } 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                    
        <div className="flex items-center mb-4">
                      { [...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i } className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
          <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{ testimonial.content }&rdquo;
                    </p>
                    <div>
                      
        <div className="font-semibold text-white">{ testimonial.name }</div>
                      
        <div className="text-cyan-400">{ testimonial.role }</div>
                      
        <div className="text-gray-400 text-sm">{ testimonial.company }</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* CTA Section */ }
          <section className="py-20 bg-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Education?
                </h2>
                
          <p className="text-xl text-gray-300 mb-8">
                  Join leading educational institutions that are revolutionizing learning with AI-powered solutions and intelligent automation.
                </p>
                
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Trial
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default AIEducationSolutionsProPage;