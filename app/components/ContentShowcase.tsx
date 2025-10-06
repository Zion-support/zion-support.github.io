import React from 'react';

const ContentShowcase: React.FC = () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const contentItems = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      title: "AI-Powered Automation",
      description: "Streamline your operations with intelligent automation solutions.",
      image: "/api/placeholder/300/200",
      category: "AI Solutions"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses.",
      image: "/api/placeholder/300/200",
=======
      title: "AI-Powered Solutions",
      description: "Transform your business with our cutting-edge AI technologies.",
=======
      title: "AI-Powered Solutions",
      description: "Transform your business with cutting-edge AI technology",
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02dd
      icon: "🤖",
      category: "Technology"
    },
    {
<<<<<<< HEAD
      title: "Enterprise Consulting",
      description: "Expert guidance for large-scale digital transformation projects.",
      icon: "🏢",
      category: "Consulting"
    },
    {
      title: "Cloud Migration",
      description: "Seamless transition to cloud-based infrastructure and services.",
      icon: "☁️",
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0883
      category: "Infrastructure"
    },
    {
      title: "Data Analytics",
<<<<<<< HEAD
      description: "Transform your data into actionable insights and business intelligence.",
      image: "/api/placeholder/300/200",
      category: "Analytics"
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with advanced security solutions and monitoring.",
      image: "/api/placeholder/300/200",
      category: "Security"
=======
      description: "Unlock insights from your data with advanced analytics tools.",
      icon: "📊",
      category: "Analytics"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0883
=======
      title: "Digital Transformation",
      description: "Modernize your operations with our comprehensive digital solutions",
      icon: "💻",
      category: "Consulting"
    },
    {
      title: "Enterprise Automation",
      description: "Streamline processes and increase efficiency with intelligent automation",
      icon: "⚡",
      category: "Automation"
    },
    {
      title: "Data Analytics",
      description: "Unlock insights from your data with advanced analytics tools",
      icon: "📊",
      category: "Analytics"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02dd
=======
  const contentItems = [
    {
      title: 'AI Transformation Guide',
      description: 'Complete guide to implementing AI in your enterprise',
      category: 'Guide',
      readTime: '10 min read'
    },
    {
      title: 'ROI Case Studies',
      description: 'Real-world examples of AI implementation success',
      category: 'Case Study',
      readTime: '5 min read'
    },
    {
      title: 'Technical Deep Dive',
      description: 'Advanced AI architecture and implementation strategies',
      category: 'Technical',
      readTime: '15 min read'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Content Showcase
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of services and solutions designed to drive your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                <div className="text-4xl text-blue-600">📊</div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {item.category}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Learn More →
                </button>
=======
  const contentItems = [
    {
      title: 'AI Implementation Guide',
      description: 'A comprehensive guide to implementing AI solutions in your organization.',
      category: 'Guide',
      readTime: '15 min read',
      image: '/images/ai-guide.jpg',
    },
    {
      title: 'Digital Transformation Case Study',
      description: 'How we helped a Fortune 500 company transform their operations.',
      category: 'Case Study',
      readTime: '8 min read',
      image: '/images/case-study.jpg',
    },
    {
      title: 'Future of AI Technology',
      description: 'Exploring the latest trends and predictions in artificial intelligence.',
      category: 'Article',
      readTime: '12 min read',
      image: '/images/future-ai.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest insights, guides, and case studies to help you succeed with AI and technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-4xl">📄</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Read More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
              </div>
            </div>
          ))}
        </div>
<<<<<<< HEAD
      </div>
    </section>
=======
    <div className="bg-gray-50 rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contentItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
=======
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Our Content Showcase
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contentItems.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4 text-center">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-3">
              {item.description}
            </p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02dd
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {item.category}
            </span>
=======
    <div className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Featured Content
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {contentItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {item.category}
              </span>
              <span className="text-gray-500 text-sm">{item.readTime}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              Read More →
            </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
          </div>
        ))}
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0883
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02dd
=======
  return (
    <section className='bg-gradient-to-br from-gray-50 to-blue-50 py-16 rounded-2xl'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-gray-900 mb-12'>
          Our Services
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
            <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6'>
              <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
              </svg>
            </div>
            <h3 className='text-xl font-semibold mb-4'>AI Strategy</h3>
            <p className='text-gray-600 mb-4'>
              Comprehensive AI strategy development and implementation planning.
            </p>
            <div className='text-blue-600 font-semibold'>Learn More →</div>
          </div>
          
          <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
            <div className='w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6'>
              <svg className='w-8 h-8 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
            </div>
            <h3 className='text-xl font-semibold mb-4'>Machine Learning</h3>
            <p className='text-gray-600 mb-4'>
              Custom ML models and algorithms tailored to your business needs.
            </p>
            <div className='text-green-600 font-semibold'>Learn More →</div>
          </div>
          
          <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
            <div className='w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6'>
              <svg className='w-8 h-8 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' />
              </svg>
            </div>
            <h3 className='text-xl font-semibold mb-4'>Data Analytics</h3>
            <p className='text-gray-600 mb-4'>
              Advanced data analytics and business intelligence solutions.
            </p>
            <div className='text-purple-600 font-semibold'>Learn More →</div>
          </div>
        </div>
      </div>
    </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6a72
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
        
        <div className="text-center mt-12">
          <a
            href="/content"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            View All Content
          </a>
        </div>
      </div>
    </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
  );
};

export default ContentShowcase;