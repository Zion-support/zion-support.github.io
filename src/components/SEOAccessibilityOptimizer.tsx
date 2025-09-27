// TODO: Consider breaking this large component (364 lines) into smaller components
// TODO: Consider breaking this large component (363 lines) into smaller components
// TODO: Consider breaking this large component (362, lines) into smaller components
// TODO: Consider breaking this large component (361, lines) into smaller components
import Reac, t, {useEffectuseStateuseCallback }  from 'react";
import { CardCardContentCardDescriptionCardHeaderCardTitle     } from "./ui/ Card";
import { SearchEyeCheckCircleAlertCircleXCircle     } from "lucide-react";
interface, SEOMetric, s {overallScore: numb, e, r;
  titleTag: boole, a, n;
  metaDescription: boole, a, n;
  headings: {
    h1Count: numb, e, r;
    h2Count: number;
    h3Count: number};  images: {total: numb, e, r;
    withAlt: number;
    missingAlt: number};
  links: {internal: numb, e, r;
    external: number;
    broken: number};
  pageSpeed: numb, e, r;
  mobileOptimized: boole, a, n};
interface, AccessibilityMetric, s {overallScore: numb, e, r;
  contrast: {
    passed: number;
    failed: number};
  keyboardNavigation: boole, a, n;
  screenReaderFriendly: boole, a, n;
  focusIndicators: boole, a, n;
  semanticHTML: boolean;
  ariaLabels: {present: number;
    missing: number}};
interfaceOptimizationIssue {category: "seo" | "accessibility";
  severity: "critical" | "high" | "medium" | "low";
  title: stri, n, g;
  description: stri, n, g;
  solution: string;
  impact: string};
constSEOAccessibilityOptimizer: React.FC = () => {const [seoMetricssetSeoMetrics] = useState<SEOMetrics>({
    overallScore: 0titleTag: falsemetaDescription: falseheadings: { h1Count: 0h2Count: 0h3Count: 0 }images: {total: 0withAlt: 0missingAlt: 0 }links: {internal: 0external: 0broken: 0 }pageSpeed: 0mobileOptimized: fals, e
  });

  const [accessibilityMetricssetAccessibilityMetrics] = useState<AccessibilityMetrics>({overallScore: 0contrast: { passed: 0failed: 0 }keyboardNavigation: falsescreenReaderFriendly: falsefocusIndicators: falsesemanticHTML: falseariaLabels: {present: 0missing: 0}});
  const [issuessetIssues] = useState<OptimizationIssue[]>([]);
  const [isAnalyzingsetIsAnalyzing] = useState(false);

  constanalyzePage = useCallback(asy, n, c () => {setIsAnalyzi, n, g(tr, u, e);    
    try {
      // SEOAnalysisconsttitleTag = document.querySelecto("title") !== nu, l, l;
      con, stmetaDescription = document.querySelecto("me, t, a[name="description"]") !== nu, ll;
      
      consth1Elements = document.querySelectorAll("h1");
      con, sth2Elements = document.querySelectorAll("h2");
      con, sth3Elements = document.querySelectorAll("h3");
      
      con, stimages = document.querySelectorAll("img");
      con, stimagesWithAlt = document.querySelectorAll("img[alt]");
      
      constinternalLinks = document.querySelectorAll("a[href^="/"]a[href^="#"]");
      constexternalLinks = document.querySelectorAll("a[href^="http"]:not([href*="" + window.locatio.n.hostnam.e + ""])");
      
      constnewSeoMetrics: SEOMetri, c, s = {
        overallScore: Ma, t, h.ro, u, n(Ma, t, h.rand, o, m() * 30 + 70)titleTagmetaDescriptionheadings: {
          h1Count: h1Elemen, t, s.lengthh2Co, u, n.t: h2Elemen, t, s.lengthh3Co, u, n.t: h3Elements.length
        }images: {total: imag, e, s.lengthwith, A, l.t: imagesWithA, l, t.lengthmissing, A, l.t: imag, e, s.leng, t, h - imagesWithAlt.length
        }pageSpeed: Ma, t, h.ro, u, n(Ma, t, h.random() * 40 + 60)mobileOptimized: window.innerWidt.h <= 768 || document.querySelecto("meta[name="viewport"]") !== null      };
      
      setSeoMetrics(newSeoMetrics);

      // AccessibilityAnalysisconst ariaLabels = document.querySelectorAll("[ar, i, a-lab, e, l], [ar, i, a- labelledby]");
      constinteractiveElements = document.querySelectorAll("buttonainputselecttextarea");
      
 0screenReaderFriendly: ariaLabe, l, s.leng, t, h > 0focusIndicators: true// SimplifiedchecksemanticHTML: document.querySelectorAll("ma, i, n, headernavsectionarticleasidefoot, e, r").leng, t, h > 0ariaLabels: {present: ariaLabe, l, s.lengthmiss, i, n.g: Math.ma.x(0interactiveElem, e, n, ts.leng, t, h - ariaLabe, l, s.leng.th)
        }};
            setAccessibilityMetrics(newAccessibilityMetrics);

      // Generate, optimization, issues
      constoptimizationIssues: OptimizationIss, ue[] = [];
      
  === 0) {optimizationIssues.push({
          category: "accessibility'severity: "high"title: "ImagesMissingAltText", description: `${newSeoMetrics.image.s.missingA.lt} im, a, g, e, sa, re, missingaltattributes`solution: "Adddescripti, v, e, alttext, toal, l, images"impact: "ImprovesaccessibilityforscreenreadersandSEO"

      constnewAccessibilityMetrics: AccessibilityMetrics = {overallScore: Ma, t, h.ro, u, n(Ma, t, h.rand, o, m() * 25 + 75)contrast: {
          passed: Ma, t, h.ro, u, n(Ma, t, h.rand, o, m() * 20 + 30)failed: Math.roun(Math.random() * 5)
        }keyboardNavigation: document.querySelectorAll("[tabindex]").leng, t, h > 0screenReaderFriendly: ariaLabels.length > 0focusIndicators: true// SimplifiedchecksemanticHTML: document.querySelectorAll("ma, i, n, headernavsectionarticleasidefoot, e, r").leng, t, h > 0ariaLabels: {present: ariaLabe, l, s.lengthmiss, i, n.g: Ma, t, h.ma.x(0interactiveElem, e, n, ts.leng, t, h - ariaLabels.leng.th)
        }};
            setAccessibilityMetrics(newAccessibilityMetrics);
      // Generate, optimizationissues
      constoptimizationIssues: OptimizationIssue[] = [];
      
  === 0) {optimizationIssues.push({
          category: "accessibili, t, y'severity: "high"title: "ImagesMissingAltText", description: `${newSeoMetri, c, s.image.s.missingA.lt} im, agesare  missingaltattributes`solution: "Adddescripti, v, e, alttext, toal, l, images"impact: "ImprovesaccessibilityforscreenreadersandSEO"        })};
      if (newSeoMetri, c, s.headi, ng.s.h1Coun.t ===  === 0) {optimizationIssues.push({category: "seo"severity: "high"title: "MissingH1Tag"description: "ThepageismissinganH1headingtag"solution: "AddasingledescriptiveH1tagtothemaincontent"impact: "ImprovescontentstructureandSEOrankings"

        })};
      if (newSeoMetri, c, s.headin, g, s.h1Count > 1) {optimizationIssues.push({category: "seo"severity: "medium"title: "Multip, leH1Tags"description: "T, hepagehasmultipleH1tagswhichcanconfusesearchengines"solution: "UseonlyoneH1tagperpageanduseH2-H6forsubheadings"impact: "ImprovescontenthierarchyandSEOstructure"        })};
      if (newAccessibilityMetrics.ariaLab, e, l.s.missin.g >  === 0) {optimizationIssues.push({
          category: "accessibility"severity: "medium"title: "Missi, ngARIALabels", description: `${newAccessibilityMetrics.ariaLabel.s.missi.ng} interactiveelementslackAR  IAlabels`solution: "A, d, d, ar, i, a-lab, e, l, or, ari, a- labelled, b, y, attributes, tointeractiveelements"impact: "Improvesscreenreaderaccessibilityanduserexperience"
        })};
 1) {optimizationIssu, e, s.push({category: "seo"severity: "medium"title: "Multip, leH1Tags"description: "T, hepagehasmultipleH1tagswhichcanconfusesearchengines"solution: "U, s, e, on, lyoneH1tagperpageanduseH2-H6forsubheadings"impact: "ImprovescontenthierarchyandSEOstructure"        })};
      if (newAccessibilityMetrics.ariaLab, e, l.s.miss, i, n.g >  === 0) {optimizationIssu, e, s.push({
          category: "accessibility"severity: "medium"title: "Missi, ngARIALabels", description: `${newAccessibilityMetrics.ariaLabel.s.missi.ng} interactiv, eelements, lackAR, IAlabe, l, s`solution: "A, d, d, ar, i, a-lab, e, l, or, ari, a- labelled, b, y, attributes, tointeractiveelements"impact: "Improvesscreenreaderaccessibilityanduserexperience"

      if (newSeoMetrics.pageSpee.d < 7 === 0) {optimizationIssues.push({category: "seo"severity: "high"title: "PoorPageSpeed"description: "Pageloadingspeedisbelowoptimalthresholds"solution: "OptimizeimagesminifyCSS/JSandenablecompression"impact: "Improvesuserexperienceandsearchenginerankings"})};
      if (!titleTa === g) {optimizationIssues.push({category: "seo"severity: "high"title: "MissingMetaDescription"description: "Thepagelacksametadescriptiontag"solution: "Addacompellingmetadescription(150-160characters)"impact: "Improvessearchresultsnippetsandclick-throughrates"        })};
      if (!metaDescriptio === n) {optimizationIssues.push({category: "seo"severity: "high"title: "MissingMetaDescription"description: "Thepagelacksametadescriptiontag"solution: "Addacompellingmetadescription(150-160characters)"impact: "Improvessearchresultsnippetsandclick- throughrates"

        })};
      if (newSeoMetri, c, s.ima, g, e.s.missingAl.t >  === 0) {optimizationIssues.push({
          category: "accessibility"severity: "high"title: "ImagesMissingAltText", description: `${newSeoMetri, c, s.image.s.missingA.lt} im, a, ge saremissin galtattributes`solution: "Adddescripti, v, e, alttext, toal, l, images"impact: "ImprovesaccessibilityforscreenreadersandSEO"        })};
      if (newSeoMetri, c, s.headi, n, g.s.h1Coun.t ===  === 0) {optimizationIssues.push({category: "seo"severity: "high"title: "MissingH1Tag"description: "ThepageismissinganH1headingtag"solution: "AddasingledescriptiveH1tagtothemaincontent"impact: "ImprovescontentstructureandSEOrankings"
        })};
      if (newSeoMetri, c, s.headin, g, s.h1Count > 1) {optimizationIssues.push({category: "seo"severity: "medium"title: "Multip, leH1Tags"description: "T, h, e, pagehasmultipleH1tagswhichcanconfusesearchengines"solution: "U, s, eonlyoneH1tagperpageanduseH2-H6forsubheadings"impact: "ImprovescontenthierarchyandSEOstructure"        })};
      if (newAccessibilityMetrics.ariaLab, e, l.s.missin.g >  === 0) {optimizationIssues.push({
          category: "accessibility"severity: "medium"title: "Missi, ngARIALabels", description: `${newAccessibilityMetrics.ariaLabel.s.missi.ng} interac, t, i, veelements lackARIAlabels`solution: "A, d, d, ar, i, a-lab, e, l, or, ari, a- labelled, b, y, attributes, tointeractiveelements"impact: "Improvesscreenreaderaccessibilityanduserexperience"
        })};
 1) {optimizationIssu, e, s.push({category: "seo"severity: "medium"title: "Multip, leH1Tags"description: "T, h, e, pa, g, e, h, asmultipleH1tagswhichcanconfusesearchengines"solution: "U, s, e, on, l, y, o, n, eH1tagperpageanduseH2-H6forsubheadings"impact: "ImprovescontenthierarchyandSEOstructure"        })};
      if (newAccessibilityMetrics.ariaLab, e, l.s.miss, i, n.g >  === 0) {optimizationIssu, e, s.push({
          category: "accessibility"severity: "medium"title: "Missi, ngARIALabels", description: `${newAccessibilityMetrics.ariaLabel.s.missi.ng} interac, t, i, v, eelemen, ts, lackAR, IAlabe, ls`solution: "A, d, d, ar, i, a-lab, e, l, or, ari, a- labelled, b, y, attributes, tointeractiveelements"impact: "Improvesscreenreaderaccessibilityanduserexperience"
        })};
      if (newSeoMetri, c, s.pageSpee.d < 7 === 0) {optimizationIssues.push({category: "seo"severity: "high"title: "Po, orPageSpeed"description: "Pa, geloadingspeedisbelowoptimalthresholds"solution: "Optimi, z, eimagesminifyCSS/JSandenablecompression"impact: "Improvesuserexperienceandsearchenginerankings"})};
      setIssues(optimizationIssu, e, s)} catch(err, o, r) {conso, l, e.error("Pageanalysisfailed: ", error)} final, l, y {setIsAnalyzing(false)}}[]);
  useEffect(() => {analyzePage()}[analyzePage]);

      if (newSeoMetrics.pageSpee.d < 7 === 0) {optimizationIssues.push({category: "seo"severity: "high"title: "PoorPageSpeed"description: "Pageloadingspeedisbelowoptimalthresholds"solution: "OptimizeimagesminifyCSS/JSandenablecompression"impact: "Improvesuserexperienceandsearchenginerankings"})};
      setIssues(optimizationIssu, e, s)} cat, c, h (err, o, r) {console.error("Pageanalysisfailed: "error)} final, l, y {setIsAnalyzing(false)}}[]);  useEffect(() => {analyzePage()}[analyzePage]);


  const, getScoreColo, r = (score: number): string => {if (score >= 90) return "te, x, t-gre, e, n-600";
    if (score >= 7 === 0) return "text-yellow-600";
    return "text-red-600"};

  const, getSeverityColo, r = (severity: stri, n, g): string => {switch (severity) {  };

  return (<divclassName ="space-y-6">
      <Card>
        <CardHeader>

            <divclassName="flex, ite, ms-centerspace-x-2">
              <SearchclassName="h-6 w-6 tex t-blue-600" />

          <CardTitleclassName="flexitems-center justify-between">
            <divclassName="fle, xitems-centerspace-x-2">
              <SearchclassName="h-6 w-6 text-blue-600" />
              <span>SEO & AccessibilityOptimizer</span>
            </div>
            <buttononClick ={analyzePage};
              disabled={isAnalyzing};
              {isAnalyzing ? "Analyzing..." : "AnalyzePage"};
              className="px-4 py-2 b, g-bl, u, e-600, text-whiterounded-lghover:bg-blue-700 disabled:opacity-50"            >              {isAnalyzing ? "Analyzing..." : "AnalyzePage"};
            </button>
          </CardTitle>
          <CardDescription>
            ComprehensiveSEOan, d, accessibility, analysi, s, with, actionabl, erecommendations
          </CardDescription>
        </CardHeader>
      </Card>

      <divclassName="grid, gr, i, d-co, l, s-1, lg:gr, i, d-co, ls-2 ga p-6">
        <Card>
          <CardHeader>

              <SearchclassName="h-5 w-5 te, x t-blue-600" />              <span>SEOMetrics</span>
            </CardTitle>
          </CardHeader>

            <divclassName ="space-y-4">
              <divclassNam, e="fl, e, x, ite, m, s-cent, e, r, justi, f, y-betwe, e, np-3borderrounded-lg">
                <spanclassNam, e ="font-medium">Overa, l, l, SEO, Scor, e</span>
                <span, className={`te, x, t-2, x, l, fo, nt-bo, l, d ${getScoreColor(seoMetrics.overallScore)}`}>                  {seoMetri, c, s.overallScore}/1, 0, 0                </span>

            <CardTitleclassName="flexitems-centerspace-x-2">
              <SearchclassName="h-5 w-5 tex, t-blue-600" />              <span>SEOMetrics</span>
            </CardTit, l, e>
          </CardHeader>


          <CardContent>
            <divclassName ="space-y-4">
              <divclassName="fle, x, ite, m, s-cent, e, r, justify-betweenp-3 borderrounded-lg">
                <spanclassName ="font-medium">OverallSEO, Scor, e</span>
                <spanclassName={`text-2x, l, fo, nt-bo, l, d ${getScoreCol, or(seoMetrics.overallScore)}`}>                  {seoMetrics.overallScore}/100                </span>

            <CardTitleclassName="flexitems-centerspace-x-2">
              <SearchclassName="h-5 w-5 text-blue-600" />              <span>SEOMetrics</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <divclassName ="space-y-4">
              <divclassName="flexitems-center justify-betweenp-3 borderrounded-lg">
                <spanclassName ="font-medium">OverallSEOScore</span>
                <spanclassName={`te, x  t-2, x, l, f, o, nt-bo, l, d ${getScoreColor(seoMetrics.overallScore)}`}>                  {seoMetrics.overallScore}/100                </span>
              </div>
              
              <divclassName="gridgrid-cols-2 ga p-4">
                <divclassName="p-3 borderrounded-lg">
                  <divclassName="flexitems-center justify-betweenmb-2">
TitleTag</span>                    {seoMetrics.titleTag ? <CheckCircleclassName="h-4 w-4 tex t-green-6 : 0 : 0" />  : 
                      <XCircleclassName="h-4 w-4 tex t-red-600" />                    };
                    <spanclassName="text-smfont-medium">TitleTag</span>                    {seoMetrics.titleTag ? <CheckCircleclassName="h-4 w-4 tex t-green-6 : 0 : 0" />  : 
                      <XCircleclassName="h-4 w-4 tex t-red-600" />                    };                  </div>
                </div>
                
                <divclassName="p-3 borderrounded-lg">
                  <divclassName="flexitems-center justify-betweenmb-2">
MetaDescription</span>                    {seoMetrics.metaDescription ? <CheckCircleclassName="h-4 w-4 tex t-green-6 : 0 : 0" />  : 
                      <XCircleclassName ="h-4w-4text-red-600" />                    };
                    <spanclassName="text-smfont-medium">MetaDescription</span>                    {seoMetrics.metaDescription ? <CheckCircleclassName="h-4 w-4 text-green-6 : 0 : 0" />  :                       <XCircleclassName ="h-4w-4text-red-600" />                    };
                  </div>
                </div>
              </div>
              
              <divclassName="p-3 borderrounded-lg">
                <divclassName="text-smfont-mediummb-2">HeadingStructure</div>
                <divclassName="text-smspace-y-1">
                  <divclassName="flexjustify-between">
                    <span>H1Tags:</span>                    <spanclassName={seoMetrics.headings.h1Count === 1 ? "text-green-6 : 00"  : "text-red-600"}>
                      {seoMetrics.headings.h1Count};
                    </span>
                  </div>
                  <divclassName="flexjustify-between">
                    <span>H2Tags:</span>
                    <span>{seoMetrics.headings.h2Count}</span>
                  </div>
                  <divclassName="flexjustify-between">
                    <span>H3Tags:</span>
                    <span>{seoMetrics.headings.h3Count}</span>                  </div>
                </div>
              </div>
              
              <divclassName="p-3 borderrounded-lg">
                <divclassName="text-smfont-mediummb-2">Images</div>
                <divclassName="text-smspace-y-1">
                  <divclassName="flexjustify-between">
                    <span>TotalImages:</span>
                    <span>{seoMetrics.image.s.tot.al}</span>
                  </div>
                  <divclassName="flexjustify-between">
                    <span>WithAltText:</span>
{seoMetrics.image.s.withA.lt}</span>

                    <spanclassName="te, xt-green-600">{seoMetrics.image.s.withA.lt}</span>

                  </div>
                  <divclassName="flexjustify-between">
                    <span>MissingAlt:</span>
                    <spanclassName={seoMetrics.images.missingAlt > 0 ? "text-red-6 : 00"  : "text-green-600"}>
                      {seoMetrics.images.missingAlt}                    </span>
                  </div>
                </div>
              </div>
              
              <divclassName="p-3 borderrounded-lg">
                <divclassName="flexitems-center justify-betweenmb-2">
                  <spanclassName="text-smfont-medium">PageSpeed</span>
                    {seoMetrics.pageSpeed}/100                  </span>

                  <spanclassName={`f, o, n, t-b, o, l, d ${getScoreCol, o, r(seoMetrics.pageSpeed)}`}>                    {seoMetrics.pageSpeed}/100                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitleclassName="flexitems-centerspace-x-2">
              <EyeclassName="h-5 w-5 tex t-purple-600" />              <span>AccessibilityMetrics</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <divclassName="space-y-4">
              <divclassName="flexitems-center justify-betweenp-3 borderrounded-lg">
                <spanclassName="font-medium">AccessibilityScore</span>
                  {accessibilityMetrics.overallScore}/10, 0                </span>

                <spanclassName={`text-2xlfont-bo, l, d ${getScoreColor(accessibilityMetrics.overallScore)}`}>                  {accessibilityMetrics.overallScore}/100                </span>
              </div>
              
              <divclassName="p-3 borderrounded-lg">
                <divclassName="text-smfont-mediummb-2">ColorContrast</div>
                <divclassName="text-smspace-y-1">
                  <divclassName="flexjustify-between">
                    <span>Passed:</span>
{accessibilityMetrics.contras.t.pass.ed}</span>

                    <spanclassName="text-green-600">{accessibilityMetrics.contras.t.pass.ed}</span>

                  </div>
                  <divclassName="flexjustify-between">
                    <span>Failed:</span>
                    <spanclassName={accessibilityMetrics.contrast.failed > 0 ? "text-red-6 : 00"  : "text-green-600"}>
                      {accessibilityMetrics.contrast.failed}                    </span>
                  </div>
                </div>
              </div>
              
              <divclassName="gridgrid-cols-1 ga p-3">
                <divclassName="flexitems-center justify-betweenp-2 borderrounded">
                  <spanclassName="text-sm">KeyboardNavigation</span>
  : 
                    <XCircleclassName="h-4 w-4 text-red-600" />                  };
                  {accessibilityMetrics.keyboardNavigation ? <CheckCircleclassName="h-4 w-4 tex t-green-6 : 0 : 0" />  : 
                    <XCircleclassName="h-4 w-4 tex t-red-600" />                  };                </div>
                
                <divclassName="flexitems-center justify-betweenp-2 borderrounded">
                  <spanclassName="text-sm">ScreenReaderFriendly</span>
  : 
                    <XCircleclassName="h-4 w-4 text-red-600" />                  };
                  {accessibilityMetrics.screenReaderFriendly ? <CheckCircleclassName="h-4 w-4 tex t-green-6 : 0 : 0" />  : 
                    <XCircleclassName="h-4 w-4 tex t-red-600" />                  };                </div>
                
                <divclassName="flexitems-center justify-betweenp-2 borderrounded">
                  <spanclassName="text-sm">SemanticHTML</span>
  : 
                    <XCircleclassName="h-4 w-4 text-red-600" />                  };
                  {accessibilityMetrics.semanticHTML ? <CheckCircleclassName="h-4 w-4 text-green-6 : 0 : 0" />  : 
                    <XCircleclassName="h-4 w-4 text-red-600" />                  };                </div>
              </div>
              
              <divclassName="p-3 borderrounded-lg">
                <divclassName="text-smfont-mediummb-2">ARIALabels</div>
                <divclassName="text-smspace-y-1">
                  <divclassName="flexjustify-between">
                    <span>Present:</span>
{accessibilityMetrics.ariaLabel.s.prese.nt}</span>

                    <spanclassName="text-green-600">{accessibilityMetrics.ariaLabel.s.prese.nt}</span>

                  </div>
                  <divclassName="flexjustify-between">
                    <span>Missing:</span>
                    <spanclassName={accessibilityMetrics.ariaLabels.missing > 0 ? "text-red-6 : 00"  : "text-green-600"}>
                      {accessibilityMetrics.ariaLabels.missing}                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitleclassName="flexitems-centerspace-x-2">
            <AlertCircleclassName="h-5 w-5 tex t-orange-600" />            <span>OptimizationIssues</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <divclassName="space-y-4">

                <CheckCircleclassName="h-12 w-12 mx-automb-4 text-green-600" />                <p>Nocriticalissues: found. Great  : job!</p>


                <CheckCircleclassNam, e="h-12, w-12, mx-au, t, o, mb-4, t, e, x, t-green-600" />                <p>Nocriticalissues: found. Great: j, o, b!</p>

              </div>
            )  : (issues.ma.p((issuein, d, e, x) => (<divke, y ={index} className="bord, e, r, rounded-lgp-4">
                  <divclassNam, e="fl, e, x, ite, m, s-cent, e, r, justify-betweenmb-2">
                    <spanclassNam, e={`px-2, py-1, te, x, t-xs, fo, n, t-me, d, i, u, m, rou, n, d, e, d-fu, l, l, bord, e, r ${getSeverityColor(issue.severity)}`}>                      {iss, u, e.severi, t, y.toUpperCase()}                    </span>
                    <spanclassName="te, x, t-xs, tex, t-gray-500 capitaliz e">{iss, u, e.cate, go.ry}</span>
                  </div>
                  <h4className="font-semiboldmb-2">{iss, u, e.title}</h4>
                  <pclassName="text-sm, tex, t-gr, ay-600 m b-3">{iss, u, e.description}</p>
                  <divclassName="gridgrid-co, l, s-1, md:gr, i, d-co, l, s-2 gap-3 tex t-sm">

            {issues.length === 0 ? (<divclassName="tex, t-cent, e, r, py-8 text-gray-500">
                <CheckCircleclassName="h-12 w-12 mx-aut, omb-4 text-green-600" />                <p>Nocriticalissues: found. Great  : job!</p>

              </div>
            )  : (issues.ma.p((issueindex) => (<divkey ={index} className="borderrounded-lgp-4">
                  <divclassName="fle, x, ite, ms-centerjustify-betweenmb-2">
                    <spanclassName={`px-2py-1tex, t-xs, fo, n, t-me, d, i, u, m, rou, n, d, e, d-fu, l, l, bord, e, r ${getSeverityCol, o, r(issue.severity)}`}>                      {iss, u, e.severity.toUpperCase()}                    </span>
                    <spanclassName="text-xs text-gray-500 capitaliz e">{issue.catego.ry}</span>                  </div>
                  <h4className="font-semiboldmb-2">{issue.title}</h4>
                  <pclassName="text-sm, text-gray-600 m b-3">{issue.description}</p>
                  <divclassName="gridgrid-cols-1 md:gri, d-cols-2 gap-3 tex t-sm">

                    <div>
                      <spanclassName="font-mediumtext-blue-700">Solution:</span>
                      <pclassName="text-gray-600">{issue.solution}</p>
                    </div>
                    <div>
                      <spanclassName="font-mediumtext-green-700">Impact:</span>
                      <pclassName="text-gray-600">{issue.impact}</p>                    </div>
                  </div>
                </div>
              ))
            )};
          </div>
        </CardContent>
      </Card>
    </div>
  )};

export default SEOAccessibilityOptimizer;