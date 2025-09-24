import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

type CompatLinkProps = NextLinkProps &
  AnchorProps & {
    children?: React.ReactNode;
  };

// A compatibility wrapper that ensures a single anchor child is provided to Next.js Link
// and gracefully supports multiple children by wrapping them inside the anchor.
export default function Link({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  ...anchorProps
}: CompatLinkProps) {
  const linkProps: NextLinkProps & { legacyBehavior: true } = {
    href,
    legacyBehavior: true,
  } as any;

  if (as !== undefined) (linkProps as any).as = as;
  if (replace !== undefined) (linkProps as any).replace = replace;
  if (scroll !== undefined) (linkProps as any).scroll = scroll;
  if (shallow !== undefined) (linkProps as any).shallow = shallow;
  if (prefetch !== undefined) (linkProps as any).prefetch = prefetch as any;
  if (locale !== undefined) (linkProps as any).locale = locale as any;

  return (
    <NextLink {...linkProps}>
      <a {...anchorProps}>{children}</a>
    </NextLink>
  );
}
