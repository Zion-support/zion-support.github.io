
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2 } from 'lucide-react'import { AppPlatform } from "./MetadataManager"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

interface ChangelogManagerProps {
=======
import { AppPlatform } from "./MetadataManager";
>>>>>>> interface ChangelogManagerProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  platform: AppPlatform
ursor/fix-website-loading-errors-and-merge-6662
interface ChangelogManagerProps {
  platform: AppPlatform;
>>>>>>> }
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { AppPlatform } from "./MetadataManager";
import { AppPlatform } from "./MetadataManager",
interface ChangelogManagerProps {
  platform: AppPlatform
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
type ChangelogEntry = {
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string
  version: string
  date: string
  changes: string
}
    })
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string,
  version: string,
  date: string,
  changes: string
},

export const ChangelogManager: React.FC<ChangelogManagerProps> = ({ platform }) => {
  const [entries, setEntries] = useState<ChangelogEntry[]>([
    {
      id: "1",
      version: "1.0.0",
      date: "2025-05-15",
      changes: "Initial release of the Zion AI Marketplace app."
    }
  ]),
  
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry "id">>({
    version: "",
    date: new Date().toISOString().split('T')[0] || new Date().toLocaleDateString('en-CA'),
    changes: ""
  }),
  
  const handleAddEntry = () => {
    if (!newEntry.version || !newEntry.changes) return,
    
    const entry: ChangelogEntry = {
      ...newEntry,
      id: Math.random().toString(36).substring(2, 9)
    },
    
    setEntries([entry, ...entries]),
    setNewEntry({
      version: "",
      date: new Date().toISOString().split('T')[0] || new Date().toLocaleDateString('en-CA'),
      changes: ""
    })
  },
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id))
  }
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id)),
  };
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> };  const handleRemoveEntry = (id: string,) => {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
};  const handleRemoveEntry = (id: string,) => {
>>>>>>>     setEntries(entries.filter(entry => entry.id !== id))
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
    const { name, value } = e.target
    setNewEntry(prev => ({ ...prev, [name]: value }))
  }
<<<<<<< HEAD

import { Plus, Trash2 } from 'lucide-react'import { AppPlatform } from "./MetadataManager";
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle>Version History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <Input
                placeholder="Version (e.g. 1.0.1)"
                name="version"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                value = {newEntry.version,}
                onChange = {handleInputChange,}
                value={newEntry.version}
                onChange={handleInputChange}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              />
              <Input
                type="date"
                name="date"
<<<<<<< HEAD
<<<<<<< HEAD

=======
                value = {newEntry.version,}
                onChange = {handleInputChange,}
>>>>>>>               />
              <Input
                type="date"
                name="date"
              disabled = {!newEntry.version |!newEntry.changes,}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                value = {newEntry.date,}
                onChange = {handleInputChange,}
              />
            </div>
            <Button
              onClick = {handleAddEntry,}
              disabled = {!newEntry.version |!newEntry.changes,}
              disabled = {!newEntry.version || !newEntry.changes,}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Plus, Trash2 } from 'lucide-react';
import { AppPlatform } from "./MetadataManager",;
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface ChangelogManagerProps {;
  platform: AppPlatform;
}
;
type ChangelogEntry = {;
  id: string,;
  version: string,;
  date: string,;
  changes: string;
},;
export const ChangelogManager: React.FC<ChangelogManagerProps> = ({ platform }) => {;
  const [entries, setEntries] = useState<ChangelogEntry[]>([;
    {;
      id: "1",;
      version: "1.0.0",;
      date: "2025-05-15",;
      changes: "Initial release of the Zion AI Marketplace app.";
    }
  ]),;
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry "id">>({;
    version: "",;
    date: new Date().toISOString().split('T')[0] || new Date().toLocaleDateString('en-CA'),;
    changes: "";
  }),;
  const handleAddEntry = () => {;
    if (!newEntry.version || !newEntry.changes) return,;
    const entry: ChangelogEntry = {;
      ...newEntry,;
      id: Math.random().toString(36).substring(2, 9);
    },;
    setEntries([entry, ...entries]),;
    setNewEntry({;
      version: "",;
      date: new Date().toISOString().split('T')[0] || new Date().toLocaleDateString('en-CA'),;
      changes: "";
    });
  },;
  const handleRemoveEntry = (id: string) => {;
    setEntries(entries.filter(entry => entry.id !== id));
  },;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
    const { name, value } = e.target,;
    setNewEntry(prev => ({ ...prev, [name]: value }));
  };
  return (;
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>Version History</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
          <div className="flex flex-col md:flex-row gap-3">;
            <div className="flex-1 grid grid-cols-2 gap-3">;
              <Input;
                placeholder="Version (e.g. 1.0.1)";
                name="version";
                value={newEntry.version}
                onChange={handleInputChange}
              />;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Input;
                type="date";
                name="date";
                value={newEntry.date}
                onChange={handleInputChange}
              />;
            </div>;
            <Button;
              onClick={handleAddEntry}
              disabled={!newEntry.version || !newEntry.changes}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>             >
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            >
>>>>>>>               <Plus className="mr-2 h-4 w-4" />
              Add
            </Button>
          </div>
<<<<<<< HEAD
              />;
            </div>;
            <Button
              onClick = {handleAddEntry,}
              disabled = {!newEntry && newEntry.version || !newEntry && newEntry.changes,}>;
              <Plus className="mr-2 h-4 w-4" />;
              Add;
            </Button>;
          </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Textarea
            placeholder="What's new in this version?"
            name="changes"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            value = {newEntry.changes,}
            onChange = {handleInputChange,}
            rows = {3,}
          />
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry,) => (
              <div
                key = {entry.id,}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            value={newEntry.changes}
            onChange={handleInputChange}
            rows={3}
          />
          
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry) => (
              <div 
                key={entry.id}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"
>>>>>>>               >
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-zion-cyan font-semibold">v{entry.version}</span>
                    <span className="text-sm text-gray-400">{entry.date}</span>
                  </div>
<<<<<<< HEAD
          />;

          <div className="border-t border-zion-purple/20 pt-4 space-y-4">;
            {entries && entries.map((entry,) => (;
              <div
                key = {entry && entry.id,}
                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark">;
                <div className="flex justify-between mb-2">;
                  <div className="flex items-center gap-3">;
                    <span className="text-zion-cyan font-semibold">v{entry && entry.version}</span>;
                    <span className="text-sm text-gray-400">{entry && entry.date}</span>;
                  </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <Button
                    variant="ghost"
                    size="sm"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    onClick = {(,) => handleRemoveEntry(entry.id),}
                    onClick={() => handleRemoveEntry(entry.id)}
                    className="text-gray-400 hover:text-red-400 p-1 h-auto"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm whitespace-pre-wrap">{entry.changes}</p>
              </div>
            ))}
            {entries.length === 0 && (
              <p className="text-center text-gray-400 py-4">No changelog entries yet</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

                    className="text-gray-400 hover:text-red-400 p-1 h-auto"
=======
<<<<<<< HEAD
                    onClick = {(,) => handleRemoveEntry(entry.id),}
>>>>>>>                     className="text-gray-400 hover:text-red-400 p-1 h-auto"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm whitespace-pre-wrap">{entry.changes}</p>
              </div>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
            ))}


            {entries && entries.length === 0 && (;
              <p className="text-center text-gray-400 py-4">No changelog entries yet</p>;
            )}
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

};
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
};


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
