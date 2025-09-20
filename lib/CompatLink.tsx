import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type CompatLinkProps = NextLinkProps & AnchorProps & {,
  children?: React.ReactNode;
};
// A compatibility wrapper that ensures a single anchor child is provided to Next.js Link,
// and gracefully supports multiple children by wrapping them inside the anchor.,
export default function Link({ children, href, as, replace, scroll, shallow, prefetch, locale, ...anchorProps }: CompatLinkProps) {,
  return (,
    <NextLink,
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={true}
      prefetch={prefetch}
      locale={locale}
      legacyBehavior,
    >,
      <a {...anchorProps}>{children}</a>,
    </NextLink>,
  );
}
,