declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, unknown>
    ) => void
    dataLayer: unknown[]
      config?: any
      config?: Record<string, unknown>
    ) => void
  }
}

export {}