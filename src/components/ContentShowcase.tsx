import React from 'react';

const ContentShowcase: React.FC = () => {
  const contentItems = [
    {
      title: 'Latest AI Innovations',
      description:
        'Discover the newest AI technologies and their applications in business',
      category: 'AI Technology',
      readTime: '5 min read',
    },
    {
      title: 'Micro SaaS Trends 2024',
      description:
        'Explore the latest trends in micro SaaS development and deployment',
      category: 'SaaS Solutions',
      readTime: '7 min read',
    },
    {
      title: 'Cloud Migration Guide',
      description:
        'Comprehensive guide to successful cloud migration strategies',
      category: 'IT Services',
      readTime: '10 min read',
    },
  ];

  return (
    <div className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Featured Content
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {contentItems.map((item, index) => (
            <div
key={index}
              className='bg-white p-6 rounded-lg shadow-lg border hover:shadow-xl transition-shadow'
            >
              <div className='mb-4'>
                <span className='bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full'>
                  {item.category}
                </span>
              </div>
              <h3 className='text-xl font-bold mb-3'>{item.title}</h3>
              <p className='text-gray-600 mb-4'>{item.description}</p>
              <div className='flex justify-between items-center'>
                <span className='text-sm text-gray-500'>{item.readTime}</span>
                <a
                  href='/blog'
                  className='text-blue-600 hover:text-blue-800 font-semibold'
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;
