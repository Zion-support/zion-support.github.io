import dynamic from 'next/dynamic';
;
const KpiDashboard = dynamic(: unknown import('../../components/dashboard/KpiDashboard'), {
  ssr: false
});
;
export { function };
export default function MetricsDashboardPage(...args: unknown[]): unknown {
  return
;
export default function MetricsPage(...args: unknown[]): unknown {
  return (
    <KpiDashboard admin={false} />;
}
  );
}