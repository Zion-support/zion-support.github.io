interface OptimizedLoadingSpinnerProps {
const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(
  ({
    size = 'md',
    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
    fullScreen = false,
  }) => {
    const sizeClasses = useMemo(
      () => ({
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
      }),
      []
    )}
    const textSizeClasses = useMemo(
      () => ({
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      }),
      []
    )}
    const colorClasses = useMemo(
      () => ({
        blue: 'border-blue-600 bg-blue-600',
        gray: 'border-gray-600 bg-gray-600',
        green: 'border-green-600 bg-green-600',
        red: 'border-red-600 bg-red-600',
        purple: 'border-purple-600 bg-purple-600',
      }),
      []
    )}
    const renderSpinner = useMemo(() => {switch (variant) {
        case 'dots':
          return (
            <div className='flex space-x-1' role='status' aria-label='Loading'>
              {[0, 1, 2].map(i => (</div>
                <div
        case 'pulse':
          return (
            <div
        case 'skeleton':
          return (</div>
            <div className='space-y-2' role='status' aria-label='Loading'></div>
              <div
        case 'bars':
          return (
            <div className='flex space-x-1' role='status' aria-label='Loading'>
              {[0, 1, 2, 3].map(i => (</div>
                <div
        case 'spinner':
        default:
          return (
            <div
    const containerClasses = useMemo(() => {return `${baseClasses} ${fullScreenClasses} ${className}`}
    }, [fullScreen, className])}
    return (</div>
      <div className={containerClasses}></div>
        <div className='text-center'>
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner'}
export default OptimizedLoadingSpinner}
  </OptimizedLoadingSpinnerProps>
