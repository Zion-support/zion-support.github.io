import React from 'react';



export default function TeamPage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),

