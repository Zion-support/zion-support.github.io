import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
          </p>
        </div>

        {/* Solutions Grid */}
        <div className='space-y-16'>
          {solutions.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className='bg-white rounded-2xl shadow-xl p-8'
            >
              <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
                {category.category}
              </h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {category.solutions.map((solution, solutionIndex) => (
                  <div
                    key={solutionIndex}
                    className='bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-100'
                  >
                    <div className='text-4xl mb-4'>{solution.icon}</div>
                    <h3 className='text-xl font-bold text-gray-900 mb-3'>
                      {solution.name}
                    </h3>
                    <p className='text-gray-600 mb-4 leading-relaxed'>
                      {solution.description}
                    </p>

                    <div className='mb-4'>
                      <h4 className='font-semibold text-gray-800 mb-2'>
                        Use Cases:
                      </h4>
                      <ul className='space-y-1'>
                        {solution.useCases.map((useCase, useCaseIndex) => (
                          <li
                            key={useCaseIndex}
                            className='text-sm text-gray-600 flex items-center'
                          >
                            <span className='text-purple-500 mr-2'>•</span>                            {useCase}                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className='mb-4'>
                      <h4 className='font-semibold text-gray-800 mb-2'>
                        Key Benefits:
                      </h4>
                      <ul className='space-y-1'>
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className='text-sm text-gray-600 flex items-center'
                          >
                            <span className='text-green-500 mr-2'>✓</span>                            {benefit}                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className='mb-4'>
                      <span className='inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold'>                        Starting at {solution.pricing}
                      </span>
                    </div>

                    <Link
                      href={solution.link}
                      className='inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full text-center'                    >                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className='bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mt-16 text-center text-white'>
          <h2 className='text-3xl font-bold mb-4'>Success Stories</h2>
          <p className='text-xl mb-6 opacity-90'>
            See how our solutions have transformed businesses across industries
          </p>
          <div className='grid md:grid-cols-3 gap-6 mb-8'>
            <div>
              <h3 className='font-semibold mb-2'>🏥 Healthcare Provider</h3>
              <p>40% reduction in diagnostic time with AI-powered imaging</p>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>🏭 Manufacturing Company</h3>
              <p>60% decrease in downtime with IoT predictive maintenance</p>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>🏦 Financial Institution</h3>
              <p>80% reduction in fraud losses with AI risk assessment</p>
            </div>
          </div>
          <Link
            href='/contact'
            className='bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors'          >            View Case Studies
          </Link>
        </div>

        {/* Custom Solutions Section */}
        <div className='mt-16 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>
            Need a Custom Solution?
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
            Can't find exactly what you need? Our expert team can design and
            develop custom solutions tailored to your specific requirements and
            industry challenges.
          </p>
          <div className='grid md:grid-cols-3 gap-6 mb-8'>
            <div className='text-center'>
              <div className='text-4xl mb-4'>🔧</div>
              <h3 className='text-xl font-semibold mb-2'>Custom Development</h3>
              <p className='text-gray-600'>
                Tailored solutions built from the ground up
              </p>
            </div>
            <div className='text-center'>
              <div className='text-4xl mb-4'>🔗</div>
              <h3 className='text-xl font-semibold mb-2'>System Integration</h3>
              <p className='text-gray-600'>
                Seamless integration with existing systems
              </p>
            </div>
            <div className='text-center'>
              <div className='text-4xl mb-4'>📚</div>
              <h3 className='text-xl font-semibold mb-2'>Training & Support</h3>
              <p className='text-gray-600'>
                Comprehensive training and ongoing support
              </p>
            </div>
          </div>
          <Link
            href='/contact'
            className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors'          >            Discuss Custom Solutions
          </Link>
        </div>

        {/* Contact Section */}
        <div className='mt-16 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
            Let's discuss how our industry-specific solutions can address your
            unique challenges and drive measurable business outcomes.
          </p>
          <div className='flex justify-center gap-4 mb-8'>
            <Link
              href='/contact'
              className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors'
            >
              Schedule Consultation
            </Link>
            <Link
              href='/contact'
              className='bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors'            >
              Request Demo
            </Link>
          </div>
          <div className='grid md:grid-cols-3 gap-6 text-sm text-gray-600'>
            <div>
              <h3 className='font-semibold mb-2'>📱 Mobile</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>✉️ Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>🌐 Website</h3>              <p>https://ziontechgroup.com</p>            </div>
          </div>
        </div>
      </main>
    </div>
  );};

export default SolutionsPage;
