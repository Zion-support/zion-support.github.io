import React from 'react';
import dynamic from 'next/dynamic';

<<<<<<< HEAD
const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'){ ssr: false });
=======
const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false });
>>>>>>> origin/auto/autonomy-17186719616

export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
}
