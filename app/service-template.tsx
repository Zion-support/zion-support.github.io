import { ArrowRight } from 'lucide-react';
const features = [
    {
      title: "Predictive Analytics",
      description: "Advanced machine learning models for accurate financial forecasting",
      icon: "Brain"
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and mitigation strategies",
      icon: "Shield"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of financial metrics and KPIs",
      icon: "Activity"
    },
    {
      title: "Automated Reporting",
      description: "Generate detailed reports automatically",
      icon: "FileText"
    }
  ];
interface ServiceTemplateProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceTemplate({ className = '', children, ...props }: ServiceTemplateProps) {
  return (
    <div className={`servicetemplate-component ${className}`} {...props}>
      {children}
    </div>
  );
}
