declare global {
  interface Window {
    gtag: (
      command: string,
      target Id: string,
      config?: Record<string, unknown>
    ) => void,
  data Layer: unknown[]}

export {}
