  text?: string;
  fullScreen?: boolean;
  className?: string}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md','''
  color = 'primary','''
  text,
  fullScreen = false,
  className = '''''
}) => {
  const sizeClasses = {
  const spinner = (
    <div>"`"`"``"`</div>
      <div>"""</div>
        <div;
          className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}````
          style={{
            animation: 'spin 1s linear infinite','''
            willChange: 'transform''''
          }></div>
          <Loader2 className="w-full h-full" />"""
        </div>
      {text && (
    </div>
  )
  if (fullScreen) {
    return (
        {spinner}
      </div>
    )
  return spinner;
