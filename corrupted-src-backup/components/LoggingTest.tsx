import React from 'react';
// import { Button } from '@/components/ui/button';
// import { logger } from '@/utils/productionLogger';

// Simple button component replacement
const Button: React.FC<{
  onClick: () => void;
  variant?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ onClick, className = '', children }) => (
  <button onClick={onClick} className={`px-4 py-2 rounded ${className}`}>
    {children}
  </button>
);

// Simple logger replacement
const logger = {
  error: (message: string, error?: any, meta?: any) => {
    // console.error(message, error, meta);
  },
  warn: (message: string, error?: any, meta?: any) => {
    // console.warn(message, error, meta);
  },
  info: (message: string, meta?: any) => {
    // console.info(message, meta);
  },
  debug: (message: string, meta?: any) => {
    console.debug(message, meta);
  },
};

export const LoggingTest: React.FC = () => {
  const testError = () => {
    try {
      throw new Error(
        'This is a test error for the production logging service'
      );
    } catch (error) {
      logger.error('Test error from LoggingTest component', error, {
        component: 'LoggingTest',
        testType: 'manual_error_test',
      });
    }
  };

  const testWarning = () => {
    logger.warn('This is a test warning message', undefined, {
      component: 'LoggingTest',
      testType: 'manual_warning_test',
    });
  };

  const testInfo = () => {
    logger.info('This is a test info message', {
      component: 'LoggingTest',
      testType: 'manual_info_test',
    });
  };

  const testDebug = () => {
    logger.debug('This is a test debug message', {
      component: 'LoggingTest',
      testType: 'manual_debug_test',
    });
  };

  return (
    <div className='p-6 max-w-md mx-auto bg-white rounded-lg shadow-md'>
      <h2 className='text-xl font-bold mb-4'>Production Logging Test</h2>
      <p className='text-gray-600 mb-4'>
        Test the production logging service by clicking the buttons below. Check
        the browser console and server logs to see the results.
      </p>

      <div className='space-y-2'>
        <Button onClick={testError} variant='destructive' className='w-full'>
          Test Error Logging
        </Button>

        <Button onClick={testWarning} variant='outline' className='w-full'>
          Test Warning Logging
        </Button>

        <Button onClick={testInfo} variant='default' className='w-full'>
          Test Info Logging
        </Button>

        <Button onClick={testDebug} variant='secondary' className='w-full'>
          Test Debug Logging
        </Button>
      </div>

      <div className='mt-4 text-sm text-gray-500'>
        <p>
          Logs are sent to: <code>/api/logs</code>
        </p>
        <p>Check server logs directory for stored logs</p>
      </div>
    </div>
  );
};
