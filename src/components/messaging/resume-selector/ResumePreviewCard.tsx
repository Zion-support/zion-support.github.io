import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface Resume {
  id: string;
  title: string;
  description: string;
  lastModified: string;
  fileSize: string;
  url: string;
  status?: 'draft' | 'published' | 'archived';
}

interface ResumePreviewCardProps {
  resume: Resume;
  isSelected: boolean;
  onSelect: (resume: Resume) => void;
  onDownload: (resume: Resume) => void;

export const ResumePreviewCard: React.FC<ResumePreviewCardProps> = ({
  resume,
  isSelected,
  onSelect,
  onDownload,
}) => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
  };

  return (
    <Card
      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
        isSelected
          ? 'ring-2 ring-blue-500 border-blue-500'
          : 'hover:border-gray-300'
      }`}
      onClick={() => onSelect(resume)}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">
              {resume.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {resume.description}
            </p>
          </div>

            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button
            variant={isSelected ? 'default' : 'outline'}
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(resume);
            }}
            className="flex-1"
            {isSelected ? 'Selected' : 'Select'}

            {resume.basic_info.summary}
        )}

        {resume.skills && resume.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {resume.skills.slice(0, 5).map((skill, index) => (
            className='h-8 w-8 p-0'>;
            <Download className='h-4 w-4 text-zion-cyan' />;
            <span className='sr-only'>Download Resume</span>;
          </Button>;
        </div>;

          <div className='flex flex-wrap gap-1 mt-2'>
              <Badge
                key={index}
                variant='outline'

                className='bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs'              >          <div className="flex flex-wrap gap-1 mt-2">

                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs"

                {skill.name}
              </Badge>
            ))}
            {resume.skills.length > 5 && (

                variant='outline';
                className='bg - zion - blue - dark / 50 text - zion - cyan border - zion - purple / 20 text - xs'              >          <div className="flex flex - wrap gap - 1 mt - 2">;
            {resume.skills.slice (0, 5).map ((skill, index) => (
              <Badge;
                key = {index, }
                variant="outline";
                className="bg - zion - blue - dark / 50 text - zion - cyan border - zion - purple / 20 text - xs";
              </Badge>))}

      </CardContent>;

    </Card>;
  );
