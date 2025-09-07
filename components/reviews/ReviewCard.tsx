
            value={review.rating}
            onChange={() =    /> {}}
            readOnly
            size={18}
          />
          <span className='text-sm text-gray-500    />
            {new Date(review.createdAt).toLocaleDateString()}
          </span>
        </div>
        <button
          className=text-xs text-red-500 hover:underline'
          onClick={() =    /> onReport && onReport(review.id)}
>>>>>>> origin/main
        >
          Report abuse
        </button>
      </div>
<<<<<<< HEAD
      <div className="flex items-center gap-2 mb-3>
        <span className=text-sm font-medium">{review.authorName}</span>
        {review.categories?.wouldWorkWithAgain && (
          <span className="pill pill-success>Would work again</span>
        )}
      </div>
      <p className=text-sm leading-6">{review.text}</p>

      <div className="flex flex-wrap gap-2 mt-3>
        {typeof review.categories?.communication === 'number && (
          <span className=pill">Communication: {review.categories.communication}★</span>
        )}
        {typeof review.categories?.qualityOfWork === number' && (
          <span className="pill>Quality: {review.categories.qualityOfWork}★</span>
        )}
        {typeof review.categories?.timeliness === 'number && (
          <span className=pill">Timeliness: {review.categories.timeliness}★</span>
        )}
      </div>
    </div>
  )
}

export default ReviewCard;
=======
<div className=flex items-center gap-2 mb-3'    />
        <span className='text-sm font-medium    />{review.authorName}</span>
        {review.categories?.wouldWorkWithAgain && (<span className=pill pill-success'    />Would work again</span>;}
        )}
      </div>
      <p className='text-sm leading-6    />{review.text}</p>
      <div className=flex flex-wrap gap-2 mt-3'    />
        {typeof review.categories?.communication === 'number && (<span className=pill'    />;}
            Communication: {review.categories.communicatio}
}★
          </span>
        )}
        {typeof review.categories?.qualityOfWork === 'number && (<span className=pill'    />;}
            Quality: {review.categories.qualityOfWor}
}★
          </span>
        )}
        {typeof review.categories?.timeliness === 'number && (<span className=pill'    />;}
            Timeliness: {review.categories.timelines}
}★
          </span>
        )}
      </div>
    </div>
  )}
export default ReviewCard;