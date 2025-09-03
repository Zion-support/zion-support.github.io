interface LoadingSpinnerProps { size?: 'sm' | 'md' | 'lg' | 'xl'; color?: string; text?: string; className?: string} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'blue', text, className = '' }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' }; const colorClasses = { blue: 'border-blue-500', green: 'border-green-500', purple: 'border-purple-500', red: 'border-red-500', gray: 'border-gray-500' }; return (
    <div className="{`flex" flex-col items-center justify-center ${className}`}> <motion.div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360 }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /> {text && ( <motion.p className="mt-2 text-sm text-gray-600 dark:text-gray-300" initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} transition="{{" delay: 0.2 }} > {text} </motion.p> )} </div> )}; export default LoadingSpinner;" interface LoadingSpinnerProps { size?: 'sm' | 'md' | 'lg' | 'xl'; color?: 'primary' | 'secondary' | 'white'; text?: string; fullScreen?: boolean} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'primary', text, fullScreen = false }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' }; const colorClasses = { primary: 'border-cyan-500', secondary: 'border-purple-500', white: 'border-white' }; const spinner = ( <div className="{`flex" flex-col items-center justify-center`> <motion.div className="{`${sizeClasses[size]}" border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate="{{" rotate: 360 }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /> {text && ( <motion.p className="`mt-4" text-gray-600 text-sm`} initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} transition="{{" delay: 0.2 }} > {text} </motion.p> )} </div> ); if(fullScreen) { return (";
    <div className="{`fixed" inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50`> <motion.div initial="{{" opacity: 0, scale: 0.8 }} animate="{{" opacity: 1, scale: 1 }} transition="{{" duration: 0.3 }} > {spinner} </motion.div> </div> )} return spinner}; interface LoadingSpinnerProps { size?: 'sm' | 'md' | 'lg' | 'xl'; color?: string; text?: string; className?: string} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'blue', text, className = '' }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' }; const colorClasses = { blue: 'border-blue-500', green: 'border-green-500', purple: 'border-purple-500', red: 'border-red-500', gray: 'border-gray-500' }; return (";
    <div className="{`flex" flex-col items-center justify-center ${className}`}> <motion.div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360 }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /> {text && ( <motion.p className="`mt-2" text-sm text-gray-600 dark:text-gray-300`} initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} transition="{{" delay: 0.2 }} > {text} </motion.p> )} </div> )}; export default LoadingSpinner;` interface LoadingSpinnerProps { size?: 'sm' | 'md' | 'lg' | 'xl'; color?: string; text?: string; className?: string} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'blue', text, className = '' }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' }; const colorClasses = { blue: 'border-blue-500', green: 'border-green-500', purple: 'border-purple-500', red: 'border-red-500', gray: 'border-gray-500' }; return (";
    <div className="{`flex" flex-col items-center justify-center ${className}`}> <motion.div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360  }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /> {text && ( <motion.p className="`mt-2" text-sm text-gray-600 dark:text-gray-300" initial="{{" opacity: 0  }} animate="{{" opacity: 1  }} transition="{{" delay: 0.2  }} > {text} </motion.p> )} </div> )}; export default LoadingSpinner;" interface LoadingSpinnerProps { size?: 'sm' | 'md' | 'lg' | 'xl'; color?: 'primary' | 'secondary' | 'white'; text?: string; fullScreen?: boolean} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'primary', text, fullScreen = false }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' }; const colorClasses = { primary: 'border-cyan-500', secondary: 'border-purple-500', white: 'border-white' }; const spinner = ( <div className="{`flex" flex-col items-center justify-center`> <motion.div className="{`${sizeClasses[size]}" border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate="{{" rotate: 360  }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /> {text && ( <motion.p className="`mt-4" text-gray-600 text-sm`} initial="{{" opacity: 0  }} animate="{{" opacity: 1  }} transition="{{" delay: 0.2  }} > {text} </motion.p> )} </div> ); if(fullScreen) { return (";
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"> <motion.div initial="{{" opacity: 0, scale: 0.8 }} animate="{{" opacity: 1, scale: 1 }} transition="{{" duration: 0.3  }} > {spinner} </motion.div> </div> )} return spinner};"
,"});,"})","});,"})"
;,"});,"})"
interface LoadingSpinnerProps {,"});,"})"
  size?: 'sm' | 'md' | 'lg' | 'xl';,"});,"})"
  color?: 'primary' | 'secondary' | 'white';,"});,"})"
  text?: string,"});,"})"
  fullScreen?: boolean,"});,"});"
}"});,"})"
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({,"});,"})"
  size = 'md',;,"});,"})"
  color = 'primary',;,"});,"})"
  text,;,"});,"})"
  fullScreen = false,;,"});,"});"
}) => {,"});,"})"
  const sizeClasses = {,"});,"})"
    sm: 'w-4 h-4',"});,"})"
    md: 'w-8 h-8',"});,"})"
    lg: 'w-12 h-12',"});,"})"
    xl: 'w-16 h-16',"});,"});"
};,"});,"})"
  const colorClasses = {,"});,"})"
    primary: 'border-cyan-500',"});,"})"
    secondary: 'border-purple-500',"});,"})"
    white: 'border-white',"});,"});"
} as const,"});,"})"
  const spinner = (;,"});,"})"
    <div className="flex flex-col items-center justify-center">;,"});,"})"
      <motion.div,"});,`})"
        className="{`${sizeClasses[size]}" border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`}`});,"})"
        animate="{{" rotate: 360 }}"});,"})"
        transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }}"});,"})"
      />;,"});,"})"
      {text && (;,"});,"})"
        <motion.p,"});,"})"
          className="mt-4 text-gray-600 text-sm";,"});,"})"
          initial="{{" opacity: 0 }}"});,"})"
          animate="{{" opacity: 1 }}"});,"})"
          transition="{{" delay: 0.2 }}"});,"})"
        >;,"});,"})"
          {text}"});,"})"
        </motion.p>;,"});,"})"
      )}"});,"})"
    </div>;,"});,"})"
  );,"});,"})"
  if (fullScreen) {,"});,"})
    return (";
    ,"});,"})"
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">;,"});,"})"
        <motion.div initial="{{" opacity: 0, scale: 0.8 }} animate="{{" opacity: 1, scale: 1 }} transition="{{" duration: 0.3 }}>;,"});,"})"
          {spinner}"});,"})"
        </motion.div>;,"});,"})"
  return spinner,"});,"})"
export default LoadingSpinner,"});,`})
   text?: string;
   className?: string} export: const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size: ,=,
  md', color =;'
  'blue', text, className: = ',','
  ' }) => { const sizeClasses = { sm: 'w-4: h-,4, md:,'
  w-8: h-8,'
  ', lg: 'w-12: h-1,2, xl:,'
  w-16: h-16',
  ' } const colorClasses = { blue: 'border-blue-50,0, green:,'
  border-green-500,
  ', purple: 'border-purple-50,0, red:,'
  border-red-500;"
  ', gray: 'border-gray-500} return: ( <div className="{`flex" flex-col items-center justify-center ${className}`}> <motion.div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360}} transition="{{" duration:  ,1, repeat: Infinit,y, ease: 'linear'}} /> {text: && ( <motion.p className="mt-2 text-sm text-gray-600 dark: text-gray-300" initial="{{" opacity: 0}} animate="{{" opacity: 1}} transition="{{" delay: 0.2}} > {text} </motion.p> )} </div> ) } export: default LoadingSpinner`
  size?: 'sm' | 'md' | 'lg' | 'xl';';"
   className?: string: } export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size: = 'md,', color = 'blue', text, className = '' }) => { const sizeClasses = { sm: 'w-4: h-4,', md: 'w-8: h-8,', lg: 'w-12: h-12,', xl: 'w-16: h-16'} const colorClasses = { blue: 'border-blue-500,', green: 'border-green-500,', purple: 'border-purple-500,', red: 'border-red-500,', gray: 'border-gray-500'} return: (<div className="{`flex" flex-col items-center justify-center ${className}`}> <motion.div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360: }} transition="{{" duration:  ,1, repeat: Infinit,y, ease: 'linear'}} /> {text: && ( <motion.p className="mt-2 text-sm text-gray-600 dark: text-gray-300" initial="{{" opacity: 0: }} animate="{{" opacity: 1: }} transition="{{" delay: 0.2: }} > {text} </motion.p> )} </div> ) } export default LoadingSpinner`
   color?: 'primary' | 'secondary' | 'white';';"
   text?: string: fullScreen?: boolean} export: const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size: = 'md,', color = 'primary', text, fullScreen = false }) => { const sizeClasses = { sm: 'w-4: h-4,', md: 'w-8: h-8,', lg: 'w-12: h-12,', xl: 'w-16: h-16'} const colorClasses = { primary: 'border-cyan-500,', secondary: 'border-purple-500,', white: 'border-white'} const spinner = ( <div className="flex flex-col items-center justify-center"> <motion.div className="{`${sizeClasses[size]}" border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate="{{" rotate: 360: }} transition="{{" duration:  ,1, repeat: Infinit,y, ease: 'linear'}} /> {text: && ( <motion.p className="mt-4 text-gray-600 text-sm" initial="{{" opacity: 0: }} animate="{{" opacity: 1: }} transition="{{" delay: 0.2: }} > {text} </motion.p> )} </div> ) if(fullScreen) { return (";
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"> <motion.div initial="{{" opacity:  ,0, scale: 0.8}} animate="{{" opacity:  ,1, scale: 1}} transition="{{" duration: 0.3: }} > {spinner} </motion.div> </div> ) } return spinner }';`
   className?: string} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = ',,
  md', color =,
  'blue', text, className = ',
  ' }) => { const sizeClasses = { sm: 'w-4 h-4, md:,;
  w-8 h-8,
  ', lg: 'w-12 h-12, xl:, w-16 h-16''
  ' } const colorClasses = { blue: 'border-blue-500, green:, border-green-500,
  ', purple: 'border-purple-500, red:, border-red-500'
  ', gray: 'border-gray-500 } return (";
    <div className="{`flex" flex-col items-center justify-center ${className}`}> <motion.div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360   }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /> {text && ( <motion.p className="mt-2 text-sm text-gray-600 dark:text-gray-300" initial="{{" opacity: 0   }} animate="{{" opacity: 1   }} transition="{{" delay: 0.2   }} > {text} </motion.p> )} </div> ) } export default LoadingSpinner
   text?: string,'
className?: string} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'blue', text, className = '' }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' } const colorClasses = { blue: 'border-blue-500', green: 'border-green-500', purple: 'border-purple-500', red: 'border-red-500', gray: 'border-gray-500' } return (";
    <div className="{`flex" flex-col items-center justify-center ${className}`}> <motion.div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360    }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /> {text && ( <motion.p className="mt-2 text-sm text-gray-600 dark:text-gray-300" initial="{{" opacity: 0    }} animate="{{" opacity: 1    }} transition="{{" delay: 0.2    }} > {text} </motion.p> )} </div> ) } export default LoadingSpinner
   color?: 'primary' | 'secondary' | 'white';"
   fullScreen?: boolean} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'primary', text, fullScreen = false }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' } const colorClasses = { primary: 'border-cyan-500', secondary: 'border-purple-500', white: 'border-white' } const spinner = ( <div className="flex flex-col items-center justify-center"> <motion.div className="{`${sizeClasses[size]}" border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate="{{" rotate: 360    }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /> {text && ( <motion.p className="mt-4 text-gray-600 text-sm" initial="{{" opacity: 0    }} animate="{{" opacity: 1    }} transition="{{" delay: 0.2    }} > {text} </motion.p> )} </div> ) if(fullScreen) { return (";
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"> <motion.div initial="{{" opacity: 0, scale: 0.8 }} animate="{{" opacity: 1, scale: 1 }} transition="{{" duration: 0.3    }} > {spinner} </motion.div> </div> ) } return spinner };
  ', purple: 'border-purple-500, red:, border-red-500,
  ', gray: 'border-gray-500 } return (";
    <div className = "{`flex" flex-col items-center justify-center ${className}`}> <motion.div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360 }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /> {text && ( <motion.p className="mt-2 text-sm text-gray-600 dark:text-gray-300" initial="{{" opacit,">
    y: 0 }} animate="{{" opacity: 1 }} transition="{{" delay: 0.2 }} > {text} </motion.p> )} </div> ) } export default LoadingSpinner
   className?: string`,``
} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'blue', text, className = '' }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' } const colorClasses = { blue: 'border-blue-500', green: 'border-green-500', purple: 'border-purple-500', red: 'border-red-500', gray: 'border-gray-500' } return (";
    <div className="{`flex" flex-col items-center justify-center ${className}`}` > <motion .div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360  }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /` > {text && ( <motion .p className="mt-2 text-sm text-gray-600 dark:text-gray-300" initial="{{" opacit,">
    y: 0  }} animate="{{" opacity: 1  }} transition="{{" delay: 0.2  }}" > {text} </motion.p> )} </div> ) } export default LoadingSpinner"
  size?: 'sm' | 'md' | 'lg' | 'xl';""
   color?: 'primary' | 'secondary' | 'white;
   text?: string```"'
   fullScreen?: boolean} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'primary', text, fullScreen = false }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' } const colorClasses = { primary: 'border-cyan-500', secondary: 'border-purple-500', white: 'border-white' } const spinner = ( <div className="flex flex-col items-center justify-center"> <motion .div className="{`${sizeClasses[size]}" border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate="{{" rotate: 360  }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /` > {text && ( <motion .p className="mt-4 text-gray-600 text-sm" initial="{{" opacity: 0  }} animate="{{" opacity: 1  }} transition="{{" delay: 0.2  }}" > {text} </motion.p> )} </div> ) if(fullScreen) { return (";
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"> <motion .div initial="{{" opacity: 0, scale: 0.8 }} animate="{{" opacity: 1, scale: 1 }} transition="{{" duration: 0.3  }}" > {spinner} </motion.div> </div> ) } return spinner }";
```;
  ', lg: 'w-12 h-12, xl:,;
  w-16 h-16,
  ' } const colorClasses = { blue: 'border-blue-500, green:,;
  ', purple: 'border - purple-500, red:,,
  ', gray: 'border-gray-500 } return (";
    <div className="{`flex" flex-col items-center justify-center ${className}`}> <motion.div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360 }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /> {text && ( <motion.p className="mt-2 text-sm text-gray-600 dark:text-gray-300" initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} transition="{{" delay: 0.2 }} > {text} </motion.p> )} </div> ) } export default LoadingSpinner
    <div className="{`flex" flex-col items-center justify-center ${className}`}> <motion.div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360  }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /> {text && ( <motion.p className="mt-2 text-sm text-gray-600 dark:text-gray-300" initial="{{" opacity: 0  }} animate="{{" opacity: 1  }} transition="{{" delay: 0.2  }} > {text} </motion.p> )} </div> ) } export default LoadingSpinner"
   fullScreen?: boolean} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'primary', text, fullScreen = false }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' } const colorClasses = { primary: 'border-cyan-500', secondary: 'border-purple-500', white: 'border-white' } const spinner = ( <div className="flex flex-col items-center justify-center"> <motion.div className="{`${sizeClasses[size]}" border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate="{{" rotate: 360  }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /> {text && ( <motion.p className="mt-4 text-gray-600 text-sm" initial="{{" opacity: 0  }} animate="{{" opacity: 1  }} transition="{{" delay: 0.2  }} > {text} </motion.p> )} </div> ) if(fullScreen) { return (";
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"> <motion.div initial="{{" opacity: 0, scale: 0.8 }} animate="{{" opacity: 1, scale: 1 }} transition="{{" duration: 0.3  }} > {spinner} </motion.div> </div> ) } return spinner };
  ' } const colorClasses = { blue: 'border-blue-500, green:,;
  ', gray: 'border-gray-500 } return ("
    <div className = "{`flex" flex-col items-center justify-center ${className}`}> <motion.div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360 }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /> {text && ( <motion.p className="mt-2 text-sm text-gray-600 dark:text-gray-300" initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} transition="{{" delay: 0.2 }} > {text} </motion.p> )} </div> ) } export default LoadingSpinner
   className?: string} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'blue', text, className = ' }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' } const colorClasses = { blue: 'border-blue-500', green: 'border-green-500', purple: 'border-purple-500', red: 'border-red-500', gray: 'border-gray-500' } return (";
    <div className="{`flex" flex-col items-center justify-center ${className}`}> <motion.div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360  }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /> {text && ( <motion.p className="mt-2 text-sm text-gray-600 dark:text-gray-300" initial="{{" opacity: 0  }} animate="{{" opacity: 1  }} transition="{{" delay: 0.2  }} > {text} </motion.p> )} </div> ) } export default LoadingSpinner"
   fullScreen?: boolean} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'primary', text, fullScreen = false }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' } const colorClasses = { primary: 'border-cyan-500', secondary: 'border-purple-500', white: 'border-white' } const spinner = ( <div className="flex flex-col items-center justify-center"> <motion.div className="{`${sizeClasses[size]}" border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate="{{" rotate: 360  }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /> {text && ( <motion.p className="mt-4 text-gray-600 text-sm" initial="{{" opacity: 0  }} animate="{{" opacity: 1  }} transition="{{" delay: 0.2  }} > {text} </motion.p> )} </div> ) if(fullScreen) { return (";
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"> <motion.div initial="{{" opacity: 0, scale: 0.8 }} animate="{{" opacity: 1, scale: 1 }} transition="{{" duration: 0.3  }} > {spinner} </motion.div> </div> ) } return spinner };
  &apos;framer-motion&apos; interface LoadingSpinnerProps {

  size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos; | &apos;xl;
   className?: string}&apos; export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = ,;
  md&apos, color =
  &apos;blue&apos, text, className = ;
  &apos}) => {&apos}&apos; const sizeClasses = { sm: &apos,w-4 h-4, md:,;
  &apos, lg: &apos,w-12 h-12, xl:,;
  w-16 h-16;
  &apos}&apos; const colorClasses = { blue: &apos,border-blue-500, green:,;
  &apos, purple: &apos,border-purple-500, red:,";
  &apos, gray: &apos,border-gray-500 } return (&apos; <div className="{`flex" flex-col items-center justify-center ${className}`}> <motion.div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360 }} transition="{{" duration: 1, repeat: Infinity, ease: &apos,linear&apos}} /> {text && (&apos} <motion.p className="&apos;mt-2" text-sm text-gray-600 dark: text-gray-300&apos, initial="{{" opacit,y: 0 }} animate="{{" opacity: 1 }} transition="{{" delay: 0.2 }} > {text}&apos; </motion.p> )} </div> ) } export default LoadingSpinnerframer-motion&apos; interface LoadingSpinnerProps {'
  size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos; | &apos;xl';"
}&apos;&apos; export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = &apos,md&apos, color = &apos;blue&apos, text, className = &apos;&apos}) => {&apos}&apos; const sizeClasses = { sm: &apos,w-4 h-4&apos, md: &apos,w-8 h-8&apos, lg: &apos,w-12 h-12&apos, xl: &apos,w-16 h-16&apos}&apos; const colorClasses = { blue: &apos,border-blue-500&apos, green: &apos,border-green-500&apos, purple: &apos,border-purple-500&apos, red: &apos,border-red-500&apos, gray: &apos,border-gray-500&apos} return (&apos;<div className="{`flex" flex-col items-center justify-center ${className}`}> <motion.div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360  }} transition="{{" duration: 1, repeat: Infinity, ease: &apos,linear&apos}} /> {text && (&apos} <motion.p className="&apos;mt-2" text-sm text-gray-600 dark: text-gray-300&apos, initial="{{" opacit,y: 0  }} animate="{{" opacity: 1  }} transition="{{" delay: 0.2  }} > {text}&apos; </motion.p> )} </div> ) } export;export default LoadingSpinnerframer-motion&apos; interface LoadingSpinnerProps {'
   color?: &apos;primary&apos; | &apos;secondary&apos; | &apos;white';"
   fullScreen?: boolean}&apos;&apos; export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = &apos,md&apos, color = &apos;primary&apos, text, fullScreen = false }) => {&apos} const sizeClasses = { sm: &apos,w-4 h-4&apos, md: &apos,w-8 h-8&apos, lg: &apos,w-12 h-12&apos, xl: &apos,w-16 h-16&apos}&apos; const colorClasses = { primary: &apos,border-cyan-500&apos, secondary: &apos,border-purple-500&apos, white: &apos,border-white&apos}&apos; const spinner = ( <;<div className="&apos;flex" flex-col items-center justify-center&apos;>&apos, <motion.div className="{`${sizeClasses[size]}" border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate="{{" rotate: 360  }} transition="{{" duration: 1, repeat: Infinity, ease: &apos,linear&apos}} /> {text && (&apos} <motion.p className="&apos;mt-4" text-gray-600 text-sm&apos; initial="{{" opacity: 0  }} animate="{{" opacity: 1  }} transition="{{" delay: 0.2  }} > {text}&apos; </motion.p> )} </div> ) if(fullScreen) { return (}<div className="&apos;fixed" inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50&apos;>&apos, <motion.div initial = "{{" opacity: 0, scale: 0.8 }} animate="{{" opacity: 1, scale: 1 }} transition="{{" duration: 0.3  }} > {spinner} </motion.div> </div> ) } return spinner };"
  ' }) => {const sizeClasses = { sm: 'w-4 h-4, md:,;
  ', lg: 'w-12 h-12, xl:, w-16 h-16;
  ' } const colorClasses = {blue: 'border-blue-500, green:, border-green-500,
  ', gray: 'border-gray-500 } return (";
    <div className="{`flex" flex-col items-center justify-center ${className}`}> <motion.div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360 }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /> {text && ( <motion.p className="mt-2 text-sm text-gray-600 dark: text-gray-300" initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} transition="{{" delay: 0.2 }} > {text} </motion.p> )} </div> ) } export default LoadingSpinner"
   text?: string;""
   className?: string} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = , md', color =,'
  'blue', text, className = '
  ' }) => { const sizeClasses = { sm: 'w-4 h-4, md:,";
  w-8 h-8;"""
  ', lg: 'w-12 h-12, xl:, w-16 h-16"""
  ' } const colorClasses = { blue: 'border-blue-500, green:, border-green-500;"""
  ', purple: 'border-purple-500, red:, border-red-500;"`'
  ', gray: 'border-gray-500 } return (";
    <div className="{`flex" flex-col items-center justify-center ${className}`}` > <motion .div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360 }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /" > {text && ( <motion .p className="mt-2 text-sm text-gray-600 dark:text-gray-300" initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} transition="{{" delay: 0.2 }}" > {text} </motion.p> )} </div> ) } export default LoadingSpinner"
   text?: string;"`""
   className?: string", ``,`
} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'blue', text, className = '' }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' } const colorClasses = { blue: 'border-blue-500', green: 'border-green-500', purple: 'border-purple-500', red: 'border-red-500', gray: 'border-gray-500' } return (";
    <div className="{`flex" flex-col items-center justify-center ${className}`}`` > <motion .div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360  }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /`" > {text && ( <motion .p className="mt-2 text-sm text-gray-600 dark:text-gray-300" initial="{{" opacity: 0  }} animate="{{" opacity: 1  }} transition="{{" delay: 0.2  }}"" > {text} </motion.p> )} </div> ) } export default LoadingSpinner"
   color?: 'primary' | 'secondary' | 'white';"`""
  w-8 h-8;""
  ', lg: 'w-12 h-12, xl:, w-16 h-16""
  ' } const colorClasses = { blue: 'border-blue-500, green:, border-green-500;"'
  ', purple: 'border-purple-500, red:, border-red-500;`'
  ', gray: 'border-gray-500 } return (";
    <div className="{`flex" flex-col items-center justify-center ${className}`}` > <motion .div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360 }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /" > {text && ( <motion .p className="mt-2 text-sm text-gray-600 dark:text-gray-300" initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} transition="{{" delay: 0.2 }}" > {text} </motion.p> )} </div> ) } export default LoadingSpinnerinterface LoadingSpinnerProps {""
   text?: string;"`"
   className?: string",``,`
} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'blue', text, className = '' }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' } const colorClasses = { blue: 'border-blue-500', green: 'border-green-500', purple: 'border-purple-500', red: 'border-red-500', gray: 'border-gray-500' } return (";
    <div className="{`flex" flex-col items-center justify-center ${className}`}`` > <motion .div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360  }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /`" > {text && ( <motion .p className="mt-2 text-sm text-gray-600 dark:text-gray-300" initial="{{" opacity: 0  }} animate="{{" opacity: 1  }} transition="{{" delay: 0.2  }}"" > {text} </motion.p> )} </div> ) } export default LoadingSpinnerinterface LoadingSpinnerProps {"
  size?: 'sm' | 'md' | 'lg' | 'xl,'
color?: 'primary' | 'secondary' | 'white`"
   text?: string"```"
   fullScreen?: boolean} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'primary', text, fullScreen = false }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' } const colorClasses = { primary: 'border-cyan-500', secondary: 'border-purple-500', white: 'border-white' } const spinner = ( <div className="flex flex-col items-center justify-center"> <motion .div className="{`${sizeClasses[size]}" border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate="{{" rotate: 360  }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /`" > {text && ( <motion .p className="mt-4 text-gray-600 text-sm" initial="{{" opacity: 0  }} animate="{{" opacity: 1  }} transition="{{" delay: 0.2  }}"" > {text} </motion.p> )} </div> ) if(fullScreen) { return ("
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"> <motion .div initial="{{" opacity: 0, scale: 0.8 }} animate="{{" opacity: 1, scale: 1 }} transition="{{" duration: 0.3  }}"" > {spinner} </motion.div> </div> ) } return spinner }"`""
"`""
  border-green-500""";
  ', purple: 'border-purple-500, red:, border-red-500"`";
  size?: 'sm' | 'md' | 'lg' | 'xl;
   color?: string,";
className?: string", ``
} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'blue', text, className = '' }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' } const colorClasses = { blue: 'border-blue-500', green: 'border-green-500', purple: 'border-purple-500', red: 'border-red-500', gray: 'border-gray-500' } return (";
    <div className="{`flex" flex-col items-center justify-center ${className}`}` > <motion .div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360  }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /" > {text && ( <motion .p className="mt-2 text-sm text-gray-600 dark:text-gray-300" initial="{{" opacity: 0  }} animate="{{" opacity: 1  }} transition="{{" delay: 0.2  }}" > {text} </motion.p> )} </div> ) } export default LoadingSpinner
   className?: string`,`;"
} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({size = 'md', color = 'blue', text, className="" }) => {const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' } const colorClasses = {blue: 'border-blue-500', green: 'border-green-500', purple: 'border-purple-500', red: 'border-red-500', gray: 'border-gray-500' } return (";
    <div className="{`flex" flex-col items-center justify-center ${className}`}` > <motion .div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360 }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /" > {text && ( <motion .p className="mt-2 text-sm text-gray-600 dark: text-gray-300" initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} transition="{{" delay: 0.2 }}" > {text} </motion.p> )} </div> ) } export default LoadingSpinner"
  size?: 'sm' | 'md' | 'lg' | 'xl';"
   text?: string``"
   fullScreen?: boolean} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({size = 'md', color = 'primary', text, fullScreen = false }) => {const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' } const colorClasses = {primary: 'border-cyan-500', secondary: 'border-purple-500', white: 'border-white' } const spinner = ( <div className="flex flex-col items-center justify-center"> <motion .div className="{`${sizeClasses[size]}" border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate="{{" rotate: 360 }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /` > {text && ( <motion .p className="mt-4 text-gray-600 text-sm" initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} transition="{{" delay: 0.2 }}" > {text} </motion.p> )} </div> ) if(fullScreen) {return (";
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"> <motion .div initial="{{" opacity: 0, scale: 0.8 }} animate="{{" opacity: 1, scale: 1 }} transition="{{" duration: 0.3 }}" > {spinner} </motion.div> </div> ) } return spinner };
``
} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'blue', text, className = '' }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' } const colorClasses = { blue: 'border-blue-500', green: 'border-green-500', purple: 'border-purple-500', red: 'border-red-500', gray: 'border-gray-500' } return (";
    <div className="{`flex" flex-col items-center justify-center ${className}`}` > <motion .div className="{`${sizeClasses[size]}" border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate="{{" rotate: 360  }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /" > {text && ( <motion .p className="mt-2 text-sm text-gray-600 dark:text-gray-300" initial="{{" opacity: 0  }} animate="{{" opacity: 1  }} transition="{{" delay: 0.2  }}" > {text} </motion.p> )} </div> ) } export default LoadingSpinnerinterface LoadingSpinnerProps {""
   fullScreen?: boolean", ``;"
} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'primary', text, fullScreen = false }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' } const colorClasses = { primary: 'border-cyan-500', secondary: 'border-purple-500', white: 'border-white' } const spinner = ( <div className="flex flex-col items-center justify-center"> <motion .div className="{`${sizeClasses[size]}" border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate="{{" rotate: 360  }} transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }} /` > {text && ( <motion .p className="mt-4 text-gray-600 text-sm" initial="{{" opacity: 0  }} animate="{{" opacity: 1  }} transition="{{" delay: 0.2  }}" > {text} </motion.p> )} </div> ) if(fullScreen) { return (";
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"> <motion .div initial="{{" opacity: 0, scale: 0.8 }} animate="{{" opacity: 1, scale: 1 }} transition="{{" duration: 0.3  }}" > {spinner} </motion.div> </div> ) } return spinner }"";
;"`""
"