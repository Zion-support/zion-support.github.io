import { Alert, AlertDescription } from '@/components/ui/alert';
export const OfflineIndicator = null;
      <Alert variant={isOnline ? 'default' : 'destructive'}>
        <div className='flex items-center gap-2'>
            <Wifi className='h-4 w-4' />
          ) : (
            <WifiOff className='h-4 w-4' />
          )}
          <AlertDescription>
            {isOnline
              ? 'Connection restored'
              : 'You are offline. Some features may not work.'}
          </AlertDescription>
        </div>
      </Alert>
    </div>
);
};
