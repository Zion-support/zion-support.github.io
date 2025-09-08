

          
          <div>
            <div className="font-medium">
              {review.is_anonymous ? "Anonymous" : review.reviewer_profile?.display_name || "User"}
            </div>
            <div className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(review.created_at), { addSuffix: true })}
            </div>
          </div>
        </div>


        <div className="flex">
          {renderStars(review.rating)}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm whitespace-pre-wrap">{review.review_text}</p>
      </div>

      {(review.communication_rating || review.quality_rating || review.timeliness_rating || review.would_work_again !== undefined) && (
        <div className="border-t pt-3 mt-3">
          <div className="flex flex-wrap gap-2">
            {review.communication_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Communication
                <span className="ml-1 text-yellow-500">{review.communication_rating}/5</span>

            )}
            {review.quality_rating && (
              </Badge>
            )}
            {review.quality_rating && (
              </Badge>
            )}
            {review.quality_rating && (
              <Badge variant='outline' className='flex gap-1 items-center'>
                Quality
                <span className='ml-1 text-yellow-500'>
                  {review.quality_rating}/5
                </span>
              <Badge variant="outline" className="flex gap-1 items-center">
                Quality
                <span className="ml-1 text-yellow-500">{review.quality_rating}/5</span>
              </Badge>
            )}
            {review.timeliness_rating && (
              <Badge variant='outline' className='flex gap-1 items-center'>
                Timeliness
                <span className='ml-1 text-yellow-500'>
                  {review.timeliness_rating}/5
                </span>
              <Badge variant="outline" className="flex gap-1 items-center">
                Timeliness
                <span className="ml-1 text-yellow-500">{review.timeliness_rating}/5</span>
              </Badge>
            )}
            {review.would_work_again !== undefined && (
              <Badge
                variant={review.would_work_again ? 'default' : 'secondary'}
                className={`${review.would_work_again ? 'bg-green-100 text-green-800 hover:bg-green-200' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}              >
                {review.would_work_again
                  ? 'Would work again'
                  : 'Would not work again'}              </Badge>
                {review.would_work_again ? "Would work again" : "Would not work again"}
          <div>
            <div className="font-medium">
              {review.is_anonymous ? "Anonymous" : review.reviewer_profile?.display_name |"User"}
            </div>
            <div className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(review.created_at), { addSuffix: true })}
            </div>
          </div>
        </div>
        <div className="flex">
          {renderStars(review.rating)}
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm whitespace-pre-wrap">{review.review_text}</p>
      </div>
      {(review.communication_rating |review.quality_rating |review.timeliness_rating |review.would_work_again !== undefined) && (
        <div className="border-t pt-3 mt-3">
          <div className="flex flex-wrap gap-2">
            {review.communication_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Communication
                <span className="ml-1 text-yellow-500">{review.communication_rating}/5</span>
              </Badge>
            )}

            {review.quality_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Quality
                <span className="ml-1 text-yellow-500">{review.quality_rating}/5</span>
              </Badge>
            )}


            {review.timeliness_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Timeliness
                <span className="ml-1 text-yellow-500">{review.timeliness_rating}/5</span>
              </Badge>
            )}

            {review.would_work_again !== undefined && (
              <Badge
              <Badge 

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Report Review</DialogTitle>
              <DialogDescription>


                If you believe this review violates our community guidelines, please provide details below.
              </DialogDescription>
            </DialogHeader>
            
            <Textarea
              placeholder="Why are you reporting this review?"
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}


              <Button 
                onClick={handleReport} 
                disabled={!reportReason.trim() || isReporting}
              >
                {isReporting ? "Submitting..." : "Submit Report"}


              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>


