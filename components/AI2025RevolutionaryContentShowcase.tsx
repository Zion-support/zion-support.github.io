import Link from 'next/link';

const AI20o25RevolutionaryContentShowcase = () => {
  const contentItems = [
    {
      id: 1,
      title: "Quantum AI Processing",
      description: "Revolutionary quantum computing integration with AI for exponential performance gains",
      image: "🧠",
      category: "Quantum Computing",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Autonomous Business Operations",
      description: "Self-managing business systems that optimize operations without human intervention",
      image: "🤖",
      category: "Automation",
      readTime: "12 min read",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces for enhanced human-AI collaboration",
      image: "🔗",
      category: "Neural Interfaces",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 4,
      title: "Predictive Analytics Revolution",
      description: "Advanced predictive models that forecast business trends with 95% accuracy",
      image: "📊",
      category: "Analytics",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 5,
      title: "Synthetic Intelligence Systems",
      description: "Next-generation AI that creates and manages its own synthetic data",
      image: "🎭",
      category: "Synthetic AI",
      readTime: "15 min read",
      featured: true
    },
    {
      id: 6,
      title: "Edge Computing AI",
      description: "Distributed AI processing at the edge for real-time decision making",
      image: "⚡",
      category: "Edge Computing",
      readTime: "9 min read",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-90o0 mb-6">
            Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
            Explore the most advanced AI technologies and insights that are shaping the future of business and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-30o0 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-50o0' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-50o0 to-blue-50o0 text-white text-xs font-bold px-3 py-1 rounded-t-xl text-center">
                  FEATURED
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{item.image}</span>
                  <div>
                    <span className="bg-purple-10o0 text-purple-80o0 text-xs font-semibold px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-90o0 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-60o0 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-50o0">{item.readTime}</span>
                  <Link
                    href={`/content/${item.id}`}
                    className="text-purple-60o0 font-semibold hover:text-purple-80o0 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/ai-20o25-content"
            className="bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg"
          >
            View All Content
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AI20o25RevolutionaryContentShowcase;