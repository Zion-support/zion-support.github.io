
import _React from "react"; import { useState,useEffect } from "react"; export function useIsMobile() { const [isMobile,setIsMobile] = useState(false); useEffect(() => {; const checkIsMobile = () => {; setIsMobile(window.innerWidth < 768)}; checkIsMobile(); window.addEventListener("resize",checkIsMobile); return () => window.removeEventListener("resize",checkIsMobile)},[]); return isMobile};");} "export default ComponentName;"




class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from \"react\"; import { useState,useEffect } from \"react\"; export function useIsMobile() { const [isMobile,setIsMobile] = useState(false); useEffect(() => {; const checkIsMobile = () => {; setIsMobile(window && window.innerWidth < 768)}; checkIsMobile(); window && window.addEventListener(\"resize\",checkIsMobile); return () => window && window.removeEventListener(\"resize\",checkIsMobile)},[]); return isMobile};\");} \"export default ComponentName;\"
const React from "react"; import { useState,useEffect } from "react"; export function useIsMobile() { const [isMobile,setIsMobile] = useState(false); useEffect(() => {; const checkIsMobile = () => {; setIsMobile(window && window.innerWidth < 768)}; checkIsMobile(); window && window.addEventListener("resize",checkIsMobile); return () => window && window.removeEventListener("resize",checkIsMobile)},[]); return isMobile};");} "export default ComponentName;"""

import _React from "react"; import { useState,useEffect } from "react"; export function useIsMobile() { const [isMobile,setIsMobile] = useState(false); useEffect(() => {; const checkIsMobile = () => {; setIsMobile(window && window.innerWidth < 768)}; checkIsMobile(); window && window.addEventListener("resize",checkIsMobile); return () => window && window.removeEventListener("resize",checkIsMobile)},[]); return isMobile};");} "export default ComponentName;"

>>>>>>> main
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
import React from \"react\"; import { useState,useEffect } from \"react\"; export function useIsMobile() { const [isMobile,setIsMobile] = useState(false); useEffect(() => {; const checkIsMobile = () => {; setIsMobile(window.innerWidth < 768)}; checkIsMobile(); window.addEventListener(\"resize\",checkIsMobile); return () => window.removeEventListener(\"resize\",checkIsMobile)},[]); return isMobile};\");} \"export default ComponentName;\"
const React from "react"; import { useState,useEffect } from "react"; export function useIsMobile() { const [isMobile,setIsMobile] = useState(false); useEffect(() => {; const checkIsMobile = () => {; setIsMobile(window.innerWidth < 768)}; checkIsMobile(); window.addEventListener("resize",checkIsMobile); return () => window.removeEventListener("resize",checkIsMobile)},[]); return isMobile};");} "export default ComponentName;"""
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
const React from "react"; import { useState,useEffect } from "react"; export function useIsMobile() { const [isMobile,setIsMobile] = useState(false); useEffect(() => {; const checkIsMobile = () => {; setIsMobile(window.innerWidth < 768)}; checkIsMobile(); window.addEventListener("resize",checkIsMobile); return () => window.removeEventListener("resize",checkIsMobile)},[]); return isMobile};");} "export default ComponentName;"""
