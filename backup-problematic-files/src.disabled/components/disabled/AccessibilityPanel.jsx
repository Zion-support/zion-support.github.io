<<<<<<< HEAD
<<<<<<< HEAD
import _React,{ useState,useEffect } from';react' import { motion,AnimatePresence } from';';framer-motion' "export": const AccessibilityPanel = ({ isOpen,onToggle }) => { const [settings,setSettings] = useState({ "highContrast": 'fals',e,"fontSize": '10',0,"colorBlindness": ';';none,',"reducedMotion": 'fals',e,"screenReader": 'fals',e,"keyboardNavigation": 'fals',e,"focusIndicator": 'tru',e,"colorBlindness": ';';none'}) const [accessibilityScore,setAccessibilityScore] = useState(85) const [activeTab,setActiveTab] = useState('';general') useEffect(() => {'';
=======
import React,{ useState,useEffect } from\';react\' import { motion,AnimatePresence } from\';\';framer-motion\' \"export\": const AccessibilityPanel = ({ isOpen,onToggle }) => { const [settings,setSettings] = useState({ \"highContrast\": \'fals\',e,\"fontSize\": \'10\',0,\"colorBlindness\": \';\';none,\',\"reducedMotion\": \'fals\',e,\"screenReader\": \'fals\',e,\"keyboardNavigation\": \'fals\',e,\"focusIndicator\": \'tru\',e,\"colorBlindness\": \';\';none\'}) const [accessibilityScore,setAccessibilityScore] = useState(85) const [activeTab,setActiveTab] = useState(\'';general\') useEffect(() => {\'';
const React,{ useState,useEffect } from";react" import { motion,AnimatePresence } from";";framer-motion" export: const AccessibilityPanel = ({ isOpen,onToggle }) => { const [settings,setSettings] = useState({ highContrast: "fals",e,fontSize: "10",0,colorBlindness: ";";none,",reducedMotion: "fals",e,screenReader: "fals",e,keyboardNavigation: "fals",e,focusIndicator: "tru",e,colorBlindness: ";";none"}) const [accessibilityScore,setAccessibilityScore] = useState(85) const [activeTab,setActiveTab] = useState("";general") useEffect(() => {"";'"'"
import _React,{ useState,useEffect } from';react' import { motion,AnimatePresence } from';';framer-motion' "export": const AccessibilityPanel = ({ isOpen,onToggle }) => { const [settings,setSettings] = useState({ "highContrast": 'fals',e,"fontSize": '10',0,"colorBlindness": ';';none,',"reducedMotion": 'fals',e,"screenReader": 'fals',e,"keyboardNavigation": 'fals',e,"focusIndicator": 'tru',e,"colorBlindness": ';';none'}) const [accessibilityScore,setAccessibilityScore] = useState(85) const [activeTab,setActiveTab] = useState('';general') useEffect(() => {'';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

const AccessibilityPanel = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AccessibilityPanel</h1>
      <p>This component is under development.</p>
    </div>
  )
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
