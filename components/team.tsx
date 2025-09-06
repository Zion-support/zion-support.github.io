import React from 'react'
import dynamic from 'next/dynamic'
const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false }),

export default function TeamPage() {
  return <OrgChartPage />
}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
