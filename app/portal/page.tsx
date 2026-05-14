import { Metadata } from 'next';
import ClientPortal from '../components/ClientPortal';

export const metadata: Metadata = {
  title: 'Client Portal | ZionTechGroup',
  description: 'Access your saved proposals, service comparisons, and quiz results. Your personal dashboard for ZionTechGroup AI & IT services.',
};

export default function PortalPage() {
  return <ClientPortal />;
}
