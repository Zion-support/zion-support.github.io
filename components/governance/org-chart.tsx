import React from 'react';
import dynamic from 'next/dynamic';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const OrgChartPage = dynamic(
  () => import('../../components/org/OrgChartPage'),
  { ssr: false }
);

export default function OrgChartGovernancePage() {
<<<<<<< HEAD
  return <OrgChartPage />;
=======
  return <OrgChartPage />;
=======
const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false }),
export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false }),
export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
