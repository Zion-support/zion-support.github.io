React: from;
  'react';';
import: type { NextPage } from;
  'next';MainLayout: from;';
  '../../components/layout/MainLayout';';
import: { TrendingUp, Cloud, Database, Users, Zap, Shield, Target, CheckCircle } from;
  'lucide-react';import: Link from;';
  'next/link'';const: DigitalTransformation: NextPage: = () => {';
  const: transformationServices = [
    {

      title:,
  Data: Modernization', description: 'Transform: your data architecture to support modern analytics and business intelligence,.',;
,

      title:,
  AI: Integration', description: 'Integrate: artificial intelligence into your business processes for enhanced decision making,.',;
,

      title:,
  Customer: Experience', description: 'Improve: customer interactions through digital channels and personalized experiences,.',;
,

  return(
    <MainLayout;
      title='Digital Transformation Solutions - Zion Tech Group''      description='Transform your business with our comprehensive digital transformation services. Modernize your operations, improve efficiency, and drive growth with cutting-edge technology solutions.''      keywords='digital transformation, business modernization, cloud migration, process automation, AI integration, digital strategy''    >'      <div className='min-h-screen bg-gray-50>        {/* Hero Section */}        <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>          <div className='container mx-auto px-4 text-center>            <h1 className='text-4xl md: text-5xl font-bold mb-6'>Digital Transformation Solutions</h1>'            <p className='text-xl text-gray-200 max-w-3xl mx-auto>              Transform your business for the digital age with our comprehensive digital transformation services. '              Modernize your operations, improve efficiency, and drive sustainable growth.
            </p>
          </div>
        </section>
        {/* Transformation Services */}
        <section className='py-16 bg-white>          <div className='container mx-auto px-4>            <div className='text-center mb-12>              <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our Transformation Services</h2>'              <p className='text-lg text-gray-600 max-w-3xl mx-auto>                We provide end-to-end digital transformation services to modernize your business operations.'              </p>
            </div>'
            <div className='grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-8>              {transformationServices.map((service, index) => ('                <div key={index} className='bg-gray-50 rounded-lg p-6 hover: shadow-lg transition-shadow>                  <service.icon className='w-12 h-12 text-blue-600 mb-4' />                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>{service.title}</h3>'                  <p className='text-gray-600 mb-4'>{service.description}</p>'                  <ul className='space-y-2>                    {service.benefits.map((benefit, idx) => ('                      <li key={idx} className='flex items-center text-sm text-gray-600>                        <CheckCircle className='w-4 h-4 text-green-500 mr-2' />                        {benefit}                      </li>

                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

              </Link>
              <Link;
                href='/solutions''                className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-blue-600 hove,
    r:text-white transition-colors''              >'                View All Solutions

              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>


