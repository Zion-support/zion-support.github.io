import React from 'react';
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
        switch (variant) {
            case 'dots':
                return renderDots();
            case 'pulse':
                return renderPulse();
            case 'skeleton':
                return renderSkeleton();
            default:
                return renderSpinner()}
    };
    return (<div className = {
  cn('flex flex-col items-center justify-center gap-3',
  className)

}>
      {renderContent()}
      {text && (<p className="text-sm text-zion-slate-light animate-pulse">{text}</p>)}
    </div>)}
// Skeleton loading for content;
export function Skeleton({ className, ...props }) {
    return (<div className = {
  cn('animate-pulse rounded-md bg-zion-slate-light/20',
  className)

} {...props}/>)}
// Page loading component;
export function PageLoading() {
    return (<div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <Loading size="xl" variant="spinner" className="text-zion-cyan"/>
        <h2 className="text-xl font-semibold text-zion-slate-light">Loading Zion Tech Group</h2>
        <p className="text-zion-slate-light">Preparing your experience...</p>
      </div>
    </div>)}
// Content skeleton loading;
export function CardSkeleton() {
    return (<div className="bg-card border border-border rounded-lg p-6 space-y-4 animate-pulse">
      <div className="h-6 bg-zion-slate-light/20 rounded w-1/2"></div>
      <div className="space-y-2">
        <div className="h-4 bg-zion-slate-light/20 rounded"></div>
        <div className="h-4 bg-zion-slate-light/20 rounded w-3/4"></div>
      </div>
      <div className="h-10 bg-zion-slate-light/20 rounded w-1/3"></div>
    </div>)}
