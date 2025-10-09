import React from 'react';

const BlogPromotionBanner: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border-y border-emerald-500/20 py-16'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6'>
            <span className='text-emerald-400 font-bold text-sm tracking-wider uppercase animate-pulse'>
              📚 BLOG HIGHLIGHTS
            </span>
          </div>
          <h2 className='text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'>
            Latest AI Insights & Tutorials
