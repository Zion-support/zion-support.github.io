<<<<<<< HEAD
import React,{ useState,useRef,useEffect } from';react' import { Button } from '../ui/Button''';' import { Send } from 'lucide-react' export function ChatInput({ onSend,disabled = false }) { const [message,setMessage] = useState('';';) const inputRef = useRef(null) useEffect(() => {'';''}
import React,{ useState,useRef,useEffect } from';react' import { Button } from '../ui/Button''';' import { Send } from 'lucide-react' export function ChatInput({ onSend,disabled = false }) { const [message,setMessage] = useState('', ') const inputRef = useRef(null) useEffect(() => {'';''}
=======
import React from 'react';

const ChatInput = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ChatInput</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ChatInput;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
