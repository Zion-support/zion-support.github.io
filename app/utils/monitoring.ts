import { useEffect } from 'react';

import logger from './logger';
export const monitoring = {
  track: (event: string, data?: unknown) => {
    logger.info('Tracking:', event, data);
  }
};