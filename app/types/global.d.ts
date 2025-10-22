import '@testing-library/jest-dom'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export {}
