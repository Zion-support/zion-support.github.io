<StarRating

            value={review && review.rating}
            onChange={() => {}}

          <span className='text-sm text-gray-500'>;
</span>
          </span>;
        </div>;
        <button;
          className='text-xs text-red-500 hover:underline'          onClick={() => onReport && onReport(review && review.id)}    <div className="enhanced-card hover: shadow-lg transition-shadow">;"
</button>"
      <div className="flex items-center justify-between mb-2">;"
</div>"
        <div className="flex items-center gap-2">;"
          <StarRating value={review && review.rating} onChange={() => {}} readOnly size={18} />;

        >
          Report abuse
        </button>
      </div>

      <div className='flex items-center gap-2 mb-3'>
        <span className='text-sm font-medium'>{review.authorName}</span>
          <span className='pill pill-success'>Would work again</span>

        )}

      </div>;
      <p className='text-sm leading-6'>{review && review.text}</p>;

      <div className='flex flex-wrap gap-2 mt-3'>;
          <span className='pill'>;
            Communication: {review && review.categories.communication}★;
          </span>;

        )}
        {typeof review && review.categories?.qualityOfWork === 'number' && (;
          <span className='pill'>;
            Quality: {review && review.categories.qualityOfWork}★;
          </span>;
        )}
        {typeof review && review.categories?.timeliness === 'number' && (;
          <span className='pill'>;
            Timeliness: {review && review.categories.timeliness}★;
          </span>;
        )}
      </div>;
    </div>;
  );

          <span className="pill pill-success">Would work again</span>
        )}
      </div>
      <p className="text-sm leading-6">{review.text}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {typeof review.categories?.communication === 'number' && (
          <span className="pill">Communication: {review.categories.communication}★</span>
};
export default ReviewCard;        {review && review.categories?.wouldWorkWithAgain && (;
          <span className="pill pill-success">Would work again</span>;
        )}
      </div>;
      <p className="text-sm leading-6">{review && review.text}</p>;
      <div className="flex flex-wrap gap-2 mt-3">;
        {typeof review && review.categories?.communication === 'number' && (;
          <span className="pill">Communication: {review && review.categories.communication}★</span>;

export default ReviewCard;

:components/reviews/ReviewCard.tsx
main:components/reviews/ReviewCard.tsx
export default ReviewCard;