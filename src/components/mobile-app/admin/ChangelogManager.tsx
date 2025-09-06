

import React, { useState } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from 'lucide-react'


  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id)),
  };
  );

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

=======
                value={newEntry.version}
                onChange={handleInputChange}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              />
              <Input
                type="date"
                name="date"

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

                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"
              >
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-zion-cyan font-semibold">v{entry.version}</span>
                    <span className="text-sm text-gray-400">{entry.date}</span>
                  </div>
          />;

          <div className="border-t border-zion-purple/20 pt-4 space-y-4">;
            {entries && entries.map((entry,) => (;
<<<<<<< HEAD
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

<<<<<<< HEAD
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
