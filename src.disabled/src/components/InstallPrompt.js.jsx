<<<<<<< HEAD
<<<<<<< HEAD
import _React from 'react'; export const InstallPrompt = () => { const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = e => { e.preventDefault(); setDeferred(e)}; window.addEventListener("beforeinstallprompt",handler); return () => window.removeEventListener("beforeinstallprompt",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred.prompt(); const result = await deferred.userChoice; if(result.outcome !== "accepted") {}}}
=======
<<<<<<< HEAD
import React from \'react\'; export const InstallPrompt = () => { const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = e => { e && e.preventDefault(); setDeferred(e)}; window && window.addEventListener(\"beforeinstallprompt\",handler); return () => window && window.removeEventListener(\"beforeinstallprompt\",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred && deferred.prompt(); const result = await deferred && deferred.userChoice; if(result && result.outcome !== \"accepted\") {}}}
const React from "react"; export const InstallPrompt = () => { const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = e => { e && e.preventDefault(); setDeferred(e)}; window && window.addEventListener("beforeinstallprompt",handler); return () => window && window.removeEventListener("beforeinstallprompt",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred && deferred.prompt(); const result = await deferred && deferred.userChoice; if(result && result.outcome !== "accepted") {}}}'"'"

import _React from 'react'; export const InstallPrompt = () => { const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = e => { e && e.preventDefault(); setDeferred(e)}; window && window.addEventListener("beforeinstallprompt",handler); return () => window && window.removeEventListener("beforeinstallprompt",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred && deferred.prompt(); const result = await deferred && deferred.userChoice; if(result && result.outcome !== "accepted") {}}}

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
import React from \'react\'; export const InstallPrompt = () => { const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = e => { e.preventDefault(); setDeferred(e)}; window.addEventListener(\"beforeinstallprompt\",handler); return () => window.removeEventListener(\"beforeinstallprompt\",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred.prompt(); const result = await deferred.userChoice; if(result.outcome !== \"accepted\") {}}}
const React from "react"; export const InstallPrompt = () => { const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = e => { e.preventDefault(); setDeferred(e)}; window.addEventListener("beforeinstallprompt",handler); return () => window.removeEventListener("beforeinstallprompt",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred.prompt(); const result = await deferred.userChoice; if(result.outcome !== "accepted") {}}}'"'"
import _React from 'react'; export const InstallPrompt = () => { const [deferred,setDeferred] = useState(null); useEffect(() => { const handler = e => { e.preventDefault(); setDeferred(e)}; window.addEventListener("beforeinstallprompt",handler); return () => window.removeEventListener("beforeinstallprompt",handler)},[]); if(!deferred) return null; const onClick = async () => { deferred.prompt(); const result = await deferred.userChoice; if(result.outcome !== "accepted") {}}}
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
