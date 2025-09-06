



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import { useState,useEffect } from';react' "export": function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window.innerWidth < 768)} checkIsMobile() window.addEventListener('';resize',checkIsMobile) "return": () => window.removeEventListener('';resize',checkIsMobile)},[]) "return": 'isMobile'}'';''
=======
=======
:src && src.disabled/hooks/use-mobile && mobile.js.jsx
const { useState,useEffect } from";react" export: function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window && window.innerWidth < 768)} checkIsMobile() window && window.addEventListener("";resize",checkIsMobile) return: () => window && window.removeEventListener("";resize",checkIsMobile)},[]) return: "isMobile"}"";'"'"

import { useState,useEffect } from';react' "export": function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window && window.innerWidth < 768)} checkIsMobile() window && window.addEventListener('';resize',checkIsMobile) "return": () => window && window.removeEventListener('';resize',checkIsMobile)},[]) "return": 'isMobile'}'';''

