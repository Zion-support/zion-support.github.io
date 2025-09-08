  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'quantum';
export function LoadingSpinner({
  size = 'md',
  color = 'primary',
  customColor,
  className,
  text = 'Loading...',
  showText = false
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'border-zion-purple',
    secondary: 'border-zion-cyan',
    white: 'border-white',
    custom: ''
  };

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

  size?: 'sm' | 'md' | 'lg' | 'xl'
   color?: 'primary' | 'secondary' | 'white'
   text?: string
   fullScreen?: boolean", `"
} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'primary', text, fullScreen = false }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' } const colorClasses = { primary: 'border-cyan-500', secondary: 'border-purple-500', white: 'border-white' } const spinner = ( <div className='flex flex-col items-center justify-center'> <motion .div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate={{ rotate: 360  }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} /" > {text && ( <motion .p className='mt-4 text-gray-600 text-sm' initial={{ opacity: 0  }} animate={{ opacity: 1  }} transition={{ delay: 0.2  }}" > {text} </motion.p> )} </div> ) if(fullScreen) { return (<div className='fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50'> <motion .div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3  }}" > {spinner} </motion.div> </div> ) } return spinner }"
;"`"










  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`${sizeClasses[size]} ${variantClasses[variant]}`}
      >
        <Loader2 className="w-full h-full" />
      </motion.div>
      {text && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-sm text-zion-slate-light text-center"
        <motion.div
          className={cn(
            'border-2 border-gray-200 rounded-full',
            sizeClasses[size],
            borderColor
          )}
          style={{
            borderTopColor: customColor || 'transparent'
          }}
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Pulsing effect */}
        <motion.div
          className={cn(
            'absolute inset-0 rounded-full',
            sizeClasses[size]
          )}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {showText && (
        <motion.p
          className="text-sm text-muted-foreground text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-1 bg-zion-blue-dark rounded-full"
              animate={{
                scale: [1, 0.8, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
            />
          </div>
        );

      case 'bars':
        return (
          <div className={cn('flex space-x-1', className)}>
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-zion-cyan"
                animate={{ height: ['20px', '40px', '20px'] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        );

      case 'quantum':
        return (
          <div className={cn('relative', sizeClasses[size], className)}>
            <motion.div
              className="absolute inset-0 border-4 border-zion-cyan/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-zion-cyan rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-2 bg-zion-cyan/20 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          <motion.div
            className={cn(
              'border-4 border-zion-cyan/30 border-t-zion-cyan rounded-full',
              sizeClasses[size],
              className
            )}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
    <div className="flex flex-col items-center justify-center space-y-3">
      {renderSpinner()}
      {showText && (
        <motion.p
          className="text-zion-slate-light text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
        <motion.div
          key={index}
          className="w-2 h-2 bg-zion-cyan rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2
          }}
        />
      ))}
// Full screen loading overlay
export const LoadingOverlay: React.FC<{
  isVisible: boolean;
  text?: string;
  variant?: LoadingSpinnerProps['variant'];
  className?: string;
}> = ({ isVisible, text = 'Loading...', variant = 'quantum', className = '' }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className={cn(
        'fixed inset-0 bg-zion-blue-dark/95 backdrop-blur-md z-50 flex items-center justify-center',
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LoadingSpinner
        size="xl"
        variant={variant}
        text={text}
        showText={true}
      />
    </motion.div>
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">Z</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h1>
          <p className="text-zion-slate-light">Innovation • Technology • Future</p>
        </motion.div>
        
        <LoadingSpinner size="lg" text={text} variant="orbit" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-zion-slate-light text-sm"
        >
          Preparing your digital experience...
        </motion.div>
      </div>
    </div>
// Skeleton loading component
export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-muted',
        className
      )}
      {...props}
    />
  );
}

// Page loading component
export function PageLoader({ 
  text = "Loading Zion...", 
  className = "" 
}: { 
  text?: string; 
  className?: string; 
}) {
  return (
    <div className={cn("min-h-screen flex items-center justify-center bg-background", className)}>
      <LoadingSpinner size="xl" showText text={text} />
    </div>
  );
}

export function LoadingPulse({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn('w-4 h-4 bg-zion-purple rounded-full', className)}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  );
}

// Inline loading component
export function InlineLoader({ className }: { className?: string }) {
export const InlineLoader: React.FC<{
  size?: LoadingSpinnerProps['size'];
  variant?: LoadingSpinnerProps['variant'];
  className?: string;
}> = ({ size = 'sm', variant = 'default', className = '' }) => (
  <div className={cn('inline-flex items-center', className)}>
    <LoadingSpinner size={size} variant={variant} />
  </div>
);

// Button loading state
export const ButtonLoader: React.FC<{
  size?: LoadingSpinnerProps['size'];
  className?: string;
}> = ({ size = 'sm', className = '' }) => (
  <div className={cn('inline-flex items-center', className)}>
    <LoadingSpinner size={size} variant="default" />
  </div>
);
}
