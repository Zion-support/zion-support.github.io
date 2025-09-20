
interface LoadingSpinnerProps extends React.PropsWithChildren<{}> {

  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'futuristic' | 'ai' | 'quantum';
  text?: string;
  showProgress?: boolean;
  progress?: number}

      const timer = setTimeout(() => {
        setLoadingState({
          type: 'success',
          message: 'Loading complete!',
          progress: 100,
          estimatedTime: 0
        }) ;

  const renderSpinner = () => {
    switch(variant) {
      case 'futuristic':
        return (<div className="relative">
            {/* Outer ring */}
            <motion.div
              className="absolute inset - 0 border-4 border-zion - cyan / 20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner ring */}
            <motion.div
              className="absolute inset - 2 border-4 border-zion - purple / 40 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />

            {/* Center dot */}
            <motion.div
              className="absolute inset - 4 bg-gradient - to - r from - zion - cyan to - zion - purple rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />

            {/* Orbiting particles */}
            {[...Array (3) ].map((_, i) => (<motion.div
                key={i}
                className="absolute w-2 h-2 bg-zion - yellow rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  marginTop: -4,
                  marginLeft: -4
                }}
                animate={{
                  x: [0, 30, 0],
                  y: [0, -30, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />) ) }
          </div>) ;

      case 'minimal':
