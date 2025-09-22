<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const { useEffect,useRef,useState,useCallback } from "react"; export const useLazyLoad = (options = {}) => {; const { threshold = 0.1,rootMargin = "50px",preload = true,preloadDistance = 100 } = options; const [isVisible,setIsVisible] = useState(false); const [isLoaded,setIsLoaded] = useState(false); const ref = useRef(null); const load = useCallback(() => {; if(!isLoaded) {; setIsLoaded(true); setIsVisible(true)}},[isLoaded]); useEffect(() => {; const element = ref.current; if(!element); return; const observer = new IntersectionObserver((entries) => {; entries.forEach((entry) => {; if(entry.isIntersecting) {; load()}})},{; threshold,; rootMargin: preload ? `${preloadDistance}px` : rootMargin}); observer.observe(element); return () => {; observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]); return { isVisible,ref,load }};'"`'"`
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useEffect,useRef,useState,useCallback } from \'react\'; export const useLazyLoad = (options = {}) => {; const { threshold = 0 && 0.1,rootMargin = \'50px\',preload = true,preloadDistance = 100 } = options; const [isVisible,setIsVisible] = useState(false); const [isLoaded,setIsLoaded] = useState(false); const ref = useRef(null); const load = useCallback(() => {; if(!isLoaded) {; setIsLoaded(true); setIsVisible(true)}},[isLoaded]); useEffect(() => {; const element = ref && ref.current; if(!element); return; const observer = new IntersectionObserver((entries) => {; entries && entries.forEach((entry) => {; if(entry && entry.isIntersecting) {; load()}})},{; threshold,; \"rootMargin\": preload ? `${preloadDistance}px` : rootMargin}); observer && observer.observe(element); return () => {; observer && observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]); return { isVisible,ref,load }};
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
const { useEffect,useRef,useState,useCallback } from "react"; export const useLazyLoad = (options = {}) => {; const { threshold = 0.1,rootMargin = "50px",preload = true,preloadDistance = 100 } = options; const [isVisible,setIsVisible] = useState(false); const [isLoaded,setIsLoaded] = useState(false); const ref = useRef(null); const load = useCallback(() => {; if(!isLoaded) {; setIsLoaded(true); setIsVisible(true)}},[isLoaded]); useEffect(() => {; const element = ref.current; if(!element); return; const observer = new IntersectionObserver((entries) => {; entries.forEach((entry) => {; if(entry.isIntersecting) {; load()}})},{; threshold,; rootMargin: preload ? `${preloadDistance}px` : rootMargin}); observer.observe(element); return () => {; observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]); return { isVisible,ref,load }};'"`'"`=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

const { useEffect,useRef,useState,useCallback } from "react"; export const useLazyLoad = (options = {}) => {; const { threshold = 0.1,rootMargin = "50px",preload = true,preloadDistance = 100 } = options; const [isVisible,setIsVisible] = useState(false); const [isLoaded,setIsLoaded] = useState(false); const ref = useRef(null); const load = useCallback(() => {; if(!isLoaded) {; setIsLoaded(true); setIsVisible(true)}},[isLoaded]); useEffect(() => {; const element = ref.current; if(!element); return; const observer = new IntersectionObserver((entries) => {; entries.forEach((entry) => {; if(entry.isIntersecting) {; load()}})},{; threshold,; rootMargin: preload ? `${preloadDistance}px` : rootMargin}); observer.observe(element); return () => {; observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]); return { isVisible,ref,load }};'"`'"`
'"`
import { useEffect,useRef,useState,useCallback } from \'react\'; export const useLazyLoad = (options = {}) => {; const { threshold = 0.1,rootMargin = \'50px\',preload = true,preloadDistance = 100 } = options; const [isVisible,setIsVisible] = useState(false); const [isLoaded,setIsLoaded] = useState(false); const ref = useRef(null); const load = useCallback(() => {; if(!isLoaded) {; setIsLoaded(true); setIsVisible(true)}},[isLoaded]); useEffect(() => {; const element = ref.current; if(!element); return; const observer = new IntersectionObserver((entries) => {; entries.forEach((entry) => {; if(entry.isIntersecting) {; load()}})},{; threshold,; \"rootMargin\": preload ? `${preloadDistance}px` : rootMargin}); observer.observe(element); return () => {; observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]); return { isVisible,ref,load }};'"`
const { useEffect,useRef,useState,useCallback } from "react"; export const useLazyLoad = (options = {}) => {; const { threshold = 0.1,rootMargin = "50px",preload = true,preloadDistance = 100 } = options; const [isVisible,setIsVisible] = useState(false); const [isLoaded,setIsLoaded] = useState(false); const ref = useRef(null); const load = useCallback(() => {; if(!isLoaded) {; setIsLoaded(true); setIsVisible(true)}},[isLoaded]); useEffect(() => {; const element = ref.current; if(!element); return; const observer = new IntersectionObserver((entries) => {; entries.forEach((entry) => {; if(entry.isIntersecting) {; load()}})},{; threshold,; rootMargin: preload ? `${preloadDistance}px` : rootMargin}); observer.observe(element); return () => {; observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]); return { isVisible,ref,load }};'"`'"`

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
const { useEffect,useRef,useState,useCallback } from "react"; export const useLazyLoad = (options = {}) => {; const { threshold = 0.1,rootMargin = "50px",preload = true,preloadDistance = 100 } = options; const [isVisible,setIsVisible] = useState(false); const [isLoaded,setIsLoaded] = useState(false); const ref = useRef(null); const load = useCallback(() => {; if(!isLoaded) {; setIsLoaded(true); setIsVisible(true)}},[isLoaded]); useEffect(() => {; const element = ref.current; if(!element); return; const observer = new IntersectionObserver((entries) => {; entries.forEach((entry) => {; if(entry.isIntersecting) {; load()}})},{; threshold,; rootMargin: preload ? `${preloadDistance}px` : rootMargin}); observer.observe(element); return () => {; observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]); return { isVisible,ref,load }};'"`'"`
import { useEffect,useRef,useState,useCallback } from \'react\'; export const useLazyLoad = (options = {}) => {; const { threshold = 0.1,rootMargin = \'50px\',preload = true,preloadDistance = 100 } = options; const [isVisible,setIsVisible] = useState(false); const [isLoaded,setIsLoaded] = useState(false); const ref = useRef(null); const load = useCallback(() => {; if(!isLoaded) {; setIsLoaded(true); setIsVisible(true)}},[isLoaded]); useEffect(() => {; const element = ref.current; if(!element); return; const observer = new IntersectionObserver((entries) => {; entries.forEach((entry) => {; if(entry.isIntersecting) {; load()}})},{; threshold,; \"rootMargin\": preload ? `${preloadDistance}px` : rootMargin}); observer.observe(element); return () => {; observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]); return { isVisible,ref,load }};
const { useEffect,useRef,useState,useCallback } from "react"; export const useLazyLoad = (options = {}) => {; const { threshold = 0.1,rootMargin = "50px",preload = true,preloadDistance = 100 } = options; const [isVisible,setIsVisible] = useState(false); const [isLoaded,setIsLoaded] = useState(false); const ref = useRef(null); const load = useCallback(() => {; if(!isLoaded) {; setIsLoaded(true); setIsVisible(true)}},[isLoaded]); useEffect(() => {; const element = ref.current; if(!element); return; const observer = new IntersectionObserver((entries) => {; entries.forEach((entry) => {; if(entry.isIntersecting) {; load()}})},{; threshold,; rootMargin: preload ? `${preloadDistance}px` : rootMargin}); observer.observe(element); return () => {; observer.unobserve(element)}},[threshold,rootMargin,preload,preloadDistance,load]); return { isVisible,ref,load }};'"`'"`
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
