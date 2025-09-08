import React, { PropsWithChildren } from 'react';

export function ThemeProvider({ children }: PropsWithChildren): JSX.Element {
  return <>{children}</>;
}
