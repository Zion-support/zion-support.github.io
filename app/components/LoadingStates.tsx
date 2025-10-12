

'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
  return (

        </div></div>
        </div></div>
        </div></div>
            <div className="absolute inset-2 rounded-full border-4 border-pink-500border-t-transparentanimate-spin" style="{{" animationDirection: 'reverse', animationDuration: '1.5 s' }} /></div>
        </div></div>
            <div className="absolute inset-4 rounded-full border-4 border-cyan-500border-t-transparentanimate-spin" style="{{" animationDuration: '2 s' }} /></div>
          <h3 className="text-2 xl font-boldtext-whitemb-2">Loading Zion Tech Group</h3>
          <p className="text-gray-300">Initializing advanced AI systems...</p>
        </div></div>

            <div className="w-2 h-2 bg-pink-500rounded-fullanimate-bounce" style="{{" animationDelay: '0.1 s' }} /></div>
            <div className="w-2 h-2 bg-cyan-500rounded-fullanimate-bounce" style="{{" animationDelay: '0.2 s' }} /></div>

  );
};

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ const size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  return (

  );
};

  return (

        </div></div>

      <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-cyan-500rounded-fullanimate-pulse" style="{{" animationDelay: '0.2 s' }} /></div>
      <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-green-500rounded-fullanimate-pulse" style="{{" animationDelay: '0.4 s' }} /></div>

  );
};

  return (

        </div></div>
        </div></div>
        </div></div>

        <div className="absolute top-2 left-2 w-8 h-8 border-4 border-pink-500 border-t-transparentrounded-fullanimate-spin" style="{{" animationDirection: 'reverse' }} /></div>
  );
};

  return (

        </div></div>

        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500opacity-30animate-pulse" style="{{" animationDelay: '0.5 s' }} /></div>
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-green-500opacity-40animate-pulse" style="{{" animationDelay: '1 s' }} /></div>
        <div className="absolute inset-6 rounded-full bg-gradient-to-r from-green-500 to-purple-500opacity-50animate-pulse" style="{{" animationDelay: '1.5 s' }} /></div>
  );
};

  return (

  );
};

export const LoadingSkeleton: React.FC<{ lines?: number }> = ({ const lines = 3 }) => {
  return (

 (
    
        </div></div>
        </div></div>

      ))}
  );
};

  return (

        </div></div>
        </div></div>
        </div></div>
        </div></div>
        </div></div>

  );
};

=======
export default function PageLoader() {
  return (
    <>
      <Helmet>
        <title>Loader - Zion Tech Group</title>
        <meta name="description" content="Professional loader by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Loader</h1>
          <p className="text-lg text-gray-300 mb-8">Professional loader coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
