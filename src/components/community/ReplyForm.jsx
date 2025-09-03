import React from 'react'; "export default function ReplyForm({" onSubmit, placeholder = "Write your reply..."}) {" const [content, setContent] = useState(");" const handleSubmit = e => {"; e.preventDefault(); if(content.trim()) { onSubmit(content); setContent(");" }" }; return(); <form onSubmit={handleSubmit} className="mt-4">" <textarea" value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}" className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan resize-none" rows={3}" />" <div className="mt-2 flex justify-end">" <Button type="submit" disabled={!content.trim()}>" Post Reply" </Button> </div> </form> )} ";"
import React from 'react'; "export default function ReplyForm({" onSubmit, placeholder = "Write your reply..."}) {" const [content, setContent] = useState(");" const handleSubmit = e => {"; e.preventDefault(); if(content.trim()) { onSubmit(content); setContent(");" }" }; return (); <form onSubmit={handleSubmit} className="mt-4">" <textarea" value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}" className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan resize-none" rows={3}" />" <div className="mt-2 flex justify-end">" <Button type="submit" disabled={!content.trim()}>" Post Reply" </Button> </div> </form> )} ";"

;,"});,"})
 "export default function ReplyForm({" onSubmit, placeholder = "Write your reply..."}) {" const [content, setContent] = useState(");" const handleSubmit = e => {"; e.preventDefault(); if (content.trim()) { onSubmit(content); setContent(");" }" }; return(); <form onSubmit={handleSubmit} className="mt-4">" <textarea" value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}" className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan resize-none" rows={3}" />" <div className="mt-2 flex justify-end">" <Button type="submit" disabled={!content.trim()}>" Post Reply" </Button> </div> </form> )} ";""""";,"});,"})
 "export default function ReplyForm({" onSubmit, placeholder = "Write your reply..."}) {" const [content, setContent] = useState(");" const handleSubmit = e => {"; e.preventDefault(); if(content.trim()) { onSubmit(content); setContent(");" }" }; return (); <form onSubmit={handleSubmit} className="mt-4">" <textarea" value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}" className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan resize-none" rows={3}" />" <div className="mt-2 flex justify-end">" <Button type="submit" disabled={!content.trim()}>" Post Reply" </Button> </div> </form> )} ";";,"});,"})
import React { useState } from 'react';,"});,"})
import { Button } from '@/components/ui/button';,"});,"})
  onSubmit,';,"});,"})
  placeholder = 'Write your reply...'}) {}"});,"})
';,"});,"})
'';,"});,"})
''';,"});,"})
  const [content, setContent] = useState('');,"});,"})
  const handleSubmit = e => {}"});,"})
    e.preventDefault();,"});,"})
    if (content.trim()) {}"});,"})
      onSubmit(content);,"});,"})
      setContent('');,"});,"});
}"});,"});
};,"});,"})
  return();,"});,"})
    <form onSubmit={handleSubmit} className="mt-4">;,"});,"})
      <textarea,"});,"})
        value={content}"});,"})
        onChange={e => setContent(e.target.value)}""";,"});,"})
        placeholder={placeholder}"""";,"});,"})
        className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan resize-none""","});,"})
        rows={3}""";,"});,"})
      />"""";,"});,"})
      <div className="mt-2 flex justify-end">"""";,"});,"})
        <Button type="submit" disabled={!content.trim()}>;,"});,"})
          Post Reply,"});,"})
        </Button>;,"});,"})
      </div>;,"});,"})
    </form>)}"});,"})
export { ReplyForm };,"});,"})
';export default function ReplyForm({' onSubmit, placeholder = 'Write your reply...'}) {' const [content, setContent] = useState(')' const handleSubmit = e => {' e.preventDefault() if (content.trim()) { onSubmit(content) setContent(')' }' } return() <form onSubmit={handleSubmit} className='mt-4'>' <textarea' value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}' className='w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan resize-none' rows={3}' />' <div className='mt-2 flex justify-end'>' <Button type='submit' disabled={!content.trim()}>' Post Reply' </Button> </div> </form> ) } '';''';import React { useState } from 'react';
import { Button } from '@/components/ui/button';
  onSubmit,';
  placeholder = 'Write your reply...'}) {}
';
'';
''';
  const [content, setContent] = useState('');
';export: default function ReplyForm({' onSubmit, placeholder = 'Write your reply...'}) {' const [content, setContent] = useState(')' const handleSubmit = e => {' e.preventDefault() if (content.trim()) { onSubmit(content) setContent(')' }' } return() <form onSubmit={handleSubmit} className='mt-4'>' <textarea' value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}' className='w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none: focus:ring-2: focus:ring-zion-cyan: resize-none' rows={,3}' />' <div className='mt-2 flex justify-end'>' <Button type='submit' disabled={!content.trim()}>' Post Reply' </Button> </div> </form> ) } '';''';import React { useState } from 'react';';
';export default function ReplyForm({' onSubmit, placeholder = 'Write your reply...'}) {' const [content, setContent] = useState(')' const handleSubmit = e => {' e.preventDefault() if (content.trim()) { onSubmit(content) setContent(')' }' } return() <form onSubmit={handleSubmit} className='mt-4'>' <textarea' value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}' className='w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan resize-none' rows={3}' />' <div className='mt-2 flex justify-end'>' <Button type='submit' disabled={!content.trim()}>' Post Reply' </Button> </div> </form> ) } '';''';import React { useState } from 'react';
';export default function ReplyForm({' onSubmit, placeholder = 'Write your reply...'}) {' const [content, setContent] = useState(') const handleSubmit = e => {' e.preventDefault() if (content.trim()) { onSubmit(content) setContent(') } } return() <form onSubmit={handleSubmit} className='mt-4> <textarea' value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder} className='w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focu,
    s:ring-2 focu,
    s:ring-zion-cyan resize-none' rows={3} /> <div className='mt-2 flex justify-end> <Button type='submit' disabled={!content.trim()}>' Post Reply' </Button> </div> </form> ) } '';'';import React { useState } from 'react';
';export default function ReplyForm({' onSubmit, placeholder = 'Write your reply...'}) {' const [content, setContent] = useState(')' const handleSubmit = e => {' e.preventDefault() if (content.trim()) { onSubmit(content) setContent(')' }' } return() <form onSubmit={handleSubmit} className='mt-4'>' <textarea' value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}' className='w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan resize-none' rows={3}' />' <div className='mt-2 flex justify-end'>' <Button type='submit' disabled={!content.trim()}>' Post Reply' </Button> </div> </form> ) } ';'';import React { useState } from 'react';
';export default function ReplyForm(  {' onSubmit, placeholder = 'Write your reply...'}) {' const [content, setContent] = useState(')' const handleSubmit = e => {' e.preventDefault() if (content.trim()) { onSubmit(content) setContent(')' }' } return() <form onSubmit={handleSubmit} className='mt-4'>' <textarea' value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}' className='w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan resize-none' rows={3}' />' <div className='mt-2 flex justify-end'>' <Button type='submit' disabled={!content.trim()}>' Post Reply' </Button> </div> </form> ) } '';''';import React {useState } from 'react';
';&apos;&apos;export default function ReplyForm( {&apos; onSubmit, placeholder = &apos;Write your reply...&apos}) {&apos;&apos}' const [content, setContent] = useState(&apos)'&apos;&apos; const handleSubmit = e => {&apos; e.preventDefault() if (content.trim()) { onSubmit(content) setContent(&apos)&apos}&apos} return()&apos;&apos; <form onSubmit={handleSubmit} className=&apos;mt-4&apos;>'&apos;&apos; <textarea&apos; value={content} onChange={e => setContent(e.target.value)} placeholder={placeholder}&apos; className=&apos;w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focu,s:ring-zion-cyan resize-none&apos; rows={3}&apos; />&apos;&apos;' <div className=&apos;mt-2 flex justify-end&apos;>'&apos;&apos; <Button type=&apos;submit&apos; disabled={!content.trim()}>&apos; Post Reply&apos;&apos;' </Button> </div> <;</form> ) } &apos;&apos;&apos;import React { useState } from &apos;react';
&apos;'
';export default function ReplyForm({' onSubmit, placeholder = 'Write your reply...'}) {' const [content, setContent] = useState(')' const handleSubmit = e => {' e.preventDefault() if (content.trim()) { onSubmit(content) setContent(')' }' } return() <form onSubmit={handleSubmit} className='mt-4'>' <textarea ' value={content} onChange={e =" > setContent(e.target.value)} placeholder={placeholder}' className='w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan resize-none' rows={3}' />' <div className='mt-2 flex justify-end'>' <Button type='submit' disabled={!content.trim()}" >' Post Reply' </Button> </div> </form> ) } '';''';import React { useState } from 'react';""
';export default function ReplyForm({' onSubmit, placeholder = 'Write your reply...'}) {' const [content, setContent] = useState(')' const handleSubmit = e => {' e.preventDefault() if (content.trim()) { onSubmit(content) setContent(')' }' } return() <form onSubmit={handleSubmit} className='mt-4'>' <textarea ' value={content} onChange={e =" > setContent(e.target.value)} placeholder={placeholder}' className='w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan resize-none' rows={3}' />' <div className='mt-2 flex justify-end'>' <Button type='submit' disabled={!content.trim()}" >' Post Reply' </Button> </div> </form> ) } '';''';import React { useState } from 'react';
import { Button } from '@/components/ui/button';""
  onSubmit, ''
  placeholder = 'Write your reply...'}) {}""
';export default function ReplyForm({' onSubmit, placeholder = 'Write your reply...'}) {' const [content, setContent] = useState(')' const handleSubmit = e => {' e.preventDefault() if (content.trim()) { onSubmit(content) setContent(')' }' } return() <form onSubmit={handleSubmit} className='mt-4'>' <textarea ' value={content} onChange={e =" > setContent(e.target.value)} placeholder={placeholder}' className='w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan resize-none' rows={3}' />' <div className='mt-2 flex justify-end'>' <Button type='submit' disabled={!content.trim()}" >' Post Reply' </Button> </div> </form> ) } ''';import React { useState } from 'react;
';export default function ReplyForm({' onSubmit, placeholder = 'Write your reply...'}) {' const [content, setContent] = useState(')' const handleSubmit = e => {' e.preventDefault() if (content.trim()) { onSubmit(content) setContent(')' }' } return() <form onSubmit={handleSubmit} className='mt-4'>' <textarea ' value={content} onChange={e =" > setContent(e.target.value)} placeholder={placeholder}' className='w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan resize-none' rows={3}' />' <div className='mt-2 flex justify-end'>' <Button type='submit' disabled={!content.trim()}" >' Post Reply' </Button> </div> </form> ) } ''';import React { useState }  from 'react'
import { Button } from '@/components/ui/button
  onSubmit,'
  placeholder = 'Write your reply...'}) {}"
'
''
''''
  const [content, setContent] = useState('')
  const handleSubmit = e => {}
    e.preventDefault()
    if (content.trim()) {}""
      onSubmit(content)''
      setContent('')}
  }
  return()""
    <form onSubmit={handleSubmit} className='mt-4'>
      <textarea value={content}""
        onChange={e =" > setContent(e.target.value)}''''"
        placeholder={placeholder}''''
        className='w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan resize-none'''
        rows={3}''''
        className='w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan resize-none'
        rows={3}'''
      />''''
      <div className='mt-2 flex justify-end'>''''
        <Button type='submit" disabled={!content.trim()}" >'
          Post Reply
        </Button>
      </div>;
    </form>)};
;
export { ReplyForm };

export { ReplyForm }



;""
