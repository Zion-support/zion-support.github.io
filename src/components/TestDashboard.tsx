// T O D O: Consi d e r break i n g t h i s la r g e compon e n t (23 3 li n e s) i n t o smal l e r components
// T O D O: Consi d e r break i n g t h i s la r g e compon e n t (23 2 li n e s) i n t o smal l e r components
import R e a c t {useState useEffectuseCallb a c k }  from 'react";
>>>>>> 45ce5fae8a680d713f034d877aa81b1d405b5 7 6 3
interf a c e TestRes u l t {i d: str i n g;
  name: str i n g;
  sta t u s: "pend i n g' | "runn i n g" | "pas s e d" | "fai l e d" | "skip p e d";
  dur a t i o n?: n u m b e r;
  er r o r?: str i n g;
  timest a m p: number};
interf a c e TestS u i t e {i d: str i n g;
  name: str i n g;
  te s t s: TestRes u l t[];
  sta t u s: "pend i n g" | "runn i n g" | "pas s e d" | "fai l e d";
  durat i o n?: number};
interf a c e TestCo n f i g {time o u t: n u m b e r;
  retr i e s: n u m b e r;
  paral l e l: bool e a n;
  b a i l: bool e a n};
cl a s s TestRu n n e r {privatestaticinsta n c e: TestR u n n e r;
  privatesui t e s: Test S u i t e[] = [];
  privatecon f i g: TestC o n f i g;

  constr u c t o r(con f i g: TestC o n f i g) {
    t h i s.con f i g = con f i g};
  sta t i c getInst a n c e(c o n f i g?: Pa r t i a l<TestCon f i g>): TestRun n e r {i f (!TestRun n e r.insta n c e) {
      i d: `s u i t e _${D a t e.no w()}_${M a t h.ran d o m().toStr i n g(3 6).sub s t r(2 9)}`namete s t s: []sta t u s: "pend i n g"};
    t h i s.s u i t e s.p u s h(su i t e);
    return s u i t e};
 | v o i d): v o i d {const su i t e = t h i s.s u i t e s.f i n d(s => s.i d === su i t e I d);
    i f (!su i t e) r e t u r n;

    constt e s t: TestRes u l t = {};
  addT e s t(suit e I d: stringname: stringtes t F n: () => Prom i s e<v o i d> | v o i d): v o i d {const s u i t e = t h i s.s u i t e s.f i n d(s => s.i d === su i t e I d);
    i f (!su i t e) r e t u r n;

 Pr o m i s e<v o i d> | v o i d): v o i d {consts u i t e = t h i s.s u i t e s.f i n d(s => s.i d === su i t e I d);
    i f (!su i t e) return;

    constt e s t: TestRes u l t = {};
  ad d T e s t(suit e I d: stringname: stringtes t F n: () => Pr o m i s e<v o i d> | v o i d): v o i d {constsu i t e = t h i s.s u i t e s.f i n d(s => s.i d === su i t e I d);
    i f (!su i t e) return;


    constt e s t: TestRes u l t = {};
      i d: `te s t _${D a t e.no w()}_${M a t h.ran d o m().toStr i n g(3 6).sub s t r(2 9)}`namesta t u s: "pend i n g"
      timest a m p: D a t e.n o w()};
    su i t e.te s t s.p u s h(t e s t);

    // St o r e th e t e s t function fo r la t e r exec u t i o n
    (test a s a n y).t e s t F n = t e s t F n};
  async runS u i t e(suit e I d: s t r i n g): Pr o m i s e<v o i d> {constsu i t e = t h i s.sui t e s.f i n d(s => s.i d === su i t e I d);
    i f (!su i t e) return;

    su i t e.sta t u s = "runn i n g";
    const star t T i m e = D a t e.n o w();

    f o r (consttestof s u i t e.te s t s) {
      i f (t h i s.con f i g.b a i l && su i t e.sta t u s === "fai l e d") {;
        t e s t.sta t u s = "skip p e d";
        conti n u e};
      aw a i t th i s.ru n T e s t(t e s t)};
    su i t e.dur a t i o n = D a t e.n o w() - star t T i m e;
    su i t e.s t a t u s = su i t e.te s t s.s o m e(t => t.sta t u s === "fai l e d") ? "fai l e d" : "pas s e d"};
  priv a t e async runT e s t(t e s t: TestRes u l t): Prom i s e<v o i d> {t e s t.sta t u s = "runn i n g";
    conststartT i m e = D a t e.n o w();

    tr y {
      i f (!tes t F n) {
        thrownewEr r o r("Testfunctionnotfo u n d") };
      aw a i t Pro m i s e.r a c e([t e s t F n()ne w Pro m i s e((_r e j e c t) => 
          setTime o u t(() => rej e c t(newEr r o r("T e s t time o u t"))t h i s.c o n f i g.time o u t)
        )
      ]);

      t e s t.sta t u s = "pas s e d"} ca t c h (er r o r) {t e s t.sta t u s = "fai l e d";
      t e s t.er r o r = errorinstanceof E r r o r ? er r o r.me s s a g e : Str i n g(er r o r) } fi n a l l y {t e s t.dur a t i o n = D a t e.no w() - startT i m e}};
  async runAllSu i t e s(): Pr o m i s e<v o i d> {i f (t h i s.con f i g.paral l e l) {
 t h i s.runSu i t e(su i t e.i d))) } e l s e {f o r (constsuiteo f t h i s.s u i t e s) {

      awaitPr o m i s e.a l l(t h i s.s u i t e s.m a p(su i t e => t h i s.runSu i t e(su i t e.i d))) } e l s e {f o r (constsuiteo f t h i s.s u i t e s) {

        awai t t h i s.run S u i t e(su i t e.i d);
        i f (t h i s.con f i g.b a i l && su i t e.sta t u s === "fai l e d") {;
          br e a k}}}};
  getS u i t e s(): Test S u i t e[] {return [...t h i s.sui t e s] };
  getRe s u l t s(): {to t a l: n u m b e r; pas s e d: n u m b e r; fai l e d: number; skip p e d: number } {constall T e s t s = t h i s.s u i t e s.fl a t M a p(su i t e => su i t e.te s t s);
    return {
 t.sta t u s === "pas s e d").lengthfai l e d: all T e s t s.fil t e r(t = > t.sta t u s === "fai l e d").lengthskip p e d: all T e s t s.fil t e r(t => t.sta t u s === "skip p e d").len g t h }};
  cl e a r(): v o i d {t h i s.sui t e s = [] }};
// React h o o k fo r test i n g export const useTestRun n e r = () => {useTestR u n n e r.displayN a m e = "useTestRun n e r";;
  const [testRun n e r] = useState(() => TestR u n n e r.getInsta n c e());

      to t a l: all T e s t s.lengthpas s e d: allTe s t s.fil t e r(t = > t.sta t u s === "pas s e d").lengthfai l e d: allTe s t s.fil t e r(t = > t.sta t u s === "fai l e d").lengthskip p e d: allTe s t s.fil t e r(t => t.sta t u s === "skip p e d").len g t h }};
  cl e a r(): v o i d {t h i s.sui t e s = [] }};
// React h o o k fo r test i n g export const useTestRun n e r = () => {useTestRun n e r.displayN a m e = "useTestRun n e r";;
  const [testRun n e r] = useState(() => TestR u n n e r.getIns t a n c e());

  const [s u i t e s setS u i t e s] = useState<TestSu i t e[]>([]);
  const [isRunningsetIsRunn i n g] = useState(f a l s e);
  const add S u i t e = useCal l b a c k((name: s t r i n g) => {;
    const su i t e = testR u n n e r.add S u i t e(n a m e);
    setS u i t e s(testR u n n e r.getS u i t e s());
    r e t u rnsu i t e } [testRun n e r]);

  const add T e s t = useCal l b a c k((suit e I d: stringname: stringtes t F n: () => Pr o m i s e<v o i d> | v o i d) => {;
    testRun n e r.addT e s t(su i t e I d n a m e t e s t F n);
    setS u i t e s(testRun n e r.getSui t e s()) } [testRun n e r]);
  const runS u i t e = useCallb a c k(async(suit e I d: s t r i n g) => {;
    setIsRunn i n g(true);
    t r y {
      aw a i t testR u n n e r.run S u i t e(su i t e I d);
      setS u i t e s(testRun n e r.getSui t e s()) } fi n a l l y {setIsRunn i n g(false) }} [testRun n e r]);
  const runAllSu i t e s = useCal l b a c k(async () => {;
    setIsRu n n i n g(true);
    t r y {
      aw a i t testR u n n e r.runAllS u i t e s();
      setS u i t e s(testRun n e r.getSui t e s()) } fi n a l l y {setIsRunn i n g(false) }} [testRun n e r]);
  const getRes u l t s = useCal l b a c k(() => {;
    r e t u r n testRun n e r.getResu l t s() }[testRun n e r]);

  const c l e a r = useCal l b a c k(() => {;
    testR u n n e r.cl e a r();    setSui t e s([]) }[testRun n e r]);

  return {s u i t e s isRunn i n g addS u i t e addT e s t runS u i t e runAllSui t e s getResultscl e a r  }};

// T e s t Dashboard Compon e n t
exportconstTestDashboard: React.F C = () => {;  const { s u i t e s isRunningaddSuiteaddTestrunAllSuitesgetResu l t s  cl e a r } = useTestRun n e r();
 {// Addsomeexampletestsconstsu i t e = addSu i t e("Ex a m p leTe s t s");    
    addT e s t(su i t e.i d"BasicMathT e s t"async () => {
      i f (2 + 2 !== 4) {
        thrownewEr r o r("Basicmathfai l e d") }});
    addT e s t(su i t e.i d"As y ncT e s t" async () => {awaitnewPr o m i s e(re s o l v e => setTi m e o u t(resol v e 1 0 0));
  const [showDashboardsetShowDashboard] = useState(false);

  useEffect(() => {// Addsomeexampletestsconstsu i t e = addSu i t e("ExampleTe s t s");
    
    addT e s t(su i t e.i d"BasicMathT e s t"async () => {
      i f (2 + 2 !== 4) {
        thrownewEr r o r("Basicmathfai l e d") }});

    addT e s t(su i t e.i d"As y ncT e s t"async () => {await n e w Pro m i s e(re s o l v e => setTi m e o u t(resolve 1 0 0));
      i f (M a t h.ran d o m() < 0.1) {
        thrownewEr r o r("Randomfail u r e") }});
    addT e s t(su i t e.i d"DOMT e s t"() => {constelem e n t = document.createElem e n t("di v");
      i f (!elem e n t) {
    })} [addSuiteaddT e s t]);

  i f (proc e s s.en v.NODE_ E N V !== "developm e n t") {returnnull};
  const res u l t s = getRe s u l t s();

  const getStatusC o l o r = (sta t u s: str i n g) => {getStatusCo l o r.displayN a m e = "getStatusCo l o r";swi t c h (sta t u s) {      c a s e "pas s e d": return "t e x t-gr e e n-60 0";
      c a s e "fai l e d": return "t e x t-re d-60 0";
      c a s e "runn i n g": return "t e x t-b l u e-60 0";
      c a s e "skip p e d": return "t e x t-yel l o w-60 0";
      default: return "t e x t-g r a y-60 0" }};

  const getStatus I c o n = (sta t u s: s t r i n g) => {getStatusI c o n.displayN a m e = "getStatusI c o n";swi t c h (sta t u s) {      c a s e "pas s e d": return '✅";
      c a s e "fai l e d": return '❌";
      c a s e "runn i n g": return '🔄";
      c a s e "skip p e d': return '⏭️';
      default: return '⏳"}};  return (<>
      
      <buttononCl i c k ={() = a r i a-la b e l="setShowDashboard(!showDashboard)};
        a r i a-la b e l="Toggletestdashbo a r d"
        classN a m e="fi x e d bo t t o m-4 le f t-4 b g-p u r p l e-60 0 ho v e r:b g-p u r p l e-70 0 te x t-w h i t e p-3 rou n d e d-f u l l sh a d o w-lg z-5 0 ti t l e=Tog g l e T e s t Dashboard"

      >
 setShowDashboard(!showDashboard)};
        a r i a-la b e l="Tog g l e t e s t dashbo a r d"
        classN a m e="fi x e d bo t t o m-4 le f t-4 b g-p u r p l e-60 0 ho v e r:b g-p u r p l e-70 0 te x t-w h i t e p-3 rou n d e d-f u l l sh a d o w-l g z-5 0 t i t l e=Tog g l e T e s t Dashboard"

        🧪"> setShowDashboard(!showDashboard)};        a r i a-la b e l="Toggletestdashbo a r d"
        classN a m e="fi x e d bo t t o m-4 le f t-4 b g-p u r p l e-60 0 ho v e r:b g-p u r p l e-70 0 te x t-w h i t e p-3 rou n d e d-f u l l sh a d o w-lg z-5 0 ti t l e=Tog g l e T e s t Dashboard"

      >        🧪
      </but t o n>




            <h3classN a m e="t e x t-l g fo n t-semib o l d te x t-g r a y-9 0 0 d a r k:t e x t-wh i t e i d =t e s t-dashbo a r d">

      {showDashboard && (<divclass N a m e="fi x e d b o t t o m-2 0 l e f t-4 b g-wh i ted a r k:b g-g r a y-8 0 0 p-4 ro u n d e d-l g s h a d o w-l g b o r d e r b o r d e r-g r a y-2 0 0 d a r k:b o r d e r-g r a y-7 0 0 z-5 0 m a x-w-m d m a x-h-96ove r f l o w-y-a u t o>
          <divc l a s s N a m e =f l e x ju s t i f y-be t w e e n it e m s-cente r m b-4">
            <h3classN a m e="te x t-l g f o n t-sem i b o l d t e x t-g r a y-90 0 d a r k:t e x t-wh i t e i d =t e s t-dashbo a r d">

          <divclassN a m e =flexjust i f y-betweenit e m s-cente r m b-4">
            <h3classN a m e="t e x t-l g f o n t-semib o l d te x t-g r a y-9 0 0 d a r k:t e x t-whit e i d =t e s t-dashbo a r d">


      {showDashboard && (<divclassN a m e="fixedb o t t o m-2 0 l e f t-4 b g-whited a r k:b g-g r a y-8 0 0 p-4 ro u n d e d-l g s h a d o w-l g b o r d e r b o r d e r-g r a y-2 0 0 d a r k:b o r d e r-g r a y-7 0 0 z-5 0 m a x-w-m d m a x-h-9 6 ove r f l o w-y-a u t o> <divcl a s s N a m e =f l e x ju s t i f y-betweenit e m s-cente r m b-4">
            <h3classN a m e="t e x t-lgf o n t-sem i b o l d t e x t-g r a y-90 0 d a r k:t e x t-whit e i d =t e s t-dashbo a r d">
              T e s t Dash b o a r d

            </h 3>

              <buttononC l i c k ={runAllSui t e s};
                disab l e d={isRunn i n g};
                a r i a-la b e l={isRunn i n g ? "Runn i n g...' : "Run A l l"};

            <divclassN a m e="f l e x sp a c e-x-2> <butto n o n Cl i c k ={ru n Al l Sui t e s}; disab l e d={i s Runn i n g}; a r i a-la b e l={i s Runn i n g ?"Runn i n g...' : "Run A l l"};

              >
                {isRunn i n g ? "Runn i n g..." : "Run A l l"};
              </but t o n>
              >
                Cl e a r
              </but t o n>
            </di v>
          </di v>
          <divclassN a m e ="m b-4 t e x t-s m t e x t-g r a y-6 0 0 d a r k:t e x t-g r a y-30 0>
            <di v>To t a l: {resu l t s.to t a l}</di v>
Pas s e d: {resu l t s.pas s e d}</di v>
            <divclassN a m e="t e x t-r e d-6 0 0>Fai l e d: {resu l t s.fai l e d}</di v> <divcl a s s N a m e=te x t-y e l l o w-60 0">Skip p e d: {resu l t s.skip p e d}</di v>

            <divclassN a m e=t e x t-gr e e n-60 0">Pas s e d: {resu l t s.pas s e d}</di v>
            <divclassN a m e="t e x t-r e d-6 0 0>Fai l e d: {resu l t s.fai l e d}</di v> <divcl a s s N a m e=t e x t-yel l o w-60 0">Skip p e d: {resu l t s.skip p e d}</di v>

          </di v>

          {sui t e s.ma p(su i t e => (
            <div k e y ={su i t e.i d} classN a m e="m b-4> <h 4 cl a s s N a m e =fo n t-sem i b o l d t e x t-g r a y-9 0 0 d a r k:t e x t-whit e m b-2" i d="suiten a m e-suitesta t u s">
                {su i t e.n a m e} ({su i t e.sta t u s})
              </h 4>
 {su i t e.te s t s.ma p(t e s t => ( <div k e y ={t e s t.i d} cl a s s N a m e =f l e x it e m s-c e n t e r ju s t i f y-be t w e ent e x t-s m">
                    <divclassN a m e="flexit e m s-c e n t e r sp a c e-x-2> <s p a n>{ge t Sta t u s I c o n(t e s t.sta t u s)}</s p a n> <spancl a s s N a m e=t e x t-g r a y-7 0 0 d a r k:t e x t-g r a y-30 0">{t e s t.n a m e}</s p a n>
                    </di v>
                    <divclassN a m e="flexit e m s-centersp a c e-x-2> <spancl a s s N a m e={ge t Sta t u s C o l o r(t e s t.sta t u s)}>{t e s t.sta t u s}</s p a n> {t e s t.durat i o n && (<spancl a s s N a m e =t e x t-g r a y-50 0 t e x t-x s">{t e s t.durat i o n}m s</s p a n>

              <divclassN a m e="sp a c e-y-1> {s u i t e.te s t s.m a p(t e s t => ( <div k e y ={t e s t.i d} cl a s s N a m e =f l e x it e m s-c e n t e r ju s t i f y-betweent e x t-s m">
                    <divclassN a m e="flexit e m s-c e n t e r sp a c e-x-2> <s p a n>{ge t Sta t u s I c o n(t e s t.sta t u s)}</s p a n> <spancl a s s N a m e=t e x t-g r a y-70 0 d a r k:t e x t-g r a y-30 0">{t e s t.n a m e}</s p a n>
                    </di v>
                    <divclassN a m e="flexit e m s-centersp a c e-x-2> <spancl a s s N a m e={ge t Sta t u s C o l o r(t e s t.sta t u s)}>{t e s t.sta t u s}</s p a n> {t e s t.durat i o n && (<spancl a s s N a m e =t e x t-g r a y-50 0 t e x t-x s">{t e s t.durat i o n}m s</s p a n>
                      )};
                    </di v>
                  </di v>
                ))};
              </di v>
            </di v>
          ))};
        </di v>
      )};
    </>;
  )};

export default TestRun n e r;