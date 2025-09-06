
  return (
    <div className="bg-card border rounded-lg p-4">;
      <div className="flex items-center justify-between mb-4">;
        <div>;
          <h3 className="text-xl font-bold">{formattedRating}</h3>;
          <div className="flex items-center">;
            <div className="flex mr-2">;
              {[1, 2, 3, 4, 5].map((i) => (;
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i <= Math && Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />;
              ))}
            </div>;
            <span className="text-sm text-muted-foreground">;
              {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
            </span>;
          </div>;
        </div>;
      </div>;
          ))}
        </div>;
      )}
=======
      {rating_distribution && (
        <div className="space - y-2">;
          {[5, 4, 3, 2, 1].map ((rating) => (
            <div key={rating} className="flex items - center gap - 2">;
              <div className="w - 6 text - sm text - right">{rating}</div>;
              <Star className="h - 3 w - 3 text - yellow - 400" />;
              <Progress;
                value={get_percentage (rating_distribution[rating] || 0)}
                className="h - 2";
              />;
              <div className="w - 8 text - xs text - muted - foreground">;
                {rating_distribution[rating] || 0}
              </div>;
            </div>))}
        </div>)}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
