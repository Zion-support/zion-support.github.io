import dynamic from 'next/dynamic';
;
const KpiDashboard = dynamic(: unknown import('../../components/dashboard/KpiDashboard'), {
  ssr: false
});
;
export { function };
export default function AdminKpiPage(...args: unknown[]): unknown {
  return (
    <KpiDashboard admin />
  );
}