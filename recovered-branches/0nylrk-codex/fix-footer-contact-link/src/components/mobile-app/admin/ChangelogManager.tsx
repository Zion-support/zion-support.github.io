
import React, {_useState} from "react";

interface ChangelogManagerProps {_platform: AppPlatform;}

type ChangelogEntry = {_id: string;
  version: string;
  date: string;
  changes: string;};

export const ChangelogManager: React.FC<ChangelogManagerProps> = (_{_platform}) => {_const [entries, _setEntries] = useState<ChangelogEntry[]>([
    {
      id: "1", _version: "1.0.0", _date: "2025-05-15", _changes: "Initial release of the Zion AI Marketplace app."}
  ]);
  
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry, "id">>({_version: "", _date: new Date().toISOString().split('T')[0], _changes: ""});
  
  const _handleAddEntry = () => {_if (!newEntry.version || !newEntry.changes) return;
    
    const entry: ChangelogEntry = {
      ...newEntry, _id: Math.random().toString(36).substring(2, _9)};
    
    setEntries([entry, ...entries]);
    setNewEntry({_version: "", _date: new Date().toISOString().split('T')[0], _changes: ""});
  };
  
  const _handleRemoveEntry = (_id: string) => {_setEntries(entries.filter(entry => entry.id !== id));};
  
  const _handleInputChange = (_e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {_const { name, _value} = e.target;
    setNewEntry(prev => ({_...prev, _[name]: value}));
  };
  
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
                value={_newEntry.version}
                onChange={_handleInputChange}
              />
              <Input
                type="date"
                name="date"
                value={_newEntry.date}
                onChange={_handleInputChange}
              />
            </div>
            <Button 
              onClick={_handleAddEntry}
              disabled={_!newEntry.version || !newEntry.changes}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add
            </Button>
          </div>
          
          <Textarea
            placeholder="What's new in this version?"
            name="changes"
            value={_newEntry.changes}
            onChange={_handleInputChange}
            rows={_3}
          />
          
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {_entries.map(_(entry) => (_<div 
                key={entry.id}
                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"
              >
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-zion-cyan font-semibold">v{_entry.version}</span>
                    <span className="text-sm text-gray-400">{_entry.date}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={_() => handleRemoveEntry(entry.id)}
                    className="text-gray-400 hover:text-red-400 p-1 h-auto"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm whitespace-pre-wrap">{_entry.changes}</p>
              </div>
            ))}
            
            {_entries.length === 0 && (
              <p className="text-center text-gray-400 py-4">No changelog entries yet</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
