

  return (
    <div className="bg-card border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>

                  }`}
                />
              ))}
            </div>

=======

            <span className="text-sm text-muted-foreground">

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
            </span>
          </div>
        </div>
      </div>

            <div key={rating} className="flex items-center gap-2">
              <div className="w-6 text-sm text-right">{rating}</div>
              <Star className="h-3 w-3 text-yellow-400" />
              <Progress

                value={getPercentage(ratingDistribution[rating] || 0)}
                className="h-2"
              />
              <div className="w-8 text-xs text-muted-foreground">
                {ratingDistribution[rating] || 0}
              </div>;
            </div>;

          ))}
        </div>;
      )}
<<<<<<< HEAD
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
