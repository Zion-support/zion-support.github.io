<<<<<<< HEAD
import React from 'react';

interface LoadingOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingOptimizer({ className = '', children }: LoadingOptimizerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
<<<<<<< HEAD
export default function LoadingOptimizer() 
=======

export default function LoadingOptimizer() {
  return (
//     <>
//       <Helmet>
//         <title>Loading Optimizer - Zion Tech Group</title>
//       </Helmet>
      <div className="loading-optimizer-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
</div>
//         <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
//         >
//           Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
</Link>
</div>
//     </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
