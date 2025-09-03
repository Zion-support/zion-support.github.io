<<<<<<< HEAD
export function TalentSkeleton() { return () <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {Array.from({ length: 6 }).map((_, i) => ( <div key={i}" className="p-6 space-y-4 border border-zion-blue-light bg-zion-blue-dark rounded-lg" >" <div className="flex items-center space-x-4">" <Skeleton className="w-16 h-16 rounded-full bg-zion-blue-light/20" />" <div className="flex-1 space-y-2">" <Skeleton className="h-4 w-3/4 bg-zion-blue-light/20" />" <Skeleton className="h-3 w-1/2 bg-zion-blue-light/20" /> </div> </div>" <Skeleton className="h-24 w-full bg-zion-blue-light/20" /> </div> ))} </div> ) } 
export function TalentSkeleton() { return () <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'> {Array.from({ length: 6 }).map((_, i) => ( <div key={i}' className='p-6 space-y-4 border border-zion-blue-light bg-zion-blue-dark rounded-lg' >' <div className='flex items-center space-x-4'>' <Skeleton className='w-16 h-16 rounded-full bg-zion-blue-light/20' />' <div className='flex-1 space-y-2'>' <Skeleton className='h-4 w-3/4 bg-zion-blue-light/20' />' <Skeleton className='h-3 w-1/2 bg-zion-blue-light/20' /> </div> </div>' <Skeleton className='h-24 w-full bg-zion-blue-light/20' /> </div> ))} </div> ) } '";
=======
<<<<<<< HEAD
export function TalentSkeleton() { return () <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6"> {Array.from({ length: 6 }).map((_, i) => ( <div key={i}" className="p-6 space-y-4 border border-zion-blue-light bg-zion-blue-dark rounded-lg"" >" <div className="flex items-center space-x-4">" <Skeleton className="w-16 h-16 rounded-full bg-zion-blue-light/20" /" >" <div className="flex-1 space-y-2">" <Skeleton className="h-4 w-3/4 bg-zion-blue-light/20" /" >" <Skeleton className="h-3 w-1/2 bg-zion-blue-light/20" /" > </div> </div>" <Skeleton className="h-24 w-full bg-zion-blue-light/20" /" > </div> ))} </div> ) } ""
export function TalentSkeleton() { return () <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6'> {Array.from({ length: 6 }).map((_, i) => ( <div key={i}' className='p-6 space-y-4 border border-zion-blue-light bg-zion-blue-dark rounded-lg'" >' <div className='flex items-center space-x-4'>' <Skeleton className='w-16 h-16 rounded-full bg-zion-blue-light/20' /" >' <div className='flex-1 space-y-2'>' <Skeleton className='h-4 w-3/4 bg-zion-blue-light/20' /" >' <Skeleton className='h-3 w-1/2 bg-zion-blue-light/20' /" > </div> </div>' <Skeleton className='h-24 w-full bg-zion-blue-light/20' /" > </div> ))} </div> ) } '"
=======
import React from 'react';
import { SEO } from '@/components/SEO';

const TalentSkeletonJs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="TalentSkeletonJs - Zion Tech Group"
        description="Professional TalentSkeletonJs services by Zion Tech Group"
        keywords="talentskeletonjs, technology, services"
      />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">TalentSkeletonJs</h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional TalentSkeletonJs services to help your business grow.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentSkeletonJs;
>>>>>>> main
>>>>>>> main
