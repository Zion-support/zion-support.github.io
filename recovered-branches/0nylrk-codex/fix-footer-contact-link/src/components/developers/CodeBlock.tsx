

interface CodeBlockProps {_code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;}

export function CodeBlock(_{_code, _language = 'bash', _showLineNumbers = false, _className}: CodeBlockProps) {_const [copied, _setCopied] = useState(false);

  const _handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout__(() => {
      setCopied(false);}, 2000);
  };

  return (
    <div className={_cn(
      "relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto", _className
    )}>
      <pre className={_cn(
        "p-4 overflow-auto", _showLineNumbers && "pl-12 relative"
      )}>
        {_showLineNumbers && (
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500">
            {code.split('\n').map(_(_, _i) => (
              <div key={i} className="h-6 leading-6">
                {_i + 1}
              </div>
            ))}
          </div>
        )}
        <code className="language-javascript">{_code}</code>
      </pre>
      <button
        className="absolute top-2 right-2 p-2 rounded-md hover:bg-zinc-800 transition-colors"
        onClick={_handleCopyClick}
        aria-label="Copy code"
      >
        {_copied ? <Check size={16} /> : <Copy size={_16} />}
      </button>
      {_language && (
        <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400">
          {language}
        </div>
      )}
    </div>
  );
}

export default CodeBlock;
