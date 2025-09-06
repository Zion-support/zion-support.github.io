<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
import React from \'react\'; export const InstallPrompt = () => { export default InstallPrompt; const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = (e) => { e && e.preventDefault(); setDeferred(e)}; window && window.addEventListener(\"beforeinstallprompt\",handler); return () => window && window.removeEventListener(\"beforeinstallprompt\",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred && deferred.prompt(); const result = await deferred && deferred.userChoice; if(result && result.outcome !== \"accepted\") {}}}
const React from "react"; export const InstallPrompt = () => { export default InstallPrompt; const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = (e) => { e && e.preventDefault(); setDeferred(e)}; window && window.addEventListener("beforeinstallprompt",handler); return () => window && window.removeEventListener("beforeinstallprompt",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred && deferred.prompt(); const result = await deferred && deferred.userChoice; if(result && result.outcome !== "accepted") {}}}'"'"

import _React from 'react'; export const InstallPrompt = () => { export default InstallPrompt; const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = (e) => { e && e.preventDefault(); setDeferred(e)}; window && window.addEventListener("beforeinstallprompt",handler); return () => window && window.removeEventListener("beforeinstallprompt",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred && deferred.prompt(); const result = await deferred && deferred.userChoice; if(result && result.outcome !== "accepted") {}}}

<<<<<<< HEAD
=======
=======
import _React from 'react'; export const InstallPrompt = () => { export default InstallPrompt; const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = (e) => { e.preventDefault(); setDeferred(e)}; window.addEventListener("beforeinstallprompt",handler); return () => window.removeEventListener("beforeinstallprompt",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred.prompt(); const result = await deferred.userChoice; if(result.outcome !== "accepted") {}}}
>>>>>>> main
=======
import React from \'react\'; export const InstallPrompt = () => { export default InstallPrompt; const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = (e) => { e.preventDefault(); setDeferred(e)}; window.addEventListener(\"beforeinstallprompt\",handler); return () => window.removeEventListener(\"beforeinstallprompt\",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred.prompt(); const result = await deferred.userChoice; if(result.outcome !== \"accepted\") {}}}
const React from "react"; export const InstallPrompt = () => { export default InstallPrompt; const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = (e) => { e.preventDefault(); setDeferred(e)}; window.addEventListener("beforeinstallprompt",handler); return () => window.removeEventListener("beforeinstallprompt",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred.prompt(); const result = await deferred.userChoice; if(result.outcome !== "accepted") {}}}'"'"
import _React from 'react'; export const InstallPrompt = () => { export default InstallPrompt; const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = (e) => { e.preventDefault(); setDeferred(e)}; window.addEventListener("beforeinstallprompt",handler); return () => window.removeEventListener("beforeinstallprompt",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred.prompt(); const result = await deferred.userChoice; if(result.outcome !== "accepted") {}}}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
