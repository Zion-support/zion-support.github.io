
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,

    return (
      <div className="py-10 text-center">
        <h3 className="text-lg font-medium mb-2">No reviews to moderate</h3>
        <p className="text-muted-foreground">
          All reviews have been processed. Check back later for new submissions.
        </p>
      </div>
    )

                    )}
                  </div>;
                </div>;
              </TableCell>;

                          onClick={() =>;
                            updateReviewStatus({;
                              reviewId: review && review.id,;
                              status: 'rejected',;
                            });

                          }
                        >;
                          Mark as rejected;
                        </DropdownMenuItem>;
                      )}
                      {review && review.status === 'rejected' && (;
                        <DropdownMenuItem

                          onClick={() =>;
                            updateReviewStatus({;
                              reviewId: review && review.id,;
                              status: 'approved',;
                            });

                          }
                        >                          Mark as approved;
                        </DropdownMenuItem>;
                      )}
            <TableHead > Reviewer</TableHead>;
            <TableHead > Rating</TableHead>;
            <TableHead > Date</TableHead>;
            <TableHead > Status</TableHead>;
            <TableHead > Reports</TableHead>;
            <TableHead className='text - right'>Actions</TableHead>;
          </TableRow>;
        </TableHeader>;
        <TableBody>;

              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  {review.status === "pending" && (
                    <>
                      <Button

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
                      <DropdownMenuItem onClick={() => handleViewDetails(review)}>
                        View details
                      </DropdownMenuItem>

                      {review.status === "approved" && (
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, status: "rejected" })}>
                          Mark as rejected
                        </DropdownMenuItem>
                      )}
                      {review.status === "rejected" && (
                        <DropdownMenuItem onClick={() => updateReviewStatus({ reviewId: review.id, status: "approved" })}>
                          Mark as approved
                        </DropdownMenuItem>

                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">

                  <Avatar>
                    {selectedReview.reviewer_profile?.avatar_url ? (
                      <AvatarImage
                        src={selectedReview.reviewer_profile.avatar_url}

                    ) : (
                      <AvatarFallback>
                        {selectedReview.reviewer_profile?.display_name ? (
                          getInitials(
                            selectedReview.reviewer_profile.display_name
                          )
                        ) : (
                          <User className='h-4 w-4' />

                    )}

                    </div>
                    <Badge variant='outline'>{selectedReview.status}</Badge>
                  </div>
                </div>
                <div>{renderStars(selectedReview.rating)}</div>
              </div>

                  {selectedReview.communication_rating && (
                    <Badge variant='outline'>
                      Communication: {selectedReview.communication_rating}/5
                    </Badge>

                  Mark as Rejected;
                </Button>;
              )}
              {selectedReview && selectedReview.status === 'rejected' && (;
                <Button

                  onClick={() =>;
                    updateReviewStatus({;
                      reviewId: selectedReview && selectedReview.id,;
                      status: 'approved',;
                    });

                  }
                  disabled={isPending}                >;
                  Mark as Approved;
                </Button>;

              )}
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      )}

  [1, 2, 3,  4, 5].map ( (star) => (<Star key= {;
  star ;
}/>) ) ;
}</div>) ;

  reviews.map ( (review) => (<TableRow key= {
  review.id ";
}> <TableCell> <div className="flex items - center gap - 2"> <Avatar className="h - 8 w - 8"> {
  review.reviewer profile?.avatar url ? (<AvatarImage src= {

}</Avatar> <div> </Badge> </div> </div> <div> {
  renderStars (selectedReview.rating) "
}</div> </div> <div className="border rounded-md p-3 bg-muted/20"> <p className="whitespace-pre-wrap"> {
  selectedReview.review text "
}</p> </div> <div className="space-y-2"> <h4 className="text-sm font-medium">Additional Ratings</h4> Timeliness: {
  selectedReview.timeliness rating
}/5 </Badge>)
}{
  selectedReview.would work again !== undefined && (<Badge variant= {"
  selectedReview.would work again ? " default": " secondary"
}> </Badge>)
}</div> </div> {"
  selectedReview.report count > 0 && (<div className="bg-red-50 border border-red-200 rounded-md p-3"> <h4 className="text-sm font-medium text-red-800">Reports: {
  selectedReview.report count "
}</h4> <p className="text-sm text-red-700"> This review has been reported by users and may need investigation. </p> </div>) "
}</div> <DialogFooter> <Button variant=" destructive" onClick={
  () => handleReject (selectedReview.id)
}disabled= {
  isPending
}> Reject </Button> <Button onClick={
  () => handleApprove (selectedReview.id)
}disabled= {
  isPending
}> Approve </Button> </>)
}> Mark as Rejected </Button>)
}> Mark as Approved </Button>)
}</DialogFooter> </DialogContent> </Dialog>)
}</>)
}"}

