<<<<<<< HEAD
          {/* Search Suggestion */},"
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-8" />,
    <div className="flex items-center justify-center mb-4" />
              <Search className="w-6 h-6 text-cyan-400 mr-2" />,
className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
Send Email
              </a>
=======
'use client'
import React from 'react';
import Head from 'next/head';"
import Link from 'next/link";"'
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw } from lucide-react";
const getVariantClasses = (
return(<div>
      <Head>
        <title>"404 - Page Not Found | Zion Tech Group"</title>
        <meta name=robots" content="noindex, nofollow /">
        <meta property="og: type" content="website /">
      </Head>
    </div>,<div className="min-h-screen" bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 />,
    <div className="max-w-2 xl w-full text-center /">"
          {/* 404 Animation */,) => {"}
$3"}
},"
    <div className="relative mb-8 /">,
    <div className="text-9 xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-pulse /">"
              404,
    <div className="absolute" -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full animate-bounce />
              <AlertTriangle className="w-6" h-6 text-red-400 />
                </div>
              </div>
          {/* Error Message */,},
    <h1 className="text-4" xl md: text-5 xl font-bold text-white mb-6 />
"Page Not Found"
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed /">'
Oops! The page you're looking for seems to have vanished into the digital void. Don't, worry,even our AI cant predict everything!
          </p>
          {/* Search Suggestion */},
    <div className="bg-gradient-to-br" from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-8 />,"
    <div className="flex items-center justify-center mb-4 /">
              <Search className="w-6" h-6 text-cyan-400 mr-2 />,
    <h1 className="text-lg font-semibold text-white">"What were you looking for?"</h2>"
                </div>
            <p className="text-gray-300" text-sm mb-4>Try searching for one of these popular pages: "</p>,<div className="flex" flex-wrap gap-2 justify-center />
              {["}
                { name: "Home",path: "/" ,}"
                { name: "About",path: "/about" ,}"
                { name: "Services",path: "/services" ,}"
                { name: "Contact",path: "/contact" ,})"
              ].map((item, index) => ("
                <Link key = {index,} href = {item.path,} className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 rounded-lg hover: from-purple-600/30 hover:to-blue-600/30 transition-all duration-300">
                  "{item.name,}"
                </Link>
              "))}"
                </div>
              </div>
          {/* Action Buttons */},
    <div className="flex flex-col sm: flex-row gap-4 justify-center mb-8">"
      <Link href="/" className="bg-gradient-to-r" from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center>
              <Home className="w-5" h-5 mr-2 />
"Go Home"

      </Link>
    </div>
            <button"
onClick="{()" => window.history.back(),}"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <ArrowLeft className="w-5" h-5 mr-2 />
"Go Back"
            </button>
              </div>
          {/* Help Section */,},
    <div className="bg-gradient-to-r" from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6 />,"
    <h1 className="text-lg font-semibold text-white mb-3">"Need Help?"</h3>
            <p className="text-gray-300" text-sm mb-4 />
Our support team is here to help you navigate our services and find exactly what you"re looking for."
            </p>,"
    <div className="flex flex-col sm: flex-row gap-3 justify-center">
      <Link href="/contact" className="bg-gradient-to-r" from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center>
                <RefreshCw className="w-4" h-4 mr-2 />
"Contact Support"

      </Link>
    </div>
              <a
href="mailto:support@ziontechgroup.com"
className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">"
Send Email;
              </a>
                </div>
              </div>
          {/* Fun Fact */,;},
    <div className="mt-8 p-4 bg-slate-800/30 rounded-lg /">
            <p className="text-sm" text-gray-400 />,
    <span className="text-cyan-400">Fun Fact: "</span> Even our AI gets"
confused sometimes. That"s why we have humans to help when things
go wrong! 🤖
            </p>
              </div>
            </div>
          </div>
    </div>
  )
",;}
export default getVariantClasses
    </div>
<<<<<<< HEAD
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  type = 'button'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40';
      case 'secondary':
        return 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm';
      case 'accent':
        return 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40';
      case 'ghost':
        return 'text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10';
      default:
        return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const baseClasses = `
    relative overflow-hidden rounded-lg font-semibold transition-all duration-300
    transform hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    ${getVariantClasses()}
    ${getSizeClasses()}
    ${className}
  `.trim();

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Loading spinner */}
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </motion.div>
      )}
      
      {/* Button content */}
      <motion.span
        className="relative z-10 flex items-center justify-center"
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
          transform: 'translateX(-100%)',
        }}
        animate={{
          transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
        }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
      />
    </motion.button>
  );
};

=======
;};
;'"
>>>>>>> origin/main
>>>>>>> origin/main
