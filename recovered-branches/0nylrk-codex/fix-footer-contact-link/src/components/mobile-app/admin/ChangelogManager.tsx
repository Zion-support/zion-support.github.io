<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

=======
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { AppPlatform } from "./MetadataManager";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React, { useState } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

interface ChangelogManagerProps {
  platform: AppPlatform
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}

<<<<<<< HEAD
type ChangelogEntry = {

=======
import { Plus, Trash2 } from "lucide-react";
import { AppPlatform } from "./MetadataManager";

=======
import { Plus, Trash2 } from "lucide-react";
import { AppPlatform } from "./MetadataManager";
import { Plus, Trash2 } from "lucide-react",
import { AppPlatform } from "./MetadataManager",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface ChangelogManagerProps {
  platform: AppPlatform
}

type ChangelogEntry = {
<<<<<<< HEAD
id: string;
=======
  id: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  version: string;
  date: string;
  changes: string;
}
export const ChangelogManager: React.FC<ChangelogManagerProps> = ({
  platform
}) => {
  const [entries, setEntries] = useState<ChangelogEntry[]>([
    {
      id: "1"
      version: "1.0.0"
      date: "2025-05-15"
      changes: "Initial release of the Zion AI Marketplace app."
    }
  ]);
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry, "id">>({
    version: ""
    date: new Date().toISOString().split("T")[0]
    changes: ""
  });
  const handleAddEntry = () => {
    if (!newEntry.version |!newEntry.changes) return;
    const entry: ChangelogEntry = {
      ...newEntry
      id: Math.random().toString(36).substring(2, 9)
    }
    setEntries([entry, ...entries]);
    setNewEntry({
      version: ""
      date: new Date().toISOString().split("T")[0]
      changes: ""
    });
  }
  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  }
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      changes: "Initial release of the Zion AI Marketplace app.",
    },;
  ]);

  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry, "id">>({
      changes: "Initial release of the Zion AI Marketplace app."
    }
  ]),
  
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry "id">>({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    version: "",
    date: new Date().toISOString().split('T')[0],
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
      date: new Date().toISOString().split('T')[0],
      changes: ""
    })
  },
  
  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id))
  },
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target,
    setNewEntry(prev => ({ ...prev, [name]: value }))
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
type ChangelogEntry = {;
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx
import React, { useState } from './react';
import { Card, CardHeader, CardTitle, CardContent  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { Textarea  } from '@/components / ui / textarea';
import { Plus, Trash2  } from './lucide-react';
import { AppPlatform  } from './MetadataManager';
interface ChangelogManagerProps {
  platform: AppPlatform;
}
type ChangelogEntry = {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx

========
  id: string;
  version: string;
  date: string;
  changes: string;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx
}
;
export const ChangelogManager: React.FC < ChangelogManagerProps> = ({
  platform,
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx

}) => {
  const [entries, set_entries] = useState < ChangelogEntry[]>([;
    {

========
}) => {
  const [entries, set_entries] = useState < ChangelogEntry[]>([;
    {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx
};
export const ChangelogManager: React.FC<ChangelogManagerProps> = ({;
  platform,;
}) => {;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
              />
              <Input
                type="date"
                name="date"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                value={newEntry.date}
                onChange={handleInputChange}
              />
            </div>
            <Button
              onClick={handleAddEntry}
              disabled={!newEntry.version |!newEntry.changes}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Plus, Trash2 } from "lucide-react",;
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
      version: "1 && 1.0.0",;
      date: "2025-05-15",;
      changes: "Initial release of the Zion AI Marketplace app.",;
    },;
  ]);
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry, "id">>({;
    version: "",;
    date: new Date().toISOString().split("T")[0],;
    changes: "",;
  });
  const handleAddEntry = () => {;
    if (!newEntry && newEntry.version || !newEntry && newEntry.changes) return;
    const entry: ChangelogEntry = {;
      ...newEntry,;
      id: Math && Math.random().toString(36).substring(2, 9),;
    };
    setEntries([entry, ...entries]);
    setNewEntry({;
      version: "",;
      date: new Date().toISOString().split("T")[0],;
      changes: "",;
    });
  };
  const handleRemoveEntry = (id: string) => {;
    setEntries(entries && entries.filter((entry) => entry && entry.id !== id));
  };
  const handleInputChange = (;
    e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,;
  ) => {;
    const { name, value } = e && e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  }
  return (
=======

import React, { useState } from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Plus, Trash2 } from "lucide-react",;
import { AppPlatform } from "./MetadataManager",;
;
interface ChangelogManagerProps {;
  platform:AppPlatform;
}
;
type ChangelogEntry = {;
  id:string,;
  version:string,;
  date:string,;
  changes:string;
},;
;
export const ChangelogManager:React.FC<ChangelogManagerProps> = ({ platform }) => {;
  const [entries, setEntries] = useState<ChangelogEntry[]>([;
    {;
      id:"1",;
      version:"1.0.0",;
      date:"2025-05-15",;
      changes:"Initial release of the Zion AI Marketplace app.";
    }
  ]),;
  ;
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry "id">>({;
    version:"",;
    date:new Date().toISOString().split('T')[0],;
    changes:"";
  }),;
  ;
  const handleAddEntry = () => {;
    if (!newEntry.version || !newEntry.changes) return,;
    ;
    const entry:ChangelogEntry = {;
      ...newEntry,;
      id:Math.random().toString(36).substring(2, 9);
    },;
    ;
    setEntries([entry, ...entries]),;
    setNewEntry({;
      version:"",;
      date:new Date().toISOString().split('T')[0],;
      changes:"";
    }),;
  },;
  ;
  const handleRemoveEntry = (id:string) => {;
    setEntries(entries.filter(entry => entry.id !== id));
  },;
  ;
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
    const { name, value } = e.target,;
    setNewEntry(prev => ({ ...prev, [name]:value })),;
  },;
  ;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>Version History</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
          <div className="flex flex-col md:flex-row gap-3">;
            <div className="flex-1 grid grid-cols-2 gap-3">;
<<<<<<< HEAD
              <Input
                placeholder="Version (e && e.g. 1 && 1.0.1)"
                name="version"
                value={newEntry && newEntry.version}
                onChange={handleInputChange}
              />;
              <Input
                type="date"
                name="date"
                value={newEntry && newEntry.date}
                onChange={handleInputChange}
              />;
            </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx

            <Button;
<<<<<<< HEAD

<<<<<<< HEAD
=======
value={newEntry.date}
                onChange={handleInputChange}
              />
            </div>
            <Button
onClick={handleAddEntry}
              disabled={!newEntry.version |!newEntry.changes}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              onClick={handleAddEntry}
              disabled={!newEntry.version || !newEntry.changes}

=======
              onClick={handleAddEntry}
              disabled={!newEntry.version || !newEntry.changes}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            >
              <Plus className="mr-2 h-4 w-4" />
              Add
            </Button>
          </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              onClick={handleAddEntry}

========
            <Button
              onClick={handleAddEntry}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx
              disabled={!newEntry && newEntry.version || !newEntry && newEntry.changes}>;
=======
              <Input;
                placeholder="Version (e.g. 1.0.1)";
                name="version";
                value={newEntry.version}
                onChange={handleInputChange}
              />;
              <Input;
                type="date";
                name="date";
                value={newEntry.date}
                onChange={handleInputChange}
              />;
            </div>;
            <Button ;
              onClick={handleAddEntry}
              disabled={!newEntry.version || !newEntry.changes}
            >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <Plus className="mr-2 h-4 w-4" />;
              Add;
            </Button>;
          </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx


=======

          

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx
          <Textarea
            placeholder="What's new in this version?"
            name="changes"
            value={newEntry && newEntry.changes}
            onChange={handleInputChange}
            rows={3}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx
<<<<<<< HEAD
          />

=======


          


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry) => (
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx
          />;
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">;
            {entries && entries.map((entry) => (;
              <div
                key={entry && entry.id}
                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark">;
                <div className="flex justify-between mb-2">;
                  <div className="flex items-center gap-3">;
                    <span className="text-zion-cyan font-semibold">;
                      v{entry && entry.version}
                    </span>;
                    <span className="text-sm text-gray-400">{entry && entry.date}</span>;
                  </div>;
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveEntry(entry && entry.id)}
=======
          ;
          <Textarea;
            placeholder="What's new in this version?";
            name="changes";
            value={newEntry.changes}
            onChange={handleInputChange}
            rows={3}
          />;
          ;
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">;
            {entries.map((entry) => (;
              <div ;
                key={entry.id}
                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark";
              >;
                <div className="flex justify-between mb-2">;
                  <div className="flex items-center gap-3">;
                    <span className="text-zion-cyan font-semibold">v{entry.version}</span>;
                    <span className="text-sm text-gray-400">{entry.date}</span>;
                  </div>;
                  <Button;
                    variant="ghost";
                    size="sm";
                    onClick={() => handleRemoveEntry(entry.id)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    className="text-gray-400 hover:text-red-400 p-1 h-auto";
                  >;
                    <Trash2 className="h-4 w-4" />;
                  </Button>;
                </div>;
<<<<<<< HEAD
                <p className="text-sm whitespace-pre-wrap">{entry && entry.changes}</p>;
              </div>;
            ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx
<<<<<<< HEAD

              <p className="text-center text-gray-400 py-4">
=======
=======
          
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Textarea
            placeholder="What's new in this version?"
            name="changes"
            value={newEntry.changes}
            onChange={handleInputChange}
            rows={3}
          />
<<<<<<< HEAD

=======
          
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry) => (
              <div 
                key={entry.id}
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
                    onClick={() => handleRemoveEntry(entry.id)}
                    className="text-gray-400 hover:text-red-400 p-1 h-auto"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm whitespace-pre-wrap">{entry.changes}</p>
              </div>
            ))}
<<<<<<< HEAD
{entries.length === 0 && (
<p className="text-center text-gray-400 py-4">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
            {entries.length === 0 && (
              <p className="text-center text-gray-400 py-4">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                No changelog entries yet
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
<<<<<<< HEAD

<<<<<<< HEAD
              <p className="text-center text-gray-400 py-4">No changelog entries yet</p>
=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx
            {entries && entries.length === 0 && (;
              <p className="text-center text-gray-400 py-4">;
                No changelog entries yet;
              </p>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
                <p className="text-sm whitespace-pre-wrap">{entry.changes}</p>;
              </div>;
            ))}
            ;
            {entries.length === 0 && (;
              <p className="text-center text-gray-400 py-4">No changelog entries yet</p>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx
=======
  );
}
=======
  );
}

            
            {entries.length === 0 && (
);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <p className="text-center text-gray-400 py-4">No changelog entries yet</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            )}
          </div>;
        </div>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<< HEAD
<<<<<<< HEAD

};

=======
}
      id: "1",
      version: "1.0.0",
      date: "2025 - 05 - 15",
      changes: "Initial release of the Zion AI Marketplace app.",
    },
  ]);
;
  const [new_entry, setNewEntry] = useState < Omit < ChangelogEntry, "id">>({
    version: "",
    date: new Date ().toISOString ().split ("T")[0],
    changes: "",
  });
;
  const handleAddEntry = () =>: any {
    // Check condition
if (return) {
  $2
}
    const entry: ChangelogEntry = {
      ...new_entry,
      id: Math.random ().to_string (36).substring (2, 9),
    }
;
    set_entries ([entry, ...entries]);
    setNewEntry ({
      version: "",
      date: new Date ().toISOString ().split ("T")[0],
      changes: "",
    });
  }
;
  const handleRemoveEntry = (id: string) =>: any {
    set_entries (entries.filter ((entry) => entry.id !== id));
  }
;
  const handleInputChange = (
    e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>,
  ) =>: any {
    const { name, value } = e.target;
    setNewEntry ((prev) => ({ ...prev, [name]: value }));
  }
;
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
                value={new_entry.version}
                on_change={handleInputChange}
              />;
              <Input;
                type="date";
                name="date";
                value={new_entry.date}
                on_change={handleInputChange}
              />;
            </div>;
            <Button;
              on_click={handleAddEntry}
              disabled={!new_entry.version || !new_entry.changes}
            >;
              <Plus className="mr - 2 h - 4 w - 4" />;
              Add;
            </Button>;
          </div>;
          <Textarea;
            placeholder="What's new in this version?";
            name="changes";
            value={new_entry.changes}
            on_change={handleInputChange}
            rows={3}
          />;
          <div className="border - t border - zion - purple / 20 pt - 4 space - y-4">;
            {entries.map ((entry) => (
              <div;
                key={entry.id}
                className="p - 3 rounded border border - zion - purple / 20 bg - zion - blue - dark";
              >;
                <div className="flex justify - between mb - 2">;
                  <div className="flex items - center gap - 3">;
                    <span className="text - zion - cyan font - semibold">;
                      v{entry.version}
                    </span>;
                    <span className="text - sm text - gray - 400">{entry.date}</span>;
                  </div>;
                  <Button;
                    variant="ghost";
                    size="sm";
                    on_click={() => handleRemoveEntry (entry.id)}
                    className="text - gray - 400 hover:text - red - 400 p - 1 h - auto";
                  >;
                    <Trash2 className="h - 4 w - 4" />;
                  </Button>;
                </div>;
                <p className="text - sm whitespace - pre - wrap">{entry.changes}</p>;
              </div>))}
            {entries.length === 0 && (
              <p className="text - center text - gray - 400 py - 4">;
                No changelog entries yet;
              </p>)}
          </div>;
        </div>;
      </CardContent>;
    </Card>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;
},; interface ChangelogManagerProps {
  platform: AppPlatform 
}type ChangelogEntry = {
  id: string;
version: string;
date: string;
changes: string 
};
platform 
}) => {
  const [entries, setEntries] = useState<ChangelogEntry[]> ([ {
  const handleAddEntry = () => {
  if (!newEntry.version || !newEntry.changes) return;
const entry: ChangelogEntry = {
  ...newEntry;
id: Math.random () .toString (36) .substring (2, 9) 
};
setEntries ([entry, ...entries]);
setNewEntry ({
  version: "";
date: new Date () .toISOString () .split ('T') [0];
};
  handleAddEntry 
}disabled= {
  !newEntry.version || !newEntry.changes 
}> <Plus className=" mr-2 h-4 w-4"/> Add </Button> </div> <Textarea key= {
  entry.id 
}className=" p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"> > <Trash2 className=" h-4 w-4" /> </Button> </div>) 
}</div> </div> </CardContent> </Card>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/admin/ChangelogManager.tsx
=======
  );

};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
