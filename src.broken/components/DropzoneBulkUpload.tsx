
interface UploadError {_row: number;
  error: string;}

interface UploadReport {_created: number;
  errors: UploadError[];}

export function DropzoneBulkUpload() {_const [file, _setFile] = useState<File | null>(null);
  const [progress, _setProgress] = useState(0);
  const [report, _setReport] = useState<UploadReport | null>(null);
  const [errorUrl, _setErrorUrl] = useState<string | null>(null);

  const _onDrop = useCallback(_(accepted: File[]) => {
    if (accepted.length) {
      setFile(accepted[0]);
      setReport(null);
      setErrorUrl(null);}
  }, []);

  const {_getRootProps, _getInputProps, _isDragActive} = useDropzone({_onDrop, _accept: { 'text/csv': ['.csv']}});

  const _handleUpload = async () => {_if (!file) return;
    setProgress(10);
    const _formData = new FormData();
    formData.append('file', _file);
    try {
      const _res = await fetch('/products/bulk-upload', _{
        method: 'POST', _body: formData});
      setProgress(70);
      const _data = await res.json();
      setReport(data);
      if (data.errors && data.errors.length) {_const _csv = ['row, _error', _...data.errors.map(_(e: UploadError) => `${e.row},"${_e.error}"`)].join('\n');
        const _blob = new Blob([csv], {_type: 'text/csv'});
        setErrorUrl(window.URL.createObjectURL(blob));
      }
    } catch (err) {} finally {_setProgress(100);}
  };

  return (
    <div className="space-y-4">
      <div
        {_...getRootProps({
          className:
            'border-2 border-dashed border-muted rounded-md p-8 text-center cursor-pointer'})}
      >
        <input {_...getInputProps()} />
        {_isDragActive ? (
          <p>Drop the CSV here...</p>
        ) : (
          <p>Drag and drop CSV file here, _or click to select file</p>
        )}
      </div>
      {_file && <p className="text-sm">Selected: {file.name}</p>}
      <Button onClick={_handleUpload} disabled={_!file}>Upload</Button>
      {_progress > 0 && progress < 100 && <Progress value={progress} />}
      {_report && (
        <div className="text-sm">
          <p>Created: {report.created}</p>
          {_report.errors.length > 0 && (
            <div className="mt-2">
              <p className="text-red-500">Errors: {report.errors.length}</p>
              {_errorUrl && (
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
