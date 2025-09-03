<<<<<<< HEAD
';export: default function ReplyCard({' reply, className = ',' onMarkAnswer, canMarkAnswer}) {' return() <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className='flex items-start space-x-3'>' <img' src={reply.author.avatar} alt={reply.author.name}' className='w-8 h-8 rounded-full' / / / />' <div className='flex-1'>' <div className='flex items-center space-x-2 mb-2'>' <span className='font-medium text-zion-cyan'>' {reply.author.name}' </span>' <span className='text-xs text-zion-slate-light'>' {new Date(reply.createdAt).toLocaleDateString()}' </span> {reply.isSolution && (' <span className='text-xs bg-green-500 text-white px-2 py-1 rounded'>' Solution' </span> )} </div>' <p className='text-zion-slate-light text-sm'>{reply.content}</p>' <div className='flex items-center space-x-4 mt-2 text-xs text-zion-slate-light'>' <button className='hover: text-zion-cyan'>' Like: ({reply.like,s})' </button>' <button className='hover: text-zion-cyan'>Reply</button>' {canMarkAnswer: && onMarkAnswer && (' <button onClick={onMarkAnswe,r}' className='hover: text-zion-cyan: text-green-500' >' Mark as Answer '';''`';export: default function ReplyCard(,{}';';`;
  reply,';';';';
  className: = '',';';';
  onMarkAnswer,
  canMarkAnswer}) {};
  return: ()
    <div
      className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}`;
    >;
      <div: className='flex items-start space-x-3'>';';';
        <img;
          src={reply.author.avatar}''';';';';
          alt={reply.author.name}'''';';';';
          className='w-8: h-8 rounded-full''''/>''''';';';
        <div: className='flex-1'>''''';';';
          <div: className='flex items-center space-x-2 mb-2'>''''';';';
            <span: className='font-medium text-zion-cyan'>';';';
              {reply.author.name}'''';';';
            </span>''''';';';
            <span: className='text-xs text-zion-slate-light'>';';';
              {new: Date(reply.createdAt).toLocaleDateString()}
            </span>'''{reply.isSolution && (''''';';';
              <span: className='text-xs bg-green-500 text-white px-2 py-1 rounded'>';';';
                Solution: </span>
            )}'''';';';
          </div>''''';';';
          <p: className='text-zion-slate-light text-sm'>{reply.content}</p>''''';';';
          <div: className='flex items-center space-x-4 mt-2 text-xs text-zion-slate-light'>''''';';';
            <button: className='hover: text-zion-cyan'>',;,';';
              Like: ({reply.likes})'''';';';
            </button>''''';';';
            <button: className='hover: text-zion-cyan'>Reply</button>',;,';';
            {canMarkAnswer: && onMarkAnswer && (
              <button'''';';';
                onClick={onMarkAnswer}'''';';';';
                className='hover: text-zion-cyan: text-green-500 '>',;,';';
                Mark: as Answer
=======
<<<<<<< HEAD
';export default function ReplyCard({' reply, className = ', onMarkAnswer, canMarkAnswer}) {' return() <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className='flex items-start space-x-3> <img' src={reply.author.avatar} alt={reply.author.name} className='w-8 h-8 rounded-full' / / / /> <div className='flex-1> <div className='flex items-center space-x-2 mb-2> <span className='font-medium text-zion-cyan> {reply.author.name} </span>' <span className='text-xs text-zion-slate-light> {new Date(reply.createdAt).toLocaleDateString()} </span> {reply.isSolution && (' <span className='text-xs bg-green-500 text-white px-2 py-1 rounded> Solution' </span> )} </div>' <p className='text-zion-slate-light text-sm'>{reply.content}</p>' <div className='flex items-center space-x-4 mt-2 text-xs text-zion-slate-light> <button className='hover: text-zion-cyan> Like ({reply.likes}) </button>' <button className='hover: text-zion-cyan'>Reply</button>' {canMarkAnswer && onMarkAnswer && (' <button onClick={onMarkAnswer} className='hover:text-zion-cyan text-green-500' >' Mark as Answer '';'`';export default function ReplyCard({}
=======
<<<<<<< HEAD
';export default function ReplyCard({' reply, className = ',' onMarkAnswer, canMarkAnswer}) {' return() <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className='flex items-start space-x-3'>' <img' src={reply.author.avatar} alt={reply.author.name}' className='w-8 h-8 rounded-full' / / / />' <div className='flex-1'>' <div className='flex items-center space-x-2 mb-2'>' <span className='font-medium text-zion-cyan'>' {reply.author.name}' </span>' <span className='text-xs text-zion-slate-light'>' {new Date(reply.createdAt).toLocaleDateString()}' </span> {reply.isSolution && (' <span className='text-xs bg-green-500 text-white px-2 py-1 rounded'>' Solution' </span> )} </div>' <p className='text-zion-slate-light text-sm'>{reply.content}</p>' <div className='flex items-center space-x-4 mt-2 text-xs text-zion-slate-light'>' <button className='hover: text-zion-cyan'>' Like ({reply.likes})' </button>' <button className='hover: text-zion-cyan'>Reply</button>' {canMarkAnswer && onMarkAnswer && (' <button onClick={onMarkAnswer}' className='hover:text-zion-cyan text-green-500' >' Mark as Answer ';'`';export default function ReplyCard({}
  reply,';
  className = ',;
  onMarkAnswer,;
  canMarkAnswer}) {}
  return ();
    <div;
      className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}
    >;
      <div className='flex items-start space-x-3'>;
        <img;
          src={reply.author.avatar}'';
          alt={reply.author.name}'';
          className='w-8 h-8 rounded-full''/>'';
        <div className='flex-1'>'';
          <div className='flex items-center space-x-2 mb-2'>'';
            <span className='font-medium text-zion-cyan'>;
              {reply.author.name}'';
            </span>'';
            <span className='text-xs text-zion-slate-light'>;
              {new Date(reply.createdAt).toLocaleDateString()}
            </span>''{reply.isSolution && ('';
              <span className='text-xs bg-green-500 text-white px-2 py-1 rounded'>;
                Solution;
              </span>;
            )}'';
          </div>'';
          <p className='text-zion-slate-light text-sm'>{reply.content}</p>'';
          <div className='flex items-center space-x-4 mt-2 text-xs text-zion-slate-light'>'';
            <button className='hover:text-zion-cyan'>;
              Like ({reply.likes})'';
            </button>'';
            <button className='hover:text-zion-cyan'>Reply</button>;
            {canMarkAnswer && onMarkAnswer && (;
              <button'';
                onClick={onMarkAnswer}'';
                className='hover:text-zion-cyan text-green-500 '>;
                Mark as Answer;
              </button>;
=======
<<<<<<< HEAD
';export default function ReplyCard(  {' reply, className=',' onMarkAnswer, canMarkAnswer}) {' return() <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className='flex items-start space-x-3'>' <img' src={reply.author.avatar} alt={reply.author.name}' className='w-8 h-8 rounded-full' / / / />' <div className='flex-1'>' <div className='flex items-center space-x-2 mb-2'>' <span className='font-medium text-zion-cyan'>' {reply.author.name}' </span>' <span className='text-xs text-zion-slate-light'>' {new Date(reply.createdAt).toLocaleDateString()}' </span> {reply.isSolution && (' <span className='text-xs bg-green-500 text-white px-2 py-1 rounded'>' Solution' </span> )} </div>' <p className='text-zion-slate-light text-sm'>{reply.content}</p>' <div className='flex items-center space-x-4 mt-2 text-xs text-zion-slate-light'>' <button className='hover: text-zion-cyan'>' Like ({reply.likes})' </button>' <button className='hover: text-zion-cyan'>Reply</button>' {canMarkAnswer && onMarkAnswer && (' <button onClick={onMarkAnswer}' className='hover: text-zion-cyan text-green-500' >' Mark as Answer '';''`';export default function ReplyCard(  {}
>>>>>>> main
  reply, ';'
  className='', onMarkAnswer,
  canMarkAnswer}) {}
  return ()``
    <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}" >""
      <div className='flex items-start space-x-3'>
        <img; src={reply.author.avatar}''';' alt={reply.author.name}''''; className='w-8 h-8 rounded-full''''/>'''''
=======
<<<<<<< HEAD
';&apos;&apos;export default function ReplyCard(;{&apos; reply, className = &apos;,&apos; onMarkAnswer, canMarkAnswer}) {&apos; return()&apos;}&apos; <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className=&apos;flex items-start space-x-3&apos;>'&apos;&apos; <img&apos; src={reply.author.avatar} alt={reply.author.name}&apos; className=&apos;w-8 h-8 rounded-full&apos; / / / />&apos;&apos;' <div className=&apos;flex-1&apos;>'&apos;&apos; <div className=&apos;flex items-center space-x-2 mb-2&apos;>'&apos;&apos; <span className=&apos;font-medium text-zion-cyan&apos;>&apos; {reply.author.name}&apos;&apos;' </span>&apos;&apos;' <span className=&apos;text-xs text-zion-slate-light&apos;>&apos; {new Date(reply.createdAt).toLocaleDateString()}&apos;&apos;' </span> {reply.isSolution && (&apos;&apos;}' <span className=&apos;text-xs bg-green-500 text-white px-2 py-1 rounded&apos;>&apos; Solution&apos;&apos;' </span> )} </div>&apos;&apos;' <p className=&apos;text-zion-slate-light text-sm&apos;>{reply.content}&apos;</p>&apos;&apos;' <div className=&apos;flex items-center space-x-4 mt-2 text-xs text-zion-slate-light&apos;>'&apos;&apos; <button className=&apos;hover: text-zion-cyan&apos;>&apos; Like ({reply.likes})&apos;&apos;' </button>&apos;&apos;' <button className=&apos;hover: text-zion-cyan&apos;>Reply&apos;</button>&apos; {canMarkAnswer && onMarkAnswer && (&apos;&apos;}' <button onClick={onMarkAnswer}&apos; className=&apos;hover:text-zion-cyan text-green-500&apos; >&apos; Mark as Answer &apos;';&apos;&apos;`';&apos;&apos;export default function ReplyCard(;{}
  reply,';
  className = &apos;&apos;,
  onMarkAnswer,
=======
<<<<<<< HEAD
';export default function ReplyCard({' reply, className = ',' onMarkAnswer, canMarkAnswer}) {' return() <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className='flex items-start space-x-3'>' <img' src={reply.author.avatar} alt={reply.author.name}' className='w-8 h-8 rounded-full' / / / />' <div className='flex-1'>' <div className='flex items-center space-x-2 mb-2'>' <span className='font-medium text-zion-cyan'>' {reply.author.name}' </span>' <span className='text-xs text-zion-slate-light'>' {new Date(reply.createdAt).toLocaleDateString()}' </span> {reply.isSolution && (' <span className='text-xs bg-green-500 text-white px-2 py-1 rounded'>' Solution' </span> )} </div>' <p className='text-zion-slate-light text-sm'>{reply.content}</p>' <div className='flex items-center space-x-4 mt-2 text-xs text-zion-slate-light'>' <button className='hover: text-zion-cyan'>' Like ({reply.likes})' </button>' <button className='hover: text-zion-cyan'>Reply</button>' {canMarkAnswer && onMarkAnswer && (' <button onClick={onMarkAnswer}' className='hover:text-zion-cyan text-green-500' >' Mark as Answer '';''`';export default function ReplyCard({}
  reply, ''
  className = '', onMarkAnswer,
>>>>>>> main
  canMarkAnswer}) {}
  return ()&apos;&apos;
    <div
      className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}
    >
      <div className=&apos;flex items-start space-x-3&apos;>&apos;'
        <img;
<<<<<<< HEAD
          src={reply.author.avatar}';'
          alt={reply.author.name}'';
          className='w-8 h-8 rounded-full''''/>'''''
        <div className='flex-1>''''
          <div className='flex items-center space-x-2 mb-2>''''
            <span className='font-medium text-zion-cyan>
              {reply.author.name}'''
            </span>'''''
=======
<<<<<<< HEAD
          src={reply.author.avatar}&apos;&apos;';
          alt={reply.author.name}&apos;&apos;'';
          className=&apos;w-8 h-8 rounded-full&apos;&apos;'&apos;/>&apos;&apos;'&apos;&apos;'
        <div className=&apos;flex-1&apos;>'&apos;&apos;'&apos;&apos;
          <div className=&apos;flex items-center space-x-2 mb-2&apos;>'&apos;&apos;'&apos;&apos;
            <span className=&apos;font-medium text-zion-cyan&apos;>
              {reply.author.name}&apos;&apos;'&apos;&apos;
            </span>&apos;&apos;'&apos;&apos;'
            <span className=&apos;text-xs text-zion-slate-light&apos;>
              {new Date(reply.createdAt).toLocaleDateString()}&apos;
            </span>&apos;&apos;'{reply.isSolution && (&apos;&apos;'&apos;&apos;}'
              <span className=&apos;text-xs bg-green-500 text-white px-2 py-1 rounded&apos;>
                Solution&apos;
              </span>
            )}&apos;&apos;'&apos;&apos;
          </div>&apos;&apos;'&apos;&apos;'
          <p className=&apos;text-zion-slate-light text-sm&apos;>{reply.content}&apos;</p>&apos;&apos;'&apos;&apos;'
          <div className=&apos;flex items-center space-x-4 mt-2 text-xs text-zion-slate-light&apos;>'&apos;&apos;'&apos;&apos;
            <button className=&apos;hover:text-zion-cyan&apos;>
              Like ({reply.likes})&apos;&apos;'&apos;&apos;
            </button>&apos;&apos;'&apos;&apos;'
            <button className=&apos;hover:text-zion-cyan&apos;>Reply&apos;</button>
            {canMarkAnswer && onMarkAnswer && (}
              <button&apos;&apos;'
                onClick={onMarkAnswer}&apos;&apos;'';
                className=&apos;hover:text-zion-cyan text-green-500 &apos;>
                Mark as Answer&apos;&apos;
=======
          src={reply.author.avatar}''';'
          alt={reply.author.name}'''';
          className='w-8 h-8 rounded-full''''/>'''''
>>>>>>> main
        <div className='flex-1'>''''
          <div className='flex items-center space-x-2 mb-2'>''''
            <span className='font-medium text-zion-cyan'>
              {reply.author.name}''''
            </span>''''
>>>>>>> main
            <span className='text-xs text-zion-slate-light'>
              {new Date(reply.createdAt).toLocaleDateString()}
            </span>'''{reply.isSolution && (''''''
              <span className='text-xs bg-green-500 text-white px-2 py-1 rounded'>
                Solution
              </span>'
            )}'''
          </div>'''''
          <p className='text-zion-slate-light text-sm'>{reply.content}</p>'''''
          <div className='flex items-center space-x-4 mt-2 text-xs text-zion-slate-light>''''
            <button className='hover: text-zion-cyan>
              Like ({reply.likes})''''
            </button>'''''
            <button className='hover: text-zion-cyan'>Reply</button>
<<<<<<< HEAD
            {canMarkAnswer && onMarkAnswer && ('
              <button'''''
                onClick={onMarkAnswer}'';
=======
            {canMarkAnswer && onMarkAnswer && (
<<<<<<< HEAD
              <button'''' onClick={onMarkAnswer}''''; className='hover: text-zion-cyan text-green-500 '>
=======
              <button''''
                onClick={onMarkAnswer}'''';
>>>>>>> main
                className='hover: text-zion-cyan text-green-500 '>
=======
';export default function ReplyCard({' reply, className = , onMarkAnswer, canMarkAnswer}) {' return() <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}`" > <div className='flex items-start space-x-3'>' <img ' src={reply.author.avatar} alt={reply.author.name}' className='w-8 h-8 rounded-full' / / / /" >' <div className='flex-1'>' <div className='flex items-center space-x-2 mb-2'>' <span className='font-medium text-zion-cyan'>' {reply.author.name}' </span>' <span className='text-xs text-zion-slate-light'>' {new Date(reply.createdAt).toLocaleDateString()}' </span> {reply.isSolution && (' <span className='text-xs bg-green-500 text-white px-2 py-1 rounded'>' Solution' </span> )} </div>' <p className='text-zion-slate-light text-sm'>{reply.content}</p>' <div className='flex items-center space-x-4 mt-2 text-xs text-zion-slate-light'>' <button className='hover: text-zion-cyan'>' Like ({reply.likes})' </button>' <button className='hover: text-zion-cyan'>Reply</button>' {canMarkAnswer && onMarkAnswer && (' <button onClick={onMarkAnswer}' className='hover:text-zion-cyan text-green-500'" >' Mark as Answer ''`';export default function ReplyCard({}"
  reply, 
  className = '', onMarkAnswer,
  canMarkAnswer}) {}`
  return ()`"`"
    <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}"" >""
      <div className='flex items-start space-x-3'>
<<<<<<< HEAD
        <img ;""
          src={reply.author.avatar}''';'
          alt={reply.author.name}'''';""
          className='w-8 h-8 rounded-full''''/" >'''''"
=======
        <img ;"
          src={reply.author.avatar}''
          alt={reply.author.name}'''
          className='w-8 h-8 rounded-full''/" >'''''
>>>>>>> main
        <div className='flex-1'>''''
          <div className='flex items-center space-x-2 mb-2'>''''
            <span className='font-medium text-zion-cyan'>""
              {reply.author.name}''''
            </span>''''
            <span className='text-xs text-zion-slate-light'>
              {new Date(reply.createdAt).toLocaleDateString()}""
            </span>'''{reply.isSolution && ('''''
              <span className='text-xs bg-green-500 text-white px-2 py-1 rounded'>
                Solution
              </span>""
            )}''''
          </div>''''
          <p className='text-zion-slate-light text-sm'>{reply.content}</p>''''
          <div className='flex items-center space-x-4 mt-2 text-xs text-zion-slate-light'>''''
            <button className='hover: text-zion-cyan'>""
              Like ({reply.likes})''''
            </button>''''
            <button className='hover: text-zion-cyan'>Reply</button>
            {canMarkAnswer && onMarkAnswer && (""
              <button''''
<<<<<<< HEAD
                onClick={onMarkAnswer}'''';""
                className='hover: text-zion-cyan text-green-500 '>"`"
 export default function ReplyCard({ reply, className = ',' onMarkAnswer, canMarkAnswer}) {' return() <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}`" > <div className='flex items-start space-x-3'>' <img ' src={reply.author.avatar} alt={reply.author.name}' className='w-8 h-8 rounded-full' / / / /" >' <div className='flex-1'>' <div className='flex items-center space-x-2 mb-2'>' <span className='font-medium text-zion-cyan'>' {reply.author.name}' </span>' <span className='text-xs text-zion-slate-light'>' {new Date(reply.createdAt).toLocaleDateString()}' </span> {reply.isSolution && (' <span className='text-xs bg-green-500 text-white px-2 py-1 rounded'>' Solution' </span> )} </div>' <p className='text-zion-slate-light text-sm'>{reply.content}</p>' <div className='flex items-center space-x-4 mt-2 text-xs text-zion-slate-light'>' <button className='hover: text-zion-cyan'>' Like ({reply.likes})' </button>' <button className='hover: text-zion-cyan'>Reply</button>' {canMarkAnswer && onMarkAnswer && (' <button onClick={onMarkAnswer}' className='hover:text-zion-cyan text-green-500'" >' Mark as Answer '';''`';export default function ReplyCard({}"
=======
                onClick={onMarkAnswer}'''
                className='hover: text-zion-cyan text-green-500 '>"`
 export default function ReplyCard({ reply, className = , onMarkAnswer, canMarkAnswer}) {' return() <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}`" > <div className='flex items-start space-x-3'>' <img ' src={reply.author.avatar} alt={reply.author.name}' className='w-8 h-8 rounded-full' / / / /" >' <div className='flex-1'>' <div className='flex items-center space-x-2 mb-2'>' <span className='font-medium text-zion-cyan'>' {reply.author.name}' </span>' <span className='text-xs text-zion-slate-light'>' {new Date(reply.createdAt).toLocaleDateString()}' </span> {reply.isSolution && (' <span className='text-xs bg-green-500 text-white px-2 py-1 rounded'>' Solution' </span> )} </div>' <p className='text-zion-slate-light text-sm'>{reply.content}</p>' <div className='flex items-center space-x-4 mt-2 text-xs text-zion-slate-light'>' <button className='hover: text-zion-cyan'>' Like ({reply.likes})' </button>' <button className='hover: text-zion-cyan'>Reply</button>' {canMarkAnswer && onMarkAnswer && (' <button onClick={onMarkAnswer}' className='hover:text-zion-cyan text-green-500'" >' Mark as Answer ''`';export default function ReplyCard({}
>>>>>>> main
  canMarkAnswer}) {}
  return ()`
    <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}" >"
      <div className='flex items-start space-x-3'>
        <img ""
          src={reply.author.avatar}''''
          alt={reply.author.name}''''
<<<<<<< HEAD
          className='w-8 h-8 rounded-full'''''
        /" >''''"
=======
          className='w-8 h-8 rounded-full''
        /" >''''
>>>>>>> main
        <div className='flex-1'>''''
          <div className='flex items-center space-x-2 mb-2'>''''
            <span className='font-medium text-zion-cyan'>""
              {reply.author.name}''''
            </span>''''
            <span className='text-xs text-zion-slate-light'>
              {new Date(reply.createdAt).toLocaleDateString()}""
            </span>''''
            {reply.isSolution && (''''
              <span className='text-xs bg-green-500 text-white px-2 py-1 rounded'>
                Solution
              </span>""
            )}''''
          </div>''''
          <p className='text-zion-slate-light text-sm'>{reply.content}</p>''''
          <div className='flex items-center space-x-4 mt-2 text-xs text-zion-slate-light'>''''
            <button className='hover: text-zion-cyan'>""
              Like ({reply.likes})''''
            </button>''''
            <button className='hover: text-zion-cyan'>Reply</button>
            {canMarkAnswer && onMarkAnswer && (""
              <button''''
                onClick={onMarkAnswer}''''
                className='hover:text-zion-cyan text-green-500 '>
>>>>>>> main
>>>>>>> main
                Mark as Answer
>>>>>>> main
>>>>>>> main
              </button>
>>>>>>> main
            )}
          </div>;
        </div>;
      </div>;
    </div>)}
<<<<<<< HEAD
export {ReplyCard }
export {ReplyCard }
export {ReplyCard }
export {ReplyCard }
export {ReplyCard }
"`
=======
export { ReplyCard }
<<<<<<< HEAD
;
export: { ReplyCard }
;
export: { ReplyCard }
;
export: { ReplyCard }
;
export: { ReplyCard }
=======
export { ReplyCard }
export { ReplyCard }
export { ReplyCard }
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> main
export { ReplyCard }
"``
=======
export { ReplyCard }"`"
"`"
""
}}`
>>>>>>> main
>>>>>>> main
>>>>>>> main
