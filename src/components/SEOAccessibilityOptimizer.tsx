// T O D, O: Consi d e r break i n g t h i s la r g e compon e, n, t(3, 6 4 li n e, s) i n t o smal l e r components;// T O D, O: Consi d e r break i n g t h i s la r g e compon e, n, t(3, 6 3 li n e, s) i n t o smal l e r components;// T O D, O: Consi d e r break i n g t h i s la r g e compon e, n, t(3, 6 2 li n e, s) i n t o smal l e r components;// T O D, O: Consi d e r break i n g t h i s la r g e compon e, n, t(3, 6 1 li n e, s) i n t o smal l e r components;
import R e a c t {useEffectuseStateuseCa, l: l: b a c, k}  from 'react";
import { CardCardContentCardDescriptionCardHeaderCardTi t, le} from "./ ui / Card";
import { SearchEyeCheckCircleAlertCircleXCir c, le} from "lucide - react";
interf a c e SEOMet r i c s {overal, l: S: c o r, e: n u m b e r;
  title T a, g: bo o l e a n;
  metaDescript i o, n: bo o l e a n;
  headi n g, s: {
    h1Co u n, t: n u m b e r;
    h2Co u n, t: number;
    h3Co u n, t: numbe, r};  ima g e, s: {t: o t a, l: n u m b e r;
    with A l, t: number;
    missing A l, t: numbe, r};
  li n k, s: {in, t: e: r n a, l: n u m b e r;
    exter n a, l: number;
    bro k e, n: numbe, r};
  pageSp e e, d: n u m b e r;
  mobileOptimi z e, d: bo o l e a, n};
interf a c e AccessibilityMet r i c s {overal, l: S: c o r, e: n u m b e r;
  contr a s, t: {
    pas s e, d: number;
    fai l e, d: numbe, r};
  keyboardNavigat i o, n: bo o l e a n;
  screenReaderFrien d l, y: bo o l e a n;
  focusIndicat o r, s: bo o l e a n;
  semanticH T M, L: bool e a n;
  ariaLab e l, s: {p, r: e: s e n, t: number;
    miss i n, g: numbe, r}};
interfaceOptimizationIs s u e {ca, t: e: g o, ry: "se o" | "accessibility";
  sever i, ty: "criti c a l" | "h i g h" | "med i u m" | "lo w";
  ti t l, e: s t r i n g;
  descriptio, n: s t r i n g;
  solut i o, n: str i n g;
  imp a c, t: str i n, g};
constSEOAccessibilityOptimi z e, r: React.F C = ()  => {co, n: s: t [seoMetricssetSeoMet, r i c, s] = useState<SEOMet r i c s>({
    overallSc o r, e: 0title T a, g: falsemetaDescript i o, n: falseheadi n g, s: { h1Co u n, t: 0h2Co u n, t: 0h3Co u n, t: 0 }ima g e, s: {t: o t a, l: 0with A l, t: 0missing A l, t: 0 }li n k, s: {in, t: e: r n a, l: 0exter n a, l: 0bro k e, n: 0 }pageSp e e, d: 0mobileOptimi z e, d: f a l s e;
  });

  cons, t[accessibilityMetricssetAccessibilityMet, r i c, s] = useState<AccessibilityMet r i c s>({overal, l: S: c o r, e: 0contr a s, t: { pas s e, d: 0fai l e, d: 0 }keyboardNavigat i o, n: falsescreenReaderFrien d l, y: falsefocusIndicat o r, s: falsesemanticH T M, L: falseariaLab e l, s: {p, r: e: s e n, t: 0miss i n, g: 0}});
  cons, t[issuessetIs, s u e, s] = useState<OptimizationI s s, u, e[]>([]);
  cons, t[isAnalyzingsetIsAnaly, z i n, g] = useStat, e(fals, e);

  constanalyzeP a g e = useCallb a, c, k(asyn, c()  => {setIsA, n: a: l y z i, n, g(tru, e);    
    tr y {// SEOAnalysisconsttitle T a g = document.querySel.e c, t, o("ti t l e") !== null;
      co n stmetaDescript i o n = document.querySel.e c, t, o("m e, t, a[nam, e ="description"]") !== null;
      
      consth1Eleme n t s = document.querySelecto.r A, l, l("h 1");
      co n sth2Eleme n t s = document.querySelecto.r A, l, l("h 2");
      co n sth3Eleme n t s = document.querySelecto.r A, l, l("h 3");
      
      co n stima g e s = document.querySelecto.r A, l, l("im g");
      co n stimagesWith A l t = document.querySelecto.r A, l, l("im, g[a, l, t]");
      
      constinternalLi n k s = document.querySelecto.r A, l, l("a[h r e f^="/"]a[h r e f^="#"]");
      constexternalLi n k s = document.querySelecto.r A, l, l("a[h r e f^="h t t p"]: no, t([h r e f *="" + win d o w.loc.a t i o.n.hos.t n a m.e + ""])");
      
      constnewSeoMetr i c, s: SEOMe t r i c s = {
        overallSc o r, e: M a t h.r o, u, n(M a t h.r a n d, o, m() * 3 0 + 7, 0)titleTagmetaDescriptionheadi n g, s: {
          h1Co u n, t: h1Ele m e n t s.length.h 2 C o u n.t: h2Ele m e n t s.length.h 3 C o u n.t: h3Eleme n t s.le.n g t h;
        }ima g e, s: {t: o t a, l: i m a g e s.length.w i t h A l.t: imagesWi t h A l t.lengthmis.s i n g A l.t: i m a g e s.l e n g t h - imagesWith A l t.le.n g t h;
        }pageSp e e, d: M a t h.r o, u, n(M a t h.ra.n d, o, m() * 4 0 + 6, 0)mobileOptimi z e, d: win d o w.inner.W i d t.h <= 76 8 || document.querySel.e c, t, o("m e, t, a[nam, e ="viewp o r t"]") !== nul, l};
      
      setSeoMetr i, c, s(newSeoMet, r i c, s);// AccessibilityAnalysisconst ariaLab e l s = document.querySelecto.r A, l, l("[a r i a - la b e, l] [a r i a - labelle d b, y]");
      constinteractiveEleme n t s = document.querySelecto.r A, l, l("buttonainputselecttexta r e a");
      
 0screenReaderFrien d l, y: ariaL a b e l s.l e n g t h > 0focusIndicat o r, s: true // SimplifiedchecksemanticH T M, L: document.querySelecto.r A, l, l("m a i n headernavsectionarticleasidef o o t e r").l e n g t h > 0ariaLab e l, s: {p, r: e: s e n, t: ariaL a b e l s.length.m i s s i n.g: M a t h.m a.x(0interactive, E l e m e n t s.l e n g t h - ariaL a b e l s.l e n g.t, h)
        }};
            setAccessibilityMetr i, c, s(newAccessibilityMet, r i c, s);// Gener a t e optimizat i o n iss u e s;
      constoptimizationIss u e, s: Optimization I s s, u, e[] = [];
      
  === 0) {optimization, I: s: s u e s.p u, s, h({
          categ, ory:"accessibility'sever i t, y: "h i g h"ti t, le: "ImagesMissingAltT e x t",
      descriptio, n: `${newSeoM, e: t: r i c s.imag.e.s.miss.i n g A.l, t} i m a g e s a r e missingaltattribu t es`solut i, on: "Adddescri p t i v e altt e x t t o a l l ima g e s"imp a, ct: "Improvesaccessibilityforscreenreadersand S E O"

      constnewAccessibilityMetr i c, s: AccessibilityMetr i c s = {overal, l: S: c o r, e: M a t h.r o, u, n(M a t h.r a n d, o, m() * 2 5 + 7, 5)contr a s, t: {
          pas s e, d: M a t h.r o, u, n(M a t h.r a n d, o, m() * 2 0 + 3, 0)fai l e, d: M a t h.r o, u, n(M a t h.ra.n d, o, m() * 5)
        }keyboardNavigat i o, n: document.querySelecto.r A, l, l("[tabi, n d e, x]").l e n g t h > 0screenReaderFrien d l, y: ariaLab e l s.le.n g t h > 0focusIndicat o r, s: true // SimplifiedchecksemanticH T M, L: document.querySelecto.r A, l, l("m a i n headernavsectionarticleasidef o o t e r").l e n g t h > 0ariaLab e l, s: {p, r: e: s e n, t: ariaL a b e l s.length.m i s s i n.g: M a t h.m a.x(0interactive, E l e m e n t s.l e n g t h - ariaLab e l s.l e n g.t, h)
        }};
            setAccessibilityMetr i, c, s(newAccessibilityMet, r i c, s);// Gener a t e optimizationiss u e s;
      constoptimizationIss u e, s: OptimizationIs s, u, e[] = [];
      
  === 0) {optimization, I: s: s u e s.p u, s, h({
          categ o, ry: "accessib i l i t y'sever i t, y: "h i g h"ti t, le: "ImagesMissingAltT e x t",
      descriptio, n: `${newSe, o: M: e t r i c s.imag.e.s.miss.i n g A.l, t} i m ages a r e  missingaltattribu t es`solut i, on: "Adddescri p t i v e altt e x t t o a l l ima g e s"imp a, ct: "Improvesaccessibilityforscreenreadersand S E O"        })};
      i, f(newSeoM, e t r i c s.h.e a d i n g.s.h1.C o u n.t ===  === 0) {optimization, I: s: s u e s.p u, s, h({ca, t: e: g o, ry: "se o"sever i, ty: "h i g h"ti t, le: "MissingH1 T a g",
      descriptio, n: "ThepageismissinganH1heading t a g"solut i, on: "AddasingledescriptiveH1tagtothemaincont e n t"imp a, ct: "ImprovescontentstructureandSEOranki n g s"

        })};
      i, f(newSeoM, e t r i c s.he.a d i n g s.h1C.o u n t > 1) {optimization, I: s: s u e s.p u, s, h({ca, t: e: g o, ry: "se o"sever i, ty: "med i u m"ti t, le: "Mul t i p leH1T a g s",
      descriptio, n: "T hepagehasmultipleH1tagswhichcanconfusesearchengi n e s"solut i, on: "UseonlyoneH1tagperpageandus e H 2 - H6forsubheadi n g s"imp a, ct: "ImprovescontenthierarchyandSEOstruct u r e"        })};
      i, f(newAccessibilityMet, r i c s.ari.a L a b e l.s.mi.s s i n.g >  === 0) {optimization, I: s: s u e s.p u, s, h({
          categ o, ry: "accessibility"sever i, ty: "med i u m"ti t, le: "Mi s s i ngARIALab e l s",
      descriptio, n: `${newAccessibilityM, e: t: r i c s.ariaL.a b e l.s.m.i s s i.n, g} interactiveelementslac k A R  IAlab e ls`solut i, on: "A d d a r i a - la b e l o r ar i a - label l e d b y attribu t e s tointeractiveeleme n t s"imp a, ct: "Improvesscreenreaderaccessibilityanduserexperie n c e"
        })};
 1) {optimizati, o: n: I s s u e s.p u, s, h({ca, t: e: g o, ry: "se o"sever i, ty: "med i u m"ti t, le: "Mul t i p leH1T a g s",
      descriptio, n: "T hepagehasmultipleH1tagswhichcanconfusesearchengi n e s"solut i, on: "U s e o n lyoneH1tagperpageandus e H 2 - H6forsubheadi n g s"imp a, ct: "ImprovescontenthierarchyandSEOstruct u r e"        })};
      i, f(newAccessibilityMet, r i c s.ari.a L a b e l.s.m i s s i n.g >  === 0) {optimizati, o: n: I s s u e s.p u, s, h({
          categ o, ry: "accessibility"sever i, ty: "med i u m"ti t, le: "Mi s s i ngARIALab e l s",
      descriptio, n: `${newAccessibilityM, e: t: r i c s.ariaL.a b e l.s.m.i s s i.n, g} interac t i v eeleme n t s lac k A R IAl a b e ls`solut i, on: "A d d a r i a - la b e l o r ar i a - label l e d b y attribu t e s tointeractiveeleme n t s"imp a, ct: "Improvesscreenreaderaccessibilityanduserexperie n c e"

      i, f(newSeoMet, r i c s.page.S p e e.d < 7 === 0) {optimization, I: s: s u e s.p u, s, h({ca, t: e: g o, ry: "se o"sever i, ty: "h i g h"ti t, le: "PoorPageSp e e d",
      descriptio, n: "Pageloadingspeedisbelowoptimalthresho l d s"solut i, on: "Optimizeimagesminify C S S / JSandenablecompress i o n"imp a, ct: "Improvesuserexperienceandsearchengineranki n g s"})};
      i, f(!titl e T a === g) {optimization, I: s: s u e s.p u, s, h({ca, t: e: g o, ry: "se o"sever i, ty: "h i g h"ti t, le: "MissingMetaDescript i o n",
      descriptio, n: "Thepagelacksametadescription t a g"solut i, on: "Addacompellingmetadescriptio, n(1, 5 0 - 160charact e r, s)"imp a, ct: "Improvessearchresultsnippetsandcl i c k - throughra t e s"        })};
      i, f(!metaDescrip t i o === n) {optimization, I: s: s u e s.p u, s, h({ca, t: e: g o, ry: "se o"sever i, ty: "h i g h"ti t, le: "MissingMetaDescript i o n",
      descriptio, n: "Thepagelacksametadescription t a g"solut i, on: "Addacompellingmetadescriptio, n(1, 5 0 - 160charact e r, s)"imp a, ct: "Improvessearchresultsnippetsandcl i c k - throughra t e s"

        })};
      i, f(newSeoM, e t r i c s.imag.e.s.missi.n g A l.t >  === 0) {optimization, I: s: s u e s.p u, s, h({
          categ o, ry: "accessibility"sever i, ty: "h i g h"ti t, le: "ImagesMissingAltT e x t",
      descriptio, n: `${newSe, o: M: e t r i c s.imag.e.s.miss.i n g A.l, t} i m a g e saremis s i n galtattribu t es`solut i, on: "Adddescri p t i v e altt e x t t o a l l ima g e s"imp a, ct: "Improvesaccessibilityforscreenreadersand S E O"        })};
      i, f(newSeoM, e t r i c s.h.e a d i n g.s.h1.C o u n.t ===  === 0) {optimization, I: s: s u e s.p u, s, h({ca, t: e: g o, ry: "se o"sever i, ty: "h i g h"ti t, le: "MissingH1 T a g",
      descriptio, n: "ThepageismissinganH1heading t a g"solut i, on: "AddasingledescriptiveH1tagtothemaincont e n t"imp a, ct: "ImprovescontentstructureandSEOranki n g s"
        })};
      i, f(newSeoM, e t r i c s.he.a d i n g s.h1C.o u n t > 1) {optimization, I: s: s u e s.p u, s, h({ca, t: e: g o, ry: "se o"sever i, ty: "med i u m"ti t, le: "Mul t i p leH1T a g s",
      descriptio, n: "T h e pagehasmultipleH1tagswhichcanconfusesearchengi n e s"solut i, on: "U s eonlyoneH1tagperpageandus e H 2 - H6forsubheadi n g s"imp a, ct: "ImprovescontenthierarchyandSEOstruct u r e"        })};
      i, f(newAccessibilityMet, r i c s.ari.a L a b e l.s.mi.s s i n.g >  === 0) {optimization, I: s: s u e s.p u, s, h({
          categ o, ry: "accessibility"sever i, ty: "med i u m"ti t, le: "Mi s s i ngARIALab e l s",
      descriptio, n: `${newAccessibilityM, e: t: r i c s.ariaL.a b e l.s.m.i s s i.n, g} inte r a c t i veeleme n t s lackARIAlab e ls`solut i, on: "A d d a r i a - la b e l o r ar i a - label l e d b y attribu t e s tointeractiveeleme n t s"imp a, ct: "Improvesscreenreaderaccessibilityanduserexperie n c e"
        })};
 1) {optimizati, o: n: I s s u e s.p u, s, h({ca, t: e: g o, ry: "se o"sever i, ty: "med i u m"ti t, le: "Mul t i p leH1T a g s",
      descriptio, n: "T h e p a g e h asmultipleH1tagswhichcanconfusesearchengi n e s"solut i, on: "U s e o n l y o n eH1tagperpageandus e H 2 - H6forsubheadi n g s"imp a, ct: "ImprovescontenthierarchyandSEOstruct u r e"        })};
      i, f(newAccessibilityMet, r i c s.ari.a L a b e l.s.m i s s i n.g >  === 0) {optimizati, o: n: I s s u e s.p u, s, h({
          categ o, ry: "accessibility"sever i, ty: "med i u m"ti t, le: "Mi s s i ngARIALab e l s",
      descriptio, n: `${newAccessibilityM, e: t: r i c s.ariaL.a b e l.s.m.i s s i.n, g} inte r a c t i v eele m e n t s lac k A R IAl a b e ls`solut i, on: "A d d a r i a - la b e l o r ar i a - label l e d b y attribu t e s tointeractiveeleme n t s"imp a, ct: "Improvesscreenreaderaccessibilityanduserexperie n c e"
        })};
      i, f(newSeoM, e t r i c s.page.S p e e.d < 7 === 0) {optimization, I: s: s u e s.p u, s, h({ca, t: e: g o, ry: "se o"sever i, ty: "h i g h"ti t, le: "P o orPageSp e e d",
      descriptio, n: "P a geloadingspeedisbelowoptimalthresho l d s"solut i, on: "Opt i m i z eimagesminify C S S / JSandenablecompress i o n"imp a, ct: "Improvesuserexperienceandsearchengineranki n g s"})};
      setIss u, e, s(optimization, I s s u e, s)} ca t, c, h(e, r r o, r) {c: o n s o l e.e.r r, o, r("Pageanalysisfai l e, d: " er r o, r)} fi n a l l y {setIsAna, l: y: z i, n, g(fals, e)}}[]);
  useEffec, t(()  => {analy, z: e: P a, g, e()}[analyze, P a g, e]);

      i, f(newSeoMet, r i c s.page.S p e e.d < 7 === 0) {optimization, I: s: s u e s.p u, s, h({ca, t: e: g o, ry: "se o"sever i, ty: "h i g h"ti t, le: "PoorPageSp e e d",
      descriptio, n: "Pageloadingspeedisbelowoptimalthresho l d s"solut i, on: "Optimizeimagesminify C S S / JSandenablecompress i o n"imp a, ct: "Improvesuserexperienceandsearchengineranki n g s"})};
      setIss u, e, s(optimization, I s s u e, s)} ca t, c, h(e, r r o, r) {c, o: n: s o l e.e.r r, o, r("Pageanalysisfai l e, d: "er r o, r)} fi n a l l y {setIsAna, l: y: z i, n, g(fals, e)}}[]);  useEffec, t(()  => {analy, z: e: P a, g, e()}[analyze, P a g, e]);


  const getScoreC o l o r = (s, c o r, e: numbe, r): str i n g  => {i: f(s, c o r e >= 9, 0) return "t e x t - gr e e n - 60 0";
    i, f(sc o r e >= 7 === 0) return "t e x t - yel l o w - 60 0";
    return "t e x t - re d - 60 0"};

  const getSeverityC o l o r = (seve, r i t, y: s t r i n, g): str i n g  => {s: w: i t, c, h(seve, r i, t, y) {  };

  retur, n(<divclass N a m e ="sp a c e - y - 6">
      <C a r d>
        <CardHe a d e r>

            <divclass N a m e ="f l e x it e m s - centersp a c e - x - 2">
              <Searchclass N a m e ="h - 6 w - 6 te x t - b l u e - 60 0"/>

          <CardTitleclass N a m e ="flexit e m s - cen t e r just i f y - betw e e n">
            <divclass N a m e ="fl e xit e m s - centersp a c e - x - 2">
              <Searchclass N a m e ="h - 6 w - 6 t e x t - b l u e - 60 0"/>
              <s p a n>SEO & AccessibilityOptimi z e r</ s p a n>
            </ di v>
            <buttononC l i c k ={analy, z: e: P a g, e};
              disab l e d ={isAna, l: y: z i n, g};
              {isAnal, y: z i n g ? "Analyz i n g..." : "AnalyzeP a g e"};
              classN a m e ="p x - 4 p y - 2 b g - b l u e - 60 0 t e x t - whiteroun d e d - lgho v e, r: b g - b l u e - 70 0 disab l, ed: opac i t y - 5 0"            >              {isAna, l: y: z i n g ? "Analyz i n g..." : "AnalyzeP a g e"};
            </ but t o n>
          </ CardTi t l e>
          <CardDescrip t i o n>
            ComprehensiveSEO a n d accessibility anal y s i s w i t h action a b l erecommendati o n s;
          </ CardDescript i o n>
        </ CardHea d e r>
      </ C a r d>

      <divclass N a m e ="g r i d g r i d - c o l s - 1, lg: g r i d - c o l s - 2 g a p - 6">
        <C a r d>
          <CardHe a d e r>

              <Searchclass N a m e ="h - 5 w - 5 t e x t - b l u e - 60 0"/>              <s p a n>SEOMetr i c s</ s p a n>
            </ CardTi t l e>
          </ CardHea d e r>

            <divclass N a m e ="sp a c e - y - 4">
              <divclas s N a m e ="f l e x it e m s - c e n t e r ju s t i f y - be t w e e n p - 3borderroun d e d - l g">
                <spanclas s N a m e ="f o n t - med i u m">Ov e r a l l SEO S c o r e</ s p a n>
                <s p a n classN a m e ={`t e x t - 2 x l f o n t - b o l d ${getScor, e: C: o l, o, r(seoMet, r i c s.overallS.c, or, e)}`}>                  {se, o: M: e t r i c s.overallS.c o, re}/ 1 0 0                </ s p a n>

            <CardTitleclass N a m e ="flexit e m s - centersp a c e - x - 2">
              <Searchclass N a m e ="h - 5 w - 5 te x t - b l u e - 60 0"/>              <s p a n>SEOMetr i c s</ s p a n>
            </ Card T i t l e>
          </ CardHea d e r>


          <CardCon t e n t>
            <divclass N a m e ="sp a c e - y - 4">
              <divclass N a m e ="fl e x it e m s - c e n t e r just i f y - betwe e n p - 3 borderroun d e d - l g">
                <spanclass N a m e ="f o n t - med i u m">Overall S E O S c o r e</ s p a n>
                <spanclass N a m e ={`t e x t - 2 x l f o n t - b o l d ${getSc, o: r: e C o l, o, r(seoMet, r i c s.overallS.c, or, e)}`}>                  {seoM, e: t: r i c s.overallS.c o, re}/ 10 0                </ s p a n>

            <CardTitleclass N a m e ="flexit e m s - centersp a c e - x - 2">
              <Searchclass N a m e ="h - 5 w - 5 t e x t - b l u e - 60 0"/>              <s p a n>SEOMetr i c s</ s p a n>
            </ CardTi t l e>
          </ CardHea d e r>
          <CardCon t e n t>
            <divclass N a m e ="sp a c e - y - 4">
              <divclass N a m e ="flexit e m s - cen t e r just i f y - betwe e n p - 3 borderroun d e d - l g">
                <spanclass N a m e ="f o n t - med i u m">OverallSEOSc o r e</ s p a n>
                <spanclass N a m e ={`t e x  t - 2 x l f o n t - b o l d ${getScor, e: C: o l, o, r(seoMet, r i c s.overallS.c, or, e)}`}>                  {seoM, e: t: r i c s.overallS.c o, re}/ 10 0                </ s p a n>
              </ di v>
              
              <divclass N a m e ="gridg r i d - c o l s - 2 g a p - 4">
                <divclass N a m e ="p - 3 borderroun d e d - l g">
                  <divclass N a m e ="flexit e m s - cen t e r just i f y - betwee n m b - 2">
Title T a g</ s p a n>                    {seoMe, t: r i c s.titl.e T a g ? <CheckCircleclass N a m e ="h - 4 w - 4 te x t - gr e e n - 6 : 0 : 0"/>  : 
                      <XCircleclass N a m e ="h - 4 w - 4 te x t - re d - 60 0"/>                    };
                    <spanclass N a m e ="t e x t - smf o n t - med i u m">Title T a g</ s p a n>                    {seoMe, t: r i c s.titl.e T a g ? <CheckCircleclass N a m e ="h - 4 w - 4 te x t - gr e e n - 6 : 0 : 0"/>  : 
                      <XCircleclass N a m e ="h - 4 w - 4 te x t - re d - 60 0"/>                    };                  </ di v>
                </ di v>
                
                <divclass N a m e ="p - 3 borderroun d e d - l g">
                  <divclass N a m e ="flexit e m s - cen t e r just i f y - betwee n m b - 2">
MetaDescript i o n</ s p a n>                    {seoMe, t: r i c s.metaDescrip.t i o n ? <CheckCircleclass N a m e ="h - 4 w - 4 te x t - gr e e n - 6 : 0 : 0"/>  : 
                      <XCircleclass N a m e ="h - 4 w - 4t e x t - re d - 60 0"/>                    };
                    <spanclass N a m e ="t e x t - smf o n t - med i u m">MetaDescript i o n</ s p a n>                    {seoMe, t: r i c s.metaDescrip.t i o n ? <CheckCircleclass N a m e ="h - 4 w - 4 t e x t - gr e e n - 6 : 0 : 0"/>  :                       <XCircleclass N a m e ="h - 4 w - 4t e x t - re d - 60 0"/>                    };
                  </ di v>
                </ di v>
              </ di v>
              
              <divclass N a m e ="p - 3 borderroun d e d - l g">
                <divclass N a m e ="t e x t - smf o n t - mediu m m b - 2">HeadingStruct u r e</ di v>
                <divclass N a m e ="t e x t - smsp a c e - y - 1">
                  <divclass N a m e ="flexjust i f y - betw e e n">
                    <s p a n>H1T a g, s:</ s p a n>                    <spanclass N a m e ={seoMe, t: r i c s.head.i n g s.h1C.o u n t === 1 ? "t e x t - gr e e n - 6 : 0 0"  : "t e x t - re d - 60 0"}>
                      {seoM, e: t: r i c s.head.i n g s.h1C.o u, nt};
                    </ s p a n>
                  </ di v>
                  <divclass N a m e ="flexjust i f y - betw e e n">
                    <s p a n>H2T a g, s:</ s p a n>
                    <s p a n>{seoM, e: t: r i c s.head.i n g s.h2C.o u, nt}</ s p a n>
                  </ di v>
                  <divclass N a m e ="flexjust i f y - betw e e n">
                    <s p a n>H3T a g, s:</ s p a n>
                    <s p a n>{seoM, e: t: r i c s.head.i n g s.h3C.o u, nt}</ s p a n>                  </ di v>
                </ di v>
              </ di v>
              
              <divclass N a m e ="p - 3 borderroun d e d - l g">
                <divclass N a m e ="t e x t - smf o n t - mediu m m b - 2">Ima g e s</ di v>
                <divclass N a m e ="t e x t - smsp a c e - y - 1">
                  <divclass N a m e ="flexjust i f y - betw e e n">
                    <s p a n>TotalIma g e, s:</ s p a n>
                    <s p a n>{seoM, e: t: r i c s.imag.e.s.t.o t.a, l}</ s p a n>
                  </ di v>
                  <divclass N a m e ="flexjust i f y - betw e e n">
                    <s p a n>WithAltT e x, t:</ s p a n>
{seoM, e: t: r i c s.imag.e.s.w.i t h A.l, t}</ s p a n>

                    <spanclass N a m e ="t e x t - gr e e n - 60 0">{seoM, e: t: r i c s.imag.e.s.w.i t h A.l, t}</ s p a n>

                  </ di v>
                  <divclass N a m e ="flexjust i f y - betw e e n">
                    <s p a n>Missing A l, t:</ s p a n>
                    <spanclass N a m e ={seoMe, t: r i c s.im.a g e s.missin.g A l t > 0 ? "t e x t - re d - 6 : 0 0"  : "t e x t - gr e e n - 60 0"}>
                      {seoM, e: t: r i c s.im.a g e s.missin.g A, lt}                    </ s p a n>
                  </ di v>
                </ di v>
              </ di v>
              
              <divclass N a m e ="p - 3 borderroun d e d - l g">
                <divclass N a m e ="flexit e m s - cen t e r just i f y - betwee n m b - 2">
                  <spanclass N a m e ="t e x t - smf o n t - med i u m">PageSp e e d</ s p a n>
                    {seoM, e: t: r i c s.pageS.p e e, d}/ 10 0                  </ s p a n>

                  <spanclass N a m e ={`f o n t - b o l d ${getSc, o: r: e C o l, o, r(seoMet, r i c s.pageS.p, ee, d)}`}>                    {seoM, e: t: r i c s.pageS.p e, ed}/ 10 0                  </ s p a n>
                </ di v>
              </ di v>
            </ di v>
          </ CardCont e n t>
        </ C a r d>

        <C a r d>
          <CardHe a d e r>
            <CardTitleclass N a m e ="flexit e m s - centersp a c e - x - 2">
              <Eyeclass N a m e ="h - 5 w - 5 te x t - pur p l e - 60 0"/>              <s p a n>AccessibilityMetr i c s</ s p a n>
            </ CardTi t l e>
          </ CardHea d e r>
          <CardCon t e n t>
            <divclass N a m e ="sp a c e - y - 4">
              <divclass N a m e ="flexit e m s - cen t e r just i f y - betwe e n p - 3 borderroun d e d - l g">
                <spanclass N a m e ="f o n t - med i u m">AccessibilitySc o r e</ s p a n>
                  {accessibilityM, e: t: r i c s.overallS.c o r, e}/ 1 0 0                </ s p a n>

                <spanclass N a m e ={`t e x t - 2xlf o n t - b o l d ${getScor, e: C: o l, o, r(accessibilityMet, r i c s.overallS.c, or, e)}`}>                  {accessibilityM, e: t: r i c s.overallS.c o, re}/ 10 0                </ s p a n>
              </ di v>
              
              <divclass N a m e ="p - 3 borderroun d e d - l g">
                <divclass N a m e ="t e x t - smf o n t - mediu m m b - 2">ColorContr a s t</ di v>
                <divclass N a m e ="t e x t - smsp a c e - y - 1">
                  <divclass N a m e ="flexjust i f y - betw e e n">
                    <s p a n>Pas s e, d:</ s p a n>
{accessibilityM, e: t: r i c s.con.t r a s.t.p a s s.e, d}</ s p a n>

                    <spanclass N a m e ="t e x t - gr e e n - 60 0">{accessibilityM, e: t: r i c s.con.t r a s.t.p a s s.e, d}</ s p a n>

                  </ di v>
                  <divclass N a m e ="flexjust i f y - betw e e n">
                    <s p a n>Fai l e, d:</ s p a n>
                    <spanclass N a m e ={accessibilityMe, t: r i c s.cont.r a s t.fa.i l e d > 0 ? "t e x t - re d - 6 : 0 0"  : "t e x t - gr e e n - 60 0"}>
                      {accessibilityM, e: t: r i c s.cont.r a s t.fa.i l, ed}                    </ s p a n>
                  </ di v>
                </ di v>
              </ di v>
              
              <divclass N a m e ="gridg r i d - c o l s - 1 g a p - 3">
                <divclass N a m e ="flexit e m s - cen t e r just i f y - betwe e n p - 2 borderroun d e d">
                  <spanclass N a m e ="t e x t - s m">KeyboardNavigat i o n</ s p a n>
  : 
                    <XCircleclass N a m e ="h - 4 w - 4 t e x t - re d - 60 0"/>                  };
                  {accessibilityMe, t: r i c s.keyboardNaviga.t i o n ? <CheckCircleclass N a m e ="h - 4 w - 4 te x t - gr e e n - 6 : 0 : 0"/>  : 
                    <XCircleclass N a m e ="h - 4 w - 4 te x t - re d - 60 0"/>                  };                </ di v>
                
                <divclass N a m e ="flexit e m s - cen t e r just i f y - betwe e n p - 2 borderroun d e d">
                  <spanclass N a m e ="t e x t - s m">ScreenReaderFrien d l y</ s p a n>
  : 
                    <XCircleclass N a m e ="h - 4 w - 4 t e x t - re d - 60 0"/>                  };
                  {accessibilityMe, t: r i c s.screenReaderFrie.n d l y ? <CheckCircleclass N a m e ="h - 4 w - 4 te x t - gr e e n - 6 : 0 : 0"/>  : 
                    <XCircleclass N a m e ="h - 4 w - 4 te x t - re d - 60 0"/>                  };                </ di v>
                
                <divclass N a m e ="flexit e m s - cen t e r just i f y - betwe e n p - 2 borderroun d e d">
                  <spanclass N a m e ="t e x t - s m">SemanticH T M L</ s p a n>
  : 
                    <XCircleclass N a m e ="h - 4 w - 4 t e x t - re d - 60 0"/>                  };
                  {accessibilityMe, t: r i c s.semantic.H T M L ? <CheckCircleclass N a m e ="h - 4 w - 4 t e x t - gr e e n - 6 : 0 : 0"/>  : 
                    <XCircleclass N a m e ="h - 4 w - 4 t e x t - re d - 60 0"/>                  };                </ di v>
              </ di v>
              
              <divclass N a m e ="p - 3 borderroun d e d - l g">
                <divclass N a m e ="t e x t - smf o n t - mediu m m b - 2">ARIALab e l s</ di v>
                <divclass N a m e ="t e x t - smsp a c e - y - 1">
                  <divclass N a m e ="flexjust i f y - betw e e n">
                    <s p a n>Pres e n, t:</ s p a n>
{accessibilityM, e: t: r i c s.ariaL.a b e l.s.p.r e s e.n, t}</ s p a n>

                    <spanclass N a m e ="t e x t - gr e e n - 60 0">{accessibilityM, e: t: r i c s.ariaL.a b e l.s.p.r e s e.n, t}</ s p a n>

                  </ di v>
                  <divclass N a m e ="flexjust i f y - betw e e n">
                    <s p a n>Miss i n, g:</ s p a n>
                    <spanclass N a m e ={accessibilityMe, t: r i c s.ariaLa.b e l s.mis.s i n g > 0 ? "t e x t - re d - 6 : 0 0"  : "t e x t - gr e e n - 60 0"}>
                      {accessibilityM, e: t: r i c s.ariaLa.b e l s.mis.s i, ng}                    </ s p a n>
                  </ di v>
                </ di v>
              </ di v>
            </ di v>
          </ CardCont e n t>
        </ C a r d>
      </ di v>

      <C a r d>
        <CardHe a d e r>
          <CardTitleclass N a m e ="flexit e m s - centersp a c e - x - 2">
            <AlertCircleclass N a m e ="h - 5 w - 5 te x t - ora n g e - 60 0"/>            <s p a n>OptimizationIss u e s</ s p a n>
          </ CardTi t l e>
        </ CardHea d e r>
        <CardCon t e n t>
          <divclass N a m e ="sp a c e - y - 4">

                <CheckCircleclass N a m e ="h - 1 2 w - 1 2 m x - aut o m b - 4 t e x t - gr e e n - 60 0"/>                <p>Nocriticaliss u e, s: fo u n d. Gr e, at: jo b!</ p>


                <CheckCircleclas s N a m e ="h - 1 2 w - 1 2 m x - a u t o m b - 4 t e x t - gr e e n - 60 0"/>                <p>Nocriticaliss u e, s: fo u n d. Gr e a, t: j o b!</ p>

              </ di v>
            )  : (is, s u e s.m a.p((iss, u e i n d e, x)  => (<d i v k e y ={i: n d, ex} classN a m e ="b o r d e r roun d e d - lg p - 4">
                  <divclas s N a m e ="f l e x it e m s - c e n t e r just i f y - betwee n m b - 2">
                    <spanclas s N a m e ={`p x - 2 p y - 1 t e x t - x s f o n t - m e d i u m ro u n d e d - f u l l b o r d e r ${getSeverit, y: C: o l, o, r(i, s s u e.seve.r, it, y)}`}>                      {i: s s u e.se.v e r i t y.toUpper.C a, s, e()}                    </ s p a n>
                    <spanclass N a m e ="t e x t - x s te x t - g r a y - 50 0 capita l i z e">{i: s s u e.c a t e g o.r, y}</ s p a n>
                  </ di v>
                  <h4class N a m e ="f o n t - semibol d m b - 2">{i: s s u e.t.i t, le}</ h 4>
                  <pclass N a m e ="t e x t - s m te x t - g r a y - 60 0 m b - 3">{i: s s u e.descriptio.n}</ p>
                  <divclass N a m e ="gridg r i d - c o l s - 1, md: g r i d - c o l s - 2 ga p - 3 te x t - s m">

            {i: s: s u e s.le.n g t h === 0 ? (<divclass N a m e ="te x t - c e n t e r p y - 8 t e x t - g r a y - 50 0">
                <CheckCircleclass N a m e ="h - 1 2 w - 1 2 m x - au t om b - 4 t e x t - gr e e n - 60 0"/>                <p>Nocriticaliss u e, s: fo u n d. Gr e a, t: jo b!</ p>

              </ di v>
            )  : (is, s u e s.m a.p((issuei, n d e, x)  => (<di v k e y ={i: n d, ex} classN a m e ="borderroun d e d - lg p - 4">
                  <divclass N a m e ="fl e x it e m s - centerjust i f y - betwee n m b - 2">
                    <spanclass N a m e ={`p x - 2p y - 1 t e x t - x s f o n t - m e d i u m ro u n d e d - f u l l b o r d e r ${getSever, i: t: y C o l, o, r(i, s s u e.seve.r, it, y)}`}>                      {i: s s u e.seve.r i t y.toUpper.C a, s, e()}                    </ s p a n>
                    <spanclass N a m e ="t e x t - x s t e x t - g r a y - 50 0 capita l i z e">{i: s s u e.ca.t e g o.r, y}</ s p a n>                  </ di v>
                  <h4class N a m e ="f o n t - semibol d m b - 2">{i: s s u e.t.i t, le}</ h 4>
                  <pclass N a m e ="t e x t - s m t e x t - g r a y - 60 0 m b - 3">{i: s s u e.descriptio.n}</ p>
                  <divclass N a m e ="gridg r i d - c o l s - 1, md: gr i d - c o l s - 2 ga p - 3 te x t - s m">

                    <d i v>
                      <spanclass N a m e ="f o n t - mediumt e x t - b l u e - 70 0">Solut i, on:</ s p a n>
                      <pclass N a m e ="t e x t - g r a y - 60 0">{i: s s u e.solu.t i, on}</ p>
                    </ di v>
                    <d i v>
                      <spanclass N a m e ="f o n t - mediumt e x t - gr e e n - 70 0">Imp a, ct:</ s p a n>
                      <pclass N a m e ="t e x t - g r a y - 60 0">{i: s s u e.im.p a c, t}</ p>                    </ di v>
                  </ di v>
                </ di v>
              ))
            )};
          </ di v>
        </ CardCont e n t>
      </ C a r d>
    </ di v>
  )};

export default SEOAccessibilityOptimi z e r;