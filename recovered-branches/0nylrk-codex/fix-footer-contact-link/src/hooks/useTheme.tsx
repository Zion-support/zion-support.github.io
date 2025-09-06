
import React from 'react';
// This is a simplified version of the theme hook for offline development
<<<<<<< HEAD
export const useTheme = null;
=======
export const useTheme = () => {
  return {
    theme: "dark"
    setTheme: (theme: string) => console.log(`Theme would change to: ${theme}`)
  }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
