<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React,{ useState,useEffect } from \'react\'; interface LoadingOptimizedProps { \"children\": \'React.ReactNode; fallback?: React.ReactNode; delay?: number;\' } } export default function LoadingOptimized({ children,fallback,delay = 0 }: LoadingOptimizedProps) { const [isLoading,setIsLoading] = useState(true); useEffect(() => { const timer = setTimeout(() => { setIsLoading(false)},delay); return () => clearTimeout(timer)},[delay]); if (isLoading) { return <>{fallback}</> } return <>{children}</> }
const React,{ useState,useEffect } from "react"; interface LoadingOptimizedProps { children: "React.ReactNode; fallback?: React.ReactNode; delay?: number;" } } export default function LoadingOptimized({ children,fallback,delay = 0 }: LoadingOptimizedProps) { const [isLoading,setIsLoading] = useState(true); useEffect(() => { const timer = setTimeout(() => { setIsLoading(false)},delay); return () => clearTimeout(timer)},[delay]); if (isLoading) { return <>{fallback}</> } return <>{children}</> }'"'"
import _React,{ useState,useEffect } from 'react'; interface LoadingOptimizedProps { "children": '_React.ReactNode; fallback?: _React.ReactNode; delay?: number;' } } export default function LoadingOptimized({ children,fallback,delay = 0 }: LoadingOptimizedProps) { const [isLoading,setIsLoading] = useState(true); useEffect(() => { const timer = setTimeout(() => { setIsLoading(false)},delay); return () => clearTimeout(timer)},[delay]); if (isLoading) { return <>{fallback}</> } return <>{children}</> }
=======
>>>>>>> main
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
