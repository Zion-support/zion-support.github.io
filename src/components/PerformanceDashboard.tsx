import React from 'react';

interface PerformanceDashboardProps {
<<<<<<< HEAD
className?: string
}
}
const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ className = '' ,}) => {
return (</PerformanceDashboardProps>,
    <div className={className} /></div>h2>PerformanceDashboard</h2>p>This component is under construction.</p>/div>
  )
}
=======
  className?: string;
  children?: React.ReactNode;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
export default PerformanceDashboard;
