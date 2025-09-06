import React from 'react';
import dynamic from 'next/dynamic';

const OrgChartPage = dynamic(
  () => import('../../components/org/OrgChartPage'),
  { ssr: false }
);

export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
=======
const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false }),
export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
