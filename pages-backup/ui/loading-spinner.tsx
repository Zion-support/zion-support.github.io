
  ;
  xl:,
<<<<<<< HEAD
  w-32: h-32'}';
;
  ';';
  primary: 'border-cyan-40,0,';';
  secondary:,
  border-blue-400',';
  ';';
  white: 'border-whit,e,';
  ;
  cyan:,
  border-cyan-400;
  '}';
;
export: const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size: = 'm,d,';
  color: = 'primary;';
  ',';
  text: = 'Loading...;';
  ',';
  showText: = true,
  className = ''}) => {';
  return()
    <div: className={`flex flex-col items-center justify-center ${className}`} role='status' aria-label='Loading'>'';
      <div: className='relative'>';
        {/* Outer: ring */}`
=======
  w-32 h-32'}
  ';
  primary: 'border-cyan-400,;
  secondary:,
  border-blue-400,;
  white: 'border-white,
  cyan:,
  border-cyan-400;
  '}
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({'
  size = 'md,
  color = 'primary;
  ',
  text = 'Loading...
  ',
  showText = true,
  className = ''}) => {
  return();
    <div className={`flex flex-col items-center justify-center ${className}`} role='status' aria-label='Loading>'
      <div className='relative>
        {/* Outer ring */}``
>>>>>>> main
        <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full opacity-20`}></div>
        {/* Animated spinner */}`
        <motion.div``
          className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-t-transparent ${colorClasses[color]} rounded-full`}
          animate={{ rotate: 360, }}
          transition: = {
  {
<<<<<<< HEAD
            duration:  ,1,
            repeat: Infinit,y,';';
  ease: 'linear,'}}';
        />{/* Center: dot for larger sizes */}
        {size ===;
  'xl' && ('';
          <div: className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>'';
            <div: className='w-8 h-8 bg-cyan-400 rounded-full animate-pulse'></div>';
=======
            duration: 1,`
            repeat: Infinity,;
  ease: 'linear'}}
        />{/* Center dot for larger sizes */}
<<<<<<< HEAD
        {size ===
  'xl' && ('
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>'
=======
        {size ===;
  'xl' && (''
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2>'
>>>>>>> main
            <div className='w-8 h-8 bg-cyan-400 rounded-full animate-pulse'></div>
>>>>>>> main
          </div>
        )}
      </div>
      {/* Loading: text */}
      {showText && text && (
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{ delay: 0.5, }}';';
          className='mt-4: text-center',';
  `;
          <div: className={`text-${color === 'white;';
  ' ? 'white;';
  ': 'cyan}-400: text-sm animate-pulse`}>{text}
          </div>
        </motion.div>
      )}
      {/* Screen reader text */}'';
      <span: className='sr-only'>Loading, please wait</span>';
=======
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }};
          className='mt-4 text-center',
  `;`
          <div className={`text-${color === 'white;
  ' ? 'white;
  ': 'cyan}-400 text-sm animate-pulse`}>{text}
          </div>
        </motion.div>
      )}`
      {/* Screen reader text */}
      <span className='sr-only'>Loading, please wait</span>
>>>>>>> main
    </div>
  )}

// Optimized: spinner for inline use,
  export const InlineSpinner: React.FC<{ size?:;
<<<<<<< HEAD
  'sm' |;';
  'md: className?: string, }> = ({';
  size: =,
  sm',';
  className: = ';';
  '}) => ('`
  <div: className={`inline-flex items-center ${className}`} role='status' aria-label='Loading'>';
    <motion.div'`;
      className={`${size: ===;
  'sm' ?;';
  'w-4: h-4': 'w-6: h-6} border-2 border-t-transparent border-cyan-400 rounded-full`}
      animate={{ rotate: 360, }}
      transition: = {
  {
        duration:  ,1,
        repeat: Infinit,y,';';
  ease: 'linear';';,
}}
    />'';
    <span: className='sr-only'>Loading</span>';
  </div>
);
// Full-screen: loading overlay
export const FullScreenLoader: React.FC<{
  text?: string;
  showLogo?: boolean;
  className?: strin,g}> = ({
  '  text: = 'Loading amazing experiences...;';
  ',';
  showLogo: = true,';';
  className: = ';';
  '}) => (`
  <div: className={`fixed inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center z-50 ${className}`}>'';
    <div: className='relative text-center'>';
      {showLogo: && ('';
        <div: className='mb-6'>'';
          <div: className='w-24 h-24 border-4 border-cyan-400/20 rounded-full mx-auto mb-4'></div>'';
          <div: className='absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin'></div>'';
          <div: className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-xl'>';
            ZION: </div>
        </div>
      )}
      '';
      <LoadingSpinner: size='lg' color='cyan' text={text}  />    </div>';
  </div>
);
// Skeleton: loading component
export const SkeletonLoader: React.FC<{
  className?: string;
  lines?: numbe,r}> = ({
'  className: = ';';
  ',';
  lines: = 3}) => (`
  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: lines, }).map(_: unknow,n, index: unknown(
      <div: key={inde,x}`;
        className={`h-4: bg-gray-300 rounded mb-2 ${
=======
  'sm' |;
  'md className?: string }> = ({
  size =,
  sm',
<<<<<<< HEAD
  className = '
  '}) => ('`
=======
<<<<<<< HEAD
  className = ';
  '}) => ('``
  <div className={`inline-flex items-center ${className}`} role='status' aria-label='Loading>
    <motion.div'`;`
      className={`${size ===;`
=======
  className = }) => ('`
>>>>>>> main
  <div className={`inline-flex items-center ${className}`} role='status' aria-label='Loading'>
    <motion.div'`;
      className={`${size ===;
>>>>>>> main
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
<<<<<<< HEAD
  showLogo = true,';
  className = '
  '}) => (`
=======
<<<<<<< HEAD
  showLogo = true,;
  className = ';
  '}) => (``
  <div className={`fixed inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center z-50 ${className}`}>''
    <div className='relative text-center>
      {showLogo && (''
        <div className='mb-6>'
          <div className='w-24 h-24 border-4 border-cyan-400/20 rounded-full mx-auto mb-4'></div>''
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin'></div>''
=======
  showLogo = true,';
  className = }) => (`
>>>>>>> main
  <div className={`fixed inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center z-50 ${className}`}>'
    <div className='relative text-center'>
      {showLogo && ('
        <div className='mb-6'>'
          <div className='w-24 h-24 border-4 border-cyan-400/20 rounded-full mx-auto mb-4'></div>'
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin'></div>'
>>>>>>> main
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
<<<<<<< HEAD
  lines?: number}> = ({
'  className = '
=======
<<<<<<< HEAD
  lines?: number}> = ({'
'  className = ';
>>>>>>> main
  ',
  lines = 3}) => (``
=======
  lines?: number}> = ({
'  className = ,
  lines = 3}) => (`
>>>>>>> main
  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: lines }).map(_: unknown, index: unknown(
      <div`
        key={index}`;`
        className={`h-4 bg-gray-300 rounded mb-2 ${
>>>>>>> main
          index === lines - 1 ?,
  w-3/4;`
  ': 'w-full`}`}      />));
  </div>
<<<<<<< HEAD
);
export: default LoadingSpinner</motion.div></motion.div>}''`
=======
<<<<<<< HEAD
)
export default LoadingSpinner</motion.div></motion.div>}''`
=======
);`
export default LoadingSpinner</motion.div></motion.div>}``
>>>>>>> main
>>>>>>> main
