<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const formatJSON = () => {
  if (!inputJson.trim () ) {
  ]
setInputJson (JSON.stringify (sample, null, 2) )
setFormattedJson ('')
setIsValid (true)
setErrorMessage ('') 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
return (<> <Head> <title>JSON Formatter - Zion Tech Group</title> Professional JSON Tools </div> </div> <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight" > JSON Formatter </h1> JSON data with advanced features and real-time validation. </p> </div> </section> Format Your JSON Data </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > Our advanced JSON formatter provides multiple formatting options and real-time validation. </p> </div> > <option value= {
  2 
}>2 spaces</option> <option value= {
  4 
}>4 spaces</option> <option value= {
  8 
}>8 spaces</option> </select> </div> <div className="flex items-center space-x-2" > <input /> <label htmlFor="compactMode" className="text-sm text-gray-300" >Compact mode</label> </div> <div className="flex items-center space-x-2" > <input /> <label htmlFor="showLineNumbers" className="text-sm text-gray-300" >Line numbers</label> </div> </div> <div className="flex items-center space-x-3" > <Button > <Upload className="w-4 h-4 mr-2" /> Load Sample </Button> <Button > Clear All </Button> </div> </div> </Card> </span> </div> </div> {
  getLineNumbers (inputJson) 
}</div>) 
}<textarea <strong>Error:</strong> {
  errorMessage 
}</div>) 
}<div className="flex space-x-3" > <Button > <Code className="w-5 h-5 mr-2" /> Format JSON </Button> <Button > Minify </Button> <Button > Validate </Button> </div> </div> </Card> <Button onClick= {
  () => copyToClipboard (formattedJson) 
}variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700" > <Copy className="w-4 h-4 mr-2" /> Copy </Button> <Button > <Download className="w-4 h-4 mr-2" /> Download </Button> </div>) 
}</div> {
  showLineNumbers && (<div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden" > {
  getLineNumbers (formattedJson) 
}</div>) 
}</div> </div>) : (<div className="bg-gray-700 p-6 rounded-lg border border-gray-600 text-center" > <div className="text-6xl mb-4" >📄</div> <p className="text-gray-400" > Formatted JSON will appear here. Enter JSON data and click format to get started. </p> </div>) 
}<p>• Characters: {
  formattedJson.length 
}</p> <p>• Lines: {
  formattedJson.split ('\n') .length 
}</p> <p>• Size: {
  (formattedJson.length * 2 / 1024) .toFixed (2) 
}KB</p> </div>) 
}</div> </Card> </div> </div> </section> Professional JSON Formatting Features </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > Everything you need to work with JSON data efficiently and professionally. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" > <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >✨</div> <h3 className="text-xl font-bold text-white mb-4" >Smart Formatting</h3> <p className="text-gray-400" > Intelligent JSON formatting with customizable indentation and spacing options. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >✅</div> <h3 className="text-xl font-bold text-white mb-4" >Real-time Validation</h3> <p className="text-gray-400" > Instant JSON validation with detailed error messages and syntax highlighting. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >📦</div> <h3 className="text-xl font-bold text-white mb-4" >Minification</h3> <p className="text-gray-400" > Compress JSON data by removing unnecessary whitespace and formatting. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >🔢</div> <h3 className="text-xl font-bold text-white mb-4" >Line Numbers</h3> <p className="text-gray-400" > Optional line numbering for easier navigation and debugging of large JSON files. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >💾</div> <h3 className="text-xl font-bold text-white mb-4" >Export Options</h3> <p className="text-gray-400" > Download formatted JSON files or copy to clipboard with a single click. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >⚙️</div> <h3 className="text-xl font-bold text-white mb-4" >Customizable</h3> <p className="text-gray-400" > Adjust indentation size, toggle compact mode, and customize display options. </p> </Card> </div> </div> </section> Perfect For Every JSON Need </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > From development to data analysis, our JSON formatter serves all your formatting needs. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-8" > <Card className="p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >👨‍💻</div> <h3 className="text-2xl font-bold text-white mb-4" >Developers</h3> <p className="text-gray-400 mb-6" > Format API responses, debug JSON data, and prepare configuration files with professional formatting. </p> <ul className="space-y-2 text-gray-300" > <li>• API development and testing</li> <li>• Configuration file management</li> <li>• Debug and troubleshooting</li> </ul> </Card> <Card className="p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >📊</div> <h3 className="text-2xl font-bold text-white mb-4" >Data Analysts</h3> <p className="text-gray-400 mb-6" > Clean and format JSON datasets for analysis, reporting, and data visualization projects. </p> <ul className="space-y-2 text-gray-300" > <li>• Data cleaning and preparation</li> <li>• Report generation</li> <li>• Data validation</li> </ul> </Card> <Card className="p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >🔧</div> <h3 className="text-2xl font-bold text-white mb-4" >DevOps Engineers</h3> <p className="text-gray-400 mb-6" > Manage configuration files, validate deployment manifests, and format infrastructure as code. </p> <ul className="space-y-2 text-gray-300" > <li>• Configuration management</li> <li>• Infrastructure validation</li> <li>• Deployment automation</li> </ul> </Card> <Card className="p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >📝</div> <h3 className="text-2xl font-bold text-white mb-4" >Technical Writers</h3> <p className="text-gray-400 mb-6" > Format JSON examples for documentation, tutorials, and technical specifications. </p> <ul className="space-y-2 text-gray-300" > <li>• Documentation examples</li> <li>• API documentation</li> <li>• Technical specifications</li> </ul> </Card> </div> </div> </section> <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600"> <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center"> <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6"> text-xl text-teal-100 mb-8"> Join thousands of developers and professionals who trust our JSON formatter for their data needs. </p> <div className=" flex flex-col sm:flex-row gap-4 justify-center"> <Button href=" /contact"size=" lg"className=" bg-white text-teal-600 hover:bg-gray-100"> Get Started Today <ArrowRight className=" w-5 h-5 ml-2"/> </Button> <Button href=" /pricing"variant=" outline"size=" lg"className=" border-white text-white hover:bg-white hover:text-teal-600" > View Pricing </Button> </div> </div> </section> </>) 
}
<<<<<<< HEAD
} from 'lucide-react';import { Code, Copy, RefreshCw, CheckCircle, XCircle, ArrowRight, Download, Upload, Settings, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
import { Star } from 'lucide-react';
  const [inputJson, setInputJson] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [indentSize, setIndentSize] = useState(2);
  const [compactMode, setCompactMode] = useState(false);
  const [showLineNumbers, setShowLineNumbers] = useState(true);
import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Code, Copy, RefreshCw, CheckCircle, XCircle, ArrowRight, Download, Upload, Settings, Eye } from 'lucide-react';
=======

<<<<<<< HEAD
import Head from 'next / head';'
import Card from '../components / ui / Card';'
import Button from '../components / ui / Button';'

import {
  }
  Code,
  Copy,
  RefreshCw,
  CheckCircle,
  XCircle,
  ArrowRight,
  Download,
  Upload,

  Settings,
  Eye,;
} from 'lucide-react';'
=======
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
>>>>>>> origin/resolved-merge-conflicts

import {
  Code,
  Copy,
  RefreshCw,
  CheckCircle,
  XCircle,
  ArrowRight,
  Download,
  Upload,

  Settings,}
  Eye,;}
} from 'lucide-react';

>>>>>>> origin/chore/fix-lint-and-merge
export default function JSONFormatterPage() {
  const [inputJson, setInputJson] = useState('');

const [formattedJson, setFormattedJson] = useState('');
=======
=======
=======

<<<<<<< HEAD

=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
return (<> <Head> <title>JSON Formatter - Zion Tech Group</title> Professional JSON Tools </div> </div> <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight" > JSON Formatter </h1> JSON data with advanced features and real-time validation. </p> </div> </section> Format Your JSON Data </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > Our advanced JSON formatter provides multiple formatting options and real-time validation. </p> </div> > <option value= {
  2 
}>2 spaces</option> <option value= {
  4 
}>4 spaces</option> <option value= {
  8 
}>8 spaces</option> </select> </div> <div className="flex items-center space-x-2" > <input /> <label htmlFor="compactMode" className="text-sm text-gray-300" >Compact mode</label> </div> <div className="flex items-center space-x-2" > <input /> <label htmlFor="showLineNumbers" className="text-sm text-gray-300" >Line numbers</label> </div> </div> <div className="flex items-center space-x-3" > <Button > <Upload className="w-4 h-4 mr-2" /> Load Sample </Button> <Button > Clear All </Button> </div> </div> </Card> </span> </div> </div> {
  getLineNumbers (inputJson) 
}</div>) 
}<textarea <strong>Error:</strong> {
  errorMessage 
}</div>) 
}<div className="flex space-x-3" > <Button > <Code className="w-5 h-5 mr-2" /> Format JSON </Button> <Button > Minify </Button> <Button > Validate </Button> </div> </div> </Card> <Button onClick= {
  () => copyToClipboard (formattedJson) 
}variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700" > <Copy className="w-4 h-4 mr-2" /> Copy </Button> <Button > <Download className="w-4 h-4 mr-2" /> Download </Button> </div>) 
}</div> {
  showLineNumbers && (<div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden" > {
  getLineNumbers (formattedJson) 
}</div>) 
}</div> </div>) : (<div className="bg-gray-700 p-6 rounded-lg border border-gray-600 text-center" > <div className="text-6xl mb-4" >📄</div> <p className="text-gray-400" > Formatted JSON will appear here. Enter JSON data and click format to get started. </p> </div>) 
}<p>• Characters: {
  formattedJson.length 
}</p> <p>• Lines: {
  formattedJson.split ('\n') .length 
}</p> <p>• Size: {
  (formattedJson.length * 2 / 1024) .toFixed (2) 
}KB</p> </div>) 
}</div> </Card> </div> </div> </section> Professional JSON Formatting Features </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > Everything you need to work with JSON data efficiently and professionally. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" > <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >✨</div> <h3 className="text-xl font-bold text-white mb-4" >Smart Formatting</h3> <p className="text-gray-400" > Intelligent JSON formatting with customizable indentation and spacing options. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >✅</div> <h3 className="text-xl font-bold text-white mb-4" >Real-time Validation</h3> <p className="text-gray-400" > Instant JSON validation with detailed error messages and syntax highlighting. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >📦</div> <h3 className="text-xl font-bold text-white mb-4" >Minification</h3> <p className="text-gray-400" > Compress JSON data by removing unnecessary whitespace and formatting. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >🔢</div> <h3 className="text-xl font-bold text-white mb-4" >Line Numbers</h3> <p className="text-gray-400" > Optional line numbering for easier navigation and debugging of large JSON files. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >💾</div> <h3 className="text-xl font-bold text-white mb-4" >Export Options</h3> <p className="text-gray-400" > Download formatted JSON files or copy to clipboard with a single click. </p> </Card> <Card className="text-center p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >⚙️</div> <h3 className="text-xl font-bold text-white mb-4" >Customizable</h3> <p className="text-gray-400" > Adjust indentation size, toggle compact mode, and customize display options. </p> </Card> </div> </div> </section> Perfect For Every JSON Need </h2> <p className="text-xl text-gray-400 max-w-3xl mx-auto" > From development to data analysis, our JSON formatter serves all your formatting needs. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-8" > <Card className="p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >👨‍💻</div> <h3 className="text-2xl font-bold text-white mb-4" >Developers</h3> <p className="text-gray-400 mb-6" > Format API responses, debug JSON data, and prepare configuration files with professional formatting. </p> <ul className="space-y-2 text-gray-300" > <li>• API development and testing</li> <li>• Configuration file management</li> <li>• Debug and troubleshooting</li> </ul> </Card> <Card className="p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >📊</div> <h3 className="text-2xl font-bold text-white mb-4" >Data Analysts</h3> <p className="text-gray-400 mb-6" > Clean and format JSON datasets for analysis, reporting, and data visualization projects. </p> <ul className="space-y-2 text-gray-300" > <li>• Data cleaning and preparation</li> <li>• Report generation</li> <li>• Data validation</li> </ul> </Card> <Card className="p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >🔧</div> <h3 className="text-2xl font-bold text-white mb-4" >DevOps Engineers</h3> <p className="text-gray-400 mb-6" > Manage configuration files, validate deployment manifests, and format infrastructure as code. </p> <ul className="space-y-2 text-gray-300" > <li>• Configuration management</li> <li>• Infrastructure validation</li> <li>• Deployment automation</li> </ul> </Card> <Card className="p-8 bg-gray-700 border border-gray-600" > <div className="text-4xl mb-4" >📝</div> <h3 className="text-2xl font-bold text-white mb-4" >Technical Writers</h3> <p className="text-gray-400 mb-6" > Format JSON examples for documentation, tutorials, and technical specifications. </p> <ul className="space-y-2 text-gray-300" > <li>• Documentation examples</li> <li>• API documentation</li> <li>• Technical specifications</li> </ul> </Card> </div> </div> </section> <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600"> <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center"> <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6"> text-xl text-teal-100 mb-8"> Join thousands of developers and professionals who trust our JSON formatter for their data needs. </p> <div className=" flex flex-col sm:flex-row gap-4 justify-center"> <Button href=" /contact"size=" lg"className=" bg-white text-teal-600 hover:bg-gray-100"> Get Started Today <ArrowRight className=" w-5 h-5 ml-2"/> </Button> <Button href=" /pricing"variant=" outline"size=" lg"className=" border-white text-white hover:bg-white hover:text-teal-600" > View Pricing </Button> </div> </div> </section> </>) 
}
} from 'lucide-react';import { Code, Copy, RefreshCw, CheckCircle, XCircle, ArrowRight, Download, Upload, Settings, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
import { Star } from 'lucide-react';
  const [inputJson, setInputJson] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [indentSize, setIndentSize] = useState(2);
  const [compactMode, setCompactMode] = useState(false);
  const [showLineNumbers, setShowLineNumbers] = useState(true);
import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Code, Copy, RefreshCw, CheckCircle, XCircle, ArrowRight, Download, Upload, Settings, Eye } from 'lucide-react';
=======
<<<<<<< HEAD

import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';

import {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {
<<<<<<< HEAD
import {

=======
=======
import {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  Code,
  Copy,
  RefreshCw,
  CheckCircle,
  XCircle,
  ArrowRight,
  Download,
  Upload,

  Settings,}
  Eye,;}
} from 'lucide-react';

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
export default function JSONFormatterPage() {
=======

} from 'lucide-react';import { Code, Copy, RefreshCw, CheckCircle, XCircle, ArrowRight, Download, Upload, Settings, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
import { Star } from 'lucide-react';

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Code, Copy, RefreshCw, CheckCircle, XCircle, ArrowRight, Download, Upload, Settings, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';
export default function JSONFormatterPage() {

<<<<<<< HEAD
  const [inputJson, setInputJson] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [indentSize, setIndentSize] = useState(2);
  const [compactMode, setCompactMode] = useState(false);
  const [showLineNumbers, setShowLineNumbers] = useState(true);
import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import {
  Code
  Copy
  RefreshCw
  CheckCircle
  XCircle
  ArrowRight
  Download
  Upload
  Settings
  Eye;
  Code,
  Copy,
  RefreshCw,
  CheckCircle,
  XCircle,
  ArrowRight,
  Download,
  Upload,
  Settings,;
  Eye,;
} from 'lucide-react';import { Code, Copy, RefreshCw, CheckCircle, XCircle, ArrowRight, Download, Upload, Settings, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';
export default function JSONFormatterPage() {;
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [inputJson, setInputJson] = useState('');

<<<<<<< HEAD
const [formattedJson, setFormattedJson] = useState('');
=======
  const formatJSON = () => {
    if (!inputJson.trim()) {
      setFormattedJson('');
      setIsValid(true);
      setErrorMessage('');
<<<<<<< HEAD
      return;    }
    try {
      const parsed = JSON.parse(inputJson);
      const formatted = compactMode      return
    }
    try {
      const parsed = JSON.parse(inputJson);
      const formatted = compactMode
        ? JSON.stringify(parsed)
        : JSON.stringify(parsed, null, indentSize);
      setFormattedJson(formatted);
      setIsValid(true);
      setErrorMessage('');
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');
      setFormattedJson('');    }        ? JSON.stringify(parsed)
        : JSON.stringify(parsed, null, indentSize);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

const [isValid, setIsValid] = useState(true);

const [errorMessage, setErrorMessage] = useState('');

const [indentSize, setIndentSize] = useState(2);

const [compactMode, setCompactMode] = useState(false);

<<<<<<< HEAD
const [showLineNumbers, setShowLineNumbers] = useState(true);
}
return;}
    }

    try {
      const parsed = JSON.parse(inputJson);

const formatted = compactMode;
        ? JSON.stringify(parsed)
<<<<<<< HEAD
        : JSON.stringify(parsed, null, indentSize);
      setFormattedJson(formatted);
      setIsValid(true);
      setErrorMessage('');'
    } catch (error) {
      }
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');'
      setFormattedJson('');'
    }
  }

const minifyJSON = () => {
    }
    if (!inputJson.trim());
  return;

    try {
      }
      const parsed = JSON.parse(inputJson);

const minified = JSON.stringify(parsed);
      setFormattedJson(minified);
      setIsValid(true);
setErrorMessage('');'
    } catch (error) {
      }
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');'
    }
  };

const validateJSON = () => {
    }
    if (!inputJson.trim()) {
      }
      setIsValid(true);
      setErrorMessage('');'
return;
    }
    try {
      }
      JSON.parse(inputJson);
      setIsValid(true);
setErrorMessage('');'
    } catch (error) {
      }
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');'
    }
  };

const clearAll = () => {
    }
    setInputJson('');'
    setFormattedJson('');'
    setIsValid(true);
setErrorMessage('')'
};


const copyToClipboard = ('text': string) => {
    }
    navigator.clipboard.writeText(text);
  }

const downloadJSON = ('content': string, 'filename': string) => {
   ;
}
const blob = new Blob([content], { 'type': 'application/json',;'
=======
<<<<<<< HEAD

=======
        : JSON.stringify(parsed, null, indentSize);
      setFormattedJson(formatted);
      setIsValid(true);}
      setErrorMessage('');}
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');}
      setFormattedJson('');}
    }
  }
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setFormattedJson(formatted);
      setIsValid(true);
      setErrorMessage('')
    } catch (error) {
      setIsValid(false);
<<<<<<< HEAD
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

const minifyJSON = (
    if (!inputJson.trim());
  return;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    try {
      const parsed = JSON.parse(inputJson);

const minified = JSON.stringify(parsed);
<<<<<<< HEAD
=======
=======
    try {;
      const parsed = JSON && JSON.parse(inputJson);
      const minified = JSON && JSON.stringify(parsed);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      setFormattedJson(minified);
      setIsValid(true);
setErrorMessage('');) => {
  return $3;}
}
    } catch (error) {
<<<<<<< HEAD
      setIsValid(false);}
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');}
    }
=======
<<<<<<< HEAD
      setIsValid(false);}
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');}
    }
=======

      setIsValid(false);

      setErrorMessage(error instanceof Error ? error && error.message : 'Invalid JSON');

  };



    try {;
      JSON && JSON.parse(inputJson);

      setIsValid(true);
      setErrorMessage('');
    } catch (error) {;
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error && error.message : 'Invalid JSON');    }      setErrorMessage('');
    } catch (error) {;
      setIsValid(false);


      setErrorMessage(error instanceof Error ? error && error.message : 'Invalid JSON');
  };

  const clearAll = () => {;
    setInputJson('');
    setFormattedJson('');
    setIsValid(true);



  return (

    <>
      <Head>
        <title>JSON Formatter - Zion Tech Group</title>
        <meta name="description" content="Format, validate, and beautify JSON with our professional JSON formatter. Minify, prettify, and analyze JSON data with ease." />
        <meta property="og:title" content="JSON Formatter - Zion Tech Group" />
        <meta property="og:description" content="Professional JSON formatting and validation service." />
      </Head>


      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');
      setFormattedJson('')
    }
  }
  const minifyJSON = () => {
    if (!inputJson.trim()) return;
=======


    }

    

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {
      const parsed = JSON.parse(inputJson);
      const minified = JSON.stringify(parsed);
      setFormattedJson(minified);
      setIsValid(true);
<<<<<<< HEAD
      setErrorMessage('');
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');    }      setErrorMessage('')
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON')
  }
  const validateJSON = () => {
    if (!inputJson.trim()) {
      setIsValid(true);
      setErrorMessage('');
      return;    }      return
    }
    try {
      JSON.parse(inputJson);
      setIsValid(true);
      setErrorMessage('');
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');    }      setErrorMessage('')
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON')
  }
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');    }

    }

  };

  const clearAll = () => {
    setInputJson('');
    setFormattedJson('');
    setIsValid(true);
    setErrorMessage('');
  }
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  }
  const downloadJSON = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'application/json' });    const url = URL.createObjectURL(blob);  }
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }
  const downloadJSON = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'application/json' })
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);  }
  const loadSampleJSON = () => {
    const sample = {    URL.revokeObjectURL(url)
  }
  const loadSampleJSON = () => {
    const sample = {
      name: 'John Doe'
      age: 30
      email: 'john.doe@example.com'
      address: {
        street: '123 Main St'
        city: 'Anytown'
        state: 'CA'
        zipCode: '12345'
      }
      phoneNumbers: [
          type: 'home'
          number: '555-123-4567'
        }
        {
          type: 'work'
          number: '555-987-6543'
        }
      ]
      interests: ['programming', 'reading', 'hiking']
      active: true
      lastLogin: '2024-01-15T10:30:00Z'
    }
    setInputJson(JSON.stringify(sample, null, 2));
    setFormattedJson('');
    setIsValid(true);
    setErrorMessage('');  }
  const getLineNumbers = (text: string) => {
    const lines = text.split('\n');
    return lines.map((_, index) => index + 1).join('\n');  };    setErrorMessage('')
  }
  const getLineNumbers = (text: string) => {
    const lines = text.split('\n');
    return lines.map((_, index) => index + 1).join('\n');    return lines.map((_, index) => index + 1).join('\n')
  }

  return (
    <>
      <Head>
        <title>JSON Formatter - Zion Tech Group</title>
        <meta
          name='description'
          content='Format, validate, and beautify JSON with our professional JSON formatter. Minify, prettify, and analyze JSON data with ease.'
        />
        <meta property='og:title' content='JSON Formatter - Zion Tech Group' />
        <meta
          property='og:description'
          content='Professional JSON formatting and validation service.'
        />
      </Head>
      {/* Hero Section */}
      <section className='pt-32 pb-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='mb-8'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium mb-6'>
              <Code className='w-4 h-4 mr-2' />
              Professional JSON Tools
            </div>
          </div>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>
            JSON Formatter
          </h1>
          <p className='text-xl text-teal-200 max-w-4xl mx-auto leading-relaxed'>
            Format, validate, and beautify JSON with our professional tools.
            Minify, prettify, and analyze JSON data with advanced features and
            real-time validation.          </p>      </Head>
=======

      setErrorMessage('')
    } catch (error) {

      setIsValid(false);

      setErrorMessage(error instanceof Error ? error && error.message : 'Invalid JSON');

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  };

const validateJSON = (
    if (!inputJson.trim()) {
      setIsValid(true);
      setErrorMessage('');
return;) => {
  return $3;}
}
    }
    try {
      JSON.parse(inputJson);
      setIsValid(true);}
setErrorMessage('');}
    } catch (error) {
      setIsValid(false);}
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');}
    }
  };

const clearAll = (
    setInputJson('');
    setFormattedJson('');
    setIsValid(true);
setErrorMessage('')) => {
  return $3;}
}
};


const copyToClipboard = (
    navigator.clipboard.writeText(text);) => {
  return $3;}
}
  }

const downloadJSON = (
   ;
  const blob = new Blob([content], { type: 'application/json',) => {
  return $3;}
}
>>>>>>> origin/resolved-merge-conflicts
});

const url = URL.createObjectURL(blob);

<<<<<<< HEAD
const a = document.createElement('a');'
=======
const a = document.createElement('a');
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

URL.revokeObjectURL(url)
};


const loadSampleJSON = (
   ;
  const sample = {
name: 'John Doe',
  age: 30,
      email: 'john.doe@example.com',
  address: {
        street: '123 Main St',
  city: 'Anytown'
        state: 'CA',
  zipCode: '12345'
     ,) => {
  return $3;}
}
<<<<<<< HEAD
'name': 'John Doe','
      'age': 30,
      'email': 'john.doe@example.com','
      'address': {
        }
        'street': '123 Main St''
        'city': 'Anytown''
        'state': 'CA''
        'zipCode': '12345''
     
}
      'phoneNumbers': [
        {
          }
          'type': 'home','
          'number': '555-123-4567','
        },
        {
          }
          'type': 'work','
          'number': '555-987-6543','
        }
      ],
      'interests': ['programming', 'reading', 'hiking'],'
      'active': true,
      'lastLogin': '2024-01-'15T10':'30':00Z','
    };

    setInputJson(JSON.stringify(sample, null, 2));
    setFormattedJson('');'
=======
}
      phoneNumbers: [
        {
<<<<<<< HEAD

=======
          type: 'home',}
  number: '555-123-4567',}
        },
        {
          type: 'work',}
  number: '555-987-6543',}
        },
      ],
      interests: ['programming', 'reading', 'hiking'],
      active: true,
      lastLogin: '2024-01-15T10:30:00Z'}

    setInputJson(JSON.stringify(sample, null, 2));
    setFormattedJson('');
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
    setIsValid(true);

<<<<<<< HEAD
    setErrorMessage('')'
};
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts


const getLineNumbers = ('text': string) => {
   ;
  }
  const lines = text.split('\n');'
return lines.map((_, index) => index + 1).join('\n')'
};

  const getLineNumbers = (text: string) => {
    const lines = text.split($2);
    return lines.map((_, index) => index + 1).join('\n')
  },
=======
    setErrorMessage('')
};


const getLineNumbers = (
   ;
  const lines = text.split('\n');
return lines.map((_, index) => index + 1).join('\n')) => {
  return $3;}
}
};

>>>>>>> origin/chore/fix-lint-and-merge

  return (
    <>
<<<<<<< HEAD
      <Head>
        <title>JSON Formatter - Zion Tech Group</title>
<<<<<<< HEAD
<meta,
name='description''
          content='Format, validate, and beautify JSON with our professional JSON formatter. Minify, prettify, and analyze JSON data with ease.'' />
        <meta property=''og': title' content='JSON Formatter - Zion Tech Group' />'
        <meta,
property=''og':description''
          content='Professional JSON formatting and validation service.'' />
      </Head>
      {/* Hero Section *
}
      <section className='pt-32 pb-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900'>'
        <div className='max-w-7xl mx-auto px-4 'sm':px-6 'lg':px-8 text-center'>'
          <div className='mb-8'>'
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium mb-6'>'
              <Code className='w-4 h-4 mr-2' />'
              Professional JSON Tools
            </div>
          </div>
          <h1 className='text-4xl 'sm':text-5xl 'lg':text-6xl font-bold text-white mb-8 leading-tight'>'
            JSON Formatter
          </h1>
          <p className='text-xl text-teal-200 max-w-4xl mx-auto leading-relaxed'>'
            Format, validate, and beautify JSON with our professional tools.
            Minify, prettify, and analyze JSON data with advanced features and,
real-time validation.
=======

=======
      <Head><title>JSON Formatter - Zion Tech Group</title>
<meta;
name='description'
          content='Format, validate, and beautify JSON with our professional JSON formatter. Minify, prettify, and analyze JSON data with ease.'
           />
        <meta property='og: title' content='JSON Formatter - Zion Tech Group'    />
        <meta;
property='og:description'
          content='Professional JSON formatting and validation service.'
           />
      </Head>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {/* Hero Section *,}
}
      <section className='pt-32 pb-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900'    />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'    />
          <div className='mb-8'    />
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium mb-6'    />
              <Code className='w-4 h-4 mr-2'    />
              Professional JSON Tools;
<<<<<<< HEAD
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              Professional JSON Tools
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </div>
          </div>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'    />
            JSON Formatter;
          </h1>
          <p className='text-xl text-teal-200 max-w-4xl mx-auto leading-relaxed'    />
            Format, validate, and beautify JSON with our professional tools.
            Minify, prettify, and analyze JSON data with advanced features and;
real-time validation.
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
          </p>
        </div>
      </section>
      {/* JSON Formatter Tool */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <section className='py-20 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
              Format Your JSON Data
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Our advanced JSON formatter provides multiple formatting options
              and real-time validation.            </p>
          </div>
          {/* Settings Bar */}      <section className="py-20 bg-gray-900">
=======

<<<<<<< HEAD
<section className='py-20 bg-gray-900'>'
        <div className='max-w-7xl mx-auto px-4 'sm': px-6 'lg':px-8'>'
          <div className='text-center mb-16'>'
            <h2 className='text-3xl 'sm':text-4xl font-bold text-white mb-6'>'
              Format Your JSON Data
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>'
              Our advanced JSON formatter provides multiple formatting options,
and real-time validation.
            </p>
          </div>

          {/* Settings Bar *
}
<Card className='p-6 bg-gray-800 border border-gray-700 mb-8'>;'
            <div className='flex flex-wrap items-center justify-between gap-4'>;'
              <div className='flex items-center space-x-6'>;'
                <div className='flex items-center space-x-2'>;'
                  <label className='text-sm text-gray-300'>'Indent':</label>;'
                  <select;
                    value={indentSize}
                    onChange={e => setIndentSize(Number(e.target.value))}

                    className='px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm 'focus': outline-none 'focus':ring-2 'focus':ring-teal-500''
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
<section className='py-20 bg-gray-900'    />
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'    />
          <div className='text-center mb-16'    />
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'    />
              Format Your JSON Data;
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'    />
              Our advanced JSON formatter provides multiple formatting options;
and real-time validation.
            </p>
          </div>

          {/* Settings Bar *,}
}
<Card className='p-6 bg-gray-800 border border-gray-700 mb-8'    />;
            <div className='flex flex-wrap items-center justify-between gap-4'    />;
              <div className='flex items-center space-x-6'    />;
                <div className='flex items-center space-x-2'    />;
                  <label className='text-sm text-gray-300'    />Indent:</label>;
                  <select;
                    value={indentSize}
                    onChange={e =    /> setIndentSize(Number(e.target.value))}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Format Your JSON Data
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our advanced JSON formatter provides multiple formatting options and real-time validation.
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        />;
      </Head>;
      {/* Hero Section */}
      <section className='pt-32 pb-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
          <div className='mb-8'>;
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium mb-6'>;
              <Code className='w-4 h-4 mr-2' />;
              Professional JSON Tools;
            </div>;
          </div>;
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>;
            JSON Formatter;
          </h1>;
          <p className='text-xl text-teal-200 max-w-4xl mx-auto leading-relaxed'>;
            Format, validate, and beautify JSON with our professional tools.;
            Minify, prettify, and analyze JSON data with advanced features and;
            real-time validation.          </p>      </Head>;
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <div className="mb-8">;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium mb-6">;
              <Code className="w-4 h-4 mr-2" />;
              Professional JSON Tools;
            </div>;
          </div>;
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">;
            JSON Formatter;
          </h1>;
          <p className="text-xl text-teal-200 max-w-4xl mx-auto leading-relaxed">;
            Format, validate, and beautify JSON with our professional tools. Minify, prettify, and analyze ;
            JSON data with advanced features and real-time validation.;
          </p>;
        </div>;
      </section>;
      {/* JSON Formatter Tool */}
      <section className='py-20 bg-gray-900'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
              Format Your JSON Data;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
              Our advanced JSON formatter provides multiple formatting options;
              and real-time validation.            </p>;
          </div>;
          {/* Settings Bar */}      <section className="py-20 bg-gray-900">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">;
              Format Your JSON Data;
            </h2>;
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              Our advanced JSON formatter provides multiple formatting options and real-time validation.;
          </div>;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD

<<<<<<< HEAD
=======
<section className='py-20 bg-gray-900'    />
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'    />
          <div className='text-center mb-16'    />
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'    />
              Format Your JSON Data;
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'    />
              Our advanced JSON formatter provides multiple formatting options;
and real-time validation.
            </p>
          </div>

          {/* Settings Bar *,}
}
<Card className='p-6 bg-gray-800 border border-gray-700 mb-8'    />;
            <div className='flex flex-wrap items-center justify-between gap-4'    />;
              <div className='flex items-center space-x-6'    />;
                <div className='flex items-center space-x-2'    />;
                  <label className='text-sm text-gray-300'    />Indent:</label>;
                  <select;
                    value={indentSize}
                    onChange={e =    /> setIndentSize(Number(e.target.value))}

                    className='px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus: outline-none focus:ring-2 focus:ring-teal-500'
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
                  >
                    <option value={2}    />2 spaces</option>
                    <option value={4}    />4 spaces</option>
                    <option value={8}    />8 spaces</option>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Settings Bar */}
          <Card className='p-6 bg-gray-800 border border-gray-700 mb-8'>;
            <div className='flex flex-wrap items-center justify-between gap-4'>;
              <div className='flex items-center space-x-6'>;
                <div className='flex items-center space-x-2'>;
                  <label className='text-sm text-gray-300'>Indent:</label>;
            </p>
          </div>
          {/* Settings Bar */}
          <Card className="p-6 bg-gray-800 border border-gray-700 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <label className="text-sm text-gray-300" htmlFor="input-Indent:">Indent:</label>
                  <select
                    value={indentSize}
                    onChange={e => setIndentSize(Number(e && e.target.value))}
                    className='px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500'                  >          <Card className="p-6 bg-gray-800 border border-gray-700 mb-8">;
            <div className="flex flex-wrap items-center justify-between gap-4">;
              <div className="flex items-center space-x-6">;
                <div className="flex items-center space-x-2">;
                  <label className="text-sm text-gray-300" htmlFor="input-Indent:">Indent:</label>;
                  <select
                    value={indentSize}
<<<<<<< HEAD
                  >
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                    className='px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus: outline-none focus:ring-2 focus:ring-teal-500'
>>>>>>> origin/chore/fix-lint-and-merge
                  >
<<<<<<< HEAD
                    <option value={2}    />2 spaces</option>
                    <option value={4}    />4 spaces</option>
                    <option value={8}    />8 spaces</option>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <option value={2}>2 spaces</option>
                    <option value={4}>4 spaces</option>
                    <option value={8}>8 spaces</option>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </select>
                </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
<div className='flex items-center space-x-2'>'
                  <input,
type='checkbox''
                    id='compactMode''
                    checked={compactMode}
                    onChange={e => setCompactMode(e.target.checked)}
                    className='w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded 'focus':ring-teal-500''
                  />
                  <label,
htmlFor='compactMode''
                    className='text-sm text-gray-300''
                  >
                    Compact mode
                  </label>
                </div>
                <div className='flex items-center space-x-2'>'
                  <input,
type='checkbox''
                    id='showLineNumbers''

                    checked={showLineNumbers}
                    onChange={e => { return setShowLineNumbers(e && e.target.checked
}
                    className='w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded 'focus':ring-teal-500'; }'
                  />;

                  <label,
htmlFor='showLineNumbers''

                    className='text-sm text-gray-300''
                  >
                    Line numbers
                  </label>
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
<div className='flex items-center space-x-2'    />
                  <input;
type='checkbox'
                    id='compactMode'
                    checked={compactMode}
                    onChange={e =    /> setCompactMode(e.target.checked)}
                    className='w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500'
                  />
                  <label;
htmlFor='compactMode'
                    className='text-sm text-gray-300'
                      />
                    Compact mode;
                  </label>
                </div>
                <div className='flex items-center space-x-2'    />
                  <input;
type='checkbox'
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    onChange={(e) => setIndentSize(Number(e && e.target.value))}
                    className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500";
      JSON.parse (input_json);
      setIsValid (true);
      setErrorMessage ('');
    } catch (error) {
      setIsValid (false);
      setErrorMessage (error instanceof Error ? error.message : 'Invalid JSON');    }      setErrorMessage ('');
    } catch (error) {
      setIsValid (false);
      setErrorMessage (error instanceof Error ? error.message : 'Invalid JSON');
  }
;
  const clear_all = () =>: any {
    setInputJson ('');
    setFormattedJson ('');
    setIsValid (true);
    setErrorMessage ('');
  }
;
  const copyToClipboard = (text: string) =>: any {
    navigator.clipboard.write_text (text);
  }
;
  const downloadJSON = (content: string, filename: string) =>: any {
    const blob = new Blob ([content], { type: 'application / json' });    const url = URL.createObjectURL (blob);  }
;
  const copyToClipboard = (text: string) =>: any {
    navigator.clipboard.write_text (text);
  }
;
  const downloadJSON = (content: string, filename: string) =>: any {
    const blob = new Blob ([content], { type: 'application / json' }),
    const url = URL.createObjectURL (blob);
    const array = document.create_element ('a');
    a.href = url;
    a.download = filename;
    document.body.append_child (a);
    a.click ();
    document.body.remove_child (a);
    URL.revokeObjectURL (url);  }
;
  const loadSampleJSON = () =>: any {
    const sample = {    URL.revokeObjectURL (url);
  }
;
  const loadSampleJSON = () =>: any {
    const sample = {
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip_code: '12345',
      },
      phone_numbers: [;
          type: 'home',
          number: '555 - 123 - 4567',
        },
        {
          type: 'work',
          number: '555 - 987 - 6543',
        },
      ],
      interests: ['programming', 'reading', 'hiking'],
      active: true,
      last_login: '2024 - 01 - 15T10:30:00Z',
    }
;
    setInputJson (JSON.stringify (sample, null, 2));
    setFormattedJson ('');
    setIsValid (true);
    setErrorMessage ('');  }
;
  const getLineNumbers = (text: string) =>: any {
    const lines = text.split ('\n');
    return lines.map ((_, index) => index + 1).join ('\n');  }    setErrorMessage ('');
  }
;
  const getLineNumbers = (text: string) =>: any {
    const lines = text.split ('\n');
    return lines.map ((_, index) => index + 1).join ('\n');    return lines.map ((_, index) => index + 1).join ('\n');
  }
;
  return (
    <>;
      <Head>;
        <title > JSON Formatter - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Format, validate, and beautify JSON with our professional JSON formatter. Minify, prettify, and analyze JSON data with ease.';
        />;
        <meta property='og:title' content='JSON Formatter - Zion Tech Group' />;
        <meta;
          property='og:description';
          content='Professional JSON formatting and validation service.';
        />;
      </Head>;
      {/* Hero Section */}
      <section className='pt - 32 pb - 20 bg - gradient - to - br from - teal - 900 via - cyan - 900 to - blue - 900'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
          <div className='mb - 8'>;
            <div className='inline - flex items - center px - 4 py - 2 rounded - full bg - teal - 500 / 20 border border - teal - 400 / 30 text - teal - 300 text - sm font - medium mb - 6'>;
              <Code className='w - 4 h - 4 mr - 2' />;
              Professional JSON Tools;
            </div>;
          </div>;
          <h1 className='text - 4xl sm:text - 5xl lg:text - 6xl font - bold text - white mb - 8 leading - tight'>;
            JSON Formatter;
          </h1>;
          <p className='text - xl text - teal - 200 max - w-4xl mx - auto leading - relaxed'>;
            Format, validate, and beautify JSON with our professional tools.;
            Minify, prettify, and analyze JSON data with advanced features and;
            real - time validation.          </p>      </Head>;
      {/* Hero Section */}
      <section className="pt - 32 pb - 20 bg - gradient - to - br from - teal - 900 via - cyan - 900 to - blue - 900">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
          <div className="mb - 8">;
            <div className="inline - flex items - center px - 4 py - 2 rounded - full bg - teal - 500 / 20 border border - teal - 400 / 30 text - teal - 300 text - sm font - medium mb - 6">;
              <Code className="w - 4 h - 4 mr - 2" />;
              Professional JSON Tools;
            </div>;
          </div>;
          <h1 className="text - 4xl sm:text - 5xl lg:text - 6xl font - bold text - white mb - 8 leading - tight">;
            JSON Formatter;
          </h1>;
          <p className="text - xl text - teal - 200 max - w-4xl mx - auto leading - relaxed">;
            Format, validate, and beautify JSON with our professional tools. Minify, prettify, and analyze;
            JSON data with advanced features and real - time validation.;
          </p>;
        </div>;
      </section>;
      {/* JSON Formatter Tool */}
      <section className='py - 20 bg - gray - 900'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 16'>;
            <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
              Format Your JSON Data;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
              Our advanced JSON formatter provides multiple formatting options;
              and real - time validation.            </p>;
          </div>;
          {/* Settings Bar */}      <section className="py - 20 bg - gray - 900">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="text - center mb - 16">;
            <h2 className="text - 3xl sm:text - 4xl font - bold text - white mb - 6">;
              Format Your JSON Data;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
              Our advanced JSON formatter provides multiple formatting options and real - time validation.;
          </div>;
          {/* Settings Bar */}
          <Card className='p - 6 bg - gray - 800 border border - gray - 700 mb - 8'>;
            <div className='flex flex - wrap items - center justify - between gap - 4'>;
              <div className='flex items - center space - x-6'>;
                <div className='flex items - center space - x-2'>;
                  <label className='text - sm text - gray - 300'>Indent:</label>;
                  <select;
                    value={indent_size}
                    on_change={e => setIndentSize (Number (e.target.value))}
                    className='px - 3 py - 2 bg - gray - 700 border border - gray - 600 rounded text - white text - sm focus:outline - none focus:ring - 2 focus:ring - teal - 500'                  >          <Card className="p - 6 bg - gray - 800 border border - gray - 700 mb - 8">;
            <div className="flex flex - wrap items - center justify - between gap - 4">;
              <div className="flex items - center space - x-6">;
                <div className="flex items - center space - x-2">;
                  <label className="text - sm text - gray - 300" html_for="input - Indent:">Indent:</label>;
                  <select;
                    value={indent_size}
                    on_change={(e) => setIndentSize (Number (e.target.value))}
                    className="px - 3 py - 2 bg - gray - 700 border border - gray - 600 rounded text - white text - sm focus:outline - none focus:ring - 2 focus:ring - teal - 500";
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <option value={2}>2 spaces</option>;
                    <option value={4}>4 spaces</option>;
                    <option value={8}>8 spaces</option>;
                  </select>;
                </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    className='text-sm text-gray-300'>;
                    Compact mode;
                  </label>;
                </div>;
                <div className='flex items-center space-x-2'>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <input
                    type='checkbox'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    id='showLineNumbers'

                    checked={showLineNumbers}
                    onChange={e =    /> setShowLineNumbers(e && e.target.checked,}
}
                    className='w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500';
                  />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                  <label;
htmlFor='showLineNumbers'

                    className='text-sm text-gray-300'
                      />
                    Line numbers;
                  </label>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
                </div>
              </div>
              <div className='flex items-center space-x-3'    />
                <Button;
onClick={loadSampleJSON}
<<<<<<< HEAD
                  variant='outline';'
                  size='sm';'
                  className='border-gray-600 text-gray-300 'hover':bg-gray-700'>'

                  <Upload className='w-4 h-4 mr-2' />;'
=======
                  variant='outline';
                  size='sm';
                  className='border-gray-600 text-gray-300 hover:bg-gray-700'    />

<<<<<<< HEAD

=======
                  <Upload className='w-4 h-4 mr-2'    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
                  Load Sample;
                </Button>;
                <Button;
                  onClick={clearAll}
<<<<<<< HEAD
variant='outline';'
                  size='sm';'
                  className='border-gray-600 text-gray-300 'hover':bg-gray-700'>'

                  <Upload className='w-4 h-4 mr-2' />                  Load Sample;'
                </Button>;
                <Button;
                  onClick={clearAll}
                  variant='outline';'
                  size='sm';'
                  className='border-gray-600 text-gray-300 'hover':bg-gray-700'                >;'
=======
<<<<<<< HEAD

=======
variant='outline';
                  size='sm';
                  className='border-gray-600 text-gray-300 hover:bg-gray-700'    />

                  <Upload className='w-4 h-4 mr-2'    />                  Load Sample;
                </Button>;
                <Button;
                  onClick={clearAll}
                  variant='outline';
                  size='sm';
                  className='border-gray-600 text-gray-300 hover:bg-gray-700'                    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
                  Clear All;
                </Button>;
              </div>;
            </div>;
          </Card>;
<<<<<<< HEAD
<div className='grid grid-cols-1 'lg':grid-cols-2 gap-8'>;'
=======
<<<<<<< HEAD


          <div className=grid grid-cols-1 lg:grid-cols-2 gap-8">
>>>>>>> origin/resolved-merge-conflicts
            {/* Input Section */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>;'
              <div className='flex items-center justify-between mb-6'>;'
                <h3 className='text-2xl font-bold text-white flex items-center'>;'
                  <Code className='w-6 h-6 mr-3 text-teal-400' />;'
                  Input JSON;
                </h3>;
                <div className='flex items-center space-x-2'>;'
                  <span;
                    className={`px-2 py-1 rounded text-xs font-medium ${isValid;`                        ? 'bg-green-500/20 text-green-400';'
                        : 'bg-red-500/20 text-red-400';'
                    }`}>`
                    {isValid ? 'Valid' : 'Invalid'}'

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Input Section */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold text-white flex items-center'>
                  <Code className='w-6 h-6 mr-3 text-teal-400' />
                  Input JSON
                </h3>
                <div className='flex items-center space-x-2'>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    isValid ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
<<<<<<< HEAD
                    {isValid ? 'Valid' : 'Invalid'}
=======
                    {isValid ? 'Valid : Invalid'}
=======
<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'    />;
            {/* Input Section */}
            <Card className='p-8 bg-gray-800 border border-gray-700'    />;
              <div className='flex items-center justify-between mb-6'    />;
                <h3 className='text-2xl font-bold text-white flex items-center'    />;
                  <Code className='w-6 h-6 mr-3 text-teal-400'    />;
                  Input JSON;
                </h3>;
                <div className='flex items-center space-x-2'    />;
                  <span;
                    className={`px-2 py-1 rounded text-xs font-medium ${isValid;
                        ? 'bg-green-500/20 text-green-400';}
                        : 'bg-red-500/20 text-red-400';}
                    }`}    />

                    {isValid ? 'Valid' : 'Invalid'}

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
                  </span>
                </div>
              </div>

<<<<<<< HEAD
<div className='space-y-4'>'
                <div className='relative'>'
                  {showLineNumbers && (
                    <div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden'>'
                      {getLineNumbers(inputJson)}
                    </div>
                    <div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden'>                      {getLineNumbers(inputJson)}'
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts

                      {getLineNumbers(inputJson)}

                    isValid ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400''
                  {showLineNumbers && (
                    <div className='absolute left - 0 top - 0 bottom - 0 w - 12 bg - gray - 700 border - r border - gray - 600 text - xs text - gray - 400 p - 2 font - mono overflow - hidden'>                      {getLineNumbers (input_json)}              <div className='space - y-4'>;'

                <div className='relative'>;'
                  {showLineNumbers && (</div>;
                  }`}>;`                  </span>;
                </div>;
              </div>;
              <div className='space-y-4'>;'
                <div className='relative'>;'
                  {showLineNumbers && (<div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden'>                      {getLineNumbers(inputJson)}              <div className='space-y-4'>;'
                <div className='relative'>;'
                  {showLineNumbers && (<div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden'>;'
                    </div>;
                  )}

                  <textarea,
value={inputJson}

onChange={e => setInputJson(e.target.value)}
                    placeholder='Paste your JSON data here...''
                    rows={15}
                    className={`w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 'focus':outline-none 'focus':ring-2 'focus':ring-teal-500 font-mono text-sm resize-none ${;`                      }
                      showLineNumbers ? 'pl-16' : '';'
                    }`}`
                  />
                </div>
                {!isValid && errorMessage && (
<div className='p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300'>'

<<<<<<< HEAD
                    <strong>'Error': </strong> {errorMessag
}
                  </div>;
                )}<div className='flex space-x-3'>;'
                  <Button;
                    onClick={formatJSON}
                    disabled={!inputJson.trim()}
                    className='flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 'hover':from-teal-700 'hover':to-cyan-700 text-white py-3 text-lg font-semibold 'disabled':opacity-50 'disabled':cursor-not-allowed'>'

                    <Code className='w-5 h-5 mr-2' />;'
=======
=======
<div className='space-y-4'    />
                <div className='relative'    />
                  {showLineNumbers && (}
                    <div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden'    />}
                      {getLineNumbers(inputJson)}
                    </div>
                    <div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden'    />                      {getLineNumbers(inputJson)}

                      {getLineNumbers(inputJson)}

                    isValid ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  {showLineNumbers && (}
                    <div className='absolute left - 0 top - 0 bottom - 0 w - 12 bg - gray - 700 border - r border - gray - 600 text - xs text - gray - 400 p - 2 font - mono overflow - hidden'    />                      {getLineNumbers (input_json)}              <div className=\"space - y-4\"    />;

                <div className=\"relative\"    />;
                  {showLineNumbers && (</div>;}
<<<<<<< HEAD
=======
=======
                  <label
                    htmlFor='showLineNumbers'
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    className='text-sm text-gray-300'>;
                <div className='flex items - center space - x-2'>;
                  <input;
                    type='checkbox';
                    id='compact_mode';
                    checked={compact_mode}
                    on_change={e => setCompactMode (e.target.checked)}
                    className='w - 4 h - 4 text - teal - 600 bg - gray - 700 border - gray - 600 rounded focus:ring - teal - 500';
                  />;
                  <label;
                    html_for='compact_mode';
                    className='text - sm text - gray - 300';
                  >;
                    Compact mode;
                  </label>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <input;
                    type='checkbox';
                    id='showLineNumbers';
                    checked={showLineNumbers}
                    on_change={e => setShowLineNumbers (e.target.checked)}
                    className='w - 4 h - 4 text - teal - 600 bg - gray - 700 border - gray - 600 rounded focus:ring - teal - 500';
                  />;
                  <label;
                    html_for='showLineNumbers';
                    className='text - sm text - gray - 300';
                  >;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    Line numbers;
                  </label>;
                </div>;
              </div>;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                
                <div className="flex items-center space-x-2">
                  <input

                    type="checkbox"
                    id="compactMode"
                    checked={compactMode}

<<<<<<< HEAD
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="compactMode"
                    checked={compactMode}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    onChange={(e) => setCompactMode(e && e.target.checked)}
                    className="w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500";
                  />;
                  <label htmlFor="compactMode" className="text-sm text-gray-300" htmlFor="input-Compact mode">Compact mode</label>;
                </div>;
                <div className="flex items-center space-x-2">;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <input
                    type="checkbox"
                    id="showLineNumbers"
                    checked={showLineNumbers}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    onChange={(e) => setShowLineNumbers(e && e.target.checked)}
                    className="w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500";
                  />;
                  <label htmlFor="showLineNumbers" className="text-sm text-gray-300" htmlFor="input-Line numbers">Line numbers</label>;
                </div>;
              </div>;
              <div className="flex items-center space-x-3">;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Button
                  onClick={loadSampleJSON}
                  variant="outline"
                  size="sm"
<<<<<<< HEAD
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Load Sample
                </Button>
                <Button
                  onClick={clearAll}
                  variant='outline'
                  size='sm'
                  className='border-gray-600 text-gray-300 hover:bg-gray-700'                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <Upload className='w-4 h-4 mr-2' />                  Load Sample
                </Button>
                <Button
                  onClick={clearAll}
                  variant='outline'
                  size='sm'
                  className='border-gray-600 text-gray-300 hover:bg-gray-700'                >
                  Clear All
                </Button>
              </div>
            </div>
          </Card>


                    </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold text-white flex items-center'>
                  <Code className='w-6 h-6 mr-3 text-teal-400' />
                  Input JSON
                </h3>
                <div className='flex items-center space-x-2'>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      isValid
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >                    {isValid ? 'Valid' : 'Invalid'}                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    isValid ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                  </span>
                </div>
              </div>
              <div className='space-y-4'>
                <div className='relative'>
                  {showLineNumbers && (
                    <div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden'>                      {getLineNumbers(inputJson)}              <div className="space-y-4">
                <div className="relative">
                  {showLineNumbers && (
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden">
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    </div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden'>                      {getLineNumbers(inputJson)}

                      {getLineNumbers(inputJson)}

                    </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  }`}>;
                  </span>;
                </div>;
              </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <div className='space-y-4'    />;
                <div className='relative'    />;
                  {showLineNumbers && (<div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden'    />                      {getLineNumbers(inputJson)}              <div className=\"space-y-4\"    />;
                <div className=\"relative\"    />;
                  {showLineNumbers && (<div className=\"absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden\"    />;}
                    </div>;}
                  )}
<<<<<<< HEAD
=======
=======
              <div className='space-y-4'>;
                <div className='relative'>;
                  {showLineNumbers && (;
                    <div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden'>                      {getLineNumbers(inputJson)}              <div className="space-y-4">;
                <div className="relative">;
                  {showLineNumbers && (;
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden">;
                    </div>;
                  )}
                  <textarea
                    value={inputJson}
<<<<<<< HEAD
                    onChange={(e) => setInputJson(e.target.value)}
                    placeholder="Paste your JSON data here..."

                    onChange={e => setInputJson(e.target.value)}
                    placeholder='Paste your JSON data here...'                    rows={15}                    onChange={(e) => setInputJson(e.target.value)}
                    placeholder="Paste your JSON data here..."
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                  <textarea;
value={inputJson}

<<<<<<< HEAD
onChange={e =    /> setInputJson(e.target.value)}
                    placeholder='Paste your JSON data here...'
=======
<<<<<<< HEAD
onChange={e =    /> setInputJson(e.target.value)}
                    placeholder='Paste your JSON data here...'
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    rows={15}
                    className={`w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono text-sm resize-none ${;}
                      showLineNumbers ? 'pl-16' : '';}
                    }`}
<<<<<<< HEAD

=======
<<<<<<< HEAD
                  />
                </div>
                {!isValid && errorMessage && (
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  />
                </div>
                {!isValid && errorMessage && (
<div className='p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300'    />
}
                    <strong    />Error: </strong> {errorMessag,}
}
                  </div>;
                )}<div className='flex space-x-3'    />;
                  <Button;
<<<<<<< HEAD
=======
=======
                  />;
                </div>;

                {!isValid && errorMessage && (;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <div className='p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300'>                    <strong>Error:</strong> {errorMessage}
                  </div>;
                )}


                <div className='flex space-x-3'>                  <div className="p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">;

                    <strong>Error:</strong> {errorMessage}
                  </div>;
                )}


                <div className='flex space-x-3'>;

<<<<<<< HEAD
                <div className='flex space-x-3'>                  <div className="p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">;
                    <strong>Error:</strong> {errorMessage}
                  </div>;
                )}
                <div className='flex space-x-3'>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    onClick={formatJSON}
                    disabled={!inputJson.trim()}
                    className='flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed'    />

                    <Code className='w-5 h-5 mr-2'    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
                    Format JSON;
                  </Button>;
                  <Button;
                    onClick={minifyJSON}
                    disabled={!inputJson.trim()}
<<<<<<< HEAD
variant='outline';'
                    className='border-gray-600 text-gray-300 'hover':bg-gray-700 'disabled':opacity-50'>'
=======
<<<<<<< HEAD
=======
variant='outline';
                    className='border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50'    />
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts

                    Minify;
                  </Button>;
                  <Button;
                    onClick={validateJSON}
<<<<<<< HEAD
                    disabled={!inputJson.trim()}
<<<<<<< HEAD
                    variant='outline'
                    className='border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50'
                  <div className='p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300'>
=======
<<<<<<< HEAD
                    variant='outline
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50
                  <div className=p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
>>>>>>> origin/resolved-merge-conflicts
                    <strong>Error:</strong> {errorMessage}
                  </div>
                )}

<<<<<<< HEAD
variant='outline';'
                    className='border-gray-600 text-gray-300 'hover': bg-gray-700 'disabled':opacity-50''
=======

=======
                    disabled={!inputJson && inputJson.trim()}
                    variant='outline'
<<<<<<< HEAD
                  <div className="p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
                <div className='flex space-x-3'>                  <div className="p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">

                <div className='flex space-x-3'>                  <div className="p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
                <div className='flex space-x-3'>

                    <strong>Error:</strong> {errorMessage}
                  </div>
                )}
                <div className="flex space-x-3">
                  <Button
                    onClick={formatJSON}
                    disabled={!inputJson.trim()}
                    className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Code className="w-5 h-5 mr-2" />

                <div className='flex space-x-3'>

                    <strong>Error:</strong> {errorMessage}
                  </div>
                )}

                    Format JSON
                  </Button>
                  <Button
                    onClick={minifyJSON}
                    disabled={!inputJson.trim()}
                    variant='outline'
                    className='border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50'                  >                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
                  >
                    Minify
                  </Button>
                  <Button
                    onClick={validateJSON}
                    disabled={!inputJson.trim()}
                    variant='outline'
                    className='border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50'                  >                    variant="outline"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
                  >
                    Validate
=======

variant='outline'
                    className='border-gray-600 text-gray-300 hover: bg-gray-700 disabled:opacity-50'
                      />
                    Validate;
>>>>>>> origin/chore/fix-lint-and-merge
                  </Button>
                </div>
              </div>
            </Card>
<<<<<<< HEAD
=======

<<<<<<< HEAD
            {/* Output Section */}
<<<<<<< HEAD
<Card className='p-8 bg-gray-800 border border-gray-700'>'
              <div className='flex items-center justify-between mb-6'>'
                <h3 className='text-2xl font-bold text-white flex items-center'>'
                  <CheckCircle className='w-6 h-6 mr-3 text-cyan-400' />'
                  Formatted Output
                </h3>
                {formattedJson && (
                  <div className='flex items-center space-x-2'>'
                    <Button
}
onClick={() => copyToClipboard(formattedJson
}
variant='outline';'
                      size='sm''
                      className='border-gray-600 text-gray-300 'hover':bg-gray-700''
                    >
                      <Copy className='w-4 h-4 mr-2' />'
                      Copy
                    </Button>
                    <Button,
onClick={() =>
                        }
                        downloadJSON(formattedJson, 'formatted.json')'
                      }
variant='outline';'
                      size='sm''
                      className='border-gray-600 text-gray-300 'hover': bg-gray-700''
                    >
                      <Download className='w-4 h-4 mr-2' />'
                      Download
                    </Button>
                  </div>

                
}
              </div>;
<div className='space-y-4'>;'
                {formattedJson ? (<div className='relative'>;'
                    {showLineNumbers && (<div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden'>;'
=======
<<<<<<< HEAD

=======
<Card className='p-8 bg-gray-800 border border-gray-700'    />
              <div className='flex items-center justify-between mb-6'    />
                <h3 className='text-2xl font-bold text-white flex items-center'    />
                  <CheckCircle className='w-6 h-6 mr-3 text-cyan-400'    />
                  Formatted Output;
                </h3>
                {formattedJson && (
                  <div className='flex items-center space-x-2'    />
                    <Button;}
onClick={() =    /> copyToClipboard(formattedJson,}
}
                      variant='outline'
                      size='sm'
                      className='border-gray-600 text-gray-300 hover:bg-gray-700'
                    >
                      <Copy className='w-4 h-4 mr-2'    />
                      Copy;
                    </Button>
                    <Button;
onClick={() =    />}
                        downloadJSON(formattedJson, 'formatted.json')}
                      }
                      variant='outline'
                      size='sm'
                      className='border-gray-600 text-gray-300 hover: bg-gray-700'
                    >
                      <Download className='w-4 h-4 mr-2'    />
                      Download;
                    </Button>
                  </div>

                ,
}
              </div>;
<div className='space-y-4'    />;
                {formattedJson ? (<div className='relative'    />;}
                    {showLineNumbers && (<div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden'    />;}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
                        {getLineNumbers(formattedJson)}
                      </div>;
                    )}
                    <div;
<<<<<<< HEAD
                      className={`p-4 bg-gray-700 border border-gray-600 rounded-lg text-white font-mono text-sm overflow-auto max-h-96 ${showLineNumbers ? 'pl-16' : '';'
                      }`}>`

                      <pre className='whitespace-pre-wrap'>{formattedJson}</pre>;'
                    </div>;
                  </div>;
                ) : (<div className='bg-gray-700 p-6 rounded-lg border border-gray-600 text-center'>;'
                    <div className='text-6xl mb-4'>📄</div>;'
                    <p className='text-gray-400'>;'
=======
<<<<<<< HEAD

=======
                      className={`p-4 bg-gray-700 border border-gray-600 rounded-lg text-white font-mono text-sm overflow-auto max-h-96 ${showLineNumbers ? 'pl-16' : '';}
                      }`}    />

                      <pre className='whitespace-pre-wrap'    />{formattedJson}</pre>;
                    </div>;
                  </div>;
                ) : (<div className='bg-gray-700 p-6 rounded-lg border border-gray-600 text-center'    />;
                    <div className='text-6xl mb-4'    />📄</div>;
                    <p className='text-gray-400'    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
                      Formatted JSON will appear here. Enter JSON data and click;
                      format to get started.;
                    </p>;
                  </div>;
                )}

<<<<<<< HEAD
                {formattedJson && (
<div className='text-sm text-gray-400'>'
                    <p>• 'Characters': {formattedJson.length}</p>
                    <p>• 'Lines': {formattedJson.split('\n').length}</p>'
                    <p>
                      • 'Size': {((formattedJson.length * 2) / 1024).toFixed(2)}{' '}'
                      KB
                    </p>
                  </div>

                
}
=======
<<<<<<< HEAD
=======
                {formattedJson && (}
<div className='text-sm text-gray-400'    />}
                    <p    />• Characters: {formattedJson.length}</p>
                    <p    />• Lines: {formattedJson.split('\n').length}</p>
                    <p    />
                      • Size: {((formattedJson.length * 2) / 1024).toFixed(2)}{' '}
                      KB;
                    </p>
                  </div>

                ,
}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
              </div>;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Features */}

<<<<<<< HEAD
<section className='py-20 bg-gray-800'>'
        <div className='max-w-7xl mx-auto px-4 'sm':px-6 'lg':px-8'>'
          <div className='text-center mb-16'>'
            <h2 className='text-3xl 'sm':text-4xl font-bold text-white mb-6'>'
=======
<<<<<<< HEAD

>>>>>>> origin/resolved-merge-conflicts

                {formattedJson && (
                  <div className='text-sm text-gray-400'>
                    <p>• Characters: {formattedJson.length}</p>
                    <p>• Lines: {formattedJson.split('\n').length}</p>
                    <p>• Size: {(formattedJson.length * 2 / 1024).toFixed(2)} KB</p>
                  </div>
=======
                    className='border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50'>                    variant="outline";
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50";
                    <div className="absolute left - 0 top - 0 bottom - 0 w - 12 bg - gray - 700 border - r border - gray - 600 text - xs text - gray - 400 p - 2 font - mono overflow - hidden">;
                    </div>)}
                  <textarea;
                    value={input_json}
                    on_change={e => setInputJson (e.target.value)}
                    placeholder='Paste your JSON data here...'                    rows={15}                    on_change={(e) => setInputJson (e.target.value)}
                    placeholder="Paste your JSON data here...";
                    rows={15}
                    className={`w - full p - 4 bg - gray - 700 border border - gray - 600 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - teal - 500 font - mono text - sm resize - none ${
                      showLineNumbers ? 'pl - 16' : '';
                    }`}
                  />;
                </div>;
                {!is_valid && error_message && (
                  <div className='p - 3 bg - red - 500 / 20 border border - red - 500 / 30 rounded text - sm text - red - 300'>                    <strong > Error:</strong> {error_message}
                  </div>)}
                <div className='flex space - x-3'>                  <div className="p - 3 bg - red - 500 / 20 border border - red - 500 / 30 rounded text - sm text - red - 300">;
                    <strong > Error:</strong> {error_message}
                  </div>)}
                <div className='flex space - x-3'>;
                  <Button;
                    on_click={formatJSON}
                    disabled={!input_json.trim ()}
                    className='flex - 1 bg - gradient - to - r from - teal - 600 to - cyan - 600 hover:from - teal - 700 hover:to - cyan - 700 text - white py - 3 text - lg font - semibold disabled:opacity - 50 disabled:cursor - not - allowed';
                  >;
                    <Code className='w - 5 h - 5 mr - 2' />                    Format JSON                  <Button;
                    on_click={formatJSON}
                    disabled={!input_json.trim ()}
                    className="flex - 1 bg - gradient - to - r from - teal - 600 to - cyan - 600 hover:from - teal - 700 hover:to - cyan - 700 text - white py - 3 text - lg font - semibold disabled:opacity - 50 disabled:cursor - not - allowed";
                  >;
                    <Code className="w - 5 h - 5 mr - 2" />;
                    Format JSON;
                  </Button>;
                  <Button;
                    on_click={minifyJSON}
                    disabled={!input_json.trim ()}
                    variant='outline';
                    className='border - gray - 600 text - gray - 300 hover:bg - gray - 700 disabled:opacity - 50'                  >                    variant="outline";
                    className="border - gray - 600 text - gray - 300 hover:bg - gray - 700 disabled:opacity - 50";
                  >;
                    Minify;
                  </Button>;
                  <Button;
                    on_click={validateJSON}
                    disabled={!input_json.trim ()}
                    variant='outline';
                    className='border - gray - 600 text - gray - 300 hover:bg - gray - 700 disabled:opacity - 50'                  >                    variant="outline";
                    className="border - gray - 600 text - gray - 300 hover:bg - gray - 700 disabled:opacity - 50";

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  >;
                    Validate;
                  </Button>;
                </div>;
              </div>;
            </Card>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            {/* Output Section */}
            {/* Output Section */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-cyan-400" />
                  Formatted Output
                </h3>
                {formattedJson && (
                  <div className="flex items-center space-x-2">
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <Button
                      onClick={() => copyToClipboard(formattedJson)}
                      variant='outline';
                      size='sm';
                      className='border-gray-600 text-gray-300 hover:bg-gray-700';
                    >;
                      <Copy className='w-4 h-4 mr-2' />;
                      Copy;
                    </Button>;
<<<<<<< HEAD
            {/* Output Section */}
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold text-white flex items-center'>
                  <CheckCircle className='w-6 h-6 mr-3 text-cyan-400' />
                  Formatted Output
                </h3>
                {formattedJson && (
                  <div className='flex items-center space-x-2'>
                    <Button
                      onClick={() => copyToClipboard(formattedJson)}
                      variant='outline'
                      size='sm'
                      className='border-gray-600 text-gray-300 hover:bg-gray-700'
                    >
                      <Copy className='w-4 h-4 mr-2' />
                      Copy
                    </Button>
                    <Button
                      onClick={() =>
                        downloadJSON(formattedJson, 'formatted.json')
                      }
                      variant='outline'
                      size='sm'
                      className='border-gray-600 text-gray-300 hover:bg-gray-700'
                    >
                      <Download className='w-4 h-4 mr-2' />                      Download                  Formatted Output
                </h3>
                {formattedJson && (
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => copyToClipboard(formattedJson)}
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button
              </div>;
              <div className='space-y-4'>;
                  <div className='relative'>;
                    {showLineNumbers && (;
                      <div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden'>;
                        {getLineNumbers(formattedJson)}
                      </div>;
                    )}
                    <div
                      className={`p-4 bg-gray-700 border border-gray-600 rounded-lg text-white font-mono text-sm overflow-auto max-h-96 ${
                        showLineNumbers ? 'pl-16' : ''
                      }`}>;
                      <pre className='whitespace-pre-wrap'>{formattedJson}</pre>;
                    </div>;
                  </div>;
                ) : (;
                  <div className='bg-gray-700 p-6 rounded-lg border border-gray-600 text-center'>;
                    <div className='text-6xl mb-4'>📄</div>;
                    <p className='text-gray-400'>;
                      Formatted JSON will appear here. Enter JSON data and click;
                      format to get started.                    </p>                  <div className="bg-gray-700 p-6 rounded-lg border border-gray-600 text-center">;
                    <div className="text-6xl mb-4">📄</div>;
                    <p className="text-gray-400">;
                      Formatted JSON will appear here. Enter JSON data and click format to get started.;
                  </div>;
                )}
                      onClick={() => downloadJSON(formattedJson, 'formatted.json')}
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                )}
              </div>
                    <div className={`p-4 bg-gray-700 border border-gray-600 rounded-lg text-white font-mono text-sm overflow-auto max-h-96 ${
                      showLineNumbers ? 'pl-16' : ''
                    }`}>
<pre className="whitespace-pre-wrap">{formattedJson}</pre>
                    </div>
                  </div>
                ) : (
                  <div className='bg-gray-700 p-6 rounded-lg border border-gray-600 text-center'>
                    <div className='text-6xl mb-4'>📄</div>
                    <p className='text-gray-400'>
                      Formatted JSON will appear here. Enter JSON data and click
                      format to get started.                    </p>                  <div className="bg-gray-700 p-6 rounded-lg border border-gray-600 text-center">
                    <div className="text-6xl mb-4">📄</div>
                    <p className="text-gray-400">
                      Formatted JSON will appear here. Enter JSON data and click format to get started.
                    </p>
                  </div>
                )}
{formattedJson && (
                  <div className="text-sm text-gray-400">
                    <p>• Characters: {formattedJson.length}</p>
                    <p>• Lines: {formattedJson.split('\n').length}</p>
                    <p>• Size: {(formattedJson.length * 2 / 1024).toFixed(2)} KB</p>
                  </div>
              <div className='space-y-4'>
                  <div className='relative'>
                    {showLineNumbers && (
                      <div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden'>
                        {getLineNumbers(formattedJson)}
                      </div>
                    )}
                    <div
                      className={`p-4 bg-gray-700 border border-gray-600 rounded-lg text-white font-mono text-sm overflow-auto max-h-96 ${
                        showLineNumbers ? 'pl-16' : ''
                      }`}
                    >
                      <pre className='whitespace-pre-wrap'>{formattedJson}</pre>
                    </div>
                  </div>
                ) : (
                  <div className='bg-gray-700 p-6 rounded-lg border border-gray-600 text-center'>
                    <div className='text-6xl mb-4'>📄</div>
                    <p className='text-gray-400'>
                      Formatted JSON will appear here. Enter JSON data and click
                      format to get started.                    </p>                  <div className="bg-gray-700 p-6 rounded-lg border border-gray-600 text-center">
                    <div className="text-6xl mb-4">📄</div>
                    <p className="text-gray-400">
                      Formatted JSON will appear here. Enter JSON data and click format to get started.
                  </div>
                )}
                {formattedJson && (
                  <div className='text-sm text-gray-400'>
                    <p>• Characters: {formattedJson.length}</p>
                    <p>• Lines: {formattedJson.split('\n').length}</p>
                    <p>
                      • Size: {((formattedJson.length * 2) / 1024).toFixed(2)}{' '}
                      KB


                    </p>                  </div>                  <div className="text-sm text-gray-400">
                    <p>• Characters: {formattedJson.length}</p>
                    <p>• Lines: {formattedJson.split('\n').length}</p>
                    <p>• Size: {(formattedJson.length * 2 / 1024).toFixed(2)} KB</p>
                    </p>                  </div>

                  </div>

=======
                    <Button


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>
<<<<<<< HEAD


      {/* Features */}
      <section className='py-20 bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Features */}
      <section className='py-20 bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
              Professional JSON Formatting Features
<<<<<<< HEAD
            </h2>
<<<<<<< HEAD
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>'
              Everything you need to work with JSON data efficiently and,
professionally.
            </p>
          </div>
          <div className='grid grid-cols-1 'md':grid-cols-2 'lg':grid-cols-3 gap-8'>'
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>'
              <div className='text-4xl mb-4'>✨</div>'
              <h3 className='text-xl font-bold text-white mb-4'>'
                Smart Formatting
              </h3>
              <p className='text-gray-400'>'
                Intelligent JSON formatting with customizable indentation and,
spacing options.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>'
              <div className='text-4xl mb-4'>✅</div>'
              <h3 className='text-xl font-bold text-white mb-4'>'
                Real-time Validation
              </h3>
              <p className='text-gray-400'>'
                Instant JSON validation with detailed error messages and syntax,
highlighting.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>'
              <div className='text-4xl mb-4'>📦</div>'
              <h3 className='text-xl font-bold text-white mb-4'>'
                Minification
              </h3>
              <p className='text-gray-400'>'
                Compress JSON data by removing unnecessary whitespace and,
formatting.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>'
              <div className='text-4xl mb-4'>🔢</div>'
              <h3 className='text-xl font-bold text-white mb-4'>'
                Line Numbers
              </h3>
              <p className='text-gray-400'>'
                Optional line numbering for easier navigation and debugging of,
large JSON files.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>'
              <div className='text-4xl mb-4'>💾</div>'
              <h3 className='text-xl font-bold text-white mb-4'>'
                Export Options
              </h3>
              <p className='text-gray-400'>'
                Download formatted JSON files or copy to clipboard with a single,
click.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>'
              <div className='text-4xl mb-4'>⚙️</div>'
              <h3 className='text-xl font-bold text-white mb-4'>'
                Customizable
              </h3>
              <p className='text-gray-400'>'
                Adjust indentation size, toggle compact mode, and customize,
display options.
=======

=======
<section className='py-20 bg-gray-800'    />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />
          <div className='text-center mb-16'    />
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'    />

              Professional JSON Formatting Features;
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'    />
              Everything you need to work with JSON data efficiently and;
professionally.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'    />
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'    />
              <div className='text-4xl mb-4'    />✨</div>
              <h3 className='text-xl font-bold text-white mb-4'    />
                Smart Formatting;
              </h3>
              <p className='text-gray-400'    />
                Intelligent JSON formatting with customizable indentation and;
spacing options.
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'    />
              <div className='text-4xl mb-4'    />✅</div>
              <h3 className='text-xl font-bold text-white mb-4'    />
                Real-time Validation;
              </h3>
              <p className='text-gray-400'    />
                Instant JSON validation with detailed error messages and syntax;
highlighting.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'    />
              <div className='text-4xl mb-4'    />📦</div>
              <h3 className='text-xl font-bold text-white mb-4'    />
                Minification;
              </h3>
              <p className='text-gray-400'    />
                Compress JSON data by removing unnecessary whitespace and;
formatting.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'    />
              <div className='text-4xl mb-4'    />🔢</div>
              <h3 className='text-xl font-bold text-white mb-4'    />
                Line Numbers;
              </h3>
              <p className='text-gray-400'    />
                Optional line numbering for easier navigation and debugging of;
large JSON files.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'    />
              <div className='text-4xl mb-4'    />💾</div>
              <h3 className='text-xl font-bold text-white mb-4'    />
                Export Options;
              </h3>
              <p className='text-gray-400'    />
                Download formatted JSON files or copy to clipboard with a single;
click.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'    />
              <div className='text-4xl mb-4'    />⚙️</div>
              <h3 className='text-xl font-bold text-white mb-4'    />
                Customizable;
              </h3>
              <p className='text-gray-400'    />
                Adjust indentation size, toggle compact mode, and customize;
display options.
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'    />
              <div className='text-4xl mb-4'    />✅</div>
              <h3 className='text-xl font-bold text-white mb-4'    />
                Real-time Validation;
              </h3>
              <p className='text-gray-400'    />
                Instant JSON validation with detailed error messages and syntax;
highlighting.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'    />
              <div className='text-4xl mb-4'    />📦</div>
              <h3 className='text-xl font-bold text-white mb-4'    />
                Minification;
              </h3>
              <p className='text-gray-400'    />
                Compress JSON data by removing unnecessary whitespace and;
formatting.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'    />
              <div className='text-4xl mb-4'    />🔢</div>
              <h3 className='text-xl font-bold text-white mb-4'    />
                Line Numbers;
              </h3>
              <p className='text-gray-400'    />
                Optional line numbering for easier navigation and debugging of;
large JSON files.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'    />
              <div className='text-4xl mb-4'    />💾</div>
              <h3 className='text-xl font-bold text-white mb-4'    />
                Export Options;
              </h3>
              <p className='text-gray-400'    />
                Download formatted JSON files or copy to clipboard with a single;
click.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'    />
              <div className='text-4xl mb-4'    />⚙️</div>
              <h3 className='text-xl font-bold text-white mb-4'    />
                Customizable;
              </h3>
              <p className='text-gray-400'    />
                Adjust indentation size, toggle compact mode, and customize;
display options.
>>>>>>> origin/chore/fix-lint-and-merge
              </p>
=======


<<<<<<< HEAD

              Professional JSON Formatting Features

              Professional JSON Formatting Features
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Everything you need to work with JSON data efficiently and
              professionally.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>✨</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Smart Formatting
              </h3>
              <p className='text-gray-400'>
                Intelligent JSON formatting with customizable indentation and
                spacing options.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>✅</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Real-time Validation
              </h3>
              <p className='text-gray-400'>
                Instant JSON validation with detailed error messages and syntax
                highlighting.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>📦</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Minification
              </h3>
              <p className='text-gray-400'>
                Compress JSON data by removing unnecessary whitespace and
                formatting.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🔢</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Line Numbers
              </h3>
              <p className='text-gray-400'>
                Optional line numbering for easier navigation and debugging of
                large JSON files.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>💾</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Export Options
              </h3>
              <p className='text-gray-400'>
                Download formatted JSON files or copy to clipboard with a single
                click.
              </p>
            </Card>
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>⚙️</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Customizable
              </h3>
              <p className='text-gray-400'>
                Adjust indentation size, toggle compact mode, and customize
                display options.              </p>            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-4">Customizable</h3>
              <p className="text-gray-400">
                Adjust indentation size, toggle compact mode, and customize display options.
<<<<<<< HEAD
=======

              </p>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </Card>
          </div>
        </div>
      </section>
<<<<<<< HEAD

=======
<<<<<<< HEAD
            </h2>
      {/* Use Cases */}
<<<<<<< HEAD
<section className='py-20 bg-gray-900'>'
        <div className='max-w-6xl mx-auto px-4 'sm':px-6 'lg':px-8'>'
          <div className='text-center mb-16'>'
            <h2 className='text-3xl 'sm':text-4xl font-bold text-white mb-6'>'
              Perfect For Every JSON Need
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>'
              From development to data analysis, our JSON formatter serves all,
your formatting needs.
            </p>
          </div>
          <div className='grid grid-cols-1 'md':grid-cols-2 gap-8'>'
            <Card className='p-8 bg-gray-700 border border-gray-600'>'
              <div className='text-4xl mb-4'>👨‍💻</div>'
              <h3 className='text-2xl font-bold text-white mb-4'>Developers</h3>'
              <p className='text-gray-400 mb-6'>'
                Format API responses, debug JSON data, and prepare configuration,
files with professional formatting.
              </p>
              <ul className='space-y-2 text-gray-300'>'
=======
<<<<<<< HEAD
=======
      <section className='py-20 bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
              Perfect For Every JSON Need
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              From development to data analysis, our JSON formatter serves all
              your formatting needs.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Card className='p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>👨‍💻</div>
              <h3 className='text-2xl font-bold text-white mb-4'>Developers</h3>
              <p className='text-gray-400 mb-6'>
                Format API responses, debug JSON data, and prepare configuration
                files with professional formatting.
              </p>
              <ul className='space-y-2 text-gray-300'>                <li>• API development and testing</li>              Perfect For Every JSON Need
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Use Cases */}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD

<<<<<<< HEAD
=======
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Perfect For Every JSON Need

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From development to data analysis, our JSON formatter serves all your formatting needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Developers</h3>
              <p className="text-gray-400 mb-6">
                Format API responses, debug JSON data, and prepare configuration files with professional formatting.
              </p>
              <ul className="space-y-2 text-gray-300">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
                <li>• API development and testing</li>
                <li>• Configuration file management</li>
                <li>• Debug and troubleshooting</li>
=======
<section className='py-20 bg-gray-900'    />
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'    />
          <div className='text-center mb-16'    />
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'    />
              Perfect For Every JSON Need;
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'    />
              From development to data analysis, our JSON formatter serves all;
your formatting needs.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'    />
            <Card className='p-8 bg-gray-700 border border-gray-600'    />
              <div className='text-4xl mb-4'    />👨‍💻</div>
              <h3 className='text-2xl font-bold text-white mb-4'    />Developers</h3>
              <p className='text-gray-400 mb-6'    />
                Format API responses, debug JSON data, and prepare configuration;
files with professional formatting.
              </p>
              <ul className='space-y-2 text-gray-300'    />
                <li    />• API development and testing</li>
                <li    />• Configuration file management</li>
                <li    />• Debug and troubleshooting</li>
>>>>>>> origin/chore/fix-lint-and-merge
              </ul>
            </Card>
<<<<<<< HEAD
            <Card className='p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>📊</div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Data Analysts
              </h3>
              <p className='text-gray-400 mb-6'>
                Clean and format JSON datasets for analysis, reporting, and data
                visualization projects.
              </p>
              <ul className='space-y-2 text-gray-300'>                <li>• Data cleaning and preparation</li>            <Card className="p-8 bg-gray-700 border border-gray-600">
=======


<<<<<<< HEAD
<Card className='p-8 bg-gray-700 border border-gray-600'>'
              <div className='text-4xl mb-4'>📊</div>'
              <h3 className='text-2xl font-bold text-white mb-4'>'
                Data Analysts
              </h3>
              <p className='text-gray-400 mb-6'>'
                Clean and format JSON datasets for analysis, reporting, and data,
visualization projects.
              </p>
              <ul className='space-y-2 text-gray-300'>'
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
                <li>• Data cleaning and preparation</li>
=======
            <Card className="p-8 bg-gray-700 border border-gray-600">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Analysts</h3>
              <p className="text-gray-400 mb-6">
                Clean and format JSON datasets for analysis, reporting, and data visualization projects.
              </p>
              <ul className="space-y-2 text-gray-300">
<<<<<<< HEAD
=======

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <li>• Data cleaning and preparation</li>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <li>• Report generation</li>
                <li>• Data validation</li>
              </ul>
            </Card>
<<<<<<< HEAD
            <Card className='p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🔧</div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                DevOps Engineers
              </h3>
              <p className='text-gray-400 mb-6'>
                Manage configuration files, validate deployment manifests, and
                format infrastructure as code.
              </p>
              <ul className='space-y-2 text-gray-300'>                <li>• Configuration management</li>            <Card className="p-8 bg-gray-700 border border-gray-600">
=======

<<<<<<< HEAD
<Card className='p-8 bg-gray-700 border border-gray-600'>'
              <div className='text-4xl mb-4'>🔧</div>'
              <h3 className='text-2xl font-bold text-white mb-4'>'
                DevOps Engineers
              </h3>
              <p className='text-gray-400 mb-6'>'
                Manage configuration files, validate deployment manifests, and,
format infrastructure as code.
              </p>
              <ul className='space-y-2 text-gray-300'>'
=======

<<<<<<< HEAD
                <li>• Configuration management</li>
=======
            <Card className="p-8 bg-gray-700 border border-gray-600">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-white mb-4">DevOps Engineers</h3>
              <p className="text-gray-400 mb-6">
                Manage configuration files, validate deployment manifests, and format infrastructure as code.
              </p>
              <ul className="space-y-2 text-gray-300">
<<<<<<< HEAD
=======

>>>>>>> origin/resolved-merge-conflicts
                <li>• Configuration management</li>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <li>• Infrastructure validation</li>
                <li>• Deployment automation</li>
              </ul>
            </Card>
<<<<<<< HEAD
            <Card className='p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>📝</div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Technical Writers
              </h3>
              <p className='text-gray-400 mb-6'>
                Format JSON examples for documentation, tutorials, and technical
                specifications.
              </p>
              <ul className='space-y-2 text-gray-300'>                <li>• Documentation examples</li>            <Card className="p-8 bg-gray-700 border border-gray-600">
=======

<<<<<<< HEAD
<Card className='p-8 bg-gray-700 border border-gray-600'>'
              <div className='text-4xl mb-4'>📝</div>'
              <h3 className='text-2xl font-bold text-white mb-4'>'
                Technical Writers
              </h3>
              <p className='text-gray-400 mb-6'>'
                Format JSON examples for documentation, tutorials, and technical,
specifications.
              </p>
              <ul className='space-y-2 text-gray-300'>'
=======

<<<<<<< HEAD
                <li>• Documentation examples</li>
=======
            <Card className="p-8 bg-gray-700 border border-gray-600">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Writers</h3>
              <p className="text-gray-400 mb-6">
                Format JSON examples for documentation, tutorials, and technical specifications.
              </p>
              <ul className="space-y-2 text-gray-300">
<<<<<<< HEAD
=======

>>>>>>> origin/resolved-merge-conflicts
                <li>• Documentation examples</li>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <li>• API documentation</li>
                <li>• Technical specifications</li>
=======
<Card className='p-8 bg-gray-700 border border-gray-600'    />
              <div className='text-4xl mb-4'    />📊</div>
              <h3 className='text-2xl font-bold text-white mb-4'    />
                Data Analysts;
              </h3>
              <p className='text-gray-400 mb-6'    />
                Clean and format JSON datasets for analysis, reporting, and data;
visualization projects.
              </p>
              <ul className='space-y-2 text-gray-300'    />
                <li    />• Data cleaning and preparation</li>
                <li    />• Report generation</li>
                <li    />• Data validation</li>
              </ul>
            </Card>

<Card className='p-8 bg-gray-700 border border-gray-600'    />
              <div className='text-4xl mb-4'    />🔧</div>
              <h3 className='text-2xl font-bold text-white mb-4'    />
                DevOps Engineers;
              </h3>
              <p className='text-gray-400 mb-6'    />
                Manage configuration files, validate deployment manifests, and;
format infrastructure as code.
              </p>
              <ul className='space-y-2 text-gray-300'    />
                <li    />• Configuration management</li>
                <li    />• Infrastructure validation</li>
                <li    />• Deployment automation</li>
              </ul>
            </Card>

<Card className='p-8 bg-gray-700 border border-gray-600'    />
              <div className='text-4xl mb-4'    />📝</div>
              <h3 className='text-2xl font-bold text-white mb-4'    />
                Technical Writers;
              </h3>
              <p className='text-gray-400 mb-6'    />
                Format JSON examples for documentation, tutorials, and technical;
specifications.
              </p>
              <ul className='space-y-2 text-gray-300'    />
                <li    />• Documentation examples</li>
                <li    />• API documentation</li>
                <li    />• Technical specifications</li>
>>>>>>> origin/chore/fix-lint-and-merge
              </ul>
            </Card>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* CTA Section */}
<<<<<<< HEAD
<section className='py-20 bg-gradient-to-r from-teal-600 to-cyan-600'>'
        <div className='max-w-4xl mx-auto px-4 'sm':px-6 'lg':px-8 text-center'>'
          <h2 className='text-3xl 'sm':text-4xl font-bold text-white mb-6'>'
          </h2>
          <p className='text-xl text-teal-100 mb-8'>'
            Join thousands of developers and professionals who trust our JSON,
formatter for their data needs.
          </p>
          <div className='flex flex-col 'sm':flex-row gap-4 justify-center'>'
            <Button,
href='/contact''
              size='lg''
              className='bg-white text-teal-600 'hover':bg-gray-100''
            >
              Get Started Today
              <ArrowRight className='w-5 h-5 ml-2' />'
            </Button>
            <Button,
href='/pricing''
variant='outline';'
              size='lg''
              className='border-white text-white 'hover':bg-white 'hover':text-teal-600''
=======
<<<<<<< HEAD

>>>>>>> origin/resolved-merge-conflicts
            >
              View Pricing
=======
<section className='py-20 bg-gradient-to-r from-teal-600 to-cyan-600'    />
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'    />
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'    />
          </h2>
          <p className='text-xl text-teal-100 mb-8'    />
            Join thousands of developers and professionals who trust our JSON;
formatter for their data needs.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'    />
            <Button;
href='/contact'
              size='lg'
              className='bg-white text-teal-600 hover:bg-gray-100'
                />
              Get Started Today;
              <ArrowRight className='w-5 h-5 ml-2'    />
            </Button>
            <Button;
href='/pricing'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-teal-600'
                />
              View Pricing;
>>>>>>> origin/chore/fix-lint-and-merge
            </Button>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </>
<section className='py-20 bg-gray-800'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
              Professional JSON Formatting Features;
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                {formattedJson && (;
<<<<<<< HEAD
{formattedJson && (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <div className='text-sm text-gray-400'>;
                    <p>• Characters: {formattedJson && formattedJson.length}</p>;
                    <p>• Lines: {formattedJson && formattedJson.split('\n').length}</p>;
                    <p>;
                      • Size: {((formattedJson && formattedJson.length * 2) / 1024).toFixed(2)}{' '}
                      KB;
                    </p>                  </div>                  <div className="text-sm text-gray-400">;
                    <p>• Characters: {formattedJson && formattedJson.length}</p>;
                    <p>• Lines: {formattedJson && formattedJson.split('\n').length}</p>;
                    <p>• Size: {(formattedJson && formattedJson.length * 2 / 1024).toFixed(2)} KB</p>;
                )}
              </div>;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Features */}
      <section className='py-20 bg-gray-800'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
              Everything you need to work with JSON data efficiently and;
              professionally.;
            </p>;
          </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>✨</div>;
              <h3 className='text-xl font-bold text-white mb-4>;
=======
>>>>>>> origin/resolved-merge-conflicts
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>✨</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
                Smart Formatting;
              </h3>;
              <p className='text-gray-400'>;
                Intelligent JSON formatting with customizable indentation and;
                spacing options.;
              </p>;
            </Card>;
<<<<<<< HEAD
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>✅</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
=======
<<<<<<< HEAD
            <Card className='text-center p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>✅</div>;
              <h3 className='text-xl font-bold text-white mb-4>;
=======
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>✅</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
                Real-time Validation;
              </h3>;
              <p className='text-gray-400'>;
                Instant JSON validation with detailed error messages and syntax;
                highlighting.;
              </p>;
            </Card>;
<<<<<<< HEAD
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>📦</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
=======
<<<<<<< HEAD
            <Card className='text-center p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>📦</div>;
              <h3 className='text-xl font-bold text-white mb-4>;
=======
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>📦</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
                Minification;
              </h3>;
              <p className='text-gray-400'>;
                Compress JSON data by removing unnecessary whitespace and;
                formatting.;
              </p>;
            </Card>;
<<<<<<< HEAD
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>🔢</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
=======
<<<<<<< HEAD
            <Card className='text-center p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>🔢</div>;
              <h3 className='text-xl font-bold text-white mb-4>;
=======
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>🔢</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
                Line Numbers;
              </h3>;
              <p className='text-gray-400'>;
                Optional line numbering for easier navigation and debugging of;
                large JSON files.;
              </p>;
            </Card>;
<<<<<<< HEAD
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>💾</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
=======
<<<<<<< HEAD
            <Card className='text-center p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>💾</div>;
              <h3 className='text-xl font-bold text-white mb-4>;
=======
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>💾</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
                Export Options;
              </h3>;
              <p className='text-gray-400'>;
                Download formatted JSON files or copy to clipboard with a single;
                click.;
              </p>;
            </Card>;
<<<<<<< HEAD
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>⚙️</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
=======
<<<<<<< HEAD
            <Card className='text-center p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>⚙️</div>;
              <h3 className='text-xl font-bold text-white mb-4>;
=======
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>⚙️</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
                Customizable;
              </h3>;
              <p className='text-gray-400'>;
                Adjust indentation size, toggle compact mode, and customize;
                display options.;
              </p>;
            </Card>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
=======
<<<<<<< HEAD
            <p className=text-xl text-gray-400 max-w-3xl mx-auto">;
>>>>>>> origin/resolved-merge-conflicts
              From development to data analysis, our JSON formatter serves all your formatting needs.;
=======
      {/* Use Cases */}
      <section className='py-20 bg-gray-900'>;
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
              Perfect For Every JSON Need;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
            {/* Output Section */}
            <Card className='p - 8 bg - gray - 800 border border - gray - 700'>;
              <div className='flex items - center justify - between mb - 6'>;
                <h3 className='text - 2xl font - bold text - white flex items - center'>;
                  <CheckCircle className='w - 6 h - 6 mr - 3 text - cyan - 400' />;
                  Formatted Output;
                </h3>;
                {formatted_json && (
                  <div className='flex items - center space - x-2'>;
                    <Button;
                      on_click={() => copyToClipboard (formatted_json)}
                      variant='outline';
                      size='sm';
                      className='border - gray - 600 text - gray - 300 hover:bg - gray - 700';
                    >;
                      <Copy className='w - 4 h - 4 mr - 2' />;
                      Copy;
                    </Button>;
                    <Button;
                      on_click={() =>;
                        downloadJSON (formatted_json, 'formatted.json');
                      }
                      variant='outline';
                      size='sm';
                      className='border - gray - 600 text - gray - 300 hover:bg - gray - 700';
                    >;
                      <Download className='w - 4 h - 4 mr - 2' />                      Download                  Formatted Output;
                </h3>;
                {formatted_json && (
                  <div className="flex items - center space - x-2">;
                    <Button;
                      on_click={() => copyToClipboard (formatted_json)}
                      variant="outline";
                      size="sm";
                      className="border - gray - 600 text - gray - 300 hover:bg - gray - 700";
                    >;
                      <Copy className="w - 4 h - 4 mr - 2" />;
                      Copy;
                    </Button>;
                    <Button;
                      on_click={() => downloadJSON (formatted_json, 'formatted.json')}
                      variant="outline";
                      size="sm";
                      className="border - gray - 600 text - gray - 300 hover:bg - gray - 700";
                    >;
                      <Download className="w - 4 h - 4 mr - 2" />;
                      Download;
                    </Button>;
                  </div>)}
              </div>;
              <div className='space - y-4'>;
                  <div className='relative'>;
                    {showLineNumbers && (
                      <div className='absolute left - 0 top - 0 bottom - 0 w - 12 bg - gray - 700 border - r border - gray - 600 text - xs text - gray - 400 p - 2 font - mono overflow - hidden'>;
                        {getLineNumbers (formatted_json)}
                      </div>)}
                    <div;
                      className={`p - 4 bg - gray - 700 border border - gray - 600 rounded - lg text - white font - mono text - sm overflow - auto max - h-96 ${
                        showLineNumbers ? 'pl - 16' : '';
                      }`}
                    >;
                      <pre className='whitespace - pre - wrap'>{formatted_json}</pre>;
                    </div>;
                  </div>) : (
                  <div className='bg - gray - 700 p - 6 rounded - lg border border - gray - 600 text - center'>;
                    <div className='text - 6xl mb - 4'>📄</div>;
                    <p className='text - gray - 400'>;
                      Formatted JSON will appear here. Enter JSON data and click;
                      format to get started.                    </p>                  <div className="bg - gray - 700 p - 6 rounded - lg border border - gray - 600 text - center">;
                    <div className="text - 6xl mb - 4">📄</div>;
                    <p className="text - gray - 400">;
                      Formatted JSON will appear here. Enter JSON data and click format to get started.;
                  </div>)}
                {formatted_json && (
                  <div className='text - sm text - gray - 400'>;
                    <p>• Characters: {formatted_json.length}</p>;
                    <p>• Lines: {formatted_json.split ('\n').length}</p>;
                    <p>;
                      • Size: {((formatted_json.length * 2) / 1024).to_fixed (2)}{' '}
                      KB;
                    </p>                  </div>                  <div className="text - sm text - gray - 400">;
                    <p>• Characters: {formatted_json.length}</p>;
                    <p>• Lines: {formatted_json.split ('\n').length}</p>;
                    <p>• Size: {(formatted_json.length * 2 / 1024).to_fixed (2)} KB</p>)}
              </div>;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Features */}
      <section className='py - 20 bg - gray - 800'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 16'>;
            <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
              Everything you need to work with JSON data efficiently and;
              professionally.;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>;
            <Card className='p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>👨‍💻</div>;
              <h3 className='text-2xl font-bold text-white mb-4'>Developers</h3>;
              <p className='text-gray-400 mb-6'>;
                Format API responses, debug JSON data, and prepare configuration files with professional formatting.;
              </p>;
              <ul className='space-y-2 text-gray-300'>;
      {/* Use Cases */}
<section className='py-20 bg-gray-900'>;
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
              Perfect For Every JSON Need;
            </h2>;
<<<<<<< HEAD
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
=======
<<<<<<< HEAD
            <p className='text-xl text-gray-400 max-w-3xl mx-auto>;
=======
            <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
              From development to data analysis, our JSON formatter serves all;
              your formatting needs.;
            </p>;
          </div>;
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>;
            <Card className='p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>👨‍💻</div>;
              <h3 className='text-2xl font-bold text-white mb-4'>Developers</h3>;
              <p className='text-gray-400 mb-6'>;
                Format API responses, debug JSON data, and prepare configuration;
                files with professional formatting.;
              </p>;
              <ul className='space-y-2 text-gray-300'>;
=======
<<<<<<< HEAD
          <div className=grid grid-cols-1 md:grid-cols-2 gap-8'>;
            <Card className='p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>👨‍💻</div>;
              <h3 className='text-2xl font-bold text-white mb-4>Developers</h3>;
              <p className=text-gray-400 mb-6'>;
                Format API responses, debug JSON data, and prepare configuration;
                files with professional formatting.;
              </p>;
              <ul className='space-y-2 text-gray-300>;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>;
            <Card className='p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>👨‍💻</div>;
              <h3 className='text - 2xl font - bold text - white mb - 4'>Developers</h3>;
              <p className='text - gray - 400 mb - 6'>;
                Format API responses, debug JSON data, and prepare configuration;
                files with professional formatting.;
              </p>;
              <ul className='space - y-2 text - gray - 300'>                <li>• API development and testing</li>              Perfect For Every JSON Need;
            </h2>;
            <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
              From development to data analysis, our JSON formatter serves all your formatting needs.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
            <Card className="p - 8 bg - gray - 700 border border - gray - 600">;
              <div className="text - 4xl mb - 4">👨‍💻</div>;
              <h3 className="text - 2xl font - bold text - white mb - 4">Developers</h3>;
              <p className="text - gray - 400 mb - 6">;
                Format API responses, debug JSON data, and prepare configuration files with professional formatting.;
              </p>;
              <ul className="space - y-2 text - gray - 300">;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
                <li>• API development and testing</li>;
                <li>• Configuration file management</li>;
                <li>• Debug and troubleshooting</li>;
              </ul>;
            </Card>;
<<<<<<< HEAD
              <h3 className='text-2xl font-bold text-white mb-4'>Data Analysts</h3>;
              <p className='text-gray-400 mb-6'>;
=======
<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4>Data Analysts</h3>;
              <p className=text-gray-400 mb-6">;
>>>>>>> origin/resolved-merge-conflicts
                Clean and format JSON datasets for analysis, reporting, and data visualization projects.;
              </p>;
              <ul className='space-y-2 text-gray-300'>;
              <h3 className='text-2xl font-bold text-white mb-4'>DevOps Engineers</h3>;
              <p className='text-gray-400 mb-6'>;
                Manage configuration files, validate deployment manifests, and format infrastructure as code.;
              </p>;
              <ul className='space-y-2 text-gray-300'>;
              <h3 className='text-2xl font-bold text-white mb-4'>Technical Writers</h3>;
              <p className='text-gray-400 mb-6'>;
                Format JSON examples for documentation, tutorials, and technical specifications.;
              </p>;
<<<<<<< HEAD
              <ul className='space-y-2 text-gray-300'>;
<Card className='p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>📊</div>;
              <h3 className='text-2xl font-bold text-white mb-4'>;
=======
              <ul className="space-y-2 text-gray-300>;
<Card className=p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>📊</div>;
              <h3 className=text-2xl font-bold text-white mb-4'>;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Card className='p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>📊</div>;
              <h3 className='text - 2xl font - bold text - white mb - 4'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
                Data Analysts;
              </h3>;
              <p className='text-gray-400 mb-6'>;
                Clean and format JSON datasets for analysis, reporting, and data;
                visualization projects.;
              </p>;
<<<<<<< HEAD
              <ul className='space-y-2 text-gray-300'>;
=======
<<<<<<< HEAD
              <ul className=space-y-2 text-gray-300'>;
>>>>>>> origin/resolved-merge-conflicts
                <li>• Data cleaning and preparation</li>;
=======
              <ul className='space - y-2 text - gray - 300'>                <li>• Data cleaning and preparation</li>            <Card className="p - 8 bg - gray - 700 border border - gray - 600">;
              <div className="text - 4xl mb - 4">📊</div>;
              <h3 className="text - 2xl font - bold text - white mb - 4">Data Analysts</h3>;
              <p className="text - gray - 400 mb - 6">;
                Clean and format JSON datasets for analysis, reporting, and data visualization projects.;
              </p>;
              <ul className="space - y-2 text - gray - 300">;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <li>• Report generation</li>;
                <li>• Data validation</li>;
              </ul>;
            </Card>;
<<<<<<< HEAD
<Card className='p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>🔧</div>;
              <h3 className='text-2xl font-bold text-white mb-4'>;
=======
<<<<<<< HEAD
<Card className='p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>🔧</div>;
              <h3 className='text-2xl font-bold text-white mb-4>;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Card className='p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>🔧</div>;
              <h3 className='text - 2xl font - bold text - white mb - 4'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
                DevOps Engineers;
              </h3>;
              <p className='text-gray-400 mb-6'>;
                Manage configuration files, validate deployment manifests, and;
                format infrastructure as code.;
              </p>;
<<<<<<< HEAD
              <ul className='space-y-2 text-gray-300'>;
=======
<<<<<<< HEAD
              <ul className='space-y-2 text-gray-300>;
>>>>>>> origin/resolved-merge-conflicts
                <li>• Configuration management</li>;
=======
              <ul className='space - y-2 text - gray - 300'>                <li>• Configuration management</li>            <Card className="p - 8 bg - gray - 700 border border - gray - 600">;
              <div className="text - 4xl mb - 4">🔧</div>;
              <h3 className="text - 2xl font - bold text - white mb - 4">DevOps Engineers</h3>;
              <p className="text - gray - 400 mb - 6">;
                Manage configuration files, validate deployment manifests, and format infrastructure as code.;
              </p>;
              <ul className="space - y-2 text - gray - 300">;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <li>• Infrastructure validation</li>;
                <li>• Deployment automation</li>;
              </ul>;
            </Card>;
<<<<<<< HEAD
<Card className='p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>📝</div>;
              <h3 className='text-2xl font-bold text-white mb-4'>;
=======
<<<<<<< HEAD
<Card className=p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>📝</div>;
              <h3 className=text-2xl font-bold text-white mb-4'>;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Card className='p - 8 bg - gray - 700 border border - gray - 600'>;
              <div className='text - 4xl mb - 4'>📝</div>;
              <h3 className='text - 2xl font - bold text - white mb - 4'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
                Technical Writers;
              </h3>;
              <p className='text-gray-400 mb-6'>;
                Format JSON examples for documentation, tutorials, and technical;
                specifications.;
              </p>;
<<<<<<< HEAD
              <ul className='space-y-2 text-gray-300'>;
=======
<<<<<<< HEAD
              <ul className=space-y-2 text-gray-300'>;
>>>>>>> origin/resolved-merge-conflicts
                <li>• Documentation examples</li>;
=======
              <ul className='space - y-2 text - gray - 300'>                <li>• Documentation examples</li>            <Card className="p - 8 bg - gray - 700 border border - gray - 600">;
              <div className="text - 4xl mb - 4">📝</div>;
              <h3 className="text - 2xl font - bold text - white mb - 4">Technical Writers</h3>;
              <p className="text - gray - 400 mb - 6">;
                Format JSON examples for documentation, tutorials, and technical specifications.;
              </p>;
              <ul className="space - y-2 text - gray - 300">;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <li>• API documentation</li>;
                <li>• Technical specifications</li>;
              </ul>;
            </Card>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD
                {formattedJson && (<div className='text-sm text-gray-400'>;
=======
<<<<<<< HEAD
                {formattedJson && (<div className='text-sm text-gray-400>;
=======
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Format Your JSON?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join thousands of developers and professionals who trust our JSON formatter for their data needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-teal-600"
            >
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-teal-600 to-cyan-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
          </h2>
          <p className='text-xl text-teal-100 mb-8'>
            Join thousands of developers and professionals who trust our JSON
            formatter for their data needs.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              href='/contact'
              size='lg'
              className='bg-white text-teal-600 hover:bg-gray-100'
            >
              Get Started Today
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
            <Button
              href='/pricing'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-teal-600'            >              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-teal-600"
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
    </>);
}
  );
}
    </>);
}
);
  );
}
}
  );
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts

                {formattedJson && (;
                  <div className='text-sm text-gray-400'>;
                    <p>• Characters: {formattedJson && formattedJson.length}</p>;
                    <p>• Lines: {formattedJson && formattedJson.split('\n').length}</p>;
                    <p>• Size: {((formattedJson && formattedJson.length * 2) / 1024).toFixed(2)}{' '}
                      KB;
                    </p>                  </div>                  <div className='text-sm text-gray-400'>;
                    <p>• Characters: {formattedJson && formattedJson.length}</p>;
                    <p>• Lines: {formattedJson && formattedJson.split('\n').length}</p>;
                    <p>• Size: {(formattedJson && formattedJson.length * 2 / 1024).toFixed(2)} KB</p>;
                )}
              </div>;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Features */}
      <section className='py-20 bg-gray-800'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
              Everything you need to work with JSON data efficiently and;
              professionally.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>✨</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Smart Formatting;
              </h3>;
              <p className='text-gray-400'>;
                Intelligent JSON formatting with customizable indentation and;
                spacing options.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>✅</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Real-time Validation;
              </h3>;
              <p className='text-gray-400'>;
                Instant JSON validation with detailed error messages and syntax;
                highlighting.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>📦</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Minification;
              </h3>;
              <p className='text-gray-400'>;
                Compress JSON data by removing unnecessary whitespace and;
                formatting.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>🔢</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Line Numbers;
              </h3>;
              <p className='text-gray-400'>;
                Optional line numbering for easier navigation and debugging of;
                large JSON files.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>💾</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Export Options;
              </h3>;
              <p className='text-gray-400'>;
                Download formatted JSON files or copy to clipboard with a single;
                click.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>⚙️</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;
                Customizable;
              </h3>;
              <p className='text-gray-400'>;
                Adjust indentation size, toggle compact mode, and customize;
                display options.              </p>            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>⚙️</div>;
              <h3 className='text-xl font-bold text-white mb-4'>Customizable</h3>;
              <p className='text-gray-400'>;
                Adjust indentation size, toggle compact mode, and customize display options.;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Use Cases */}
      <section className='py-20 bg-gray-900'>;
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
              Perfect For Every JSON Need;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
              </ul>;
            </Card>;
          </div>;
        </div>;
      </section>;
    </>)}
    </>){/* CTA Section */}
<section className='py-20 bg-gradient-to-r from-teal-600 to-cyan-600'>;
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
          </h2>;
          <p className='text-xl text-teal-100 mb-8'>;
            Join thousands of developers and professionals who trust our JSON;
            formatter for their data needs.;
          </p>;
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
            <Button;
              href='/contact';
              size='lg';
              className='bg-white text-teal-600 hover:bg-gray-100';
            >;
              Get Started Today;
              <ArrowRight className='w-5 h-5 ml-2' />;
            </Button>;
            <Button;
              href='/pricing';
              variant='outline';
              size='lg';
              className='border-white text-white hover:bg-white hover:text-teal-600';
            >;
              View Pricing;
            </Button>;
          </div>;
        </div>;
      </section>;
    </>;
    </>);
}
<<<<<<< HEAD
    </>);
}
  )}
  )
}
<<<<<<< HEAD
=======
=======
    <   />
  );
}

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
