import React from 'react';
const FeaturedContentSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const featuredContent = [
    {
      id: 'ai-future',
      title: 'AI Future Innovation 2025',
      subtitle: 'Revolutionary AI Technology',
      description: 'Experience the next generation of artificial intelligence with advanced neural architecture, real-time learning, and predictive analytics.',
      link: '/pages/AIFutureInnovation2025',
      gradient: 'from-purple-600 to-pink-600',
      icon: '🤖',
      stats: ['1000x faster processing', '99.7% accuracy rate', '95% learning efficiency'],
      features: ['Advanced Neural Architecture', 'Real-time Learning & Adaptation', 'Predictive Analytics Engine'],
      category: 'Artificial Intelligence',
      readTime: '8 min read',
      difficulty: 'Advanced'
    },
      id: 'quantum-leap',
      title: 'Quantum Leap Technology 2025',
      subtitle: 'Quantum Computing Revolution',
      description: 'Harness the power of quantum mechanics for unprecedented computational capabilities, quantum AI, and unbreakable security.',
      link: '/pages/QuantumLeapTechnology2025',
      gradient: 'from-cyan-600 to-blue-600',
      icon: '⚡',
      stats: ['1024 qubits', '100+ μs coherence', '99.9% gate fidelity'],
      features: ['Quantum Computing', 'Quantum AI', 'Quantum Security'],
      category: 'Quantum Technology',
      readTime: '12 min read',
      difficulty: 'Expert'
      id: 'digital-transformation',
      title: 'Digital Transformation Hub 2025',
      subtitle: 'Complete Business Transformation',
      description: 'Accelerate your digital transformation journey with comprehensive solutions, expert guidance, and proven methodologies.',
      link: '/pages/DigitalTransformationHub2025',
      gradient: 'from-indigo-600 to-purple-600',
      icon: '🔄',
      stats: ['300% productivity', '60% cost reduction', '500% innovation speed'],
      features: ['Strategic Planning', 'Implementation', 'Continuous Optimization'],
      category: 'Business Strategy',
      readTime: '15 min read',
      difficulty: 'Intermediate'
    }
  ];
  const industryInsights = [
      title: 'Healthcare Revolution',
      description: 'How AI is transforming patient care and medical research',
      icon: '🏥',
      metric: '+45% efficiency'
      title: 'Manufacturing 4.0',
      description: 'Quantum computing in smart manufacturing',
      icon: '🏭',
      metric: '+35% productivity'
      title: 'Financial Innovation',
      description: 'Digital transformation in banking and finance',
      icon: '💰',
      metric: '+80% speed'
  return (
    <div className="mb-16">
      {/* Main Featured Content */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🌟 FEATURED CONTENT • JANUARY 2025
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionary Technology Content</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our latest breakthrough content featuring cutting-edge AI, Quantum Computing, and Digital Transformation insights
        </p>
      </div>
      {/* Featured Content Cards */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {featuredContent.map((content) => (
          <div
            key={content.id}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            onMouseEnter={() => setHoveredCard(content.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card Header */}
            <div className={`h-2 bg-gradient-to-r ${content.gradient}`}></div>
            <div className="p-8">
              {/* Category and Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold">
                  {content.category}
                </span>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>{content.readTime}</span>
                  <span>•</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    content.difficulty === 'Expert' ? 'bg-red-100 text-red-700' :
                    content.difficulty === 'Advanced' ? 'bg-orange-100 text-orange-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {content.difficulty}
                  </span>
                </div>
              </div>
              {/* Icon and Title */}
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {content.icon}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{content.title}</h3>
                  <p className="text-sm text-gray-600">{content.subtitle}</p>
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{content.description}</p>
              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <div className="space-y-2">
                  {content.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {content.stats.map((stat, index) => (
                  <div key={index} className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Performance</div>
                    <div className="text-sm font-semibold text-gray-900">{stat}</div>
                  </div>
                ))}
              {/* CTA Button */}
              <a
                href={content.link}
                className={`block w-full bg-gradient-to-r ${content.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center group-hover:scale-105`}
              >
                Explore {content.title} →
              </a>
            </div>
            {/* Hover Effect Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${content.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
          </div>
        ))}
      {/* Industry Insights Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Industry Impact Insights</h3>
          <p className="text-lg text-gray-600">See how our technologies are transforming different sectors</p>
        <div className="grid md:grid-cols-3 gap-6">
          {industryInsights.map((insight, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="text-3xl mr-3">{insight.icon}</span>
                  <h4 className="font-bold text-gray-900">{insight.title}</h4>
                  <div className="text-sm text-green-600 font-semibold">{insight.metric}</div>
              <p className="text-gray-600 mb-4 text-sm">{insight.description}</p>
                href={insight.link}
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                Learn more →
          ))}
      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
        <h3 className="text-3xl font-bold mb-4">Ready to Explore the Future?</h3>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Dive deep into our revolutionary technology content and discover how these innovations can transform your business.
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Browse All Content
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold">
            Get Personalized Recommendations
    </div>
  );
};
export default FeaturedContentSection;
