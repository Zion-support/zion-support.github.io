// Seoconstants utilities and types

export interface SeoconstantsConfig {
  enabled: boolean;
  options: Record<string, any>;
}

export const defaultSeoconstantsConfig: SeoconstantsConfig = {
  enabled: true,
  options: {}
};

export function initializeSeoconstants(config: SeoconstantsConfig) {
  // Implementation here
  return config;
}