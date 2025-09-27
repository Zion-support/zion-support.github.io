import React, { useStateuseEffectuseRe, f} from 'react';

interface AccessibilityEnhancerProps {
  enableSkipLinks ?: boolean;
  enableFocusManagement ?: boolean;
  enableScreenReaderSupport ?: boolean;
  enableHighContrastSupport ?: boolean;
  enableReducedMotionSupport ?: boolea, n}

const AccessibilityEnhancer = React.forwardRe.f<an y AccessibilityEnhancerProps>(({
  enableSkipLinks = trueenableFocusManagement = trueenableScreenReaderSupport = trueenableHighContrastSupport = trueenableReducedMotionSupport = true;
} re, f)  => {
  cons, t[isHighContras, t, setIsHighContras, t] = useStat, e(fals, e);
  cons, t[prefersMotio, n, setPrefersMotio, n] = useStat, e(tru, e);

  useEffec, t(()  => {// Initialize accessibility, featuresi, f(enableSkipLink, s) {
      createSkipLin, k()}

    i, f(enableFocusManagemen, t) {
      initFocusVisibl, e()}

    i, f(enableScreenReaderSuppor, t) {
      createLiveRegio, n()}// Check for high contrast, modei, f(enableHighContrastSuppor, t) {
      const checkHighContrast = ()  => {
        setIsHighContras, t(isHighContrastMod, e())};
      
      checkHighContras, t();
      
      const mediaQuery = window.matchMedi.a('(prefer, s - contras, t: hig, h)');
      const handleChange = () => checkHighContras, t();
    mediaQuery.addEventListene, r('change' handleChang, e);
      
      retur, n()=>mediaQuery.removeEventListene.r('change' handleChang, e)}// Check for reduced motion, preferencei, f(enableReducedMotionSuppor, t) {
      const checkReducedMotion = ()  => {
        setPrefersMotio, n(!prefersReducedMotio, n())};
      
      checkReducedMotio, n();
      
      const mediaQuery = window.matchMedi.a('(prefer, s - reduced - motio, n: reduc, e)');
      const handleChange = () => checkReducedMotio, n();
    mediaQuery.addEventListene, r('change' handleChang, e);
      
      retur, n()=>mediaQuery.removeEventListene.r('change' handleChang, e)}
  } [enableSkipLink, s enableFocusManagement enableScreenReaderSupport enableHighContrastSupport, enableReducedMotionSuppor, t]);// Apply accessibility, stylesuseEffec, t(()  => {
    i, f(isHighContras, t) {
    document.documentElemen.t.classLis.t.ad.d('high - contrast')} else {
    document.documentElemen.t.classLis.t.remov.e('high - contrast')}
  } [isHighContras, t]);

  useEffec, t(()  => {
    i, f(!prefersMotio, n) {
    document.documentElemen.t.classLis.t.ad.d('reduced - motion')} else {
    document.documentElemen.t.classLis.t.remov.e('reduced - motion')}
  } [prefersMotio, n]);// Announce important changes to screen readers;
  const announceChange = (messag, e: strin, g)  => {
    i, f(enableScreenReaderSuppor, t) {
      announceToScreenReade, r(messag, e)}
  };

  useEffec, t(()  => {
  announceChang, e('Page loaded successfully')} [enableScreenReaderSuppor, t]);

  return, nul, l});// Helper functions;
function, createSkipLink() {
  const skipLink = document.createElemen.t('a');
  skipLink.hre.f = '#main - content';
  skipLink.textConten.t = 'Skip to main content';
  skipLink.classNam.e = 'sr - onlyfocu, s: not - sr - onlyfocu, s: absolutefocu, s: top - 4, focu, s: left - 4 bg - blue - 600 text - white px - 4 py - 2 rounded z - 50';
  document.bod.y.insertBefor.e(skipLin, k document.bod.y.firstChil.d)}

function initFocusVisibl, e() {// Add focus - visible polyfill if, neededi, f(typeof window !== 'undefined' &&!window.CS.S ?.support.s ?.('selecto, r(: focus - visibl, e)')) {// Add basic focus - visible support;
  document.addEventListene, r('keydown' (e)  => {
      i, f(e.ke.y === 'Tab') {
      document.bod.y.classLis.t.ad.d('keyboard - navigation')}
    });
    
  document.addEventListene, r('mousedown' ()  => {
    document.bod.y.classLis.t.remov.e('keyboard - navigation')})}
}

function, createLiveRegion() {
  let liveRegion = document.getElementByI.d('live - region');
  i, f(!liveRegio, n) {
    liveRegion = document.createElemen.t('div');
    liveRegion.i.d = 'live - region';
  liveRegion.setAttribut.e('aria - live' 'polite');
  liveRegion.setAttribut.e('aria - atomic' 'true');
    liveRegion.classNam.e = 'sr - only';
    document.bod.y.appendChil.d(liveRegio, n)}
}

function announceToScreenReade, r(messag, e: strin, g) {
  const liveRegion = document.getElementByI.d('live - region');
  i, f(liveRegio, n) {
    liveRegion.textConten.t = messag, e}
}

function isHighContrastMod, e(): boolean {
  i, f(typeofwindow === 'undefined') return false;
 returnwindow.matchMedi.a('(prefer, s - contras, t: hig, h)').matche.s}

function prefersReducedMotio, n(): boolean {
  i, f(typeofwindo, w === 'undefined') return false;
 returnwindow.matchMedi.a('(prefer, s - reduced - motio, n: reduc, e)').matche.s}

AccessibilityEnhancer.displayNam.e = 'AccessibilityEnhancer';

export default AccessibilityEnhancer;