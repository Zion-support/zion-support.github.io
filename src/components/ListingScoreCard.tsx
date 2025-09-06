interface ListingScoreCardProps {
  title: string;
  description: string;
  image?: string;
  category: string;
  tags?: string[];
  author?: string;
  authorImage?: string;
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  className?: string;

export function ListingScoreCard({
  title,
  description,
  image,
  category,
  tags,
  author,
  authorImage,
  aiScore,
  rating = 0,
  reviewCount = 0,
  className,
}: ListingScoreCardProps) {
  const [mainImageError, setMainImageError] = useState(false);
  const [authorImageError, setAuthorImageError] = useState(false);

    >
      {image && !mainImageError && (
        <div className='h-48 w-full overflow-hidden relative'>
          {' '}
          {/* Added relative for Image layout fill */}
          <Image

          />
        </div>
      )}
      {(!image || mainImageError) && ( // Fallback if no image or error
        <div className='h-48 w-full overflow-hidden bg-zion-blue-light/10 flex items-center justify-center'>
          <span className='text-zion-slate-light text-sm'>No Image</span>
        </div>
      )}

      <div className='flex flex-col p-4 flex-grow'>
        <div className='mb-2 flex items-center justify-between'>
          <Badge
            variant='secondary'
            className='bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'
          >
            {category}
          </Badge>
          {aiScore === undefined || aiScore === null ? (
            <div className='text-xs italic text-zion-slate-light'>
              Beta – simulated results
            </div>
          ) : (
            aiScore > 0 && (
              <div className='flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs'>
                <span className='font-medium mr-1'>AI Match:</span>
                <span>{aiScore}%</span>
              </div>
            )
          )}
        </div>
        <h3 className='text-xl font-bold mb-2 text-white group-hover:text-zion-purple transition-colors'>
          {title}
        </h3>
        <p className='text-zion-slate mb-4 flex-grow line-clamp-2'>
          {description}
        </p>

        {rating > 0 && (

                />
              ))}
            </div>
            <span className='text-sm text-zion-slate-light ml-1'>
              ({reviewCount})
            </span>
          </div>
        )}

        {tags && tags.length > 0 && (

                {tag}
              </Badge>
            ))}
          </div>
        )}

        <Button className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white'>
          Request Quote
        </Button>

        {author && (
          <div className='flex items-center mt-4 pt-4 border-t border-zion-blue-light'>
            {authorImage && !authorImageError ? (
              <div className='relative h-8 w-8 rounded-full mr-2 overflow-hidden'>
                {' '}
                {/* Added relative and overflow-hidden */}
                <Image

                />
              </div>
            ) : (
              <div className='h-8 w-8 rounded-full bg-zion-purple/20 mr-2 flex items-center justify-center text-zion-purple'>
                {author.charAt(0)}
              </div>
            )}
            <span className='text-sm text-zion-slate-light'>{author}</span>
          </div>
        )}
      </div>
    </div>
  );