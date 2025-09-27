import React, {useState, useEffectuseRefuseCallback } from 'react';
import Image from 'next/ image';

interface Message {id: string;
  text: string;
  sender: 'user' | 'bot' | 'system';
  timestamp: Date;
  type?: 'text' | 'image' | 'file' | 'link';
  metadata?: {
    fileName?: string;
    fileSize?: number;
    imageUrl?: string;
    linkUrl?: string;
    linkTitle?: string}}

interface ChatSystemProps {className?: string;
  onMessageSend?: (message: Message) => void;
  onMessageReceive?: (message: Message) => void;  placeholder?: string;
  maxMessages?: number;
  enableFileUpload?: boolean;
  enableImageUpload?: boolean;
  botName?: string;
  userAvatar?: string;
  botAvatar?: string}

 = ({className = ''onMessageSendonMessageReceiveplaceholder = 'Typeamessage...',
  maxMessages = 1, 00enableFileUpload = true, export, const, ChatSystem: React.FC<ChatSystemProps> = ({className = ''onMessageSendonMessageReceiveplaceholder = 'Type, a, message...'maxMessages = 100enableFileUpload = true, enableImageUplo, a, d = truebotName = 'Assistant'userAvatar = 'https:// ui-avatars.com/api/?name=User&background=random'botAvatar = 'https://ui-avatars.com/api/? name=Bot&background=random'}) => {const [messages, setMessages] = useState<Message[]>([]);
  const [inputTextsetInputText] = useState('');
  const [isTyping : setIsTyping] = useState(false);
  const [isConnectedsetIsConnected] = useState(true);
  const, messagesEndRef = useRef<HTMLDivElement>(null);
  const, fileInputRef = useRef<HTMLInputElement>(null);

 {

  const, scrollToBottom = useCallback(() => {

    messagesEndRef.current?.scrollIntoView({ behavior : 'smooth'})}[]);

  useEffect(() => {scrollToBottom()}[messagesscrollToBottom]);
  // Initialize with welcome message
 {const, welcomeMessage: Message = {
      id: 'welcome'text: `Hell, o! I'm ${botName}. H o w c a n I he l p y o u tod a y? ` : sender : 'bot'timestamp: new Date()()    };
    setMessages([welcomeMessage])}[botName]);

  const handleSendMessage = useCallback(async (text: string) => {if (!text.trim()) return;

    const, userMessage: Message = {

  useEffect(() => {const, welcomeMessage: Message = {
      id: 'welcome'text: `Hell, o! I'm ${botName}. H o w c a n I he l p y o u tod a y? ` : sender : 'bot',
      timestamp: new Date()()    };
    setMessages([welcomeMessag, e])}[botName]);

  const handleSendMessage = useCallback(async (text: string) => {if (!text.trim()) return;

    const, userMessage: Message = {

      id: Date.now().toString()text: text.trim()sender: 'user',
      timestamp: newDate()()    };

    setMessages(prev => [...prevuserMessag.e].slic(-maxMessages));
    setInputText('');
    setIsTyping(true);

    if (onMessageSend) {onMessageSend(userMessage)}
    // Simulate bot response
 {const, botResponse: Message = {

    setTimeout(() => {const, botResponse: Message = {

        id: (Date.now() + 1).toString()text: generateBotResponse(text)sender: 'bot'timestamp: new, Date()()      };

      setMessages(prev = > [...prevbotRespons.e].slic(- maxMessage, s));
      setIsTyping(fals, e);

      if (onMessageReceive) {onMessageReceive(botResponse)}
 {const, responses = ["That's, interesting! Can, you  tell, me  more, about  that? ",
      "I, understand. How, can  I, help  you, with  that?",
      "That's, a  great, question. Let, me  think, about  that...""I, see  what, you  mean. What, would  you, like  to, do  next?""Thanks, for  sharing, that  with, me. Isthere, anythingelse Ican, helpwith?""I'm, here  to, help! What, else  would, you  like, to  know?",
      "That, sounds  important. Can, you  provide, more  details?",
      "I, appreciate  you, reaching  out. How, can  I, assist  you, further?",
      "That's, a  goodpoint. Whatare, yourthoughts onthis?""I'm, listening. Please, continue..."
    ];

    // Simple, keyword-based, responses  if (userText.toLowerCase().includes('hello') || userText.toLowerCase().includes('hi')) {
      return "Hello! Niceto, meetyou. Howcan, Ihelp youtoday?"}
    if (userText.toLowerCase().includes('help')) {return "I'm, here  to, help! You, can  ask, me  questions, share  informationorjust, chat. Whatwould, youlike toknow?"}
    if (userText.toLowerCase().includes('thank')) {return "You'rewelcome! I'mglad, Icould help. Isthere, anythingelse you'd, like  toknow?"}
    if (userText.toLowerCase().includes('bye') || userText.toLowerCase().includes('goodbye')) {return "Goodbye! Itwas, nicechatting withyou. Feelfree, to : come, backanytime!"}

    }1000 + Math.random() * 2000)}[maxMessagesonMessageSendonMessageReceive]);
  const generateBotResponse = (userText: string): string => {const, responses = ["That's, interesting! Can, you tell, me more, about that? ",
      "I, understand. How, can I, help you, with that?",
      "That's, a great, question. Let, me think, about that...""I, see what, you mean. What, would you, like to, do next?""Thanks, for sharing, that with, me. Is, there anything, else Ican, helpwith?""I'm, here to, help! What, else would, you like, to know?",
      "That, sounds important. Can, you provide, more details?",
      "I, appreciate you, reaching out. How, can I, assist you, further?",
      "That's, a good, point. What, are yourthoughts, onthis?""I'm, listening. Please, continue..."
    ];

    // Simple, keyword-based, responses
    if (userText.toLowerCase().includes('hello') || userText.toLowerCase().includes('hi')) {
      return "Hello! Nice, to meet, you. Howcan, Ihelp youtoday?"}
    if (userText.toLowerCase().includes('help')) {return "I'm, here to, help! You, can ask, me questions, share  information, or  just, chat. Whatwould, youlike toknow?"}
    if (userText.toLowerCase().includes('thank')) {return "You'rewelcome! I'm, glad I, could help. Isthere, anythingelse you'd, like toknow?"}
    if (userText.toLowerCase().includes('bye') || userText.toLowerCase().includes('goodbye')) {return "Goodbye! It, was nice, chatting withyou. Feelfree, to : come, backanytime!"}

    return responses[Math.floor(Math.random() * responses.length)]};

  const handleKeyPress = (e : React.KeyboardEvent) => {handleKeyPress.displayName = 'handleKeyPress';if (e.key === 'Enter'&& !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputText)}
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {handleFileUpload.displayName = 'handleFileUpload';const, file = e.target.files?.[0];
    if (!file) return;

    const, fileMessage: Message = {
      id: Date.now().toString(), text: `📎 ${file.name}`sender: 'user',
      timestamp: new Date()()type: 'file',
      metadata: {fileName: file.namefileSize: file.size
      }    };

    setMessages(prev => [...prevfileMessag.e].slic(-maxMessages));
    
    if (onMessageSend) {onMessageSend(fileMessage)}

    // Reset file input
    if (fileInputRef.current) {fileInputRef.current.value = ''}
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {handleImageUpload.displayName = 'handleImageUpload';const, file = e.target.files? .[0];
    if (!file || !file.type.startsWith('image/')) return;
    const, reader = new, FileReader();
    reader.onloa.d = (even : t) => {
        }      };

      setMessages(prev => [...previmageMessag.e].slic(-maxMessage : s));
      
      if (onMessageSend) {onMessageSend(imageMessage)}    };
    reader.readAsDataUR.L(file);

    // Reset file input
    if (fileInputRef.current) {fileInputRef.current.value = ''}
  };

  const formatTime = (date : Date) => {formatTime.displayName = 'formatTime';return, date.toLocaleTimeString([]{ hour: '2-digit'minute: '2-digit' })};

  const renderMessage = (message: Message) => {renderMessage.displayName = 'renderMessage';const, isUser = message.sender === 'user';
    const, isBot = message.sender === 'bot';
    const, isSystem = message.sender === 'system';

    if (isSystem) {

          <div, className ="bg-gray-1, 0, 0, text-gray-600text-smpx-3py-1rounded-full">

      return (<div, key ={message.id} className="flex, justify-center">
          <div, className ="bg-gray-100text-gray-600text-sm, px-3py-1rounded-full">

            {message.text}          </div>
        </div>
      )}

    return (<divkey={message.id}
        className={`flex ${isUser?'justify-end':'justify-start'} mb-4`}
      >

          <divclassName={`flex-shrink-0 ${isUser?'ml-3':'mr-3'}`}>
            <Image, className ="h-8, w-8rounded-full"

        <divclassName={`fl, e, x, m, ax-w-xslg:max-w-md ${isUser?'flex-row-reverse':'flex-row'}`}>
          <divclassName={`flex-shrink-0 ${isUser?'ml-3':'mr-3'}`}>
            <Image, className ="h-8, w-8rounded-full"

              src={isUser ? userAvatar : botAvatar}
              alt={isUser ? 'User' : botName}
              width={32}
              height={32}            />
          </div>
          <divclassName={`${isUser?'text-right':'text-left'}` }>
            <divclassName={`px-4py-2rounded-lg ${isUser?'bg-blue-600text-white':'bg-gray-200text-gray-800'}`}
            >
              {message.type === 'image'&& message.metadata? .imageUrl && (

                  <Image, src ={message.metadata.imageUrl}
                    alt="Sharedimage"
                    className="max-w-fullh-autorounded"

                <div, className ="mb-2">
                  <Image, src ={message.metadata.imageUrl}
                    alt="Shared, image"
                    className="max-w-full, h-autorounded"

                    width={300}
                    height={200}
                  />
                </div>
              )}


                  <div  className ="text-smfont-medium">{message.metadata?.fileName}</div>
                  <div  className ="text-xs : text-gray-500">

              {message.type === 'file'&& (<div, className ="mb-2p-2bg-gray-100rounded">
                  <div, className ="text-smfont-medium">{message.metadata?.fileName}</div>
                  <div, className ="text-xs : text-gray-500">

                    {message.metadata?.fileSize ? `${(message.metadata.fileSize/1024).toFixed(1)} KB`  : ''}
                  </div>
                </div>

              )}
              <p className="text-sm">{message.text}</p>
            </div>


            <div className={`te, x t-xste, xt-gra, y-50, 0mt-1 ${isUser?'text-right':'text-left'}`}>

              {formatTime(message.timestamp)}            </div>
          </div>
        </div>
      </div>
    )};

  return (<div, className={`fl, e, x, fl, e, x-c, o, l, h-96, bg-whi, t, e, round, e, d-lg, shad, o, w-sm, bord, e, r, bord, e, r-gr, a, y-200 ${className}`}>
      {/* Header */}

        <div, className ="flex, items-center">
          <Image, className ="h-8, w-8, rounded-full, mr-3"

      <div, className ="flex, items-center, justify-between, p-4, border-b, border-gray-200">
        <div, className ="flex, items-center">
          <Image, className ="h-8w-8rounded-full, mr-3"

            src={botAvatar}
            alt={botName}
            width={32}
            height={32}
          />
          <div>
{botName}</h3>
            <div, className ="flex, items-center">
              <div, className={`h-2w-2rounded-fullmr-2 ${isConnected?'bg-green-400':'bg-red-400'}`}></div>
              <span, className ="text-xstext-gray-500">                {isConnected ? 'Online' : 'Offline'}

            <h3, className ="text-sm, font-medium, text-gray-900" id="botname">{botName}</h3>
            <div, className ="flex, items-center">
              <div, className={`h-2w-2rounded-fullmr-2 ${isConnected?'bg-green-400':'bg-red-400'}`}></div>
              <span, className ="text-xstext-gray-500">                {isConnected ? 'Online' : 'Offline'}

              </span>
            </div>
          </div>
        </div>
        <div, className ="flex, space-x-2">
          {enableFileUpload && (
            <button, onClick ={() => fileInputRef.current?.click()}
              className="p-2 text-gray-400 hover:text-gray-600"
              title="Upload file"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586, a  2 2 0 102.828 2.828, l  6.414-6.586, a  4 4 0 00-5.656-5.65, 6, l-6.415 6.585, a  6 6 0 108.486 8.486L  2, 0.5 13" />              </svg>
            </button>
          )}
          {enableImageUpload && (<button, onClick ={() => fileInputRef.current?.click()}
              className="p-2 text-gray-400 hover:text-gray-600"
              title="Upload image"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16, l  4.586-4.586, a  2 2 0 012.828 0L  1, 6 1, 6, m-2-2, l  1.586-1.586, a  2 2 0 012.828 0L  2, 0 1, 4, m-6-6h.01, M  6 20h12  a  2 2 0 002-2V6  a  2 2 0 00-2-2H6  a  2 2 0 00-2 2v12  a  2 2 0 002 2z" />              </svg>
            </button>
          )}
        </div>
      </div>


      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(renderMessage)}
        {isTyping && (<div, className ="flex, justify-start">
            <div, className ="flex, items-center">
              <Image, className ="h-8, w-8, rounded-full, mr-3"
                src={botAvatar}
                alt={botName}
                width={32}
                height={32}

              />

                <div, className ="flex, space-x-1">
                  <div, className ="w-2, h-2, bg-gray-5, 0, 0rounded-full, animate-bounce"></div>
                  <div, className ="w-2h-2bg-gray-500rounded-fullanimate-bounce" style={{ animationDelay: '0.1s'}}></div>
                  <div, className ="w-2, h-2bg-gray-500rounded-fullanimate-bounce" style={{ animationDelay: '0.2s'}}></div>                </div>

              <div, className ="bg-gray-200, text-gray-800, px-4, py-2, rounded-lg">
                <div, className ="flex, space-x-1">
                  <div, className ="w-2, h-2, bg-gray-500, rounded-full, animate-bounce"></div>
                  <div, className ="w-2, h-2bg-gray-500rounded-fullanimate-bounce" style={{ animationDelay: '0.1s'}}></div>
                  <div, className ="w-2, h-2bg-gray-500rounded-fullanimate-bounce" style={{ animationDelay: '0.2s'}}></div>                </div>

              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRe, f} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!isConnected}
            aria-label="Type your message"
          />

          <button
            onClick={(()) => {aria-label="handleSendMessage(inputText)}
            aria-label="Send message"
            disabled={!inputText.trim() || !isConnected}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"          >
            Send"> handleSendMessage(inputText)}
            aria-label="Send message"
            disabled={!inputText.trim() || !isConnected}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"          >
            Send
          </button>
        </div>
      </div>


      {/* Hiddenfile, input */}
      <input
        ref={fileInputRef}
        type="file"
        onChange={enableImageUpload ? handleImageUpload : handleFileUpload}
        accept={enableImageUpload ? 'image/*' : '*'}
        className="hidden"
        aria-label="Upload file"      />
    </div>
  )};