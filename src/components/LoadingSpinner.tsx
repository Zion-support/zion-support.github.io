import React from 'react';

type LoadingSpinnerProps = { text?: string };

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  text = 'Loading…',
}) => (
  <div
    className='flex items-center justify-center p-4'
    role='status'
    aria-live='polite'
  >
    <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600' />
    <span className='ml-2 text-gray-600'>{text}</span>
  </div>
);

export default LoadingSpinner;
