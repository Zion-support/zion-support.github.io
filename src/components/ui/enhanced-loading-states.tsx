
  text?: string;
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({;
  size = 'md',;
  variant = 'default',;
  className,;
  showText = false,;
  text = 'Loading...',;
}) => {  const sizeClasses = {;
    sm: 'h-4 w-4',;
    md: 'h-6 w-6',;
    lg: 'h-8 w-8',;
    xl: 'h-12 w-12',
};

  const variantClasses = {;
    default: 'text-muted-foreground',;
    primary: 'text-primary',;
    success: 'text-green-500',;
    warning: 'text-yellow-500',;
    error: 'text-red-500',
};

import React, { useState, useEffect } from 'react',;
import { motion, AnimatePresence } from 'framer-motion',;
import { Loader2, AlertTriangle, RefreshCw, Wifi, WifiOff, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Card, CardContent } from '@/components/ui/card',;
import { Badge } from '@/components/ui/badge',;
import { cn } from '@/lib/utils',;
// Enhanced loading spinner with different variants;
interface LoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg' | 'xl',;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error',;
  className?: string,;
  showText?: boolean,;
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  className,
  showText = false,

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const variantClasses = {
    default: 'text-muted-foreground',
    primary: 'text-primary',
    success: 'text-green-500',
    warning: 'text-yellow-500',

    error: 'text-red-500'
  },

  return (

    <div className={cn ('flex items - center gap - 2', class_name)}>;
      <Loader2;
        className={cn (
          'animate - spin',
          size_classes[size],
          variant_classes[variant])}
      />;
      {show_text && (
        <span className='text - sm text - muted - foreground'>{text}</span>)}
    </div>);

}) => {
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const [activeStep, setActiveStep] = useState(0)
  const progress = ((activeStep + 1) / steps.length) * 100
  useEffect((,) => {
    if (currentStep !== undefined) {
      setActiveStep(currentStep)
    }
  }, [currentStep])
  useEffect((,) => {
    if (activeStep === steps.length - 1 && onComplete) {
      setTimeout(onComplete, 500)
    }

},
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5

// Progressive loading component
interface ProgressiveLoadingProps {
  steps: Array<{ id: string, label: string, duration?: number }>,
  currentStep?: number,
  showProgress?: boolean,
  onComplete?: () => void
}
;
export const ProgressiveLoading: React.FC<ProgressiveLoadingProps> = ({;
  steps,;
  currentStep = 0,;
  showProgress = true,;
  onComplete;
}) => {;
  const [activeStep, setActiveStep] = useState(0),;
  const progress = ((activeStep + 1) / steps.length) * 100,;
  useEffect(() => {;
    if (currentStep !== undefined) {;
      setActiveStep(currentStep);
    }
  }, [currentStep]),;
  useEffect(() => {;
    if (activeStep === steps.length - 1 && onComplete) {;
      setTimeout(onComplete, 500);
    }
  }, [activeStep, steps.length, onComplete]),

  return (
    <div className="space-y-4">
      {showProgress && (
        <div className="w-full bg-muted rounded-full h-2">
          <motion.div
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5

      </div>;
    </div>;
  );

              className
            ),}
          />
        ))}

            <details className="mb-4 text-left">
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <summary className="text-sm text-muted-foreground cursor-pointer">
                Error Details (Development)
              </summary>

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            {action && (;

              <Button
                onClick={action.onClick}
                variant={canRetry ? 'outline' : 'default'}
              >
            
            {action && (
              <Button onClick={action.onClick} variant={canRetry ? "outline" : "default"}>
                {action.label}
              </Button>
            )}

            {action && (
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <Button
                onClick={action.onClick}
                variant={canRetry ? 'outline' : 'default'}
              >
            
            {action && (
              <Button onClick={action.onClick} variant={canRetry ? "outline" : "default"}>

                {action.label}
              </Button>
            )}

            {secondaryAction && (
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <Button onClick={secondaryAction.onClick} variant='ghost'>
            
            {secondaryAction && (
              <Button onClick={secondaryAction.onClick} variant="ghost">

                {secondaryAction.label}
              </Button>
            )}
          </div>
          {!isOnline && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <WifiOff className="h-4 w-4" />
              <span>Offline</span>
            </div>
          )}

            {secondaryAction && (;
              <Button onClick={secondaryAction && secondaryAction.onClick} variant='ghost'>;
                {secondaryAction && secondaryAction.label}
              </Button>;
            )}
          </div>;

          {!isOnline && (;
            <div className='mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground'>;
              <WifiOff className='h-4 w-4' />;
              <span>Offline</span>;
            </div>;
          )}
        </motion && motion.div>;

  scale: 0.8, opacity: 0 

        </motion.div>;

      </CardContent>;
    </Card>;
  )
};
<motion&& motion.div initial= {
  {
  scale: 0 && 0.8, opacity: 0 

            {variant === 'list' && (;
              <div className='flex gap-4'>;
                <Skeleton variant='circular' />;
                <div className='flex-1 space-y-2'>;
                  <Skeleton variant='text' className='h-5 w-1/2' />;
                  <Skeleton variant='text' lines={2} />;
                </div>;
              </div>;
            )}

            {variant === 'table' && (;
              <div className='flex items-center gap-4'>;
                <Skeleton variant='text' className='h-4 w-1/4' />;
                <Skeleton variant='text' className='h-4 w-1/3' />;
                <Skeleton variant='text' className='h-4 w-1/6' />;
                <Skeleton variant='text' className='h-4 w-1/4' />;
              </div>;

            )}
          </CardContent>;
        </Card>;
      ))}

              </pre>;
            </details>)}
          <div className='flex flex - col sm:flex - row gap - 2 justify - center'>;
            {can_retry && (
              <Button on_click={on_retry} variant='default'>;
                <RefreshCw className='h - 4 w - 4 mr - 2' />;
                Try Again {retry_count > 0 && `(${retry_count}/${max_retries})`}
              </Button>)}
            {action && (
              <Button;
                on_click={action.on_click}
                variant={can_retry ? 'outline' : 'default'}
              >;
                {action.label}
              </Button>)}
            {secondary_action && (
              <Button on_click={secondary_action.on_click} variant='ghost'>;
                {secondary_action.label}
              </Button>)}
          </div>;
          {!is_online && (
            <div className='mt - 4 flex items - center justify - center gap - 2 text - sm text - muted - foreground'>;
              <WifiOff className='h - 4 w - 4' />;
              <span > Offline</span>;
            </div>)}
        </motion.div>;
      </CardContent>;
    </Card>);
}

export const LoadingGrid: React.FC<LoadingGridProps> = ({
  count = 8,
  columns = 4,
  variant = 'card',

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export const LoadingGrid: React.FC<LoadingGridProps> = ({
  count = 8,
  columns = 4,
  variant = 'card',

            {variant === 'card' && (
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <>
                <Skeleton variant="rectangular" className="h-32" />
                <div className="space-y-2">
                  <Skeleton variant="text" className="h-6 w-3/4" />
                  <Skeleton variant="text" lines={2} />
                  <div className="flex gap-2">
                    <Skeleton variant="text" className="h-4 w-16" />
                    <Skeleton variant="text" className="h-4 w-20" />
                  </div>
                </div>
              </>
            )}

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            {variant === 'list' && (
              <div className="flex gap-4">
                <Skeleton variant="circular" />
                <div className="flex-1 space-y-2">
                  <Skeleton variant="text" className="h-5 w-1/2" />
                  <Skeleton variant="text" lines={2} />
                </div>
              </div>
            )}

            {variant === 'table' && (
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <div className="flex items-center gap-4">
                <Skeleton variant="text" className="h-4 w-1/4" />
                <Skeleton variant="text" className="h-4 w-1/3" />
                <Skeleton variant="text" className="h-4 w-1/6" />
                <Skeleton variant="text" className="h-4 w-1/4" />
              </div>
            )}

          </CardContent>;
        </Card>;
      ))}
    </div>;
  );
},;
// Performance indicator;
interface PerformanceIndicatorProps {;
  isLoading?: boolean,;
  loadTime?: number,;
  itemCount?: number,;
  className?: string;
}

export const PerformanceIndicator: React.FC<PerformanceIndicatorProps> = ({
  isLoading = false,
  loadTime,
  itemCount,

  if (isLoading) {
    return (
      <Badge variant="outline" className={cn('text-xs', className)}>
        <LoadingSpinner size="sm" />
        <span className="ml-1">Loading...</span>
      </Badge>
    )
  }
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5

      {loadTime && (
        <Badge variant="outline" className={getPerformanceColor(loadTime)}>
          <Zap className="h-3 w-3 mr-1" />
          {loadTime}ms
        </Badge>
      )}

}
}
}

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
