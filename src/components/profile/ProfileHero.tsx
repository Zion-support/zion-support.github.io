
  avatarUrl?: string;
origin/cursor/automate-test-improve-and-merge-code-2533
  coverImageUrl?: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;

  name;
  title;
  avatarUrl;
  coverImageUrl;
  location;
  rating;
  reviewCount;
  aiScore;


export function ProfileHero({

profileType: 'service' | 'talent';

export function ProfileHero({
origin/cursor/automate-test-improve-and-merge-code-2533
  name,
  title,
  avatarUrl,
  coverImageUrl,
  location,
  rating,
  reviewCount,
  aiScore,


  profileType
}: ProfileHeroProps) {
  return (

                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
                  )}
                    "ml-2 border-zion-purple/50 text-zion-cyan",
                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
                  )}
                >;
                  {profileType === 'service' ? 'Service Provider' : 'Talent'}

                </Badge>
              </div>
              <h2 className="text-lg md:text-xl text-zion-slate-light mb-1">{title}</h2>
              <div className="flex flex-wrap items-center gap-3 mt-2">


<h2 className='text-lg md:text-xl text-zion-slate-light mb-1'>
                {title}
              </h2>
              <div className='flex flex-wrap items-center gap-3 mt-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
                {location && (
                  <span className="text-sm text-zion-slate-light">{location}</span>
                )}



                {rating && (
                  <div className='flex items-center gap-1'>
                    <Star className='w-4 h-4 fill-zion-cyan text-zion-cyan' />
                    <span className='text-white font-medium'>
                      {rating.toFixed(1)}
                    </span>
                    {reviewCount && (
                      <span className='text-zion-slate-light text-sm'>
                        ({reviewCount})
                      </span>

                {rating && (;
                  <div className='flex items-center gap-1'>;
                    <Star className='w-4 h-4 fill-zion-cyan text-zion-cyan' />;
                    <span className='text-white font-medium'>;
                      {rating && rating.toFixed(1)}
                    </span>;
                    {reviewCount && (;
                      <span className='text-zion-slate-light text-sm'>;
                        ({reviewCount});
                      </span>;
                    )}
                  </div>
                )}



                {aiScore && (;
                  <div className='px-2 py-0 && 0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan'>                    AI Match: {aiScore}%                {location && (;
                  <span className="text-sm text-zion-slate-light">{location}</span>;
                )}

                {rating && (;
                  <div className="flex items-center gap-1">;
                    <Star className="w-4 h-4 fill-zion-cyan text-zion-cyan" />;
                    <span className="text-white font-medium">{rating && rating.toFixed(1)}</span>;
                    {reviewCount && (;
                      <span className="text-zion-slate-light text-sm">({reviewCount})</span>;
                    )}
                  </div>
                )}


;
                {aiScore && (
                  <div className='px-2 py-0.5 rounded bg-zion-purple/20 text-xs font-medium text-zion-cyan'>
                    AI Match: {aiScore}%
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
