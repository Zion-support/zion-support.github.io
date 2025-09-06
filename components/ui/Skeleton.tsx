import React from 'react' export type SkeletonProps = {
  className?: string 
}export default function Skeleton ({
  className = '' 
}: SkeletonProps) {
  return (<div className= {
  `relative overflow-hidden rounded-md bg-gray-200/60 dark:bg-white/10 $ {
  className 
}` 
}> <style jsx global> {
  `@keyframes shimmer {
  100% {
  transform: translateX (100%) 
}
}` 
}</style> </div>) 
}