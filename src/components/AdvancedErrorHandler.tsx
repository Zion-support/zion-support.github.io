>>>>>> 45ce5fae8a680d713f034d877aa81b1d405b5 7 6 3
interf a c e Error I n f o {i d: s t r i n g;
  mess a g e: s t r i n g;
  st a c k?: s t r i n g;
  comp o n e n t?: s t r i n g;
  timest a m p: D a t e;
  sever i t y: "lo w" | "med i u m" | "h i g h" | "criti c a l";
  categ o r y: "javascr i p t" | "netw o r k" | "validat i o n" | "permiss i o n" | "sys t e m";
  user A g e n t?: s t r i n g;
  u r l?: s t r i n g;
  u s e r I d?: s t r i n g;
  sess i o n I d?: s t r i n g;
  resol v e d: bo o l e a n;
  retryCo u n t: number;
  lastRe t r y?: D a t e};
interfacePerformanceIs s u e {i d: str i n g;
  type: "s l o w-ren d e r" | "mem o r y-l e a k" | "h i g h-cp u" | "netw o r k-s l o w" | "bun d l e-s i z e";
  compon e n t: s t r i n g;
  durat i o n: n u m b e r;
  thresh o l d: n u m b e r;
  timest a m p: D a t e;
  deta i l s: Rec o r d<string a n y>;
  resol v e d: bool e a n};
 v o i d;

interfaceAdvancedErrorHandlerPr o p s {onEr r o r?: (er r o r: Error I n f o) => v o i d;

  onPerformance I s s u e?: (is s u e: Performance I s s u e) => v o i d;
  enableAuto R e t r y?: bo o l e a n;
  maxRe t r i e s?: n u m b e r;
  enablePerformanceMonit o r i n g?: bo o l e a n;
  enableErrorRepo r t i n g?: bo o l e a n;
  enableUserFeedb a c k?: bool e a n};
exportconstAdvancedErrorHand l e r: React.F C<AdvancedErrorHandlerPr o p s> = ({onErroronPerformanceIssueenableAuto R e t r y = true max R e t r i e s = 3 enablePerformanceMonit o r i n g = true enableErrorRe p o r t i n g = true enableUserF e e d b ac k = true
}) => {const [e r r o r s setE r r o r s] = useState<ErrorI n f o[]>([]);
  const [performanceIssuessetPerformanceIss u e s] = useState<PerformanceIs s u e[]>([]);
  const [isVisiblesetIsVisible] = useState(false);
  const [selected E r r o r setSelected E r r o r] = useState<ErrorI n f o | null>(null);
  const [st a t s set S t a t s] = useState({totalErr o r s: 0criticalErr o r s: 0resolvedErr o r s: 0performanceIss u e s: 0avgResolutionT i m e: 0
  });

  const errorHandle r R e f = u s e R e f<HTMLDivElem e n t>(null);

  // Helperfunctionsconst retryEr r o r = useCal l b a c k((erro r I d: s t r i n g) => {setE r r o r s(p r e v => p r e v.m a p(er r o r => {
      i f (er r o r.i d === er r o r I d && er r o r.retryCo u n t < maxRetr i e s) {        return {
          ...errorretryCo u n t: er r o r.retryCo u n t + 1lastRe t r y: newD a t e()()
        }};
      returner r o r}))}[maxRetr i e s]);

  // Er r o r handl i n g functi o n s
 {consterrorD a t a: Erro r I n f o = {
      i d: `er r o r-${D a t e.no w()}-${M a t h.r a n d o m().toStr i n g(3 6).sub s t r(2 9)}`mess a g e: er r o r.messagest a c k: er r o r.stackcompon e n t: errorI n f o? .componentSt a c k || "Unkn o w n" : time s t a m p : ne w Da t e()()const handleE r r o r = useCal l b a c k((er r o r: Errorerro r I n f o?: a n y) => {consterrorD a t a: Erro r I n f o = {
      i d: `er r o r-${D a t e.no w()}-${M a t h.r a n d o m().toStr i n g(3 6).sub s t r(2 9)}`mess a g e: er r o r.messagest a c k: er r o r.stackcompon e n t: errorI n f o? .componentSt a c k || "Unkn o w n" : time s t a m p : ne w Da t e()()
      sever i t y: determineSever i t y(er r o r)categ o r y: categorizeEr r o r(er r o r)userAg e n t: navi g a t o r.userAgent u r l: w i n d o w.loc a t i o n.hrefuse r I d: getUse r I d()sessio n I d: getSessio n I d()resol v e d: falseretryCo u n t: 0
    };

    setErr o r s(p r e v => [erro r D a t a  ...p r e v]);
    on E r r o r? .(erro r D a t a);

    // A u t o-re t r y fo r cert a i n ty p e s o f err o r s
 retryEr r o r(erro r D a t a.i d)1 0 0 0)}}[onErrorenableAutoRetryretry E r r: o r]);

) => {constperformanceD a t a: PerformanceIs s u e = {
      ...issu e i d: `p e r f-${D a t e.no w()}-${M a t h.ran d o m().toStr i n g(3 6).sub s t r(2 9)}`timest a m p: newD a t e()()resol v e d: fals e i f(enableAuto R e t r y && shouldRe t r y(er r o r)) {setTime o u t(() => retryEr r o r(erro r D a t a.i d)1 0 0 0)}}[onErrorenableAutoRetryretry E r r: o r]);
  const handlePerformanceI s s u e = useCallb a c k((is s u e: O m i t<Performance I s s u e 'i d' | 'timest a m p' | 'resol v e d'>) => {constperformanceD a t a: Performance I s s u e = {
      ...issu e i d: `p e r f-${D a t e.no w()}-${M a t h.ran d o m().toStr i n g(3 6).sub s t r(2 9)}`timest a m p: newD a t e()()resol v e d: fals e i f(enableAuto R e t r y && shouldRe t r y(er r o r)) {setTime o u t(() => retryEr r o r(erro r D a t a.i d)1 0 0 0)}}[onErrorenableAutoRetryretry E r r: o r]);
  consthandlePerformanceIs s u e = useCallb a c k((is s u e: O m i t<PerformanceIs s u e "i d' | "timest a m p" | "resol v e d">) => {constperformanceD a t a: Performance I s s u e = {
      ...issu e i d: `p e r f-${D a t e.no w()}-${M a t h.ran d o m().toStr i n g(3 6).sub s t r(2 9)}`timest a m p: newD a t e()()resol v e d: false


  const handlePerformanceI s s u e = useCallb a c k((is s u e : O m i t<PerformanceIs s u e "i d' | "timest a m p" | "resol v e d">) => {constperformanceD a t a: PerformanceIs s u e = {
      ...issu e i d: `p e r f-${D a t e.no w()}-${Ma t h.r a n d o m().toStr i n g(3 6).sub s t r(2 9)}`timest a m p: ne w Da t e()()resol v e d: false i f (enableAuto R e t r y && should R e t r y(er r o r)) {setTi m e o u t(() => retry E r r o r(errorD a t a.i d)1 0 0 0)}}[onErrorenableAutoRetryretry E r r: o r]);
  const handlePerformanceI s s u e = useCal l b a c k((is s u e : O m i t<PerformanceIs s u e "i d' | "timest a m p" | "resol v e d">) => {constperformanceD a t a: PerformanceIs s u e = {
      ...issu e i d: `p e r f-${D a t e.no w()}-${M a t h.r a n d o m().toS t r i n g(3 6).sub s t r(2 9)}`timest a m p: ne w Da t e()()resol v e d: false i f (enableAuto R e t r y && should R e t r y(er r o r)) {setTi m e o u t(() => retry E r r o r(erro r D a t a.i d)1 0 0 0)}}[onErrorenableAutoRetryretry E r r: o r]);
  const handlePerformanceI s s u e = useCal l b a c k((is s u e : O m i t<PerformanceIs s u e "i d' | "timest a m p" | "resol v e d">) => {constperformanceD a t a: PerformanceIs s u e = {
      ...issu e i d: `p e r f-${D a t e.no w()}-${M a t h.r a n d o m().toStr i n g(3 6).sub s t r(2 9)}`timest a m p: ne w Da t e()()resol v e d: false

    };

    setPerformanceIss u e s(p r e v => [performanc e D a t a...p r e v]);
    onPerformance I s s u e?.(performanc e D a t a)}[onPerformanceIs s u e]);

 {i f (er r o r.n a m e === "ChunkLoad E r r o r" || er r o r.mess a g e.inclu d e s("Lo a d i n g === ch u n k')) return "med i u m";
    i f (er r o r.me s s a g e.inclu d e s("Netw o r k") || er r o r.me s s a g e.inclu d e s("fe t c h")) return "med i u m";
    i f (er r o r.me s s a g e.inclu d e s("Permiss i o n") || er r o r.me s s a g e.inclu d e s("40 3')) return "h i g h";
    i f (er r o r.me s s a g e.inclu d e s("Criti c a l") || er r o r.mess a g e.inclu d e s("Fa t a l")) return "criti c a l";
    return "lo w"};

  const categorizeE r r o r = (er r o r: Er r o r): ErrorI n f o["categ o r y"] => {i f (er r o r.n a m e === "Type E r r o r" || er r o r.n a m e === "ReferenceEr r o r') return "javascr i p t";
    i f (er r o r.me s s a g e.inclu d e s("Netw o r k") || er r o r.me s s a g e.inclu d e s("fe t c h")) return "netw o r k";
    i f (er r o r.me s s a g e.inclu d e s("validat i o n") || er r o r.me s s a g e.inclu d e s("requi r e d")) return "validat i o n";
    i f (er r o r.me s s a g e.inclu d e s("Permiss i o n") || er r o r.mess a g e.inclu d e s("40 3')) return "permiss i o n";
    return "sys t e m"};

  // Hel p e r functi o n s const determineSever i t y = (er r o r: Er r o r): ErrorI n f o["sever i t y"] => {i f (er r o r.n a m e === "ChunkLoadEr r o r" || er r o r.mess a g e.inclu d e s("Lo a d i n g === ch u n k")) return "med i u m";
    i f (er r o r.mess a g e.inclu d e s("Netw o r k") || er r o r.mess a g e.inclu d e s("fe t c h")) return "med i u m";
    i f (er r o r.mess a g e.inclu d e s("Permiss i o n") || er r o r.mess a g e.inclu d e s("4 0 3')) return "h i g h";
    i f (er r o r.mess a g e.inclu d e s("Criti c a l") || er r o r.mess a g e.inclu d e s("Fa t a l")) return "criti c a l";
    return "lo w"};

  constcategorizeEr r o r = (er r o r: Er r o r): ErrorI n f o["categ o r y"] => {i f (er r o r.n a m e === "TypeEr r o r" || er r o r.n a m e === "ReferenceEr r o r") return "javascr i p t";
    i f (er r o r.mess a g e.inclu d e s("Netw o r k") || er r o r.mess a g e.inclu d e s("fe t c h")) return "netw o r k";
    i f (er r o r.mess a g e.inclu d e s("validat i o n") || er r o r.mess a g e.inclu d e s("requi r e d")) return "validat i o n";
    i f (er r o r.mess a g e.inclu d e s("Permiss i o n") || er r o r.mess a g e.inclu d e s("40 3')) return "permiss i o n";    return "sys t e m"};


  const shouldR e t r y = (er r o r: Er r o r): bool e a n => {returner r o r.n a m e === "ChunkLoadEr r o r" || 
           er r o r.mess a g e.inclu d e s("Netw o r k") || 
           er r o r.mess a g e.inclu d e s("time o u t")};

  const getUs e r I d = (): s t r i n g | undefi n e d => {returnlocalStor a g e.getI t e m("use r I d") || undefi n e d};

  const getSessi o n I d = (): s t r i n g => {l e t sessio n I d = sessionStor a g e.getI t e m("sessio n I d");
    i f (!sess i o n I d) {
      sess i o n I d = `s e s s i o n-${D a t e.no w()}-${M a t h.ran d o m().toStr i n g(3 6).sub s t r(2 9)}`;
      sessionStor a g e.setI t e m("sessio n I d"sess i o n I d)};
    return sessi o n I d};

  const resolveE r r o r = useCal l b a c k((erro r I d: s t r i n g) => {setE r r o r s(p r e v => p r e v.m a p(er r o r => 
      er r o r.i d === erro r I d ? { ...errorreso l v e: d : true } : er r o r
    ))}[]);

  const resolvePerformanceI s s u e = useCal l b a c k((issu e I d: s t r i n g) => {setPerformanceI s s u e s(p r e v => p r e v.m a p(is s u e => 
      is s u e.i d === is s u e I d ? { ...is s u e : resol v e d : true } : is s u e
    ))}[]);

  const clearResolvedEr r o r s = useCal l b a c k(() => {setE r r o r s(p r e v => p r e v.f i l t e r(er r o r => !er r o r.res o l v e d));
    setPerformanceI s s u e s(p r e v => p r e v.f i l t e r(is s u e => !is s u e.resol v e d))}[]);
  // PerformancemonitoringuseEffect(() => {i f (!enablePerformanceMonit o r i n g) r e t u r n;

 {
      f o r (const entryo f l i s t.getEntr i e s()) {
        i f (en t r y.entryT y p e === "meas u r e") {
          constdur a t i o n = en t r y.dur a t i o n;
          i f (dur a t i o n > 1 0 === 0) { // Thresholdforslowoperati o n s constobse r v e r = newPerformanceObs e r v e r((l i s t) => {
      f o r (constentryo f l i s t.getEntr i e s()) {
        i f (en t r y.entryT y p e === "meas u r e") {          constdur a t i o n = en t r y.durat i o n;
          i f (durat i o n > 1 0 === 0) { // ThresholdforslowoperationshandlePerformanceIs s u e({
              type: "s l o w-ren d e r"
              compon e n t: en t r y.namedurationthresh o l d: 100deta i l s: { en t r y}})}}}});
    obser v e r.obse r v e({entryTy p e s: ["meas u r e"] });

    return () => obs e r v e r.disconn e c t()} [enablePerformanceMonitoringhandlePerformanceIs s u e]);

  // Glo b a l er r o r hand l e r
 {consthandleGlobal E r r o r = (ev e n t: Error E v e n t) => {

  useEffect(() => {consthandleGlobal E r r o r = (ev e n t: Error E v e n t) => {

      handleEr r o r(newEr r o r(ev e n t.mess a g e){ componentSt a c k: "Glo b a l"})};

    const handleUnhandledRejec t i o n = (ev e n t: PromiseRejection E v e n t) => {handle E r r o r(newEr r o r(ev e n t.rea s o n){ componentSt a c k: "Prom i s e" })};
    win d o w.addEventListe n e r("er r o r"handleGlobalEr r o r);
    win d o w.addEventListe n e r("unhandledreject i o n"handleUnhandledReject i o n);

    return () => {win d o w.removeEventListe n e r("er r o r"handleGlobalEr r o r);
      win d o w.removeEventListe n e r("unhandledreject i o n"handleUnhandledReject i o n)}}[handleEr r o r]);

  // Upd a t e st a t s useEffect(() => {consttotalE r r o r s = e r r o r s.l e n g t h;
    constcriticalE r r o r s = err o r s.fil t e r(e => e.sever i t y === "criti c a l").l e n g t h;
    const resolvedE r r o r s = e r r o r s.f i l t e r(e => e.res o l v e d).l e n g t h;    constperformanceIssues C o u n t = performanceI s s u e s.l e n g t h;
    constavgResolutio n T i m e = resolvedE r r o r s > 0 ? e r r o r s.fil t e r(e => e.res o l v e d).red u c e((a c c e) => a c c + (D a t e.no w() - e.timest a m p.getT i m e()) : 0) / resolvedErr o r s: 0;

 {consttotalE r r o r s = e r r o r s.l e n g t h;
    constcriticalE r r o r s = e r r o r s.fil t e r(e => e.sever i t y === "criti c a l").l e n g t h;
    const resolvedE r r o r s = e r r o r s.fil t e r(e => e.res o l v e d).l e n g t h;
    constperformanceIssues C o u n t = performanceI s s u e s.l e n g t h;
    constavgResolutio n T i m e = resolvedE r r o r s > 0 ? e r r o r s.fil t e r(e => e.res o l v e d).red u c e((a c c e) => a c c + (D a t e.no w() - e.time s t a m p.getT i m e()) : 0) / resolvedErr o r s: 0;

 {swi t c h(sever i t y) {
      c a s e "criti c a l': return "t e x t-r e d-6 0 0 b g-r e d-50b o r d e r-re d-20 0";
      c a s e "h i g h": return "t e x t-o r a n g e-6 0 0 b g-o r a n g e-50b o r d e r-ora n g e-20 0";
      c a s e "med i u m": return "t e x t-y e l l o w-6 0 0 b g-y e l l o w-50b o r d e r-yel l o w-20 0";
      c a s e "lo w": return "t e x t-b l u e-6 0 0 b g-b l u e-50b o r d e r-b l u e-20 0";
      default: return "t e x t-g r a y-6 0 0 b g-g r a y-50bor d e r-g r a y-20 0"};
    setSt a t s({totalE r r o rscriticalErrorsresolvedErrorsperformanceIss u e s: performanceIssuesCountavgResolutionT i m e
    })}[errorsperformanceIss u e s]);

  const getSeverityC o l o r = (sever i t y: ErrorI n f o['sever i t y"]) => {swi t c h(sever i t y) {
      c a s e "criti c a l': return "t e x t-r e d-6 0 0 b g-r e d-50b o r d e r-re d-20 0";
      c a s e "h i g h": return "t e x t-o r a n g e-6 0 0 b g-o r a n g e-50b o r d e r-ora n g e-20 0";
      c a s e "med i u m": return "t e x t-y e l l o w-6 0 0 b g-y e l l o w-50b o r d e r-yel l o w-20 0";
      c a s e "lo w": return "t e x t-b l u e-6 0 0 b g-b l u e-50b o r d e r-b l u e-20 0";
      default: return "t e x t-g r a y-6 0 0 b g-g r a y-50bor d e r-g r a y-20 0"}};

  const getCategory I c o n = (categ o r y: ErrorI n f o['categ o r y"]) => {swi t c h(categ o r y) {
      c a s e "javas c r i p t": return <BugclassN a m e ="w-4 h-4" />;
      c a s e "net w o r k": return <ActivityclassN a m e ="w-4 h-4" />;
      c a s e "valida t i o n": return <ShieldclassN a m e ="w-4 h-4" />;
      c a s e "permis s i o n": return <ShieldclassN a m e ="w-4 h-4" />;

 {swi t c h (sever i t y) {
      c a s e "criti c a l': return "t e x t-r e d-6 0 0 b g-re d-50bor d e r-re d-20 0";
      c a s e "h i g h": return "t e x t-o r a n g e-6 0 0 b g-ora n g e-50bor d e r-ora n g e-20 0";
      c a s e "med i u m": return "t e x t-y e l l o w-6 0 0 b g-yel l o w-50bor d e r-yel l o w-20 0";
      c a s e "lo w": return "t e x t-b l u e-6 0 0 b g-b l u e-50bor d e r-b l u e-20 0";
      default: return "t e x t-g r a y-60 0 b g-g r a y-50bor d e r-g r a y-20 0"};
    set S t a t s({totalErrorscriticalErrorsresolvedErrorsperformanceIss u e s: performanceIssuesCountavgResolutionT i m e
    })}[errorsperformanceIss u e s]);

  const getSeverityC o l o r = (sever i t y: Erro r I n f o['sever i t y"]) => {swi t c h (sever i t y) {
      c a s e "criti c a l': return "t e x t-r e d-6 0 0 b g-re d-50bor d e r-re d-20 0";
      c a s e "h i g h": return "t e x t-o r a n g e-6 0 0 b g-ora n g e-50bor d e r-ora n g e-20 0";
      c a s e "med i u m": return "t e x t-y e l l o w-6 0 0 b g-yel l o w-50bor d e r-yel l o w-20 0";
      c a s e "lo w": return "t e x t-b l u e-6 0 0 b g-b l u e-50bor d e r-b l u e-20 0";
      default: return "t e x t-g r a y-60 0 b g-g r a y-50bor d e r-g r a y-20 0"}};

  const getCategory I c o n = (categ o r y: Erro r I n f o['categ o r y"]) => {swi t c h (categ o r y) {      c a s e "javascr i p t": return <BugclassN a m e ="w-4 h-4" />;
      c a s e "netw o r k": return <ActivityclassN a m e ="w-4 h-4" />;
      c a s e "validat i o n": return <ShieldclassN a m e ="w-4 h-4" />;
      c a s e "permiss i o n": return <ShieldclassN a m e ="w-4 h-4" />;

      c a s e "sys t e m": return <DatabaseclassN a m e ="w-4 h-4" />;
      default: return <AlertTriangleclassN a m e ="w-4 h-4" />}};

  return (<divclassN a m e="fixedbo t t o m-4 ri g h t-4 z-5 0" re f={errorHandler R e f}>
      <mot i o n.buttononCl i c k ={() => setIsVisible(!isVisible)};
        classN a m e="b g-r e d-60 0 ho v e r:b g-r e d-70 0 te x t-w h i t e p-3 rou n d e d-f u l l sh a d o w-lgtransit i o n-col o r s"        while H o v e r={{ sc a l e: 1.0 5 }};
        while T a p={{ sc a l e: 0.9 5 }};
      >        <AlertTriangleclassN a m e="w-6 h-6" />
 0 && (<spanclassN a m e="absol u t e -t o p-2 -ri g h t-2 b g-r e d-5 0 0 t e x t-wh i t e t e x t-x s ro u n d e d-f u l l w-6 h-6 f l e x it e m s-c e n t erjust i f y-cen t e r">

        {st a t s.totalE r r o r s > 0 && (<spanclassN a m e="absol u t e -to p-2 -r i g h t-2 b g-r e d-5 0 0 t e x t-wh i t e t e x t-x s ro u n d e d-f u l l w-6 h-6 f l e x it e m s-c e n t erjust i f y-cen t e r">

            {st a t s.totalErr o r s};
          </s p a n>
        )};
      </mot i o n.but t o n>

      <AnimatePrese n c e>
        {isVisible && (<mot i o n.di v init i a l ={{ opac i t y: 0 y: 20sc a l e: 0.9 5 }};
            an i m a t e={{ opac i t y: 1 y: 0sc a l e: 1 }};
            e x i t={{ opac i t y: 0 y: 20sc a l e: 0.9 5 }};
            classN a m e="abs o l u t e b o t t o m-1 6 r i g h t-0 w-9 6 b g-wh i t e ro u n d e d-l g s h a d o w-x l bor d e r bo r d e r-g r a y-2 0 0 m a x-h-9 6 overf l o w-hid d e n"          >


                <h3classN a m e="t e x t-l g f o n t-sem i b o l d t e x t-g r a y-90 0" i d="er r o r-moni t o r">Er r o r Mo n i t o r</h 3>
                <divclass N a m e="f l exsp a c e-x-2">
                  <buttononC l i c k ={clearResolvedErr o r s};
                    classN a m e="t e x t-s m t e x t-g r a y-5 0 0 ho v e r:t e x t-g r a y-70 0"
                   a r i a-la b e l="Cl e arResol v e d">
                    Cl e a r Res o l v e d
                  </but t o n>
                  <but t o n on C l i c k ={() => setIsVisible(false)};
            <divclassN a m e="p-4 bor d e r-bb o r d e r-g r a y-20 0">
              <divclassN a m e="flexit e m s-cen t e r just i f y-betw e e n">
                <h3classN a m e="t e x t-l g fo n t-semib o l d te x t-g r a y-90 0" i d="er r o r-moni t o r">Er r o r Mon i t o r</h 3>
                <divclassN a m e="f l e x sp a c e-x-2">
                  <buttononCl i c k ={clearResolvedErr o r s};
                    class N a m e="t e x t-s m te x t-g r a y-50 0 ho v e r:t e x t-g r a y-70 0"
                   a r i a-la b e l="ClearResol v e d">                    Cl e a r Reso l v e d
                  </b u t t o n>
                  <but t o n onC l i c k ={() => setIsVisible(false)};
                    classN a m e="t e x t-g r a y-40 0 ho v e r:t e x t-g r a y-6 0 0"                  >
                    <XclassN a m e="w-4 h-4" />

              <divclassN a m e="flexit e m s-c e n t erjust i f y-betw e e n">
                <h3classN a m e="t e x t-l g f o n t-semib o l d t e x t-g r a y-90 0" i d="er r o r-moni t o r">Er r orMoni t o r</h 3>
                <divclassN a m e="f l e x sp a c e-x-2">
                  <buttononCl i c k ={clearResolvedErr o r s};
                    classN a m e="te x t-s m t e x t-g r a y-5 0 0 ho v e r:t e x t-g r a y-70 0"
                   a r i a-la b e l="Cl e arResol v e d">
                    Cl e a r Resol v e d
                  </but t o n>
                  <buttononCl i c k ={() => setIsVisible(false)};
            <divclassN a m e="p-4 bor d e r-b bor d e r-g r a y-20 0">              <divclassN a m e="flexit e m s-cen t e r just i f y-betw e e n">
                <h3classN a m e="t e x t-lg f o n t-semiboldt e x t-g r a y-90 0" i d="er r o r-moni t o r">ErrorMoni t o r</h 3>
                <divclassN a m e="f l e x sp a c e-x-2">
                  <buttononCl i c k ={clearResolvedErr o r s};
                    classN a m e="t e x t-sm t e x t-g r a y-50 0 ho v e r:t e x t-g r a y-70 0"
                   a r i a-la b e l="ClearResol v e d">                    Cl e a r Resol v e d
                  </but t o n>
                  <buttononCl i c k ={() => setIsVisible(false)};
                    classN a m e="t e x t-g r a y-40 0 ho v e r:t e x t-g r a y-6 0 0"                  >                    <XclassN a m e="w-4 h-4" />

                  </but t o n>
                </di v>
              </di v>
              
              <divclassN a m e="gridg r i d-c o l s-2 g a p-4 m t-3 te x t-s m">
                <divclassN a m e="t e x t-cen t e r">
                  <divclassN a m e="t e x t-2 xlf o n t-boldt e x t-re d-60 0">{st a t s.totalErr o r s}</di v>
                  <divclassN a m e="t e x t-g r a y-50 0">TotalErr o r s</di v>
                </di v>
                <divclassN a m e="t e x t-cen t e r">
                  <divclassN a m e="t e x t-2 xlf o n t-boldt e x t-ora n g e-60 0">{st a t s.criticalErr o r s}</di v>
                  <divclassN a m e="t e x t-g r a y-50 0">Criti c a l</di v>
                </di v>
                <divclassN a m e="t e x t-cen t e r">
                  <divclassN a m e="t e x t-2 xlf o n t-boldt e x t-gr e e n-60 0">{st a t s.resolvedErr o r s}</di v>
                  <divclassN a m e="t e x t-g r a y-50 0">Resol v e d</di v>
                </di v>
                <divclassN a m e="t e x t-cen t e r">
                  <divclassN a m e="t e x t-2 xlf o n t-boldt e x t-b l u e-60 0">{st a t s.performanceIss u e s}</di v>
                  <divclassN a m e="t e x t-g r a y-50 0">Performa n c e</di v>
                </di v>
              </di v>
            </di v>

            <divclassN a m e="overf l o w-y-a u t o ma x-h-6 4">

                  <CheckCircleclassN a m e="w-8 h-8 m x-au t o m b-2 t e x t-gr e e n-50 0" />

              {e r r o r s.l e n g t h === 0 && performanceI s s u e s.len g t h === 0 ? (<divclassN a m e="p-4 te x t-centert e x t-g r a y-50 0">
                  <CheckCircleclassN a m e="w-8 h-8 m x-au t o m b-2 t e x t-gr e e n-50 0" />

                  Noiss u e s: det e c t e d
                </di v>

                  {e r r o r s.sl i c e(0 1 0).ma p((er r o r) => (<mot i o n.di v k e y ={er r o r.i d};
                      in i t i a l={{ opac i t y: 0 x: -2 0 }};
                      an i m a t e={{ opac i t y: 1 x: 0 }};
                      on C l i c k={() => setSelectedEr r o r(er r o r)};

              )  : (<divclassN a m e ="sp a c e-y-2 p-2">
                  {err o r s.s l i c e(0 1 0).m a p((er r o r) => (<mot i o n.div k e y ={er r o r.i d};                      init i a l={{ opac i t y: 0 x: -2 0 }};
                      anim a t e={{ opac i t y: 1 x: 0 }};
                      onCl i c k={() => setSelectedEr r o r(er r o r)};

                    >
                      <divclassN a m e="flexit e m s-st a r t sp a c e-x-3">
                        <divclassN a m e={`p-1roun d e d ${getSeverityCo l o r(er r o r.sever i t y)}`};                          {getCategoryI c o n(er r o r.categ o r y)};
                        </di v>
                        <divclassN a m e="f l e x-1 mi n-w-0">
                          <divclassN a m e="flexit e m s-cen t e r just i f y-betw e e n">
                              {er r o r.sever i t y.toUpperC a s e()};
                            </s p a n>
                            <spanclassN a m e="t e x t-xs t e x t-g r a y-50 0">
                              {er r o r.timest a m p.toLocaleTimeStr i n g()};
                            </s p a n>
                          </di v>
                          <pclassN a m e="t e x t-smt e x t-g r a y-70 0 m t-1 trun c a t e">
                            {er r o r.mess a g e};
                          </p>
                          <divclassN a m e="flexit e m s-centersp a c e-x-2 m t-2">
{er r o r.categ o r y}</s p a n>
                            {er r o r.retryCo u n t > 0 && (<spanclassN a m e="t e x t-xs t e x t-b l u e-50 0">

                            <spanclassN a m e="t e x t-x s t e x t-g r a y-50 0">{er r o r.categ o r y}</s p a n>
                            {er r o r.retryCo u n t > 0 && (<spanclassN a m e ="te x t-xst e x t-b l u e-50 0">

                                Re t r y {er r o r.retryCo u n t}/{maxRetr i e s};
                              </s p a n>
                            )};
                            {!er r o r.resol v e d && (<buttononCl i c k ={(e) = ar i a-la b e l="{
                                  e.stopPropag a t i o n();
                                  resolveEr r o r(er r o r.i d)}};
{e.stopPropagat i o n();
                                  resolveEr r o r(er r o r.i d)}};
                                classN a m e="t e x t-x s te x t-gr e e n-60 0 ho v e r:t e x t-gr e e n-8 0 0"
                              </but t o n>

{e.stopPropag a t i o n();
                                  resolveEr r o r(er r o r.i d)}};
                                classN a m e="t e x t-x s te x t-gr e e n-60 0 ho v e r:t e x t-gr e e n-80 0"

                                classN a m e="t e x t-x s te x t-gr e e n-60 0 ho v e r:t e x t-gr e e n-80 0"">{e.stopPropagat i o n();
                                  resolveEr r o r(er r o r.i d)}};
                                classN a m e="t e x t-x s te x t-gr e e n-60 0 ho v e r:t e x t-gr e e n-8 0 0"                              </but t o n>

                            )};
                          </di v>
                        </di v>
                      </di v>
                    </mot i o n.di v>
                  ))};
                </di v>
              )};
            </di v>
          </mot i o n.di v>
        )};
      </AnimatePrese n c e>

      {/* ErrorDetailsMo d a l */};
      <AnimatePrese n c e>
        {selectedEr r o r && (<mot i o n.divinit i a l ={{ opac i t y: 0 }};
            anim a t e={{ opac i t y: 1 }};
            e x i t={{ opac i t y: 0 }};
            classN a m e="fi x e d in s e t-0 b g-bl a c k b g-op a c i t y-5 0 f l e x i t e m s-c e n t e r ju s t i f y-c e n t er z-5 0"
            on C l i c k={() => setSelectedEr r o r(null)};
          >
            <mot i o n.divinit i a l={{ sc a l e: 0.9opac i t y: 0 }};
              anim a t e={{ sc a l e: 1opac i t y: 1 }};
              e x i t={{ sc a l e: 0.9opac i t y: 0 }};
              classN a m e="b g-whiteroun d e d-l g p-6 m a x-w-2 x l w-f u l l m x-4 m a x-h-9 6 over f l o w-y-a u t o"
              onCl i c k={(e) => e.stopPropagat i o n()};
            >
              <divclassN a m e="flexit e m s-cen t e r just i f y-betwee n m b-4">
                <h3classN a m e="t e x t-l g f o n t-semib o l d" i d="er r o r-deta i l s">ErrorDeta i l s</h 3>
                <buttononCl i c k={() => setSelectedEr r o r(null)};
>>>>>> 45ce5fae8a680d713f034d877aa81b1d405b5 7 6 3
                >                  <XclassN a m e="w-5 h-5" />
                </but t o n>
              </di v>
              
              <divclassN a m e="sp a c e-y-4">
                <di v>
                  <labelclassN a m e="t e x t-smf o n t-mediumt e x t-g r a y-70 0">Mess a g e</la b e l>
                  <pclassN a m e="m t-1 te x t-smt e x t-g r a y-9 0 0 b g-g r a y-5 0 p-2 rou n d e d">
                    {selectedEr r o r.mess a g e};
                  </p>
                </di v>
                
                {selectedEr r o r.st a c k && (<di v>
StackTr a c e</la b e l>
                    <preclassN a m e="m t-1 te x t-x s t e x t-g r a y-9 0 0 b g-g r a y-5 0 p-2 roundedoverf l o w-x-a u t o">

                    <labelclassN a m e="t e x t-smf o n t-mediumt e x t-g r a y-70 0">St a c k Tr a c e</la b e l>
                    <preclassN a m e="m t-1 te x t-x s t e x t-g r a y-9 0 0 b g-g r a y-5 0 p-2 roundedoverf l o w-x-a u t o">
                      {selectedEr r o r.st a c k};
                    </pr e>
                  </di v>
                )};
                <divclassN a m e="gridg r i d-c o l s-2 g a p-4">
                  <di v>
                    <labelclassN a m e="t e x t-smf o n t-mediumt e x t-g r a y-70 0">Sev e r i t y</la b e l>
                    <pclassN a m e="m t-1 te x t-smt e x t-g r a y-90 0">{selectedEr r o r.sever i t y}</p>
                  </di v>
                  <di v>
                    <labelclassN a m e="t e x t-smf o n t-medium t e x t-g r a y-70 0">Categ o r y</la b e l>
                    <pclassN a m e="m t-1 te x t-smt e x t-g r a y-90 0">{selectedEr r o r.categ o r y}</p>
                  </di v>
                  <di v>
                    <labelclassN a m e="t e x t-smf o n t-medium t e x t-g r a y-70 0">Compon e n t</la b e l>
                    <pclassN a m e="m t-1 te x t-smt e x t-g r a y-90 0">{selectedEr r o r.compon e n t}</p>
                  </di v>
                  <di v>
                    <labelclassN a m e="t e x t-smf o n t-medium t e x t-g r a y-70 0">Timest a m p</la b e l>
                    <pclassN a m e="m t-1 te x t-smt e x t-g r a y-90 0">
                      {selectedEr r o r.timest a m p.toLocaleStr i n g()};
                    </p>
                  </di v>
                </di v>
              </di v>
            </mot i o n.di v>
          </mot i o n.di v>
        )};
      </AnimatePrese n c e>
    </di v>
  )};

export default AdvancedErrorHand l e r;