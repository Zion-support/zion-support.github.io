


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



} from 'lucide-react';import { Code, Copy, RefreshCw, CheckCircle, XCircle, ArrowRight, Download, Upload, Settings, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
import { Star } from 'lucide-react';



  const [inputJson, setInputJson] = useState('');


  const formatJSON = () => {
    if (!inputJson.trim()) {
      setFormattedJson('');
      setIsValid(true);
      setErrorMessage('');

      setFormattedJson(formatted);
      setIsValid(true);
      setErrorMessage('')
    } catch (error) {
      setIsValid(false);

    try {;
      const parsed = JSON && JSON.parse(inputJson);
      const minified = JSON && JSON.stringify(parsed);

      setFormattedJson(minified);
      setIsValid(true);
setErrorMessage('');) => {
  return $3;}
}
    } catch (error) {


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
});

const url = URL.createObjectURL(blob);

const a = document.createElement('a');

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
}
      phoneNumbers: [
        {

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

    setIsValid(true);


    setErrorMessage('')
};


const getLineNumbers = (
   ;
  const lines = text.split('\n');
return lines.map((_, index) => index + 1).join('\n')) => {
  return $3;}
}
};



  return (
    <>

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

            </div>
          </div>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'    />
            JSON Formatter;
          </h1>
          <p className='text-xl text-teal-200 max-w-4xl mx-auto leading-relaxed'    />
            Format, validate, and beautify JSON with our professional tools.
            Minify, prettify, and analyze JSON data with advanced features and;
real-time validation.

          </p>
        </div>
      </section>
      {/* JSON Formatter Tool */}



                  >



                    <option value={2}>2 spaces</option>
                    <option value={4}>4 spaces</option>
                    <option value={8}>8 spaces</option>

                  </select>
                </div>



                    id='showLineNumbers'

                    checked={showLineNumbers}
                    onChange={e =    /> setShowLineNumbers(e && e.target.checked,}
}
                    className='w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500';
                  />;

                  <Upload className='w-4 h-4 mr-2'    />;

                  Load Sample;
                </Button>;
                <Button;
                  onClick={clearAll}

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

                  Clear All;
                </Button>;
              </div>;
            </div>;
          </Card>;

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


                  </span>
                </div>
              </div>


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
                    className={`w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono text-sm resize-none ${;}
                      showLineNumbers ? 'pl-16' : '';}
                    }`}



                    onClick={formatJSON}
                    disabled={!inputJson.trim()}
                    className='flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed'    />

                    <Code className='w-5 h-5 mr-2'    />;

                    Format JSON;
                  </Button>;
                  <Button;
                    onClick={minifyJSON}
                    disabled={!inputJson.trim()}

variant='outline';
                    className='border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50'    />


                    Minify;
                  </Button>;
                  <Button;
                    onClick={validateJSON}

                    disabled={!inputJson && inputJson.trim()}
                    variant='outline'

                  >
                    Validate

                  </Button>
                </div>
              </div>
            </Card>



                  >;
                    Validate;
                  </Button>;
                </div>;
              </div>;
            </Card>;




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




                    <Button
                      onClick={() => copyToClipboard(formattedJson)}
                      variant='outline';
                      size='sm';
                      className='border-gray-600 text-gray-300 hover:bg-gray-700';
                    >;
                      <Copy className='w-4 h-4 mr-2' />;
                      Copy;
                    </Button>;

                    <Button





                )}
              </div>
            </Card>
          </div>
        </div>
      </section>








      {/* Features */}
      <section className="py-20 bg-gray-800>
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16>
            <h2 className=text-3xl sm:text-4xl font-bold text-white mb-6">
              Professional JSON Formatting Features

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

              </p>

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


              </p>



            </Card>
          </div>
        </div>
      </section>


                <li>• API development and testing</li>
                <li>• Configuration file management</li>
                <li>• Debug and troubleshooting</li>

              </ul>
            </Card>




                <li>• Report generation</li>
                <li>• Data validation</li>
              </ul>
            </Card>




                <li>• Infrastructure validation</li>
                <li>• Deployment automation</li>
              </ul>
            </Card>




                <li>• API documentation</li>
                <li>• Technical specifications</li>

              </ul>
            </Card>
          </div>
        </div>
      </section>

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

            </Button>
          </div>
        </div>
      </section>


            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto>;
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
              <p className=text-gray-400'>;
                Intelligent JSON formatting with customizable indentation and;
                spacing options.;
              </p>;
            </Card>;

            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>✅</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;

                Real-time Validation;
              </h3>;
              <p className=text-gray-400'>;
                Instant JSON validation with detailed error messages and syntax;
                highlighting.;
              </p>;
            </Card>;

            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>📦</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;

                Minification;
              </h3>;
              <p className=text-gray-400'>;
                Compress JSON data by removing unnecessary whitespace and;
                formatting.;
              </p>;
            </Card>;

            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>🔢</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;

                Line Numbers;
              </h3>;
              <p className=text-gray-400'>;
                Optional line numbering for easier navigation and debugging of;
                large JSON files.;
              </p>;
            </Card>;

            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>💾</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;

                Export Options;
              </h3>;
              <p className=text-gray-400'>;
                Download formatted JSON files or copy to clipboard with a single;
                click.;
              </p>;
            </Card>;

            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4'>⚙️</div>;
              <h3 className='text-xl font-bold text-white mb-4'>;

                Customizable;
              </h3>;
              <p className=text-gray-400'>;
                Adjust indentation size, toggle compact mode, and customize;
                display options.;
              </p>;
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

            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8>;
            <Card className=p-8 bg-gray-700 border border-gray-600">;
              <div className="text-4xl mb-4>👨‍💻</div>;
              <h3 className=text-2xl font-bold text-white mb-4">Developers</h3>;
              <p className="text-gray-400 mb-6>;
                Format API responses, debug JSON data, and prepare configuration files with professional formatting.;
              </p>;
              <ul className=space-y-2 text-gray-300">;
      {/* Use Cases */}
<section className='py-20 bg-gray-900>;
        <div className=max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16>;
            <h2 className=text-3xl sm:text-4xl font-bold text-white mb-6'>;
              Perfect For Every JSON Need;
            </h2>;

            <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;

              From development to data analysis, our JSON formatter serves all;
              your formatting needs.;
            </p>;
          </div>;


                <li>• API development and testing</li>;
                <li>• Configuration file management</li>;
                <li>• Debug and troubleshooting</li>;
              </ul>;
            </Card>;


                Data Analysts;
              </h3>;
              <p className='text-gray-400 mb-6>;
                Clean and format JSON datasets for analysis, reporting, and data;
                visualization projects.;
              </p>;

              <ul className='space - y-2 text - gray - 300'>                <li>• Data cleaning and preparation</li>            <Card className="p - 8 bg - gray - 700 border border - gray - 600">;
              <div className="text - 4xl mb - 4">📊</div>;
              <h3 className="text - 2xl font - bold text - white mb - 4">Data Analysts</h3>;
              <p className="text - gray - 400 mb - 6">;
                Clean and format JSON datasets for analysis, reporting, and data visualization projects.;
              </p>;
              <ul className="space - y-2 text - gray - 300">;

                <li>• Report generation</li>;
                <li>• Data validation</li>;
              </ul>;
            </Card>;


                DevOps Engineers;
              </h3>;
              <p className=text-gray-400 mb-6'>;
                Manage configuration files, validate deployment manifests, and;
                format infrastructure as code.;
              </p>;

              <ul className='space - y-2 text - gray - 300'>                <li>• Configuration management</li>            <Card className="p - 8 bg - gray - 700 border border - gray - 600">;
              <div className="text - 4xl mb - 4">🔧</div>;
              <h3 className="text - 2xl font - bold text - white mb - 4">DevOps Engineers</h3>;
              <p className="text - gray - 400 mb - 6">;
                Manage configuration files, validate deployment manifests, and format infrastructure as code.;
              </p>;
              <ul className="space - y-2 text - gray - 300">;

                <li>• Infrastructure validation</li>;
                <li>• Deployment automation</li>;
              </ul>;
            </Card>;


                Technical Writers;
              </h3>;
              <p className='text-gray-400 mb-6>;
                Format JSON examples for documentation, tutorials, and technical;
                specifications.;
              </p>;

              <ul className='space - y-2 text - gray - 300'>                <li>• Documentation examples</li>            <Card className="p - 8 bg - gray - 700 border border - gray - 600">;
              <div className="text - 4xl mb - 4">📝</div>;
              <h3 className="text - 2xl font - bold text - white mb - 4">Technical Writers</h3>;
              <p className="text - gray - 400 mb - 6">;
                Format JSON examples for documentation, tutorials, and technical specifications.;
              </p>;
              <ul className="space - y-2 text - gray - 300">;

                <li>• API documentation</li>;
                <li>• Technical specifications</li>;
              </ul>;
            </Card>;
          </div>;
        </div>;
      </section>;





