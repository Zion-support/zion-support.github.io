declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: any
      config?: Record<string, unknown>
    ) => void
  }
}

export {}