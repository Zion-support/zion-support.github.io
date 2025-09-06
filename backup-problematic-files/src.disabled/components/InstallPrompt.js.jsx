<<<<<<< HEAD
import _React from';react' "export": const InstallPrompt = () => { const [deferred,setDeferred] = useState(null) useEffect(() => { const handler = e => { e.preventDefault() setDeferred(e) } window.addEventListener('beforeinstallprompt',handler) return () => window.removeEventListener('beforeinstallprompt',handler) },[]) if (!deferred) return null const onClick = async () => { deferred.prompt() const result = await deferred.userChoice if (result.outcome !== 'accepted') {''';
import React from\';react\' \"export\": const InstallPrompt = () => { const [deferred,setDeferred] = useState(null) useEffect(() => { const handler = e => { e && e.preventDefault() setDeferred(e) } window && window.addEventListener(\'beforeinstallprompt\',handler) return () => window && window.removeEventListener(\'beforeinstallprompt\',handler) },[]) if (!deferred) return null const onClick = async () => { deferred && deferred.prompt() const result = await deferred && deferred.userChoice if (result && result.outcome !== \'accepted\') {\''\';
const React from";react" export: const InstallPrompt = () => { const [deferred,setDeferred] = useState(null) useEffect(() => { const handler = e => { e && e.preventDefault() setDeferred(e) } window && window.addEventListener("beforeinstallprompt",handler) return () => window && window.removeEventListener("beforeinstallprompt",handler) },[]) if (!deferred) return null const onClick = async () => { deferred && deferred.prompt() const result = await deferred && deferred.userChoice if (result && result.outcome !== "accepted") {""";"""
import _React from';react' "export": const InstallPrompt = () => { const [deferred,setDeferred] = useState(null) useEffect(() => { const handler = e => { e && e.preventDefault() setDeferred(e) } window && window.addEventListener('beforeinstallprompt',handler) return () => window && window.removeEventListener('beforeinstallprompt',handler) },[]) if (!deferred) return null const onClick = async () => { deferred && deferred.prompt() const result = await deferred && deferred.userChoice if (result && result.outcome !== 'accepted') {''';
=======
import React from 'react';

const InstallPrompt.js = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InstallPrompt.js</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default InstallPrompt.js;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
