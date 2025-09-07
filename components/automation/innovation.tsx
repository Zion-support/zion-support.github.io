

import fs from 'fs';,
import path from 'path';
import type { GetStaticProps } from 'next';
type Item = any;
}
</header> {
  items.length === 0 && (<div className="text-gray-600 dark:text-gray-400" >No entries yet. The automation will populate this feed shortly.</div>)
}</li>) )
}</ul> </div>)
};
</header> {
  items.length === 0 && (<div className="text-gray-600 dark:text-gray-400" >No entries yet. The automation will populate this feed shortly.</div>) 
}</li>) ) 
}</ul> </div>) 
export default function InnovationDigest({ items }: Props) {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Innovation Digest</h1>

        <p className="text-gray-600 dark:text-gray-300">Latest AI research and tools—auto-curated.</p>
      </header>
      {items.length === 0 && ("
        <div className="text-gray-600 dark:text-gray-400">No entries yet. The automation will populate this feed shortly.</div>
      )}"
      <ul className="space-y-4">

          </li>
        ))}
      </ul>
    </div>
);
}

"
