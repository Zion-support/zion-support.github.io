// Seodata utilities and types

export interface SeodataConfig {
  enabled: boolean;
  options: Record<string, any>;
}

export const defaultSeodataConfig: SeodataConfig = {
  enabled: true,
  options: {}
};

export function initializeSeodata(config: SeodataConfig) {
  // Implementation here
  return config;
}