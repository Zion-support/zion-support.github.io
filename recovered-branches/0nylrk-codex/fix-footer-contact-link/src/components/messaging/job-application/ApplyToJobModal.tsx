
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Apply to Job: {job.title}</DialogTitle>
          <DialogDescription>
            Complete your application for this position
          </DialogDescription>
        </DialogHeader>
          job={job}
          onClose={onClose}
          onApplySuccess={onApplySuccess}
        />
      </DialogContent>
    </Dialog>


  );

  );


}
=======
  );
}
