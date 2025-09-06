<<<<<<< HEAD
import React from 'react';

type Props = {
  title: string;
  description: string;
  cta?: React.ReactNode;
};

export default function FuturisticCard({ title, description, cta }: Props) {
  return (
    <div className='futuristic-card'>
      <div className='futuristic-card-glow' />
      <div className='relative z-10'>
        <h3 className='font-semibold text-gray-100'>{title}</h3>
        <p className='text-sm text-gray-300 mt-1'>{description}</p>
        {cta && <div className='mt-3'>{cta}</div>}
      </div>
    </div>
  );
}
=======
 </div> </div>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
