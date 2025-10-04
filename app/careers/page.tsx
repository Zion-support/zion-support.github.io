<<<<<<< HEAD
import React from 'react';

const CareersPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>
          Careers at Zion Tech
        </h1>

        <div className='grid md:grid-cols-2 gap-8'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-2xl font-semibold text-gray-800 mb-6'>
              Open Positions
            </h3>

            <div className='space-y-6'>
              <div className='border-l-4 border-blue-500 pl-4'>
                <h4 className='text-xl font-medium text-gray-900'>
                  Senior AI Engineer
                </h4>
                <p className='text-gray-600 mt-2'>
                  Join our AI team to develop cutting-edge machine learning
                  solutions.
                </p>
                <span className='inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full'>
                  Full-time • Remote
                </span>
              </div>

              <div className='border-l-4 border-purple-500 pl-4'>
                <h4 className='text-xl font-medium text-gray-900'>
                  DevOps Engineer
                </h4>
                <p className='text-gray-600 mt-2'>
                  Help us build and maintain our cloud infrastructure and
                  automation systems.
                </p>
                <span className='inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full'>
                  Full-time • Hybrid
                </span>
              </div>

              <div className='border-l-4 border-orange-500 pl-4'>
                <h4 className='text-xl font-medium text-gray-900'>
                  Frontend Developer
                </h4>
                <p className='text-gray-600 mt-2'>
                  Create beautiful and responsive user interfaces for our
                  products.
                </p>
                <span className='inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full'>
                  Full-time • Remote
                </span>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-2xl font-semibold text-gray-800 mb-6'>
              Why Work With Us?
            </h3>

            <div className='space-y-4'>
              <div className='flex items-start'>
                <div className='flex-shrink-0'>
                  <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
                    <span className='text-blue-600 font-semibold'>1</span>
                  </div>
                </div>
                <div className='ml-4'>
                  <h4 className='text-lg font-medium text-gray-900'>
                    Innovation
                  </h4>
                  <p className='text-gray-600'>
                    Work on cutting-edge AI and technology solutions.
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='flex-shrink-0'>
                  <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center'>
                    <span className='text-green-600 font-semibold'>2</span>
                  </div>
                </div>
                <div className='ml-4'>
                  <h4 className='text-lg font-medium text-gray-900'>
                    Flexibility
                  </h4>
                  <p className='text-gray-600'>
                    Remote work options and flexible schedules.
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='flex-shrink-0'>
                  <div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center'>
                    <span className='text-purple-600 font-semibold'>3</span>
                  </div>
                </div>
                <div className='ml-4'>
                  <h4 className='text-lg font-medium text-gray-900'>Growth</h4>
                  <p className='text-gray-600'>
                    Continuous learning and career development opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <h4 className='text-lg font-medium text-gray-900 mb-4'>
                Benefits
              </h4>
              <ul className='space-y-2 text-gray-600'>
                <li>• Competitive salary and equity</li>
                <li>• Health, dental, and vision insurance</li>
                <li>• 401(k) with company matching</li>
                <li>• Unlimited PTO</li>
                <li>• Professional development budget</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-12 text-center'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Ready to Join Our Team?
          </h2>
          <p className='text-gray-600 mb-6'>
            Send us your resume and let us know why you'd be a great fit for
            Zion Tech.
          </p>
          <a
            href='mailto:careers@ziontech.com'
            className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
=======
import React from 'react'; const CareersPage: React.FC = () => { return ( <div className="min-h-screen bg-gray-50" > <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" > <h1 className="text-4xl font-bold text-gray-900 mb-8" > Careers at Zion Tech </h1> <div className="grid md:grid-cols-2 gap-8" > <div className="bg-white rounded-lg shadow-md p-6" > <h3 className="text-2xl font-semibold text-gray-800 mb-6" >Open Positions</h3> <div className="space-y-6" > <div className="border-l-4 border-blue-500 pl-4" > <h4 className="text-xl font-medium text-gray-900" >Senior AI Engineer</h4> <p className="text-gray-600 mt-2" > Join our AI team to develop cutting-edge machine learning solutions. </p> <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full" > Full-time • Remote </span> </div> <div className="border-l-4 border-purple-500 pl-4" > <h4 className="text-xl font-medium text-gray-900" >DevOps Engineer</h4> <p className="text-gray-600 mt-2" > Help us build and maintain our cloud infrastructure and automation systems. </p> <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full" > Full-time • Hybrid </span> </div> <div className="border-l-4 border-orange-500 pl-4" > <h4 className="text-xl font-medium text-gray-900" >Frontend Developer</h4> <p className="text-gray-600 mt-2" > Create beautiful and responsive user interfaces for our products. </p> <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full" > Full-time • Remote </span> </div> </div> </div> <div className="bg-white rounded-lg shadow-md p-6" > <h3 className="text-2xl font-semibold text-gray-800 mb-6" >Why Work With Us?</h3> <div className="space-y-4" > <div className="flex items-start" > <div className="flex-shrink-0" > <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center" > <span className="text-blue-600 font-semibold" >1</span> </div> </div> <div className="ml-4" > <h4 className="text-lg font-medium text-gray-900" >Innovation</h4> <p className="text-gray-600" >Work on cutting-edge AI and technology solutions.</p> </div> </div> <div className="flex items-start" > <div className="flex-shrink-0" > <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center" > <span className="text-green-600 font-semibold" >2</span> </div> </div> <div className="ml-4" > <h4 className="text-lg font-medium text-gray-900" >Flexibility</h4> <p className="text-gray-600" >Remote work options and flexible schedules.</p> </div> </div> <div className="flex items-start" > <div className="flex-shrink-0" > <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center" > <span className="text-purple-600 font-semibold" >3</span> </div> </div> <div className="ml-4" > <h4 className="text-lg font-medium text-gray-900" >Growth</h4> <p className="text-gray-600" >Continuous learning and career development opportunities.</p> </div> </div> </div> <div className="mt-8" > <h4 className="text-lg font-medium text-gray-900 mb-4" >Benefits</h4> <ul className="space-y-2 text-gray-600" > <li>• Competitive salary and equity</li> <li>• Health, dental, and vision insurance</li> <li>• 401(k) with company matching</li> <li>• Unlimited PTO</li> <li>• Professional development budget</li> </ul> </div> </div> </div> <div className="mt-12 text-center" > <h2 className="text-2xl font-bold text-gray-900 mb-4" >Ready to Join Our Team?</h2> <p className="text-gray-600 mb-6" >' Send us your resume and let us know why you'd be a great fit for Zion Tech. </p> <a href="mailto:careers@ziontech.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors" > Apply Now </a> </div> </div> </div> ); }; export default CareersPage;'
>>>>>>> b64650e00461d09eaf1ec492cc713ff355215146
