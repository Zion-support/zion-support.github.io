<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
<<<<<<< HEAD:hooks/useResponsive.ts
<<<<<<< HEAD
        "isDesktop":width >= 1024})}
    updateDimensions();
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
:hooks/useResponsive.ts
        "isDesktop":width >= 1024})}
    updateDimensions();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        "isDesktop":width >= 1024})},;
;
    updateDimensions(),;
:backup-problematic-files/hooks/useResponsive.ts
    window.addEventListener(;
  'resize', updateDimensions);
    return () => window.removeEventListener(;
<<<<<<< HEAD
<<<<<<< HEAD

  'resize', updateDimensions)}, []),;
  return state},;
export default useResponsive,;import { useState, useEffect } from 'react';

=======
<<<<<<< HEAD:hooks/useResponsive.ts
=======
=======
:hooks/useResponsive.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  'resize', updateDimensions)}, []),;
  return state},;
export default useResponsive,;import { useState, useEffect } from 'react';
:backup-problematic-files/hooks/useResponsive.ts
import { useState, useEffect } from 'react';
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/hooks/useResponsive.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
:backup-problematic-files/hooks/useResponsive.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

    updateDimensions(),
    window.addEventListener(
  'resize', updateDimensions),
    return () => window.removeEventListener(
  'resize', updateDimensions)}, []),
  return state},
export default useResponsive,
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD:hooks/useResponsive.ts
=======
:hooks/useResponsive.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

    updateDimensions();
    window.addEventListener(,
  'resize', updateDimensions);
    return () => window.removeEventListener(;
  'resize', updateDimensions)}, []);
<<<<<<< HEAD
<<<<<<< HEAD

export default useResponsive;



=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> origin/automation-improvements-final
=======
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return state}
export default useResponsive
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;

<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/hooks/useResponsive.ts
=======
>>>>>>> main:hooks/useResponsive.ts
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/hooks/useResponsive.ts
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
origin/main
:backup-problematic-files/hooks/useResponsive.ts
main:hooks/useResponsive.ts
:backup-problematic-files/hooks/useResponsive.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
