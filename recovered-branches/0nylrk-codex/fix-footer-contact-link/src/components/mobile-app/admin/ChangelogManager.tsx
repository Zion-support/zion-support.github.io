<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { AppPlatform } from "./MetadataManager";

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from "react",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React, { useState } from "react",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",


<<<<<<< HEAD


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
=======

<<<<<<< HEAD
import React, { useState } from "react","
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { Input } from "@/components/ui/input","
import { Textarea } from "@/components/ui/textarea",
";
import { Plus, Trash2 } from "lucide-react";"
import { AppPlatform } from "./MetadataManager";"
import { Plus, Trash2 } from "lucide-react","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { AppPlatform } from "./MetadataManager",
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface ChangelogManagerProps {
  platform: AppPlatform
=======


interface ChangelogManagerProps {};
  platform: AppPlatform;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}

type ChangelogEntry = {;
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
}) => {
  const [entries, setEntries] = useState<ChangelogEntry[]>([
<<<<<<< HEAD
<<<<<<< HEAD
    {
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
  id: string;
  version: string;
  date: string;
  changes: string;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}) => {}
  const [entries, setEntries] = useState<ChangelogEntry[]>([]
    {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
;
export const ChangelogManager: React.FC < ChangelogManagerProps> = ({}
  platform,
;
=======
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

}
;
export const ChangelogManager: React.FC < ChangelogManagerProps> = ({
  platform,

}) => {
  const [entries, set_entries] = useState < ChangelogEntry[]>([;
    {

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};

export const ChangelogManager: React.FC<ChangelogManagerProps> = ({;
  platform,;
}) => {;

  id: string,
  version: string,
  date: string,
<<<<<<< HEAD
  changes: string;
},

export const ChangelogManager: React.FC<ChangelogManagerProps> = ({ platform }) => {}
  const [entries, setEntries] = useState<ChangelogEntry[]>([]
    {"
      id: "1","
      version: "1.0.0","
      date: "2025-05-15",

  
  return ("
=======
  changes: string
},

export const ChangelogManager: React.FC<ChangelogManagerProps> = ({ platform }) => {
  const [entries, setEntries] = useState<ChangelogEntry[]>([
    {
      id: "1",
      version: "1.0.0",
      date: "2025-05-15",

  
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle>Version History</CardTitle>
      </CardHeader>
<<<<<<< HEAD
      <CardContent>"
        <div className="space-y-4">"
          <div className="flex flex-col md:flex-row gap-3">"
            <div className="flex-1 grid grid-cols-2 gap-3">
              <Input"
                placeholder="Version (e.g. 1.0.1)""
=======
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <Input
                placeholder="Version (e.g. 1.0.1)"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                name="version"
                value={newEntry.version}
                onChange={handleInputChange}
              />
<<<<<<< HEAD
              <Input"
                type="date""
                name="date"
<<<<<<< HEAD
=======


<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                value={newEntry.date}
                onChange={handleInputChange}
              />
            </div>
            <Button
              onClick={handleAddEntry}
              disabled={!newEntry.version |!newEntry.changes}
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",;
=======
    {import React, { useState } from "react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    {import React, { useState } from "react",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              <Input
                type="date"
                name="date"


import React, { useState } from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======

";
import React, { useState } from "react",;"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Textarea } from "@/components/ui/textarea",;"
import { Plus, Trash2 } from "lucide-react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
;
type ChangelogEntry = {;
  id: string,;
  version: string,;
  date: string,;
  changes: string;
},;
export const ChangelogManager: React.FC<ChangelogManagerProps> = ({ platform }) => {;

  const [entries, setEntries] = useState<ChangelogEntry[]>([;
    {;"
      id: "1",;"
      version: "1 && 1.0.0",;"
      date: "2025-05-15",;"
      changes: "Initial release of the Zion AI Marketplace app.",;
    },;
  ]);
"
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry, "id">>({;"
    version: "",;"
    date: new Date().toISOString().split("T")[0],;"
    changes: "",;
  });

  const handleAddEntry = () => {;
    if (!newEntry && newEntry.version || !newEntry && newEntry.changes) return;

    const entry: ChangelogEntry = {;
      ...newEntry,;
      id: Math && Math.random().toString(36).substring(2, 9),;
    };

    setEntries([entry, ...entries]);
    setNewEntry({;"
      version: "",;"
      date: new Date().toISOString().split("T")[0],;"
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
<<<<<<< HEAD
=======


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>Version History</CardTitle>;
      </CardHeader>;
      <CardContent>;"
        <div className="space-y-4">;"
          <div className="flex flex-col md:flex-row gap-3">;"
            <div className="flex-1 grid grid-cols-2 gap-3">;
<<<<<<< HEAD
              <Input
                placeholder="Version (e && e.g. 1 && 1.0.1)"
                name="version"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                value={newEntry && newEntry.version}
<<<<<<< HEAD
                onChange={handleInputChange}
              />;
              <Input
                type="date"
                name="date"
                value={newEntry && newEntry.date}
                onChange={handleInputChange}
              />;
            </div>;

            <Button;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
value={newEntry.date}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                onChange={handleInputChange}
=======
                value={newEntry && newEntry.version}                onChange={handleInputChange}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                value={newEntry && newEntry.version}                onChange={handleInputChange}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                value={newEntry && newEntry.version}
                onChange={handleInputChange}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              />
            </div>
            <Button;
onClick={handleAddEntry}
              disabled={!newEntry.version |!newEntry.changes}
              onClick={handleAddEntry}

<<<<<<< HEAD
              disabled={!newEntry && newEntry.version || !newEntry && newEntry.changes}>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
              disabled={!newEntry.version || !newEntry.changes}

              onClick={handleAddEntry}
              disabled={!newEntry.version || !newEntry.changes}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add
            </Button>
          </div>
<<<<<<< HEAD
          
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              onClick={handleAddEntry}

            <Button;
              onClick={handleAddEntry}
              disabled={!newEntry && newEntry.version || !newEntry && newEntry.changes}>;
              <Input;"
                placeholder="Version (e.g. 1.0.1)";"
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
<<<<<<< HEAD
            >;
              <Plus className="mr-2 h-4 w-4" />;
              Add;
            </Button>;
          </div>;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


          
            <Button;
              onClick={handleAddEntry}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <Textarea
            placeholder="What's new in this version?"
=======
          <Textarea'"
            placeholder="What's new in this version?""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            name="changes"
            value={newEntry && newEntry.changes}
            onChange={handleInputChange}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            rows={3}
<<<<<<< HEAD
<<<<<<< HEAD
          />
          
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry) => (
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
            rows={3}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


          

<<<<<<< HEAD
"
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry) => (

"
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry) => (

          />;
"
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">;
            {entries && entries.map((entry) => (;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry) => (
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry) => (
          />;

          <div className="border-t border-zion-purple/20 pt-4 space-y-4">;
            {entries && entries.map((entry) => (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <div
                key={entry && entry.id}
                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark">;
                <div className="flex justify-between mb-2">;
                  <div className="flex items-center gap-3">;
<<<<<<< HEAD
=======
              <div;
                key={entry && entry.id}"
                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark">;"
                <div className="flex justify-between mb-2">;"
                  <div className="flex items-center gap-3">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <span className="text-zion-cyan font-semibold">;
                      v{entry && entry.version}
                    </span>;"
                    <span className="text-sm text-gray-400">{entry && entry.date}</span>;
                  </div>;
                  <Button"
                    variant="ghost""
                    size="sm"
                    onClick={() => handleRemoveEntry(entry && entry.id)}


"
                    className="text-gray-400 hover:text-red-400 p-1 h-auto";
                  >;"
                    <Trash2 className="h-4 w-4" />;
                  </Button>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <p className="text-sm whitespace-pre-wrap">{entry && entry.changes}</p>;
              </div>;
            ))}
<<<<<<< HEAD
=======
=======
                    <span className="text-zion-cyan font-semibold">;
                      v{entry && entry.version}
                    </span>;
                    <span className="text-sm text-gray-400">{entry && entry.date}</span>;
                  </div>;
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveEntry(entry && entry.id)}
                    className="text-gray-400 hover:text-red-400 p-1 h-auto";
                  >;
                    <Trash2 className="h-4 w-4" />;
                  </Button>;
                </div>;
                <p className="text-sm whitespace-pre-wrap">{entry && entry.changes}</p>;
              </div>;
            ))}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


            {entries && entries.length === 0 && (;
              <p className="text-center text-gray-400 py-4">;
                No changelog entries yet;
              </p>;

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
            
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {entries.length === 0 && (
<<<<<<< HEAD
=======
                <p className="text-sm whitespace-pre-wrap">{entry && entry.changes}</p>;
              </div>;
            ))}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <p className="text-center text-gray-400 py-4">
                No changelog entries yet;
=======
              <p className="text-center text-gray-400 py-4">
                No changelog entries yet
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </p>
            )}
          </div>
        </div>
      </CardContent>
<<<<<<< HEAD
    </Card>"
              <p className="text-center text-gray-400 py-4">No changelog entries yet</p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
    </Card>
              <p className="text-center text-gray-400 py-4">No changelog entries yet</p>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


            {entries && entries.length === 0 && (;
              <p className="text-center text-gray-400 py-4">;
                No changelog entries yet;
              </p>;

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            )}
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


};





  );
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
            rows={3}          </div>;
        </div>;
      </CardContent>;
    </Card>;
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            rows={3}          </div>;
        </div>;
      </CardContent>;
    </Card>;
  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            )}
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
}



};
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
  ...newEntry;
id: Math.random () .toString (36) .substring (2, 9) 
};
setEntries ([entry, ...entries]);
<<<<<<< HEAD
setNewEntry ({
  version: "";
<<<<<<< HEAD
date: new Date () .toISOString () .split ('T') [0]
=======
setNewEntry ({"
  version: "";'
date: new Date () .toISOString () .split ('T') [0];
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
date: new Date () .toISOString () .split ('T') [0];
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};
  handleAddEntry;
}disabled= {}
  !newEntry.version || !newEntry.changes "
}> <Plus className=" mr-2 h-4 w-4"/> Add </Button> </div> <Textarea key= {}
  entry.id "
}className=" p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"> > <Trash2 className=" h-4 w-4" /> </Button> </div>) 
}</div> </div> </CardContent> </Card>) 
};
  );

};

};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
