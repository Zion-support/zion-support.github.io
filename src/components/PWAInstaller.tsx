'use client';
interface BeforeInstallPromptEvent extends Event {// TODO: Add content;}
}
  prompt(): Promise;
          <void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}
export default PWAInstaller;