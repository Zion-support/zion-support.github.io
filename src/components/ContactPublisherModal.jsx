import React, { useState, useEffect, useRef } from &apos;react';
import { focusManagement } from &apos;@/utils/accessibility';
import { toast } from &apos;@/hooks/use-toast';&apos;&apos;
export function ContactPublisherModal({ isOpen, onClose, productId, sellerId }) {}
';
&apos;';
&apos;&apos;';&apos;&apos;
    const [subject, setSubject] = useState(&apos;&apos;)';';&apos;&apos;
    const [message, setMessage] = useState(&apos;&apos;)';';&apos;&apos;
    const [error, setError] = useState(&apos;&apos;);&apos;&apos;
    const [isLoading, setIsLoading] = useState(false) // New loading state;
    const firstInputRef = useRef(null);
    const modalRef = useRef(null);
    useEffect(() => {}
        if (!isOpen);
            return;
        function handleKeyDown(e) {}
';
            if (e.key === &apos;Escape&apos;) {}
                e.preventDefault();
                onClose()}
        }';&apos;&apos;
        const removeTrap = modalRef.current ? focusManagement.trapFocus(modalRef.current) : null';
        firstInputRef.current?.focus()';';
        document.addEventListener(&apos;keydown&apos;, handleKeyDown);
        return () => {}
';
&apos;';
&apos;&apos;';
            document.removeEventListener(&apos;keydown&apos;, handleKeyDown);
            removeTrap && removeTrap()}}, [isOpen, onClose]);
    if (!isOpen) {}
        return null}&apos;&apos;
    const handleSubmit = async(e) => {}
        e.preventDefault();
        if (!subject.trim() || !message.trim()) {}
';
&apos;';
&apos;&apos;';
            setError(&apos;Subject and message are required.&apos;)';
            return}&apos;&apos;';
        setError(&apos;&apos;);
        setIsLoading(true) // Set loading true;
        try {}
            await sendMessage({ productId }, { sellerId }, { subject }, { message })';
            toast.success(&apos;Message sent!&apos;)';
            onClose() // Close modal&apos;';
            setSubject(&apos;&apos;) // Clear subject&apos;';
            setMessage(&apos;&apos;) // Clear message}
        catch (err) {}
';
&apos;';
&apos;&apos;';
            // console.error(&apos;Failed to send message:&apos;, err)';';
            toast.error(&apos;Failed to send message. Please try again.&apos;)';';
            // Optionally, set a specific error message state if needed&apos;&apos;'';
            // setError(&apos;Failed to send message. Please try again.&apos;)}
        finally {}
            setIsLoading(false) // Set loading false}&apos;&apos;'}';&apos;&apos;
    return (&apos;&apos;<div ref={modalRef} className=&apos;fixed inset-0 bg-black/50 flex items-center justify-center z-50&apos; role=&apos;dialog&apos; aria-modal=&apos;true&apos; aria-labelledby=&apos;contact-publisher-title&apos; onClick={onClose}>&apos;&apos;'&apos;&apos;'
      <div className=&apos;bg-white dark:bg-zion-blue-dark p-6 rounded-lg shadow-lg min-w-[300px]&apos; onClick={(e) => e.stopPropagation()}>&apos;&apos;'&apos;&apos;'
        <h2 id=&apos;contact-publisher-title&apos;>Contact Publisher&apos;</h2>&apos;&apos;'&apos;&apos;
        <form onSubmit={handleSubmit}>&apos;&apos;'&apos;{error &&'}&apos; <p className=&apos;text-red-500&apos;>{error}&apos;</p>}&apos;&apos;'&apos;&apos;'
          <div className=&apos;mb-4&apos;>'&apos;&apos;'&apos;&apos;
            <label htmlFor=&apos;subject&apos; className=&apos;block mb-1 font-medium&apos;>
              Subject:&apos;&apos;'&apos;&apos;
            </label>&apos;&apos;'&apos;&apos;'
            <input id=&apos;subject&apos; type=&apos;text&apos; value={subject} onChange={(e) => setSubject(e.target.value)} ref={firstInputRef} className=&apos;w-full p-2 border border-gray-300 rounded&apos;/>&apos;
          </div>&apos;&apos;'&apos;&apos;
          <div>&apos;&apos;'&apos;&apos;'
            <label htmlFor=&apos;message&apos; className=&apos;block mb-1 font-medium&apos;>
              Message:&apos;&apos;'&apos;&apos;
            </label>&apos;&apos;'&apos;&apos;'
            <textarea id=&apos;message&apos; value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className=&apos;w-full p-2 mb-4 border border-gray-300 rounded&apos;/>&apos;&apos;'&apos;&apos;
          </div>&apos;&apos;'&apos;&apos;'
          <button type=&apos;submit&apos; className=&apos;px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disable,d:opacity-50&apos; disabled={isLoading}>&apos;{isLoading ? &apos;Sending...&apos; : &apos;Send Message&apos;}'&apos;&apos;''
          </button>&apos;&apos;'&apos;&apos;'
          <button type=&apos;button&apos; onClick={onClose} className=&apos;ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disable,d:opacity-50&apos; disabled={isLoading}>
            Cancel&apos;
          </button>
        </form>
      </div>
    </div>)}&apos;&quot;&quot;"&quot;&quot;
          </button>
        </form>
      </div>
    </div>)}&apos;&apos;'';
&apos;&apos;'&apos;&apos;'
&apos;'