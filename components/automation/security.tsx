<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


}
</pre> </div>)

export default function SecurityAudit({ report }: Props) {
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
</pre> </div>) ;
export default function SecurityAudit(): any ({ report }: Props) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
</pre> </div>)
 
};
</pre> </div>) 


export default function SecurityAudit({ report }: Props) {
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


    </div>;


);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <pre className="whitespace-pre-wrap text-xs p-4 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 overflow-auto">;
{JSON && JSON.stringify(report, null, 2)}
      </pre>;
    </div>;
  );
}
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  );
}


<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}
</pre> </div>);
export default /**
 * SecurityAudit - Function description
 */
function SecurityAudit() {
  return (
    <div className="space - y-4">;
      <header className="space - y-1">;
        <h1 className="text - 3xl font - bold">Security Audit</h1>;
        <p className="text - gray - 600 dark:text - gray - 300">Automated vulnerability scan summary.</p>;
      </header>;
      {report.error && <div className="text - red - 600">{report.error}</div>}
      {report.generated_at && (
        <div className="text - sm text - gray - 500">Generated at: {new Date (report.generated_at).toLocaleString ()}</div>)}
      <pre className="whitespace - pre - wrap text - xs p - 4 rounded border border - gray - 200 dark:border - gray - 800 bg - gray - 50 dark:bg - gray - 900 / 40 overflow - auto">;
{JSON.stringify (report, null, 2)}
      </pre>;
    </div>);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}
</pre> </div>)

};
</pre> </div>)
 
};
</pre> </div>) 
=======
import fs from 'fs',
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
      )}
      <pre className="whitespace-pre-wrap text-xs p-4 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 overflow-auto">
{JSON.stringify(report, null, 2)}
      </pre>
    </div>
    </div>;
);
}
<<<<<<< HEAD
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
