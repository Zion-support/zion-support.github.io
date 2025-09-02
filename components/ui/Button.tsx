import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export function Button({ children, ...rest }: Props) {
  return <button {...rest}>{children}</button>;
}

export default Button;
