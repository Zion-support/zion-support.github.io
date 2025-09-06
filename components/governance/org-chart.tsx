import React from 'react';
import dynamic from 'next/dynamic';
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const OrgChartPage = dynamic(
  () => import('../../components/org/OrgChartPage')
  { ssr: false }
);
<<<<<<< HEAD
export default function OrgChartGovernancePage() {
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false })
export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
}
=======
}

export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
