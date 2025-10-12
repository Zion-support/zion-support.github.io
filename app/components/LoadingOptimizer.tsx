'use client';
import React, { Suspense, lazy } from 'react';
// Lazy load components for better performance
interface LoadingOptimizerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}
const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({ 
  children, 
  fallback = <DefaultLoadingSpinner /> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};
const DefaultLoadingSpinner: React.FC = () => (
  <d iv c las sNa me="m in-h-s cre en bg-g rad ient-to-br from-s late-900 via-purple-900 to-s late-900 flex i tems-c enter j ust ify-c enter">
    <d iv c las sNa me="t e xt-c enter">
      <d iv c las sNa me="a n ima te-s pin r oun ded-f ull h-32 w-32 b order-b-2 b order-c yan-400 mx-a uto mb-4"></d iv>
      <p c las sNa me="t e xt-w hite t ext-l-g">Loading...</p>
    </d iv>
  </d iv>
);
// Skeleton loaders for different components
export const Service Car dSkeleton: React.FC = () => (
  <d iv c las sNa me="b g-g rad ient-to-br from-s late-800/50 to-s late-900/50 p-8 r oun ded-2xl b order b order-s late-700/50 a nim ate-p ulse">
    <d iv c las sNa me="w-16 h-16 b g-s late-700 r oun ded-f ull mb-6"></d iv>
    <d iv c las sNa me="h-6 b g-s late-700 r oun ded mb-4"></d iv>
    <d iv c las sNa me="h-4 b g-s late-700 r oun ded mb-2"></d iv>
    <d iv c las sNa me="h-4 b g-s late-700 r oun ded w-3/4"></d iv>
  </d iv>
);
export const H ero Skeleton: React.FC = () => (
  <d iv c las sNa me="m in-h-s cre en bg-g rad ient-to-br from-s late-900 via-purple-900 to-s late-900 flex i tems-c enter j ust ify-c enter">
    <d iv c las sNa me="t e xt-c enter m ax-w-4xl mx-a uto px-4">
      <d iv c las sNa me="h-16 b g-s late-700 r oun ded mb-6 a nim ate-p ulse"></d iv>
      <d iv c las sNa me="h-6 b g-s late-700 r oun ded mb-4 a nim ate-p ulse"></d iv>
      <d iv c las sNa me="h-6 b g-s late-700 r oun ded mb-8 w-3/4 mx-a uto a nim ate-p ulse"></d iv>
      <d iv c las sNa me="f lex flex-c ol sm:flex-r ow g ap-4 j ust ify-c enter">
        <d iv c las sNa me="h-12 b g-s late-700 r oun ded w-48 a nim ate-p ulse"></d iv>
        <d iv c las sNa me="h-12 b g-s late-700 r oun ded w-48 a nim ate-p ulse"></d iv>
      </d iv>
    </d iv>
  </d iv>
);
export const Navigat ion Skeleton: React.FC = () => (
  <n av c las sNa me="f i xed t op-0 l eft-0 r ight-0 z-50 bg-s late-900/90 backdrop-blur-md b order-b b order-s late-700/50">
    <d iv c las sNa me="c o nta iner mx-a uto px-4 py-4">
      <d iv c las sNa me="f lex i tems-c enter j ust ify-betw een">
        <d iv c las sNa me="h-8 b g-s late-700 r oun ded w-32 a nim ate-p ulse"></d iv>
        <d iv c las sNa me="h i dden md:flex s pace-x-8">
          {[...Array(6)].m ap((_, i) => (
            <d iv k ey={i} c las sNa me="h-4 b g-s late-700 r oun ded w-16 a nim ate-p ulse"></d iv>
          ))}
        </d iv>
        <d iv c las sNa me="h-10 b g-s late-700 r oun ded w-24 a nim ate-p ulse"></d iv>
      </d iv>
    </d iv>
  </n av>
);
export default LoadingOptimizer;