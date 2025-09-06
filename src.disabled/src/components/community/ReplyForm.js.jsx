<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from \'react\'; \"export default function ReplyForm({\" onSubmit,placeholder = \"Write your reply...\"}) {\" const [content,setContent] = useState(\");\" const handleSubmit = e => {\"; e && e.preventDefault(); if(content && content.trim()) { onSubmit(content); setContent(\");\" }\" }; return (); <form onSubmit={handleSubmit} className=\"mt-4\">\" <textarea\" value={content} onChange={e => setContent(e && e.target.value)} placeholder={placeholder}\" className=\"w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light \"focus\": outline-none focus:ring-2 focus:ring-zion-cyan resize-none\" rows={3}\" />\" <div className=\"mt-2 flex justify-end\">\" <Button type=\"submit\" disabled={!content && content.trim()}>\" Post Reply\" </Button> </div> </form> )} \";\";
const React from "react"; "export default function ReplyForm({" onSubmit,placeholder = "Write your reply."}) {" const [content,setContent] = useState(");" const handleSubmit = e => {"; e && e.preventDefault(); if(content && content.trim()) { onSubmit(content); setContent(");" }" }; return (); <form onSubmit={handleSubmit} className="mt-4">" <textarea" value={content} onChange={e => setContent(e && e.target.value)} placeholder={placeholder}" className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan resize-none" rows={3}" />" <div className="mt-2 flex justify-end">" <Button type="submit" disabled={!content && content.trim()}>" Post Reply" </Button> </div> </form> )} ";";'"'"

import _React from 'react'; "export default function ReplyForm({" onSubmit,placeholder = "Write your reply..."}) {" const [content,setContent] = useState(");" const handleSubmit = e => {"; e && e.preventDefault(); if(content && content.trim()) { onSubmit(content); setContent(");" }" }; return (); <form onSubmit={handleSubmit} className="mt-4">" <textarea" value={content} onChange={e => setContent(e && e.target.value)} placeholder={placeholder}" className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light "focus": outline-none focus:ring-2 focus:ring-zion-cyan resize-none" rows={3}" />" <div className="mt-2 flex justify-end">" <Button type="submit" disabled={!content && content.trim()}>" Post Reply" </Button> </div> </form> )} ";";

=======
import _React from 'react'; "export default function ReplyForm({" onSubmit,placeholder = "Write your reply..."}) {" const [content,setContent] = useState(");" const handleSubmit = e => {"; e.preventDefault(); if(content.trim()) { onSubmit(content); setContent(");" }" }; return(); <form onSubmit={handleSubmit} className="mt-4">" <textarea" value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}" className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light "focus": outline-none focus:ring-2 focus:ring-zion-cyan resize-none" rows={3}" />" <div className="mt-2 flex justify-end">" <Button type="submit" disabled={!content.trim()}>" Post Reply" </Button> </div> </form> )} ";";
>>>>>>> main
=======
import React from \'react\'; \"export default function ReplyForm({\" onSubmit,placeholder = \"Write your reply...\"}) {\" const [content,setContent] = useState(\");\" const handleSubmit = e => {\"; e.preventDefault(); if(content.trim()) { onSubmit(content); setContent(\");\" }\" }; return(); <form onSubmit={handleSubmit} className=\"mt-4\">\" <textarea\" value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}\" className=\"w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light \"focus\": outline-none focus:ring-2 focus:ring-zion-cyan resize-none\" rows={3}\" />\" <div className=\"mt-2 flex justify-end\">\" <Button type=\"submit\" disabled={!content.trim()}>\" Post Reply\" </Button> </div> </form> )} \";\";
const React from "react"; "export default function ReplyForm({" onSubmit,placeholder = "Write your reply."}) {" const [content,setContent] = useState(");" const handleSubmit = e => {"; e.preventDefault(); if(content.trim()) { onSubmit(content); setContent(");" }" }; return(); <form onSubmit={handleSubmit} className="mt-4">" <textarea" value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}" className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan resize-none" rows={3}" />" <div className="mt-2 flex justify-end">" <Button type="submit" disabled={!content.trim()}>" Post Reply" </Button> </div> </form> )} ";";'"'"
import _React from 'react'; "export default function ReplyForm({" onSubmit,placeholder = "Write your reply..."}) {" const [content,setContent] = useState(");" const handleSubmit = e => {"; e.preventDefault(); if(content.trim()) { onSubmit(content); setContent(");" }" }; return(); <form onSubmit={handleSubmit} className="mt-4">" <textarea" value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}" className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light "focus": outline-none focus:ring-2 focus:ring-zion-cyan resize-none" rows={3}" />" <div className="mt-2 flex justify-end">" <Button type="submit" disabled={!content.trim()}>" Post Reply" </Button> </div> </form> )} ";";
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
