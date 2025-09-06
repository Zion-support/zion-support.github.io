    const inStandalone = window.matchMedia('(display-mode: standalone)').matches,

<<<<<<< HEAD
        description: 'Your browser does not support app installation.'}),
      return;

=======
    if (recentlyDismissed || inStandalone) return;

    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setPromptEvent(e)
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, []);

  if (!promptEvent || window.matchMedia('(display-mode: standalone)').matches) {
    return null;
  }

  const onClick = async () => {
    if (!promptEvent) {
      toast('Installation not available', {
        description: 'Your browser does not support app installation.'}),
      return;
    }
    try {
      setIsInstalling(true);
      promptEvent.prompt();
      const result = await promptEvent.userChoice;
      setIsInstalling(false);
      if (result.outcome === 'accepted') {
        toast.success('App installed');
        setPromptEvent(null)
      } else {
        toast('Installation dismissed');
        safeStorage.setItem(DISMISS_KEY, Date.now().toString());
        setPromptEvent(null)
      }
    } catch (err) {
      setIsInstalling(false);
      toast('Installation failed', { description: 'Please try again later.' }),
      logErrorToProduction('PWA install error:', { data: err })
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button onClick={onClick} disabled={isInstalling}>
        {isInstalling && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Install App
      </Button>
    </div>
  )
};

export default PwaInstallButton;
<<<<<<< HEAD
'
=======

<<<<<<< HEAD
    const inStandalone = window.matchMedia('(display-mode: standalone)').matches,

<<<<<<< HEAD

        description: 'Your browser does not support app installation.'}),
      return;


>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
