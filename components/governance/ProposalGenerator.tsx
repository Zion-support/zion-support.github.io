<div> <label className="block text-sm font-medium" >Target institution</label> <input /> </div> <div> <label className="block text-sm font-medium" >Type</label> <select > <option>Workforce Dev</option> <option>AI Ethics</option> <option>Digital ID</option> <option>Education</option> </select> </div> <div> <label className="block text-sm font-medium" >Regional scope</label> <input /> </div> <div> <label className="block text-sm font-medium" >Budget / Resolution goals</label> <textarea block text-sm font-medium">Supporting multiverse (s) </label> <input /> </div> <div className=" grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label className=" block text-sm font-medium">Language</label> <input /> </div> <div> <label className=" block text-sm font-medium">GPT Prompt Assist</label> <textarea /> </div> </div> <div className=" flex gap-2"> <button > {
  isGenerating ? 'Generating...' : 'Generate Draft' 
}</button> <button > Export (PDF/JSON/MD) </button> <button > Submit Bridge </button> </div> {
  exportLinks.pdfUrl && (<div> <a className=" text-blue-600 underline"href= {
  exportLinks.pdfUrl 
}target=" blank"rel=" noreferrer">PDF</a> </div>) 
}{
  exportLinks.mdUrl && (<div> <a className=" text-blue-600 underline"href= {
  exportLinks.mdUrl 
}target=" blank"rel=" noreferrer">Markdown</a> </div>) 
}{
  exportLinks.jsonUrl && (<div> <a className=" text-blue-600 underline"href= {
  exportLinks.jsonUrl 
}target=" blank"rel=" noreferrer">JSON</a> </div>) 
}</div>) 
}</div> <div className=" space-y-2"> <label className=" block text-sm font-medium" >Draft (Markdown) </label> <textarea /> </div> </div> </div>) 
}