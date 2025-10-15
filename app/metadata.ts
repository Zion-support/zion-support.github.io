// Metadata utilities and types

export interface MetadataConfig {
  enabled: boolean;
  options: Record<string, any>;
}

export const defaultMetadataConfig: MetadataConfig = {
  enabled: true,
  options: {}
};

export function initializeMetadata(config: MetadataConfig) {
  // Implementation here
  return config;
}