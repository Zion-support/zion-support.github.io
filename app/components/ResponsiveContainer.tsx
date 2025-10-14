import React from 'react;
interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string}
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ children, className =; }) => {;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      </div>`
  children: React.ReactNode;
  className?: string,}
};';
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ children, className =; }) => {';
  return (}
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
export default ResponsiveContainer;
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}
    </div>
)}
export default ResponsiveContainer
}
export default ResponsiveContainer;
