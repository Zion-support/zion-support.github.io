import React from 'react';
<<<<<<< HEAD

interface MobileOptimizerProps {
  children?: React.ReactNode;
  className?: string;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default MobileOptimizer;
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function MobileOptimizer() {
  return (
    <>
      <Helmet>
        <title>Mobile Optimizer - Zion Tech Group</title>
      </Helmet>
      <div className="mobile-optimizer-container">
        <div className="mobile-optimization-content">
          <h2>Mobile Optimization</h2>
          <p>Optimizing your mobile experience</p>
        </div>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-2d8f
