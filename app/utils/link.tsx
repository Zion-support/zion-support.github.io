interface LinkProps {
    href: string,
    children: React.ReactNode
  }
interface LinkProps {}
  href: string;

  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string
  onClick?: () => void
  'aria-label'?: string,}
}
<<<<<<< HEAD
export const Link: React.FC<LinkProps>= ({}
export const Link: React.FC</LinkProps><LinkProps> = ({}
  href,
  href: string,
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string
  onClick?: () => void
  'aria-label'?: string,}
}
export const Link: React.FC</LinkProps><LinkProps> = ({
    ,
  href;
  children,
  className,
  target,
  rel,
  onClick,
  'aria-label': ariaLabel,
  }
  ...props}
=======
export const Link: React.FC<LinkProps>= ()
  onClick?: () => void
  'aria-label'?: string,}
}
export const Link: React.FC<LinkProps> = ()
>>>>>>> main
}) => {}
  const handleClick = useCallback((...args) => {};
    if (onClick) {};
      onClick();}
    }
    // Handle internal navigation;
    if (href.startsWith('/') && !href.startsWith('//')) {
    // Handle internal navigation
  }
    if (href.startsWith('/') && !href.startsWith('//')) {}
      e.preventDefault();
      window.location.href = href;}
    }
  }</LinkProps>
  return ()
  Link: React.FC<LinkProps> = ({/* TODO: Fix JSX expression */})
}) => {/* TODO: Fix JSX expression */}
    }
    // Handle internal navigation;
    if (href.startsWith('/') && !href.startsWith('//')) {/* TODO: Fix JSX expression */}
    }
  }
<<<<<<< HEAD
  return (</a><a />
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
      aria-label={ariaLabel}
      {...props}
    >{children}</a>
    </a>
=======
  return ()
>>>>>>> main
      aria-label={ariaLabel})
      {...props})
    >);
      {children})
    </a>);
};

export default Link;
    >;
      {children}
    </a>);
};

export default Link;
