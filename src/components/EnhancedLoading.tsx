<<<<<<< HEAD
import {  import { motion, AnimatePresence  } from 'framer-motion';
 from 'lucide-react';
interface LoadingSpinnerProps extends React.PropsWithChildren<{}> {;

  size?: 'sm' | 'md' | 'lg';
<<<<<<< HEAD:src_backup_temp/components/EnhancedLoading.tsx
  text?: "string;
  fullScreen?: boolean"}
;
export function LoadingSpinner("props": "any) {;

  ;
"}}
=======
  text?: string;
  fullScreen?: boolean}

export function LoadingSpinner({;

  size = 'md',
  text = 'Loading...',
  fullScreen = false}: LoadingSpinnerProps) {;
}}
>>>>>>> origin/automation-fixes:src/components/EnhancedLoading.tsx
            />";
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-xl">;
              ZION;
            </div>;
          </div>;

          <motion.h2";
            className="text-2xl font-bold text-white mb-2";
            animate = {;

<<<<<<< HEAD:src_backup_temp/components/EnhancedLoading.tsx
  { "opacity": "[0.7", 1,;
  0.7];

}}
            transition = {;

  { "duration": "2",;
  "repeat": "Infinit y;

"}}
=======
  { opacity: [0.7, 1,
  0.7];
}}
            transition = {;

  { duration: 2,
  repeat: Infinity;
}}
>>>>>>> origin/automation-fixes:src/components/EnhancedLoading.tsx
          >;
            Loading {pageName}
          </motion.h2>;

          <motion.p";
            className="text-zion-slate-light";
            animate = {;

<<<<<<< HEAD:src_backup_temp/components/EnhancedLoading.tsx
  { "opacity": "[0.5", 1,;
  0.5];

}}
            transition = {;

  { "duration": "2", "repeat": "Infinit y",;
  "delay": "0.5;

"}}
=======
  { opacity: [0.5, 1,
  0.5];
}}
            transition = {;

  { duration: 2, repeat: Infinity,
  delay: 0.5;
}}
>>>>>>> origin/automation-fixes:src/components/EnhancedLoading.tsx
          >;
            Please wait while we prepare everything for you...;
          </motion.p>;

          {/* Progress Bar */}";
          <div className="mt-6 w-64 mx-auto">";
            <div className="bg-zion-slate-light/20 rounded-full h-2 overflow-hidden">;
              <motion.div";
                className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full";
                initial={{ "width": "0 "}}";
                animate={{ "width": "100%" }}
                transition = {;
<<<<<<< HEAD:src_backup_temp/components/EnhancedLoading.tsx
  { "duration": "3",;
  "ease": "easeInOut";
=======
  { duration: 3,
  ease: "easeInOut";
>>>>>>> origin/automation-fixes:src/components/EnhancedLoading.tsx
}}
              />;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </div>;) }
<<<<<<< HEAD:src_backup_temp/components/EnhancedLoading.tsx
  lines?: "number;
  className?: string"}
;
export function SkeletonLoader(...args[]): "{;
=======
  lines?: number;
  className?: string}

export function SkeletonLoader(...args[]):  {;
>>>>>>> origin/automation-fixes:src/components/EnhancedLoading.tsx

  return ()`;
<div "className":  {`space-y-3 ${className"}`}> {Array.from({ "length": "line s "}).map((_, index)  => (;
        <motion.div;
          key={index}";
          className="h-4 bg-zion-slate-light/20 rounded";
          animate = {;

  {;

<<<<<<< HEAD:src_backup_temp/components/EnhancedLoading.tsx
            "opacity": "[0.5", 1, 0.5],;
            "backgroundPosition": "['200% 0'",-200% 0'];

=======
            opacity: [0.5, 1, 0.5],
            backgroundPosition: ['200% 0',-200% 0'];
>>>>>>> origin/automation-fixes:src/components/EnhancedLoading.tsx
}}
          transition = {;

  {;

<<<<<<< HEAD:src_backup_temp/components/EnhancedLoading.tsx
            "duration": "1.5",;
            "repeat": "Infinit y",;
  "delay": "inde x * 0.1;

"}}
=======
            duration: 1.5,
            repeat: Infinity,
  delay: index * 0.1;
}}
>>>>>>> origin/automation-fixes:src/components/EnhancedLoading.tsx
          style = {;

  {;

            "background": 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.1), transparent),"`;

</motion>;
</div>;
</motion>;
</motion>;
</motion>
=======
import React from 'react';
import { motion } from 'framer-motion';
const EnhancedLoading = ({ variant = 'spinner', size = 'md', text, className = '' }) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };
    const renderSpinner = () => (<motion.div className={`${sizeClasses[size]} border-2 border-blue-400/30 border-t-blue-400 rounded-full`} animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}/>);
    const renderDots = () => (<div className="flex space-x-1">
      {[0, 1, 2].map((i) => (<motion.div key={i} className={`${sizeClasses[size]} bg-blue-400 rounded-full`} animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
            }} transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: i * 0.2
            }}/>))}
    </div>);
    const renderPulse = () => (<motion.div className={`${sizeClasses[size]} bg-blue-400 rounded-full`} animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
        }} transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }}/>);
    const renderBars = () => (<div className="flex space-x-1">
      {[0, 1, 2, 3].map((i) => (<motion.div key={i} className={`w-1 ${size === 'sm' ? 'h-3' : size === 'md' ? 'h-6' : size === 'lg' ? 'h-8' : 'h-12'} bg-blue-400 rounded-full`} animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
            }} transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.1
            }}/>))}
    </div>);
    const renderVariant = () => {
        switch (variant) {
            case 'dots':
                return renderDots();
            case 'pulse':
                return renderPulse();
            case 'bars':
                return renderBars();
            default:
                return renderSpinner();
        }
    };
    return (<div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {renderVariant()}
      {text && (<motion.p className="text-sm text-gray-400 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          {text}
        </motion.p>)}
    </div>);
};
export default EnhancedLoading;
>>>>>>> origin/backup-improvements-20250827-015311
