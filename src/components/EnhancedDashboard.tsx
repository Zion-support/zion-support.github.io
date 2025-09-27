import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Activity, TrendingUp, Users, Zap } from 'lucide-react';

interface DashboardWidget {
  id: string;
  title: string;
  size: 'small' | 'medium' | 'large';
  type: 'metric' | 'chart' | 'list';
  data: any;
}

interface EnhancedDashboardProps {
  widgets: DashboardWidget[];
  className?: string;
}

export const EnhancedDashboard: React.FC<EnhancedDashboardProps> = ({
  widgets,
  className = ''
}) => {
  const [selectedWidget, setSelectedWidget] = React.useState<string | null>(null);

  const renderWidget = (widget: DashboardWidget) => {
    const sizeClasses = {
      small: 'col-span-1 row-span-1',
      medium: 'col-span-2 row-span-1',
      large: 'col-span-3 row-span-2'
    };

    return (
      <div
        key={widget.id}
        className={`bg-white rounded-lg shadow-lg p-6 ${sizeClasses[widget.size]} ${
          selectedWidget === widget.id ? 'ring-2 ring-blue-500' : ''
        }`}
        role="button" tabIndex="0" onClick={() => setSelectedWidget(widget.id)}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900" id="widgettitle">{widget.title}</h3>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-2">{widget.data.value || 'N/A'}</div>
          <div className="text-sm text-gray-600">{widget.data.label || 'No data'}</div>
        </div>
      </div>
    );
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-blue-600" />
            <span>Enhanced Dashboard</span>
          </CardTitle>
          <CardDescription>
            Customizable dashboard with interactive widgets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {widgets.map(renderWidget)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedDashboard;