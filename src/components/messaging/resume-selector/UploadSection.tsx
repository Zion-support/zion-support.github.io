import React from 'react'
import { Button } from '@/components/ui/button'

import React from 'react';
import { Button } from "@/components/ui/button";
        <div className='p-3 bg-zion-blue-dark/30 rounded-md'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <FileText className='h-4 w-4 mr-2 text-zion-cyan' />
              <span className='text-white'>{customFile.name}</span>
            </div>
            <span className='text-xs text-zion-slate'>
              {Math.round(customFile.size / 1024)} KB
            </span>          </div>      {customFile && (
      )}
    </div>
  )
}

          <input;
            type='file';
            className='absolute inset - 0 w - full h - full opacity - 0 cursor - pointer';
            accept='.pdf'            on_change={onFileUpload}
          />;
        </Button>;
      </div>;
            type="file";
            className="absolute inset - 0 w - full h - full opacity - 0 cursor - pointer";
            accept=".pdf";
            on_change = {onFileUpload, }
          />;
        </Button>;
      </div>;
      {custom_file && (
        <div className='p - 3 bg - zion - blue - dark / 30 rounded - md'>;
          <div className='flex items - center justify - between'>;
            <div className='flex items - center'>;
              <FileText className='h - 4 w - 4 mr - 2 text - zion - cyan' />;
              <span className='text - white'>{custom_file.name}</span>;
            </div>;
            <span className='text - xs text - zion - slate'>;
              {Math.round (custom_file.size / 1024)} KB;
            </span>          </div>      {custom_file && (
        <div className="p - 3 bg - zion - blue - dark / 30 rounded - md">;
          <div className="flex items - center justify - between">;
            <div className="flex items - center">;
              <FileText className="h - 4 w - 4 mr - 2 text - zion - cyan" />;
              <span className="text - white">{custom_file.name}</span>;
            </div>;
            <span className="text - xs text - zion - slate">{Math.round (custom_file.size / 1024)} KB</span>;
          </div>;
        </div>)}
    </div>);
}

;
