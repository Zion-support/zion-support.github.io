export function ProjectReviewSection({ project }: ProjectReviewSectionProps) {
  const { user } = useAuth(),
  const { reviews, userReview, isLoading, reportReview } = useReviews(project.id),
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false),
  
  const isCompleted = project.status === "completed","
  const isClient = user?.id === project.client_id,
  const isTalent = user?.id === project.talent_id,
  
  const clientProfile = project?.talent_profile,
  const talentProfile = project.talent_profile,

  // Determine who the current user needs to review;
  const revieweeId = isClient ? project.talent_id : project.client_id,
  const revieweeName = isClient;"
    ? talentProfile?.full_name || "Talent"""
    : clientProfile?.full_name || "Client","
  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview,
  const hasLeftReview = userReview != null,
  


  "
  

  // Determine who the current user needs to review;
  
  return ("
    <Card className="mt-6">"

      <CardHeader>
        <CardTitle className="flex items-center gap-2">"
          <Star className="h-5 w-5 text-yellow-400" />"

        
        <CardDescription>

        
      



      

      <CardContent>
          <div className="space-y-6">"
</div>"
              <div className="border-b pb-4 mb-4">"
                  <div className="bg-muted/20 rounded-lg p-4 text-center">"
                    <h3 className="font-medium mb-2">Share your experience</h3>""
                    <p className="text-sm text-muted-foreground mb-3">"
</p>
                    </p>)
                    <Button onClick={() => setIsReviewModalOpen(true)}>

                    
                    <h3 className="font-medium mb-2">Thank you for your review!</h3>""
                    </p>"
                      <Button variant="outline" onClick={() => setIsReviewModalOpen(true)}>"

    <Card className="mt-6">;"

      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;"
          <Star className="h-5 w-5 text-yellow-400" />;"

        ;
        <CardDescription>;

      <CardContent>;
          <div className="space-y-6">;"
              <div className="border-b pb-4 mb-4">;"
                  <div className="bg-muted/20 rounded-lg p-4 text-center">;"
                    <h3 className="font-medium mb-2">Share your experience</h3>;""
                    <p className="text-sm text-muted-foreground mb-3">;"
                    </p>;
                    <Button onClick={() => setIsReviewModalOpen(true)}>;

                  </div>;"
                  <div className='bg-muted/20 rounded-lg p-4 text-center'>;
</div>
                    <h3 className='font-medium mb-2'>;
</h3>
                    </h3>;
                    <p className='text-sm text-muted-foreground mb-3'>;
                      <Button variant="outline" onClick={() => setIsReviewModalOpen(true)}>;"

            <ReviewsList;
              reviews = {reviews,}
              isLoading = {isLoading,}
              onReportReview = {reportReview,}


        <LeaveReviewModal;
          projectId = {project.id,}
          revieweeId = {revieweeId,}
          revieweeName = {revieweeName,}
          isOpen = {isReviewModalOpen,}
          onClose = {(,) => setIsReviewModalOpen(false),}

              reviews={reviews}
              isLoading={isLoading}
              onReportReview={reportReview}



            />

          <div className="bg-muted/20 rounded-lg p-6 text-center">"
            <h3 className="font-medium mb-2">Reviews will be available once the project is completed</h3>""
            <p className="text-sm text-muted-foreground">"
    ;"
    <Card className='mt - 6'>;


        <CardTitle className='flex items - center gap - 2'>;

          <Star className='h - 5 w - 5 text - yellow - 400' />;



          <div className='space - y-6'>;
              <div className='border - b pb - 4 mb - 4'>;
                  <div className='bg - muted / 20 rounded - lg p - 4 text - center'>;
                    <h3 className='font - medium mb - 2'>Share your experience</h3>;
                    <p className='text - sm text - muted - foreground mb - 3'>;
                    <Button on_click={(, ) => setIsReviewModalOpen (true)}>;

                  </div>) : hasLeftReview ? (
                    <h3 className='font - medium mb - 2'>;
                      <Button;
                        variant='outline';')
                        on_click={() => setIsReviewModalOpen (true)}

                      )}
                  </div>) : null}
              </div>)}
              reviews = {reviews, }
              is_loading = {is_loading, }
              onReportReview = {report_review, }
            />;

          </div>) : (
          <div className='bg - muted / 20 rounded - lg p - 6 text - center'>;
            <p className='text - sm text - muted - foreground'>;
            </p>;)
          projectId={project.id}
          revieweeId={revieweeId}
          revieweeName={revieweeName}
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
