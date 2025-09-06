import { Upload, FileText } from 'lucide-react';

interface UploadSectionProps {
  customFile: File | null;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: () => void;
  onProcessFile: () => void;
  isProcessing: boolean;
}
      )}

      {customFile && (
        <Button
          onClick={onProcessFile}
          disabled={isProcessing}
          className="w-full"
        >
          {isProcessing ? 'Processing...' : 'Process Resume'}
        </Button>
      )}
    </div>
  );
