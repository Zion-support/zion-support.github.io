// errorHandler - Placeholder file
export interface errorHandlerConfig {
  enabled: boolean;
  options?: Record<string, unknown>;
}

export const defaulterrorHandlerConfig: errorHandlerConfig = {
  enabled: true,
  options: {}
};
