import React from 'react';
import dynamic from 'next/dynamic';

const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), {
  ssr: false,
});

export default function TeamPage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),
<<<<<<< HEAD
export default function TeamPage() {;
  return <OrgChartPage />;
}
;
}
=======
export default function TeamPage() {
  return <OrgChartPage />;
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
