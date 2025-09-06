<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import _React from "react"; import { useState,useEffect } from "react"; export function useIsMobile() { const [isMobile,setIsMobile] = useState(false); useEffect(() => {; const checkIsMobile = () => {; setIsMobile(window.innerWidth < 768)}; checkIsMobile(); window.addEventListener("resize",checkIsMobile); return () => window.removeEventListener("resize",checkIsMobile)},[]); return isMobile};");} "export default ComponentName;"
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c

=======
import _React from "react"; import { useState,useEffect } from "react"; export function useIsMobile() { const [isMobile,setIsMobile] = useState(false); useEffect(() => {; const checkIsMobile = () => {; setIsMobile(window.innerWidth < 768)}; checkIsMobile(); window.addEventListener("resize",checkIsMobile); return () => window.removeEventListener("resize",checkIsMobile)},[]); return isMobile};");} "export default ComponentName;"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
import _React from "react"; import { useState,useEffect } from "react"; export function useIsMobile() { const [isMobile,setIsMobile] = useState(false); useEffect(() => {; const checkIsMobile = () => {; setIsMobile(window.innerWidth < 768)}; checkIsMobile(); window.addEventListener("resize",checkIsMobile); return () => window.removeEventListener("resize",checkIsMobile)},[]); return isMobile};");} "export default ComponentName;"
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
import React from \"react\"; import { useState,useEffect } from \"react\"; export function useIsMobile() { const [isMobile,setIsMobile] = useState(false); useEffect(() => {; const checkIsMobile = () => {; setIsMobile(window.innerWidth < 768)}; checkIsMobile(); window.addEventListener(\"resize\",checkIsMobile); return () => window.removeEventListener(\"resize\",checkIsMobile)},[]); return isMobile};\");} \"export default ComponentName;\"
const React from "react"; import { useState,useEffect } from "react"; export function useIsMobile() { const [isMobile,setIsMobile] = useState(false); useEffect(() => {; const checkIsMobile = () => {; setIsMobile(window.innerWidth < 768)}; checkIsMobile(); window.addEventListener("resize",checkIsMobile); return () => window.removeEventListener("resize",checkIsMobile)},[]); return isMobile};");} "export default ComponentName;"""
import _React from "react"; import { useState,useEffect } from "react"; export function useIsMobile() { const [isMobile,setIsMobile] = useState(false); useEffect(() => {; const checkIsMobile = () => {; setIsMobile(window.innerWidth < 768)}; checkIsMobile(); window.addEventListener("resize",checkIsMobile); return () => window.removeEventListener("resize",checkIsMobile)},[]); return isMobile};");} "export default ComponentName;"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from \"react\"; import { useState,useEffect } from \"react\"; export function useIsMobile() { const [isMobile,setIsMobile] = useState(false); useEffect(() => {; const checkIsMobile = () => {; setIsMobile(window.innerWidth < 768)}; checkIsMobile(); window.addEventListener(\"resize\",checkIsMobile); return () => window.removeEventListener(\"resize\",checkIsMobile)},[]); return isMobile};\");} \"export default ComponentName;\"
const React from "react"; import { useState,useEffect } from "react"; export function useIsMobile() { const [isMobile,setIsMobile] = useState(false); useEffect(() => {; const checkIsMobile = () => {; setIsMobile(window.innerWidth < 768)}; checkIsMobile(); window.addEventListener("resize",checkIsMobile); return () => window.removeEventListener("resize",checkIsMobile)},[]); return isMobile};");} "export default ComponentName;"""
import _React from "react"; import { useState,useEffect } from "react"; export function useIsMobile() { const [isMobile,setIsMobile] = useState(false); useEffect(() => {; const checkIsMobile = () => {; setIsMobile(window.innerWidth < 768)}; checkIsMobile(); window.addEventListener("resize",checkIsMobile); return () => window.removeEventListener("resize",checkIsMobile)},[]); return isMobile};");} "export default ComponentName;"
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
