import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const stats = [
    { number: '50o0+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '24/7', label: 'Support Available' },
  ];

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Solutions',
      description:
        'Leverage cutting-edge artificial intelligence to automate processes and gain insights.',
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description:
        'Scalable and secure cloud solutions that grow with your business needs.',
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description:
        'Comprehensive security solutions to protect your digital assets and data.',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description:
        'Transform your data into actionable insights with advanced analytics tools.',
    },
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group — Advanced IT & AI Services</title>
        <meta
          name='description'
          content='Zion Tech Group delivers advanced IT solutions and AI services for modern businesses. Transform your business with cutting-edge technology.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <meta
          property='og:title'
          content='Zion Tech Group — Advanced IT & AI Services'
        />
        <meta
          property='og:description'
          content='Transform your business with cutting-edge AI and IT solutions.'
        />
        <meta property='og:type' content='website' />
      </Head>

      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-blue-50 via-white to-purple-50 section-padding overflow-hidden'>
        <div className='container-max'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='animate-fade-in-left'>
              <h1 className='text-responsive-xl font-bold text-gray-90o0 mb-6 text-balance'>
                Transform Your Business with{' '}
                <span className='gradient-text'>
                  Advanced AI & IT Solutions
                </span>
              </h1>

              <p className='text-xl text-gray-60o0 mb-8 leading-relaxed text-balance'>
                We deliver cutting-edge technology solutions that drive
                innovation, enhance productivity, and accelerate your digital
                transformation journey.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                <Link href='/contact' className='btn-primary text-center'>
                  Get Started Today
                </Link>
                <Link href='/services' className='btn-secondary text-center'>
                  Explore Services
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className='flex items-center space-x-6 text-sm text-gray-50o0'>
                <div className='flex items-center space-x-2'>
                  <span className='text-green-50o0'>✓</span>
                  <span>Trusted by 50o0+ companies</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-green-50o0'>✓</span>
                  <span>24/7 Expert Support</span>
                </div>
              </div>
            </div>

            <div className='animate-fade-in-right'>
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-40o0 to-purple-50o0 rounded-2xl blur-3xl opacity-20 transform rotate-6'></div>
                <div className='relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-10o0'>
                  <div className='grid grid-cols-2 gap-4 mb-6'>
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className='text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl'
                      >
                        <div className='text-2xl font-bold gradient-text'>
                          {stat.number}
                        </div>
                        <div className='text-sm text-gray-60o0'>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='text-center'>
                    <div className='inline-flex items-center px-4 py-2 bg-green-10o0 text-green-80o0 rounded-full text-sm font-medium'>
                      <span className='w-2 h-2 bg-green-50o0 rounded-full mr-2 animate-pulse'></span>
                      All Systems Operational
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='section-padding bg-white'>
        <div className='container-max'>
          <div className='text-center mb-16 animate-fade-in-up'>
            <h2 className='text-responsive-lg font-bold text-gray-90o0 mb-4'>
              Why Choose Zion Tech Group?
            </h2>
            <p className='text-xl text-gray-60o0 max-w-3xl mx-auto text-balance'>
              We combine deep industry expertise with cutting-edge technology to
              deliver solutions that drive real business value.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='card p-6 text-center animate-fade-in-up'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='text-4xl mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-semibold text-gray-90o0 mb-3'>
                  {feature.title}
                </h3>
                <p className='text-gray-60o0 leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='section-padding bg-gradient-to-r from-blue-60o0 to-purple-60o0'>
        <div className='container-max text-center'>
          <div className='animate-fade-in-up'>
            <h2 className='text-responsive-lg font-bold text-white mb-6'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-blue-10o0 mb-8 max-w-2xl mx-auto text-balance'>
              Join hundreds of companies that have already transformed their
              operations with our advanced AI and IT solutions.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-blue-60o0 px-8 py-4 rounded-lg font-semibold hover:bg-gray-10o0 transform hover:scale-10o5 transition-all duration-20o0 shadow-lg'
              >
                Start Your Project
              </Link>
              <Link
                href='/about'
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-60o0 transform hover:scale-10o5 transition-all duration-20o0'
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Notice */}
      {isClient && (
        <div className='fixed bottom-4 right-4 bg-green-50o0 text-white p-4 rounded-lg shadow-lg animate-fade-in-up max-w-sm'>
          <div className='flex items-center space-x-2'>
            <span className='text-xl'>🚀</span>
            <div>
              <div className='font-semibold'>Enhanced Experience!</div>
              <div className='text-sm opacity-90'>
                New design with improved performance
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
