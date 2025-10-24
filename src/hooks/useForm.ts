// UseForm utilities
export interface UseFormConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultUseFormConfig: UseFormConfig = {
  enabled: true,
  options: {}
};
