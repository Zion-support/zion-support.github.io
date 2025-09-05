
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from "@/components/ui/table";
import {_Dialog, _DialogContent, _DialogDescription, _DialogFooter, _DialogHeader, _DialogTitle} from "@/components/ui/dialog";
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

interface ReviewsModerationTableProps {_reviews: Review[];
  isLoading: boolean;
  onRefresh: () => void;}

export function ReviewsModerationTable(_{_reviews, _isLoading, _onRefresh}: ReviewsModerationTableProps) {_const [selectedReview, _setSelectedReview] = useState<Review | null>(null);
  const [viewDetailsOpen, _setViewDetailsOpen] = useState(false);

  const { mutate: updateReviewStatus, _isPending} = useMutation(_{_mutationFn: async ({
      reviewId, _status}: {_reviewId: string;
      status: ReviewStatus;}) => {_const { error} = await supabase
        .from("reviews")
        .update({_status})
        .eq("id", reviewId);

      if (error) throw error;
      return {_reviewId, _status};
    },
    onSuccess: (_data) => {_toast({
        title: "Review updated", _description: `Review has been ${data.status}.`});
      onRefresh();
      setViewDetailsOpen(false);
    },
    onError: (_error: Error) => {_toast({
        title: "Error", _description: `Failed to update review: ${error.message}`,
        variant: "destructive"});
    }});

  const _getStatusColor = (_status: ReviewStatus) => {_switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "rejected":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      default:
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";}
  };

  const _getInitials = (_name: string) => {_return name
      .split(" ")
      .map(_(n) => n[0])
      .join("")
      .toUpperCase();};

  if (isLoading) {_return (
      <div className="space-y-4">
        <div className="h-12 w-full bg-muted rounded animate-pulse" />
        <div className="h-16 w-full bg-muted rounded animate-pulse" />
        <div className="h-16 w-full bg-muted rounded animate-pulse" />
        <div className="h-16 w-full bg-muted rounded animate-pulse" />
      </div>
    );}

  if (reviews.length === 0) {_return (
      <div className="py-10 text-center">
        <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3>
        <p className="text-muted-foreground">
          All reviews have been processed. Check back later for new submissions.
        </p>
      </div>
    );}

  const _handleApprove = (_reviewId: string) => {_updateReviewStatus({ reviewId, _status: "approved"});
  };

  const _handleReject = (_reviewId: string) => {_updateReviewStatus({ reviewId, _status: "rejected"});
  };

  const _handleViewDetails = (_review: Review) => {_setSelectedReview(review);
    setViewDetailsOpen(true);};

  const _renderStars = (_rating: number) => {_return (_<div className="flex">
        {[1, _2, _3, _4, _5].map((star) => (
          <Star
            key={star}
            className={_`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
    );
  };

  return (_<>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Reviewer</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Reports</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {_reviews.map((review) => (
            <TableRow key={review.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    {_review.reviewer_profile?.avatar_url ? (
                      <AvatarImage
                        src={review.reviewer_profile.avatar_url}
                        alt={_review.reviewer_profile.display_name || ""}
                      />
                    ) : (
                      <AvatarFallback>
                        {_review.reviewer_profile?.display_name
                          ? getInitials(review.reviewer_profile.display_name)
                          : <User className="h-4 w-4" />}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    {_review.is_anonymous ? (
                      <span className="text-sm font-medium">Anonymous</span>
                    ) : (
                      <span className="text-sm font-medium">
                        {review.reviewer_profile?.display_name || "User"}
                      </span>
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell>{_renderStars(review.rating)}</TableCell>
              <TableCell>
                {_format(new Date(review.created_at), _"MMM d, _yyyy")}
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={_`${getStatusColor(review.status as ReviewStatus)}`}
                >
                  {_review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>
                {_review.report_count > 0 ? (
                  <Badge variant="destructive">{review.report_count}</Badge>
                ) : (
                  "None"
                )}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  {_review.status === "pending" && (_<>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => handleApprove(review.id)}
                        disabled={_isPending}
                      >
                        <Check className="h-4 w-4 text-green-500" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={_() => handleReject(review.id)}
                        disabled={_isPending}
                      >
                        <X className="h-4 w-4 text-red-500" />
                      </Button>
                    </>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={_() => handleViewDetails(review)}>
                        View details
                      </DropdownMenuItem>
                      {_review.status === "approved" && (_<DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, _status: "rejected"})}>
                          Mark as rejected
                        </DropdownMenuItem>
                      )}
                      {_review.status === "rejected" && (_<DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, _status: "approved"})}>
                          Mark as approved
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {_selectedReview && (
        <Dialog open={viewDetailsOpen} onOpenChange={_setViewDetailsOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Review Details</DialogTitle>
              <DialogDescription>
                Review submitted on{_" "}
                {_format(new Date(selectedReview.created_at), _"MMMM d, _yyyy")}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    {_selectedReview.reviewer_profile?.avatar_url ? (
                      <AvatarImage
                        src={selectedReview.reviewer_profile.avatar_url}
                        alt={_selectedReview.reviewer_profile.display_name || ""}
                      />
                    ) : (
                      <AvatarFallback>
                        {_selectedReview.reviewer_profile?.display_name
                          ? getInitials(selectedReview.reviewer_profile.display_name)
                          : <User className="h-4 w-4" />}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <div className="font-medium">
                      {_selectedReview.is_anonymous
                        ? "Anonymous"
                        : selectedReview.reviewer_profile?.display_name || "User"}
                    </div>
                    <Badge variant="outline" className={_getStatusColor(selectedReview.status as ReviewStatus)}>
                      {_selectedReview.status}
                    </Badge>
                  </div>
                </div>
                <div>{_renderStars(selectedReview.rating)}</div>
              </div>

              <div className="border rounded-md p-3 bg-muted/20">
                <p className="whitespace-pre-wrap">{_selectedReview.review_text}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Additional Ratings</h4>
                <div className="flex flex-wrap gap-2">
                  {_selectedReview.communication_rating && (
                    <Badge variant="outline">
                      Communication: {selectedReview.communication_rating}/5
                    </Badge>
                  )}
                  {_selectedReview.quality_rating && (
                    <Badge variant="outline">
                      Quality: {selectedReview.quality_rating}/5
                    </Badge>
                  )}
                  {_selectedReview.timeliness_rating && (
                    <Badge variant="outline">
                      Timeliness: {selectedReview.timeliness_rating}/5
                    </Badge>
                  )}
                  {_selectedReview.would_work_again !== undefined && (
                    <Badge
                      variant={selectedReview.would_work_again ? "default" : "secondary"}
                      className={_selectedReview.would_work_again ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                    >
                      {_selectedReview.would_work_again ? "Would work again" : "Would not work again"}
                    </Badge>
                  )}
                </div>
              </div>

              {_selectedReview.report_count > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-md p-3">
                  <h4 className="text-sm font-medium text-red-800">Reports: {selectedReview.report_count}</h4>
                  <p className="text-sm text-red-700">
                    This review has been reported by users and may need investigation.
                  </p>
                </div>
              )}
            </div>

            <DialogFooter>
              {_selectedReview.status === "pending" && (_<>
                  <Button
                    variant="destructive"
                    onClick={() => handleReject(selectedReview.id)}
                    disabled={_isPending}
                  >
                    Reject
                  </Button>
                  <Button
                    onClick={_() => handleApprove(selectedReview.id)}
                    disabled={_isPending}
                  >
                    Approve
                  </Button>
                </>
              )}
              {_selectedReview.status === "approved" && (_<Button
                  variant="destructive"
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, _status: "rejected"})}
                  disabled={_isPending}
                >
                  Mark as Rejected
                </Button>
              )}
              {_selectedReview.status === "rejected" && (_<Button
                  onClick={() => updateReviewStatus({ reviewId: selectedReview.id, _status: "approved"})}
                  disabled={_isPending}
                >
                  Mark as Approved
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}