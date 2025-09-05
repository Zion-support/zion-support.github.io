
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Plus, Trash2 } from "lucide-react",
import { AppPlatform } from "./MetadataManager",
=======
import React, { useState } from &quot;react&quot;;
import { Card, CardHeader, CardTitle, CardContent } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Plus, Trash2 } from &quot;lucide-react&quot;;
import { AppPlatform } from &quot;./MetadataManager&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ChangelogManagerProps {
  platform: AppPlatform
}

type ChangelogEntry = {
  id: string,
  version: string,
  date: string,
  changes: string
},
=======
import React, {_useState} from "react";

interface ChangelogManagerProps {_platform: AppPlatform;}

type ChangelogEntry = {_id: string;
  version: string;
  date: string;
  changes: string;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const ChangelogManager: React.FC<ChangelogManagerProps> = (_{_platform}) => {_const [entries, _setEntries] = useState<ChangelogEntry[]>([
    {
<<<<<<< HEAD
      id: &quot;1&quot;,
      version: &quot;1.0.0&quot;,
      date: &quot;2025-05-15&quot;,
      changes: &quot;Initial release of the Zion AI Marketplace app.&quot;
    }
  ]),
  
<<<<<<< HEAD
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry "id">>({
    version: "",
    date: new Date().toISOString().split('T')[0],
    changes: ""
  }),
=======
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry, &quot;id&quot;>>({
    version: "&quot;,
    date: new Date().toISOString().split('T')[0],
    changes: "&quot;
  });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  const handleAddEntry = () => {
    if (!newEntry.version || !newEntry.changes) return,
    
    const entry: ChangelogEntry = {
      ...newEntry,
      id: Math.random().toString(36).substring(2, 9)
    },
    
    setEntries([entry, ...entries]),
    setNewEntry({
      version: "&quot;,
      date: new Date().toISOString().split('T')[0],
<<<<<<< HEAD
      changes: ""
    })
  },
=======
      changes: "&quot;
    });
=======
      id: "1", _version: "1.0.0", _date: "2025-05-15", _changes: "Initial release of the Zion AI Marketplace app."}
  ]);
  
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry, "id">>({_version: "", _date: new Date().toISOString().split('T')[0], _changes: ""});
  
  const _handleAddEntry = () => {_if (!newEntry.version || !newEntry.changes) return;
    
    const entry: ChangelogEntry = {
      ...newEntry, _id: Math.random().toString(36).substring(2, _9)};
    
    setEntries([entry, ...entries]);
    setNewEntry({_version: "", _date: new Date().toISOString().split('T')[0], _changes: ""});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
<<<<<<< HEAD
  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id))
  },
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target,
    setNewEntry(prev => ({ ...prev, [name]: value }))
  },
=======
  const _handleRemoveEntry = (_id: string) => {_setEntries(entries.filter(entry => entry.id !== id));};
  
  const _handleInputChange = (_e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {_const { name, _value} = e.target;
    setNewEntry(prev => ({_...prev, _[name]: value}));
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <Card className=&quot;bg-zion-blue border-zion-purple/30&quot;>
      <CardHeader>
        <CardTitle>Version History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className=&quot;space-y-4&quot;>
          <div className=&quot;flex flex-col md:flex-row gap-3&quot;>
            <div className=&quot;flex-1 grid grid-cols-2 gap-3&quot;>
              <Input
<<<<<<< HEAD
                placeholder=&quot;Version (e.g. 1.0.1)&quot;
                name=&quot;version&quot;
                value={newEntry.version}
                onChange={handleInputChange}
              />
              <Input
                type=&quot;date&quot;
                name=&quot;date&quot;
                value={newEntry.date}
                onChange={handleInputChange}
=======
                placeholder="Version (e.g. 1.0.1)"
                name="version"
                value={_newEntry.version}
                onChange={_handleInputChange}
              />
              <Input
                type="date"
                name="date"
                value={_newEntry.date}
                onChange={_handleInputChange}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            </div>
            <Button 
              onClick={_handleAddEntry}
              disabled={_!newEntry.version || !newEntry.changes}
            >
              <Plus className=&quot;mr-2 h-4 w-4&quot; />
              Add
            </Button>
          </div>
          
          <Textarea
<<<<<<< HEAD
            placeholder=&quot;What's new in this version?&quot;
            name=&quot;changes&quot;
            value={newEntry.changes}
            onChange={handleInputChange}
            rows={3}
          />
          
          <div className=&quot;border-t border-zion-purple/20 pt-4 space-y-4&quot;>
            {entries.map((entry) => (
              <div 
=======
            placeholder="What's new in this version?"
            name="changes"
            value={_newEntry.changes}
            onChange={_handleInputChange}
            rows={_3}
          />
          
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {_entries.map(_(entry) => (_<div 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                key={entry.id}
                className=&quot;p-3 rounded border border-zion-purple/20 bg-zion-blue-dark&quot;
              >
<<<<<<< HEAD
                <div className=&quot;flex justify-between mb-2&quot;>
                  <div className=&quot;flex items-center gap-3&quot;>
                    <span className=&quot;text-zion-cyan font-semibold&quot;>v{entry.version}</span>
                    <span className=&quot;text-sm text-gray-400&quot;>{entry.date}</span>
                  </div>
                  <Button
                    variant=&quot;ghost&quot;
                    size=&quot;sm&quot;
                    onClick={() => handleRemoveEntry(entry.id)}
                    className=&quot;text-gray-400 hover:text-red-400 p-1 h-auto&quot;
=======
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-zion-cyan font-semibold">v{_entry.version}</span>
                    <span className="text-sm text-gray-400">{_entry.date}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={_() => handleRemoveEntry(entry.id)}
                    className="text-gray-400 hover:text-red-400 p-1 h-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <Trash2 className=&quot;h-4 w-4&quot; />
                  </Button>
                </div>
<<<<<<< HEAD
                <p className=&quot;text-sm whitespace-pre-wrap&quot;>{entry.changes}</p>
              </div>
            ))}
            
            {entries.length === 0 && (
              <p className=&quot;text-center text-gray-400 py-4&quot;>No changelog entries yet</p>
=======
                <p className="text-sm whitespace-pre-wrap">{_entry.changes}</p>
              </div>
            ))}
            
            {_entries.length === 0 && (
              <p className="text-center text-gray-400 py-4">No changelog entries yet</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
},
