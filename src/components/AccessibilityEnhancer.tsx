>>>>>> 45ce5fae8a680d713f034d877aa81b1d405b5, 7, 6, 3
interf, a, c, e AccessibilityEnhancerPr, o, p, s {enableSkipLi, n, k, s?: bool, e, a, n;
  enableFocusManagem, e, n, t?: bool, e, a, n;
  enableScreenReaderSupp, o, r, t?: bool, e, a, n;
  enableHighContrastSupp, o, r, t?: bool, e, a, n;
  enableReducedMotionSupp, o, r, t?: bool, e, a, n}

(({enableSkipLi, n, k, s = t, r, u, e,
  enableFocusManagem, e, n, t = t, r, u, e,
  enableScreenReaderSupp, o, r, t = t, r, u, e,
  enableHighContrastSupp, o, r, t = t, r, u, e,
  enableReducedMotionSupp, o, r, t = t, r, u, e
}, re, f) => {const [isHighContr, a, s, t, setIsHighContr, a, s, t] = useState(fa, l, s, e);
  const [prefersMotionsetPrefersMot, i, o, n] = useState(t, r, u, e);


const AccessibilityEnhan, c, e, r = React.forward, R, e, f<anyAccessibilityEnhancerPr, o, p, s>(({enableSkipLi, n, k, s = trueenableFocusManagem, e, n, t = trueenableScreenReaderSupp, o, r, t = trueenableHighContrastSupp, o, r, t = trueenableReducedMotionSupp, o, r, t = t, r, u, e
}re, f) => {
  const [isHighContrastsetIsHighContr, a, s, t] = useState(fa, l, s, e);
  const [prefersMotionsetPrefersMot, i, o, n] = useState(t, r, u, e);

  useEffect(() => {
    // Initializeaccessibility feature, s, i, f (enableSkipLi, n, k, s) {
      createSkipLink()}

    i, f (enableFocusManagem, e, n, t) {initFocusVisi, b, l, e()}

    i, f (enableScreenReaderSupp, o, r, t) {createLiveReg, i, o, n()}

    // Ch, e, c, k fo, r h, i, g, h contr, a, s, t m, o, d, e
    i, f (enableHighContrastSupp, o, r, t) {constcheckHighContr, a, s, t = () => {
        setIsHighContr, a, s, t(isHighContrastM, o, d, e())};
      
      checkHighContr, a, s, t();
      
      return () => mediaQu, e, r, y.removeEventListe, n, e, r("cha, n, g, e"handleCha, n, g, e)}
  }[enableFocusManagementenableHighContrastSupp, o, r, t]);
    // Ch, e, c, k fo, r redu, c, e, d mot, i, o, n prefere, n, c, e
    i, f (enableReducedMotionSupp, o, r, t) {constcheckReducedMot, i, o, n = () => {
        setPrefersMot, i, o, n(!prefersReducedMot, i, o, n())};
      
      checkReducedMot, i, o, n();
      
      return () => mediaQu, e, r, y.removeEventListe, n, e, r('cha, n, g, e"handleCha, n, g, e)}
  }[enableSkipLinksenableFocusManagementenableScreenReaderSupportenableHighContrastSupportenableReducedMotionSupp, o, r, t]);

  useEffect(() => {// Ad, d, s, k, i, p link, s, i, f (enableSkipLi, n, k, s) {
      constmainCont, e, n, t = document.getElementB, y, I, d("m, a, i, n-cont, e, n, t');
      i, f (mainCont, e, n, t) {
        const, skipLink = createSkipLink('m, a, i, n-cont, e, n, t'"Skiptomaincont, e, n, t");
        document.b, o, d, y.insertBef, o, r, e(skipLinkdocument.b, o, d, y.firstCh, i, l, d)}
    }
  }[enableSkipLi, n, k, s]);
  // Ap, p, l, y accessibility sty, l, e, s
 {// Cre, a, t, e, l, i, v, e region, f, o, r announcement, s, i, f (enableScreenReaderSupp, o, r, t) {

  useEffect(() => {// Cre, a, t, e, l, i, v, e reg, i, o, n, fo, r announcement, s, i, f (enableScreenReaderSupp, o, r, t) {

      createLiveReg, i, o, n()}
  }[enableScreenReaderSupp, o, r, t]);

  useEffect(() => {// Applyh, i, g, h contraststy, l, e, s
    i, f (isHighContr, a, s, t) {
      document.documentElem, e, n, t.classL, i, s, t.ad, d("h, i, g, h-contr, a, s, t')} e, l, s, e {document.documentElem, e, n, t.classL, i, s, t.rem, o, v, e('h, i, g, h-contr, a, s, t')}
  }[isHighContr, a, s, t]);

  useEffect(() => {// Applyredu, c, e, d motionsty, l, e, s
    i, f (prefersRedu, c, e, d) {
      document.documentElem, e, n, t.classL, i, s, t.ad, d('redu, c, e, d-mot, i, o, n')} e, l, s, e {document.documentElem, e, n, t.classL, i, s, t.rem, o, v, e('redu, c, e, d-mot, i, o, n')}
  }[prefersRedu, c, e, d]);
  // Annou, n, c, e import, a, n, t chan, g, e, s t, o scr, e, e, n read, e, r, s
  const announceCha, n, g, e = (mess, a, g, e: str, i, n, g) => {i, f (enableScreenReaderSupp, o, r, t) {
      announceToScreenRea, d, e, r('Pageloadedsuccessfu, l, l, y')}
  }, [enableScreenReaderSupp, o, r, t]);

  return n, u, l, l}