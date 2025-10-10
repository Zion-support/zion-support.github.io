<<<<<<< HEAD

<<<<<<< HEAD
interface LinkProps {
<<<<<<< HEAD
  href: string,
    children: React.ReactNode
=======
interface LinkProps {}
  href: string
  children: React.ReactNode
>>>>>>> origin/merge-error-fixes
  className?: string
  target?: string
  rel?: string
  onClick?: () => void
  'aria-label'?: string;}
}
<<<<<<< HEAD
export const Link: React.FC<LinkProps>= ({
=======
export const Link: React.FC<LinkProps> = ({}
>>>>>>> origin/merge-error-fixes
  href,
=======
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  'aria-label'?: string;}
}
export const Link: React.FC<LinkProps> = ({,
  href;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  children,
  className,
  target,
  rel,
  onClick,
  'aria-label': ariaLabel,
  ...props}
}) => {}
  const handleClick = useCallback((...args) => {}
    if (onClick) {}
      onClick();}
    }
<<<<<<< HEAD
    // Handle internal navigation;
    if (href.startsWith('/') && !href.startsWith('//')) {
=======
    // Handle internal navigation
    if (href.startsWith('/') && !href.startsWith('//')) {}
>>>>>>> origin/merge-error-fixes
      e.preventDefault()
      window.location.href = href;}
    }
<<<<<<< HEAD
  }</LinkProps>
  return (<a
=======
  }
  return(<a;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
import React from 'react';
interface LinkProps {/* TODO: Fix JSX expression */}
}
export const,
  Link: React.FC<LinkProps> = ({/* TODO: Fix JSX expression */})
}) => {/* TODO: Fix JSX expression */}
    }
    // Handle internal navigation;
    if (href.startsWith('/') && !href.startsWith('//')) {/* TODO: Fix JSX expression */}
    }
  };
  return (<a></a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
<<<<<<< HEAD
      aria-label={ariaLabel}
      {...props}
<<<<<<< HEAD
    >{children}</a>
    </a>
=======
      aria-label={ariaLabel})
      {...props})
    >)
      {children})
    </a>)
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  )
}
export default Link;
=======
    >
      {children}
    </a>)
  );
};
export default Link;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
