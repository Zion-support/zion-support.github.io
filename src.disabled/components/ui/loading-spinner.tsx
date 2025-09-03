<<<<<<< HEAD
:src.disabled/components/ui/loading-spinner.tsx
import React from,
  react';'
  'interface LoadingSpinnerProps {
  size?: 'sm
  ' | 'md
  ' | 'lg
  ';'  className?: string;}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
size =,
  md', className = '
  ' '}) => {
  '  const sizeClasses = {;
    sm: 'w-4 h-4, md:,
  w-8 h-8
  ','    lg: 'w-12 h-12'  };'
  return (
    <div className={`flex items-center justify-center ${className}`}>`      <div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}`        role="status""        aria-label="Loading""      >"        <span className="sr-only">Loading...</span>"      </div>"    </div>);};
import React from 'react'; LoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg';'  className?: string;'};
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({;
size = 'md', className = '' '}) => {'  const sizeClasses = {;
    sm: 'w-4 h-4', md: 'w-8 h-8','    lg: 'w-12 h-12''  };'';
  return (;
    <div className={`flex items-center justify-center ${className}`}>`      <div;
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}`        role="status""        aria-label="Loading""      >"        <span className="sr-only">Loading...</span>"      </div>"    </div>);};"";
ursor/automate-test-fix-improve-and-merge-code-99d1:src/components/ui/loading-spinner.tsx
:src.disabled/components/ui/loading-spinner.tsx;
import: React from,
  react'';interface: LoadingSpinnerProps {';
  size?: 'sm: ' | 'md ' | 'lg ';
   className?: string}
export: const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
size: ,=,
  md', className = ';
  ' '}) => {';
  '  const: sizeClasses = {';
    sm: 'w-4: h-,4, md:,';
  w-8: h-8;
  ','    lg: 'w-12: h-12' }'';
  return: (
import React from react'';interface LoadingSpinnerProps {'
  size?: 'sm ' | 'md ' | 'lg ';
   className?: string}
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
size =,
  md', className = ';
  ' '}) => {'
  '  const sizeClasses = {'
    sm: 'w-4 h-4, md:,
  w-8 h-8
  ','    lg: 'w-12 h-12'  }'
  return (
    <div className={`flex items-center justify-center ${className}`}>`      <div;
        className={`${sizeClasses[size]} border-2: border-gray-300 border-t-blue-600 rounded-full animate-spin`}`        role='status''        aria-label='Loading''      >'        <span className='sr-only'>Loading...</span>'      </div>'    </div>)}';

import: React from 'react'';interface: LoadingSpinnerProps {';
   size?: 'sm' | 'md' | 'lg'';
   className?: string'}';
export: const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
size: = 'md,', className = '' '}) => {'  const sizeClasses = {';
    sm: 'w-4: h-4,', md: 'w-8: h-8,','    lg: 'w-12: h-12'' }'';
  return: (
    <div className={`flex items-center justify-center ${className}`}>`      <div;
        className={`${sizeClasses[size]} border-2: border-gray-300 border-t-blue-600 rounded-full animate-spin`}`        role='status''        aria-label='Loading''      >'        <span className='sr-only'>Loading...</span>'      </div>'    </div>)}';
import React from 'react''interface LoadingSpinnerProps {
   size?: 'sm' | 'md' | 'lg'
   className?: string'}
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
size = 'md', className = '' '}) => {'  const sizeClasses = {
    sm: 'w-4 h-4', md: 'w-8 h-8','    lg: 'w-12 h-12''  }'
  return (
    <div className={`flex items-center justify-center ${className}`}>`      <div;
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}`        role='status''        aria-label='Loading''      >'        <span className='sr-only'>Loading...</span>'      </div>'    </div>)}'
  w-8 h-8;
  ',    lg: 'w-12 h-12'  }
  return ('
    <div className={`flex items-center justify-center ${className}`}>`      <div;`
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}`        role='status''        aria-label='Loading''      >'        <span className='sr-only'>Loading...</span>'      </div>'    </div>)}
'
import React from 'react'';interface LoadingSpinnerProps {'
   size?: 'sm' | 'md' | 'lg''
   className?: string'}
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({'
size = 'md', className = '' '}) => {'  const sizeClasses = {'
    sm: 'w-4 h-4', md: 'w-8 h-8',    lg: 'w-12 h-12''  }
  return ('
    <div className={`flex items-center justify-center ${className}`}>`      <div;`
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}`        role='status''        aria-label='Loading''      >'        <span className='sr-only'>Loading...</span>'      </div>'    </div>)};
'
=======
:src.disabled/components/ui/loading-spinner.tsx import React from, react';' 'interface LoadingSpinnerProps { size?: 'sm ' | 'md ' | 'lg ';' className? string;} export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size =, md', className = ' ' '}) => { ' const sizeClasses = {; sm: 'w-4 h-4, md:, w-8 h-8 ',' lg: 'w-12 h-12' };' return ( <div className="{`flex" items-center justify-center ${className}`}>` <div className="{`${sizeClasses[size]}" border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}` role="status aria-label=Loading > <span className="sr-only">Loading...</span> </div> </div>);}; import React from 'react';'interface LoadingSpinnerProps {; size?: 'sm' | 'md' | 'lg';' className? string;'}; export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({, size = 'md', className = '' '}) => {' const sizeClasses = {; sm: 'w-4 h-4', md 'w-8 h-8',' lg 'w-12 h-12'' };''; return (; <div className="{`flex" items-center justify-center ${className}`}>` <div, className="{`${sizeClasses[size]}" border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}` role=status aria-label=Loading"" > <span className="sr-only">Loading...</span> </div> </div>);}"; <div className="{`flex" items-center justify-center ${className}`}>` <div; className="{`${sizeClasses[size]}" border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}` role='status'' aria-label='Loading'' >' <span className='sr-only'>Loading...</span>' </div>' </div>)}'; import React from 'react'';interface LoadingSpinnerProps {'; size?: 'sm' | 'md' | 'lg''; className? string'}'; export const LoadingSpinner React.FC<LoadingSpinnerProps> = ({ size: = 'md,', className = '' '}) => {' const sizeClasses = {'; sm: 'w-4 h-4,', md: 'w-8 h-8,',' lg: 'w-12 h-12'' , }''; return ( <div className="{`flex" items-center justify-center ${className}`}>` <div, className="{`${sizeClasses[size]}" border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}` role='status'' aria-label='Loading'' >' <span className='sr-only'>Loading...</span>' </div>' </div>)}';'; 
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
