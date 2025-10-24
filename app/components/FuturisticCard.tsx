"use client"
import React from "react";
import { Head  } from "next/head"
import { Link  } from "next/link";
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw   } from "lucide-react";
const getVariantStyles = () => {
return (<div>
      <Head>
        <title>404 - Page Not Found|Zion Tech Group</title>
        
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og: type" content="website" />

      
      </Head>
    </div>,<div className="[^"]*"> <div className="[^"]*">
          {/* 404 Animation*/) => {

} <div className="[^"]*"> <div className="[^"]*">
              404 <div className="[^"]*"> <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
              </div>
          {/* Error Message*/} <h1 className="[^"]*">
Page Not Found
          </h1> <p className="[^"]*">
Oops! The page you"re looking for seems to have vanished into the digital void. Don"t, worry,even our AI can"t predict everything!
          </p>

          {/* Search Suggestion*/} <div className="[^"]*"> <div className="[^"]*"> <Search className="w-6 h-6 text-cyan-400 mr-2" />
    <h1 className="text-lg font-semibold text-white">What were you looking for?</h2>
                </div>
            <p className="text-gray-300 text-sm mb-4">Try searching for one of these popular pages: "</p>",<div className="[^"]*">
              {[{ name: "Home",path: "/" }
                { name: "About",path: "/about" }
                { name: "Services",path: "/services" }
                { name: "Contact",path: "/contact" })
              ].map((item, index) => (<Link key = {index} href = {item.path} className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 rounded-lg hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300">
                  {item.name}
                </Link>
              ))}
                </div>
              </div>
          {/* Action Buttons*/}

    <div className="flex flex-col sm: flex-row gap-4 justify-center mb-8">
      <Link href="/" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"> <Home className="w-5 h-5 mr-2" />
Go Home

      </Link>
    </div>
            <button
onClick={() => window.history.back()
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"> <ArrowLeft className="w-5 h-5 mr-2" />
Go Back
            </button>
              </div>
          {/* Help Section*/} <div className="[^"]*">
    <h1 className="text-lg font-semibold text-white mb-3">Need Help?</h3> <p className="[^"]*">
Our support team is here to help you navigate our services and find exactly what you"re looking for.
            </p>
    <div className="flex flex-col sm: flex-row gap-3 justify-center">
      <Link href="/contact" className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"> <RefreshCw className="w-4 h-4 mr-2" />
Contact Support
      </Link>
    </div>
              <a href="mailto:support@ziontechgroup.com" className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
Send Email
              </a>
                </div></div>
          {/* Fun Fact */,},<div className="mt-8 p-4 bg-slate-800/30 rounded-lg" /><p className="text-sm text-gray-400" />,<span className="text-cyan-400">Fun Fact: </span> Even our AI gets"
confused sometimes. That"s why we have humans to help when things
go wrong! 🤖
            </p>
              </div>
          {/* Fun Fact*/} <div className="[^"]*"> <p className="[^"]*">
    <span className="text-cyan-400">Fun Fact: "</span> Even our AI gets
confused sometimes. That"s why we have humans to help when things
go wrong! 🤖
            </p>
              </div>
            </div>
          </div>
    </div>
    </>
  ) "}
export default getVariantStyles
    </div>
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children, 
  variant = 'default', 
  className = '', 
  onClick 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'service':
        return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50 shadow-2xl hover:shadow-cyan-500/20';
      case 'testimonial':
        return 'bg-gradient-to-br from-purple-900/40 via-slate-800/30 to-purple-900/40 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/50 shadow-2xl hover:shadow-purple-500/20';
      case 'feature':
        return 'bg-gradient-to-br from-emerald-900/40 via-slate-800/30 to-emerald-900/40 backdrop-blur-xl border border-emerald-500/30 hover:border-emerald-400/50 shadow-2xl hover:shadow-emerald-500/20';
      default:
        return 'bg-gradient-to-br from-slate-800/50 via-slate-700/30 to-slate-800/50 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl hover:shadow-white/10';
    }
  };

  const baseClasses = `
    relative overflow-hidden rounded-2xl p-6 transition-all duration-300
    hover:scale-105 hover:-translate-y-1
    ${getVariantStyles()}
    ${className}
  `.trim();

  return (
    <motion.div
      className={baseClasses}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(6, 182, 212, 0.05) 100%)',
            'linear-gradient(45deg, rgba(147, 51, 234, 0.05) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(147, 51, 234, 0.05) 100%)',
            'linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(6, 182, 212, 0.05) 100%)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)',
          transform: 'translateX(-100%)',
        }}
        whileHover={{
          transform: 'translateX(100%)',
        }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
};

