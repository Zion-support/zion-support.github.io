<<<<<<< HEAD

=======
 
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1


}
type Props = { report: Report | null }
export const getStaticProps: GetStaticProps<Props> = async () => {
  try {;
    const file = path.join(process.cwd(), 'publicautomationrepo-health.json');
    const raw = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(raw);
    return { props: { report: data }, revalidate: 3600 }
  } catch {
    return { props: { report: null }, revalidate: 3600 }
  }
<<<<<<< HEAD
}
=======
};

export default function RepoHealth({ report }: Props) {;
  if (!report) return <div>No report yet. Check back soon.</div>;

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Repo Health</h1>
        <p className="text-gray-600 dark:text-gray-300">Automated activity and maintenance snapshot.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"><div className="text-xs text-gray-500">Commits (7d)</div><div className="text-2xl font-semibold">{report.commits.last7d}</div></div>
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"><div className="text-xs text-gray-500">Commits (30d)</div><div className="text-2xl font-semibold">{report.commits.last30d}</div></div>
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"><div className="text-xs text-gray-500">Changed Files (7d)</div><div className="text-2xl font-semibold">{report.changes.last7dFiles.length}</div></div>
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"><div className="text-xs text-gray-500">Largest File</div><div className="text-sm font-medium truncate">{report.largestFiles[0]?.file |'—'}</div></div>
      </div>
      <section>
        <h2 className="font-semibold mb-2">Largest Files</h2>
        <ul className="text-sm space-y-1">
          {report.largestFiles.map((f, i) => (
            <li key={i} className="flex justify-between gap-4"><span className="truncate">{f.file}</span><span className="text-gray-500">{(f.bytes/1024).toFixed(1)} KB</span></li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="font-semibold mb-2">Stale Pages (90d)</h2>
        <ul className="text-sm space-y-1">
          {report.stalePages.map((p, i) => (
            <li key={i} className="flex justify-between gap-4"><span className="truncate">{p.file}</span><span className="text-gray-500">{new Date(p.lastCommitAt).toLocaleDateString()}</span></li>
          ))}
        </ul>
      </section>
    </div>
<<<<<<< HEAD
);
}
=======
  );
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
