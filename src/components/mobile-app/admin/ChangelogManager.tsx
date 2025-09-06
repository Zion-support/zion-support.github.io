interface ChangelogManagerProps {
  platform: AppPlatform
}

type ChangelogEntry = {

  id: string;
  version: string;
  date: string;
  changes: string,

}
    })
  }
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
  
  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id))
  }
  )  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id)),
  };
  )
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
              <Input
                type="date"
                name="date"

              disabled = {!newEntry.version || !newEntry.changes,}

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

            >
              <Plus className="mr-2 h-4 w-4" />
              Add
            </Button>
          </div>

                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"
              >
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-zion-cyan font-semibold">v{entry.version}</span>
                    <span className="text-sm text-gray-400">{entry.date}</span>
                  </div>