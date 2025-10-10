interface LinkProps {
  href: string,
    children: React.ReactNode
interface LinkProps {}
  href: string,
    children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  onClick?: () => void
  'aria-label'?: string}
}
export const Link: React.FC<LinkProps>= ({
export const Link: React.FC<LinkProps> = ({}
  href,
  href: string,
<<<<<<< HEAD
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  'aria-label'?: string;}
}
export const Link: React.FC<LinkProps>= ({}
export const Link: React.FC<LinkProps> = ({}
  href,
  href: string,
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  onClick?: () => void
  'aria-label'?: string}
}
export const Link: React.FC<LinkProps> = ({,
  href
  children,
  className,
  target,
  rel,
  onClick,
  'aria-label': ariaLabel,}
  ...props}
}) => {}
  const handleClick;

export default Link
    >
      {children}
    </a>);
  );
};
export default Link;
  </LinkProps>
  </LinkProps>
  </LinkProps>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b853
