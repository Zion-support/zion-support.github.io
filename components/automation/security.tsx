<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508


}
</pre> </div>)

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function SecurityAudit({ report }: Props) {
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
</pre> </div>) ;
export default function SecurityAudit(): any ({ report }: Props) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
</pre> </div>)
 
};
</pre> </div>) 
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export default function SecurityAudit({ report }: Props) {
=======

export default function SecurityAudit({ report }: Props) {

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
<<<<<<< HEAD
      <pre className="whitespace-pre-wrap text-xs p-4 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 overflow-auto">
{JSON.stringify(report, null, 2)}
      </pre>
    </div>
    </div>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508


    </div>;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    </div>;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
);
}

      <pre className="whitespace-pre-wrap text-xs p-4 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 overflow-auto">;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
{JSON && JSON.stringify(report, null, 2)}
      </pre>;
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  );
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
}
</pre> </div>);
export default /**
 * SecurityAudit - Function description
 */
function SecurityAudit() {
  return (
    <div className="space-y-4">;
      <header className="space-y-1">;
        <h1 className="text-3xl font-bold">Security Audit</h1>;
        <p className="text - gray - 600 dark:text-gray-300">Automated vulnerability scan summary.</p>;
      </header>;
      {report.error && <div className="text-red-600">{report.error}</div>}
      {report.generated_at && (
        <div className="text - sm text-gray-500">Generated at: {new Date (report.generated_at).toLocaleString ()}</div>)}
      <pre className="whitespace - pre - wrap text - xs p - 4 rounded border border - gray - 200 dark:border - gray - 800 bg - gray - 50 dark:bg - gray-900 / 40 overflow-auto">;
{JSON.stringify (report, null, 2)}
      </pre>;
    </div>);
}

<<<<<<< HEAD
}
</pre> </div>)

};
</pre> </div>)
 
};
</pre> </div>) 
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD

);
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    </div>
    </div>;
);
}
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
