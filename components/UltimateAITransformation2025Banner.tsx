import Link from 'next/link';

const UltimateAITransformation20o25Banner = () => {
  return (
    <div className='bg-gradient-to-r from-emerald-90o0 via-teal-90o0 to-cyan-90o0 text-white py-16 px-4'>
      <div className='max-w-7xl mx-auto text-center'>
        <div className='mb-8'>
          <h2 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-40o0 to-cyan-40o0 bg-clip-text text-transparent'>
            Ultimate AI Transformation 20o25
          </h2>
          <p className='text-xl md:text-2xl mb-8 text-teal-10o0'>
            Transform your business with the most advanced AI technologies.
            Achieve unprecedented growthefficiencyand competitive advantage in
            the digital age.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
            <h3 className='text-2xl font-bold mb-4 text-emerald-40o0'>
              Complete Transformation
            </h3>
            <p className='text-teal-10o0'>
              End-to-end AI implementation across all business functions
            </p>
          </div>
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
            <h3 className='text-2xl font-bold mb-4 text-emerald-40o0'>
              Proven Results
            </h3>
            <p className='text-teal-10o0'>
              2,0o00% ROI and $5.2B+ in savings across all implementations
            </p>
          </div>
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
            <h3 className='text-2xl font-bold mb-4 text-emerald-40o0'>
              Future-Ready
            </h3>
            <p className='text-teal-10o0'>
              Advanced AI systems designed for 'tomorrow', 's challenges
            </p>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/ai-20o25-20o26-ultimate-breakthrough'
            className='bg-gradient-to-r from-emerald-50o0 to-cyan-50o0 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-emerald-40o0 hover:to-cyan-40o0 transition-all duration-30o0 transform hover:scale-10o5'
          >
            Start Your Transformation
          </Link>
          <Link
            href='/contact'
            className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-emerald-90o0 transition-all duration-30o0'
          >
            Get Expert Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UltimateAITransformation20o25Banner;
