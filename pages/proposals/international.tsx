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
  const filtered = items.filter((i) => (filter === 'All' ? true : i.regionalScope === filter))

=======
  }, []),
  const filtered = items.filter((i) => (filter === 'All' ? true : i.regionalScope === filter))
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
