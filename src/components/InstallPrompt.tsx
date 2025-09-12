import React, { useEffect, useState } from 'react';
import { _Button } from '@/components/ui/button';
export const _InstallPrompt = () => {
    const [deferred, setDeferred] = useState(null);
    useEffect(() => {
        const _handler = (e) => {
            e.preventDefault();
            setDeferred(e);
        };
        window.addEventListener('beforeinstallprompt', handler);
        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);
    if (!deferred)
        return null;
    const _onClick = async () => {
        deferred.prompt();
        const _result = await deferred.userChoice;
        if (result.outcome !== 'accepted') {
            // keep for later
            setDeferred(deferred);
        }
        else {
            setDeferred(null);
        }
    };
    return (<div className="fixed bottom-4 right-4 z-50">
      <Button onClick={onClick}>Install App</Button>
    </div>);
};
export default InstallPrompt;
