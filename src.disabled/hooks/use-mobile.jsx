



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
:src.disabled/hooks/use-mobile.js.jsx
const { useState,useEffect } from";react" export: function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window.innerWidth < 768)} checkIsMobile() window.addEventListener("";resize",checkIsMobile) return: () => window.removeEventListener("";resize",checkIsMobile)},[]) return: "isMobile"}"";'"'"
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4:temp_exclude/src.disabled/hooks/use-mobile.jsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import { useState,useEffect } from';react' "export": function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window.innerWidth < 768)} checkIsMobile() window.addEventListener('';resize',checkIsMobile) "return": () => window.removeEventListener('';resize',checkIsMobile)},[]) "return": 'isMobile'}'';''
=======
=======
:src && src.disabled/hooks/use-mobile && mobile.js.jsx
const { useState,useEffect } from";react" export: function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window && window.innerWidth < 768)} checkIsMobile() window && window.addEventListener("";resize",checkIsMobile) return: () => window && window.removeEventListener("";resize",checkIsMobile)},[]) return: "isMobile"}"";'"'"

import { useState,useEffect } from';react' "export": function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window && window.innerWidth < 768)} checkIsMobile() window && window.addEventListener('';resize',checkIsMobile) "return": () => window && window.removeEventListener('';resize',checkIsMobile)},[]) "return": 'isMobile'}'';''

