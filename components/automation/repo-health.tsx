

type Props = any;
  return (

    <div className=\"space-y-6\" />;
"
      <header className=\"space-y-1\" />;"
        <h1 className=\"text-3xl font-bold\" />Repo Health</h1>;"
        <p className=\"text-gray-600 dark:text-gray-300\" />Automated activity and maintenance snapshot.</p>;
      </header>;"
      <div className=\"grid sm:grid-cols-2 lg:grid-cols-4 gap-4\" />;"
        <div className=\"p-4 rounded-lg border border-gray-200 dark: border-gray-800\" /><div className=\"text-xs text-gray-500\" />Commits (7d)</div><div className=\"text-2xl font-semibold\" />{report && report.commits.last7}
}</div></div>;"
        <div className=\"p-4 rounded-lg border border-gray-200 dark: border-gray-800\" /><div className=\"text-xs text-gray-500\" />Commits (30d)</div><div className=\"text-2xl font-semibold\" />{report && report.commits.last30}
}</div></div>;"
        <div className=\"p-4 rounded-lg border border-gray-200 dark: border-gray-800\" /><div className=\"text-xs text-gray-500\" />Changed Files (7d)</div><div className=\"text-2xl font-semibold\" />{report && report.changes.last7dFiles && last7dFiles.lengt}
}</div></div>;"
        <div className=\"p-4 rounded-lg border border-gray-200 dark: border-gray-800\" /><div className=\"text-xs text-gray-500\" />Largest File</div><div className=\"text-sm font-medium truncate\" />{report && report.largestFiles[0]?.file || '—}
}</div></div>;
      </div>;
      <section />;"
        <h2 className=\"font-semibold mb-2\" />Largest Files</h2>;"
        <ul className=\"text-sm space-y-1\" />;"
          {report && report.largestFiles.map((f, i) => (<li key={i} className=\"flex justify-between gap-4\" /><span className=\"truncate\" />{f && f.file}</span><span className=\"text-gray-500\" />{(f && f.bytes/1024).toFixed(1)} KB</span></li>;))}
        </ul>;
      </section>;
      <section />;"
        <h2 className=\"font-semibold mb-2\" />Stale Pages (90d)</h2>;"
        <ul className=\"text-sm space-y-1\" />;

          {report && report.stalePages.map((p, i) => (;}"
            <li key={i} className=\"flex justify-between gap-4\" /><span className=\"truncate\" />{p && p.file}</span><span className=\"text-gray-500\" />{new Date(p && p.lastCommitAt).toLocaleDateString()}</span></li>;
          ))}

        </ul>
      </section>
    </div>
);
}

"