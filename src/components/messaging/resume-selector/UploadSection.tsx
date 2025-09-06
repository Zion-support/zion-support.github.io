import { Upload, FileText } from 'lucide-react'
interface UploadSectionProps {
  customFile: File | null;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void

interface UploadSectionProps {;
  customFile: File | null;
  onFileUpload: (e: React && React.ChangeEvent<HTMLInputElement>) => void;
export function UploadSection(): any ({;
  customFile,;
  onFileUpload,;
}: UploadSectionProps) {;


}

export function UploadSection({ customFile, onFileUpload }: UploadSectionProps) {

            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept=".pdf"
            onChange={onFileUpload}
          />
        </Button>
      </div>
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept=".pdf"
            onChange = {onFileUpload,}
          />
        </Button>
      </div>
      {customFile && (
        <div className='p-3 bg-zion-blue-dark/30 rounded-md'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <FileText className='h-4 w-4 mr-2 text-zion-cyan' />
              <span className='text-white'>{customFile.name}</span>
            </div>
            <span className='text-xs text-zion-slate'>
              {Math.round(customFile.size / 1024)} KB
            </span>          </div>      {customFile && (
      
      {customFile && (
        <div className="p-3 bg-zion-blue-dark/30 rounded-md">;
          <div className="flex items-center justify-between">;
            <div className="flex items-center">;
              <FileText className="h-4 w-4 mr-2 text-zion-cyan" />;
              <span className="text-white">{customFile.name}</span>;
            </div>;
            <span className="text-xs text-zion-slate">{Math.round(customFile.size / 1024)} KB</span>;
          </div>;
        </div>;
      )}
    </div>;
  );
};
}
;
