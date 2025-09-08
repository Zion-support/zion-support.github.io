
export const HireNowCTA = ({}

    <Card className='sticky top-4'>''''
      <CardHeader>''''
        <CardTitle className='text-xl'>Hire This Talent</CardTitle>''''
      </CardHeader>''''
      <CardContent className='space-y-6'>''''
        <div className='text-center'>''''

        </div>''';'

''''
        <div className='space-y-3'>''''
          <div className='flex items-center justify-between'>''''
            <span className='text-gray-600'>Rating</span>''''
            <div className='flex items-center space-x-1'>''''
              <Star className='w-4 h-4 text-yellow-400 fill-current' />''''
              <span className='font-medium'>{rating}</span>''''
              <span className='text-gray-500'>({reviewCount})</span>

          </div>''';'

''''
          <div className='flex items-center justify-between'>''''
            <span className='text-gray-600'>Availability</span>''


              variant={availability === 'available' ? 'default' : 'secondary'}

            </Badge>

        </div>''';'

''''
        <div className='space-y-3'>''''
          <Button className='w-full bg-blue-600 hover: bg-blue-700'>''''

          </Button>''';'

''''
          <Button variant='outline' className='w-full'>''''
            <Calendar className='w-4 h-4 mr-2' />
            Schedule Call


        </div>''';'
'''''

        <div className='text-center text-sm text-gray-500'>

          <p>Available for new projects</p>
        </div>
      </CardContent>






