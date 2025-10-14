import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface AnalyticsProps {
  children?: React.ReactNode;
},
const Analytics: React.FC<AnalyticsProps> = ({ children }) => {
  return <>{children}</>;
};

export default Analytics
