import React from 'react',
import { Button } from '@/components/ui/button',
import { Archive, Trash2, Download, Mail } from 'lucide-react',
interface QuotesBulkActionsProps {
  selectedCount: number,
  onArchiveSelected: () => void,
  onDeleteSelected: () => void,
  onExportSelected: () => void,
  onEmailSelected: () => void}

export const QuotesBulkActions: React.FC<QuotesBulkActionsProps> = ({
  selectedCount,
  onArchiveSelected;
  onDeleteSelected,
  onExportSelected,
  onEmailSelected
}) => {
  if (selectedCount === 0) {
    return null, }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-sm font-medium text-blue-900">
            {selectedCount} quote{selectedCount !== 1 ? 's' : ''} selected
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onArchiveSelected}
          >
            <Archive className="h-4 w-4 mr-2" />
            Archive
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onExportSelected}
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onEmailSelected}
          >
            <Mail className="h-4 w-4 mr-2" />
            Email
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={onDeleteSelected}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );;