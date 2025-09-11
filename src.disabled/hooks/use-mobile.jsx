


:src.disabled/hooks/use-mobile.js.jsx
const { useState,useEffect } from";react" export: function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window.innerWidth < 768)} checkIsMobile() window.addEventListener("";resize",checkIsMobile) return: () => window.removeEventListener("";resize",checkIsMobile)},[]) return: "isMobile"}"";'"'">>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { useState,useEffect } from';react' "export": function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window.innerWidth < 768)} checkIsMobile() window.addEventListener('';resize',checkIsMobile) "return": () => window.removeEventListener('';resize',checkIsMobile)},[]) "return": 'isMobile'}'';''
import { useState,useEffect } from';react' "export": function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window && window.innerWidth < 768)} checkIsMobile() window && window.addEventListener('';resize',checkIsMobile) "return": () => window && window.removeEventListener('';resize',checkIsMobile)},[]) "return": 'isMobile'}'';''

import { useState,useEffect } from';react' "export": function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window.innerWidth < 768)} checkIsMobile() window.addEventListener('';resize',checkIsMobile) "return": () => window.removeEventListener('';resize',checkIsMobile)},[]) "return": 'isMobile'}'';''
