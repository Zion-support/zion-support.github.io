
interface LinkProps {
  href: string,
    children: React.ReactNode
interface LinkProps {}
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  onClick?: () => void
  'aria-label'?: string;}
}
export const Link: React.FC<LinkProps>= ({
export const Link: React.FC<LinkProps> = ({}
  href,
  href: string,
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  'aria-label'?: string;}
}
export const Link: React.FC<LinkProps> = ({,
  href;
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
    // Handle internal navigation;
    if (href.startsWith('/') && !href.startsWith('//')) {
    // Handle internal navigation
    if (href.startsWith('/') && !href.startsWith('//')) {}
      e.preventDefault()
      window.location.href = href;}
    }
  }</LinkProps>
  return (
    <>
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><a
  }
  return(<a;
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
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
      aria-label={ariaLabel}
      {...props}
    >{children}</a>
    </a>
      aria-label={ariaLabel})
      {...props})
    >)
      {children})
    </a>)
  )
}
</div>
  );
};

</>
  );
};

export default Link;
    >
      {children}
    </a>)
  );
};
export default Link;
