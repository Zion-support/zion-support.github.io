';export default function CodeBlock({' children, code, language = 'text', className = , showLineNumbers = false}) {' const content = code || children || '' return()' <div className={`bg-gray-900 rounded-lg p-4 overflow-x-auto ${className}`}" >` <div className='flex items-center justify-between mb-2'>' <span className='text-xs text-gray-400 uppercase tracking-wide'>' {language}' </span> <button onClick={() =" > navigator.clipboard.writeText(' typeof content === 'string' ? content : content.toString()' )' }' className='text-xs text-gray-400 hover: text-white transition-colors' >' Copy </button> </div>' <pre className='text-sm text-gray-100'>' <code>{content}</code>' </pre> </div> ) } '`'` ''`"`
 export default function CodeBlock({ children, code, language = 'text', className = , showLineNumbers = false}) {' const content = code || children || '' return()' <div className={`bg-gray-900 rounded-lg p-4 overflow-x-auto ${className}`}" >` <div className='flex items-center justify-between mb-2'>' <span className='text-xs text-gray-400 uppercase tracking-wide'>' {language}' </span> <button onClick={() =" > navigator.clipboard.writeText(' typeof content === 'string' ? content : content.toString()' )' }' className='text-xs text-gray-400 hover: text-white transition-colors' >' Copy </button> </div>' <pre className='text-sm text-gray-100'>' <code>{content}</code>' </pre> </div> ) } '`'` ''`"

const CodeBlock = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="CodeBlock - Zion Tech Group"
        description="Professional CodeBlock services by Zion Tech Group"
        keywords="codeblock, technology, services"
      />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">CodeBlock</h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional CodeBlock services to help your business grow.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;