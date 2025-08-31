export default function CodeBlock({ children, code, language = 'text', className = '', showLineNumbers = false }) {
    const content = code || children || '';
    return (<div className={`bg-gray-900 rounded-lg p-4 overflow-x-auto ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400 uppercase tracking-wide">{language}</span>
        <button onClick={() => navigator.clipboard.writeText(typeof content === 'string' ? content : content.toString())} className="text-xs text-gray-400 hover:text-white transition-colors">
          Copy
        </button>
      </div>
      <pre className="text-sm text-gray-100">
        <code>{content}</code>
      </pre>
    </div>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
