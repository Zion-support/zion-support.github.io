const formatJSON = () => {
  if (!inputJson.trim () ) {
  ]
setInputJson (JSON.stringify (sample, null, 2) )
setFormattedJson ('')
setIsValid (true)
setErrorMessage ('') 
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
export default function JSONFormatterPage() {
  }
  const [inputJson, setInputJson] = useState('');'

const [formattedJson, setFormattedJson] = useState('');'

const [isValid, setIsValid] = useState(true);

const [errorMessage, setErrorMessage] = useState('');'

const [indentSize, setIndentSize] = useState(2);

const [compactMode, setCompactMode] = useState(false);

const [showLineNumbers, setShowLineNumbers] = useState(true);

return;
    }

    try {
      }
      const parsed = JSON.parse(inputJson);

const formatted = compactMode
        ? JSON.stringify(parsed)

    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

URL.revokeObjectURL(url)
};


const loadSampleJSON = () => {
   ;
  }
  const sample = {
}
"name": 'John Doe','
      "age": 30,
      "email": 'john.doe@example.com','
      "address": {
        }
        "street": '123 Main St''
        "city": 'Anytown''
        "state": 'CA''
        "zipCode": '12345''
     
}
      "phoneNumbers": [
        {

    setIsValid(true);
    const blob = new Blob($2);
    const url = URL.createObjectURL($2);
    const a = document.createElement($2);
    a.href = $2;
    a.download = $2;
    document.body.appendChild($2);
    a.click($2);
    document.body.removeChild($2);
    URL.revokeObjectURL(url)
  },



  const getLineNumbers = (text: string) => {
    const lines = text.split($2);
    return lines.map((_, index) => index + 1).join(\n')
  },

return (;
    <>
      <Head>
        <title>JSON Formatter - Zion Tech Group</title>

          </p>
        </div>
      </section>


                  >
                    <option value={2}>2 spaces</option>
                    <option value={4}>4 spaces</option>
                    <option value={8}>8 spaces</option>
                  </select>
                </div>

                </div>
              </div>
              <div className='flex items-center space-x-3'>'
                <Button,
onClick={loadSampleJSON}
                  variant='outline';'
                  size='sm';'
                  className='border-gray-600 text-gray-300 "hover":bg-gray-700'>'


                  Load Sample;
                </Button>;
                <Button;
                  onClick={clearAll}

                  Clear All;
                </Button>;
              </div>;
            </div>;
          </Card>;


          <div className=grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card className="p-8 bg-gray-800 border border-gray-700>
              <div className=flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center>
                  <Code className=w-6 h-6 mr-3 text-teal-400" />
                  Input JSON
                </h3>
                <div className="flex items-center space-x-2>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    isValid ? 'bg-green-500/20 text-green-400 : bg-red-500/20 text-red-400'
                  }`}>
                    {isValid ? 'Valid : Invalid'}
                  </span>
                </div>
              </div>


                  {showLineNumbers && (</div>;
                  }`}>;`                  </span>;
                </div>;
              </div>;

                  />
                </div>
                {!isValid && errorMessage && (

                    Format JSON;
                  </Button>;
                  <Button;
                    onClick={minifyJSON}
                    disabled={!inputJson.trim()}

                    Minify;
                  </Button>;
                  <Button;
                    onClick={validateJSON}
                    disabled={!inputJson.trim()}
                    variant='outline
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50
                  <div className=p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
                    <strong>Error:</strong> {errorMessage}
                  </div>
                )}


                  >
                    Validate
                  </Button>
                </div>
              </div>
            </Card>

            {/* Output Section */}

                        {getLineNumbers(formattedJson)}
                      </div>;
                    )}
                    <div;

                      Formatted JSON will appear here. Enter JSON data and click;
                      format to get started.;
                    </p>;
                  </div>;
                )}

              </div>;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Features */}
                )}
              </div>



                {formattedJson && (
                  <div className=text-sm text-gray-400">
                    <p>• Characters: {formattedJson.length}</p>
                    <p>• Lines: {formattedJson.split(\n').length}</p>
                    <p>• Size: {(formattedJson.length * 2 / 1024).toFixed(2)} KB</p>
                  </div>
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
            </h2>

              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}

                <li>• API development and testing</li>
                <li>• Configuration file management</li>
                <li>• Debug and troubleshooting</li>
              </ul>
            </Card>


                <li>• Data cleaning and preparation</li>
                <li>• Report generation</li>
                <li>• Data validation</li>
              </ul>
            </Card>


                <li>• Configuration management</li>
                <li>• Infrastructure validation</li>
                <li>• Deployment automation</li>
              </ul>
            </Card>


                <li>• Documentation examples</li>
                <li>• API documentation</li>
                <li>• Technical specifications</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}

            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
<section className='py-20 bg-gray-800>;
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center mb-16>;
            <h2 className=text-3xl sm:text-4xl font-bold text-white mb-6'>;
              Professional JSON Formatting Features;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto>;
              Everything you need to work with JSON data efficiently and;
              professionally.;
            </p>;
          </div>;
          <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>✨</div>;
              <h3 className='text-xl font-bold text-white mb-4>;
                Smart Formatting;
              </h3>;
              <p className=text-gray-400'>;
                Intelligent JSON formatting with customizable indentation and;
                spacing options.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>✅</div>;
              <h3 className='text-xl font-bold text-white mb-4>;
                Real-time Validation;
              </h3>;
              <p className=text-gray-400'>;
                Instant JSON validation with detailed error messages and syntax;
                highlighting.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>📦</div>;
              <h3 className='text-xl font-bold text-white mb-4>;
                Minification;
              </h3>;
              <p className=text-gray-400'>;
                Compress JSON data by removing unnecessary whitespace and;
                formatting.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>🔢</div>;
              <h3 className='text-xl font-bold text-white mb-4>;
                Line Numbers;
              </h3>;
              <p className=text-gray-400'>;
                Optional line numbering for easier navigation and debugging of;
                large JSON files.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>💾</div>;
              <h3 className='text-xl font-bold text-white mb-4>;
                Export Options;
              </h3>;
              <p className=text-gray-400'>;
                Download formatted JSON files or copy to clipboard with a single;
                click.;
              </p>;
            </Card>;
            <Card className='text-center p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>⚙️</div>;
              <h3 className='text-xl font-bold text-white mb-4>;
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
            <p className=text-xl text-gray-400 max-w-3xl mx-auto">;
              From development to data analysis, our JSON formatter serves all your formatting needs.;
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
            <p className='text-xl text-gray-400 max-w-3xl mx-auto>;
              From development to data analysis, our JSON formatter serves all;
              your formatting needs.;
            </p>;
          </div>;
          <div className=grid grid-cols-1 md:grid-cols-2 gap-8'>;
            <Card className='p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>👨‍💻</div>;
              <h3 className='text-2xl font-bold text-white mb-4>Developers</h3>;
              <p className=text-gray-400 mb-6'>;
                Format API responses, debug JSON data, and prepare configuration;
                files with professional formatting.;
              </p>;
              <ul className='space-y-2 text-gray-300>;
                <li>• API development and testing</li>;
                <li>• Configuration file management</li>;
                <li>• Debug and troubleshooting</li>;
              </ul>;
            </Card>;
              <h3 className="text-2xl font-bold text-white mb-4>Data Analysts</h3>;
              <p className=text-gray-400 mb-6">;
                Clean and format JSON datasets for analysis, reporting, and data visualization projects.;
              </p>;
              <ul className="space-y-2 text-gray-300>;
              <h3 className=text-2xl font-bold text-white mb-4">DevOps Engineers</h3>;
              <p className="text-gray-400 mb-6>;
                Manage configuration files, validate deployment manifests, and format infrastructure as code.;
              </p>;
              <ul className=space-y-2 text-gray-300">;
              <h3 className="text-2xl font-bold text-white mb-4>Technical Writers</h3>;
              <p className=text-gray-400 mb-6">;
                Format JSON examples for documentation, tutorials, and technical specifications.;
              </p>;
              <ul className="space-y-2 text-gray-300>;
<Card className=p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>📊</div>;
              <h3 className=text-2xl font-bold text-white mb-4'>;
                Data Analysts;
              </h3>;
              <p className='text-gray-400 mb-6>;
                Clean and format JSON datasets for analysis, reporting, and data;
                visualization projects.;
              </p>;
              <ul className=space-y-2 text-gray-300'>;
                <li>• Data cleaning and preparation</li>;
                <li>• Report generation</li>;
                <li>• Data validation</li>;
              </ul>;
            </Card>;
<Card className='p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4'>🔧</div>;
              <h3 className='text-2xl font-bold text-white mb-4>;
                DevOps Engineers;
              </h3>;
              <p className=text-gray-400 mb-6'>;
                Manage configuration files, validate deployment manifests, and;
                format infrastructure as code.;
              </p>;
              <ul className='space-y-2 text-gray-300>;
                <li>• Configuration management</li>;
                <li>• Infrastructure validation</li>;
                <li>• Deployment automation</li>;
              </ul>;
            </Card>;
<Card className=p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>📝</div>;
              <h3 className=text-2xl font-bold text-white mb-4'>;
                Technical Writers;
              </h3>;
              <p className='text-gray-400 mb-6>;
                Format JSON examples for documentation, tutorials, and technical;
                specifications.;
              </p>;
              <ul className=space-y-2 text-gray-300'>;
                <li>• Documentation examples</li>;
                <li>• API documentation</li>;
                <li>• Technical specifications</li>;
              </ul>;
            </Card>;
          </div>;
        </div>;
      </section>;
                {formattedJson && (<div className='text-sm text-gray-400>;

                {formattedJson && (;
                  <div className=text-sm text-gray-400'>;
                    <p>• Characters: {formattedJson && formattedJson.length}</p>;
                    <p>• Lines: {formattedJson && formattedJson.split('\n).length}</p>;
                    <p>• Size: {((formattedJson && formattedJson.length * 2) / 1024).toFixed(2)}{ '}
                      KB;
                    </p>                  </div>                  <div className=text-sm text-gray-400">;
                    <p>• Characters: {formattedJson && formattedJson.length}</p>;
                    <p>• Lines: {formattedJson && formattedJson.split('\n).length}</p>;
                    <p>• Size: {(formattedJson && formattedJson.length * 2 / 1024).toFixed(2)} KB</p>;
                )}
              </div>;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Features */}
      <section className=py-20 bg-gray-800'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>;
          <div className=text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6>;
            </h2>;
            <p className=text-xl text-gray-400 max-w-3xl mx-auto'>;
              Everything you need to work with JSON data efficiently and;
              professionally.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>✨</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                Smart Formatting;
              </h3>;
              <p className='text-gray-400>;
                Intelligent JSON formatting with customizable indentation and;
                spacing options.;
              </p>;
            </Card>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>✅</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                Real-time Validation;
              </h3>;
              <p className='text-gray-400>;
                Instant JSON validation with detailed error messages and syntax;
                highlighting.;
              </p>;
            </Card>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>📦</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                Minification;
              </h3>;
              <p className='text-gray-400>;
                Compress JSON data by removing unnecessary whitespace and;
                formatting.;
              </p>;
            </Card>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>🔢</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                Line Numbers;
              </h3>;
              <p className='text-gray-400>;
                Optional line numbering for easier navigation and debugging of;
                large JSON files.;
              </p>;
            </Card>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>💾</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                Export Options;
              </h3>;
              <p className='text-gray-400>;
                Download formatted JSON files or copy to clipboard with a single;
                click.;
              </p>;
            </Card>;
            <Card className=text-center p-8 bg-gray-700 border border-gray-600'>;
              <div className='text-4xl mb-4>⚙️</div>;
              <h3 className=text-xl font-bold text-white mb-4'>;
                Customizable;
              </h3>;
              <p className='text-gray-400>;
                Adjust indentation size, toggle compact mode, and customize;
                display options.              </p>            <Card className="text-center p-8 bg-gray-700 border border-gray-600>;
              <div className=text-4xl mb-4">⚙️</div>;
              <h3 className="text-xl font-bold text-white mb-4>Customizable</h3>;
              <p className=text-gray-400">;
                Adjust indentation size, toggle compact mode, and customize display options.;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Use Cases */}
      <section className=py-20 bg-gray-900'>;
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8>;
          <div className=text-center mb-16'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6>;
              Perfect For Every JSON Need;
            </h2>;
            <p className=text-xl text-gray-400 max-w-3xl mx-auto'>;
              </ul>;
            </Card>;
          </div>;
        </div>;
      </section>;
    </>)}
    </>){/* CTA Section */}
<section className='py-20 bg-gradient-to-r from-teal-600 to-cyan-600>;
        <div className=max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6>;
          </h2>;
          <p className=text-xl text-teal-100 mb-8'>;
            Join thousands of developers and professionals who trust our JSON;
            formatter for their data needs.;
          </p>;
          <div className='flex flex-col sm:flex-row gap-4 justify-center>;
            <Button;
              href=/contact';
              size='lg;
              className=bg-white text-teal-600 hover:bg-gray-100';
            >;
              Get Started Today;
              <ArrowRight className='w-5 h-5 ml-2 />;
            </Button>;
            <Button;
              href=/pricing';
              variant='outline;
              size=lg';
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
    </>);
}
  )}
  )
}
