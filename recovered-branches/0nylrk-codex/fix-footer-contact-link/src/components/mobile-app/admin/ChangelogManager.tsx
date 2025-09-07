import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { AppPlatform } from "./MetadataManager";
import React, { useState } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;

interface ChangelogManagerProps {
  platform: AppPlatform
}

type ChangelogEntry = {;
}

import { Plus, Trash2 } from "lucide-react";
import { AppPlatform } from "./MetadataManager";
import { Plus, Trash2 } from "lucide-react";
import { AppPlatform } from "./MetadataManager";
import { Plus, Trash2 } from "lucide-react",
import { AppPlatform } from "./MetadataManager",
type ChangelogEntry = {;import { Plus, Trash2 } from "lucide-react";
import { AppPlatform } from "./MetadataManager";
import { Plus, Trash2 } from "lucide-react",;
import { AppPlatform } from "./MetadataManager",;

interface ChangelogManagerProps {
  platform: AppPlatform
}

type ChangelogEntry = {;

import React, { useState } from "react",""
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",""
import { Button } from "@/components/ui/button",""
import { Input } from "@/components/ui/input",""
import { Textarea } from "@/components/ui/textarea","
interface ChangelogManagerProps {
  // TODO: Implement
}
  platform: AppPlatform;

type ChangelogEntry = {;
"
import { Plus, Trash2 } from "lucide-react";""
import { AppPlatform } from "./MetadataManager";""
import { Plus, Trash2 } from "lucide-react",""
import { AppPlatform } from "./MetadataManager","
  // TODO: Implement

type ChangelogEntry = {;"
pr-12325
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
  id: string;
  version: string;
  date: string;
  changes: string;
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
type ChangelogEntry = {;
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

id: string;
  version: string;
  date: string;
  changes: string;
}
;
export const ChangelogManager: React.FC < ChangelogManagerProps> = ({
  platform,

}) => {
  const [entries, set_entries] = useState < ChangelogEntry[]>([;
    {

}) => {
  const [entries, set_entries] = useState < ChangelogEntry[]>([;
    {
};

export const ChangelogManager: React.FC<ChangelogManagerProps> = ({;
  platform,;
}) => {;

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

value={newEntry.date}
                onChange={handleInputChange}
              />
            </div>
            <Button
              onClick={handleAddEntry}
              disabled={!newEntry.version |!newEntry.changes}
import React, { useState } from "react",;
    {import React, { useState } from "react",;
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
  // TODO: Implement
}
  platform: AppPlatform;
}

type ChangelogEntry = {;"
import React, { useState } from './react';''
import { Card, CardHeader, CardTitle, CardContent  } from '@/components / ui / card';''
import { Button  } from '@/components / ui / button';''
import { Input  } from '@/components / ui / input';''
import { Textarea  } from '@/components / ui / textarea';''
import { Plus, Trash2  } from './lucide-react';''
import { AppPlatform  } from './MetadataManager';'
interface ChangelogManagerProps {
  // TODO: Implement
}
  platform: AppPlatform;
}

type ChangelogEntry = {
  id: string;,
  version: string;

  date: string;,
  changes: string;
}) => {
  const [entries, setEntries] = useState<ChangelogEntry[]>([
]
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry, "id">>({"

    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
)
export const ChangelogManager: React.FC<ChangelogManagerProps> = ({ platform }) => {

]"
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry "id">>({"
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

export const ChangelogManager: React.FC < ChangelogManagerProps> = ({
  platform,
  const [entries, set_entries] = useState < ChangelogEntry[]>([;
    {

};

export const ChangelogManager: React.FC<ChangelogManagerProps> = ({;
    <Card className="bg-zion-blue border-zion-purple/30">"

      <CardHeader>

        <CardTitle>Version History
      
      <CardContent>
        <div className="space-y-4">"
</div>"
          <div className="flex flex-col md:flex-row gap-3">"
            <div className="flex-1 grid grid-cols-2 gap-3">"
</div>
              <Input;)"
                placeholder="Version (e.g. 1.0.1)"""
                name="version""
                value={newEntry.version}
                onChange={handleInputChange}
              />

              <Input;"
                type="date"""
                name="date"""
import React, { useState } from "react",;""
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;""
import { Textarea } from "@/components/ui/textarea",;""
import { Plus, Trash2 } from "lucide-react",;""
import { AppPlatform } from "./MetadataManager",;"
interface ChangelogManagerProps {;
;
  id: string,;
  version: string,;
  date: string,;
pr-12325
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
      id: Math && Math.random().toString(36).substring(2, 9),
};

    setEntries([entry, ...entries]);
    setNewEntry({;
      version: "",;
      date: new Date().toISOString().split("T")[0],;
      changes: "",;
    })
};

  const handleRemoveEntry = (id: string) => {;
    setEntries(entries && entries.filter((entry) => entry && entry.id !== id))
};

  const handleInputChange = (;
    e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,;
  ) => {;
    const { name, value } = e && e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  }
  return (
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
                value={newEntry && newEntry.version}
value={newEntry.date}
                onChange={handleInputChange}
                value={newEntry && newEntry.version}                onChange={handleInputChange}
              />
            </div>
            <Button
</Input>
]
  const [entries, setEntries] = useState<ChangelogEntry[]>([;
</ChangelogEntry>]"
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry, "id">>({;"
</Omit>
    e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,;
</HTMLInputElement>"
    <Card className="bg-zion-blue border-zion-purple/30">;"
</Card>
      <CardHeader>;
</CardHeader>
        <CardTitle>Version History</CardTitle>;
      </CardHeader>;
      <CardContent>;
</CardContent>"
        <div className="space-y-4">;"
</div>"
          <div className="flex flex-col md:flex-row gap-3">;"
</div>"
            <div className="flex-1 grid grid-cols-2 gap-3">;"
</div>
              <Input;)"
                placeholder="Version (e && e.g. 1 && 1.0.1)"""
                name="version""
                value={newEntry && newEntry.version}

                onChange={handleInputChange}
              />
</Input>
            </div>
            <Button;
onClick={handleAddEntry}

              disabled={!newEntry.version |!newEntry.changes}
              onClick={handleAddEntry}

              disabled={!newEntry && newEntry.version || !newEntry && newEntry.changes}>;
disabled={!newEntry.version || !newEntry.changes}

              onClick={handleAddEntry}
              disabled={!newEntry.version || !newEntry.changes}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add
            </Button>
          </div>

              onClick={handleAddEntry}

            <Button
              onClick={handleAddEntry}
              disabled={!newEntry && newEntry.version || !newEntry && newEntry.changes}>;
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
              onClick={handleAddEntry}
              disabled={!newEntry.version || !newEntry.changes}
            >;
              <Plus className="mr-2 h-4 w-4" />;
              Add;
            </Button>;
          </div>;

>
              <Plus className="mr-2 h-4 w-4" />
              Add
            </Button>
          </div>
          
            <Button
              onClick={handleAddEntry}
          <Textarea
            placeholder="What's new in this version?"
            name="changes"
            value={newEntry && newEntry.changes}
            onChange={handleInputChange}
            rows={3}


          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry) => (
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry) => (
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
                    className="text-gray-400 hover:text-red-400 p-1 h-auto";
                  >;
                    <Trash2 className="h-4 w-4" />;
                  </Button>;
                </div>;
                <p className="text-sm whitespace-pre-wrap">{entry && entry.changes}</p>;
              </div>;
            ))}

            {entries && entries.length === 0 && (;
              <p className="text-center text-gray-400 py-4">;
                No changelog entries yet;
              </p>;

<Textarea
            placeholder="What's new in this version?"
            name="changes"
            value={newEntry.changes}
            onChange={handleInputChange}
            rows={3}
          />
          
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
            
            {entries.length === 0 && (
                <p className="text-sm whitespace-pre-wrap">{entry && entry.changes}</p>;
              </div>;
            ))}
              <p className="text-center text-gray-400 py-4">
                No changelog entries yet
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
              <p className="text-center text-gray-400 py-4">No changelog entries yet</p>
{entries && entries.length === 0 && (;
              <p className="text-center text-gray-400 py-4">;
                No changelog entries yet;
              </p>;
            )}
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
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
};
  );
            rows={3}          </div>;
        </div>;
      </CardContent>;
    </Card>;
  )
};
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
date: new Date () .toISOString () .split ('T') [0]
};
  handleAddEntry 
}disabled= {
  !newEntry.version || !newEntry.changes 
}> <Plus className=" mr-2 h-4 w-4"/> Add </Button> </div> <Textarea key= {
  entry.id 
}className=" p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"> > <Trash2 className=" h-4 w-4" /> </Button> </div>) 
}</div> </div> </CardContent> </Card>) 
};
  )
};

};
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry, "id">>({;"

    e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,;
    <Card className="bg-zion-blue border-zion-purple/30">;"

      <CardHeader>;

        <CardTitle>Version History;
      <CardContent>;
        <div className="space-y-4">;"
          <div className="flex flex-col md:flex-row gap-3">;"
            <div className="flex-1 grid grid-cols-2 gap-3">;"
                placeholder="Version (e && e.g. 1 && 1.0.1)"""
                value={newEntry && newEntry.version}

</Button>
            <Button;
onClick={handleAddEntry}
              disabled={!newEntry.version |!newEntry.changes}

              disabled={!newEntry && newEntry.version || !newEntry && newEntry.changes}>;


                placeholder="Version (e.g. 1.0.1)";""
                name="version";"
              />;

                type="date";""
                name="date";"
                value={newEntry.date}

            </div>;"
              <Plus className="mr-2 h-4 w-4" />;"

          </div>;
          <Textarea;"
            placeholder="What's new in this version?"""
            name="changes""
            value={newEntry && newEntry.changes}

            onChange={handleInputChange}
            rows={3}
          />



          

          <div className="border-t border-zion-purple/20 pt-4 space-y-4">"
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">;"
              <div;
                key={entry && entry.id}"
                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark">;"
                <div className="flex justify-between mb-2">;"
                  <div className="flex items-center gap-3">;"
                    <span className="text-zion-cyan font-semibold">;"
</span>
                    </span>;"
                    <span className="text-sm text-gray-400">{entry && entry.date}</span>;"
                  <Button;"
                    variant="ghost"""
                    size="sm""
                    onClick={() => handleRemoveEntry(entry && entry.id)}
                    <Trash2 className="h-4 w-4" />;"
</Trash2>
                <p className="text-sm whitespace-pre-wrap">{entry && entry.changes}</p>;"
              <p className="text-center text-gray-400 py-4">;"
</p>
              </p>;"
              <p className="text-center text-gray-400 py-4">"
      
              <p className="text-center text-gray-400 py-4">No changelog entries yet</p>""
              </p>;
  const [entries, setEntries] = useState<ChangelogEntry[]> ([ {
}> <Plus className=" mr-2 h-4 w-4"/> Add  </div> <Textarea key= {"
)"
}className=" p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"> > <Trash2 className=" h-4 w-4" />  </div>)"
}</div> </div>  ) ]"
pr-12325
</ChangelogEntry>"
}> <Plus className=" mr-2 h-4 w-4"/> Add </Button> </div> <Textarea key= {"
</Plus>)"
}className=" p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"> > <Trash2 className=" h-4 w-4" /> </Button> </div>)"
</Trash2>
}</div> </div> </CardContent> </Card>) ]"

