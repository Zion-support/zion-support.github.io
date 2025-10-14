declare global {
  interface Window {
    gtag: (
<<<<<<< HEAD
      command: 'config' | 'event' | 'js' | 'set';,
=======
      command: 'config' | 'event' | 'js' | 'set',
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
      config?: any
      config?: Record<string, unknown>
    ) => void
  }
}

export {}