import React, { useRef } from 'react';

// Simple icon components
const ChevronLeft = ({ className }: { className: string }) => (
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
      d='M15 19l-7-7 7-7'
    />
  </svg>
);

const ChevronRight = ({ className }: { className: string }) => (
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
      d='M9 5l7 7-7 7'
    />
  </svg>
);

interface Screenshot {
  id: number;
  alt: string;
  src: string;
}

const mockScreenshots: Screenshot[] = [
  { id: 1, alt: 'Dashboard screen', src: '/placeholder.svg' },
  { id: 2, alt: 'Talent matching screen', src: '/placeholder.svg' },
  { id: 3, alt: 'Resume builder screen', src: '/placeholder.svg' },
  { id: 4, alt: 'Messaging screen', src: '/placeholder.svg' },
  { id: 5, alt: 'Profile screen', src: '/placeholder.svg' },
];

const AppScreenshots: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='py-16 bg-zion-darker'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-white mb-4'>
            App Screenshots
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Take a look at our mobile app interface and see how easy it is to
            find your next opportunity.
          </p>
        </div>

        <div className='relative'>
          <div
            className='flex space-x-4 overflow-x-auto scrollbar-hide'
            ref={scrollContainerRef}
          >
            {mockScreenshots.map(screenshot => (
              <div
                key={screenshot.id}
                className='flex-shrink-0 w-64 h-96 bg-white/10 rounded-lg overflow-hidden'
              >
                <div className='w-full h-full bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 flex items-center justify-center'>
                  <div className='text-center text-white'>
                    <div className='w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center'>
                      <svg
                        className='w-8 h-8'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                        />
                      </svg>
                    </div>
                    <p className='text-sm font-medium'>{screenshot.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('left')}
            className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200'
          >
            <ChevronLeft className='w-6 h-6' />
          </button>

          <button
            onClick={() => scroll('right')}
            className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200'
          >
            <ChevronRight className='w-6 h-6' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppScreenshots;
