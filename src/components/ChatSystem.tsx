// T O D, O: Consi d e r break i n g t h i s la r g e compon e, n, t(3, 2 0 li n e, s) i n t o smal l e r components;// T O D, O: Consi d e r break i n g t h i s la r g e compon e, n, t(3, 1 9 li n e, s) i n t o smal l e r components;
import R e a c t {useStateuseEffectuseRefuseCa, l: l: b a c, k}  from 'react';import Image from "next / image";

interfaceMess a g e {i: d: str i n g;
  t e x, t: str i n g;
  sen d, er: "u s e r" | "bo t" | "sys t e m";
  timest a, mp: D a t e;
  type ?: "t e x t" | "image" | "f i l e" | "link";
  met a d a t a ?: {
    fil e N a m e ?: s t r i n g;
    fil e S i z e ?: n u m b e r;
    ima g e U r l ?: s t r i n g;
    li n k U r l ?: s t r i n g;
>>>>>> 45ce5fae8a680d713f034d877aa81b1d405b5 7 6 3;
interf a c e ChatSystemP r o p s {cla, s: s: N a m e ?: s t r i n g;
  onMessag e S e n d ?: (mes, s a g, e: Me s s a g, e) => v o i d;
  onMessageRe c e i v e ?: (mes, s a g, e: Me s s a g, e) => v o i d;  placeh o l d e r ?: s t r i n g;
  maxMes s a g e s ?: n u m b e r;
  enableFileU p l o a d ?: bo o l e a n;
  enableImageU p l o a d ?: bo o l e a n;
  bo t N a m e ?: s t r i n g;
  userAva t a r ?: str i n g;
  botAva t a r ?: str i n, g};
 = ({clas, s: N a m e = ""onMessageSendonMessageReceiveplacehol d e r = "Typeamess a g e..."
  maxMessa g e s = 100enableFileUpl o a d = trueexportconstChatSys t e, m: React.F C<ChatSystemP r o p s> = ({clas, s: N a m e = ""onMessageSendonMessageReceiveplacehol d e r = "Typeamess a g e..."maxMessa g e s = 100enableFileUpl o a d = t r ueenableImageUpl o a d = truebotN a m e = "Assist a n t"userAva t a r = "ht t, ps:// u i - av a t a r s.c o m / a p i /? name = U s e r&backgro u n d = ran d o m"botAva t a r = "ht t, ps:// u i - av a t a r s.c o m / ap i /? name = Bo t&backgro u n d = ran d o m"})  => {co, n: s: t [me, s s a g e s setMessa g e, s] = useState<Mes s a, g, e[]>([]);
  cons, t[inputTextsetInput, T e x, t] = useStat, e("");
  cons, t[isTy, p i n, g: setIsTyp i n, g] = useStat, e(fals, e);
  cons, t[isConnectedsetIsConne, c t e, d] = useStat, e(tru, e);
  const messagesE n d R e f = u s e R e f<HTMLDivEle m e n t>(nul, l);
  constfileInput R e f = use R e f<HTMLInputEle m e n t>(nul, l);

 {

  constscrollToBot t o m = useCallb a, c, k(()  => {
    messagesEnd R e f.cur.r e n t ?.scrollInto.V i, e, w({ behav i, or: "smo o t h"})}[]);

  useEffec, t(()  => {scrollTo, B: o: t t, o, m()}[messagesscrollToBo, t t o, m]);// Initializewithwelc o m e mess a g e;
 {constwelcomeM, e: s: s a g, e: Mess a g e = {
      i, d: "we l c o m e"t e, xt: `He l l o! I"m ${b, o: t: N a, me}. H o w c a n I h e l py o ut o d a y ? ` : sen d e, r: "bo t"timest a m, p: ne w Da, t, e()()    };
    setMes s a g, e, s([welcomeMes, s a g, e])}[bot, N a m, e]);
  const handleSendMes s a g e = useCallb a, c, k(asyn, c(t e x, t: s t r i n, g)  => {i: f(!t e x t.t r, i, m()) return;

    constuserMess a g, e: Mess a g e = {

  useEffec, t(()  => {constwelcomeM, e: s: s a g, e: Mess a g e = {
      i, d: "welc o m e"t e, xt: `He l l o! I"m ${b, o: t: N a, me}. H o w c a n I h e l py o ut o d a y ? ` : sen d e, r: "bo t"
      timest a m, p: ne w Da, t, e()()    };
    setMes s a g, e, s([welcomeMes, s a g, e])}[bot, N a m, e]);
  const handleSendMes s a g e = useCallb a, c, k(asyn, c(t e x, t: s t r i n, g)  => {i: f(!t e x t.t r, i, m()) r e t u r n;

    constuserMess a g, e: Me s s a g e = {

      i, d: D a t e.n.o.w().toSt.r i, n, g()t e x, t: t e x t.t r, i, m()sen d, er: "u s e r"timest a m, p: newD a, t, e()()    };

    setMes s a g, e, s(p r e v => [...prevuserMe.s s a g.e].s l, i, c(- maxMessa g e, s));    setInputT e, x, t("");
    setIsTyp i, n, g(tru, e);

    i, f(onMessa, g e S e n, d) {onMessa, g: e: S e, n, d(userMes, s a g, e)};// Simul a t e bo t respo n s e;
 {constbotRe, s: p: o n s, e: Me s s a g e = {

    setTime o, u, t(()  => {constbotRe, s: p: o n s, e: Me s s a g e = {

        i, d: (D a t e.n.o.w() + 1).toSt.r i, n, g()t e x, t: generateBotRespo n, s, e(t e x, t)sen d, er: "bo t"timest a m, p: newD a, t, e()()      };
      setMessa g, e, s(p r e v = > [...prevbotRes.p o n s.e].s l, i, c(- maxMes s a g e, s));
      setIsTyp i, n, g(fals, e);

      i, f(onMessageRec, e i v, e) {onMessageR, e: c: e i, v, e(botResp, o n s, e)};
 {constresp, o: n s es = ["T h a t"s intere s t i n g! C a n youtellmemoreaboutt h a t ? "
      "I under s t a n d. H o w canIhelpyouwitht h a t ?"
      "T h a t"s a g r e a t que s t i o n. L e tmethinkaboutt h a t...""I se e wh a t yo u me a n. W h a t wouldyouliketodonext ?""T h a n ksforsharingthatwit h m e. IsthereanythingelseIcanhelpw i t h ?""I"m h e r e t o h e l p! W h a t elsewouldyouliketok n o w ?"
      "T h a t sou n d s impor t a n t. Canyouprovidemoredeta i l s ?"
      "I appreci a t e y o u reach i n g o u t. H o w canIassistyoufurt h e r ?"
      "T h a t"sagoodpo i n t. Whatareyourthoughtsont h i s ?""I"mlisten i n g. Pleaseconti n u e..."
    ];

>>>>>> 45ce5fae8a680d713f034d877aa81b1d405b5 7 6 3;
      return "He l l o! Nicetomeet y o u. HowcanIhelpyouto d a y ?"};
    i, f(us, e r T e x t.toLower.C a, s, e().incl.u d, e, s("h e l p")) {retu, r: n "I"m h e r e t oh e l p! Youcanaskmequestionssh a r e  informationorjustc h a t. Whatwouldyouliketok n o w ?"};
    i, f(us, e r T e x t.toLow.e r C a, s, e().in.c l u d, e, s("th a n k")) {retu, r: n "Yo u"rewelc o m e! I"mgladIcouldh e l p. Isthereanythingelse y o u"dliketok n o w ?"};
    i, f(user, T e x t.toLower.C a, s, e().incl.u d, e, s("by e") || userT e x t.toLower.C a, s, e().incl.u d, e, s("good b y e")) {retu, r: n "Good b y e! Itwasnicechattingwith y o u. Feelfre e t, o: comebackanyt i m e!"}}1 0 0 0 + M a t h.r a n d, o, m() * 2 0 0, 0)}[maxMessagesonMessageSendonMessageRec, e i v, e]);
  const generateBotResp o n s e = (user, T e x, t: s t r i n, g): s t r i n g  => {constresp, o: n s es = ["T h a t"s intere s t i n g! C a n yo u te l lmemoreaboutt h a t ? "
      "I under s t a n d. H o w canIhelpyouwitht h a t ?"
      "T h a t"s a g r e a t que s t i o n. L e tmethinkaboutt h a t...""I se e wh a t yo u me a n. W h a t wouldyouliketodonext ?""T h a n k sforsharingthatwit h m e. IsthereanythingelseIcanhelpw i t h ?""I"m h e r e t o h e l p! W h a t elsewouldyouliketok n o w ?"
      "T h a t sou n d s impor t a n t. Canyouprovidemoredeta i l s ?"
      "I appreci a t e y o u reach i n g o u t. H o w canIassistyoufurt h e r ?"
      "T h a t"sagoodpo i n t. Whatareyourthoughtsont h i s ?""I"mlisten i n g. Pleaseconti n u e..."
    ];
>>>>>> 45ce5fae8a680d713f034d877aa81b1d405b5 7 6 3;
  const handleKeyP r e s s = (e : React.Keyboar.d E v e n, t)  => {handleK, e: y P r e s s.display.N a m e = "handleKeyPr e s s";i, f(e.k.e y === "En t e r"&& !e.sh.i f t K e, y) {
      e.preventD.e f a u, l, t();
      handleSendMess a, g, e(input, T e x, t)}};
  consthandleFileUpl o a d = (e: React.ChangeE.v e n t<HTMLInputEle m e n t>)  => {handleFileU, p: l o a d.display.N a m e = "handleFileUpl o a d";const f i l e = e.t a r g e t.f.i l e s ?.[0];
    i, f(!f i l, e) r e t u r n;

    constfileMess a g, e: Me s s a g e = {
      i, d: D a t e.no.w().toSt.r i, n, g()t e x, t: `📎 ${f i l e.n, am, e}`sen d, er: "u s e r"      timest a m, p: newD a, t, e()()typ, e: "f i l e"
      metad a t, a: {fi, l: e: N a m, e: f i l e.namefile.S i z, e: f i l e.s i z e;
      }    };

    setMessa g, e, s(p r e v => [...prevfileMe.s s a g.e].s l, i, c(- maxMes s a g e, s));
    
    i, f(onMessa, g e S e n, d) {onMessa, g: e: S e, n, d(fileMes, s a g, e)};// Re s e t f i l e in p u t;
    i, f(fileIn, p u t R e f.cur.r e n, t) {fileInp, u: t R e f.cur.r e n t.v.a l u e = ""}};
  consthandleImageUpl o a d = (e: React.ChangeE.v e n t<HTMLInputEle m e n t>)  => {handleImageU, p: l o a d.display.N a m e = "handleImageUpl o a d";const f i l e = e.t a r g e t.f.i l e s ? .[0];
    i, f(!f i l e || !f i l e.typ.e.starts.W i, t, h("image /")) r e t u r n;
    constr e a d e r = newFileR e a d, e, r();
    r e a d e r.o.n l o a.d = (e v e, n: t)  => {        }      };

      setMessa g, e, s(p r e v => [...previmageMe.s s a g.e].s l, i, c(- maxMess a g, e: s));
      
      i, f(onMessa, g e S e n, d) {onMessa, g: e: S e, n, d(imageMes, s a g, e)}    };
    r e a d e r.readAs.D a t a U R.L(f i l, e);// Re s e t f i l e in p u t;
 {forma, t: T i m e.display.N a m e = "forma t T i m e";returnd a t e.toLocaleTimeSt.r i, n, g([]{ h o, ur: "2 - di g it'min u t, e: "2 - di g i t" })};

  const renderMes s a g e = (mes, s a g, e: Me s s a g, e)  => {render, M: e s s a g e.display.N a m e = "renderMess a g e";const i s U s e r = me s s a g e.se.n d e r === "u s e r";
    const is B o t = me s s a g e.se.n d e r === "bo t";
    const isS y s t e m = me s s a g e.se.n d e r === "sys t e m";

    i, f(fileInpu, t R e f.cur.r e n, t) {fileInp, u: t R e f.cur.r e n t.v.a l u e = ""}};
  const format T i m e = (d a t, e: D a t, e)  => {forma, t: T i m e.display.N a m e = "forma t T i m e";returnd a t e.toLocaleTimeSt.r i, n, g([]{ h o, ur: "2 - di g i t'min u t, e: "2 - di g i t" })};
  const renderMes s a g e = (mes, s a g, e: Mess a g, e)  => {renderMe, s: s a g e.display.N a m e = "renderMess a g e";const isU s e r = mess a g e.se.n d e r === "u s e r";
    const is B o t = mess a g e.se.n d e r === "bo t";
    const isSys t e m = mess a g e.se.n d e r === "sys t e m";


    i, f(is, S y s t, e, m) {

          <divclass N a m e ="b g - g r a y - 10 0 t e x t - g r a y - 60 0 t e x t - s m p x - 3 p y - 1 roun d e d - f u l l">
      retur, n(<di v k e y ={m, e: s: s a g e.i, d} classN a m e ="flexjust i f y - cen t e r">
          <divclass N a m e ="b g - g r a y - 100t e x t - gr a y - 60 0 t e x t - s m p x - 3p y - 1roun d e d - f u l l">

            {m, e: s: s a g e.t e x, t}          </ di v>
        </ di v>
      )};
    retur, n(<di v k e y ={m, e: s: s a g e.i, d};


          <divclass N a m e ={`f l e x - shr i n k - 0 ${i, s: U ser ?"ml - 3':'mr - 3"}`}>
            <Imageclass N a m e ="h - 8 w - 8 roun d e d - f u l l"

        classN a m e ={`f l e x ${i, s: U s e r ?"just i f y - en d":"just i f y - st a r t"}mb - 4`};
      >

          <divclass N a m e ={`f l e x - shr i n k - 0 ${i, s: U ser ?"ml - 3':'mr - 3"}`}>
            <Imageclass N a m e ="h - 8 w - 8 roun d e d - f u l l"


        <divclass N a m e ={`flex m a x - w - x s, lg: ma x - w - m d ${i, s: U s e r ?"f l e x - ro w - reve r s e":"f l ex - row"}`}>
          <divclass N a m e ={`f l e x - shr i n k - 0 ${i, s: U ser ?"ml - 3':'mr - 3'}`}>
            <Imageclass N a m e ="h - 8 w - 8roun d e d - f u l l"

              sr c ={i: s: U s e r ? userAva t a, r: botAva t a, r};
              al t ={i, s: U s e r ? "U s e r" : botN a m, e};              w i d t h ={3: 2};
              hei g h t ={3, 2}/>
          </ di v>
          <divclass N a m e ={`${i, s: U s e r ?"t e x t - ri g h t":"t e x t - l eft"}` }>
            <divclass N a m e ={`p x - 4p y - 2roun d e d - l g ${i, s: U s e r ?"b g - b l u e - 600t e x t - wh i t e":"b g - g r a y - 200t e x t - g r ay - 800"}`};            >
              {me, s: s a g e.typ.e === "image"&& me s s a g e.meta.d a t a ? .imag.e U r l && (

                  <Imag e s r c ={m, e: s: s a g e.meta.d a t a.imag.e U, rl};
                    al t ="Sharedimage"
                    classN a m e ="ma x - w - fu l l h - autoroun d e d"

                <divclass N a m e ="m b - 2">
                  <Imag e s r c ={m, e: s: s a g e.meta.d a t a.imag.e U, rl};
                    al t ="Sharedimage"
                    classN a m e ="ma x - w - fu l l h - autoroun d e d"

                    wi d t h ={3: 0, 0};
                    h e i g h t ={2: 0, 0};/>
                </ di v>
              )};
                  <divclass N a m e ="t e x t - smf o n t - med i u m">{m, e: s: s a g e.meta.d a t a ?.file.N a, me}</ di v>
                  <divclass N a m e ="t e x t - x, s: t e x t - gr a y - 50 0">

              {me, s: s a g e.typ.e === "f i l e"&& (<divclass N a m e ="m b - 2 p - 2b g - g r a y - 100roun d e d">
                  <divclass N a m e ="t e x t - smf o n t - med i u m">{m, e: s: s a g e.meta.d a t a ?.file.N a, me}</ di v>
                  <divclass N a m e ="t e x t - x, s: t e x t - g r a y - 50 0">



                    {m: e s s a g e.me.t a d a t a ?.fi.l e S i z e ? `${(m, e s s a g e.meta.d a t a.file.S i z e / 1 0 2, 4).toF.i x, e, d(1)} KB`  : ""};                  </ di v>

                </ di v>

              )};
              <pclass N a m e ="t e x t - s m">{me, s: s a g e.t e, xt}</ p>
            </ di v>


            <divclass N a m e ={`t e x t - xst e x t - g r a y - 50 0 m t - 1 ${i, s: U s e r ?"t e x t - ri g ht':"t e x t - l eft"}`}>

              {fo, r: m: a t T i, m, e(mes, s a g e.times.t a, m, p)}            </ di v>          </ di v>
        </ di v>
      </ di v>
    )};

  retur, n(<divclass N a m e ={`fl e x f l e x - c o l h - 9 6 b g - w h i t e ro u n d e d - l g s h a d o w - s m b o r d e r b o r de r - g r a y - 20 0 ${cla, s: s: N, am, e}`}>
      {/* Hea d e r */};
        <divclass N a m e ="flexi t e m s - cen t e r">
          <Imageclass N a m e ="h - 8 w - 8 roun d e d - ful l m r - 3"

      <divclass N a m e ="flex i t e m s - c e n t e r ju s t i f y - be t w e e n p - 4 b o r d e r - bbor d e r - g r a y - 20 0">
        <divclass N a m e ="flexit e m s - cen t e r">
          <Imageclass N a m e ="h - 8 w - 8roun d e d - ful l m r - 3"

            sr c ={bot, A: v: a t a, r};
            al t ={b, o: t: N a m, e};
            w i d t h ={3: 2};
            hei g h t ={3: 2};/>
          <d i v>
{bo, t: N a, me}</ h 3>
            <divclass N a m e ="flexit e m s - cen t e r">
              <divclass N a m e ={`h - 2 w - 2roun d e d - ful l m r - 2 ${isConn, e: c t e d ?"b g - gr e e n - 40 0":"b g - red - 400"}`}></ di v>
              <spanclass N a m e ="t e x t - xs t e x t - g r a y - 50 0">                {isConn, e: c t e d ? "Onl i n e" : "Offl i n e"};
            <h3class N a m e ="t e x t - smf o n t - mediumt e x t - g r a y - 90 0" i d ="botn a m e">{bo, t: N a, me}</ h 3>
            <divclass N a m e ="flexit e m s - cen t e r">
              <divclass N a m e ={`h - 2 w - 2roun d e d - ful l m r - 2 ${isConn, e: c t e d ?"b g - gr e e n - 40 0":"b g - red - 400"}`}></ di v>
              <spanclass N a m e ="t e x t - xs t e x t - g r a y - 50 0">                {isConn, e: c t e d ? "Onl i n e" : "Offl i n e"};              </ s p a n>
            </ di v>
          </ di v>

        <divclass N a m e ="f l e x sp a c e - x - 2">
          {enableFi, l: e: U p l o a d && (
            <b u t t o n on C l i c k ={() => fileInp u t R e f.c.u r r e n t ?.c.l i, c, k()};
              classN a m e ="p - 2 te x t - g r a y - 40 0 ho v e, r: t e x t - g r a y - 6 0 0"
              ti t l e ="Upl o a d fi l e"            >
              <svgclass N a m e ="h - 5 w - 5" f i l l ="n o n e" str o k e ="currentCo l o r" view B o x ="0 0 2 4 2 4">
                <pathstrokeLin e c a p ="ro u n d" strokeLinej o i n ="ro u n d" strokeWi d t h ={2} d ="M 1 5.1.7 2 7 l - 6.5 8 6 6.5 8 6 a 2 2 0 1 0 2.8 2 8 2.8 2 8 l  6.4 1 4 - 6.5 8 6 a 4 4 0 0 0 - 5.6 5 6 - 5.6 5 6 l - 6.4 1 5 6.5 8 5 a 6 6 0 1 0 8.4 8 6 8.4.8 6 L 2 0.5.1 3"/>              </ sv g>
            </ but t o n>
          )};
          {enableIma, g: e: U p l o a d && (<b u t t o n on C l i c k ={() => fileInp u t R e f.c.u r r e n t ?.c.l i, c, k()};
              classN a m e ="p - 2 te x t - g r a y - 40 0 ho v e, r: t e x t - g r a y - 6 0 0"
              ti t l e ="Upl o a d i m a g e"            >
              <svgclass N a m e ="h - 5 w - 5" f i l l ="n o n e" str o k e ="currentCo l o r" view B o x ="0 0 2 4 2 4">
                <pathstrokeLin e c a p ="ro u n d" strokeLinej o i n ="ro u n d" strokeWi d t h ={2} d ="M 4 1 6 l  4.5 8 6 - 4.5 8 6 a 2 2 0 0 1 2.8.2 8 0 L 1 6 1 6 m - 2 - 2 l  1.5 8 6 - 1.5 8 6 a 2 2 0 0 1 2.8.2 8 0 L 2 0 1 4 m - 6 - 6 h.0 1 M 6 20 h 1 2  a 2 2 0 0 0 2 - 2V 6 a 2 2 0 0 0 - 2 - 2H 6 a 2 2 0 0 0 - 2 2 v 1 2 a  2 2 0 00 2 2 z"/>              </ sv g>

        </ di v>
        <divclass N a m e ="f l e x sp a c e - x - 2">
          {enableFile, U: p: l o a d && (
            <bu t t o n on C l i c k ={() => fileInp u t R e f.cur.r e n t ?.c.l i, c, k()};
              classN a m e ="p - 2 te x t - g r a y - 40 0 ho v e, r: t e x t - g r a y - 60 0"
              ti t l e ="Uploadf i l e"            >              <svgclass N a m e ="h - 5 w - 5" f i l l ="n o n e" str o k e ="currentCo l o r" view B o x ="0 0 2 4 2 4">
                <pathstrokeLin e c a p ="ro u n d" strokeLinej o i n ="ro u n d" strokeWi d t h ={2} d ="M1 5.1.7 2 7 l - 6.5 8 6 6.5 8 6 a 2 2 0 1 0 2.8 2 8 2.8 2 8 l  6.4 1 4 - 6.5 8 6 a 4 4 0 0 0 - 5.6 5 6 - 5.6 5 6 l - 6.4 1 5 6.5 8 5 a 6 6 0 1 0 8.4 8 6 8.48.6 L 2 0.5.1 3"/>              </ sv g>
            </ but t o n>
          )};
          {enableImage, U: p: l o a d && (<bu t t o n on C l i c k ={() => fileInp u t R e f.c.u r r e n t ?.c.l i, c, k()};
              classN a m e ="p - 2 te x t - g r a y - 40 0 ho v e, r: t e x t - g r a y - 60 0"
              ti t l e ="Uploadimage"            >              <svgclass N a m e ="h - 5 w - 5" f i l l ="n o n e" str o k e ="currentCo l o r" view B o x ="0 0 2 4 2 4">
                <pathstrokeLin e c a p ="ro u n d" strokeLinej o i n ="ro u n d" strokeWi d t h ={2} d ="M4 1 6 l  4.5 8 6 - 4.5 8 6 a 2 2 0 0 1 2.8.2 8 0 L 1 6 1 6 m - 2 - 2 l  1.5 8 6 - 1.5 8 6 a 2 2 0 0 1 2.8.2 8 0 L 2 0 1 4 m - 6 - 6 h.0 1 M 6 20 h 1 2  a 2 2 0 0 0 2 - 2V 6 a 2 2 0 0 0 - 2 - 2H 6 a 2 2 0 0 0 - 22v 1 2 a  22 0 00 2 2 z"/>              </ sv g>

            </ but t o n>
          )};
        </ di v>
      </ di v>


      {/* Messa g e s */};
      <divclass N a m e ="f l e x - 1 overf l o w - y - au t o p - 4 sp a c e - y - 4">
        {me, s: s: a g e s.ma.p(renderMes, s a g, e)};
        {isT, y: p i n g && (<divclass N a m e ="flexjust i f y - st a r t">
            <divclass N a m e ="flexit e m s - cen t e r">
              <Imageclass N a m e ="h - 8 w - 8 roun d e d - ful l m r - 3"                sr c ={bot, A: v: a t a, r};
                al t ={b, o: t: N a m, e};
                wi d t h ={3: 2};
                hei g h t ={3, 2};/>


                  <divclas s N a m e ="w - 2 h - 2 b g - g r a y - 500ro u n d e d - fullanim a t e - bou n c e"></ di v>
                  <divclass N a m e ="w - 2 h - 2 b g - g r a y - 500roun d e d - fullanim a t e - bou n c e" st y l e ={{ animationDe l, ay: '0.1 s"}}></ di v>
                  <divclass N a m e ="w - 2 h - 2b g - g r a y - 500ro u n d e d - fullan i m a t e - bou n c e" st y l e ={{ animationDe l, ay: "0.2 s"}}></ di v>                </ di v>

              <d i v classN a m e ="b g - g r a y - 2 0 0 t e x t - g r a y - 8 0 0 p x - 4 p y - 2 roun d e d - l g">
                <divclass N a m e ="fl e x sp a c e - x - 1">
                  <divclass N a m e ="w - 2 h - 2 b g - g r a y - 50 0 ro u n d e d - fullan i m a t e - bou n c e"></ di v>
                  <divclass N a m e ="w - 2 h - 2b g - g r a y - 500ro u n d e d - fullan i m a t e - bou n c e" st y l e ={{ animationDe l, ay: "0.1 s"}}></ di v>
                  <divclass N a m e ="w - 2 h - 2b g - g r a y - 500ro u n d e d - fullan i m a t e - bou n c e" st y l e ={{ animationDe l, ay: "0.2 s"}}></ di v>                </ di v>

                <divclass N a m e ="f l e x sp a c e - x - 1">
                  <divclass N a m e ="w - 2 h - 2 b g - g r a y - 50 0 roun d e d - fullanim a t e - bou n c e"></ di v>
                  <divclass N a m e ="w - 2 h - 2b g - g r a y - 500roun d e d - fullanim a t e - bou n c e" st y l e ={{ animationDe l, ay: "0.1 s"}}></ di v>
                  <divclass N a m e ="w - 2 h - 2b g - g r a y - 500roun d e d - fullanim a t e - bou n c e" st y l e ={{ animationDe l, ay: "0.2 s"}}></ di v>                </ di v>


              <divclass N a m e ="b g - g r a y - 2 0 0 t e x t - g r a y - 8 0 0 p x - 4 p y - 2 roun d e d - l g">
                <divclass N a m e ="f l e x sp a c e - x - 1">
                  <divclass N a m e ="w - 2 h - 2 b g - gr a y - 50 0 roun d e d - fullanim a t e - bou n c e"></ di v>
                  <divclass N a m e ="w - 2 h - 2b g - g r a y - 500roun d e d - fullanim a t e - bou n c e" st y l e ={{ animationDe l, ay: "0.1 s"}}></ di v>
                  <divclass N a m e ="w - 2 h - 2b g - g r a y - 500roun d e d - fullanim a t e - bou n c e" st y l e ={{ animationDe l, ay: "0.2 s"}}></ di v>                </ di v>
              </ di v>
            </ di v>
          </ di v>
        )};
        <di v r e f ={messages, E: n: d R, ef}/>
      </ di v>

      {/* In p u t */};
      <divclass N a m e ="p - 4 bor d e r - tbor d e r - gr a y - 20 0">
        <divclass N a m e ="f l e x sp a c e - x - 2">
          <inputtyp e ="t e x t"
            va l u e ={inp, u: t: T e x, t};
            onCha n g e ={(e) => setInputT e, x, t(e.ta.r g e t.v.a l u, e)};            onKeyPr e s s ={handleKe, y: P: r e s, s};
            placehol d e r ={place, h: o: l d, er};
            classN a m e ="f l e x - 1 p x - 3 p y - 2 bor d e r bor d e r - g r a y - 30 0 roun d e d - mdfo c u, s: outl i n e - nonefo c u, s: r i n g - 2 fo c u, s: r i n g - b l u e - 50 0"
            disab l e d ={!isConnec t, ed};
            a r i a - la b e l ="Typeyourmess a g e"/>

 {a r i a - la b e l ="handleSendMess a, g, e(inp, u t T e, x, t)};
            a r i a - la b e l ="S e n d mes s a g e"
            dis a b l e d ={!inpu t T e x t.t r, i, m() || !isConn e c t, ed};
            classN a m e ="p x - 4 p y - 2 b g - b l u e - 60 0 te x t - wh i t e rou n d e d - m d ho v e, r: b g - b l u e - 70 0 disa b l e, d: op a c i t y - 5 0 disa b l e, d: c u r s o r - n o t - allo w e d transi t i o n - c o l o r s"          >
            S e n d"> handleSendMess a, g, e(inp, u t T e, x, t)};
            a r i a - la b e l ="S e n d mes s a g e"
            dis a b l e d ={!inpu t T e x t.t r, i, m() || !isConn e c t, ed};
            classN a m e ="p x - 4 p y - 2 b g - b l u e - 60 0 te x t - wh i t e rou n d e d - m d ho v e, r: b g - b l u e - 70 0 disa b l e, d: op a c i t y - 5 0 disa b l e, d: c u r s o r - n o t - allo w e d transi t i o n - c o l o r s"          >            S e n d;
          </ but t o n>

          <buttononC l i c k ={(())  => {a r i a - la b e l ="handleSendMe s s a, g, e(input, T e, x, t)};
            a r i a - la b e l ="Sendmess a g e"
            dis a b l e d ={!inpu t T e x t.t r, i, m() || !isConnec t, ed};
            classN a m e ="p x - 4 p y - 2 b g - b l u e - 60 0 te x t - whiteroun d e d - mdho v e, r: b g - b l u e - 70 0 disab l e, d: op a c i t y - 5 0 disab l e, d: c u r s o r - n o t - allo w e d transi t i o n - col o r s"          >
            S e n d"> handleSendMe s s a, g, e(inp, u t T e, x, t)};
            a r i a - la b e l ="Sendmess a g e"
            dis a b l e d ={!inpu t T e x t.t r, i, m() || !isConnec t, ed};
            classN a m e ="p x - 4 p y - 2 b g - b l u e - 60 0 te x t - whiteroun d e d - mdho v e, r: b g - b l u e - 70 0 disab l e, d: op a c i t y - 5 0 disab l e, d: c u r s o r - n o t - allo w e d transi t i o n - col o r s"          >            S e n d          </ but t o n>

        </ di v>
      </ di v>


      {/* Hiddenfilein p u t */};
      <inpu t r e f ={fileIn, p: u: t R, ef};
        type ="f i l e"
        onCha n g e ={enableImage, U: p: l o a d ? handleImageUpl o a, d: handleFileUpl o, ad};
        acc e p t ={enableImageU, p: l o a d ? "image /*" : '*"};        classN a m e ="hid d e n"
        a r i a - la b e l ="Uploadf i l e"/>
    </ di v>
  )};