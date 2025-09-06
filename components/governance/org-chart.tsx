import React from 'react';
import dynamic from 'next/dynamic';
const OrgChartPage = dynamic(
  () => import('../../components/org/OrgChartPage')
  { ssr: false }
);
<<<<<<< HEAD
export default function OrgChartGovernancePage() {
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false })
=======

export default function OrgChartGovernancePage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false }),
<<<<<<< HEAD
export default function OrgChartGovernancePage() {;
  return <OrgChartPage />;
}

}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
