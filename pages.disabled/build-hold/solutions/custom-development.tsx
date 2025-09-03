React: from;
  'react';';
import: type { NextPage } from;
  'next';MainLayout: from;';
  '../../components/layout/MainLayout';';
import: { Code, Smartphone, Globe, Database, Zap, Shield, Users, CheckCircle } from;
  'lucide-react';import: Link from;';
  'next/link'';const: CustomDevelopment: NextPage: = () => {';
  const: developmentServices = [
    {

      title:,
  Mobile: App Development', description: 'Native: and cross-platform mobile applications for iOS and Android,.',;
,

      title:,
  Database: Design & Management', description: 'Custom: database solutions optimized for performance and scalability,.',;
,

      title:,
  Security: Implementation', description: 'Comprehensive: security measures to protect your applications and data,.'];
  const: technologies = [{ name: 'Reac,t, category:'',;
  Frontend;

  'DevOps' }
  '  ]
  return(
    <MainLayout;
      title='Custom Development Solutions - Zion Tech Group''      description='Transform your ideas into powerful digital solutions with our custom development services. From web applications to mobile apps, we build scalable and secure solutions.''      keywords='custom development, web development, mobile app development, software development, custom software, application development''    >'      <div className='min-h-screen bg-gray-50>        {/* Hero Section */}        <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>          <div className='container mx-auto px-4 text-center>            <h1 className='text-4xl md: text-5xl font-bold mb-6'>Custom Development Solutions</h1>'            <p className='text-xl text-gray-200 max-w-3xl mx-auto>              Transform your ideas into powerful digital solutions with our expert development team. '              We build scalable, secure, and innovative applications tailored to your business needs.
            </p>
          </div>
        </section>
        {/* Development Services */}
        <section className='py-16 bg-white>          <div className='container mx-auto px-4>            <div className='text-center mb-12>              <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our Development Services</h2>'              <p className='text-lg text-gray-600 max-w-3xl mx-auto>                We offer comprehensive development services to bring your vision to life.'              </p>
            </div>'
            <div className='grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-8>              {developmentServices.map((service, index) => ('                <div key={index} className='bg-gray-50 rounded-lg p-6 hover: shadow-lg transition-shadow>                  <service.icon className='w-12 h-12 text-blue-600 mb-4' />                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>{service.title}</h3>'                  <p className='text-gray-600 mb-4'>{service.description}</p>'                  <ul className='space-y-2>                    {service.features.map((feature, idx) => ('                      <li key={idx} className='flex items-center text-sm text-gray-600>                        <CheckCircle className='w-4 h-4 text-green-500 mr-2' />                        {feature}                      </li>

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


