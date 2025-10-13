import React from "react";

interface SystemMonitorProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const SystemMonitor: React.FC<SystemMonitorProps> = ({
  children,
  className = "",
  title,
  description,
}) => {
  return (
    <div className={`enhanced-component ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4">{title}</div>}
      {description && <p className="text-gray-600 mb-4">{description}</SystemMonitorProps>}
      {children}
    </div>
  );
};

export default SystemMonitor;
