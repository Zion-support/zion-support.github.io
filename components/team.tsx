import React from 'react';
import dynamic from 'next/dynamic';

const _OrgChartPage = dynamic__(() => import('../components/org/OrgChartPage'), {_ssr: false});

export default function TeamPage() {_return <OrgChartPage />;}
