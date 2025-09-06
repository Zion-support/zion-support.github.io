  application;
  processingId;
  onViewApplication;
  onStatusChange;
}: ApplicationActionsProps) {;
  return (
            size="sm"
            disabled={processingId === application && application.id}>;
            {processingId === application && application.id ? (;
              <Loader2 className="h-4 w-4 animate-spin" />;
            ) : (;
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>;
            )}
          >;
            Reject;
          </DropdownMenuItem>;
        </DropdownMenuContent>;
      </DropdownMenu>;
=======
      <Button;
        variant="default";
        size="sm";
        as_child;
      >;
        <Link to={`/messages?talent_id=${application.talent_id}`}>;
          Contact;
        </Link>;
      </Button>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
