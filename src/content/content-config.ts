<<<<<<< HEAD
export interface BlogPost { id: stri n g; tit l e: stri n g; excer p t: stri n g; da t e: stri n g; catego r y: stri n g; readTi m e: stri n g; ima g e: stri n g; featur e d ? : boole a n; sl u g: stri n g; ta g s: str i n g [ ]; } export interface CaseStudy { id: stri n g; tit l e: stri n g; excer p t: stri n g; compa n y: stri n g; indust r y: stri n g; challen g e: stri n g; soluti o n: stri n g; resu l t: stri n g; metr i c: stri n g; featur e d ? : boole a n; sl u g: stri n g; ta g s: str i n g [ ]; } export interface Service { id: stri n g; tit l e: stri n g; descripti o n: stri n g; catego r y: stri n g; prici n g: { starti n g: stri n g; popul a r ? : bool e a n; }; featur e s: stri n g [ ]; metri c s ? : Arr a y < { val u e: stri n g; lab e l: str i n g; } > ; testimoni a l ? : { quo t e: stri n g; auth o r: stri n g; compa n y: str i n g; }; c t a: { prima r y: stri n g; seconda r y: str i n g; }; ic o n: stri n g; featur e d ? : boole a n; sl u g: stri n g; ta g s: str i n g [ ]; } export interface PromotionalBanner { id: stri n g; messa g e: stri n g; ctaTe x t: stri n g; ctaLi n k: stri n g; backgroundCol o r: stri n g; textCol o r: stri n g; showClo s e: boole a n; autoHi d e: boole a n; hideAft e r: numb e r; acti v e: boole a n; priori t y: num b e r; } / / Blog Posts Configuration export const blogPosts: BlogPost[] = [ { id: ' ai - revoluti o n - 2 0 2 5 ' tit l e: ' AI Revolution 2025: The Complete Business Transformation Gui d e ' excer p t: ' Discover how AI is reshaping industries and creating unprecedented opportunities for growth in 20 2 5. ' da t e: ' Januar y 1 7 20 2 5 ' catego r y: ' AI Tren d s ' readTi m e: ' 12 m i n ' ima g e: ' 🚀 ' featur e d: t r u e sl u g: ' / bl o g / ai - revoluti o n - 2 0 2 5 ' ta g s: [ ' A I ' ' Business Strateg y ' ' Transformati o n ' ' 2025 Trend s ' ] } { id: ' ai - workfl o w - automat i o n ' tit l e: ' AI Workflow Automation: Transforming Business Operation s ' excer p t: ' Discover how AI - powered workflow automation is revolutionizing business proces s e s reducing manual work by 8 0 % and improving efficiency across industrie s. ' da t e: ' Januar y 1 5 20 2 5 ' catego r y: ' Automat i o n ' readTi m e: ' 6 m i n ' ima g e: ' 🤖 ' featur e d: fa l s e sl u g: ' / bl o g / ai - workfl o w - automat i o n ' ta g s: [ ' Automat i o n ' ' Workfl o w ' ' AI ' ' Productivi t y ' ] } { id: ' clo u d - migrati o n - be s t - practi c e s ' tit l e: ' Cloud Migration Best Practices for 202 5 ' excer p t: ' Learn the essential strategies for successful cloud migrati o n including zer o - downtime approaches and cost optimization techniques. ' da t e: ' Januar y 1 2 20 2 5 ' catego r y: ' Cl o u d ' readTi m e: ' 7 m i n ' ima g e: ' ☁️ ' featur e d: fa l s e sl u g: ' / bl o g / clo u d - migrati o n - be s t - practi c e s ' ta g s: [ ' Cl o u d ' ' Migrati o n ' ' Best Practice s ' ' DevO p s ' ] } { id: ' cybersecuri t y - ai - er a ' tit l e: ' Cybersecurity in the AI Er a: Protecting Your Digital Ass e t s ' excer p t: ' Explore advanced cybersecurity strategies for AI - powered environmen t s including zer o - trust architecture and automated threat detection. ' da t e: ' Januar y 1 0 20 2 5 ' catego r y: ' Secur i t y ' readTi m e: ' 5 m i n ' ima g e: ' 🔒 ' featur e d: fa l s e sl u g: ' / bl o g / cybersecuri t y - ai - er a ' ta g s: [ ' Cybersecur i t y ' ' AI Securit y ' ' Zero Trus t ' ' Threat Detectio n ' ] } { id: ' da t a - analyti c s - revolut i o n ' tit l e: ' Data Analytics Revolution: From Insights to Act i o n ' excer p t: ' See how modern data analytics platforms are transforming raw data into actionable business insights with re a l - time dashboards and predictive modeli n g. ' da t e: ' Janua r y 8 20 2 5 ' catego r y: ' Analyt i c s ' readTi m e: ' 6 m i n ' ima g e: ' 📊 ' featur e d: fa l s e sl u g: ' / bl o g / da t a - analyti c s - revolut i o n ' ta g s: [ ' Data Analyti c s ' ' Insigh t s ' ' Predictive Modelin g ' ' Business Intelligenc e ' ] } { id: ' devo p s - automati o n - scal i n g ' tit l e: ' DevOps Automatio n: Scaling Infrastructure with Intellige n c e ' excer p t: ' Learn how automated DevOps practices are enabling rapid deploymen t infrastructure scalin g and continuous integration at enterprise scale. ' da t e: ' Janua r y 5 20 2 5 ' catego r y: ' Dev O p s ' readTi m e: ' 8 m i n ' ima g e: ' ⚙️ ' featur e d: fa l s e sl u g: ' / bl o g / devo p s - automati o n - scal i n g ' ta g s: [ ' Dev O p s ' ' Automati o n ' ' Infrastructu r e ' ' CI / CD ' ] } { id: ' ai - virtu a l - assistan t s - custom e r - serv i c e ' tit l e: ' The Rise of AI Virtual Assistants in Customer Servic e ' excer p t: ' Discover how AI virtual assistants are revolutionizing customer support with 2 4 / 7 availabili t y natural language processing and personalized interactions. ' da t e: ' Janua r y 3 20 2 5 ' catego r y: ' A I ' readTi m e: ' 5 m i n ' ima g e: ' 💬 ' featur e d: fa l s e sl u g: ' / bl o g / ai - virtu a l - assistan t s - custom e r - serv i c e ' ta g s: [ ' A I ' ' Virtual Assistan t ' ' Customer Servic e ' ' N L P ' ] } ]; / / Case Studies Configuration export const caseStudies: CaseStudy[] = [ { id: ' techco r p - ai - transformat i o n ' tit l e: ' TechCorp AI Transformation: 90 % Efficiency Ga i n ' excer p t: ' How a leading e - commerce company transformed their operations with AI - powered automati o n achieving unprecedented efficiency gains and cost savin g s. ' compa n y: ' TechCorp I n c. ' indust r y: ' E - comme r c e ' challen g e: ' Manual data processing taking 40 hours / w e e k ' soluti o n: ' AI Data Analytics automat i o n ' resu l t: ' 90 % time reducti o n 60 % cost saving s ' metr i c: ' $500K saved annuall y ' featur e d: t r u e sl u g: ' / ca s e - studi e s / techco r p - ai - transformat i o n ' ta g s: [ ' AI Transformati o n ' ' E - commer c e ' ' Automati o n ' ' Cost Saving s ' ] } { id: ' healthte c h - soluti o n s ' tit l e: ' HealthTech Solution s: AI Virtual Assistant Succ e s s ' excer p t: ' Healthcare company achieves 95 % customer satisfaction with AI virtual assistant implementat i o n. ' compa n y: ' HealthTech Solutio n s ' indust r y: ' Healthc a r e ' challen g e: ' Customer support overwhelmed with queri e s ' soluti o n: ' AI Virtual Assistant implementat i o n ' resu l t: ' 80 % faster response tim e 24 / 7 suppor t ' metr i c: ' 95 % customer satisfacti o n ' featur e d: t r u e sl u g: ' / ca s e - studi e s / healthte c h - soluti o n s ' ta g s: [ ' Healthc a r e ' ' AI Assistan t ' ' Customer Servic e ' ' Automati o n ' ] } { id: ' financefl o w - automat i o n ' tit l e: ' FinanceFl o w: AI Workflow Automation Succ e s s ' excer p t: ' Fintech startup achieves 3 0 0 % ROI with AI workflow automation platfor m. ' compa n y: ' FinanceFlow L t d. ' indust r y: ' Fint e c h ' challen g e: ' Complex workflow bottleneck s ' soluti o n: ' AI Workflow Automation platf o r m ' resu l t: ' 75 % process efficiency improvemen t ' metr i c: ' 3 0 0 % ROI in 6 mon t h s ' featur e d: t r u e sl u g: ' / ca s e - studi e s / financefl o w - automat i o n ' ta g s: [ ' Fint e c h ' ' Workflow Automatio n ' ' R O I ' ' Process Efficienc y ' ] } ]; / / Services Configuration export cons; t service s: Servi c e [ ] = [ { id: ' ai - analyti c s - platf o r m ' tit l e: ' AI Analytics Platfor m ' descripti o n: ' Transform data into actionable insights with predictive modeling and re a l - time dashboar d s ' catego r y: ' AI & Analyt i c s ' prici n g: { starti n g: ' $1 9 9 / mo n t h ' popul a r: t r u e } featur e s: [ ' Predictive Analyti c s ' ' Re a l - time Dashboard s ' ' Data Integratio n ' ' Automated Reportin g ' ' Machine Learning Models ' ' Custom Visualization s ' ] metri c s: [ { val u e: ' 8 5 % ' lab e l: ' Faster Decision Makin g ' } { val u e: ' 9 8 % ' lab e l: ' Prediction Accura c y ' } { val u e: ' 30 0 % ' lab e l: ' ROI Improveme n t ' } ] testimoni a l: { quo t e: ' The AI Analytics Platform transformed how we make decisions. We can now predict trends and optimize operations like never befo r e. ' auth o r: ' Sarah Ch e n ' compa n y: ' TechCorp I n c. ' } c t a: { prima r y: ' Start Free Tria l ' seconda r y: ' View Case Studie s ' } ic o n: ' 📊 ' featur e d: t r u e sl u g: ' / servic e s / ai - analyti c s - platf o r m ' ta g s: [ ' Analyt i c s ' ' AI ' ' Data Visualizatio n ' ' Predictive Modelin g ' ] } { id: ' ai - workfl o w - automat i o n ' tit l e: ' AI Workflow Automatio n ' descripti o n: ' Automate business processes with intelligent workflow design and smart trigg e r s ' catego r y: ' AI & Automat i o n ' prici n g: { starti n g: ' $1 4 9 / mo n t h ' } featur e s: [ ' Process Automati o n ' ' Smart Trigger s ' ' Performance Monitorin g ' ' Exception Handlin g ' ' Integration API s ' ' Custom Workflow s ' ] metri c s: [ { val u e: ' 7 5 % ' lab e l: ' Process Efficien c y ' } { val u e: ' 6 0 % ' lab e l: ' Time Savin g s ' } { val u e: ' 9 0 % ' lab e l: ' Error Reducti o n ' } ] c t a: { prima r y: ' Get Start e d ' seconda r y: ' View De m o ' } ic o n: ' ⚙️ ' featur e d: t r u e sl u g: ' / servic e s / ai - workfl o w - automat i o n ' ta g s: [ ' Automat i o n ' ' Workfl o w ' ' AI ' ' Process Optimizatio n ' ] } { id: ' ai - virtu a l - assist a n t ' tit l e: ' AI Virtual Assistan t ' descripti o n: ' 24 / 7 intelligent customer support with natural language processi n g ' catego r y: ' AI & Customer Servi c e ' prici n g: { starti n g: ' $99 / mo n t h ' } featur e s: [ ' 24 / 7 Suppo r t ' ' Mul t i - chann e l ' ' Personalized Response s ' ' Natural Language Processing ' ' Sentiment Analysi s ' ' Escalation Managemen t ' ] metri c s: [ { val u e: ' 9 5 % ' lab e l: ' Customer Satisfacti o n ' } { val u e: ' 8 0 % ' lab e l: ' Faster Respon s e ' } { val u e: ' 5 0 % ' lab e l: ' Cost Reducti o n ' } ] c t a: { prima r y: ' Try De m o ' seconda r y: ' Learn Mo r e ' } ic o n: ' 💬 ' featur e d: t r u e sl u g: ' / servic e s / ai - virtu a l - assist a n t ' ta g s: [ ' AI Assista n t ' ' Customer Servic e ' ' N L P ' ' Automati o n ' ] } { id: ' clo u d - migrat i o n ' tit l e: ' Cloud Migrati o n ' descripti o n: ' Seamless migration to cloud infrastructure with zero downti m e ' catego r y: ' Cloud Servic e s ' prici n g: { starti n g: ' $ 2 9 9 9 ' } featur e s: [ ' Zero Downti m e ' ' Security Complianc e ' ' Cost Optimizatio n ' ' Performance Monitorin g ' ' Disaster Recover y ' ' Scalability Plannin g ' ] c t a: { prima r y: ' Get Quo t e ' seconda r y: ' View Proce s s ' } ic o n: ' ☁️ ' featur e d: fa l s e sl u g: ' / servic e s / clo u d - migrat i o n ' ta g s: [ ' Cl o u d ' ' Migrati o n ' ' Infrastructu r e ' ' DevO p s ' ] } { id: ' devo p s - automat i o n ' tit l e: ' DevOps Automati o n ' descripti o n: ' Automate C I / CD pipelines and infrastructure manageme n t ' catego r y: ' DevO p s & Infrastruct u r e ' prici n g: { starti n g: ' $3 9 9 / mo n t h ' } featur e s: [ ' CI / CD Pipelin e s ' ' Infrastructure as Code ' ' Au t o - scali n g ' ' Monitori n g & Alerti n g ' ' Security Scannin g ' ' Performance Optimizatio n ' ] c t a: { prima r y: ' Start Set u p ' seconda r y: ' View Benefi t s ' } ic o n: ' 🔧 ' featur e d: fa l s e sl u g: ' / servic e s / devo p s - automat i o n ' ta g s: [ ' Dev O p s ' ' CI / CD ' ' Infrastructu r e ' ' Automati o n ' ] } { id: ' cybersecuri t y - consult i n g ' tit l e: ' Cybersecurity Consulti n g ' descripti o n: ' Advanced threat detection and zer o - trust security architectur e ' catego r y: ' Securi t y & Complia n c e ' prici n g: { starti n g: ' $5 9 9 / mo n t h ' } featur e s: [ ' Threat Detecti o n ' ' Ze r o - trust Architectur e ' ' Complian c e ' ' Security Audit s ' ' Incident Respons e ' ' Security Trainin g ' ] c t a: { prima r y: ' Security Aud i t ' seconda r y: ' View Servic e s ' } ic o n: ' 🛡️ ' featur e d: fa l s e sl u g: ' / servic e s / cybersecuri t y - consult i n g ' ta g s: [ ' Cybersecur i t y ' ' Zero Trus t ' ' Complian c e ' ' Threat Detectio n ' ] } ]; / / Promotional Banners Configuration export const promotionalBanners: PromotionalBanner[] = [ { id: ' fre s h - conte n t - o c t - 2 0 2 5 ' messa g e: ' ✨ N e w: Governance Scorecards 202 6 Freshne s s‑Aware RAG v2 Edge Flags 2026 ' ctaTe x t: ' Read the lates t ' ctaLi n k: ' / b l o g ' backgroundCol o r: ' bg - gradie n t - to - r fro m - indi g o - 600 t o - purp l e - 60 0 ' textCol o r: ' te x t - wh i t e ' showClo s e: t r u e autoHi d e: t r u e hideAft e r: 1 5 acti v e: t r u e priori t y: 0 } { id: ' governan c e - scorecar d s - 2 0 2 6 ' messa g e: ' 📚 AI Governance 2026: Scorecards Engineers Actually Us e ' ctaTe x t: ' Read Artic l e ' ctaLi n k: ' / bl o g / ai - governan c e - scorecar d s - 2 0 2 6 ' backgroundCol o r: ' bg - gradie n t - to - r fro m - emera l d - 600 t o - te a l - 60 0 ' textCol o r: ' te x t - wh i t e ' showClo s e: t r u e autoHi d e: t r u e hideAft e r: 1 8 acti v e: t r u e priori t y: 1 } { id: ' freshne s s - awa r e - r a g - v 2 ' messa g e: ' 🧭 Freshne s s‑Aware RAG v2: TTL Budgets and S L A s ' ctaTe x t: ' Expl o r e ' ctaLi n k: ' / bl o g / freshne s s - awa r e - r a g - v 2 ' backgroundCol o r: ' bg - gradie n t - to - r fro m - cy a n - 600 t o - bl u e - 60 0 ' textCol o r: ' te x t - wh i t e ' showClo s e: t r u e autoHi d e: t r u e hideAft e r: 1 6 acti v e: t r u e priori t y: 2 } { id: ' ed g e - fla g s - bluepri n t - 2 0 2 6 ' messa g e: ' ⚡ Edge Flags Blueprint 20 2 6: < 100ms Global Release s ' ctaTe x t: ' Read Bluepri n t ' ctaLi n k: ' / bl o g / ed g e - fla g s - bluepri n t - 2 0 2 6 ' backgroundCol o r: ' bg - gradie n t - to - r fro m - purp l e - 600 t o - pi n k - 60 0 ' textCol o r: ' te x t - wh i t e ' showClo s e: t r u e autoHi d e: t r u e hideAft e r: 1 6 acti v e: t r u e priori t y: 2 } { id: ' n e w - bl o g - ban n e r ' messa g e: ' 🔥 N e w: AI Platform Engineering 20 2 5 + Secure ML Supply Ch a i n ' ctaTe x t: ' Read N o w ' ctaLi n k: ' / bl o g / ai - platfo r m - engineeri n g - 2 0 2 5 ' backgroundCol o r: ' bg - gradie n t - to - r fro m - oran g e - 600 t o - r e d - 60 0 ' textCol o r: ' te x t - wh i t e ' showClo s e: t r u e autoHi d e: t r u e hideAft e r: 1 5 acti v e: t r u e priori t y: 1 } { id: ' ai - ri s k - regist e r - ban n e r ' messa g e: ' 🛡️ N e w: AI Risk Register That Drives Actio n ' ctaTe x t: ' Read Playbo o k ' ctaLi n k: ' / bl o g / ai - ri s k - regist e r - 2 0 2 5 ' backgroundCol o r: ' bg - gradie n t - to - r fro m - r e d - 600 t o - ro s e - 60 0 ' textCol o r: ' te x t - wh i t e ' showClo s e: t r u e autoHi d e: t r u e hideAft e r: 1 6 acti v e: t r u e priori t y: 1 } { id: ' practic a l - eva l s - ban n e r ' messa g e: ' 📈 Practical AI Evals That Predict Outcome s ' ctaTe x t: ' See Scorecar d s ' ctaLi n k: ' / bl o g / practic a l - eva l s - scorecar d s - 2 0 2 5 ' backgroundCol o r: ' bg - gradie n t - to - r fro m - emera l d - 600 t o - te a l - 60 0 ' textCol o r: ' te x t - wh i t e ' showClo s e: t r u e autoHi d e: t r u e hideAft e r: 1 8 acti v e: t r u e priori t y: 2 } { id: ' analyti c s - platfo r m - ban n e r ' messa g e: ' 🚀 Laun c h: AI Analytics Platform - Transform Data into Actionable Insigh t s ' ctaTe x t: ' Explore Platfo r m ' ctaLi n k: ' / servic e s / ai - analyti c s - platf o r m ' backgroundCol o r: ' bg - gradie n t - to - r fro m - te a l - 600 t o - cy a n - 60 0 ' textCol o r: ' te x t - wh i t e ' showClo s e: t r u e autoHi d e: t r u e hideAft e r: 1 8 acti v e: t r u e priori t y: 2 } { id: ' techco r p - succe s s - ban n e r ' messa g e: ' 🏆 Success Stor y: TechCorp Achieved 90 % Efficiency Gain with AI Transformati o n ' ctaTe x t: ' View Case Stud y ' ctaLi n k: ' / ca s e - studi e s / techco r p - ai - transformat i o n ' backgroundCol o r: ' bg - gradie n t - to - r fro m - gre e n - 600 t o - emera l d - 60 0 ' textCol o r: ' te x t - wh i t e ' showClo s e: t r u e autoHi d e: t r u e hideAft e r: 2 0 acti v e: t r u e priori t y: 3 } { id: ' fr e e - tri a l - ban n e r ' messa g e: ' 🎯 Limited Tim e: 30 - Day Free Trial for AI Analytics Platfo r m - No Credit Card Requi r e d ' ctaTe x t: ' Start Free Tria l ' ctaLi n k: ' / servic e s / ai - analyti c s - platfo r m # pric i n g ' backgroundCol o r: ' bg - gradie n t - to - r fro m - yell o w - 600 t o - oran g e - 60 0 ' textCol o r: ' te x t - wh i t e ' showClo s e: t r u e autoHi d e: fa l s e hideAft e r: 0 acti v e: t r u e priori t y: 4 } { id: ' clo u d - fino p s - guardrai l s - ban n e r ' messa g e: ' 💸 Cloud FinOps Guardrails Engineers Actually Us e ' ctaTe x t: ' Cut Spe n d ' ctaLi n k: ' / bl o g / clo u d - fino p s - guardrai l s - 2 0 2 5 ' backgroundCol o r: ' bg - gradie n t - to - r fro m - s k y - 600 t o - bl u e - 60 0 ' textCol o r: ' te x t - wh i t e ' showClo s e: t r u e autoHi d e: t r u e hideAft e r: 1 6 acti v e: t r u e priori t y: 2 } { id: ' practic a l - eva l s - 20 2 5 - ban n e r ' messa g e: ' 📈 Practical AI Evals That Predict Business Outco m e s ' ctaTe x t: ' See Scorecar d s ' ctaLi n k: ' / bl o g / practic a l - eva l s - scorecar d s - 2 0 2 5 ' backgroundCol o r: ' bg - gradie n t - to - r fro m - indi g o - 600 t o - purp l e - 60 0 ' textCol o r: ' te x t - wh i t e ' showClo s e: t r u e autoHi d e: t r u e hideAft e r: 1 6 acti v e: t r u e priori t y: 2 } { id: ' serverle s s - inferen c e - cos t s - ban n e r ' messa g e: ' 🧰 Serverless Inference Cost Playb o o k ' ctaTe x t: ' Optim i z e ' ctaLi n k: ' / bl o g / serverle s s - inferen c e - co s t - playbo o k - 2 0 2 5 ' backgroundCol o r: ' bg - gradie n t - to - r fro m - emera l d - 600 t o - te a l - 60 0 ' textCol o r: ' te x t - wh i t e ' showClo s e: t r u e autoHi d e: t r u e hideAft e r: 1 6 acti v e: t r u e priori t y: 3 } ]; / / Utility functions for content management export cons; t getFeaturedConten t = ( ) = > { retu r n { blogPos t s: blogPos t s.filt e r ( po s t = > po s t.feat u r e d ) caseStudi e s: caseStudi e s.filt e r ( stu d y = > stu d y.feat u r e d ) servic e s: servic e s.filt e r ( servi c e = > servi c e.feat u r e d ) }; }; export const getActiveBanners = ( ) = > { return promotionalBanner s .filt e r ( bann e r = > bann e r.act i v e ) .so r t ( ( a b ) = > a.priori t y - b.priori t y ); }; export const getContentByTag = ( t a g: str i n g ) = > { retu r n { blogPos t s: blogPos t s.filt e r ( po s t = > po s t.ta g s.includ e s ( t a g ) ) caseStudi e s: caseStudi e s.filt e r ( stu d y = > stu d y.ta g s.includ e s ( t a g ) ) servic e s: servic e s.filt e r ( servi c e = > servi c e.ta g s.includ e s ( t a g ) ) }; }; export const getRecentContent = ( lim i t: numb e r = 3 ) = > { const allContent = [ ...blogPos t s.m a p ( po s t = > ( { ...po s t ty p e: ' bl o g ' as con s t } ) ) ...caseStudi e s.m a p ( stu d y = > ( { ...st u d y ty p e: ' ca s e - stu d y ' as con s t } ) ) ...servic e s.m a p ( servi c e = > ( { ...serv i c e ty p e: ' servi c e ' as con s t } ) ) ]; return allConten t .so r t ( ( a b ) = > { const aTime = ' da t e ' i n a ? new Dat e ( ( a a s { da t e: st r i n g } ) .da t e ) .getTi m e ( ): 0; const bTime = ' da t e ' i n b ? new Dat e ( ( b a s { da t e: st r i n g } ) .da t e ) .getTi m e ( ): 0; return bTim e - aTi m e; } ) .sli c e ( 0 lim i t ); }; $ $ 
=======
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
  slug: string;
  tags: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  excerpt: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metric: string;
  featured?: boolean;
  slug: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  pricing: {
    starting: string;
    popular?: boolean;
  };
  features: string[];
  metrics?: Array<{
    value: string;
    label: string;
  }>;
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
  cta: {
    primary: string;
    secondary: string;
  };
  icon: string;
  featured?: boolean;
  slug: string;
  tags: string[];
}

export interface PromotionalBanner {
  id: string;
  message: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor: string;
  textColor: string;
  showClose: boolean;
  autoHide: boolean;
  hideAfter: number;
  active: boolean;
  priority: number;
}

// Blog Posts Configuration
export const blogPosts: BlogPost[] = [
  {
    id: 'ai-revolution-2025',
    title: 'AI Revolution 2025: The Complete Business Transformation Guide',
    excerpt: 'Discover how AI is reshaping industries and creating unprecedented opportunities for growth in 2025.',
    date: 'January 17, 2025',
    category: 'AI Trends',
    readTime: '12 min',
    image: '🚀',
    featured: true,
    slug: '/blog/ai-revolution-2025',
    tags: ['AI', 'Business Strategy', 'Transformation', '2025 Trends'],
  },
  {
    id: 'ai-workflow-automation',
    title: 'AI Workflow Automation: Transforming Business Operations',
    excerpt: 'Discover how AI-powered workflow automation is revolutionizing business processes, reducing manual work by 80% and improving efficiency across industries.',
    date: 'January 15, 2025',
    category: 'Automation',
    readTime: '6 min',
    image: '🤖',
    featured: false,
    slug: '/blog/ai-workflow-automation',
    tags: ['Automation', 'Workflow', 'AI', 'Productivity'],
  },
  {
    id: 'cloud-migration-best-practices',
    title: 'Cloud Migration Best Practices for 2025',
    excerpt: 'Learn the essential strategies for successful cloud migration, including zero-downtime approaches and cost optimization techniques.',
    date: 'January 12, 2025',
    category: 'Cloud',
    readTime: '7 min',
    image: '☁️',
    featured: false,
    slug: '/blog/cloud-migration-best-practices',
    tags: ['Cloud', 'Migration', 'Best Practices', 'DevOps'],
  },
  {
    id: 'cybersecurity-ai-era',
    title: 'Cybersecurity in the AI Era: Protecting Your Digital Assets',
    excerpt: 'Explore advanced cybersecurity strategies for AI-powered environments, including zero-trust architecture and automated threat detection.',
    date: 'January 10, 2025',
    category: 'Security',
    readTime: '5 min',
    image: '🔒',
    featured: false,
    slug: '/blog/cybersecurity-ai-era',
    tags: ['Cybersecurity', 'AI Security', 'Zero Trust', 'Threat Detection'],
  },
  {
    id: 'data-analytics-revolution',
    title: 'Data Analytics Revolution: From Insights to Action',
    excerpt: 'See how modern data analytics platforms are transforming raw data into actionable business insights with real-time dashboards and predictive modeling.',
    date: 'January 8, 2025',
    category: 'Analytics',
    readTime: '6 min',
    image: '📊',
    featured: false,
    slug: '/blog/data-analytics-revolution',
    tags: [
      'Data Analytics',
      'Insights',
      'Predictive Modeling',
      'Business Intelligence',
    ],
  },
  {
    id: 'devops-automation-scaling',
    title: 'DevOps Automation: Scaling Infrastructure with Intelligence',
    excerpt: 'Learn how automated DevOps practices are enabling rapid deployment, infrastructure scaling, and continuous integration at enterprise scale.',
    date: 'January 5, 2025',
    category: 'DevOps',
    readTime: '8 min',
    image: '⚙️',
    featured: false,
    slug: '/blog/devops-automation-scaling',
    tags: ['DevOps', 'Automation', 'Infrastructure', 'CI/CD'],
  },
  {
    id: 'ai-virtual-assistants-customer-service',
    title: 'The Rise of AI Virtual Assistants in Customer Service',
    excerpt: 'Discover how AI virtual assistants are revolutionizing customer support with 24/7 availability, natural language processing, and personalized interactions.',
    date: 'January 3, 2025',
    category: 'AI',
    readTime: '5 min',
    image: '💬',
    featured: false,
    slug: '/blog/ai-virtual-assistants-customer-service',
    tags: ['AI', 'Virtual Assistant', 'Customer Service', 'NLP'],
  },
];

// Case Studies Configuration
export const caseStudies: CaseStudy[] = [
  {
    id: 'techcorp-ai-transformation',
    title: 'TechCorp AI Transformation: 90% Efficiency Gain',
    excerpt: 'How a leading e-commerce company transformed their operations with AI-powered automation, achieving unprecedented efficiency gains and cost savings.',
    company: 'TechCorp Inc.',
    industry: 'E-commerce',
    challenge: 'Manual data processing taking 40 hours/week',
    solution: 'AI Data Analytics automation',
    result: '90% time reduction, 60% cost savings',
    metric: '$500K saved annually',
    featured: true,
    slug: '/case-studies/techcorp-ai-transformation',
    tags: ['AI Transformation', 'E-commerce', 'Automation', 'Cost Savings'],
  },
  {
    id: 'healthtech-solutions',
    title: 'HealthTech Solutions: AI Virtual Assistant Success',
    excerpt: 'Healthcare company achieves 95% customer satisfaction with AI virtual assistant implementation.',
    company: 'HealthTech Solutions',
    industry: 'Healthcare',
    challenge: 'Customer support overwhelmed with queries',
    solution: 'AI Virtual Assistant implementation',
    result: '80% faster response time, 24/7 support',
    metric: '95% customer satisfaction',
    featured: true,
    slug: '/case-studies/healthtech-solutions',
    tags: ['Healthcare', 'AI Assistant', 'Customer Service', 'Automation'],
  },
  {
    id: 'financeflow-automation',
    title: 'FinanceFlow: AI Workflow Automation Success',
    excerpt: 'Fintech startup achieves 300% ROI with AI workflow automation platform.',
    company: 'FinanceFlow Ltd.',
    industry: 'Fintech',
    challenge: 'Complex workflow bottlenecks',
    solution: 'AI Workflow Automation platform',
    result: '75% process efficiency improvement',
    metric: '300% ROI in 6 months',
    featured: true,
    slug: '/case-studies/financeflow-automation',
    tags: ['Fintech', 'Workflow Automation', 'ROI', 'Process Efficiency'],
  },
];

// Services Configuration
export const services: Service[] = [
  {
    id: 'ai-analytics-platform',
    title: 'AI Analytics Platform',
    description: 'Transform data into actionable insights with predictive modeling and real-time dashboards',
    category: 'AI & Analytics',
    pricing: {
      starting: '$199/month',
      popular: true,
    },
    features: [
      'Predictive Analytics',
      'Real-time Dashboards',
      'Data Integration',
      'Automated Reporting',
      'Machine Learning Models',
      'Custom Visualizations',
    ],
    metrics: [
      { value: '85%', label: 'Faster Decision Making' },
      { value: '98%', label: 'Prediction Accuracy' },
      { value: '300%', label: 'ROI Improvement' },
    ],
    testimonial: {
      quote:
        'The AI Analytics Platform transformed how we make decisions. We can now predict trends and optimize operations like never before.',
      author: 'Sarah Chen',
      company: 'TechCorp Inc.',
    },
    cta: {
      primary: 'Start Free Trial',
      secondary: 'View Case Studies',
    },
    icon: '📊',
    featured: true,
    slug: '/services/ai-analytics-platform',
    tags: ['Analytics', 'AI', 'Data Visualization', 'Predictive Modeling'],
  },
  {
    id: 'ai-workflow-automation',
    title: 'AI Workflow Automation',
    description: 'Automate business processes with intelligent workflow design and smart triggers',
    category: 'AI & Automation',
    pricing: {
      starting: '$149/month',
    },
    features: [
      'Process Automation',
      'Smart Triggers',
      'Performance Monitoring',
      'Exception Handling',
      'Integration APIs',
      'Custom Workflows',
    ],
    metrics: [
      { value: '75%', label: 'Process Efficiency' },
      { value: '60%', label: 'Time Savings' },
      { value: '90%', label: 'Error Reduction' },
    ],
    cta: {
      primary: 'Get Started',
      secondary: 'View Demo',
    },
    icon: '⚙️',
    featured: true,
    slug: '/services/ai-workflow-automation',
    tags: ['Automation', 'Workflow', 'AI', 'Process Optimization'],
  },
  {
    id: 'ai-virtual-assistant',
    title: 'AI Virtual Assistant',
    description: '24/7 intelligent customer support with natural language processing',
    category: 'AI & Customer Service',
    pricing: {
      starting: '$99/month',
    },
    features: [
      '24/7 Support',
      'Multi-channel',
      'Personalized Responses',
      'Natural Language Processing',
      'Sentiment Analysis',
      'Escalation Management',
    ],
    metrics: [
      { value: '95%', label: 'Customer Satisfaction' },
      { value: '80%', label: 'Faster Response' },
      { value: '50%', label: 'Cost Reduction' },
    ],
    cta: {
      primary: 'Try Demo',
      secondary: 'Learn More',
    },
    icon: '💬',
    featured: true,
    slug: '/services/ai-virtual-assistant',
    tags: ['AI Assistant', 'Customer Service', 'NLP', 'Automation'],
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration',
    description: 'Seamless migration to cloud infrastructure with zero downtime',
    category: 'Cloud Services',
    pricing: {
      starting: '$2,999',
    },
    features: [
      'Zero Downtime',
      'Security Compliance',
      'Cost Optimization',
      'Performance Monitoring',
      'Disaster Recovery',
      'Scalability Planning',
    ],
    cta: {
      primary: 'Get Quote',
      secondary: 'View Process',
    },
    icon: '☁️',
    featured: false,
    slug: '/services/cloud-migration',
    tags: ['Cloud', 'Migration', 'Infrastructure', 'DevOps'],
  },
  {
    id: 'devops-automation',
    title: 'DevOps Automation',
    description: 'Automate CI/CD pipelines and infrastructure management',
    category: 'DevOps & Infrastructure',
    pricing: {
      starting: '$399/month',
    },
    features: [
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Auto-scaling',
      'Monitoring & Alerting',
      'Security Scanning',
      'Performance Optimization',
    ],
    cta: {
      primary: 'Start Setup',
      secondary: 'View Benefits',
    },
    icon: '🔧',
    featured: false,
    slug: '/services/devops-automation',
    tags: ['DevOps', 'CI/CD', 'Infrastructure', 'Automation'],
  },
  {
    id: 'cybersecurity-consulting',
    title: 'Cybersecurity Consulting',
    description: 'Advanced threat detection and zero-trust security architecture',
    category: 'Security & Compliance',
    pricing: {
      starting: '$599/month',
    },
    features: [
      'Threat Detection',
      'Zero-trust Architecture',
      'Compliance',
      'Security Audits',
      'Incident Response',
      'Security Training',
    ],
    cta: {
      primary: 'Security Audit',
      secondary: 'View Services',
    },
    icon: '🛡️',
    featured: false,
    slug: '/services/cybersecurity-consulting',
    tags: ['Cybersecurity', 'Zero Trust', 'Compliance', 'Threat Detection'],
  },
];

// Promotional Banners Configuration
export const promotionalBanners: PromotionalBanner[] = [
  {
    id: 'fresh-content-oct-2025',
    message: '✨ New: Governance Scorecards 2026, Freshness‑Aware RAG v2, Edge Flags 2026',
    ctaText: 'Read the latest',
    ctaLink: '/blog',
    backgroundColor: 'bg-gradient-to-r from-indigo-600 to-purple-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 15,
    active: true,
    priority: 0,
  },
  {
    id: 'governance-scorecards-2026',
    message: '📚 AI Governance 2026: Scorecards Engineers Actually Use',
    ctaText: 'Read Article',
    ctaLink: '/blog/ai-governance-scorecards-2026',
    backgroundColor: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 18,
    active: true,
    priority: 1,
  },
  {
    id: 'freshness-aware-rag-v2',
    message: '🧭 Freshness‑Aware RAG v2: TTL Budgets and SLAs',
    ctaText: 'Explore',
    ctaLink: '/blog/freshness-aware-rag-v2',
    backgroundColor: 'bg-gradient-to-r from-cyan-600 to-blue-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 16,
    active: true,
    priority: 2,
  },
  {
    id: 'edge-flags-blueprint-2026',
    message: '⚡ Edge Flags Blueprint 2026: <100ms Global Releases',
    ctaText: 'Read Blueprint',
    ctaLink: '/blog/edge-flags-blueprint-2026',
    backgroundColor: 'bg-gradient-to-r from-purple-600 to-pink-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 16,
    active: true,
    priority: 2,
  },
  {
    id: 'new-blog-banner',
    message: '🔥 New: AI Platform Engineering 2025 + Secure ML Supply Chain',
    ctaText: 'Read Now',
    ctaLink: '/blog/ai-platform-engineering-2025',
    backgroundColor: 'bg-gradient-to-r from-orange-600 to-red-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 15,
    active: true,
    priority: 1,
  },
  {
    id: 'ai-risk-register-banner',
    message: '🛡️ New: AI Risk Register That Drives Action',
    ctaText: 'Read Playbook',
    ctaLink: '/blog/ai-risk-register-2025',
    backgroundColor: 'bg-gradient-to-r from-red-600 to-rose-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 16,
    active: true,
    priority: 1,
  },
  {
    id: 'practical-evals-banner',
    message: '📈 Practical AI Evals That Predict Outcomes',
    ctaText: 'See Scorecards',
    ctaLink: '/blog/practical-evals-scorecards-2025',
    backgroundColor: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 18,
    active: true,
    priority: 2,
  },
  {
    id: 'analytics-platform-banner',
    message: '🚀 Launch: AI Analytics Platform - Transform Data into Actionable Insights',
    ctaText: 'Explore Platform',
    ctaLink: '/services/ai-analytics-platform',
    backgroundColor: 'bg-gradient-to-r from-teal-600 to-cyan-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 18,
    active: true,
    priority: 2,
  },
  {
    id: 'techcorp-success-banner',
    message: '🏆 Success Story: TechCorp Achieved 90% Efficiency Gain with AI Transformation',
    ctaText: 'View Case Study',
    ctaLink: '/case-studies/techcorp-ai-transformation',
    backgroundColor: 'bg-gradient-to-r from-green-600 to-emerald-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 20,
    active: true,
    priority: 3,
  },
  {
    id: 'free-trial-banner',
    message: '🎯 Limited Time: 30-Day Free Trial for AI Analytics Platform - No Credit Card Required',
    ctaText: 'Start Free Trial',
    ctaLink: '/services/ai-analytics-platform#pricing',
    backgroundColor: 'bg-gradient-to-r from-yellow-600 to-orange-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: false,
    hideAfter: 0,
    active: true,
    priority: 4,
  },
  {
    id: 'cloud-finops-guardrails-banner',
    message: '💸 Cloud FinOps Guardrails Engineers Actually Use',
    ctaText: 'Cut Spend',
    ctaLink: '/blog/cloud-finops-guardrails-2025',
    backgroundColor: 'bg-gradient-to-r from-sky-600 to-blue-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 16,
    active: true,
    priority: 2,
  },
  {
    id: 'practical-evals-2025-banner',
    message: '📈 Practical AI Evals That Predict Business Outcomes',
    ctaText: 'See Scorecards',
    ctaLink: '/blog/practical-evals-scorecards-2025',
    backgroundColor: 'bg-gradient-to-r from-indigo-600 to-purple-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 16,
    active: true,
    priority: 2,
  },
  {
    id: 'serverless-inference-costs-banner',
    message: '🧰 Serverless Inference Cost Playbook',
    ctaText: 'Optimize',
    ctaLink: '/blog/serverless-inference-cost-playbook-2025',
    backgroundColor: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 16,
    active: true,
    priority: 3,
  },
];

// Utility functions for content management
export const getFeaturedContent = () => {
  return {
    blogPosts: blogPosts.filter(post => post.featured),
    caseStudies: caseStudies.filter(study => study.featured),
    services: services.filter(service => service.featured),
  };
};

export const getActiveBanners = () => {
  return promotionalBanners
    .filter(banner => banner.active)
    .sort((a, b) => a.priority - b.priority);
};

export const getContentByTag = (tag: string) => {
  return {
    blogPosts: blogPosts.filter(post => post.tags.includes(tag)),
    caseStudies: caseStudies.filter(study => study.tags.includes(tag)),
    services: services.filter(service => service.tags.includes(tag)),
  };
};

export const getRecentContent = (limit: number = 3) => {
  const allContent = [
    ...blogPosts.map(post => ({ ...post, type: 'blog' as const })),
    ...caseStudies.map(study => ({ ...study, type: 'case-study' as const })),
    ...services.map(service => ({ ...service, type: 'service' as const })),
  ];
  return allContent
    .sort((a, b) => {
      const aTime = 'date' in a ? new Date((a as { date: string }).date).getTime() : 0;
      const bTime = 'date' in b ? new Date((b as { date: string }).date).getTime() : 0;
      return bTime - aTime;
    })
    .slice(0, limit);
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4e1b
