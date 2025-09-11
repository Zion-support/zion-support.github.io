<<<<<<< HEAD

<<<<<<< HEAD
:hooks/useResponsive.ts
        "isDesktop":width >= 1024})}
    updateDimensions();
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
:hooks/useResponsive.ts
        "isDesktop":width >= 1024})}
    updateDimensions();
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        "isDesktop":width >= 1024})},;
;
    updateDimensions(),;
:backup-problematic-files/hooks/useResponsive.ts
    window.addEventListener(;
  'resize', updateDimensions);
    return () => window.removeEventListener(;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
:hooks/useResponsive.ts
  'resize', updateDimensions)}, []),;
  return state},;
export default useResponsive,;import { useState, useEffect } from 'react';
:backup-problematic-files/hooks/useResponsive.ts
import { useState, useEffect } from 'react';
:backup-problematic-files/hooks/useResponsive.ts
<<<<<<< HEAD
=======

  'resize', updateDimensions)}, []),;
  return state},;
export default useResponsive,;import { useState, useEffect } from 'react';

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  'resize', updateDimensions)}, []);
  return state}
export default useResponsive;import { useState, useEffect } from 'react';
interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}
const defaultBreakpoints: Breakpoints = {
  sm: 640
  md: 768
  lg: 1024
  xl: 1280
  '2xl': 1536
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    updateDimensions(),
    window.addEventListener(
  'resize', updateDimensions),
    return () => window.removeEventListener(
  'resize', updateDimensions)}, []),
  return state},
export default useResponsive,
<<<<<<< HEAD
:hooks/useResponsive.ts
,;
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
        "isDesktop": width >= 1024})},;
    updateDimensions(),;
    window.addEventListener(;
  'resize', updateDimensions),;
    return () => window.removeEventListener(;
  'resize', updateDimensions)}, []),;
  return state},;
export default useResponsive;
ursor/integrate-build-improve-and-re-verify-8f7d
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} } const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: '1920',screenHeight: '1080',orientation: "landscape",isMobile: 'false',isTablet: 'false',isDesktop: 'true',}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: 'width',screenHeight: 'height',orientation: width > height ? "landscape" : "portrait",isMobile: 'width < 768',isTablet: 'width >= 768 && width < 1024',isDesktop: 'width >= 1024',})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
ursor/add-new-services-and-deploy-updates-0462
;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======

=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    updateDimensions();
    window.addEventListener(,
  'resize', updateDimensions);
    return () => window.removeEventListener(;
  'resize', updateDimensions)}, []);
<<<<<<< HEAD
  return state};
export default useResponsive,
:hooks/useResponsive.ts
export default useResponsive;
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} } const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: '1920',screenHeight: '1080',orientation: "landscape",isMobile: 'false',isTablet: 'false',isDesktop: 'true',}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: 'width',screenHeight: 'height',orientation: width > height ? "landscape" : "portrait",isMobile: 'width < 768',isTablet: 'width >= 768 && width < 1024',isDesktop: 'width >= 1024',})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
origin/automation-improvements-final
:backup-problematic-files/hooks/useResponsive.ts
,
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
,
ursor/fix-lint-push-and-merge-to-main-ae4e
:hooks/useResponsive.ts
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
ursor/add-new-services-and-deploy-updates-0462
;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
=======

export default useResponsive;



>>>>>>> origin/automation-improvements-final
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return state}
export default useResponsive
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;

<<<<<<< HEAD
origin/main
:backup-problematic-files/hooks/useResponsive.ts
main:hooks/useResponsive.ts
:backup-problematic-files/hooks/useResponsive.ts
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/hooks/useResponsive.ts
=======
>>>>>>> main:hooks/useResponsive.ts
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/hooks/useResponsive.ts
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
