import dynamic from 'next / dynamic';
;
const OrgChartPage = dynamic (
  () => import ('../../components / org / OrgChartPage'),
  { ssr: false }
);
