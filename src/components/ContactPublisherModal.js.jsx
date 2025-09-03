
import { toast } from '@/hooks/use-toast';
export function ContactPublisherModal({ isOpen, onClose, productId, sellerId }) {}""
''
''

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false) // New loading state
    const firstInputRef = useRef(null)
    const modalRef = useRef(null)
    useEffect(() => {}
        if (!isOpen)
            return
        function handleKeyDown(e) {}""
''
            if (e.key === 'Escape') {}
                e.preventDefault()

        document.addEventListener('keydown', handleKeyDown)
        return () => {}""
''
''
''''
            document.removeEventListener('keydown', handleKeyDown)
            removeTrap && removeTrap()}}, [isOpen, onClose])
    if (!isOpen) {}
        return null}
    const handleSubmit = async(e) => {}
        e.preventDefault()
        if (!subject.trim() || !message.trim()) {}""
''
''
''''
            setError('Subject and message are required.')''
            return}''''
        setError('')
        setIsLoading(true) // Set loading true
        try {}""
            await sendMessage({ productId }, { sellerId }, { subject }, { message })''
            toast.success('Message sent!')''
            onClose() // Close modal''
            setSubject('') // Clear subject''
            setMessage('') // Clear message }
        catch (err) {}""
''

          {error && <p className='text-red-500'>{error}</p>}''''
          <div className='mb-4'>''''
            <label htmlFor='subject' className='block mb-1 font-medium'>""
              Subject: ''''
            </label>''''
            <input id='subject' type='text' value={subject} onChange={(e) =" > setSubject(e.target.value)} ref={firstInputRef} className='w-full p-2 border border-gray-300 rounded'/>"
          </div>''''
          <div>''''
            <label htmlFor='message' className='block mb-1 font-medium'>""
              Message: ''''
            </label>''''
            <textarea id='message' value={message} onChange={(e) =" > setMessage(e.target.value)} rows={4} className='w-full p-2 mb-4 border border-gray-300 rounded'/>''''"
          </div>''''
          <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded hover: bg-blue-700 disabled:opacity-50' disabled={isLoading}" >''"
            {isLoading ? 'Sending...' : 'Send Message'}''''
          </button>''''
          <button type='button' onClick={onClose} className='ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50' disabled={isLoading}" >"
            Cancel
          </button>
        </form>
      </div>""
    </div>)}'"""'"
          </button>
        </form>


