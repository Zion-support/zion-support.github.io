
    setOpen(open),;
    if (!open) {;
      onClose();
    }

    <Dialog open={open} onOpenChange={handleOpenChange}>;
      <DialogContent className="max-w-md">;
        <DialogHeader>;
          <DialogTitle>;

          </DialogTitle>;
          <DialogDescription>;
            Your feedback helps build a trustworthy community. It will be visible after moderation.;
          </DialogDescription>;
        </DialogHeader>;

          revieweeName={revieweeName}
          onSubmit={handleSubmit}
          defaultValues={userReview || undefined}
          isSubmitting={isSubmitting}
        />;
      </DialogContent>;
    </Dialog>;

}