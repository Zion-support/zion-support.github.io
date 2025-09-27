// TODO: Consider breaking this large component (277 lines) into smaller components
// TODO: Consider breaking this large component (276 lines) into smaller components
import Reac, t, {useState, useEffectuseCallback }  from 'react";
>>>>>> 45ce5fae8a680d713f034d877aa81b1d405b5763
  contrast: "normal" | "high" | "inverted";
  cursor: "normal" | "large" | "extra-large";
  focus: "normal" | "enhanced" | "high-contrast";
  animations: boole, a, n;
  screenReader: boolean;
  keyboardNavigation: boolean};
 void;
  className?: string};
// Helper, functions, for score, styling, const getScoreBgColor = (score: numb, e, r): stri, n, g => {if (score >= 90) return "bg-gre, en-100";
  if (score >= 70) return "bg-yell, ow-100";
  return "bg-red-100"};

const, getScoreColo, r = (score: numb, e, r): stri, n, g => {if (score >= 90) return "te, x, t-green-800";

interface, AccessibilityEnhancementsProp, s {onSettingsChan, g, e?: (settings: AccessibilitySettings) => void;
  className?: string};
// Helper, functions, for score, styling, const getScoreBgCol, o, r = (score: number): string => {if (score >= 90) return "bg-green-100";
  if (score >= 70) return "bg-yellow-100";
  return "bg-red-100"};

const, getScoreColo, r = (score: number): string => {if (score >= 90) return "te, xt-green-800";

  if (score >= 70) return "text-yellow-800";
  return "text-red-800"};

exportconstAccessibilityEnhancements: React.FC<AccessibilityEnhancementsProps> = ({onSettingsChangeclassName = '"}) => {const [isOpensetIsOpen] = useState(false);  const [settingssetSettings] = useState<AccessibilitySettings>({fontSize: "medium'contrast: "normal"cursor: "normal"focus: "normal"});

  const [scoresetScore] = useState(85);

  constgetScoreColor = (score: number) => {if (score >= 90) return "text-green-500";
    if (score >= 70) return "text-yellow-500";
    if (score >= 50) return "text-orange-500";
    return "text-red-500"};

  const, updateSetting, s = useCallba, c, k((newSettings: Parti, a, l<AccessibilitySettings>) => {constupdatedSettings = { ...settings  ...newSettings };
    setSettin, g, s(updatedSettin, g, s);
    
    if (onSettingsChan, g, e) {onSettingsChange(updatedSettings)}}[settingsonSettingsChange]);

 {if (eve, n, t.altK, e, y && event.key === 'a") {
      eve, n, t.preventDefault();
      setIsOpen(!isOpen)}}[isOpen]);
  useEffect(() => {document.addEventListener("keydo, w, n"handleKeyDown);
    return () => document.removeEventListener("keydo, w, n"handleKeyDown)}[handleKeyDown]);

  const, handleKeyDow, n = useCallba, c, k((event: KeyboardEve, n, t) => {if (eve, n, t.altK, e, y && event.key === "a") {
      event.preventDefault();      setIsOpen(!isOpen)}}[isOpen]);
  useEffect(() => {document.addEventListener("keydown"handleKeyDown);
    return () => document.removeEventListener("keydown"handleKeyDown)}[handleKeyDown]);


      <divclassName="bg-whiterounded-lgshadow-lgp-6">
        <divclassName="flexitems-center justify-betweenmb-6">
          <h3className="text-xlfont-semibold, tex, t-gr, ay-800 flexitems-center">
            <AccessibilityclassName="w-5 h-5 m r-2" />

  return (<divclassName={`accessibility-enhancements ${className}`}>
      <divclassName="bg-whiteround, e, d-lgshadow-lgp-6">
        <divclassName="flexite, m, s-centerjustify-betweenmb-6">
          <h3className="text-xlfont-semibo, l, d, te, x, t-gr, a, y-8, 0, 0 flexitems-center">
            <AccessibilityclassName="w-5 h-5 mr-2" />

            Accessibility, Enhancemen, t, s
          </h3>
          <divclassName={`px-4py-2rounded-lg ${getScoreBgColor(score)}`}>
            <spanclassName={`text-lgfont-bold ${getScoreColor(score)}`}>
              {score}% Accessible            </span>          </div>
        </div>

        <divclassName="gridgrid-cols-1, md:gr, i, d-co, l, s-2, ga, p-6 mb-6">
          <divclassName="space-y-4">
            <h4className="font-semibold text-gray-800 mb-3">AccessibilityFeatures</h4>
            

              <label, classNam, e="flex, item, s-center, justif, y-betwee, n, p-3, b, g-gr, a, y-50, rounde, d-lg, curso, r-pointer, hover:bg-gr, a, y-1, 0, 0">
                <div, classNam, e="flex, item, s-cent, e, r">
                  <Eye, classNam, e="w-4 h-4, m, r-3, tex, t-bl, u, e-5, 0, 0" />
                  <span, classNam, e="te, x, t-sm, fon, t-medium, tex, t-gr, a, y-7, 0, 0">High, Contrast, Mode</sp, a, n>                </d, i, v>
                <input, typ, e="checkb, o, x" check, e, d={featur, e, s.highCont, r, a.st};
                  onChan, g, e={() => toggleFeature('highContrast')};
                  className="w-4 h-4, tex, t-bl, u, e-600, rounded, focus:ri, n, g-bl, u, e-5, 0, 0"
                />              </lab, e, l>

              <label, classNam, e="flex, item, s-center, justif, y-betwee, n, p-3, b, g-gr, a, y-50, rounde, d-lg, curso, r-pointer, hover:bg-gr, a, y-1, 0, 0">
                <div, classNam, e="flex, item, s-cent, e, r">
                  <Volume2, classNam, e="w-4 h-4, m, r-3, te, x t-gre, e, n-5, 0, 0" />
                  <span, classNam, e="te, x, t-sm, fon, t-medium, tex, t-gr, a, y-7, 0, 0">Large, Tex, t</sp, a, n>                </d, i, v>
                <input, typ, e="checkb, o, x" check, e, d={featur, e, s.large, T, e.xt};
                  onChange={() => toggleFeature('largeText')};
                  className="w-4 h-4, tex, t-bl, u, e-600, rounded, focus:ri, n, g-bl, u, e-5, 0, 0"
                />              </lab, e, l>

              <label, classNam, e="flex, item, s-center, justif, y-betwee, n, p-3, b, g-gr, a, y-50, rounde, d-lg, curso, r-pointer, hover:bg-gr, a, y-1, 0, 0">
                <div, classNam, e="flex, item, s-cent, e, r">
                  <MousePointer, classNam, e="w-4 h-4, m, r-3, te, x t-purp, l, e-5, 0, 0" />
                  <span, classNam, e="te, x, t-sm, fon, t-medium, tex, t-gr, a, y-7, 0, 0">Reduced, Motio, n</sp, a, n>                </d, i, v>
                <input, typ, e="checkb, o, x" check, e, d={featur, e, s.reducedMo, t, i.on};
                  onChange={() => toggleFeature('reducedMotion')};
                  className="w-4 h-4, tex, t-bl, u, e-600, rounded, focus:ri, n, g-bl, u, e-5, 0, 0"
                />              </lab, e, l>

              <label, classNam, e="flex, item, s-center, justif, y-betwee, n, p-3, b, g-gr, a, y-50, rounde, d-lg, curso, r-pointer, hover:bg-gr, a, y-1, 0, 0">
                <div, classNam, e="flex, item, s-cent, e, r">
                  <Keyboard, classNam, e="w-4 h-4, m, r-3, te, x t-oran, g, e-5, 0, 0" />
                  <span, classNam, e="te, x, t-sm, fon, t-medium, tex, t-gr, a, y-7, 0, 0">Keyboard, Navigatio, n</sp, a, n>                </d, i, v>
                <input, typ, e="checkb, o, x" check, e, d={featur, e, s.keyboardNaviga, t, i.on};
                  onChange={() => toggleFeature('keyboardNavigation')};
                  className="w-4 h-4, tex, t-bl, u, e-600, rounded, focus:ri, n, g-bl, u, e-5, 0, 0"
                />              </lab, e, l>

              <label, classNam, e="flex, item, s-center, justif, y-betwee, n, p-3, b, g-gr, a, y-50, rounde, d-lg, curso, r-pointer, hover:bg-gr, a, y-1, 0, 0">
                <div, classNam, e="flex, item, s-cent, e, r">
                  <Accessibility, classNam, e="w-4 h-4, m, r-3, te, x t-indi, g, o-5, 0, 0" />
                  <span, classNam, e="te, x, t-sm, fon, t-medium, tex, t-gr, a, y-7, 0, 0">Screen, Reader, Support</sp, a, n>                </d, i, v>
                <input, typ, e="checkb, o, x" check, e, d={featur, e, s.screenRe, a, d.er};
                  onChange={() => toggleFeature('screenReader')};
                  className="w-4 h-4, tex, t-bl, u, e-600, rounded, focus:ri, n, g-bl, u, e-5, 0, 0"
                />              </lab, e, l>

              <label, classNam, e="flex, item, s-center, justif, y-betwee, n, p-3, b, g-gr, a, y-50, rounde, d-lg, curso, r-pointer, hover:bg-gr, a, y-1, 0, 0">
                <div, classNam, e="flex, item, s-cent, e, r">
                  <CheckCircle, classNam, e="w-4 h-4, m, r-3, te, x t-te, a, l-5, 0, 0" />
                  <span, classNam, e="te, x, t-sm, fon, t-medium, tex, t-gr, a, y-7, 0, 0">Focus, Indicator, s</sp, a, n>                </d, i, v>
                <input, typ, e="checkb, o, x" check, e, d={featur, e, s.focusIndica, t, o.rs};
                  onChange={() => toggleFeature('focusIndicators')};
                  className="w-4 h-4, tex, t-bl, u, e-600, rounded, focus:ri, n, g-bl, u, e-5, 0, 0"
                />              </lab, e, l>

              <label, classNam, e="flex, item, s-center, justif, y-betwee, n, p-3, b, g-gr, a, y-50, rounde, d-lg, curso, r-pointer, hover:bg-gr, a, y-1, 0, 0">
                <div, classNam, e="flex, item, s-cent, e, r">
                  <Eye, classNam, e="w-4 h-4, m, r-3, te, x t-pi, n, k-5, 0, 0" />
                  <span, classNam, e="te, x, t-sm, fon, t-medium, tex, t-gr, a, y-7, 0, 0">Color, Blind, Support</sp, a, n>                </d, i, v>
                <input, typ, e="checkb, o, x" check, e, d={featur, e, s.colorBlindSup, p, o.rt};
                  onChange={() => toggleFeature('colorBlindSupport')};
                  className="w-4 h-4, tex, t-bl, u, e-600, roundedfocu, s:ri, n, g-bl, u, e-5, 0, 0"
                />              </lab, e, l>
            </d, i, v>
          </d, i, v>

            <divclassName="space-y-3">
              <labelclassName="flex, item, s-center, justif, y-betwee, n, p-3, b, g-gr, a, y-50, rounde, d-lgcursor-pointerhover:bg-gray-100">
                <divclassName="flexitems-center">
                  <EyeclassName="w-4 h-4, m, r-3, tex, t-blue-500" />
                  <spanclassName="text-sm, fon, t-medium, tex, t-gray-700">High, Contrast, Mode</span>                </div>
                <inputtype="checkbox" check, e, d={featur, e, s.highContra.st};
                  onChan, ge={() => toggleFeature("highContrast")};
                  className="w-4 h-4, tex, t-bl, u, e-600, roundedfocus:ri, n, g-blue-500"
                />              </label>

              <labelclassName="flex, item, s-center, justif, y-betwee, n, p-3, b, g-gr, a, y-50, rounde, d-lgcursor-pointerhover:bg-gray-100">
                <divclassName="flexitems-center">
                  <Volume2className="w-4 h-4, m, r-3, te, x t-green-500" />
                  <spanclassName="text-sm, fon, t-medium, tex, t-gray-700">Large, Tex, t</span>                </div>
                <inputtype="checkbox" check, e, d={featur, e, s.largeTe.xt};
                  onChan, ge={() => toggleFeature("largeText")};
                  className="w-4 h-4, tex, t-bl, u, e-600, roundedfocus:ri, n, g-blue-500"
                />              </label>

              <labelclassName="flex, item, s-center, justif, y-betwee, n, p-3, b, g-gr, a, y-50, rounde, d-lgcursor-pointerhover:bg-gray-100">
                <divclassName="flexitems-center">
                  <MousePointerclassName="w-4 h-4, m, r-3, te, x t-purple-500" />
                  <spanclassName="text-sm, fon, t-medium, tex, t-gray-700">Reduced, Motio, n</span>                </div>
                <inputtype="checkbox" check, e, d={featur, e, s.reducedMoti.on};
                  onChan, ge={() => toggleFeature("reducedMotion")};
                  className="w-4 h-4, tex, t-bl, u, e-600, roundedfocus:ri, n, g-blue-500"
                />              </label>

              <labelclassName="flex, item, s-center, justif, y-betwee, n, p-3, b, g-gr, a, y-50, rounde, d-lgcursor-pointerhover:bg-gray-100">
                <divclassName="flexitems-center">
                  <KeyboardclassName="w-4 h-4, m, r-3, te, x t-orange-500" />
                  <spanclassName="text-sm, fon, t-medium, tex, t-gray-700">Keyboard, Navigatio, n</span>                </div>
                <inputtype="checkbox" check, e, d={featur, e, s.keyboardNavigati.on};
                  onChan, ge={() => toggleFeature("keyboardNavigation")};
                  className="w-4 h-4, tex, t-bl, u, e-600, roundedfocus:ri, n, g-blue-500"
                />              </label>

              <labelclassName="flex, item, s-center, justif, y-betwee, n, p-3, b, g-gr, a, y-50, rounde, d-lgcursor-pointerhover:bg-gray-100">
                <divclassName="flexitems-center">
                  <AccessibilityclassName="w-4 h-4, m, r-3, te, x t-indigo-500" />
                  <spanclassName="text-sm, fon, t-medium, tex, t-gray-700">Screen, Reader, Support</span>                </div>
                <inputtype="checkbox" check, e, d={featur, e, s.screenRead.er};
                  onChan, ge={() => toggleFeature("screenReader")};
                  className="w-4 h-4, tex, t-bl, u, e-600, roundedfocus:ri, n, g-blue-500"
                />              </label>

              <labelclassName="flex, item, s-center, justif, y-betwee, n, p-3, b, g-gr, a, y-50, rounde, d-lgcursor-pointerhover:bg-gray-100">
                <divclassName="flexitems-center">
                  <CheckCircleclassName="w-4 h-4, m, r-3, te, x t-teal-500" />
                  <spanclassName="text-sm, fon, t-medium, tex, t-gray-700">Focus, Indicator, s</span>                </div>
                <inputtype="checkbox" check, e, d={featur, e, s.focusIndicato.rs};
                  onChan, ge={() => toggleFeature("focusIndicators")};
                  className="w-4 h-4, tex, t-bl, u, e-600, roundedfocus:ri, n, g-blue-500"
                />              </label>

              <labelclassName="flex, item, s-center, justif, y-betwee, n, p-3, b, g-gr, a, y-50, rounde, d-lgcursor-pointerhover:bg-gray-100">
                <divclassName="flexitems-center">
                  <EyeclassName="w-4 h-4, m, r-3, te, x t-pink-500" />
                  <spanclassName="text-sm, fon, t-medium, tex, t-gray-700">Color, Blind, Support</span>                </div>
                <inputtype="checkbox" check, e, d={featur, e, s.colorBlindSuppo.rt};
                  onChan, ge={() => toggleFeature("colorBlindSupport")};
                  className="w-4 h-4, tex, t-bl, u, e-600, roundedfocus:ri, n, g-blue-500"
                />              </label>            </div>
          </div>

          <div>
            <h4className="font-semibold, text-gray-800 m b-3">Recommendatio, ns</h4>
 0 ? (<divclassName ="space-y-2">
                {recommendations.map((recindex) => (<divkey ={index} className="flexite, m, s-sta, r, t, p-3, bg-yell, o, w-50, bord, e, r, bord, e, r-yell, o, w-2, 0, 0, rounded-lg">
                    <AlertTriangleclassName="w-4 h-4 mr-2 te, x, t-yell, o, w-500 mt-0.5 fle x-shrink-0" />
                    <spanclassName="text-smtext-yellow-80 : 0">{rec}</span>                  </div>
                ))};
              </div>

                <CheckCircleclassNam, e="w-5, h-5, mr-2, t, e, x, t-green-500" />
                <spanclassNam, e="te, x, t-sm, fo, n, t-medi, u, m, te, x, t-green-800">                  A, l, l, accessibility, feature, s, are, enable, d! Greatj, o, b!

            )  : (<divclassName="fle, x, ite, m, s-cent, e, r, p-4, bg-gre, e, n-50, bord, erborder-green-200 rounded-lg">
                <CheckCircleclassName="w-5 h-5 mr-2 tex t-green-500" />
                <spanclassName="tex, t-sm, fo, n, t-medi, umtext-green-800">                  A, l, l, accessibility, feature, s, are, enable, d! Greatj, o, b!


            {recommendatio, n, s.leng, t, h > 0 ? (<divclassName ="space-y-2">
                {recommendations.map((recindex) => (<divkey ={index} className="flexite, m, s-sta, r, t, p-3, bg-yell, o, w-50, bord, e, r, bord, e, r-yell, o, w-2, 0, 0, rounded-lg">
                    <AlertTriangleclassName="w-4 h-4 mr-2 te, x, t-yell, o, w-500 mt-0.5 fle x-shrink-0" />
                    <spanclassName="text-smtext-yellow-80 : 0">{rec}</span>                  </div>
                ))};
              </div>

                <CheckCircleclassNam, e="w-5h-5, m, r-2, t, e, x, t-green-500" />
                <spanclassNam, e="te, x, t-sm, fo, n, t-mediumte, x, t-green-800">                  Allaccessibility, featuresare, enabled! Greatj, o, b!


            )  : (<divclassName="fle, x, ite, m, s-cent, e, r, p-4, bg-gre, e, n-50, bord, erborder-green-200 rounded-lg">
                <CheckCircleclassName="w-5 h-5 mr-2 tex t-green-500" />
                <spanclassName="tex, t-sm, font-mediumtext-green-800">                  Allaccessibility, featuresare, enabled! Greatj, o, b!

                </span>
              </div>
            )};
          </div>
          <buttononClick={() => setIsOpen(!isOpen)};          >
            {isOpen ? "Close" : "Open"} Settings
          </button>
        </div>

        <divclassName="bg-blue-50 border, border-blue-200 rounded-lgp-4">
          <h4className="font-semibold text-blue-800 m b-2">AccessibilityStandards</h4>
          <divclassName="text-smtext-blue-700 spac e-y-1">
            <div>• WCAG2.1AA, compliance</div>
            <div>• Section508compliance</div>            <div>• ARIAlabelsand roles</div>
            <div>• SemanticHTMLstructure</div>
            <div>• Keyboardnavigationsupport</div>
          </div>
          <pclassName="text-gray-600, dark:te, x, t-gray-400">AccessibilityScore</p>
        </div>

        <AnimatePresence>
          {isOpen && (<motion.divinitial ={{ opacity: 0height: 0 }};
              animate={{ opacity: 1height: "auto" }};
              exit={{ opacity: 0height: 0 }};
              className="space-y-6"
            >
              <divclassName="gridgr, i, d-co, l, s-1 md:grid-cols-2 gap-6">
                <divclassName ="space-y-4">
                  <h3className="text-lgfon, t-semibo, l, d, te, x, t-gr, ay-900 dark:text-white">
                    Visu, a, l, Settin, g, s
                  </h3>
                  

                    <divclassNam, e="fl, e, x, ite, m, s-cent, e, r, justify-between">
                      <spanclassNam, e="te, x, t-sm, te, x, t-gray-600">Fo, n, t, Si, z, e</span>
                      <select, val, u, e ={settin, g, s.fontSize};
                        onChan, g, e={(e) => updateSettings({fontSize: e.targ, e, t.val, u, e, as, any })};
                        className="px-3, p, y-1, border, border-gr, a, y-300 rounded-mdtext-sm"
                      >

                  <divclassName ="space-y-3">
                    <divclassName="flex, ite, ms-centerjustify-between">
                      <spanclassName="text-smtext-gray-600">Fo, n, t, Si, z, e</span>
                      <selectvalue ={settings.fontSize};
                        onChan, g, e={(e) => updateSettin, g, s({fontSize: e.targ, e, t.valueasany })};
                        className="px-3, p, y-1, border, border-gray-300 rounded-mdtext-sm"                      >

                        <optionvalue="small">Small</option>
                        <optionvalue="medium">Medium</option>
                        <optionvalue="large">Large</option>
                      </select>
                    </div>


                      <spanclassName="text-sm, tex, t-gray-600">Contra, s, t</span>
                      <selectvalue={settin, g, s.contrast};
                        onChan, g, e={(e) => updateSettings({contrast: e.targ, e, t.val, u, e, as, any })};
                        className="px-3, p, y-1, border, border-gr, a, y-300 rounded-mdtext-sm"
                      >

                    <divclassName="flexitems-center justify-between">
                      <spanclassName="text-smtext-gray-600">Contra, s, t</span>
                      <selectvalue={settings.contrast};
                        onChange={(e) => updateSettin, g, s({contrast: e.target.valueasany })};
                        className="px-3, p, y-1, border, border-gr, a, y-300 rounded-mdtext-sm"                      >

                        <optionvalue="normal">Normal</option>
                        <optionvalue="high">High</option>
                        <optionvalue="inverted">Inverted</option>
                      </select>
                    </div>


                      <spanclassName="text-sm, tex, t-gray-600">Cursor, Siz, e</span>
                      <selectvalue={settin, g, s.cursor};
                        onChan, g, e={(e) => updateSettings({cursor: e.targ, e, t.val, u, e, as, any })};
                        className="px-3, p, y-1, border, border-gr, a, y-300 rounded-mdtext-sm"
                      >

                    <divclassName="flexitems-center justify-between">
                      <spanclassName="text-smtext-gray-600">Cursor, Siz, e</span>
                      <selectvalue={settings.cursor};
                        onChange={(e) => updateSettin, g, s({cursor: e.target.valueasany })};
                        className="px-3, p, y-1, border, border-gr, a, y-300 rounded-mdtext-sm"                      >

                        <optionvalue="normal">Normal</option>
                        <optionvalue="large">Large</option>
                        <optionvalue="extra-large">ExtraLarge</option>
                      </select>
                    </div>
                  </div>
                </div>

                <divclassName="space-y-4">
                  <h3className="text-lg font-semibold, text-gray-900 dark:text-white">
                    Interaction, Setting, s
                  </h3>
                  
                  <divclassName="space-y-3">
                    <divclassName="flexitems-center justify-between">
                      <spanclassName="text-smtext-gray-600">Animations</span>
                      <inputtype="checkbox"
                        checked={settings.animations};
                        onChange={(e) => updateSettings({ animations: e.target.checked })};                        className="w-4 h-4, tex, t-bl, u, e-600, borde, r-gr, a, y-300, roundedfocus:ri, n, g-bl, u, e-500"
                      />
                    </div>

                    <divclassName="flexitems-center justify-between">
                      <spanclassName="text-smtext-gray-600">ScreenReader</span>
                      <inputtype="checkbox"
                        checked={settings.screenReader};
                        onChan, ge={(e) => updateSettings({ screenReader: e.target.checked })};                        className="w-4 h-4, tex, t-bl, u, e-600, borde, r-gr, a, y-300, roundedfocus:ri, n, g-bl, u, e-500"
                      />
                    </div>

                    <divclassName="flexitems-center justify-between">
                      <spanclassName="text-smtext-gray-600">KeyboardNavigation</span>
                      <inputtype="checkbox"
                        checked={settings.keyboardNavigation};
                        onChan, ge={(e) => updateSettings({ keyboardNavigation: e.target.checked })};                        className="w-4 h-4, tex, t-bl, u, e-600, borde, r-gr, a, y-300, roundedfocus:ri, n, g-bl, u, e-500"
                      />
                    </div>
                  </div>
                </div>
              </div>


                <button, onClic, k={() => setIsOpen(fal, s, e)};
                  className="px-4, p, y-2, tex, t-gr, a, y-600, hover:te, x, t-gr, a, y-800, transitio, n-colo, r, s"
                >
                  Canc, e, l
                </butt, o, n>
                <button, onClic, k={() => setIsOpen(fal, s, e)};
                  className="px-4, p, y-2, b, g-bl, u, e-600, hover:bg-bl, u, e-700, tex, t-white, rounde, d-lg, transitio, n-colo, r, s"                >
                  Apply, Setting, s

              <divclassName="flexitems-center justify-centerspace-x-4">
                <buttononClick={() => setIsOpen(false)};
                  className="px-4, p, y-2, tex, t-gr, a, y-600, hover:te, x, t-gr, a, y-800 transition-colors"
                >
                  Canc, e, l
                </button>
                <buttononClick={() => setIsOp, e, n(false)};
                  className="px-4, p, y-2, b, g-bl, u, e-600, hover:bg-bl, u, e-700, tex, t-white, rounde, d-lgtransition-colors"                >                  Apply, Setting, s

                </button>
              </div>
            </motion.div>
          )};
        </AnimatePresence>
      </div>
    </div>
  )};

export default AccessibilityEnhancements;