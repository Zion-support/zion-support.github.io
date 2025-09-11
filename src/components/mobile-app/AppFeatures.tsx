import React from 'react';

// Simple icon components
const Brain = ({ className }: { className: string }) => (
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
      d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    />
  </svg>
);

const Clock = ({ className }: { className: string }) => (
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
      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

const Award = ({ className }: { className: string }) => (
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
      d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
    />
  </svg>
);

const Zap = ({ className }: { className: string }) => (
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
      d='M13 10V3L4 14h7v7l9-11h-7z'
    />
  </svg>
);

const features = [
  {
    icon: <Brain className='h-10 w-10 text-zion-cyan' />,
    title: 'AI-Powered Matching',
    description:
      'Advanced AI algorithms match you with the perfect job opportunities based on your skills and preferences.',
  },
  {
    icon: <Clock className='h-10 w-10 text-zion-cyan' />,
    title: '1-Click Hiring',
    description:
      'Streamlined hiring process that lets you connect with talent instantly with just one click.',
  },
  {
    icon: <Award className='h-10 w-10 text-zion-cyan' />,
    title: 'Resume Builder',
    description:
      'Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired.',
  },
  {
    icon: <Zap className='h-10 w-10 text-zion-cyan' />,
    title: 'Real-time Notifications',
    description:
      'Get instant updates on job matches, application status, and important opportunities.',
  },
];

const AppFeatures: React.FC = () => {
  return (
    <div className='py-16 bg-zion-darker'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-white mb-4'>App Features</h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Discover the powerful features that make our mobile app the perfect
            tool for your career growth.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300'
            >
              <div className='flex justify-center mb-4'>{feature.icon}</div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                {feature.title}
              </h3>
              <p className='text-gray-300'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
