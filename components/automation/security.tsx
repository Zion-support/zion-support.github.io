import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';

interface AuditReport {
  generatedAt?: string;
  metadata?: any;
  vulnerabilities?: any;
  error?: string;
  raw?: string;
}

type Props = { report: AuditReport };

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const file = path.join(process.cwd(), 'public', 'automation', 'security-audit.json');
    const raw = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(raw);
    return { props: { report: data }, revalidate: 86400 };
  } catch {
    return { props: { report: { error: 'No audit report yet.' } }, revalidate: 86400 };
  }
};

export default function SecurityAudit({ report }: Props) {
  return (
    <div className=&quot;space-y-4&quot;>
      <header className=&quot;space-y-1&quot;>
        <h1 className=&quot;text-3xl font-bold&quot;>Security Audit</h1>
        <p className=&quot;text-gray-600 dark:text-gray-300&quot;>Automated vulnerability scan summary.</p>
      </header>
      {report.error && <div className=&quot;text-red-600&quot;>{report.error}</div>}
      {report.generatedAt && (
        <div className=&quot;text-sm text-gray-500&quot;>Generated at: {new Date(report.generatedAt).toLocaleString()}</div>
      )}
      <pre className=&quot;whitespace-pre-wrap text-xs p-4 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 overflow-auto&quot;>
{JSON.stringify(report, null, 2)}
      </pre>
    </div>
  );
}