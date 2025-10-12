import React from 'react';

interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  children,
  className = '',
  title,
  description
}) => {
  return (
    <div className={`enhanced-component ${className}`}>
      {title &amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp; <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {description &amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp; <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  );
};

export default Sidebar;
