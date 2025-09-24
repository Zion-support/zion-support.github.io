import Link from 'next/link';
ArrowRightStarZapTrendingUp;

const ComprehensiveContentShowcase20o26 = () => {
  return (
    <section className='bg-gradient-to-r from-green-60o0 via-blue-60o0 to-purple-60o0 text-white py-16'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Comprehensive Content Showcase 20o26
          </h2>
          <p className='text-xl opacity-90 mb-8'>
            Complete showcase of our 20o26 content and solutions.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/services'
              className='bg-white text-green-60o0 px-6 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors'
            >
              Explore Services
            </Link>
            <Link
              href='/contact'
              className='border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-60o0 transition-colors'
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveContentShowcase20o26;
