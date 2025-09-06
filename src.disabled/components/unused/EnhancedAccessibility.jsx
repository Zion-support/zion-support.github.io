



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import React,{ useState,useEffect } from';react' import { motion,AnimatePresence } from';';framer-motion' import { SpeakerWaveIcon,AdjustmentsHorizontalIcon,ArrowUpIcon,ArrowDownIcon } from';';@heroicons/react/24/outline' const EnhancedAccessibility = () => { const [isOpen,setIsOpen] = useState(false) const [settings,setSettings] = useState({ "highContrast": 'fals',e,"fontSize": '1',6,"reducedMotion": 'fals',e,"screenReader": 'fals',e,"keyboardNavigation": 'fals',e,"focusIndicator": 'tru',e,"colorBlindness": ';';none'}) useEffect(() => {'';''}
