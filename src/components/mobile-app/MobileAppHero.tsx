import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

// Simple icon components
const ArrowRight = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M17 8l4 4m0 0l-4 4m4-4H3'
    />
  </svg>
);

const Phone = ({ className }: { className: string }) => (
  <svg
    className={className}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
    />
  </svg>
);

const MobileAppHero: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-zion-dark via-zion-darker to-zion-dark text-white flex items-center'>
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <div className='space-y-4'>
              <h1 className='text-5xl lg:text-6xl font-bold leading-tight'>
                Zion Tech Group
                <span className='block text-zion-cyan'>Mobile App</span>
              </h1>
              <p className='text-xl text-gray-300 max-w-lg'>
                Access our AI services, cloud solutions, and tech expertise
                right from your mobile device.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Link to='/open-app'>
                <Button
                  variant='outline'
                  size='lg'
                  className='flex gap-2 border-white text-white hover:bg-white/10'
                >
                  Open App
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>

          <div className='flex-1 flex justify-center'>
            <div className='relative w-64 h-auto'>
              <div className='absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl'></div>
              <Phone className='w-full h-auto text-white' />
              {/* This would be replaced with an actual phone mockup image in production */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppHero;
