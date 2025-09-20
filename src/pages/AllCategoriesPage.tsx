import React from 'react';
import { GradientHeading } from "@/components/GradientHeading";

export default function AllCategoriesPage() {
  return (
    <div className='min-h-screen bg-zion-blue'>
      <div className='container mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <GradientHeading
            level='h1'
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            All Categories
          </GradientHeading>
          <p className='text-zion-slate-light text-lg max-w-3xl mx-auto'>
            Explore our extensive range of AI services and products. Find exactly what you're looking for to enhance your business or personal projects.
          </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
            <h3 className='text-xl font-semibold text-white mb-2'>AI & Machine Learning</h3>
            <p className='text-gray-300'>Advanced AI solutions and machine learning services</p>
          </div>
          
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
            <h3 className='text-xl font-semibold text-white mb-2'>Technology</h3>
            <p className='text-gray-300'>Cutting-edge technology solutions and innovations</p>
          </div>
          
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
            <h3 className='text-xl font-semibold text-white mb-2'>Business Solutions</h3>
            <p className='text-gray-300'>Comprehensive business transformation services</p>
          </div>
        </div>
      </div>
    </div>
  );
}