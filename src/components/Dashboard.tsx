import React from 'react';
import ProgressBar from './ProgressBar';
import ScrollToTop from './ScrollToTop';
import './Dashboard.css';

interface DashboardProps {
  children: React.ReactNode;
  className?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ children, className = '' }) => {
  return (
    <div className={`dashboard ${className}`}>
      <ProgressBar />
      <div className="dashboard__content">
        {children}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Dashboard;