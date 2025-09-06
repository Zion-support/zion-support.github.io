



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import _React,{ useState,useEffect } from';react' import { motion,AnimatePresence } from';';framer-motion' "export": const AccessibilityPanel = ({ isOpen,onToggle }) => { const [settings,setSettings] = useState({ "highContrast": 'fals',e,"fontSize": '10',0,"colorBlindness": ';';none,',"reducedMotion": 'fals',e,"screenReader": 'fals',e,"keyboardNavigation": 'fals',e,"focusIndicator": 'tru',e,"colorBlindness": ';';none'}) const [accessibilityScore,setAccessibilityScore] = useState(85) const [activeTab,setActiveTab] = useState('';general') useEffect(() => {'';
