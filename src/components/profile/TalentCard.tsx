export function TalentCard({
  talent,
  onViewProfile,
  onRequestHire,
  isSaved,
  onToggleSave,
  isAuthenticated,
}: TalentCardProps) {
  const [avatarError, setAvatarError] = useState(false);

  const handleViewProfile = () => {
    if (onViewProfile) {
      onViewProfile(talent.id);    }

    }

  };

    if (onRequestHire) {
      onRequestHire(talent);    }

    }

  };

    if (onToggleSave) {
      onToggleSave(talent.id, !isSaved);

    }
  };

  const skills = talent.skills?.slice(0, 5) || [];
  const talentNameInitial = talent.full_name?.charAt(0) || 'T';

    >
      <div className='p-6'>
        <div className='flex items-start'>
          <div className='relative mr-4'>
            <div className='w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light relative'>
              {' '}
              {/* Added relative for Image */}
              {talent.profile_picture_url && !avatarError ? (
                <Image

                  style={{ objectFit: 'cover' }}
                  className='rounded-full' // Make sure image itself is rounded if fill is used in a rounded container                  onError={() => setAvatarError(true)}
                  priority={false}
                />
              ) : (
                <div className='w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold'>                  {talentNameInitial}

                </div>
              )}
            </div>
            {talent.is_verified && (
              <div className='absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full'>
                <CheckCircle2 className='w-5 h-5 text-zion-cyan' />

              </div>
            )}
          </div>

          <div className='flex-1'>
            <div className='flex justify-between items-start'>
              <h3 className='text-lg font-bold text-white'>
                {talent.full_name}
              </h3>
              <Button

              >
                <Star
                  className={`h-5 w-5 ${isSaved ? 'fill-yellow-400 text-yellow-400' : ''}`}
                />
                <span className='sr-only'>{isSaved ? 'Saved' : 'Save'}</span>
              </Button>
            </div>
            <p className='text-zion-cyan font-medium'>
              {talent.professional_title}
            </p>

            <div className='mt-2 flex flex-wrap gap-3 text-sm'>
              {talent.location && (
                <div className='flex items-center text-zion-slate-light'>
                  <MapPin className='h-4 w-4 mr-1' />                  <span>{talent.location}</span>
                </div>
              )}
              {talent.availability_type && (
                <div className='flex items-center text-zion-slate-light'>
                  <Clock className='h-4 w-4 mr-1' />                  <span>{talent.availability_type}</span>

                  <span>{talent.location}</span>
                </div>
              )}
              {talent.availability_type && (

                  <span>{talent.availability_type}</span>

                </div>
              )}
            </div>
          </div>
        </div>

        {skills.length > 0 && (

                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"

                >

                  {skill}
                </span>
              ))}
              {(talent.skills?.length || 0) > 5 && (
                <span className='px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan'>                  +{(talent.skills?.length || 0) - 5} more

                  +{(talent.skills?.length || 0) - 5} more

                </span>
              )}
            </div>
          </div>
        )}

        <div className='mt-5 flex items-center justify-between'>

          <div>
            {talent.hourly_rate ? (
              <div className='text-white font-bold'>
                ${talent.hourly_rate}
                <span className='text-zion-slate-light font-normal'>/hr</span>
              </div>
            ) : (
              <div className='text-zion-slate-light'>Rate not specified</div>
            )}
          </div>

          <div className='flex items-center gap-2'>
            {isAuthenticated && (
              <Button

                className="bg-zion-purple hover:bg-zion-purple-light text-white"

              >

                Hire
              </Button>
            )}
            <Button

            >
              View <ArrowRight className='ml-1 h-4 w-4' />            </Button>

            </Button>

          </div>
        </div>
      </div>
    </Card>
  );
}