interface ProfileAvailabilityProps {
  availability: Availability;

    }
  };

  return (
    <div className='bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8'>
      <h3 className='text-xl font-bold text-white mb-4'>Availability</h3>

      <div className='flex flex-col md:flex-row md:items-center md:gap-6 mb-4'>
        <Badge
          variant='outline'          className={`${getStatusColor(availability.status)} text-sm py-1 px-3 mb-4 md:mb-0 w-fit`}
        >
          {getStatusText(availability.status)}
        </Badge>

        {availability.nextAvailable && availability.status !== 'available' && (
          <div className='flex items-center gap-2 text-zion-slate-light'>
            <Calendar className='h-4 w-4' />            <span>Next available: {availability.nextAvailable}</span>
          </div>
        )}
      </div>
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Availability</h3>

      <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-4">
        <Badge 
          variant="outline" 

          className={`${getStatusColor(availability.status)} text-sm py-1 px-3 mb-4 md:mb-0 w-fit`}
        >
          {getStatusText(availability.status)}
        </Badge>

            <span>Next available: {availability.nextAvailable}</span>
          </div>
        )}
      </div>

                </div>
              ))}
            </div>
          </div>
        )}
    </div>
  );;
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

}