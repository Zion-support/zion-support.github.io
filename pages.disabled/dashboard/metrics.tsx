import dynamic from 'next/dynamic';
;
const KpiDashboard = dynamic(() => import('../../components/dashboard/KpiDashboard'), {;
  ssr: false,;
});
;
export default function MetricsDashboardPage(...args: any[]): any {;
  return;
;
export default function MetricsPage(...args: any[]): any {;
  return (;
    <KpiDashboard admin={false}       />;
};
  );
}