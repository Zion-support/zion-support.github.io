import {  import { motion, AnimatePresence  } from 'framer-motion';
 from 'lucide-react';

interface LoadingSpinnerProps extends React.PropsWithChildren<{}> {

  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean}

export function LoadingSpinner({

  size = 'md',
  text = 'Loading...',
  fullScreen = false}: LoadingSpinnerProps) {

  ;
}}
            />"
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-xl">
              ZION
            </div>
          </div>

          <motion.h2"
            className="text-2xl font-bold text-white mb-2"
            animate = {

  { opacity: [0.7, 1,
  0.7]

}}
            transition = {

  { duration: 2,
  repeat: Infinity

}}
          >
            Loading {pageName}
          </motion.h2>

          <motion.p"
            className="text-zion-slate-light"
            animate = {

  { opacity: [0.5, 1,
  0.5]

}}
            transition = {

  { duration: 2, repeat: Infinity,
  delay: 0.5

}}
          >
            Please wait while we prepare everything for you...
          </motion.p>

          {/* Progress Bar */}"
          <div className="mt-6 w-64 mx-auto">"
            <div className="bg-zion-slate-light/20 rounded-full h-2 overflow-hidden">
              <motion.div"
                className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"
                initial={{ width: 0 }}"
                animate={{ width: "100%" }}
                transition = {
  { duration: 3,
  ease: "easeInOut"
}}
              />
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </div>;) }
  lines?: number;
  className?: string}

export function SkeletonLoader(...args[]):  {

  return ()`
<div className:  {`space-y-3 ${className}`}>;
      {Array.from({ length: lines }).map((_, index)  => (;
        <motion.div
          key={index}"
          className="h-4 bg-zion-slate-light/20 rounded"
          animate = {

  {

            opacity: [0.5, 1, 0.5],
            backgroundPosition: ['200% 0',-200% 0']

}}
          transition = {

  {

            duration: 1.5,
            repeat: Infinity,
  delay: index * 0.1

}}
          style = {

  {

            background: 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.1), transparent),"`
interface EnhancedLoadingProps { size?: 'sm' | 'md' | 'lg' | 'xl'; variant?: 'spinner' | 'dots' | 'pulse' | 'wave'; text?: string; className?: string; } export const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({ size = 'md', variant = 'spinner', text = 'Loading...', className = '' }) => { const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' }; const renderSpinner = () => ( <motion.div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full`} animate={{ rotate: 360   }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} /> ); const renderDots = () => ( <div className="flex space-x-1"> {[0, 1, 2].map((i) => ( <motion.div key={i} className={`${size === 'sm' ? 'w-1.5 h-1.5' : size === 'md' ? 'w-2 h-2' : size === 'lg' ? 'w-3 h-3' : 'w-4 h-4'} bg-blue-600 rounded-full`} animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }} /> ))} </div> ); const renderPulse = () => ( <motion.div className={`${sizeClasses[size]} bg-blue-600 rounded-full`} animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} /> ); const renderWave = () => ( <div className="flex space-x-1"> {[0, 1, 2, 3, 4].map((i) => ( <motion.div key={i} className={`${size === 'sm' ? 'w-1 h-3' : size === 'md' ? 'w-1.5 h-4' : size === 'lg' ? 'w-2 h-6' : 'w-3 h-8'} bg-blue-600 rounded-full`} animate={{ height: [size === 'sm' ? 12 : size === 'md' ? 16 : size === 'lg' ? 24 : 32, size === 'sm' ? 6 : size === 'md' ? 8 : size === 'lg' ? 12 : 16, size === 'sm' ? 12 : size === 'md' ? 16 : size === 'lg' ? 24 : 32] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }} /> ))} </div> ); const renderLoader = () => { switch(variant) { case 'dots': return renderDots(); case 'pulse': return renderPulse(); case 'wave': return renderWave(); default: return renderSpinner(); } }; return(<div className={`flex flex-col items-center justify-center space-y-4 ${className}`}> {renderLoader()} {text && ( <motion.p className="text-gray-600 dark:text-gray-400 text-sm font-medium" initial={{ opacity: 0   }} animate={{ opacity: 1   }} transition={{ delay: 0.3   }} > {text} </motion.p> )} </div> ); }; export const FullScreenLoading: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => ( <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"> <EnhancedLoading size="xl" variant="spinner" text={text} /> </div> ); export const InlineLoading: React.FC<{ text?: string; size?: 'sm' | 'md' | 'lg' }> = ({ text = 'Loading...', size = 'md' }) => ( <div className="flex items-center space-x-2"> <EnhancedLoading size={size} variant="dots" /> <span className="text-sm text-gray-600 dark:text-gray-400">{text}</span> </div> ); export const ButtonLoading: React.FC<{ text?: string; size?: 'sm' | 'md' }> = ({ text = 'Loading...', size = 'sm' }) => ( <div className="flex items-center space-x-2"> <EnhancedLoading size={size} variant="spinner" /> <span>{text}</span> </div> );
