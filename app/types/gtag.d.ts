declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set'