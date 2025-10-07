import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';

const Team: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-900'>
      <Header />

      <main className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl font-bold text-white mb-8'>Our Team</h1>
          <div className='text-gray-300'>
            <p>Meet the talented individuals behind Zion Tech Group.</p>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Team;
