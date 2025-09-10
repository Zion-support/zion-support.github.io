<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { ;
  Accessibility as AccessibilityIcon,;
  Sun,;
  Moon,;
  Settings;
} from 'lucide-react';
;
interface AccessibilitySettings {;
  "fontSize": "number;
  "highContrast": boolean;
  "reducedMotion": boolean;
  "soundEnabled": boolean;
  "theme": 'light' | 'dark' | 'auto';
"}
;
export function Accessibility(): "void {;
  const [isOpen", setIsOpen] = useState<any>(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({;
    "fontSize": "1 6",;
    "highContrast": "fals e",;
    "reducedMotion": "fals e",;
    "soundEnabled": "tru e",;
    "theme": 'auto';
  });
;
  const updateSetting = ("props": "any) => {;
    const newSettings = {;
      ...settings",;
      [key]: "value;
    "};interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  soundEnabled: boolean;
  theme: 'light' | 'dark' | 'auto';
}
export function Accessibility(): void {
  const [isOpen, setIsOpen] = useState<any>(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 1 6,
    highContrast: fals e,
    reducedMotion: fals e,
    soundEnabled: tru e,
    theme: 'auto'
  }
    );
  const updateSetting = (props: any) => {
    const newSettings = {
      ...settings,
      [key]: value
    };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };
;
  const increaseFontSize = ("props": "any) => {;
    updateSetting('fontSize'", Math.min(settings.fontSize + 2, 24));
  };
;
  const decreaseFontSize = ("props": "any) => {;
    updateSetting('fontSize'", Math.max(settings.fontSize - 2, 12));
  };
;
  const resetSettings = ("props": "any) => {;
    const "defaultSettings": AccessibilitySetting s = {;
      "fontSize": 1 6",;
      "highContrast": "fals e",;
      "reducedMotion": "fals e",;
      "soundEnabled": "tru e",;
      "theme": 'auto';
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(defaultSettings));
  };
;
  const applySettings = ("props": "any) => {;
    const root = document.documentElement;
;
    // Apply font size;
    root.style.fontSize = `${newSettings.fontSize"}px`;
;
    // Apply high contrast;
    if (newSettings.highContrast) {;
      root.classList.add('high-contrast');
    } else {;
      root.classList.remove('high-contrast');
    }
;
    // Apply reduced motion;
    if (newSettings.reducedMotion) {;
      root.classList.add('reduced-motion');
    } else {;
      root.classList.remove('reduced-motion');
    }
;
    // Apply theme;
    if (newSettings.theme === 'light') {;
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    } else if (newSettings.theme === 'dark') {;
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    } else {;
      root.classList.remove('light-theme', 'dark-theme');
    }
  };
;
  useEffect(() => {;
    // Load settings from localStorage;
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {;
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }
;
    // Add keyboard shortcuts;
    const handleKeyDown = ("props": "any) => {;
      if (e.ctrlKey) {;
        switch (e.key) {;
          case '=':;
          case '+':;
            e.preventDefault();
            increaseFontSize();
            break;
          case '-':;
            e.preventDefault();
            decreaseFontSize();
            break;
          case '0':;
            e.preventDefault();
            resetSettings();
            break;
        "}
      }
    };
;
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
;
  return (;
    <>;
      {/* Accessibility Toggle Button */}
      <button;
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-cyan-500 "hover": "b g-cyan-600 text-white rounded-full shadow-lg transition-all duration-200 "hover": scal e-110 "focus": outlin e-none "focus": rin g-2 "focus": rin g-cyan-400 "focus": rin g-offset-2";
        aria-label="Accessibility Settings";
        title="Accessibility Settings";
      >;
        <AccessibilityIcon className="w-6 h-6"  />;
      </button>;
      {/* Accessibility Panel */"}
      {isOpen && (;
        <div className="fixed bottom-20 left-4 z-40 w-80 bg-white "dark": "b g-gray-800 rounded-lg shadow-xl border border-gray-200 "dark": borde r-gray-700 p-6">;
          <div className="flex items-center justify-between mb-4">;
            <h3 className="text-lg font-semibold text-gray-900 "dark": tex t-white">Accessibility</h3>;
            <button;
              onClick={() => setIsOpen(false)"}
              className="text-gray-400 "hover": "tex t-gray-600 "dark": hove "r":text-gray-300";
            >;
              ×;
            </button>;
          </div>;      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 z-40 w-80 bg-white dark: b g-gray-800 rounded-lg shadow-xl border border-gray-200 dark: borde r-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark: tex t-white">Accessibility
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover: tex t-gray-600 dark: hove r:text-gray-300"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">;
            {/* Font Size */"}
            <div>;
              <label className="block text-sm font-medium text-gray-700 "dark": "tex t-gray-300 mb-2">;
                Font "Size": {settings.fontSize"}px;
              </label>;
              <div className="flex items-center gap-2">;
                <button;
                  onClick={decreaseFontSize}
                  className="px-3 py-1 bg-gray-200 "dark": "b g-gray-700 text-gray-700 "dark": tex t-gray-300 rounded "hover": b g-gray-300 "dark": hove "r":bg-gray-600";
                >;
                  A-;
                </button>;
                <button;
                  onClick={increaseFontSize"}
                  className="px-3 py-1 bg-gray-200 "dark": "b g-gray-700 text-gray-700 "dark": tex t-gray-300 rounded "hover": b g-gray-300 "dark": hove "r":bg-gray-600";
                >;
                  A+;
                </button>;
              </div>;
            </div>;
            {/* High Contrast */"}
            <div>;
              <label className="flex items-center">;
                <input;
                  type="checkbox";
                  checked={settings.highContrast}
                  onChange={(e) => updateSetting('highContrast', e.target.checked)}
                  className="mr-2";
                />;
                <span className="text-sm text-gray-700 "dark": "tex t-gray-300">High Contrast</span>;
              </label>;
            </div>;
            {/* Reduced Motion */"}
            <div>;
              <label className="flex items-center">;
                <input;
                  type="checkbox";
                  checked={settings.reducedMotion}
                  onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                  className="mr-2";
                />;
                <span className="text-sm text-gray-700 "dark": "tex t-gray-300">Reduced Motion</span>;
              </label>;
            </div>;
            {/* Theme */"}
            <div>;
              <label className="block text-sm font-medium text-gray-700 "dark": "tex t-gray-300 mb-2">;
                Theme;
              </label>;
              <select;
                value={settings.theme"}
                onChange={(e) => updateSetting('theme', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 "dark": "borde r-gray-600 rounded-md bg-white "dark": b g-gray-700 text-gray-900 "dark": tex t-white";
              >;
                <option value="auto">Auto</option>;
                <option value="light">Light</option>;
                <option value="dark">Dark</option>;
              </select>;
            </div>;
            {/* Reset Button */"}
            <button;
              onClick={resetSettings}
              className="w-full px-4 py-2 bg-gray-200 "dark": "b g-gray-700 text-gray-700 "dark": tex t-gray-300 rounded-md "hover": b g-gray-300 "dark": hove "r":bg-gray-600 transition-colors";
            >;
              Reset to Default;
            </button>;
          </div>;
        </div>;
      )"}
    </>;
  );
}
</AccessibilitySettings>;
</any>
</AccessibilitySettings>
</any>
import React,{ useState,useEffect } from &apos;react&apos;; import { Accessibility as AccessibilityIcon,Sun,Moon,Settings&apos;;&apos;} from &apos;lucide-react&apos;; interface AccessibilitySettings { fontSize: number; highContrast: boolean; reducedMotion: boolean;&apos;; soundEnabled: boolean;&apos;;&apos;; theme: &apos;light&apos; | &apos;dark&apos; | &apos;auto&apos;} export function Accessibility(): void { const [isOpen,setIsOpen] = useState<any>(false); const [settings,setSettings] = useState<AccessibilitySettings>({ fontSize: 1 6,highContrast: fals e,reducedMotion: fals e,soundEnabled: tru e,theme: &apos;auto&apos; };); const updateSetting = (props) => { const newSettings = { ...settings,[key]: value };; setSettings(newSettings);&apos;; applySettings(newSettings);&apos;;&apos;; localStorage.setItem(&apos;accessibility-settings&apos;,JSON.stringify(newSettings))}; const increaseFontSize = (props) => { updateSetting(&apos;fontSize&apos;,Math.min(settings.fontSize + 2,24))}; const decreaseFontSize = (props) => { updateSetting(&apos;fontSize&apos;,Math.max(settings.fontSize - 2,12))}; const resetSettings = (props) => { const defaultSettings: AccessibilitySetting s = { fontSize: 1 6,highContrast: fals e,reducedMotion: fals e,soundEnabled: tru e,theme: &apos;auto&apos; };; setSettings(defaultSettings);&apos;; applySettings(defaultSettings);&apos;;&apos;; localStorage.setItem(&apos;accessibility-settings&apos;,JSON.stringify(defaultSettings))}; const applySettings = (props) => { const root = document.documentElement; root.style.fontSize = `${newSettings.fontSize}px`; if (newSettings.highContrast) { root.classList.add(&apos;high-contrast&apos;);&apos;} else { root.classList.remove(&apos;high-contrast&apos;)} if (newSettings.reducedMotion) { root.classList.add(&apos;reduced-motion&apos;);&apos;} else { root.classList.remove(&apos;reduced-motion&apos;)} if (newSettings.theme === &apos;light&apos;) { root.classList.add(&apos;light-theme&apos;);&apos;;&apos;; root.classList.remove(&apos;dark-theme&apos;);&apos;;&apos;} else if (newSettings.theme === &apos;dark&apos;) { root.classList.add(&apos;dark-theme&apos;);&apos;;&apos;; root.classList.remove(&apos;light-theme&apos;);&apos;} else { root.classList.remove(&apos;light-theme&apos;,&apos;dark-theme&apos;)} }; useEffect(() => { const savedSettings = localStorage.getItem(&apos;accessibility-settings&apos;); if (savedSettings) { const parsed = JSON.parse(savedSettings); setSettings(parsed); applySettings(parsed)} const handleKeyDown = (props) => { if (e.ctrlKey) { switch (e.key) { case &apos;=&apos;: case &apos;+&apos;: e.preventDefault(); increaseFontSize();&apos;; break;&apos;;&apos;; case &apos;-&apos;: e.preventDefault(); decreaseFontSize();&apos;; break;&apos;;&apos;; case &apos;0&apos;: e.preventDefault(); resetSettings(); break} } };&apos;; document.addEventListener(&apos;keydown&apos;,handleKeyDown);&apos;;&apos;; return () => document.removeEventListener(&apos;keydown&apos;,handleKeyDown)},[]); return ( <> {} <button onClick={() => setIsOpen(!isOpen)} className=&quot;fixed bottom-4 left-4 z-50 p-3 bg-cyan-500 hover: b g-cyan-600 text-white rounded-full shadow-lg transition-all duration-200 hover: scal e-110 focus: outlin e-none focus: rin g-2 focus: rin g-cyan-400 focus: rin g-offset-2&quot; aria-label=&quot;Accessibility Settings&quot; title=&quot;Accessibility Settings&quot; > <AccessibilityIcon className=&quot;w-6 h-6&quot; /> </button> {} {isOpen && ( <div className=&quot;fixed bottom-20 left-4 z-40 w-80 bg-white dark: b g-gray-800 rounded-lg shadow-xl border border-gray-200 dark: borde r-gray-700 p-6&quot;> <div className=&quot;flex items-center justify-between mb-4&quot;> <h3 className=&quot;text-lg font-semibold text-gray-900 dark: tex t-white&quot;>Accessibility</h3> <button onClick={() => setIsOpen(false)} className=&quot;text-gray-400 hover: tex t-gray-600 dark: hove r:text-gray-300&quot; > × </button> </div> <div className=&quot;space-y-4&quot;> {} <div> <label className=&quot;block text-sm font-medium text-gray-700 dark: tex t-gray-300 mb-2&quot;> Font Size: {settings.fontSize}px </label> <div className=&quot;flex items-center gap-2&quot;> <button onClick={decreaseFontSize} className=&quot;px-3 py-1 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded hover: b g-gray-300 dark: hove r:bg-gray-600&quot; > A- </button> <button onClick={increaseFontSize} className=&quot;px-3 py-1 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded hover: b g-gray-300 dark: hove r:bg-gray-600&quot; > A+ </button> </div> </div> {} <div> <label className=&quot;flex items-center&quot;> <input type=&quot;checkbox&quot;; checked={settings.highContrast} onChange={(e) => updateSetting(&apos;highContrast&apos;,e.target.checked)} className=&quot;mr-2&quot; /> <span className=&quot;text-sm text-gray-700 dark: tex t-gray-300&quot;>High Contrast</span> </label> </div> {} <div> <label className=&quot;flex items-center&quot;> <input type=&quot;checkbox&quot;; checked={settings.reducedMotion} onChange={(e) => updateSetting(&apos;reducedMotion&apos;,e.target.checked)} className=&quot;mr-2&quot; /> <span className=&quot;text-sm text-gray-700 dark: tex t-gray-300&quot;>Reduced Motion</span> </label> </div> {} <div> <label className=&quot;block text-sm font-medium text-gray-700 dark: tex t-gray-300 mb-2&quot;> Theme </label> <select&apos;; value={settings.theme} onChange={(e) => updateSetting(&apos;theme&apos;,e.target.value)} className=&quot;w-full px-3 py-2 border border-gray-300 dark: borde r-gray-600 rounded-md bg-white dark: b g-gray-700 text-gray-900 dark: tex t-white&quot; > <option value=&quot;auto&quot;>Auto</option> <option value=&quot;light&quot;>Light</option> <option value=&quot;dark&quot;>Dark</option> </select> </div> {} <button onClick={resetSettings} className=&quot;w-full px-4 py-2 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded-md hover: b g-gray-300 dark: hove r:bg-gray-600 transition-colors&quot; > Reset to Default </button> </div> </div> )} </> )} </AccessibilitySettings> </any>;&apos;;&apos;;
const React,{ useState,useEffect } from "react"; import { Accessibility as AccessibilityIcon,Sun,Moon,Settings";"
  "} from "lucide-react"; interface AccessibilitySettings { fontSize: number; highContrast: boolean; reducedMotion: boolean;"
  "; soundEnabled: boolean;"
  ";"
  "; theme:"
  "light" | "dark" | "auto"} export function Accessibility(): void { const [isOpen,setIsOpen] = useState<any>(false); const [settings,setSettings] = useState<AccessibilitySettings>({ fontSize: 1 6,highContrast: fals e,reducedMotion: fals e,soundEnabled: tru e,theme:"
  "auto" };); const updateSetting = (props) => { const newSettings = { .settings,[key]: value }; setSettings(newSettings);"
  "; applySettings(newSettings);"
  ";"
  "; localStorage.setItem("
  "accessibility-settings",JSON.stringify(newSettings))}; const increaseFontSize = (props) => { updateSetting("
  "fontSize",Math.min(settings.fontSize + 2,24))}; const decreaseFontSize = (props) => { updateSetting("
  "fontSize",Math.max(settings.fontSize - 2,12))}; const resetSettings = (props) => { const defaultSettings: AccessibilitySetting s = { fontSize: 1 6,highContrast: fals e,reducedMotion: fals e,soundEnabled: tru e,theme:"
  "auto" }; setSettings(defaultSettings);"
  "; applySettings(defaultSettings);"
  ";"
  "; localStorage.setItem("
  "accessibility-settings",JSON.stringify(defaultSettings))}; const applySettings = (props) => { const root = document.documentElement; root.style.fontSize = `${newSettings.fontSize}px`; if (newSettings.highContrast) { root.classList.add("
  "high-contrast");"
  "} else { root.classList.remove("
  "high-contrast")} if (newSettings.reducedMotion) { root.classList.add("
  "reduced-motion");"
  "} else { root.classList.remove("
  "reduced-motion")} if (newSettings.theme === "light") { root.classList.add("
  "light-theme");"
  ";"
  "; root.classList.remove("
  "dark-theme");"
  ";"
  "} else if (newSettings.theme === "dark") { root.classList.add("
  "dark-theme");"
  ";"
  "; root.classList.remove("
  "light-theme");"
  "} else { root.classList.remove("
  "light-theme","
  "dark-theme")} }; useEffect(() => { const savedSettings = localStorage.getItem("
  "accessibility-settings"); if (savedSettings) { const parsed = JSON.parse(savedSettings); setSettings(parsed); applySettings(parsed)} const handleKeyDown = (props) => { if (e.ctrlKey) { switch (e.key) { case "=": case "+": e.preventDefault(); increaseFontSize();"
  "; break;"
  ";"
  "; case "-": e.preventDefault(); decreaseFontSize();"
  "; break;"
  ";"
  "; case 0: e.preventDefault(); resetSettings(); break} } };"
  "; document.addEventListener("
  "keydown",handleKeyDown);"
  ";"
  "; return () => document.removeEventListener("
  "keydown",handleKeyDown)},[]); return ( <> {} <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-4 left-4 z-50 p-3 bg-cyan-500 hover: b g-cyan-600 text-white rounded-full shadow-lg transition-all duration-200 hover: scal e-110 focus: outlin e-none focus: rin g-2 focus: rin g-cyan-400 focus: rin g-offset-2" aria-label="Accessibility Settings" title="Accessibility Settings" > <AccessibilityIcon className="w-6 h-6" /> </button> {} {isOpen && ( <div className="fixed bottom-20 left-4 z-40 w-80 bg-white dark: b g-gray-800 rounded-lg shadow-xl border border-gray-200 dark: borde r-gray-700 p-6"> <div className="flex items-center justify-between mb-4"> <h3 className="text-lg font-semibold text-gray-900 dark: tex t-white">Accessibility</h3> <button onClick={() => setIsOpen(false)} className="text-gray-400 hover: tex t-gray-600 dark: hove r:text-gray-300" > </button> </div> <div className="space-y-4"> {} <div> <label className="block text-sm font-medium text-gray-700 dark: tex t-gray-300 mb-2"> Font Size: {settings.fontSize}px </label> <div className="flex items-center gap-2"> <button onClick={decreaseFontSize} className="px-3 py-1 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded hover: b g-gray-300 dark: hove r:bg-gray-600" > A- </button> <button onClick={increaseFontSize} className="px-3 py-1 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded hover: b g-gray-300 dark: hove r:bg-gray-600" > A+ </button> </div> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.highContrast} onChange={(e) => updateSetting("
  "highContrast",e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark: tex t-gray-300">High Contrast</span> </label> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.reducedMotion} onChange={(e) => updateSetting("
  "reducedMotion",e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark: tex t-gray-300">Reduced Motion</span> </label> </div> {} <div> <label className="block text-sm font-medium text-gray-700 dark: tex t-gray-300 mb-2"> Theme </label> <select"; value={settings.theme} onChange={(e) => updateSetting("
  "theme",e.target.value)} className="w-full px-3 py-2 border border-gray-300 dark: borde r-gray-600 rounded-md bg-white dark: b g-gray-700 text-gray-900 dark: tex t-white" > <option value="auto">Auto</option> <option value="light">Light</option> <option value="dark">Dark</option> </select> </div> {} <button onClick={resetSettings} className="w-full px-4 py-2 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded-md hover: b g-gray-300 dark: hove r:bg-gray-600 transition-colors" > Reset to Default </button> </div> </div> )} </> )} </AccessibilitySettings> </any>;"
  ";"
  ";'"`'"`
import { useEffect } from 'react';,
import { useState } from 'react';,
import _React,{ useState,useEffect } from 'react'; import { Accessibility as AccessibilityIcon,Sun,Moon,Settings';'} from 'lucide-react'; interface AccessibilitySettings { fontSize: number; highContrast: boolean; reducedMotion: boolean;'; soundEnabled: boolean;';'; theme: 'light' | 'dark' | 'auto'} export function Accessibility(): void { const [isOpen,setIsOpen] = useState<any>(false); const [settings,setSettings] = useState<AccessibilitySettings>({ fontSize: 1 6,highContrast: fals e,reducedMotion: fals e,soundEnabled: tru e,theme: 'auto' };); const updateSetting = (props) => { const newSettings = { ...settings,[key]: value };; setSettings(newSettings);'; applySettings(newSettings);';'; localStorage.setItem('accessibility-settings',JSON.stringify(newSettings))}; const increaseFontSize = (props) => { updateSetting('fontSize',Math.min(settings.fontSize + 2,24))}; const decreaseFontSize = (props) => { updateSetting('fontSize',Math.max(settings.fontSize - 2,12))}; const resetSettings = (props) => { const defaultSettings: AccessibilitySetting s = { fontSize: 1 6,highContrast: fals e,reducedMotion: fals e,soundEnabled: tru e,theme: 'auto' };; setSettings(defaultSettings);'; applySettings(defaultSettings);';'; localStorage.setItem('accessibility-settings',JSON.stringify(defaultSettings))}; const applySettings = (props) => { const root = document.documentElement; root.style.fontSize = `${newSettings.fontSize}px`; if (newSettings.highContrast) { root.classList.add('high-contrast');'} else { root.classList.remove('high-contrast')} if (newSettings.reducedMotion) { root.classList.add('reduced-motion');'} else { root.classList.remove('reduced-motion')} if (newSettings.theme === 'light') { root.classList.add('light-theme');';'; root.classList.remove('dark-theme');';'} else if (newSettings.theme === 'dark') { root.classList.add('dark-theme');';'; root.classList.remove('light-theme');'} else { root.classList.remove('light-theme','dark-theme')} }; useEffect(() => { const savedSettings = localStorage.getItem('accessibility-settings'); if (savedSettings) { const parsed = JSON.parse(savedSettings); setSettings(parsed); applySettings(parsed)} const handleKeyDown = (props) => { if (e.ctrlKey) { switch (e.key) { case '=': case '+': e.preventDefault(); increaseFontSize();'; break;';'; case '-': e.preventDefault(); decreaseFontSize();'; break;';'; case '0': e.preventDefault(); resetSettings(); break} } };'; document.addEventListener('keydown',handleKeyDown);';'; return () => document.removeEventListener('keydown',handleKeyDown)},[]); return ( <> {} <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-4 left-4 z-50 p-3 bg-cyan-500 hover: b g-cyan-600 text-white rounded-full shadow-lg transition-all duration-200 hover: scal e-110 focus: outlin e-none focus: rin g-2 focus: rin g-cyan-400 focus: rin g-offset-2" aria-label="Accessibility Settings" title="Accessibility Settings" > <AccessibilityIcon className="w-6 h-6" /> </button> {} {isOpen && ( <div className="fixed bottom-20 left-4 z-40 w-80 bg-white dark: b g-gray-800 rounded-lg shadow-xl border border-gray-200 dark: borde r-gray-700 p-6"> <div className="flex items-center justify-between mb-4"> <h3 className="text-lg font-semibold text-gray-900 dark: tex t-white">Accessibility</h3> <button onClick={() => setIsOpen(false)} className="text-gray-400 hover: tex t-gray-600 dark: hove r:text-gray-300" > × </button> </div> <div className="space-y-4"> {} <div> <label className="block text-sm font-medium text-gray-700 dark: tex t-gray-300 mb-2"> Font Size: {settings.fontSize}px </label> <div className="flex items-center gap-2"> <button onClick={decreaseFontSize} className="px-3 py-1 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded hover: b g-gray-300 dark: hove r:bg-gray-600" > A- </button> <button onClick={increaseFontSize} className="px-3 py-1 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded hover: b g-gray-300 dark: hove r:bg-gray-600" > A+ </button> </div> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.highContrast} onChange={(e) => updateSetting('highContrast',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark: tex t-gray-300">High Contrast</span> </label> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.reducedMotion} onChange={(e) => updateSetting('reducedMotion',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark: tex t-gray-300">Reduced Motion</span> </label> </div> {} <div> <label className="block text-sm font-medium text-gray-700 dark: tex t-gray-300 mb-2"> Theme </label> <select'; value={settings.theme} onChange={(e) => updateSetting('theme',e.target.value)} className="w-full px-3 py-2 border border-gray-300 dark: borde r-gray-600 rounded-md bg-white dark: b g-gray-700 text-gray-900 dark: tex t-white" > <option value="auto">Auto</option> <option value="light">Light</option> <option value="dark">Dark</option> </select> </div> {} <button onClick={resetSettings} className="w-full px-4 py-2 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded-md hover: b g-gray-300 dark: hove r:bg-gray-600 transition-colors" > Reset to Default </button> </div> </div> )} </> )} </AccessibilitySettings> </any>;';';
=======
import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Volume2, VolumeX, Keyboard, Accessibility, X } from 'lucide-react';
import { Button } from '../ui/button';
const AccessibilityContext = createContext(undefined);
export const useAccessibility = () => {
    const context = useContext(AccessibilityContext);
    if (!context) {
        throw new Error('useAccessibility must be used within an AccessibilityProvider');
    }
    return context;
};
// Accessibility Provider Component
export const AccessibilityProvider = ({ children }) => {
    const [highContrast, setHighContrast] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);
    const [fontSize, setFontSize] = useState('medium');
    const [colorBlindMode, setColorBlindMode] = useState('none');
    // Load settings from localStorage
    useEffect(() => {
        const savedSettings = localStorage.getItem('zion-accessibility-settings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            setHighContrast(settings.highContrast || false);
            setReducedMotion(settings.reducedMotion || false);
            setFontSize(settings.fontSize || 'medium');
            setColorBlindMode(settings.colorBlindMode || 'none');
        }
    }, []);
    // Save settings to localStorage
    useEffect(() => {
        const settings = {
            highContrast,
            reducedMotion,
            fontSize,
            colorBlindMode
        };
        localStorage.setItem('zion-accessibility-settings', JSON.stringify(settings));
    }, [highContrast, reducedMotion, fontSize, colorBlindMode]);
    // Apply accessibility settings to document
    useEffect(() => {
        const root = document.documentElement;
        // High contrast mode
        if (highContrast) {
            root.classList.add('high-contrast');
        }
        else {
            root.classList.remove('high-contrast');
        }
        // Reduced motion
        if (reducedMotion) {
            root.classList.add('reduced-motion');
        }
        else {
            root.classList.remove('reduced-motion');
        }
        // Font size
        root.style.fontSize = fontSize === 'small' ? '14px' : fontSize === 'large' ? '18px' : '16px';
        // Color blind mode
        root.style.filter = colorBlindMode === 'none' ? 'none' :
            colorBlindMode === 'protanopia' ? 'url(#protanopia)' :
                colorBlindMode === 'deuteranopia' ? 'url(#deuteranopia)' :
                    'url(#tritanopia)';
    }, [highContrast, reducedMotion, fontSize, colorBlindMode]);
    const toggleHighContrast = () => setHighContrast(!highContrast);
    const toggleReducedMotion = () => setReducedMotion(!reducedMotion);
    const value = {
        highContrast,
        reducedMotion,
        fontSize,
        colorBlindMode,
        toggleHighContrast,
        toggleReducedMotion,
        setFontSize,
        setColorBlindMode
    };
    return (<AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>);
};
// Accessibility Panel Component
export const AccessibilityPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { highContrast, reducedMotion, fontSize, colorBlindMode, toggleHighContrast, toggleReducedMotion, setFontSize, setColorBlindMode } = useAccessibility();
    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (event) => {
            // Ctrl/Cmd + Shift + A to open accessibility panel
            if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'A') {
                event.preventDefault();
                setIsOpen(!isOpen);
            }
            // Ctrl/Cmd + Shift + H to toggle high contrast
            if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'H') {
                event.preventDefault();
                toggleHighContrast();
            }
            // Ctrl/Cmd + Shift + M to toggle reduced motion
            if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'M') {
                event.preventDefault();
                toggleReducedMotion();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, toggleHighContrast, toggleReducedMotion]);
    return (<>
      {/* Floating Accessibility Button */}
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-zion-cyan to-zion-purple text-white rounded-full shadow-2xl shadow-zion-cyan/25 z-50 flex items-center justify-center hover:shadow-2xl hover:shadow-zion-cyan/40 transition-all duration-300" aria-label="Open Accessibility Settings">
        <Accessibility className="w-6 h-6"/>
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-zion-cyan"/>
                  Accessibility Settings
                </h2>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-zion-slate-light hover:text-white">
                  <X className="w-4 h-4"/>
                </Button>
              </div>

              {/* Settings */}
              <div className="space-y-6">
                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium mb-1">High Contrast</h3>
                    <p className="text-sm text-zion-slate-light">Increase contrast for better visibility</p>
                  </div>
                  <Button variant={highContrast ? "default" : "outline"} size="sm" onClick={toggleHighContrast} className={highContrast ? "bg-zion-cyan text-white" : "border-zion-cyan/30 text-zion-cyan"}>
                    {highContrast ? <Eye className="w-4 h-4"/> : <EyeOff className="w-4 h-4"/>}
                  </Button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium mb-1">Reduced Motion</h3>
                    <p className="text-sm text-zion-slate-light">Minimize animations and transitions</p>
                  </div>
                  <Button variant={reducedMotion ? "default" : "outline"} size="sm" onClick={toggleReducedMotion} className={reducedMotion ? "bg-zion-cyan text-white" : "border-zion-cyan/30 text-zion-cyan"}>
                    {reducedMotion ? <VolumeX className="w-4 h-4"/> : <Volume2 className="w-4 h-4"/>}
                  </Button>
                </div>

                {/* Font Size */}
                <div>
                  <h3 className="text-white font-medium mb-3">Font Size</h3>
                  <div className="flex gap-2">
                    {['small', 'medium', 'large'].map((size) => (<Button key={size} variant={fontSize === size ? "default" : "outline"} size="sm" onClick={() => setFontSize(size)} className={fontSize === size ? "bg-zion-cyan text-white" : "border-zion-cyan/30 text-zion-cyan"}>
                        {size.charAt(0).toUpperCase() + size.slice(1)}
                      </Button>))}
                  </div>
                </div>

                {/* Color Blind Mode */}
                <div>
                  <h3 className="text-white font-medium mb-3">Color Blind Support</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {['none', 'protanopia', 'deuteranopia', 'tritanopia'].map((mode) => (<Button key={mode} variant={colorBlindMode === mode ? "default" : "outline"} size="sm" onClick={() => setColorBlindMode(mode)} className={colorBlindMode === mode ? "bg-zion-cyan text-white" : "border-zion-cyan/30 text-zion-cyan"}>
                        {mode.charAt(0).toUpperCase() + mode.slice(1)}
                      </Button>))}
                  </div>
                </div>

                {/* Keyboard Shortcuts */}
                <div className="bg-zion-blue-dark/50 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                    <Keyboard className="w-4 h-4 text-zion-cyan"/>
                    Keyboard Shortcuts
                  </h3>
                  <div className="space-y-2 text-sm text-zion-slate-light">
                    <div className="flex justify-between">
                      <span>Open Panel:</span>
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">Ctrl/Cmd + Shift + A</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span>High Contrast:</span>
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">Ctrl/Cmd + Shift + H</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span>Reduced Motion:</span>
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">Ctrl/Cmd + Shift + M</kbd>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-zion-cyan/20">
                <p className="text-xs text-zion-slate-light text-center">
                  These settings are saved locally and will persist across sessions.
                </p>
              </div>
            </motion.div>
          </motion.div>)}
      </AnimatePresence>
    </>);
};
// Skip to Content Link
export const SkipToContent = () => (<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-medium z-50 hover:bg-zion-cyan-light transition-colors duration-300">
    Skip to main content
  </a>);
// Focus Trap Hook
export const useFocusTrap = (isActive) => {
    useEffect(() => {
        if (!isActive)
            return;
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const container = document.activeElement?.closest('[data-focus-trap]');
        if (!container)
            return;
        const focusableContent = container.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];
        const handleTabKey = (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        e.preventDefault();
                        lastFocusableElement.focus();
                    }
                }
                else {
                    if (document.activeElement === lastFocusableElement) {
                        e.preventDefault();
                        firstFocusableElement.focus();
                    }
                }
            }
        };
        document.addEventListener('keydown', handleTabKey);
        return () => document.removeEventListener('keydown', handleTabKey);
    }, [isActive]);
};
// Screen Reader Only Text
export const SrOnly = ({ children }) => (<span className="sr-only">{children}</span>);
export default AccessibilityPanel;
>>>>>>> origin/backup-improvements-20250827-015311
