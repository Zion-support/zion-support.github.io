<<<<<<< HEAD
=======
import React from 'react';

const useLazyLoad: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">useLazyLoad</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default useLazyLoad;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
import _React from "react"; import { useEffect,useRef,useState,useCallback } from "react" export const useLazyLoad = (options = {}) => { const { threshold = 0.1,rootMargin = "50px",preload = true,preloadDistance = 100 } = options const [isVisible,setIsVisible] = useState(false) const [isLoaded,setIsLoaded] = useState(false) const ref = useRef(null) const load = useCallback(() => { if (!isLoaded) { setIsLoaded(true) setIsVisible(true)} },[isLoaded]) useEffect(() => { const element = ref.current if (!element) return const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { load()} })},{ threshold,"rootMargin": preload ? "${preloadDistanc,e}px" rootMargin }) observer.observe(element) return () => { observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]) return { isVisible,ref,load }}";';"; "; ); export default Component;
import React from \"react\"; import { useEffect,useRef,useState,useCallback } from \"react\" export const useLazyLoad = (options = {}) => { const { threshold = 0.1,rootMargin = \"50px\",preload = true,preloadDistance = 100 } = options const [isVisible,setIsVisible] = useState(false) const [isLoaded,setIsLoaded] = useState(false) const ref = useRef(null) const load = useCallback(() => { if (!isLoaded) { setIsLoaded(true) setIsVisible(true)} },[isLoaded]) useEffect(() => { const element = ref.current if (!element) return const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { load()} })},{ threshold,\"rootMargin\": preload ? \"${preloadDistanc,e}px\" rootMargin }) observer.observe(element) return () => { observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]) return { isVisible,ref,load }}\";\';\"; \"; ); export default Component;
const React from "react"; import { useEffect,useRef,useState,useCallback } from "react" export const useLazyLoad = (options = {}) => { const { threshold = 0.1,rootMargin = "50px",preload = true,preloadDistance = 100 } = options const [isVisible,setIsVisible] = useState(false) const [isLoaded,setIsLoaded] = useState(false) const ref = useRef(null) const load = useCallback(() => { if (!isLoaded) { setIsLoaded(true) setIsVisible(true)} },[isLoaded]) useEffect(() => { const element = ref.current if (!element) return const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { load()} })},{ threshold,rootMargin: preload ? "${preloadDistanc,e}px" rootMargin }) observer.observe(element) return () => { observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]) return { isVisible,ref,load }}";";"; "; ); export default Component;"""
import _React from "react"; import { useEffect,useRef,useState,useCallback } from "react" export const useLazyLoad = (options = {}) => { const { threshold = 0.1,rootMargin = "50px",preload = true,preloadDistance = 100 } = options const [isVisible,setIsVisible] = useState(false) const [isLoaded,setIsLoaded] = useState(false) const ref = useRef(null) const load = useCallback(() => { if (!isLoaded) { setIsLoaded(true) setIsVisible(true)} },[isLoaded]) useEffect(() => { const element = ref.current if (!element) return const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { load()} })},{ threshold,"rootMargin": preload ? "${preloadDistanc,e}px" rootMargin }) observer.observe(element) return () => { observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]) return { isVisible,ref,load }}";';"; "; ); export default Component;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
=======
=======
=======
=======
>>>>>>> origin/backup-main-20250918-004015
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
