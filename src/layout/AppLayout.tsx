import React, { PropsWithChildren } from 'react';

export function AppLayout({ children }: PropsWithChildren<{}>): JSX.Element {
  return <>{children}</>;
}
