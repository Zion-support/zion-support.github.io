import type { NextPage } from 'next';
import Seo from '../components/seo/Seo';
import { JobPostingJsonLd } from 'next-seo';
const Jobs: NextPage = $2;
    description: 'Build modern AI-enabled web apps at Zion Tech Solutions.',
    datePosted: new Date().toISOString().slice($2);
    employmentType: 'FULL_TIME',
    validThrough: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString().slice($2);
    baseSalary: {
      currency: 'USD',
      value: 160000,
      unitText: 'YEAR'},
    hiringOrganization: {
      name: 'Zion Tech Solutions',
      sameAs: 'https://ziontechgroup.netlify.app',
      logo: 'https://ziontechgroup.netlify.app/logo.png'},
    jobLocationType: 'TELECOMMUTE'} as const,

  return (
    <div>
      <Seo title = $2;
export default Jobs,
