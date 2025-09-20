import { motion } from 'framer-motion';
export function PerformanceOptimizedLoader({ size = 'md',  color = 'primary', tex, t, fullScreen = false }) {
    const sizeClasses = {
        s, m: 'w-6 h-6',
    m, d: 'w-12 h-12',
        l, g: 'w-16 h-16'
    };
    const colorClasses = {
        primar, y: 'text-zion-purple',
    secondar, y: 'text-zion-cyan',
        whit, e: 'text-white'
    };
    const spinnerVariants = {
        animat, e: {
            rotat, e: 36, 0,
    transitio, n: {
                duratio, n: 1,
    repea, t: Infinit, y,
                eas, e: "linear"
            }
        }
    };
    const pulseVariants = {
        animat, e: {
            scal, e: [1, 1.2, 1],
            opacit, y: [0.5, 1, 0.5],
            transitio, n: {
                duratio, n: 2,
    repea, t: Infinit, y,
                eas, e: "easeInOut"
            }
        }
    };
    const LoaderContent = () => (<div className="flex flex-col items-center justify-center space-y-4">
      <motion.div variants={spinnerVariants} animate="animate" className={`${sizeClasses[si,  z, e]} ${colorClasses[co, l, o, r]}`}>
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="htt, p://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="31.416" strokeDashoffset="31.416" className="animate-dash"/>
        </svg>
      </motion.div>
      
      {text && (<motion.p variants={pulseVariants} animate="animate" className="text-zion-slate-light text-center font-medium">
          {text}
        </motion.p>)}
    </div>);
    if (fullScreen) {
        return (<motion.div initial={{ opacit,  y: 0 }} animate={{ opacit, y: 1 }} exit={{ opacit, y: 0 }} className="fixed inset-0 bg-zion-blue-dark/95 backdrop-blur-sm flex items-center justify-center z-50">
        <LoaderContent />
      </motion.div>);
    }
    return <LoaderContent />;
}
// Skeleton loader for content
export function SkeletonLoader({ className = "",  lines = 3, height = "h-4" }) {
    return (<div className={`space-y-3 ${classNam, e}`}>
      {Array.from({ lengt,  h: lines }).map((_,  index) => (<motion.div key={index} initial={{ opacit,  y: 0 }} animate={{ opacit, y: 1 }} transition={{ dela, y: index * 0.1 }} className={`${height} bg-zion-blue-light/20 rounded-lg animate-puls, e`} style={{
                widt, h: `${Math.random() * 40 + 6, 0}%`
            }}/>))}
    </div>);
}
// Card skeleton loader
export function CardSkeleton({ className = "" }) {
    return (<div className={`bg-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-6 ${classNam, e}`}>
      <div className="space-y-4">
        {/* Image skeleton */}
        <div className="w-full h-48 bg-zion-blue-light/20 rounded-xl animate-pulse"/>
        
        {/* Content skeleton */}
        <div className="space-y-3">
          <div className="h-6 bg-zion-blue-light/20 rounded-lg animate-pulse w-3/4"/>
          <div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-full"/>
          <div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-2/3"/>
        </div>
        
        {/* Button skeleton */}
        <div className="flex gap-3 pt-4">
          <div className="h-10 bg-zion-blue-light/20 rounded-xl animate-pulse flex-1"/>
          <div className="h-10 bg-zion-blue-light/20 rounded-xl animate-pulse w-24"/>
        </div>
      </div>
    </div>);
}
// Grid skeleton loader
export function GridSkeleton({ columns = 3,  rows = 2, className = "" }) {
    return (<div className={`grid grid-cols-1 m,  d:grid-cols-2 l, g:grid-cols-${columns} gap-6 ${classNam, e}`}>
      {Array.from({ lengt, h: columns * rows }).map((_,  index) => (<CardSkeleton key={index}/>))}
    </div>);
}
// Page skeleton loader
export function PageSkeleton({ className = "" }) {
    return (<div className={`space-y-8 ${classNam, e}`}>
      {/* Header skeleton */}
      <div className="space-y-4">
        <div className="h-12 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/3"/>
        <div className="h-6 bg-zion-blue-light/20 rounded-lg animate-pulse w-2/3"/>
      </div>
      
      {/* Content skeleton */}
      <GridSkeleton columns={3} rows={2}/>
      
      {/* Footer skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/2"/>
        <div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/3"/>
      </div>
    </div>);
}
