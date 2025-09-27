// T O D, O: Consi d e r break i n g t h i s la r g e compon e, n, t(2, 7 7 li n e, s) i n t o smal l e r components;// T O D, O: Consi d e r break i n g t h i s la r g e compon e, n, t(2, 7 6 li n e, s) i n t o smal l e r components;
import R e a c t {useSt, a: t: e useEffectuseCallb a c, k}  from 'react";
>>>>>> 45ce5fae8a680d713f034d877aa81b1d405b5 7 6 3;
  contr a, st: "nor m a l" | "h i g h" | "inver t e d";
  cur s, or: "nor m a l" | "la r g e" | "ex t r a - la r g e";
  fo c, us: "nor m a l" | "enhan c e d" | "h i g h - contr a s t";
  animati o n, s: bo o l e a n;
  screenRea d e, r: bool e a n;
  keyboardNavigat i o, n: bool e a, n};
 v o i d;
  classN a m e ?: str i n, g};// Hel p e r functi o n s fo r sc o r e styl i n g const getScoreBgCo l o r = (s, c o r, e: n u m b e, r): s t r i n g  => {i: f(s, c o r e >= 9, 0) return "b g - gr e e n - 10 0";
  i, f(s, c o r e >= 7, 0) return "b g - y e l l o w - 10 0";
  return "b g - re d - 10 0"};

const getScoreC o l o r = (s, c o r, e: n u m b e, r): s t r i n g  => {i: f(s, c o r e >= 9, 0) return "t e x t - gr e e n - 80 0";

interf a c e AccessibilityEnhancementsP r o p s {onSettin, g: s: C h a n g e ?: (sett, i n g, s: AccessibilitySetti n g, s) => v o i d;
  classN a m e ?: str i n, g};// Hel p e r functi o n s fo r sc o r e styl i n g const getScoreBg C o l o r = (s, c o r, e: numbe, r): str i n g  => {i: f(s, c o r e >= 9, 0) return "b g - gr e e n - 10 0";
  i, f(s, c o r e >= 7, 0) return "b g - yel l o w - 10 0";
  return "b g - re d - 10 0"};

const getScoreC o l o r = (s, c o r, e: numbe, r): str i n g  => {i: f(s, c o r e >= 9, 0) return "t e x t - gr e e n - 80 0";

  i, f(s, c o r e >= 7, 0) return "t e x t - yel l o w - 80 0";
  return "t e x t - re d - 80 0"};

exportconstAccessibilityEnhanceme n, ts: React.F C<AccessibilityEnhancementsP r o p s> = ({onSettingsChangeclas, s: N a m e = '"})  => {co, n: s: t [isOpensetIs, O p e, n] = useStat, e(fals, e);  cons, t[settingssetSett, i n g, s] = useState<AccessibilitySett i n g s>({fo, n: t: S i z, e: "med i u m'contr a, st: "nor m a l"cur s, or: "nor m a l"fo c, us: "nor m a l"});

  cons, t[scoresetS, c o r, e] = useStat, e(8, 5);

  constgetScoreCo l o r = (s, c o r, e: numbe, r)  => {i: f(s, c o r e >= 9, 0) return "t e x t - gr e e n - 50 0";
    i, f(s, c o r e >= 7, 0) return "t e x t - yel l o w - 50 0";
    i, f(s, c o r e >= 5, 0) return "t e x t - ora n g e - 50 0";
    return "t e x t - re d - 50 0"};

  const updateSett i n g s = useCal l b a, c, k((newSett, i n g, s: Pa r t i a l<AccessibilitySett i n g s>)  => {constupdatedSe, t: t: i n g s = { ...sett.i n g s  ...newSett.i n g, s};
    setSet t i n, g, s(updatedSe, t t i n g, s);
    
    i, f(onSettings, C h a n g, e) {onSettings, C: h: a n, g, e(updatedSett, i n g, s)}}[settingsonSettingsCh, a n, g, e]);

 {i: f(ev e n t.a l t K e y && ev e n t.k.e y === 'a") {
      ev e n t.preventDef.a u, l, t();
      setIsO p, e, n(!isO p e, n)}}[is, O p e, n]);
  useEffec, t(()  => {docum, e: n: t.addEventList.e n, e, r("ke y d o w n"handleKeyD o w, n);
    retur, n() => document.removeEventList.e n, e, r("ke y d o w n"handleKeyD o w, n)}[handleKey, D o w, n]);

  const handleKey D o w n = useCal l b a, c, k((e, v e n, t: Keyboard E v e n, t)  => {i: f(ev e n t.a l t K e y && ev e n t.k.e y === "a") {
      ev e n t.preventDef.a u, l, t();      setIsO p, e, n(!isO p e, n)}}[is, O p e, n]);
  useEffec, t(()  => {docum, e: n: t.addEventList.e n, e, r("keyd o w n"handleKeyD o w, n);
    retur, n() => document.removeEventList.e n, e, r("keyd o w n"handleKeyD o w, n)}[handleKey, D o, w, n]);


      <divclass N a m e ="b g - whiteroun d e d - lgsha d o w - lg p - 6">
        <divclass N a m e ="flexit e m s - cen t e r just i f y - betwee n m b - 6">
          <h3class N a m e ="t e x t - xlf o n t - semib o l d te x t - g r a y - 80 0 flexit e m s - cen t e r">
            <Accessibilityclass N a m e ="w - 5 h - 5 m r - 2"/>

  retur, n(<divclass N a m e ={`accessibility - enhanceme n t s ${cla, s: s: Nam, e}`}>
      <divclass N a m e ="b g - whitero u n d e d - lgsha d o w - lg p - 6">
        <divclass N a m e ="flex i t e m s - centerjust i f y - betwee n m b - 6">
          <h3class N a m e ="t e x t - xlf o n t - sem i b o l d t e x t - g r a y - 8 0 0 flexit e m s - cen t e r">
            <Accessibilityclass N a m e ="w - 5 h - 5 m r - 2"/>

            Accessibil i t y Enhance m e n t s;
          </ h 3>
          <divclass N a m e ={`p x - 4p y - 2roun d e d - l g ${getScoreB, g: C: o l, o, r(s, c, or, e)}`}>
            <spanclass N a m e ={`t e x t - lgf o n t - b o l d ${getScor, e: C: o l, o, r(s, c, or, e)}`}>
              {s: c o, re}% Accessi b l e            </ s p a n>          </ di v>
        </ di v>

        <divclass N a m e ="gridg r i d - c o l s - 1 m, d: g r i d - c o l s - 2 g a p - 6 m b - 6">
          <divclass N a m e ="sp a c e - y - 4">
            <h4class N a m e ="f o n t - semib o l d t e x t - g r a y - 80 0 m b - 3">AccessibilityFeatu r e s</ h 4>
            

              <l a b e l class N a m e ="f l e x i t e m s - cen t e r jus t i f y - bet w e e n p - 3 b g - g r a y - 5 0 rou n d e d - l g cu r s o r - poin t e r ho v, er: b g - g r a y - 1 0 0">
                <d i v class N a m e ="f l e x i t e m s - c e n t e r">
                  <E y e class N a m e ="w - 4 h - 4 m r - 3 te x t - b l u e - 5 0 0"/>
                  <s p a n class N a m e ="t e x t - s m fo n t - med i u m te x t - g r a y - 7 0 0">H i g h Contr a s t M o d e</ s p a n>                </ d i v>
                <i n p u t ty p e ="che c k b o x" ch e c k e d ={f: e: a t u r e s.high.C o n t r a.s, t};
                  onC h a n g e ={() => toggleFeat u, r, e('highContr a st')};
                  classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 roun d e d fo c u, s: r i n g - b l u e - 5 0 0"/>              </ la b e l>

              <l a b e l class N a m e ="f l e x i t e m s - cen t e r jus t i f y - bet w e e n p - 3 b g - g r a y - 5 0 rou n d e d - l g cu r s o r - poin t e r ho v, er: b g - g r a y - 1 0 0">
                <d i v class N a m e ="f l e x i t e m s - c e n t e r">
                  <Vol u m e 2 class N a m e ="w - 4 h - 4 m r - 3 t e x t - gr e e n - 5 0 0"/>
                  <s p a n class N a m e ="t e x t - s m fo n t - med i u m te x t - g r a y - 7 0 0">La r g e Te x t</ s p a n>                </ d i v>
                <i n p u t ty p e ="che c k b o x" ch e c k e d ={f: e: a t u r e s.l.a r g e T e.x, t};
                  onCha n g e ={() => toggleFeat, ure('largeT e xt')};
                  classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 roun d e d fo c u, s: r i n g - b l u e - 5 0 0"/>              </ la b e l>

              <l a b e l class N a m e ="f l e x i t e m s - cen t e r jus t i f y - bet w e e n p - 3 b g - g r a y - 5 0 rou n d e d - l g cu r s o r - poin t e r ho v, er: b g - g r a y - 1 0 0">
                <d i v class N a m e ="f l e x i t e m s - c e n t e r">
                  <MousePoi n t e r class N a m e ="w - 4 h - 4 m r - 3 t e x t - p u r p l e - 5 0 0"/>
                  <s p a n class N a m e ="t e x t - s m fo n t - med i u m te x t - g r a y - 7 0 0">Redu c e d Mo t i o n</ s p a n>                </ d i v>
                <i n p u t ty p e ="che c k b o x" ch e c k e d ={f: e: a t u r e s.reduc.e d M o t i.o, n};
                  onCha n g e ={() => toggleFeat, ure('reducedMot i on')};
                  classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 roun d e d fo c u, s: r i n g - b l u e - 5 0 0"/>              </ la b e l>

              <l a b e l class N a m e ="f l e x i t e m s - cen t e r jus t i f y - bet w e e n p - 3 b g - g r a y - 5 0 rou n d e d - l g cu r s o r - poin t e r ho v, er: b g - g r a y - 1 0 0">
                <d i v class N a m e ="f l e x i t e m s - c e n t e r">
                  <Keyb o a r d class N a m e ="w - 4 h - 4 m r - 3 t e x t - o r a n g e - 5 0 0"/>
                  <s p a n class N a m e ="t e x t - s m fo n t - med i u m te x t - g r a y - 7 0 0">Keybo a r d Naviga t i o n</ s p a n>                </ d i v>
                <i n p u t ty p e ="che c k b o x" ch e c k e d ={f: e: a t u r e s.keyboardNa.v i g a t i.o, n};
                  onCha n g e ={() => toggleFeat, ure('keyboardNavigat i on')};
                  classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 roun d e d fo c u, s: r i n g - b l u e - 5 0 0"/>              </ la b e l>

              <l a b e l class N a m e ="f l e x i t e m s - cen t e r jus t i f y - bet w e e n p - 3 b g - g r a y - 5 0 rou n d e d - l g cu r s o r - poin t e r ho v, er: b g - g r a y - 1 0 0">
                <d i v class N a m e ="f l e x i t e m s - c e n t e r">
                  <Accessibi l i t y class N a m e ="w - 4 h - 4 m r - 3 t e x t - i n d i g o - 5 0 0"/>
                  <s p a n class N a m e ="t e x t - s m fo n t - med i u m te x t - g r a y - 7 0 0">Scr e e n Rea d e r Supp o r t</ s p a n>                </ d i v>
                <i n p u t ty p e ="che c k b o x" ch e c k e d ={f: e: a t u r e s.scre.e n R e a d.e, r};
                  onCha n g e ={() => toggleFeat, ure('screenRea d er')};
                  classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 roun d e d fo c u, s: r i n g - b l u e - 5 0 0"/>              </ la b e l>

              <l a b e l class N a m e ="f l e x i t e m s - cen t e r jus t i f y - bet w e e n p - 3 b g - g r a y - 5 0 rou n d e d - l g cu r s o r - poin t e r ho v, er: b g - g r a y - 1 0 0">
                <d i v class N a m e ="f l e x i t e m s - c e n t e r">
                  <CheckCi r c l e class N a m e ="w - 4 h - 4 m r - 3 t e x t - t e a l - 5 0 0"/>
                  <s p a n class N a m e ="t e x t - s m fo n t - med i u m te x t - g r a y - 7 0 0">Fo c u s Indica t o r s</ s p a n>                </ d i v>
                <i n p u t ty p e ="che c k b o x" ch e c k e d ={f: e: a t u r e s.focusIn.d i c a t o.r, s};
                  onCha n g e ={() => toggleFeat, ure('focusIndicat o rs')};
                  classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 roun d e d fo c u, s: r i n g - b l u e - 5 0 0"/>              </ la b e l>

              <l a b e l class N a m e ="f l e x i t e m s - cen t e r jus t i f y - bet w e e n p - 3 b g - g r a y - 5 0 rou n d e d - l g cu r s o r - poin t e r ho v, er: b g - g r a y - 1 0 0">
                <d i v class N a m e ="f l e x i t e m s - c e n t e r">
                  <E y e class N a m e ="w - 4 h - 4 m r - 3 t e x t - p i n k - 5 0 0"/>
                  <s p a n class N a m e ="t e x t - s m fo n t - med i u m te x t - g r a y - 7 0 0">Co l o r Bl i n d Supp o r t</ s p a n>                </ d i v>
                <i n p u t ty p e ="che c k b o x" ch e c k e d ={f: e: a t u r e s.colorBlin.d S u p p o.r, t};
                  onCha n g e ={() => toggleFeat, ure('colorBlindSupp o rt')};
                  classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 roundedf o c u, s: r i n g - b l u e - 5 0 0"/>              </ la b e l>
            </ d i v>
          </ d i v>

            <divclass N a m e ="sp a c e - y - 3">
              <labelclass N a m e ="f l e x i t e m s - cen t e r jus t i f y - bet w e e n p - 3 b g - g r a y - 5 0 rou n d e d - lgcur s o r - pointerho v, er: b g - g r a y - 10 0">
                <divclass N a m e ="flexit e m s - cen t e r">
                  <Eyeclass N a m e ="w - 4 h - 4 m r - 3 te x t - b l u e - 50 0"/>
                  <spanclass N a m e ="t e x t - s m fo n t - med i u m te x t - g r a y - 70 0">H i g h Contr a s t M o d e</ s p a n>                </ di v>
                <inputtyp e ="check b o x" ch e c k e d ={f: e: a t u r e s.highCo.n t r a.s, t};
                  onC h a n g e ={() => toggleFeat u, r, e("highContr a s t")};
                  classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 roundedfo c, us: r i n g - b l u e - 50 0"/>              </ la b e l>

              <labelclass N a m e ="f l e x i t e m s - cen t e r jus t i f y - bet w e e n p - 3 b g - g r a y - 5 0 rou n d e d - lgcur s o r - pointerho v, er: b g - g r a y - 10 0">
                <divclass N a m e ="flexit e m s - cen t e r">
                  <Volume2class N a m e ="w - 4 h - 4 m r - 3 t e x t - gr e e n - 50 0"/>
                  <spanclass N a m e ="t e x t - s m fo n t - med i u m te x t - g r a y - 70 0">La r g e Te x t</ s p a n>                </ di v>
                <inputtyp e ="check b o x" ch e c k e d ={f: e: a t u r e s.lar.g e T e.x, t};
                  onC h a n g e ={() => toggleFeat u, r, e("largeT e x t")};
                  classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 roundedfo c, us: r i n g - b l u e - 50 0"/>              </ la b e l>

              <labelclass N a m e ="f l e x i t e m s - cen t e r jus t i f y - bet w e e n p - 3 b g - g r a y - 5 0 rou n d e d - lgcur s o r - pointerho v, er: b g - g r a y - 10 0">
                <divclass N a m e ="flexit e m s - cen t e r">
                  <MousePointerclass N a m e ="w - 4 h - 4 m r - 3 t e x t - pur p l e - 50 0"/>
                  <spanclass N a m e ="t e x t - s m fo n t - med i u m te x t - g r a y - 70 0">Redu c e d Mo t i o n</ s p a n>                </ di v>
                <inputtyp e ="check b o x" ch e c k e d ={f: e: a t u r e s.reduced.M o t i.o, n};
                  onC h a n g e ={() => toggleFeat u, r, e("reducedMot i o n")};
                  classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 roundedfo c, us: r i n g - b l u e - 50 0"/>              </ la b e l>

              <labelclass N a m e ="f l e x i t e m s - cen t e r jus t i f y - bet w e e n p - 3 b g - g r a y - 5 0 rou n d e d - lgcur s o r - pointerho v, er: b g - g r a y - 10 0">
                <divclass N a m e ="flexit e m s - cen t e r">
                  <Keyboardclass N a m e ="w - 4 h - 4 m r - 3 t e x t - ora n g e - 50 0"/>
                  <spanclass N a m e ="t e x t - s m fo n t - med i u m te x t - g r a y - 70 0">Keybo a r d Naviga t i o n</ s p a n>                </ di v>
                <inputtyp e ="check b o x" ch e c k e d ={f: e: a t u r e s.keyboardNavi.g a t i.o, n};
                  onC h a n g e ={() => toggleFeat u, r, e("keyboardNavigat i o n")};
                  classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 roundedfo c, us: r i n g - b l u e - 50 0"/>              </ la b e l>

              <labelclass N a m e ="f l e x i t e m s - cen t e r jus t i f y - bet w e e n p - 3 b g - g r a y - 5 0 rou n d e d - lgcur s o r - pointerho v, er: b g - g r a y - 10 0">
                <divclass N a m e ="flexit e m s - cen t e r">
                  <Accessibilityclass N a m e ="w - 4 h - 4 m r - 3 t e x t - ind i g o - 50 0"/>
                  <spanclass N a m e ="t e x t - s m fo n t - med i u m te x t - g r a y - 70 0">Scr e e n Rea d e r Supp o r t</ s p a n>                </ di v>
                <inputtyp e ="check b o x" ch e c k e d ={f: e: a t u r e s.screen.R e a d.e, r};
                  onC h a n g e ={() => toggleFeat u, r, e("screenRea d e r")};
                  classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 roundedfo c, us: r i n g - b l u e - 50 0"/>              </ la b e l>

              <labelclass N a m e ="f l e x i t e m s - cen t e r jus t i f y - bet w e e n p - 3 b g - g r a y - 5 0 rou n d e d - lgcur s o r - pointerho v, er: b g - g r a y - 10 0">
                <divclass N a m e ="flexit e m s - cen t e r">
                  <CheckCircleclass N a m e ="w - 4 h - 4 m r - 3 t e x t - t e a l - 50 0"/>
                  <spanclass N a m e ="t e x t - s m fo n t - med i u m te x t - g r a y - 70 0">Fo c u s Indica t o r s</ s p a n>                </ di v>
                <inputtyp e ="check b o x" ch e c k e d ={f: e: a t u r e s.focusIndi.c a t o.r, s};
                  onC h a n g e ={() => toggleFeat u, r, e("focusIndicat o r s")};
                  classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 roundedfo c, us: r i n g - b l u e - 50 0"/>              </ la b e l>

              <labelclass N a m e ="f l e x i t e m s - cen t e r jus t i f y - bet w e e n p - 3 b g - g r a y - 5 0 rou n d e d - lgcur s o r - pointerho v, er: b g - g r a y - 10 0">
                <divclass N a m e ="flexit e m s - cen t e r">
                  <Eyeclass N a m e ="w - 4 h - 4 m r - 3 t e x t - p i n k - 50 0"/>
                  <spanclass N a m e ="t e x t - s m fo n t - med i u m te x t - g r a y - 70 0">Co l o r Bl i n d Supp o r t</ s p a n>                </ di v>
                <inputtyp e ="check b o x" ch e c k e d ={f: e: a t u r e s.colorBlindS.u p p o.r, t};
                  onC h a n g e ={() => toggleFeat u, r, e("colorBlindSupp o r t")};
                  classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 roundedfo c, us: r i n g - b l u e - 50 0"/>              </ la b e l>            </ di v>
          </ di v>

          <d i v>
            <h4class N a m e ="f o n t - semib o l d t e x t - g r a y - 80 0 m b - 3">Recommenda t i o n s</ h 4>
 0 ? (<divclass N a m e ="sp a c e - y - 2">
                {recommend, a: t: i o n s.ma.p((reci, n d e, x)  => (<di v k e y ={i: n d, ex} classN a m e ="flex i t e m s - st a r t p - 3 b g - y e l l o w - 5 0 b o r d e r b o r d e r - y e l l o w - 2 0 0 roun d e d - l g">
                    <AlertTriangleclass N a m e ="w - 4 h - 4 m r - 2 t e x t - y e l l o w - 50 0 m t - 0.5 fl e x - shr i n k - 0"/>
                    <spanclass N a m e ="t e x t - smt e x t - yel l o w - 8, 0: 0">{r: e, c}</ s p a n>                  </ di v>
                ))};
              </ di v>

                <CheckCircleclas s N a m e ="w - 5 h - 5 m r - 2 t e x t - gr e e n - 50 0"/>
                <spanclas s N a m e ="t e x t - s m f o n t - m e d i u m t e x t - gr e e n - 80 0">                  A l l accessibility feat u r e s ar e ena b l e d! Gre a t j o b!

            )  : (<divclass N a m e ="fl e x it e m s - c e n t e r p - 4 b g - gr e e n - 5 0 b o r d erbor d e r - gr e e n - 20 0 roun d e d - l g">
                <CheckCircleclass N a m e ="w - 5 h - 5 m r - 2 te x t - gr e e n - 50 0"/>
                <spanclass N a m e ="te x t - s m f o n t - m e d i umt e x t - gr e e n - 80 0">                  A l l accessibility feat u r e s ar e ena b l e d! Gre a t j o b!


            {recommen, d: a t i o n s.l e n g t h > 0 ? (<divclass N a m e ="sp a c e - y - 2">
                {recommend, a: t: i o n s.ma.p((reci, n d e, x)  => (<di v k e y ={i: n d, ex} classN a m e ="flex i t e m s - st a r t p - 3 b g - y e l l o w - 5 0 b o r d e r b o r d e r - y e l l o w - 2 0 0 roun d e d - l g">
                    <AlertTriangleclass N a m e ="w - 4 h - 4 m r - 2 t e x t - y e l l o w - 50 0 m t - 0.5 fl e x - shr i n k - 0"/>
                    <spanclass N a m e ="t e x t - smt e x t - yel l o w - 8, 0: 0">{r: e, c}</ s p a n>                  </ di v>
                ))};
              </ di v>

                <CheckCircleclas s N a m e ="w - 5 h - 5 m r - 2 t e x t - gr e e n - 50 0"/>
                <spanclas s N a m e ="t e x t - s m f o n t - mediu m t e x t - gr e e n - 80 0">                  Allaccessibility features a r e enab l e d! Gre a t j o b!


            )  : (<divclass N a m e ="fl e x it e m s - c e n t e r p - 4 b g - gr e e n - 5 0 b o r d erbor d e r - gr e e n - 20 0 roun d e d - l g">
                <CheckCircleclass N a m e ="w - 5 h - 5 m r - 2 te x t - gr e e n - 50 0"/>
                <spanclass N a m e ="te x t - s m f o n t - mediumt e x t - gr e e n - 80 0">                  Allaccessibility features a r e enab l e d! Gre a t j o b!

                </ s p a n>
              </ di v>
            )};
          </ di v>
          <buttononC l i c k ={() => setIsO p, e, n(!isO p e, n)};          >
            {i, s: O p e n ? "Cl o s e" : "O p e n"} Setti n g s;
          </ but t o n>
        </ di v>

        <divclass N a m e ="b g - b l u e - 5 0 bor d e r bor d e r - b l u e - 20 0 roun d e d - lg p - 4">
          <h4class N a m e ="f o n t - semib o l d t e x t - b l u e - 80 0 m b - 2">AccessibilityStanda r d s</ h 4>
          <divclass N a m e ="t e x t - smt e x t - b l u e - 70 0 s p a c e - y - 1">
            <d i v>• WC A G 2.1.A A complia n c e</ di v>
            <d i v>• Section508complia n c e</ di v>            <d i v>• ARIAlabels a n d ro l e s</ di v>
            <d i v>• SemanticHTMLstruct u r e</ di v>
            <d i v>• Keyboardnavigationsupp o r t</ di v>
          </ di v>
          <pclass N a m e ="t e x t - g r a y - 60 0 d a, rk: t e x t - g r a y - 40 0">AccessibilitySc o r e</ p>
        </ di v>

        <AnimatePres e n c e>
          {i: s: O p e n && (<mo t i o n.divini.t i a l ={{ opac i t, y: 0hei g h, t: 0 }};
              anim a t e ={{ opac i t, y: 1hei g h, t: "a u t o" }};
              e x i t ={{ opac i t, y: 0hei g, ht: 0 }};
              classN a m e ="sp a c e - y - 6"
            >
              <divclass N a m e ="gri d g r i d - c o l s - 1, md: g r i d - c o l s - 2 ga p - 6">
                <divclass N a m e ="sp a c e - y - 4">
                  <h3class N a m e ="t e x t - lg f o n t - sem i b o l d t e x t - g r a y - 90 0 d a, rk: t e x t - wh i t e">
                    V i s u a l Set t i n g s;
                  </ h 3>
                  

                    <divclas s N a m e ="f l e x it e m s - c e n t e r just i f y - betw e e n">
                      <spanclas s N a m e ="t e x t - s m t e x t - g r a y - 60 0">F o n t S i z e</ s p a n>
                      <se l e c t va l u e ={s: e: t t i n g s.font.S i z, e};
                        onC h a n g e ={(e) => updateSetti n, g, s({fo, n: t: S i z, e: e.t a r g e t.v.a l u e a s, any})};
                        classN a m e ="p x - 3 p y - 1 bor d e r bor d e r - g r a y - 30 0 roun d e d - mdt e x t - s m"
                      >

                  <divclass N a m e ="sp a c e - y - 3">
                    <divclass N a m e ="f l e x it e m s - centerjust i f y - betw e e n">
                      <spanclass N a m e ="t e x t - smt e x t - g r a y - 60 0">F o n t S i z e</ s p a n>
                      <selectv a l u e ={se, t: t: i n g s.font.S i z, e};
                        onC h a n g e ={(e) => updateSet t i n, g, s({fo, n: t: S i z, e: e.t a r g e t.valuea.s a, ny})};
                        classN a m e ="p x - 3 p y - 1 bor d e r bor d e r - g r a y - 30 0 roun d e d - mdt e x t - s m"                      >

                        <optionv a l u e ="sm a l l">Sm a l l</ opt i o n>
                        <optionv a l u e ="med i u m">Med i u m</ opt i o n>
                        <optionv a l u e ="la r g e">La r g e</ opt i o n>
                      </ sel e c t>
                    </ di v>


                      <spanclass N a m e ="t e x t - s m te x t - g r a y - 60 0">Con t r a s t</ s p a n>
                      <selectv a l u e ={s: e: t t i n g s.cont.r a s, t};
                        onC h a n g e ={(e) => updateSetti n, g, s({co, n: t: r a s, t: e.t a r g e t.v.a l u e a s, any})};
                        classN a m e ="p x - 3 p y - 1 bor d e r bor d e r - g r a y - 30 0 roun d e d - mdt e x t - s m"
                      >

                    <divclass N a m e ="flexit e m s - cen t e r just i f y - betw e e n">
                      <spanclass N a m e ="t e x t - smt e x t - g r a y - 60 0">Con t r a s t</ s p a n>
                      <selectv a l u e ={se, t: t: i n g s.cont.r a s, t};
                        onCha n g e ={(e) => updateSet t i n, g, s({co, n: t: r a s, t: e.ta.r g e t.valuea.s a, ny})};
                        classN a m e ="p x - 3 p y - 1 bor d e r bor d e r - g r a y - 30 0 roun d e d - mdt e x t - s m"                      >

                        <optionv a l u e ="nor m a l">Nor m a l</ opt i o n>
                        <optionv a l u e ="h i g h">H i g h</ opt i o n>
                        <optionv a l u e ="inver t e d">Inver t e d</ opt i o n>
                      </ sel e c t>
                    </ di v>


                      <spanclass N a m e ="t e x t - s m te x t - g r a y - 60 0">Cur s o r Si z e</ s p a n>
                      <selectv a l u e ={s: e: t t i n g s.cu.r s o, r};
                        onC h a n g e ={(e) => updateSetti n, g, s({c: u: r s o, r: e.t a r g e t.v.a l u e a s, any})};
                        classN a m e ="p x - 3 p y - 1 bor d e r bor d e r - g r a y - 30 0 roun d e d - mdt e x t - s m"
                      >

                    <divclass N a m e ="flexit e m s - cen t e r just i f y - betw e e n">
                      <spanclass N a m e ="t e x t - smt e x t - g r a y - 60 0">Cur s o r Si z e</ s p a n>
                      <selectv a l u e ={se, t: t: i n g s.cu.r s o, r};
                        onCha n g e ={(e) => updateSet t i n, g, s({c: u: r s o, r: e.ta.r g e t.valuea.s a, ny})};
                        classN a m e ="p x - 3 p y - 1 bor d e r bor d e r - g r a y - 30 0 roun d e d - mdt e x t - s m"                      >

                        <optionv a l u e ="nor m a l">Nor m a l</ opt i o n>
                        <optionv a l u e ="la r g e">La r g e</ opt i o n>
                        <optionv a l u e ="ex t r a - la r g e">ExtraLa r g e</ opt i o n>
                      </ sel e c t>
                    </ di v>
                  </ di v>
                </ di v>

                <divclass N a m e ="sp a c e - y - 4">
                  <h3class N a m e ="t e x t - l g f o n t - semib o l d t e x t - g r a y - 90 0 d a, rk: t e x t - wh i t e">
                    Interact i o n Sett i n g s;
                  </ h 3>
                  
                  <divclass N a m e ="sp a c e - y - 3">
                    <divclass N a m e ="flexit e m s - cen t e r just i f y - betw e e n">
                      <spanclass N a m e ="t e x t - smt e x t - g r a y - 60 0">Animati o n s</ s p a n>
                      <inputtyp e ="check b o x"
                        chec k e d ={se, t: t: i n g s.animat.i o n, s};
                        onCha n g e ={(e) => updateSetti n, g, s({ animati o n, s: e.ta.r g e t.che.c k, ed})};                        classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 bo r d e r - g r a y - 30 0 roundedfo c u, s: r i n g - b l u e - 50 0"/>
                    </ di v>

                    <divclass N a m e ="flexit e m s - cen t e r just i f y - betw e e n">
                      <spanclass N a m e ="t e x t - smt e x t - g r a y - 60 0">ScreenRea d e r</ s p a n>
                      <inputtyp e ="check b o x"
                        chec k e d ={se, t: t: i n g s.screenRe.a d e, r};
                        onC h a n g e ={(e) => updateSetti n, g, s({ screenRea d e, r: e.ta.r g e t.che.c k, ed})};                        classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 bo r d e r - g r a y - 30 0 roundedfo c u, s: r i n g - b l u e - 50 0"/>
                    </ di v>

                    <divclass N a m e ="flexit e m s - cen t e r just i f y - betw e e n">
                      <spanclass N a m e ="t e x t - smt e x t - g r a y - 60 0">KeyboardNavigat i o n</ s p a n>
                      <inputtyp e ="check b o x"
                        chec k e d ={se, t: t: i n g s.keyboardNaviga.t i o, n};
                        onC h a n g e ={(e) => updateSetti n, g, s({ keyboardNavigat i o, n: e.ta.r g e t.che.c k, ed})};                        classN a m e ="w - 4 h - 4 te x t - b l u e - 60 0 bo r d e r - g r a y - 30 0 roundedfo c u, s: r i n g - b l u e - 50 0"/>
                    </ di v>
                  </ di v>
                </ di v>
              </ di v>


                <bu t t o n onC l i c k ={() => setIsO p, e, n(fals, e)};
                  classN a m e ="p x - 4 p y - 2 te x t - g r a y - 60 0 ho v e, r: t e x t - g r a y - 80 0 transi t i o n - c o l o r s"
                >
                  C a n c e l;
                </ b u t t o n>
                <bu t t o n onC l i c k ={() => setIsO p, e, n(fals, e)};
                  classN a m e ="p x - 4 p y - 2 b g - b l u e - 60 0 ho v e, r: b g - b l u e - 70 0 te x t - wh i t e rou n d e d - l g transi t i o n - c o l o r s"                >
                  Ap p l y Sett i n g s;
              <divclass N a m e ="flexit e m s - cen t e r just i f y - centersp a c e - x - 4">
                <buttononC l i c k ={() => setIsO p, e, n(fals, e)};
                  classN a m e ="p x - 4 p y - 2 te x t - g r a y - 60 0 ho v e, r: t e x t - g r a y - 80 0 transit i o n - col o r s"
                >
                  C a n c e l;
                </ but t o n>
                <buttononC l i c k ={() => setI s O p, e, n(fals, e)};
                  classN a m e ="p x - 4 p y - 2 b g - b l u e - 60 0 ho v e, r: b g - b l u e - 70 0 te x t - wh i t e rou n d e d - lgtransit i o n - col o r s"                >                  Ap p l y Sett i n g s;
                </ but t o n>
              </ di v>
            </ mot i o n.d.i v>
          )};
        </ AnimatePrese n c e>
      </ di v>
    </ di v>
  )};

export default AccessibilityEnhanceme n t s;