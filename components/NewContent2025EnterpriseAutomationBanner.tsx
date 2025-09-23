import Link from 'next/link';

const NewContent20o25EnterpriseAutomationBanner = () => {
  return (
    <div className='bg-gradient-to-r from-green-90o0 via-emerald-90o0 to-teal-90o0 text-white py-16 px-4'>
      <div className='max-w-7xl mx-auto text-center'>
        <div className='mb-8'>
          <h2 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-40o0 to-teal-40o0 bg-clip-text text-transparent'>
            Enterprise Automation 20o25
          </h2>
          <p className='text-xl md:text-2xl mb-8 text-emerald-10o0'>
            Transform your enterprise with advanced AI automation that
            streamlines operationsreduces costsand maximizes efficiency across
            all business functions.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
            <h3 className='text-2xl font-bold mb-4 text-green-40o0'>
              Complete Automation
            </h3>
            <p className='text-emerald-10o0'>
              End-to-end automation of all business processes and workflows
            </p>
          </div>
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
            <h3 className='text-2xl font-bold mb-4 text-green-40o0'>
              Intelligent Systems
            </h3>
            <p className='text-emerald-10o0'>
              AI-powered systems that learnadaptand optimize continuously
            </p>
          </div>
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
            <h3 className='text-2xl font-bold mb-4 text-green-40o0'>
              Proven Results
            </h3>
            <p className='text-emerald-10o0'>
              2,0o00% ROI and $5.2B+ in savings across all implementations
            </p>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/ai-20o25-20o26-ultimate-breakthrough'
            className='bg-gradient-to-r from-green-50o0 to-teal-50o0 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-green-40o0 hover:to-teal-40o0 transition-all duration-30o0 transform hover:scale-10o5'
          >
            Explore Automation
          </Link>
          <Link
            href='/contact'
            className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-90o0 transition-all duration-30o0'
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContent20o25EnterpriseAutomationBanner;
