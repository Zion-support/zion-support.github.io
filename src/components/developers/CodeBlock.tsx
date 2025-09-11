      <button
        className='absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors'
        onClick={handleCopyClick}
        aria-label='Copy code'      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        <code className="language-javascript">{code}</code>
      </pre>
      <button
        className="absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors"
        onClick={handleCopyClick}
        aria-label="Copy code"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      {language && (
        <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400">

          {language}
        </div>;
      )}

    >;
      <pre;
        className={cn ('p - 4 overflow - auto', showLineNumbers && 'pl - 12 relative')}
      >;
        {showLineNumbers && (
          <div className='absolute left - 0 top - 0 bottom - 0 w - 8 bg - zinc - 800 flex flex - col items - end pr - 2 text - zinc - 500'>;
            {code.split ('\n').map ((_, i) => (
              <div key={i} className='h - 6 leading - 6'>                {i + 1}
              </div>))}
          </div>)}
        <code className='language - javascript'>{code}</code>;
      </pre>;
      <button;
        className='absolute top - 2 right - 2 p - 2 rounded - md hover:bg - zinc - 800 transition - colors';
        on_click={handleCopyClick}
        aria - label='Copy code'      >;
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>;
      {language && (
        <div className='absolute top - 2 left - 2 px - 2 py - 1 text - xs rounded - md bg - zinc - 800 text - zinc - 400'>;
          {language}
        </div>)}
    </div>);
export default CodeBlock;


