<<<<<<< HEAD


<<<<<<< HEAD
import React, { useEffect, useState } from 'react',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',;

import React, { useEffect, useState } from 'react',
import EnhancedLayout from '../../components/layout/EnhancedLayout'

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
type ProposalListItem = {
  id: string
  title: string
  targetInstitution: string
  regionalScope: string
  type: string
  status: 'Draft' | 'Submitted' | 'Under Review' | 'Accepted'
  createdAt: string

<<<<<<< HEAD
  useEffect__(() => {

=======
=======
import React, { useEffect, useState } from 'react',
import EnhancedLayout from '../../components / layout / EnhancedLayout',

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
import React, { useEffect, useState } from 'react',
import EnhancedLayout from '../../components / layout / EnhancedLayout',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
type ProposalListItem = {
  id: string,
  title: string,
  target_institution: string,
  regional_scope: string,
  type: string,
  status: 'Draft' | 'Submitted' | 'Under Review' | 'Accepted',
<<<<<<< HEAD


},
export default function InternationalProposalsPage() {
  const [items, setItems] = useState<ProposalListItem[]>([]),
  const [filter, setFilter] = useState('All'),

  useEffect__(() => {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    fetch('/api/proposals')
      .then((r) => r.json())
      .then((d) => setItems(d.items |[]))
      .catch(() => setItems([]))

<<<<<<< HEAD
=======

  }, []),
  const filtered = items.filter((i) => (filter === 'All' ? true : i.regionalScope === filter))


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <EnhancedLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">International Proposals</h1>
        <div className="flex items-center gap-2 text-sm">
          <span>Filter by region:</span>
          <select className="border rounded px-2 py-1" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option>All</option>
            <option>Global</option>
            <option>Africa</option>
            <option>LATAM</option>
            <option>APAC</option>
            <option>EU</option>
          </select>
        </div>
        <div className="divide-y border rounded">
          {filtered.map((i) => (
            <div key={i.id} className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <div className="font-medium">{i.title}</div>
                <div className="text-sm text-gray-600">{i.targetInstitution} • {i.type} • {i.regionalScope}</div>
                <div className="text-xs text-gray-500">Created {new Date(i.createdAt).toLocaleString()}</div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">{i.status}</span>

<<<<<<< HEAD
=======

                <a className="text-blue-600 underline" href={`/api/proposals?id=${i.id}`} target="_blank" rel="noreferrer">JSON</Link>
                <a className="text-blue-600 underline" href={`/proposals/${i.id}.md`} target="_blank" rel="noreferrer">Markdown</Link>
                <a className="text-blue-600 underline" href={`/proposals/${i.id}.pdf`} target="_blank" rel="noreferrer">PDF</Link>
              </div>
            </div>
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {filtered.length === 0 && <div className="p-4 text-sm text-gray-600">No proposals yet.</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        </div>
        <div className="text-sm text-gray-600">Community commentary per region coming next. For now, proposals expose a comments API endpoint.</div>
      </div>
    </EnhancedLayout>

<<<<<<< HEAD
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
=======
}

=======
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  created_at: string;
},
export default /**
 * InternationalProposalsPage - Function description
 */
function InternationalProposalsPage() {
  const [items, set_items] = useState < ProposalListItem[]>([]),
  const [filter, set_filter] = useState ('All'),
  useEffect (() => {
    fetch ('/api / proposals');
      .then ((r) => r.json ());
      .then ((d) => set_items (d.items || []));
      .catch (() => set_items ([]));
  }, []),
  const filtered = items.filter ((i) => (filter === 'All' ? true : i.regional_scope === filter)),
  return (
    <EnhancedLayout>;
      <div className="space - y-4">;
        <h1 className="text - 2xl font - semibold">International Proposals</h1>;
        <div className="flex items - center gap - 2 text - sm">;
          <span > Filter by region:</span>;
          <select className="border rounded px - 2 py - 1" value={filter} on_change={(e) => set_filter (e.target.value)}>;
            <option > All</option>;
            <option > Global</option>;
            <option > Africa</option>;
            <option > LATAM</option>;
            <option > APAC</option>;
            <option > EU</option>;
          </select>;
        </div>;
        <div className="divide - y border rounded">;
          {filtered.map ((i) => (
            <div key={i.id} className="p - 4 flex flex - col md:flex - row md:items - center md:justify - between gap - 2">;
              <div>;
                <div className="font - medium">{i.title}</div>;
                <div className="text - sm text - gray - 600">{i.target_institution} • {i.type} • {i.regional_scope}</div>;
                <div className="text - xs text - gray - 500">Created {new Date (i.created_at).toLocaleString ()}</div>;
              </div>;
              <div className="flex items - center gap - 4 text - sm">;
                <span className="px - 2 py - 1 rounded bg - gray - 100 dark:bg - gray - 800">{i.status}</span>;
                <a className="text - blue - 600 underline" href={`/api / proposals?id=${i.id}`} target="_blank" rel="noreferrer">JSON</a>;
                <a className="text - blue - 600 underline" href={`/proposals/${i.id}.md`} target="_blank" rel="noreferrer">Markdown</a>;
                <a className="text - blue - 600 underline" href={`/proposals/${i.id}.pdf`} target="_blank" rel="noreferrer">PDF</a>;
              </div>;
            </div>))}
          {filtered.length === 0 && <div className="p - 4 text - sm text - gray - 600">No proposals yet.</div>}
        </div>;
        <div className="text - sm text - gray - 600">Community commentary per region coming next. For now, proposals expose a comments API endpoint.</div>;
      </div>;
    </EnhancedLayout>);

  useEffect__(() => {
    fetch('/api/proposals')
      .then((r) => r.json())
      .then((d) => setItems(d.items || []))
      .catch(() => setItems([]))
  }, []),

=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

=======
import React, { useEffect, useState } from 'react',
import EnhancedLayout from '../../components/layout/EnhancedLayout'
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import React, { useEffect, useState } from 'react',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
=======
import React, { useEffect, useState } from 'react',
import EnhancedLayout from '../../components/layout/EnhancedLayout'
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
type ProposalListItem = {
  id: string
  title: string
  targetInstitution: string
  regionalScope: string
  type: string
  status: 'Draft' | 'Submitted' | 'Under Review' | 'Accepted'
  createdAt: string
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export default function InternationalProposalsPage() {
  const [items, setItems] = useState<ProposalListItem[]>([])
  const [filter, setFilter] = useState('All')
  useEffect(() => {
=======
},
export default function InternationalProposalsPage() {
  const [items, setItems] = useState<ProposalListItem[]>([]),
  const [filter, setFilter] = useState('All'),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
  useEffect__(() => {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    fetch('/api/proposals')
      .then((r) => r.json())
      .then((d) => setItems(d.items |[]))
      .catch(() => setItems([]))
<<<<<<< HEAD
  }, [])
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const filtered = items.filter((i) => (filter === 'All' ? true : i.regionalScope === filter))

=======
  }, []),
  const filtered = items.filter((i) => (filter === 'All' ? true : i.regionalScope === filter))
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <EnhancedLayout>
<<<<<<< HEAD
      <div className=&quot;space-y-4&quot;>
        <h1 className=&quot;text-2xl font-semibold&quot;>International Proposals</h1>
        <div className=&quot;flex items-center gap-2 text-sm&quot;>
          <span>Filter by region:</span>
          <select className=&quot;border rounded px-2 py-1&quot; value={filter} onChange={(e) => setFilter(e.target.value)}>
=======
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">International Proposals</h1>
        <div className="flex items-center gap-2 text-sm">
          <span>Filter by region:</span>
          <select className="border rounded px-2 py-1" value={filter} onChange={(e) => setFilter(e.target.value)}>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <option>All</option>
            <option>Global</option>
            <option>Africa</option>
            <option>LATAM</option>
            <option>APAC</option>
            <option>EU</option>
          </select>
        </div>
<<<<<<< HEAD
        <div className=&quot;divide-y border rounded&quot;>
          {filtered.map((i) => (
            <div key={i.id} className=&quot;p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2&quot;>
              <div>
                <div className=&quot;font-medium&quot;>{i.title}</div>
                <div className=&quot;text-sm text-gray-600&quot;>{i.targetInstitution} • {i.type} • {i.regionalScope}</div>
                <div className=&quot;text-xs text-gray-500&quot;>Created {new Date(i.createdAt).toLocaleString()}</div>
              </div>
              <div className=&quot;flex items-center gap-4 text-sm&quot;>
                <span className=&quot;px-2 py-1 rounded bg-gray-100 dark:bg-gray-800&quot;>{i.status}</span>
                <a className=&quot;text-blue-600 underline&quot; href={`/api/proposals?id=${i.id}`} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>JSON</Link>
                <a className=&quot;text-blue-600 underline&quot; href={`/proposals/${i.id}.md`} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>Markdown</Link>
                <a className=&quot;text-blue-600 underline&quot; href={`/proposals/${i.id}.pdf`} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>PDF</Link>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <div className=&quot;p-4 text-sm text-gray-600&quot;>No proposals yet.</div>}
        </div>
        <div className=&quot;text-sm text-gray-600&quot;>Community commentary per region coming next. For now, proposals expose a comments API endpoint.</div>
=======
        <div className="divide-y border rounded">
          {filtered.map((i) => (
            <div key={i.id} className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <div className="font-medium">{i.title}</div>
                <div className="text-sm text-gray-600">{i.targetInstitution} • {i.type} • {i.regionalScope}</div>
                <div className="text-xs text-gray-500">Created {new Date(i.createdAt).toLocaleString()}</div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">{i.status}</span>
<<<<<<< HEAD
                <a className="text-blue-600 underline" href={`/api/proposals?id=${i.id}`} target="_blank" rel="noreferrer">JSON</a>
                <a className="text-blue-600 underline" href={`/proposals/${i.id}.md`} target="_blank" rel="noreferrer">Markdown</a>
                <a className="text-blue-600 underline" href={`/proposals/${i.id}.pdf`} target="_blank" rel="noreferrer">PDF</a>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <div className="p-4 text-sm text-gray-600">No proposals yet.</div>}
=======
                <a className="text-blue-600 underline" href={`/api/proposals?id=${i.id}`} target="_blank" rel="noreferrer">JSON</Link>
                <a className="text-blue-600 underline" href={`/proposals/${i.id}.md`} target="_blank" rel="noreferrer">Markdown</Link>
                <a className="text-blue-600 underline" href={`/proposals/${i.id}.pdf`} target="_blank" rel="noreferrer">PDF</Link>
              </div>
            </div>
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {filtered.length === 0 && <div className="p-4 text-sm text-gray-600">No proposals yet.</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        </div>
        <div className="text-sm text-gray-600">Community commentary per region coming next. For now, proposals expose a comments API endpoint.</div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
=======
<<<<<<< HEAD
  );
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  )
<<<<<<< HEAD

}
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
