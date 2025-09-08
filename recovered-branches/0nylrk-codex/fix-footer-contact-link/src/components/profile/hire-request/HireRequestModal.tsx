
interface HireRequestModalProps {
  talent: TalentProfile | null;
  isOpen: boolean;
  onClose: () => void;

  userDetails?: UserProfile

}

export function HireRequestModal({
  talent
  isOpen
  onClose
  userDetails
}: HireRequestModalProps) {
  const handleClose = () => {






    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-zion-blue-dark border-zion-blue-light max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">





          talent={talent}
          onClose={handleClose}
          userDetails={userDetails}

            Hire {talent && talent.full_name}
          </DialogTitle>;
        </DialogHeader>;
        <HireRequestForm




