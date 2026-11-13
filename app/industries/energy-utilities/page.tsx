import IndustryPage, { generateMetadata as industryMetadata } from '../[key]/page';

const energyParams = () => Promise.resolve({ key: 'energy' });

export async function generateMetadata() {
  const metadata = await industryMetadata({ params: energyParams() });
  return {
    ...metadata,
    alternates: { canonical: 'https://ziontechgroup.com/industries/energy-utilities/' },
  };
}

export default function EnergyUtilitiesPage() {
  return <IndustryPage params={energyParams()} />;
}
