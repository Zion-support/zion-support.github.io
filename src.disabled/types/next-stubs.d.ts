// next-stubs.d.ts - TypeScript definitions for Next.js stubs

declare module 'next/link' {
  import { ComponentType } from 'react';
  interface LinkProps {
    href: string;
    children: React.ReactNode;
  }
  const Link: ComponentType<LinkProps>;
  export default Link;
}

declare module 'next/dynamic' {
  import { ComponentType } from 'react';
  function dynamic<T = {}>(
    dynamicImport: () => Promise<{ default: ComponentType<T> }>,
    options?: { ssr?: boolean }
  ): ComponentType<T>;
  export default dynamic;
}
