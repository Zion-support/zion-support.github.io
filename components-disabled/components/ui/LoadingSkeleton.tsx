import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
    <div className={`p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl ${className}`}>
      <div className="flex items-center space-x-4 mb-6">
        <Skeleton className="w-16 h-16 rounded-2xl" />
        <div className="flex-1">
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-2" />
      <Skeleton className="h-4 w-4/6" />
    </div>
    <div className={`min-h-screen flex items-center justify-center px-6 py-20 ${className}`}>
      <div className="text-center max-w-6xl mx-auto">
        <Skeleton className="h-20 w-96 mx-auto mb-6" />
        <Skeleton className="h-8 w-2/3 mx-auto mb-8" />
        <Skeleton className="h-6 w-1/2 mx-auto mb-12" />
          <Skeleton className="h-14 w-32" />
          <Skeleton className="h-14 w-32" />
        </div>
      </div>
    </div>
          ))}
        </div>
      </div>
    </div>
