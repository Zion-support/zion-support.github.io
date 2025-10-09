'use client';
interface BeforeInstallPromptEvent extends Event {
  // TODO: Add content
}
  prompt(): Promise
          
          
          
          
          
          
          
          
          <void>;
  userChoice: Promise<{ outcom, 'accepted' | 'dismissed' }>;
}

const PWAInstaller: React.FC<PWAInstallerProps> = () => {
  return (
    <div className="pwainstaller">
      {/* Component content */}
    </div>
  );
};

export default PWAInstaller;