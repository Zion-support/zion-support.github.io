interface LoadingSpinnerProps extends React.PropsWithChildren<{}> {;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'futuristic' | 'ai' | 'quantum';
  text?: "string;
  showProgress?: boolean;
  progress?: number"}
setTimeout(() => {;
          setIsVisible(false) ;
          onComplete?.() }, 1000) }, autoCompleteDelay) ;
;
      return () => clearTimeout(timer) }
  }, [autoComplete, enabled, autoCompleteDelay, onComplete]) ;
;
  if(!enabled || !isVisible) return null;
;
  const renderSpinner = ("props": "any) => {;
    switch(variant) {;
      case 'futuristic':;
        return (<div className="relative">;
            {/* Outer ring */"}
            <motion.div;
              className="absolute inset - 0 border-4 border-zion - cyan / 20 rounded-full";
              animate={{ "rotate": "36 0 "}}
              transition={{ "duration": "2", "repeat": "Infinit y", "ease": "linear" }}
            />;  const renderSpinner = (props: any) => {
    switch(variant) {
      case 'futuristic':
        return (
        <div className="relative">
            {/* Outer ring */}
            <motion.div
              className="absolute inset - 0 border-4 border-zion - cyan / 20 rounded-full"
              animate={{ rotate: 36 0 }}
              transition={{ duration: 2, repeat: Infinit y, ease: "linear" }}
            />

            {/* Inner ring */}
            <motion.div;
              className="absolute inset - 2 border-4 border-zion - purple / 40 rounded-full";
              animate={{ "rotate": "-360 "}}
              transition={{ "duration": "1.5", "repeat": "Infinit y", "ease": "linear" }}
            />;
            {/* Center dot */}
            <motion.div;
              className="absolute inset - 4 bg-gradient - to - r from - zion - cyan to - zion - purple rounded-full";
              animate={{ "scale": "[1", 1.2, 1] }}
              transition={{ "duration": "1", "repeat": "Infinit y "}}
            />;
            {/* Orbiting particles */}
            {[...Array (3) ].map((_, i) => (<motion.div;
                key={i}
                className="absolute w-2 h-2 bg-zion - yellow rounded-full";
                style="{{{;
                  "top": '50%'; "left": '50%'; "marginTop": "-4; "marginLeft": -4"}}"}
                animate={{;
                  "x": "[0", 30, 0],;
                  "y": "[0", -30, 0],;
                  "rotate": "[0", 360];