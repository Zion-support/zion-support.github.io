<<<<<<< HEAD
import { useState,useEffect } from';react' "export": function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window.innerWidth < 768)} checkIsMobile() window.addEventListener('';resize',checkIsMobile) "return": () => window.removeEventListener('';resize',checkIsMobile)},[]) "return": 'isMobile'}'';''
:src && src.disabled/hooks/use-mobile && mobile.js.jsx
const { useState,useEffect } from";react" export: function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window && window.innerWidth < 768)} checkIsMobile() window && window.addEventListener("";resize",checkIsMobile) return: () => window && window.removeEventListener("";resize",checkIsMobile)},[]) return: "isMobile"}"";'"'"
import { useState,useEffect } from';react' "export": function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window && window.innerWidth < 768)} checkIsMobile() window && window.addEventListener('';resize',checkIsMobile) "return": () => window && window.removeEventListener('';resize',checkIsMobile)},[]) "return": 'isMobile'}'';''
=======
import React from 'react';

const Use-mobile = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Use-mobile</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Use-mobile;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
