// Safe storage wrapper with fallback
const inMemoryStore: Record<string, string> = {};
let localStorageAvailable: boolean | null = null;
let lastAvailabilityCheck = 0;
const AVAILABILITY_CHECK_INTERVAL = 5000;

function isLocalStorageAvailable(): boolean {
  const now = Date.now();
  if (localStorageAvailable !== null && (now - lastAvailabilityCheck) < AVAILABILITY_CHECK_INTERVAL) {
    return localStorageAvailable;
  }
  
  try {
    const testKey = '__localStorage_test__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    localStorageAvailable = true;
  } catch (error) {
    localStorageAvailable = false;
  }
  
  lastAvailabilityCheck = now;
  return localStorageAvailable;
}

export const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      if (isLocalStorageAvailable()) {
        return localStorage.getItem(key);
      }
      return inMemoryStore[key] || null;
    } catch (error) {
      return inMemoryStore[key] || null;
    }
  },

  setItem: (key: string, value: string): void => {
    try {
      if (isLocalStorageAvailable()) {
        localStorage.setItem(key, value);
      } else {
        inMemoryStore[key] = value;
      }
    } catch (error) {
      inMemoryStore[key] = value;
    }
  },

  removeItem: (key: string): void => {
    try {
      if (isLocalStorageAvailable()) {
        localStorage.removeItem(key);
      } else {
        delete inMemoryStore[key];
      }
    } catch (error) {
      delete inMemoryStore[key];
    }
  },

  clear: (): void => {
    try {
      if (isLocalStorageAvailable()) {
        localStorage.clear();
      } else {
        Object.keys(inMemoryStore).forEach(key => delete inMemoryStore[key]);
      }
    } catch (error) {
      Object.keys(inMemoryStore).forEach(key => delete inMemoryStore[key]);
    }
  },

  key: (index: number): string | null => {
    try {
      if (isLocalStorageAvailable()) {
        return localStorage.key(index);
      }
      return Object.keys(inMemoryStore)[index] || null;
    } catch (error) {
      return Object.keys(inMemoryStore)[index] || null;
    }
  },

  get length(): number {
    try {
      if (isLocalStorageAvailable()) {
        return localStorage.length;
      }
      return Object.keys(inMemoryStore).length;
    } catch (error) {
      return Object.keys(inMemoryStore).length;
    }
  }
};

export default safeStorage;