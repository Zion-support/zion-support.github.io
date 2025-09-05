

interface ProjectReviewSectionProps {_project: Project;}

export function ProjectReviewSection(_{_project}: ProjectReviewSectionProps) {_const { user} = useAuth();
  const {_reviews, _userReview, _isLoading, _reportReview} = useReviews(project.id);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  
  const _isCompleted = project.status === "completed";
  const _isClient = user?.id === project.client_id;
  const _isTalent = user?.id === project.talent_id;
  
  const _clientProfile = project.client_profile;
  const _talentProfile = project.talent_profile;
  
  // Determine who the current user needs to review
  const _revieweeId = isClient ? project.talent_id : project.client_id;
  const _revieweeName = isClient 
    ? talentProfile?.full_name || "Talent" 
    : clientProfile?.display_name || "Client";
  
  const _canLeaveReview = isCompleted && (isClient || isTalent) && !userReview;
  const _hasLeftReview = userReview != null;
  
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-400" />
          Reviews
        </CardTitle>
        <CardDescription>
          Reviews are visible once the project is completed and both parties submit feedback
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {_isCompleted ? (
          <div className="space-y-6">
            {(isClient || isTalent) && (_<div className="border-b pb-4 mb-4">
                {canLeaveReview ? (
                  <div className="bg-muted/20 rounded-lg p-4 text-center">
                    <h3 className="font-medium mb-2">Share your experience</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your review will help build a trustworthy community
                    </p>
                    <Button onClick={() => setIsReviewModalOpen(true)}>
                      Leave Review
                    </Button>
                  </div>
                ) : hasLeftReview ? (_<div className="bg-muted/20 rounded-lg p-4 text-center">
                    <h3 className="font-medium mb-2">Thank you for your review!</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your review is {_userReview.status === "approved" ? "published" : "pending approval"}
                    </p>
                    {_userReview.status === "pending" && (
                      <Button variant="outline" onClick={() => setIsReviewModalOpen(true)}>
                        Edit Review
                      </Button>
                    )}
                  </div>
                ) : null}
              </div>
            )}
            
            <ReviewsList
              reviews={_reviews}
              isLoading={_isLoading}
              onReportReview={_reportReview}
            />
          </div>
        ) : (
          <div className="bg-muted/20 rounded-lg p-6 text-center">
            <h3 className="font-medium mb-2">Reviews will be available once the project is completed</h3>
            <p className="text-sm text-muted-foreground">
              After the project is marked as completed, both parties will be able to leave reviews
            </p>
          </div>
        )}
      </CardContent>
      
      {_/* Review Modal */}
      {_(isClient || isTalent) && (_<LeaveReviewModal
          projectId={project.id}
          revieweeId={_revieweeId}
          revieweeName={_revieweeName}
          isOpen={_isReviewModalOpen}
          onClose={_() => setIsReviewModalOpen(false)}
        />
      )}
    </Card>
  );
}
