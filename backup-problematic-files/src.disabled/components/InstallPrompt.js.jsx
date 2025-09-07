<<<<<<< HEAD
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

=======
import React from 'react';'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const InstallPrompt.js = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>InstallPrompt.js</h1>
      <p>This component is under development.</p>
    </div>
  )
};

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </div>)'
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
