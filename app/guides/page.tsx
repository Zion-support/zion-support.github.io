export default function GuidesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Implementation Guides</h1>
      <p className="text-gray-600">Step-by-step guides and best practices for deploying AI and IT solutions.</p>
    </div>
  );
}

export default function GuidesPage() {
  const guides = [
    {
      title: 'AI Implementation Guide',
      description: 'Complete guide to implementing AI solutions in your business',
      category: 'Artificial Intelligence',
      duration: '45 min read',
      difficulty: 'Intermediate',
      icon: '🤖'
    },
    {
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your infrastructure to the cloud',
      category: 'Cloud Computing',
      duration: '30 min read',
      difficulty: 'Advanced',
      icon: '☁️'
    },
    {
      title: 'Cybersecurity Framework Setup',
      description: 'How to establish a comprehensive cybersecurity framework',
      category: 'Security',
      duration: '60 min read',
      difficulty: 'Advanced',
      icon: '🔒'
    },
    {
      title: 'Micro SaaS Development',
      description: 'Building and launching your first micro SaaS product',
      category: 'SaaS Development',
      duration: '90 min read',
      difficulty: 'Beginner',
      icon: '💼'
    },
    {
      title: 'Data Analytics Implementation',
      description: 'Setting up data analytics and business intelligence systems',
      category: 'Data Analytics',
      duration: '50 min read',
      difficulty: 'Intermediate',
      icon: '📊'
    },
    {
      title: 'Blockchain Integration Guide',
      description: 'Integrating blockchain technology into your business processes',
      category: 'Blockchain',
      duration: '75 min read',
      difficulty: 'Advanced',
      icon: '⛓️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Technology Guides
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Step-by-step guides and tutorials to help you implement and optimize technology solutions for your business.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              All Guides
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              AI & Machine Learning
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Cloud Computing
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Security
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              SaaS Development
            </button>
          </div>

          {/* Guides Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
                <div className="text-4xl mb-4">{guide.icon}</div>
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {guide.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-6">{guide.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span>{guide.duration}</span>
                  <span className="px-2 py-1 bg-gray-100 rounded">
                    {guide.difficulty}
                  </span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Read Guide
                </button>
              </div>
            ))}
          </div>

          {/* Featured Guide */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Featured: Complete Digital Transformation Guide
                </h2>
                <p className="text-gray-600 mb-6">
                  Our comprehensive guide to digital transformation covers everything from strategy development 
                  to implementation and optimization. Learn how to successfully transform your business with 
                  modern technology solutions.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-sm text-gray-500">120 min read</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">Advanced</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">Updated Dec 2025</span>
                </div>
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                  Read Featured Guide
                </button>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">🚀</div>
                <p className="text-gray-600 font-semibold">Most Popular Guide</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Need a Custom Guide?</h2>
              <p className="text-xl mb-8 opacity-90">
                Can't find what you're looking for? Our experts can create custom guides tailored to your specific needs.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Request Custom Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}