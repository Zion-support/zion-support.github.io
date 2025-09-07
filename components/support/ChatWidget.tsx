useEffect ( () => {
  if (!isOpen && messages.length === 0) {
  //Seed greeting setMessages ([ 
}
}, [isOpen, messages.length])
[])
<button aria-label="Open support chat" onClick= {
  () => setIsOpen (true) 
}className="rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black" > ? </button>) 
}<div className= {
  m.role === 'assistant' ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800' : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white' 
}> {
  m.content 
}</div> </div>) ) 
}</div>) 
}<div ref= {
  messagesEndRef 
}/> </div> > {
  q 
}</button>) ) 
}</div> </div>) 
}<input value= {
  input 
}onChange= {
  (e) => setInput (e.target.value) 
}onKeyDown= {
  (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
  
}
}placeholder="Ask a question…" className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /> <button > Send </button> </div>) : (<div className="flex flex-col gap-2 text-sm" > <div className="text-gray-700 dark:text-gray-300" >We can escalate this to our team:</div> <div className="flex gap-2" > <a href="mailto:support@zion.ai" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800" >Email Support</a> <a href="/contact" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800" >Chat with Live Agent</a> </div> </div>) 
}</div> </div>) 
}</div>) 
}