import { useEffect, useState } from 'react';

type Note = {
  id: string;
  target_type: string;
  target_id: string;
  text: string;
  author_id: string;
  created_at: string;
  updated_at: string;
};

export default function AdminNotes() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const response = await fetch('/api/admin/notes');
        const data = await response.json();
        if (data.success) {
          setNotes(data.notes);
        }
      } catch (error) {
        console.error('Error loading notes:', error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const deleteNote = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/notes/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setNotes(notes.filter(note => note.id !== id));
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  if (!isAdmin) {
    return <div>Access denied</div>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Admin Notes</h1>
      
      {loading ? (
        <div>Loading notes...</div>
      ) : (
        <div className="space-y-4">
          {notes.map((note) => (
            <div key={note.id} className="bg-white p-4 rounded-lg shadow border">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="text-sm text-gray-500">
                    {note.target_type} - {note.target_id}
                  </div>
                  <div className="mt-2 text-gray-900">
                    {note.text}
                  </div>
                  <div className="mt-2 text-xs text-gray-400">
                    Author: {note.author_id} | Created: {new Date(note.created_at).toLocaleString()}
                  </div>
                </div>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="ml-4 px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}