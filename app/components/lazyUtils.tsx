

// Higher-order component for lazy loading;
// eslint-disable-next-line @typescript-eslint/no-explicit-any;
export function withLazyLoading<T extends ComponentType<any>>(
  Component: T, fallback?: React.ReactNode;
) {

  return (props: ComponentProps<T>) => (
    <Suspense fallback ={fallback || <div>Loading...</div>}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}

      <LazyComponent {...(props as any)} />
    </Suspense>
  );
};
// Utility function to create lazy-loaded components;
// eslint-disable-next-line @;
export function createLazyComponent<T extends ComponentType<any>>();
  importFunction: () => Promise<{};
    default: T ,};
  }>,
  fallback?: React.ReactNode;
      <LazyComponent {...(props as any)} /></LazyComponent>
    </Suspense>
  );,
},
// Utility function to create lazy-loaded components,
// eslint-disable-next-line @,
export function createLazyComponent<T extends ComponentType<any>>()
  importFunction: () => Promise<{ default: T }>
  fallback?: React.ReactNode,

  return (props: ComponentProps<T>) => ()
,
    <Suspense fallback ={fallback || <div>Loading...</div>}>,
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */},

