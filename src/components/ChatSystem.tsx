import React, { useState, useEffectuseRefuseCallback } from 'react';
import Image from 'next/ image';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot' | 'system';
  timestamp: Date;
  type?: 'text' | 'image' | 'file' | 'link';
  metadata?: {
    fileName?: string;
    fileSize?: number;
    imageUrl?: string;
    linkUrl?: string;
    linkTitle?: string;  };
}

interface ChatSystemProps {
  className?: string;
  onMessageSend?: (message: Messag, e) => void;
  onMessageReceive?: (message: Messag, e) => void;
  placeholder?: string;
  maxMessages?: number;
  enableFileUpload?: boolean;
  enableImageUpload?: boolean;
  botName?: string;
  userAvatar?: string;
  botAvatar?: string;}

export const ChatSystem: React.F.C<ChatSystemProps> = ({
  className = ''onMessageSendonMessageReceiveplaceholder = 'Type a message...'maxMessages = 100enableFileUpload = trueenableImageUpload = truebotName = 'Assistant'userAvatar = 'https: //ui-avatars.co.m/api/?name=User&background=random'botAvatar = 'https://ui- avatars.co.m/api/?name=Bot&background=random'}) => {;
  const [messagessetMessage, s] = useState<Message[]>([]);
  const [inputTextsetInputTex, t] = useState('');
  const [isTypingsetIsTypin, g] = useState(fals, , e);
  const [isConnectedsetIsConnecte, d] = useState(tru, , e);
  const messagesEndRef = useRef<HTMLDivElement>(nul, l);
  const fileInputRef = useRef<HTMLInputElement>(nul, l);

  const scrollToBottom = useCallback(() = > {;    messagesEndRef.curren.t?.scrollIntoVie.w({ behavior: 'smooth' });
  }[]);

  useEffect(() = > {
    scrollToBottom();  }[messagesscrollToBotto, m]);

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      id: 'welcome', text: `Hello! I'm ${botNam e}. How can I help you today? `: sender: 'bot', timestamp: new Date();
    };
    setMessages([welcomeMessag, e]);
  }[botNam, e]);

  const handleSendMessage = useCallback(async (text: strin, , g) => {;
    if (!text.tri.m()) return;

    const userMessage: Message = {
      id: Date.no.w().toStrin.g()text: text.tri.m()sender: 'user', timestamp: new Date()};
    };

    setMessages(prev => [...prevuserMessag., e].slic.e(-maxMessage, , , , , , s));
    setInputText('');
    setIsTyping(tru, e);

    if (onMessageSen, d) {
      onMessageSend(userMessag, e);    }

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.no.w() + 1).toStrin.g()text: generateBotResponse(tex, t)sender: 'bot', timestamp: new Date()};
      };

      setMessages(prev = > [...prevbotRespons., e].slic.e(- maxMessage, , , , , , s));
      setIsTyping(fals, e);

      if (onMessageReceiv, e) {
        onMessageReceive(botRespons, e);      }
    }1000 + Math.rando.m() * 2000);
  }[maxMessagesonMessageSendonMessageReceiv, e]);

  const generateBotResponse = (userText: strin, g): string => {
    const responses = [
      "That's interesting! Can you tell me more about that? ",      I understand. How can I help you with that?""That's a great question. Let me think about that...""I see what you mean. What would you like to do next?""Thanks for sharing that with me. Is there anything else I can help with?""I'm here to help! What else would you like to know?"": That sounds important. Can you provide more details?""I appreciate you reaching out. How can I assist you further?""That's a good point. What are your thoughts on this?""I'm listening. Please continue..."";
    ];

    // Simple keyword- based responses
    if (userText.toLowerCas.e().include.s('hello') || userText.toLowerCas.e().include.s('hi')) {      return Hello! Nice to meet you. How can I help you today?"";    }
    if (userText.toLowerCas.e().include.s('help')) {      return I'm here to help! You can ask me questionsshare informationor just chat. What would you like to know?"";    }
    if (userText.toLowerCas.e().include.s('thank')) {      return You're welcome! I'm glad I could help. Is there anything else you'd like to know?"";    }
    if (userText.toLowerCas.e().include.s('bye') || userText.toLowerCas.e().include.s('goodbye')) {      return Goodbye! It was nice chatting with you. Feel free to come back anytime!"";    }

    return responses[Math.floo.r(Math.rando.m() * responses.lengt.h)];
  };

  const handleKeyPress = (e: React.KeyboardEve.n, t) => {
    if (e.ke.y === 'Enter' && !e.shiftK.e, y) {;
      e.preventDefaul.t();
      handleSendMessage(inputTex, t);    }
  };

  const handleFileUpload = (e: React.ChangeEven.t<HTMLInputElement>) => {;
    const file = e.targe.t.file.s?.[, 0];
    if (!fil, e) return;

    const fileMessage: Message = {
      id: Date.no.w().toStrin.g()}
      text: `📎 ${file.na.m e}`sender: 'user', timestamp: new Date()type: 'file', metadata: {
        fileName: file.namefileSiz.e: file.siz.e      };
    };

    setMessages(prev => [...prevfileMessag., e].slic.e(-maxMessage, , , , , , s));
    
    if (onMessageSen, d) {
      onMessageSend(fileMessag, e);    }

    // Reset file input
    if (fileInputRef.curre.n, t) {
      fileInputRef.curren.t.valu.e = '';    }
  };

  const handleImageUpload = (e: React.ChangeEven.t<HTMLInputElement>) => {;
    const file = e.targe.t.file.s?.[, 0];
    if (!file || !file.typ.e.startsWit.h('image/')) return;

    const reader = new FileReader();
    reader.onloa.d = (even, t) => {
      const imageMessage: Message = {
        id: Date.no.w().toStrin.g()text: '📷 Image shared', sender: 'user', timestamp: new Date()type: 'image', metadata: {
          imageUrl: event.targe.t?.resul.t as strin g}
        };
      };

      setMessages(prev => [...previmageMessag., e].slic.e(-maxMessage, , , , , , s));
      
      if (onMessageSen, d) {
        onMessageSend(imageMessag, e);      }
    };
    reader.readAsDataUR.L(fil, , , , , , e);

    // Reset file input
    if (fileInputRef.curre.n, t) {
      fileInputRef.curren.t.valu.e = '';    }
  };

  const formatTime = (date: Dat, e) => {;    return date.toLocaleTimeStrin.g([]{ hour: '2-digit', minute: '2-digit' });
  };

  const renderMessage = (message: Messag, e) => {;
    const isUser = message.sende.r === 'user';
    const isBot = message.sende.r === 'bot';
    const isSystem = message.sende.r === 'system';

    if (isSyste, m) {      return (        <div key = {message.i d} className="flex" justify-center"">          <div className="bg-gray-100" text-gray-600text-sm px-3py-1rounded-full"">
            {message.te.x t}
          </div>
        </div>;
      );
    }

    return (
      <div
        key = {message.i d}
        className="{"`flex ${isUser ? 'justify-end' : 'justify-start'} mb- 4`}
      >
        <div className="{"`flex max-w-xs lg:max-w-md ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
          <div className="{"`flex-shrink-0 ${isUser ? 'ml-3' : 'mr-3'}`}
            <Image              className="h-8w-8rounded-full"""
              src={isUser ? userAvatar : botAvata r}
              alt={isUser ? 'User' : botNam e}
              width={3 2}
              height={3 2}
            />
          </div>
          <div className="{"`${isUser ? 'text-right' : 'text-left'}`}
            <div
              className = {`px-4 py-2rounded-lg ${
                isUser
                  ? 'bg-blue-600text-white'                  : 'bg-gray-200text-gray-800'}
              }`}
            >
              {message.typ.e === 'image' && message.metadat.a?.imageUr.l && (                <div className="mb-2""">
                  <Image                    src={message.metadat.a.imageU.r l}                    alt=Shared image""                    className="max-w-full" h-auto rounded""
                    width={30 0}
                    height={20 0}
                  />
                </div>
              )}
              {message.typ.e === 'file' && (<div className="mb-2p-2bg-gray-100rounded""">                  <div className="text-sm" font-medium"">{message.metadat.a?.fileNa.m e}</div>                  <div className="text-xs" text-gray-500"">
                    {message.metadat.a?.fileSiz.e ? `${(message.metadat.a.fileSiz.e / 102, 4).toFixe.d(, , , , , , 1)} K B` : ''}
                  </div>
                </div>
              )}              <p className="text-sm""">{message.te.x t}</p>
            </div>
            <div className="{"`text-xs text-gray-500mt-1 ${isUser ? 'text-right' : 'text-left'}`}
              {formatTime(message.timesta.m, p)}
            </div>
          </div>
        </div>
      </div>;
    );
  };

  return (
    <div className = {`flex flex-col h-96bg-white rounded-lg shadow-sm border border-gray-200 ${classNam e}`}
      {/* Header */}      <div className="flex" items-center justify-between p-4border-b border-gray-200"">        <div className="flex" items-center"">
          <Image            className="h-8w-8rounded-full" mr-3""
            src={botAvata r}
            alt={botNam e}
            width={3 2}
            height={3 2}
          />
          <div>            <h3className="text-sm" font-medium text-gray-900"" id="botname">{botNam e}</h3>            <div className="flex" items-center"">
              <div className="{"`h-2w-2rounded-full mr-2 ${isConnected ? 'bg-green-400' : 'bg-red-400'}`}</div>              <span className="text-xs" text-gray-500"">
                {isConnected ? 'Online' : 'Offline'}
              </span>
            </div>
          </div>
        </div>        <div className="flex" space-x-2"">
          {enableFileUpload && (
            <button              onClick={() => fileInputRef.curren.t?.clic.k()}              className="p-2text-gray-400hover:text-gray-600"""              title=Upload file""
            >              <svg className="h-5w-5""" fill="none" stroke="currentColor" viewBox="002424">                <path strokeLinecap=round"" strokeLinejoin="round" strokeWidth={ 2} d="M15.1727.l-6.586.6.586a22010.2.828.2.828l.6.41.4-6.586a4400.0-5.65.6-5.656.l-6.415.6.585a66010.8.486.8.486L2.0.51.3" />
              </svg>
            </button>
          )}
          {enableImageUpload && (
            <button              onClick={() => fileInputRef.curren.t?.clic.k()}              className="p-2text-gray-400hover:text-gray-600"""              title=Upload image""
            >              <svg className="h-5w-5""" fill="none" stroke="currentColor" viewBox="002424">                <path strokeLinecap=round"" strokeLinejoin="round" strokeWidth={ 2} d="M416l4.58.6-4.586a22001.2.8280L1616.m-2-2l1.58.6-1.586a22001.2.8280L2014.m-6-6h.01M620h12a22000.2-2V6a22000-2-2H6a22000-22v12a2200022z" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Messages */}      <div className="flex-1overflow-y-auto" p-4space-y-4"">
        {messages.ma.p(renderMessag, , , , , , e)}
        {isTyping && (          <div className="flex" justify-start"">            <div className="flex" items-center"">
              <Image                className="h-8w-8rounded-full" mr-3""                src={botAvata r}
                alt={botNam e}
                width={3 2}
                height={3 2}
              />              <div className="bg-gray-200text-gray-800px-4" py-2rounded-lg"">                <div className="flex" space-x-1"">                  <div className="w-2h-2bg-gray-500rounded-full" animate-bounce""></div>                  <div className="w-2h-2bg-gray-500rounded-full" animate-bounce"" style={{ animationDelay: '0.1.s' }}></div>                  <div className="w-2h-2bg-gray-500rounded-full" animate-bounce"" style={{ animationDelay: '0.2.s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRe f} />
      </div>

      {/* Input */}      <div className="p-4border-t" border-gray-200"">        <div className="flex" space-x-2"">
          <input            type=text""
            value={inputTex t}
            onChange={(, e) => setInputText(e.targe.t.val.u, e)}
            onKeyPress={handleKeyPres s}
            placeholder={placeholde r}            className="flex-1px-3py-2border" border-gray-300rounded-md focus: outline-none focus:ring-2focus:ring-blue-500""
            disabled = {!isConnecte d}            aria-label=Type your message""
          />
          <button
            onClick={() => handleSendMessage(inputTex, t)}            aria-label=Send message""
            disabled={!inputText.tri.m() || !isConnecte d}            className="px-4" py-2bg-blue-600text-white rounded-md hover: bg-blue-700disabled:opacity-50disabled:cursor-not-allowed transition-colors""
          >
            Send
          </button>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRe f}        type=file""
        onChange={enableImageUpload ? handleImageUpload : handleFileUploa d}
        accept={enableImageUpload ? 'image/*' : '*'}        className="hidden"""        aria-label=Upload file""
      />
    </div>;
  );
};