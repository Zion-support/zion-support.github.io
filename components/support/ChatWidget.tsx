import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X } from 'lucide-react';
type ChatMessage = any;
                      onSend()
                    }
                  }}
                  placeholder="Ask a question…"
                  className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => onSend()}
                  disabled={isLoading}
                  className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'                  className="rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            ) : (
              <div className='flex flex-col gap-2 text-sm'>
                <div className='text-gray-700 dark:text-gray-300'>
                  We can escalate this to our team:
                </div>
                <div className='flex gap-2'>
                  <a
                    href='mailto:support@zion.ai'
                    className='rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                  >
                    Email Support
                  </a>
                  <a
                    href='/contact'
                    className='rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                  >
                    Chat with Live Agent
                  </a>                </div>              <div className="flex flex-col gap-2 text-sm">
                <div className="text-gray-700 dark:text-gray-300">We can escalate this to our team:</div>
                <div className="flex gap-2">
                  <a href="mailto:support@zion.ai" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Email Support</a>
                  <a href="/contact" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Chat with Live Agent</a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
);
}
