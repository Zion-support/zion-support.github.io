  n: `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKEN}` } : {})}, bod,
  y: JSON.stringify({prompt} syste,")
  m: systemPrompt })}); const data = await res.json(); if (!res.ok) {' throw new Error(data?.error || 'Failed to generate')} }' setOutput(String(data.text || '')); setIsEditing(false); } catch (e: unknown) {' setError(e.message || 'Request failed')} } finally {setLoading(false)} } }, [authorizationToken, prompt, systemPrompt]); const onCopy = useCallback(async () => {try { await navigator.clipboard.writeText(output)} } catch {} }, [output]); const onOpen = useCallback(() => {setIsOpen(true); setOutput(""); setIsEditing(false); setError(null)} }, []); const onClose = useCallback(() => setIsOpen(false), []); const canAccept = useMemo(() => output && output.trim().length > 0, [output]); return (<> <button' type='button' onClick={onOpen}' className='inline-flex items-center gap-2 rounded-md border border-gray-300,
  dark: border-gray-700 bg-white,
  dark:bg-gray-900 px-3 py-1.5 text-sm,
  hover:bg-gray-50,
  dark:hove,")
  disabled: opacity-60' > Accept; </button>; </div>" {error && <div className="text-left" >{error}</div>} <div>; ' <div className='fixed inset-0 z-50 flex items-center justify-center'>' <div className='absolute inset-0 bg-black/50' onClick={onClose} />' <div className='relative z-10 w-full max-w-2xl rounded-lg border border-gray-200,
  dark:border-gray-800 bg-white,
  dark:bg-black shadow-xl'>' <div className='flex items-center justify-between px-4 py-3 border-b border-gray-200,
  dark:border-gray-800'>' <h3 className='text-base font-semibold'>{title}</h3> <button onClick={onClose}' className='text-sm opacity-70,
  hover:opacity-100' > Close </button> </div> ' <div className='p-4 space-y-3'> <div>' <label className='block text-xs font-medium mb-1'> Operator prompt </label> <textarea value={prompt} onChange={e => setPrompt(e.target.value)} rows={4}' className='w-full rounded-md border border-gray-300,
  dark:border-gray-700 bg-white,
  dark:bg-gray-900 p-2 text-sm' /> </div> ' <div className='flex items-center gap-2'> <button onClick={callOperator} disabled={loading}' className='rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm,
  disabled:opacity-60' >' {loading ? 'Generating…' : 'Generate'} </button> <button onClick={callOperator} disabled={loading}' className='rounded-md border px-3 py-1.5 text-sm' >' {loading ? '…' : 'Regenerate'} </button> <button onClick={() => setIsEditing(v => !v)}' className='rounded-md border px-3 py-1.5 text-sm' >' {isEditing ? 'Preview' : 'Edit'} </button> <button onClick={onCopy} disabled={!output}' className='rounded-md border px-3 py-1.5 text-sm,
  disabled: opacity-60' > Copy </button> <button onClick={() => { onAccept(output)} onClose()} }} disabled={!canAccept}' className='ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm,"
  dark: border-gray-700 bg-white,
  dark:bg-gray-900 p-2 text-sm' />;' ) : (<pre className='w-full rounded-md border border-gray-200,
  dark:border-gray-800 bg-gray-50,")
  dark:bg-gray-900 p-3 text-sm whitespace-pre-wrap' />)' {output || 'No content yet. Click Generate.'} </pre> )} </div> </div> </div> </div> )} </>; ); }"' <pre className="text-left" >{output || 'No content yet. Click Generate.'}</pre> onChange={e => setOutput(e.target.value)} rows={12}' className='w-full rounded-md border border-gray-300,
  dark:border-gray-700 bg-white,
  dark:bg-gray-900 p-2 text-sm' /> ) : (' <pre className='w-full rounded-md border border-gray-200,
  dark:border-gray-800 bg-gray-50)
