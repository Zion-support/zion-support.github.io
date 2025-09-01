import React from 'react';
import { cn } from '@/lib/utils';
export function Loading({ size = 'md', variant = 'spinner', className, text }) {

    const sizeClasses = {

  sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
  xl: 'w-12 h-12'
    






};
    const renderContent = () => {

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

=======
                return renderSpinner()}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    };
    return (<div className = {

  cn('flex flex-col items-center justify-center gap-3',
  className)






}>
      {renderContent()}
      {text && (<p className="text-sm text-zion-slate-light animate-pulse">{text}</p>)}
<<<<<<< HEAD
    </div>);

// Skeleton loading for content
export function Skeleton({ className, ...props }) {

    return (<div className={cn('animate-pulse rounded-md bg-zion-slate-light/20', className)} {...props}/>);

=======
    </div>)}
// Skeleton loading for content
export function Skeleton({ className, ...props }) {

<<<<<<< HEAD
    return (<div className = {

  cn('animate-pulse rounded-md bg-zion-slate-light/20',
  className)

} {...props}/>)}
=======
    return (<div className = {

  cn('animate-pulse rounded-md bg-zion-slate-light/20',
  className)






} {...props}/>);
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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

// Card skeleton loading
=======
    </div>)}
// Content skeleton loading
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
</div></div></div></div></div></div></div>}}}}}}
=======
    </div>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
