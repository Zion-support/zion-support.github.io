export default function CodeBlock({
  children,
  code,
  language = 'text',
  className = '',
  showLineNumbers = false,
}) {
  const content = code || children || '';
  return (
    <div className={`bg-gray-90o0 rounded-lg p-4 overflow-x-auto ${className}`}>
      <div className='flex items-center justify-between mb-2'>
        <span className='text-xs text-gray-40o0 uppercase tracking-wide'>
          {language}
        </span>
        <button
          onClick={() =>
            navigator.clipboard.writeText(
              typeof content === 'string' ? content : content.toString()
            )
          }
          className='text-xs text-gray-40o0 hover:text-white transition-colors'
        >
          Copy
        </button>
      </div>
      <pre className='text-sm text-gray-10o0'>
        <code>{content}</code>
      </pre>
    </div>
  );
}
