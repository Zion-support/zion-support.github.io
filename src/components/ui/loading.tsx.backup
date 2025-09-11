import React from 'react';
<<<<<<< HEAD
import { _cn } from '@/lib/utils';
export function Loading({ size = 'md', variant = 'spinner', className, text }) {
    const _sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12'
    };
    const _renderSpinner = () => (<div className={cn('border-2 border-current border-t-transparent rounded-full animate-spin', sizeClasses[size])}/>);
    const _renderDots = () => (<div className="flex space-x-1">
      <div className={cn('bg-current rounded-full animate-bounce', sizeClasses[size])} style={{ animationDelay: '0ms' }}/>
      <div className={cn('bg-current rounded-full animate-bounce', sizeClasses[size])} style={{ animationDelay: '150ms' }}/>
      <div className={cn('bg-current rounded-full animate-bounce', sizeClasses[size])} style={{ animationDelay: '300ms' }}/>
    </div>);
    const _renderPulse = () => (<div className={cn('bg-current rounded-full animate-ping', sizeClasses[size])}/>);
    const _renderSkeleton = () => (<div className={cn('bg-current rounded animate-pulse', sizeClasses[size])}/>);
    const _renderContent = () => {
=======
import { cn } from '@/lib/utils';
export function Loading({ size = 'md', variant = 'spinner', className, text }) {
    const sizeClasses = {
  sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
  xl: 'w-12 h-12'
    

};
    const renderSkeleton = () => (<div className = {
  cn('bg-current rounded animate-pulse',
  sizeClasses[size])

}/>);
    const renderContent = () => {
>>>>>>> origin/clean-error-fixing-automation
        switch (variant) {
            case 'dots':
                return renderDots();
            case 'pulse':
                return renderPulse();
            case 'skeleton':
                return renderSkeleton();
            default:
<<<<<<< HEAD
                return renderSpinner();
        }
    };
    return (<div className={cn('flex flex-col items-center justify-center gap-3', className)}>
      {renderContent()}
      {text && (<p className="text-sm text-zion-slate-light animate-pulse">{text}</p>)}
    </div>);
}
// Skeleton loading for content
export function Skeleton({ className, ...props }) {
    return (<div className={cn('animate-pulse rounded-md bg-zion-slate-light/20', className)} {...props}/>);
}
=======
                return renderSpinner()}
    };
    return (<div className = {
  cn('flex flex-col items-center justify-center gap-3',
  className)

}>
      {renderContent()}
      {text && (<p className="text-sm text-zion-slate-light animate-pulse">{text}</p>)}
    </div>)}
// Skeleton loading for content
export function Skeleton({ className, ...props }) {
    return (<div className = {
  cn('animate-pulse rounded-md bg-zion-slate-light/20',
  className)

} {...props}/>)}
>>>>>>> origin/clean-error-fixing-automation
// Page loading component
export function PageLoading() {
    return (<div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <Loading size="xl" variant="spinner" className="text-zion-cyan"/>
        <h2 className="text-xl font-semibold text-zion-slate-light">Loading Zion Tech Group</h2>
        <p className="text-zion-slate-light">Preparing your experience...</p>
      </div>
<<<<<<< HEAD
    </div>);
}
// Content skeleton loading
export function ContentSkeleton() {
    return (<div className="space-y-4 animate-pulse">
      <div className="h-8 bg-zion-slate-light/20 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-zion-slate-light/20 rounded"></div>
        <div className="h-4 bg-zion-slate-light/20 rounded w-5/6"></div>
        <div className="h-4 bg-zion-slate-light/20 rounded w-4/6"></div>
      </div>
    </div>);
}
// Card skeleton loading
=======
    </div>)}
// Content skeleton loading
>>>>>>> origin/clean-error-fixing-automation
export function CardSkeleton() {
    return (<div className="bg-card border border-border rounded-lg p-6 space-y-4 animate-pulse">
      <div className="h-6 bg-zion-slate-light/20 rounded w-1/2"></div>
      <div className="space-y-2">
        <div className="h-4 bg-zion-slate-light/20 rounded"></div>
        <div className="h-4 bg-zion-slate-light/20 rounded w-3/4"></div>
      </div>
      <div className="h-10 bg-zion-slate-light/20 rounded w-1/3"></div>
<<<<<<< HEAD
    </div>);
}
=======
    </div>)}
>>>>>>> origin/clean-error-fixing-automation
