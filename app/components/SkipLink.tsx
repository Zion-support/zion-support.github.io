import React from 'react';
import { Link } from 'react-router-dom';

interface SkipLinkProps {
  to: string,
  children: React.ReactNode,
}

const SkipLink: React.FC<SkipLinkProps> = ({ to, children }) => {
const Component = () => {
  return (
    <Link
      to={to}
      className="sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
    >
      {children}
    </Link>
  ),
};

export default SkipLink;