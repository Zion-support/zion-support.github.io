<<<<<<< HEAD
import _React from';react'';"export": default function ReplyForm({' onSubmit,placeholder = 'Write your reply...'}) {' const [content,setContent] = useState(')' const handleSubmit = e => {' e.preventDefault() if (content.trim()) { onSubmit(content) setContent(')' }' } return() <form onSubmit={handleSubmit} className='mt-4'>' <textarea' value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}' className='w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light "focus": outline-none: focus:ring-2: focus:ring-zion-cyan: resize-none' rows={3}' />' <div className='mt-2 flex justify-end'>' <Button type='submit' disabled={!content.trim()}>' Post Reply' </Button> </div> </form> ) } ''';'';
import React from\';react\'';\"export\": default function ReplyForm({\' onSubmit,placeholder = \'Write your reply...\'}) {\' const [content,setContent] = useState(\')\' const handleSubmit = e => {\' e && e.preventDefault() if (content && content.trim()) { onSubmit(content) setContent(\')\' }\' } return () <form onSubmit={handleSubmit} className=\'mt-4\'>\' <textarea\' value={content} onChange={e => setContent(e && e.target.value)} placeholder={placeholder}\' className=\'w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light \"focus\": outline-none: focus:ring-2: focus:ring-zion-cyan: resize-none\' rows={3}\' />\' <div className=\'mt-2 flex justify-end\'>\' <Button type=\'submit\' disabled={!content && content.trim()}>\' Post Reply\' </Button> </div> </form> ) } \''\';\'';
const React from";react"";export: default function ReplyForm({" onSubmit,placeholder = "Write your reply."}) {" const [content,setContent] = useState(")" const handleSubmit = e => {" e && e.preventDefault() if (content && content.trim()) { onSubmit(content) setContent(")" }" } return () <form onSubmit={handleSubmit} className="mt-4">" <textarea" value={content} onChange={e => setContent(e && e.target.value)} placeholder={placeholder}" className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none: focus:ring-2: focus:ring-zion-cyan: resize-none" rows={3}" />" <div className="mt-2 flex justify-end">" <Button type="submit" disabled={!content && content.trim()}>" Post Reply" </Button> </div> </form> ) } """;"";'"'"
import _React from';react'';"export": default function ReplyForm({' onSubmit,placeholder = 'Write your reply...'}) {' const [content,setContent] = useState(')' const handleSubmit = e => {' e && e.preventDefault() if (content && content.trim()) { onSubmit(content) setContent(')' }' } return () <form onSubmit={handleSubmit} className='mt-4'>' <textarea' value={content} onChange={e => setContent(e && e.target.value)} placeholder={placeholder}' className='w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light "focus": outline-none: focus:ring-2: focus:ring-zion-cyan: resize-none' rows={3}' />' <div className='mt-2 flex justify-end'>' <Button type='submit' disabled={!content && content.trim()}>' Post Reply' </Button> </div> </form> ) } ''';'';
=======
import React from 'react';

const ReplyForm.js = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ReplyForm.js</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ReplyForm.js;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
