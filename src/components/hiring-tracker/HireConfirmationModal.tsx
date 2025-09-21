import React from 'react',
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog',
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { Label } from '@/components/ui/label',
import { Textarea } from '@/components/ui/textarea',
import { JobApplication } from '@/types/jobs',
interface HireConfirmationModalProps {
  isOpen: boolean,
  onClose: () => void,
  application: JobApplication,
  onConfirm: () => void, }

export function HireConfirmationModal({ 
  isOpen, 
  onClose, 
  application;
  onConfirm 
}: HireConfirmationModalProps) {
  const [offerAmount, setOfferAmount] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [notes, setNotes] = React.useState('');

  const handleConfirm = () => {
    // Here you would typically send the offer to the backend
    onConfirm();
    onClose();;

  const candidateName = application.talent_profile?.full_name || 'Candidate',
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Hire {candidateName}</DialogTitle>
          <DialogDescription>
            Confirm the hiring details for this candidate. This will send an offer notification.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="offer-amount" className="text-right">
              Offer Amount
            </Label>
            <Input
              id="offer-amount"
              type="number"
              placeholder="e.g., 50000"
              value={offerAmount}
              onChange={(e) => setOfferAmount(e.target.value)}
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="start-date" className="text-right">
              Start Date
            </Label>
            <Input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="notes" className="text-right">
              Notes
            </Label>
            <Textarea
              id="notes"
              placeholder="Additional notes for the candidate..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        
        <DialogFooter>
          <Button  onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleConfirm}>
            Send Offer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );