import React from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  "aria-label"?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  target,
  rel,
  onClick,
  "aria-label": ariaLabel,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }

    // Handle internal navigation
    if (href.startsWith("/") && !href.startsWith("//")) {
      e.preventDefault();
      window.location.href = href;
    }
  };

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
