
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
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
<<<<<<< HEAD
      aria-label={ariaLabel}
      {...props}
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