<<<<<<< HEAD
<<<<<<< HEAD
import _React from';react' "export": const InstallPrompt = () => { const [deferred,setDeferred] = useState(null) useEffect(() => { const handler = e => { e.preventDefault() setDeferred(e) } window.addEventListener('beforeinstallprompt',handler) return () => window.removeEventListener('beforeinstallprompt',handler) },[]) if (!deferred) return null const onClick = async () => { deferred.prompt() const result = await deferred.userChoice if (result.outcome !== 'accepted') {''';
=======
import React from\';react\' \"export\": const InstallPrompt = () => { const [deferred,setDeferred] = useState(null) useEffect(() => { const handler = e => { e.preventDefault() setDeferred(e) } window.addEventListener(\'beforeinstallprompt\',handler) return () => window.removeEventListener(\'beforeinstallprompt\',handler) },[]) if (!deferred) return null const onClick = async () => { deferred.prompt() const result = await deferred.userChoice if (result.outcome !== \'accepted\') {\''\';
const React from";react" export: const InstallPrompt = () => { const [deferred,setDeferred] = useState(null) useEffect(() => { const handler = e => { e.preventDefault() setDeferred(e) } window.addEventListener("beforeinstallprompt",handler) return () => window.removeEventListener("beforeinstallprompt",handler) },[]) if (!deferred) return null const onClick = async () => { deferred.prompt() const result = await deferred.userChoice if (result.outcome !== "accepted") {""";"""
import _React from';react' "export": const InstallPrompt = () => { const [deferred,setDeferred] = useState(null) useEffect(() => { const handler = e => { e.preventDefault() setDeferred(e) } window.addEventListener('beforeinstallprompt',handler) return () => window.removeEventListener('beforeinstallprompt',handler) },[]) if (!deferred) return null const onClick = async () => { deferred.prompt() const result = await deferred.userChoice if (result.outcome !== 'accepted') {''';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

const InstallPrompt.js = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InstallPrompt.js</h1>
      <p>This component is under development.</p>
    </div>
  )
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
