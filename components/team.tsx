import React from 'react';
import dynamic from 'next/dynamic';

const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), {
  ssr: false
});


export default function TeamPage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
