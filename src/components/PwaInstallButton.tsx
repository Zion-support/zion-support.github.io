
const in_standalone = window.match_media ('(display - mode: standalone)').matches,
        description: 'Your browser does not support app installation.'}),
      return;



  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button onClick={onClick} disabled={isInstalling}>
        {isInstalling && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Install App
      </Button>
    </div>
  )

},


