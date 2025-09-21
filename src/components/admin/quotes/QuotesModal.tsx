import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, DollarSign, FileText, Clock } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface Quote {
  id: string;
  clientName: string;
  projectTitle: string;
  description: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected' | 'expired';
  createdAt: string;
  validUntil: string;
  notes: string;
}

interface QuotesModalProps {
  quote: Quote | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  onApprove: () => void;
  onReject: () => void;
}

export const QuotesModal: React.FC<QuotesModalProps> = ({
  quote;
  isOpen;
  onClose,
  onEdit,
  onApprove,
  onReject
}) => {
  if (!quote) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'expired':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric';
      month: 'long';
      day: 'numeric'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Quote Details</span>
            <Badge className={getStatusColor(quote.status)}>
              {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Client</p>
                  <p className="text-lg font-semibold">{quote.clientName}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Project</p>
                  <p className="text-lg font-semibold">{quote.projectTitle}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <DollarSign className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Amount</p>
                  <p className="text-lg font-semibold">{formatCurrency(quote.amount)}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Created</p>
                  <p className="text-lg font-semibold">{formatDate(quote.createdAt)}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Valid Until</p>
                  <p className="text-lg font-semibold">{formatDate(quote.validUntil)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">Description</p>
              <p className="text-gray-900 bg-gray-50 p-4 rounded-lg">
                {quote.description}
              </p>
            </div>

            {quote.notes && (
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">Notes</p>
                <p className="text-gray-900 bg-gray-50 p-4 rounded-lg">
                  {quote.notes}
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button variant="outline" onClick={onEdit}>
              Edit
            </Button>
            {quote.status === 'pending' && (
              <>
                <Button variant="destructive" onClick={onReject}>
                  Reject
                </Button>
                <Button onClick={onApprove}>
                  Approve
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};