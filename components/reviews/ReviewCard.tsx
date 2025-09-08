<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';
import StarRating from './StarRating';
import type { PublicReview } from '../../types/reviews';
type Props = {
  review: PublicReview,
  onReport?: (id: string) => void
};

const ReviewCard: React.FC<Props> = ({ review, onReport }) => {
  return (
    <div className="enhanced-card hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <StarRating value={review.rating} onChange={() => {}} readOnly size={18} />
          <span className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</span>
        </div>
        <button
          className="text-xs text-red-500 hover:underline"
          onClick={() => onReport && onReport(review.id)}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
type Props = any;

export default ReviewCard;
      <div className='flex items-center justify-between mb-2'    />;
        <div className='flex items-center gap-2'    />;
          <StarRating;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            value={review.rating}
            onChange={() =    /> {}}
<<<<<<< HEAD

          className=text-xs text-red-500 hover:underline'
          onClick={() =    /> onReport && onReport(review.id)}

=======
<<<<<<< HEAD
            readOnly
            size={18}
          />
          <span className='text-sm text-gray-500'    />
            {new Date(review.createdAt).toLocaleDateString()}
          </span>
        </div>
        <button
<<<<<<< HEAD
          className='text-xs text-red-500 hover:underline'
          onClick={() =    /> onReport && onReport(review.id)}
=======
<<<<<<< HEAD
          className="text-xs text-red-500 hover:underline"
          onClick={() => onReport && onReport(review.id)}
=======
          className=text-xs text-red-500 hover:underline'
          onClick={() =    /> onReport && onReport(review.id)}
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
        >
          Report abuse
        </button>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-medium">{review.authorName}</span>
        {review.categories?.wouldWorkWithAgain && (
          <span className="pill pill-success">Would work again</span>
        )}
      </div>
      <p className="text-sm leading-6">{review.text}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {typeof review.categories?.communication === 'number' && (
          <span className="pill">Communication: {review.categories.communication}★</span>
        )}
        {typeof review.categories?.qualityOfWork === 'number' && (
          <span className="pill">Quality: {review.categories.qualityOfWork}★</span>
        )}
        {typeof review.categories?.timeliness === 'number' && (
          <span className="pill">Timeliness: {review.categories.timeliness}★</span>
<<<<<<< HEAD
        )}
      </div>
  )
};

export default ReviewCard;
      <div className='flex items-center justify-between mb-2'>;'
        <div className='flex items-center gap-2'>;'
          <StarRating;
            value={review.rating}
            onChange={() => {}}
            readOnly;
            size={18}
          />;
          <span className='text-sm text-gray-500'>;'
            {new Date(review.createdAt).toLocaleDateString()}
          </span>;
        </div>;
        <button;
          className='text-xs text-red-500 "hover":underline';'
          onClick={() => onReport && onReport(review.id)}
        >;
          Report abuse;
        </button>;
      </div>;
<div className='flex items-center gap-2 mb-3'>;'
        <span className='text-sm font-medium'>{review.authorName}</span>;'
        {review.categories?.wouldWorkWithAgain && (<span className='pill pill-success'>Would work again</span>;'
        )}
      </div>;
      <p className='text-sm leading-6'>{review.text}</p>;'
      <div className='flex flex-wrap gap-2 mt-3'>;'
        {typeof review.categories?.communication === 'number' && (<span className='pill'>;'
            }
            "Communication": {review.categories.communicatio
}★;
          </span>;
        )}
        {typeof review.categories?.qualityOfWork === 'number' && (<span className='pill'>;'
            }
            "Quality": {review.categories.qualityOfWor
}★;
          </span>;
        )}
        {typeof review.categories?.timeliness === 'number' && (<span className='pill'>;'
            }
            "Timeliness": {review.categories.timelines
}★;
          </span>;
        )}
      </div>
=======
        )}
      </div>
    </div>
  )
};

<<<<<<< HEAD
=======
export default ReviewCard;
export default ReviewCard
=======
=======
            readOnly;
            size={18}
          />;
          <span className='text-sm text-gray-500'    />;
            {new Date(review.createdAt).toLocaleDateString()}
          </span>;
        </div>;
        <button;
          className='text-xs text-red-500 hover:underline';
          onClick={() =    /> onReport && onReport(review.id)}
        >;
          Report abuse;
        </button>;
      </div>;
<div className='flex items-center gap-2 mb-3'    />;
        <span className='text-sm font-medium'    />{review.authorName}</span>;
        {review.categories?.wouldWorkWithAgain && (<span className='pill pill-success'    />Would work again</span>;}
        )}
      </div>;
      <p className='text-sm leading-6'    />{review.text}</p>;
      <div className='flex flex-wrap gap-2 mt-3'    />;
        {typeof review.categories?.communication === 'number' && (<span className='pill'    />;}
            Communication: {review.categories.communicatio,}
}★;
          </span>;
        )}
        {typeof review.categories?.qualityOfWork === 'number' && (<span className='pill'    />;}
            Quality: {review.categories.qualityOfWor,}
}★;
          </span>;
        )}
        {typeof review.categories?.timeliness === 'number' && (<span className='pill'    />;}
            Timeliness: {review.categories.timelines,}
}★;
          </span>;
        )}
      </div>;
    </div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  )}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

