<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';
interface AuditReport {
  generatedAt?: string;
  metadata?: any;
  vulnerabilities?: any;
  error?: string;
  raw?: string
<<<<<<< HEAD
=======



>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

type Props = { report: AuditReport },

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const file = path.join(process.cwd(), 'publicautomationsecurity-audit.json');
    const raw = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(raw);
    return { props: { report: data }, revalidate: 86400 }
  } catch {
    return { props: { report: { error: 'No audit report yet.' } }, revalidate: 86400 }
  }
};

export default function SecurityAudit({ report }: Props) {
<<<<<<< HEAD
=======
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function SecurityAudit({ report }: Props) {
};
</pre> </div>) ;
export default function SecurityAudit(): any ({ report }: Props) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Security Audit</h1>
        <p className="text-gray-600 dark:text-gray-300">Automated vulnerability scan summary.</p>
      </header>
      {report.error && <div className="text-red-600">{report.error}</div>}
      {report.generatedAt && (
        <div className="text-sm text-gray-500">Generated at: {new Date(report.generatedAt).toLocaleString()}</div>
      )}
      <pre className="whitespace-pre-wrap text-xs p-4 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 overflow-auto">
{JSON.stringify(report, null, 2)}
      </pre>
    </div>
  )
}
<<<<<<< HEAD
import fs from 'fs',
=======
>>>>>>> merged-prs-20250907-203621
}
}
</pre> </div>) 
}
<<<<<<< HEAD
=======
import fs from 'fs',
=======
}
</pre> </div>)

export default function SecurityAudit({ report }: Props) {};
};

</pre> </div>)
 
};
</pre> </div>) 

  return (
    <div className="space-y-4">"
      <header className="space-y-1">"
        <h1 className="text-3xl font-bold">Security Audit</h1>"
        <p className="text-gray-600 dark:text-gray-300">Automated vulnerability scan summary.</p>
      </header>"
      {report.error && <div className="text-red-600">{report.error}</div>}
      {report.generatedAt && ("
        <div className="text-sm text-gray-500">Generated at: {new Date(report.generatedAt).toLocaleString()}</div>
      )}
<<<<<<< HEAD
=======

;
    </div>;

);
}
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <pre className="whitespace-pre-wrap text-xs p-4 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 overflow-auto">;
{JSON && JSON.stringify(report, null, 2)}
      </pre>;
    </div>;
  );
});
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
</pre> </div>);
export default /**;
 * SecurityAudit - Function description;
 */
function SecurityAudit() {}
  return ("
    <div className="space - y-4">;"
      <header className="space - y-1">;"
        <h1 className="text - 3xl font - bold">Security Audit</h1>;"
        <p className="text - gray - 600 dark:text - gray - 300">Automated vulnerability scan summary.</p>;
      </header>;"
      {report.error && <div className="text - red - 600">{report.error}</div>}
      {report.generated_at && ("
        <div className="text - sm text - gray - 500">Generated at: {new Date (report.generated_at).toLocaleString ()}</div>)}"
      <pre className="whitespace - pre - wrap text - xs p - 4 rounded border border - gray - 200 dark:border - gray - 800 bg - gray - 50 dark:bg - gray - 900 / 40 overflow - auto">;
{JSON.stringify (report, null, 2)}
      </pre>;
    </div>);
  }
},

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
  )

}
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import path from 'path';
import type { GetStaticProps } from 'next';
interface AuditReport {
  generatedAt?: string;
  metadata?: any;
  vulnerabilities?: any;
  error?: string;
  raw?: string
}

type Props = any;

export default function SecurityAudit({ report }: Props) {
  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Security Audit</h1>
        <p className="text-gray-600 dark:text-gray-300">Automated vulnerability scan summary.</p>
      </header>
<<<<<<< HEAD
      {report.error && <div className="text-red-600">{report.error}</div>}
      {report.generatedAt && (<div className="text-sm text-gray-500">Generated at: {new Date(report.generatedAt).toLocaleString()}</div>;
=======
<<<<<<< HEAD
      {report.error && <div className="text-red-600>{report.error}</div>}
      {report.generatedAt && (<div className=text-sm text-gray-500">Generated at: {new Date(report.generatedAt).toLocaleString()}</div>;
=======
      {report.error && <div className="text-red-600">{report.error}</div>}
      {report.generatedAt && (
        <div className="text-sm text-gray-500">Generated at: {new Date(report.generatedAt).toLocaleString();}</div>
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD

}
</pre> </div>)

};
</pre> </div>)
 
};
</pre> </div>) 
export default function SecurityAudit({ report }: Props) {
  return (
    <div className="space-y-4">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Security Audit</h1>
        <p className="text-gray-600 dark:text-gray-300">Automated vulnerability scan summary.</p>
      </header>
      {report.error && <div className="text-red-600">{report.error}</div>}
      {report.generatedAt && (
        <div className="text-sm text-gray-500">Generated at: {new Date(report.generatedAt).toLocaleString()}</div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      )}
      <pre className="whitespace-pre-wrap text-xs p-4 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 overflow-auto">
{JSON.stringify(report, null, 2)}
      </pre>
    </div>
    </div>;
<<<<<<< HEAD
)}
  )})}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
);
<<<<<<< HEAD
});
}
<<<<<<< HEAD


origin/cursor/automate-test-improve-and-merge-code-2533
  );
}
  );
}

<<<<<<< HEAD

origin/cursor/automate-test-improve-and-merge-code-2533
  );
}
  );
}

=======
=======
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
>>>>>>> origin/chore/fix-lint-and-merge
=======
}
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
