import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">About Zion Tech Group</h1>
          <div className="prose prose-lg text-gray-300">
            <p className="mb-6">
              Zion Tech Group is a leading provider of advanced AI and IT solutions, 
              dedicated to transforming businesses through innovative technology.
            </p>
            <p className="mb-6">
              Our team of experts combines deep technical knowledge with business 
              acumen to deliver solutions that drive real value and competitive advantage.
            </p>
            <p>
              We believe in the power of technology to solve complex problems and 
              create opportunities for growth and innovation.
            </p>
          </div>
        </div>
      </main>
<<<<<<< HEAD

      {/* <Footer /> */}
=======
      
      <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-ca9d
    </div>
  );
};

export default About;