<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import _React from';react'';"export": default function ReplyCard({' reply,className = ',' onMarkAnswer,canMarkAnswer}) {' return() <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}" > <div className='flex items-start space-x-3'>' <img' src={reply.author.avatar} alt={reply.author.name}' className='w-8 h-8 rounded-full' / / />' <div className='flex-1'>' <div className='flex items-center space-x-2 mb-2'>' <span className='font-medium text-zion-cyan'>' {reply.author.name}' </span>' <span className='text-xs text-zion-slate-light'>' {new Date(reply.createdAt).toLocaleDateString()}' </span> {reply.isSolution && (' <span className='text-xs bg-green-500 text-white px-2 py-1 rounded'>' Solution' </span> )} </div>' <p className='text-zion-slate-light text-sm'>{reply.content}</p>' <div className='flex items-center space-x-4 mt-2 text-xs text-zion-slate-light'>' <button className='"hover": text-zion-cyan'>' Like: ({reply.like,s})' </button>' <button className='"hover": text-zion-cyan'>Reply</button>' {canMarkAnswer: && onMarkAnswer && (' <button onClick={onMarkAnswe,r}' className='"hover": text-zion-cyan: text-green-500' >' Mark as Answer ''';,"
=======
import React from\';react\'';\"export\": default function ReplyCard({\' reply,className = \',\' onMarkAnswer,canMarkAnswer}) {\' return() <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}\" > <div className=\'flex items-start space-x-3\'>\' <img\' src={reply.author.avatar} alt={reply.author.name}\' className=\'w-8 h-8 rounded-full\' / / />\' <div className=\'flex-1\'>\' <div className=\'flex items-center space-x-2 mb-2\'>\' <span className=\'font-medium text-zion-cyan\'>\' {reply.author.name}\' </span>\' <span className=\'text-xs text-zion-slate-light\'>\' {new Date(reply.createdAt).toLocaleDateString()}\' </span> {reply.isSolution && (\' <span className=\'text-xs bg-green-500 text-white px-2 py-1 rounded\'>\' Solution\' </span> )} </div>\' <p className=\'text-zion-slate-light text-sm\'>{reply.content}</p>\' <div className=\'flex items-center space-x-4 mt-2 text-xs text-zion-slate-light\'>\' <button className=\'"hover\": text-zion-cyan\'>\' Like: ({reply.like,s})\' </button>\' <button className=\'"hover\": text-zion-cyan\'>Reply</button>\' {canMarkAnswer: && onMarkAnswer && (\' <button onClick={onMarkAnswe,r}\' className=\'"hover\": text-zion-cyan: text-green-500\' >\' Mark as Answer \''\';\',\"
const React from";react"";export: default function ReplyCard({" reply,className = "," onMarkAnswer,canMarkAnswer}) {" return() <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}" > <div className="flex items-start space-x-3">" <img" src={reply.author.avatar} alt={reply.author.name}" className="w-8 h-8 rounded-full" / / />" <div className="flex-1">" <div className="flex items-center space-x-2 mb-2">" <span className="font-medium text-zion-cyan">" {reply.author.name}" </span>" <span className="text-xs text-zion-slate-light">" {new Date(reply.createdAt).toLocaleDateString()}" </span> {reply.isSolution && (" <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">" Solution" </span> )} </div>" <p className="text-zion-slate-light text-sm">{reply.content}</p>" <div className="flex items-center space-x-4 mt-2 text-xs text-zion-slate-light">" <button className="hover: text-zion-cyan">" Like: ({reply.like,s})" </button>" <button className="hover: text-zion-cyan">Reply</button>" {canMarkAnswer: && onMarkAnswer && (" <button onClick={onMarkAnswe,r}" className="hover: text-zion-cyan: text-green-500" >" Mark as Answer """;","""`"`
import _React from';react'';"export": default function ReplyCard({' reply,className = ',' onMarkAnswer,canMarkAnswer}) {' return() <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}" > <div className='flex items-start space-x-3'>' <img' src={reply.author.avatar} alt={reply.author.name}' className='w-8 h-8 rounded-full' / / />' <div className='flex-1'>' <div className='flex items-center space-x-2 mb-2'>' <span className='font-medium text-zion-cyan'>' {reply.author.name}' </span>' <span className='text-xs text-zion-slate-light'>' {new Date(reply.createdAt).toLocaleDateString()}' </span> {reply.isSolution && (' <span className='text-xs bg-green-500 text-white px-2 py-1 rounded'>' Solution' </span> )} </div>' <p className='text-zion-slate-light text-sm'>{reply.content}</p>' <div className='flex items-center space-x-4 mt-2 text-xs text-zion-slate-light'>' <button className='"hover": text-zion-cyan'>' Like: ({reply.like,s})' </button>' <button className='"hover": text-zion-cyan'>Reply</button>' {canMarkAnswer: && onMarkAnswer && (' <button onClick={onMarkAnswe,r}' className='"hover": text-zion-cyan: text-green-500' >' Mark as Answer ''';,"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

=======
import React from 'react';'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const ReplyCard.js = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>ReplyCard.js</h1>
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
