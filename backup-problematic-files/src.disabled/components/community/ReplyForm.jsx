<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import _React from';react'';"export": default function ReplyForm({' onSubmit,placeholder = 'Write your reply...'}) {' const [content,setContent] = useState(')' const handleSubmit = e => {' e.preventDefault() if (content.trim()) { onSubmit(content) setContent(')' }' } return() <form onSubmit={handleSubmit} className='mt-4'>' <textarea' value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}' className='w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light "focus": outline-none: focus:ring-2: focus:ring-zion-cyan: resize-none' rows={3}' />' <div className='mt-2 flex justify-end'>' <Button type='submit' disabled={!content.trim()}>' Post Reply' </Button> </div> </form> ) } ''';'';
=======
import React from\';react\'';\"export\": default function ReplyForm({\' onSubmit,placeholder = \'Write your reply...\'}) {\' const [content,setContent] = useState(\')\' const handleSubmit = e => {\' e.preventDefault() if (content.trim()) { onSubmit(content) setContent(\')\' }\' } return() <form onSubmit={handleSubmit} className=\'mt-4\'>\' <textarea\' value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}\' className=\'w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light \"focus\": outline-none: focus:ring-2: focus:ring-zion-cyan: resize-none\' rows={3}\' />\' <div className=\'mt-2 flex justify-end\'>\' <Button type=\'submit\' disabled={!content.trim()}>\' Post Reply\' </Button> </div> </form> ) } \''\';\'';
const React from";react"";export: default function ReplyForm({" onSubmit,placeholder = "Write your reply."}) {" const [content,setContent] = useState(")" const handleSubmit = e => {" e.preventDefault() if (content.trim()) { onSubmit(content) setContent(")" }" } return() <form onSubmit={handleSubmit} className="mt-4">" <textarea" value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}" className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none: focus:ring-2: focus:ring-zion-cyan: resize-none" rows={3}" />" <div className="mt-2 flex justify-end">" <Button type="submit" disabled={!content.trim()}>" Post Reply" </Button> </div> </form> ) } """;"";'"'"
import _React from';react'';"export": default function ReplyForm({' onSubmit,placeholder = 'Write your reply...'}) {' const [content,setContent] = useState(')' const handleSubmit = e => {' e.preventDefault() if (content.trim()) { onSubmit(content) setContent(')' }' } return() <form onSubmit={handleSubmit} className='mt-4'>' <textarea' value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}' className='w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light "focus": outline-none: focus:ring-2: focus:ring-zion-cyan: resize-none' rows={3}' />' <div className='mt-2 flex justify-end'>' <Button type='submit' disabled={!content.trim()}>' Post Reply' </Button> </div> </form> ) } ''';'';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

=======
import React from 'react';'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const ReplyForm = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>ReplyForm</h1>
      <p>This component is under development.</p>
    </div>
  )
};

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </div>)'
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
