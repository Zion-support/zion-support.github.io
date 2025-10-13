import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { ReactNode } from 'react';

interface LinkProps extends Omit<RouterLinkProps, 'to'> {
  href: string;
  children: ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, className, ...props }) => {
  // Check if it's an external link
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  
  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <RouterLink
      to={href}
      className={className}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default Link;