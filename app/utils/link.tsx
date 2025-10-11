

interface LinkProps {href: string,}
    children: React.ReactNode;,}interface LinkProps {}}href: string;,
  href: string;

  children: React.ReactNode;,
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  'aria-label'?: string,}
}
export const Link: React.FC<LinkProps>= ({,}export const Link: React.FC<LinkProps> = ({,}href,
  href: string,
  children: React.ReactNode;,
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  'aria-label'?: string,}
}
export const Link: React.FC<LinkProps> = ({,
  'aria-label': ariaLabel,}...props}
}) => {}const handleClick = useCallback((...args) => {}if (onClick) {}onClick();}
    }
    // Handle internal navigation;
    if (href.startsWith('/') && !href.startsWith('//')) {// Handle internal navigation;}if (href.startsWith('/') && !href.startsWith('//')) {}e.preventDefault();
      window.location.href = href;}
    }
  }</LinkProps>
  return(<a;)}
  return(<a;)
import React from 'react';
interface LinkProps {/* TODO: Fix JSX expression */,}}}
export const,
  Link: React.FC<LinkProps> = ({/* TODO: Fix JSX expression */,})
}) => {/* TODO: Fix JSX expression */,}}
    // Handle internal navigation;
    if (href.startsWith('/') && !href.startsWith('//')) {/* TODO: Fix JSX expression */,}}
  }
  return(<a />)
      href={href}className={className}target={target}rel={rel}onClick={handleClick}aria-label={ariaLabel}{...props}
      aria-label={ariaLabel},
    {...props}
    </a>);
  );
};

export default Link;
    >;
      {children} </a>);
  );
};

export default Link;
