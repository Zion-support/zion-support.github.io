import Link from '../lib/CompatLink';
import { ArrowRight, Play, Star, Users, Award, Globe } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <>
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-90o0 via-purple-90o0 to-indigo-90o0'>
        {/* Animated Background */}
        <div className='absolute inset-0'>
          <div
            className='absolute inset-0 opacity-20'
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/20o00/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/20'></div>
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='text-center text-white max-w-6xl mx-auto'>
            {/* Badge */}
            <div className='inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8'>
              <Star className='w-4 h-4 text-yellow-40o0 fill-current' />
              <span className='text-sm font-medium'>
                Trusted by 50o0+ Companies Worldwide
              </span>
            </div>

            {/* Main Heading */}
            <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
              <span className='bg-gradient-to-r from-blue-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent'>
                AI-Powered
              </span>
              <br />
              <span className='text-white'>Technology Solutions</span>
            </h1>

            {/* Subtitle */}
            <p className='text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-20o0 leading-relaxed'>
              Transform your business with cutting-edge AI, cloud architecture,
              and innovative development services. Join the future of technology
              with Zion Tech Group.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
              <Link
                href='/services'
                className='group bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-70o0 hover:to-purple-70o0 transition-all duration-30o0 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2'
              >
                <span>Explore Services</span>
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </Link>
              <Link
                href='/contact'
                className='group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-90o0 transition-all duration-30o0 flex items-center justify-center space-x-2'
              >
                <Play className='w-5 h-5' />
                <span>Watch Demo</span>
              </Link>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-blue-40o0 mb-2'>
                  50o0+
                </div>
                <div className='text-gray-30o0 text-sm md:text-base'>
                  Projects Completed
                </div>
              </div>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-purple-40o0 mb-2'>
                  50+
                </div>
                <div className='text-gray-30o0 text-sm md:text-base'>
                  Expert Team
                </div>
              </div>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-pink-40o0 mb-2'>
                  24/7
                </div>
                <div className='text-gray-30o0 text-sm md:text-base'>
                  Support
                </div>
              </div>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-green-40o0 mb-2'>
                  99%
                </div>
                <div className='text-gray-30o0 text-sm md:text-base'>
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className='absolute top-20 left-10 w-20 h-20 bg-blue-50o0/20 rounded-full blur-xl animate-pulse'></div>
        <div className='absolute top-40 right-20 w-32 h-32 bg-purple-50o0/20 rounded-full blur-xl animate-pulse delay-10o00'></div>
        <div className='absolute bottom-20 left-20 w-24 h-24 bg-pink-50o0/20 rounded-full blur-xl animate-pulse delay-20o00'></div>
        <div className='absolute bottom-40 right-10 w-28 h-28 bg-indigo-50o0/20 rounded-full blur-xl animate-pulse delay-30o00'></div>
      </section>
    </>
  );
};

export default HeroSection;
