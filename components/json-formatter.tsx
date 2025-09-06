
  Code,
  Copy,
  RefreshCw,
  CheckCircle,
  XCircle,
  ArrowRight,
  Download,
  Upload,

} from 'lucide-react';import { Code, Copy, RefreshCw, CheckCircle, XCircle, ArrowRight, Download, Upload, Settings, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';
export default function JSONFormatterPage() {;

  const [inputJson, setInputJson] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [indentSize, setIndentSize] = useState(2);
  const [compactMode, setCompactMode] = useState(false);
  const [showLineNumbers, setShowLineNumbers] = useState(true);

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
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              Professional JSON Tools
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            JSON Formatter
          </h1>
          <p className="text-xl text-teal-200 max-w-4xl mx-auto leading-relaxed">
            Format, validate, and beautify JSON with our professional tools. Minify, prettify, and analyze

            JSON data with advanced features and real-time validation.
          </p>
        </div>
      </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Format Your JSON Data
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our advanced JSON formatter provides multiple formatting options and real-time validation.
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
                  >
                    <option value={2}>2 spaces</option>
                    <option value={4}>4 spaces</option>
                    <option value={8}>8 spaces</option>
                  </select>
                </div>
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
                    <option value={2}>2 spaces</option>;
                    <option value={4}>4 spaces</option>;
                    <option value={8}>8 spaces</option>;
                  </select>;
                </div>;
                    className='text-sm text-gray-300'>;
                    Compact mode;
                  </label>;
                </div>;
                <div className='flex items-center space-x-2'>;
                  <input
                    type='checkbox'
                    id='showLineNumbers'
                    checked={showLineNumbers}
                    onChange={e => setShowLineNumbers(e && e.target.checked)}
                    className='w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500';
                  />;
                  <label
                    htmlFor='showLineNumbers'
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
                    Line numbers;
                  </label>;
                </div>;
              </div>;
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="compactMode"
                    checked={compactMode}
                    onChange={(e) => setCompactMode(e && e.target.checked)}
                    className="w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500";
                  />;
                  <label htmlFor="compactMode" className="text-sm text-gray-300" htmlFor="input-Compact mode">Compact mode</label>;
                </div>;
                <div className="flex items-center space-x-2">;
                  <input
                    type="checkbox"
                    id="showLineNumbers"
                    checked={showLineNumbers}
                    onChange={(e) => setShowLineNumbers(e && e.target.checked)}
                    className="w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500";
                  />;
                  <label htmlFor="showLineNumbers" className="text-sm text-gray-300" htmlFor="input-Line numbers">Line numbers</label>;
                </div>;
              </div>;
              <div className="flex items-center space-x-3">;
                <Button
                  onClick={loadSampleJSON}
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Load Sample
                </Button>
                <Button
                  onClick={clearAll}

                  Clear All
                </Button>
              </div>
            </div>
          </Card>

                    </div>
                  }`}>;
                  </span>;
                </div>;
              </div>;
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

                    rows={15}
                    className={`w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono text-sm resize-none ${;
                      showLineNumbers ? 'pl-16' : '';
                    }`}

                  <div className='p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300'>                    <strong>Error:</strong> {errorMessage}
                  </div>;
                )}

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

                    Format JSON
                  </Button>
                  <Button
                    onClick={minifyJSON}
                    disabled={!inputJson.trim()}

                    className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
                  >
                    Minify
                  </Button>
                  <Button
                    onClick={validateJSON}
                    disabled={!inputJson.trim()}

                    className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
                  >
                    Validate
                  </Button>
                </div>
              </div>
            </Card>

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

                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className='py-20 bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>

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

            </Card>
          </div>
        </div>
      </section>

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
                <li>• API development and testing</li>
                <li>• Configuration file management</li>
                <li>• Debug and troubleshooting</li>
              </ul>
            </Card>

              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Analysts</h3>
              <p className="text-gray-400 mb-6">
                Clean and format JSON datasets for analysis, reporting, and data visualization projects.
              </p>
              <ul className="space-y-2 text-gray-300">

                <li>• Report generation</li>
                <li>• Data validation</li>
              </ul>
            </Card>

              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-white mb-4">DevOps Engineers</h3>
              <p className="text-gray-400 mb-6">
                Manage configuration files, validate deployment manifests, and format infrastructure as code.
              </p>
              <ul className="space-y-2 text-gray-300">

                <li>• Infrastructure validation</li>
                <li>• Deployment automation</li>
              </ul>
            </Card>

              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Writers</h3>
              <p className="text-gray-400 mb-6">
                Format JSON examples for documentation, tutorials, and technical specifications.
              </p>
              <ul className="space-y-2 text-gray-300">

                <li>• API documentation</li>
                <li>• Technical specifications</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>

}
