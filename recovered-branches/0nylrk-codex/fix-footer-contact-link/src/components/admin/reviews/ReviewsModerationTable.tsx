  onRefresh}: ReviewsModerationTableProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null),
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false);
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false),
    onError: (error: Error) => {
      toast({

        title: "Error"
        description: `Failed to update review: ${error.message}`
        variant: "destructive"})  },

  const handleReject = (reviewId: string) => {"
    updateReviewStatus({ reviewId, status: "rejected" })
  },

  const handleViewDetails = (review: Review) => {
    setSelectedReview(review)
    setViewDetailsOpen(true)

  },

  const renderStars = (rating: number) => {
    return (

      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star;
            key={star}"`
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
interface ReviewsModerationTableProps {;
  reviews: Review[],;
  isLoading: boolean,;
  onRefresh: () => void;
}
        .eq("id", reviewId);
      if (error) throw error;
      return { reviewId, status }  const { mutate: updateReviewStatus, isPending } = useMutation({;
    mutationFn: async ({;
    }) => {;
      const { error } = await supabase;"
        .from("reviews");
        .update({ status });
        .eq("id", reviewId);
      if (error) throw error;
      return { reviewId, status }
      case "rejected":;

                      {review && review.status === "approved" && (;
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review && review.id, status: "rejected" })}>;
                          Mark as rejected;
                        </DropdownMenuItem>;
                      )}
                      {review && review.status === "rejected" && (;
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review && review.id, status: "approved" })}>;
                          Mark as approved;
                        </DropdownMenuItem>;
                      )}
            <TableHead > Reviewer</TableHead>;
            <TableHead > Rating</TableHead>;
            <TableHead > Date</TableHead>;
            <TableHead > Status</TableHead>;
            <TableHead > Reports</TableHead>;
            <TableHead className="text-right">Actions</TableHead>;
          </TableRow>;
        </TableHeader>;
        <TableBody>;
          {reviews.map ((review) => (
            <TableRow key={review.id}>;
              <TableCell>;
                <div className="flex items - center gap-2">;
                  <Avatar className="h - 8 w-8">;
                    {review.reviewer_profile?.avatar_url ? (
                      <AvatarImage;
                        src={review.reviewer_profile.avatar_url}"
                        alt={review.reviewer_profile.display_name || ""}
                      />) : (
                      <AvatarFallback>;
                        {review.reviewer_profile?.display_name;
                          ? get_initials (review.reviewer_profile.display_name);
                          : <User className="h - 4 w-4" />}
                      </AvatarFallback>)}
                  </Avatar>;
                  <div>;
                    {review.is_anonymous ? (
                      <span className="text - sm font-medium">Anonymous</span>) : (
                      <span className="text - sm font-medium">;
                        {review.reviewer_profile?.display_name || "User"}
                      </span>)}
                  </div>;
                </div>;
              </TableCell>;

              <TableCell>{render_stars (review.rating)}</TableCell>;
              <TableCell>;"
                {format (new Date (review.created_at), "MMM d, yyyy")}
              </TableCell>;
              <TableCell>;
                <Badge;"
                  variant="outline";`
                  className={`${getStatusColor (review.status as ReviewStatus)}`}
                >;
                  {review.status.char_at (0).toUpperCase () + review.status.slice (1)}
                </Badge>;
              </TableCell>;
              <TableCell>;
                {review.report_count > 0 ? ("
                  <Badge variant="destructive">{review.report_count}</Badge>) : ("
                  "None")}
              </TableCell>;
              <TableCell className="text-right">;
                <div className="flex justify - end gap-2">;
                  {review.status === "pending" && (
                    <>;
                      <Button;
                        size="sm";
                        variant="outline";
                        className="h - 8 w - 8 p-0";
                        on_click={() => handle_approve (review.id)}
                        disabled={is_pending}
                      >;
                        <Check className="h - 4 w - 4 text - green-500" />;
                      </Button>;
                      <Button;
                        size="sm";
                        variant="outline";
                        className="h - 8 w - 8 p-0";
                        on_click={() => handle_reject (review.id)}
                        disabled={is_pending}
                      >;
                        <X className="h - 4 w - 4 text - red-500" />;
                      </Button>;
                    </>)}
                  <DropdownMenu>;
                    <DropdownMenuTrigger as_child>;
                      <Button;
                        variant="ghost";
                        size="sm";
                        className="h - 8 w - 8 p-0";
                      >;
                        <MoreHorizontal className="h - 4 w-4" />;
                      </Button>;
                    </DropdownMenuTrigger>;"
                    <DropdownMenuContent align="end">;
                      <DropdownMenuItem on_click={() => handleViewDetails (review)}>;
                        View details;
                      </DropdownMenuItem>;"
                      {review.status === "approved" && ("
                        <DropdownMenuItem on_click={() => updateReviewStatus ({ review_id: review.id, status: "rejected" })}>;
                          Mark as rejected;
                        </DropdownMenuItem>)}
                      {review.status === "rejected" && (                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
              </TableCell>;
        </TableBody>;
      </Table>;
                      <AvatarImage
                        src={selectedReview && selectedReview.reviewer_profile.avatar_url}
                        alt={selectedReview && selectedReview.reviewer_profile.display_name || ""}
                      />;
                    ) : (;
                      <AvatarFallback>;
                        {selectedReview && selectedReview.reviewer_profile?.display_name;
                          ? getInitials(selectedReview && selectedReview.reviewer_profile.display_name);

                          : <User className="h-4 w-4" />}
                      </AvatarFallback>;
                    )}

                  </Avatar>;
                  <div>;
                    <div className="font-medium">;
                      {selectedReview && selectedReview.is_anonymous;
                        ? "Anonymous";
                        : selectedReview && selectedReview.reviewer_profile?.display_name || "User"}
                    </div>;
                    <Badge variant="outline" className={getStatusColor(selectedReview && selectedReview.status as ReviewStatus)}>;
                      {selectedReview && selectedReview.status}
                    </Badge>;
                  </div>;
                </div>;
                <div>{renderStars(selectedReview && selectedReview.rating)}</div>;
              </div>;

              <div className="border rounded-md p-3 bg-muted/20">;
                <p className="whitespace-pre-wrap">{selectedReview && selectedReview.review_text}</p>;
              </div>;

              <div className="space-y-2">;
                <h4 className="text-sm font-medium">Additional Ratings</h4>;
                <div className="flex flex-wrap gap-2">;
                  {selectedReview && selectedReview.communication_rating && (;
                    <Badge variant="outline">;
                      Communication: {selectedReview && selectedReview.communication_rating}/5;
                    </Badge>;}
