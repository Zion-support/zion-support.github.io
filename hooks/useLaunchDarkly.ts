import { useState, useEffect, useCallback } from 'react';
import { 
  getFeatureFlag, 
  getFeatureFlagString, 
  getFeatureFlagNumber, 
  trackEvent, 
  identifyUser,
  getLaunchDarklyClient 
} from '../utils/launchdarkly';

// Hook for boolean feature flags
export const useFeatureFlag = (flagKey: string, defaultValue: boolean = false) => {
  const [value, setValue] = useState<boolean>(defaultValue);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        setLoading(true);
        setError(null);
        const flagValue = await getFeatureFlag(flagKey, defaultValue);
        setValue(flagValue);
      } catch (err) {
        setError(err as Error);
        setValue(defaultValue);
      } finally {
        setLoading(false);
      }
    };

    fetchFlag();
  }, [flagKey, defaultValue]);

  return { value, loading, error };
};

// Hook for string feature flags
export const useFeatureFlagString = (flagKey: string, defaultValue: string = '') => {
  const [value, setValue] = useState<string>(defaultValue);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        setLoading(true);
        setError(null);
        const flagValue = await getFeatureFlagString(flagKey, defaultValue);
        setValue(flagValue);
      } catch (err) {
        setError(err as Error);
        setValue(defaultValue);
      } finally {
        setLoading(false);
      }
    };

    fetchFlag();
  }, [flagKey, defaultValue]);

  return { value, loading, error };
};

// Hook for number feature flags
export const useFeatureFlagNumber = (flagKey: string, defaultValue: number = 0) => {
  const [value, setValue] = useState<number>(defaultValue);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        setLoading(true);
        setError(null);
        const flagValue = await getFeatureFlagNumber(flagKey, defaultValue);
        setValue(flagValue);
      } catch (err) {
        setError(err as Error);
        setValue(defaultValue);
      } finally {
        setLoading(false);
      }
    };

    fetchFlag();
  }, [flagKey, defaultValue]);

  return { value, loading, error };
};

// Hook for tracking events
export const useTracking = () => {
  const track = useCallback(async (eventName: string, data?: Record<string, unknown>) => {
    try {
      await trackEvent(eventName, data);
    } catch (error) {
      console.error(`Failed to track event ${eventName}:`, error);
    }
  }, []);

  return { track };
};

// Hook for user identification
export const useUserIdentification = () => {
  const identify = useCallback(async (userKey: string, userAttributes?: Record<string, unknown>) => {
    try {
      await identifyUser(userKey, userAttributes);
    } catch (error) {
      console.error('Failed to identify user:', error);
    }
  }, []);

  return { identify };
};

// Hook for LaunchDarkly client status
export const useLaunchDarklyStatus = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [client, setClient] = useState<LDClient.LDClient | null>(null);

  useEffect(() => {
    const checkStatus = () => {
      const ldClient = getLaunchDarklyClient();
      if (ldClient) {
        setClient(ldClient);
        setIsReady(ldClient.initialized || false);
      }
    };

    // Check immediately
    checkStatus();

    // Check periodically
    const interval = setInterval(checkStatus, 1000);

    return () => clearInterval(interval);
  }, []);

  return { isReady, client };
};

// Hook for multiple feature flags
export const useFeatureFlags = (flags: Record<string, { key: string; defaultValue: unknown; type: 'boolean' | 'string' | 'number' }>) => {
  const [values, setValues] = useState<Record<string, unknown>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const flagPromises = Object.entries(flags).map(async ([name, config]) => {
          let value;
          switch (config.type) {
            case 'boolean':
              value = await getFeatureFlag(config.key, config.defaultValue);
              break;
            case 'string':
              value = await getFeatureFlagString(config.key, config.defaultValue);
              break;
            case 'number':
              value = await getFeatureFlagNumber(config.key, config.defaultValue);
              break;
            default:
              value = config.defaultValue;
          }
          return [name, value];
        });

        const results = await Promise.all(flagPromises);
        const flagValues = Object.fromEntries(results);
        setValues(flagValues);
      } catch (err) {
        setError(err as Error);
        // Set default values on error
        const defaultValues = Object.fromEntries(
          Object.entries(flags).map(([name, config]) => [name, config.defaultValue])
        );
        setValues(defaultValues);
      } finally {
        setLoading(false);
      }
    };

    fetchFlags();
  }, [flags]);

  return { values, loading, error };
};