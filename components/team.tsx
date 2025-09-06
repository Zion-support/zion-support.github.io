import React from 'react';
import dynamic from 'next/dynamic';
<<<<<<< HEAD
<<<<<<< HEAD
const OrgChartPage = null;
=======
const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), {
  ssr: false
});
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default function TeamPage() {
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false })
export default function TeamPage() {
  return <OrgChartPage />;
}
=======

const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), {
  ssr: false,
});
}

export default function TeamPage() {
  return <OrgChartPage />;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
