interface BrowseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  location?: string;
  badges: string[];
  price?: string;
  image?: string;
  match?: number;
  timePosted?: string;

interface BrowseCardsProps {

                      <AvatarImage src={item.image} alt={item.title} />
                      <AvatarFallback>
                        {item.title.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className='h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center'>
                      <span className='text-primary font-semibold'>JOB</span>
                    </div>
                  )}
                  <div>
                    <h3 className='font-medium'>{item.title}</h3>
                    <p className='text-sm text-muted-foreground'>
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                >
                  {savedItems.includes(item.id) ? (
                    <BookmarkCheck className='h-5 w-5 text-primary' />
                  ) : (
                    <Bookmark className='h-5 w-5 text-muted-foreground' />
                  )}
                </button>
              </div>

                  <Badge 
                    key = {index,}
                    variant="outline" 
                    className="text-xs font-normal"

                  >

                    {badge}
                  </Badge>
                ))}
              </div>

              <p className='mt-3 text-sm line-clamp-2'>{item.description}</p>

              <div className='mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground'>

                {item.location && (
                  <div className='flex items-center gap-1'>
                    <MapPin className='h-3 w-3' />
                    <span>{item.location}</span>
                  </div>
                )}

                {item.price && (
                  <div className='flex items-center gap-1'>
                    <DollarSign className='h-3 w-3' />
                    <span>{item.price}</span>
                  </div>
                )}

                {item.timePosted && (
                  <div className='flex items-center gap-1'>
                    <Clock className='h-3 w-3' />
                    <span>{item.timePosted}</span>
                  </div>
                )}

                {item.match && (
                  <div className='ml-auto bg-primary/10 text-primary rounded-full px-2 py-0.5'>                    {item.match}% match

                    {item.match}% match

                  </div>
                )}
              </div>
            </div>

              >
                View Details <ChevronRight className='h-4 w-4' />              </Button>

              </Button>

            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}