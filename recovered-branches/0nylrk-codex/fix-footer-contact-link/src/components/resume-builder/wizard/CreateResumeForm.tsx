

export const _CreateResumeForm = (_{_onCreateResume, _onCancel, _isLoading}: CreateResumeFormProps) => {_const [newResumeTitle, _setNewResumeTitle] = useState('');

  const _handleSubmit = async () => {
    if (!newResumeTitle.trim()) return;
    await onCreateResume(newResumeTitle);};

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Create New Resume</h2>
          <p className="text-muted-foreground mb-6">Give your resume a title to get started</p>
          
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Resume Title (e.g. 'AI Engineer Resume')"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={_newResumeTitle}
              onChange={_(_e) => setNewResumeTitle(e.target.value)}
            />
            <Button 
              onClick={_handleSubmit}
              disabled={_!newResumeTitle.trim() || isLoading}
            >
              {_isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create
            </Button>
          </div>
          
          <Button
            variant="ghost"
            onClick={_onCancel}
            className="mt-4"
          >
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
