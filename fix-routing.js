const fs = require('fs''
const path = require('path''
    let content = fs.readFileSync(filePath, 'utf8''
    if (content.includes("import Link from 'next/link'") || content.includes("import { useRouter } from 'next/navigation'';
    content = content.replace(/import { Link } from 'react-router-dom';/g, "import Link from 'next/link'';
    content = content.replace(/import { useNavigate } from 'react-router-dom';/g, "import { useRouter } from 'next/navigation'';
    content = content.replace(/import { useLocation } from 'react-router-dom';/g, "import { usePathname } from 'next/navigation'';
    content = content.replace(/import { useParams } from 'react-router-dom';/g, "import { useParams } from 'next/navigation''
    content = content.replace(/import { Helmet } from 'react-helmet-async''
    content = content.replace(/import { HelmetProvider } from 'react-helmet-async''
    content = content.replace(/to="/g, '';
    content = content.replace(/from 'react-router-dom'/g, "from 'next/link''