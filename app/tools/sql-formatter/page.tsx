import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'SQL Formatter',
  description: 'Format SQL queries for readability.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/sql-formatter' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="sql-formatter"
      title="SQL Formatter"
      description="Format SQL queries for readability."
    />
  );
}
