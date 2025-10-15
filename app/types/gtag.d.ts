declare global { interface Window {
    gtag: (,
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, unknown></string></string>
    ) => void;}
    dataLayer: unknown[]; }
}
export {};