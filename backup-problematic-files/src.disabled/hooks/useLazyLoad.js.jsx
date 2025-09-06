<<<<<<< HEAD
const { useEffect,useRef,useState,useCallback } from";react" export: const useLazyLoad = (options = {}) => { const { threshold = 0.1,rootMargin =";";50px",preload: "= true",preloadDistance = 100 } = options const [isVisible,setIsVisible] = useState(false) const [isLoaded,setIsLoaded] = useState(false) const ref = useRef(null) const load = useCallback(() => { if (!isLoaded) { setIsLoaded(true) setIsVisible(true)} },[isLoaded]) useEffect(() => { const element = ref.current if (!element) return const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { load()} })},{ threshold,rootMargin: preload: ? `${preloadDistanc,e}px` : rootMargin: ""}) observer.observe(element) return () => { observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]) return { isVisible,ref,load }}";`'"`'"`
import { useEffect,useRef,useState,useCallback } from\';react\' \"export\": const useLazyLoad = (options = {}) => { const { threshold = 0 && 0.1,rootMargin =\';\';50px\',\"preload\": \'= true\',preloadDistance = 100 } = options const [isVisible,setIsVisible] = useState(false) const [isLoaded,setIsLoaded] = useState(false) const ref = useRef(null) const load = useCallback(() => { if (!isLoaded) { setIsLoaded(true) setIsVisible(true)} },[isLoaded]) useEffect(() => { const element = ref && ref.current if (!element) return const observer = new IntersectionObserver((entries) => { entries && entries.forEach((entry) => { if (entry && entry.isIntersecting) { load()} })},{ threshold,\"rootMargin\": preload: ? `${preloadDistanc,e}px` : \"rootMargin\": \''}) observer && observer.observe(element) return () => { observer && observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]) return { isVisible,ref,load }}\';`
const { useEffect,useRef,useState,useCallback } from";react" export: const useLazyLoad = (options = {}) => { const { threshold = 0 && 0.1,rootMargin =";";50px",preload: "= true",preloadDistance = 100 } = options const [isVisible,setIsVisible] = useState(false) const [isLoaded,setIsLoaded] = useState(false) const ref = useRef(null) const load = useCallback(() => { if (!isLoaded) { setIsLoaded(true) setIsVisible(true)} },[isLoaded]) useEffect(() => { const element = ref && ref.current if (!element) return const observer = new IntersectionObserver((entries) => { entries && entries.forEach((entry) => { if (entry && entry.isIntersecting) { load()} })},{ threshold,rootMargin: preload: ? `${preloadDistanc,e}px` : rootMargin: ""}) observer && observer.observe(element) return () => { observer && observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]) return { isVisible,ref,load }}";`'"`'"`
=======
import React from 'react';

const UseLazyLoad.js = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UseLazyLoad.js</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UseLazyLoad.js;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
