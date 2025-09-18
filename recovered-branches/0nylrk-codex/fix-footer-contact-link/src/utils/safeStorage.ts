<<<<<<< HEAD
/**
 * Safe storage utility for handling localStorage and sessionStorage
 * with error handling and fallbacks
 */
export const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window === 'undefined') return null;
      return localStorage.getItem(key);
    } catch (error) {
      console.warn('Failed to get item from localStorage:', error);
      return null;
    }
  },
  setItem: (key: string, value: string): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn('Failed to set item in localStorage:', error);
      return false;
    }
  },
  removeItem: (key: string): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('Failed to remove item from localStorage:', error);
      return false;
    }
  },
  getSessionItem: (key: string): string | null => {
    try {
      if (typeof window === 'undefined') return null;
      return sessionStorage.getItem(key);
    } catch (error) {
      console.warn('Failed to get item from sessionStorage:', error);
      return null;
    }
  },
  setSessionItem: (key: string, value: string): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      sessionStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn('Failed to set item in sessionStorage:', error);
      return false;
    }
  },
  removeSessionItem: (key: string): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      sessionStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('Failed to remove item from sessionStorage:', error);
      return false;
    }
  },
  clear: (): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      localStorage.clear();
      return true;
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
      return false;
    }
  },
  clearSession: (): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      sessionStorage.clear();
      return true;
    } catch (error) {
      console.warn('Failed to clear sessionStorage:', error);
      return false;
    }
  },
};

export default safeStorage;
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/backup-main-20250918-004015
// Safe storage utilities for browser compatibility
export const safeStorage = {
  getItem: (key: string): string | null => {
    try {
<<<<<<< HEAD
=======
      return localStorage.getItem(key);
>>>>>>> origin/backup-main-20250918-004015
    } catch (error) {
      console.warn('localStorage not available:', error);
      return null;
    }
  },
<<<<<<< HEAD
=======
  
  setItem: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
>>>>>>> origin/backup-main-20250918-004015
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  },
<<<<<<< HEAD
=======
  
  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
>>>>>>> origin/backup-main-20250918-004015
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  },
<<<<<<< HEAD
    } catch (error) {
      console.warn('localStorage not available:', error);
=======
  
  clear: (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.warn('localStorage not available:', error);
=======
=======
// Safe storage utility for handling localStorage and sessionStorage
// with error handling and fallbacks

export const safeStorage = {
  // Safe localStorage operations
  localStorage: {
    getItem: (key: string): string | null => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          return window.localStorage.getItem(key);
        }
        return null;
      } catch (error) {
        console.warn('localStorage.getItem failed:', error);
        return null;
      }
    },

    setItem: (key: string, value: string): boolean => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.setItem(key, value);
          return true;
        }
        return false;
      } catch (error) {
        console.warn('localStorage.setItem failed:', error);
        return false;
      }
    },

    removeItem: (key: string): boolean => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.removeItem(key);
          return true;
        }
        return false;
      } catch (error) {
        console.warn('localStorage.removeItem failed:', error);
        return false;
      }
    },

    clear: (): boolean => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.clear();
          return true;
        }
        return false;
      } catch (error) {
        console.warn('localStorage.clear failed:', error);
        return false;
      }
    }
  },

  // Safe sessionStorage operations
  sessionStorage: {
    getItem: (key: string): string | null => {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          return window.sessionStorage.getItem(key);
        }
        return null;
      } catch (error) {
        console.warn('sessionStorage.getItem failed:', error);
        return null;
      }
    },

    setItem: (key: string, value: string): boolean => {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          window.sessionStorage.setItem(key, value);
          return true;
        }
        return false;
      } catch (error) {
        console.warn('sessionStorage.setItem failed:', error);
        return false;
      }
    },

    removeItem: (key: string): boolean => {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          window.sessionStorage.removeItem(key);
          return true;
        }
        return false;
      } catch (error) {
        console.warn('sessionStorage.removeItem failed:', error);
        return false;
      }
    },

    clear: (): boolean => {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          window.sessionStorage.clear();
          return true;
        }
        return false;
      } catch (error) {
        console.warn('sessionStorage.clear failed:', error);
        return false;
      }
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-7720
>>>>>>> origin/backup-main-20250918-004015
/**
 * Safe storage utility for handling localStorage and sessionStorage
 * with error handling and fallbacks
 */
<<<<<<< HEAD
=======

>>>>>>> origin/backup-main-20250918-004015
export const safeStorage = {
  /**
   * Safely get item from localStorage
   */
  getItem: (key: string): string | null => {
    try {
      if (typeof window === 'undefined') return null;
      return localStorage.getItem(key);
    } catch (error) {
      console.warn('Failed to get item from localStorage:', error);
      return null;
    }
  },
<<<<<<< HEAD
=======

>>>>>>> origin/backup-main-20250918-004015
  /**
   * Safely set item in localStorage
   */
  setItem: (key: string, value: string): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn('Failed to set item in localStorage:', error);
      return false;
    }
  },
<<<<<<< HEAD
=======

>>>>>>> origin/backup-main-20250918-004015
  /**
   * Safely remove item from localStorage
   */
  removeItem: (key: string): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('Failed to remove item from localStorage:', error);
      return false;
    }
  },
<<<<<<< HEAD
=======

>>>>>>> origin/backup-main-20250918-004015
  /**
   * Safely get item from sessionStorage
   */
  getSessionItem: (key: string): string | null => {
    try {
      if (typeof window === 'undefined') return null;
      return sessionStorage.getItem(key);
    } catch (error) {
      console.warn('Failed to get item from sessionStorage:', error);
      return null;
    }
  },
<<<<<<< HEAD
=======

>>>>>>> origin/backup-main-20250918-004015
  /**
   * Safely set item in sessionStorage
   */
  setSessionItem: (key: string, value: string): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      sessionStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn('Failed to set item in sessionStorage:', error);
      return false;
    }
  },
<<<<<<< HEAD
=======

>>>>>>> origin/backup-main-20250918-004015
  /**
   * Safely remove item from sessionStorage
   */
  removeSessionItem: (key: string): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      sessionStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('Failed to remove item from sessionStorage:', error);
      return false;
    }
  },
<<<<<<< HEAD
=======

>>>>>>> origin/backup-main-20250918-004015
  /**
   * Clear all localStorage
   */
  clear: (): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      localStorage.clear();
      return true;
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
      return false;
    }
  },
<<<<<<< HEAD
=======

>>>>>>> origin/backup-main-20250918-004015
  /**
   * Clear all sessionStorage
   */
  clearSession: (): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      sessionStorage.clear();
      return true;
    } catch (error) {
      console.warn('Failed to clear sessionStorage:', error);
      return false;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-634d
=======
=======
>>>>>>> origin/backup-main-20250918-004015
// Safe storage utilities for browser compatibility
export const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn('localStorage not available:', error);
      return null;
    }
  },
<<<<<<< HEAD
=======
  
>>>>>>> origin/backup-main-20250918-004015
  setItem: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  },
<<<<<<< HEAD
=======
  
>>>>>>> origin/backup-main-20250918-004015
  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  },
<<<<<<< HEAD
=======
  
>>>>>>> origin/backup-main-20250918-004015
  clear: (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.warn('localStorage not available:', error);
<<<<<<< HEAD
    }
  };
};

export default safeStorage;
    try {
    } catch (error) {
      console.warn('localStorage not available:', error);
=======
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-7720
    }
  }
};

export default safeStorage;
>>>>>>> origin/backup-main-20250918-004015
