<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import _React from 'react'; export const InstallPrompt = () => { export default InstallPrompt; const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = (e) => { e.preventDefault(); setDeferred(e)}; window.addEventListener("beforeinstallprompt",handler); return () => window.removeEventListener("beforeinstallprompt",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred.prompt(); const result = await deferred.userChoice; if(result.outcome !== "accepted") {}}}
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD

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
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
import _React from 'react'; export const InstallPrompt = () => { export default InstallPrompt; const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = (e) => { e.preventDefault(); setDeferred(e)}; window.addEventListener("beforeinstallprompt",handler); return () => window.removeEventListener("beforeinstallprompt",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred.prompt(); const result = await deferred.userChoice; if(result.outcome !== "accepted") {}}}
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
import React from \'react\'; export const InstallPrompt = () => { export default InstallPrompt; const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = (e) => { e.preventDefault(); setDeferred(e)}; window.addEventListener(\"beforeinstallprompt\",handler); return () => window.removeEventListener(\"beforeinstallprompt\",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred.prompt(); const result = await deferred.userChoice; if(result.outcome !== \"accepted\") {}}}
const React from "react"; export const InstallPrompt = () => { export default InstallPrompt; const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = (e) => { e.preventDefault(); setDeferred(e)}; window.addEventListener("beforeinstallprompt",handler); return () => window.removeEventListener("beforeinstallprompt",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred.prompt(); const result = await deferred.userChoice; if(result.outcome !== "accepted") {}}}'"'"
import _React from 'react'; export const InstallPrompt = () => { export default InstallPrompt; const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = (e) => { e.preventDefault(); setDeferred(e)}; window.addEventListener("beforeinstallprompt",handler); return () => window.removeEventListener("beforeinstallprompt",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred.prompt(); const result = await deferred.userChoice; if(result.outcome !== "accepted") {}}}
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
