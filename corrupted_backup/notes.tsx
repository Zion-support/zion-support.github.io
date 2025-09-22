import { useEffect, useState } from 'react';
type Note = {
  id: string;
  targetType: string;
  targetId: string,;
  text: string,;
  authorId: string,;
  createdAt: number;
},;
export default function AdminNotesConsole() {;
  const [isAdmin, setIsAdmin] = useState(true),;
  const [notes, setNotes] = useState<Note[]>([]),;
  const [loading, setLoading] = useState(false),;
  useEffect(() => {;
    async function load() {;
      setLoading(true),;
      try {;
        const res = await fetch('/api/admin/notes-all', { headers: { 'X-Admin': isAdmin ? 'true' : 'false' } }),;
        if (!res.ok) return,;
        const data = await res.json();
        setNotes(data.notes || []);
      } finally {;
        setLoading(false);
      }
    }
    if (isAdmin) load()
  }, [isAdmin]),

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Admin Notes</h1>
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
          <span>Admin</span>
        </label>
      </div>
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  isPrivate: boolean;
}

const mockNotes: Note[] = [
  {
    id: '1',
    title: 'Project Alpha Status Update',
    content: 'The Alpha project is progressing well. We have completed 75% of the planned features and are on track for the Q1 release.',
    author: 'John Doe',
    createdAt: '2025-01-15T09:00:00Z',
    updatedAt: '2025-01-15T09:00:00Z',
    tags: ['project', 'alpha', 'status'],
    isPrivate: false
  },
  {
    id: '2',
    title: 'Security Audit Findings',
    content: 'Critical security vulnerabilities found in the authentication system. Immediate action required.',
    author: 'Jane Smith',
    createdAt: '2025-01-15T10:30:00Z',
    updatedAt: '2025-01-15T10:30:00Z',
    tags: ['security', 'audit', 'critical'],
    isPrivate: true
  },
  {
    id: '3',
    title: 'Team Meeting Notes',
    content: 'Discussed upcoming features and resource allocation. Need to hire 2 additional developers.',
    author: 'Mike Johnson',
    createdAt: '2025-01-15T14:00:00Z',
    updatedAt: '2025-01-15T14:00:00Z',
    tags: ['meeting', 'team', 'hiring'],
    isPrivate: false
  }
];

const AdminNotesPage: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [showPrivate, setShowPrivate] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch('/api/admin/notes-all', {
          headers: { 'X-Admin': isAdmin ? 'true' : 'false' },
        });
        if (!res.ok) return;
        const data = await res.json();
        setNotes(data.notes || []);
      } finally {
        setLoading(false);
      }
    }
    if (isAdmin) load();
  }, [isAdmin]);

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>Admin Notes</h1>
        <label className='inline-flex items-center gap-2 text-sm'>
          <input
            type='checkbox'
            checked={isAdmin}
            onChange={e => setIsAdmin(e.target.checked)}
          />
          <span>Admin</span>
        </label>
      </div>

      {loading ? (
        <div>Loading…</div>
      ) : notes.length === 0 ? (
        <div className='opacity-70'>No notes found.</div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          {notes.map(n => (
            <div key={n.id} className='rounded border p-3 text-sm'>
              <div className='opacity-60 text-xs mb-1'>
                {new Date(n.createdAt).toLocaleString()} • {n.authorId}
              </div>
              <div className='font-medium mb-1'>
                {n.targetType} • {n.targetId}
              </div>
              <div>{n.text}</div>
            </div>
          ))}
    // Simulate loading notes
    setTimeout(() => {
      setNotes(mockNotes);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !filterTag || note.tags.includes(filterTag);
    const matchesPrivacy = !note.isPrivate || showPrivate;
    return matchesSearch && matchesTag && matchesPrivacy;
  });

  const allTags = Array.from(new Set(notes.flatMap(note => note.tags)));

  return (
    <>
      <Head>
        <title>Admin Notes - Zion Tech Group</title>
        <meta name="description" content="Admin notes and documentation" />
      </Head>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Notes</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Add New Note
          </button>
        </div>

      {loading ? (
        <div>Loading…</div>
      ) : notes.length === 0 ? (
        <div className="opacity-70">No notes found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {notes.map((n) => (
            <div key={n.id} className="rounded border p-3 text-sm">
              <div className="opacity-60 text-xs mb-1">{new Date(n.createdAt).toLocaleString()} • {n.authorId}</div>
              <div className="font-medium mb-1">{n.targetType} • {n.targetId}</div>
              <div>{n.text}</div>
            </div>
          ))}
        </div>;
      )}
    </div>;
  );
}
}
};

export default AdminNotesPage;
