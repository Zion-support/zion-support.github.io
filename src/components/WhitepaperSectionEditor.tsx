import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, ChevronUp, ChevronDown } from 'lucide-react';

interface WhitepaperSection {
  id: string;
  title: string;
  content: string;
  order: number;
}

interface WhitepaperSectionEditorProps {
  section: WhitepaperSection;
  onUpdate: (updates: Partial<WhitepaperSection>) => void;
  onDelete: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export const WhitepaperSectionEditor: React.FC<WhitepaperSectionEditorProps> = ({
  section,
  onUpdate,
  onDelete,
  onMoveUp,
  onMoveDown,
  isFirst = false,
  isLast = false
}) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Section {section.order}</CardTitle>
          <div className="flex items-center space-x-2">
            {onMoveUp && !isFirst && (
              <Button variant="outline" size="sm" onClick={onMoveUp}>
                <ChevronUp className="h-4 w-4" />
              </Button>
            )}
            {onMoveDown && !isLast && (
              <Button variant="outline" size="sm" onClick={onMoveDown}>
                <ChevronDown className="h-4 w-4" />
              </Button>
            )}
            <Button variant="destructive" size="sm" onClick={onDelete}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Section Title</label>
          <Input
            value={section.title}
            onChange={(e) => onUpdate({ title: e.target.value })}
            placeholder="Enter section title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Content</label>
          <Textarea
            value={section.content}
            onChange={(e) => onUpdate({ content: e.target.value })}
            placeholder="Enter section content"
            rows={6}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default WhitepaperSectionEditor;