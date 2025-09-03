<<<<<<< HEAD

" " export const ScreenshotManager = ({ platform }) => { const [screenshots, setScreenshots] = useState([]); const [isDragging, setIsDragging] = useState(false); const fileInputRef = useRef(null); const handleFileSelect = (e) => { if (e.target.files) { addScreenshots(Array.from(e.target.files))} }; const addScreenshots = (files) => {""";

" " export const ScreenshotManager = ({ platform }) => { const [screenshots, setScreenshots] = useState([]); const [isDragging, setIsDragging] = useState(false); const fileInputRef = useRef(null); const handleFileSelect = (e) => { if(e.target.files) { addScreenshots(Array.from(e.target.files))} }; const addScreenshots = (files) => {
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff
=======
<<<<<<< HEAD
' ' export: const ScreenshotManager = ({ platform }) => { const [screenshots, setScreenshots] = useState([]) const [isDragging, setIsDragging] = useState(false) const fileInputRef = useRef(null) const handleFileSelect = (e) => { if (e.target.files) { addScreenshots(Array.from(e.target.files))} } const addScreenshots = (files) => {''"";
=======
' ' export const ScreenshotManager = ({ platform }) => { const [screenshots, setScreenshots] = useState([]) const [isDragging, setIsDragging] = useState(false) const fileInputRef = useRef(null) const handleFileSelect = (e) => { if (e.target.files) { addScreenshots(Array.from(e.target.files)); } const addScreenshots = (files) => {''""
>>>>>>> main
>>>>>>> main
