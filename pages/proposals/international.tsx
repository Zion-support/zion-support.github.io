<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
type ProposalListItem = {
  id: string
  title: string
  targetInstitution: string
  regionalScope: string
  type: string
  status: 'Draft' | 'Submitted' | 'Under Review' | 'Accepted'
  createdAt: string

import React, { useEffect, useState } from 'react',
import EnhancedLayout from '../../components / layout / EnhancedLayout',

<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
type ProposalListItem = {
  id: string,
  title: string,
  target_institution: string,
  regional_scope: string,
  type: string,
  status: 'Draft' | 'Submitted' | 'Under Review' | 'Accepted',


},
export default function InternationalProposalsPage() {
  const [items, setItems] = useState<ProposalListItem[]>([]),
  const [filter, setFilter] = useState('All'),

  useEffect__(() => {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    fetch('/api/proposals')
      .then((r) => r.json())
      .then((d) => setItems(d.items |[]))
      .catch(() => setItems([]))

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  }, []),
  const filtered = items.filter((i) => (filter === 'All' ? true : i.regionalScope === filter))


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


        </div>
        <div className="text-sm text-gray-600">Community commentary per region coming next. For now, proposals expose a comments API endpoint.</div>
      </div>
    </EnhancedLayout>

}

<<<<<<< HEAD
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

import React, { useEffect, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

import React, { useEffect, useState } from 'react',
import EnhancedLayout from '../../components/layout/EnhancedLayout'
import React, { useEffect, useState } from 'react',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
import React, { useEffect, useState } from 'react',
import EnhancedLayout from '../../components/layout/EnhancedLayout'
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type ProposalListItem = {
  id: string
  title: string
  targetInstitution: string
  regionalScope: string
  type: string
  status: 'Draft' | 'Submitted' | 'Under Review' | 'Accepted'
  createdAt: string
}
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function InternationalProposalsPage() {
  const [items, setItems] = useState<ProposalListItem[]>([])
  const [filter, setFilter] = useState('All')
  useEffect(() => {
},
export default function InternationalProposalsPage() {
  const [items, setItems] = useState<ProposalListItem[]>([]),
  const [filter, setFilter] = useState('All'),
  useEffect__(() => {
    fetch('/api/proposals')
      .then((r) => r.json())
      .then((d) => setItems(d.items |[]))
      .catch(() => setItems([]))
  }, [])
  const filtered = items.filter((i) => (filter === 'All' ? true : i.regionalScope === filter))

  }, []),
  const filtered = items.filter((i) => (filter === 'All' ? true : i.regionalScope === filter))
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
                <a className="text-blue-600 underline" href={`/api/proposals?id=${i.id}`} target="_blank" rel="noreferrer">JSON</a>
                <a className="text-blue-600 underline" href={`/proposals/${i.id}.md`} target="_blank" rel="noreferrer">Markdown</a>
                <a className="text-blue-600 underline" href={`/proposals/${i.id}.pdf`} target="_blank" rel="noreferrer">PDF</a>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <div className="p-4 text-sm text-gray-600">No proposals yet.</div>}
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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>
        <div className="text-sm text-gray-600">Community commentary per region coming next. For now, proposals expose a comments API endpoint.</div>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
  );
};
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

=======
}

=======
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
