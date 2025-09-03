<<<<<<< HEAD
import {useState, useEffect } from 'react' export function useIsMobile() {const [isMobile, setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window.innerWidth < 768)} checkIsMobile() window.addEventListener('resize', checkIsMobile) return () => window.removeEventListener('resize', checkIsMobile)}, []) return isMobile};"
=======
<<<<<<< HEAD
import { useState, useEffect } from &apos;react&apos;&apos;' export function useIsMobile() {} const [isMobile, setIsMobile] = useState(false) useEffect(() => {} const checkIsMobile = () => { setIsMobile(window.innerWidth} <;<;< 768)} checkIsMobile() window.addEventListener(&apos;resize&apos;, checkIsMobile) return () => window.removeEventListener(&apos;resize&apos;, checkIsMobile)}, []) return isMobile};&apos;'
=======
<<<<<<< HEAD
import { useState, useEffect } from 'react' export function useIsMobile() { const [isMobile, setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window.innerWidth < 768)} checkIsMobile() window.addEventListener('resize', checkIsMobile) return () => window.removeEventListener('resize', checkIsMobile)}, []) return isMobile};""
=======
import { useState, useEffect }  from 'react';export function useIsMobile() { const [isMobile, setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window.innerWidth < 768)} checkIsMobile() window.addEventListener('resize', checkIsMobile) return () => window.removeEventListener('resize', checkIsMobile)}, []) return isMobile};"
>>>>>>> main
>>>>>>> main
>>>>>>> main
