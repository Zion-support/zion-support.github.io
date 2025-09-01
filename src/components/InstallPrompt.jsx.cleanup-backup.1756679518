import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
export const InstallPrompt = () => {
    const [deferred, setDeferred] = useState(null);
    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();
            setDeferred(e)};
        window.addEventListener('beforeinstallprompt', handler);
        return () => window.removeEventListener('beforeinstallprompt', handler)}, []);
    if (!deferred)
        return null;
    const onClick = async () => {
        deferred.prompt();
        const result = await deferred.userChoice;
        if (result.outcome !== 'accepted') {
            // keep for later
<<<<<<< HEAD
            setDeferred(deferred);

        else {
            setDeferred(null);

=======
            setDeferred(deferred)}
        else {
            setDeferred(null)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    };
    return (<div className="fixed bottom-4 right-4 z-50">
      <Button onClick={onClick}>Install App</Button>
    </div>)};
export default InstallPrompt;
}}