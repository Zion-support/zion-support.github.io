import React from 'react';

interface ResponsiveContainerProps {
interface ResponsivecontainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ResponsiveContainer({ className = '', children }: ResponsiveContainerProps) {
export default function Responsivecontainer({ className = '', children, ...props }: ResponsivecontainerProps) {
  [key: string]: any;

export default function ResponsiveContainer({ children, className = '', ...props }: ResponsiveContainerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
export default function ResponsiveContainer({ className = '', children, ...props }: ResponsiveContainerProps) {
        <div className="component" {...props}>
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = ''
}) => {


  children?: React.ReactNode;


    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>

};

export default ResponsiveContainer;
  return (;
    <div className={`responsivecontainer-component ${className}`} {...props}></div>;
;
</div>;

export default $1;
