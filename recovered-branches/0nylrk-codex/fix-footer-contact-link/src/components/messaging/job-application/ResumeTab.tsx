

      {onApply && (
        <div className="mt-6">
          <Button 
            onClick={onApply} 
            disabled={!selectedResumeId || isSubmitting}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            className="w-full"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>

          

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {!selectedResumeId && (
            <p className="text-sm text-muted-foreground mt-2">
              Please select a resume to continue
            </p>
          )}
        </div>
      )}

    </div>;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );
}