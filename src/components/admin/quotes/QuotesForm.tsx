import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
// import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Save, X } from 'lucide-react';
import { format } from 'date-fns';

interface QuoteFormData {
  clientName: string;
  projectTitle: string;
  description: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected' | 'expired';
  validUntil: Date;
  notes: string;
}

interface QuotesFormProps {
  initialData?: Partial<QuoteFormData>;
  onSave: (data: QuoteFormData) => void;
  onCancel: () => void;
  isEditing?: boolean;
}

export const QuotesForm: React.FC<QuotesFormProps> = ({
  initialData,
  onSave,
  onCancel,
  isEditing = false
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    clientName: initialData?.clientName || '',
    projectTitle: initialData?.projectTitle || '',
    description: initialData?.description || '',
    amount: initialData?.amount || 0,
    status: initialData?.status || 'pending',
    validUntil: initialData?.validUntil || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    notes: initialData?.notes || ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.clientName.trim()) {
      newErrors.clientName = 'Client name is required';
    }

    if (!formData.projectTitle.trim()) {
      newErrors.projectTitle = 'Project title is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (formData.amount <= 0) {
      newErrors.amount = 'Amount must be greater than 0';
    }

    if (formData.validUntil < new Date()) {
      newErrors.validUntil = 'Valid until date must be in the future';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
    }
  };

  const handleInputChange = (field: keyof QuoteFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>
          {isEditing ? 'Edit Quote' : 'Create New Quote'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="clientName">Client Name *</Label>
              <Input
                id="clientName"
                value={formData.clientName}
                onChange={(e) => handleInputChange('clientName', e.target.value)}
                placeholder="Enter client name"
                className={errors.clientName ? 'border-red-500' : ''}
              />
              {errors.clientName && (
                <p className="text-sm text-red-500">{errors.clientName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectTitle">Project Title *</Label>
              <Input
                id="projectTitle"
                value={formData.projectTitle}
                onChange={(e) => handleInputChange('projectTitle', e.target.value)}
                placeholder="Enter project title"
                className={errors.projectTitle ? 'border-red-500' : ''}
              />
              {errors.projectTitle && (
                <p className="text-sm text-red-500">{errors.projectTitle}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Enter project description"
              rows={4}
              className={errors.description ? 'border-red-500' : ''}
            />
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount *</Label>
              <Input
                id="amount"
                type="number"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', parseFloat(e.target.value) || 0)}
                placeholder="Enter amount"
                className={errors.amount ? 'border-red-500' : ''}
              />
              {errors.amount && (
                <p className="text-sm text-red-500">{errors.amount}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => handleInputChange('status', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Valid Until *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start text-left font-normal ${errors.validUntil ? 'border-red-500' : ''}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(formData.validUntil, 'PPP')}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                {/* <Calendar
                  mode="single"
                  selected={formData.validUntil}
                  onSelect={(date: any) => date && handleInputChange('validUntil', date)}
                  initialFocus
                /> */}
                <div className="p-4">Calendar component temporarily disabled</div>
              </PopoverContent>
            </Popover>
            {errors.validUntil && (
              <p className="text-sm text-red-500">{errors.validUntil}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder="Enter any additional notes"
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button type="submit">
              <Save className="h-4 w-4 mr-2" />
              {isEditing ? 'Update Quote' : 'Create Quote'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};