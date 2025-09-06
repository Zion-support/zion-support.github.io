        "is_desktop":width >= 1024})},
;
    update_dimensions (),
    window.addEventListener (
  'resize', update_dimensions),
    return () => window.removeEventListener (
  'resize', update_dimensions)}, []),
  return state},
export default use_responsive,import { useState, useEffect } from 'react';
;
interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}
const default_breakpoints: Breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}
export default use_responsive;
    update_dimensions ();
    window.addEventListener (
  'resize', update_dimensions);
    return () => window.removeEventListener (
  'resize', update_dimensions)}, []);
  return state}
export default use_responsive,
,
import { useState, useEffect } from 'react'; interface ResponsiveState { screen_width: number; screen_height: number; orientation: "landscape" | "portrait"; is_mobile: boolean; is_tablet: boolean; is_desktop: boolean} const use_responsive = (): ResponsiveState => { const [state, set_state] = useState < ResponsiveState>({ screen_width: 1920, screen_height: 1080, orientation: "landscape", is_mobile: false, is_tablet: false, is_desktop: true, }); useEffect (() => { const update_dimensions = () =>: any { const width = window.inner_width; const height = window.inner_height; set_state ({ screen_width: width, screen_height: height, orientation: width > height ? "landscape" : "portrait", is_mobile: width < 768, is_tablet: width >= 768 && width < 1024, is_desktop: width >= 1024, })} update_dimensions (); window.addEventListener ( 'resize', update_dimensions); return () => window.removeEventListener ( 'resize', update_dimensions)}, []); return state} export default use_responsive;
;