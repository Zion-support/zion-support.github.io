
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

        )}
      </div>
    </div>
  )}
export default ReviewCard;