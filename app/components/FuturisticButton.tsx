import React from 'react';
<<<<<<< HEAD
import { ArrowRight, ExternalLink } from 'lucide-react';

interface FuturisticButtonProps {
  href?: string;
  to?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  href,
  to,
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  onClick,
  external = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25',
    outline: 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900',
    ghost: 'text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {external && <ExternalLink className="w-4 h-4 ml-2" />}
      {!external && !icon && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
    </>
  );
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ComponentsFuturisticButtonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Components - Zion Tech Group</title>
        <meta name="description" content="Advanced Components solutions by Zion Tech Group for modern businesses." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Components
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced Components solutions by Zion Tech Group for modern businesses.
          </p>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-5de4

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI Solutions</h2>
            <p className="text-gray-600 mb-6">
              This page is under development. Please check back later for comprehensive ai solutions.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
                <p className="text-gray-600">
                  Advanced ai solution for your business requirements.
                </p>
              </div>

<<<<<<< HEAD
  if (to) {
    return (
      <a
        href={to}
        className={classes}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default FuturisticButton;
=======
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
                <p className="text-gray-600">
                  Cutting-edge technology integration and optimization.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
                <p className="text-gray-600">
                  Scalable and secure implementation.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-5de4
