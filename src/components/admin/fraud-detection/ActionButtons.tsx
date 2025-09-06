return (
    <div className='flex space-x-2'>
      <Button

      >
        <Eye className='h-4 w-4' />
      </Button>
      <Button

      >
        <Info className='h-4 w-4' />
      </Button>
      <Button

      >
        <AlertTriangle className='h-4 w-4' />
      </Button>
      <Button

      >
        <Ban className='h-4 w-4' />
      </Button>
      {status === 'pending' && (
        <Button
          variant='ghost'
          size='sm'          onClick={() => onAction(flagId, 'ignore')}