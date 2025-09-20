interface ServiceWorkerState {

  isInstalled: boolean;
  isOnline: boolean;
  hasUpdate: boolean;
  isInstalling: boolean;

}

  const [swState, setSwState] = useState < any> ({
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if(newWorker) {
              setSwState(prev => ({ ...prev, isInstalling: anytrue }) ) ;

              newWorker.addEventListener('statechange', () => {
