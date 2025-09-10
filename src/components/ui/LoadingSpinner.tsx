<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; interface LoadingSpinnerProps {';';
 size?: 'sm' | 'md' | 'lg' | 'xl'; color?: string; text?: string; className?: string; ';';
} export const LoadingSpinner: Reac t.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'blue', text, className = '' }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' }; const colorClasses = { blue: 'border-blue-500', green: 'border-green-500', purple: 'border-purple-500', red: 'border-red-500', gray: 'border-gray-500' }; return (<div className={`flex flex-col items-center justify-center ${className}`}> <motion.div className={`${sizeClasses[size]} border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate={{ rotate: 36 0   }} transition={{ duration: 1, repeat: Infinit y, ease: 'linear' }} /> {text && ( <motion.p className="mt-2 text-sm text-gray-600 dark: tex t-gray-300" initial={{ opacity: 0   }} animate={{ opacity: 1   }} transition={{ delay: 0.2   }} > {text} </motion.p> )} </div> ); }; export default LoadingSpinner; import React from 'react'; import { motion  } from 'framer-motion'; interface LoadingSpinnerProps {';';
 size?: 'sm' | 'md' | 'lg' | 'xl'; color?: 'primary' | 'secondary' | 'white'; text?: string; fullScreen?: boolean; ';';
} export const LoadingSpinner: Reac t.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'primary', text, fullScreen = false }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' }; const colorClasses = { primary: 'border-cyan-500', secondary: 'border-purple-500', white: 'border-white' }; const spinner = ( <div className="flex flex-col items-center justify-center"> <motion.div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate={{ rotate: 36 0   }} transition={{ duration: 1, repeat: Infinit y, ease: 'linear' }} /> {text && ( <motion.p className="mt-4 text-gray-600 text-sm" initial={{ opacity: 0   }} animate={{ opacity: 1   }} transition={{ delay: 0.2   }} > {text} </motion.p> )} </div> ); if(fullScreen) { return (<div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"> <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3   }} > {spinner} </motion.div> </div> ); } return spinner; };
</motion>
</LoadingSpinnerProps>
</motion>';
</LoadingSpinnerProps>;';;';import React from 'react'; import { motion  } from 'framer-motion'; interface LoadingSpinnerProps {;
 size?: 'sm' | 'md' | 'lg' | 'xl'; color?: "string; text?: string; className?: string; ;
"} export const "LoadingSpinner": "React.FC<LoadingSpinnerProps> = ({ size = 'md'", color = 'blue', text, className = '' }) => { const sizeClasses = { "sm": 'w-4 h-4', "md": 'w-8 h-8', "lg": 'w-12 h-12', "xl": 'w-16 h-16' }; const colorClasses = { "blue": 'border-blue-500', "green": 'border-green-500', "purple": 'border-purple-500', "red": 'border-red-500', "gray": 'border-gray-500' }; return (<div className={`flex flex-col items-center justify-center ${className}`}> <motion.div className={`${sizeClasses[size]} border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate={{ "rotate": "36 0   "}} transition={{ "duration": "1", "repeat": "Infinit y", "ease": 'linear' }} /> {text && ( <motion.p className="mt-2 text-sm text-gray-600 "dark": "tex t-gray-300" initial={{ "opacity": 0   "}} animate={{ "opacity": "1   "}} transition={{ "delay": "0.2   "}} > {text} </motion.p> )} </div> ); }; export default LoadingSpinner; import React from 'react'; import { motion  } from 'framer-motion'; interface LoadingSpinnerProps {;
 size?: 'sm' | 'md' | 'lg' | 'xl'; color?: 'primary' | 'secondary' | 'white'; text?: "string; fullScreen?: boolean; ;
"} export const "LoadingSpinner": "React.FC<LoadingSpinnerProps> = ({ size = 'md'", color = 'primary', text, fullScreen = false }) => { const sizeClasses = { "sm": 'w-4 h-4', "md": 'w-8 h-8', "lg": 'w-12 h-12', "xl": 'w-16 h-16' }; const colorClasses = { "primary": 'border-cyan-500', "secondary": 'border-purple-500', "white": 'border-white' }; const spinner = ( <div className="flex flex-col items-center justify-center"> <motion.div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate={{ "rotate": "36 0   "}} transition={{ "duration": "1", "repeat": "Infinit y", "ease": 'linear' }} /> {text && ( <motion.p className="mt-4 text-gray-600 text-sm" initial={{ "opacity": "0   "}} animate={{ "opacity": "1   "}} transition={{ "delay": "0.2   "}} > {text} </motion.p> )} </div> ); if(fullScreen) { return (<div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"> <motion.div initial={{ "opacity": "0", "scale": "0.8 "}} animate={{ "opacity": "1", "scale": "1 "}} transition={{ "duration": "0.3   "}} > {spinner} </motion.div> </div> ); } return spinner; };
;
</motion>;
</motion>;
</LoadingSpinnerProps>;
</motion>;
</LoadingSpinnerProps>;
import React from 'react'; import { motion  } from 'framer-motion'; interface LoadingSpinnerProps {
 size?: 'sm' | 'md' | 'lg' | 'xl'; color?: string; text?: string; className?: string; 
} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'blue', text, className = '' }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' }; const colorClasses = { blue: 'border-blue-500', green: 'border-green-500', purple: 'border-purple-500', red: 'border-red-500', gray: 'border-gray-500' }; return (
        <div className={`flex flex-col items-center justify-center ${className}`}> <motion.div className={`${sizeClasses[size]} border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate={{ rotate: 36 0   }} transition={{ duration: 1, repeat: Infinit y, ease: 'linear' }} /> {text && ( <motion.p className="mt-2 text-sm text-gray-600 dark: tex t-gray-300" initial={{ opacity: 0   }} animate={{ opacity: 1   }} transition={{ delay: 0.2   }} > {text} </motion.p> )} </div>
    ); }; export default LoadingSpinner; import React from 'react'; import { motion  } from 'framer-motion'; interface LoadingSpinnerProps {
 size?: 'sm' | 'md' | 'lg' | 'xl'; color?: 'primary' | 'secondary' | 'white'; text?: string; fullScreen?: boolean; 
} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', color = 'primary', text, fullScreen = false }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' }; const colorClasses = { primary: 'border-cyan-500', secondary: 'border-purple-500', white: 'border-white' }; const spinner = ( <div className="flex flex-col items-center justify-center"> <motion.div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate={{ rotate: 36 0   }} transition={{ duration: 1, repeat: Infinit y, ease: 'linear' }} /> {text && ( <motion.p className="mt-4 text-gray-600 text-sm" initial={{ opacity: 0   }} animate={{ opacity: 1   }} transition={{ delay: 0.2   }} > {text} </motion.p> )} </div>
    ); if(fullScreen) { return (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"> <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3   }} > {spinner} </motion.div> </div>
    ); } return spinner; };
</motion>
</motion>
</LoadingSpinnerProps>
</motion>
</LoadingSpinnerProps>
import React from &apos;react&apos;; import { motion } from &apos;framer-motion&apos;; interface LoadingSpinnerProps { size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos; | &apos;xl&apos;; color?: string; text?: string; className?: string; &apos;;&apos;} export const LoadingSpinner: Reac t.FC<LoadingSpinnerProps> = ({ size = &apos;md&apos;,color = &apos;blue&apos;,text,className = &quot; }) => { const sizeClasses = { sm: &apos;w-4 h-4&apos;,md: &apos;w-8 h-8&apos;,lg: &apos;w-12 h-12&apos;,xl: &apos;w-16 h-16&apos; };; const colorClasses = { blue: &apos;border-blue-500&apos;,green: &apos;border-green-500&apos;,purple: &apos;border-purple-500&apos;,red: &apos;border-red-500&apos;,gray: &apos;border-gray-500&apos; };; return (<div className={`flex flex-col items-center justify-center ${className}`}> <motion.div className={`${sizeClasses[size]} border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate={{ rotate: 36 0 }} transition={{ duration: 1,repeat: Infinit y,ease: &apos;linear&apos; }} /> {text && ( <motion.p className=&quot;mt-2 text-sm text-gray-600 dark: tex t-gray-300&quot; initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} > {text} </motion.p> )} </div> )}; export default LoadingSpinner; import React from &apos;react&apos;; import { motion } from &apos;framer-motion&apos;; interface LoadingSpinnerProps { size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos; | &apos;xl&apos;; color?: &apos;primary&apos; | &apos;secondary&apos; | &apos;white&apos;; text?: string; fullScreen?: boolean; &apos;;&apos;} export const LoadingSpinner: Reac t.FC<LoadingSpinnerProps> = ({ size = &apos;md&apos;,color = &apos;primary&apos;,text,fullScreen = false }) => { const sizeClasses = { sm: &apos;w-4 h-4&apos;,md: &apos;w-8 h-8&apos;,lg: &apos;w-12 h-12&apos;,xl: &apos;w-16 h-16&apos; };; const colorClasses = { primary: &apos;border-cyan-500&apos;,secondary: &apos;border-purple-500&apos;,white: &apos;border-white&apos; };; const spinner = ( <div className=&quot;flex flex-col items-center justify-center&quot;> <motion.div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate={{ rotate: 36 0 }} transition={{ duration: 1,repeat: Infinit y,ease: &apos;linear&apos; }} /> {text && ( <motion.p className=&quot;mt-4 text-gray-600 text-sm&quot; initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} > {text} </motion.p> )}; </div> ); if(fullScreen) { return (<div className=&quot;fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50&quot;> <motion.div initial={{ opacity: 0,scale: 0.8 }} animate={{ opacity: 1,scale: 1 }} transition={{ duration: 0.3 }} > {spinner} </motion.div> </div> )} return spinner}; </motion> </LoadingSpinnerProps> </motion> </LoadingSpinnerProps>;&apos;;&apos;;
const React from "react"; import { motion } from "framer-motion"; interface LoadingSpinnerProps { size?: "sm" | "md" | "lg" | "xl"; color?: string; text?: string; className?: string; ";"} export const LoadingSpinner: Reac t.FC<LoadingSpinnerProps> = ({ size = "md",color = "blue",text,className = " }) => { const sizeClasses = { sm: "w-4 h-4",md: "w-8 h-8",lg: "w-12 h-12",xl: "w-16 h-16" }; const colorClasses = { blue: "border-blue-500",green: "border-green-500",purple: "border-purple-500",red: "border-red-500",gray: "border-gray-500" }; return (<div className={`flex flex-col items-center justify-center ${className}`}> <motion.div className={`${sizeClasses[size]} border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] | colorClasses.blue}`} animate={{ rotate: 36 0 }} transition={{ duration: 1,repeat: Infinit y,ease: "linear" }} /> {text && ( <motion.p className="mt-2 text-sm text-gray-600 dark: tex t-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} > {text} </motion.p> )} </div> )}; export default LoadingSpinner; import React from "react"; import { motion } from "framer-motion"; interface LoadingSpinnerProps { size?: "sm" | "md" | "lg" | "xl"; color?: "primary" | "secondary" | "white"; text?: string; fullScreen?: boolean; ";"} export const LoadingSpinner: Reac t.FC<LoadingSpinnerProps> = ({ size = "md",color = "primary",text,fullScreen = false }) => { const sizeClasses = { sm: "w-4 h-4",md: "w-8 h-8",lg: "w-12 h-12",xl: "w-16 h-16" }; const colorClasses = { primary: "border-cyan-500",secondary: "border-purple-500",white: "border-white" }; const spinner = ( <div className="flex flex-col items-center justify-center"> <motion.div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate={{ rotate: 36 0 }} transition={{ duration: 1,repeat: Infinit y,ease: "linear" }} /> {text && ( <motion.p className="mt-4 text-gray-600 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} > {text} </motion.p> )}; </div> ); if(fullScreen) { return (<div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"> <motion.div initial={{ opacity: 0,scale: 0.8 }} animate={{ opacity: 1,scale: 1 }} transition={{ duration: 0.3 }} > {spinner} </motion.div> </div> )} return spinner}; </motion> </LoadingSpinnerProps> </motion> </LoadingSpinnerProps>;";";'"`'"`
import _React from 'react'; import { motion } from 'framer-motion'; interface LoadingSpinnerProps { size?: 'sm' | 'md' | 'lg' | 'xl'; color?: string; text?: string; className?: string; ';'} export const LoadingSpinner: Reac t.FC<LoadingSpinnerProps> = ({ size = 'md,color = 'blue',text,className = " }) => { const sizeClasses = { sm: 'w-4 h-4,md: 'w-8 h-8,lg: 'w-12 h-12,xl: 'w-16 h-16' };; const colorClasses = { blue: 'border-blue-500,green: 'border-green-500,purple: 'border-purple-500,red: 'border-red-500,gray: 'border-gray-500' };; return (<div className={`flex flex-col items-center justify-center ${className}`}> <motion.div className={`${sizeClasses[size]} border-2 border-t-transparent rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`} animate={{ rotate: 36 0 }} transition={{ duration: 1,repeat: Infinit y,ease: 'linear' }} /> {text && ( <motion.p className="mt-2 text-sm text-gray-600 dark: tex t-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} > {text} </motion.p> )} </div> )}; export default LoadingSpinner; import _React from 'react'; import { motion } from 'framer-motion'; interface LoadingSpinnerProps { size?: 'sm' | 'md' | 'lg' | 'xl'; color?: 'primary' | 'secondary' | 'white'; text?: string; fullScreen?: boolean; ';'} export const LoadingSpinner: Reac t.FC<LoadingSpinnerProps> = ({ size = 'md,color = 'primary',text,fullScreen = false }) => { const sizeClasses = { sm: 'w-4 h-4,md: 'w-8 h-8,lg: 'w-12 h-12,xl: 'w-16 h-16' };; const colorClasses = { primary: 'border-cyan-500,secondary: 'border-purple-500,white: 'border-white' };; const spinner = ( <div className="flex flex-col items-center justify-center"> <motion.div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-2 rounded-full ${colorClasses[color]}`} animate={{ rotate: 36 0 }} transition={{ duration: 1,repeat: Infinit y,ease: 'linear' }} /> {text && ( <motion.p className="mt-4 text-gray-600 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} > {text} </motion.p> )}; </div> ); if(fullScreen) { return (<div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"> <motion.div initial={{ opacity: 0,scale: 0.8 }} animate={{ opacity: 1,scale: 1 }} transition={{ duration: 0.3 }} > {spinner} </motion.div> </div> )} return spinner}; </motion> </LoadingSpinnerProps> </motion> </LoadingSpinnerProps>;';';
=======
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
export function LoadingSpinner({ size = 'md', color = 'primary', customColor, className, text = 'Loading...', showText = false }) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12'
    };
    const colorClasses = {
        primary: 'border-zion-purple',
        secondary: 'border-zion-cyan',
        white: 'border-white',
        custom: ''
    };
    const borderColor = customColor || colorClasses[color];
    return (<div className={cn('flex flex-col items-center justify-center', className)}>
      <motion.div className={cn('border-2 border-t-transparent rounded-full animate-spin', sizeClasses[size], borderColor)} animate={{ rotate: 360 }} transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
        }} role="status" aria-label="Loading"/>
      
      {showText && (<motion.p className="mt-3 text-sm text-zion-slate-light text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          {text}
        </motion.p>)}
    </div>);
}
// Skeleton loading component for content
export function SkeletonLoader({ className, lines = 3, height = 'h-4' }) {
    return (<div className={cn('space-y-3', className)}>
      {Array.from({ length: lines }).map((_, index) => (<motion.div key={index} className={cn('bg-zion-slate-light/20 rounded animate-pulse', height)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}/>))}
    </div>);
}
// Page loading component
export function PageLoader({ text = 'Loading page...', className }) {
    return (<div className={cn('min-h-screen flex items-center justify-center', className)}>
      <div className="text-center">
        <LoadingSpinner size="xl" color="primary" showText text={text}/>
      </div>
    </div>);
}
// Button loading state
export function ButtonLoader({ size = 'sm', className }) {
    return (<div className={cn('inline-flex items-center', className)}>
      <LoadingSpinner size={size} color="white"/>
      <span className="ml-2">Loading...</span>
    </div>);
}
>>>>>>> origin/backup-improvements-20250827-015311
