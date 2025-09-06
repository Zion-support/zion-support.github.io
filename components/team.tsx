import React from 'react';
import dynamic from 'next/dynamic';

const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), {
  ssr: false
});

export default function TeamPage() {
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false })
export default function TeamPage() {
  return <OrgChartPage />;
<<<<<<< HEAD
}
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
