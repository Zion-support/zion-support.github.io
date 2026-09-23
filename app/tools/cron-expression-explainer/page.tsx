import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Cron Expression Explainer | Zion Tech Group',
  description: 'Explain cron schedules in plain English.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/cron-expression-explainer' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="cron-expression-explainer"
      title="Cron Expression Explainer"
      description="Explain cron schedules in plain English."
    />
  );
}
