/>) 
}
export const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({
  className = '' 
}) => {
  return (<div className= {
  `p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl $ {
  className 
}` 
}> <div className="flex items-center space-x-4 mb-6" > <Skeleton className="w-16 h-16 rounded-2xl" /> <div className="flex-1" > <Skeleton className="h-6 w-3/4 mb-2" /> <Skeleton className="h-4 w-1/2" /> </div> </div> <Skeleton className="h-4 w-full mb-2" /> <Skeleton className="h-4 w-5/6 mb-2" /> <Skeleton className="h-4 w-4/6" /> </div>) 
}
export const HeroSkeleton: React.FC<HeroSkeletonProps> = ({
  className = '' 
}) => {
  return (<div className= {
  `min-h-screen flex items-center justify-center px-6 py-20 $ {
  className 
}` 
}> </div> </div> </div>) 
}
export const StatsSkeleton: React.FC<StatsSkeletonProps> = ({
  className = '' 
}) => {
  return (<div className= {
  `py-20 px-6 $ {
  className 
}` 
}> </div>) ) 
}</div> </div> </div>) 
}
export default Skeleton