import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WhitepaperSection {
  id: string;
  title: string;
  content: string;
  order: number;
}

interface WhitepaperPreviewPanelProps {
  sections: WhitepaperSection[];
}

export const WhitepaperPreviewPanel: React.FC<WhitepaperPreviewPanelProps> = ({ sections }) => {
  const sortedSections = sections.sort((a, b) => a.order - b.order);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none">
          {sortedSections.length === 0 ? (
            <p className="text-gray-500 italic">No sections added yet. Add a section to see the preview.</p>
          ) : (
            sortedSections.map((section) => (
              <div key={section.id} className="mb-6">
                <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                <div className="text-gray-700 whitespace-pre-wrap">
                  {section.content || <span className="italic text-gray-400">No content yet</span>}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default WhitepaperPreviewPanel;