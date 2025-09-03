
''
''
''''
  const [content, setContent] = useState('')

  const handleSubmit = e => {}
    e.preventDefault()
    if (content.trim()) {}""
      onSubmit(content)''
      setContent('') }
  }
  return()""
    <form onSubmit={handleSubmit} className='mt-4'>
      <textarea value={content}""
        onChange={e =" > setContent(e.target.value)}''''"
        placeholder={placeholder}''''

      />''''
      <div className='mt-2 flex justify-end'>''''
        <Button type='submit" disabled={!content.trim()}" >'
          Post Reply
        </Button>
      </div>
    </form>)}










