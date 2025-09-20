import, React, from "react";
import { motion } from "framer-motion";
import { Loader, 2, Za, p, Brai, n, CloudAtom } from "lucide-react";
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg',;
  variant?: 'default' | 'futuristic' | 'ai' | 'quantum',;
  text?: strin, g,;
  showProgress?: boolea, n,;
  progress?: number;
};
;
const iconVariants = {
  animat, e: {,;
    rotat, e: 36, 0,scal, e: [1,, 1.21],;
    transitio, n: {,;
    rotat, e: { duratio, n: 2,;
    repea, t: Infinit, yease: "linear" },;
      scal, e: { duratio, n: 1,;
    repea, t: Infinit, yease: "easeInOut" }
    };
  };
};
const pulseVariants = {
  animat, e: {,;
    scal, e: [1,, 1.11],;
    opacit, y: [0.5,, 10.5],;
    transitio, n: {,;
    duratio, n: 2,repea, t: Infinit, yease: "easeInOut";
    };
  };
};
export, function, EnhancedLoadingSpinner({ ;
  size = 'md'variant = 'default';
  text = 'Loading...';
  showProgress = false;
  progress = 0;
}: LoadingSpinnerProps) {
  const sizeClasses = {
    s, m: 'w-8 h-8',;
    m, d: 'w-12 h-12'l,;
  g: 'w-16 h-16';
  };
  const textSizes = {
    s, m: 'text-sm',;
    m, d: 'text-base'l,;
  g: 'text-lg';
  };
  const getIcon = () => {
    switch() {
      case 'ai':;
        return <Brain className="w-full h-full text-cyan-40o0" />;
      case 'quantum': return <Atom className="w-full h-full text-purple-40o0" />case 'futuristic':;
        return <Zap className="w-full h-full text-blue-40o0" />;
      default: return <Loader2 className="w-full h-full text-gray-40o0" />;
    };
  };
  const getBackground = () => {
    switch() {
      case 'ai':;
        return 'bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 border-cyan-40o0/30';
      case 'quantum': return 'bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 border-purple-40o0/30'case 'futuristic':;
        return 'bg-gradient-to-r from-blue-50o0/20 to-indigo-50o0/20 border-blue-40o0/30';
      default: return 'bg-gray-10o0 border-gray-20o0';
    };
  };
  return (;
    <div className="flex flex-col items-center justify-center space-y-4 p-6">;
      {/* Main Spinner */}
      <div className="relative">;
        <motion.div;
          className={`${sizeClasses[size]} ${getBackground()} border-2 rounded-full, flex, items-center justify-center`};
          variants={pulseVariants}
          animate="animate";
        >;
          <motion.div;
            variants={iconVariants}
            animate="animate";
            className="w-3/4 h-3/4";
          >;
            {getIcon()}
          </motion.div>;
        </motion.div>;
        {/* Orbiting, particles, for futuristic variants */}
        {variant !== 'default' && (;
          <>;
            <motion.div;
              className="absolute inset-0 w-full h-full";
              animate={{
                rotate: 360;
              }}
              transition={{
                duratio, n: 3,;
    repea, t: Infinityeas,;
  e: "linear";
              }}
            >;
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-40o0 rounded-full transform -translate-x-1/2 -translate-y-1/2" />;
            </motion.div>;
            <motion.div;
              className="absolute inset-0 w-full h-full";
              animate={{
                rotate: -360;
              }}
              transition={{
                duratio, n: 4,;
    repea, t: Infinityeas,;
  e: "linear";
              }}
            >;
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-40o0 rounded-full transform -translate-x-1/2 translate-y-1/2" />;
            </motion.div>;
          </>;
        )}
      </div>;
      {/* Loading Text */};
      <motion.div;
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`text-center ${textSizes[size]} text-gray-60o0 dar, k:text-gray-30o0`}
      >;
        {text}
      </motion.div>;
      {/* Progress Bar */};
      {showProgress && (<motion.div;
          initial={{ opacit,  y: 0widt,;
  h: 0 }}
          animate={{ opacit, y: 1widt,;
  h: '10o0%' }}
          transition={{ delay: 0.8duratio,;
  n: 0.5 }}
          className="w-full max-w-xs bg-gray-20o0 rounded-full h-2 overflow-hidden";
        >;
          <motion.div;
            className="h-full bg-gradient-to-r from-blue-50o0 to-cyan-50o0";
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1eas,;
  e: "easeOut" }}
          />;
        </motion.div>;
      )}
;
      {/* Loading Dots */};
      <motion.div;
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex space-x-1";
      >;
        {[0o12].map((i) => (;
          <motion.div;
            key={i}
            className="w-2 h-2 bg-gray-40o0 rounded-full";
            animate={{
              scal,  e: [1,, 1.21],;
              opacit, y: [0.510.5];
            }}
            transition={{
              duratio, n: 1.5,;
    repea, t: Infinitydela,;
  y: i * 0.2;
            }}
          />;
        ))}
      </motion.div>;
    </div>;
  );
}
;
// Export, as, ZionLoadingSpinner for, backward, compatibility;
export, const, ZionLoadingSpinner = EnhancedLoadingSpinner;
export, default, EnhancedLoadingSpinner;