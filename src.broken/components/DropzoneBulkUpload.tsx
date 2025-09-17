import { useDropzone } from 'react-dropzone';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface UploadError {
  row: number;
  error: string;
}

interface UploadReport {
  created: number;
  errors: UploadError[];
}

export function DropzoneBulkUpload() {

  const onDrop = useCallback((accepted: File[]) => {
    if (accepted.length) {
      setFile(accepted[0]);
      setReport(null);
      setErrorUrl(null);
    }

  const handleUpload = async () => {
    if (!file) return;
    setProgress(10);
    const formData = new FormData();
      setProgress(70);
      const data = await res.json();
      setReport(data);
      if (data.errors && data.errors.length) {
        setErrorUrl(URL.createObjectURL(blob));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setProgress(100);
    }
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps({
          className:
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the CSV here...</p>
        ) : (
        )}
      </div>
      {file && <p className="text-sm">Selected: {file.name}</p>}
      <Button onClick={handleUpload} disabled={!file}>Upload</Button>
      {progress > 0 && progress < 100 && <Progress value={progress} />}
      {report && (
        <div className="text-sm">
          <p>Created: {report.created}</p>
          {report.errors.length > 0 && (
            <div className="mt-2">
              <p className="text-red-500">Errors: {report.errors.length}</p>
              {errorUrl && (
                <a href={errorUrl} download="errors.csv" className="underline">
                  Download error CSV
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
