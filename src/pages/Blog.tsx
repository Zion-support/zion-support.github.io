import React from 'react';
// import Footer from '../components/Footer';

const Blog: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-900'>
      <main className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl font-bold text-white mb-8'>Blog</h1>
          <div className='text-gray-300'>
            <p>
              Welcome to our blog. Stay tuned for the latest insights on AI and
              technology.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
