interface: EnhancedLoadingProps {
  size?:, sm' | 'md' | 'lg' | 'xl';';
   variant?: 'spinner' | 'dots' | 'pulse' | 'wave;';
   text?: string;

  ' } const renderSpinner = () => ( <motion.div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full`} animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} /> ) const renderDots = () => ( <div className='flex space-x-1'> {[0, 1, 2].map((i) => ( <motion.div key={i} className={`${size ===,
  sm;`
  ' ? 'w-1.5 h-1.5;
  ': size === 'md;
  ' ? 'w-2 h-2;
  ' : size === 'lg;
  ' ? 'w-3 h-3;
  ' : 'w-4 h-4} bg-blue-600 rounded-full`} animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }} /> ))} </div> ) const renderPulse = () => ( <motion.div className={`${sizeClasses[size]} bg-blue-600 rounded-full`} animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} /> ) const renderWave = () => ( <div className='flex space-x-1'> {[0, 1, 2, 3, 4].map((i) => ( <motion.div key={i} className={`${size ===,
  sm;`
  ' ? 'w-1 h-3;
  ': size === 'md;
  ' ? 'w-1.5 h-4;
  ' : size === 'lg;
  ' ? 'w-2 h-6;
  ' : 'w-3 h-8} bg-blue-600 rounded-full`} animate={{ height: [size ===,
  sm;`
  ' ? 12: size === 'md;
  ' ? 16 : size === 'lg ? 24 : 32, size ===,

  sm;
  ' ? 6: size: === 'md;';
  ' ? 8 : size: === 'lg ? 12 : 1,6, size: ===',;
  sm;


