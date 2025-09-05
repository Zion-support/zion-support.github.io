<<<<<<< HEAD
import React from 'react',;
import dynamic from 'next/dynamic',;
;
const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr:false }),;
;
export default function OrgChartGovernancePage() {;
  return <OrgChartPage />,;
}
=======
import React from 'react',
import dynamic from 'next/dynamic',
const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false }),

export default function OrgChartGovernancePage() {
  return <OrgChartPage />
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
