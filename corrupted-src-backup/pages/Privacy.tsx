import React from 'react';
// import Footer from '../components/Footer';

const Privacy: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-900'>
      <main className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl font-bold text-white mb-8'>Privacy Policy</h1>
          <div className='prose prose-lg text-gray-300'>
            <p>
              This is our privacy policy. We respect your privacy and are
              committed to protecting your personal data.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
