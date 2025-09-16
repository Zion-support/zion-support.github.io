<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
>>>>>>> origin/merged-prs
import _React from "react"; import { useEffect,useRef,useState,useCallback } from "react" export const useLazyLoad = (options = {}) => { const { threshold = 0.1,rootMargin = "50px",preload = true,preloadDistance = 100 } = options const [isVisible,setIsVisible] = useState(false) const [isLoaded,setIsLoaded] = useState(false) const ref = useRef(null) const load = useCallback(() => { if (!isLoaded) { setIsLoaded(true) setIsVisible(true)} },[isLoaded]) useEffect(() => { const element = ref.current if (!element) return const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { load()} })},{ threshold,"rootMargin": preload ? "${preloadDistanc,e}px" rootMargin }) observer.observe(element) return () => { observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]) return { isVisible,ref,load }}";';"; "; ); export default Component;
import React from \"react\"; import { useEffect,useRef,useState,useCallback } from \"react\" export const useLazyLoad = (options = {}) => { const { threshold = 0.1,rootMargin = \"50px\",preload = true,preloadDistance = 100 } = options const [isVisible,setIsVisible] = useState(false) const [isLoaded,setIsLoaded] = useState(false) const ref = useRef(null) const load = useCallback(() => { if (!isLoaded) { setIsLoaded(true) setIsVisible(true)} },[isLoaded]) useEffect(() => { const element = ref.current if (!element) return const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { load()} })},{ threshold,\"rootMargin\": preload ? \"${preloadDistanc,e}px\" rootMargin }) observer.observe(element) return () => { observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]) return { isVisible,ref,load }}\";\';\"; \"; ); export default Component;
const React from "react"; import { useEffect,useRef,useState,useCallback } from "react" export const useLazyLoad = (options = {}) => { const { threshold = 0.1,rootMargin = "50px",preload = true,preloadDistance = 100 } = options const [isVisible,setIsVisible] = useState(false) const [isLoaded,setIsLoaded] = useState(false) const ref = useRef(null) const load = useCallback(() => { if (!isLoaded) { setIsLoaded(true) setIsVisible(true)} },[isLoaded]) useEffect(() => { const element = ref.current if (!element) return const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { load()} })},{ threshold,rootMargin: preload ? "${preloadDistanc,e}px" rootMargin }) observer.observe(element) return () => { observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]) return { isVisible,ref,load }}";";"; "; ); export default Component;"""
import _React from "react"; import { useEffect,useRef,useState,useCallback } from "react" export const useLazyLoad = (options = {}) => { const { threshold = 0.1,rootMargin = "50px",preload = true,preloadDistance = 100 } = options const [isVisible,setIsVisible] = useState(false) const [isLoaded,setIsLoaded] = useState(false) const ref = useRef(null) const load = useCallback(() => { if (!isLoaded) { setIsLoaded(true) setIsVisible(true)} },[isLoaded]) useEffect(() => { const element = ref.current if (!element) return const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { load()} })},{ threshold,"rootMargin": preload ? "${preloadDistanc,e}px" rootMargin }) observer.observe(element) return () => { observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]) return { isVisible,ref,load }}";';"; "; ); export default Component;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
>>>>>>> origin/merged-prs
