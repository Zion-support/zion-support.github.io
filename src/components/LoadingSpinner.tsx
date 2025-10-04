import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  message = 'Loading...',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-[200px]' role='status' aria-live='polite'>
      <div className={`${sizeClasses[size]} animate-spin`} aria-hidden='true'>
        <svg className='w-full h-full' viewBox='0 0 24 24'>
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
            fill='none'
          />
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          />
        </svg>
      </div>
      {message && (
        <p className='mt-4 text-gray-600 text-sm font-medium'>{message}</p>
      )}
      <span className='sr-only'>{message}</span>
    </div>
  );
};

export const PageLoader: React.FC = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-slate-950'>
      <div className='text-center'>
        <LoadingSpinner size='lg' />
        <p className='mt-4 text-gray-400'>Loading...</p>
      </div>
    </div>
  );
};

PageLoader.displayName = 'PageLoader';

export default LoadingSpinner;
import React from "react"; interface, LoadingSpinnerProp, s { si, z, e?: 'sm' | 'md' | 'lg'; messa, g, e?: stri, n, g;  impo, r, t { moti, o, n; } fr, o, m "fram, e, r-moti, o, n"; interface, LoadingSpinnerProp, s {' si, z, e?: 'sma, l, l' | 'medi, u, m' | 'lar, g, e';' col, o, r?: 'bl, u, e' | 'whi, t, e' | 'gr, a, y'; te, x, t?: stri, n, g; fullScre, e, n?: boole, a, n; } const, LoadingSpinne, r: Rea, c, t.FC<LoadingSpinnerPro, p, s> = ({ ' si, z, e = 'md'' messa, g, e = 'Loadi, n, g...' }) => { const, sizeClasse, s = {' sm: 'w-8 h-8'' md: 'w-1, 2, h-12'' lg: 'w-1, 6, h-16' }; return ( <div, className="flex, fle, x-col, item, s-center, justif, y-center, mi, n-h-[200, p, x]" > <div, className={`${sizeClass, e, s[si, z, e]} anima, t, e-sp, i, n`}>` <svg, className="w-ful, l, h-fu, l, l" viewB, o, x="0, 0, 24 24"> <circ, l, e classNa, m, e="opaci, t, y-25" cx="12" cy="12" r="10" stro, k, e="currentCol, o, r" strokeWid, t, h="4" fi, l, l="no, n, e" /> <pa, t, h classNa, m, e="opaci, t, y-75" fi, l, l="currentCol, o, r" d="M4, 12a8, 8 0, 01, 8-8V0, C, 5.373, 0, 0 5.373, 0, 12h4zm2 5.291, A, 7.96, 2, 7.962, 0, 014 12H0c, 0, 3.04, 2, 1.13, 5, 5.824, 3, 7.938, l, 3-2.64, 7, z" /> </s, v, g> </d, i, v> {messa, g, e && ( <p, className="mt-4, tex, t-gr, a, y-600, tex, t-sm, fon, t-medi, u, m" >{messa, g, e}</p> )} </d, i, v> ); }; export default LoadingSpinner; '
