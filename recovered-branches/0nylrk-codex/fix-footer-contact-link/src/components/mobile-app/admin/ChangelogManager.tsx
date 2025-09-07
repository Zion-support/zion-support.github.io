<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { AppPlatform } from "./MetadataManager";

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from "react",

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
<<<<<<< HEAD

import { AppPlatform } from "./MetadataManager",

interface ChangelogManagerProps {
  platform: AppPlatform

}

type ChangelogEntry = {;
=======
=======
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { AppPlatform } from "./MetadataManager";

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import React, { useState } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
<<<<<<< HEAD
import { Plus, Trash2 } from "lucide-react";
import { AppPlatform } from "./MetadataManager";
interface ChangelogManagerProps {
  platform: AppPlatform}

type ChangelogEntry = $2;
  version: string,
  date: string,
  changes: string},

export const ChangelogManager: React.FC<ChangelogManagerProps> = ({ platform }) => {
  const [entries, setEntries] = useState<ChangelogEntry[]>([
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { AppPlatform } from "./MetadataManager",

interface ChangelogManagerProps {
  platform: AppPlatform
<<<<<<< HEAD

=======
<<<<<<< HEAD
}

import { Plus, Trash2 } from "lucide-react";
import { AppPlatform } from "./MetadataManager";

import { Plus, Trash2 } from "lucide-react";
import { AppPlatform } from "./MetadataManager";
import { Plus, Trash2 } from "lucide-react",
import { AppPlatform } from "./MetadataManager",
interface ChangelogManagerProps {
  platform: AppPlatform
}

type ChangelogEntry = {
  id: string;
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
type ChangelogEntry = {;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from './react';'
import { Card, CardHeader, CardTitle, CardContent  } from '@/components / ui / card';'
import { Button  } from '@/components / ui / button';'
import { Input  } from '@/components / ui / input';'
import { Textarea  } from '@/components / ui / textarea';'
import { Plus, Trash2  } from './lucide-react';'
import { AppPlatform  } from './MetadataManager';
interface ChangelogManagerProps {}
  platform: AppPlatform;
}
type ChangelogEntry = {}
  id: string;
  version: string;
  date: string;
  changes: string;

<<<<<<< HEAD
=======
}
;
export const ChangelogManager: React.FC < ChangelogManagerProps> = ({}
  platform,
;

};

export const ChangelogManager: React.FC<ChangelogManagerProps> = ({;
  platform,;
}) => {;

  id: string,
  version: string,
  date: string,

    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle>Version History</CardTitle>
      </CardHeader>

                name="version"
                value={newEntry.version}
                onChange={handleInputChange}
              />

                value={newEntry.date}
                onChange={handleInputChange}
              />
            </div>
            <Button
              onClick={handleAddEntry}
              disabled={!newEntry.version |!newEntry.changes}

import React, { useState } from "react",;

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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
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

<<<<<<< HEAD
                value={newEntry.date}
                onChange={handleInputChange}
              />
            </div>
            <Button
              onClick={handleAddEntry}
              disabled={!newEntry.version |!newEntry.changes}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Plus, Trash2 } from "lucide-react",;
import { AppPlatform } from "./MetadataManager",;
interface ChangelogManagerProps {;
  platform: AppPlatform;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
;
export const ChangelogManager: React.FC < ChangelogManagerProps> = ({}
  platform,
;

};

export const ChangelogManager: React.FC<ChangelogManagerProps> = ({;
  platform,;
}) => {;

  id: string,
  version: string,
  date: string,

    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle>Version History</CardTitle>
      </CardHeader>

                name="version"
                value={newEntry.version}
                onChange={handleInputChange}
              />

                value={newEntry.date}
                onChange={handleInputChange}
              />
            </div>
            <Button
              onClick={handleAddEntry}
              disabled={!newEntry.version |!newEntry.changes}

import React, { useState } from "react",;

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;

interface ChangelogManagerProps {
  platform: AppPlatform
}

type ChangelogEntry = {;
<<<<<<< HEAD
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

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>Version History</CardTitle>;
      </CardHeader>;
      <CardContent>;"
        <div className="space-y-4">;"
          <div className="flex flex-col md:flex-row gap-3">;"
            <div className="flex-1 grid grid-cols-2 gap-3">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                onChange={handleInputChange}

              />
            </div>
            <Button;
onClick={handleAddEntry}
              disabled={!newEntry.version |!newEntry.changes}
              onClick={handleAddEntry}

              onClick={handleAddEntry}

            <Button;
              onClick={handleAddEntry}
              disabled={!newEntry && newEntry.version || !newEntry && newEntry.changes}>;
              <Input;"
                placeholder="Version (e.g. 1.0.1)";"
<<<<<<< HEAD
                name="version";
                value={newEntry.version}
                onChange={handleInputChange}
              />;
              <Input;"
                type="date";"
                name="date";
                value={newEntry.date}
                onChange={handleInputChange}
              />;
            </div>;
              onClick={handleAddEntry}
              disabled={!newEntry.version || !newEntry.changes}

=======
=======
value={newEntry.date}
                onChange={handleInputChange}
              />
            </div>
            <Button
onClick={handleAddEntry}
              disabled={!newEntry.version |!newEntry.changes}
              onClick={handleAddEntry}
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                name="version";
                value={newEntry.version}
                onChange={handleInputChange}
              />;
<<<<<<< HEAD
              <Input;"
                type="date";"
=======
              <Input;
                type="date";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                name="date";
                value={newEntry.date}
                onChange={handleInputChange}
              />;
            </div>;
<<<<<<< HEAD
              onClick={handleAddEntry}
              disabled={!newEntry.version || !newEntry.changes}

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Button;
              onClick={handleAddEntry}

            name="changes"
            value={newEntry && newEntry.changes}
            onChange={handleInputChange}

<<<<<<< HEAD
};
};
export const "ChangelogManager": React.FC<ChangelogManagerProps> = ({
  }
  platform}) => {
  }
>>>>>>> merged-prs-20250907-203621
    {
      id: "1"
      version: "1.0.0"
      date: "2025-05-15"
      changes: "Initial release of the Zion AI Marketplace app."
    }
<<<<<<< HEAD
  ]),
  
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry, "id">>({
    version: ""
    date: new Date().toISOString().split("T")[0]
    changes: ""
  });
  const handleAddEntry = () => {
    if (!newEntry.version |!newEntry.changes) return;
    const entry: ChangelogEntry = {
=======
    "version": "","
    "date": new Date().toISOString().split("T")[0],"
    "changes": ""});"
    }
    if (!newEntry.version || !newEntry.changes) return;
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
  }
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
=======
  };
    "e": React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
>>>>>>> merged-prs-20250907-203621
  ) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
<<<<<<< HEAD
  }
    version: "",
    date: new Date().toISOString().split('T')[0],
    changes: ""
  }),
  
  const handleAddEntry = $2;
    const entry: ChangelogEntry = $2;
      id: Math.random().toString(36).substring(2, 9)
    },
    
    setEntries($2);
    setNewEntry({
      version: "",
      date: new Date().toISOString().split('T')[0],
      changes: ""
    })
  },
  
  const handleRemoveEntry = $2;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target,
    setNewEntry(prev => ({ ...prev, [name]: value }))
  },
  
  return (
    <Card className = $2;
=======
  };
return (;
    <Card className="bg-zion-blue border-zion-purple/30">"
      <CardHeader>
        <CardTitle>Version History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">"
          <div className="flex flex-col "md":flex-row gap-3">"
            <div className="flex-1 grid grid-cols-2 gap-3">"
              <Input,
placeholder="Version (e.g. 1.0.1)""
                name="version""
                value={newEntry.version}
                onChange={handleInputChange} />
              <Input,
type="date""
                name="date""
                value={newEntry.date}
                onChange={handleInputChange} />
            </div>
            <Button,
onClick={handleAddEntry}
              disabled={!newEntry.version || !newEntry.changes}
            >
              <Plus className="mr-2 h-4 w-4" />"
              Add
            </Button>
          </div>
          <Textarea,
placeholder="What's new in this version?""
            name="changes""
            value={newEntry.changes}
            onChange={handleInputChange}
            rows={3} />
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">"
            {entries.map((entry) => (
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
            <Button ;
              onClick={handleAddEntry}
              disabled={!newEntry.version || !newEntry.changes}
            >;
              <Plus className="mr-2 h-4 w-4" />;
              Add;
            </Button>;
          </div>;

          



          


          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry) => (
          />;
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">;
            {entries && entries.map((entry) => (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <div
                key={entry && entry.id}
                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark">;
                <div className="flex justify-between mb-2">;
                  <div className="flex items-center gap-3">;

                    <span className="text-zion-cyan font-semibold">;
                      v{entry && entry.version}
                    </span>;"
                    <span className="text-sm text-gray-400">{entry && entry.date}</span>;
                  </div>;
                  <Button"
                    variant="ghost""
                    size="sm"
                    onClick={() => handleRemoveEntry(entry && entry.id)}
<<<<<<< HEAD

"
=======
<<<<<<< HEAD

"
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    className="text-gray-400 hover:text-red-400 p-1 h-auto";
                  >;"
                    <Trash2 className="h-4 w-4" />;
                  </Button>;
                </div>;
<<<<<<< HEAD

            {entries && entries.length === 0 && (;
              <p className="text-center text-gray-400 py-4">;
                No changelog entries yet;
              </p>;

            {entries.length === 0 && (

              <p className="text-center text-gray-400 py-4">
                No changelog entries yet;

=======
<<<<<<< HEAD
=======
          
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
              <p className="text-center text-gray-400 py-4">
                No changelog entries yet
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </p>
            )}
          </div>
        </div>
      </CardContent>
<<<<<<< HEAD
=======
    </Card>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            {entries && entries.length === 0 && (;
              <p className="text-center text-gray-400 py-4">;
                No changelog entries yet;
              </p>;

<<<<<<< HEAD
            )}
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
=======
            {entries.length === 0 && (

              <p className="text-center text-gray-400 py-4">
                No changelog entries yet;

              </p>
            )}
          </div>
        </div>
      </CardContent>

            {entries && entries.length === 0 && (;
              <p className="text-center text-gray-400 py-4">;
                No changelog entries yet;
              </p>;
                <p className="text-sm whitespace-pre-wrap">{entry.changes}</p>;
              </div>;
            ))}
            ;
            {entries.length === 0 && (;
              <p className="text-center text-gray-400 py-4">No changelog entries yet</p>;
  );
}
  );
}

<<<<<<< HEAD
            
            {entries.length === 0 && (
);
              <p className="text-center text-gray-400 py-4">No changelog entries yet</p>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            )}
          </div>;
        </div>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
  );
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}

};

  );

};
  ),;
},; interface ChangelogManagerProps {}
  platform: AppPlatform;
}type ChangelogEntry = {}
  id: string;
version: string;
date: string;
changes: string;
};
platform;
}) => {}
  const [entries, setEntries] = useState<ChangelogEntry[]> ([ {}
  const handleAddEntry = () => {}
  if (!newEntry.version || !newEntry.changes) return;
const entry: ChangelogEntry = {}
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ...newEntry;
id: Math.random () .toString (36) .substring (2, 9) 
};
setEntries ([entry, ...entries]);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

};
  handleAddEntry;
}disabled= {}
  !newEntry.version || !newEntry.changes "
}> <Plus className=" mr-2 h-4 w-4"/> Add </Button> </div> <Textarea key= {}
  entry.id "
<<<<<<< HEAD
=======
=======
setNewEntry ({
  version: "";
date: new Date () .toISOString () .split ('T') [0];
};
  handleAddEntry 
}disabled= {
  !newEntry.version || !newEntry.changes 
}> <Plus className=" mr-2 h-4 w-4"/> Add </Button> </div> <Textarea key= {
  entry.id 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}className=" p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"> > <Trash2 className=" h-4 w-4" /> </Button> </div>) 
}</div> </div> </CardContent> </Card>) 
};
  );

};

<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======
};
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
