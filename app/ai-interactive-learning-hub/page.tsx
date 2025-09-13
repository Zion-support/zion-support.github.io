import React from 'react';
import { Link } from 'react-router-dom';

export default function AIInteractiveLearningHub() {
  const interactiveModules = [
    {
      title: "AI Fundamentals Masterclass",
      description: "Interactive learning modules covering AI basics to advanced concepts",
      duration: "45 minutes",
      difficulty: "Beginner",
      icon: "🧠",
      features: ["Hands-on coding exercises", "Real-time feedback", "Progress tracking"],
      url: "/ai-interactive-learning-hub/fundamentals"
    },
    {
      title: "Machine Learning Playground",
      description: "Build and test ML models with our interactive sandbox environment",
      duration: "90 minutes",
      difficulty: "Intermediate",
      icon: "🤖",
      features: ["Visual model builder", "Dataset exploration", "Performance metrics"],
      url: "/ai-interactive-learning-hub/ml-playground"
    },
    {
      title: "Neural Network Simulator",
      description: "Visualize and experiment with neural network architectures",
      duration: "60 minutes",
      difficulty: "Advanced",
      icon: "🕸️",
      features: ["3D network visualization", "Real-time training", "Hyperparameter tuning"],
      url: "/ai-interactive-learning-hub/neural-simulator"
    },
    {
      title: "AI Ethics Decision Tree",
      description: "Navigate complex ethical scenarios in AI development",
      duration: "30 minutes",
      difficulty: "All Levels",
      icon: "⚖️",
      features: ["Case studies", "Ethical frameworks", "Decision scenarios"],
      url: "/ai-interactive-learning-hub/ethics"
    },
    {
      title: "Computer Vision Workshop",
      description: "Hands-on image recognition and computer vision projects",
      duration: "75 minutes",
      difficulty: "Intermediate",
      icon: "👁️",
      features: ["Image classification", "Object detection", "Style transfer"],
      url: "/ai-interactive-learning-hub/computer-vision"
    },
    {
      title: "Natural Language Processing Lab",
      description: "Experiment with text analysis, sentiment, and language models",
      duration: "80 minutes",
      difficulty: "Intermediate",
      icon: "💬",
      features: ["Text preprocessing", "Sentiment analysis", "Chatbot building"],
      url: "/ai-interactive-learning-hub/nlp-lab"
    }
  ];

  const learningPaths = [
    {
      title: "AI Career Accelerator",
      description: "Complete path from beginner to AI engineer",
      duration: "12 weeks",
      modules: 24,
      icon: "🚀",
      badge: "Most Popular"
    },
    {
      title: "Enterprise AI Leader",
      description: "Strategic AI implementation for business leaders",
      duration: "8 weeks",
      modules: 16,
      icon: "👔",
      badge: "Executive"
    },
    {
      title: "AI Research Specialist",
      description: "Advanced research methods and cutting-edge techniques",
      duration: "16 weeks",
      modules: 32,
      icon: "🔬",
      badge: "Advanced"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium animate-pulse">🎓 INTERACTIVE LEARNING - LIVE NOW</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              🧠 AI Interactive Learning Hub
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
              Master AI through hands-on, interactive experiences. Build real projects, 
              experiment with cutting-edge tools, and accelerate your AI expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/ai-interactive-learning-hub/fundamentals"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                🎯 Start Learning Now
              </Link>
              <Link
                to="/ai-interactive-learning-hub/ml-playground"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                🧪 Try ML Playground
              </Link>
            </div>
            
            {/* Learning Stats */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-sm opacity-90">Active Learners</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-sm opacity-90">Interactive Modules</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Completion Rate</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">4.9★</div>
                <div className="text-sm opacity-90">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modules */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎮 Interactive Learning Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hands-on, experiential learning that adapts to your pace and style
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interactiveModules.map((module, index) => (
              <Link key={index} to={module.url} className="group">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{module.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {module.difficulty}
                        </span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {module.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  
                  <div className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    <span>Start Module</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🛤️ Structured Learning Paths
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow curated learning journeys designed by AI experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{path.icon}</div>
                  {path.badge && (
                    <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm px-4 py-1 rounded-full mb-4">
                      {path.badge}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{path.title}</h3>
                  <p className="text-gray-600 mb-4">{path.description}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{path.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Modules:</span>
                    <span className="font-semibold">{path.modules}</span>
                  </div>
                </div>
                
                <Link
                  to={`/ai-interactive-learning-hub/path/${path.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Start Learning Path
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🚀 Why Choose Interactive Learning?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of AI education with cutting-edge learning technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Learning</h3>
              <p className="text-gray-600">AI-powered adaptive learning that adjusts to your pace and learning style</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Feedback</h3>
              <p className="text-gray-600">Instant feedback and guidance to accelerate your learning progress</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Recognition</h3>
              <p className="text-gray-600">Earn certificates recognized by top tech companies and universities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600">Connect with peers and mentors in our global AI learning community</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of learners already building the future with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-interactive-learning-hub/fundamentals"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              🎯 Start Your AI Journey
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              💬 Get Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}