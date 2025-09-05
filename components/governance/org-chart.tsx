<<<<<<< HEAD
import React from 'react',
import dynamic from 'next/dynamic',
const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false }),

export default function OrgChartGovernancePage() {
  return <OrgChartPage />
}
=======
import React from 'react';
import dynamic from 'next/dynamic';

const _OrgChartPage = dynamic__(() => import('../../components/org/OrgChartPage'), {_ssr: false});

export default function OrgChartGovernancePage() {_return <OrgChartPage />;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
