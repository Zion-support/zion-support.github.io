 interface ChangelogManagerProps {;
  platform: AppPlatform ;
type ChangelogEntry = {;
  id: string;
version: string;
date: string;
changes: string ;
platform ;
 => {;
  const [entries,  setEntries] = useState<ChangelogEntry[]> ([ {;
  const handleAddEntry = () => {;
  if (!newEntry.version || !newEntry.changes) return;
const entry: ChangelogEntry = {;
  ...newEntry;
id: Math.random () .toString (36) .substring (2, 9) ;
setEntries ([entry, ...entries]);
setNewEntry ({;
  version: any
date: new Date () .toISOString () .split ('T') [0] || new Date () .toLocaleDateString ('en-CA'
</div> </div> </CardContent> 