 </div> </div> </div>) 
};
<<<<<<< HEAD

const ReviewSummary: React.FC<Props> = ({ summary }) => {
  return (
    <div className='enhanced-card flex items-center justify-between'>
      <div>
        <div className='flex items-center gap-3'>
          <span className='text-2xl font-semibold'>
            {summary.averageRating.toFixed(1)}
          </span>
          <StarRating
            value={Math.round(summary.averageRating)}
            onChange={() => {}}
            readOnly
          />
        </div>
        <div className='text-sm text-gray-600 mt-1'>
          <span className='mr-3'>{summary.totalReviews} reviews</span>
          <span>{summary.totalCompletedProjects} completed projects</span>
        </div>
      </div>
    </div>
  );
};

=======
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
export default ReviewSummary;
