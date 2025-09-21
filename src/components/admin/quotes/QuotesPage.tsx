import React, { useState } from 'react',
import { QuotesView } from './QuotesView',
import { QuotesForm } from './QuotesForm',
import { QuotesModal } from './QuotesModal',
interface Quote {
  id: string,
  clientName: string,
  projectTitle: string,
  description: string,
  amount: number,
  status: 'pending' | 'approved' | 'rejected' | 'expired',
  createdAt: string,
  validUntil: string,
  notes: string,
  isArchived: boolean}

type ViewMode = 'list' | 'form' | 'modal';

type ViewMode = 'list' | 'form' | 'modal',
export const QuotesPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [editingQuote, setEditingQuote] = useState<Partial<Quote> | null>(null);

  const handleCreateQuote = () => {
    setEditingQuote({});
    setViewMode('form');;

  const handleEditQuote = (quote: Quote) => {
    setEditingQuote(quote),
    setViewMode('form');
  };

  const handleViewQuote = (quote: Quote) => {
    setSelectedQuote(quote),
    setViewMode('modal');
  };

  const handleSaveQuote = (formData: any) => {
    console.log('Saving quote:', formData);
    // Here you would typically save to your backend
    setViewMode('list');
    setEditingQuote(null);;

  const handleCancelForm = () => {
    setViewMode('list');
    setEditingQuote(null);;

  const handleCloseModal = () => {
    setViewMode('list');
    setSelectedQuote(null);;

  const handleApproveQuote = () => {
    console.log('Approving quote:', selectedQuote?.id);
    // Here you would typically update the quote status
    setViewMode('list');
    setSelectedQuote(null);;

  const handleRejectQuote = () => {
    console.log('Rejecting quote:', selectedQuote?.id);
    // Here you would typically update the quote status
    setViewMode('list');
    setSelectedQuote(null);;

  const handleEditFromModal = () => {
    if (selectedQuote) {
      setEditingQuote(selectedQuote);
      setViewMode('form');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {viewMode === 'list' && (
        <div className="p-6">
          <QuotesView />
        </div>
      )}

      {viewMode === 'form' && (
        <div className="p-6">
          <QuotesForm
            initialData={editingQuote ? {
              ...editingQuote,
              validUntil: editingQuote.validUntil ? new Date(editingQuote.validUntil) : new Date()
            } : undefined}
            onSave={handleSaveQuote}
            onCancel={handleCancelForm}
            isEditing={!!editingQuote?.id}
          />
        </div>
      )}

      {viewMode === 'modal' && selectedQuote && (
        <QuotesModal
          quote={selectedQuote}
          isOpen={true}
          onClose={handleCloseModal}
          onEdit={handleEditFromModal}
          onApprove={handleApproveQuote}
          onReject={handleRejectQuote}
        />
      )}
    </div>
  )};
