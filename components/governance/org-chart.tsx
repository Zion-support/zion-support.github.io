import dynamic from 'next/dynamic';

<<<<<<< HEAD
=======
const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'){ ssr: false });

export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
