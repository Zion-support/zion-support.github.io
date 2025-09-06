                {canLeaveReview ? (
                  <div className="bg - muted / 20 rounded - lg p - 4 text - center">;
                    <h3 className="font - medium mb - 2">Share your experience</h3>;
                    <p className="text - sm text - muted - foreground mb - 3">;
                      Your review will help build a trustworthy community;
                    </p>;
                    <Button on_click={() => setIsReviewModalOpen (true)}>;
                      Leave Review;
                    </Button>;
                  </div>) : hasLeftReview ? (
                  <div className="bg - muted / 20 rounded - lg p - 4 text - center">;
                    <h3 className="font - medium mb - 2">;
                      Thank you for your review!;
                    </h3>;
                    <p className="text - sm text - muted - foreground mb - 3">;
                      Your review is{" "}
                      {user_review.status === "approved";
                        ? "published";
                        : "pending approval"}
                    )}
                  </div>;
                ) : null}
              </div>;
            )}
            <ReviewsList
              reviews={reviews}
              isLoading={isLoading}
              onReportReview={reportReview}
        <LeaveReviewModal
          projectId={project && project.id}
          revieweeId={revieweeId}
          revieweeName={revieweeName}
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
        />;
      )}
=======
                    </p>;
                    {user_review.status === "pending" && (
                      <Button;
                        variant="outline";
                        on_click={() => setIsReviewModalOpen (true)}
                      >;
                        Edit Review;
                      </Button>)}
                  </div>) : null}
              </div>)}
            <ReviewsList;
              reviews={reviews}
              is_loading={is_loading}
              onReportReview={report_review}
            />;
          </div>) : (
          <div className="bg - muted / 20 rounded - lg p - 6 text - center">;
            <h3 className="font - medium mb - 2">;
              Reviews will be available once the project is completed;
            </h3>;
            <p className="text - sm text - muted - foreground">;
              After the project is marked as completed, both parties will be;
              able to leave reviews;
            </p>;
          </div>)}
      </CardContent>;
      {/* Review Modal */}
      {(is_client || is_talent) && (
        <LeaveReviewModal;
          project_id={project.id}
          reviewee_id={reviewee_id}
          reviewee_name={reviewee_name}
          is_open={isReviewModalOpen}
          on_close={() => setIsReviewModalOpen (false)}
        />)}
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
