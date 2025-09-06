

import React, { useState } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from 'lucide-react'


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id)),
  };
  );
=======

};  const handleRemoveEntry = (id: string,) => {
    setEntries(entries.filter(entry => entry.id !== id))
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
    const { name, value } = e.target
    setNewEntry(prev => ({ ...prev, [name]: value }))
  }

import { Plus, Trash2 } from 'lucide-react'import { AppPlatform } from "./MetadataManager";
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
                value = {newEntry.version,}
                onChange = {handleInputChange,}
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
                value={newEntry.version}
                onChange={handleInputChange}
              />
              <Input
                type="date"
                name="date"
                value = {newEntry.date,}
                onChange = {handleInputChange,}
              />
            </div>
            <Button
              onClick = {handleAddEntry,}
              disabled = {!newEntry.version |!newEntry.changes,}
            >
              <Plus className="mr-2 h-4 w-4" />
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
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
