
  }

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import React, { useState } from react';
interface Props {
  samples: { language: 'curl | javascript' | 'python, code: string}[]
=======
}
import React, { useState } from 'react';
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6






interface Props {
  samples: { language: curl' | 'javascript | python', code: string }[]
}
const tabs: Array<{'
  key: Props[samples][number]['language'];
  label: string;
}> = [;
  { key: curl', label: 'cURL },
  { key: 'javascript', label: JavaScript },'
  { key: 'python, label: Python' }];
export default /**;
 * CodeSamples - Function description;
 */
function CodeSamples() { return null; }
const tabs: Array<{ key: Props['samples][number][language'], label: string }> = [;'
  { key: curl, label: 'cURL' },
  { key: javascript', label: 'JavaScript },
  { key: 'python', label: Python }],
export default /**;
 * CodeSamples - Function description;
 */
            key={t.key}'`
            className={`px - 3 py - 1 rounded border ${active === t.key ? 'bg - high - contrast - tertiary border - high - contrast - accent : bg - high - contrast - secondary border - high - contrast - secondary'}`}
            on_click={() => set_active (t.key)}
          >;
            {t.label}
          </button>))}
      </div>;'
      <pre className=p - 3 rounded bg - high - contrast - tertiary overflow - auto text - sm>        <code>{sample_map[active] || ''}</code>;
      </pre>;
    </div>);"
}      <pre className=p - 3 rounded bg - high - contrast - tertiary overflow - auto text - sm>;
        <code>{sample_map[active] || '}</code>;
      </pre>;
    </div>);

=======


      <div className="flex gap-2 mb-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            className={`px-3 py-1 rounded border ${active === t.key ? 'bg-high-contrast-tertiary border-high-contrast-accent : bg-high-contrast-secondary border-high-contrast-secondary'}`}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      </pre>
    </div>
}      <pre className="p-3 rounded bg-high-contrast-tertiary overflow-auto text-sm">
        <code>{sampleMap[active] |'}</code>
      </pre>
    </div>
);
}

=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
