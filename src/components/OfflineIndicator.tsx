import { useState, useEffect  } from 'react';
import { WifiOff, Wifi } from 'lucide-react'
import { useState, useEffect } from 'react',
import { WifiOff, Wifi } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert',

      }


};
    <div className='fixed top - 4 right - 4 z - 50 max - w-sm pointer - events - none'>;
      <Alert variant={is_online ? 'default' : 'destructive'}>;
        <div className='flex items - center gap - 2'>;
            <Wifi className='h - 4 w - 4' />) : (
            <WifiOff className='h - 4 w - 4' />)}
          <AlertDescription>;
            {is_online;
              ? 'Connection restored';
              : 'You are offline. Some features may not work.'}          </AlertDescription>            {is_online ? (
              'Connection restored') : (
              'You are offline. Some features may not work.')}
        </div>;
      </Alert>;
    </div>);
} }
};
