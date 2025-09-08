
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",

interface ChangelogManagerProps {
  platform: AppPlatform
}

type ChangelogEntry = {;import { Plus, Trash2 } from "lucide-react";
import { AppPlatform } from "./MetadataManager";
import { Plus, Trash2 } from "lucide-react",
import { AppPlatform } from "./MetadataManager",

interface ChangelogManagerProps {
  platform: AppPlatform
}

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

<<<<<<< HEAD
type ChangelogEntry = {
  id: string;
  version: string;
  date: string;
  changes: string;
}) => {
  const [entries, setEntries] = useState<ChangelogEntry[]>([
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
    <Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>Version History</CardTitle>;
      </CardHeader>;
      <CardContent>;"
        <div className="space-y-4">;"
          <div className="flex flex-col md:flex-row gap-3">;"
            <div className="flex-1 grid grid-cols-2 gap-3">;
              <Input
                placeholder="Version (e && e.g. 1 && 1.0.1)"
                name="version"
                value={newEntry && newEntry.version}                onChange={handleInputChange}
              />
            </div>
            <Button
onClick={handleAddEntry}
              disabled={!newEntry.version |!newEntry.changes}
              onClick={handleAddEntry}

              disabled={!newEntry && newEntry.version || !newEntry && newEntry.changes}>;
              onClick={handleAddEntry}

            <Button
              onClick={handleAddEntry}
              disabled={!newEntry && newEntry.version || !newEntry && newEntry.changes}>;
              <Input;
                placeholder="Version (e.g. 1.0.1)";

=======


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

>>>>>>> origin/cursor/delete-old-data-records-6bba
                name="version";
                value={newEntry.version}
                onChange={handleInputChange}
              />;

<<<<<<< HEAD
              <Input;
                type="date";

=======
              <Input;"
                type="date";"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                name="date";
                value={newEntry.date}
                onChange={handleInputChange}
              />;
            </div>;

<<<<<<< HEAD
    "version": "","
    "date": new Date().toISOString().split("T")[0],"
    "changes": ""});"
    }
    if (!newEntry.version || !newEntry.changes) return;

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

  };
    "e": React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,

  ) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));

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
            >;
              <Plus className="mr-2 h-4 w-4" />;
              Add;
            </Button>;
          </div>;

          
            <Button
              onClick={handleAddEntry}
          <Textarea
            placeholder="What's new in this version?"
            name="changes"
            value={newEntry && newEntry.changes}
            onChange={handleInputChange}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df