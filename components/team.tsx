import React from 'react';
import dynamic from 'next/dynamic';
<<<<<<< HEAD

const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), {
  ssr: false,
});

export default function TeamPage() {
  return <OrgChartPage />;
=======
const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),
export default function TeamPage() {
  return <OrgChartPage />;
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
