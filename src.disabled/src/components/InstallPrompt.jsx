
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

