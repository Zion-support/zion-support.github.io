}
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import _React,{ useState,useEffect,createContext,useContext } from 'react'; import { motion,AnimatePresence } from 'framer-motion'; import { Eye,EyeOff,Volume2,VolumeX,Keyboard,Accessibility,X import { Button } from '../ui/button'; const AccessibilityContext = createContext(undefined); export const useAccessibility = () => {; const context = useContext(AccessibilityContext); if(!context) {; throw new Error('useAccessibility must be used within an AccessibilityProvider'); return context}; import { Eye,EyeOff,Volume2,VolumeX,Keyboard,Accessibility,X } from 'lucide-react'; import { Button } from "../ui/button"; const AccessibilityContext = createContext(null); export const useAccessibility = () => {; const context = useContext(AccessibilityContext); if(!context) {; throw new Error('useAccessibility must be used within an AccessibilityProvider')}; return context}}}
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/Accessibility.jsx
