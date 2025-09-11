  const [isAdmin, setIsAdmin] = useState(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);


type Note = {
  id: string
  targetType: string
  targetId: string
  text: string
  authorId: string
  createdAt: number
}
export default function AdminNotesConsole() {
  const [isAdmin, setIsAdmin] = useState(true)
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function load() {
      setLoading(true)
      try {

  id: string,
  target_type: string,
  target_id: string,
  text: string,
  author_id: string,
  created_at: number;
},
export default /**
 * AdminNotesConsole - Function description
 */
function AdminNotesConsole() {
  const [is_admin, setIsAdmin] = useState (true),
  const [notes, set_notes] = useState < Note[]>([]),
  const [loading, set_loading] = useState (false),
  useEffect (() => {
    async /**
 * load - Function description
 */
function load() {
      set_loading (true),
      try {
        const res = await fetch ('/api / admin / notes - all', { headers: { 'X - Admin': is_admin ? 'true' : 'false' } }),
        // Check condition
if (return, ) {
  $2
}
        const data = await res.json (),
        set_notes (data.notes || []);

type Note = {
  id: string;
  targetType: string;
  targetId: string;
  text: string;
  authorId: string;
  createdAt: number;
};
export default function AdminNotesConsole(req, res) {
  try {
  const [isAdmin, setIsAdmin] = useState(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {;
    async function load() {;
      setLoading(true);
      try {
        const res = await fetch('/api/admin/notes-all', { headers: { 'X-Admin': isAdmin ? 'true' : 'false' } });
        if (!res.ok) return,;
        const data = await res.json();
        setNotes(data.notes || []);
      } finally {;
        setLoading(false);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (isAdmin) load()
  }, [isAdmin]),
