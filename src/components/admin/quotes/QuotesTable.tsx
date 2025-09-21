import React from 'react',
import { Badge } from '@/components/ui/badge',
import { Button } from '@/components/ui/button',
import { Checkbox } from '@/components/ui/checkbox',
import { Eye, Edit, Archive, Trash2 } from 'lucide-react',
import { formatCurrency } from '@/lib/utils',
interface Quote {
  id: string,
  clientName: string,
  projectTitle: string,
  amount: number,
  status: 'pending' | 'approved' | 'rejected' | 'expired',
  createdAt: string,
  validUntil: string,
  isArchived: boolean}

interface QuotesTableProps {
  quotes: Quote[],
  selectedQuotes: string[],
  onSelectQuote: (id: string) => void,
  onSelectAll: () => void,
  onViewQuote: (id: string) => void,
  onEditQuote: (id: string) => void,
  onArchiveQuote: (id: string) => void,
  onDeleteQuote: (id: string) => void}

export const QuotesTable: React.FC<QuotesTableProps> = ({
  quotes,
  selectedQuotes;
  onSelectQuote,
  onSelectAll,
  onViewQuote,
  onEditQuote;
  onArchiveQuote;
  onDeleteQuote
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800',
      case 'pending':
        return 'bg-yellow-100 text-yellow-800',
      case 'rejected':
        return 'bg-red-100 text-red-800',
      case 'expired':
        return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800'}
  };
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()};
  const isAllSelected = quotes.length > 0 && selectedQuotes.length === quotes.length;

  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">
                <Checkbox
                  checked={isAllSelected}
                  onCheckedChange={onSelectAll}
                />
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Client
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Project
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Amount
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Created
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Valid Until
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {quotes.map((quote) => (
              <tr key={quote.id} className="hover: bg-gray-50">
                <td className="px-4 py-3">
                  <Checkbox
                    checked={selectedQuotes.includes(quote.id)}
                    onCheckedChange={() => onSelectQuote(quote.id)}
                  />
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {quote.clientName}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {quote.projectTitle}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {formatCurrency(quote.amount)}
                </td>
                <td className="px-4 py-3">
                  <Badge className={getStatusColor(quote.status)}>
                    {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {formatDate(quote.createdAt)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {formatDate(quote.validUntil)}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onViewQuote(quote.id)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onEditQuote(quote.id)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onArchiveQuote(quote.id)}
                    >
                      <Archive className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onDeleteQuote(quote.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )};
