<<<<<<< HEAD
/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R
      toHaveClass(className: string): R
      toHaveTextContent(text: string | RegExp): R
      toHaveAttribute(attr: string, value?: string): R
    }
  }
}

export {}
=======
/// <reference types="jest""
/// <reference types="@testing-library/jest-dom""
>>>>>>> origin/main
