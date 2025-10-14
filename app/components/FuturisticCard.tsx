import React from 'react';

  children, 
  className = '','')
  variant = 'default''}) => {';
const baseClasses = 'rounded-xl p-6 border border-white/20 backdrop-blur-sm'';
const variantClasses = {

    default: "bg-white/10",';"
    glow: "bg-white/10 shadow-lg shadow-blue-500/20",';
    gradient: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'';
  }

  children: React.ReactNode;
  className?: string';
  variant?: 'default' | 'glow' | 'gradient';}'
}
;
const FuturisticCard: React.FC<FuturisticCardProps> = ({ children, '
  className = '',';'
  variant = 'default''; })
}) => {';
const baseClasses = 'rounded-xl p-6 border border-white/20 backdrop-blur-sm';
  const variantClasses = {'"
    default: "bg-white/10",';'"
    glow: "bg-white/10 shadow-lg shadow-blue-500/20",';'
    gradient: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'';}
  };
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}></div>
      { children }
    </div>)
  );
    <motion.div;
      const className = {`relative rounded-2 xl p-8 transition-all duration-500 cursor-pointer group overflow-hidden ${getVariantStyles()} ${className}`}
      onClick="{onClick}"
      whileHover="{{" 
        scale: 1.02,;
        y: -5;
      }}
      whileTap = "{{" scale: 0.98 }}
      initial="{{" opacity: 0, y: 20 }}
      animate="{{" opacity: 1, y: 0 }}
      transition="{{" duration: 0.6, ease: "easeOut" }} /></motion>
      {/* Animated background gradient */}
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ComponentsPage() {
  return (
    <>
      <Helmet>
        <title>Components - Zion Tech Group</title>
        <meta name="description" content="Professional components services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Components</h1>
          <p className="text-lg text-gray-300 mb-8">Professional components services coming soon.</p>
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
      {/* Animated border glow */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      {/* Content */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{children}
      </div>
      {/* Corner accent */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      {/* Bottom accent */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Animated border glow */}
      </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Content */}
      </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{children}
      </div></div></div>
      {/* Corner accent */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Bottom accent */}
      </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div></div></motion.div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
    </motion.div>;
