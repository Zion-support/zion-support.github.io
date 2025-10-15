// Useseo utilities and types

export interface UseseoConfig {
  enabled: boolean;
  options: Record<string, any>;
}

export const defaultUseseoConfig: UseseoConfig = {
  enabled: true,
  options: {}
};

export function initializeUseseo(config: UseseoConfig) {
  // Implementation here
  return config;
}