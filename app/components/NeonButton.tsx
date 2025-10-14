<<<<<<< HEAD
import React from "react";
import { Helmet } from "react-helmet-async";

const NeonButtonPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>NeonButton - Zion Tech Group</title>
        <meta name="description" content="Professional NeonButton services by Zion Tech Group." />
        <meta name="keywords" content="NeonButton, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            NeonButton
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional NeonButton services designed to help your business grow and succeed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
            <p className="text-gray-300">
              Our team of experts provides cutting-edge solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your systems run smoothly at all times.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeonButtonPage;
=======
}
;
const NeonButton: React.FC<NeonButtonProps>= ({;
children,;
to,;
href,;
onClick,;
variant = 'primary',':;
size = 'md',':;
className = '''
}) =>{;
const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
const variantClasses = {;
primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 focus:ring-blue-500',':;
secondary: 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 focus:ring-purple-500',':;
accent: 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 focus:ring-cyan-500''
  }
  ;
const sizeClasses = {;
sm: 'px-4 py-2 text-sm',':;
md: 'px-6 py-3 text-base',':;
lg: 'px-8 py-4 text-lg''
  }
  ;
const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}``;`;`
if (href) {;
return (
      <a:;
href={href}
        className={classes}
        target="_blank"":;
rel="noopener noreferrer"">{children}
      </a>)
  }
  ;
if (to) {;
return (
      <Link to={to} className={classes}>{children}
      </Link>);
return (
    <button:;
onClick={onClick}
      className={classes}>{children}
    </button>)
}
;
export default NeonButton:;
import React from "react":
;
const NeonButton = () =>{;
return (
    <div className="p-4"><h2 className="text-xl font-semibold mb-2">NeonButton</h2><p>This component is under construction.</p></div>);
};
;
export default NeonButton:
  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
