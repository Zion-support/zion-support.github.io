
// Lazy loading helper function;
export const createLazyComponent = <T extends Record<string, unknown>>(;
  importFunc: () => Promise<{ default: ComponentType<T> }>;


