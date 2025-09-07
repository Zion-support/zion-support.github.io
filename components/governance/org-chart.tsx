<<<<<<< HEAD
<<<<<<< HEAD
  return <OrgChartPage />;
}

const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false,}
}),
=======
import React from 'react';
import dynamic from 'next/dynamic';
const OrgChartPage = dynamic(
  () => import('../../components/org/OrgChartPage')
  { ssr: false }
);
export default function OrgChartGovernancePage() {
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false })
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
}
<<<<<<< HEAD
}
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
