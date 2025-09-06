<<<<<<< HEAD
import React from 'react';
import dynamic from 'next/dynamic';

const OrgChartPage = dynamic(
  () => import('../../components/org/OrgChartPage'),
  { ssr: false }
);

export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
}
=======
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
