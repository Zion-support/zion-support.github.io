<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';

type Href = string | { pathname?: string; href?: string };

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: Href;
  children: React.ReactNode;
};

function resolveHref(href: Href): string {
  if (typeof href === 'string') return href;
  return href?.pathname || (href as any)?.href || '#';
}

export default function Link({ href, children, className, ...rest }: LinkProps) {
  const resolved = resolveHref(href);
  
  if (React.isValidElement(children)) {
    const existingClass = (children.props as any)?.className || '';
    const mergedClassName = [existingClass, className].filter(Boolean).join(' ');
    
    return React.cloneElement(children as any, {
      href: resolved,
      className: mergedClassName,
      ...rest,
    });
  }
  
=======
<<<<<<< HEAD
=======
import React from 'react';
type Href = string | { pathname?: string; href?: string };
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  "href": Href;
  children: React.ReactNode;
};
function resolveHref("href": Href): string {
  if (typeof href === 'string') return href;
  return href?.pathname || (href as { href?: string })?.href || '#';
}
export default function Link({ href, children, className, ...rest }: LinkProps) {
  const resolved = resolveHref(href);
  if (React.isValidElement(children)) {
    const existingClass = (children.props as { className?: string })?.className || '';
    const mergedClassName = [existingClass, className].filter(Boolean).join(' ');
    return React.cloneElement(children as React.ReactElement, {
      "href": resolved,
      "className": mergedClassName,
      ...rest});
  }
>>>>>>> main
  return (
    <a href={resolved} className={className} {...rest}>
      {children}
    </a>
  );
<<<<<<< HEAD
}
=======
}
import React from 'react'; type Href = string | { pathname?: string; href?: string }; type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: Href; children: React.ReactNode}; function resolveHref(href: Href): string { if (typeof href === 'string') return href; return href?.pathname || (href as { href?: string })?.href || '#'} export default function Link({ href,children,className,...rest }: LinkProps) { const resolved = resolveHref(href); if (React.isValidElement(children)) { const existingClass = (children.props as { className?: string })?.className || ''; const mergedClassName = [existingClass,className].filter(Boolean).join(' '); return React.cloneElement(children as React.ReactElement,{ href: resolved,className: mergedClassName,...rest,})} return ( <a href={resolved} className={className} {...rest}> {children} </a> )}
>>>>>>> main
>>>>>>> main
>>>>>>> main
