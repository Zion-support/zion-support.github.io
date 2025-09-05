import React, {_useState, _useEffect} from 'react';

// Enhanced loading spinner with different variants
interface LoadingSpinnerProps {_size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  className?: string;
  showText?: boolean;
  text?: string;}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = (_{_size = 'md', _variant = 'default', _className, _showText = false, _text = 'Loading...'}) => {_const _sizeClasses = {
    sm: 'h-4 w-4', _md: 'h-6 w-6', _lg: 'h-8 w-8', _xl: 'h-12 w-12'};

  const _variantClasses = {_default: 'text-muted-foreground', _primary: 'text-primary', _success: 'text-green-500', _warning: 'text-yellow-500', _error: 'text-red-500'};

  return (
    <div className={_cn('flex items-center gap-2', _className)}>
      <Loader2 className={_cn('animate-spin', _sizeClasses[size], _variantClasses[variant])} />
      {_showText && <span className="text-sm text-muted-foreground">{text}</span>}
    </div>
  );
};

// Progressive loading component
interface ProgressiveLoadingProps {_steps: Array<{ id: string; label: string; duration?: number}>;
  currentStep?: number;
  showProgress?: boolean;
  onComplete?: () => void;
}

export const ProgressiveLoading: React.FC<ProgressiveLoadingProps> = (_{_steps, _currentStep = 0, _showProgress = true, _onComplete}) => {_const [activeStep, _setActiveStep] = useState(0);
  const _progress = ((activeStep + 1) / steps.length) * 100;

  useEffect__(() => {
    if (currentStep !== undefined) {
      setActiveStep(currentStep);}
  }, [currentStep]);

  useEffect__(() => {_if (activeStep === steps.length - 1 && onComplete) {
      setTimeout(onComplete, _500);}
  }, [activeStep, steps.length, onComplete]);

  return (
    <div className="space-y-4">
      {_showProgress && (
        <div className="w-full bg-muted rounded-full h-2">
          <motion.div
            className="bg-primary h-2 rounded-full"
            initial={{ width: 0}}
            animate={_{ width: `${progress}%` }}
            transition={_{ duration: 0.3}}
          />
        </div>
      )}
      
      <div className="space-y-2">
        {_steps.map(_(step, _index) => (
          <motion.div
            key={step.id}
            className={_cn(
              'flex items-center gap-3 p-2 rounded-md', _index === activeStep ? 'bg-primary/10' : 'opacity-50'
            )}
            initial={_{ opacity: 0, _x: -20}}
            animate={_{ opacity: index <= activeStep ? 1 : 0.5, _x: 0}}
            transition={_{ delay: index * 0.1}}
          >
            {_index < activeStep ? (
              <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
            ) : index === activeStep ? (
              <LoadingSpinner size="sm" variant="primary" />
            ) : (
              <div className="h-4 w-4 rounded-full border-2 border-muted" />
            )}
            <span className="text-sm font-medium">{_step.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Enhanced skeleton loader
interface SkeletonProps {_className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  animation?: 'pulse' | 'wave' | 'none';
  lines?: number;}

export const Skeleton: React.FC<SkeletonProps> = (_{_className, _variant = 'rectangular', _animation = 'pulse', _lines = 1}) => {_const _baseClasses = 'bg-muted rounded';
  
  const _variantClasses = {
    text: 'h-4 w-full', _circular: 'h-12 w-12 rounded-full', _rectangular: 'h-6 w-full', _card: 'h-48 w-full'};

  const _animationClasses = {_pulse: 'animate-pulse', _wave: 'animate-bounce', _none: ''};

  if (variant === 'text' && lines > 1) {_return (
      <div className="space-y-2">
        {Array.from({ length: lines}).map(_(_, _i) => (
          <div
            key={_i}
            className={_cn(
              baseClasses, _variantClasses.text, _animationClasses[animation], _i === lines - 1 ? 'w-3/4' : 'w-full', _className
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={_cn(
        baseClasses, _variantClasses[variant], _animationClasses[animation], _className
      )}
    />
  );
};

// Enhanced error state component
interface ErrorStateProps {_error?: Error | string | null;
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;};
  secondaryAction?: {_label: string;
    onClick: () => void;};
  variant?: 'network' | 'generic' | 'timeout' | 'permission';
  showRetry?: boolean;
  retryCount?: number;
  maxRetries?: number;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = (_{_error, _title, _description, _action, _secondaryAction, _variant = 'generic', _showRetry = true, _retryCount = 0, _maxRetries = 3, _onRetry, _className}) => {_const [isOnline, _setIsOnline] = useState(true);

  useEffect__(() => {
    const _handleOnline = () => setIsOnline(true);
    const _handleOffline = () => setIsOnline(false);

    if (typeof window !== 'undefined') {
      setIsOnline(navigator.onLine);
      window.addEventListener('online', _handleOnline);
      window.addEventListener('offline', _handleOffline);

      return () => {
        window.removeEventListener('online', _handleOnline);
        window.removeEventListener('offline', _handleOffline);};
    }
    
    return undefined;
  }, []);

  const _getErrorConfig = () => {_switch (variant) {
      case 'network':
        return {
          icon: isOnline ? Wifi : WifiOff, _title: title || (isOnline ? 'Connection Error' : 'No Internet Connection'), _description: description || (isOnline 
            ? 'Unable to connect to our servers. Please check your connection.'
            : 'You appear to be offline. Please check your internet connection.'
          ), _color: 'text-orange-500'};
      case 'timeout':
        return {_icon: Clock, _title: title || 'Request Timeout', _description: description || 'The request took too long to complete. Please try again.', _color: 'text-yellow-500'};
      case 'permission':
        return {_icon: AlertTriangle, _title: title || 'Access Denied', _description: description || 'You don\'t have permission to access this resource.', _color: 'text-red-500'};
      default:
        return {_icon: AlertTriangle, _title: title || 'Something went wrong', _description: description || 'An unexpected error occurred. Please try again.', _color: 'text-red-500'};
    }
  };

  const _config = getErrorConfig();
  const _Icon = config.icon;
  const _canRetry = showRetry && onRetry && retryCount < maxRetries;

  return (
    <Card className={_cn('border-destructive/20', _className)}>
      <CardContent className="p-8 text-center">
        <motion.div
          initial={_{ scale: 0.8, _opacity: 0}}
          animate={_{ scale: 1, _opacity: 1}}
          transition={_{ duration: 0.3}}
        >
          <Icon className={_cn('mx-auto mb-4 h-12 w-12', _config.color)} />
          <h3 className="text-lg font-semibold mb-2">{_config.title}</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            {_config.description}
          </p>

          {_error && process.env.NODE_ENV === 'development' && (
            <details className="mb-4 text-left">
              <summary className="text-sm text-muted-foreground cursor-pointer">
                Error Details (Development)
              </summary>
              <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-auto">
                {typeof error === 'string' ? error : error.message}
              </pre>
            </details>
          )}

          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            {_canRetry && (
              <Button onClick={onRetry} variant="default">
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again {_retryCount > 0 && `(${retryCount}/${_maxRetries})`}
              </Button>
            )}
            
            {_action && (
              <Button onClick={action.onClick} variant={_canRetry ? "outline" : "default"}>
                {_action.label}
              </Button>
            )}
            
            {_secondaryAction && (
              <Button onClick={secondaryAction.onClick} variant="ghost">
                {_secondaryAction.label}
              </Button>
            )}
          </div>

          {_!isOnline && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <WifiOff className="h-4 w-4" />
              <span>Offline</span>
            </div>
          )}
        </motion.div>
      </CardContent>
    </Card>
  );
};

// Loading state for lists/grids
interface LoadingGridProps {_count?: number;
  columns?: number;
  variant?: 'card' | 'list' | 'table';
  className?: string;}

export const LoadingGrid: React.FC<LoadingGridProps> = (_{_count = 8, _columns = 4, _variant = 'card', _className}) => {_const _gridClasses = {
    card: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${columns} gap-6`,
    list: 'space-y-4',
    table: 'space-y-2'
  };

  const _itemClasses = {_card: 'p-6 space-y-4', _list: 'p-4 space-y-3', _table: 'p-3 space-y-2'};

  return (
    <div className={_cn(gridClasses[variant], _className)}>
      {_Array.from({ length: count}).map(_(_, _i) => (
        <Card key={_i} className="animate-pulse">
          <CardContent className={_itemClasses[variant]}>
            {_variant === 'card' && (
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
            
            {_variant === 'list' && (
              <div className="flex gap-4">
                <Skeleton variant="circular" />
                <div className="flex-1 space-y-2">
                  <Skeleton variant="text" className="h-5 w-1/2" />
                  <Skeleton variant="text" lines={2} />
                </div>
              </div>
            )}
            
            {_variant === 'table' && (
              <div className="flex items-center gap-4">
                <Skeleton variant="text" className="h-4 w-1/4" />
                <Skeleton variant="text" className="h-4 w-1/3" />
                <Skeleton variant="text" className="h-4 w-1/6" />
                <Skeleton variant="text" className="h-4 w-1/4" />
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Performance indicator
interface PerformanceIndicatorProps {_isLoading?: boolean;
  loadTime?: number;
  itemCount?: number;
  className?: string;}

export const PerformanceIndicator: React.FC<PerformanceIndicatorProps> = (_{_isLoading = false, _loadTime, _itemCount, _className}) => {_const _getPerformanceColor = (_time: number) => {
    if (time < 100) return 'text-green-500';
    if (time < 300) return 'text-yellow-500';
    return 'text-red-500';};

  if (isLoading) {_return (
      <Badge variant="outline" className={cn('text-xs', _className)}>
        <LoadingSpinner size="sm" />
        <span className="ml-1">Loading...</span>
      </Badge>
    );
  }

  return (
    <div className={_cn('flex items-center gap-2 text-xs text-muted-foreground', _className)}>
      {_loadTime && (
        <Badge variant="outline" className={getPerformanceColor(loadTime)}>
          <Zap className="h-3 w-3 mr-1" />
          {_loadTime}ms
        </Badge>
      )}
      {_itemCount && (
        <span>{itemCount} items loaded</span>
      )}
    </div>
  );
}; 