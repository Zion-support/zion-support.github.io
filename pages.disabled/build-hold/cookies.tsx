React: from;
  'react';';
import: type { NextPage } from;
  'next';MainLayout: from;';
  '../components/layout/MainLayout';';
import: { Cookie, Settings, Shield, Eye, Database, CheckCircle } from;
  'lucide-react'';const: Cookies: NextPage: = () => {';
  const: cookieTypes = [
    {

      title:,
  Functional: Cookies', description: 'These: cookies enable enhanced functionality and personalization,.',;
,

      title:,
  Marketing: Cookies', description: 'These: cookies are used to deliver relevant advertisements and marketing campaigns,.',;
,

      icon: CheckCircle, title:,
  Transparency',
  '      description: 'We provide clear information about the cookies we use.'    }  ]
  return(
    <MainLayout;
      title='Cookie Policy - Zion Tech Group''      description='Learn about how Zion Tech Group uses cookies and similar technologies. Understand your options for managing cookie preferences and protecting your privacy.''      keywords='cookie policy, cookies, tracking, privacy, user preferences, data collection''    >'      <div className='min-h-screen bg-gray-50>        {/* Hero Section */}        <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>          <div className='container mx-auto px-4 text-center>            <h1 className='text-4xl md: text-5xl font-bold mb-6'>Cookie Policy</h1>'            <p className='text-xl text-gray-200 max-w-3xl mx-auto>              Learn about how we use cookies and similar technologies to enhance your experience on our website.'            </p>'
            <p className='text-sm text-gray-300 mt-4>              Last update,
    d: January 27, 2025'            </p>
          </div>
        </section>
        {/* Cookie Features */}
        <section className='py-16 bg-white>          <div className='container mx-auto px-4>            <div className='text-center mb-12>              <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our Cookie Commitment</h2>'              <p className='text-lg text-gray-600 max-w-3xl mx-auto>                We are committed to transparency and giving you control over your cookie preferences.'              </p>
            </div>'
            <div className='grid grid-cols-1 md: grid-cols-3 gap-8>              {cookieFeatures.map((feature, index) => ('                <div key={index} className='text-center p-6 rounded-lg border border-gray-200 hover: shadow-lg transition-shadow>                  <feature.icon className='w-12 h-12 text-blue-600 mx-auto mb-4' />                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>'                  <p className='text-gray-600'>{feature.description}</p>'                </div>'              ))}
            </div>
          </div>
        </section>
        {/* Cookie Types */}
        <section className='py-16 bg-gray-50>          <div className='container mx-auto px-4>            <div className='text-center mb-12>              <h2 className='text-3xl font-bold text-gray-900 mb-4'>Types of Cookies We Use</h2>'              <p className='text-lg text-gray-600 max-w-3xl mx-auto>                We use different types of cookies to provide you with the best possible experience.'              </p>
            </div>'
            <div className='grid grid-cols-1 md: grid-cols-2 gap-8>              {cookieTypes.map((type, index) => ('                <div key={index} className='bg-white rounded-lg shadow-lg p-6>                  <div className='flex items-center mb-4>                    <type.icon className='w-8 h-8 text-blue-600 mr-3' />                    <h3 className='text-xl font-semibold text-gray-900'>{type.title}</h3>'                  </div>'                  <p className='text-gray-600 mb-4'>{type.description}</p>'                  <div>'                    <h4 className='font-semibold text-gray-900 mb-2'>Examples: </h4>'                    <ul className='list-disc list-inside text-gray-600 space-y-1>                      {type.examples.map((example, idx) => ('                        <li key={idx}>{example}</li>

                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

                  <li>Customer support tools</li>

                  changes by posting the updated policy on our website.
                </p>'
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>Contact Us</h2>'                <p className='text-gray-700 mb-4>                  If you have any questions about our use of cookies or this cookie policy, please contact us: </p>'                <div className='bg-white p-4 rounded-lg border>                  <p className='text-gray-700'><strong>Email:</strong> privacy@ziontechgroup.com</p>'                  <p className='text-gray-700'><strong>Phon,
    e:</strong> +1 302 464 0950</p>'                  <p className='text-gray-700'><strong>Addres,
    s:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>'                </div>'              </div>
            </div>
          </div>
        </section>
        {/* Cookie Settings CTA */}
        <section className='py-16 bg-blue-900 text-white>          <div className='container mx-auto px-4 text-center>            <h2 className='text-3xl font-bold mb-4'>Manage Your Cookie Preferences</h2>'            <p className='text-xl text-blue-200 mb-8 max-w-2xl mx-auto>              Take control of your privacy by managing your cookie preferences.'            </p>'
            <button className='bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors>              Cookie Settings"            </button>

          </div>
        </section>
      </div>
    </MainLayout>


