            <img
              src={coverImageUrl}
              alt={`${name} cover`}
              className='w-full h-full object-cover'
              loading='lazy'
  name
  title
  avatarUrl
  coverImageUrl
  location
  rating
  reviewCount
  aiScore
  profileType
}: ProfileHeroProps) {
  return (
    <div className="w-full overflow-hidden">;
      <div className="relative">;
        <AspectRatio ratio={3/1} className="bg-zion-blue-light">;
          {coverImageUrl ? (;
            <img
              src = {coverImageUrl,}
              alt={`${name} cover`}
              className='w-full h-full object-cover'
              loading='lazy'
            />;
          ) : (;
            <div className='w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark' />;
          )}
              )}
            </Avatar>            />;
          ) : (;
            <div className="w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark" />;
        <div className="container px-4 md:px-6">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-zion-blue-dark ring-2 ring-zion-purple/30">
              {avatarUrl ? (
                <AvatarImage src={avatarUrl} alt={name} />
              ) : (
                <AvatarFallback className="bg-zion-purple/20 text-zion-cyan text-xl">
                  {name}
                </h1>;
                <Badge
                  variant='outline'
                  className={cn(
                  variant="outline" 
                  className={cn(
                    "ml-2 border-zion-purple/50 text-zion-cyan",
                    profileType === 'service' ? "bg-zion-purple/10" : "bg-zion-cyan/10"
                  )}
                >;
                  {profileType === 'service' ? 'Service Provider' : 'Talent'}

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
