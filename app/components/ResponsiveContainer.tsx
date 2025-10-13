import React from 'react';

interface ResponsiveContainerProps {
interface ResponsivecontainerProps {
interface ResponsiveContainerProps {
interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ResponsiveContainer({ className = '', children }: ResponsiveContainerProps) {
export default function Responsivecontainer({ className = '', children, ...props }: ResponsivecontainerProps) {
interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function ResponsiveContainer({ children, className = '', ...props }: ResponsiveContainerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
export default function ResponsiveContainer({ className = '', children, ...props }: ResponsiveContainerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
}
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = ''
}) => {

import React from 'react';

interface ResponsivecontainerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Responsivecontainer({ className = '', children, ...props }: ResponsivecontainerProps) {

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}

    </div>
  );
};

export default ResponsiveContainer;
  );
}
  return (;
    <div className={`responsivecontainer-component ${className}`} {...props}></div>;
      {children}
;
</div>;
);

}
export default $1;
