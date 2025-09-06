DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,

export function ReviewCard({ review, onReport }: ReviewCardProps) {
  const [reportReason, setReportReason] = useState('');
  const [isReporting, setIsReporting] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);

  const handleReport = async () => {
    if (!reportReason.trim()) return;

    setIsReporting(true);
    const success = await onReport(review.id, reportReason);
    setIsReporting(false);

    if (success) {
      setReportReason('');
      setIsReportDialogOpen(false);
    }

      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className='border rounded-lg p-4 bg-card'>
      <div className='flex justify-between items-start mb-3'>
        <div className='flex items-center gap-3'>
          {review.is_anonymous ? (
            <Avatar>
              <AvatarFallback className='bg-muted'>
                <User className='h-4 w-4' />              </AvatarFallback>

              </AvatarFallback>

            </Avatar>
          ) : (
            <Avatar>
              {review.reviewer_profile?.avatar_url ? (
                <AvatarImage
                  src={review.reviewer_profile.avatar_url}
                  alt={review.reviewer_profile.display_name}
                />
              ) : (
                <AvatarFallback>
                  {review.reviewer_profile?.display_name
                    ? getInitials(review.reviewer_profile.display_name)
                    : '??'}                </AvatarFallback>
              )}
            </Avatar>
          )}

                </AvatarFallback>
              )}
            </Avatar>
          )}

              >
                {review.would_work_again
                  ? 'Would work again'
                  : 'Would not work again'}              </Badge>

              </Badge>

            )}
          </div>
        </div>
      )}

      <div className='mt-3 flex justify-end'>
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
          <DialogTrigger asChild>
            <Button variant='ghost' size='sm' className='text-muted-foreground'>
              <Flag className='h-3 w-3 mr-1' />              Report

              Report

            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Report Review</DialogTitle>
              <DialogDescription>
                If you believe this review violates our community guidelines,
                please provide details below.

              </DialogDescription>
            </DialogHeader>

            <Textarea

            />

            <DialogFooter>
              <Button
                variant='outline'
                onClick={() => setIsReportDialogOpen(false)}
              >
                Cancel
              </Button>

              >
                {isReporting ? 'Submitting...' : 'Submit Report'}              </Button>

              </Button>

            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );

}</div>) ;
};";
return (<div className="border rounded-lg p-4 bg-card"> <div className="flex justify-between items-start mb-3"> <div className="flex items-center gap-3"> {";
  review.is anonymous ? (<Avatar> <AvatarFallback className="bg-muted"> <User className="h-4 w-4" /> </AvatarFallback> </Avatar>) : (<Avatar> {;
  review.reviewer profile?.avatar url ? (<AvatarImage src= {;
  review.reviewer profile.avatar url ;
}alt= {;
  review.reviewer profile.display name ;
}/>) : (<AvatarFallback> {";
  review.reviewer profile?.display name ? getInitials (review.reviewer profile.display name) : "??" ;
}</AvatarFallback>) ;
}</Avatar>) ";
}<div> </div> <div className="text-sm text-muted-foreground"> {;
  formatDistanceToNow (new Date (review.created at), {;
  addSuffix: true ;
}) ";
}</div> </div> </div> <div className="flex"> {;
  renderStars (review.rating) ";
}</div> </div> <div className="mb-4"> <p className="text-sm whitespace-pre-wrap"> {;
  review.review text ;
}</p> </div> {";
  (review.communication rating || review.quality rating || review.timeliness rating || review.would work again !== undefined) && (<div className="border-t pt-3 mt-3"> <div className="flex flex-wrap gap-2" > {";
  review.communication rating && (<Badge variant="outline" className="flex gap-1 items-center"> Communication <span className="ml-1 text-yellow-500" > {;
  review.communication rating ;
}/5</span> </Badge>) ";
}Quality <span className="ml-1 text-yellow-500" > {;
  review.quality rating ;
}/5</span> </Badge>) ";
}Timeliness <span className="ml-1 text-yellow-500" > {;
  review.timeliness rating ;
}/5</span> </Badge>) ;
}{;
  review.would work again !== undefined && (<Badge </Badge>) ;
}</div> </div>) ";
}<DialogTrigger asChild> <Button variant="ghost" size="sm" className="text-muted-foreground"> <Flag className="h-3 w-3 mr-1" /> Report </Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Report Review</DialogTitle> <DialogDescription> If you believe this review violates our community guidelines, please provide details below. </DialogDescription> </DialogHeader> <Textarea Cancel </Button> <Button onClick={;
  handleReport ;
}disabled= {;
  !reportReason.trim () || isReporting ;
}> </Button> </DialogFooter> </DialogContent> </Dialog> </div> </div>) ;
}"