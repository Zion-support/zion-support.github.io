// AnalyticsContextDefinition - Placeholder file
export interface AnalyticsContextDefinitionConfig {
  enabled: boolean;
  options?: Record<string, unknown>;
}

export const defaultAnalyticsContextDefinitionConfig: AnalyticsContextDefinitionConfig = {
  enabled: true,
  options: {}
};
