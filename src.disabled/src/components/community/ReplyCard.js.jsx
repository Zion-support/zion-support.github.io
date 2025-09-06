<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import _React from 'react'; "export default function ReplyCard({" reply,className = "," onMarkAnswer,canMarkAnswer}) {" return(); <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className="flex items-start space-x-3">" <img" src={reply.author.avatar} alt={reply.author.name}" className="w-8 h-8 rounded-full" / / />" <div className="flex-1">" <div className="flex items-center space-x-2 mb-2">" <span className="font-medium text-zion-cyan">" {reply.author.name}" </span>" <span className="text-xs text-zion-slate-light">" {new Date(reply.createdAt).toLocaleDateString()}" </span> {reply.isSolution && (" <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">" Solution" </span> )} </div>" <p className="text-zion-slate-light text-sm">{reply.content}</p>" <div className="flex items-center space-x-4 mt-2 text-xs text-zion-slate-light">" <button className=""hover": text-zion-cyan">" Like({reply.likes})" </button>" <button className=""hover": text-zion-cyan">Reply</button>" {canMarkAnswer && onMarkAnswer && (" <button onClick={onMarkAnswer}" className=""hover": text-zion-cyan text-green-500">" Mark as Answer ";"}})
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c

=======
import _React from 'react'; "export default function ReplyCard({" reply,className = "," onMarkAnswer,canMarkAnswer}) {" return(); <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className="flex items-start space-x-3">" <img" src={reply.author.avatar} alt={reply.author.name}" className="w-8 h-8 rounded-full" / / />" <div className="flex-1">" <div className="flex items-center space-x-2 mb-2">" <span className="font-medium text-zion-cyan">" {reply.author.name}" </span>" <span className="text-xs text-zion-slate-light">" {new Date(reply.createdAt).toLocaleDateString()}" </span> {reply.isSolution && (" <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">" Solution" </span> )} </div>" <p className="text-zion-slate-light text-sm">{reply.content}</p>" <div className="flex items-center space-x-4 mt-2 text-xs text-zion-slate-light">" <button className=""hover": text-zion-cyan">" Like({reply.likes})" </button>" <button className=""hover": text-zion-cyan">Reply</button>" {canMarkAnswer && onMarkAnswer && (" <button onClick={onMarkAnswer}" className=""hover": text-zion-cyan text-green-500">" Mark as Answer ";"}})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
import React from \'react\'; \"export default function ReplyCard({\" reply,className = \",\" onMarkAnswer,canMarkAnswer}) {\" return (); <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className=\"flex items-start space-x-3\">\" <img\" src={reply && reply.author.avatar} alt={reply && reply.author.name}\" className=\"w-8 h-8 rounded-full\" / / />\" <div className=\"flex-1\">\" <div className=\"flex items-center space-x-2 mb-2\">\" <span className=\"font-medium text-zion-cyan\">\" {reply && reply.author.name}\" </span>\" <span className=\"text-xs text-zion-slate-light\">\" {new Date(reply && reply.createdAt).toLocaleDateString()}\" </span> {reply && reply.isSolution && (\" <span className=\"text-xs bg-green-500 text-white px-2 py-1 rounded\">\" Solution\" </span> )} </div>\" <p className=\"text-zion-slate-light text-sm\">{reply && reply.content}</p>\" <div className=\"flex items-center space-x-4 mt-2 text-xs text-zion-slate-light\">\" <button className=\""hover\": text-zion-cyan\">\" Like({reply && reply.likes})\" </button>\" <button className=\""hover\": text-zion-cyan\">Reply</button>\" {canMarkAnswer && onMarkAnswer && (\" <button onClick={onMarkAnswer}\" className=\""hover\": text-zion-cyan text-green-500\">\" Mark as Answer \";\"}})
const React from "react"; "export default function ReplyCard({" reply,className = "," onMarkAnswer,canMarkAnswer}) {" return (); <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className="flex items-start space-x-3">" <img" src={reply && reply.author.avatar} alt={reply && reply.author.name}" className="w-8 h-8 rounded-full" / / />" <div className="flex-1">" <div className="flex items-center space-x-2 mb-2">" <span className="font-medium text-zion-cyan">" {reply && reply.author.name}" </span>" <span className="text-xs text-zion-slate-light">" {new Date(reply && reply.createdAt).toLocaleDateString()}" </span> {reply && reply.isSolution && (" <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">" Solution" </span> )} </div>" <p className="text-zion-slate-light text-sm">{reply && reply.content}</p>" <div className="flex items-center space-x-4 mt-2 text-xs text-zion-slate-light">" <button className="hover: text-zion-cyan">" Like({reply && reply.likes})" </button>" <button className="hover: text-zion-cyan">Reply</button>" {canMarkAnswer && onMarkAnswer && (" <button onClick={onMarkAnswer}" className="hover: text-zion-cyan text-green-500">" Mark as Answer ";"}})'"`'"`

import _React from 'react'; "export default function ReplyCard({" reply,className = "," onMarkAnswer,canMarkAnswer}) {" return (); <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className="flex items-start space-x-3">" <img" src={reply && reply.author.avatar} alt={reply && reply.author.name}" className="w-8 h-8 rounded-full" / / />" <div className="flex-1">" <div className="flex items-center space-x-2 mb-2">" <span className="font-medium text-zion-cyan">" {reply && reply.author.name}" </span>" <span className="text-xs text-zion-slate-light">" {new Date(reply && reply.createdAt).toLocaleDateString()}" </span> {reply && reply.isSolution && (" <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">" Solution" </span> )} </div>" <p className="text-zion-slate-light text-sm">{reply && reply.content}</p>" <div className="flex items-center space-x-4 mt-2 text-xs text-zion-slate-light">" <button className=""hover": text-zion-cyan">" Like({reply && reply.likes})" </button>" <button className=""hover": text-zion-cyan">Reply</button>" {canMarkAnswer && onMarkAnswer && (" <button onClick={onMarkAnswer}" className=""hover": text-zion-cyan text-green-500">" Mark as Answer ";"}})

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
import _React from 'react'; "export default function ReplyCard({" reply,className = "," onMarkAnswer,canMarkAnswer}) {" return(); <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className="flex items-start space-x-3">" <img" src={reply.author.avatar} alt={reply.author.name}" className="w-8 h-8 rounded-full" / / />" <div className="flex-1">" <div className="flex items-center space-x-2 mb-2">" <span className="font-medium text-zion-cyan">" {reply.author.name}" </span>" <span className="text-xs text-zion-slate-light">" {new Date(reply.createdAt).toLocaleDateString()}" </span> {reply.isSolution && (" <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">" Solution" </span> )} </div>" <p className="text-zion-slate-light text-sm">{reply.content}</p>" <div className="flex items-center space-x-4 mt-2 text-xs text-zion-slate-light">" <button className=""hover": text-zion-cyan">" Like({reply.likes})" </button>" <button className=""hover": text-zion-cyan">Reply</button>" {canMarkAnswer && onMarkAnswer && (" <button onClick={onMarkAnswer}" className=""hover": text-zion-cyan text-green-500">" Mark as Answer ";"}})
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
import React from \'react\'; \"export default function ReplyCard({\" reply,className = \",\" onMarkAnswer,canMarkAnswer}) {\" return(); <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className=\"flex items-start space-x-3\">\" <img\" src={reply.author.avatar} alt={reply.author.name}\" className=\"w-8 h-8 rounded-full\" / / />\" <div className=\"flex-1\">\" <div className=\"flex items-center space-x-2 mb-2\">\" <span className=\"font-medium text-zion-cyan\">\" {reply.author.name}\" </span>\" <span className=\"text-xs text-zion-slate-light\">\" {new Date(reply.createdAt).toLocaleDateString()}\" </span> {reply.isSolution && (\" <span className=\"text-xs bg-green-500 text-white px-2 py-1 rounded\">\" Solution\" </span> )} </div>\" <p className=\"text-zion-slate-light text-sm\">{reply.content}</p>\" <div className=\"flex items-center space-x-4 mt-2 text-xs text-zion-slate-light\">\" <button className=\""hover\": text-zion-cyan\">\" Like({reply.likes})\" </button>\" <button className=\""hover\": text-zion-cyan\">Reply</button>\" {canMarkAnswer && onMarkAnswer && (\" <button onClick={onMarkAnswer}\" className=\""hover\": text-zion-cyan text-green-500\">\" Mark as Answer \";\"}})
const React from "react"; "export default function ReplyCard({" reply,className = "," onMarkAnswer,canMarkAnswer}) {" return(); <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className="flex items-start space-x-3">" <img" src={reply.author.avatar} alt={reply.author.name}" className="w-8 h-8 rounded-full" / / />" <div className="flex-1">" <div className="flex items-center space-x-2 mb-2">" <span className="font-medium text-zion-cyan">" {reply.author.name}" </span>" <span className="text-xs text-zion-slate-light">" {new Date(reply.createdAt).toLocaleDateString()}" </span> {reply.isSolution && (" <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">" Solution" </span> )} </div>" <p className="text-zion-slate-light text-sm">{reply.content}</p>" <div className="flex items-center space-x-4 mt-2 text-xs text-zion-slate-light">" <button className="hover: text-zion-cyan">" Like({reply.likes})" </button>" <button className="hover: text-zion-cyan">Reply</button>" {canMarkAnswer && onMarkAnswer && (" <button onClick={onMarkAnswer}" className="hover: text-zion-cyan text-green-500">" Mark as Answer ";"}})'"`'"`
import _React from 'react'; "export default function ReplyCard({" reply,className = "," onMarkAnswer,canMarkAnswer}) {" return(); <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className="flex items-start space-x-3">" <img" src={reply.author.avatar} alt={reply.author.name}" className="w-8 h-8 rounded-full" / / />" <div className="flex-1">" <div className="flex items-center space-x-2 mb-2">" <span className="font-medium text-zion-cyan">" {reply.author.name}" </span>" <span className="text-xs text-zion-slate-light">" {new Date(reply.createdAt).toLocaleDateString()}" </span> {reply.isSolution && (" <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">" Solution" </span> )} </div>" <p className="text-zion-slate-light text-sm">{reply.content}</p>" <div className="flex items-center space-x-4 mt-2 text-xs text-zion-slate-light">" <button className=""hover": text-zion-cyan">" Like({reply.likes})" </button>" <button className=""hover": text-zion-cyan">Reply</button>" {canMarkAnswer && onMarkAnswer && (" <button onClick={onMarkAnswer}" className=""hover": text-zion-cyan text-green-500">" Mark as Answer ";"}})
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from \'react\'; \"export default function ReplyCard({\" reply,className = \",\" onMarkAnswer,canMarkAnswer}) {\" return(); <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className=\"flex items-start space-x-3\">\" <img\" src={reply.author.avatar} alt={reply.author.name}\" className=\"w-8 h-8 rounded-full\" / / />\" <div className=\"flex-1\">\" <div className=\"flex items-center space-x-2 mb-2\">\" <span className=\"font-medium text-zion-cyan\">\" {reply.author.name}\" </span>\" <span className=\"text-xs text-zion-slate-light\">\" {new Date(reply.createdAt).toLocaleDateString()}\" </span> {reply.isSolution && (\" <span className=\"text-xs bg-green-500 text-white px-2 py-1 rounded\">\" Solution\" </span> )} </div>\" <p className=\"text-zion-slate-light text-sm\">{reply.content}</p>\" <div className=\"flex items-center space-x-4 mt-2 text-xs text-zion-slate-light\">\" <button className=\""hover\": text-zion-cyan\">\" Like({reply.likes})\" </button>\" <button className=\""hover\": text-zion-cyan\">Reply</button>\" {canMarkAnswer && onMarkAnswer && (\" <button onClick={onMarkAnswer}\" className=\""hover\": text-zion-cyan text-green-500\">\" Mark as Answer \";\"}})
const React from "react"; "export default function ReplyCard({" reply,className = "," onMarkAnswer,canMarkAnswer}) {" return(); <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className="flex items-start space-x-3">" <img" src={reply.author.avatar} alt={reply.author.name}" className="w-8 h-8 rounded-full" / / />" <div className="flex-1">" <div className="flex items-center space-x-2 mb-2">" <span className="font-medium text-zion-cyan">" {reply.author.name}" </span>" <span className="text-xs text-zion-slate-light">" {new Date(reply.createdAt).toLocaleDateString()}" </span> {reply.isSolution && (" <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">" Solution" </span> )} </div>" <p className="text-zion-slate-light text-sm">{reply.content}</p>" <div className="flex items-center space-x-4 mt-2 text-xs text-zion-slate-light">" <button className="hover: text-zion-cyan">" Like({reply.likes})" </button>" <button className="hover: text-zion-cyan">Reply</button>" {canMarkAnswer && onMarkAnswer && (" <button onClick={onMarkAnswer}" className="hover: text-zion-cyan text-green-500">" Mark as Answer ";"}})'"`'"`
import _React from 'react'; "export default function ReplyCard({" reply,className = "," onMarkAnswer,canMarkAnswer}) {" return(); <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className="flex items-start space-x-3">" <img" src={reply.author.avatar} alt={reply.author.name}" className="w-8 h-8 rounded-full" / / />" <div className="flex-1">" <div className="flex items-center space-x-2 mb-2">" <span className="font-medium text-zion-cyan">" {reply.author.name}" </span>" <span className="text-xs text-zion-slate-light">" {new Date(reply.createdAt).toLocaleDateString()}" </span> {reply.isSolution && (" <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">" Solution" </span> )} </div>" <p className="text-zion-slate-light text-sm">{reply.content}</p>" <div className="flex items-center space-x-4 mt-2 text-xs text-zion-slate-light">" <button className=""hover": text-zion-cyan">" Like({reply.likes})" </button>" <button className=""hover": text-zion-cyan">Reply</button>" {canMarkAnswer && onMarkAnswer && (" <button onClick={onMarkAnswer}" className=""hover": text-zion-cyan text-green-500">" Mark as Answer ";"}})
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
import React from \'react\'; \"export default function ReplyCard({\" reply,className = \",\" onMarkAnswer,canMarkAnswer}) {\" return(); <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className=\"flex items-start space-x-3\">\" <img\" src={reply.author.avatar} alt={reply.author.name}\" className=\"w-8 h-8 rounded-full\" / / />\" <div className=\"flex-1\">\" <div className=\"flex items-center space-x-2 mb-2\">\" <span className=\"font-medium text-zion-cyan\">\" {reply.author.name}\" </span>\" <span className=\"text-xs text-zion-slate-light\">\" {new Date(reply.createdAt).toLocaleDateString()}\" </span> {reply.isSolution && (\" <span className=\"text-xs bg-green-500 text-white px-2 py-1 rounded\">\" Solution\" </span> )} </div>\" <p className=\"text-zion-slate-light text-sm\">{reply.content}</p>\" <div className=\"flex items-center space-x-4 mt-2 text-xs text-zion-slate-light\">\" <button className=\""hover\": text-zion-cyan\">\" Like({reply.likes})\" </button>\" <button className=\""hover\": text-zion-cyan\">Reply</button>\" {canMarkAnswer && onMarkAnswer && (\" <button onClick={onMarkAnswer}\" className=\""hover\": text-zion-cyan text-green-500\">\" Mark as Answer \";\"}})
const React from "react"; "export default function ReplyCard({" reply,className = "," onMarkAnswer,canMarkAnswer}) {" return(); <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className="flex items-start space-x-3">" <img" src={reply.author.avatar} alt={reply.author.name}" className="w-8 h-8 rounded-full" / / />" <div className="flex-1">" <div className="flex items-center space-x-2 mb-2">" <span className="font-medium text-zion-cyan">" {reply.author.name}" </span>" <span className="text-xs text-zion-slate-light">" {new Date(reply.createdAt).toLocaleDateString()}" </span> {reply.isSolution && (" <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">" Solution" </span> )} </div>" <p className="text-zion-slate-light text-sm">{reply.content}</p>" <div className="flex items-center space-x-4 mt-2 text-xs text-zion-slate-light">" <button className="hover: text-zion-cyan">" Like({reply.likes})" </button>" <button className="hover: text-zion-cyan">Reply</button>" {canMarkAnswer && onMarkAnswer && (" <button onClick={onMarkAnswer}" className="hover: text-zion-cyan text-green-500">" Mark as Answer ";"}})'"`'"`
import _React from 'react'; "export default function ReplyCard({" reply,className = "," onMarkAnswer,canMarkAnswer}) {" return(); <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}` > <div className="flex items-start space-x-3">" <img" src={reply.author.avatar} alt={reply.author.name}" className="w-8 h-8 rounded-full" / / />" <div className="flex-1">" <div className="flex items-center space-x-2 mb-2">" <span className="font-medium text-zion-cyan">" {reply.author.name}" </span>" <span className="text-xs text-zion-slate-light">" {new Date(reply.createdAt).toLocaleDateString()}" </span> {reply.isSolution && (" <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">" Solution" </span> )} </div>" <p className="text-zion-slate-light text-sm">{reply.content}</p>" <div className="flex items-center space-x-4 mt-2 text-xs text-zion-slate-light">" <button className=""hover": text-zion-cyan">" Like({reply.likes})" </button>" <button className=""hover": text-zion-cyan">Reply</button>" {canMarkAnswer && onMarkAnswer && (" <button onClick={onMarkAnswer}" className=""hover": text-zion-cyan text-green-500">" Mark as Answer ";"}})
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
