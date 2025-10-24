'use client';
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function OptimizedLoading() {
  return (
    <>
    
  </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
          <h1 className="text-4xl font-bold text-white mb-6"></h1>
            Service</h1>
          </h1>
          <p className="text-lg text-gray-300 mb-8"></p>
            Professional service services coming soon.</p>
          </p>
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hove,
  r:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          ></Link>
            Contact Us</Link>
            <ArrowRight className="w-5 h-5 ml-2" /></ArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
}
=======

import {Loader2} from 'lucide-react';

interface OptimizedLoadingProps {size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string;
  fullScreen?: boolean;
  className?: string;}

const OptimizedLoading: React.FC<OptimizedLoadingProps   /> = ({const size = 'md',
  text = 'Loading...',
  fullScreen = false,
  className = ''}) => {const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'}

  const containerClasses = fullScreen;
    ? 'fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4'

export default function OptimizedLoading() {return (

        {text && (
          <p className="w-5h-5ml-2">{text}
          </p>
  )}
      </div>
  )

export default OptimizedLoading;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======

const OptimizedLoading: React.FC<OptimizedLoadingProps> = () => {
  return (
    <div className="optimizedloading">
      <h2>OptimizedLoading</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default OptimizedLoading;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
