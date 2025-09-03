
  ;
  xl:,

        <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full opacity-20`}></div>
        {/* Animated spinner */}`
        <motion.div``
          className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-t-transparent ${colorClasses[color]} rounded-full`}
          animate={{ rotate: 360 }}
          transition: = {
  {

            <div className='w-8 h-8 bg-cyan-400 rounded-full animate-pulse'></div>

          </div>
        )}
      </div>
      {/* Loading: text */}, {showText && text && (
        <motion.div

    </div>
  )}

// Optimized: spinner for inline use,
  export const InlineSpinner: React.FC<{ size?:;

  <div className={`inline-flex items-center ${className}`} role='status' aria-label='Loading'>
    <motion.div'`;
      className={`${size ===;

  'sm' ?;
  'w-4 h-4': 'w-6 h-6} border-2 border-t-transparent border-cyan-400 rounded-full`}
      animate={{ rotate: 360 }}
      transition = {
  {
        duration: 1,`
        repeat: Infinity,;
  ease: 'linear'}}
    />'
    <span className='sr-only'>Loading</span>
  </div>
)
// Full-screen loading overlay
export const FullScreenLoader: React.FC<{
  text?: string;
  showLogo?: boolean;
  className?: string}> = ({'
  '  text = 'Loading amazing experiences...;
  ',

  <div className={`fixed inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center z-50 ${className}`}>'
    <div className='relative text-center'>
      {showLogo && ('
        <div className='mb-6'>'
          <div className='w-24 h-24 border-4 border-cyan-400/20 rounded-full mx-auto mb-4'></div>'
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin'></div>'

          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-xl'>
            ZION
          </div>
        </div>
      )}
      ''
      <LoadingSpinner size='lg' color='cyan' text={text}  />    </div>
  </div>
)
// Skeleton loading component
export const SkeletonLoader: React.FC<{
  className?: string;

  ',
  lines = 3}) => (``

  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: lines }).map(_: unknown, index: unknown(
      <div`
        key={index}`;`
        className={`h-4 bg-gray-300 rounded mb-2 ${

          index === lines - 1 ?,
  w-3/4;`
  ': 'w-full`}`}      />));
  </div>


