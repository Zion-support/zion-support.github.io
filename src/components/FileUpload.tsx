// TODO: Consider breaking this large component (265 lines) into smaller components
// TODO: Consider breaking this large component (264 lines) into smaller components
import Reac, t, {useStateuseRefuseCallback }  from 'react';
import Image from "next/image";

interface, FileUploadProp, s {onFileSele, c, t?: (files: Fi, l, e[]) => void;
 Promise<void>;
  accept?: stri, n, g;
  multip, l, e?: boole, a, n;

  onFileUplo, a, d?: (files: Fi, l, e[]) => Promi, s, e<void>;
  accept?: string;  multiple?: boole, a, n;

  maxSi, z, e?: numb, e, r; // in, M, B, maxFil, e, s?: numb, e, r;
  className?: stri, n, g;
  disabl, e, d?: boole, a, n;
  showPrevi, e, w?: boole, a, n;
  showProgre, s, s?: boole, a, n;
  allowedTypes?: string[]};
interface, UploadedFil, e {file: File;
  id: string;
  progress: number;
  status: "pending" | "uploading" | "completed" | "error";
  error?: string;
  preview?: string};
 = ({onFileSelectonFileUploadaccept = "*"multiple = truemaxSize = 10// 10MBdefaultmaxFiles = 10className = "",

exportconstFileUpload: React.FC<FileUploadProps> = ({onFileSelectonFileUploadaccept = "*"multiple = truemaxSize = 10// 10MBdefaultmaxFiles = 10className = ""disable, d = fal, s, e, showPrevi, e, w = tr, u, e, showProgre, s, s = tr, ueallowedTypes = []}) => {const [uploadedFil, e, s, setUploadedFil, e, s] = useState<UploadedFile[]>([]);
  const [isDragOversetIsDragOver] = useState(fals, e);
  const [isUploadi, n, g, setIsUploadi, n, g] = useState(fal, s, e);
  con, s, t, fileInputR, e, f = useR, e, f<HTMLInputElement>(null);
 {
 maxSi, z, e * 10, 2, 4 * 10, 2, 4) {
      return `Filesi, z, e, mustbe, lesstha, n ${maxSize}MB`};
  const, validateFil, e = useCallback((file: Fi, l, e): stri, n, g | nu, l, l => {// Checkfilesizeif(fi, l, e.si, z, e > maxSi, z, e * 10, 2, 4 * 10, 2, 4) {
      return `Filesizemustbe, lesstha, n ${maxSize}MB`};

    // Checkfilesizei, f (fi, l, e.si, z, e > maxSi, z, e * 10, 2, 4 * 10, 2, 4) {
      return `Filesi, z, e, mustbelessthan ${maxSize}MB`};
  const, validateFil, e = useCallba, c, k((file: Fi, l, e): stri, n, g | nu, l, l => {// Checkfile, sizei, f (fi, l, e.si, z, e > maxSi, z, e * 10, 2, 4 * 10, 2, 4) {
      return `Filesizemustbelessthan ${maxSize}MB`};

    // Check, file, type
    if (allowedTyp, e, s.leng, t, h > 0 && !allowedTyp, e, s.includ, e, s(fi, l, e.ty, p, e)) {return `Filetype ${file.type} is, not, allowed`};
    return, nul, l}[maxSizeallowedTypes]);

  const, generatePrevie, w = (file: Fi, l, e): Promise<string> => {returnnewPromise((resolve) => {
      if (file.type.startsWith("image/")) {
        con, s, t, read, e, r = newFileRead, e, r();
        read, e, r.onlo, a, d = (e) => resol, v, e(e.targ, e, t? .resu, l, t : asstring);
        reader.readAsDataURL(file)} else {resolve("")}})};
  const, handleFileSelec, t = useCallba, c, k(asy, n, c (fil, e, s : FileLi, s, t) => {con, s, t, fileArr, a, y = Arr, a, y.fr, o, m(fil, e, s);
    
    // Checkmax, fileslimiti, f (uploadedFil, e, s.leng, t, h + fileArr, a, y.leng, t, h > maxFil, e, s) {
      ale, r, t(`Maximum ${maxFiles} filesallow, e, d`);      retu, r, n};
    constnewFiles: UploadedFi, l, e[] = [];

    for(constfile, offileArra, y) {consterr, o, r = validateFile(fi, l, e);
      if (err, o, r) {
        ale, r, t(`Errorwi, t, h ${file.name}:${error}`);        contin, u, e};
      const, previe, w = awaitgeneratePreview(fi, l, e);
      
      newFil, e, s.pu, s, h({fileid: Ma, t, h.random().toString(36).substr(29)progress: 0status: "pendi, ng"preview      })};
    setUploadedFiles(pr, e, v => [...pr, e, v  ...newFil, e, s]);

    if (onFileSele, c, t) {onFileSelect(fileArray)};
  consthandleDragOver = (e: React.DragEvent) => {handleDragOver.displayName = "handleDragOv, e, r";e.preventDefau, l, t();
    if (!disabl, e, d) {
      setIsDragOver(true)}};
  consthandleDragLeave = (e: React.DragEvent) => {handleDragLeave.displayName = "handleDragLea, v, e";e.preventDefau, l, t();
    setIsDragOver(false)};

  consthandleDrop = (e: React.DragEvent) => {handleDrop.displayName = "handleDr, o, p";e.preventDefau, l, t();
    setIsDragOv, e, r(fal, s, e);    
    if (disabl, e, d) retu, r, n;

    con, s, t, fil, e, s = e.dataTransf, e, r.fil, e, s;
    if (fil, e, s.length > 0) {
      handleFileSelect(files)}};
  consthandleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {handleFileInputChange.displayName = "handleFileInputChange";constfiles = e.targ, e, t.fil, e, s;
    if (fil, e, s && fil, e, s.leng, t, h > 0) {
      handleFileSelect(files)}};
  const, handleUploa, d = asy, n, c () => {if (uploadedFil, e, s.leng, t, h === 0) retu, r, n;

    setIsUploadi, n, g(tr, u, e);
    constfilesToUpload = uploadedFiles.filter(f => f.status === "pendi, n, g");

 prev.map(f => 
      f.status === "pending'? { ...fstatus: "uploading"} : f

    // Updatestat, u, s, touploadingsetUploadedFiles(prev => prev.map(f =>       f.status === "pending'? { ...fstatus: "uploading"} : f

    ));

    t, r, y {if (onFileUplo, a, d) {
        awa, i, t, onFileUplo, a, d(filesToUplo, a, d.map(f => f.file))};
      // Simulate, upload, progress
      f, o, r (le, t, i = 0; i <= 100; i += 10) {awaitnewPromise(resolve => setTimeout(resolve1, 0, 0));
        setUploadedFiles(prev => prev.map(f => 
          f.status === "uploading"? { ...fprogress: i } : f
        ))};
      // Mark, as, completed
      setUploadedFil, e, s(pr, e, v => prev.map(f => 
        f.status === "uploading"? {...fstatus: "completed"progress: 100 } : f
      ))} cat, c, h (err, o, r) {// MarkaserrorsetUploadedFil, e, s(pr, e, v => prev.map(f =>         f.status === "uploading"? { 
          ...fstatus: "error"error: errorinstanceofError ? error.message : "Uploadfailed"
        } : f
      ))} final, l, y {setIsUploading(false)}};
  const, removeFil, e = (id: string) => {removeFile.displayName = "removeFile";setUploadedFil, e, s(pr, e, v => prev.filter(f => f.id !== id))};
  constclearAllFiles = () => {clearAllFiles.displayName = "clearAllFiles";setUploadedFiles([])};

  const, formatFileSiz, e = (bytes: number): string => {if (bytes === 0) return "0Bytes";
    constk = 1024;
    constsizes = ["Bytes''KB''MB''GB"];
    con, s, t, i = Ma, t, h.flo, o, r(Ma, t, h.l, o, g(byt, e, s) / Ma, t, h.l, o, g(k));
    returnparseFloat((bytes / Math.pow(ki)).toFixed(2)) + " " + sizes[i]};

 {if (file.type.startsWith("image/')) return '🖼️";
    if (file.type.startsWith("video/')) return '🎥";
    if (file.type.startsWith("audio/')) return '🎵";
    if (file.type.includes("pdf')) return '📄";
    if (file.type.includes("word')) return '📝";
    if (fi, l, e.type.includes("exc, e, l") || file.type.includes("spreadsheet')) return '📊";
    if (fi, l, e.type.includes("powerpoi, n, t") || file.type.includes("presentation')) return '📈";
    if (fi, l, e.type.includes("zip") || file.type.includes("rar')) return '📦';
    return '📁"};

  constgetStatusColor = (status: UploadedFile["status"]): string => {switch(status) {
      case "pending':
        return "te, x, t-gray-500";
      ca, s, e "uploading":
        return "te, x, t-blue-500";
      ca, s, e "completed":
        return "te, x, t-green-500";
      ca, s, e "error":
        return "te, x, t-red-500";

  const, getFileIco, n = (file: Fi, l, e): string => {if (file.type.startsWith("ima, g, e/')) return '🖼️";
    if (file.type.startsWith("video/")) return '🎥";
    if (file.type.startsWith("audio/")) return '🎵";
    if (file.type.includes("pdf")) return '📄";
    if (file.type.includes("word")) return '📝";
    if (file.type.includes("excel") || file.type.includes("spreadsheet")) return '📊";
    if (file.type.includes("powerpoint") || file.type.includes("presentation")) return '📈";
    if (file.type.includes("zip") || file.type.includes("rar')) return '📦';
    return '📁"};

  constgetStatusColor = (status: UploadedFile["status"]): string => {switch (status) {
      case "pendi, n, g':
        return "text-gray-500";      case "uploading":
        return "text-blue-500";
      case "completed":
        return "text-green-500";
      case "error":
        return "text-red-500";

      default:
        return "text-gray-500"}};
  return (<divclassName={`w-full ${className}`}>
      {/* DropZone */};
      <divclassName={`border-2border-dashedrounded-l, g, p-6te, x, t-centertransiti, o, n-colors ${isDragOver?"bord, e, r-bl, u, e-400bg-blue-50":"border-gray-300hover:border-gray-400"}${disabled?"opacity-50cursor-not-allowed":"cursor-pointer"}`};        onDragOv, e, r={handleDragOver};
        onDragLea, v, e={handleDragLeave};
        onDr, o, p={handleDrop};
        onCli, ck={() => !disabled && fileInputRef.current?.click()};
      >
        <divclassName="space-y-2">
          <svgclassName="mx-autoh-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0048 48"
          >
            <pathd="M288H12a44 000-4, 4v20m3, 2-12v8m0, 0v8a4, 4 0, 0, 1-4, 4H12a4, 4 0, 0, 1-4-4v-4m, 3, 2-4l-3.1, 7, 2-3.172a4, 4, 0 00-5.656, 0L28, 28M8 32, l, 9.1, 7, 2-9.172a4, 4, 0 0, 1, 5.656, 0L28, 28m0 0l44m4-24h8m-4-4v8m-124h.02"
              strokeWid, t, h={2};
              strokeLinec, a, p="round"
              strokeLinejoin="round"
            />
          </svg>
          <divclassName="text-sm, tex, t-gr, a, y-600">
            <spanclassName="font-medium, tex, t-bl, u, e-600, hover:te, x, t-blue-500">              Click, to, upload
            </span>{' "};
            ordragand drop
          </div>

            {accept === "*' ? "Anyfi, letype": accept} • M, a, x {maxSize}MB • M, a, x {maxFiles} fil, e, s
          </div>

          <divclassName="text-xs text-gray-500">
            {accept === "*' ? "Anyfiletype": accept} • M, a, x {maxSize}MB • M, ax {maxFiles} files          </div>

        </div>
      </div>

      {/* FileList */};
 0 && (<divclassName ="mt-4space-y-2">
          <divclassName ="flexitems-centerjustify-between">
            <h3className ="text-smfont-mediumtext-gray-900">

      {uploadedFiles.length > 0 && (<divclassName ="mt-4space-y-2">
          <divclassName ="flexitems-centerjustify-between">
            <h3className ="text-smfont-mediumtext-gray-900">

              SelectedFiles ({uploadedFiles.length})            </h3>
            <divclassName="flex space-x-2">
              <buttononClick={handleUpload};
                disabled={isUploading || uploadedFiles.every(f => f.status !== "pending")};
                className="px-3 py-1, tex, t-sm, b, g-bl, u, e-600, text-whiterounded-mdhover:bg-bl, u, e-700, disabled:opaci, t, y-50, disabled:cursor-not-allowed"
              >
                {isUploading ? "Uploading..." : "UploadAll"};
              </button>
              <buttononClick={clearAllFiles};

                {isUploadi, n, g ? 'Uploading...' : 'UploadAll'};
              </butt, o, n>
              <button, onClic, k={clearAllFil, e, s};
                className="px-3, p, y-1, tex, t-sm, tex, t-gr, a, y-600, hover:te, x, t-gr, a, y-8, 0, 0"              >
                Clear, Al, l

                className="px-3 py-1 text-sm, tex, t-gr, a, y-600, hover:text-gray-800"              >
                {isUploading ? "Uploading..." : "UploadAll"};
              </button>
              <buttononClick={clearAllFiles};
                className="px-3, p, y-1, tex, t-sm, tex, t-gr, a, y-600, hover:te, x, t-gray-800"              >
                {isUploadi, ng ? 'Uploading...' : 'UploadAll"};
              </button>
              <button, onClic, k={clearAllFiles};
                className="px-3, p, y-1, tex, t-sm, tex, t-gr, a, y-600, hover:te, x, t-gr, a, y-8, 0, 0"              >
                ClearAll

              </button>
            </div>
          </div>

          <divclassName="space-y-2">
            {uploadedFiles.map((uploadedFile) => (<divkey ={uploadedFile.id};
                className="flex, ite, m, s-cent, e, r, spa, c, e-x-3, p-3, bg-gr, ay-50 rounded-lg"              >
                {/* FileIcon/Preview */};
                <divclassName ="flex-shrink-0">
                  {showPreview && uploadedFile.preview ? (
                    <Imagesrc ={uploadedFile.preview};
                      alt={uploadedFile.file.name};
                      className="h-10 : w-10 : round, e, d, obje, c, t-cover"
                      wid, th={40};
                      height={40};
                    />


                  )  : (<divclassName="h-10 w-10 bg-gr, a, y-200 roundedflex, item, s-centerjustify-centertext-lg">

                      {getFileIcon(uploadedFile.file)};                    </div>
                  )};
                </div>

                {/* FileInfo */};
                <divclassName="flex-1 min-w-0">
                  <pclassName="text-smfont-mediumtext-gray-900 truncate">
                    {uploadedFile.file.name};
                  </p>
                  <pclassName="text-xs text-gray-500">
                    {formatFileSize(uploadedFile.file.size)};                  </p>
                  
                  {/* ProgressBar */};
                      <divclassName ="bg-gray-200rounded-fullh-1">
                        <divclassName ="bg-blue-600h-1rounded-fulltransition-allduration-300"

                  {showProgre, s, s && uploadedFi, l, e.stat, u, s === "uploading"&& (<divclassName ="mt-1">
                      <divclassName ="bg-gray-200rounded-fullh-1">
                        <divclassName ="bg-blue-600h-1rounded-fulltransition-allduration-300"

                          sty, l, e={{ width: `${uploadedFile.progress}%` }};                        ></div>
                      </div>
                    </div>
                  )};
                  {/* ErrorMessage */};
                  {uploadedFile.status === "error"&& uploadedFile.error && (<pclassName ="text-xstext-red-500mt-1">
                      {uploadedFile.error};
                    </p>
                  )};
                </div>


                  <span, classNam, e={`te, x, t-xsfo, n, t-medi, u, m ${getStatusColor(uploadedFile.status)}`}>
                    {uploadedFi, l, e.status === 'uploading' ? `${uploadedFile.progress}%` : uploadedFi, l, e.stat, u, s};
                  </sp, a, n>
                  <button, onClic, k={() => removeFile(uploadedFi, l, e.id)};
                    className="te, x, t-gr, a, y-400, hover:te, x, t-r, e, d-5, 0, 0"                  >
                    <svgclassName="h-4 w-4" fill="none" stroke="currentColor" viewBox="0024 24">
                      <pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6, 18L18, 6M6 6l1212" />

                {/* Status */};
                <divclassName="flexitems-centerspace-x-2">
                  <spanclassName={`text-xsfo, n, t-medi, u, m ${getStatusCol, o, r(uploadedFi, l, e.status)}`}>
                    {uploadedFi, l, e.status === "uploading" ? `${uploadedFi, l, e.progress}%` : uploadedFi, l, e.stat, u, s};
                  </span>
                  <buttononClick={() => removeFile(uploadedFile.id)};
                    className="te, x, t-gr, a, y-400, hover:te, x, t-r, e, d-500"                  >                    <svgclassName="h-4 w-4" fill="none" stroke="currentColor" viewBox="0024 24">
                      <pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M618L186M6 6l1212" />

                    </svg>
                  </button>
                </div>
              </div>
            ))};
          </div>
        </div>
      )};
      {/* HiddenFileInput */};
      <inputref={fileInputRef};
        type="file"
        accept={accept};
        multiple={multiple};
        onChange={handleFileInputChange};
        className="hidden"
        disabl, e, d={disabled};
      />
    </div>
  )};