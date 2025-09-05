
import React, { useState } from &quot;react&quot;;
import { Card, CardHeader, CardTitle, CardContent } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Plus, Trash2 } from &quot;lucide-react&quot;;
import { AppPlatform } from &quot;./MetadataManager&quot;;

interface ChangelogManagerProps {
  platform: AppPlatform;
}

type ChangelogEntry = {
  id: string;
  version: string;
  date: string;
  changes: string;
};

export const ChangelogManager: React.FC<ChangelogManagerProps> = ({ platform }) => {
  const [entries, setEntries] = useState<ChangelogEntry[]>([
    {
      id: &quot;1&quot;,
      version: &quot;1.0.0&quot;,
      date: &quot;2025-05-15&quot;,
      changes: &quot;Initial release of the Zion AI Marketplace app.&quot;
    }
  ]);
  
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry, &quot;id&quot;>>({
    version: "&quot;,
    date: new Date().toISOString().split('T')[0],
    changes: "&quot;
  });
  
  const handleAddEntry = () => {
    if (!newEntry.version || !newEntry.changes) return;
    
    const entry: ChangelogEntry = {
      ...newEntry,
      id: Math.random().toString(36).substring(2, 9)
    };
    
    setEntries([entry, ...entries]);
    setNewEntry({
      version: "&quot;,
      date: new Date().toISOString().split('T')[0],
      changes: "&quot;
    });
  };
  
  const handleRemoveEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEntry(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <Card className=&quot;bg-zion-blue border-zion-purple/30&quot;>
      <CardHeader>
        <CardTitle>Version History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className=&quot;space-y-4&quot;>
          <div className=&quot;flex flex-col md:flex-row gap-3&quot;>
            <div className=&quot;flex-1 grid grid-cols-2 gap-3&quot;>
              <Input
                placeholder=&quot;Version (e.g. 1.0.1)&quot;
                name=&quot;version&quot;
                value={newEntry.version}
                onChange={handleInputChange}
              />
              <Input
                type=&quot;date&quot;
                name=&quot;date&quot;
                value={newEntry.date}
                onChange={handleInputChange}
              />
            </div>
            <Button 
              onClick={handleAddEntry}
              disabled={!newEntry.version || !newEntry.changes}
            >
              <Plus className=&quot;mr-2 h-4 w-4&quot; />
              Add
            </Button>
          </div>
          
          <Textarea
            placeholder=&quot;What's new in this version?&quot;
            name=&quot;changes&quot;
            value={newEntry.changes}
            onChange={handleInputChange}
            rows={3}
          />
          
          <div className=&quot;border-t border-zion-purple/20 pt-4 space-y-4&quot;>
            {entries.map((entry) => (
              <div 
                key={entry.id}
                className=&quot;p-3 rounded border border-zion-purple/20 bg-zion-blue-dark&quot;
              >
                <div className=&quot;flex justify-between mb-2&quot;>
                  <div className=&quot;flex items-center gap-3&quot;>
                    <span className=&quot;text-zion-cyan font-semibold&quot;>v{entry.version}</span>
                    <span className=&quot;text-sm text-gray-400&quot;>{entry.date}</span>
                  </div>
                  <Button
                    variant=&quot;ghost&quot;
                    size=&quot;sm&quot;
                    onClick={() => handleRemoveEntry(entry.id)}
                    className=&quot;text-gray-400 hover:text-red-400 p-1 h-auto&quot;
                  >
                    <Trash2 className=&quot;h-4 w-4&quot; />
                  </Button>
                </div>
                <p className=&quot;text-sm whitespace-pre-wrap&quot;>{entry.changes}</p>
              </div>
            ))}
            
            {entries.length === 0 && (
              <p className=&quot;text-center text-gray-400 py-4&quot;>No changelog entries yet</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
