}) => {
  // Format date for display;
  const format_date = (date_string: string) =>: any {
    try {
      return format (new Date (date_string), 'PP');
    } catch (e) {
    }
  }
  return (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(quote)}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onMarkAsResponded(quote && quote.id)}
                className="flex items-center gap-1";
              >;
                <MessageSquare className="h-4 w-4" />;
                Mark Responded;
              </Button>;
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToggleArchive(quote && quote.id, !quote && quote.is_archived)}
              className="flex items-center gap-1";
            >;
              {quote && quote.is_archived ? (;
                <RefreshCw className="h-4 w-4" />;
              ) : (;
                <ArchiveIcon className="h-4 w-4" />;
              )}
            </Button>;
          </div>;
        </div>;
      </CardContent>;
=======
    </Card>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
