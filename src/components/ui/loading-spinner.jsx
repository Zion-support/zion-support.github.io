<<<<<<< HEAD
 import { motion } from 'framer-motion' import { cn } from '@/lib/utils' export function LoadingSpinner({ size = 'md', variant = 'default', className = ', text }) { const sizeClasses = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8', xl: 'w-12 h-12' } const variantClasses = { default: 'text-zion-cyan', primary: 'text-zion-blue', secondary: 'text-zion-purple', white: 'text-white' } return ( <div className={cn('flex flex-col items-center gap-3', className)}> <motion.div className={cn( 'animate-spin rounded-full border-2 border-current border-t-transparent', sizeClasses[size], variantClasses[variant] )} role='status' aria-label='Loading' > <span className='sr-only'>Loading...</span> </motion.div> {text && ( <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className='text-zion-slate-light font-medium text-sm' > {text} </motion.p> )} </div> ) }'";
=======
<<<<<<< HEAD
import React from 'react';
import {SEO } from '@/components/SEO';

export default function loadingspinner() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="loadingspinner - Zion Tech Group" description="Professional loadingspinner services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">loadingspinner</h1>
        <p className="text-gray-300 text-lg">
          Professional loadingspinner services to help your business grow.
        </p>
      </div>
    </div>
  );
}
=======
<<<<<<< HEAD
 import { motion } from &apos;framer-motion&apos; import { cn } from &apos;@/lib/utils&apos;&apos;' export function LoadingSpinner({ size = &apos;md&apos;, variant = &apos;default&apos;, className = &apos;&apos;, text }) {&apos;}&apos; const sizeClasses = { sm: &apos;w-4 h-4&apos;, md: &apos;w-6 h-6&apos;, lg: &apos;w-8 h-8&apos;, xl: &apos;w-12 h-12&apos; }&apos; const variantClasses = { default: &apos;text-zion-cyan&apos;, primary: &apos;text-zion-blue&apos;, secondary: &apos;text-zion-purple&apos;, white: &apos;text-white&apos; } return (&apos; <div className={cn(&apos;flex flex-col items-center gap-3&apos;, className)}>&apos; <motion.div className={cn( &apos;animate-spin rounded-full border-2 border-current border-t-transparent&apos;, sizeClasses[size], variantClasses[variant] )} role=&apos;status&apos; aria-label=&apos;Loading&apos; >&apos; <span className=&apos;sr-only&apos;>Loading...&apos;</span> </motion.div> {text && (} <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className=&apos;text-zion-slate-light font-medium text-sm&apos; > {text}&apos; </motion.p> )} <;</div> ) }&apos;'&quot;
;&quot;"
=======
<<<<<<< HEAD
 import { motion } from 'framer-motion' import { cn } from '@/lib/utils' export function LoadingSpinner({ size = 'md', variant = 'default', className = '', text }) { const sizeClasses = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8', xl: 'w-12 h-12' } const variantClasses = { default: 'text-zion-cyan', primary: 'text-zion-blue', secondary: 'text-zion-purple', white: 'text-white' } return ( <div className={cn('flex flex-col items-center gap-3', className)}" > <motion .div className={cn( 'animate-spin rounded-full border-2 border-current border-t-transparent', sizeClasses[size], variantClasses[variant] )} role='status' aria-label='Loading'" > <span className='sr-only'>Loading...</span> </motion.div> {text && ( <motion .p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className='text-zion-slate-light font-medium text-sm'" > {text} </motion.p> )} </div> ) }''"""
 import { motion } from 'framer-motion' import { cn } from '@/lib/utils' export function LoadingSpinner({ size = 'md', variant = 'default', className = '', text }) { const sizeClasses = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8', xl: 'w-12 h-12' } const variantClasses = { default: 'text-zion-cyan', primary: 'text-zion-blue', secondary: 'text-zion-purple', white: 'text-white' } return ( <div className={cn('flex flex-col items-center gap-3', className)}" > <motion .div className={cn( 'animate-spin rounded-full border-2 border-current border-t-transparent', sizeClasses[size], variantClasses[variant] )} role='status' aria-label='Loading'" > <span className='sr-only'>Loading...</span> </motion.div> {text && ( <motion .p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className='text-zion-slate-light font-medium text-sm'" > {text} </motion.p> )} </div> ) }''"

;""
=======
<<<<<<< HEAD
 import { motion } from 'framer-motion' import { cn } from '@/lib/utils' export function LoadingSpinner({ size = 'md', variant = 'default', className = '', text }) { const sizeClasses = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8', xl: 'w-12 h-12' } const variantClasses = { default: 'text-zion-cyan', primary: 'text-zion-blue', secondary: 'text-zion-purple', white: 'text-white' } return ( <div className={cn('flex flex-col items-center gap-3', className)}> <motion.div className={cn( 'animate-spin rounded-full border-2 border-current border-t-transparent', sizeClasses[size], variantClasses[variant] )} role='status' aria-label='Loading' > <span className='sr-only'>Loading...</span> </motion.div> {text && ( <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className='text-zion-slate-light font-medium text-sm' > {text} </motion.p> )} </div> ) }''""
=======
 import { motion } from 'framer-motion' import { cn } from '@/lib/utils' export function LoadingSpinner({ size = 'md', variant = 'default', className = '', text }) { const sizeClasses = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8', xl: 'w-12 h-12' } const variantClasses = { default: 'text-zion-cyan', primary: 'text-zion-blue', secondary: 'text-zion-purple', white: 'text-white' } return ( <div className={cn('flex flex-col items-center gap-3', className)}" > <motion .div className={cn( 'animate-spin rounded-full border-2 border-current border-t-transparent', sizeClasses[size], variantClasses[variant] )} role='status' aria-label='Loading'" > <span className='sr-only'>Loading...</span> </motion.div> {text && ( <motion .p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className='text-zion-slate-light font-medium text-sm'" > {text} </motion.p> )} </div> ) }''""
 import { motion } from 'framer-motion' import { cn }  from '@/lib/utils';export function LoadingSpinner({ size = 'md', variant = 'default', className = '', text }) { const sizeClasses = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8', xl: 'w-12 h-12' } const variantClasses = { default: 'text-zion-cyan', primary: 'text-zion-blue', secondary: 'text-zion-purple', white: 'text-white' } return ( <div className={cn('flex flex-col items-center gap-3', className)}" > <motion .div className={cn( 'animate-spin rounded-full border-2 border-current border-t-transparent', sizeClasses[size], variantClasses[variant] )} role='status' aria-label='Loading'" > <span className='sr-only'>Loading...</span> </motion.div> {text && ( <motion .p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className='text-zion-slate-light font-medium text-sm'" > {text} </motion.p> )} </div> ) }''
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
