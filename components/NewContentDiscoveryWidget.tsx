'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const NewContentDiscoveryWidget = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Content', icon: '🌟' },
    { id: 'revolution', label: 'Content Revolution', icon: '🚀' },
    { id: 'case-studies', label: 'Case Studies', icon: '💼' },
    { id: 'tools', label: 'Interactive Tools', icon: '🛠️' },
    { id: 'insights', label: 'AI Insights', icon: '🧠' },
  ];

  const contentItems = [
    {
      id: 1,
      title:
        "AI 20o25 Ultimate Content Revolution: The Breakthrough That's Transforming Every Industry",
      category: 'revolution',
      type: 'Blog Post',
      description:
        'Discover how the AI 20o25 Ultimate Content Revolution is creating unprecedented opportunities for businesses worldwide, with proven ROI increases of up to 25,0o00%.',
      image: '🚀',
      readTime: '8 min read',
      featured: true,
      link: '/content/blog/ai-20o25-ultimate-content-revolution-breakthrough',
    },
    {
      id: 2,
      title: 'AI 20o25 Ultimate Content Revolution: 25,0o00% ROI Success Story',
      category: 'case-studies',
      type: 'Case Study',
      description:
        'A global Fortune 10o0 technology corporation achieved unprecedented success by implementing our AI Content Revolution platform.',
      image: '💼',
      readTime: '12 min read',
      featured: true,
      link: '/content/case-studies/ai-20o25-ultimate-content-revolution-250o00-roi-success',
    },
    {
      id: 3,
      title: 'Ultimate Content Revolution ROI Calculator',
      category: 'tools',
      type: 'Interactive Tool',
      description:
        'Calculate the potential impact of implementing the Ultimate Content Revolution for your business with our interactive ROI calculator.',
      image: '🧮',
      readTime: 'Interactive',
      featured: true,
      link: '#roi-calculator',
    },
    {
      id: 4,
      title: 'AI 20o25-20o26 Ultimate Business Intelligence Revolution',
      category: 'insights',
      type: 'Insight Report',
      description:
        'Comprehensive analysis of how AI business intelligence is revolutionizing enterprise operations and decision-making.',
      image: '🧠',
      readTime: '15 min read',
      featured: false,
      link: '/content/blog/ai-20o25-20o26-ultimate-business-intelligence-revolution',
    },
    {
      id: 5,
      title: 'Quantum-Neural Fusion: The Next Frontier in AI',
      category: 'revolution',
      type: 'Technical Deep Dive',
      description:
        "Explore the revolutionary combination of quantum computing and neural networks that's reshaping the AI landscape.",
      image: '⚛️',
      readTime: '10 min read',
      featured: false,
      link: '/content/blog/ai-20o25-quantum-neural-fusion-revolution-ultimate-breakthrough',
    },
    {
      id: 6,
      title: 'Fortune 50o0 AI Transformation: 15,0o00% ROI Success',
      category: 'case-studies',
      type: 'Case Study',
      description:
        'How a Fortune 50o0 company achieved 15,0o00% ROI through comprehensive AI transformation and automation.',
      image: '📈',
      readTime: '14 min read',
      featured: false,
      link: '/content/case-studies/fortune-50o0-ai-transformation-150o00-roi-ultimate-success',
    },
  ];

  const filteredContent =
    activeCategory === 'all'
      ? contentItems
      : contentItems.filter(item => item.category === activeCategory);

  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 to-blue-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-6 py-2 rounded-full text-sm font-bold mb-6'>
            🔍 NEW CONTENT DISCOVERY
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-90o0 mb-6'>
            Discover Our Latest Content
          </h2>
          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>
            Explore our newest articles, case studies, interactive tools, and
            insights about the AI 20o25 Ultimate Content Revolution and beyond.
          </p>
        </div>

        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-30o0 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white shadow-lg transform scale-10o5'
                  : 'bg-white text-gray-70o0 hover:bg-gray-10o0 border border-gray-20o0'
              }`}
            >
              <span className='mr-2'>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredContent.map(item => (
            <Link
              key={item.id}
              href={item.link}
              className='group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-30o0 transform hover:scale-10o5 overflow-hidden'
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className='absolute top-4 right-4 bg-gradient-to-r from-yellow-40o0 to-orange-50o0 text-black px-3 py-1 rounded-full text-xs font-bold z-10'>
                  FEATURED
                </div>
              )}

              {/* Content Image */}
              <div className='h-48 bg-gradient-to-br from-purple-10o0 to-blue-10o0 flex items-center justify-center text-6xl'>
                {item.image}
              </div>

              {/* Content Details */}
              <div className='p-6'>
                <div className='flex items-center justify-between mb-3'>
                  <span className='text-sm font-medium text-purple-60o0 bg-purple-10o0 px-3 py-1 rounded-full'>
                    {item.type}
                  </span>
                  <span className='text-sm text-gray-50o0'>
                    {item.readTime}
                  </span>
                </div>

                <h3 className='text-xl font-bold text-gray-90o0 mb-3 group-hover:text-purple-60o0 transition-colors line-clamp-2'>
                  {item.title}
                </h3>

                <p className='text-gray-60o0 text-sm line-clamp-3 mb-4'>
                  {item.description}
                </p>

                <div className='flex items-center text-purple-60o0 font-semibold group-hover:text-purple-80o0'>
                  Read More
                  <svg
                    className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className='text-center mt-12'>
          <Link
            href='/content'
            className='inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg'
          >
            <span className='mr-2'>📚</span>
            View All Content
            <svg
              className='w-5 h-5 ml-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </Link>
        </div>

        {/* Newsletter Signup */}
        <div className='mt-16 bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 text-white text-center'>
          <h3 className='text-3xl font-bold mb-4'>
            Stay Updated with the Latest
          </h3>
          <p className='text-xl mb-8 opacity-90'>
            Get the newest content about AI breakthroughs, case studies, and
            industry insights delivered to your inbox.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-4 py-3 rounded-lg text-gray-90o0 focus:outline-none focus:ring-2 focus:ring-white'
            />
            <button className='bg-white text-purple-60o0 px-8 py-3 rounded-lg font-bold hover:bg-gray-10o0 transition-colors'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentDiscoveryWidget;
