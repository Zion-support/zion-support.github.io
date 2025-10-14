declare global {
  interface Window {
    gtag: (
      command: &apos;config&apos; | &apos;event&apos; | &apos;js&apos; | &apos;set&apos;,
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