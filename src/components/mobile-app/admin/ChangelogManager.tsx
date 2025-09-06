
<<<<<<< HEAD
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2 } from 'lucide-react'import { AppPlatform } from "./MetadataManager"
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import React, { useState } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from 'lucide-react'
<<<<<<< HEAD
import { AppPlatform } from "./MetadataManager";
=======
<<<<<<< HEAD
import { AppPlatform } from "./MetadataManager";
=======
import { AppPlatform } from "./MetadataManager",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
interface ChangelogManagerProps {
  platform: AppPlatform;
}
type ChangelogEntry = {
  id: string
  version: string
  date: string
  changes: string
}
    });
  }
<<<<<<< HEAD
  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id))
  }
  )
=======


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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id))
  }
  )
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id)),
  };
  );
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
};  const handleRemoveEntry = (id: string,) => {
    setEntries(entries.filter(entry => entry.id !== id))
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
    const { name, value } = e.target
    setNewEntry(prev => ({ ...prev, [name]: value }))
  }
<<<<<<< HEAD
=======

import { Plus, Trash2 } from 'lucide-react'import { AppPlatform } from "./MetadataManager";
=======
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

                value={newEntry.version}
                onChange={handleInputChange}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              />
              <Input
                type="date"
                name="date"
<<<<<<< HEAD
                value = {newEntry.date,}
                onChange = {handleInputChange,}
              />
            </div>
            <Button
              onClick = {handleAddEntry,}
<<<<<<< HEAD
              disabled = {!newEntry.version |!newEntry.changes,}
=======
              disabled = {!newEntry.version || !newEntry.changes,}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { useState } from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Plus, Trash2 } from 'lucide-react';
import { AppPlatform } from "./MetadataManager",;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ChangelogManagerProps {;
  platform: AppPlatform;
}

type ChangelogEntry = {;
  id: string;
  version: string;
  date: string;
  changes: string,;
};



    });
  };

  const handleRemoveEntry = (id: string) => {;
    setEntries(entries && entries.filter(entry => entry && entry.id !== id)),;
  };

  );
};  const handleRemoveEntry = (id: string,) => {;
    setEntries(entries && entries.filter(entry => entry && entry.id !== id));
  },;

  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {;
    const { name, value } = e && e.target,;
    setNewEntry(prev => ({ ...prev, [name]: value }));
  },;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>Version History</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
          <div className="flex flex-col md:flex-row gap-3">;
            <div className="flex-1 grid grid-cols-2 gap-3">;
              <Input
                placeholder="Version (e && e.g. 1 && 1.0.1)"
                name="version"
                value = {newEntry && newEntry.version,}
                onChange = {handleInputChange,}
              />;
<<<<<<< HEAD
              <Input
                type="date"
                name="date"
                value = {newEntry && newEntry.date,}
                onChange = {handleInputChange,}
              />
            </div>
            <Button
              onClick = {handleAddEntry,}
              disabled = {!newEntry.version |!newEntry.changes,}
=======

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            >
              <Plus className="mr-2 h-4 w-4" />
              Add
            </Button>
          </div>
          <Textarea
            placeholder="What's new in this version?"
            name="changes"
            value = {newEntry && newEntry.changes,}
            onChange = {handleInputChange,}
            rows = {3,}
          />
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
<<<<<<< HEAD
            {entries.map((entry,) => (
              <div
                key = {entry.id,}
=======
            {entries.map((entry) => (
              <div 
                key={entry.id}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"
              >
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-zion-cyan font-semibold">v{entry.version}</span>
                    <span className="text-sm text-gray-400">{entry.date}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
<<<<<<< HEAD
                    onClick = {(,) => handleRemoveEntry(entry && entry.id),}
                    className="text-gray-400 hover:text-red-400 p-1 h-auto";
                  >;
                    <Trash2 className="h-4 w-4" />;
                  </Button>;
                </div>;
                <p className="text-sm whitespace-pre-wrap">{entry && entry.changes}</p>;
              </div>;
=======


                    onClick={() => handleRemoveEntry(entry.id)}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    className="text-gray-400 hover:text-red-400 p-1 h-auto"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm whitespace-pre-wrap">{entry.changes}</p>
              </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            ))}
            {entries.length === 0 && (
              <p className="text-center text-gray-400 py-4">No changelog entries yet</p>
            )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          </div>
        </div>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
}

=======
<<<<<<< HEAD
}

=======
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const handleRemoveEntry = (id: string) =>: any {
    set_entries (entries.filter (entry => entry.id !== id)),
  }
  );
}  const handleRemoveEntry = (id: string, ) =>: any {
    set_entries (entries.filter (entry => entry.id !== id));
  },
  const handleInputChange = (e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>, ) =>: any {
    const { name, value } = e.target,
    setNewEntry (prev => ({ ...prev, [name]: value }));
  },
  return (
    <Card className="bg - zion - blue border - zion - purple / 30">;
      <CardHeader>;
        <CardTitle > Version History</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="space - y-4">;
          <div className="flex flex - col md:flex - row gap - 3">;
            <div className="flex - 1 grid grid - cols - 2 gap - 3">;
              <Input;
                placeholder="Version (e.g. 1.0.1)";
                name="version";
                value = {new_entry.version, }
                on_change = {handleInputChange, }
              />;
              <Input;
                type="date";
                name="date";
                value = {new_entry.date, }
                on_change = {handleInputChange, }
              />;
            </div>;
            <Button;
              on_click = {handleAddEntry, }
              disabled = {!new_entry.version || !new_entry.changes, }
            >;
              <Plus className="mr - 2 h - 4 w - 4" />;
              Add;
            </Button>;
          </div>;
          <Textarea;
            placeholder="What's new in this version?";
            name="changes";
            value = {new_entry.changes, }
            on_change = {handleInputChange, }
            rows = {3, }
          />;
          <div className="border - t border - zion - purple / 20 pt - 4 space - y-4">;
            {entries.map ((entry, ) => (
              <div;
                key = {entry.id, }
                className="p - 3 rounded border border - zion - purple / 20 bg - zion - blue - dark";
              >;
                <div className="flex justify - between mb - 2">;
                  <div className="flex items - center gap - 3">;
                    <span className="text - zion - cyan font - semibold">v{entry.version}</span>;
                    <span className="text - sm text - gray - 400">{entry.date}</span>;
                  </div>;
                  <Button;
                    variant="ghost";
                    size="sm";
                    on_click = {(, ) => handleRemoveEntry (entry.id), }
                    className="text - gray - 400 hover:text - red - 400 p - 1 h - auto";
                  >;
                    <Trash2 className="h - 4 w - 4" />;
                  </Button>;
                </div>;
                <p className="text - sm whitespace - pre - wrap">{entry.changes}</p>;
              </div>))}
            {entries.length === 0 && (
              <p className="text - center text - gray - 400 py - 4">No changelog entries yet</p>)}
          </div>;
        </div>;
      </CardContent>;
    </Card>);
},
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
};


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
