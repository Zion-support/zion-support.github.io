<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2 } from 'lucide-react'import { AppPlatform } from "./MetadataManager"
import React, { useState } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from 'lucide-react'
import { AppPlatform } from "./MetadataManager";
  platform: AppPlatform
ursor/fix-website-loading-errors-and-merge-6662
interface ChangelogManagerProps {
  platform: AppPlatform;
import { AppPlatform } from "./MetadataManager";
import { AppPlatform } from "./MetadataManager",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ChangelogManagerProps {
  platform: AppPlatform
}

type ChangelogEntry = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string
  version: string
  date: string
  changes: string
}
    })
  }
<<<<<<< HEAD
=======

  id: string;
  version: string;
  date: string;
  changes: string,

}
    })
  }


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id))
  }
  )
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id)),
  };
  );
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};  const handleRemoveEntry = (id: string,) => {
=======

};  const handleRemoveEntry = (id: string,) => {
    setEntries(entries.filter(entry => entry.id !== id))
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
    const { name, value } = e.target
    setNewEntry(prev => ({ ...prev, [name]: value }))
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

import { Plus, Trash2 } from 'lucide-react'import { AppPlatform } from "./MetadataManager";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

import { Plus, Trash2 } from 'lucide-react'import { AppPlatform } from "./MetadataManager";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                value = {newEntry.version,}
                onChange = {handleInputChange,}
                value={newEntry.version}
                onChange={handleInputChange}
<<<<<<< HEAD
=======

                value={newEntry.version}
                onChange={handleInputChange}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              />
              <Input
                type="date"
                name="date"
<<<<<<< HEAD
<<<<<<< HEAD
                value = {newEntry.version,}
                onChange = {handleInputChange,}
              <Input
                type="date"
                name="date"
              disabled = {!newEntry.version |!newEntry.changes,}
                value = {newEntry.date,}
                onChange = {handleInputChange,}
              />
            </div>
            <Button
              onClick = {handleAddEntry,}
              disabled = {!newEntry.version |!newEntry.changes,}
              disabled = {!newEntry.version || !newEntry.changes,}
=======

              disabled = {!newEntry.version || !newEntry.changes,}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              disabled = {!newEntry.version || !newEntry.changes,}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Plus, Trash2 } from 'lucide-react';
import { AppPlatform } from "./MetadataManager",;
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
  },;

  return (
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
ursor/fix-website-loading-errors-and-merge-6662


=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >
=======



            >
              <Plus className="mr-2 h-4 w-4" />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Add
            </Button>
          </div>
              />;
            </div>;
            <Button
              onClick = {handleAddEntry,}
              disabled = {!newEntry && newEntry.version || !newEntry && newEntry.changes,}>;
              <Plus className="mr-2 h-4 w-4" />;
              Add;
            </Button>;
          </div>;

          <Textarea
            placeholder="What's new in this version?"
            name="changes"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            value = {newEntry.changes,}
            onChange = {handleInputChange,}
            rows = {3,}
          />
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry,) => (
              <div
                key = {entry.id,}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            value={newEntry.changes}
            onChange={handleInputChange}
            rows={3}
          />
          
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry) => (
              <div 
                key={entry.id}


                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"
<<<<<<< HEAD
=======
              >
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-zion-cyan font-semibold">v{entry.version}</span>
                    <span className="text-sm text-gray-400">{entry.date}</span>
                  </div>
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
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick = {(,) => handleRemoveEntry(entry.id),}
                    onClick={() => handleRemoveEntry(entry.id)}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="text-gray-400 hover:text-red-400 p-1 h-auto"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm whitespace-pre-wrap">{entry.changes}</p>
              </div>
            ))}


            {entries && entries.length === 0 && (;
              <p className="text-center text-gray-400 py-4">No changelog entries yet</p>;
            )}
<<<<<<< HEAD
}

};

};


=======

=======
};
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
};
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


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
};
=======
};
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
